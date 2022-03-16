import React, { ReactNode, ComponentType } from 'react';

export type ComponentTuple<T = any> = [Component: ComponentType<T>, props?: T];
export type Wrapper<T = any> = ComponentType<T> | ComponentTuple<T>;
export interface ComposerProps<T = any> {
	/** Compose these components. Can be a ReactComponent, or a [ReactComponent, Props] tuple */
	components?: Wrapper<T>[];
	children?: ReactNode;
}

/**
 * A react Component composer, equivalent to `Compose(n+1) := <a[n+1]> <Compose(n) /> </a[n+1]>`.
 * Component can be a React Component, or a `[ Component, { props } ]` tuple.
 */
export function Composer(props: ComposerProps) {
	const { components = [], children } = props;

	const arrayified: ComponentTuple[] = components.map((tuple) =>
		Array.isArray(tuple) ? tuple : [tuple, undefined]
	);

	return (
		<>
			{arrayified.reduceRight((acc, [Comp, forwardProps]) => {
				return <Comp {...forwardProps}>{acc}</Comp>;
			}, children)}
		</>
	);
}
