import { RefObject } from 'react';
import { useClickOutside } from './use-click-outside';

export type ClickOutsideProps = {
	targetRef: RefObject<HTMLElement>;
	handler: (event: MouseEvent | TouchEvent) => void;
	enabled?: boolean;
};

/** useClickOutside wrapper, for components that can't use hooks directly */
export function ClickOutside({ targetRef, handler, enabled }: ClickOutsideProps) {
	useClickOutside(targetRef, handler, enabled);

	return null;
}
