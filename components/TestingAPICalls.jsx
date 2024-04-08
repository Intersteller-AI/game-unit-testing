import React, { useEffect, useState } from 'react'
import { FetchData } from '../utils/Services'
import Image from "next/image"

const TestingAPICalls = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    FetchData().then(data => {
      setData(data.articles);
    })
  }, [])

  console.log(data);

  return (
    <div className='w-full px-12 py-12 flex justify-center'>
      <div className="w-full max-w-[85rem] flex flex-wrap justify-center gap-4">
        {data?.map((item, key) => (
          <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src={item.urlToImage}
              alt={item.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Author: {item.author}</span>
              <a href={item.url} className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TestingAPICalls