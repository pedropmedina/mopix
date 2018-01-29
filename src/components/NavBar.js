import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../styles/base';

const NavIcon = styled.div`
	width: 4.5rem;
	height: 4.5rem;
	border-radius: 50%;
	color: ${colors.lightOchre};
	border: ${props =>
		props.openNav
			? '0.2rem solid' + colors.darkPurple
			: '0.2rem solid' + colors.lightOchre};
	cursor: pointer;
	position: fixed;
	top: 4rem;
	right: ${props => (props.openNav ? '33vw' : '6rem')};
	transform: translateY(-50%);
	transition: right 0.3s cubic-bezier(0.97, 0.01, 0, 1);
	z-index: 300;

	> span {
		display: inline-block;
		width: 60%;
		height: 0.2rem;
		background-color: ${props =>
			props.openNav ? 'transparent' : colors.lightOchre};
		position: relative;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		&::before,
		&::after {
			content: '';
			display: inline-block;
			width: 100%;
			height: 0.2rem;
			background-color: ${props =>
				props.openNav ? colors.darkPurple : colors.lightOchre};
			position: absolute;
			left: 0;
			transition: transform 0.2s;
		}

		&::before {
			top: -0.7rem;
			left: 0;
			${props =>
				props.openNav &&
				css`
					transform: rotate(135deg);
					top: 0;
				`};
		}

		&::after {
			top: 0.7rem;
			left: 0;
			${props =>
				props.openNav &&
				css`
					transform: rotate(-135deg);
					top: 0;
				`};
		}
	}
`;

const NavMenu = styled.div`
	height: 100%;
	width: 30vw;
	background-color: ${colors.darkPurple};
	position: fixed;
	top: 0;
	right: ${props => (props.openNav ? '0' : '-30vw')};
	z-index: 200;
	transition: all 0.3s cubic-bezier(0.97, 0.01, 0, 1);

	> div {
		padding: 2rem;
	}
`;

// const H3 = styled.h3`
// 	color: ${colors.lightOchre};
// 	border-bottom: 0.1rem solid ${colors.lightOchre};
// 	padding-bottom: 0.5rem;
// 	margin-bottom: 1rem;
// 	font-weight: 500;
// 	font-size: 1.5rem;
// `;

const Span = styled.span`
	display: block;
	border-bottom: 0.1rem solid ${colors.midPurple};
	padding-bottom: 0.5rem;
	margin-bottom: 1rem;
	color: ${colors.midGray};
	cursor: pointer;
	font-size: 1.2rem;
	font-weight: 300;
	letter-spacing: 0.1rem;
	text-transform: uppercase;
	user-select: none;
	transition: all 0.2s;
	${props =>
		props.currentFilter === 'topRated' && !props.searchText && props.topRated
			? css`
					color: ${colors.lightOchre};
					border-bottom-color: ${colors.lightOchre};
				`
			: props.currentFilter === 'mostPopular' &&
				!props.searchText &&
				props.mostPopular
				? css`
						color: ${colors.lightOchre};
						border-bottom-color: ${colors.lightOchre};
					`
				: props.currentFilter === 'nowPlaying' &&
					!props.searchText &&
					props.nowPlaying
					? css`
							color: ${colors.lightOchre};
							border-bottom-color: ${colors.lightOchre};
						`
					: props.currentFilter === 'upcoming' &&
						!props.searchText &&
						props.upcoming
						? css`
								color: ${colors.lightOchre};
								border-bottom-color: ${colors.lightOchre};
							`
						: false};

	&:hover {
		color: ${colors.lightGray};
	}
`;

const NavBar = props => {
	return (
		<div>
			<NavIcon onClick={props.handleNav} openNav={props.openNav}>
				<span>&nbsp;</span>
			</NavIcon>
			<NavMenu openNav={props.openNav}>
				<div>
					{/* <H3>Categories</H3> */}
					<Span
						topRated
						currentFilter={props.currentFilter}
						searchText={props.searchText}
						onClick={props.onClickTopRated}
					>
						top rated
					</Span>
					<Span
						mostPopular
						currentFilter={props.currentFilter}
						searchText={props.searchText}
						onClick={props.onClickMostPopular}
					>
						most popular
					</Span>
					<Span
						nowPlaying
						currentFilter={props.currentFilter}
						searchText={props.searchText}
						onClick={props.onClickNowPlaying}
					>
						now playing
					</Span>
					<Span
						upcoming
						currentFilter={props.currentFilter}
						searchText={props.searchText}
						onClick={props.onClickUpcoming}
					>
						upcoming
					</Span>
				</div>
			</NavMenu>
		</div>
	);
};

export default NavBar;
