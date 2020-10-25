import React from 'react';
import './App.css';
import { Button } from 'antd';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Button type="link">
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
				</Button>
			</header>
		</div>
	);
}

export default App;
