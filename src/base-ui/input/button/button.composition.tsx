import React, { useState } from 'react';
import Button from './button';

export const BasicButton = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Button onClick={() => alert('on click')}>Click</Button>
  </div>
);

export const ButtonTest = () => {
  const [on, setOn] = useState(true);

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {on && <Button onClick={() => setOn((x) => !x)}>Click</Button>}
    </div>
  );
};
