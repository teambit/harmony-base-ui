import React, { ReactNode } from 'react';

/** No-operation drop-in replacement for null container */
export function Noop({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
