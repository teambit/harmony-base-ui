import React from 'react';
import classNames from 'classnames';

import { headingFontSize, textFontSize } from '@teambit/base-ui-temp.theme.size-definition';
import { shadowTheme } from '@teambit/base-ui-temp.theme.shadow-definition';
import { primaryPalette } from '@teambit/base-ui-temp.theme.color-definition';
import { brands } from '@teambit/base-ui-temp.theme.brand-definition';
import { headingMargins } from '@teambit/base-ui-temp.theme.heading-margin-definition';
import { bookFont } from '@teambit/base-ui-temp.theme.fonts.book';
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
				headingFontSize,
				textFontSize,
				bookFont,
				shadowTheme,
				primaryPalette,
				brands,
				headingMargins,
				texts.defaults,
				props.className
			)}
		></div>
	);
}
