import React, { useState } from 'react';
import { CancelablePromise } from './cancelable-promise';
import { useQueuedExecution } from './use-queued-execution';

function delay() {
  return new Promise((resolve) => setTimeout(resolve, 300 + Math.random() * 1000));
}

const results = [
  'foobar',
  'foo',
  'bar',
  'baz',
  'qux',
  'quux',
  'quuz',
  'corge',
  'grault',
  'garply',
  'waldo',
  'fred',
  'plugh',
  'xyzzy',
  'babble',
  'thud',
];

async function longFunction() {
  await delay();

  const rnd = Math.round(Math.random() * results.length);
  return results[rnd];
}

export const BasicUseQueuedExecution = () => {
  const [result, setResult] = useState('');
  const [executed, setExecuted] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [canceled, setCanceled] = useState(0);

  const queuedFunction = useQueuedExecution(longFunction);

  const handleClick = () => {
    setExecuted((x) => x + 1);
    queuedFunction().then(
      (result) => {
        setCompleted((x) => x + 1);
        setResult(result);
      },
      () => setCanceled((x) => x + 1)
    );
  };

  return (
    <div>
      <div>executed: {executed} time</div>
      <div>canceled: {canceled} time</div>
      <div>completed: {completed} time</div>
      <br />
      {result && <div>result is "{result}"</div>}
      <button onClick={handleClick}>execute</button>
    </div>
  );
  // <UseQueuedExecution>hello world!</UseQueuedExecution>;
};
