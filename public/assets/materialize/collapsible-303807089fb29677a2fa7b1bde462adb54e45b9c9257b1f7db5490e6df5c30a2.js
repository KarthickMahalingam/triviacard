!function(f){f.fn.collapsible=function(d,p){var e={accordion:undefined,onOpen:undefined,onClose:undefined},h=d;return d=f.extend(e,d),this.each(function(){function s(e){c=i.find("> li > .collapsible-header"),e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){f(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){f(this).css("height","")}}),c.not(e).removeClass("active").parent().removeClass("active"),c.not(e).parent().children(".collapsible-body").stop(!0,!1).each(function(){f(this).is(":visible")&&f(this).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){f(this).css("height",""),a(f(this).siblings(".collapsible-header"))}})})}function t(e){e.hasClass("active")?e.parent().addClass("active"):e.parent().removeClass("active"),e.parent().hasClass("active")?e.siblings(".collapsible-body").stop(!0,!1).slideDown({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){f(this).css("height","")}}):e.siblings(".collapsible-body").stop(!0,!1).slideUp({duration:350,easing:"easeOutQuart",queue:!1,complete:function(){f(this).css("height","")}})}function n(e,i){i||e.toggleClass("active"),d.accordion||"accordion"===u||u===undefined?s(e):t(e),a(e)}function a(e){e.hasClass("active")?"function"==typeof d.onOpen&&d.onOpen.call(this,e.parent()):"function"==typeof d.onClose&&d.onClose.call(this,e.parent())}function l(e){return 0<o(e).length}function o(e){return e.closest("li > .collapsible-header")}function e(){i.off("click.collapse","> li > .collapsible-header")}var i=f(this),c=f(this).find("> li > .collapsible-header"),u=i.data("collapsible");if("destroy"!==h)if(0<=p&&p<c.length){var r=c.eq(p);r.length&&("open"===h||"close"===h&&r.hasClass("active"))&&n(r)}else e(),i.on("click.collapse","> li > .collapsible-header",function(e){var i=f(e.target);l(i)&&(i=o(i)),n(i)}),d.accordion||"accordion"===u||u===undefined?n(c.filter(".active").first(),!0):c.filter(".active").each(function(){n(f(this),!0)});else e()})},f(document).on("ready turbolinks:load",function(){f(".collapsible").collapsible()})}(jQuery);