Some components may have many decorators.  
This makes the code less readable, and requires modification when extending.
```tsx
function BaseContext({ children }: { children: ReactNode }) {
	return (
		<ThemeProvider>
			<NetworkClientProvider client={new Fetcher()}>
				<AnalyticsProvider>
					<CookiesProvider>
						{children}
					</CookiesProvider>
				</AnalyticsProvider>
			</NetworkClientProvider>
		</ThemeProvider>
	)
}
```

We can simplify this code by using the `Composer` component:
```tsx
const globalContexts = [ThemeProvider, [NetworkClientProvider, new Fetcher()], AnalyticsProvider, CookiesProvider]

function BaseContext({ children }: { children: ReactNode }) {
	return (
		<Composer components={globalContexts}>
			{children}
		</Composer>
	)
}
```

It also makes the code extendable by allowing a variable number of decorators as a prop:
```tsx
function BaseContext({ children, contexts }: { children: ReactNode, contexts: Wrapper[] }) {
	return (
		<Composer components={contexts}>
			{children}
		</Composer>
	)
}
```

### Performance

The component will re-render when the array is modified. This is usually ok, just make sure to:

- Use memoization when combining arrays:
```tsx
const combinedContexts = useMemo(() => globalContexts.concat(contexts), [globalContexts, contexts]);

return <Composer components={combinedContexts}>...</Composer>
```

- Use only `{children}` as children. Using anything else may trigger a re-render:
```tsx
return (
	<Composer>
		<div>
			a new {"<div>"} is created on every render,
			so composer will be re-rendered!
			{children}
		</div>
	</Composer>
)
```
