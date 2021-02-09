import React, { CSSProperties } from 'react';
import {
	Skeleton,
	WordSkeleton,
	LineSkeleton,
	CircleSkeleton,
	BlockSkeleton,
} from './skeleton';

const sideBySide: CSSProperties = {
	fontFamily: 'sans-serif',
	display: 'grid',
	gridTemplateColumns: '1fr 1fr',
	width: 'fit-content',
	margin: 'auto',
	gap: '4px 8px',
};

export function Card() {
	return (
		<div
			style={{
				width: '10em',
				height: '16em',
				border: '1px solid #babec9',
				overflow: 'hidden',
				borderRadius: 4,
			}}
		>
			<Skeleton style={{ height: '38%' }} />

			<div style={{ padding: '0.5em 0.5em' }}>
				<div style={{ margin: '0 0 1em 0' }}>
					<CircleSkeleton
						style={{ border: '1px solid white', marginRight: '0.5em' }}
					/>
					<WordSkeleton />
				</div>

				<LineSkeleton count={3} />

				<br />

				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<WordSkeleton length={8} /> <WordSkeleton length={3} />{' '}
					<WordSkeleton length={5} />
				</div>
			</div>
		</div>
	);
}

export function DocsSkeleton() {
	return (
		<div style={{ maxWidth: 1440, minWidth: 480 }}>
			<div style={{ fontSize: 36, marginBottom: 24 }}>
				<WordSkeleton />
			</div>

			<p style={{ margin: '0 0 94 0' }}>
				<LineSkeleton width="61%" />
				<LineSkeleton width="38%" />
				<LineSkeleton width="9%" />
			</p>

			<div style={{ fontSize: 18, marginTop: 46, marginBottom: 22 }}>
				<WordSkeleton length={8} />
			</div>
			<BlockSkeleton lines={15} />

			<div style={{ fontSize: 18, marginTop: 46, marginBottom: 22 }}>
				<WordSkeleton length={8} />
			</div>
			<BlockSkeleton lines={15} />
		</div>
	);
}

export const ScalesWithFontSize = () => {
	return (
		<div style={sideBySide}>
			<WordSkeleton style={{ fontSize: 12 }} />
			<div style={{ fontSize: 12 }}>lorem</div>
			<WordSkeleton style={{ fontSize: 14 }} />
			<div style={{ fontSize: 14 }}>ipsum</div>
			<WordSkeleton style={{ fontSize: 16 }} />
			<div style={{ fontSize: 16 }}>dolor</div>
			<WordSkeleton style={{ fontSize: 20 }} />
			<div style={{ fontSize: 20 }}>lorem</div>
			<WordSkeleton style={{ fontSize: 24 }} />
			<div style={{ fontSize: 24 }}>ipsum</div>
			<WordSkeleton style={{ fontSize: 32 }} />
			<div style={{ fontSize: 32 }}>dolor</div>
			<WordSkeleton style={{ fontSize: 40 }} />
			<div style={{ fontSize: 40 }}>lorem</div>
			<WordSkeleton style={{ fontSize: 50 }} />
			<div style={{ fontSize: 50 }}>ipsum</div>
			<WordSkeleton style={{ fontSize: 60 }} />
			<div style={{ fontSize: 60 }}>dolor</div>
			<WordSkeleton style={{ fontSize: 80 }} />
			<div style={{ fontSize: 80 }}>ipsum</div>
		</div>
	);
};

export const StacksWithLineHeight = () => {
	return (
		<div>
			<div style={{ ...sideBySide, lineHeight: 1.23 }}>
				<LineSkeleton count={3} />
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					<br />
					Integer nec odio. Praesent libero.
					<br />
					Sed cursus ante dapibus diam. Sed nisi
				</div>
			</div>
			<hr />
			<div style={{ ...sideBySide, lineHeight: 1.38 }}>
				<LineSkeleton count={3} />
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					<br />
					Integer nec odio. Praesent libero.
					<br />
					Sed cursus ante dapibus diam. Sed nisi
				</div>
			</div>
			<hr />
			<div style={{ ...sideBySide, lineHeight: 1.61 }}>
				<LineSkeleton count={3} />
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					<br />
					Integer nec odio. Praesent libero.
					<br />
					Sed cursus ante dapibus diam. Sed nisi
				</div>
			</div>
			<hr />
			<div style={{ ...sideBySide, lineHeight: 2.6 }}>
				<LineSkeleton count={3} />
				<div>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					<br />
					Integer nec odio. Praesent libero.
					<br />
					Sed cursus ante dapibus diam. Sed nisi
				</div>
			</div>
		</div>
	);
};

export const AdaptiveColor = () => {
	return (
		<div style={sideBySide}>
			<div
				style={{
					color: '#e62e5c',
					border: '1px solid currentColor',
					borderRadius: 4,
					padding: 8,
					width: 200,
				}}
			>
				<div style={{ fontSize: '1.6em' }}>
					<WordSkeleton />
				</div>

				<LineSkeleton count={2} style={{ margin: '8px 0' }} />

				<button style={{ float: 'right', color: 'inherit' }} disabled>
					<WordSkeleton />
				</button>
			</div>
			<div
				style={{
					color: '#e62e5c',
					border: '1px solid currentColor',
					borderRadius: 4,
					padding: 8,
					width: 200,
				}}
			>
				<div style={{ fontSize: '1.6em' }}>Warning</div>
				<p style={{ margin: '8px 0' }}>
					<div>Deletion is irreversible!</div>
					<div>Continue?</div>
				</p>
				<button style={{ float: 'right' }}>ok</button>
			</div>

			<div>-</div>
			<div>-</div>

			<div
				style={{
					color: '#37b26c',
					border: '1px solid currentColor',
					borderRadius: 4,
					padding: 8,
					width: 200,
				}}
			>
				<div style={{ fontSize: '1.6em' }}>
					<WordSkeleton />
				</div>

				<LineSkeleton count={2} style={{ margin: '8px 0' }} />

				<button style={{ float: 'right', color: 'inherit' }} disabled>
					<WordSkeleton />
				</button>
			</div>
			<div
				style={{
					color: '#37b26c',
					border: '1px solid currentColor',
					borderRadius: 4,
					padding: 8,
					width: 200,
				}}
			>
				<div style={{ fontSize: '1.6em' }}>Success</div>
				<p style={{ margin: '8px 0' }}>
					<div>New data created</div>
					<div>Great!</div>
				</p>
				<button style={{ float: 'right' }}>ok</button>
			</div>
		</div>
	);
};
