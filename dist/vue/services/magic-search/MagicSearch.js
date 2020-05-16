import Calculator from './Calculator.js';
import Conversion from './Conversion.js';
import Currency from './Currency.js';
import Websites from './Websites.js';
import SuggestedWebsite from './SuggestedWebsite.js';

export default class MagicSearch {

    constructor() {
        // this.searchers = [Calculator, Currency, Conversion];
    }

    immediateSearch(query, cb) {
        this.runSearch(query, Websites)
            .then((result) => {
                return cb(result);
            });
    }

    async delayedSearch(query) {
        let calculatorResult = await this.runSearch(query, Calculator);
        let conversionResult = await this.runSearch(query, Conversion);
        let currencyResult = await this.runSearch(query, Currency);

        let result = [calculatorResult, conversionResult, currencyResult];

        result = result.filter(item => item);

        return result;
    }

    async runSearch(query, Searcher) {
        if(Searcher.hasOwnProperty('first') && !Searcher.first(query)) return null;

        if(Searcher.hasOwnProperty('second') && !Searcher.second(query)) return null;

        if(!Searcher.hasOwnProperty('last')) return null;

        if(Searcher.last.constructor.name === 'AsyncFunction') {
            return await Searcher.last(query);
        }

        return Searcher.last(query);
    }

}