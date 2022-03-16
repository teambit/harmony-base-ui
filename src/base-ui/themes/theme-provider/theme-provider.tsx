import React from 'react';
import classNames from 'classnames';

import { headingFontSize, textFontSize } from '@teambit/base-ui.theme.size-definition';
import { shadowTheme } from '@teambit/base-ui.theme.shadow-definition';
import { primaryPalette } from '@teambit/base-ui.theme.color-definition';
import { brands } from '@teambit/base-ui.theme.brand-definition';
import { headingMargins } from '@teambit/base-ui.theme.heading-margin-definition';
import { bookFont } from '@teambit/base-ui.theme.fonts.book';
import texts from './texts.module.scss';

/**
 * @name ThemeProvider
 * @description
 * Applies shared styles to all child components.
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
