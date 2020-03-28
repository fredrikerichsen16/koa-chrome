export default class Calculator {

    static first(query) {
        if(!/(([0-9]|pi|e)+)/i.test(query)) return false;

        return true;
    }

    static async last(query) {
        let returnVal = null;

        const mexp = await import('math-expression-evaluator');

        try {
            returnVal = mexp.eval(query);
        } catch(e) {
            return null;
        }

        return {
            url: null,
            text: returnVal,
            icon: 'math.png'
        };
    }

}