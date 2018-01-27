import React from 'react';
import MovieListItem from './MovieListItem';
import styled, { css } from 'styled-components';

//--------------------------------
//------------Styles--------------
//--------------------------------
const Ul = styled.ul`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	margin: 0 auto;
	padding: 0;
	padding-top: 13rem;
	max-width: 150rem;
	overflow: hidden;
	${props =>
		props.openNav &&
		css`
			transform: scale(0.98);
			transform-origin: left top;
			opacity: 0.3;
		`};
	transition: all 0.3s;
`;

//--------------------------------
//--------Functionality-----------
//--------------------------------

const MovieList = props => {
	const movies = props.movies.map(movie => {
		if (!movie.poster_path || !movie.backdrop_path) {
			return false;
		} else {
			const genres = [];
			movie.genre_ids.forEach(id => {
				props.genres.forEach(obj => {
					if (id === obj.id) {
						genres.push(obj.name);
					}
				});
			});
			return (
				<MovieListItem
					key={movie.id}
					title={movie.title}
					overview={movie.overview}
					votes={movie.vote_average}
					votesCount={movie.vote_count}
					releaseDate={movie.release_date}
					genres={genres}
					posterUrl={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
					backdropUrl={`https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`}
				/>
			);
		}
	});
	return <Ul openNav={props.openNav}>{movies}</Ul>;
};

export default MovieList;
