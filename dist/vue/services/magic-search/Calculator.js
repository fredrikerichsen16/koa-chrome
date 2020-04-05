export default class Calculator {

    static first(query) {
        // if it doesn't contain any numbeers or constants (pi or e)
        if(!/(([0-9]|pi|e)+)/i.test(query)) return false;

        // if it has invalid use of parentheses
        if(query.split('(').length !== query.split(')').length) return false;

        // return true if it is e.g. pow(2, 3) atan(e + pi) sin(pi) sigma(1, 100, n) sin(45)
        if(/(log|ln|pow|asinh|acosh|atanh|asin|acos|atan|sinh|cosh|tanh|sin|cos|tan|sigma|Pi|root)(\s*\d+|\(.+\))$/.test(query)) return true;

        // add a final powerful test to filter out strings that aren't math equations
        // basically matches and counts number of operators (+ - mod C * etc.)
        // then matches and counts number of operators that are valid i.e. have a number or pi or e on either side of
        // it (not necessarily directly, parentheses are allowed)
        query = query.trim().replace(/\s+/g, '');

        let operatorsRegex = /([\+\-\/\*CP\^]|(?<=[^a-z])(mod)(?=[^a-z]))/gi;
        let validOperatorsRegex = /(?<=[\(]*([\d]+|pi|e)[\)!]*)(\+|\-|\/|\*|mod|C|P|\^)(?=[\(]*([\d]+|pi|e)[\)!]*)/gi;

        let nOperators = query.matchAll(operatorsRegex);
            nOperators = Array.from(nOperators);
            nOperators = nOperators.length;
        let nValidOperators = query.matchAll(validOperatorsRegex);
            nValidOperators = Array.from(nValidOperators);
            nValidOperators = nValidOperators.length;

        if(nOperators !== nValidOperators) return false;

        console.log('PERFORMING MATH OPERATION', 'Calculator.js line 29');

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
            type: 'block',
            inline: true,
            content: {
                text: '= ' + returnVal,
                icon: 'calculator.png',
                button: {
                    text: 'Calculator',
                    url: 'https://duckduckgo.com/?q=calculator'
                }
            }
        };
    }

}