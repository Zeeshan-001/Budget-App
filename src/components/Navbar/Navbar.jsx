import React, { useState } from 'react';
import { BiDetail } from 'react-icons/bi';
import { AiOutlineTransaction } from 'react-icons/ai';
import { TbReportAnalytics } from 'react-icons/tb';
import { BiCategoryAlt } from 'react-icons/bi';
import { MdOutlineEuroSymbol } from 'react-icons/md';
import { MdOutlineManageAccounts } from 'react-icons/md';

function Navbar(props) {
	const [selected, setselected] = useState('summary');

	const nav_icons = [
		<BiDetail />,
		<AiOutlineTransaction />,
		<TbReportAnalytics />,
		<BiCategoryAlt />,
	];

	const nav_items = ['summary', 'transactions', 'report', 'categories'];

	const selectItem = (item) => {
		setselected(item);
	};

	const items = nav_items.map((item, i) => (
		<li key={i} onClick={() => selectItem(item)}>
			<a
				href='#'
				className={item === selected ? 'navbar__link active' : 'navbar__link'}>
				{nav_icons[i]} {item}
			</a>
		</li>
	));

	return (
		<div className='navbar'>
			<p className='navbar__logo'>
				<MdOutlineEuroSymbol />
				<span>Budget App</span>
			</p>
			<ul className='navbar__items'> {items} </ul>
		</div>
	);
}

export default Navbar;
