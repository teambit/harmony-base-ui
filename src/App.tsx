import React from 'react';
import './App.css';
import { Theme } from './themes/theme-provider';
import Button from './input/button';

function App() {
	return (
		<Theme>
			{/* <div>hello world</div> */}
      <Button>hello world</Button>
		</Theme>
	);
}

export default App;
