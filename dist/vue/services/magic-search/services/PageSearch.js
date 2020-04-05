import uniqBy from 'lodash.uniqBy';

export default class PageSearch {
    constructor(options = {fromWebsite: undefined, nPages: 4}) {
        /**
         * {
         *     fromWebsite: String - only find results from this website,
         *     nPages: (limit) number of pages to show. Applies to both history results and bookmarks results.
         * }
         */
        this.options = options;
    }

    async search(query) {
        query = query.toLowerCase();
        let result = [await this.searchHistory(query), await this.searchBookmarks(query)];
        result = result.filter(x => x);

        return result;
    }

    getFaviconOfUrl(url) {
        return 'https://www.google.com/s2/favicons?domain=' + url;
    }

    process(pages) {
        if(this.options.fromWebsite)
        {
            pages = pages.filter(page => {
                page.url.includes(this.options.fromWebsite);
            });
        }

        for(let page of pages)
        {
            page.urlLower = page.url.toLowerCase();
            page.titleLower = page.title.toLowerCase();
            page.favicon = this.getFaviconOfUrl(page.url);
        }

        return pages;
    }

    flattenBookmarks(bookmarks) {
        let result = [];

        function flatten(nodes) {
            nodes.forEach(function (node) {
                if (node.title && node.url) {
                    result.push(node);
                }

                if (node.children) {
                    flatten(node.children);
                }
            });
        };

        flatten(bookmarks);

        return result;
    }

    sortPages(pages, query) {
        pages = pages.filter(page => {
            return page.titleLower.includes(query);
        }).reverse();

        pages = uniqBy(pages, 'url');

        let heuristic;
        pages.forEach((page) => {
            heuristic = page.urlLower.matchAll(/(\/\w|\?|\&)/gi);
            heuristic = Array.from(heuristic);
            heuristic = heuristic.length;
            page.lengthHeuristic = heuristic;
        });

        pages.sort(function(a, b) {
            return a.lengthHeuristic - b.lengthHeuristic;
        });

        return pages;
    }

    returnPages(pages, header) {
        let obj = {
            type: 'link',
            header: header,
            itemsType: 'bookmarks',
            items: []
        };

        pages = pages.slice(0, this.options.nPages);
        pages.map((page) => {
            return { url: page.url, title: page.title, favicon: page.favicon };
        });

        obj.items = pages;

        return obj;
    }

    searchHistory(query) {
        return new Promise((resolve) => {
            chrome.history.search({ text: query }, (pages, error) => {
                if (error) {
                    resolve(null);
                }
                if(pages.length < 1) resolve(null);

                pages = this.process(pages, query);
                pages = this.sortPages(pages, query);

                resolve( this.returnPages(pages,'History') );
            });
        });
    }

    searchBookmarks(query) {
        return new Promise((resolve) => {
            chrome.bookmarks.search(query, (pages, error) => {
                if (error) {
                    resolve(null);
                }
                if (pages.length < 1) resolve(null);

                pages = this.flattenBookmarks(pages);
                pages = this.process(pages, query);
                pages = this.sortPages(pages, query);

                resolve( this.returnPages(pages, 'Bookmarks') );
            });
        });
    }
}