!function(I){var e={init:function(a){return this.each(function(){var B=I("#"+I(this).attr("data-activates")),D=(I("body"),I(this)),E=D.parent(".tap-target-wrapper"),F=E.find(".tap-target-wave"),e=E.find(".tap-target-origin"),G=D.find(".tap-target-content");E.length||(E=D.wrap(I('<div class="tap-target-wrapper"></div>')).parent()),G.length||(G=I('<div class="tap-target-content"></div>'),D.append(G)),F.length||(F=I('<div class="tap-target-wave"></div>'),e.length||((e=B.clone(!0,!0)).addClass("tap-target-origin"),e.removeAttr("id"),e.removeAttr("style"),F.append(e)),E.append(F));var t=function(){E.is(".open")||(E.addClass("open"),setTimeout(function(){e.off("click.tapTarget").on("click.tapTarget",function(){o(),e.off("click.tapTarget")}),I(document).off("click.tapTarget").on("click.tapTarget",function(){o(),I(document).off("click.tapTarget")});var t=Materialize.throttle(function(){i()},200);I(window).off("resize.tapTarget").on("resize.tapTarget",t)},0))},o=function(){E.is(".open")&&(E.removeClass("open"),e.off("click.tapTarget"),I(document).off("click.tapTarget"),I(window).off("resize.tapTarget"))},i=function(){var t="fixed"===B.css("position");if(!t)for(var e=B.parents(),o=0;o<e.length&&!(t="fixed"==I(e[o]).css("position"));o++);var i=B.outerWidth(),a=B.outerHeight(),n=t?B.offset().top-I(document).scrollTop():B.offset().top,r=t?B.offset().left-I(document).scrollLeft():B.offset().left,p=I(window).width(),f=I(window).height(),c=p/2,s=f/2,d=r<=c,l=c<r,g=n<=s,u=s<n,h=.25*p<=r&&r<=.75*p,v=D.outerWidth(),w=D.outerHeight(),T=n+a/2-w/2,m=r+i/2-v/2,k=t?"fixed":"absolute",b=h?v:v/2+i,y=w/2,x=g?w/2:0,z=0,j=d&&!h?v/2-i:0,A=0,C=i,H=u?"bottom":"top",M=2*i,Q=M,W=w/2-Q/2,L=v/2-M/2,q={};q.top=g?T:"",q.right=l?p-m-v:"",q.bottom=u?f-T-w:"",q.left=d?m:"",q.position=k,E.css(q),G.css({width:b,height:y,top:x,right:A,bottom:z,left:j,padding:C,verticalAlign:H}),F.css({top:W,left:L,width:M,height:Q})};"open"==a&&(i(),t()),"close"==a&&o()})},open:function(){},close:function(){}};I.fn.tapTarget=function(t){if(e[t]||"object"==typeof t)return e.init.apply(this,arguments);I.error("Method "+t+" does not exist on jQuery.tap-target")}}(jQuery);