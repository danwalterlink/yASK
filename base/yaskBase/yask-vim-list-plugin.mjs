#!/usr/bin/env node
require File.join(File.dirname(__FILE__), 'default_libs')
require File.join(File.dirname(__FILE__), 'vundle')

GitStyleBinary.command do
  version "yask-list-vim-plugin 1.0"

  short_desc "List installed vim plugins"

  banner <<-'EOS'
      Usage: yask-list-vim-plugin
  EOS
  run do |command|
    puts "Currently configured plugins:" 
    i=1
    Vundle::vundle_list.each do |plugin|
      puts "#{i}. #{plugin}"
      i=i+1
    end
  end
end
