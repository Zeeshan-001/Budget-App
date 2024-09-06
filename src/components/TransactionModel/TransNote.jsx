import React, { useContext, useState } from 'react';
import Input from '../utils/Input';
import { BsChatText } from 'react-icons/bs';
import TransContext from '../../store/trans-context';

function TransNote(props) {
	const { handleInputValues, inputs } = useContext(TransContext);

	return (
		<div className='form__item'>
			<h4 className='heading--four'>Note</h4>

			<div className='form__select-input'>
				<Input
					type='text'
					name='note'
					value={inputs.note}
					onChange={handleInputValues}
					placeHolder='max 10 letter...'
					className='form__date-input'
				/>
				<span>
					<BsChatText />
				</span>
			</div>
		</div>
	);
}

export default TransNote;
