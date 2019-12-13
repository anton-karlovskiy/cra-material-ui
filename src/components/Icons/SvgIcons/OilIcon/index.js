
import React from 'react';

import SvgIconWrapper from 'hoc/SvgIconWrapper';

// TODO: color #F66
const OilIcon = ({ width, height, viewBox, color, ...rest }) => (
  <SvgIconWrapper width={width || 30} height={height || 30} viewBox={viewBox || '0 0 30 30'} color={color} {...rest}>
    <path fill={color} fillRule='evenodd' d='M16.26 11.412c-.09-.608-.573-.913-1.057-.913-.483 0-.967.305-1.057.913l-1.996 9.761c-.052.354-.065.711-.04 1.063.128 1.863 1.61 2.794 3.093 2.794 1.483 0 2.966-.931 3.094-2.794.025-.352.011-.709-.04-1.063l-1.997-9.76zm5.948 9.16c-.612-.445-1.164-1.227-1.93-.864-.26.123-.456.356-.57.62-.265.613-.154 1.262-.185 1.9-.081 1.71-1.327 3.255-2.911 3.855-.456.172-.94.266-1.431.264-2.204-.012-4.217-1.964-4.298-4.166-.025-.68.11-1.37-.207-2.027a1.143 1.143 0 0 0-.442-.491c-.81-.474-1.6.269-2.167.906-.522.586-1.33 1.194-2.01.803-.234-.134-.393-.364-.535-.591a10.149 10.149 0 0 1-1.503-4.6l.921-.03a1.14 1.14 0 0 0 1.103-1.143v-.004a1.16 1.16 0 0 0-1.117-1.155l-.901-.032c0-3.318 2.447-5.721 2.354-5.81l.696.664a1.15 1.15 0 0 0 1.606-.02l.003-.003c.432-.432.443-1.13.025-1.575L8.076 6.4a9.99 9.99 0 0 1 5.74-2.375l.032.916c.02.616.527 1.104 1.143 1.102h.022a1.14 1.14 0 0 0 1.137-1.101l.033-.922a9.984 9.984 0 0 1 5.74 2.386l-.604.653a1.153 1.153 0 0 0 1.636 1.624l.646-.607a9.99 9.99 0 0 1 2.374 5.74l-.838.029a1.186 1.186 0 0 0-.09 2.365l.887.098s-1.022 6.224-3.726 4.263zM15 0C6.716 0 0 6.716 0 15c0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15z' />
  </SvgIconWrapper>
);

export default OilIcon;
