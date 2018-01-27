import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'normalize.css/normalize.css';
import { injectGlobal } from 'styled-components';
import { colors } from './styles/base';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
	html {
		font-size: 62.5%;

	}

	body {
		background-color: ${colors.lightGray};
		font-family: 'Montserrat', sans-serif;
		line-height: 1.7;
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: inherit;
	}
`;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// API Key: 9b474f02f07d39df7595de544515f7eb

//http://api.themoviedb.org/3/movie/550?api_key=9b474f02f07d39df7595de544515f7eb

//https://api.themoviedb.org/3/search/movie api_key=9b474f02f07d39df7595de544515f7eb&language=en-US&query=superman%20returns&page=1&include_adult=false
