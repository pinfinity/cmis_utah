# Source code for CMIS Utah

## Setup
__1.__ Make sure you have the required dependencies installed. See 'Install Dependencies' below.

__2.__ Install Node.js packages (defined in package.json) with npm:

    npm install

This will populate the `node_modules` folder with all the required Node.js depenencies.

__3.__ Install the Bower packages (defined in bower.json) with bower:

    bower install

This will populate the `_bower_components` folder with all the required bower packages.

__4.__ Build.

Build your site assets (CoffeeScript and Sass files) with Grunt:

    grunt build

And build the site with:

    jekyll build

Which will build the whole site into the `_site` directory.

__5.__ Develop.

Use Grunt to watch your Sass and CoffeeScript files and automatically rebuild them when you save a file:

    grunt

That's it :) Just run grunt, and by default it will watch and build your Sass and CoffeeScript files.

And use Jekyll to build and serve the site to your browser. Jekyll will also watch your files for changes, and rebuild the site whenever you change a file. Just run:

    jekyll serve --watch

from the command line. You're site should be available at 'http://localhost:4000' in your web browser.

## Install Dependencies
Make sure you have a recent version of Ruby. Open up a terminal and run

    ruby --version

Your Ruby version should begin with 1.9.3 or 2.0.0. If you've got that, you're all set.

Then make sure you have an updated version of Node.js. To do that, run:

    node --version

Your Node.js version should begin with v0.10.

### Install Grunt
Grunt is a Node.js build tool, and to install it you just run:

    sudo npm install -g grunt-cli

### Install Bower
Bower is a Node.js powered package management tool for front-end web development. To install it you just run:

    sudo npm install -g bower

### Install Jekyll
Since we'll be using GitHub pages to host our Jekyll built site, we'll just install the GitHub Pages gem, which will include Jekyll and the supported GH Pages plugins for you:

    gem install github-pages
