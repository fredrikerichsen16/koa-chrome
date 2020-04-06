import uniqBy from 'lodash.uniqBy';

export default class PageSearch {
    constructor(query, options = {fromWebsite: undefined, nPages: 6}) {
        /**
         * {
         *     fromWebsite: String - only find results from this website,
         *     nPages: (limit) number of pages to show. Applies to both history results and bookmarks results.
         * }
         */
        this.query = query.toLowerCase();
        this.options = options;
    }

    async search() {
        let history = await this.getPages('history');
        let bookmarks = await this.getPages('bookmarks');

        let suggestedWebsite = this.getSuggestedWebsite();
        let pages = history.concat(bookmarks);

        pages = this.process(pages);
        pages = this.sortPages(pages);
        pages = this.returnPages(pages);
        pages.unshift(suggestedWebsite);

        pages = pages.filter(x => x);

        return pages;
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

    sortPages(pages) {
        pages = pages.filter(page => {
            return page.titleLower.includes(this.query);
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

    returnPages(pages) {
        pages = pages.slice(0, this.options.nPages);

        // pages.map(function(page) {
        //     return {
        //         type: 'link',
        //         url: page.url,
        //         content: {
        //             title: page.title,
        //             favicon: page.favicon,
        //         }
        //     }
        // });

        let result = [];
        for(let page of pages) {
            result.push({
                type: 'link',
                url: page.url,
                content: {
                    text: page.title,
                    favicon: page.favicon
                }
            });
        }

        return result;
    }

    getSuggestedWebsite() {
        if(this.query === 'university of leiden')
        {
            return {
                type: 'link',
                url: 'https://www.universiteitleiden.nl',
                suggested: true,
                content: {
                    text: 'Leiden University',
                    favicon: this.getFaviconOfUrl('https://www.universiteitleiden.nl')
                }
            }
        }

        if(this.query === 'ucl uk')
        {
            return {
                type: 'link',
                url: 'https://www.ucl.ac.uk/',
                suggested: true,
                content: {
                    text: 'University College London',
                    favicon: this.getFaviconOfUrl('https://www.ucl.ac.uk/')
                }
            }
        }

        return null;
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

    getPages(source) {
        return new Promise((resolve) => {
            let api, arg;
            if(source === 'history') {
                api = chrome.history;
                arg = { text: this.query };
            } else if(source == 'bookmarks') {
                api = chrome.bookmarks;
                arg = this.query;
            } else {
                throw new Error('ERROR #4892483924234');
            }

            api.search(arg, (pages, error) => {
                if (error) {
                    resolve([]);
                }
                if(pages.length < 1) resolve([]);

                if(source === 'bookmarks') {
                    pages = this.flattenBookmarks(pages);
                }

                resolve(pages);

                // pages = this.process(pages, query);
                // pages = this.sortPages(pages, query);
                //
                // resolve( this.returnPages(pages,'History') );
            });
        });
    }
}