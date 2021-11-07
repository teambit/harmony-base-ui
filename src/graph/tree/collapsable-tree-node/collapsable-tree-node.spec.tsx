import React from 'react';
import { render } from '@testing-library/react';
import { BasicCollapsableTreeNode } from './collapsable-tree-node.composition';

describe('should render Collapsable tree node', () => {
  it('should render with the title text', () => {
    const { getByText } = render(<BasicCollapsableTreeNode />);
    const rendered = getByText('My Folder');
    expect(rendered).toBeTruthy();
  });
  it('should render with childrens text', () => {
    const { getByText } = render(<BasicCollapsableTreeNode />);
    for (let index = 1; index <= 5; index++) {
      const rendered = getByText(`Content ${1}`);
      expect(rendered).toBeTruthy();
    }
  });
});
