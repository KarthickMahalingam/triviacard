!function(u){function l(l,s,a,c){var f=u();return u.each(h,function(t,e){if(0<e.height()){var r=e.offset().top,i=e.offset().left,o=i+e.width(),n=r+e.height();!(s<i||o<c||a<r||n<l)&&f.push(e)}}),f}function s(t){++p;var e=a.scrollTop(),r=a.scrollLeft(),i=r+a.width(),o=e+a.height(),n=l(e+d.top+t||200,i+d.right,o+d.bottom,r+d.left);u.each(n,function(t,e){"number"!=typeof e.data("scrollSpy:ticks")&&e.triggerHandler("scrollSpy:enter"),e.data("scrollSpy:ticks",p)}),u.each(c,function(t,e){var r=e.data("scrollSpy:ticks");"number"==typeof r&&r!==p&&(e.triggerHandler("scrollSpy:exit"),e.data("scrollSpy:ticks",null))}),c=n}function e(){a.trigger("scrollSpy:winSize")}var a=u(window),h=[],c=[],f=!1,p=0,d={top:0,right:0,bottom:0,left:0};u.scrollSpy=function(t,r){var e={throttle:100,scrollOffset:200,activeClass:"active",getActiveElement:function(t){return'a[href="#'+t+'"]'}};r=u.extend(e,r);var i=[];(t=u(t)).each(function(t,e){h.push(u(e)),u(e).data("scrollSpy:id",t),u('a[href="#'+u(e).attr("id")+'"]').click(function(t){t.preventDefault();var e=u(Materialize.escapeHash(this.hash)).offset().top+1;u("html, body").animate({scrollTop:e-r.scrollOffset},{duration:400,queue:!1,easing:"easeOutCubic"})})}),d.top=r.offsetTop||0,d.right=r.offsetRight||0,d.bottom=r.offsetBottom||0,d.left=r.offsetLeft||0;var o=Materialize.throttle(function(){s(r.scrollOffset)},r.throttle||100),n=function(){u(document).on("ready turbolinks:load",o)};return f||(a.on("scroll",n),a.on("resize",n),f=!0),setTimeout(n,0),t.on("scrollSpy:enter",function(){i=u.grep(i,function(t){return 0!=t.height()});var t=u(this);i[0]?(u(r.getActiveElement(i[0].attr("id"))).removeClass(r.activeClass),t.data("scrollSpy:id")<i[0].data("scrollSpy:id")?i.unshift(u(this)):i.push(u(this))):i.push(u(this)),u(r.getActiveElement(i[0].attr("id"))).addClass(r.activeClass)}),t.on("scrollSpy:exit",function(){if((i=u.grep(i,function(t){return 0!=t.height()}))[0]){u(r.getActiveElement(i[0].attr("id"))).removeClass(r.activeClass);var e=u(this);(i=u.grep(i,function(t){return t.attr("id")!=e.attr("id")}))[0]&&u(r.getActiveElement(i[0].attr("id"))).addClass(r.activeClass)}}),t},u.winSizeSpy=function(t){return u.winSizeSpy=function(){return a},t=t||{throttle:100},a.on("resize",Materialize.throttle(e,t.throttle||100))},u.fn.scrollSpy=function(t){return u.scrollSpy(u(this),t)}}(jQuery);