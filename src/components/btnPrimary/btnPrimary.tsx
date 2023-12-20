import React from 'react';

interface Ibtn {
	title: string;
	bg: 'red' | 'blue' | 'green';
	onClick: () => void;
}

export const ButtonPrimary: React.FC<Ibtn> = ({ title, bg, onClick }) => {
	let classColor;
	if (bg === 'red') {
		classColor = 'bg-gradientBtnPrimaryRed border-borderBtnPrimaryRed';
	} else if (bg === 'blue') {
		classColor = 'bg-gradientBtnPrimaryBlue border-borderBtnPrimaryBlue';
	} else if (bg === 'green') {
		classColor = 'bg-gradientBtnPrimaryGreen border-borderBtnPrimaryGreen';
	}

	return (
		<button className={`border flex justify-center items-center rounded-md  flex-1 h-[3rem] ${classColor}`} onClick={onClick}>
			<p className='text-white font-semibold text-lg'>{title}</p>
		</button>
	);
};