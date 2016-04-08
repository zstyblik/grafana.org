/*!
{
  "name": "CSS Stylable Scrollbars",
  "property": "cssscrollbar",
  "tags": ["css"],
  "builderAliases": ["css_scrollbars"]
}
!*/
define(["Modernizr","testStyles","prefixes"],function(A,e,t){e("#modernizr{overflow: scroll; width: 40px; height: 40px; }#"+t.join("scrollbar{width:0px} #modernizr::").split("#").slice(1).join("#")+"scrollbar{width:0px}",function(e){A.addTest("cssscrollbar",40==e.scrollWidth)})});