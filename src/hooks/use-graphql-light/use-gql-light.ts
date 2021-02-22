import { useEffect, useState } from 'react';
import { request } from 'graphql-request';
import { useDeepCompareMemo } from 'use-deep-compare';
import { useGqlServer } from './server-context';

export { gql } from 'graphql-request';

type Primitive = number | string | boolean;
export type Variables = {
	[key: string]: Primitive | Primitive[] | Variables | Variables[];
};
export type UseGqlRequestOptions = {
	variables?: Variables;
	server?: string;
};
type GqlState<T> = {
	data?: T;
	loading: boolean;
	error?: any;
};

export function useGqlRequest<T = any>(
	query: string,
	{ variables, server }: UseGqlRequestOptions = {}
) {
	const [state, setState] = useState<GqlState<T>>({ loading: false });

	const stableVariables = useDeepCompareMemo(() => variables, [variables]);
	const ctxServer = useGqlServer();

	useEffect(() => {
		let isMounted = true;
		setState((obj) => ({ ...obj, loading: true, error: undefined }));

		request(server || ctxServer, query, stableVariables)
			.then((result: T) => {
				if (isMounted) setState((obj) => ({ ...obj, data: result, loading: false }));
			})
			.catch((e) => {
				if (isMounted) setState((obj) => ({ ...obj, error: e, loading: false }));
			});

		return () => {
			isMounted = false;
		};
	}, [query, stableVariables]);

	return state;
}
