import React from 'react'
import SpkDataTable from './../../common/DataTable/SpkDataTable';


const emails = [
    {
      image: "https://via.placeholder.com/40",
      name: "Melody Macy",
      subject: "Digital PPV Customer Confirmation",
      labels: ["inbox", "task"],
      time: "8:30 PM",
    },
    {
      image: "https://via.placeholder.com/40",
      name: "Max Smith",
      subject: "Your iBuy.com grocery shopping confirmation",
      time: "day ago",
    },
    {
      image: "https://via.placeholder.com/40",
      name: "Brian Cox",
      subject: "Payment Notification DLOP2329KD",
      labels: ["new"],
      time: "2 days ago",
    },
  ];
  
function DashboardThree() {
  return (
    <>

<div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header with search bar */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Inbox</h2>
        <input
          type="text"
          placeholder="Search inbox"
          className="px-3 py-2 border rounded-lg text-sm"
        />
      </div>

      {/* Email list with image, sender, and subject */}
      <table className="w-full text-sm">
        <thead className="bg-gray-100">
          <tr>
          <th className="p-2 text-left font-medium text-gray-500">styles</th>
           <th className="p-2 text-left font-medium text-gray-500">name</th>
            <th className="p-2 text-left font-medium text-gray-500">Subject</th>
            <th className="p-2 text-left font-medium text-gray-500">Time</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email, index) => (
            <tr key={index} className="border-b hover:bg-gray-50">
              <td className="p-3 flex items-center space-x-3">
                <img src={email.image} alt="avatar" className="w-8 h-8 rounded-full" />
                <span className="font-medium text-gray-900">{email.name}</span>
              </td>
              <td className="text-gray-600">
                {email.subject}

              </td>
              <td className="text-xs flex space-x-2">
                {email.labels?.map((label, i) => (
                  <span key={i} className={`px-2 py-1 rounded-full ${label === 'new' ? 'bg-pink-100 text-pink-600' : 'bg-blue-100 text-blue-600'}`}>{label}</span>
                ))}
              </td>
              <td className="text-gray-500 text-xs">{email.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between items-center p-4 border-t">
        <span className="text-sm text-gray-600">Showing 1 to 10</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border rounded">&lt;</button>
          <button className="px-3 py-1 text-sm border rounded bg-blue-500 text-white">1</button>
          <button className="px-3 py-1 text-sm border rounded">2</button>
          <button className="px-3 py-1 text-sm border rounded">&gt;</button>
        </div>
      </div>
    </div>
    <SpkDataTable/>


      
    </>
  )
}

export default DashboardThree
