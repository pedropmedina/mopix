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
	margin: 1.9rem;
	position: relative;
	perspective: 150rem;

	> div {
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		box-shadow: 0 0.7rem 1.5rem rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		/* border-radius: 0.4rem;
		overflow: hidden; */
		transition: all 0.8s 0.3s;
	}

	> div:last-child {
		transform: rotateY(180deg);
	}

	/* &:hover > div:first-child {
		transform: rotateY(-180deg);
	}

	&:hover > div:last-child {
		transform: rotateY(0);
	} */
`;

const CardFront = styled.div`
	> img {
		height: 90%;
		width: 100%;
		object-fit: cover;
		border-radius: 0.4rem 0.4rem 0 0;
	}

	> div {
		width: 100%;
		height: 10%;
		font-size: 1.9rem;
		background-color: ${colors.darkPurple};
		color: ${colors.lightOchre};
		padding: 2rem 5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		left: 0;
		bottom: 0;
		border-radius: 0 0 0.4rem 0.4rem;

		span {
			font-size: 1.4rem;
			font-style: italic;
			margin-left: 0.5rem;
		}

		> div {
			&:not(:last-child) {
				color: ${colors.midPurple};
			}
		}
	}
`;

const Icons = styled.i`
	position: relative;
	padding: 0.2rem;

	> span {
		visibility: hidden;
		width: 12rem;
		background-color: ${colors.midPurple};
		color: ${colors.midGray};
		text-align: center;
		border-radius: 0.4rem;
		padding: 0.5rem 0;
		position: absolute;
		top: 120%;
		left: 50%;
		transform: translateX(-54%);
		opacity: 0;
		z-index: 1;
		transition: opacity 0.3s;

		&::after {
			content: '';
			position: absolute;
			bottom: 100%;
			left: 50%;
			transform: translateX(-50%);
			border-width: 0.5rem;
			border-style: solid;
			border-color: transparent transparent ${colors.midPurple} transparent;
		}
	}

	&:hover span {
		visibility: visible;
		opacity: 1;
	}

	&:hover {
		color: ${props =>
			props.checkmark
				? '#29722a'
				: props.list ? colors.midGray : props.likes ? '#bf3b59' : false};
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
	return (
		<Li>
			<CardFront>
				<img src={props.posterUrl} alt="" />
				<div>
					<div>
						<Icons className="ion-ios-checkmark" checkmark>
							<span>save to list</span>
						</Icons>
					</div>
					<div>
						<Icons className="ion-ios-list" list>
							<span>create list</span>
						</Icons>
					</div>
					<div>
						<Icons className="ion-ios-heart" likes>
							<span>love it</span>
						</Icons>
					</div>
					<div>
						<Icons className="ion-star">
							<span>rating</span>
						</Icons>
						<span>{props.votes} / 10</span>
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
