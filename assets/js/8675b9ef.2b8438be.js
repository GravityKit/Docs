"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[17798],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(i),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return i?a.createElement(m,l(l({ref:t},p),{},{components:i})):a.createElement(m,l({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var d=2;d<r;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}h.displayName="MDXCreateElement"},39347:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=i(87462),n=(i(67294),i(3905));const r={id:"54c67bbae4b0512429885519",number:"73",collectionId:"566dfabbc6979143615564bf",popularity:"4.1",publicUrl:"https://docs.gravitykit.com/article/73-using-the-shortcode",viewCount:"21342",lastPublishedAt:"2022-10-12T22:03:45Z",changeOrigin:"unknown",name:"Using the [gravityview] Shortcode",slug:"73-using-the-shortcode",status:"published",categories:["566dfe4fc6979143615564d9"],createdBy:"59634",updatedBy:"80506",updatedAt:"2022-10-12T22:03:45Z",title:"Using the [gravityview] Shortcode",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/54c67bbae4b0512429885519",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-10-12T22:03:45.000Z"),author:"Rafael Ehlers"}},l="Using the [gravityview] Shortcode",o={unversionedId:"gravity-forms-add-ons/gravityview/shortcodes/54c67bbae4b0512429885519",id:"gravity-forms-add-ons/gravityview/shortcodes/54c67bbae4b0512429885519",title:"Using the [gravityview] Shortcode",description:"The [gravityview] shortcode allows you to embed Views on your website. But that's not all. There is also a range of parameters you can use to customize the output.",source:"@site/docs/gravity-forms-add-ons/gravityview/shortcodes/73-using-the-shortcode.mdx",sourceDirName:"gravity-forms-add-ons/gravityview/shortcodes",slug:"/gravity-forms-add-ons/gravityview/shortcodes/73-using-the-shortcode",permalink:"/Docs/gravity-forms-add-ons/gravityview/shortcodes/73-using-the-shortcode",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravityview/shortcodes/73-using-the-shortcode.mdx",tags:[],version:"current",sidebarPosition:73,frontMatter:{id:"54c67bbae4b0512429885519",number:"73",collectionId:"566dfabbc6979143615564bf",popularity:"4.1",publicUrl:"https://docs.gravitykit.com/article/73-using-the-shortcode",viewCount:"21342",lastPublishedAt:"2022-10-12T22:03:45Z",changeOrigin:"unknown",name:"Using the [gravityview] Shortcode",slug:"73-using-the-shortcode",status:"published",categories:["566dfe4fc6979143615564d9"],createdBy:"59634",updatedBy:"80506",updatedAt:"2022-10-12T22:03:45Z",title:"Using the [gravityview] Shortcode",hsEditUrl:"https://secure.helpscout.net/docs/566dfabbc6979143615564bf/article/54c67bbae4b0512429885519",pagination_prev:null,pagination_next:null,last_update:{date:"2022-10-12T22:03:45.000Z",author:"Rafael Ehlers"}},sidebar:"gravityview"},s={},d=[{value:"Tutorial Video",id:"tutorial-video",level:2},{value:"Common Use-Cases",id:"common-use-cases",level:2},{value:"Displaying a View:",id:"displaying-a-view",level:4},{value:"Displaying entries that contain a specific value:",id:"displaying-entries-that-contain-a-specific-value",level:4},{value:"Changing the Sort Direction of a View:",id:"changing-the-sort-direction-of-a-view",level:4},{value:"Limiting Entries by Date Created:",id:"limiting-entries-by-date-created",level:4},{value:"Advanced Use-Cases",id:"advanced-use-cases",level:2},{value:"Filtering a View Using Advanced Search:",id:"filtering-a-view-using-advanced-search",level:4},{value:"Displaying the total number of approved entries:",id:"displaying-the-total-number-of-approved-entries",level:4},{value:"Displaying Entries Created by a Specific User:",id:"displaying-entries-created-by-a-specific-user",level:4},{value:"Displaying Entries Created by the Currently Logged-In User:",id:"displaying-entries-created-by-the-currently-logged-in-user",level:4},{value:"Displaying Details About a View",id:"displaying-details-about-a-view",level:2},{value:"Displaying the total number of entries in a View:",id:"displaying-the-total-number-of-entries-in-a-view",level:4},{value:"Displaying the number of entries visible on a single page:",id:"displaying-the-number-of-entries-visible-on-a-single-page",level:4},{value:"Displaying the number of the first or last entry:",id:"displaying-the-number-of-the-first-or-last-entry",level:4},{value:"All Shortcode Parameters",id:"all-shortcode-parameters",level:2},{value:"Required:",id:"required",level:4},{value:"Searching/filtering",id:"searchingfiltering",level:4},{value:"Sorting",id:"sorting",level:4},{value:"Other",id:"other",level:4},{value:"Shortcode Limitations",id:"shortcode-limitations",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-the-gravityview-shortcode"},"Using the ","[gravityview]"," Shortcode"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode allows you to embed Views on your website. But that's not all. There is also a range of parameters you can use to customize the output."),(0,n.kt)("p",null,"You can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode on pages, posts, sidebar widgets, or even inside other Views. The ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode is powerful and you can use it to achieve a number of different outcomes, both simple and complex."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#tutorial-video"},"Tutorial Video")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#common-use-cases"},"Common Use-Cases")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#advanced-use-cases"},"Advanced Use-Cases")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#displaying-details-about-a-view"},"Displaying Details About a View")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#all-shortcode-parameters"},"All Shortcode Parameters")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"#shortcode-limitations"},"Shortcode Limitations"))),(0,n.kt)("h2",{id:"tutorial-video"},"Tutorial Video"),(0,n.kt)("p",null,"Here is a quick tutorial video guiding you through some of the most common uses-cases for the ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode:"),(0,n.kt)("iframe",{allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"",frameborder:"0",height:"315",src:"https://www.youtube.com/embed/bNCnuj0btDE",title:"YouTube video player",width:"560"}),(0,n.kt)("h2",{id:"common-use-cases"},"Common Use-Cases"),(0,n.kt)("p",null,"The most common use cases for the ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode usually centers around displaying Views, filtering entries based on certain conditions, and modifying the entry order."),(0,n.kt)("p",null,"Here are some of the most common use cases:"),(0,n.kt)("h4",{id:"displaying-a-view"},"Displaying a View:"),(0,n.kt)("p",null,"To display a View, all you need is the View ID:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="24"]\n')),(0,n.kt)("h4",{id:"displaying-entries-that-contain-a-specific-value"},"Displaying entries that contain a specific value:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="24" search_value="Silver Member" search_field="4"]\n')),(0,n.kt)("p",null,"This will show all entries that include the word \u201cSilver Member\u201d. The ",(0,n.kt)("inlineCode",{parentName:"p"},"search_value")," parameter allows you to specify a search value and the ",(0,n.kt)("inlineCode",{parentName:"p"},"search_field")," parameter restricts the search to a specific form field."),(0,n.kt)("p",null,"Watch the beginning of the tutorial video above for guidance on finding the ID of a specific form field in Gravity Forms."),(0,n.kt)("h4",{id:"changing-the-sort-direction-of-a-view"},"Changing the Sort Direction of a View:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="24" sort_direction="ASC" sort_field="4"]\n')),(0,n.kt)("p",null,"You can change the sort direction by specifying either \u201cASC\u201d or \u201cDESC\u201d. If you want to sort your View by a specific field, you can define a ",(0,n.kt)("inlineCode",{parentName:"p"},"sort_field")," value, in the form of a field ID."),(0,n.kt)("h4",{id:"limiting-entries-by-date-created"},"Limiting Entries by Date Created:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="24" start_date="2021-10-01" end_date="2021-10-31"]\n')),(0,n.kt)("p",null,"The date should be written using the ",(0,n.kt)("inlineCode",{parentName:"p"},"yyyy-mm-dd")," format. Alternatively, you can use ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/79-using-relative-start-dates-and-end-dates"},"relative dates")," like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="24" start_date="-1month" end_date="today"]\n')),(0,n.kt)("h2",{id:"advanced-use-cases"},"Advanced Use-Cases"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode can also be used for more advanced use cases. Here are some examples:"),(0,n.kt)("h4",{id:"filtering-a-view-using-advanced-search"},"Filtering a View Using Advanced Search:"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"search_operator")," parameter allows you to perform more advanced searches using different filters. For example, here\u2019s how you would display all entries that do not contain the word \u201cBaseball\u201d."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="24" search_value="baseball" search_operator="isnot"]\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"search_operator")," parameter accepts the following values: ",(0,n.kt)("inlineCode",{parentName:"p"},"is"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"isnot"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"like"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"in"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"contains"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"starts_with"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"ends_with"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"like"),"."),(0,n.kt)("p",null,"So, for example, if you wanted to display entries where the \u201cemail address\u201d field (with an ID of \u201c4\u201d) ends with \u201c@gravityview.co\u201d, you could use the following shortcode:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="24" search_value="@gravityview.co" search_field="4" search_operator="ends_with"]\n')),(0,n.kt)("h4",{id:"displaying-the-total-number-of-approved-entries"},"Displaying the total number of approved entries:"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/88-approving-or-rejecting-entries-in-gravityview"},"GravityView\u2019s approval system")," allows you to manually approve entries before they show up inside a View. To display the number of approved entries, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"detail")," parameter (more on this below) along with ",(0,n.kt)("inlineCode",{parentName:"p"},'search_field="is_approved"'),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="100" detail="total_entries" search_field="is_approved" search_value="1"]\n')),(0,n.kt)("p",null,"Displaying the number of disapproved or unapproved entries is also possible by changing the search value (i.e. ",(0,n.kt)("inlineCode",{parentName:"p"},'search_value="2"')," or ",(0,n.kt)("inlineCode",{parentName:"p"},'search_value="3"'),")."),(0,n.kt)("h4",{id:"displaying-entries-created-by-a-specific-user"},"Displaying Entries Created by a Specific User:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="42602" search_field="created_by" search_operator="is" search_value="8"]\n')),(0,n.kt)("p",null,'In this example, we\u2019re searching on the "created',"_",'by" field and setting the ',(0,n.kt)("inlineCode",{parentName:"p"},"search_value")," equal to the user ID (in this case, \u201c8\u201d)."),(0,n.kt)("h4",{id:"displaying-entries-created-by-the-currently-logged-in-user"},"Displaying Entries Created by the Currently Logged-In User:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="42602" search_field="created_by" search_operator="is" search_value="{user:ID}"]\n')),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"{user:ID}")," Merge Tag will automatically pull the ID of the currently logged-in user. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/281-the-createdby-merge-tag"},"More about the {user} Merge Tag.")),(0,n.kt)("h2",{id:"displaying-details-about-a-view"},"Displaying Details About a View"),(0,n.kt)("p",null,"The detail parameter can be used inside a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gravitykit.com/article/111-using-the-custom-content-field"},"Custom Content field")," to display information about the currently-displayed View."),(0,n.kt)("h4",{id:"displaying-the-total-number-of-entries-in-a-view"},"Displaying the total number of entries in a View:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="10" detail="total_entries"]\n')),(0,n.kt)("p",null,"This will display the total number of entries in the View (i.e. all entries, ",(0,n.kt)("em",{parentName:"p"},"not just the entries displayed"),")."),(0,n.kt)("h4",{id:"displaying-the-number-of-entries-visible-on-a-single-page"},"Displaying the number of entries visible on a single page:"),(0,n.kt)("p",null,'If you only want to display the number of entries visible on the page, you can use the "page',"_",'size" value:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview detail="page_size"]\n')),(0,n.kt)("h4",{id:"displaying-the-number-of-the-first-or-last-entry"},"Displaying the number of the first or last entry:"),(0,n.kt)("p",null,"You can also display the number of the first or last entry displayed on a page. If your View is embedded on a page or post, you\u2019ll need to specify the View ID as a shortcode parameter:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="8" detail="first_entry"]\n')),(0,n.kt)("p",null,"Let\u2019s say you have a View displaying entries 26-50 of a total of 100 entries. In this case, the output would be \u201c26\u201d."),(0,n.kt)("p",null,"You could also display the number of the last entry:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'[gravityview id="8" detail="last_entry"]\n')),(0,n.kt)("p",null,"In this case, the output would be \u201c50\u201d."),(0,n.kt)("h2",{id:"all-shortcode-parameters"},"All Shortcode Parameters"),(0,n.kt)("p",null,"Here is an exhaustive list of all the available ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode parameters:"),(0,n.kt)("h4",{id:"required"},"Required:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"id")," - The ID of the View you want to display")),(0,n.kt)("h4",{id:"searchingfiltering"},"Searching/filtering"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"search_value")," - Only display entries that contain the specified value"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"search_field")," - Restrict the ",(0,n.kt)("inlineCode",{parentName:"li"},"search_value")," to a specific form field. The value must be the field ID, unless you\u2019re searching on a meta field (e.g. \u201ccreated","_","by\u201d)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"search_operator"),' - Change the type of search to be performed. Default is "contains". Accepted values include: ',(0,n.kt)("inlineCode",{parentName:"li"},"is"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"isnot"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"<>"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"not in"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"in"),", ",(0,n.kt)("inlineCode",{parentName:"li"},">"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"<"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"contains"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"starts_with"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ends_with"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"like"),", ",(0,n.kt)("inlineCode",{parentName:"li"},">="),", ",(0,n.kt)("inlineCode",{parentName:"li"},"<="),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"start_date")," - Filter the results by date. This sets a limit on the earliest results shown. Dates should be written in ",(0,n.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD")," format. You can also use ",(0,n.kt)("a",{parentName:"li",href:"https://docs.gravitykit.com/article/79-using-relative-start-dates-and-end-dates"},"relative dates"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"end_date")," - Filter the results by date. This sets a limit on the latest results shown. Dates should be written in ",(0,n.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD"),"format. You can also use relative dates.")),(0,n.kt)("h4",{id:"sorting"},"Sorting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sort_direction")," - Defines how entries should be sorted. Accepted values are \u2018ASC\u2019 (for ascending) or \u2018DESC\u2019 (for descending)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sort_field")," - The form field that should be used to sort. The value must be a field ID.")),(0,n.kt)("h4",{id:"other"},"Other"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"post_id")," - When using the shortcode in a widget or template, you may want to specify a page where a View is embedded as the base URL for entry links. Default: NULL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"detail")," - Display specific information about a View (explained above)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"class")," - Add an HTML class to the view wrapper."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"single_title")," - Define a custom Single Entry page title (default: post/page title)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"back_link_label")," - Define a custom title for the Single Entry \u201cGo back\u201d link (default: \u201c\u2190 Go back\u201d)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"page_size")," - Defines the number of entries to display at a time. If no value is set, this will default to the value set in your ",(0,n.kt)("a",{parentName:"li",href:"https://docs.gravitykit.com/article/382-the-view-settings-meta-box"},"View Settings"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"offset")," - Defines the starting point of the View (i.e. setting the value to \u201c12\u201d means the View will display entries beginning with entry number 12).")),(0,n.kt)("h2",{id:"shortcode-limitations"},"Shortcode Limitations"),(0,n.kt)("p",null,"While the ",(0,n.kt)("inlineCode",{parentName:"p"},"[gravityview]")," shortcode is suitable for a range of different use cases, it does have some limitations that you should be aware of."),(0,n.kt)("p",null,"For example, it\u2019s not possible to search for multiple values or specify multiple search fields. It\u2019s also not possible to use AND/OR logic in searches. For this functionality, you\u2019ll need our ",(0,n.kt)("a",{parentName:"p",href:"https://www.gravitykit.com/extensions/advanced-filter/"},"Advanced Filtering extension"),"."))}c.isMDXComponent=!0}}]);