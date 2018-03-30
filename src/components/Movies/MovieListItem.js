import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/base';

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
	user-select: none;

	> div {
		width: 100%;
		height: 100%;
		backface-visibility: hidden;
		box-shadow: 0 0.9rem 1.9rem rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.8s 0.3s;
	}
`;

const Card = styled.div`
	> img {
		height: 90%;
		width: 100%;
		object-fit: cover;
		border-radius: 0.4rem 0.4rem 0 0;
	}

	> div:nth-of-type(1) {
		display: inline-block;
		position: absolute;
		top: 5%;
		right: 2rem;
		font-size: 1.7rem;
		color: ${colors.midPurple};
		width: 3.5rem;
		height: 3.5rem;
		background-color: ${colors.transLightGray};
		border-radius: 50%;
		box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.4);
		cursor: pointer;

		> i {
			display: inline-block;
			position: relative;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}

	> div:nth-of-type(2) {
		display: inline-block;
		position: absolute;
		bottom: 10%;
		right: 2rem;
		font-size: 2.3rem;
		color: ${colors.midPurple};

		&:hover {
			color: ${colors.lightOchre};
		}

		&:hover + div {
			opacity: 0.92;
			visibility: visible;
		}
	}

	> div:nth-of-type(3) {
		position: absolute;
		bottom: 13%;
		right: 5rem;
		width: 80%;
		line-height: 1.5;
		font-size: 1.1rem;
		letter-spacing: 0.1rem;
		padding: 1rem 2rem;
		background-color: ${colors.midPurple};
		color: ${colors.midGray};
		border-radius: 0.6rem;
		opacity: 0;
		visibility: hidden;
		transition: opacity 0.5s;

		> h3 {
			margin-bottom: 0.3rem;
			color: ${colors.lightGray};

			> span {
				margin-left: 0.2rem;
				font-style: italic;
				font-weight: 300;
				font-size: 1rem;
			}
		}
	}

	> div:nth-of-type(4) {
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
				cursor: pointer;
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
		top: 130%;
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
				: props.createList ? colors.midGray : props.likes ? '#bf3b59' : false};
	}
`;

//--------------------------------
//--------Functionality-----------
//--------------------------------
const MovieListItem = props => {
	return (
		<React.Fragment>
			<Li>
				<Card>
					<img src={props.posterUrl} alt="" />
					<div onClick={() => console.log(props.id)}>
						<i className="ion-arrow-resize" />
					</div>
					<div>
						<i className="ion-ios-information" />
					</div>
					<div>
						<h3>
							{props.title}
							<span>({props.releaseDate.slice(0, 4)})</span>
						</h3>
						<p>{props.overview}</p>
					</div>
					<div>
						<div>
							<Icons className="ion-ios-checkmark" checkmark>
								<span>save to list</span>
							</Icons>
						</div>
						<div>
							<Icons className="ion-ios-list" createList>
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
				</Card>
			</Li>
		</React.Fragment>
	);
};
export default MovieListItem;

//9b474f02f07d39df7595de544515f7eb
