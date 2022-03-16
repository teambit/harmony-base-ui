---
labels: ['css', 'sizes', 'text']
description: 'A css component with sizes'
---

import { textSize } from './index';

A css component that export different sizes to use as a class.  
All the sizes can be overridden via css variables.  

For example, `md` size is `16px` by default:
```js live=true
<span className={textSize.md}>some text</span>
```

The exported sizes from this component:
```css
.xxs {
	font-size: var(--bit-p-xxs, 12px);
}

.xs {
	font-size: var(--bit-p-xs, 14px);
}

.sm {
	font-size: var(--bit-p-sm, 15px);
}

.md {
	font-size: var(--bit-p-md, 16px);
}

.lg {
	font-size: var(--bit-p-lg, 18px);
}

.xl {
	font-size: var(--bit-p-xl, 20px);
}

.xxl {
	font-size: var(--bit-p-xxl, 24px);
}
```