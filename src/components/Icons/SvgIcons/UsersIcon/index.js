
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

const UsersIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 24} height={height || 18} viewBox={viewBox || '0 0 24 18'} color={color} {...rest}>
    <g fill='none' fillRule='evenodd' stroke={color} strokeLinecap='round' strokeLinejoin='round'>
      <path d='M16.12 14.278c-2.57-1.015-5.423-2.276-5.663-3.062v-.824c.533-.558.954-1.335 1.202-2.246.6-.43.747-1.314.252-1.936V4.364c0-1.904-1.037-3.21-3.408-3.21-2.31 0-3.409 1.306-3.409 3.21V6.21a1.354 1.354 0 0 0 .252 1.936c.248.91.67 1.688 1.202 2.246v.824c-.24.785-3.092 2.046-5.66 3.062a.587.587 0 0 0-.365.548v2.062c0 .324.253.587.565.587h14.83a.576.576 0 0 0 .564-.587v-2.062a.585.585 0 0 0-.363-.548zM18.571 17.475h4.377c.295 0 .535-.24.535-.536v-1.882a.534.534 0 0 0-.345-.5c-2.432-.928-5.132-.88-5.359-1.597v-1.08c2.43-.005 3.393-.78 3.393-.78-1.014-.567-1.335-4.536-1.335-4.536 0-3.303-3.734-5.285-6.179-3.32' />
    </g>
  </SvgIconWrapper>
);

export default UsersIcon;
