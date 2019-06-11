#!/usr/bin/env ruby
require File.join(File.dirname(__FILE__), 'default_libs')

GitStyleBinary.command do
  version "yask-update-plugins 1.0"
  short_desc "Update all plugins to latest versions from github"

  run do |command|
    `cd $HOME/.yask && rake submodules`
  end

end
