import React, { useState } from 'react';
import { BaseIcon } from '@teambit/base-ui.elements.icon';
import { indentClass, indentStyle } from '@teambit/base-ui.graph.tree.indent';
import { CollapsableTreeNode } from './collapsable-tree-node';

export const BasicCollapsableTreeNode = () => {
  const [isOpen, setOpen] = useState(false);
  const Title = <div onClick={() => setOpen(!isOpen)}>My Folder</div>;
  const Content = <div>Some content</div>;
  return <CollapsableTreeNode Title={Title} Content={Content} isOpen={isOpen} />;
};

export const CollapsableTreeNodeExample = () => {
  const [isOpen, setOpen] = useState(false);
  const Title = (
    <div onClick={() => setOpen(!isOpen)} style={{ paddingRight: 8 }}>
      <BaseIcon
        of="bitcon-fat-arrow-down"
        style={{
          display: 'inline-block',
          marginRight: 8,
          transition: 'all 300ms',
          transform: !isOpen ? 'rotate(-0.25turn)' : undefined,
        }}
      />
      <span>My Folder</span>
    </div>
  );
  const Content = (
    <div className={indentClass} style={indentStyle(2)}>
      <div>content 1</div>
      <div>content 2</div>
    </div>
  );
  return <CollapsableTreeNode Title={Title} Content={Content} isOpen={isOpen} />;
};
