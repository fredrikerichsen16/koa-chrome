Dette er et prosjekt jeg utviklet i 2020, men ikke fullførte.

Ideen var å lage en Chrome extension startside lignende [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca), men med noen ekstra funksjoner og mulighet for å tilpasse startsiden til egne behov.

F.eks:
- Estetiske bakgrunnsbilder som endret seg med jevne mellomrom
- En søkeboks med forskjellige funksjoner, nemlig:
	- Tast inn noe og søk på Google, Youtube, Google Maps, Duckduckgo osv. ([SearchBar.vue](https://github.com/fredrikerichsen16/koa-chrome/blob/master/dist/vue/components/SearchBar.vue))
	- Søk bokmerkede nettsider og nettsider i loggen ([PageSearch.js](https://github.com/fredrikerichsen16/koa-chrome/blob/master/dist/vue/services/magic-search/services/PageSearch.js))
	- [Kalkulator](https://github.com/fredrikerichsen16/koa-chrome/blob/master/dist/vue/services/magic-search/Calculator.js) og [valutakonvertering](https://github.com/fredrikerichsen16/koa-chrome/blob/master/dist/vue/services/magic-search/Currency.js)
- Små apper som f.eks gjøremål, vær, og aksjer som er lett tilgjengelig og oversiktelig. Med en mini versjon (forhåndsvisning som vises på forsiden) og en full versjon (i et sidepanel som kunne åpnes og lukkes).

# Teknologi
Jeg brukte Vue.js, Webpack for bundling, Koa (Node.js backend rammeverk), HTML, og SCSS

Fordi dette skulle være en startside som åpnes hyppig måtte jeg ta hensyn til ytelse og nedlastningstid. Det gjorde jeg ved å:
1. Innlede pageload og enkle funksjoner med vanilla javascript, uten rammeverk, og deretter introdusere Vue.js og ting som tar lengre tid å laste ned ved bruk av "lazy loading" (først når brukeren samhandler med nettsiden)
2. Brukte Koa på backend, et lightweight rammeverk

Skulle gjerne inkludert bilder/demo/instruksjoner for å åpne denne nettsiden. Men, ettersom det er et 3 år gammelt prosjekt er alle dependency-ene utdatert, så det er vanskelig å få til.