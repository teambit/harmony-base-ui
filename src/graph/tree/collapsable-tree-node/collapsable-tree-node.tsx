import React, { ReactElement, ReactNode, HTMLAttributes } from 'react';
import AnimateHeight from 'react-animate-height';

export type CollapsableTreeNodeProps = {
  /**
   * The title to be rendered and to be clicked to open the content.
   */
  title: ReactNode;

  /**
   * The content to be rendred in the animated height.
   */
  children: ReactNode;

  /**
   * If the content is open or not.
   */
  isOpen?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'title'>;

export function CollapsableTreeNode({ title, isOpen = false, children, className }: CollapsableTreeNodeProps) {
  return (
    <div className={className}>
      {title}
      <AnimateHeight height={isOpen ? 'auto' : 0}>{children}</AnimateHeight>
    </div>
  );
}
