(this.webpackJsonpsnapshot=this.webpackJsonpsnapshot||[]).push([[0],{36:function(e,t,a){e.exports=a(64)},37:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);a(37);var n=a(13),r=a(14),c=a(15),l=a(17),u=a(35),o=a(0),i=a.n(o),m=a(31),s=a.n(m),h=a(12),f=a(32),E=a.n(f),d=Object(o.createContext)(),b=function(e){var t=Object(o.useState)([]),a=Object(h.a)(t,2),n=a[0],r=a[1],c=Object(o.useState)(!0),l=Object(h.a)(c,2),u=l[0],m=l[1];return i.a.createElement(d.Provider,{value:{images:n,loading:u,runSearch:function(e){E.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat("636e1481b4f3c446d26b8eb6ebfe7127","&tags=").concat(e,"&per_page=24&format=json&nojsoncallback=1")).then((function(e){r(e.data.photos.photo),m(!1)})).catch((function(e){console.log("Encountered an error with fetching and parsing data",e)}))}}},e.children)},p=a(7),v=a(6),g=function(e){var t=e.handleSubmit,a=e.history,n=Object(o.useState)(""),r=Object(h.a)(n,2),c=r[0],l=r[1];return i.a.createElement("form",{className:"search-form",onSubmit:function(e){return t(e,a,c)}},i.a.createElement("input",{type:"text",name:"search",placeholder:"Search...",onChange:function(e){l(e.target.value)},value:c}),i.a.createElement("button",{type:"submit",className:"search-button ".concat(c.trim()?"active":null),disabled:!c.trim()},i.a.createElement("svg",{height:"32",width:"32"},i.a.createElement("path",{d:"M19.427 21.427a8.5 8.5 0 1 1 2-2l5.585 5.585c.55.55.546 1.43 0 1.976l-.024.024a1.399 1.399 0 0 1-1.976 0l-5.585-5.585zM14.5 21a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13z",fill:"#ffffff",fillRule:"evenodd"}))))},j=function(){return i.a.createElement("nav",{className:"main-nav"},i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(p.b,{to:"/mountain"},"Mountain")),i.a.createElement("li",null,i.a.createElement(p.b,{to:"/snow"},"Snow")),i.a.createElement("li",null,i.a.createElement(p.b,{to:"/bird"},"Birds")),i.a.createElement("li",null,i.a.createElement(p.b,{to:"/food"},"Food"))))},O=function(e){var t=e.history,a=e.handleSubmit;return i.a.createElement("div",null,i.a.createElement("h1",null,"SnapShot"),i.a.createElement(g,{history:t,handleSubmit:a}),i.a.createElement(j,null))},S=function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"No Images Found"),i.a.createElement("p",null,"Please try a different search term"))},y=function(e){var t=e.url,a=e.title;return i.a.createElement("li",null,i.a.createElement("img",{src:t,alt:a}))},T=function(e){var t,a,n=e.data;return n.length>0?t=n.map((function(e){var t=e.farm,a=e.server,n=e.id,r=e.secret,c=e.title,l="https://farm".concat(t,".staticflickr.com/").concat(a,"/").concat(n,"_").concat(r,"_m.jpg");return i.a.createElement(y,{url:l,key:n,alt:c})})):a=i.a.createElement(S,null),i.a.createElement("div",null,i.a.createElement("ul",null,t),a)},k=function(){return i.a.createElement("div",{className:"loader"})},w=function(e){var t=e.searchTerm,a=Object(o.useContext)(d),n=a.images,r=a.loading,c=a.runSearch;return Object(o.useEffect)((function(){c(t)}),[t]),i.a.createElement("div",{className:"photo-container"},r?i.a.createElement(k,null):i.a.createElement(T,{data:n}))},N=function(e){var t=e.searchTerm;return i.a.createElement("div",null,i.a.createElement("h2",null,t," Pictures"),i.a.createElement(w,{searchTerm:t}))},P=function(e){var t=e.searchTerm;return i.a.createElement("div",null,i.a.createElement("h2",null,t," Images"),i.a.createElement(w,{searchTerm:t}))},C=function(){return i.a.createElement("div",{className:"not-found"},i.a.createElement("h2",null,"Page Not Found"))},x=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=t.call.apply(t,[this].concat(c))).handleSubmit=function(e,t,a){e.preventDefault(),e.currentTarget.reset();var n="/search/".concat(a);t.push(n)},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement(b,null,i.a.createElement(p.a,{basename:"/SnapScout"},i.a.createElement("div",{className:"container"},i.a.createElement(v.b,{render:function(t){return i.a.createElement(O,{handleSubmit:e.handleSubmit,history:t.history})}}),i.a.createElement(v.d,null,i.a.createElement(v.b,{exact:!0,path:"/",render:function(){return i.a.createElement(v.a,{to:"/mountain"})}}),i.a.createElement(v.b,{path:"/mountain",render:function(){return i.a.createElement(N,{searchTerm:"mountain"})}}),i.a.createElement(v.b,{path:"/snow",render:function(){return i.a.createElement(N,{searchTerm:"snow"})}}),i.a.createElement(v.b,{path:"/bird",render:function(){return i.a.createElement(N,{searchTerm:"bird"})}}),i.a.createElement(v.b,{path:"/food",render:function(){return i.a.createElement(N,{searchTerm:"food"})}}),i.a.createElement(v.b,{path:"/search/:searchInput",render:function(e){return i.a.createElement(P,{searchTerm:e.match.params.searchInput})}}),i.a.createElement(v.b,{component:C})))))}}]),a}(o.Component),I=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"connectedCallback",value:function(){this.mountPoint=document.createElement("div"),this.appendChild(this.mountPoint),s.a.render(i.a.createElement(x,null),this.mountPoint)}}]),a}(Object(u.a)(HTMLElement));customElements.define("snapshot-widget",I)}},[[36,1,2]]]);
//# sourceMappingURL=main.e7fec359.chunk.js.map