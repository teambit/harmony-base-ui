import React, { ReactNode, useReducer, DispatchWithoutAction } from 'react';

export class DomPool {
	private nodes = new Map<string, ReactNode>();
	// private garbageCollection = new Set<string>();
	private _rerender: DispatchWithoutAction = () => {};

	constructor(private poolSize = 6) {}

	Render = (props: React.HTMLAttributes<HTMLDivElement>) => {
		const [, rerender] = useReducer((x) => x + 1, 0);
		this._rerender = rerender;
		const arr = this.toArray();

		return (
			<div
				{...props}
				// style={{ height: 1, marginBottom: -1, overflow: 'hidden', ...props.style }}
			>
				{arr}
			</div>
		);
	};

	toArray() {
		return Array.from(this.nodes.values());
	}

	peek(key: string) {
		return this.nodes.get(key);
	}

	use(key: string, node: ReactNode) {
		this.nodes.set(key, node);
		// this.garbageCollection.delete(key);
		this.refresh();
	}

	release(key: string, node?: ReactNode) {
		this.nodes.set(key, node);
		// this.garbageCollection.add(key);
		this.refresh();
	}

	private refresh() {
		this._rerender();
	}
}
