---
labels: ['react', 'roboto mono', 'font']
description: 'RobotoMono font'
---

### Overview

This component envelope the Roboto mono-space font of Bit projects.

```tsx
import { Roboto } from '@teambit/base-ui.theme.fonts.roboto';

function HtmlTemplate({ children }) {
	return (
		<html>
			<head>
				<Roboto />
			</head>
			<body>{children}</body>
		</html>
	);
}
```

You can also add it the root of your app, but you will get performance when using it in the head tag.