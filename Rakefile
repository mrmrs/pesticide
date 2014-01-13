require "rubygems"
require 'rake'

desc "Start Sass so that is compiles to css upon file save"
task :sass do
  system "sass --watch _layout_debug.scss:layout_debug.css" end # task :sass

desc "Start Sass so that is compiles to css upon file save"
task :minify do
  system "sass --watch _layout_debug.scss:layout_debug.css compressed"
end # task :minify
