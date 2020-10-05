import { useEffect, RefObject } from 'react';

/** calls handler when clicking in the DOM outside the target component */
export function useClickOutside(
	ref: RefObject<HTMLElement>,
	handler: (event: MouseEvent | TouchEvent) => void,
	/** turn listeners on/off */
	enabled = true
) {
	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			const element = event.target as HTMLElement | null;
			// Do nothing if clicking ref's element or descendent elements
			if (!ref.current || !element || ref.current.contains(element)) {
				return;
			}
			handler(event);
		};
		if (enabled) {
			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);
		}
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler, enabled]);
}
