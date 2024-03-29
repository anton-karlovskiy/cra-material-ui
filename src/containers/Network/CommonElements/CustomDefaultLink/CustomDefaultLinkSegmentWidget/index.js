
import React, { Component } from 'react';

class CustomDefaultLinkSegmentWidget extends Component {
	render() {
		const Bottom = React.cloneElement(
			this.props.factory.generateLinkSegment(
				this.props.link,
				this.props.selected || this.props.link.isSelected(),
				this.props.path
			),
			{
				ref: this.props.forwardRef
			}
		);

		const Top = React.cloneElement(Bottom, {
			strokeLinecap: 'round',
			onMouseLeave: () => {
				this.props.onSelection(false);
			},
			onMouseEnter: () => {
				// MEMO: when mouse entering link
				this.props.onSelection(true);
			},
			...this.props.extras,
			ref: null,
			'data-linkid': this.props.link.getID(),
			strokeOpacity: this.props.selected ? 0.1 : 0,
			strokeWidth: 20,
			fill: 'none',
			// TODO: confirm the change from the original
			// onContextMenu: () => {
			onContextMenu: event => {
				if (!this.props.link.isLocked()) {
					event.preventDefault();
					// MEMO: right click -> remove the link by default so block it
					console.log('[CustomDefaultLinkSegmentWidget onContextMenu]');
					// this.props.link.remove();
				}
			}
		});

		return (
			<g>
				{Bottom}
				{Top}
			</g>
		);
	}
}

export default CustomDefaultLinkSegmentWidget;
