import React from 'react'

const TestUserInteractions = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <input
        className="border rounded-lg px-4 py-2 mb-4 w-80"
        placeholder="Enter name"
      />
      <input
        className="border rounded-lg px-4 py-2 mb-4 w-80"
        placeholder="Enter description"
      />
      <label htmlFor="password" className="mb-2">Enter password</label>
      <input
        className="border rounded-lg px-4 py-2 mb-4 w-80"
        type="password"
        id="password"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">Submit</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Apply</button>
    </div>
  )
}

export default TestUserInteractions
