import React from 'react';
import { render } from '@testing-library/react';
import { BasicCollapsableTreeNode } from './collapsable-tree-node.composition';

describe('should render Collapsable tree node', () => {
  it('should render with the Title text', () => {
    const { getByText } = render(<BasicCollapsableTreeNode />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should render with the Content text', () => {
    const { getByText } = render(<BasicCollapsableTreeNode />);
    const rendered = getByText('Some content');
    expect(rendered).toBeTruthy();
  });
});
