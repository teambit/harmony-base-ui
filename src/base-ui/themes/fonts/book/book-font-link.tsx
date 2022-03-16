import React from 'react';

// make sure to update the static storage when updating book-font.css

export const staticBookFontClass = 'bit-book-font';
export const staticBookFontUrl = 'https://static.bit.dev/fonts/book-font.css';

/** add this link tag to your `<head/>` to include the font. You can use class `.bit-book-font` to apply it */
export function StaticBookFont(props: React.LinkHTMLAttributes<HTMLLinkElement>) {
	return <link rel="prefetch" {...props} href={staticBookFontUrl} />;
}
