
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const SpannerIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 18} height={height || 19} viewBox={viewBox || '0 0 18 19'} color={color} {...rest}>
    <path fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round' d='M16.538 5.093a.223.223 0 0 0-.374-.114l-1.94 1.94-1.876.388-1.584-1.584.388-1.877 1.94-1.939a.222.222 0 0 0-.115-.375 4.518 4.518 0 0 0-4.087 1.24c-1.301 1.301-.979 3.638-.8 4.51l-6.8 5.921a2.532 2.532 0 0 0 0 3.577 2.527 2.527 0 0 0 3.588-.011l5.911-6.788c1.511.314 3.419.29 4.51-.8a4.53 4.53 0 0 0 1.24-4.088z' />
  </SvgIconWrapper>
);

export default SpannerIcon;
