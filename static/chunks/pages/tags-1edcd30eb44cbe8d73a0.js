(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[165,179],{7300:function(e){"use strict";e.exports=JSON.parse('{"TN":"Californiagua Blog","v":"The Water Doctor","r9":"Californiagua","WL":"Reviewing all the sparkling water I can find","dK":"en-us","or":"https://californiagua.com","Vm":"https://github.com/californiagua/blog","BH":"/static/images/avatar.jpg","Ao":"/static/images/twitter-card.png","Do":"californiagua@gmail.com","km":"https://twitter.com/Twitter","SP":"en-US"}')},6156:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},7375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}r.d(t,{Z:function(){return n}})},3848:function(e,t,r){"use strict";var n=r(6156),a=r(7146),o=r(7375),i=r(1664);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.Z=function(e){var t=e.href,r=(0,o.Z)(e,["href"]),n=t&&t.startsWith("/"),c=t&&t.startsWith("#");return n?(0,a.tZ)(i.default,{href:t,children:(0,a.tZ)("a",u({},r))}):c?(0,a.tZ)("a",u({href:t},r)):(0,a.tZ)("a",u({target:"_blank",rel:"noopener noreferrer",href:t},r))}},2496:function(e,t,r){"use strict";r.d(t,{HJ:function(){return i},Is:function(){return c},JV:function(){return u}});var n=r(7146),a=r(2962),o=r(7300),i={title:o.TN,description:o.WL,openGraph:{type:"website",locale:o.dK,url:o.or,title:o.TN,description:o.WL,images:[{url:"".concat(o.or).concat(o.Ao),alt:o.TN,width:1200,height:600}]},twitter:{handle:o.km,site:o.km,cardType:"summary_large_image"},additionalMetaTags:[{name:"author",content:o.v}]},c=function(e){var t=e.title,r=e.description,i=e.url;return(0,n.tZ)(a.PB,{title:"".concat(t," \u2013 ").concat(o.TN),description:r,canonical:i,openGraph:{url:i,title:t,description:r}})},u=function(e){var t=e.title,r=e.summary,i=e.date,c=e.lastmod,u=e.url,l=e.tags,s=e.images,f=void 0===s?[]:s,d=new Date(i).toISOString(),p=new Date(c||i).toISOString(),m=(0===f.length?[o.Ao]:"string"===typeof f?[f]:f).map((function(e){return{url:"".concat(o.or).concat(e),alt:t}}));return(0,n.BX)(n.HY,{children:[(0,n.tZ)(a.PB,{title:"".concat(t," \u2013 ").concat(o.TN),description:r,canonical:u,openGraph:{type:"article",article:{publishedTime:d,modifiedTime:p,authors:["".concat(o.or,"/about")],tags:l},url:u,title:t,description:r,images:m},additionalMetaTags:[{name:"twitter:image",content:m[0].url}]}),(0,n.tZ)(a.dX,{authorName:o.v,dateModified:p,datePublished:d,description:r,images:m,publisherName:o.v,title:t,url:u})]})}},164:function(e,t,r){"use strict";var n=r(7146),a=r(1664),o=r(8954);t.Z=function(e){var t=e.text;return(0,n.tZ)(a.default,{href:"/tags/".concat((0,o.G)(t)),children:(0,n.tZ)("a",{className:"mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400",children:t.split(" ").join("-")})})}},8954:function(e,t,r){"use strict";r.d(t,{G:function(){return n}});var n=function(e){return e&&e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-")}},6071:function(e,t,r){"use strict";var n=r(3038),a=r(862);t.default=void 0;var o=a(r(9748)),i=r(1689),c=r(2441),u=r(5749),l={};function s(e,t,r,n){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var a=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(a?"%"+a:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),a=r&&r.pathname||"/",f=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),r=n(t,2),o=r[0],c=r[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),d=f.href,p=f.as,m=e.children,g=e.replace,h=e.shallow,v=e.scroll,b=e.locale;"string"===typeof m&&(m=o.default.createElement("a",null,m));var y=o.Children.only(m),w=y&&"object"===typeof y&&y.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),x=n(O,2),Z=x[0],j=x[1],k=o.default.useCallback((function(e){Z(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,Z]);(0,o.useEffect)((function(){var e=j&&t&&(0,i.isLocalURL)(d),n="undefined"!==typeof b?b:r&&r.locale,a=l[d+"%"+p+(n?"%"+n:"")];e&&!a&&s(r,d,p,{locale:n})}),[p,d,j,b,t,r]);var N={ref:k,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,r,n,a,o,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[a?"replace":"push"](r,n,{shallow:o,locale:u,scroll:c}))}(e,r,d,p,g,h,v,b)},onMouseEnter:function(e){(0,i.isLocalURL)(d)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),s(r,d,p,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var _="undefined"!==typeof b?b:r&&r.locale,T=r&&r.isLocaleDomain&&(0,i.getDomainLocale)(p,_,r&&r.locales,r&&r.domainLocales);N.href=T||(0,i.addBasePath)((0,i.addLocale)(p,_,r&&r.defaultLocale))}return o.default.cloneElement(y,N)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!i,u=(0,a.useRef)(),l=(0,a.useState)(!1),s=n(l,2),f=s[0],d=s[1],p=(0,a.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),r||f||e&&e.tagName&&(u.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:a,elements:n}),r}(r),a=n.id,o=n.observer,i=n.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),c.delete(a))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,a.useEffect)((function(){if(!i&&!f){var e=(0,o.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,o.cancelIdleCallback)(e)}}}),[f]),[p,f]};var a=r(9748),o=r(8391),i="undefined"!==typeof IntersectionObserver;var c=new Map},3317:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return l},default:function(){return s}});var n=r(7146),a=r(7300),o=r(8954),i=r(164),c=r(3848),u=r(2496),l=!0;function s(e){var t=e.tags,r=Object.keys(t).sort((function(e,r){return t[r]-t[e]}));return(0,n.BX)(n.HY,{children:[(0,n.tZ)(u.Is,{title:"Tags - ".concat(a.v),description:"Things I blog about",url:"".concat(a.or,"/tags")}),(0,n.BX)("div",{className:"flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24",children:[(0,n.tZ)("div",{className:"pt-6 pb-8 space-x-2 md:space-y-5",children:(0,n.tZ)("h1",{className:"text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 md:border-r-2 md:px-6",children:"Tags"})}),(0,n.BX)("div",{className:"flex flex-wrap max-w-lg",children:[0===Object.keys(t).length&&"No tags found.",r.map((function(e){return(0,n.BX)("div",{className:"mt-2 mb-2 mr-5",children:[(0,n.tZ)(i.Z,{text:e}),(0,n.tZ)(c.Z,{href:"/tags/".concat((0,o.G)(e)),className:"-ml-2 text-sm font-semibold text-gray-600 uppercase dark:text-gray-300",children:" (".concat(t[e],")")})]},e)}))]})]})]})}},2725:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags",function(){return r(3317)}])},1664:function(e,t,r){e.exports=r(6071)},4453:function(){}},function(e){e.O(0,[351,433,66],(function(){return t=2725,e(e.s=t);var t}));var t=e.O();_N_E=t}]);