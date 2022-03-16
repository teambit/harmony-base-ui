import React from 'react';
import { indentClass, indentStyle } from './indent';

export const Preview = () => {
	return (
		<div>
			<div
				className={indentClass}
				style={{ ...indentStyle(0), paddingRight: 4, background: '#eceaff' }}
			>
				1
			</div>
			<div
				className={indentClass}
				style={{ ...indentStyle(1), paddingRight: 4, background: '#c9c3f6' }}
			>
				2
			</div>
			<div
				className={indentClass}
				style={{ ...indentStyle(2), paddingRight: 4, background: '#897dec' }}
			>
				3
			</div>
			<div
				className={indentClass}
				style={{ ...indentStyle(3), paddingRight: 4, background: '#6c5ce7' }}
			>
				4
			</div>
		</div>
	);
};

export const UsingNesting = () => {
	return (
		<div>
			<div
				className={indentClass}
				style={{ ...indentStyle(0), paddingRight: 4, background: '#eceaff' }}
			>
				1
				<div
					className={indentClass}
					style={{ ...indentStyle(1), paddingRight: 4, background: '#c9c3f6' }}
				>
					2
					<div
						className={indentClass}
						style={{ ...indentStyle(2), paddingRight: 4, background: '#897dec' }}
					>
						3
						<div
							className={indentClass}
							style={{
								...indentStyle(3),
								paddingRight: 4,
								background: '#6c5ce7',
							}}
						>
							4
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
