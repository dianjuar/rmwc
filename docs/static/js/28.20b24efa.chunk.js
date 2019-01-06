webpackJsonp([28],{201:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"attributes",function(){return E});var o=a(0),c=a.n(o),m=a(63),u=a(225),i=a(237),p=(a.n(i),function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()),E={},f=function(e){function t(e){s(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={},a}return l(t,e),p(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("h1",null,"Elevation"),c.a.createElement("blockquote",null,c.a.createElement("p",null,"Objects in material design possess similar qualities to objects in the physical world.")),c.a.createElement("ul",null,c.a.createElement("li",null,"Module ",c.a.createElement("strong",null,"@rmwc/elevation")),c.a.createElement("li",null,"Import styles:",c.a.createElement("ul",null,c.a.createElement("li",null,"import ",c.a.createElement("strong",null,"'@material/elevation/dist/mdc.elevation.css'"),";"))),c.a.createElement("li",null,"MDC Docs: ",c.a.createElement("a",{href:"https://material.io/develop/web/components/elevation/"},"https://material.io/develop/web/components/elevation/"))),c.a.createElement("div",{className:"example render-with-code"},c.a.createElement("div",{className:"run"},[].concat(n(Array(25))).map(function(e,t){return c.a.createElement(m.a,{z:t,key:t},t,"dp")}),c.a.createElement(m.a,{z:this.state.elevation||0,transition:!0,onMouseOver:function(){return e.setState({elevation:24})},onMouseOut:function(){return e.setState({elevation:0})}},"Hover Me ",this.state.elevation||0,"dp")),c.a.createElement("div",{className:"source"},c.a.createElement("pre",{className:"language-jsx"},c.a.createElement("code",{className:"language-jsx"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Elevation ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'@rmwc/elevation'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Showing the 25 different levels of elevation */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token punctuation"},"["),c.a.createElement("span",{className:"token operator"},"..."),c.a.createElement("span",{className:"token function"},"Array"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token number"},"25"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"]"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"map"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"("),"val",c.a.createElement("span",{className:"token punctuation"},",")," i",c.a.createElement("span",{className:"token punctuation"},")")," ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token punctuation"},"("),"\n","  ",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Elevation")," ",c.a.createElement("span",{className:"token attr-name"},"z"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"i",c.a.createElement("span",{className:"token punctuation"},"}"))," ",c.a.createElement("span",{className:"token attr-name"},"key"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),"i",c.a.createElement("span",{className:"token punctuation"},"}")),c.a.createElement("span",{className:"token punctuation"},">")),c.a.createElement("span",{className:"token punctuation"},"{"),"i",c.a.createElement("span",{className:"token punctuation"},"}"),"dp",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Elevation"),c.a.createElement("span",{className:"token punctuation"},">")),"\n",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token comment"},"/* Showing the transition prop */"),c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"<"),"Elevation"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"z"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),"state",c.a.createElement("span",{className:"token punctuation"},"."),"elevation ",c.a.createElement("span",{className:"token operator"},"||")," ",c.a.createElement("span",{className:"token number"},"0"),c.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"transition"),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onMouseOver"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},")")," ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"elevation",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token number"},"24"),c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}")),"\n","  ",c.a.createElement("span",{className:"token attr-name"},"onMouseOut"),c.a.createElement("span",{className:"token script language-javascript"},c.a.createElement("span",{className:"token punctuation"},"="),c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},")")," ",c.a.createElement("span",{className:"token operator"},"="),c.a.createElement("span",{className:"token operator"},">")," ",c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"setState"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"elevation",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token number"},"0"),c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},"}")),"\n",c.a.createElement("span",{className:"token punctuation"},">")),"\n","  Hover Me ",c.a.createElement("span",{className:"token punctuation"},"{"),c.a.createElement("span",{className:"token keyword"},"this"),c.a.createElement("span",{className:"token punctuation"},"."),"state",c.a.createElement("span",{className:"token punctuation"},"."),"elevation ",c.a.createElement("span",{className:"token operator"},"||")," ",c.a.createElement("span",{className:"token number"},"0"),c.a.createElement("span",{className:"token punctuation"},"}"),"dp","\n",c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token tag"},c.a.createElement("span",{className:"token punctuation"},"</"),"Elevation"),c.a.createElement("span",{className:"token punctuation"},">")),"\n")))),c.a.createElement("div",{className:"example render-only"},c.a.createElement("div",{className:"run"},c.a.createElement(u.a,{docs:i,displayName:"Elevation"}))))}}]),t}(c.a.Component);t.default=f},225:function(e,t,a){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}a.d(t,"a",function(){return u});var o=a(0),c=(a.n(o),function(){function e(e,t){var a=[],n=!0,s=!1,r=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){s=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(s)throw r}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()),m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=function(e){function t(e){s(this,t);var a=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.flatDocs=Object.values(e.docs).reduce(function(e,t){return e.concat(t)},[]),a}return l(t,e),m(t,[{key:"findDocDef",value:function(e){return this.flatDocs.find(function(t){return t.displayName===e})}},{key:"renderRaw",value:function(e){return e.split("\n").map(function(e,t){return o.createElement(o.Fragment,{key:t},0!==t&&o.createElement("br",null),e.split("  ").map(function(e,t){return o.createElement(o.Fragment,{key:t},0!==t&&o.createElement(o.Fragment,null,"\xa0\xa0"),e)}))})}},{key:"getComposedDefs",value:function(e){var t=this;return e.map(function(e){return t.findDocDef(e)}).filter(Boolean).reduce(function(e,t){return Object.assign({},t,e,{props:t.props||e.props?Object.assign({},t.props||{},e.props||{}):null})},{})}},{key:"render",value:function(){var e=this,t=this.props,a=t.displayName,s=t.composes,r=void 0===s?[]:s,l=this.getComposedDefs([a].concat(n(r)));return o.createElement("div",{className:"document-component"},o.createElement("h2",null,a),l&&!!l.description&&o.createElement("p",null,l.description),l&&l.props&&o.createElement("div",null,o.createElement("h3",null,"Props"),o.createElement("table",null,o.createElement("thead",null,o.createElement("tr",null,o.createElement("th",null,"Name"),o.createElement("th",null,"Type"),o.createElement("th",null,"Default"),o.createElement("th",null,"Description"))),o.createElement("tbody",null,Object.entries(l.props).map(function(t,a){var n=c(t,2),s=n[0],r=n[1];return o.createElement("tr",{key:a},o.createElement("td",{className:r.required?"required":""},o.createElement("code",null,s)),o.createElement("td",null,o.createElement("code",null,r.flowType&&e.renderRaw(r.flowType.raw||r.flowType.name||""))),o.createElement("td",null,r.defaultValue?o.createElement("code",null,r.defaultValue.value):o.createElement("code",null,"undefined")),o.createElement("td",null,r.description||""))})))))}}]),t}(o.Component)},237:function(e,t){e.exports=[{description:"The Elevation Component",displayName:"Elevation",methods:[{name:"classNames",docblock:null,modifiers:[],params:[{name:"props",type:{name:"signature",type:"object",raw:"{\n  /** A number from 0 - 24 for different levels of elevation */\n  z: number | string,\n  /** Allows for smooth transitions between elevations when the z value changes. */\n  transition?: boolean\n}",signature:{properties:[{key:"z",value:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}],required:!0}},{key:"transition",value:{name:"boolean",required:!1}}]},alias:"ElevationPropsT"}}],returns:null}],props:{z:{flowType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},required:!1,description:"A number from 0 - 24 for different levels of elevation",defaultValue:{value:"0",computed:!1}},transition:{flowType:{name:"boolean"},required:!1,description:"Allows for smooth transitions between elevations when the z value changes.",defaultValue:{value:"false",computed:!1}}}}]}});
//# sourceMappingURL=28.20b24efa.chunk.js.map