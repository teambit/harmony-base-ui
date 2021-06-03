import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { NativeLink } from './native-link';

describe('native html link', () => {
  it('should render', () => {
    const { getByText } = render(<NativeLink>link</NativeLink>);
    const rendered = getByText('link');
    expect(rendered).toBeInstanceOf(HTMLElement);
  });

  it('should link to target', () => {
    const { getByText } = render(<NativeLink href="http://target">link</NativeLink>);
    const rendered = getByText('link');
    expect(rendered.tagName).toEqual('A');
    expect(rendered).toHaveProperty('href', 'http://target/')
  });

  it('should open in new tab/window, when external=true', () => {
    const { getByText } = render(<NativeLink external>link</NativeLink>);
    const rendered = getByText('link');
    expect(rendered).toHaveProperty('target', '_blank');
    // security - rel='noopener' prevents the opened page to gain any kind of access to the original page.
    expect(rendered).toHaveProperty('rel', 'noopener');
  });

  it('should replace url without changing history, when replace=true', () => {
    const { getByText } = render(
      <NativeLink href="#target" replace>
        link
      </NativeLink>
    );
    const rendered = getByText('link');
    // '(sanity) initial history length'
    expect(window.history.length).toEqual(1);

    fireEvent.click(rendered);

    // if this fails, add `await waitFor(() => window.location.hash == '#hash')`
    expect(window.location.hash).toEqual('#target');
    // 'history length after navigation'
    expect(window.history.length).toEqual(1);
  });
});
