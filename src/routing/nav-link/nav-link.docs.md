Isomorphic link component, with the standard html `<a/>` interface.

```tsx
import { Link } from '@teambit/base-ui.routing.link';
import { NavLink } from '@teambit/base-ui.routing.nav-link';
import { RoutingProvider } from '@teambit/base-ui.routing.routing-provider';

const routingSystem = { Link: ReactRouterLink, NavLink: ReactRouterNavLink, useLocation: useReactRouterLocation };

function Page(){
	return (
		<div>
			<h1>Awesome page</h1>
			<RoutingProvider value={ routingSystem }>

				{/* will render ReactRouter link */}
				<Link href="/account">account</Link>

				{/* will render ReactRouter NavLink */}
				<NavLink href="/pricing">pricing page</NavLink>

			</RoutingProvider>


			<RoutingProvider value={ wouterRoutingSystem }>

				{/* will render Wouter link */}
				<Link href="/account">account</Link>

			</RoutingProvider>


			{/* will render NativeLink */}
			<Link href="/legals">legals</Link>
		</div>
	)
}
```

## Why isomorphic link?

Different projects may have different routing systems.  
For examples, a legacy project may use an older version of `React Router`, and will simply not work with ReactRouter v5 link.

The base-ui `routing.link` receives the underlying implementation from the `routing-provider` context, so it will work out of the box everywhere!  
Didn't setup context? No problems, the default is `routing.native-link`, which will give you the same behavior as the browser's default `<a/>` tag.

## Additional props:

-   `external` - open the link in a new tab
-   `replace` - replace the history entry when opening the link.
