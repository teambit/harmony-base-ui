import { createContext, useContext } from 'react';

const GqlServerCtx = createContext('/graphql');

export const GqlServerProvider = GqlServerCtx.Provider;
export const useGqlServer = () => useContext(GqlServerCtx);
