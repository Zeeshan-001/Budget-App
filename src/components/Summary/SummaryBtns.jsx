import React, { useContext } from 'react';
import TransContext from '../../store/trans-context';
import RenderButton from '../utils/RenderButton';

function SummaryBtns() {
	const ctx = useContext(TransContext);
	return (
		<div className='summary__btns'>
			<RenderButton
				label=' + income'
				onClick={() => ctx.handleTransModel('income')}
			/>

			<RenderButton
				label=' + Expense'
				onClick={() => ctx.handleTransModel('expense')}
			/>
		</div>
	);
}

export default SummaryBtns;
//
