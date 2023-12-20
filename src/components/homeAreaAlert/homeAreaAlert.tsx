import React from 'react';
import Face from '../../assets/Face.png';

export const HomeAreaAlert: React.FC = () => {
	return (
		<div className='flex flex-1 flex-row'>
			<div className="flex-1">
				<p className='text-white font-bold text-[1.5rem]'>Principal</p>
				<p className='text-[.75rem] text-subTitle'>Encontre tudo o que precisa para gerenciar um membro nas opções abaixo.</p>
			</div >
			<div className="flex-[2]">
				<div className='py-[.75rem] px-[.85rem] bg-bgContrast w-auto h-auto rounded-[.5rem] border-alert border-b-2 '>
					<p className='text-white font-bold text-[1rem]'>ALERTA TOTAL!! Tomem o máximo de cuidado.</p>
					<p className='text-subTitle text-[.75rem] font-normal'>Estamos entrando em zona de alerta total, bandidos estão circulando pela região do batalhão fuzis de alto calibre, tomem as devidas precauções e não ...</p>
				</div>
			</div>
			<div className="flex flex-1 gap-[.625rem] justify-center items-center">
				<img src={Face} alt="" className='w-[2rem] h-[2rem]' />
				<p className='text-white text-[.8rem] font-medium font-helveticaNeue'>Pixelz Warrios</p>
			</div>
		</div>
	);
};