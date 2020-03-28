export default class Conversion {

    static first(query) {
        return true;
    }

    static last(query) {
        if(query !== '1 ounce to grams') {
            return null;
        }

        return {
            url: null,
            text: '1 ounce is 28 grams',
            icon: 'currency-conversion.png'
        };
    }

}