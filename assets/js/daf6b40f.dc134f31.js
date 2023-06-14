"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[54795],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(n),u=r,h=g["".concat(l,".").concat(u)]||g[u]||d[u]||a;return n?i.createElement(h,o(o({ref:t},p),{},{components:n})):i.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[g]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={id:"54c67bbbe4b051242988551c",number:"75",collectionId:"566dfabbc6979143615564bf",popularity:"0.6",publicUrl:"https://docs.gravitykit.com/article/75-adding-pagination-for-results-nextprevious-page-links",viewCount:"3068",lastPublishedAt:"2022-12-27T20:44:35Z",changeOrigin:"external",name:"Adding pagination for results (next/previous page links)",slug:"75-adding-pagination-for-results-nextprevious-page-links",status:"published",categories:["566dff159033603f7da27def"],keywords:["page links","pagination","results","entries","widget"],createdBy:"59634",updatedBy:"59634",updatedAt:"2022-12-27T20:44:35Z",title:"Adding pagination for results (next/previous page links)",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/54c67bbbe4b051242988551c",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-12-27T20:44:35.000Z"),author:"Zack Katz"}},o="Adding pagination for results (next/previous page links)",s={unversionedId:"gravity-forms-add-ons/gravityview/search/54c67bbbe4b051242988551c",id:"gravity-forms-add-ons/gravityview/search/54c67bbbe4b051242988551c",title:"Adding pagination for results (next/previous page links)",description:'In the Edit View screen, click "Add Widget"',source:"@site/docs/gravity-forms-add-ons/gravityview/search/75-adding-pagination-for-results-nextprevious-page-links.mdx",sourceDirName:"gravity-forms-add-ons/gravityview/search",slug:"/gravity-forms-add-ons/gravityview/search/75-adding-pagination-for-results-nextprevious-page-links",permalink:"/gravity-forms-add-ons/gravityview/search/75-adding-pagination-for-results-nextprevious-page-links",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravityview/search/75-adding-pagination-for-results-nextprevious-page-links.mdx",tags:[],version:"current",sidebarPosition:75,frontMatter:{id:"54c67bbbe4b051242988551c",number:"75",collectionId:"566dfabbc6979143615564bf",popularity:"0.6",publicUrl:"https://docs.gravitykit.com/article/75-adding-pagination-for-results-nextprevious-page-links",viewCount:"3068",lastPublishedAt:"2022-12-27T20:44:35Z",changeOrigin:"external",name:"Adding pagination for results (next/previous page links)",slug:"75-adding-pagination-for-results-nextprevious-page-links",status:"published",categories:["566dff159033603f7da27def"],keywords:["page links","pagination","results","entries","widget"],createdBy:"59634",updatedBy:"59634",updatedAt:"2022-12-27T20:44:35Z",title:"Adding pagination for results (next/previous page links)",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/54c67bbbe4b051242988551c",pagination_prev:null,pagination_next:null,last_update:{date:"2022-12-27T20:44:35.000Z",author:"Zack Katz"}},sidebar:"gravityview"},l={},c=[{value:"In the Edit View screen, click &quot;Add Widget&quot;",id:"in-the-edit-view-screen-click-add-widget",level:2},{value:"Click on &quot;Show Page Links&quot; to insert the Show Page Links widget",id:"click-on-show-page-links-to-insert-the-show-page-links-widget",level:2},{value:"You can configure the page links settings by clicking on the gear icon",id:"you-can-configure-the-page-links-settings-by-clicking-on-the-gear-icon",level:2},{value:"Configure the page links settings",id:"configure-the-page-links-settings",level:3},{value:"Save the View",id:"save-the-view",level:2}],p={toc:c},g="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"adding-pagination-for-results-nextprevious-page-links"},"Adding pagination for results (next/previous page links)"),(0,r.kt)("h2",{id:"in-the-edit-view-screen-click-add-widget"},'In the Edit View screen, click "Add Widget"'),(0,r.kt)("p",null,'You can choose to have the links to the left or right by adding them to the "Left" or "Right" zones. In this example, we\'re adding the links to the "Top" zone, which will be full-width above all the entries.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.gravitykit.com/wp-content/uploads/2018/01/in-the-edit-view-screen-click-add-widget-.png?1407798866",alt:null})),(0,r.kt)("h2",{id:"click-on-show-page-links-to-insert-the-show-page-links-widget"},'Click on "Show Page Links" to insert the Show Page Links widget'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.gravitykit.com/wp-content/uploads/2018/01/click-on-show-page-links-to-insert-the-show-page-links-widget.png?1407798867",alt:null})),(0,r.kt)("h2",{id:"you-can-configure-the-page-links-settings-by-clicking-on-the-gear-icon"},"You can configure the page links settings by clicking on the gear icon"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.gravitykit.com/wp-content/uploads/2018/01/you-can-configure-the-page-links-settings-by-clicking-on-the-gear-icon.png?1407798868",alt:null})),(0,r.kt)("h3",{id:"configure-the-page-links-settings"},"Configure the page links settings"),(0,r.kt)("p",null,'You can choose to show every link by checking the "Show each page number" box.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.gravitykit.com/wp-content/uploads/2018/01/configure-the-page-links-settings.png?1407798868",alt:null})),(0,r.kt)("h2",{id:"save-the-view"},"Save the View"),(0,r.kt)("p",null,"Make sure to save or update your view to lock in the changes you just made."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://www.gravitykit.com/wp-content/uploads/2018/01/save-the-view.png?1407798869",alt:null})))}d.isMDXComponent=!0}}]);