webpackJsonp([3],{g2sI:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("WT6e"),u=e("DN/p"),o=e("YKDW"),a=e("bfOx"),i=e("v3rs"),r=this&&this.__awaiter||function(n,l,e,t){return new(e||(e=Promise))(function(u,o){function a(n){try{r(t.next(n))}catch(n){o(n)}}function i(n){try{r(t.throw(n))}catch(n){o(n)}}function r(n){n.done?u(n.value):new e(function(l){l(n.value)}).then(a,i)}r((t=t.apply(n,l||[])).next())})},d=this&&this.__generator||function(n,l){var e,t,u,o,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,t&&(u=t[2&o[0]?"return":o[0]?"throw":"next"])&&!(u=u.call(t,o[1])).done)return u;switch(t=0,u&&(o=[0,u.value]),o[0]){case 0:case 1:u=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(u=(u=a.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){a.label=o[1];break}if(6===o[0]&&a.label<u[1]){a.label=u[1],u=o;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(o);break}u[2]&&a.ops.pop(),a.trys.pop();continue}o=l.call(n,a)}catch(n){o=[6,n],t=0}finally{e=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},c=function(){function n(n,l,e,t,u){this.halamanService=n,this.translate=l,this.router=e,this.route=t,this.indexService=u,this.parentlist=[],this.urlendpoint="/index/page/",this.toggleSidebar=!1,this.translate.addLangs(["en","fr","ur","es","it","fa","de","zh-CHS"]),this.translate.setDefaultLang("en");var o=this.translate.getBrowserLang();this.translate.use(o.match(/en|fr|ur|es|it|fa|de|zh-CHS/)?o:"en"),this.getAllMenu()}return n.prototype.ngAfterViewInit=function(){},n.prototype.ngOnInit=function(){},n.prototype.getAllMenu=function(){return r(this,void 0,void 0,function(){var n=this;return d(this,function(l){return this.halamanService.get("api/menu").subscribe(function(l){n.allmenu=JSON.parse(l._body)},function(n){console.log(n)}),[2]})})},n.prototype.showSidebar=function(){var n=this;this.toggleSidebar=!this.toggleSidebar,setTimeout(function(){n.toggleSidebar?document.getElementById("sidebarcomp").setAttribute("style","left:235px ;"):document.getElementById("sidebarcomp").removeAttribute("style")},50)},n.prototype.navigateto=function(){this.router.navigate(["index/page/p/contact"])},n}(),s=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),p=e("OE0E"),f=this&&this.__awaiter||function(n,l,e,t){return new(e||(e=Promise))(function(u,o){function a(n){try{r(t.next(n))}catch(n){o(n)}}function i(n){try{r(t.throw(n))}catch(n){o(n)}}function r(n){n.done?u(n.value):new e(function(l){l(n.value)}).then(a,i)}r((t=t.apply(n,l||[])).next())})},m=this&&this.__generator||function(n,l){var e,t,u,o,a={label:0,sent:function(){if(1&u[0])throw u[1];return u[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,t&&(u=t[2&o[0]?"return":o[0]?"throw":"next"])&&!(u=u.call(t,o[1])).done)return u;switch(t=0,u&&(o=[0,u.value]),o[0]){case 0:case 1:u=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,t=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(u=(u=a.trys).length>0&&u[u.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!u||o[1]>u[0]&&o[1]<u[3])){a.label=o[1];break}if(6===o[0]&&a.label<u[1]){a.label=u[1],u=o;break}if(u&&a.label<u[2]){a.label=u[2],a.ops.push(o);break}u[2]&&a.ops.pop(),a.trys.pop();continue}o=l.call(n,a)}catch(n){o=[6,n],t=0}finally{e=u=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},g=function(){function n(n,l,e,t,u){this.indexService=n,this.routeActive=l,this.router=e,this.halamanService=t,this.serviceTitle=u,this.pagecontent="",this.idpage="",this.idhome="",this.title="PT BPR DIORI GANDA",this.show=!1}return n.prototype.ngOnInit=function(){var n=this;this.show=!this.show,this.getHome(),this.routeActive.params.forEach(function(l){n.idpage=l.page,void 0!==n.idpage&&n.showPage(n.idpage)})},n.prototype.ngAfterViewInit=function(){},n.prototype.showPage=function(n){var l=this;this.halamanService.get("api/page/"+n).subscribe(function(n){l.pagecontent=JSON.parse(n._body).content,l.title=JSON.parse(n._body).namahalaman,document.getElementById("content").innerHTML=l.pagecontent,l.setTitle(l.title.toUpperCase())},function(n){console.log(n)})},n.prototype.getHome=function(){return f(this,void 0,void 0,function(){var n=this;return m(this,function(l){return this.halamanService.get("api/menu").subscribe(function(l){var e=JSON.parse(l._body);for(var t in e)"Home"===e[t].namamenu&&(n.router.isActive("/index",!0)||n.router.isActive("/",!0))&&n.showPage(e[t].page[0])},function(n){console.log(n)}),[2]})})},n.prototype.setTitle=function(n){this.serviceTitle.setTitle(n)},n}(),v=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),h=function(){},b=e("G3ZB"),x=e("VJIW"),y=e("v7sp"),w=e("Xjw4"),k=e("6uCv"),C=e("c7mC"),O=e("98Xm"),M=e("TBbh"),_=function(){function n(){}return n.prototype.transform=function(n,l,e){if(void 0===e&&(e=!1),console.log(n),void 0!==n){var t=e?-1:1;return n.sort(function(n,e){var u=n[l],o=e[l];return u===o?0:u<o?-1*t:1*t})}},n}(),P=t["\u0275crt"]({encapsulation:0,styles:[["body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{background-color:#add8e6}.main-content[_ngcontent-%COMP%]{margin:55px auto;width:100%;max-width:80%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;font-size:14px;font-family:'Times New Roman',Times,serif}.main-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]{width:80%;padding:20px 10px 10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.main-content[_ngcontent-%COMP%]   .left-content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] > {width:100%}.main-content[_ngcontent-%COMP%]   .right-content[_ngcontent-%COMP%]{min-width:250px;width:20%;background-color:#0ff;padding:10px}.main-content[_ngcontent-%COMP%]   #carouselExampleIndicators[_ngcontent-%COMP%]{min-height:150px}.sidebar[_ngcontent-%COMP%]{border-radius:0;position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:5px 5px 40px;z-index:500;top:50px;left:350px;width:235px;height:100%;margin-left:-235px;border:none;overflow-y:auto;background-color:rgba(175,240,186,.486);bottom:0;overflow-x:hidden;-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.sidebar[_ngcontent-%COMP%]   .sidebar-panel[_ngcontent-%COMP%]{max-width:235px;-ms-flex-item-align:auto;-ms-grid-row-align:auto;align-self:auto;-ms-flex-line-pack:center;align-content:center;margin:0 auto}.main-container[_ngcontent-%COMP%]{padding:0;-ms-overflow-x:hidden;overflow-y:scroll;position:relative;overflow:hidden;bottom:0;font-family:'Segoe UI',Tahoma,Geneva,Verdana,sans-serif;font-size:12px;margin:50px 150px 0 350px}.main-container[_ngcontent-%COMP%]   #carouselExampleIndicators[_ngcontent-%COMP%]{min-height:150px}.sidebuton[_ngcontent-%COMP%]{display:none;z-index:150}@media screen and (max-width:767px){.row-offcanvas[_ngcontent-%COMP%]{position:relative;-webkit-transition:all .25s ease-out;transition:all .25s ease-out}.row-offcanvas-right[_ngcontent-%COMP%]{right:0}.row-offcanvas-left[_ngcontent-%COMP%]{left:0}.row-offcanvas-right[_ngcontent-%COMP%]   .sidebar-offcanvas[_ngcontent-%COMP%]{right:-100%}.row-offcanvas-right.active[_ngcontent-%COMP%]   .sidebar-offcanvas[_ngcontent-%COMP%]{right:-50%}.row-offcanvas-left[_ngcontent-%COMP%]   .sidebar-offcanvas[_ngcontent-%COMP%]{left:-100%}.row-offcanvas-left.active[_ngcontent-%COMP%]   .sidebar-offcanvas[_ngcontent-%COMP%]{left:-50%}.row-offcanvas-right.active[_ngcontent-%COMP%]{right:50%}.row-offcanvas-left.active[_ngcontent-%COMP%]{left:50%}.sidebar-offcanvas[_ngcontent-%COMP%]{position:absolute;top:0;width:50%}.main-container[_ngcontent-%COMP%]{margin-left:0;margin-right:0}.sidebar[_ngcontent-%COMP%]{left:0}.sidebuton[_ngcontent-%COMP%]{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important;z-index:999!important;position:fixed;top:58px;left:3px}}@media screen and (min-width:767px){.main-container[_ngcontent-%COMP%]{margin-left:250px!important;margin-right:2%!important}.sidebar[_ngcontent-%COMP%]{left:250px!important}}@media screen and (min-width:896px){.main-container[_ngcontent-%COMP%]{margin-left:350px!important;margin-right:10%!important}.sidebar[_ngcontent-%COMP%]{left:350px!important}}"]],data:{}});function R(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,10,"li",[["class","nav-item "]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](2,0,null,null,7,"a",[["class","nav-link bg-info mt-1"],["data-toggle","collapse"],["href","javascript:void(0)"]],[[8,"id",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](3,671744,null,0,a.n,[a.l,a.a,w.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](4,1),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](6,0,null,null,0,"i",[["class","fa fa-fw fa-home"]],null,null,null,null,null)),(n()(),t["\u0275ted"](7,null,["","\n        "])),t["\u0275ppd"](8,1),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275ted"](-1,null,["\n      "]))],function(n,l){n(l,3,0,n(l,4,0,"/index/"))},function(n,l){n(l,2,0,t["\u0275inlineInterpolate"](1,"",l.parent.context.$implicit.page,""),t["\u0275nov"](l,3).target,t["\u0275nov"](l,3).href),n(l,7,0,t["\u0275unv"](l,7,0,t["\u0275nov"](l,9).transform(t["\u0275unv"](l,7,0,n(l,8,0,t["\u0275nov"](l.parent.parent,0),l.parent.context.$implicit.namamenu)))))})}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ul",[["class","navbar-nav "]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275and"](16777216,null,null,1,null,R)),t["\u0275did"](3,16384,null,0,w.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275ted"](-1,null,["\n      \n    "]))],function(n,l){n(l,3,0,"Home"===l.context.$implicit.namamenu)},null)}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"a",[["class","dropdown-item "],["href","javascript:void(0)"]],[[8,"id",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](1,671744,null,0,a.n,[a.l,a.a,w.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](2,2),(n()(),t["\u0275ted"](3,null,["\n             ","\n          "])),t["\u0275ppd"](4,1),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef])],function(n,l){n(l,1,0,n(l,2,0,l.component.urlendpoint,l.context.$implicit.page[0]))},function(n,l){n(l,0,0,t["\u0275inlineInterpolate"](1,"",l.context.$implicit.page[0],""),t["\u0275nov"](l,1).target,t["\u0275nov"](l,1).href),n(l,3,0,t["\u0275unv"](l,3,0,t["\u0275nov"](l,5).transform(t["\u0275unv"](l,3,0,n(l,4,0,t["\u0275nov"](l.parent.parent.parent,0),l.context.$implicit.namamenu)))))})}function T(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,21,"li",[["class","nav-item dropdown bg-info mt-1"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(n,l,e){var u=!0;return"keyup.esc"===l&&(u=!1!==t["\u0275nov"](n,1).closeFromOutsideEsc()&&u),"document:click"===l&&(u=!1!==t["\u0275nov"](n,1).closeFromClick(e)&&u),u},null,null)),t["\u0275did"](1,212992,null,2,k.a,[C.a,t.NgZone],null,null),t["\u0275qud"](335544320,1,{_menu:0}),t["\u0275qud"](335544320,2,{_anchor:0}),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](5,0,null,null,7,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,6).toggleOpen()&&u),u},null,null)),t["\u0275did"](6,16384,null,0,k.d,[k.a,t.ElementRef],null,null),t["\u0275prd"](2048,[[2,4]],k.b,null,[k.d]),(n()(),t["\u0275ted"](8,null,["\n          ","\n          "])),t["\u0275ppd"](9,1),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275eld"](11,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](14,0,null,null,6,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),t["\u0275did"](15,16384,[[1,4]],0,k.c,[k.a,t.ElementRef,t.Renderer2],null,null),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275and"](16777216,null,null,2,null,S)),t["\u0275did"](18,802816,null,0,w.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275ppd"](19,3),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n      "]))],function(n,l){n(l,1,0),n(l,18,0,t["\u0275unv"](l,18,0,n(l,19,0,t["\u0275nov"](l.parent.parent,2),l.parent.context.$implicit.value,"namamenu",!1)))},function(n,l){n(l,0,0,t["\u0275nov"](l,1).isOpen()),n(l,5,0,t["\u0275nov"](l,6).dropdown.isOpen()),n(l,8,0,t["\u0275unv"](l,8,0,t["\u0275nov"](l,10).transform(t["\u0275unv"](l,8,0,n(l,9,0,t["\u0275nov"](l.parent.parent,0),l.parent.context.$implicit.key))))),n(l,14,0,!0,t["\u0275nov"](l,15).dropdown.isOpen(),t["\u0275nov"](l,15).placement)})}function F(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ul",[["class","navbar-nav"],["data-toggle","collapse"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275and"](16777216,null,null,1,null,T)),t["\u0275did"](3,16384,null,0,w.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275ted"](-1,null,["\n    "]))],function(n,l){n(l,3,0,""!==l.context.$implicit.key)},null)}function j(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,8,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](2,0,null,null,5,"a",[["class","nav-link bg-info mt-1"],["data-toggle","collapse"],["href","javascript:void(0)"]],[[8,"id",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,3).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&u),u},null,null)),t["\u0275did"](3,671744,null,0,a.n,[a.l,a.a,w.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](4,2),(n()(),t["\u0275ted"](5,null,["\n          ","\n        "])),t["\u0275ppd"](6,1),t["\u0275pid"](131072,o.i,[o.j,t.ChangeDetectorRef]),(n()(),t["\u0275ted"](-1,null,["\n      "]))],function(n,l){n(l,3,0,n(l,4,0,l.component.urlendpoint,l.parent.context.$implicit.page[0]))},function(n,l){n(l,2,0,t["\u0275inlineInterpolate"](1,"",l.parent.context.$implicit.page,""),t["\u0275nov"](l,3).target,t["\u0275nov"](l,3).href),n(l,5,0,t["\u0275unv"](l,5,0,t["\u0275nov"](l,7).transform(t["\u0275unv"](l,5,0,n(l,6,0,t["\u0275nov"](l.parent.parent,0),l.parent.context.$implicit.namamenu)))))})}function A(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"ul",[["class","navbar-nav"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275and"](16777216,null,null,1,null,j)),t["\u0275did"](3,16384,null,0,w.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275ted"](-1,null,["\n    "]))],function(n,l){n(l,3,0,""===l.context.$implicit.parentmenu&&"Home"!==l.context.$implicit.namamenu)},null)}function D(n){return t["\u0275vid"](0,[t["\u0275pid"](0,O.a,[]),t["\u0275pid"](0,M.a,[]),t["\u0275pid"](0,_,[]),(n()(),t["\u0275eld"](3,0,null,null,63,"nav",[["class","navbar navbar-expand-lg navbar-light bg-info fixed-top shadow ml-auto"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](5,0,null,null,1,"a",[["class","navbar-brand"],["href","/index"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["BANK DIORI GANDA"])),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](8,0,null,null,3,"button",[["aria-controls","navbarTogglerDemo02"],["aria-expanded","false"],["aria-label","Toggle navigation"],["class","navbar-toggler"],["data-target","#navbarTogglerDemo02"],["data-toggle","collapse"],["type","button"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](10,0,null,null,0,"span",[["class","navbar-toggler-icon"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](13,0,null,null,52,"div",[["class","collapse navbar-collapse "],["id","navbarTogglerDemo02"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n    "])),(n()(),t["\u0275eld"](15,0,null,null,1,"div",[["class","mr-auto"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](19,802816,null,0,w.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275ted"](-1,null,["\n\n    "])),(n()(),t["\u0275and"](16777216,null,null,3,null,F)),t["\u0275did"](22,802816,null,0,w.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),t["\u0275ppd"](23,3),t["\u0275ppd"](24,2),(n()(),t["\u0275ted"](-1,null,["\n\n    "])),(n()(),t["\u0275and"](16777216,null,null,1,null,A)),t["\u0275did"](27,802816,null,0,w.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](29,0,null,null,26,"ul",[["class","navbar-nav"],["data-toggle","collapse"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](31,0,null,null,23,"li",[["class","nav-item dropdown bg-info mt-1"],["ngbDropdown",""]],[[2,"show",null]],[[null,"keyup.esc"],["document","click"]],function(n,l,e){var u=!0;return"keyup.esc"===l&&(u=!1!==t["\u0275nov"](n,32).closeFromOutsideEsc()&&u),"document:click"===l&&(u=!1!==t["\u0275nov"](n,32).closeFromClick(e)&&u),u},null,null)),t["\u0275did"](32,212992,null,2,k.a,[C.a,t.NgZone],null,null),t["\u0275qud"](335544320,3,{_menu:0}),t["\u0275qud"](335544320,4,{_anchor:0}),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](36,0,null,null,4,"a",[["aria-haspopup","true"],["class","nav-link dropdown-toggle"],["href","javascript:void(0)"],["ngbDropdownToggle",""]],[[1,"aria-expanded",0]],[[null,"click"]],function(n,l,e){var u=!0;return"click"===l&&(u=!1!==t["\u0275nov"](n,37).toggleOpen()&&u),u},null,null)),t["\u0275did"](37,16384,null,0,k.d,[k.a,t.ElementRef],null,null),t["\u0275prd"](2048,[[4,4]],k.b,null,[k.d]),(n()(),t["\u0275ted"](-1,null,["Publikasi "])),(n()(),t["\u0275eld"](40,0,null,null,0,"b",[["class","caret"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](42,0,null,null,11,"div",[["class","dropdown-menu-right"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),t["\u0275did"](43,16384,[[3,4]],0,k.c,[k.a,t.ElementRef,t.Renderer2],null,null),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](45,0,null,null,1,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Laporan Tahunan"])),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](48,0,null,null,1,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Laporan Bulanan"])),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](51,0,null,null,1,"a",[["class","dropdown-item"],["href","javascript:void(0)"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Laporan TKS"])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](57,0,null,null,7,"ul",[["class","navbar-nav"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](59,0,null,null,4,"li",[["class","nav-item"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](61,0,null,null,1,"a",[["class","nav-link bg-info mt-1"],["data-toggle","collapse"],["href","javascript:void(0)"],["id","contact"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.navigateto()&&t),t},null,null)),(n()(),t["\u0275ted"](-1,null,["Kontak"])),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n\n\n  "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275eld"](68,0,null,null,60,"div",[["class","main-container"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](70,0,null,null,2,"button",[["class","sidebuton"]],null,[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.showSidebar()&&t),t},null,null)),(n()(),t["\u0275eld"](71,0,null,null,0,"i",[["class","fa fa-fw fa-list"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](74,0,null,null,44,"div",[["class","carousel slide"],["data-ride","carousel"],["id","carouselExampleIndicators"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](76,0,null,null,7,"ol",[["class","carousel-indicators"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](78,0,null,null,0,"li",[["class","active"],["data-slide-to","0"],["data-target","#carouselExampleIndicators"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](80,0,null,null,0,"li",[["data-slide-to","1"],["data-target","#carouselExampleIndicators"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](82,0,null,null,0,"li",[["data-slide-to","2"],["data-target","#carouselExampleIndicators"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](85,0,null,null,16,"div",[["class","carousel-inner"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](87,0,null,null,3,"div",[["class","carousel-item active"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n            "])),(n()(),t["\u0275eld"](89,0,null,null,0,"img",[["alt","First slide"],["class","d-block w-100"],["height","270px"],["src","../../assets/images/slider1.jpg"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](92,0,null,null,3,"div",[["class","carousel-item"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n            "])),(n()(),t["\u0275eld"](94,0,null,null,0,"img",[["alt","Second slide"],["class","d-block w-100"],["height","270px"],["src","../../assets/images/slider2.jpg"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](97,0,null,null,3,"div",[["class","carousel-item"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n            "])),(n()(),t["\u0275eld"](99,0,null,null,0,"img",[["alt","Third slide"],["class","d-block w-100"],["height","270px"],["src","../../assets/images/slider3.jpg"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](103,0,null,null,6,"a",[["class","carousel-control-prev"],["data-slide","prev"],["href","#carouselExampleIndicators"],["role","button"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](105,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-prev-icon"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](107,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Previous"])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](111,0,null,null,6,"a",[["class","carousel-control-next"],["data-slide","next"],["href","#carouselExampleIndicators"],["role","button"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](113,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-next-icon"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n          "])),(n()(),t["\u0275eld"](115,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Next"])),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](120,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](121,212992,null,0,a.p,[a.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null),(n()(),t["\u0275ted"](-1,null,["\n\n    "])),(n()(),t["\u0275eld"](123,0,null,null,4,"footer",[["class","page-footer"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](125,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Footer"])),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n"])),(n()(),t["\u0275ted"](-1,null,["\n\n\n"])),(n()(),t["\u0275eld"](130,0,null,null,17,"div",[["class","sidebar"],["id","sidebarcomp"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](132,0,null,null,8,"div",[["class","sidebar-panel mb-1"],["id","logo"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](134,0,null,null,3,"a",[["href","/index"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n        "])),(n()(),t["\u0275eld"](136,0,null,null,0,"img",[["alt","logo"],["src","../../assets/images/logo.png"],["width","100%"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](139,0,null,null,0,"hr",[["class","divider"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275eld"](142,0,null,null,4,"div",[["class","sidebar-panel"],["id","image"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275eld"](144,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["halo"])),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n  \n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],function(n,l){var e=l.component;n(l,19,0,e.allmenu),n(l,22,0,t["\u0275unv"](l,22,0,n(l,24,0,t["\u0275nov"](l,1),t["\u0275unv"](l,22,0,n(l,23,0,t["\u0275nov"](l,2),e.allmenu,"parentmenu",!1)),"parentmenu"))),n(l,27,0,e.allmenu),n(l,32,0),n(l,121,0)},function(n,l){n(l,31,0,t["\u0275nov"](l,32).isOpen()),n(l,36,0,t["\u0275nov"](l,37).dropdown.isOpen()),n(l,42,0,!0,t["\u0275nov"](l,43).dropdown.isOpen(),t["\u0275nov"](l,43).placement)})}var N=t["\u0275ccf"]("ng-component",c,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,D,P)),t["\u0275did"](1,4308992,null,0,c,[u.a,o.j,a.l,a.a,i.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),L=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"fadeInAnimation",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:".3s"}],options:null}],options:{}}]}});function E(n){return t["\u0275vid"](0,[(n()(),t["\u0275ted"](-1,null,["    "])),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[["class"," page-content "],["id","content"]],[[24,"@fadeInAnimation",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n    "])),(n()(),t["\u0275ted"](-1,null,["\n  "]))],null,function(n,l){n(l,1,0,void 0)})}var K=t["\u0275ccf"]("app-index",g,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-index",[],null,null,null,E,L)),t["\u0275did"](1,4308992,null,0,g,[i.a,a.a,a.l,u.a,p.i],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),$=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{animation:[{type:7,name:"fadeInAnimation",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:".3s"}],options:null}],options:{}}]}});function V(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class"," page-content"],["id","content"]],[[24,"@fadeInAnimation",0]],null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n      "])),(n()(),t["\u0275eld"](2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["CONTAC US"])),(n()(),t["\u0275ted"](-1,null,["\n  "])),(n()(),t["\u0275ted"](-1,null,["\n\n"]))],null,function(n,l){n(l,0,0,void 0)})}var z=t["\u0275ccf"]("app-contact",s,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-contact",[],null,null,null,V,$)),t["\u0275did"](1,114688,null,0,s,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),H=t["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function B(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["\n  publikasi works!\n"])),(n()(),t["\u0275ted"](-1,null,["\n"]))],null,null)}var J=t["\u0275ccf"]("app-publikasi",v,function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"app-publikasi",[],null,null,null,B,H)),t["\u0275did"](1,114688,null,0,v,[],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),G=e("7DMc"),U=e("lz/e"),Z=e("u87A"),q=e("ItHS"),W=e("/CuN"),Q=e("F6a+"),X=e("/9u5"),Y=e("54PK"),nn=e("Ji6o"),ln=e("Si1/"),en=e("rUjW"),tn=e("4aSJ"),un=e("Qg7J"),on=e("LwgV"),an=e("MSQt"),rn=e("h+R6"),dn=e("yMbY"),cn=e("7gRN"),sn=e("nD62");e.d(l,"FrontendModuleNgFactory",function(){return pn});var pn=t["\u0275cmf"](h,[],function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[b.a,x.a,y.a,N,K,z,J]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,w.NgLocalization,w.NgLocaleLocalization,[t.LOCALE_ID,[2,w["\u0275a"]]]),t["\u0275mpd"](4608,G.r,G.r,[]),t["\u0275mpd"](4608,G.d,G.d,[]),t["\u0275mpd"](4608,U.c,U.c,[]),t["\u0275mpd"](4608,U.b,U.b,[U.c,t.ComponentFactoryResolver,t.ApplicationRef]),t["\u0275mpd"](4608,U.k,U.k,[U.d,U.b,t.Injector,p.c,t.NgZone]),t["\u0275mpd"](5120,o.f,Z.b,[q.c]),t["\u0275mpd"](4608,o.c,o.e,[]),t["\u0275mpd"](4608,o.h,o.d,[]),t["\u0275mpd"](4608,o.b,o.a,[]),t["\u0275mpd"](4608,o.m,o.m,[]),t["\u0275mpd"](4608,o.j,o.j,[o.m,o.f,o.c,o.h,o.b,o.k,o.l]),t["\u0275mpd"](4608,C.a,C.a,[]),t["\u0275mpd"](4608,W.a,W.a,[]),t["\u0275mpd"](4608,Q.a,Q.a,[t.ComponentFactoryResolver,t.NgZone,t.Injector,W.a,t.ApplicationRef]),t["\u0275mpd"](4608,X.a,X.a,[t.RendererFactory2,Q.a]),t["\u0275mpd"](4608,Y.RecaptchaLoaderService,Y.RecaptchaLoaderService,[t.PLATFORM_ID,[2,Y.RECAPTCHA_LANGUAGE]]),t["\u0275mpd"](4608,nn.a,nn.a,[a.l]),t["\u0275mpd"](4608,ln.a,ln.a,[a.l,en.a,tn.a]),t["\u0275mpd"](4608,un.a,un.a,[a.l,ln.a]),t["\u0275mpd"](512,w.CommonModule,w.CommonModule,[]),t["\u0275mpd"](512,a.o,a.o,[[2,a.t],[2,a.l]]),t["\u0275mpd"](512,on.SidebarModule,on.SidebarModule,[]),t["\u0275mpd"](512,U.j,U.j,[[3,U.j]]),t["\u0275mpd"](512,o.g,o.g,[]),t["\u0275mpd"](512,an.a,an.a,[]),t["\u0275mpd"](512,rn.a,rn.a,[]),t["\u0275mpd"](512,G.o,G.o,[]),t["\u0275mpd"](512,G.e,G.e,[]),t["\u0275mpd"](512,dn.FileUploadModule,dn.FileUploadModule,[]),t["\u0275mpd"](512,G.m,G.m,[]),t["\u0275mpd"](512,cn.RecaptchaCommonModule,cn.RecaptchaCommonModule,[]),t["\u0275mpd"](512,sn.RecaptchaModule,sn.RecaptchaModule,[]),t["\u0275mpd"](512,Z.a,Z.a,[]),t["\u0275mpd"](512,h,h,[]),t["\u0275mpd"](256,U.d,{config:{},defaults:U.a},[]),t["\u0275mpd"](256,o.l,void 0,[]),t["\u0275mpd"](256,o.k,void 0,[]),t["\u0275mpd"](1024,a.j,function(){return[[{path:"",component:c,children:[{path:"",component:g},{path:"index",component:g},{path:"index/page/:page",component:g},{path:"index/page/p/contact",component:s},{path:"index/page/p/publikasi",component:v}]}]]},[])])})}});