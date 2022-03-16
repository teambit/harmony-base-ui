import { ReactElement, ReactNode, useEffect, createContext, useContext } from 'react';

import { DomPool } from './dom-pool';

export const domPoolContext = createContext<DomPool | undefined>(undefined);

export function useNode(key: string, node: ReactElement, inactiveNode?: ReactNode) {
	const pool = useContext(domPoolContext);

	useEffect(() => {
		return () => {
			pool?.release(key, inactiveNode);
		};
	}, [pool]);

	// TODO - pool.use(...) triggers a re-render of DomPool,
	// which is risky because the consuming component usually redeclares node on every render.
	// React seems to be smart enough to prevent an infinite render loop though.
	useEffect(() => {
		pool?.use(key, node);
	}, [key, node, pool]);
}
