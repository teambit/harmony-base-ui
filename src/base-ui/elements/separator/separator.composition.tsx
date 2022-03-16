import React from 'react';
import { Separator } from './separator';

export const HorizontalSeparatorByDefault = ({ ...rest }) => (
	<div style={{ textAlign: 'center' }}>
		top
		<Separator {...rest} />
		bottom
	</div>
);

export const SetSeparatorToBeVertical = ({ ...rest }) => (
	<div
		style={{
			width: 200,
			height: 40,
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
		}}
	>
		left
		<Separator layout="vertical" {...rest} />
		right
	</div>
);
