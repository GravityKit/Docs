"use strict";(self.webpackChunkgravitykit_docs=self.webpackChunkgravitykit_docs||[]).push([[27419],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>c});var l=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,l,a=function(e,t){if(null==e)return{};var i,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)i=n[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=l.createContext({}),s=function(e){var t=l.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(i),h=a,c=u["".concat(p,".").concat(h)]||u[h]||m[h]||n;return i?l.createElement(c,r(r({ref:t},d),{},{components:i})):l.createElement(c,r({ref:t},d))}));function c(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,r=new Array(n);r[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<n;s++)r[s]=i[s];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}h.displayName="MDXCreateElement"},70017:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var l=i(87462),a=(i(67294),i(3905));const n={id:"55382ee0e4b0a2d7e23f733a",number:"257",collectionId:"6076f9478996210f18bd33df",popularity:"0.8",publicUrl:"https://docs.gravitykit.com/article/257-formatting-guide-csv-import",viewCount:"6390",lastPublishedAt:"2022-10-19T00:41:51Z",changeOrigin:"unknown",name:"GravityImport: Preparing Your CSV for Import",slug:"257-formatting-guide-csv-import",status:"published",categories:["6155b0dee5648623c88e04fa"],keywords:["Import CSV","Formatting CSV"],createdBy:"59634",updatedBy:"80506",updatedAt:"2022-10-19T00:41:51Z",title:"GravityImport: Preparing Your CSV for Import",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/55382ee0e4b0a2d7e23f733a",pagination_prev:null,pagination_next:null,last_update:{date:new Date("2022-10-19T00:41:51.000Z"),author:"Rafael Ehlers"}},r="GravityImport: Preparing Your CSV for Import",o={unversionedId:"gravity-forms-add-ons/gravityimport/55382ee0e4b0a2d7e23f733a",id:"gravity-forms-add-ons/gravityimport/55382ee0e4b0a2d7e23f733a",title:"GravityImport: Preparing Your CSV for Import",description:"\u26a0\ufe0f This guide is for earlier versions of the GravityImport plugin (versions 1.x). The information provided here doesn't apply to the newest versions (version 2.x).",source:"@site/docs/gravity-forms-add-ons/gravityimport/257-formatting-guide-csv-import.mdx",sourceDirName:"gravity-forms-add-ons/gravityimport",slug:"/gravity-forms-add-ons/gravityimport/257-formatting-guide-csv-import",permalink:"/Docs/gravity-forms-add-ons/gravityimport/257-formatting-guide-csv-import",draft:!1,editUrl:"https://github.com/GravityKit/Docs/tree/main/docs/gravity-forms-add-ons/gravityimport/257-formatting-guide-csv-import.mdx",tags:[],version:"current",sidebarPosition:257,frontMatter:{id:"55382ee0e4b0a2d7e23f733a",number:"257",collectionId:"6076f9478996210f18bd33df",popularity:"0.8",publicUrl:"https://docs.gravitykit.com/article/257-formatting-guide-csv-import",viewCount:"6390",lastPublishedAt:"2022-10-19T00:41:51Z",changeOrigin:"unknown",name:"GravityImport: Preparing Your CSV for Import",slug:"257-formatting-guide-csv-import",status:"published",categories:["6155b0dee5648623c88e04fa"],keywords:["Import CSV","Formatting CSV"],createdBy:"59634",updatedBy:"80506",updatedAt:"2022-10-19T00:41:51Z",title:"GravityImport: Preparing Your CSV for Import",hsEditUrl:"https://secure.helpscout.net/docs/6076f9478996210f18bd33df/article/55382ee0e4b0a2d7e23f733a",pagination_prev:null,pagination_next:null,last_update:{date:"2022-10-19T00:41:51.000Z",author:"Rafael Ehlers"}},sidebar:"gravityimport"},p={},s=[{value:"Formatting details:",id:"formatting-details",level:3},{value:'Text Fields <a id="field-free-text"></a>',id:"text-fields-",level:2},{value:"Formatting notes:",id:"formatting-notes",level:4},{value:'Pre-Defined Text <a id="field-pre-defined-text"></a>',id:"pre-defined-text-",level:2},{value:"Single Values",id:"single-values",level:3},{value:"Multiple Values",id:"multiple-values",level:3},{value:'Name Field <a id="field-name"></a>',id:"name-field-",level:3},{value:'File Upload Field <a id="field-fileupload"></a>',id:"file-upload-field-",level:3},{value:"Single Upload",id:"single-upload",level:4},{value:"Multiple Uploads",id:"multiple-uploads",level:4},{value:'List Field <a id="field-list"></a>',id:"list-field-",level:3},{value:"Single Column Lists",id:"single-column-lists",level:4},{value:"Multiple Column Lists",id:"multiple-column-lists",level:4},{value:"Known issues with Multiple Column Lists",id:"known-issues-with-multiple-column-lists",level:4},{value:'Date Fields <a id="field-date"></a>',id:"date-fields-",level:3},{value:'Time Fields <a id="field-time"></a>',id:"time-fields-",level:3},{value:"If the &quot;Time Format&quot; is 24 hour:",id:"if-the-time-format-is-24-hour",level:4},{value:"If the &quot;Time Format&quot; is 12 hour:",id:"if-the-time-format-is-12-hour",level:4},{value:'Phone Fields <a id="field-phone"></a>',id:"phone-fields-",level:3},{value:'Entry Notes <a id="field-entry-notes"></a>',id:"entry-notes-",level:3},{value:'Post Fields <a id="field-post"></a>',id:"post-fields-",level:2},{value:"Post ID",id:"post-id",level:3},{value:"Post Image Field",id:"post-image-field",level:3},{value:"Post IDs",id:"post-ids",level:3},{value:"Post Tag Field",id:"post-tag-field",level:3},{value:"Post Category Field",id:"post-category-field",level:3},{value:'Product Option Fields <a id="field-option"></a>',id:"product-option-fields-",level:2},{value:"Multiple Options at once (&quot;Multiple&quot;)",id:"multiple-options-at-once-multiple",level:3},{value:"Single Option Choice (Default)",id:"single-option-choice-default",level:3},{value:"Overriding Option Prices",id:"overriding-option-prices",level:3},{value:'Entry Details <a id="field-meta"></a>',id:"entry-details-",level:2},{value:"Entry ID",id:"entry-id",level:3},{value:"Other Entry Details",id:"other-entry-details",level:3},{value:'Fields Not Implemented Yet <a id="field-not-enabled"></a>',id:"fields-not-implemented-yet-",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,l.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gravityimport-preparing-your-csv-for-import"},"GravityImport: Preparing Your CSV for Import"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u26a0\ufe0f This guide is for earlier versions of the GravityImport plugin (versions 1.x). The information provided here doesn't apply to the newest versions (version 2.x).")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If you exported entries from Gravity Forms, you would not need to modify the formatting.")," The details below include additional information and formatting CSV files when importing from other data sources."),(0,a.kt)("p",null,"All CSVs require a header row. A header row is one row with labels defining the content for each column of data. To enable header rows in Excel, ",(0,a.kt)("a",{parentName:"p",href:"https://support.office.com/en-gb/article/turn-excel-table-headers-on-or-off-c91d1742-312c-4480-820f-cf4b534c8b3b"},"read this article"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"formatting-details"},"Formatting details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-free-text"},"Text Fields")," (Text, Paragraph, Number, Hidden)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-pre-defined-text"},"Fields with Options")," (Checkbox, Drop Down, Radio, Multi Select)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-meta"},"Entry Details")," (Entry ID, status, User IP, etc)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-option"},"Product Option Fields")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-post"},"Post Fields (Title, Body, Tags, Etc.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-name"},"Name")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-fileupload"},"File Upload Field")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-list"},"List Field")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-date"},"Date Field")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-time"},"Time Field")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-phone"},"Phone Field")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-entry-notes"},"Entry Notes")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#field-not-enabled"},"Not Implemented Yet\u2026"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"text-fields-"},"Text Fields ",(0,a.kt)("a",{id:"field-free-text"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Single Line Text Field"),(0,a.kt)("li",{parentName:"ul"},"Paragraph Text Field"),(0,a.kt)("li",{parentName:"ul"},"Number Field"),(0,a.kt)("li",{parentName:"ul"},"Hidden Field")),(0,a.kt)("p",null,'These fields support "free text", which can be values saved as plain text.'),(0,a.kt)("h4",{id:"formatting-notes"},"Formatting notes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Number fields must be numeric"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Maximum Characters")," field settings are currently ignored")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"pre-defined-text-"},"Pre-Defined Text ",(0,a.kt)("a",{id:"field-pre-defined-text"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Imported values must match the text of the option exactly.")),(0,a.kt)("p",null,'For these fields, if the field has the "show values" checkbox checked, make sure that the imported text matches the "Value" values, not the "Label" values.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/555abdb2e4b027e1978e1257/file-CR7Vd9AsrQ.png",alt:null})," ",(0,a.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/555abdd4e4b01a224b424d25/file-YwgvNpAWzb.png",alt:null})),(0,a.kt)("h3",{id:"single-values"},"Single Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Radio Buttons Field"),(0,a.kt)("li",{parentName:"ul"},"Drop Down Field")),(0,a.kt)("p",null,"Only one value may be imported."),(0,a.kt)("p",null,"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Apple\n")),(0,a.kt)("h3",{id:"multiple-values"},"Multiple Values"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Multi Select Field"),(0,a.kt)("li",{parentName:"ul"},"Checkboxes Field")),(0,a.kt)("p",null,"Multiple values may be imported, separated by commas."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Apple,Orange,Pears\n")),(0,a.kt)("p",null,'Will import the "Apple", "Orange", and "Pears" options.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Apple,Pears\n")),(0,a.kt)("p",null,'Will import the "Apples" and "Pears" options.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Apple,Banana,Pears\n")),(0,a.kt)("p",null,'Will import the "Apples" and "Pears" options, because the Banana option does not exist for the field.'),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name-field-"},"Name Field ",(0,a.kt)("a",{id:"field-name"})),(0,a.kt)("p",null,'When mapping a Full Name, Prefixes ("Dr", "Ms", "Mr", etc) are not currently supported.'),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"file-upload-field-"},"File Upload Field ",(0,a.kt)("a",{id:"field-fileupload"})),(0,a.kt)("h4",{id:"single-upload"},"Single Upload"),(0,a.kt)("p",null,"Single uploads should be the full URL to the file."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://example.com/my-pretty-pony.png\n")),(0,a.kt)("h4",{id:"multiple-uploads"},"Multiple Uploads"),(0,a.kt)("p",null,"Multiple uploads should be formatted as a JSON array, ",(0,a.kt)("strong",{parentName:"p"},"without escaping slashes before the ",(0,a.kt)("inlineCode",{parentName:"strong"},"/")," character"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'["http://example.com/my-pretty-pony.png","http://example.com/my-pretty-kitty.png","http://example.com/my-pretty-doggy.png"]\n')),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"list-field-"},"List Field ",(0,a.kt)("a",{id:"field-list"})),(0,a.kt)("h4",{id:"single-column-lists"},"Single Column Lists"),(0,a.kt)("p",null,"Single column lists should have its values separated with a vertical pipe: ",(0,a.kt)("inlineCode",{parentName:"p"},"|"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Item 1|Item 2|Item 3\n")),(0,a.kt)("h4",{id:"multiple-column-lists"},"Multiple Column Lists"),(0,a.kt)("p",null,'If your field is named "Multiple Lists" for example and it has three columns, we suggest you create three columns on your CSV file and during the import process, map each one of these CSV columns to a column of your Multiple Lists field.'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/59c064d12c7d3a73488cf547/file-1ObsagUO3q.jpg",alt:null})),(0,a.kt)("p",null,"The CSV file with only one record:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Single List, Multiple Lists 1, Multiple Lists 2, Multiple Lists 3\nGravity|View,First Choice|3.2|3.3,Second Choice|4.2|4.3, Third Choice|5.2|5.3\n")),(0,a.kt)("p",null,"Here's how the mapping will look like:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/59c0662b042863033a1ceea3/file-8GHWrXSqqj.jpg",alt:null})),(0,a.kt)("p",null,"The result:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://s3.amazonaws.com/helpscout.net/docs/assets/54c58489e4b051242988532c/images/59c067772c7d3a73488cf550/file-QaaOaNv9o2.jpg",alt:null})),(0,a.kt)("h4",{id:"known-issues-with-multiple-column-lists"},"Known issues with Multiple Column Lists"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Gravity Forms, the Field columns must have labels. If the column labels are empty, the values will not be properly stored")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"date-fields-"},"Date Fields ",(0,a.kt)("a",{id:"field-date"})),(0,a.kt)("p",null,"yyyy-mm-dd is a date format you can always use, but you can also format the date based on the Date Format of the target Date field. Make sure the Gravity Forms field's Date Format matches your chosen format."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.evernote.com/l/AATNECsaDQhOIJ4pkQBislwB0k4SL08uK90B/image.png",alt:"Date Format field setting"})),(0,a.kt)("p",null,'Below are how "November 17, 2013" would be formatted based on default Gravity Forms date formats:'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mm/dd/yyyy")," =",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"11/17/2013")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd/mm/yyyy")," =",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"17/11/2013")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd-mm-yyyy")," =",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"17-11-2013")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd.mm.yyyy")," =",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"17.11.2013")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yyyy/mm/dd")," =",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"2013/11/17")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yyyy-mm-dd")," =",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"2013-11-17")," ",(0,a.kt)("em",{parentName:"li"},"(preferred)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"yyyy.mm.dd")," =",">"," ",(0,a.kt)("inlineCode",{parentName:"li"},"2013.11.17"))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"time-fields-"},"Time Fields ",(0,a.kt)("a",{id:"field-time"})),(0,a.kt)("p",null,"You must use two digits for hours and minutes, you can't use a single number for hours. Example: ",(0,a.kt)("inlineCode",{parentName:"p"},"9:00")," is invalid; use ",(0,a.kt)("inlineCode",{parentName:"p"},"09:00")," instead."),(0,a.kt)("h4",{id:"if-the-time-format-is-24-hour"},'If the "Time Format" is 24 hour:'),(0,a.kt)("p",null,"The field should have Hours and Minutes, separated by a colon ",(0,a.kt)("inlineCode",{parentName:"p"},":"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HH:MM\n")),(0,a.kt)("h4",{id:"if-the-time-format-is-12-hour"},'If the "Time Format" is 12 hour:'),(0,a.kt)("p",null,"The field should have Hours and Minutes, separated by a colon ",(0,a.kt)("inlineCode",{parentName:"p"},":"),", then a space and ",(0,a.kt)("inlineCode",{parentName:"p"},"AM")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"PM"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"HH:MM AM\n")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"phone-fields-"},"Phone Fields ",(0,a.kt)("a",{id:"field-phone"})),(0,a.kt)("p",null,"If the Phone Field is using the ",(0,a.kt)("strong",{parentName:"p"},"US/Canada format"),", the validation will check for ",(0,a.kt)("inlineCode",{parentName:"p"},"(###) ###-####")," phone number formats:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"(800) 555-1212\n")),(0,a.kt)("p",null,"If using the ",(0,a.kt)("strong",{parentName:"p"},"International setting"),", no validation occurs. If you encounter any import issues, you may want to consider updating your form to use International phone number format during import."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"entry-notes-"},"Entry Notes ",(0,a.kt)("a",{id:"field-entry-notes"})),(0,a.kt)("p",null,"Entry notes can be added to imported rows. The notes can be formatted as plain text, or as a JSON array of multiple notes."),(0,a.kt)("p",null,"Plain text example: ",(0,a.kt)("inlineCode",{parentName:"p"},"This person has been amazing to work with.")),(0,a.kt)("p",null,"JSON example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'["Called client on June 23 - went well.", "July 4, they were on vacation. I left a message.", "August 12, they send me a pony!"]\n')),(0,a.kt)("p",null,'You can also specify the user to assign to the notes by mapping the "Entry Note Creator" dropdown. This should be the ID of the user to assign the note to. Otherwise, the note will default to being created by the currently logged in user.'),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"post-fields-"},"Post Fields ",(0,a.kt)("a",{id:"field-post"})),(0,a.kt)("h3",{id:"post-id"},"Post ID"),(0,a.kt)("p",null,"If the Post ID is mapped to be imported, the import will attempt to update an existing post with that ID. ",(0,a.kt)("em",{parentName:"p"},"If a post with that Post ID does not exist, none of the post fields will be processed.")),(0,a.kt)("p",null,"If a Post ID is not mapped, then a new post will be created."),(0,a.kt)("h3",{id:"post-image-field"},"Post Image Field"),(0,a.kt)("p",null,"Post Image data should have values separated by ",(0,a.kt)("inlineCode",{parentName:"p"},"|:|"),", in the following order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"File URL ",(0,a.kt)("strong",{parentName:"li"},"(required)")),(0,a.kt)("li",{parentName:"ul"},"Image Title"),(0,a.kt)("li",{parentName:"ul"},"Image Caption"),(0,a.kt)("li",{parentName:"ul"},"Image Description")),(0,a.kt)("p",null,"Example format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://example.com/my-pretty-pony.png|:|My Pretty Pony|:|This is my pretty pony running in a field|:|What a wonderful day I had with my pony. The field was so green!\n")),(0,a.kt)("p",null,"If a value is empty, you should still include the separator if there is another value after it. In this example, we only want to include the File URL and the Image Description. Note the additional separators:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"http://example.com/my-pretty-pony.png|:||:||:|What a wonderful day I had with my pony. The field was so green!\n")),(0,a.kt)("h3",{id:"post-ids"},"Post IDs"),(0,a.kt)("p",null,"If you are passing a Post ID to the importer, the post must exist on the site. If not, the entry will not be created."),(0,a.kt)("h3",{id:"post-tag-field"},"Post Tag Field"),(0,a.kt)("p",null,"Post tags should be formatted with tags separated by commas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Tag 1,Tag 2,Tag 3\n")),(0,a.kt)("h3",{id:"post-category-field"},"Post Category Field"),(0,a.kt)("p",null,"Post categories should be formatted as a JSON array, with the ID of the category as the value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"13, 39, 27\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"product-option-fields-"},"Product Option Fields ",(0,a.kt)("a",{id:"field-option"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Since Version 1.4")),(0,a.kt)("p",null,"Note: If importing a Gravity Forms export file, you won't need to modify anything."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.evernote.com/l/AASMSBcc7dZEyI2mx8UKNwqIfuSisvdbcFIB/image.png",alt:"Product Option Choices"})),(0,a.kt)("h3",{id:"multiple-options-at-once-multiple"},'Multiple Options at once ("Multiple")'),(0,a.kt)("p",null,"To import multiple options at once, map your data column to the Option field that has ",(0,a.kt)("inlineCode",{parentName:"p"},"(Selected)")," added to the end of the Option field name."),(0,a.kt)("p",null,'By default, Gravity Forms exports options as their own column. You can map each Option individually, or you can import multiple Options at once by mapping with the field\'s "(Full)" field.'),(0,a.kt)("p",null,"If you want to set multiple options at once, separate multiple Choice Labels or Choice Values with commas."),(0,a.kt)("p",null,"This entry will be imported with all three Option Choices selected:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"First Choice,Second Choice,Third Choice\n")),(0,a.kt)("p",null,"This entry will be also imported with all three Option Choices selected:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"First Value,Second Value,Third Value\n")),(0,a.kt)("p",null,"Just as with the Single Choices, you can override the prices that are set in the form by setting your own:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"First Choice|49.99,Second Choice|99.99,Third Choice|129.99\n")),(0,a.kt)("p",null,"Note: If you have commas in your Choice Label or Choice Value, make sure to add a backslash before each comma, like this: ( ",(0,a.kt)("inlineCode",{parentName:"p"},"\\,"),")"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"First Choice\\, with Comma,Second Choice no Comma,Third Choice no Comma\n")),(0,a.kt)("h3",{id:"single-option-choice-default"},"Single Option Choice (Default)"),(0,a.kt)("p",null,'The data must match the Choice Label for the Option you are importing. If the "show values" checkbox is selected, you can also use the Choice Value.'),(0,a.kt)("p",null,"For the example, both ",(0,a.kt)("inlineCode",{parentName:"p"},"First Choice")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"First Value"),' will work. If empty, the Option will not be selected. You can override the price using "Overriding Option Prices" format below.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"First Choice\n")),(0,a.kt)("h3",{id:"overriding-option-prices"},"Overriding Option Prices"),(0,a.kt)("p",null,"When you are overriding prices that are set in the form, you will need to use the following format:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{Option Label or Option Value}|{Option Price}\n")),(0,a.kt)("p",null,'If you have an Option with a label of "First Option", a value of "First", and a price of $15.00, it would be formatted like ',(0,a.kt)("inlineCode",{parentName:"p"},"First|15.00")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"First Option|15.00"),". The separator is a vertical pipe bar ",(0,a.kt)("inlineCode",{parentName:"p"},"|")," character."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"entry-details-"},"Entry Details ",(0,a.kt)("a",{id:"field-meta"})),(0,a.kt)("h3",{id:"entry-id"},"Entry ID"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Since Version 1.1")),(0,a.kt)("p",null,"Specify an Entry ID number, and the Importer will update an existing entry, if found. If an entry is specified but not found, there will be an error. If empty, a new entry will be created."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When doing this, the existing entry will be completely overwritten"),"\u2014nothing will remain of the original entry. So make sure you have a backup and are completely aware of the risks of overwriting entries. If possible, we recommend adding new entries and deleting old ones. You have been warned!"),(0,a.kt)("h3",{id:"other-entry-details"},"Other Entry Details"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Entry Status"),": The current status of the entry. Valid options are: ",(0,a.kt)("inlineCode",{parentName:"li"},"active"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"spam"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"trash")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User Agent"),": Provides the name and version of both the browser and operating system from which the entry was submitted. Example: ",(0,a.kt)("inlineCode",{parentName:"li"},"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_3) AppleWebKit/600.5.17 (KHTML, like Gecko) Version/8.0.5 Safari/600.5.17"),". ",(0,a.kt)("strong",{parentName:"li"},"Note:")," If blank, the Entry Importer will add a custom User Agent to identify the entry as being imported by the plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is Read"),": Indicates if the entry has been read. Set value to ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," for entries that are read and ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," for entries that have not been read."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Is Starred"),": Indicates if the entry has been starred (i.e marked with a star). Set value to ",(0,a.kt)("inlineCode",{parentName:"li"},"1")," for entries that are starred and ",(0,a.kt)("inlineCode",{parentName:"li"},"0")," for entries that are not starred."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"User IP"),": Client IP of user who submitted the form."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source URL"),": Source URL of page that contained the form when it was submitted.")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"fields-not-implemented-yet-"},"Fields Not Implemented Yet ",(0,a.kt)("a",{id:"field-not-enabled"})),(0,a.kt)("p",null,"These field types have not yet been added to the Importer. We're working on adding support for these."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Coupon Fields"),(0,a.kt)("li",{parentName:"ul"},"Signature Fields")))}m.isMDXComponent=!0}}]);