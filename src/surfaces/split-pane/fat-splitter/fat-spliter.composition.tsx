import React from 'react';

import { FatSplitter } from './fat-splitter';

export const vertical = () => {
  return (
    <div data-split-layout="column" style={{ width: 100, height: 100, display: 'flex', flexDirection: 'column' }}>
      <FatSplitter />
    </div>
  );
};

export const horizontal = () => {
  return (
    <div data-split-layout="row" style={{ width: 100, height: 100, display: 'flex', flexDirection: 'row' }}>
      <FatSplitter />
    </div>
  );
};
