!function(t,e,n,i){"use strict";var r=function(){},o=function(r,o){if(r.hasClass(o.slides_container_class))return this;var l,c,f,d,h,p,g=this,m=r,v=0,y=!1;g.slides=function(){return m.children(o.slide_selector)},g.slides().first().addClass(o.active_slide_class),g.update_slide_number=function(e){o.slide_number&&(c.find("span:first").text(parseInt(e)+1),c.find("span:last").text(g.slides().length)),o.bullets&&(f.children().removeClass(o.bullets_active_class),t(f.children().get(e)).addClass(o.bullets_active_class))},g.update_active_link=function(e){var n=t('[data-orbit-link="'+g.slides().eq(e).attr("data-orbit-slide")+'"]');n.siblings().removeClass(o.bullets_active_class),n.addClass(o.bullets_active_class)},g.build_markup=function(){m.wrap('<div class="'+o.container_class+'"></div>'),l=m.parent(),m.addClass(o.slides_container_class),o.stack_on_small&&l.addClass(o.stack_on_small_class),o.navigation_arrows&&(l.append(t('<a href="#"><span></span></a>').addClass(o.prev_class)),l.append(t('<a href="#"><span></span></a>').addClass(o.next_class))),o.timer&&(d=t("<div>").addClass(o.timer_container_class),d.append("<span>"),d.append(t("<div>").addClass(o.timer_progress_class)),d.addClass(o.timer_paused_class),l.append(d)),o.slide_number&&(c=t("<div>").addClass(o.slide_number_class),c.append("<span></span> "+o.slide_number_text+" <span></span>"),l.append(c)),o.bullets&&(f=t("<ol>").addClass(o.bullets_container_class),l.append(f),f.wrap('<div class="orbit-bullets-container"></div>'),g.slides().each(function(e,n){var i=t("<li>").attr("data-orbit-slide",e).on("click",g.link_bullet);f.append(i)}))},g._goto=function(e,n){if(e===v)return!1;"object"==typeof p&&p.restart();var i=g.slides(),r="next";if(y=!0,v>e&&(r="prev"),e>=i.length){if(!o.circular)return!1;e=0}else if(0>e){if(!o.circular)return!1;e=i.length-1}var s=t(i.get(v)),a=t(i.get(e));s.css("zIndex",2),s.removeClass(o.active_slide_class),a.css("zIndex",4).addClass(o.active_slide_class),m.trigger("before-slide-change.fndtn.orbit"),o.before_slide_change(),g.update_active_link(e);var u=function(){var t=function(){v=e,y=!1,n===!0&&(p=g.create_timer(),p.start()),g.update_slide_number(v),m.trigger("after-slide-change.fndtn.orbit",[{slide_number:v,total_slides:i.length}]),o.after_slide_change(v,i.length)};m.height()!=a.height()&&o.variable_height?m.animate({height:a.height()},250,"linear",t):t()};if(1===i.length)return u(),!1;var l=function(){"next"===r&&h.next(s,a,u),"prev"===r&&h.prev(s,a,u)};a.height()>m.height()&&o.variable_height?m.animate({height:a.height()},250,"linear",l):l()},g.next=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(v+1)},g.prev=function(t){t.stopImmediatePropagation(),t.preventDefault(),g._goto(v-1)},g.link_custom=function(e){e.preventDefault();var n=t(this).attr("data-orbit-link");if("string"==typeof n&&""!=(n=t.trim(n))){var i=l.find("[data-orbit-slide="+n+"]");-1!=i.index()&&g._goto(i.index())}},g.link_bullet=function(e){var n=t(this).attr("data-orbit-slide");if("string"==typeof n&&""!=(n=t.trim(n)))if(isNaN(parseInt(n))){var i=l.find("[data-orbit-slide="+n+"]");-1!=i.index()&&g._goto(i.index()+1)}else g._goto(parseInt(n))},g.timer_callback=function(){g._goto(v+1,!0)},g.compute_dimensions=function(){var e=t(g.slides().get(v)),n=e.height();o.variable_height||g.slides().each(function(){t(this).height()>n&&(n=t(this).height())}),m.height(n)},g.create_timer=function(){var t=new s(l.find("."+o.timer_container_class),o,g.timer_callback);return t},g.stop_timer=function(){"object"==typeof p&&p.stop()},g.toggle_timer=function(){var t=l.find("."+o.timer_container_class);t.hasClass(o.timer_paused_class)?("undefined"==typeof p&&(p=g.create_timer()),p.start()):"object"==typeof p&&p.stop()},g.init=function(){g.build_markup(),o.timer&&(p=g.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),p.start)),h=new u(o,m),"slide"===o.animation&&(h=new a(o,m)),l.on("click","."+o.next_class,g.next),l.on("click","."+o.prev_class,g.prev),o.next_on_click&&l.on("click","."+o.slides_container_class+" [data-orbit-slide]",g.link_bullet),l.on("click",g.toggle_timer),o.swipe&&l.on("touchstart.fndtn.orbit",function(t){t.touches||(t=t.originalEvent);var e={start_page_x:t.touches[0].pageX,start_page_y:t.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:i};l.data("swipe-transition",e),t.stopPropagation()}).on("touchmove.fndtn.orbit",function(t){if(t.touches||(t=t.originalEvent),!(t.touches.length>1||t.scale&&1!==t.scale)){var e=l.data("swipe-transition");if("undefined"==typeof e&&(e={}),e.delta_x=t.touches[0].pageX-e.start_page_x,"undefined"==typeof e.is_scrolling&&(e.is_scrolling=!!(e.is_scrolling||Math.abs(e.delta_x)<Math.abs(t.touches[0].pageY-e.start_page_y))),!e.is_scrolling&&!e.active){t.preventDefault();var n=e.delta_x<0?v+1:v-1;e.active=!0,g._goto(n)}}}).on("touchend.fndtn.orbit",function(t){l.data("swipe-transition",{}),t.stopPropagation()}),l.on("mouseenter.fndtn.orbit",function(t){o.timer&&o.pause_on_hover&&g.stop_timer()}).on("mouseleave.fndtn.orbit",function(t){o.timer&&o.resume_on_mouseout&&p.start()}),t(n).on("click","[data-orbit-link]",g.link_custom),t(e).on("load resize",g.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),g.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){l.prev("."+o.preloader_class).css("display","none"),g.update_slide_number(0),g.update_active_link(0),m.trigger("ready.fndtn.orbit")})},g.init()},s=function(t,e,n){var i,r,o=this,s=e.timer_speed,a=t.find("."+e.timer_progress_class),u=-1;this.update_progress=function(t){var e=a.clone();e.attr("style",""),e.css("width",t+"%"),a.replaceWith(e),a=e},this.restart=function(){clearTimeout(r),t.addClass(e.timer_paused_class),u=-1,o.update_progress(0)},this.start=function(){return t.hasClass(e.timer_paused_class)?(u=-1===u?s:u,t.removeClass(e.timer_paused_class),i=(new Date).getTime(),a.animate({width:"100%"},u,"linear"),r=setTimeout(function(){o.restart(),n()},u),void t.trigger("timer-started.fndtn.orbit")):!0},this.stop=function(){if(t.hasClass(e.timer_paused_class))return!0;clearTimeout(r),t.addClass(e.timer_paused_class);var n=(new Date).getTime();u-=n-i;var a=100-u/s*100;o.update_progress(a),t.trigger("timer-stopped.fndtn.orbit")}},a=function(e,n){var i=e.animation_speed,r=1===t("html[dir=rtl]").length,o=r?"marginRight":"marginLeft",s={};s[o]="0%",this.next=function(t,e,n){t.animate({marginLeft:"-100%"},i),e.animate(s,i,function(){t.css(o,"100%"),n()})},this.prev=function(t,e,n){t.animate({marginLeft:"100%"},i),e.css(o,"-100%"),e.animate(s,i,function(){t.css(o,"100%"),n()})}},u=function(e,n){var i=e.animation_speed;1===t("html[dir=rtl]").length;this.next=function(t,e,n){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),n()})},this.prev=function(t,e,n){e.css({margin:"0%",opacity:"0.01"}),e.animate({opacity:"1"},i,"linear",function(){t.css("margin","100%"),n()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.4.7",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:r,after_slide_change:r},init:function(t,e,n){this.bindings(e,n)},events:function(t){var e=new o(this.S(t),this.S(t).data("orbit-init"));this.S(t).data(this.name+"-instance",e)},reflow:function(){var t=this;if(t.S(t.scope).is("[data-orbit]")){var e=t.S(t.scope),n=e.data(t.name+"-instance");n.compute_dimensions()}else t.S("[data-orbit]",t.scope).each(function(e,n){var i=t.S(n),r=(t.data_options(i),i.data(t.name+"-instance"));r.compute_dimensions()})}}}(jQuery,window,window.document);