import { Layout } from '@teambit/base-ui.surfaces.split-pane.layout';

export type SplitterProps = {
	layout: Layout;
	className?: string;
	onDragStarted: () => void;
	onLayoutChange?: (nextLayout?: Layout) => void;
};
