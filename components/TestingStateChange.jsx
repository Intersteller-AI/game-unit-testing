import React, { useEffect, useState } from 'react'

const data = [
  {
    id: 1,
    name: 'kunal'
  },
  {
    id: 2,
    name: 'paul'
  },
  {
    id: 3,
    name: 'lisandro'
  },
]

const TestingStateChange = () => {

  const [loaded, setLoaded] = useState(false)
  const [toggleTextVisible, setToggleTextVisible] = useState(false)
  const [btnDisabled, setBtnDisabled] = useState(false)

  const [elements, setElements] = useState(data);

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <main className='w-full flex justify-center px-12 py-12'>
      <div className="w-full max-w-[85rem]">
        {loaded && <h3 className="text-xl mb-4">Page Loaded</h3>}
        {toggleTextVisible && <p className="text-green-500">Text visible</p>}
        <div className='flex items-center gap-4'>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            disabled={btnDisabled}
            onClick={() => { setToggleTextVisible(!toggleTextVisible) }}
          >
            Toggle text
          </button>

          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => { setBtnDisabled(!btnDisabled) }}
          >
            Toggle button disabled
          </button>
        </div>

        <h3 className="text-xl mt-4 mb-2">List</h3>
        <div className="space-y-2 max-w-lg">
          {elements.map(item => (
            <div key={item.id} data-testid='record' className="bg-gray-100 p-2 rounded drop-shadow-sm">
              {item.id}: {item.name}
            </div>
          ))}
        </div>

        <div className='flex items-center gap-4 mt-4'>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setElements([...elements, {
                id: 4,
                name: 'priyansh'
              }])
            }}
          >
            Add to list
          </button>

          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              setElements(elements.filter(item => item.id !== 2))
            }}
          >
            Remove from list
          </button>
        </div>
      </div>
    </main>
  )
}

export default TestingStateChange
