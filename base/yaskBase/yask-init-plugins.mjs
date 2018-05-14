#!/usr/bin/env ruby
require File.join(File.dirname(__FILE__), 'default_libs')

GitStyleBinary.command do
  version "yask-init-plugins 1.0"
  short_desc "Initialize all submodules. Run this every time you pull a new yask version."

  run do |command|
    `cd "#{$yask}" && git submodule update --init`
  end


end
