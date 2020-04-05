import PageSearch from './services/PageSearch';

export default class Websites {

    static async last(query) {
        if(query.length < 3) return [];

        let ps = new PageSearch(query);
        let result = await ps.search();

        return result;
    }

}