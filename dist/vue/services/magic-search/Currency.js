import axios from 'axios';
import currencies from './currencies.json';

function getCurrencyCode(s) {
    s = s.toLowerCase();

    for (let [code, variations] of Object.entries(currencies)) {
        if(s === code) return s;
        for(let i = 1; i < variations.length; i++) {
            if(s === variations[i]) return code;
        }
    }

    return false;
}

export default class Conversion {

    static first(query) {
        return true;
    }

    static async last(query) {
        let split1 = query.split('to');
        let split2 = query.split('in');

        if(split1.length !== 2 && split2.length !== 2) {
            return null;
        }

        let split = split1.length == 2 ? split1 : split2;
        let left = split[0].trim();
        let right = split[1].trim();

        if(!/^\d+|\d+$/.test(left)) return null; // contains some text then number or number then some text "50USD", or "$50" but not "US 50 ABC"
        if(/\d+/.test(right)) return null; // contains a number

        let leftIntRegex = /\d+/.exec(left);
        if(leftIntRegex.length !== 1) return null;

        let leftInt = parseInt(leftIntRegex[0]);
        let leftString = left.replace(leftInt, '').trim();

        let leftCurrency = getCurrencyCode(leftString);
        let rightCurrency = getCurrencyCode(right);

        if(!leftCurrency || !rightCurrency) return null;

        const result = await axios({
            url: 'https://community-neutrino-currency-conversion.p.rapidapi.com/convert',
            method: 'POST',
            headers: {
                'x-rapidapi-host': 'community-neutrino-currency-conversion.p.rapidapi.com',
                'x-rapidapi-key': '301b5eb2fcmshebd8323fc79a828p1d45adjsn3a594e967584',
                'content-type': 'application/x-www-form-urlencoded',
            },
            data: `from-type=${leftCurrency}&to-type=${rightCurrency}&from-value=${leftInt}`
        });

        return {
            type: 'block',
            inline: true,
            content: {
                text: '= ' + result.data.result,
                icon: 'currency-conversion.png',
                button: null
            }
        };
    }
}