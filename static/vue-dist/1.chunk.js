(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{28:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this.$createElement;this._self._c;return this._m(0)};a._withStripped=!0;var i={name:"Stocks",mounted:function(){var e=new XMLHttpRequest;e.withCredentials=!0,e.addEventListener("readystatechange",(function(){if(this.readyState===this.DONE){var e=JSON.parse(this.responseText);console.log(e)}})),e.open("GET","https://alpha-vantage.p.rapidapi.com/query?symbol=TSLA&function=GLOBAL_QUOTE"),e.setRequestHeader("x-rapidapi-host","alpha-vantage.p.rapidapi.com"),e.setRequestHeader("x-rapidapi-key","301b5eb2fcmshebd8323fc79a828p1d45adjsn3a594e967584"),e.send(null)}},n=s(0),r=Object(n.a)(i,a,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h1",[this._v("Stocks")]),this._v(" "),t("p",[this._v("Buy BitCOIN!")])])}],!1,null,null,null);r.options.__file="vue/widgets/Stocks/Stocks.vue";t.default=r.exports}}]);