"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInnerContentDimensions = void 0;

var getInnerContentDimensions = function getInnerContentDimensions(element) {
  var computedStyle = window.getComputedStyle(element, null);
  var paddings = {
    left: computedStyle.getPropertyValue('padding-left'),
    right: computedStyle.getPropertyValue('padding-right'),
    top: computedStyle.getPropertyValue('padding-top'),
    bottom: computedStyle.getPropertyValue('padding-bottom')
  };
  var borderWidths = {
    left: computedStyle.getPropertyValue('border-left-width'),
    right: computedStyle.getPropertyValue('border-right-width'),
    top: computedStyle.getPropertyValue('border-top-width'),
    bottom: computedStyle.getPropertyValue('border-bottom-width')
  };
  var dimensions = {
    width: computedStyle.getPropertyValue('width'),
    height: computedStyle.getPropertyValue('height')
  };
  return {
    dimensions: dimensions,
    borderWidths: borderWidths,
    paddings: paddings
  };
};

exports.getInnerContentDimensions = getInnerContentDimensions;