import React from 'react';
import LineChart from '../Chart/LineChart';
import SummaryBtns from './SummaryBtns';
import SummaryTrans from './SummaryTrans';

function SummaryContent(props) {
	return (
		<div className='summary__content'>
			<LineChart />
			<SummaryTrans />
			<SummaryBtns />
		</div>
	);
}

export default SummaryContent;
