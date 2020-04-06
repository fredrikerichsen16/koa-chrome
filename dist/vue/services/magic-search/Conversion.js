export default class Conversion {

    static last(query) {
        if(query !== '1 ounce to grams') {
            return null;
        }

        return {
            type: 'inline',
            content: {
                text: '28 grams',
                icon: 'currency-conversion.png',
                button: null
            }
        };
    }

}