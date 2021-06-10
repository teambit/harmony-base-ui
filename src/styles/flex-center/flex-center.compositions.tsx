import React from 'react';
import { flexCenter } from './index';

export function Preview() {
	return (
		<div
			className={flexCenter}
			style={{
				width: 100,
				height: 50,
				margin: 16,
				border: '1px solid black',
				borderRadius: 5,
			}}
		>
			<span>centered</span>
		</div>
	);
}
