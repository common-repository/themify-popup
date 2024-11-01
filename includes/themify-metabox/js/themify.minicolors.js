($=>{"use strict";function t(t){const i=t.parent();t.removeData("tfminicolors-initialized").removeData("tfminicolors-settings").removeProp("size").removeClass("tfminicolors-input"),i.before(t).remove()}function i(t){var i=t.parent(),s=i.find(".tfminicolors-panel"),n=t.data("tfminicolors-settings"),r=document.body.contains(t[0])?document:top.document;!t.data("tfminicolors-initialized")||t.prop("disabled")||i.hasClass("tfminicolors-inline")||i.hasClass("tfminicolors-focus")||(o(window.top.document),i.addClass("tfminicolors-focus"),s.animate?s.stop(!0,!0).fadeIn(n.showSpeed,(()=>{n.show&&n.show.call(t.get(0))})):(s.show(),n.show&&n.show.call(t.get(0))),$(r).on("mousedown.tfminicolors touchstart.tfminicolors",(function(t){1===t.which&&0===$(t.target).closest(".tfminicolors,.tfminicolors_wrapper").length&&($(this).off("mousemove.tfminicolors touchmove.tfminicolors mousedown.tfminicolors touchstart.tfminicolors mouseup.tfminicolors touchend.tfminicolors"),o(this),r=null)})))}function o(t){$(".tfminicolors-focus",t).each((function(){const t=$(this),i=t.find(".tfminicolors-input"),o=t.find(".tfminicolors-panel"),s=i.data("tfminicolors-settings");o.animate?o.fadeOut(s.hideSpeed,(()=>{s.hide&&s.hide.call(i.get(0)),t.removeClass("tfminicolors-focus")})):(o.hide(),s.hide&&s.hide.call(i.get(0)),t.removeClass("tfminicolors-focus"))}))}function s(t,i,o){let s,r,c,e,a,l=t.parents(".tfminicolors").find(".tfminicolors-input"),f=l.data("tfminicolors-settings"),h=t.find("[class$=-picker]"),p=t.offset().left,m=t.offset().top,u=Math.round(i.pageX-p),d=Math.round(i.pageY-m),b=o?f.animationSpeed:0;i.changedTouches&&(u=i.changedTouches[0].pageX-p,d=i.changedTouches[0].pageY-m),u<0&&(u=0),d<0&&(d=0),u>t.width()&&(u=t.width()),d>t.height()&&(d=t.height()),t.parent().hasClass("tfminicolors-slider-wheel")&&h.parent().hasClass("tfminicolors-grid")&&(s=75-u,r=75-d,c=Math.sqrt(s*s+r*r),e=Math.atan2(r,s),e<0&&(e+=2*Math.PI),c>75&&(c=75,u=75-75*Math.cos(e),d=75-75*Math.sin(e)),u=Math.round(u),d=Math.round(d)),a={top:d+"px"},t.is(".tfminicolors-grid")&&(a.left=u+"px"),h.animate?h.stop(!0).animate(a,b,f.animationEasing,(()=>{n(l,t)})):(h.css(a),n(l,t))}function n(t,i){function o(t,i){return t.length&&i?{x:t.offset().left-i.offset().left+t.outerWidth()/2,y:t.offset().top-i.offset().top+t.outerHeight()/2}:null}let s,n,c,a,l,f,h,m=t.val(),u=t.attr("data-opacity"),d=t.parent(),b=t.data("tfminicolors-settings"),y=d.find(".tfminicolors-input-swatch"),w=d.find(".tfminicolors-grid"),v=d.find(".tfminicolors-slider"),_=d.find(".tfminicolors-opacity-slider"),M=w.find("[class$=-picker]"),k=v.find("[class$=-picker]"),C=_.find("[class$=-picker]"),x=o(M,w),I=o(k,v),S=o(C,_);if(i.is(".tfminicolors-grid, .tfminicolors-slider, .tfminicolors-opacity-slider")){switch(b.control){case"wheel":a=w.width()/2-x.x,l=w.height()/2-x.y,f=Math.sqrt(a*a+l*l),h=Math.atan2(l,a),h<0&&(h+=2*Math.PI),f>75&&(f=75,x.x=69-75*Math.cos(h),x.y=69-75*Math.sin(h)),n=p(f/.75,0,100),s=p(180*h/Math.PI,0,360),c=p(100-Math.floor(I.y*(100/v.height())),0,100),m=g({h:s,s:n,b:c}),v.css("backgroundColor",g({h:s,s:n,b:100}));break;case"saturation":s=p(parseInt(x.x*(360/w.width()),10),0,360),n=p(100-Math.floor(I.y*(100/v.height())),0,100),c=p(100-Math.floor(x.y*(100/w.height())),0,100),m=g({h:s,s:n,b:c}),v.css("backgroundColor",g({h:s,s:100,b:c})),d.find(".tfminicolors-grid-inner").css("opacity",n/100);break;case"brightness":s=p(parseInt(x.x*(360/w.width()),10),0,360),n=p(100-Math.floor(x.y*(100/w.height())),0,100),c=p(100-Math.floor(I.y*(100/v.height())),0,100),m=g({h:s,s:n,b:c}),v.css("backgroundColor",g({h:s,s:n,b:100})),d.find(".tfminicolors-grid-inner").css("opacity",1-c/100);break;default:s=p(360-parseInt(I.y*(360/v.height()),10),0,360),n=p(Math.floor(x.x*(100/w.width())),0,100),c=p(100-Math.floor(x.y*(100/w.height())),0,100),m=g({h:s,s:n,b:c}),w.css("backgroundColor",g({h:s,s:100,b:100}));break}u=b.opacity?parseFloat(1-S.y/_.height()).toFixed(2):1,r(t,m,u)}else y.find("span").css({backgroundColor:m,opacity:u}),e(t,m,u)}function r(t,i,o){let s,n=t.parent(),r=t.data("tfminicolors-settings"),c=n.find(".tfminicolors-input-swatch");r.opacity&&t.attr("data-opacity",o),"rgb"===r.format?(s=m(i)?f(i,!0):y(l(i,!0)),o=""===t.attr("data-opacity")?1:p(parseFloat(t.attr("data-opacity")).toFixed(2),0,1),!isNaN(o)&&r.opacity||(o=1),i=t.tfminicolors("rgbObject").a<=1&&s&&r.opacity?"rgba("+s.r+", "+s.g+", "+s.b+", "+parseFloat(o)+")":"rgb("+s.r+", "+s.g+", "+s.b+")"):(m(i)&&(i=d(i)),i=a(i,r.letterCase)),t.val(i),c.find("span").css({backgroundColor:i,opacity:o}),n.removeClass("tfminicolors-var-input"),e(t,i,o)}function c(t,i){let o,s,n,r,c,b,w,v;const _=t.parent(),M=t.data("tfminicolors-settings"),k=_.find(".tfminicolors-input-swatch"),C=_.find(".tfminicolors-grid"),x=_.find(".tfminicolors-slider"),I=_.find(".tfminicolors-opacity-slider"),S=C.find("[class$=-picker]"),j=x.find("[class$=-picker]"),F=I.find("[class$=-picker]"),O=t.val();m(O)?(o=d(O),n=p(parseFloat(u(O)).toFixed(2),0,1),n&&t.attr("data-opacity",n)):o=a(l(O,!0),M.letterCase),o||(o=a(h(M.defaultValue,!0),M.letterCase));const z=function(t){const i=function(t){var i={h:0,s:0,b:0},o=Math.min(t.r,t.g,t.b),s=Math.max(t.r,t.g,t.b),n=s-o;i.b=s,i.s=0!==s?255*n/s:0,i.h=0!==i.s?t.r===s?(t.g-t.b)/n:t.g===s?2+(t.b-t.r)/n:4+(t.r-t.g)/n:-1;i.h*=60,i.h<0&&(i.h+=360);return i.s*=100/255,i.b*=100/255,i}(y(t));0===i.s&&(i.h=360);return i}(o),T=M.keywords?$.map(M.keywords.split(","),(t=>$.trim(t.toLowerCase()))):[],D=""!==O&&0===O.indexOf("--");switch(""!==O&&(!0===D||$.inArray(O.toLowerCase(),T)>-1)?(r=a(O),!0===D&&_.addClass("tfminicolors-var-input")):(r=m(O)?f(O):o,_.removeClass("tfminicolors-var-input")),i||t.val(r),M.opacity&&(s=""===t.attr("data-opacity")?1:p(parseFloat(t.attr("data-opacity")).toFixed(2),0,1),isNaN(s)&&(s=1),t.attr("data-opacity",s),k.find("span").css("opacity",s),b=p(I.height()-I.height()*s,0,I.height()),F.css("top",b+"px")),"transparent"===O.toLowerCase()&&k.find("span").css("opacity",0),k.find("span").css("backgroundColor",o),M.control){case"wheel":w=p(Math.ceil(.75*z.s),0,C.height()/2),v=z.h*Math.PI/180,c=p(75-Math.cos(v)*w,0,C.width()),b=p(75-Math.sin(v)*w,0,C.height()),S.css({top:b+"px",left:c+"px"}),b=150-z.b/(100/C.height()),""===o&&(b=0),j.css("top",b+"px"),x.css("backgroundColor",g({h:z.h,s:z.s,b:100}));break;case"saturation":c=p(5*z.h/12,0,150),b=p(C.height()-Math.ceil(z.b/(100/C.height())),0,C.height()),S.css({top:b+"px",left:c+"px"}),b=p(x.height()-z.s*(x.height()/100),0,x.height()),j.css("top",b+"px"),x.css("backgroundColor",g({h:z.h,s:100,b:z.b})),_.find(".tfminicolors-grid-inner").css("opacity",z.s/100);break;case"brightness":c=p(5*z.h/12,0,150),b=p(C.height()-Math.ceil(z.s/(100/C.height())),0,C.height()),S.css({top:b+"px",left:c+"px"}),b=p(x.height()-z.b*(x.height()/100),0,x.height()),j.css("top",b+"px"),x.css("backgroundColor",g({h:z.h,s:z.s,b:100})),_.find(".tfminicolors-grid-inner").css("opacity",1-z.b/100);break;default:c=p(Math.ceil(z.s/(100/C.width())),0,C.width()),b=p(C.height()-Math.ceil(z.b/(100/C.height())),0,C.height()),S.css({top:b+"px",left:c+"px"}),b=p(x.height()-z.h/(360/x.height()),0,x.height()),j.css("top",b+"px"),C.css("backgroundColor",g({h:z.h,s:100,b:100}));break}t.data("tfminicolors-initialized")&&e(t,r,s)}function e(t,i,o){let s,n,r,c=t.data("tfminicolors-settings"),e=t.data("tfminicolors-lastChange");if(!e||e.value!==i||e.opacity!==o){if(t.data("tfminicolors-lastChange",{value:i,opacity:o}),c.swatches&&0!==c.swatches.length){for(s=m(i)?f(i,!0):y(i),n=-1,r=0;r<c.swatches.length;++r)if(s.r===c.swatches[r].r&&s.g===c.swatches[r].g&&s.b===c.swatches[r].b&&s.a===c.swatches[r].a){n=r;break}t.parent().find(".tfminicolors-swatches .tfminicolors-swatch").removeClass("selected"),-1!==n&&t.parent().find(".tfminicolors-swatches .tfminicolors-swatch").eq(r).addClass("selected")}c.change&&(c.changeDelay?(clearTimeout(t.data("tfminicolors-changeTimeout")),t.data("tfminicolors-changeTimeout",setTimeout((()=>{c.change.call(t.get(0),i,o)}),c.changeDelay))):c.change.call(t.get(0),i,o)),t.trigger("change").trigger("input")}}function a(t,i){return"uppercase"===i?t.toUpperCase():t.toLowerCase()}function l(t,i){return(t=t.replace(/^#/g,"")).match(/^[A-F0-9]{3,6}/gi)?3!==t.length&&6!==t.length?"":(3===t.length&&i&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),"#"+t):""}function f(t,i){var o=t.replace(/[^\d,.]/g,"").split(",");return o[0]=p(parseInt(o[0],10),0,255),o[1]=p(parseInt(o[1],10),0,255),o[2]=p(parseInt(o[2],10),0,255),void 0!==o[3]&&(o[3]=p(parseFloat(o[3],10),0,1)),i?void 0!==o[3]?{r:o[0],g:o[1],b:o[2],a:o[3]}:{r:o[0],g:o[1],b:o[2]}:void 0!==o[3]&&o[3]<=1?"rgba("+o[0]+", "+o[1]+", "+o[2]+", "+o[3]+")":"rgb("+o[0]+", "+o[1]+", "+o[2]+")"}function h(t,i){return m(t)?f(t):l(t,i)}function p(t,i,o){return t<i?t=i:t>o&&(t=o),t}function m(t){const i=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);return!(!i||4!==i.length)}function u(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d{1,2})?|\.\d{1,2})[\s+]?/i))&&6===t.length?t[4]:"1"}function d(t){return(t=t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i))&&4===t.length?"#"+("0"+parseInt(t[1],10).toString(16)).slice(-2)+("0"+parseInt(t[2],10).toString(16)).slice(-2)+("0"+parseInt(t[3],10).toString(16)).slice(-2):""}function b(t){var i=[t.r.toString(16),t.g.toString(16),t.b.toString(16)];return $.each(i,((t,o)=>{1===o.length&&(i[t]="0"+o)})),"#"+i.join("")}function g(t){return b(function(t){var i={},o=Math.round(t.h),s=Math.round(255*t.s/100),n=Math.round(255*t.b/100);if(0===s)i.r=i.g=i.b=n;else{var r=n,c=(255-s)*n/255,e=o%60*(r-c)/60;360===o&&(o=0),o<60?(i.r=r,i.b=c,i.g=c+e):o<120?(i.g=r,i.b=c,i.r=r-e):o<180?(i.g=r,i.r=c,i.b=c+e):o<240?(i.b=r,i.r=c,i.g=r-e):o<300?(i.b=r,i.g=c,i.r=c+e):o<360?(i.r=r,i.g=c,i.b=r-e):(i.r=0,i.g=0,i.b=0)}return{r:Math.round(i.r),g:Math.round(i.g),b:Math.round(i.b)}}(t))}function y(t){return{r:(t=parseInt(t.indexOf("#")>-1?t.substring(1):t,16))>>16,g:(65280&t)>>8,b:255&t}}$.tfminicolors={defaults:{animationSpeed:50,animationEasing:"swing",change:null,changeDelay:0,control:"hue",defaultValue:"",format:"hex",hide:null,hideSpeed:100,inline:!1,keywords:"",letterCase:"lowercase",opacity:!1,position:"bottom",show:null,showSpeed:100,theme:"default",swatches:[]}},$.extend($.fn,{tfminicolors(n,e){switch(n){case"destroy":return $(this).each((function(){t($(this))})),$(this);case"hide":return o(),$(this);case"opacity":return void 0===e?$(this).attr("data-opacity"):($(this).each((function(){c($(this).attr("data-opacity",e))})),$(this));case"rgbObject":return function(t){const i=$(t),o=i.attr("data-opacity"),s=i.val(),n=m(s)?f(s,!0):y(l(s,!0));if(!n)return null;void 0!==o&&$.extend(n,{a:parseFloat(o)});return n}($(this));case"rgbString":case"rgbaString":return function(t,i){const o=$(t),s=o.val(),n=m(s)?f(s,!0):y(l(s,!0));let r=o.attr("data-opacity");if(!n)return null;void 0===r&&(r=1);return i?"rgba("+n.r+", "+n.g+", "+n.b+", "+parseFloat(r)+")":"rgb("+n.r+", "+n.g+", "+n.b+")"}($(this),"rgbaString"===n);case"settings":return void 0===e?$(this).data("tfminicolors-settings"):($(this).each((function(){var i=$(this).data("tfminicolors-settings")||{};t($(this)),$(this).tfminicolors($.extend(!0,i,e))})),$(this));case"show":return i($(this).eq(0)),$(this);case"value":return void 0===e?$(this).val():($(this).each((function(){"object"==typeof e&&null!==e?(void 0!==e.opacity&&$(this).attr("data-opacity",p(e.opacity,0,1)),e.color&&$(this).val(e.color)):$(this).val(e),c($(this))})),$(this));default:return"create"!==n&&(e=n),$(this).each((function(){!function(t,n){var e,p,d,g,w,v,_,M=$('<div class="tfminicolors" />'),k=$.tfminicolors.defaults;if(t.data("tfminicolors-initialized"))return;n=$.extend(!0,{},k,n),M.addClass("tfminicolors-theme-"+n.theme).addClass(n.opacity?"tfminicolors-with-opacity":"tfminicolors-without-opacity"),void 0!==n.position&&$.each(n.position.split(" "),(function(){M.addClass("tfminicolors-position-"+this)}));p="rgb"===n.format?n.opacity?"25":"20":n.keywords?"11":"7";t.addClass("tfminicolors-input").data("tfminicolors-initialized",!1).data("tfminicolors-settings",n).prop("size",p).attr({autocomplete:"off",placeholder:" "}).wrap(M).after('<div class="tfminicolors-panel tfminicolors-slider-'+n.control+'"><div class="tfminicolors-slider tfminicolors-sprite"><div class="tfminicolors-picker"></div></div><div class="tfminicolors-opacity-slider tfminicolors-sprite"><div class="tfminicolors-picker"></div></div><div class="tfminicolors-grid tfminicolors-sprite"><div class="tfminicolors-grid-inner tf_abs tf_w tf_h"></div><div class="tfminicolors-picker"><div></div></div></div></div>'),n.inline||t.after('<span class="tfminicolors-swatch tfminicolors-input-swatch"><span class="tfminicolors-swatch-color tf_abs"></span></span>');t.after('<div class="tfminicolors_clear_btn tf_close"></div>'),t.on("focus.tfminicolors blur.tfminicolors keydown.tfminicolors keyup.tfminicolors paste.tfminicolors",(s=>{var n=s.type;if("focus"!==n||t.parent().hasClass("tfminicolors-var-input"))if("blur"===n){const i=t.data("tfminicolors-settings");let o,s,n,r,c=t.val();if(!t.data("tfminicolors-initialized"))return;const e=i.keywords?$.map(i.keywords.split(","),(t=>t.toLowerCase().trim())):[];""!==c&&(0===c.indexOf("--")||e.indexOf(c.toLowerCase())>-1)?r=c:("transparent"===c&&(c="rgba(0,0,0,0)"),m(c)?s=f(c,!0):(o=l(c,!0),s=o?y(o):null),r=null===s?i.defaultValue:"rgb"===i.format?f(i.opacity?"rgba("+s.r+","+s.g+","+s.b+","+t.attr("data-opacity")+")":"rgb("+s.r+","+s.g+","+s.b+")"):b(s)),n=i.opacity?t.attr("data-opacity"):1,"transparent"===r.toLowerCase()&&(n=0),t.closest(".tfminicolors").find(".tfminicolors-input-swatch > span").css("opacity",n),t.val(r),""===c&&t.val(h(i.defaultValue,!0)),t.val(a(c,i.letterCase))}else if("keydown"===n)switch(s.which){case 9:o();break;case 13:case 27:o(),t.blur();break}else"keyup"!==n&&"paste"!==n||("keyup"===n?c(t,!0):setTimeout((()=>{c(t,!0)}),1));else i(t)}));const C=t.closest(".tfminicolors");if(C.on("click.tfminicolors",".tfminicolors-swatches li",(function(t){t.preventDefault();var i=$(this),o=i.parents(".tfminicolors").find(".tfminicolors-input"),s=i.data("swatch-color");r(o,s,u(s)),c(o)})).find(".tfminicolors-input-swatch").on("click mousedown.tfminicolors touchstart.tfminicolors",(o=>{if("click"===o.type)n.inline||t.focus();else{if(1!==o.which)return;i(t)}o.preventDefault()})),C[0].addEventListener("pointerdown",(t=>{if(1===t.which){const i=t.target.closest(".tfminicolors-grid, .tfminicolors-slider, .tfminicolors-opacity-slider");if(i){const o=$(i),n=t=>{s(o,t)};s(o,t,!0),i.addEventListener("pointermove",n,{passive:!0}),i.addEventListener("lostpointercapture",(function(){this.removeEventListener("pointermove",n,{passive:!0})}),{passive:!0,once:!0}),i.setPointerCapture(t.pointerId)}}}),{passive:!0}),C[0].getElementsByClassName("tfminicolors_clear_btn")[0].addEventListener("click",(i=>{i.stopPropagation(),r(t,"",1)}),{passive:!0}),(v=t.parent().find(".tfminicolors-panel")).on("selectstart",(()=>!1)).end(),n.swatches&&0!==n.swatches.length)for(v.addClass("tfminicolors-with-swatches"),d=$('<ul class="tfminicolors-swatches tf_scrollbar"></ul>').appendTo(v),_=0;_<n.swatches.length;++_)"object"==typeof n.swatches[_]?(e=n.swatches[_].name,g=n.swatches[_].color):(e="",g=n.swatches[_]),w=g,g=m(g)?f(g,!0):y(l(g,!0)),$('<li class="tfminicolors-swatch"><span class="tfminicolors-swatch-color tf_abs" title="'+e+'"></span></li>').appendTo(d).data("swatch-color",w).find(".tfminicolors-swatch-color").css({backgroundColor:b(g),opacity:g.a}),n.swatches[_]=g;n.inline&&t.parent().addClass("tfminicolors-inline");c(t,!1),t.data("tfminicolors-initialized",!0)}($(this),e)})),$(this)}}})})(jQuery),(($,t,i)=>{"use strict";t.themifyColorManager={colorSwatches:{},initilized:!1,init(){if(!this.initilized&&"undefined"!=typeof themifyCM){this.initilized=!0;for(let t=Object.keys(themifyCM.colors),i=0,o=t.length;i<o;++i)this.colorSwatches[t[i]]=themifyCM.colors[t[i]]}},toRgba:t=>t.color.replace("rgb","rgba").replace(")",","+t.opacity+")"),toColorsArray(){let t=[];for(let i=Object.keys(this.colorSwatches),o=i.length-1;o>-1;--o)t.push(this.toRgba(this.colorSwatches[i[o]]));return t.length||(t=["#FFF"]),t},initColorPicker(t){const o=t.closest(".tfminicolors").querySelector(".tfminicolors-focus .tfminicolors-panel");if(o.getElementsByClassName("tf_swatches_container")[0])return;const s=i.createElement("div"),n=s.getElementsByClassName("tfminicolors-swatch"),r=Object.keys(this.colorSwatches).reverse(),c=i.createElement("div"),e=i.createElement("span"),a=i.createElement("span"),l=i.createElement("div");s.className="tf_swatches_container",s.addEventListener("click",this.initClick.bind(this)),s.appendChild(o.getElementsByClassName("tfminicolors-swatches")[0]);for(let t=n.length-1;t>-1;--t){if(!r.length){n[t].parentNode.removeChild(n[t]);break}let o=i.createElement("span"),s=void 0!==this.colorSwatches[r[t]].uid?this.colorSwatches[r[t]].uid:this.UID()+t;o.className="tf_delete_swatch tf_close",n[t].appendChild(o),n[t].dataset.uid=this.colorSwatches[r[t]].uid=s}a.className=e.className="tf_cm_tooltip",e.innerText=themifyCM.labels.save,c.appendChild(e),c.className="tf_add_swatch tf_plus_icon",c.setAttribute("tabIndex","-1"),s.appendChild(c),a.innerText=themifyCM.labels.ie,l.className="tf_cm_dropdown_icon",l.setAttribute("tabIndex","-1"),l.append(a,this.getIcon("ti-import"),this.makeImportExportDropdown()),s.appendChild(l),o.appendChild(s)},makeImportExportDropdown(){const t=i.createElement("div"),o=i.createElement("ul"),s=i.createElement("li"),n=i.createElement("li");return t.className="tf_cm_dropdown",s.className="tb_cm_import",s.append(this.getIcon("ti-import"),i.createTextNode(themifyCM.labels.import)),n.className="tb_cm_export",n.append(this.getIcon("ti-export"),i.createTextNode(themifyCM.labels.export)),o.append(s,n),t.appendChild(o),t},getIcon(t,o){t="tf-"+t.trim().replace(" ","-");const s="http://www.w3.org/2000/svg",n=i.createElementNS(s,"use"),r=i.createElementNS(s,"svg");let c="tf_fa "+t;return o&&(c+=" "+o),r.setAttribute("class",c),n.setAttributeNS(null,"href","#"+t),r.appendChild(n),r},UID:()=>(Math.random().toString(36).substring(2)+(new Date).getTime().toString(36)).substring(0,5),initClick(t){t.preventDefault();const o=t.target,s=o.classList;s.contains("tf_delete_swatch")?this.deleteSwatch(t):s.contains("tf_add_swatch")?this.addSwatch(o.ownerDocument):s.contains("tb_cm_export")?(o.parentNode.parentNode.parentNode.blur(),i.location.assign(themifyCM.exportColorsURL)):s.contains("tb_cm_import")&&(o.parentNode.parentNode.parentNode.blur(),this.importColors("colors",o.ownerDocument))},importColors(t,o){let s=(o=o||i).getElementsByClassName("themify_cm_input")[0];if(s)s.dataset.type=t;else{s=i.createElement("input"),s.type="file",s.dataset.type=t,s.className="themify_cm_input";const o=this;s.addEventListener("change",(t=>{const s=t.target.files[0],n=new FormData,r=t.target.dataset.type;n.set("file",s,s.name),n.set("action","themify_import_colors"),n.set("nonce",themifyCM.nonce),n.set("type",r),$.ajax({url:themifyCM.ajax_url,type:"POST",data:n,cache:!1,dataType:"json",processData:!1,contentType:!1,success(t){if("SUCCESS"===t.status)if("colors"===r){o.colorSwatches=t.colors;for(let t=i.querySelectorAll(".tf_swatches_container .tfminicolors-swatch"),o=t.length-1;o>-1;--o)t[o].parentNode.removeChild(t[o]);for(let t=Object.keys(o.colorSwatches),s=t.length,n=0;n<s;n++)o.addSwatchHtml(i,o.colorSwatches[t[n]].color,o.colorSwatches[t[n]].opacity,t[n])}else if("gradients"===r){const i=$(tb_app.LightBox.el.querySelector(".tb_gradient_container")).data("themifyGradient");for(let t=Object.keys(themifyCM.gradients),o=t.length-1;o>-1;--o)i.removeSwatch(t[o]);themifyCM.gradients=t.colors;for(let t=Object.keys(themifyCM.gradients),o=0,s=t.length;o<s;++o)i.addSwatch(themifyCM.gradients[t[o]])}alert(t.msg)}})}))}s.click()},deleteSwatch(t){t.preventDefault(),t.stopPropagation();const i=t.target.parentNode.dataset.uid;for(let o=t.target.ownerDocument.querySelectorAll('[data-uid="'+i+'"]'),s=o.length-1;s>-1;--s)o[s].parentNode.removeChild(o[s]);delete this.colorSwatches[i],this.updateColorSwatches("colors")},updateColorSwatches(t){$.ajax({type:"POST",url:themifyCM.ajax_url,dataType:"json",data:{action:"themify_save_colors",type:t,nonce:themifyCM.nonce,colors:"colors"===t?this.colorSwatches:themifyCM.gradients}})},addSwatch(t){const i=t.querySelector(".tfminicolors-focus .tfminicolors-input"),o=this.hex2Rgb(i.value),s=i.dataset.opacity;if(null===o)return!1;for(let t=Object.keys(this.colorSwatches),i=t.length-1;i>-1;--i)if(this.colorSwatches[t[i]].color.replace(/\s/g,"")===o&&parseFloat(this.colorSwatches[t[i]].opacity)===parseFloat(s))return!1;const n=this.UID();this.addSwatchHtml(t,o,s,n),this.colorSwatches[n]={color:o,opacity:s,uid:n},this.updateColorSwatches("colors")},addSwatchHtml(t,i,o,s){const n=s=>{const n=t.createElement("li"),r=t.createElement("span"),c=t.createElement("span");return n.className="tfminicolors-swatch tfminicolors-sprite",n.dataset.uid=s,n.dataset.swatchColor=i.replace(")",", "+o+")").replace("rgb","rgba"),r.className="tfminicolors-swatch-color tf_abs",r.style.backgroundColor=i,r.style.opacity=o,c.className="tf_delete_swatch tf_close",n.append(r,c),n};for(let i=t.querySelectorAll(".tf_swatches_container .tfminicolors-swatches"),o=i.length-1;o>-1;--o)i[o].insertBefore(n(s),i[o].firstChild)},hex2Rgb(t){const i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return i?"rgb("+parseInt(i[1],16)+","+parseInt(i[2],16)+","+parseInt(i[3],16)+")":null}},t.themifyColorManager.init()})(jQuery,window,document);