import React from 'react';
import { Duration } from './duration';

export const BasicDuration = () => {
	return <Duration time={2000} />;
};

export const WithHours = () => {
	const hours = 240 * 60 * 60 * 1000;
	return <Duration time={hours} />;
};
