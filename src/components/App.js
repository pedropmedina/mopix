import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
// import FilterBar from './FilterBar';
import NavBar from './NavBar';

const PATH_BASE = 'http://api.themoviedb.org/3';
const PATH_POPULAR = '/movie/popular';
const PATH_TOP_RATED = '/movie/top_rated';
const PATH_NOW_PLAYING = '/movie/now_playing';
const PATH_UPCOMING = '/movie/upcoming';
const PATH_SEARCH = '/search/movie';
const PATH_GENRES = '/genre/movie/list';
const API_KEY = 'api_key=';
const PARAM_LANGUAGE = 'language=';
const PARAM_PAGE = 'page=';
const PARAM_INCLUDE_ADULT = 'include_adult=';
const PARAM_SEARCH = 'query=';

const MainWrapper = styled.div`
	overflow: hidden;
	position: relative;
`;

class App extends React.Component {
	state = {
		movies: [],
		genres: [],
		searchText: '',
		currentFilter: '',
		openNav: false,
	};

	// main api call
	fetchSearchMovies = (
		searchText = '',
		currentFilter = 'mostPopular',
		page = 1,
		language = 'en-US',
		api_key = '9b474f02f07d39df7595de544515f7eb',
		includeAdult = false,
	) => {
		let URL;
		if (!searchText && currentFilter === 'mostPopular') {
			URL = `${PATH_BASE}${PATH_POPULAR}?${API_KEY}${api_key}&${PARAM_LANGUAGE}${language}&${PARAM_PAGE}${page}&${PARAM_INCLUDE_ADULT}${includeAdult}`;
		} else if (!searchText && currentFilter === 'topRated') {
			URL = `${PATH_BASE}${PATH_TOP_RATED}?${API_KEY}${api_key}&${PARAM_LANGUAGE}${language}&${PARAM_PAGE}${page}&${PARAM_INCLUDE_ADULT}${includeAdult}`;
		} else if (!searchText && currentFilter === 'nowPlaying') {
			URL = `${PATH_BASE}${PATH_NOW_PLAYING}?${API_KEY}${api_key}&${PARAM_LANGUAGE}${language}&${PARAM_PAGE}${page}&${PARAM_INCLUDE_ADULT}${includeAdult}`;
		} else if (!searchText && currentFilter === 'upcoming') {
			URL = `${PATH_BASE}${PATH_UPCOMING}?${API_KEY}${api_key}&${PARAM_LANGUAGE}${language}&${PARAM_PAGE}${page}&${PARAM_INCLUDE_ADULT}${includeAdult}`;
		} else {
			URL = `${PATH_BASE}${PATH_SEARCH}?${API_KEY}${api_key}&${PARAM_LANGUAGE}${language}&${PARAM_SEARCH}${searchText}&${PARAM_PAGE}${page}&${PARAM_INCLUDE_ADULT}${includeAdult}`;
		}
		axios
			.get(URL)
			.then(response => {
				this.setState({ movies: response.data.results });
				console.log(response);
			})
			.catch(err => console.log(err));
	};

	// fetch genres
	fetchMoviesGenre = (
		language = 'en-US',
		api_key = '9b474f02f07d39df7595de544515f7eb',
	) => {
		const URL = `${PATH_BASE}${PATH_GENRES}?${API_KEY}${api_key}&${PARAM_LANGUAGE}${language}`;
		axios
			.get(URL)
			.then(response => {
				this.setState({ genres: response.data.genres });
			})
			.catch(err => console.log(err));
	};

	componentDidMount() {
		this.fetchSearchMovies();
		this.fetchMoviesGenre();
	}

	// search movies
	updateSearchText = text => {
		const searchText = text;
		this.fetchSearchMovies(searchText);
		this.setState(() => ({
			searchText,
			currentFilter: '',
		}));
	};

	// top rated movies
	handleTopRatedMovies = () => {
		const currentFilter = 'topRated';
		this.fetchSearchMovies(undefined, currentFilter);
		this.setState(() => ({
			currentFilter,
		}));
	};

	// most popular movies
	handleMostPopularMovies = () => {
		this.fetchSearchMovies();
	};

	// now playing movies
	handleNowPlayingMovies = () => {
		const currentFilter = 'nowPlaying';
		this.fetchSearchMovies(undefined, currentFilter);
		this.setState(() => ({
			currentFilter,
		}));
	};

	// upcoming movies
	handleUpcomingMovies = () => {
		const currentFilter = 'upcoming';
		this.fetchSearchMovies(undefined, currentFilter);
		this.setState(() => ({
			currentFilter,
		}));
	};

	// handle openNav
	handleNav = () => {
		this.setState(() => ({
			openNav: !this.state.openNav,
		}));
	};

	render() {
		return (
			<MainWrapper>
				{/* <FilterBar
					onClickTopRated={this.handleTopRatedMovies}
					onClickMostPopular={this.handleMostPopularMovies}
					onClickNowPlaying={this.handleNowPlayingMovies}
					onClickUpcoming={this.handleUpcomingMovies}
				/> */}
				<NavBar handleNav={this.handleNav} openNav={this.state.openNav} />
				<SearchBar
					searchText={this.state.searchText}
					onSearchTextChange={this.updateSearchText}
					handleNav={this.handleNav}
					openNav={this.state.openNav}
				/>
				<MovieList
					movies={this.state.movies}
					genres={this.state.genres}
					openNav={this.state.openNav}
				/>
			</MainWrapper>
		);
	}
}

export default App;

/*
	Data needed to work with images:
		1. base_url
		2. file_size
		3. file_path
		--> this's an example: https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
*/

// 9b474f02f07d39df7595de544515f7eb
