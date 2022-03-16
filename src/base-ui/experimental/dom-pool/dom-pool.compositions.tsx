import React, { ReactNode, useReducer, useRef } from 'react';
import { DomPool } from './dom-pool';
import { domPoolContext, useNode } from './use-node';

export function Preview() {
	const [on, toggle] = useReducer((x) => !x, true);

	const PoolConsumer = () => {
		useNode(
			'preview',
			<div key="preview">content in pool</div>,
			<div key="preview">released content</div>
		);

		return <div>consumer</div>;
	};

	return (
		<DomPoolProvider>
			<button onClick={toggle}>toggle</button>
			{on && <PoolConsumer />}
		</DomPoolProvider>
	);
}

function DomPoolProvider({ children }: { children: ReactNode }) {
	const domPoolRef = useRef(new DomPool());
	const domPool = domPoolRef.current;

	return (
		<div>
			<div style={{ border: '1px solid black', borderRadius: 4, padding: 4 }}>
				pool: <br />
				<domPool.Render />
			</div>
			<br />
			<domPoolContext.Provider value={domPool}>{children}</domPoolContext.Provider>
		</div>
	);
}
