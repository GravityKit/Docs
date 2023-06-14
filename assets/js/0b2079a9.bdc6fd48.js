"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[95314],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,h=d["".concat(c,".").concat(p)]||d[p]||y[p]||a;return r?i.createElement(h,o(o({ref:t},l),{},{components:r})):i.createElement(h,o({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const a={id:"5590376ce4b027e1978eb8d0",number:"288",collectionId:"566dfabbc6979143615564bf",popularity:"0.3",publicUrl:"https://docs.gravitykit.com/article/288-how-gravityview-security-works",viewCount:"1529",lastPublishedAt:"2023-01-02T18:56:36Z",changeOrigin:"hsapp-js",name:"How GravityView Security Works",slug:"288-how-gravityview-security-works",status:"published",categories:["579aa642c6979160ca148ba9"],keywords:["security"],createdBy:"59634",createdAt:"2015-06-28T18:05:32Z",updatedBy:"59634",updatedAt:"2023-01-02T18:56:36Z",title:"How GravityView Security Works",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/5590376ce4b027e1978eb8d0",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2023-01-02T18:56:36.000Z"),author:"Zack Katz"}},o="How GravityView Security Works",s={unversionedId:"gravity-forms-add-ons/gravityview/advanced/5590376ce4b027e1978eb8d0",id:"gravity-forms-add-ons/gravityview/advanced/5590376ce4b027e1978eb8d0",title:"How GravityView Security Works",description:"As with any software, there may be security vulnerabilities. We do our best to secure the plugin and quickly patch any identified issues, but we provide no security guarantee or warranty. GravityView is licensed under a GPL 2.0 or newer license.",source:"@site/docs/gravity-forms-add-ons/gravityview/advanced/288-how-gravityview-security-works.mdx",sourceDirName:"gravity-forms-add-ons/gravityview/advanced",slug:"/gravity-forms-add-ons/gravityview/advanced/288-how-gravityview-security-works",permalink:"/gravity-forms-add-ons/gravityview/advanced/288-how-gravityview-security-works",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravityview/advanced/288-how-gravityview-security-works.mdx",tags:[],version:"current",sidebarPosition:288,frontMatter:{id:"5590376ce4b027e1978eb8d0",number:"288",collectionId:"566dfabbc6979143615564bf",popularity:"0.3",publicUrl:"https://docs.gravitykit.com/article/288-how-gravityview-security-works",viewCount:"1529",lastPublishedAt:"2023-01-02T18:56:36Z",changeOrigin:"hsapp-js",name:"How GravityView Security Works",slug:"288-how-gravityview-security-works",status:"published",categories:["579aa642c6979160ca148ba9"],keywords:["security"],createdBy:"59634",createdAt:"2015-06-28T18:05:32Z",updatedBy:"59634",updatedAt:"2023-01-02T18:56:36Z",title:"How GravityView Security Works",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/5590376ce4b027e1978eb8d0",pagination_prev:null,pagination_next:null,last_update:{date:"2023-01-02T18:56:36.000Z",author:"Zack Katz"}},sidebar:"gravityview"},c={},u=[{value:"How we make entries visible to only the current user",id:"how-we-make-entries-visible-to-only-the-current-user",level:3},{value:"Editing an Entry",id:"editing-an-entry",level:3}],l={toc:u},d="wrapper";function y(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-gravityview-security-works"},"How GravityView Security Works"),(0,n.kt)("admonition",{type:"danger"},(0,n.kt)("p",{parentName:"admonition"},"As with any software, there may be security vulnerabilities. We do our best to secure the plugin and quickly patch any identified issues, but we provide no security guarantee or warranty. GravityView is licensed under a ",(0,n.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"},"GPL 2.0 or newer license"),".")),(0,n.kt)("p",null,"We've had customers interested in learning more about GravityView security. We only recommend using GravityView to display sensitive data when using the Advanced Filter Extension to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/203-how-to-show-only-results-submitted-by-the-current-user"},"limit visible entries to those by the current user only"),"."),(0,n.kt)("h3",{id:"how-we-make-entries-visible-to-only-the-current-user"},"How we make entries visible to only the current user"),(0,n.kt)("p",null,"To verify the current user can see the entry (using the Advanced Filter Extension):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"We use WordPress ",(0,n.kt)("inlineCode",{parentName:"li"},"wp_get_current_user()")," function to get the current user ID"),(0,n.kt)("li",{parentName:"ul"},"Check the current user ID against the creator of the entry (stored in Gravity Forms under the ",(0,n.kt)("inlineCode",{parentName:"li"},"created_by")," column)"),(0,n.kt)("li",{parentName:"ul"},'Make sure that the search is performed is interpreted as an "ALL" search (instead of "ANY") so that ',(0,n.kt)("inlineCode",{parentName:"li"},"created_by={user id}")," is required, not optional"),(0,n.kt)("li",{parentName:"ul"},"A search is performed using Gravity Forms ",(0,n.kt)("inlineCode",{parentName:"li"},"GFAPI::get_entries()")),(0,n.kt)("li",{parentName:"ul"},"Then GravityView displays the data")),(0,n.kt)("h3",{id:"editing-an-entry"},"Editing an Entry"),(0,n.kt)("p",null,"For editing the entry (in the core GravityView plugin), we then add an additional layer of security in the form of a nonce:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Generate a key using the entry ID being requested for edit, the View ID it's contained in (in case there are different permissions across different Views), and the Gravity Forms form ID"),(0,n.kt)("li",{parentName:"ul"},"That key is used to generate a nonce using ",(0,n.kt)("a",{parentName:"li",href:"https://codex.wordpress.org/WordPress_Nonces"},(0,n.kt)("inlineCode",{parentName:"a"},"wp_nonce()")),", which is unique for the currently logged-in user and expires within 24 hours from the generated time."),(0,n.kt)("li",{parentName:"ul"},"The nonce is sent as a request parameter (",(0,n.kt)("inlineCode",{parentName:"li"},"?edit={example nonce}"),") to the Entry URL"),(0,n.kt)("li",{parentName:"ul"},"The nonce is validated in the Edit Entry screen before the form is displayed or an Edit Entry form submission is processed")),(0,n.kt)("p",null,"If you're interested in learning the exact parameters used to generate queries, you can install the ",(0,n.kt)("a",{parentName:"p",href:"https://wordpress.org/plugins/debug-bar/"},"Debug Bar")," plugin. Once installed, visit a View and click the \"Debug\" menu in the Admin Bar. You'll see a GravityView tab in the log menu. If you click that, you'll see the exact parameters for generating each request and render the View."))}y.isMDXComponent=!0}}]);