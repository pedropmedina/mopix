import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
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
		currentFilter: 'mostPopular',
		openNav: false,
		pageNum: 1,
	};

	// main api call
	fetchSearchMovies = (
		searchText = '',
		currentFilter = this.state.currentFilter,
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
				if (page > 1) {
					const updateMovieList = [
						...this.state.movies,
						...response.data.results,
					].filter((movie, index, self) => {
						return (
							index ===
							self.findIndex(m => {
								return m.id === movie.id;
							})
						);
					});
					this.setState(() => ({
						movies: updateMovieList,
					}));
				} else {
					this.setState(() => ({
						movies: response.data.results,
					}));
				}
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

	// initial call to api
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
			pageNum: 1,
		}));
	};

	// top rated movies
	handleTopRatedMovies = () => {
		const currentFilter = 'topRated';
		this.fetchSearchMovies(undefined, currentFilter);
		this.setState(() => ({
			currentFilter,
			pageNum: 1,
		}));
	};

	// most popular movies
	handleMostPopularMovies = () => {
		const currentFilter = 'mostPopular';
		this.fetchSearchMovies(undefined, currentFilter);
		this.setState(() => ({
			currentFilter,
			pageNum: 1,
		}));
	};

	// now playing movies
	handleNowPlayingMovies = () => {
		const currentFilter = 'nowPlaying';
		this.fetchSearchMovies(undefined, currentFilter);
		this.setState(() => ({
			currentFilter,
			pageNum: 1,
		}));
	};

	// upcoming movies
	handleUpcomingMovies = () => {
		const currentFilter = 'upcoming';
		this.fetchSearchMovies(undefined, currentFilter);
		this.setState(() => ({
			currentFilter,
			pageNum: 1,
		}));
	};

	// handle openNav
	handleNav = () => {
		this.setState(() => ({
			openNav: !this.state.openNav,
		}));
	};

	// handle load more pages
	handleLoadMore = num => {
		const pageNum = num;
		this.fetchSearchMovies(undefined, this.state.currentFilter, pageNum);
		this.setState(() => ({
			pageNum,
		}));
	};

	render() {
		return (
			<MainWrapper>
				<NavBar
					searchText={this.state.searchText}
					currentFilter={this.state.currentFilter}
					openNav={this.state.openNav}
					handleNav={this.handleNav}
					onClickTopRated={this.handleTopRatedMovies}
					onClickMostPopular={this.handleMostPopularMovies}
					onClickNowPlaying={this.handleNowPlayingMovies}
					onClickUpcoming={this.handleUpcomingMovies}
				/>
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
					pageNum={this.state.pageNum}
					searchText={this.state.searchText}
					handleLoadMore={this.handleLoadMore}
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
