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
	position: absolute;
	top: 0;
	right: ${props => (props.openNav ? '0' : '-30vw')};
	z-index: 200;
	transition: all 0.3s cubic-bezier(0.97, 0.01, 0, 1);
`;

const NavBar = props => {
	return (
		<div>
			<NavIcon onClick={props.handleNav} openNav={props.openNav}>
				<span>&nbsp;</span>
			</NavIcon>
			<NavMenu openNav={props.openNav} />
		</div>
	);
};

export default NavBar;
