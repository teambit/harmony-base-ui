import React, { createContext, ReactNode, useMemo } from 'react';

export interface TreeContextType {
  onSelect?: (id: string, event?: React.MouseEvent) => any;
  selected?: string;
}

export const TreeContext = createContext<TreeContextType>({
  onSelect: () => {},
  selected: undefined,
});

export function TreeContextProvider({
  onSelect,
  selected,
  children,
}: TreeContextType & { children: ReactNode }) {
  const context = useMemo(() => ({ onSelect, selected }), [onSelect, selected]);

  return <TreeContext.Provider value={context}>{children}</TreeContext.Provider>;
}
