import React, { ReactElement, HTMLAttributes } from 'react';
import AnimateHeight from 'react-animate-height';

export type CollapsableTreeNodeProps = {
  /**
   * The title to be rendered and to be clicked to open the content.
   */
  Title: ReactElement;

  /**
   * The content to be rendred in the animated height.
   */
  Content: ReactElement;

  /**
   * If the content is open or not.
   */
  isOpen?: boolean;
} & HTMLAttributes<HTMLDivElement>;

export function CollapsableTreeNode({ Title, isOpen = false, Content, className }: CollapsableTreeNodeProps) {
  return (
    <div className={className}>
      {Title}
      <AnimateHeight height={isOpen ? 'auto' : 0}>{Content}</AnimateHeight>
    </div>
  );
}
