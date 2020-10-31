import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.less';
import AppLayout from './components/AppLayout';
import SatelliteInfo from './features/satellites/SatelliteInfo/SatelliteInfo';
import SearchBar from './components/SearchBar/SearchBar';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';

function App(): JSX.Element {
	return (
		<Router>
			<div className="App">
				<AppLayout>
					<Switch>
						<Route exact path="/" component={SearchBar} />
						<Route exact path="/CATNR/:id" component={SatelliteInfo} />
						<Route component={NotFoundPage} />
					</Switch>
				</AppLayout>
			</div>
		</Router>
	);
}

export default App;
