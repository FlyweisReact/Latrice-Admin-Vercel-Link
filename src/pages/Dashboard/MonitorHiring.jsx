import React, { useState } from 'react';
import { Edit, Eye, Trash2, Download, ChevronDown } from 'lucide-react';

const MonitorHiring = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sortBy, setSortBy] = useState('name');

  const salonsData = [
    { id: 1, shopName: 'Sexy Braids', independentProvider: 'Wilson George', date: '06/06/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Accepted' },
    { id: 2, shopName: 'Nixon Day Spa', independentProvider: 'Erin Lubin', date: '09/10/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Accepted' },
    { id: 3, shopName: 'Ace Spa', independentProvider: 'Ashlynn Goose', date: '12/22/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 4, shopName: 'Sc Barber Shop', independentProvider: 'Miracle Arcand', date: '03/02/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 5, shopName: 'CC Massage', independentProvider: 'Cooper Rosser', date: '10/10/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 6, shopName: 'Prince Barber', independentProvider: 'Livia Herwitz', date: '07/05/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 7, shopName: 'RD Skin Care', independentProvider: 'Justin Botoosh', date: '05/06/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Rejected' },
    { id: 8, shopName: 'A Nail Shop', independentProvider: 'Rayna Donin', date: '02/01/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 9, shopName: 'Melvin Removal', independentProvider: 'Lincoln Aminoff', date: '08/03/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 10, shopName: 'Thomas Care', independentProvider: 'Jaydon Sarris', date: '11/08/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 11, shopName: 'Chance Care', independentProvider: 'Ryan Siphron', date: '11/08/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 12, shopName: 'Baptista Barber', independentProvider: 'Makenna Lipshutz', date: '11/08/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
    { id: 13, shopName: 'James Day Spa', independentProvider: 'Anika Franci', date: '11/08/2023', time: '10:00 AM - 2:00 PM', service: 'Loc Retwist', priceOffered: '$80', status: 'Pending' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Accepted':
        return { backgroundColor: '#4CAF50', color: 'white' };
      case 'Pending':
        return { backgroundColor: '#FF9800', color: 'white' };
      case 'Rejected':
        return { backgroundColor: '#F44336', color: 'white' };
      default:
        return { backgroundColor: '#FF9800', color: 'white' };
    }
  };

  const totalPages = Math.ceil(salonsData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = salonsData.slice(startIndex, endIndex);

  return (
    <div className="w-full min-h-screen p-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 border-b border-gray-200 pb-4">
        <h1 className="text-2xl lg:text-3xl font-semibold text-gray-900">Monitor Hiring</h1>
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
          >
            <option value="name">Sort By</option>
            <option value="date">Date</option>
            <option value="status">Status</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse " style={{ boxShadow: '0px 0px 4px 0px #00000040' }}>
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">#</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Shop Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Independent Provider</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Date</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Time</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Service</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r border-gray-200">Price Offered</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentData.map((salon, index) => (
              <tr key={salon.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{startIndex + index + 1}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{salon.shopName}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-900 border-r border-gray-200">{salon.independentProvider}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 border-r border-gray-200">{salon.date}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 border-r border-gray-200">{salon.time}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 border-r border-gray-200">{salon.service}</td>
                <td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600 border-r border-gray-200">{salon.priceOffered}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className="inline-block px-2 py-1 rounded text-white text-sm"
                    style={getStatusStyle(salon.status)}
                  >
                    {salon.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-start gap-10 px-4 py-3 border-t bg-gray-50">
        <div className="flex items-center gap-2">
          <div className="border border-[#CED4DA] rounded bg-[#ced4da]">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              ‹
            </button>
          </div>
          {[...Array(totalPages)].map((_, i) => (
            <div className={`${currentPage === i + 1 ? "border border-[#2F2F2F]" : "border border-[#CED4DA] rounded"} `} key={i}>
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 border rounded ${currentPage === i + 1
                  ? " text-black border border-[#2F2F2F]"
                  : "hover:bg-gray-100"
                  }`}
              >
                {i + 1}
              </button>
            </div>
          ))}
          <div className="border border-[#CED4DA] rounded bg-[#ced4da]">
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 border rounded disabled:opacity-50"
            >
              ›
            </button>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <span className="text-sm text-gray-600">/Page</span>
        </div>
      </div>
    </div >
  );
};

export default MonitorHiring;