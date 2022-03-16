import React from 'react';
import { useGqlRequest, gql } from './use-gql-light';
import { GqlServerProvider } from './server-context';

const serverUrl = 'https://countries.trevorblades.com/';
const query = gql`
	query {
		countries {
			name
		}
	}
`;

export const Preview = () => {
	return (
		<GqlServerProvider value={serverUrl}>
			<CountriesGql />
		</GqlServerProvider>
	);
};

const CountriesGql = () => {
	const { loading, data, error } = useGqlRequest(query);

	if (error) return <div>Error! {error.toString()}</div>;
	if (loading) return <div>loading...</div>;

	return (
		<div>
			<div>Data:</div>
			<br />
			<div>{JSON.stringify(data)}</div>
		</div>
	);
};
