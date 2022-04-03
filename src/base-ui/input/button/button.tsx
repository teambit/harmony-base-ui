import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

// //@ts-ignore
// import Spinner from '@bit/bit.base-ui.ellipsis';

import styles from './button.module.scss';
import { DotsLoader } from '@teambit/base-ui.elements.dots-loader';

// const defaultSpinner = (
// 	<Spinner color="#ffffff" size={18} style={{ verticalAlign: 'middle' }} />
// );

export type ButtonProps = {
	/**
	 * loader to show while button is busy. Turns on when onClick returns a promise (until it resolves), or when `loading={true}`.
	 */
	loader?: ReactNode;
	/**
	 * explicitly toggle loader on and off
	 */
	loading?: boolean;

	/**
	 * allow clicking on button even while loading. (i.e. make simultaneous triggers)
	 */
	activeWhenLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Base button, with very basic styles. Accepts all parameters of native html button.
 *
 * If onClick returns a promise, BaseButton will show a loader automatically, until the promise is resolved or rejected.
 * @example
 * <Button onClick={() => api.submitUserData()} loader={<CustomLoader/> } />
 */
export default class Button extends Component<ButtonProps> {
	state = { isLoading: false };
	private activePromises = new Set<Promise<any>>();
	private unmounted = false;

	static defaultProps = {
		loader: <DotsLoader />,
		loading: false,
	};

	componentWillUnmount() {
		this.unmounted = true;
		this.activePromises = new Set<Promise<any>>();
	}

	private handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const { onClick } = this.props;
		if (!onClick) return;

		this.setState({ isLoading: true });

		const promise = Promise.resolve(onClick.call(this, event)).catch(() => {});
		this.activePromises.add(promise);

		promise.then(() => this.handleResolve(promise));
	};

	private handleResolve(p: Promise<any>) {
		if (this.unmounted) return;

		this.activePromises.delete(p);
		if (this.activePromises.size === 0) {
			this.setState({ isLoading: false });
		}
	}

	render() {
		const {
			onClick,
			className,
			children,
			loader,
			loading,
			disabled,
			activeWhenLoading = false,
			...rest
		} = this.props;

		// ignore internal state when component is controlled
		const isLoading = (loading !== undefined && loading) || this.state.isLoading;

		const content = isLoading ? loader : children;
		const disabledByLoading = isLoading && !activeWhenLoading;

		return (
			<button
				data-bit-id="teambit.base-ui/input/button"
				{...rest}
				disabled={disabled || disabledByLoading}
				onClick={this.handleClick}
				className={classNames(className, styles.vanillaButton)}
			>
				{content}
			</button>
		);
	}
}
