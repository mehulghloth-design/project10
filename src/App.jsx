import React from 'react'


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 ">
      
      {/* Student Card */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 hover:shadow-lg transition duration-500 p-4 rounded cursor-pointer bg-gray-50">
        
        <h1 className="text-xl font-bold text-blue-700 text-center">
          KL University
        </h1>

        <p className="text-center text-gray-600 mt-2">
          Student Profile
        </p>

        <div className="mt-4 space-y-2">
          <p><span className="font-semibold">Name:</span> Mehul Ghloth</p>
          <p><span className="font-semibold">Reg No:</span> 2500032607</p>
          <p><span className="font-semibold">Department:</span> CSE</p>
          <p><span className="font-semibold">Year:</span> II</p>
        </div>

        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 hover:shadow-lg transition duration-300">
          View Details
        </button>

      </div>
    </div>
  )
}
