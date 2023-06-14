"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[14577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=u(a),p=r,h=d["".concat(l,".").concat(p)]||d[p]||c[p]||i;return a?n.createElement(h,o(o({ref:t},m),{},{components:a})):n.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},11565:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={id:"62ea5b71a61fed04b3169957",number:"853",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/853-how-to-display-summaries-using-gvmath",viewCount:"209",lastPublishedAt:"2023-02-06T21:14:18Z",changeOrigin:"hsapp-js",name:"How to Display Summaries Using [gravitymath]",slug:"853-how-to-display-summaries-using-gvmath",status:"published",categories:["6155b0bf2b380503dfdf63f0"],createdBy:"543004",createdAt:"2022-08-03T11:26:41Z",updatedBy:"80506",updatedAt:"2023-02-06T21:14:18Z",title:"How to Display Summaries Using [gravitymath]",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/62ea5b71a61fed04b3169957",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2023-02-06T21:14:18.000Z"),author:"Rafael Ehlers"}},o="How to Display Summaries Using [gravitymath]",s={unversionedId:"gravity-forms-add-ons/gravitymath/62ea5b71a61fed04b3169957",id:"gravity-forms-add-ons/gravitymath/62ea5b71a61fed04b3169957",title:"How to Display Summaries Using [gravitymath]",description:"You may want to group Gravity Forms entries by a specific field value and then perform math operations on entries within those groups.",source:"@site/docs/gravity-forms-add-ons/gravitymath/853-how-to-display-summaries-using-gvmath.mdx",sourceDirName:"gravity-forms-add-ons/gravitymath",slug:"/gravity-forms-add-ons/gravitymath/853-how-to-display-summaries-using-gvmath",permalink:"/Docs/gravity-forms-add-ons/gravitymath/853-how-to-display-summaries-using-gvmath",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravitymath/853-how-to-display-summaries-using-gvmath.mdx",tags:[],version:"current",sidebarPosition:853,frontMatter:{id:"62ea5b71a61fed04b3169957",number:"853",collectionId:"6076f9478996210f18bd33df",publicUrl:"https://docs.gravitykit.com/article/853-how-to-display-summaries-using-gvmath",viewCount:"209",lastPublishedAt:"2023-02-06T21:14:18Z",changeOrigin:"hsapp-js",name:"How to Display Summaries Using [gravitymath]",slug:"853-how-to-display-summaries-using-gvmath",status:"published",categories:["6155b0bf2b380503dfdf63f0"],createdBy:"543004",createdAt:"2022-08-03T11:26:41Z",updatedBy:"80506",updatedAt:"2023-02-06T21:14:18Z",title:"How to Display Summaries Using [gravitymath]",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/62ea5b71a61fed04b3169957",pagination_prev:null,pagination_next:null,last_update:{date:"2023-02-06T21:14:18.000Z",author:"Rafael Ehlers"}},sidebar:"gravitymath"},l={},u=[{value:"Constructing the Shortcodes",id:"constructing-the-shortcodes",level:2},{value:"Creating the Summary Table",id:"creating-the-summary-table",level:2},{value:"Filtering by User",id:"filtering-by-user",level:2},{value:"Adding Multiple Filtering Rules",id:"adding-multiple-filtering-rules",level:2}],m={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-display-summaries-using-gravitymath"},"How to Display Summaries Using ","[gravitymath]"),(0,r.kt)("p",null,"You may want to group Gravity Forms entries by a specific field value and then perform math operations on entries within those groups."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Here\u2019s an example"),": You have a donation form on your website allowing users to donate towards different causes (e.g., Science, Education, and Medical). Now you want to calculate the total amount donated towards each cause."),(0,r.kt)("p",null,"This is possible using the ",(0,r.kt)("inlineCode",{parentName:"p"},"[gravitymath]"),' "filter" parameter.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/62ea5c340675b1205fb9296e/file-LwvgSsRd9U.png",alt:"A Gravity Forms form with fields for the name, donation amount and donation category"})),(0,r.kt)("h2",{id:"constructing-the-shortcodes"},"Constructing the Shortcodes"),(0,r.kt)("p",null,"As you can see, our donation form allows users to enter a custom donation amount and then choose which cause they want their money to go towards (Science, Education or Medical)."),(0,r.kt)("p",null,"Instead of creating a View that displays each donation, we\u2019re going to create a table that summarizes the total amount donated towards each cause."),(0,r.kt)("p",null,"There\u2019s no way to do this automatically in GravityView, so we\u2019ll need to manually construct a ",(0,r.kt)("inlineCode",{parentName:"p"},"[gravitymath]")," shortcode for each donation category using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," parameter:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Science"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'[gravitymath scope="form" id="101" filter="filter_5=Science"] {Donation amount:1:sum} [/gravitymath]')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Education"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'[gravitymath scope="form" id="101" filter="filter_5=Education"] {Donation amount:1:sum} [/gravitymath]')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Medical"),": ",(0,r.kt)("inlineCode",{parentName:"p"},'[gravitymath scope="form" id="101" filter="filter_5=Medical"] {Donation amount:1:sum} [/gravitymath]')),(0,r.kt)("p",null,"We\u2019re using ",(0,r.kt)("inlineCode",{parentName:"p"},'scope="form"')," because we\u2019re only working with entries submitted through our donation form (with ID \u201c101\u201d). Next, we\u2019re filtering by the category using the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," parameter ",(0,r.kt)("inlineCode",{parentName:"p"},'filter="filter_5=Science"')," (\u201c5\u201d is the ID of the field we want to filter by)."),(0,r.kt)("p",null,"Inside the shortcode, we place the merge tag for the field we want to sum. If we wanted to count the number of entries instead of summing them, we could do that using the ",(0,r.kt)("inlineCode",{parentName:"p"},"count")," modifier."),(0,r.kt)("h2",{id:"creating-the-summary-table"},"Creating the Summary Table"),(0,r.kt)("p",null,"To display these calculations in a table, we\u2019ll edit our page and add a new \u201cTable\u201d block."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/62ea5c6a0675b1205fb9296f/file-XCBEdvsVs0.png",alt:"The Table block in the WordPress page editor"})),(0,r.kt)("p",null,"We\u2019ll create a table with two columns and four rows. We\u2019ll add the donation categories to the column on the left, and then we\u2019ll paste our ",(0,r.kt)("inlineCode",{parentName:"p"},"[gravitymath]")," shortcodes into the column on the right."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/62ea5c7d26aa5532ebc0b9de/file-wdwsDI4FBz.png",alt:"A table block in the wordpress editor with [gravitymath] shortcodes inside the cells"})),(0,r.kt)("p",null,"Here\u2019s what our summary table looks like on the front end:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/62ea5c895e08866388c2ed9b/file-TF32b9vJmY.png",alt:"A table on the front end with donation categories in onecolumn and the total amount donated in another column"})),(0,r.kt)("p",null,"When you receive new donations, your table will update to reflect the new amounts."),(0,r.kt)("h2",{id:"filtering-by-user"},"Filtering by User"),(0,r.kt)("p",null,"You may want to group entries by the user who created them and then perform math calculations on those entries. That\u2019s also possible using the ",(0,r.kt)("inlineCode",{parentName:"p"},"[gravitymath]")," shortcode and the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," parameter. Here\u2019s an example:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'[gravitymath scope="form" id="101" filter="filter_created_by=1"] {Donation amount:1:sum} [/gravitymath]')),(0,r.kt)("p",null,"In this case, the \u201c1\u201d is the user ID of a specific user on your website."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you need help finding user IDs, read ",(0,r.kt)("a",{parentName:"p",href:"https://smartwp.com/wordpress-get-user-id/"},"this article"),".")),(0,r.kt)("h2",{id:"adding-multiple-filtering-rules"},"Adding Multiple Filtering Rules"),(0,r.kt)("p",null,"If you want to add multiple filtering rules, you can do so by separating them using \u201c","&","\u201d. Here\u2019s an example where we\u2019re summing all the Science donations that were sent by a specific user:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'[gravitymath scope="form" id="101" filter="filter_5=Science&filter_created_by=1"] {Donation amount:1:sum} [/gravitymath]')))}c.isMDXComponent=!0}}]);