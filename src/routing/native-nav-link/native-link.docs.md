Native HTML `<a/>` navigation link, matching the behavior of React Router `<NavLink/>`.  
Like React Router's `NavLink`, this is a special version of link, that adds styles when the `href` matches the current URL.

Use this when you want the browser's default behavior!

```tsx
{/* will light up when url is '/teambit' */}
<NativeLink href="/teambit" activeClass={styles.activeLink}>Teambit</NativeLink>

{/* will light up when url is '/enterprise' */}
<NativeLink href="/enterprise" activeClass={styles.activeLink}>enterprise</NativeLink>
```
