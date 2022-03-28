import React, { Component, createRef, RefObject, useState } from 'react';
// @ts-ignore
import createPolyfillRef from 'react-create-ref';

import { ClickOutside } from './click-outside';
import { useClickOutside } from './use-click-outside';

import styles from './click-outside.composition.module.scss';

export function UsingHook() {
	const ref: RefObject<HTMLDivElement> = createRef();
	const [click, setClick] = useState('');
	useClickOutside(ref, () => setClick('outside!'));

	return (
		<div className={styles.container}>
			<div ref={ref} onClick={() => setClick('inside!')} className={styles.target}>
				inside
			</div>

			<div>outside</div>

			{click && <div>clicked - '{click}'</div>}
		</div>
	);
}

export function UsingHookAndRefPolyfill() {
	const ref: RefObject<HTMLDivElement> = createPolyfillRef();
	const [click, setClick] = useState('');
	useClickOutside(ref, () => setClick('outside!'));

	return (
		<div className={styles.container}>
			<div ref={ref} onClick={() => setClick('inside!')} className={styles.target}>
				inside
			</div>

			<div>outside</div>

			{click && <div>clicked - '{click}'</div>}
		</div>
	);
}

export function UsingClassWithRefPolyfill() {
	return <ClassWithRefPolyfill />;
}

class ClassWithRefPolyfill extends Component {
	private ref: RefObject<HTMLDivElement> = createRef();
	state = {
		click: '',
	};

	render() {
		return (
			<div className={styles.container}>
				<ClickOutside
					targetRef={this.ref}
					handler={() => this.setState({ click: 'outside!' })}
				/>
				<div
					ref={this.ref}
					onClick={() => this.setState({ click: 'inside!' })}
					className={styles.target}
				>
					inside
				</div>

				<div>outside</div>

				{this.state.click && <div>clicked - '{this.state.click}'</div>}
			</div>
		);
	}
}

export function UsingWrapper() {
	const ref: RefObject<HTMLDivElement> = createRef();
	const [click, setClick] = useState('');
	useClickOutside(ref, () => setClick('outside!'));

	return (
		<div className={styles.container}>
			<ClickOutside targetRef={ref} handler={() => setClick('outside!')} />
			<div ref={ref} onClick={() => setClick('inside!')} className={styles.target}>
				inside
			</div>

			<div>outside</div>

			{click && <div>clicked - '{click}'</div>}
		</div>
	);
}
