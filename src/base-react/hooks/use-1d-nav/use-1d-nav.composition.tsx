import React from 'react';
import { use1dNav } from './use-1d-nav';
import { useKey1dNav } from './use-key-1d-nav';

const list = [1, 2, 3, 4];
const itemStyles = {
  padding: 2,
  borderRadius: 4,
  textAlign: 'center',
} as const;

export const BasicUsage = () => {
  const nav = use1dNav(list.length);
  const onKeydown = useKey1dNav(undefined, nav);

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {list.map((item, idx) => (
          <div
            key={idx}
            style={{ ...itemStyles, background: nav.isActive(idx) ? 'lightgreen' : undefined }}
            title={nav.isActive(idx) ? 'active' : undefined}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={{ padding: 8 }} />
      <div>
        <button onClick={nav.decrement}>⬆️</button>
        <br />
        <button onClick={nav.increment}>⬇️</button>
      </div>
      <div style={{ padding: 8 }} />
      <div>
        <input placeholder="keyboard nav here" readOnly onKeyDown={onKeydown} />
      </div>
    </div>
  );
};
