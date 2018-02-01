import React from 'react';
import MovieListItem from './MovieListItem';
import styled, { css } from 'styled-components';
import { colors } from '../../styles/base';

//--------------------------------
//------------Styles--------------
//--------------------------------
const Wrapper = styled.div`
	transition: all 0.3s;
	${props =>
		props.openNav &&
		css`
			transform: scale(0.99);
			transform-origin: center;
			opacity: 0.3;
		`};
`;

const Ul = styled.ul`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	margin: 0 auto;
	padding: 0;
	padding-bottom: 2rem;
	padding-top: 13rem;
	max-width: 150rem;
	overflow: hidden;
`;

const LoadBtn = styled.button`
	border: none;
	background-color: transparent;
	border: 0.2rem solid ${colors.lightOchre};
	color: ${colors.lightOchre};
	padding: 1rem 2rem;
	font-size: 1.3rem;
	text-transform: uppercase;
	display: block;
	margin: 3rem auto;
	opacity: ${props => (props.movies.length === 0 ? 0 : 1)};
	transition: opacity 0.5s;
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
					id={movie.id}
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

	// handle number of page load
	const onClickLoadMore = () => {
		let page = props.pageNum + 1;
		props.handleLoadMore(page);
	};

	return (
		<Wrapper openNav={props.openNav}>
			<Ul>{movies}</Ul>
			{!props.searchText && (
				<LoadBtn onClick={onClickLoadMore} movies={props.movies}>
					Load More
				</LoadBtn>
			)}
		</Wrapper>
	);
};

export default MovieList;
