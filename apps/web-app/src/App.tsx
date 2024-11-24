import { Navbar } from '@conveyio/react';
import '@total-typescript/ts-reset';

import { isBlank } from 'common';

const filteredArray = [1, 2, undefined].filter(Boolean);

console.log('filteredArray', filteredArray);

const App = () => {
  return (
    <>
      <h1>Junas</h1>
      <p>undefined isBlank - {isBlank(undefined) ? 'true' : 'false'}</p>
      <p>false isBlank - {isBlank(false) ? 'true' : 'false'}</p>
      <p>true isBlank - {isBlank(true) ? 'true' : 'false'}</p>
      <p>Empty object isBlank - {isBlank({}) ? 'true' : 'false'}</p>
      <button id="sss">Junas</button>
      <Navbar />
    </>
  );
};

export default App;
