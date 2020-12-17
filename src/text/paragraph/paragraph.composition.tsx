import React from 'react';
import { Theme } from '@teambit/base-ui.theme.theme-provider';
import { PossibleSizes } from '@teambit/base-ui.theme.sizes';
import { Paragraph } from './paragraph';

export const Pelement = () => (
	<Theme>
		<Paragraph element="p">p element</Paragraph>
	</Theme>
);

export const PelementWithDifferentSize = () => (
	<Theme>
		<Paragraph size={PossibleSizes.xl}>p element with xl size</Paragraph>
	</Theme>
);

export const DivElement = () => (
	<Theme>
		<Paragraph element="div">div element</Paragraph>
	</Theme>
);

export const SpanElement = () => (
	<Theme>
		<Paragraph element="span">span element</Paragraph>
	</Theme>
);
