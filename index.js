
/**
 * Module dependencies.
 */

var createView = require('view');
var classes = require('classes');
var events = require('event');
var Slide = createView(require('./template.html'));

/**
 * Expose `Slide`.
 */

module.exports = Slide;

/**
 * Show / hide the slide-out.
 */

Slide.prototype.toggle = function(){
  classes(this.el).toggle('hidden');
}

// Act on construct

Slide.on('construct', function(slide){
  slide.content = slide.find('.slide-content');
  slide.sidebar = slide.find('.slide');
});

