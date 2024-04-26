import{j as s,f as D,Y as W}from"./index.esm-DfKTBl1y.js";import{A as N}from"./AuthenticatedLayout-CqqSPHWi.js";import{P}from"./Panel-6fZhvHmk.js";import"./bundle-mjs-Bq6clSCD.js";import"./index-B-0vEMHn.js";import"./open-closed-rbID-roK.js";import"./keyboard-C5ZTszdy.js";function c(e){const n=Object.prototype.toString.call(e);return e instanceof Date||typeof e=="object"&&n==="[object Date]"?new e.constructor(+e):typeof e=="number"||n==="[object Number]"||typeof e=="string"||n==="[object String]"?new Date(e):new Date(NaN)}function k(e,n){return e instanceof Date?new e.constructor(n):new Date(n)}const v=43200,j=1440;let F={};function T(){return F}function S(e){const n=c(e),t=new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()));return t.setUTCFullYear(n.getFullYear()),+e-+t}function w(e,n){const t=c(e),r=c(n),a=t.getTime()-r.getTime();return a<0?-1:a>0?1:a}function _(e){return k(e,Date.now())}function C(e,n){const t=c(e),r=c(n),a=t.getFullYear()-r.getFullYear(),u=t.getMonth()-r.getMonth();return a*12+u}function A(e){return n=>{const r=(e?Math[e]:Math.trunc)(n);return r===0?0:r}}function X(e,n){return+c(e)-+c(n)}function O(e){const n=c(e);return n.setHours(23,59,59,999),n}function Y(e){const n=c(e),t=n.getMonth();return n.setFullYear(n.getFullYear(),t+1,0),n.setHours(23,59,59,999),n}function I(e){const n=c(e);return+O(n)==+Y(n)}function R(e,n){const t=c(e),r=c(n),a=w(t,r),u=Math.abs(C(t,r));let o;if(u<1)o=0;else{t.getMonth()===1&&t.getDate()>27&&t.setDate(30),t.setMonth(t.getMonth()-a*u);let i=w(t,r)===-a;I(c(e))&&u===1&&w(e,r)===1&&(i=!1),o=a*(u-Number(i))}return o===0?0:o}function L(e,n,t){const r=X(e,n)/1e3;return A(t==null?void 0:t.roundingMethod)(r)}const V={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},z=(e,n,t)=>{let r;const a=V[e];return typeof a=="string"?r=a:n===1?r=a.one:r=a.other.replace("{{count}}",n.toString()),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?"in "+r:r+" ago":r};function p(e){return(n={})=>{const t=n.width?String(n.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}const q={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},E={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},J={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},H={date:p({formats:q,defaultWidth:"full"}),time:p({formats:E,defaultWidth:"full"}),dateTime:p({formats:J,defaultWidth:"full"})},Q={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},U=(e,n,t,r)=>Q[e];function b(e){return(n,t)=>{const r=t!=null&&t.context?String(t.context):"standalone";let a;if(r==="formatting"&&e.formattingValues){const o=e.defaultFormattingWidth||e.defaultWidth,i=t!=null&&t.width?String(t.width):o;a=e.formattingValues[i]||e.formattingValues[o]}else{const o=e.defaultWidth,i=t!=null&&t.width?String(t.width):e.defaultWidth;a=e.values[i]||e.values[o]}const u=e.argumentCallback?e.argumentCallback(n):n;return a[u]}}const B={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},$={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},K={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},G={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},Z={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},ee={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},te=(e,n)=>{const t=Number(e),r=t%100;if(r>20||r<10)switch(r%10){case 1:return t+"st";case 2:return t+"nd";case 3:return t+"rd"}return t+"th"},ne={ordinalNumber:te,era:b({values:B,defaultWidth:"wide"}),quarter:b({values:$,defaultWidth:"wide",argumentCallback:e=>e-1}),month:b({values:K,defaultWidth:"wide"}),day:b({values:G,defaultWidth:"wide"}),dayPeriod:b({values:Z,defaultWidth:"wide",formattingValues:ee,defaultFormattingWidth:"wide"})};function M(e){return(n,t={})=>{const r=t.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],u=n.match(a);if(!u)return null;const o=u[0],i=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],m=Array.isArray(i)?re(i,y=>y.test(o)):ae(i,y=>y.test(o));let l;l=e.valueCallback?e.valueCallback(m):m,l=t.valueCallback?t.valueCallback(l):l;const h=n.slice(o.length);return{value:l,rest:h}}}function ae(e,n){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&n(e[t]))return t}function re(e,n){for(let t=0;t<e.length;t++)if(n(e[t]))return t}function ie(e){return(n,t={})=>{const r=n.match(e.matchPattern);if(!r)return null;const a=r[0],u=n.match(e.parsePattern);if(!u)return null;let o=e.valueCallback?e.valueCallback(u[0]):u[0];o=t.valueCallback?t.valueCallback(o):o;const i=n.slice(a.length);return{value:o,rest:i}}}const oe=/^(\d+)(th|st|nd|rd)?/i,se=/\d+/i,ue={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},ce={any:[/^b/i,/^(a|c)/i]},de={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},le={any:[/1/i,/2/i,/3/i,/4/i]},me={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},he={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},fe={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},ge={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},ye={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},be={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},Me={ordinalNumber:ie({matchPattern:oe,parsePattern:se,valueCallback:e=>parseInt(e,10)}),era:M({matchPatterns:ue,defaultMatchWidth:"wide",parsePatterns:ce,defaultParseWidth:"any"}),quarter:M({matchPatterns:de,defaultMatchWidth:"wide",parsePatterns:le,defaultParseWidth:"any",valueCallback:e=>e+1}),month:M({matchPatterns:me,defaultMatchWidth:"wide",parsePatterns:he,defaultParseWidth:"any"}),day:M({matchPatterns:fe,defaultMatchWidth:"wide",parsePatterns:ge,defaultParseWidth:"any"}),dayPeriod:M({matchPatterns:ye,defaultMatchWidth:"any",parsePatterns:be,defaultParseWidth:"any"})},ve={code:"en-US",formatDistance:z,formatLong:H,formatRelative:U,localize:ne,match:Me,options:{weekStartsOn:0,firstWeekContainsDate:1}};function we(e,n,t){const r=T(),a=(t==null?void 0:t.locale)??r.locale??ve,u=2520,o=w(e,n);if(isNaN(o))throw new RangeError("Invalid time value");const i=Object.assign({},t,{addSuffix:t==null?void 0:t.addSuffix,comparison:o});let m,l;o>0?(m=c(n),l=c(e)):(m=c(e),l=c(n));const h=L(l,m),y=(S(l)-S(m))/1e3,d=Math.round((h-y)/60);let g;if(d<2)return t!=null&&t.includeSeconds?h<5?a.formatDistance("lessThanXSeconds",5,i):h<10?a.formatDistance("lessThanXSeconds",10,i):h<20?a.formatDistance("lessThanXSeconds",20,i):h<40?a.formatDistance("halfAMinute",0,i):h<60?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",1,i):d===0?a.formatDistance("lessThanXMinutes",1,i):a.formatDistance("xMinutes",d,i);if(d<45)return a.formatDistance("xMinutes",d,i);if(d<90)return a.formatDistance("aboutXHours",1,i);if(d<j){const f=Math.round(d/60);return a.formatDistance("aboutXHours",f,i)}else{if(d<u)return a.formatDistance("xDays",1,i);if(d<v){const f=Math.round(d/j);return a.formatDistance("xDays",f,i)}else if(d<v*2)return g=Math.round(d/v),a.formatDistance("aboutXMonths",g,i)}if(g=R(l,m),g<12){const f=Math.round(d/v);return a.formatDistance("xMonths",f,i)}else{const f=g%12,x=Math.trunc(g/12);return f<3?a.formatDistance("aboutXYears",x,i):f<9?a.formatDistance("overXYears",x,i):a.formatDistance("almostXYears",x+1,i)}}function xe(e,n){return we(e,_(e),n)}const pe=({clients:e})=>s.jsxs(P,{children:[s.jsx(P.Header,{heading:"Clients"}),s.jsx("div",{className:"space-y-2",children:e.data.map(n=>s.jsxs("div",{className:"flex items-center space-x-2 rounded-global p-2 transition-colors duration-75 hover:bg-gray-900/50",children:[s.jsx("img",{className:"rounded-md bg-gray-900",width:38,height:38,src:n.avatar,alt:n.fullName}),s.jsxs("div",{className:"flex flex-1 flex-row justify-between",children:[s.jsxs("div",{className:"flex flex-col",children:[s.jsx("span",{className:"font-semibold",children:n.fullName}),s.jsx("span",{className:"text-xs text-gray-400",children:n.email})]}),s.jsx("div",{className:"mx-4 flex-1 -translate-y-1 border-b border-dashed border-gray-400/20 "}),s.jsx("div",{className:"flex self-end text-xs italic text-gray-400",children:xe(n.created_at,{addSuffix:!0})})]})]},n.id))}),s.jsxs("div",{className:"flex justify-between p-2",children:[e.prev_page_url&&s.jsx(D,{className:"rounded-md bg-primary-500 p-4 py-1 hover:bg-primary-600 focus:bg-primary-600 disabled:bg-gray-200",preserveScroll:!0,href:e.prev_page_url,children:"Previous"}),s.jsx("span",{"aria-hidden":!0}),e.next_page_url&&s.jsx(D,{className:"rounded-md bg-primary-500 p-4 py-1 hover:bg-primary-600 focus:bg-primary-600 disabled:bg-gray-200",preserveScroll:!0,href:e.next_page_url,children:"NEXT"})]})]}),De=pe;function Te({auth:e,clients:n,tags:t}){return s.jsxs(N,{user:e.user,header:s.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200",children:"Dashboard"}),children:[s.jsx(W,{title:"Dashboard"}),s.jsx("div",{className:"py-12",children:s.jsx("div",{className:"container mx-auto space-y-6 ",children:s.jsx("div",{className:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3",children:s.jsx(De,{clients:n})})})})]})}export{Te as default};
