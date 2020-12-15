import React from 'react';

export type LinkProps = {
	/**
	 * opens link in a new tab
	 */
	external?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function Link(props: LinkProps) {
	const { external, children, ...rest } = props;

	const externalProps = external ? { rel: 'noopener', target: '_blank' } : {};

	return (
		<a data-bit-id="bit.base-ui/elements/link" {...externalProps} {...rest}>
			{children}
		</a>
	);
}
