import React from 'react';
import { render, fireEvent /* waitForElementToBeRemoved */ } from '@testing-library/react';

import Button from './button';
import { BasicButton } from './button.composition';

const testLoader = <span data-testid="test-loader">loading...</span>;

it('should render with children', () => {
	const { getByText } = render(<BasicButton />);
	const rendered = getByText('Click');
	expect(rendered).toBeInstanceOf(HTMLElement);
});

it('should trigger onClick', () => {
	const onClick = jest.fn();
	const { getByText } = render(<Button onClick={onClick}>actual button</Button>);
	const rendered = getByText('actual button');

	//could use userEvents.click(), in @testing-library/user-event
	fireEvent.click(rendered);

	expect(onClick).toHaveBeenCalled();
});

// it('should remove loader after onClick has been resolved', async () => {
// 	let resolveClick = () => {};
// 	const onClick = () => new Promise(res => (resolveClick = res));
// 	const { getByTestId, queryByTestId } = render(
// 		<Button data-testid="test-button" loader={testLoader} onClick={onClick} />
// 	);

// 	fireEvent.click(getByTestId('test-button'));
// 	resolveClick();

// 	await waitForElementToBeRemoved(() => queryByTestId('test-loader'));
// });

// it('should remove loader even when onClick has been rejected', async () => {
// 	let rejectClick = () => {};
// 	const onClick = () => new Promise((_res, rej) => (rejectClick = rej));
// 	const { getByTestId, queryByTestId } = render(
// 		<Button data-testid="test-button" loader={testLoader} onClick={onClick} />
// 	);

// 	fireEvent.click(getByTestId('test-button'));
// 	rejectClick();

// 	await waitForElementToBeRemoved(() => queryByTestId('test-loader'));
// });

it('should show loader when explicitly set loading={true}', () => {
	const { getByTestId } = render(<Button loader={testLoader} loading={true} />);

	expect(getByTestId('test-loader')).toBeInstanceOf(HTMLElement);
});

it('should not show loader when explicitly set loading={false}', () => {
	const { queryByTestId } = render(<Button loader={testLoader} loading={false} />);

	expect(queryByTestId('test-loader')).not.toBeInstanceOf(HTMLElement);
});

it('should not render children while loading', () => {
	const { queryByText } = render(
		<Button loader={testLoader} loading={true}>
			actual children
		</Button>
	);

	expect(queryByText('actual children')).not.toBeInstanceOf(HTMLElement);
});

it('should remove loader when changing loading back to ={false}', () => {
	const { queryByTestId, rerender } = render(<Button loader={testLoader} loading={true} />);
	expect(queryByTestId('test-loader')).toBeInstanceOf(HTMLElement);

	rerender(<Button loader={testLoader} loading={false} />);
	expect(queryByTestId('test-loader')).not.toBeInstanceOf(HTMLElement);
});
