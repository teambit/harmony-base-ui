import React from 'react';

export type Element = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type HeadingProps = {
  /**
   * underlying html element ("h1", "h2", etc)
   */
  element?: Element;
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * Base title component, to be styled by composing components.
 * May have more logic in the future.
 * @example
 * <Heading element="h3">This is a title</Heading>
 */
export function Heading({ element = 'h1', ...rest }: HeadingProps) {
  const Element = element;

  return <Element data-bit-id="teambit.base-ui/text/heading" {...rest} />;
}
