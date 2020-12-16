import React from 'react';

export type HeadingProps = {
	/**
	 * underlying html element ("h1", "h2", etc)
	 */
	element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;

export function Heading(props: HeadingProps) {
	const { element, ...rest } = props;
	const Element = element || 'h1';

	return <Element data-bit-id="bit.base-ui/text/heading" {...rest} />;
}

Heading.defaultProps = {
	element: 'h1',
};
