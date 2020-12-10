import React, { ReactNode, ChangeEvent } from 'react';
import { HiddenCheckbox } from '@teambit/base-ui.input.checkbox.hidden';
import { CheckboxIndicator, classes } from '@teambit/base-ui.input.checkbox.indicator';

export interface CheckboxLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
	/**
	 * Custom `input` element. Use this to pass any custom props to the input element.
	 */
	input?: ReactNode;
	/**
	 * A visual facade to the `input` element.
	 * Style it using the `input:<state> + indicator { }` to achieve a look not possible with the native `<input/>` element.
	 */
	indicator?: ReactNode;
	/**
	 * Set the `checked` property of the default `input`. When using a custom `input`, pass props directly to it.
	 */
	checked?: boolean;
	/**
	 * Set the `onChange` property of the default `input`. When using a custom `input`, pass props directly to it.
	 */
	onInputChanged?: (event: ChangeEvent<HTMLInputElement>) => void;
	/**
	 * Set the `disabled` property of the default `input`. When using a custom `input`, pass props directly to it.
	 */
	disabled?: boolean;
}

// BooleanOption?
export function CheckboxLabel({
	checked,
	defaultChecked,
	onInputChanged,
	disabled,
	input = (
		<HiddenCheckbox
			defaultChecked={defaultChecked}
			onChange={onInputChanged}
			checked={checked}
			disabled={disabled}
		/>
	),
	indicator = <CheckboxIndicator className={classes.defaultCheckbox} />,
	children,
	...rest
}: CheckboxLabelProps) {
	return (
		<label {...rest}>
			{input}
			{indicator}
			{children}
		</label>
	);
}
