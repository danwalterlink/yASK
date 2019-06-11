#!/usr/bin/env ruby
require File.join(File.dirname(__FILE__), 'default_libs')
require File.join(File.dirname(__FILE__), 'vundle')

GitStyleBinary.command do
  version "yask-delete-vim-plugin 1.0"

  short_desc "Removes a vim plugin"
  opt :url, "Repository URL (see usage)", :required => true, :type => String

  banner <<-'EOS'
      Usage: yask-delete-vim-plugin --url [URL]
      Specify a plugin repository URL in one of the following forms:
        - Custom repository URL (full URL): git://git.wincent.com/command-t.git
        - Github repository (username/repo_name): robgleesson/hammer.vim.git
        - Vim script repository (plugin_name): FuzzyFinder
  EOS
  run do |command|
    repo=command.opts[:url]
    puts "Removing \"#{repo}\" from the plugin list"
    bundle_path=repo.gsub("https://github.com/", "")
    removed=Vundle::remove_plugin_from_vundle repo
    if removed
      Vundle::update_vundle
      puts "Successfully removed\"#{repo}\""
    else
      puts "Unable to find \"#{repo}\" among the installed plugins"
    end
  end
end
