import React, { useMemo } from 'react';
import classnames from 'classnames';

import styles from './skeleton.module.scss';
import design from './skeleton-design.module.scss';

const NBSP = ' ';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
	designClass?: string;
}

/**
 * A drop-in skeleton replacement for content that respects color, font size, and line-height.
 */
export function Skeleton({ designClass = design.skeleton, className, ...rest }: SkeletonProps) {
	return (
		<div {...rest} className={classnames(styles.skeleton, designClass, className)}></div>
	);
}

export interface WordProps extends React.HTMLAttributes<HTMLSpanElement> {
	length?: number;
	designClass?: string;
}

export function WordSkeleton({
	length = 5,
	designClass = design.word,
	className,
	style,
	...rest
}: WordProps) {
	return (
		<span
			{...rest}
			className={classnames(styles.word, className, designClass)}
			style={{ ...style }}
		>
			<span>{Array.from({ length }).map(() => NBSP)}</span>
		</span>
	);
}

export interface LineProps extends React.HTMLAttributes<HTMLDivElement> {
	width?: string;
	count?: number;
	designClass?: string;
}
export function LineSkeleton({
	width /* = '61%' */,
	count = 1,
	designClass = design.line,
	className,
	style,
	...rest
}: LineProps) {
	return (
		<div
			{...rest}
			className={classnames(styles.line, designClass, className)}
			style={{ width, ...style }}
		>
			{Array.from({ length: count }).map(() => (
				<div>{NBSP}</div>
			))}
		</div>
	);
}

export interface CircleSkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
	size?: number;
	designClass?: string;
}
export function CircleSkeleton({
	size = 2,
	designClass = design.circle,
	className,
	style,
	...rest
}: CircleSkeletonProps) {
	return (
		<span
			{...rest}
			className={classnames(styles.circle, className, designClass)}
			style={{ height: `${size}em`, width: `${size}em`, lineHeight: size, ...style }}
		>
			{NBSP}
		</span>
	);
}

export interface BlockProps extends React.HTMLAttributes<HTMLDivElement> {
	lines?: number;
	designClass?: string;
}

export function BlockSkeleton({
	lines = 5,
	designClass = design.block,
	className,
	style,
	...rest
}: BlockProps) {
	return (
		<div
			{...rest}
			className={classnames(styles.block, designClass, className)}
			style={{ height: `${lines}em`, ...style }}
		></div>
	);
}

export function title() {
	return (
		<div style={{ marginBottom: '1em' }}>
			<WordSkeleton style={{ fontSize: 18 }} />
		</div>
	);
}

// TODO
export function useRandomFraction(min: number, max: number) {
	return useMemo(() => {
		const rnd = Math.random() * max;
		return min + rnd;
	}, []);
}

export function useRandom(min: number, max: number) {
	return useMemo(() => {
		const rnd = Math.random() * max;
		return min + rnd;
	}, []);
}
