import React, { PureComponent, ReactNode } from 'react';
import { Layout } from '@teambit/base-ui.surfaces.split-pane.layout';

import { SplitApi } from './types';


type SplitPaneProps = {
	ratio: number | string;
	max?: number;
	min?: number;
	layout: Layout;
	children: (props: SplitApi) => ReactNode;
};

type SplitPaneState = {
	isDragging: boolean;
	// ratio: number;
	/**
	 * @description represents the actual ratio the user chose when dragging
	 */
	sampledRatio?: number;
};

export default class SplitPane extends PureComponent<SplitPaneProps, SplitPaneState> {
	containerRef = React.createRef<HTMLDivElement>()

	constructor(props: SplitPaneProps) {
		super(props);
		// console.log("containerRef", this.containerRef)
		const { ratio = 38 } = props;
		// TODO - pass ratio to state with calculatePixelRatio
		this.state = { isDragging: false, sampledRatio: 38 };
	}

	componentWillReceiveProps(nextProps: SplitPaneProps) {
		const prevProps = this.props;
		if (prevProps.ratio !== nextProps.ratio && nextProps.ratio !== undefined) {
			this.setState({sampledRatio: this.calculatePixelRatio(nextProps.ratio)})
		}
	}

	componentDidMount() {
		this.setState({sampledRatio: this.calculatePixelRatio(this.props.ratio || 38)})
		document.addEventListener('mousemove', this.handleMouseMove);
		document.addEventListener('mouseup', this.handleDragEnded);
		document.addEventListener('mouseenter', this.handleMouseEnter);

		document.addEventListener('touchend', this.handleDragEnded);
		document.addEventListener('touchmove', this.handleTouchMove);
		document.addEventListener('touchcancel', this.handleDragEnded);

		// onMouseDown	//at splitter
		// onTouchStart //at splitter

		// additional events reference:
		// onClick, onContextMenu, onDoubleClick, onMouseOver, onMouseOut
		// onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop
	}

	componentWillUnmount() {
		document.removeEventListener('mousemove', this.handleMouseMove);
		document.removeEventListener('mouseup', this.handleDragEnded);
		document.removeEventListener('mouseenter', this.handleMouseEnter);

		document.removeEventListener('touchend', this.handleDragEnded);
		document.removeEventListener('touchmove', this.handleTouchMove);
		document.removeEventListener('touchcancel', this.handleDragEnded);
	}

	handleDragStarted = () => {
		this.setState({ isDragging: true });
	};

	calculatePixelRatio = (ratio: string | number) => {
		if(typeof ratio === 'number') return ratio;
		// TODO - extract to const
		if(!this.containerRef.current) return 38;
		// TODO - handle ratio which is not translatable to a number
		const pixelRatio = +ratio.replace('px', '');
		const nextRatio = pixelToRatio({
			layout: this.props.layout,
			size: pixelRatio,
			element: this.containerRef.current
		})
		return nextRatio
	}

	handleDragEnded = () => {
		if (!this.state.isDragging) return;

		this.setState({ isDragging: false });
	};

	handleDragging = ({ clientX, clientY }: { clientX: number; clientY: number }) => {
		const { layout } = this.props;
		
		if (layout.includes('first') || layout.includes('last')) return;
		if (!this.containerRef.current) return;

		// to keep SRP, we only sample a snapshot of the desired ratio.
		// translating this value to desired layout happens at actualRatio().
		//
		// bonus: internal ratio is 'remembered' even when switching layouts
		const sampledRatio = ratioFromCoordinates({
			clientX,
			clientY,
			layout,
			element: this.containerRef.current,
		});

		if (!sampledRatio) return;

		this.setState({ sampledRatio: sampledRatio });
	};

	handleMouseMove = (e: MouseEvent) => {
		if (!this.state.isDragging) return;
		const { clientX, clientY } = e;

		this.handleDragging({ clientX, clientY });
	};

	handleTouchMove = (e: TouchEvent) => {
		if (!this.state.isDragging) return;

		const touches = e.touches;
		const mainTouch = touches[0];

		const { clientX, clientY } = mainTouch;

		this.handleDragging({ clientX, clientY });
	};

	handleMouseEnter = (e: MouseEvent) => {
		//mouse has left, and returned, still holding the left button
		if (e && e.buttons === 1) return;

		this.handleDragEnded();
	};

	//could me memoized
	actualRatio = () => {
		const { min = 0, max = 100, layout = 'row' } = this.props;

		const { sampledRatio } = this.state;

		var ratio = sampledRatio || 38;
		ratio = limitToRange(min, ratio, max);

		if (layout.includes('first')) {
			ratio = 100;
		}

		if (layout.includes('last')) {
			ratio = 0;
		}

		if (layout.includes('reverse')) {
			ratio = 100 - ratio;
		}

		return ratio;
	};

	render() {
		const { children, layout } = this.props;
		const { isDragging } = this.state;

		const ratio = this.actualRatio();

		const draggingClass = isDragging ? 'split-pane-dragging' : '';

		const renderedChildren = children({
			isDragging,
			ratio,
			startDrag: this.handleDragStarted,
		});

		return (
			<div
				className={`split-pane-container ${layout} ${draggingClass}`}
				ref={this.containerRef}
			>
				{renderedChildren}
			</div>
		);
	}
}

function ratioFromCoordinates({
	layout,
	clientX,
	clientY,
	element,
}: {
	clientX: number;
	clientY: number;
	layout: Layout;
	element: HTMLDivElement;
}) {
	
	const boundingRect = element.getBoundingClientRect();
	const { left, top } = boundingRect;

	var size = 0;
	if (layout.includes('row')) {
		size = clientX - left;
	} else if (layout.includes('column')) {
		size = clientY - top;
	} else {
		return undefined;
	}
	return pixelToRatio({layout, size, element})
}

export function limitToRange(min: number, number: number, max: number) {
	return Math.max(min, Math.min(number, max));
}

function pixelToRatio({
	layout,
	size,
	element,
}: {
	layout: Layout;
	size: number;
	element: HTMLDivElement;
}) {
	const boundingRect = element.getBoundingClientRect();
	const { height, left, top, width } = boundingRect;

	var totalSize = 1;

	if (layout.includes('row')) {
		totalSize = width;
	} else if (layout.includes('column')) {
		totalSize = height;
	} else {
		return undefined;
	}

	return (size / totalSize) * 100;
}