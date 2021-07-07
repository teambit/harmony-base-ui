import React from 'react';
import { CurvePeek, CurveValley } from './curve-peak';

export const Peak = () => (
	<CurvePeek style={{ width: '260px', height: '100px', color: '#ededed' }} />
);

export const Valley = () => (
	<CurveValley style={{ width: '260px', height: '100px', color: '#ededed' }} />
);

Valley.canvas = {
	backgroundColor: '#414141',
};

// export const White = () => (
// 	<CurvePeek filling="cloud" style={{ width: '160px', height: '100px', color: '#ffffff', boxShadow:  }} />
// );
// White.canvas = {
// 	background: '#0c0c0c',
// };

// export const Cloud = () => (
// 	<CurvePeek filling="cloud" style={{ width: '160px', height: '100px', color: '#f6f6f6' }} />
// );
