import React from 'react';

const TestWithMockDataWithBranching = ({ data, displayUnorderedList, handleClick }) => {
  return (
    <div className='w-full px-12 py-12'>
      <div className="max-w-lg mx-auto">
        {displayUnorderedList ? (
          <ul className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {data.map(item => (
              <li key={item.id} className="flex items-center py-4 px-6">
                <div className="flex-grow">
                  <p className="text-gray-900 text-lg font-medium">{item.first_name} {item.last_name}</p>
                  <p className="text-gray-500">
                    <a
                      onClick={() => {
                        console.log('email link clicked');
                        handleClick();
                      }}
                      className="text-blue-500 hover:underline cursor-pointer"
                    >
                      {item.email}
                    </a>
                  </p>
                </div>
                <span className={`text-gray-400 ${item.age > 50 ? 'font-bold' : ''}`}>
                  {item.age > 50 ? 'Senior' : 'Not senior'}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <ol className="border border-gray-200 rounded-lg divide-y divide-gray-200">
            {data.map(item => (
              <li key={item.id} className="py-2 px-6">
                Last name: {item.last_name}
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
};

export default TestWithMockDataWithBranching;
