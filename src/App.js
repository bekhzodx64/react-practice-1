import ExpenseItem from './components/ExpenseItem';

function App() {
	const expenses = [
		{
			id: 1,
			title: 'Toilet Paper',
			amount: 1.5,
			date: new Date(2021, 6, 2),
		},
		{
			id: 2,
			title: 'Car Insurance',
			amount: 7,
			date: new Date(2021, 6, 6),
		},
		{
			id: 3,
			title: 'Smart TV',
			amount: 1000,
			date: new Date(2021, 6, 8),
		},
		{
			id: 4,
			title: 'Cougar',
			amount: 30,
			date: new Date(2021, 6, 10),
		},
	];

	return (
		<div className='App'>
			{expenses.map((expense) => (
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}
					key={expense.id}
				/>
			))}
		</div>
	);
}

export default App;
