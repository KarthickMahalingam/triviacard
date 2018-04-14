!function(P){function _(t){return document.createElementNS(s,t)}function x(t){return(t<10?"0":"")+t}function C(t){var i=++a+"";return t?t+i:i}function c(t,l){function i(t,o){var i=u.offset(),e=/^touch/.test(t.type),c=i.left+O,n=i.top+O,r=(e?t.originalEvent.touches[0]:t).pageX-c,a=(e?t.originalEvent.touches[0]:t).pageY-n,s=Math.sqrt(r*r+a*a),p=!1;if(!o||!(s<D-U||D+U<s)){t.preventDefault();var h=setTimeout(function(){d.popover.addClass("clockpicker-moving")},200);d.setHand(r,a,!o,!0),V.off(E).on(E,function(t){t.preventDefault();var i=/^touch/.test(t.type),e=(i?t.originalEvent.touches[0]:t).pageX-c,s=(i?t.originalEvent.touches[0]:t).pageY-n;(p||e!==r||s!==a)&&(p=!0,d.setHand(e,s,!1,!0))}),V.off(I).on(I,function(t){V.off(I),t.preventDefault();var i=/^touch/.test(t.type),e=(i?t.originalEvent.changedTouches[0]:t).pageX-c,s=(i?t.originalEvent.changedTouches[0]:t).pageY-n;(o||p)&&e===r&&s===a&&d.setHand(e,s),"hours"===d.currentView?d.toggleView("minutes",q/2):l.autoclose&&(d.minutesView.addClass("clockpicker-dial-out"),setTimeout(function(){d.done()},q/2)),u.prepend(g),clearTimeout(h),d.popover.removeClass("clockpicker-moving"),V.off(E)})}}var e=P(z),u=e.find(".clockpicker-plate"),s=e.find(".picker__holder"),o=e.find(".clockpicker-hours"),c=e.find(".clockpicker-minutes"),n=e.find(".clockpicker-am-pm-block"),r="INPUT"===t.prop("tagName"),a=r?t:t.find("input"),p=P("label[for="+a.attr("id")+"]"),d=this;this.id=C("cp"),this.element=t,this.holder=s,this.options=l,this.isAppended=!1,this.isShown=!1,this.currentView="hours",this.isInput=r,this.input=a,this.label=p,this.popover=e,this.plate=u,this.hoursView=o,this.minutesView=c,this.amPmBlock=n,this.spanHours=e.find(".clockpicker-span-hours"),this.spanMinutes=e.find(".clockpicker-span-minutes"),this.spanAmPm=e.find(".clockpicker-span-am-pm"),this.footer=e.find(".picker__footer"),this.amOrPm="PM",l.twelvehour&&(l.ampmclickable?(this.spanAmPm.empty(),P('<div id="click-am">AM</div>').on("click",function(){d.spanAmPm.children("#click-am").addClass("text-primary"),d.spanAmPm.children("#click-pm").removeClass("text-primary"),d.amOrPm="AM"}).appendTo(this.spanAmPm),P('<div id="click-pm">PM</div>').on("click",function(){d.spanAmPm.children("#click-pm").addClass("text-primary"),d.spanAmPm.children("#click-am").removeClass("text-primary"),d.amOrPm="PM"}).appendTo(this.spanAmPm)):(this.spanAmPm.empty(),P('<div id="click-am">AM</div>').appendTo(this.spanAmPm),P('<div id="click-pm">PM</div>').appendTo(this.spanAmPm))),P('<button type="button" class="btn-flat picker__clear" tabindex="'+(l.twelvehour?"3":"1")+'">'+l.cleartext+"</button>").click(P.proxy(this.clear,this)).appendTo(this.footer),P('<button type="button" class="btn-flat picker__close" tabindex="'+(l.twelvehour?"3":"1")+'">'+l.canceltext+"</button>").click(P.proxy(this.hide,this)).appendTo(this.footer),P('<button type="button" class="btn-flat picker__close" tabindex="'+(l.twelvehour?"3":"1")+'">'+l.donetext+"</button>").click(P.proxy(this.done,this)).appendTo(this.footer),this.spanHours.click(P.proxy(this.toggleView,this,"hours")),this.spanMinutes.click(P.proxy(this.toggleView,this,"minutes")),a.on("focus.clockpicker click.clockpicker",P.proxy(this.show,this));var h,k,m,v,f=P('<div class="clockpicker-tick"></div>');if(l.twelvehour)for(h=1;h<13;h+=1)k=f.clone(),m=h/6*Math.PI,v=D,k.css({left:O+Math.sin(m)*v-U,top:O-Math.cos(m)*v-U}),k.html(0===h?"00":h),o.append(k),k.on(S,i);else for(h=0;h<24;h+=1){k=f.clone(),m=h/6*Math.PI,v=0<h&&h<13?L:D,k.css({left:O+Math.sin(m)*v-U,top:O-Math.cos(m)*v-U}),k.html(0===h?"00":h),o.append(k),k.on(S,i)}for(h=0;h<60;h+=5)k=f.clone(),m=h/30*Math.PI,k.css({left:O+Math.sin(m)*D-U,top:O-Math.cos(m)*D-U}),k.html(x(h)),c.append(k),k.on(S,i);if(u.on(S,function(t){0===P(t.target).closest(".clockpicker-tick").length&&i(t,!0)}),H){var g=e.find(".clockpicker-canvas"),b=_("svg");b.setAttribute("class","clockpicker-svg"),b.setAttribute("width",j),b.setAttribute("height",j);var w=_("g");w.setAttribute("transform","translate("+O+","+O+")");var y=_("circle");y.setAttribute("class","clockpicker-canvas-bearing"),y.setAttribute("cx",0),y.setAttribute("cy",0),y.setAttribute("r",4);var A=_("line");A.setAttribute("x1",0),A.setAttribute("y1",0);var M=_("circle");M.setAttribute("class","clockpicker-canvas-bg"),M.setAttribute("r",U),w.appendChild(A),w.appendChild(M),w.appendChild(y),b.appendChild(w),g.append(b),this.hand=A,this.bg=M,this.bearing=y,this.g=w,this.canvas=g}T(this.options.init)}function T(t){t&&"function"==typeof t&&t()}var t,i,e,o=P(window),V=P(document),s="http://www.w3.org/2000/svg",H="SVGAngle"in window&&((i=document.createElement("div")).innerHTML="<svg/>",t=(i.firstChild&&i.firstChild.namespaceURI)==s,i.innerHTML="",t),n="transition"in(e=document.createElement("div").style)||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e,r="ontouchstart"in window,S="mousedown"+(r?" touchstart":""),E="mousemove.clockpicker"+(r?" touchmove.clockpicker":""),I="mouseup.clockpicker"+(r?" touchend.clockpicker":""),m=navigator.vibrate?"vibrate":navigator.webkitVibrate?"webkitVibrate":null,a=0,O=135,D=105,L=70,U=20,j=2*O,q=n?350:1,z=['<div class="clockpicker picker">','<div class="picker__holder">','<div class="picker__frame">','<div class="picker__wrap">','<div class="picker__box">','<div class="picker__date-display">','<div class="clockpicker-display">','<div class="clockpicker-display-column">','<span class="clockpicker-span-hours text-primary"></span>',":",'<span class="clockpicker-span-minutes"></span>',"</div>",'<div class="clockpicker-display-column clockpicker-display-am-pm">','<div class="clockpicker-span-am-pm"></div>',"</div>","</div>","</div>",'<div class="picker__container__wrapper">','<div class="picker__calendar-container">','<div class="clockpicker-plate">','<div class="clockpicker-canvas"></div>','<div class="clockpicker-dial clockpicker-hours"></div>','<div class="clockpicker-dial clockpicker-minutes clockpicker-dial-out"></div>',"</div>",'<div class="clockpicker-am-pm-block">',"</div>","</div>",'<div class="picker__footer">',"</div>","</div>","</div>","</div>","</div>","</div>","</div>"].join("");c.DEFAULTS={"default":"",fromnow:0,donetext:"Ok",cleartext:"Clear",canceltext:"Cancel",autoclose:!1,ampmclickable:!0,darktheme:!1,twelvehour:!0,vibrate:!0},c.prototype.toggle=function(){this[this.isShown?"hide":"show"]()},c.prototype.locate=function(){var t=this.element,i=this.popover;t.offset(),t.outerWidth(),t.outerHeight(),this.options.align;i.show()},c.prototype.show=function(){if(!this.isShown){T(this.options.beforeShow),P(":input").each(function(){P(this).attr("tabindex",-1)});var e=this;this.input.blur(),this.popover.addClass("picker--opened"),this.input.addClass("picker__input picker__input--active"),P(document.body).css("overflow","hidden");var t=((this.input.prop("value")||this.options["default"]||"")+"").split(":");if(this.options.twelvehour&&"undefined"!=typeof t[1]&&(0<t[1].indexOf("AM")?this.amOrPm="AM":this.amOrPm="PM",t[1]=t[1].replace("AM","").replace("PM","")),"now"===t[0]){var i=new Date(+new Date+this.options.fromnow);t=[i.getHours(),i.getMinutes()],this.options.twelvehour&&(this.amOrPm=12<=t[0]&&t[0]<24?"PM":"AM")}if(this.hours=+t[0]||0,this.minutes=+t[1]||0,this.spanHours.html(this.hours),this.spanMinutes.html(x(this.minutes)),!this.isAppended){var s=document.querySelector(this.options.container);this.options.container&&s?s.appendChild(this.popover[0]):this.popover.insertAfter(this.input),this.options.twelvehour&&("PM"===this.amOrPm?(this.spanAmPm.children("#click-pm").addClass("text-primary"),this.spanAmPm.children("#click-am").removeClass("text-primary")):(this.spanAmPm.children("#click-am").addClass("text-primary"),this.spanAmPm.children("#click-pm").removeClass("text-primary"))),o.on("resize.clockpicker"+this.id,function(){e.isShown&&e.locate()}),this.isAppended=!0}this.toggleView("hours"),this.locate(),this.isShown=!0,V.on("click.clockpicker."+this.id+" focusin.clockpicker."+this.id,function(t){var i=P(t.target);0===i.closest(e.popover.find(".picker__wrap")).length&&0===i.closest(e.input).length&&e.hide()}),V.on("keyup.clockpicker."+this.id,function(t){27===t.keyCode&&e.hide()}),T(this.options.afterShow)}},c.prototype.hide=function(){T(this.options.beforeHide),this.input.removeClass("picker__input picker__input--active"),this.popover.removeClass("picker--opened"),P(document.body).css("overflow","visible"),this.isShown=!1,P(":input").each(function(t){P(this).attr("tabindex",t+1)}),V.off("click.clockpicker."+this.id+" focusin.clockpicker."+this.id),V.off("keyup.clockpicker."+this.id),this.popover.hide(),T(this.options.afterHide)},c.prototype.toggleView=function(t,i){var e=!1;"minutes"===t&&"visible"===P(this.hoursView).css("visibility")&&(T(this.options.beforeHourSelect),e=!0);var s="hours"===t,o=s?this.hoursView:this.minutesView,c=s?this.minutesView:this.hoursView;this.currentView=t,this.spanHours.toggleClass("text-primary",s),this.spanMinutes.toggleClass("text-primary",!s),c.addClass("clockpicker-dial-out"),o.css("visibility","visible").removeClass("clockpicker-dial-out"),this.resetClock(i),clearTimeout(this.toggleViewTimer),this.toggleViewTimer=setTimeout(function(){c.css("visibility","hidden")},q),e&&T(this.options.afterHourSelect)},c.prototype.resetClock=function(t){var i=this.currentView,e=this[i],s="hours"===i,o=e*(Math.PI/(s?6:30)),c=s&&0<e&&e<13?L:D,n=Math.sin(o)*c,r=-Math.cos(o)*c,a=this;H&&t?(a.canvas.addClass("clockpicker-canvas-out"),setTimeout(function(){a.canvas.removeClass("clockpicker-canvas-out"),a.setHand(n,r)},t)):this.setHand(n,r)},c.prototype.setHand=function(t,i,e){var s,o=Math.atan2(t,-i),c="hours"===this.currentView,n=Math.PI/(c||e?6:30),r=Math.sqrt(t*t+i*i),a=this.options,p=c&&r<(D+L)/2,h=p?L:D;if(a.twelvehour&&(h=D),o<0&&(o=2*Math.PI+o),o=(s=Math.round(o/n))*n,a.twelvehour?c?0===s&&(s=12):(e&&(s*=5),60===s&&(s=0)):c?(12===s&&(s=0),s=p?0===s?12:s:0===s?0:s+12):(e&&(s*=5),60===s&&(s=0)),this[this.currentView]!==s&&m&&this.options.vibrate&&(this.vibrateTimer||(navigator[m](10),this.vibrateTimer=setTimeout(P.proxy(function(){this.vibrateTimer=null},this),100))),this[this.currentView]=s,c?this.spanHours.html(s):this.spanMinutes.html(x(s)),H){var l=Math.sin(o)*(h-U),u=-Math.cos(o)*(h-U),d=Math.sin(o)*h,k=-Math.cos(o)*h;this.hand.setAttribute("x2",l),this.hand.setAttribute("y2",u),this.bg.setAttribute("cx",d),this.bg.setAttribute("cy",k)}else this[c?"hoursView":"minutesView"].find(".clockpicker-tick").each(function(){var t=P(this);t.toggleClass("active",s===+t.html())})},c.prototype.done=function(){T(this.options.beforeDone),this.hide(),this.label.addClass("active");var t=this.input.prop("value"),i=x(this.hours)+":"+x(this.minutes);this.options.twelvehour&&(i+=this.amOrPm),this.input.prop("value",i),i!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur"),T(this.options.afterDone)},c.prototype.clear=function(){this.hide(),this.label.removeClass("active");var t=this.input.prop("value"),i="";this.input.prop("value",i),i!==t&&(this.input.triggerHandler("change"),this.isInput||this.element.trigger("change")),this.options.autoclose&&this.input.trigger("blur")},c.prototype.remove=function(){this.element.removeData("clockpicker"),this.input.off("focus.clockpicker click.clockpicker"),this.isShown&&this.hide(),this.isAppended&&(o.off("resize.clockpicker"+this.id),this.popover.remove())},P.fn.pickatime=function(s){var o=Array.prototype.slice.call(arguments,1);return this.each(function(){var t=P(this),i=t.data("clockpicker");if(i)"function"==typeof i[s]&&i[s].apply(i,o);else{var e=P.extend({},c.DEFAULTS,t.data(),"object"==typeof s&&s);t.data("clockpicker",new c(t,e))}})}}(jQuery);