Isomorphic link component, with the standard html `<a/>` interface.

Different projects may have different routing systems. For examples, a legacy project may use an older version of `React Router`, or a completely different system all together.  
The base-ui `routing.link` components mitigates this problem by receiving the underlying implementation from the `routing-provider` context, and by default uses a regular `<a/>` tag, so it will work out of the box in Compositions and other examples.  
It also adheres to the standard props of the `<a/>` tag, so we can replace implementation without breaking the api.

## Additional props:

-   `external` - open the link in a new tab
-   `replace` - replace the history entry when opening the link.
