import React from 'react';
import styled from 'styled-components';
import { colors } from '../../styles/base';

//--------------------------------
//------------Styles--------------
//--------------------------------
const Wrapper = styled.div`
	position: fixed;
	top: 0;
	z-index: 100;
	width: 100%;
	box-shadow: 0 .5rem .3rem rgba(0, 0, 0, .2);
	opacity: ${props => (props.openNav ? '.3' : 1)};
	}
`;

const Span = styled.span`
	font-size: 2.5rem;
	color: ${colors.midPurple};
	position: absolute;
	left: 6rem;
	top: 50%;
	transform: translateY(-50%);
`;

const Input = styled.input`
	background-color: ${colors.darkPurple};
	color: ${colors.midGray};
	font-size: 1.8rem;
	font-weight: 300;
	border: none;
	border-bottom: 0.4rem solid transparent;
	height: 8rem;
	outline: none;
	text-indent: 9rem;
	width: 100%;
	transition: all 0.4s;
	&::placeholder {
		color: ${colors.midPurple};
		font-style: italic;
		letter-spacing: 0.1rem;
	}
`;

//--------------------------------
//--------Functionality-----------
//--------------------------------
const SearchBar = props => {
	return (
		<Wrapper openNav={props.openNav}>
			<Span className="ion-ios-search-strong" />
			<Input
				type="text"
				value={props.searchText}
				placeholder="Search for movies..."
				autoFocus
				onChange={e => props.onSearchTextChange(e.target.value)}
			/>
		</Wrapper>
	);
};

export default SearchBar;
