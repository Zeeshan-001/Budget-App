import React, { useContext } from 'react';
import TransContext from '../../store/trans-context';

function SummaryTrans(props) {
	const ctx = useContext(TransContext);

	const trans = ctx.summaryTrans.map((trans, i) => (
		<li key={i} className='summary--trans__categorie'>
			{trans.category} <span>{trans.amount}€</span>
		</li>
	));

	const income = ctx.totalTransactions
		.filter((tr) => tr.type === 'income')
		.reduce((acc, mov) => (acc += mov.amount), 0);

	const expense = ctx.summaryTrans.reduce((acc, mov) => (acc += mov.amount), 0);

	const totalBalance = income - expense;

	return (
		<div className='summary--trans'>
			<div className='summary--trans__heading'>
				<p className='summary--trans__income'>
					Income
					<span>{!income ? `${income},00` : income}€</span>
				</p>

				<p className='summary--trans__expense'>
					Expense
					<span>{!expense ? `${expense},00` : expense}€</span>
				</p>
			</div>

			<ul className='summary--trans__categories'>{trans}</ul>

			<p className='summary--trans__balance'>
				Balance
				<span>{!totalBalance ? `${totalBalance},00` : totalBalance}€</span>
			</p>
		</div>
	);
}

export default SummaryTrans;
