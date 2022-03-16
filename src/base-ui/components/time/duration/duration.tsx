import React from 'react';
// @ts-ignore
import TimeDuration from 'duration';

export type DurationProps = {
	/**
	 * time of duration in milliseconds.
	 * can be either a number representing milliseconds or
	 * a `Duration` instance of the `teambit.toolbox/date/duration` component.
	 */
	time: number;
};

export function Duration({ time }: DurationProps) {
	// @ts-ignore
	const duration = new TimeDuration(new Date(0), new Date(time));

	const totalHours = pad(duration.hours);
	const minutes = pad(duration.minute);
	const seconds = pad(duration.second);
	const timeString = `${totalHours}:${minutes}:${seconds}`;

	return <span>{timeString}</span>;
}

function pad(num: number, count = 2) {
	return num.toString().padStart(count, '0');
}
