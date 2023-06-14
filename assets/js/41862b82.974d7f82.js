"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[31714],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function c(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(i),g=n,f=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return i?a.createElement(f,o(o({ref:t},p),{},{components:i})):a.createElement(f,o({ref:t},p))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<r;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}g.displayName="MDXCreateElement"},89835:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var a=i(87462),n=(i(67294),i(3905));const r={id:"54c67bcce4b07997ea3f3f89",number:"105",collectionId:"566dfabbc6979143615564bf",popularity:"0.5",publicUrl:"https://docs.gravitykit.com/article/105-duplicating-or-copying-a-view",viewCount:"2577",lastPublishedAt:"2022-10-07T19:36:12Z",changeOrigin:"unknown",name:"Duplicating or copying a View",slug:"105-duplicating-or-copying-a-view",status:"published",categories:["579aa5d0903360293603a8e2"],keywords:["duplicate","copy","clone"],createdBy:"59634",createdAt:"2015-01-26T17:39:24Z",updatedBy:"80506",updatedAt:"2022-10-07T19:36:12Z",title:"Duplicating or copying a View",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/54c67bcce4b07997ea3f3f89",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-10-07T19:36:12.000Z"),author:"Rafael Ehlers"}},o="Duplicating or copying a View",c={unversionedId:"gravity-forms-add-ons/gravityview/getting-started/54c67bcce4b07997ea3f3f89",id:"gravity-forms-add-ons/gravityview/getting-started/54c67bcce4b07997ea3f3f89",title:"Duplicating or copying a View",description:"The ability to duplicate a View is already included in Version 1.6 and higher of GravityView.",source:"@site/docs/gravity-forms-add-ons/gravityview/getting-started/105-duplicating-or-copying-a-view.mdx",sourceDirName:"gravity-forms-add-ons/gravityview/getting-started",slug:"/gravity-forms-add-ons/gravityview/getting-started/105-duplicating-or-copying-a-view",permalink:"/gravity-forms-add-ons/gravityview/getting-started/105-duplicating-or-copying-a-view",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravityview/getting-started/105-duplicating-or-copying-a-view.mdx",tags:[],version:"current",sidebarPosition:105,frontMatter:{id:"54c67bcce4b07997ea3f3f89",number:"105",collectionId:"566dfabbc6979143615564bf",popularity:"0.5",publicUrl:"https://docs.gravitykit.com/article/105-duplicating-or-copying-a-view",viewCount:"2577",lastPublishedAt:"2022-10-07T19:36:12Z",changeOrigin:"unknown",name:"Duplicating or copying a View",slug:"105-duplicating-or-copying-a-view",status:"published",categories:["579aa5d0903360293603a8e2"],keywords:["duplicate","copy","clone"],createdBy:"59634",createdAt:"2015-01-26T17:39:24Z",updatedBy:"80506",updatedAt:"2022-10-07T19:36:12Z",title:"Duplicating or copying a View",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/54c67bcce4b07997ea3f3f89",pagination_prev:null,pagination_next:null,last_update:{date:"2022-10-07T19:36:12.000Z",author:"Rafael Ehlers"}},sidebar:"gravityview"},l={},s=[{value:"If you are using the Duplicate Post plugin:",id:"if-you-are-using-the-duplicate-post-plugin",level:3},{value:"What&#39;s the difference between clicking &quot;Clone&quot; and &quot;New Draft&quot;?",id:"whats-the-difference-between-clicking-clone-and-new-draft",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"duplicating-or-copying-a-view"},"Duplicating or copying a View"),(0,n.kt)("p",null,"The ability to duplicate a View is already included in Version 1.6 and higher of GravityView."),(0,n.kt)("p",null,'The feature can be accessed from inside the Edit View screen (the "Clone View" link on the image below):'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/54d119cee4b086c0c0964b20/file-oYBUeBN68s.png",alt:null})),(0,n.kt)("p",null,'...or from the Views listing page using the "Clone" link that shows up when hovering over a View name:'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/54d119b8e4b086c0c0964b1f/file-ybZujuK1KE.png",alt:null})),(0,n.kt)("p",null,"Note: Users must have the ",(0,n.kt)("inlineCode",{parentName:"p"},"copy_gravityviews")," capability to copy a View. By default, this is enabled for Administrator and Editor roles. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/311-gravityview-capabilities"},"Learn more about GravityView capabilities"),"."),(0,n.kt)("h3",{id:"if-you-are-using-the-duplicate-post-plugin"},"If you are using the ",(0,n.kt)("a",{parentName:"h3",href:"https://wordpress.org/plugins/duplicate-post/"},"Duplicate Post")," plugin:"),(0,n.kt)("p",null,"If you cannot see the ",(0,n.kt)("em",{parentName:"p"},(0,n.kt)("u",null,"Clone"))," link, make sure to enable the Views custom post type in the Permissions tab for this plugin's settings page (Settings menu ",">"," Duplicate Post):"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/581bc17a90336042578d1876/file-jJWxb5uQ6s.jpg",alt:null})),(0,n.kt)("h3",{id:"whats-the-difference-between-clicking-clone-and-new-draft"},'What\'s the difference between clicking "Clone" and "New Draft"?'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Clicking "Clone" will duplicate the View, including its status. You will be taken back to the All Views screen, and you will see the new View in the list.'),(0,n.kt)("li",{parentName:"ul"},'Clicking "New Draft" will duplicate the View, set the status to Draft, and take you to the Edit View screen to edit the newly created View.')))}d.isMDXComponent=!0}}]);