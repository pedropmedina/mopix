import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/base';

//--------------------------------
//------------Styles--------------
//--------------------------------
const FilterBarDiv = styled.div`
	/* background: ${colors.midPurple}; */
	background-color: ${colors.midPurple};
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-items: center;
	padding: 4rem;
`;

const Button = styled.button`
	background: transparent;
	border: none;
	border-bottom: 0.2rem solid transparent;
	/* border-radius: 0.4rem; */
	color: ${colors.lightOchre};
	cursor: pointer;
	font-size: 1.6rem;
	font-weight: 500;
	letter-spacing: 0.1rem;
	margin: 1.5rem;
	outline: none;
	padding-bottom: 1rem;
	text-transform: uppercase;
	user-select: none;
	transition: all 0.2s;
	&:hover {
		border-bottom: 0.2rem solid ${colors.midGray};
		color: ${colors.midGray};
	}
`;

//--------------------------------
//--------Functionality-----------
//--------------------------------
const FilterBar = props => {
	return (
		<FilterBarDiv>
			<Button onClick={props.onClickTopRated}>top rated</Button>
			<Button onClick={props.onClickMostPopular}>most popular</Button>
			<Button onClick={props.onClickNowPlaying}>now playing</Button>
			<Button onClick={props.onClickUpcoming}>upcoming</Button>
		</FilterBarDiv>
	);
};

export default FilterBar;
