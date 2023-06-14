"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[63057],{3905:(t,e,a)=>{a.d(e,{Zo:()=>l,kt:()=>y});var r=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,i=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var c=r.createContext({}),d=function(t){var e=r.useContext(c),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},l=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},g="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,i=t.mdxType,n=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),g=d(a),u=i,y=g["".concat(c,".").concat(u)]||g[u]||p[u]||n;return a?r.createElement(y,o(o({ref:e},l),{},{components:a})):r.createElement(y,o({ref:e},l))}));function y(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[g]="string"==typeof t?t:i,o[1]=s;for(var d=2;d<n;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6249:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var r=a(87462),i=(a(67294),a(3905));const n={id:"627b66fb8c9b58508348893d",number:"843",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/843-adding-a-gravitycharts-widget-to-gravityview",viewCount:"124",lastPublishedAt:"2022-10-18T23:27:07Z",changeOrigin:"unknown",name:"Adding a GravityCharts Widget to GravityView",slug:"843-adding-a-gravitycharts-widget-to-gravityview",status:"published",categories:["6261683a93a48c44483342eb"],createdBy:"543004",createdAt:"2022-05-11T07:34:19Z",updatedBy:"80506",updatedAt:"2022-10-18T23:27:07Z",title:"Adding a GravityCharts Widget to GravityView",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/627b66fb8c9b58508348893d",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-10-18T23:27:07.000Z"),author:"Rafael Ehlers"}},o="Adding a GravityCharts Widget to GravityView",s={unversionedId:"gravity-forms-add-ons/gravitycharts/627b66fb8c9b58508348893d",id:"gravity-forms-add-ons/gravitycharts/627b66fb8c9b58508348893d",title:"Adding a GravityCharts Widget to GravityView",description:"GravityCharts integrates with GravityView, allowing you to add charts to your front-end applications.",source:"@site/docs/gravity-forms-add-ons/gravitycharts/843-adding-a-gravitycharts-widget-to-gravityview.mdx",sourceDirName:"gravity-forms-add-ons/gravitycharts",slug:"/gravity-forms-add-ons/gravitycharts/843-adding-a-gravitycharts-widget-to-gravityview",permalink:"/gravity-forms-add-ons/gravitycharts/843-adding-a-gravitycharts-widget-to-gravityview",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravitycharts/843-adding-a-gravitycharts-widget-to-gravityview.mdx",tags:[],version:"current",sidebarPosition:843,frontMatter:{id:"627b66fb8c9b58508348893d",number:"843",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/843-adding-a-gravitycharts-widget-to-gravityview",viewCount:"124",lastPublishedAt:"2022-10-18T23:27:07Z",changeOrigin:"unknown",name:"Adding a GravityCharts Widget to GravityView",slug:"843-adding-a-gravitycharts-widget-to-gravityview",status:"published",categories:["6261683a93a48c44483342eb"],createdBy:"543004",createdAt:"2022-05-11T07:34:19Z",updatedBy:"80506",updatedAt:"2022-10-18T23:27:07Z",title:"Adding a GravityCharts Widget to GravityView",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/627b66fb8c9b58508348893d",pagination_prev:null,pagination_next:null,last_update:{date:"2022-10-18T23:27:07.000Z",author:"Rafael Ehlers"}},sidebar:"gravitycharts"},c={},d=[],l={toc:d},g="wrapper";function p(t){let{components:e,...a}=t;return(0,i.kt)(g,(0,r.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adding-a-gravitycharts-widget-to-gravityview"},"Adding a GravityCharts Widget to GravityView"),(0,i.kt)("p",null,"GravityCharts integrates with ",(0,i.kt)("a",{parentName:"p",href:"https://www.gravitykit.com/features/"},"GravityView"),", allowing you to add charts to your front-end applications."),(0,i.kt)("p",null,"First, ensure that you have created at least one chart for the form attached to your View. Next, edit your View, click the 'Add Widget' button and select the GravityCharts widget."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/627b8a708c9b585083488a0d/file-93p270TqeI.png",alt:"The GravityCharts widgets in the widgets list"}),"Now click on the gear icon to configure the widget settings."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/627b8b8968d51e779443f572/file-g4F5fZjOSo.png",alt:"A GravityCharts widget in the Bottom Widgets Area on the Multiple Entries Layout"})),(0,i.kt)("p",null,"Here you can select the chart you want to embed and choose whether to display data from all entries or only those visible on the page. You can also set a max height and width for your chart."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/627b8ac98c9b585083488a0e/file-TsioFvbRyA.png",alt:"The GravityCharts Widget Settings"}),"When you're done, update your View and check it on the front end."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/627b8b9c8c9b585083488a15/file-dxJiqHZIKl.png",alt:"A View with the title 'Lead Generation' showing a table of people's names, emails and industries. There is a bar chart below the table showing the frequency for different industries."})))}p.isMDXComponent=!0}}]);