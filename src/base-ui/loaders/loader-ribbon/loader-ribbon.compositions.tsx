import React, { useEffect, useState } from 'react';
import { LoaderRibbon } from './loader-ribbon';

export const Preview = () => {
	return <LoaderRibbon active />;
};

export const CompletionAtEnd = () => {
	const [active, setActive] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActive((x) => !x);
		}, 3290);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <LoaderRibbon active={active} />;
};

export const CompletionMidWay = () => {
	const [active, setActive] = useState(true);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setActive((x) => !x);
		}, 800);
		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return <LoaderRibbon active={active} />;
};
