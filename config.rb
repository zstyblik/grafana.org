require 'slim'

set :site_title, "Grafana"
set :site_url, "http://grafana.org"

page "/feed.xml", :layout => false

with_layout :docs do
  page "/docs/*"
end

page "/graphing.html", :layout => false

page "/blog/*", :layout => :article
page "/blog/index.html", :layout => :layout

activate :blog do |blog|
  blog.prefix = "blog"
end

activate :livereload
activate :syntax

set :markdown_engine, :redcarpet
set :markdown,
    :fenced_code_blocks => true,
    :smartypants => true,
    :tables => true,
    :no_intra_emphasis => true,
    :prettify => true,
    :with_toc_data => true

set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/img'

configure :build do
  # activate :minify_css
  # activate :minify_javascript, :ignore => [/bower_components/]
  #
  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"
end
