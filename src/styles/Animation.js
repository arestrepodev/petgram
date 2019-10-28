import { keyframes, css } from 'styled-components';

const fadeInKeyFrames = keyframes`
	from {
		filter: blur(5px);
		opacity: 0;
	} 
	
	to {
		filter: blur(0);
		opacity: 1;
	}
`;

const swipDownKeyFrames = keyframes`
	from {
		opacity: 0;
		translate: (10px,0)
	}
	to{
		opacity: 1;
		translate: (0px,0)
	}
`;

const spinnerAnimation = keyframes`
	from {
		transform: rotate(0deg);
	} to {
		transform: rotate(360deg);
	}
`;

export const fadeIn = ({ time = '500ms', type = 'ease' } = {}) => css`
	animation: ${time} ${fadeInKeyFrames} ${type};
`;

export const swipDown = ({ time = '500ms', type = 'ease' } = {}) => css`
	animation: ${time} ${swipDownKeyFrames} ${type};
`;

export const rotateSpinner = ({ time = '500ms', type = 'ease' } = {}) => css`
	animation: ${time} ${spinnerAnimation} ${type};
`;
