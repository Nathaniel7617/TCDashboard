import React from 'react';
import { BarChart, Bar, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

const data = [
  {
    name: 'Jan',
    Income: 9000,
    Expense: 6000,
  },
  {
    name: 'Feb',
    Income: 10000,
    Expense: 4398,
  },
  {
    name: 'Mar',
    Income: 10000,
    Expense: 4800,
  },
  {
    name: 'Apr',
    Income: 6980,
    Expense: 9708,
  },
  {
    name: 'May',
    Income: 4800,
    Expense: 8800,
  },
  {
    name: 'Jun',
    Income: 6800,
    Expense: 9390,
  },
  {
    name: 'Jul',
    Income: 9490,
    Expense: 6300,
  },
  {
    name: 'Aug',
    Income: 6490,
    Expense: 9300,
  },
  {
    name: 'Sep',
    Income: 4490,
    Expense: 9400,
  },
  {
    name: 'Oct',
    Income: 15490,
    Expense: 7300,
  },
  {
    name: 'Nov',
    Income: 14390,
    Expense: 3800,
  },
  {
    name: 'Dec',
    Income: 16000,
    Expense: 9000,
  },
];

const TransactionChart = () => {
  return (
    <div className='h-[22rem] bg-white p-4 rounded-xl border border-gray-200 flex flex-col'>
      <strong className='text-gray-700 font-medium'>Transactions</strong>
      <div className='w-full mt-3 flex-1 text-xs'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Income" fill="#0ea5e9" />
            <Bar dataKey="Expense" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TransactionChart;