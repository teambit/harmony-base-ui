import React from 'react';
import classNames from 'classnames';

import size from '@teambit/base-ui.theme.size-definition';
import shadow from '@teambit/base-ui.theme.shadow-definition';
import colors from '@teambit/base-ui.theme.color-definition';
import brands from '@teambit/base-ui.theme.brand-definition';
import margins from '@teambit/base-ui.theme.heading-margin-definition';
import font from '@teambit/base-ui.theme.fonts.book';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.  
 *
 * This includes:
 * - Colors
 * - Headers and paragraphs font-size, margins, etc
 * - Brand font
 * - Shadows
 * - Specific brand related styles
 *
 * @example
 * <Theme>
 *  <Paragraph>I got all the base styles! yippee!</Paragraph>
 * </Theme>
 */

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(
				size.heading,
				size.text,
				font.bookFont,
				texts.defaults,
				shadow.shadowTheme,
				colors.primaryPalette,
				brands.brands,
				margins.headingMargins,
				props.className,
			)}
		></div>
	);
}
