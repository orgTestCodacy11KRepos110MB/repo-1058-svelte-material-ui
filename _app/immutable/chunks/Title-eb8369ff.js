import{S as q,i as K,s as J,K as Q,U as C,k as x,l as $,m as tt,h as P,V as v,b as et,D as w,W as z,L as st,M as at,N as ot,X as rt,Y as nt,f as lt,t as it,Z as pt,_ as F,$ as ct,o as It,a0 as ut,G as Dt,H as dt,a1 as X}from"./index-02bf3165.js";import{r as Lt}from"./index-d0d2271b.js";import{_ as N,a as G,M as Rt,c as k,u as ft,f as ht,d as Ht}from"./useActions-655c657c.js";import{c as gt}from"./Ripple-60a26aae.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var b={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},M={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},Mt={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var U=function(s){N(t,s);function t(e){return s.call(this,G(G({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"strings",{get:function(){return Mt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"cssClasses",{get:function(){return b},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return M},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.handleTargetScroll=function(){},t.prototype.handleWindowResize=function(){},t.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},t}(Rt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var H=0,V=function(s){N(t,s);function t(e){var n=s.call(this,e)||this;return n.wasDocked=!0,n.isDockedShowing=!0,n.currentAppBarOffsetTop=0,n.isCurrentlyBeingResized=!1,n.resizeThrottleId=H,n.resizeDebounceId=H,n.lastScrollPosition=n.adapter.getViewportScrollY(),n.topAppBarHeight=n.adapter.getTopAppBarHeight(),n}return t.prototype.destroy=function(){s.prototype.destroy.call(this),this.adapter.setStyle("top","")},t.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),n=e-this.lastScrollPosition;this.lastScrollPosition=e,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=n,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},t.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){e.resizeThrottleId=H,e.throttledResizeHandler()},M.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){e.handleTargetScroll(),e.isCurrentlyBeingResized=!1,e.resizeDebounceId=H},M.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},t.prototype.checkForUpdate=function(){var e=-this.topAppBarHeight,n=this.currentAppBarOffsetTop<0,c=this.currentAppBarOffsetTop>e,f=n&&c;if(f)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==c)return this.isDockedShowing=c,!0}else return this.wasDocked=!0,!0;return f},t.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var e=this.currentAppBarOffsetTop;Math.abs(e)>=this.topAppBarHeight&&(e=-M.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},t.prototype.throttledResizeHandler=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==e&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-e,this.topAppBarHeight=e),this.handleTargetScroll()},t}(U);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Pt=function(s){N(t,s);function t(){var e=s!==null&&s.apply(this,arguments)||this;return e.wasScrolled=!1,e}return t.prototype.handleTargetScroll=function(){var e=this.adapter.getViewportScrollY();e<=0?this.wasScrolled&&(this.adapter.removeClass(b.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(b.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},t}(V);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vt=function(s){N(t,s);function t(e){var n=s.call(this,e)||this;return n.collapsed=!1,n.isAlwaysCollapsed=!1,n}return Object.defineProperty(t.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),t.prototype.init=function(){s.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(b.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(b.SHORT_COLLAPSED_CLASS))},t.prototype.setAlwaysCollapsed=function(e){this.isAlwaysCollapsed=!!e,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},t.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},t.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},t.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var e=this.adapter.getViewportScrollY();e<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},t.prototype.uncollapse=function(){this.adapter.removeClass(b.SHORT_COLLAPSED_CLASS),this.collapsed=!1},t.prototype.collapse=function(){this.adapter.addClass(b.SHORT_COLLAPSED_CLASS),this.collapsed=!0},t}(U);const{window:W}=Dt;function zt(s){let t,e,n,c,f,g,m;const i=s[22].default,p=Q(i,s,s[21],null);let h=[{class:e=k({[s[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":s[4]==="short","mdc-top-app-bar--short-collapsed":s[0],"mdc-top-app-bar--fixed":s[4]==="fixed","smui-top-app-bar--static":s[4]==="static","smui-top-app-bar--color-secondary":s[5]==="secondary","mdc-top-app-bar--prominent":s[6],"mdc-top-app-bar--dense":s[7],...s[11]})},{style:n=Object.entries(s[12]).map(Z).concat([s[3]]).join(" ")},s[15]],r={};for(let a=0;a<h.length;a+=1)r=C(r,h[a]);return{c(){t=x("header"),p&&p.c(),this.h()},l(a){t=$(a,"HEADER",{class:!0,style:!0});var l=tt(t);p&&p.l(l),l.forEach(P),this.h()},h(){v(t,r)},m(a,l){et(a,t,l),p&&p.m(t,null),s[25](t),f=!0,g||(m=[w(W,"resize",s[23]),w(W,"scroll",s[24]),z(c=ft.call(null,t,s[1])),z(s[13].call(null,t)),w(t,"SMUITopAppBarIconButton:nav",s[26])],g=!0)},p(a,l){p&&p.p&&(!f||l[0]&2097152)&&st(p,i,a,a[21],f?ot(i,a[21],l,null):at(a[21]),null),v(t,r=rt(h,[(!f||l[0]&2293&&e!==(e=k({[a[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":a[4]==="short","mdc-top-app-bar--short-collapsed":a[0],"mdc-top-app-bar--fixed":a[4]==="fixed","smui-top-app-bar--static":a[4]==="static","smui-top-app-bar--color-secondary":a[5]==="secondary","mdc-top-app-bar--prominent":a[6],"mdc-top-app-bar--dense":a[7],...a[11]})))&&{class:e},(!f||l[0]&4104&&n!==(n=Object.entries(a[12]).map(Z).concat([a[3]]).join(" ")))&&{style:n},l[0]&32768&&a[15]])),c&&nt(c.update)&&l[0]&2&&c.update.call(null,a[1])},i(a){f||(lt(p,a),f=!0)},o(a){it(p,a),f=!1},d(a){a&&P(t),p&&p.d(a),s[25](null),g=!1,pt(m)}}}const Z=([s,t])=>`${s}: ${t};`;function Ft(s,t,e){const n=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let c=F(t,n),{$$slots:f={},$$scope:g}=t;const m=ht(ct());let i=()=>{};function p(o){return o===i}let{use:h=[]}=t,{class:r=""}=t,{style:a=""}=t,{variant:l="standard"}=t,{color:E="primary"}=t,{collapsed:u=i}=t;const _t=!p(u)&&!!u;p(u)&&(u=!1);let{prominent:B=!1}=t,{dense:O=!1}=t,{scrollTarget:S=void 0}=t,T,d,_={},A={},I,mt=Lt({variant:l,prominent:B,dense:O},o=>{e(18,I=o)}),y,D=l;It(()=>(e(9,d=j()),d.init(),()=>{d.destroy()}));function j(){const o={static:U,short:vt,fixed:Pt,standard:V}[l]||V;return new o({hasClass:St,addClass:Tt,removeClass:At,setStyle:bt,getTopAppBarHeight:()=>T.clientHeight,notifyNavigationIconClicked:()=>Ht(T,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>S==null?window.pageYOffset:S.scrollTop,getTotalActionItems:()=>T.querySelectorAll(".mdc-top-app-bar__action-item").length})}function St(o){return o in _?_[o]:Y().classList.contains(o)}function Tt(o){_[o]||e(11,_[o]=!0,_)}function At(o){(!(o in _)||_[o])&&e(11,_[o]=!1,_)}function bt(o,R){A[o]!=R&&(R===""||R==null?(delete A[o],e(12,A),e(20,D),e(4,l),e(9,d)):e(12,A[o]=R,A))}function L(){d&&(d.handleTargetScroll(),l==="short"&&e(0,u="isCollapsed"in d&&d.isCollapsed))}function Ct(){return mt}function Y(){return T}const yt=()=>l!=="short"&&l!=="fixed"&&d&&d.handleWindowResize(),Et=()=>S==null&&L();function Bt(o){dt[o?"unshift":"push"](()=>{T=o,e(10,T)})}const Ot=()=>d&&d.handleNavigationClick();return s.$$set=o=>{t=C(C({},t),ut(o)),e(15,c=F(t,n)),"use"in o&&e(1,h=o.use),"class"in o&&e(2,r=o.class),"style"in o&&e(3,a=o.style),"variant"in o&&e(4,l=o.variant),"color"in o&&e(5,E=o.color),"collapsed"in o&&e(0,u=o.collapsed),"prominent"in o&&e(6,B=o.prominent),"dense"in o&&e(7,O=o.dense),"scrollTarget"in o&&e(8,S=o.scrollTarget),"$$scope"in o&&e(21,g=o.$$scope)},s.$$.update=()=>{s.$$.dirty[0]&262352&&I&&I({variant:l,prominent:B,dense:O}),s.$$.dirty[0]&1049104&&D!==l&&d&&(e(20,D=l),d.destroy(),e(11,_={}),e(12,A={}),e(9,d=j()),d.init()),s.$$.dirty[0]&528&&d&&l==="short"&&"setAlwaysCollapsed"in d&&d.setAlwaysCollapsed(_t),s.$$.dirty[0]&524544&&y!==S&&(y&&y.removeEventListener("scroll",L),S&&S.addEventListener("scroll",L),e(19,y=S))},[u,h,r,a,l,E,B,O,S,d,T,_,A,m,L,c,Ct,Y,I,y,D,g,f,yt,Et,Bt,Ot]}class Yt extends q{constructor(t){super(),K(this,t,Ft,zt,J,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}const Xt=gt({class:"mdc-top-app-bar__row",tag:"div"});function kt(s){let t,e,n,c,f,g;const m=s[9].default,i=Q(m,s,s[8],null);let p=[{class:e=k({[s[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":s[2]==="start","mdc-top-app-bar__section--align-end":s[2]==="end"})},s[3]?{role:"toolbar"}:{},s[6]],h={};for(let r=0;r<p.length;r+=1)h=C(h,p[r]);return{c(){t=x("section"),i&&i.c(),this.h()},l(r){t=$(r,"SECTION",{class:!0});var a=tt(t);i&&i.l(a),a.forEach(P),this.h()},h(){v(t,h)},m(r,a){et(r,t,a),i&&i.m(t,null),s[10](t),c=!0,f||(g=[z(n=ft.call(null,t,s[0])),z(s[5].call(null,t))],f=!0)},p(r,[a]){i&&i.p&&(!c||a&256)&&st(i,m,r,r[8],c?ot(m,r[8],a,null):at(r[8]),null),v(t,h=rt(p,[(!c||a&6&&e!==(e=k({[r[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":r[2]==="start","mdc-top-app-bar__section--align-end":r[2]==="end"})))&&{class:e},a&8&&(r[3]?{role:"toolbar"}:{}),a&64&&r[6]])),n&&nt(n.update)&&a&1&&n.update.call(null,r[0])},i(r){c||(lt(i,r),c=!0)},o(r){it(i,r),c=!1},d(r){r&&P(t),i&&i.d(r),s[10](null),f=!1,pt(g)}}}function Nt(s,t,e){const n=["use","class","align","toolbar","getElement"];let c=F(t,n),{$$slots:f={},$$scope:g}=t;const m=ht(ct());let{use:i=[]}=t,{class:p=""}=t,{align:h="start"}=t,{toolbar:r=!1}=t,a;X("SMUI:icon-button:context",r?"top-app-bar:action":"top-app-bar:navigation"),X("SMUI:button:context",r?"top-app-bar:action":"top-app-bar:navigation");function l(){return a}function E(u){dt[u?"unshift":"push"](()=>{a=u,e(4,a)})}return s.$$set=u=>{t=C(C({},t),ut(u)),e(6,c=F(t,n)),"use"in u&&e(0,i=u.use),"class"in u&&e(1,p=u.class),"align"in u&&e(2,h=u.align),"toolbar"in u&&e(3,r=u.toolbar),"$$scope"in u&&e(8,g=u.$$scope)},[i,p,h,r,a,m,c,l,g,f,E]}class Gt extends q{constructor(t){super(),K(this,t,Nt,kt,J,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}const Wt=gt({class:"mdc-top-app-bar__title",tag:"span"});export{Xt as R,Gt as S,Yt as T,Wt as a};
