import React, { useState, useEffect } from 'react';
import { ChevronDown, Edit, Trash2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import AddCategoryModal from '../../components/ContentManagement/AddCategoryModal';
import EditCategoryModal from '../../components/ContentManagement/EditCategoryModal';

const ContentManagement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'Categories');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedSalonId, setSelectedSalonId] = useState(null);

  const handleDeleteClick = (id) => {
    setSelectedSalonId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    setSalonsData((categoriesData) =>
      categoriesData.filter((salon) => salon.id !== selectedSalonId)
    );
    setShowDeletePopup(false);
    setSelectedSalonId(null);
  };

  const handleDeleteCancel = () => {
    setShowDeletePopup(false);
    setSelectedSalonId(null);
  };
  useEffect(() => {
    navigate(`?tab=${activeTab}`, { replace: true });
  }, [activeTab, navigate]);

  const categoriesData = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Braids & Hair Extensions',
      addedOn: '06/06/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Cuts, Color & Silk Press',
      addedOn: '09/10/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3065171/pexels-photo-3065171.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Locs, Hair Care & Treatments',
      addedOn: '12/22/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: "Men's Grooming Services",
      addedOn: '03/02/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3997379/pexels-photo-3997379.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Nail Services',
      addedOn: '10/10/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Makeup & Glam Services',
      addedOn: '07/05/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Skincare Services',
      addedOn: '05/06/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Spa Therapy & Relaxation',
      addedOn: '02/01/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 9,
      image: 'https://images.pexels.com/photos/3985322/pexels-photo-3985322.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Lash & Brow Enhancements',
      addedOn: '08/03/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 10,
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Bridal & Event Packages',
      addedOn: '11/08/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 11,
      image: 'https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg?auto=compress&cs=tinysrgb&w=80&h=60&fit=crop',
      categoryName: 'Mobile Beauty Services',
      addedOn: '11/08/2023',
      status: 'Live',
      unblock: true
    }
  ];

  const servicesData = [
    {
      id: 1,
      categoryName: 'Braids & Hair Extensions',
      serviceName: 'Box Braids',
      addedOn: '06/06/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 2,
      categoryName: 'Braids & Hair Extensions',
      serviceName: 'Hair Extension',
      addedOn: '09/10/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 3,
      categoryName: 'Locs, Hair Care & Treatments',
      serviceName: 'Lorem Ipsum',
      addedOn: '12/22/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 4,
      categoryName: "Men's Grooming Services",
      serviceName: 'Lorem Ipsum',
      addedOn: '03/02/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 5,
      categoryName: 'Nail Services',
      serviceName: 'Lorem Ipsum',
      addedOn: '10/10/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 6,
      categoryName: 'Makeup & Glam Services',
      serviceName: 'Lorem Ipsum',
      addedOn: '07/05/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 7,
      categoryName: 'Skincare Services',
      serviceName: 'Lorem Ipsum',
      addedOn: '05/06/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 8,
      categoryName: 'Spa Therapy & Relaxation',
      serviceName: 'Lorem Ipsum',
      addedOn: '02/01/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 9,
      categoryName: 'Lash & Brow Enhancements',
      serviceName: 'Lorem Ipsum',
      addedOn: '08/03/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 10,
      categoryName: 'Bridal & Event Packages',
      serviceName: 'Lorem Ipsum',
      addedOn: '11/08/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 11,
      categoryName: 'Mobile Beauty Services',
      serviceName: 'Lorem Ipsum',
      addedOn: '11/08/2023',
      status: 'Live',
      unblock: true
    }
  ];

  const additionalServicesData = [
    {
      id: 1,
      serviceName: 'Undo Hair',
      addedOn: '06/06/2023',
      status: 'Live',
      unblock: true
    },
    {
      id: 2,
      serviceName: 'Wash Hair',
      addedOn: '09/10/2023',
      status: 'Live',
      unblock: false
    },
    {
      id: 3,
      serviceName: 'Blow Dry Hair',
      addedOn: '12/22/2023',
      status: 'Live',
      unblock: true
    }
  ];

  const tabs = ['Categories', 'Services', 'Additional Services'];

  const renderCategoriesTab = () => (
    <div className="bg-white rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category Image</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Added On</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Block/Unblock</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {categoriesData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm text-gray-900">{row.id}</td>
                <td className="px-6 py-4">
                  <img
                    src={row.image}
                    alt={row.categoryName}
                    className="w-16 h-12 object-cover rounded-md"
                  />
                </td>
                <td className="px-6 py-4 text-sm text-gray-900">{row.categoryName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{row.addedOn}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-900">{row.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700 mr-3">{row.unblock ? 'Unblock' : 'Block'}</span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={row.unblock}
                        className="sr-only"
                        readOnly
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${row.unblock ? 'bg-green-500' : 'bg-red-500'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${row.unblock ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                      <Edit className="w-4 h-4" onClick={() => setIsEditModalOpen(true)} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-red-600 transition-colors duration-200">
                      <Trash2 className="w-4 h-4" onClick={() => handleDeleteClick(row.id)}
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderServicesTab = () => (
    <div className="bg-white rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Category Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Service Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Added On</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Block/Unblock</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {servicesData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm text-gray-900">{row.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{row.categoryName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{row.serviceName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{row.addedOn}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-900">{row.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700 mr-3">{row.unblock ? 'Unblock' : 'Block'}</span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={row.unblock}
                        className="sr-only"
                        readOnly
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${row.unblock ? 'bg-green-500' : 'bg-red-500'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${row.unblock ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                      <Edit className="w-4 h-4" onClick={() => setIsEditModalOpen(true)} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-red-600 transition-colors duration-200">
                      <Trash2 className="w-4 h-4" onClick={() => handleDeleteClick(row.id)}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center p-6 space-x-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          4
        </button>
        <span className="text-gray-500 text-sm">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors duration-200">
          10
        </button>
        <span className="text-gray-500 text-sm ml-2">/page</span>
      </div>
    </div>
  );

  const renderAdditionalServicesTab = () => (
    <div className="bg-white rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">#</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Additional Service Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Added On</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Block/Unblock</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {additionalServicesData.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors duration-200">
                <td className="px-6 py-4 text-sm text-gray-900">{row.id}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{row.serviceName}</td>
                <td className="px-6 py-4 text-sm text-gray-900">{row.addedOn}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm text-gray-900">{row.status}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-700 mr-3">{row.unblock ? 'Unblock' : 'Block'}</span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={row.unblock}
                        className="sr-only"
                        readOnly
                      />
                      <div className={`w-11 h-6 rounded-full transition-colors duration-200 ${row.unblock ? 'bg-green-500' : 'bg-red-500'}`}>
                        <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-200 ${row.unblock ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    <button className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200">
                      <Edit className="w-4 h-4" onClick={() => setIsEditModalOpen(true)} />
                    </button>
                    <button className="p-1 text-gray-500 hover:text-red-600 transition-colors duration-200">
                      <Trash2 className="w-4 h-4" onClick={() => handleDeleteClick(row.id)}/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const getTabFilters = () => {
    switch (activeTab) {
      case 'Categories':
        return (
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setIsModalOpen(true)}
          >
            <span className="mr-2 text-lg">+</span>
            Add A New Category
          </button>
        );
      case 'Services':
        return (
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select className="appearance-none bg-white border border-gray-300 rounded-md px-4 py-2 pr-8 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <option>Sort By Categories</option>
                <option>All Categories</option>
                <option>Braids & Hair Extensions</option>
                <option>Cuts, Color & Silk Press</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
              <span className="mr-2 text-lg">+</span>
              Add A New Service
            </button>
          </div>
        );
      case 'Additional Services':
        return (
          <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            <span className="mr-2 text-lg">+</span>
            Add A New Additional Service
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full min-h-screen  font-rasa">
      <div className="max-w-full mx-auto">
        {/* Active Tab Header with Filters */}
        <div className=" rounded-lg p-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-gray-800 font-rasa">{activeTab}</h1>
            <div className="flex items-center">
              {getTabFilters()}
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mb-6">
          <div className="border-b border-gray-200 bg-white rounded-t-lg">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 relative ${activeTab === tab
                    ? 'border-black text-gray-900'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'Categories' && renderCategoriesTab()}
        {activeTab === 'Services' && renderServicesTab()}
        {activeTab === 'Additional Services' && renderAdditionalServicesTab()}
        <AddCategoryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <EditCategoryModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />
        {showDeletePopup && (
          <div className="fixed inset-0 bg-black/30 bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 w-[300px] text-center">
              <h2 className="text-xl font-[Rasa] font-medium text-gray-900 mb-4">Are you sure?</h2>
              <div className="flex justify-around">
                <button
                  onClick={handleDeleteCancel}
                  className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 transition-colors"
                >
                  No, Cancel
                </button>
                <button
                  onClick={handleDeleteConfirm}
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                >
                  Yes, Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;