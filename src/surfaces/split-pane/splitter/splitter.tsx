import React, { PureComponent } from 'react';
import { SplitterProps } from './splitter-props';
import cn from 'classnames';
import './splitter.css';

export default class Splitter extends PureComponent<SplitterProps> {
	handleMouseDown = () => {
		this.props.onDragStarted();
	};

	handleTouchStart = () => {
		this.props.onDragStarted();
	};

	render() {
		const { className, children } = this.props;

		return (
			<div
				className={cn(className, 'splitter')}
				onMouseDown={this.handleMouseDown}
				onTouchStart={this.handleTouchStart}
			>
				{children}
			</div>
		);
	}
}


