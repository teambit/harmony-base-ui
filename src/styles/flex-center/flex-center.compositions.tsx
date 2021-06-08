import React from 'react';
import { flexCenter } from './index';

export function Preview() {
	return (
		<div
			className={flexCenter}
			style={{
				width: 200,
				height: 100,
				margin: 50,
				border: '1px solid black',
				borderRadius: 5,
			}}
		>
			<span>centered</span>
		</div>
	);
}

export const Problematic = 'this will never render';