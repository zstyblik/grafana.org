#= require vendor/jquery
#= require vendor/custom.modernizr
#= require vendor/foundation.min
#= require vendor/blueimp-gallery.min
#= require_self

$ ->
  $("body.docs .side-nav a").each (index, el) =>
    if el.attributes.href.value == window.location.pathname
      item = $(el)
      item.closest("li").addClass("active")
      item.addClass("active")

  $(".top-bar-section a").each (index, el) =>
    if el.attributes.href.value == window.location.pathname
      item = $(el)
      item.parents("li").addClass("active")

  $('.gallary-image').click (evt) ->
    options = { index: this, event: evt};
    blueimp.Gallery($('.gallary-image'), options);


  $(document).foundation()
