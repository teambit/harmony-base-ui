import React, { ReactNode, HTMLAttributes } from 'react';
import classNames from 'classnames';
import AnimateHeight from 'react-animate-height';
import { TreeLayer, TreeNodeProps } from '@teambit/base-ui.graph.tree.recursive-tree';
import { indentClass, indentStyle } from '@teambit/base-ui.graph.tree.indent';
import styles from './collapsable-tree-node.module.scss';

export type CollapsableTreeNodeProps = {
  /**
   * The title to be rendered and to be clicked to open the content.
   */
  title: ReactNode;

  /**
   * If the content is open or not.
   */
  isOpen?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'title'> &
  TreeNodeProps;

export function CollapsableTreeNode({ title, isOpen = false, node, depth, className }: CollapsableTreeNodeProps) {
  return (
    <div className={className}>
      {title}
      <AnimateHeight height={isOpen ? 'auto' : 0}>
        <div className={classNames(indentClass, styles.childrenTree)} style={indentStyle(depth + 1)}>
          {node.children && <TreeLayer childNodes={node.children} depth={depth + 1} />}
        </div>
      </AnimateHeight>
    </div>
  );
}
