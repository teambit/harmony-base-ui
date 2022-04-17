import React, { ReactNode, ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { HiddenCheckbox } from '@teambit/base-ui.input.checkbox.hidden';
import { CheckboxIndicator, classes } from '@teambit/base-ui.input.checkbox.indicator';

export { HiddenCheckbox as Input };

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
  checked?: InputHTMLAttributes<HTMLInputElement>['checked'];
  /**
   * Set the `name` property of the default `input`. When using a custom `input`, pass props directly to it.
   */
  name?: InputHTMLAttributes<HTMLInputElement>['name'];
  /**
   * Set the `required` property of the default `input`. When using a custom `input`, pass props directly to it.
   */
  required?: InputHTMLAttributes<HTMLInputElement>['required'];
  /**
   * Set the `value` property of the default `input`. When using a custom `input`, pass props directly to it.
   */
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  /**
   * Set the `onChange` property of the default `input`. When using a custom `input`, pass props directly to it.
   */
  onInputChanged?: (event: ChangeEvent<HTMLInputElement>) => void;
  /**
   * Set the `type` property of the default `input`. When using a custom `input`, pass props directly to it.
   * @default "checkbox"
   */
  type?: HTMLInputTypeAttribute | undefined;
  /**
   * Set the `disabled` property of the default `input`. When using a custom `input`, pass props directly to it.
   */
  disabled?: boolean;
}

/** Custom checkbox with text. */
export function CheckboxLabel({
  checked,
  defaultChecked,
  onInputChanged,
  type,
  disabled,
  name,
  required,
  value,
  input = (
    <HiddenCheckbox
      defaultChecked={defaultChecked}
      onChange={onInputChanged}
      checked={checked}
      disabled={disabled}
      type={type}
      name={name}
      value={value}
      required={required}
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
