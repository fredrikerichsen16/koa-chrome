(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{50:function(e,t,n){var o=n(55);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);(0,n(5).default)("a889e70a",o,!1,{})},54:function(e,t,n){"use strict";var o=n(50);n.n(o).a},55:function(e,t,n){(e.exports=n(4)(!1)).push([e.i,'div#content form#search[data-v-de39b32e] {\n  width: 400px;\n}\ndiv#content form#search input[type="text"][data-v-de39b32e] {\n    width: calc(100% - 40px);\n    background: rgba(87, 109, 127, 0.47);\n    box-shadow: 1px 1px 1px 1px rgba(48, 60, 70, 0.8);\n    border-radius: 8px;\n    color: rgba(255, 255, 255, 0.8);\n    padding: 15px 20px;\n    font-size: 20px;\n    font-family: Roboto, Arial;\n    border: none;\n    outline: none;\n}\ndiv#content form#search input[type="text"][data-v-de39b32e]::placeholder {\n      color: rgba(255, 255, 255, 0.5);\n      font-family: Roboto, Arial;\n}\n',""])},62:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{attrs:{id:"search",method:"GET",action:e.action},on:{submit:function(t){return e.onFormSubmit(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.queryInput,expression:"queryInput",modifiers:{trim:!0}},{name:"debounce",rawName:"v-debounce:500",value:e.search,expression:"search",arg:"500"}],attrs:{type:"text",id:"magic_search_input",name:"q",autofocus:"autofocus",autocomplete:"new-password",placeholder:e.placeholder},domProps:{value:e.queryInput},on:{focus:e.focusInput,blur:[e.blurInput,function(t){return e.$forceUpdate()}],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.selectDown(t)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.selectUp(t)},input:function(t){t.target.composing||(e.queryInput=t.target.value.trim())}}}),e._v(" "),n("transition",{attrs:{name:"toggle-menu",mode:"out-in"}},[e.showMenuFirstTime?n("SearchMenu",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],attrs:{query:e.query}}):e._e()],1)],1)};o._withStripped=!0;var r=n(20),i=n.n(r),c=n(8);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var s={components:{SearchMenu:function(){return n.e(7).then(n.bind(null,65))}},name:"SearchBar",data:function(){return{searchEngine:"Google",queryInput:"",query:"",showMenu:!1,showMenuFirstTime:!1}},computed:a({placeholder:function(){return"Search "+this.searchEngine+"..."},action:function(){if("Google"===this.searchEngine)return"https://www.google.com/search"}},Object(c.c)(["magicSearchPosition"])),methods:a({},Object(c.b)(["CHANGE_MAGIC_SEARCH_POSITION"]),{search:function(){this.query=this.queryInput,""===this.queryInput?this.showMenu=!1:(this.showMenu=!0,this.showMenuFirstTime=!0)},selectDown:function(){this.CHANGE_MAGIC_SEARCH_POSITION(this.magicSearchPosition+1)},selectUp:function(e){this.magicSearchPosition<1||(this.CHANGE_MAGIC_SEARCH_POSITION(this.magicSearchPosition-1),e.preventDefault())},focusInput:function(){this.CHANGE_MAGIC_SEARCH_POSITION(0),""!==this.query&&(this.showMenu=!0)},blurInput:function(){this.showMenu=!1,this.CHANGE_MAGIC_SEARCH_POSITION(0)},onFormSubmit:function(e){0!=this.magicSearchPosition&&e.preventDefault(),2==this.magicSearchPosition&&(location.href="https://www.google.com"),3==this.magicSearchPosition&&(location.href="https://www.google.com/maps")}})},p=(n(54),n(0)),h=Object(p.a)(s,o,[],!1,null,"de39b32e",null);h.options.__file="vue/components/SearchBar.vue";t.default=h.exports}}]);