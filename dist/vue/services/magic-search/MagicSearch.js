import Calculator from './Calculator.js';
import Conversion from './Conversion.js';
import Currency from './Currency.js';

export default class MagicSearch {

    constructor() {
        // this.searchers = [Calculator, Currency, Conversion];
    }

    async search(query) {
        let calculatorResult = await this.runSearch(query, Calculator);
        let conversionResult = await this.runSearch(query, Conversion);
        let currencyResult = await this.runSearch(query, Currency);

        let output = [calculatorResult, conversionResult, currencyResult];

        output = output.filter(item => item);

        return output;
    }

    async runSearch(query, Searcher) {
        if(!Searcher.first(query)) return null;

        if(Searcher.hasOwnProperty('second') && !Searcher.second(query)) return null;

        if(Searcher.hasOwnProperty('third') && !Searcher.third(query)) return null;

        if(!Searcher.hasOwnProperty('last')) return null;

        if(Searcher.last.constructor.name === 'AsyncFunction') {
            return await Searcher.last(query);
        }

        return Searcher.last(query);
    }

}