import React, { useState } from 'react';
import { colorPalette } from './accent-color';
import { ThemeExample } from './accent-picker';

export function PrimaryAccent() {
	return <ThemeExample className={colorPalette.primary} />
}
export function ComplementaryAccent() {
	return <ThemeExample className={colorPalette.complementary} />
}

export function SuccessAccent() {
	return <ThemeExample className={colorPalette.success} />
}
export function ProcessAccent() {
	return <ThemeExample className={colorPalette.process} />
}
export function WarningAccent() {
	return <ThemeExample className={colorPalette.warning} />
}
export function ErrorAccent() {
	return <ThemeExample className={colorPalette.error} />
}

export function NeutralAccent() {
	return <ThemeExample className={colorPalette.neutral} />
}
export function NeutralHeavyAccent() {
	return <ThemeExample className={colorPalette.neutralHeavy} />
}

// export function ContinueAccent() {
// 	return <ThemeExample className={colorPalette.continue} />
// }
// export function ConsiderAccent() {
// 	return <ThemeExample className={colorPalette.consider} />
// }
// export function ActionAccent() {
// 	return <ThemeExample className={colorPalette.action} />
// }
