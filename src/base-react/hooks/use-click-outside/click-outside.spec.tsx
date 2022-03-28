import React, { createRef } from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ClickOutside } from './click-outside';

describe('click outside node (React15 hooks-less)', () => {
	it('should not trigger, when clicking inside', () => {
		const handleOutside = jest.fn(() => {});
		const { getByText } = render(<Scenario onOutside={handleOutside} />);

		const inside = getByText('inside');
		fireEvent.mouseDown(inside);
		// fireEvent.click(inside);

		expect(handleOutside).not.toHaveBeenCalled();
	});

	it('should not trigger, when clicking a nested child', () => {
		const handleOutside = jest.fn(() => {});
		const { getByText } = render(<Scenario onOutside={handleOutside} />);

		const inside = getByText('nested child');
		fireEvent.mouseDown(inside);
		// fireEvent.click(inside);

		expect(handleOutside).not.toHaveBeenCalled();
	});

	it('should trigger, when clicking outside', () => {
		const handleOutside = jest.fn(() => {});
		const { getByText } = render(<Scenario onOutside={handleOutside} />);

		const outside = getByText('outside');
		fireEvent.mouseDown(outside);
		// fireEvent.click(outside);

		expect(handleOutside).toHaveBeenCalled();
	});

	it('should not trigger, when clicking inside and disabled', () => {
		const handleOutside = jest.fn(() => {});
		const { getByText } = render(<Scenario onOutside={handleOutside} enabled={false} />);

		const inside = getByText('inside');
		fireEvent.mouseDown(inside);
		// fireEvent.click(outside);

		expect(handleOutside).not.toHaveBeenCalled();
	});

	it('should not trigger, when clicking outside and disabled', () => {
		const handleOutside = jest.fn(() => {});
		const { getByText } = render(<Scenario onOutside={handleOutside} enabled={false} />);

		const outside = getByText('outside');
		fireEvent.mouseDown(outside);
		// fireEvent.click(outside);

		expect(handleOutside).not.toHaveBeenCalled();
	});
});

function Scenario({
	onOutside,
	enabled,
}: {
	onOutside: (event: MouseEvent | TouchEvent) => void;
	enabled?: boolean;
}) {
	const ref = createRef<HTMLDivElement>();

	return (
		<div>
			<div>
				<ClickOutside targetRef={ref} handler={onOutside} enabled={enabled} />
				<div ref={ref}>
					inside
					<div>nested child</div>
					<div>deeply nested child</div>
				</div>
				<div>outside</div>
			</div>
		</div>
	);
}
