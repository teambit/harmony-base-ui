import React, { useState } from 'react';
import { TreeLayer } from './tree-layer';
import { TreeNodeContext, TreeNodeRenderer } from './tree-node-context';
import { TreeNodeProps } from './tree-types';
import { indentClass, indentStyle } from '@teambit/base-ui.graph.tree.indent';

const tree = [
	{
		id: 'folder',
		children: [
			{ id: 'item' },
			{ id: 'item2' },
			{ id: 'sub-folder', children: [{ id: 'nested-item' }] },
		],
	},
];

export const Preview = () => {
	return (
		<div>
			<TreeLayer childNodes={tree} depth={0} />
		</div>
	);
};

export const CustomNodes = () => {
	return (
		<TreeNodeContext.Provider value={CustomRenderer}>
			<TreeLayer childNodes={tree} depth={0} />
		</TreeNodeContext.Provider>
	);
};

const CustomRenderer: TreeNodeRenderer<any> = ({ node, depth }: TreeNodeProps) => {
	const { id, children } = node;
	const [isOpen, setOpen] = useState(true);

	if (!children) {
		return (
			<div className={indentClass}>
				☘️ ({depth}) {id}
			</div>
		);
	}

	return (
		<div>
			<div
				onClick={(e) => {
					e.stopPropagation();
					setOpen((x) => !x);
				}}
				className={indentClass}
			>
				{isOpen ? '📂' : '📁'} ({depth}) {id}
			</div>
			<div style={indentStyle(depth)}>
				{isOpen && <TreeLayer childNodes={children} depth={depth} />}
			</div>
		</div>
	);
};
