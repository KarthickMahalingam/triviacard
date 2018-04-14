!function(d){var t={data:[],placeholder:"",secondaryPlaceholder:"",autocompleteOptions:{}};d(document).on("ready turbolinks:load",function(){d(document).on("click",".chip .close",function(){d(this).closest(".chips").attr("data-initialized")||d(this).closest(".chip").remove()})}),d.fn.material_chip=function(e){var o=this;if(this.$el=d(this),this.$document=d(document),this.SELS={CHIPS:".chips",CHIP:".chip",INPUT:"input",DELETE:".material-icons",SELECTED_CHIP:".selected"},"data"===e)return this.$el.data("chips");var c=d.extend({},t,e);o.hasAutocomplete=!d.isEmptyObject(c.autocompleteOptions.data),this.init=function(){var i=0;o.$el.each(function(){var e=d(this),t=Materialize.guid();o.chipId=t,c.data&&c.data instanceof Array||(c.data=[]),e.data("chips",c.data),e.attr("data-index",i),e.attr("data-initialized",!0),e.hasClass(o.SELS.CHIPS)||e.addClass("chips"),o.chips(e,t),i++})},this.handleEvents=function(){var s=o.SELS;o.$document.off("click.chips-focus",s.CHIPS).on("click.chips-focus",s.CHIPS,function(e){d(e.target).find(s.INPUT).focus()}),o.$document.off("click.chips-select",s.CHIP).on("click.chips-select",s.CHIP,function(e){var t=d(e.target);if(t.length){var i=t.hasClass("selected"),a=t.closest(s.CHIPS);d(s.CHIP).removeClass("selected"),i||o.selectChip(t.index(),a)}}),o.$document.off("keydown.chips").on("keydown.chips",function(e){if(!d(e.target).is("input, textarea")){var t,i=o.$document.find(s.CHIP+s.SELECTED_CHIP),a=i.closest(s.CHIPS),c=i.siblings(s.CHIP).length;if(i.length)if(8===e.which||46===e.which){e.preventDefault(),t=i.index(),o.deleteChip(t,a);var n=null;t+1<c?n=t:t!==c&&t+1!==c||(n=c-1),n<0&&(n=null),null!==n&&o.selectChip(n,a),c||a.find("input").focus()}else if(37===e.which){if((t=i.index()-1)<0)return;d(s.CHIP).removeClass("selected"),o.selectChip(t,a)}else if(39===e.which){if(t=i.index()+1,d(s.CHIP).removeClass("selected"),c<t)return void a.find("input").focus();o.selectChip(t,a)}}}),o.$document.off("focusin.chips",s.CHIPS+" "+s.INPUT).on("focusin.chips",s.CHIPS+" "+s.INPUT,function(e){var t=d(e.target).closest(s.CHIPS);t.addClass("focus"),t.siblings("label, .prefix").addClass("active"),d(s.CHIP).removeClass("selected")}),o.$document.off("focusout.chips",s.CHIPS+" "+s.INPUT).on("focusout.chips",s.CHIPS+" "+s.INPUT,function(e){var t=d(e.target).closest(s.CHIPS);t.removeClass("focus"),t.data("chips")!==undefined&&t.data("chips").length||t.siblings("label").removeClass("active"),t.siblings(".prefix").removeClass("active")}),o.$document.off("keydown.chips-add",s.CHIPS+" "+s.INPUT).on("keydown.chips-add",s.CHIPS+" "+s.INPUT,function(e){var t=d(e.target),i=t.closest(s.CHIPS),a=i.children(s.CHIP).length;if(13===e.which){if(o.hasAutocomplete&&i.find(".autocomplete-content.dropdown-content").length&&i.find(".autocomplete-content.dropdown-content").children().length)return;return e.preventDefault(),o.addChip({tag:t.val()},i),void t.val("")}if((8===e.keyCode||37===e.keyCode)&&""===t.val()&&a)return e.preventDefault(),o.selectChip(a-1,i),void t.blur()}),o.$document.off("click.chips-delete",s.CHIPS+" "+s.DELETE).on("click.chips-delete",s.CHIPS+" "+s.DELETE,function(e){var t=d(e.target),i=t.closest(s.CHIPS),a=t.closest(s.CHIP);e.stopPropagation(),o.deleteChip(a.index(),i),i.find("input").focus()})},this.chips=function(t,e){t.empty(),t.data("chips").forEach(function(e){t.append(o.renderChip(e))}),t.append(d('<input id="'+e+'" class="input" placeholder="">')),o.setPlaceholder(t);var i=t.next("label");i.length&&(i.attr("for",e),t.data("chips")!==undefined&&t.data("chips").length&&i.addClass("active"));var a=d("#"+e);o.hasAutocomplete&&(c.autocompleteOptions.onAutocomplete=function(e){o.addChip({tag:e},t),a.val(""),a.focus()},a.autocomplete(c.autocompleteOptions))},this.renderChip=function(e){if(e.tag){var t=d('<div class="chip"></div>');return t.text(e.tag),e.image&&t.prepend(d("<img />").attr("src",e.image)),t.append(d('<i class="material-icons close">close</i>')),t}},this.setPlaceholder=function(e){e.data("chips")!==undefined&&!e.data("chips").length&&c.placeholder?e.find("input").prop("placeholder",c.placeholder):(e.data("chips")===undefined||e.data("chips").length)&&c.secondaryPlaceholder&&e.find("input").prop("placeholder",c.secondaryPlaceholder)},this.isValid=function(e,t){for(var i=e.data("chips"),a=!1,c=0;c<i.length;c++)if(i[c].tag===t.tag)return void(a=!0);return""!==t.tag&&!a},this.addChip=function(e,t){if(o.isValid(t,e)){for(var i=o.renderChip(e),a=[],c=t.data("chips"),n=0;n<c.length;n++)a.push(c[n]);a.push(e),t.data("chips",a),i.insertBefore(t.find("input")),t.trigger("chip.add",e),o.setPlaceholder(t)}},this.deleteChip=function(e,t){var i=t.data("chips")[e];t.find(".chip").eq(e).remove();for(var a=[],c=t.data("chips"),n=0;n<c.length;n++)n!==e&&a.push(c[n]);t.data("chips",a),t.trigger("chip.delete",i),o.setPlaceholder(t)},this.selectChip=function(e,t){var i=t.find(".chip").eq(e);i&&!1===i.hasClass("selected")&&(i.addClass("selected"),t.trigger("chip.select",t.data("chips")[e]))},this.getChipsElement=function(e,t){return t.eq(e)},this.init(),this.handleEvents()}}(jQuery);