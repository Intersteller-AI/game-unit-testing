import React from 'react';

const TestWithMockData = ({ data }) => {
  return (
    <main className='w-full px-12 py-12'>
      <div className="max-w-lg mx-auto mt-6">
        <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200">
          {data?.map(item => (
            <li key={item.id} className="flex items-center py-4 px-6">
              <div className="flex-grow">
                <p className="text-gray-900 text-lg font-medium">{item.first_name} {item.last_name}</p>
                <p className="text-gray-500">{item.email}</p>
              </div>
              <span className="text-gray-400">{item.id}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default TestWithMockData;
