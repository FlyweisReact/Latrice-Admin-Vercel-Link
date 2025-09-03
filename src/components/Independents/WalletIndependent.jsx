import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const WalletIndependent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [walletData, setWalletData] = useState({
    balance: 0,
    transactions: []
  });

  // Mock data fetching - replace with actual API call
  useEffect(() => {
    // Simulating fetching wallet data by ID
    const mockWalletData = {
      balance: 1500.75,
      transactions: [
        { id: 1, date: '2023-11-01', amount: 200.50, type: 'Credit', description: 'Service Payment' },
        { id: 2, date: '2023-11-02', amount: -50.00, type: 'Debit', description: 'Withdrawal' },
        { id: 3, date: '2023-11-03', amount: 300.25, type: 'Credit', description: 'Service Payment' }
      ]
    };
    setWalletData(mockWalletData);
  }, [id]);

  return (
    <div className="w-full bg-white min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <button
            onClick={() => navigate('/dashboard/independents')}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <ArrowLeft className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-2xl font-[Rasa] font-semibold text-gray-900">
            Independent Wallet
          </h1>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="mb-6">
            <h3 className="text-sm font-[Rasa] font-medium text-gray-700">Current Balance</h3>
            <p className="text-2xl font-[Rasa] text-gray-900">${walletData.balance.toFixed(2)}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-[Rasa] font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {walletData.transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-900">
                      {transaction.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-900">
                      ${Math.abs(transaction.amount).toFixed(2)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-900">
                      {transaction.type}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-[Rasa] text-gray-900">
                      {transaction.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              onClick={() => navigate('/dashboard/independents')}
              className="px-4 py-2 text-sm font-[Rasa] text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletIndependent;