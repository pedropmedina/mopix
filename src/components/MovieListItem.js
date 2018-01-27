import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/base';

//--------------------------------
//------------Styles--------------
//--------------------------------
const Li = styled.li`
	list-style: none;
	background-color: transparent;
	width: 30rem;
	height: 50rem;
	margin: 1.5rem;
	position: relative;
	perspective: 150rem;

	> div {
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		box-shadow: 0 0.7rem 1.7rem rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		/* overflow: hidden; */
		transition: all 0.8s;
	}

	> div:last-child {
		transform: rotateY(180deg);
	}

	&:hover > div:first-child {
		transform: rotateY(-180deg);
	}

	&:hover > div:last-child {
		transform: rotateY(0);
	}
`;

const CardFront = styled.div`
	> img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	> div {
		width: 100%;
		height: 10%;
		font-size: 1.2rem;
		/* padding: 2rem 1.5rem; */
		background-color: ${colors.lightOchre};
		color: ${colors.lightestGray};
		display: flex;
		/* justify-content: space-around; */
		align-items: center;
		position: absolute;
		left: 0;
		bottom: 0;

		> div:first-child {
			flex: 3 0 85%;
		}

		> div:last-child {
			flex: 1 0 15%;
		}

		> div > i {
			margin: 0 0.5rem;
		}

		> div:first-child > span:last-child {
			font-size: 1rem;
			font-style: italic;
			margin-left: 0.3rem;
		}
	}
`;

const CardBack = styled.div`
	background-color: ${colors.lightOchre};
	overflow-y: hidden;
	color: ${colors.darkPurple};
	font-size: 1.2rem;

	h4 {
		display: inline-block;
		margin-right: 1rem;
		font-weight: 300;
		color: ${colors.midPurple};
	}

	span {
		font-weight: 400;
		color: ${colors.lightestGray};
	}

	> p {
		padding: 1.5rem;
		font-size: 1.3rem;
		text-overflow: ellipse;
	}
`;

const MovieBackdrop = styled.div`
	position: relative;

	img {
		filter: opacity(70%);
	}

	h3 {
		position: absolute;
		top: 16.7rem;
		right: 2rem;
		transform: translateY(-50%);
		font-size: 1.5rem;
		background-color: ${colors.darkPurple};
		color: ${colors.lightestGray};
		/* box-decoration-break: clone; */
		padding: 0.5rem 1.5rem;
	}
`;

const MovieGenres = styled.div`
	margin-top: 3rem;
	padding: 0 1.5rem;
`;

const MovieStats = styled.div`
	padding: 0 1.5rem;
`;

//--------------------------------
//--------Functionality-----------
//--------------------------------
const MovieListItem = props => {
	console.log(props.genres);
	return (
		<Li>
			<CardFront>
				<img src={props.posterUrl} alt="" />
				<div>
					<div>
						<i className="ion-ios-film" />
						<span>{props.title}</span>
						<span>({props.releaseDate.slice(0, 4)})</span>
					</div>
					<div>
						<i className="ion-star" />
						<span>{props.votes}</span>
					</div>
				</div>
			</CardFront>

			<CardBack>
				<MovieBackdrop>
					<img src={props.backdropUrl} alt="" />
					<h3>{props.title}</h3>
				</MovieBackdrop>
				<MovieGenres>
					<h4>Genre:</h4>
					<span>{props.genres.join(', ')}</span>
				</MovieGenres>
				<MovieStats>
					<div>
						<h4>Average Rating:</h4>
						<span>{props.votes} / 10</span>
					</div>
					<div>
						<h4>Total Votes:</h4>
						<span>{props.votesCount}</span>
					</div>
					<div>
						<h4>Released Year:</h4>
						<span>{props.releaseDate.slice(0, 4)}</span>
					</div>
				</MovieStats>

				<p>
					{props.overview.split(' ').length > 40
						? `${props.overview
								.split(' ')
								.slice(0, 40)
								.join(' ')}...`
						: props.overview}
				</p>
			</CardBack>
		</Li>
	);
};
export default MovieListItem;

//9b474f02f07d39df7595de544515f7eb
