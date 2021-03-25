import React from 'react';
import { Pane, SplitPane, Layout } from '@teambit/base-ui.surfaces.split-pane.split-pane';
import { HoverSplitter } from './splitter';

export const Preview = () => {
	return (
		<SplitPane style={{ border: '1px solid black', height: 200 }} layout={Layout.row}>
			<Pane style={{ textAlign: 'center' }}>first</Pane>
			<HoverSplitter />
			<Pane style={{ textAlign: 'center' }}>
				lorem
				<br />
				ipsum
			</Pane>
		</SplitPane>
	);
};

export const Vertical = () => {
	return (
		<SplitPane style={{ border: '1px solid black', height: 200 }} layout={Layout.column}>
			<Pane style={{ textAlign: 'center' }}>first</Pane>
			<HoverSplitter />
			<Pane style={{ textAlign: 'center' }}>
				lorem
				<br />
				ipsum
			</Pane>
		</SplitPane>
	);
};
