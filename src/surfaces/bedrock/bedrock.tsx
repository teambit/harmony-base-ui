import React from 'react';
import classNames from 'classnames';
import { backgrounds } from '@teambit/base-ui-temp.surfaces.background';

export type BedrockProps = React.HTMLAttributes<HTMLDivElement>;

export function Bedrock(props: BedrockProps) {
	return <div {...props} className={classNames(backgrounds.bedrock, props.className)} />;
}
