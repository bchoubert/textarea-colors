
export const getInnerContentDimensions = (element) => {
  const computedStyle = window.getComputedStyle(element, null);
  const paddings = {
    left: computedStyle.getPropertyValue('padding-left'),
    right: computedStyle.getPropertyValue('padding-right'),
    top: computedStyle.getPropertyValue('padding-top'),
    bottom: computedStyle.getPropertyValue('padding-bottom'),
  };

  const borderWidths = {
    left: computedStyle.getPropertyValue('border-left-width'),
    right: computedStyle.getPropertyValue('border-right-width'),
    top: computedStyle.getPropertyValue('border-top-width'),
    bottom: computedStyle.getPropertyValue('border-bottom-width'),
  };

  const dimensions = {
    width: computedStyle.getPropertyValue('width'),
    height: computedStyle.getPropertyValue('height'),
  }

  return ({
    dimensions,
    borderWidths,
    paddings,
  });
}