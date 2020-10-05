import React, { Component, ReactNode, ComponentType, MutableRefObject } from 'react';

import { Container } from '@teambit/base-ui.surfaces.abs-container';
import { ClickOutside } from '@teambit/base-ui.hook.use-click-outside';
//@ts-ignore
import createRef from 'react-create-ref';

import { DefaultPlaceholder, DrawerPlaceholderProps } from './default-placeholder';

export interface DrawerProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'placeholder'> {
	open?: boolean;
	PlaceholderComponent?: ComponentType<DrawerPlaceholderProps>;
	placeholder: ReactNode;

	clickToggles?: boolean;
	clickPlaceholderToggles?: boolean;
	clickOutside?: boolean;
	hoverToOpen?: boolean;

	onChange?: (evt: React.MouseEvent | undefined, open: boolean) => void;
	onContainerToggle?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onPlaceholderToggle?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onContaineeToggle?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
	onClickOutside?: (e: MouseEvent | TouchEvent) => void;
}

type DrawerState = {
	isOpen: boolean;
};

export class Drawer extends Component<DrawerProps, DrawerState> {
	state: DrawerState = {
		isOpen: this.props.open || false,
	};

	private ref: MutableRefObject<HTMLDivElement> = createRef();

	static defaultProps = {
		PlaceholderComponent: DefaultPlaceholder,
		clickPlaceholderToggles: true,
		clickOutside: true,
		clickToggles: true,
	};

	componentWillReceiveProps(nextProps: DrawerProps) {
		const prevProps = this.props;

		if (prevProps.open !== nextProps.open && nextProps.open !== undefined) {
			this.setState({ isOpen: nextProps.open });
		}
	}

	private get isControlled() {
		return this.props.open !== undefined;
	}

	toggle = (evt: React.MouseEvent) => {
		const { isOpen } = this.state;
		const nextOpen = !isOpen;

		if (!this.isControlled) {
			this.setState({ isOpen: nextOpen });
		}

		this.props.onChange && this.props.onChange(evt, nextOpen);
	};

	close = (evt?: React.MouseEvent) => {
		const { isOpen } = this.state;
		const nextOpen = false;

		if (!this.isControlled && isOpen) {
			this.setState({ isOpen: nextOpen });
		}

		this.props.onChange && this.props.onChange(evt, nextOpen);
	};

	open = (evt: React.MouseEvent) => {
		const { isOpen } = this.state;
		const nextOpen = true;

		if (!this.isControlled && !isOpen) {
			this.setState({ isOpen: true });
		}

		this.props.onChange && this.props.onChange(evt, nextOpen);
	};

	private handlePlaceholderClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.props.onPlaceholderToggle && this.props.onPlaceholderToggle(e);

		if (!e.defaultPrevented) {
			this.props.clickPlaceholderToggles && this.toggle(e);
		}
	};

	private handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.props.clickToggles && this.toggle(e);

		this.props.onClick && this.props.onClick(e);
	};

	private handleClickOutside = (e: MouseEvent | TouchEvent) => {
		this.props.onClickOutside && this.props.onClickOutside(e);

		if (!e.defaultPrevented) {
			this.props.clickOutside && this.close();
		}
	};

	private handleLeaveContainer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		//TODO - add grace period
		this.props.onMouseLeave && this.props.onMouseLeave(e);

		if (!e.defaultPrevented) {
			this.props.hoverToOpen && this.close(e);
		}
	};

	private handleEnterContainer = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		this.props.onMouseEnter && this.props.onMouseEnter(e);

		if (!e.defaultPrevented) {
			this.props.hoverToOpen && this.open(e);
		}
	};

	render() {
		const {
			placeholder,
			children,
			PlaceholderComponent = DefaultPlaceholder,
			clickOutside,

			//replaced by handlers:
			onMouseEnter,
			onMouseLeave,

			//virtualProps (should not be included in 'rest')
			open,
			hoverToOpen,
			clickPlaceholderToggles,
			clickToggles,

			onChange,
			onPlaceholderToggle,
			onContainerToggle,
			onContaineeToggle,
			onClickOutside,

			...rest
		} = this.props;
		const { isOpen } = this.state;

		return (
			<Container
				{...rest}
				ref={this.ref}
				open={isOpen}
				onMouseLeave={this.handleLeaveContainer}
				onMouseEnter={this.handleEnterContainer}
				onClick={this.handleContainerClick}
			>
				{children}
				<PlaceholderComponent onClick={this.handlePlaceholderClick}>
					{placeholder}
				</PlaceholderComponent>

				<ClickOutside
					targetRef={this.ref}
					enabled={!!clickOutside && isOpen}
					handler={this.handleClickOutside}
				/>
			</Container>
		);
	}
}
