// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function noop() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*!
* jQuery Cycle2; build: v20131022
* http://jquery.malsup.com/cycle2/
* Copyright (c) 2013 M. Alsup; Dual licensed: MIT/GPL
*/
/*! core engine; version: 20131003 */
(function(e){"use strict";function t(e){return(e||"").toLowerCase()}var i="20131003";e.fn.cycle=function(i){var n;return 0!==this.length||e.isReady?this.each(function(){var n,s,o,c,r=e(this),l=e.fn.cycle.log;if(!r.data("cycle.opts")){(r.data("cycle-log")===!1||i&&i.log===!1||s&&s.log===!1)&&(l=e.noop),l("--c2 init--"),n=r.data();for(var a in n)n.hasOwnProperty(a)&&/^cycle[A-Z]+/.test(a)&&(c=n[a],o=a.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),l(o+":",c,"("+typeof c+")"),n[o]=c);s=e.extend({},e.fn.cycle.defaults,n,i||{}),s.timeoutId=0,s.paused=s.paused||!1,s.container=r,s._maxZ=s.maxZ,s.API=e.extend({_container:r},e.fn.cycle.API),s.API.log=l,s.API.trigger=function(e,t){return s.container.trigger(e,t),s.API},r.data("cycle.opts",s),r.data("cycle.API",s.API),s.API.trigger("cycle-bootstrap",[s,s.API]),s.API.addInitialSlides(),s.API.preInitSlideshow(),s.slides.length&&s.API.initSlideshow()}}):(n={s:this.selector,c:this.context},e.fn.cycle.log("requeuing slideshow (dom not ready)"),e(function(){e(n.s,n.c).cycle(i)}),this)},e.fn.cycle.API={opts:function(){return this._container.data("cycle.opts")},addInitialSlides:function(){var t=this.opts(),i=t.slides;t.slideCount=0,t.slides=e(),i=i.jquery?i:t.container.find(i),t.random&&i.sort(function(){return Math.random()-.5}),t.API.add(i)},preInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-pre-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.preInit)&&i.preInit(t),t._preInitialized=!0},postInitSlideshow:function(){var t=this.opts();t.API.trigger("cycle-post-initialize",[t]);var i=e.fn.cycle.transitions[t.fx];i&&e.isFunction(i.postInit)&&i.postInit(t)},initSlideshow:function(){var t,i=this.opts(),n=i.container;i.API.calcFirstSlide(),"static"==i.container.css("position")&&i.container.css("position","relative"),e(i.slides[i.currSlide]).css("opacity",1).show(),i.API.stackSlides(i.slides[i.currSlide],i.slides[i.nextSlide],!i.reverse),i.pauseOnHover&&(i.pauseOnHover!==!0&&(n=e(i.pauseOnHover)),n.hover(function(){i.API.pause(!0)},function(){i.API.resume(!0)})),i.timeout&&(t=i.API.getSlideOpts(i.currSlide),i.API.queueTransition(t,t.timeout+i.delay)),i._initialized=!0,i.API.updateView(!0),i.API.trigger("cycle-initialized",[i]),i.API.postInitSlideshow()},pause:function(t){var i=this.opts(),n=i.API.getSlideOpts(),s=i.hoverPaused||i.paused;t?i.hoverPaused=!0:i.paused=!0,s||(i.container.addClass("cycle-paused"),i.API.trigger("cycle-paused",[i]).log("cycle-paused"),n.timeout&&(clearTimeout(i.timeoutId),i.timeoutId=0,i._remainingTimeout-=e.now()-i._lastQueue,(0>i._remainingTimeout||isNaN(i._remainingTimeout))&&(i._remainingTimeout=void 0)))},resume:function(e){var t=this.opts(),i=!t.hoverPaused&&!t.paused;e?t.hoverPaused=!1:t.paused=!1,i||(t.container.removeClass("cycle-paused"),0===t.slides.filter(":animated").length&&t.API.queueTransition(t.API.getSlideOpts(),t._remainingTimeout),t.API.trigger("cycle-resumed",[t,t._remainingTimeout]).log("cycle-resumed"))},add:function(t,i){var n,s=this.opts(),o=s.slideCount,c=!1;"string"==e.type(t)&&(t=e.trim(t)),e(t).each(function(){var t,n=e(this);i?s.container.prepend(n):s.container.append(n),s.slideCount++,t=s.API.buildSlideOpts(n),s.slides=i?e(n).add(s.slides):s.slides.add(n),s.API.initSlide(t,n,--s._maxZ),n.data("cycle.opts",t),s.API.trigger("cycle-slide-added",[s,t,n])}),s.API.updateView(!0),c=s._preInitialized&&2>o&&s.slideCount>=1,c&&(s._initialized?s.timeout&&(n=s.slides.length,s.nextSlide=s.reverse?n-1:1,s.timeoutId||s.API.queueTransition(s)):s.API.initSlideshow())},calcFirstSlide:function(){var e,t=this.opts();e=parseInt(t.startingSlide||0,10),(e>=t.slides.length||0>e)&&(e=0),t.currSlide=e,t.reverse?(t.nextSlide=e-1,0>t.nextSlide&&(t.nextSlide=t.slides.length-1)):(t.nextSlide=e+1,t.nextSlide==t.slides.length&&(t.nextSlide=0))},calcNextSlide:function(){var e,t=this.opts();t.reverse?(e=0>t.nextSlide-1,t.nextSlide=e?t.slideCount-1:t.nextSlide-1,t.currSlide=e?0:t.nextSlide+1):(e=t.nextSlide+1==t.slides.length,t.nextSlide=e?0:t.nextSlide+1,t.currSlide=e?t.slides.length-1:t.nextSlide-1)},calcTx:function(t,i){var n,s=t;return i&&s.manualFx&&(n=e.fn.cycle.transitions[s.manualFx]),n||(n=e.fn.cycle.transitions[s.fx]),n||(n=e.fn.cycle.transitions.fade,s.API.log('Transition "'+s.fx+'" not found.  Using fade.')),n},prepareTx:function(e,t){var i,n,s,o,c,r=this.opts();return 2>r.slideCount?(r.timeoutId=0,void 0):(!e||r.busy&&!r.manualTrump||(r.API.stopTransition(),r.busy=!1,clearTimeout(r.timeoutId),r.timeoutId=0),r.busy||(0!==r.timeoutId||e)&&(n=r.slides[r.currSlide],s=r.slides[r.nextSlide],o=r.API.getSlideOpts(r.nextSlide),c=r.API.calcTx(o,e),r._tx=c,e&&void 0!==o.manualSpeed&&(o.speed=o.manualSpeed),r.nextSlide!=r.currSlide&&(e||!r.paused&&!r.hoverPaused&&r.timeout)?(r.API.trigger("cycle-before",[o,n,s,t]),c.before&&c.before(o,n,s,t),i=function(){r.busy=!1,r.container.data("cycle.opts")&&(c.after&&c.after(o,n,s,t),r.API.trigger("cycle-after",[o,n,s,t]),r.API.queueTransition(o),r.API.updateView(!0))},r.busy=!0,c.transition?c.transition(o,n,s,t,i):r.API.doTransition(o,n,s,t,i),r.API.calcNextSlide(),r.API.updateView()):r.API.queueTransition(o)),void 0)},doTransition:function(t,i,n,s,o){var c=t,r=e(i),l=e(n),a=function(){l.animate(c.animIn||{opacity:1},c.speed,c.easeIn||c.easing,o)};l.css(c.cssBefore||{}),r.animate(c.animOut||{},c.speed,c.easeOut||c.easing,function(){r.css(c.cssAfter||{}),c.sync||a()}),c.sync&&a()},queueTransition:function(t,i){var n=this.opts(),s=void 0!==i?i:t.timeout;return 0===n.nextSlide&&0===--n.loop?(n.API.log("terminating; loop=0"),n.timeout=0,s?setTimeout(function(){n.API.trigger("cycle-finished",[n])},s):n.API.trigger("cycle-finished",[n]),n.nextSlide=n.currSlide,void 0):(s&&(n._lastQueue=e.now(),void 0===i&&(n._remainingTimeout=t.timeout),n.paused||n.hoverPaused||(n.timeoutId=setTimeout(function(){n.API.prepareTx(!1,!n.reverse)},s))),void 0)},stopTransition:function(){var e=this.opts();e.slides.filter(":animated").length&&(e.slides.stop(!1,!0),e.API.trigger("cycle-transition-stopped",[e])),e._tx&&e._tx.stopTransition&&e._tx.stopTransition(e)},advanceSlide:function(e){var t=this.opts();return clearTimeout(t.timeoutId),t.timeoutId=0,t.nextSlide=t.currSlide+e,0>t.nextSlide?t.nextSlide=t.slides.length-1:t.nextSlide>=t.slides.length&&(t.nextSlide=0),t.API.prepareTx(!0,e>=0),!1},buildSlideOpts:function(i){var n,s,o=this.opts(),c=i.data()||{};for(var r in c)c.hasOwnProperty(r)&&/^cycle[A-Z]+/.test(r)&&(n=c[r],s=r.match(/^cycle(.*)/)[1].replace(/^[A-Z]/,t),o.API.log("["+(o.slideCount-1)+"]",s+":",n,"("+typeof n+")"),c[s]=n);c=e.extend({},e.fn.cycle.defaults,o,c),c.slideNum=o.slideCount;try{delete c.API,delete c.slideCount,delete c.currSlide,delete c.nextSlide,delete c.slides}catch(l){}return c},getSlideOpts:function(t){var i=this.opts();void 0===t&&(t=i.currSlide);var n=i.slides[t],s=e(n).data("cycle.opts");return e.extend({},i,s)},initSlide:function(t,i,n){var s=this.opts();i.css(t.slideCss||{}),n>0&&i.css("zIndex",n),isNaN(t.speed)&&(t.speed=e.fx.speeds[t.speed]||e.fx.speeds._default),t.sync||(t.speed=t.speed/2),i.addClass(s.slideClass)},updateView:function(e,t){var i=this.opts();if(i._initialized){var n=i.API.getSlideOpts(),s=i.slides[i.currSlide];!e&&t!==!0&&(i.API.trigger("cycle-update-view-before",[i,n,s]),0>i.updateView)||(i.slideActiveClass&&i.slides.removeClass(i.slideActiveClass).eq(i.currSlide).addClass(i.slideActiveClass),e&&i.hideNonActive&&i.slides.filter(":not(."+i.slideActiveClass+")").hide(),0===i.updateView&&setTimeout(function(){i.API.trigger("cycle-update-view",[i,n,s,e])},n.speed/(i.sync?2:1)),0!==i.updateView&&i.API.trigger("cycle-update-view",[i,n,s,e]),e&&i.API.trigger("cycle-update-view-after",[i,n,s]))}},getComponent:function(t){var i=this.opts(),n=i[t];return"string"==typeof n?/^\s*[\>|\+|~]/.test(n)?i.container.find(n):e(n):n.jquery?n:e(n)},stackSlides:function(t,i,n){var s=this.opts();t||(t=s.slides[s.currSlide],i=s.slides[s.nextSlide],n=!s.reverse),e(t).css("zIndex",s.maxZ);var o,c=s.maxZ-2,r=s.slideCount;if(n){for(o=s.currSlide+1;r>o;o++)e(s.slides[o]).css("zIndex",c--);for(o=0;s.currSlide>o;o++)e(s.slides[o]).css("zIndex",c--)}else{for(o=s.currSlide-1;o>=0;o--)e(s.slides[o]).css("zIndex",c--);for(o=r-1;o>s.currSlide;o--)e(s.slides[o]).css("zIndex",c--)}e(i).css("zIndex",s.maxZ-1)},getSlideIndex:function(e){return this.opts().slides.index(e)}},e.fn.cycle.log=function(){window.console&&console.log&&console.log("[cycle2] "+Array.prototype.join.call(arguments," "))},e.fn.cycle.version=function(){return"Cycle2: "+i},e.fn.cycle.transitions={custom:{},none:{before:function(e,t,i,n){e.API.stackSlides(i,t,n),e.cssBefore={opacity:1,display:"block"}}},fade:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:0,display:"block"}),t.animIn={opacity:1},t.animOut={opacity:0}}},fadeout:{before:function(t,i,n,s){var o=t.API.getSlideOpts(t.nextSlide).slideCss||{};t.API.stackSlides(i,n,s),t.cssBefore=e.extend(o,{opacity:1,display:"block"}),t.animOut={opacity:0}}},scrollHorz:{before:function(e,t,i,n){e.API.stackSlides(t,i,n);var s=e.container.css("overflow","hidden").width();e.cssBefore={left:n?s:-s,top:0,opacity:1,display:"block"},e.cssAfter={zIndex:e._maxZ-2,left:0},e.animIn={left:0},e.animOut={left:n?-s:s}}}},e.fn.cycle.defaults={allowWrap:!0,autoSelector:".cycle-slideshow[data-cycle-auto-init!=false]",delay:0,easing:null,fx:"fade",hideNonActive:!0,loop:0,manualFx:void 0,manualSpeed:void 0,manualTrump:!0,maxZ:100,pauseOnHover:!1,reverse:!1,slideActiveClass:"cycle-slide-active",slideClass:"cycle-slide",slideCss:{position:"absolute",top:0,left:0},slides:"> img",speed:500,startingSlide:0,sync:!0,timeout:4e3,updateView:0},e(document).ready(function(){e(e.fn.cycle.defaults.autoSelector).cycle()})})(jQuery),/*! Cycle2 autoheight plugin; Copyright (c) M.Alsup, 2012; version: 20130304 */
function(e){"use strict";function t(t,n){var s,o,c,r=n.autoHeight;if("container"==r)o=e(n.slides[n.currSlide]).outerHeight(),n.container.height(o);else if(n._autoHeightRatio)n.container.height(n.container.width()/n._autoHeightRatio);else if("calc"===r||"number"==e.type(r)&&r>=0){if(c="calc"===r?i(t,n):r>=n.slides.length?0:r,c==n._sentinelIndex)return;n._sentinelIndex=c,n._sentinel&&n._sentinel.remove(),s=e(n.slides[c].cloneNode(!0)),s.removeAttr("id name rel").find("[id],[name],[rel]").removeAttr("id name rel"),s.css({position:"static",visibility:"hidden",display:"block"}).prependTo(n.container).addClass("cycle-sentinel cycle-slide").removeClass("cycle-slide-active"),s.find("*").css("visibility","hidden"),n._sentinel=s}}function i(t,i){var n=0,s=-1;return i.slides.each(function(t){var i=e(this).height();i>s&&(s=i,n=t)}),n}function n(t,i,n,s){var o=e(s).outerHeight(),c=i.sync?i.speed/2:i.speed;i.container.animate({height:o},c)}function s(i,o){o._autoHeightOnResize&&(e(window).off("resize orientationchange",o._autoHeightOnResize),o._autoHeightOnResize=null),o.container.off("cycle-slide-added cycle-slide-removed",t),o.container.off("cycle-destroyed",s),o.container.off("cycle-before",n),o._sentinel&&(o._sentinel.remove(),o._sentinel=null)}e.extend(e.fn.cycle.defaults,{autoHeight:0}),e(document).on("cycle-initialized",function(i,o){function c(){t(i,o)}var r,l=o.autoHeight,a=e.type(l),d=null;("string"===a||"number"===a)&&(o.container.on("cycle-slide-added cycle-slide-removed",t),o.container.on("cycle-destroyed",s),"container"==l?o.container.on("cycle-before",n):"string"===a&&/\d+\:\d+/.test(l)&&(r=l.match(/(\d+)\:(\d+)/),r=r[1]/r[2],o._autoHeightRatio=r),"number"!==a&&(o._autoHeightOnResize=function(){clearTimeout(d),d=setTimeout(c,50)},e(window).on("resize orientationchange",o._autoHeightOnResize)),setTimeout(c,30))})}(jQuery),/*! caption plugin for Cycle2;  version: 20130306 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{caption:"> .cycle-caption",captionTemplate:"{{slideNum}} / {{slideCount}}",overlay:"> .cycle-overlay",overlayTemplate:"<div>{{title}}</div><div>{{desc}}</div>",captionModule:"caption"}),e(document).on("cycle-update-view",function(t,i,n,s){"caption"===i.captionModule&&e.each(["caption","overlay"],function(){var e=this,t=n[e+"Template"],o=i.API.getComponent(e);o.length&&t?(o.html(i.API.tmpl(t,n,i,s)),o.show()):o.hide()})}),e(document).on("cycle-destroyed",function(t,i){var n;e.each(["caption","overlay"],function(){var e=this,t=i[e+"Template"];i[e]&&t&&(n=i.API.getComponent("caption"),n.empty())})})}(jQuery),/*! command plugin for Cycle2;  version: 20130707 */
function(e){"use strict";var t=e.fn.cycle;e.fn.cycle=function(i){var n,s,o,c=e.makeArray(arguments);return"number"==e.type(i)?this.cycle("goto",i):"string"==e.type(i)?this.each(function(){var r;return n=i,o=e(this).data("cycle.opts"),void 0===o?(t.log('slideshow must be initialized before sending commands; "'+n+'" ignored'),void 0):(n="goto"==n?"jump":n,s=o.API[n],e.isFunction(s)?(r=e.makeArray(c),r.shift(),s.apply(o.API,r)):(t.log("unknown command: ",n),void 0))}):t.apply(this,arguments)},e.extend(e.fn.cycle,t),e.extend(t.API,{next:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?-1:1;e.allowWrap===!1&&e.currSlide+t>=e.slideCount||(e.API.advanceSlide(t),e.API.trigger("cycle-next",[e]).log("cycle-next"))}},prev:function(){var e=this.opts();if(!e.busy||e.manualTrump){var t=e.reverse?1:-1;e.allowWrap===!1&&0>e.currSlide+t||(e.API.advanceSlide(t),e.API.trigger("cycle-prev",[e]).log("cycle-prev"))}},destroy:function(){this.stop();var t=this.opts(),i=e.isFunction(e._data)?e._data:e.noop;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stop(),t.API.trigger("cycle-destroyed",[t]).log("cycle-destroyed"),t.container.removeData(),i(t.container[0],"parsedAttrs",!1),t.retainStylesOnDestroy||(t.container.removeAttr("style"),t.slides.removeAttr("style"),t.slides.removeClass(t.slideActiveClass)),t.slides.each(function(){e(this).removeData(),i(this,"parsedAttrs",!1)})},jump:function(e){var t,i=this.opts();if(!i.busy||i.manualTrump){var n=parseInt(e,10);if(isNaN(n)||0>n||n>=i.slides.length)return i.API.log("goto: invalid slide index: "+n),void 0;if(n==i.currSlide)return i.API.log("goto: skipping, already on slide",n),void 0;i.nextSlide=n,clearTimeout(i.timeoutId),i.timeoutId=0,i.API.log("goto: ",n," (zero-index)"),t=i.currSlide<i.nextSlide,i.API.prepareTx(!0,t)}},stop:function(){var t=this.opts(),i=t.container;clearTimeout(t.timeoutId),t.timeoutId=0,t.API.stopTransition(),t.pauseOnHover&&(t.pauseOnHover!==!0&&(i=e(t.pauseOnHover)),i.off("mouseenter mouseleave")),t.API.trigger("cycle-stopped",[t]).log("cycle-stopped")},reinit:function(){var e=this.opts();e.API.destroy(),e.container.cycle()},remove:function(t){for(var i,n,s=this.opts(),o=[],c=1,r=0;s.slides.length>r;r++)i=s.slides[r],r==t?n=i:(o.push(i),e(i).data("cycle.opts").slideNum=c,c++);n&&(s.slides=e(o),s.slideCount--,e(n).remove(),t==s.currSlide?s.API.advanceSlide(1):s.currSlide>t?s.currSlide--:s.currSlide++,s.API.trigger("cycle-slide-removed",[s,t,n]).log("cycle-slide-removed"),s.API.updateView())}}),e(document).on("click.cycle","[data-cycle-cmd]",function(t){t.preventDefault();var i=e(this),n=i.data("cycle-cmd"),s=i.data("cycle-context")||".cycle-slideshow";e(s).cycle(n,i.data("cycle-arg"))})}(jQuery),/*! hash plugin for Cycle2;  version: 20130905 */
function(e){"use strict";function t(t,i){var n;return t._hashFence?(t._hashFence=!1,void 0):(n=window.location.hash.substring(1),t.slides.each(function(s){if(e(this).data("cycle-hash")==n){if(i===!0)t.startingSlide=s;else{var o=s>t.currSlide;t.nextSlide=s,t.API.prepareTx(!0,o)}return!1}}),void 0)}e(document).on("cycle-pre-initialize",function(i,n){t(n,!0),n._onHashChange=function(){t(n,!1)},e(window).on("hashchange",n._onHashChange)}),e(document).on("cycle-update-view",function(e,t,i){i.hash&&"#"+i.hash!=window.location.hash&&(t._hashFence=!0,window.location.hash=i.hash)}),e(document).on("cycle-destroyed",function(t,i){i._onHashChange&&e(window).off("hashchange",i._onHashChange)})}(jQuery),/*! loader plugin for Cycle2;  version: 20131020 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{loader:!1}),e(document).on("cycle-bootstrap",function(t,i){function n(t,n){function o(t){var o;"wait"==i.loader?(r.push(t),0===a&&(r.sort(c),s.apply(i.API,[r,n]),i.container.removeClass("cycle-loading"))):(o=e(i.slides[i.currSlide]),s.apply(i.API,[t,n]),o.show(),i.container.removeClass("cycle-loading"))}function c(e,t){return e.data("index")-t.data("index")}var r=[];if("string"==e.type(t))t=e.trim(t);else if("array"===e.type(t))for(var l=0;t.length>l;l++)t[l]=e(t[l])[0];t=e(t);var a=t.length;a&&(i.eventualSlideCount=i.slideCount+a,t.hide().appendTo("body").each(function(t){function c(){0===--l&&(--a,o(d))}var l=0,d=e(this),u=d.is("img")?d:d.find("img");return d.data("index",t),u=u.filter(":not(.cycle-loader-ignore)").filter(':not([src=""])'),u.length?(l=u.length,u.each(function(){this.complete?c():e(this).load(function(){c()}).error(function(){0===--l&&(i.API.log("slide skipped; img not loaded:",this.src),0===--a&&"wait"==i.loader&&s.apply(i.API,[r,n]))})}),void 0):(--a,r.push(d),void 0)}),a&&i.container.addClass("cycle-loading"))}var s;i.loader&&(s=i.API.add,i.API.add=n)})}(jQuery),/*! pager plugin for Cycle2;  version: 20130525 */
function(e){"use strict";function t(t,i,n){var s,o=t.API.getComponent("pager");o.each(function(){var o=e(this);if(i.pagerTemplate){var c=t.API.tmpl(i.pagerTemplate,i,t,n[0]);s=e(c).appendTo(o)}else s=o.children().eq(t.slideCount-1);s.on(t.pagerEvent,function(e){e.preventDefault(),t.API.page(o,e.currentTarget)})})}function i(e,t){var i=this.opts();if(!i.busy||i.manualTrump){var n=e.children().index(t),s=n,o=s>i.currSlide;i.currSlide!=s&&(i.nextSlide=s,i.API.prepareTx(!0,o),i.API.trigger("cycle-pager-activated",[i,e,t]))}}e.extend(e.fn.cycle.defaults,{pager:"> .cycle-pager",pagerActiveClass:"cycle-pager-active",pagerEvent:"click.cycle",pagerTemplate:"<span>&bull;</span>"}),e(document).on("cycle-bootstrap",function(e,i,n){n.buildPagerLink=t}),e(document).on("cycle-slide-added",function(e,t,n,s){t.pager&&(t.API.buildPagerLink(t,n,s),t.API.page=i)}),e(document).on("cycle-slide-removed",function(t,i,n){if(i.pager){var s=i.API.getComponent("pager");s.each(function(){var t=e(this);e(t.children()[n]).remove()})}}),e(document).on("cycle-update-view",function(t,i){var n;i.pager&&(n=i.API.getComponent("pager"),n.each(function(){e(this).children().removeClass(i.pagerActiveClass).eq(i.currSlide).addClass(i.pagerActiveClass)}))}),e(document).on("cycle-destroyed",function(e,t){var i=t.API.getComponent("pager");i&&(i.children().off(t.pagerEvent),t.pagerTemplate&&i.empty())})}(jQuery),/*! prevnext plugin for Cycle2;  version: 20130709 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{next:"> .cycle-next",nextEvent:"click.cycle",disabledClass:"disabled",prev:"> .cycle-prev",prevEvent:"click.cycle",swipe:!1}),e(document).on("cycle-initialized",function(e,t){if(t.API.getComponent("next").on(t.nextEvent,function(e){e.preventDefault(),t.API.next()}),t.API.getComponent("prev").on(t.prevEvent,function(e){e.preventDefault(),t.API.prev()}),t.swipe){var i=t.swipeVert?"swipeUp.cycle":"swipeLeft.cycle swipeleft.cycle",n=t.swipeVert?"swipeDown.cycle":"swipeRight.cycle swiperight.cycle";t.container.on(i,function(){t.API.next()}),t.container.on(n,function(){t.API.prev()})}}),e(document).on("cycle-update-view",function(e,t){if(!t.allowWrap){var i=t.disabledClass,n=t.API.getComponent("next"),s=t.API.getComponent("prev"),o=t._prevBoundry||0,c=void 0!==t._nextBoundry?t._nextBoundry:t.slideCount-1;t.currSlide==c?n.addClass(i).prop("disabled",!0):n.removeClass(i).prop("disabled",!1),t.currSlide===o?s.addClass(i).prop("disabled",!0):s.removeClass(i).prop("disabled",!1)}}),e(document).on("cycle-destroyed",function(e,t){t.API.getComponent("prev").off(t.nextEvent),t.API.getComponent("next").off(t.prevEvent),t.container.off("swipeleft.cycle swiperight.cycle swipeLeft.cycle swipeRight.cycle swipeUp.cycle swipeDown.cycle")})}(jQuery),/*! progressive loader plugin for Cycle2;  version: 20130315 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{progressive:!1}),e(document).on("cycle-pre-initialize",function(t,i){if(i.progressive){var n,s,o=i.API,c=o.next,r=o.prev,l=o.prepareTx,a=e.type(i.progressive);if("array"==a)n=i.progressive;else if(e.isFunction(i.progressive))n=i.progressive(i);else if("string"==a){if(s=e(i.progressive),n=e.trim(s.html()),!n)return;if(/^(\[)/.test(n))try{n=e.parseJSON(n)}catch(d){return o.log("error parsing progressive slides",d),void 0}else n=n.split(RegExp(s.data("cycle-split")||"\n")),n[n.length-1]||n.pop()}l&&(o.prepareTx=function(e,t){var s,o;return e||0===n.length?(l.apply(i.API,[e,t]),void 0):(t&&i.currSlide==i.slideCount-1?(o=n[0],n=n.slice(1),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.API.advanceSlide(1)},50)}),i.API.add(o)):t||0!==i.currSlide?l.apply(i.API,[e,t]):(s=n.length-1,o=n[s],n=n.slice(0,s),i.container.one("cycle-slide-added",function(e,t){setTimeout(function(){t.currSlide=1,t.API.advanceSlide(-1)},50)}),i.API.add(o,!0)),void 0)}),c&&(o.next=function(){var e=this.opts();if(n.length&&e.currSlide==e.slideCount-1){var t=n[0];n=n.slice(1),e.container.one("cycle-slide-added",function(e,t){c.apply(t.API),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(t)}else c.apply(e.API)}),r&&(o.prev=function(){var e=this.opts();if(n.length&&0===e.currSlide){var t=n.length-1,i=n[t];n=n.slice(0,t),e.container.one("cycle-slide-added",function(e,t){t.currSlide=1,t.API.advanceSlide(-1),t.container.removeClass("cycle-loading")}),e.container.addClass("cycle-loading"),e.API.add(i,!0)}else r.apply(e.API)})}})}(jQuery),/*! tmpl plugin for Cycle2;  version: 20121227 */
function(e){"use strict";e.extend(e.fn.cycle.defaults,{tmplRegex:"{{((.)?.*?)}}"}),e.extend(e.fn.cycle.API,{tmpl:function(t,i){var n=RegExp(i.tmplRegex||e.fn.cycle.defaults.tmplRegex,"g"),s=e.makeArray(arguments);return s.shift(),t.replace(n,function(t,i){var n,o,c,r,l=i.split(".");for(n=0;s.length>n;n++)if(c=s[n]){if(l.length>1)for(r=c,o=0;l.length>o;o++)c=r,r=r[l[o]]||i;else r=c[i];if(e.isFunction(r))return r.apply(c,s);if(void 0!==r&&null!==r&&r!=i)return r}return i})}})}(jQuery);
//@ sourceMappingURL=jquery.cycle2.js.map

/*! Plugin for Cycle2; Copyright (c) 2012 M. Alsup; ver: 20121120 */
(function(a){"use strict";var b="ontouchend"in document;a.event.special.swipe=a.event.special.swipe||{scrollSupressionThreshold:10,durationThreshold:1e3,horizontalDistanceThreshold:30,verticalDistanceThreshold:75,setup:function(){var b=a(this);b.bind("touchstart",function(c){function g(b){if(!f)return;var c=b.originalEvent.touches?b.originalEvent.touches[0]:b;e={time:(new Date).getTime(),coords:[c.pageX,c.pageY]},Math.abs(f.coords[0]-e.coords[0])>a.event.special.swipe.scrollSupressionThreshold&&b.preventDefault()}var d=c.originalEvent.touches?c.originalEvent.touches[0]:c,e,f={time:(new Date).getTime(),coords:[d.pageX,d.pageY],origin:a(c.target)};b.bind("touchmove",g).one("touchend",function(c){b.unbind("touchmove",g),f&&e&&e.time-f.time<a.event.special.swipe.durationThreshold&&Math.abs(f.coords[0]-e.coords[0])>a.event.special.swipe.horizontalDistanceThreshold&&Math.abs(f.coords[1]-e.coords[1])<a.event.special.swipe.verticalDistanceThreshold&&f.origin.trigger("swipe").trigger(f.coords[0]>e.coords[0]?"swipeleft":"swiperight"),f=e=undefined})})}},a.event.special.swipeleft=a.event.special.swipeleft||{setup:function(){a(this).bind("swipe",a.noop)}},a.event.special.swiperight=a.event.special.swiperight||a.event.special.swipeleft})(jQuery);

/**
 * Isotope v1.5.26
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2014 Metafizzy
 */
!function(t,i){"use strict";var s,e=t.document,n=e.documentElement,o=t.Modernizr,r=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},a="Moz Webkit O Ms".split(" "),h=function(t){var i,s=n.style;if("string"==typeof s[t])return t;t=r(t);for(var e=0,o=a.length;o>e;e++)if(i=a[e]+t,"string"==typeof s[i])return i},l=h("transform"),u=h("transitionProperty"),c={csstransforms:function(){return!!l},csstransforms3d:function(){var t=!!h("perspective");if(t&&"webkitPerspective"in n.style){var s=i("<style>@media (transform-3d),(-webkit-transform-3d){#modernizr{height:3px}}</style>").appendTo("head"),e=i('<div id="modernizr" />').appendTo("html");t=3===e.height(),e.remove(),s.remove()}return t},csstransitions:function(){return!!u}};if(o)for(s in c)o.hasOwnProperty(s)||o.addTest(s,c[s]);else{o=t.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var d,f=" ";for(s in c)d=c[s](),o[s]=d,f+=" "+(d?"":"no-")+s;i("html").addClass(f)}if(o.csstransforms){var m=o.csstransforms3d?{translate:function(t){return"translate3d("+t[0]+"px, "+t[1]+"px, 0) "},scale:function(t){return"scale3d("+t+", "+t+", 1) "}}:{translate:function(t){return"translate("+t[0]+"px, "+t[1]+"px) "},scale:function(t){return"scale("+t+") "}},p=function(t,s,e){var n,o,r=i.data(t,"isoTransform")||{},a={},h={};a[s]=e,i.extend(r,a);for(n in r)o=r[n],h[n]=m[n](o);var u=h.translate||"",c=h.scale||"",d=u+c;i.data(t,"isoTransform",r),t.style[l]=d};i.cssNumber.scale=!0,i.cssHooks.scale={set:function(t,i){p(t,"scale",i)},get:function(t){var s=i.data(t,"isoTransform");return s&&s.scale?s.scale:1}},i.fx.step.scale=function(t){i.cssHooks.scale.set(t.elem,t.now+t.unit)},i.cssNumber.translate=!0,i.cssHooks.translate={set:function(t,i){p(t,"translate",i)},get:function(t){var s=i.data(t,"isoTransform");return s&&s.translate?s.translate:[0,0]}}}var y,g;o.csstransitions&&(y={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[u],g=h("transitionDuration"));var v,_=i.event,A=i.event.handle?"handle":"dispatch";_.special.smartresize={setup:function(){i(this).bind("resize",_.special.smartresize.handler)},teardown:function(){i(this).unbind("resize",_.special.smartresize.handler)},handler:function(t,i){var s=this,e=arguments;t.type="smartresize",v&&clearTimeout(v),v=setTimeout(function(){_[A].apply(s,e)},"execAsap"===i?0:100)}},i.fn.smartresize=function(t){return t?this.bind("smartresize",t):this.trigger("smartresize",["execAsap"])},i.Isotope=function(t,s,e){this.element=i(s),this._create(t),this._init(e)};var w=["width","height"],C=i(t);i.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},i.Isotope.prototype={_create:function(t){this.options=i.extend({},i.Isotope.settings,t),this.styleQueue=[],this.elemCount=0;var s=this.element[0].style;this.originalStyle={};var e=w.slice(0);for(var n in this.options.containerStyle)e.push(n);for(var o=0,r=e.length;r>o;o++)n=e[o],this.originalStyle[n]=s[n]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var a={"original-order":function(t,i){return i.elemCount++,i.elemCount},random:function(){return Math.random()}};this.options.getSortData=i.extend(this.options.getSortData,a),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var h=this;setTimeout(function(){h.element.addClass(h.options.containerClass)},0),this.options.resizable&&C.bind("smartresize.isotope",function(){h.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(t){var i=this.options.itemSelector,s=i?t.filter(i).add(t.find(i)):t,e={position:"absolute"};return s=s.filter(function(t,i){return 1===i.nodeType}),this.usingTransforms&&(e.left=0,e.top=0),s.css(e).addClass(this.options.itemClass),this.updateSortData(s,!0),s},_init:function(t){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(t)},option:function(t){if(i.isPlainObject(t)){this.options=i.extend(!0,this.options,t);var s;for(var e in t)s="_update"+r(e),this[s]&&this[s]()}},_updateAnimationEngine:function(){var t,i=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,"");switch(i){case"css":case"none":t=!1;break;case"jquery":t=!0;break;default:t=!o.csstransitions}this.isUsingJQueryAnimation=t,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var t=this.usingTransforms=this.options.transformsEnabled&&o.csstransforms&&o.csstransitions&&!this.isUsingJQueryAnimation;t||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=t?this._translate:this._positionAbs},_filter:function(t){var i=""===this.options.filter?"*":this.options.filter;if(!i)return t;var s=this.options.hiddenClass,e="."+s,n=t.filter(e),o=n;if("*"!==i){o=n.filter(i);var r=t.not(e).not(i).addClass(s);this.styleQueue.push({$el:r,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:o,style:this.options.visibleStyle}),o.removeClass(s),t.filter(i)},updateSortData:function(t,s){var e,n,o=this,r=this.options.getSortData;t.each(function(){e=i(this),n={};for(var t in r)n[t]=s||"original-order"!==t?r[t](e,o):i.data(this,"isotope-sort-data")[t];i.data(this,"isotope-sort-data",n)})},_sort:function(){var t=this.options.sortBy,i=this._getSorter,s=this.options.sortAscending?1:-1,e=function(e,n){var o=i(e,t),r=i(n,t);return o===r&&"original-order"!==t&&(o=i(e,"original-order"),r=i(n,"original-order")),(o>r?1:r>o?-1:0)*s};this.$filteredAtoms.sort(e)},_getSorter:function(t,s){return i.data(t,"isotope-sort-data")[s]},_translate:function(t,i){return{translate:[t,i]}},_positionAbs:function(t,i){return{left:t,top:i}},_pushPosition:function(t,i,s){i=Math.round(i+this.offset.left),s=Math.round(s+this.offset.top);var e=this.getPositionStyles(i,s);this.styleQueue.push({$el:t,style:e}),this.options.itemPositionDataEnabled&&t.data("isotope-item-position",{x:i,y:s})},layout:function(t,i){var s=this.options.layoutMode;if(this["_"+s+"Layout"](t),this.options.resizesContainer){var e=this["_"+s+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:e})}this._processStyleQueue(t,i),this.isLaidOut=!0},_processStyleQueue:function(t,s){var e,n,r,a,h=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",l=this.options.animationOptions,u=this.options.onLayout;if(n=function(t,i){i.$el[h](i.style,l)},this._isInserting&&this.isUsingJQueryAnimation)n=function(t,i){e=i.$el.hasClass("no-transition")?"css":h,i.$el[e](i.style,l)};else if(s||u||l.complete){var c=!1,d=[s,u,l.complete],f=this;if(r=!0,a=function(){if(!c){for(var i,s=0,e=d.length;e>s;s++)i=d[s],"function"==typeof i&&i.call(f.element,t,f);c=!0}},this.isUsingJQueryAnimation&&"animate"===h)l.complete=a,r=!1;else if(o.csstransitions){for(var m,p=0,v=this.styleQueue[0],_=v&&v.$el;!_||!_.length;){if(m=this.styleQueue[p++],!m)return;_=m.$el}var A=parseFloat(getComputedStyle(_[0])[g]);A>0&&(n=function(t,i){i.$el[h](i.style,l).one(y,a)},r=!1)}}i.each(this.styleQueue,n),r&&a(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(t){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,t)},addItems:function(t,i){var s=this._getAtoms(t);this.$allAtoms=this.$allAtoms.add(s),i&&i(s)},insert:function(t,i){this.element.append(t);var s=this;this.addItems(t,function(t){var e=s._filter(t);s._addHideAppended(e),s._sort(),s.reLayout(),s._revealAppended(e,i)})},appended:function(t,i){var s=this;this.addItems(t,function(t){s._addHideAppended(t),s.layout(t),s._revealAppended(t,i)})},_addHideAppended:function(t){this.$filteredAtoms=this.$filteredAtoms.add(t),t.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:t,style:this.options.hiddenStyle})},_revealAppended:function(t,i){var s=this;setTimeout(function(){t.removeClass("no-transition"),s.styleQueue.push({$el:t,style:s.options.visibleStyle}),s._isInserting=!1,s._processStyleQueue(t,i)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(t,i){this.$allAtoms=this.$allAtoms.not(t),this.$filteredAtoms=this.$filteredAtoms.not(t);var s=this,e=function(){t.remove(),i&&i.call(s.element)};t.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:t,style:this.options.hiddenStyle}),this._sort(),this.reLayout(e)):e()},shuffle:function(t){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(t)},destroy:function(){var t=this.usingTransforms,i=this.options;this.$allAtoms.removeClass(i.hiddenClass+" "+i.itemClass).each(function(){var i=this.style;i.position="",i.top="",i.left="",i.opacity="",t&&(i[l]="")});var s=this.element[0].style;for(var e in this.originalStyle)s[e]=this.originalStyle[e];this.element.unbind(".isotope").undelegate("."+i.hiddenClass,"click").removeClass(i.containerClass).removeData("isotope"),C.unbind(".isotope")},_getSegments:function(t){var i,s=this.options.layoutMode,e=t?"rowHeight":"columnWidth",n=t?"height":"width",o=t?"rows":"cols",a=this.element[n](),h=this.options[s]&&this.options[s][e]||this.$filteredAtoms["outer"+r(n)](!0)||a;i=Math.floor(a/h),i=Math.max(i,1),this[s][o]=i,this[s][e]=h},_checkIfSegmentsChanged:function(t){var i=this.options.layoutMode,s=t?"rows":"cols",e=this[i][s];return this._getSegments(t),this[i][s]!==e},_masonryReset:function(){this.masonry={},this._getSegments();var t=this.masonry.cols;for(this.masonry.colYs=[];t--;)this.masonry.colYs.push(0)},_masonryLayout:function(t){var s=this,e=s.masonry;t.each(function(){var t=i(this),n=Math.ceil(t.outerWidth(!0)/e.columnWidth);if(n=Math.min(n,e.cols),1===n)s._masonryPlaceBrick(t,e.colYs);else{var o,r,a=e.cols+1-n,h=[];for(r=0;a>r;r++)o=e.colYs.slice(r,r+n),h[r]=Math.max.apply(Math,o);s._masonryPlaceBrick(t,h)}})},_masonryPlaceBrick:function(t,i){for(var s=Math.min.apply(Math,i),e=0,n=0,o=i.length;o>n;n++)if(i[n]===s){e=n;break}var r=this.masonry.columnWidth*e,a=s;this._pushPosition(t,r,a);var h=s+t.outerHeight(!0),l=this.masonry.cols+1-o;for(n=0;l>n;n++)this.masonry.colYs[e+n]=h},_masonryGetContainerSize:function(){var t=Math.max.apply(Math,this.masonry.colYs);return{height:t}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(t){var s=this,e=this.element.width(),n=this.fitRows;t.each(function(){var t=i(this),o=t.outerWidth(!0),r=t.outerHeight(!0);0!==n.x&&o+n.x>e&&(n.x=0,n.y=n.height),s._pushPosition(t,n.x,n.y),n.height=Math.max(n.y+r,n.height),n.x+=o})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(t){var s=this,e=this.cellsByRow;t.each(function(){var t=i(this),n=e.index%e.cols,o=Math.floor(e.index/e.cols),r=(n+.5)*e.columnWidth-t.outerWidth(!0)/2,a=(o+.5)*e.rowHeight-t.outerHeight(!0)/2;s._pushPosition(t,r,a),e.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(t){var s=this;t.each(function(){var t=i(this);s._pushPosition(t,0,s.straightDown.y),s.straightDown.y+=t.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var t=this.masonryHorizontal.rows;for(this.masonryHorizontal.rowXs=[];t--;)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(t){var s=this,e=s.masonryHorizontal;t.each(function(){var t=i(this),n=Math.ceil(t.outerHeight(!0)/e.rowHeight);if(n=Math.min(n,e.rows),1===n)s._masonryHorizontalPlaceBrick(t,e.rowXs);else{var o,r,a=e.rows+1-n,h=[];for(r=0;a>r;r++)o=e.rowXs.slice(r,r+n),h[r]=Math.max.apply(Math,o);s._masonryHorizontalPlaceBrick(t,h)}})},_masonryHorizontalPlaceBrick:function(t,i){for(var s=Math.min.apply(Math,i),e=0,n=0,o=i.length;o>n;n++)if(i[n]===s){e=n;break}var r=s,a=this.masonryHorizontal.rowHeight*e;this._pushPosition(t,r,a);var h=s+t.outerWidth(!0),l=this.masonryHorizontal.rows+1-o;for(n=0;l>n;n++)this.masonryHorizontal.rowXs[e+n]=h},_masonryHorizontalGetContainerSize:function(){var t=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:t}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(t){var s=this,e=this.element.height(),n=this.fitColumns;t.each(function(){var t=i(this),o=t.outerWidth(!0),r=t.outerHeight(!0);0!==n.y&&r+n.y>e&&(n.x=n.width,n.y=0),s._pushPosition(t,n.x,n.y),n.width=Math.max(n.x+o,n.width),n.y+=r})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(t){var s=this,e=this.cellsByColumn;t.each(function(){var t=i(this),n=Math.floor(e.index/e.rows),o=e.index%e.rows,r=(n+.5)*e.columnWidth-t.outerWidth(!0)/2,a=(o+.5)*e.rowHeight-t.outerHeight(!0)/2;s._pushPosition(t,r,a),e.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(t){var s=this;t.each(function(){var t=i(this);s._pushPosition(t,s.straightAcross.x,0),s.straightAcross.x+=t.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},i.fn.imagesLoaded=function(t){function s(){t.call(n,o)}function e(t){var n=t.target;n.src!==a&&-1===i.inArray(n,h)&&(h.push(n),--r<=0&&(setTimeout(s),o.unbind(".imagesLoaded",e)))}var n=this,o=n.find("img").add(n.filter("img")),r=o.length,a="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",h=[];return r||s(),o.bind("load.imagesLoaded error.imagesLoaded",e).each(function(){var t=this.src;this.src=a,this.src=t}),n};var z=function(i){t.console&&t.console.error(i)};i.fn.isotope=function(t,s){if("string"==typeof t){var e=Array.prototype.slice.call(arguments,1);this.each(function(){var s=i.data(this,"isotope");return s?i.isFunction(s[t])&&"_"!==t.charAt(0)?void s[t].apply(s,e):void z("no such method '"+t+"' for isotope instance"):void z("cannot call methods on isotope prior to initialization; attempted to call method '"+t+"'")})}else this.each(function(){var e=i.data(this,"isotope");e?(e.option(t),e._init(s)):i.data(this,"isotope",new i.Isotope(t,this,s))});return this}}(window,jQuery);


/*!
 * PerfectMasonry extension for Isotope
 *
 * Does similar things as the Isotopes "masonry" layoutmode, except that this one will actually go back and plug the holes
 * left by bigger elements, thus making a perfect brick wall. Profit!
 * 
 * Usage:
 * 	$('#grid').isotope({
 * 		layoutMode: 'perfectMasonry',
 *		perfectMasonry: {
 *			layout: 'horizontal',		// Set layout as vertical/horizontal (default: vertical)
 *			columnWidth: 200,			// Set/Prefer columns to x wide (default: width of first tile)
 *			rowHeight: 200,				// Set/Prefer rows to y high (default: height of first tile)
 * 
 *			liquid: true,				// Set layout as liquid (default: false)
 *			cols: 3,					// Force to have x columns (default: null)
 *			rows: 3,					// Force to have y rows (default: null)
 *			minCols: 3,					// Set min col count (default: 1)
 *			minRows: 3,					// Set min row count (default: 1)
 *			maxCols: 5,					// Set max col count (default: 9999)
 *			maxRows: 4					// Set max row count (default: 9999)
 * 		}
 * 	});
 *
 * 
 * @author Mikko Tikkanen, Zonear Ltd. <contact@zonear.com>
 */
;(function($, undefined) {
	var version = '1.2.1';
	var isotope = null,
		$context = null,
		$container = null;
	
	$.extend($.Isotope.prototype, {
		isFirstRun: true,

		/**
		 * Reset layout properties
		 *
		 * Runs before any layout change
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryReset: function() {
			this.options.perfectMasonry = this.options.perfectMasonry|| {};
			var isVertical = this.options.perfectMasonry.layout != 'horizontal',
				isLiquid = this.options.perfectMasonry.liquid == true;
			
			// Do things on a first run
			if(this.isFirstRun) {
				this.isFirstRun = false;
				isotope = this;
				$context = $(this.element.context);
				$container = $context.parent();
				
				// Make sure we have min/maxCols & rows
				this.options.perfectMasonry.minCols = this.options.perfectMasonry.minCols || 1; 
				this.options.perfectMasonry.minRows = this.options.perfectMasonry.minRows || 1;
				this.options.perfectMasonry.maxCols = this.options.perfectMasonry.maxCols || 9999; 
				this.options.perfectMasonry.maxRows = this.options.perfectMasonry.maxRows || 9999;
			}
			
			// For liquid layout, replace default resize handler with forced relayout (outside firstRun as Isotope grid can be destroyed and created on the fly)
			if(isLiquid && $.data(window, 'events') && $._data(window, 'events').smartresize) {
				$(window).off('smartresize.isotope');
				$(window).on('resize.isotope.perfectmasonry', function() {
					if(!$context.hasClass('isotope')) { return; }
					$context.isotope('reLayout');
				});
			}
			
			// Setup layout properties ---------------------------------------------------
			var properties = this.perfectMasonry = {};
			
			// Fill properties with columnWidth and rowHeight (true argument)
			this._getSegments();
      		this._getSegments(true);
      		
      		// ...and with cols & rows
			this._perfectMasonryGetSegments();
      		
			// Handle liquid layout (cols, rows & sizes must be calculated on the fly)
			if(isLiquid) {
				var width = $container.width(),
					height = $container.height();
					
				// Make sure we have colwidth & rowheight (get it from the calculated )
				this.options.perfectMasonry.columnWidth = this.options.perfectMasonry.columnWidth || properties.columnWidth;
				this.options.perfectMasonry.rowHeight = this.options.perfectMasonry.rowHeight || properties.rowHeight;
				
				// Figure out how many cols & rows either have been set or can be fit into the container (also make sure we're still between min/max)
				properties.cols = this.options.perfectMasonry.cols || Math.floor(width / this.options.perfectMasonry.columnWidth);
				properties.rows = this.options.perfectMasonry.rows || Math.floor(height / this.options.perfectMasonry.rowHeight);
				properties.cols = Math.min(Math.max(properties.cols, this.options.perfectMasonry.minCols), this.options.perfectMasonry.maxCols);
				properties.rows = Math.min(Math.max(properties.rows, this.options.perfectMasonry.minRows), this.options.perfectMasonry.maxRows);
								
				// Recalculate accurate width/height so that the whole available space is used
				var diff = (isVertical ? properties.columnWidth / (width / properties.cols) : properties.rowHeight / (height / properties.rows));
				properties.columnWidth = Math.floor(properties.columnWidth / diff);
				properties.rowHeight = Math.floor(properties.rowHeight / diff);
			}
			
			// Create top row of the grid
			properties.grid = new Array(this.perfectMasonry.cols);

			// Set container dimensions to 0
			properties.containerHeight = 0;
			properties.containerWidth = 0;
	    },



	    /**
		 * Create layout
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryLayout: function($elems) {
			var instance = this,
				properties = this.perfectMasonry,
				isVertical = instance.options.perfectMasonry.layout != 'horizontal',
				isLiquid = instance.options.perfectMasonry.liquid == true;
			
			// Create first set of the grid
			properties.grid = new Array(properties[(isVertical ? 'cols' : 'rows')]);
			if(!properties.grid || !properties.grid.length) { return; }
			
			// Loop each element
			$elems.each(function() {
				var $this  = $(this);
				
				// Calculate col & row spans (with liquid layouts, store desired width as element data)
				var colSpan = (isLiquid ? $this.data('colSpan') : Math.ceil($this.outerWidth() / (properties.columnWidth + 1))),
					rowSpan = (isLiquid ? $this.data('rowSpan') : Math.ceil($this.outerHeight() / (properties.rowHeight + 1)));
				
				// For the first run with liquid layout, calculate sizes
				if(!colSpan) {
					colSpan = Math.ceil($this.outerWidth(true) / (properties.columnWidth + 1));
					rowSpan = Math.ceil($this.outerHeight(true) / (properties.rowHeight + 1));
					$this.data('colSpan', colSpan);
					$this.data('rowSpan', rowSpan);
				}
				
				
				/* Do the layout
				 * -------------------------------------------------------------------------------- */
				
				// Set spans
				var aSpan = (isVertical ? colSpan : rowSpan);
				var bSpan = (isVertical ? rowSpan : colSpan);
				
				// Bigger tiles can't fit into the last primary (though keep it still at least as 1)
				var max = Math.max((isVertical ? properties.cols - colSpan : properties.rows - rowSpan) + 1, 1);
								
				// Loop through/create primaries (set hard limit of 10.000 to prevent endless loop)
				var a = -1, x = 0, y = 0;
				while(++a < 10000) {
					properties.grid[a] = properties.grid[a] || [];
					
					// Go through the secondaries in the primary, set secondary and tile
					for (var b = 0; b < max; b++) {
						var tile = properties.grid[a][b];
							
						// If the tile is not free, move to the next one immediately
						if(tile) { continue; }

						// Tiles spanning to multiple rows/columns - Check if it'll fit
						var doesFit = true;
						if(colSpan > 1 || rowSpan > 1) {
							for (var i = 0; i < aSpan; i++) {
								for (var j = 0; j < bSpan; j++) {
									properties.grid[a+j] = properties.grid[a+j] || [];
									if(properties.grid[a+j][b+i]) { doesFit = false; break; }
								}

								// If it doesn't fit, don't waste our time looping
								if(!doesFit) { break; }
							}
						}
						if(!doesFit) { continue }
						

						// Set all the cells as occupied
						for (var i = 0; i < aSpan; i++) {
							for (var j = 0; j < bSpan; j++) {
								properties.grid[a+j][b+i] = true;
							}
						}
						
						// Set x & y values
						var x = a, y = b;
						if(isVertical) { var x = b, y = a; }
						
						// Update container dimensions
						properties.containerWidth = Math.max(properties.containerWidth, (x + aSpan) * properties.columnWidth);
						properties.containerHeight = Math.max(properties.containerHeight, (y + bSpan) * properties.rowHeight);
						
						// In case of liquid layout, set element size full width/height
						if(instance.options.perfectMasonry.liquid == true) {
							$this.css({
								width: properties.columnWidth * colSpan,
								height: properties.rowHeight * rowSpan
							});
						}

						// Set the element location and GTFO
						instance._pushPosition($this, x*properties.columnWidth, y*properties.rowHeight);
						return;
					}
				}
				

				// If we got all the way down to here, the element doesn't fit - Hide it
				instance._pushPosition($this, -9999, -9999);
			});
			
			// Set row & column count to container
			var rows = (isVertical ? properties.grid.length : properties.grid[0] && properties.grid[0].length),
				cols = (isVertical ? properties.grid[0] && properties.grid[0].length : properties.grid.length);
			$(this.element.context).attr('data-isotope-rows', rows).attr('data-isotope-cols', cols);
		},
		
		
		
	    /**
		 * Get container size
		 *
		 * For resizing the container
		 * -------------------------------------------------------------------------------------------------------- */
	    _perfectMasonryGetContainerSize: function() {
			return {
				width: this.perfectMasonry.containerWidth,
				height: this.perfectMasonry.containerHeight
			};
	    },
		
		
		
	    /**
		 * Resize changed
		 *
		 * Figure out if layout changed
		 * -------------------------------------------------------------------------------------------------------- */
	    _perfectMasonryResizeChanged: function() {
	    	var properties = this.perfectMasonry;

	    	// Store old values and calculate new numbers
	    	var oldCols = properties.cols,
	    		oldRows = properties.rows;
	    	this._perfectMasonryGetSegments();
			
			// If new count was different, force layout change
			if(this.options.perfectMasonry.layout == 'horizontal' && oldRows !== properties.rows) { return true; }
			if(oldCols !== properties.cols) { return true; }
			
	    	return false;
	    },
		
		
		
		
	    /**
		 * Private
		 * Do segment calculations by hand
		 * -------------------------------------------------------------------------------------------------------- */
		_perfectMasonryGetSegments: function() {
			var properties = this.perfectMasonry;
			var parent = this.options.perfectMasonry.parent || this.element.parent();
			
			// Calculate columns
			var parentWidth = parent.width();
			properties.cols = Math.floor(parentWidth / properties.columnWidth) || 1;

			// Calculate rows
			var parentHeight = parent.height();
			properties.rows = Math.floor(parentHeight / properties.rowHeight) || 1;
		}
	});
	
	
})(jQuery);

