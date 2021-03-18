import React, { ReactNode } from 'react';
import { Composer } from './composer';

function Deco01({ children }: { children: ReactNode }) {
	return (
		<div
			style={{
				border: '1px solid gray',
				borderRadius: 5,
				width: 'fit-content',
				padding: 3,
			}}
		>
			<div>deco01</div>
			{children}
		</div>
	);
}

function Deco02({ children, value = 'deco02' }: { children: ReactNode; value: string }) {
	return (
		<div style={{ border: '1px solid lightgray', borderRadius: 5, padding: 3 }}>
			<div>{value}</div>
			{children}
		</div>
	);
}

export const Preview = () => {
	// memoize array in real world scenarios!

	return <Composer components={[Deco01, Deco02]}>children</Composer>;
};

export const WithProps = () => {
	// memoize array in real world scenarios!

	return (
		<Composer components={[Deco01, [Deco02, { value: '"custom value"' }]]}>
			children
		</Composer>
	);
};
