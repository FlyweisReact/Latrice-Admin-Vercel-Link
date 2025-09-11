import React, { useState, useEffect } from 'react';
import { ChevronDown, Edit, Trash2, Plus } from 'lucide-react';
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
  const [categoriesData, setCategoriesData] = useState([
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
  ]);

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
      status: 'Blocked',
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live':
        return 'text-green-600';
      case 'Blocked':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusDot = (status) => {
    switch (status) {
      case 'Live':
        return 'bg-green-500';
      case 'Blocked':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleToggleBlock = (id, tabData, setTabData) => {
    setTabData((prevData) =>
      prevData.map((item) =>
        item.id === id
          ? { ...item, unblock: !item.unblock, status: item.unblock ? 'Blocked' : 'Live' }
          : item
      )
    );
  };

  const handleDeleteClick = (id) => {
    setSelectedSalonId(id);
    setShowDeletePopup(true);
  };

  const handleDeleteConfirm = () => {
    if (activeTab === 'Categories') {
      setCategoriesData((prevData) =>
        prevData.filter((item) => item.id !== selectedSalonId)
      );
    } else if (activeTab === 'Services') {
      setServicesData((prevData) =>
        prevData.filter((item) => item.id !== selectedSalonId)
      );
    } else if (activeTab === 'Additional Services') {
      setAdditionalServicesData((prevData) =>
        prevData.filter((item) => item.id !== selectedSalonId)
      );
    }
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

  const tabs = ['Categories', 'Services', 'Additional Services'];

  const renderCategoriesTab = () => {
    const totalPages = Math.ceil(categoriesData.length / 10);
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentData = categoriesData.slice(startIndex, endIndex);

    return (
      <div className="py-4 px-2 rounded-xl" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">#</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Category Image</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Category Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Added On</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Status</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Block/Unblock</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.id}</td>
                  <td className="px-6 py-4 border border-[#E9ECEF]">
                    <img
                      src={row.image}
                      alt={row.categoryName}
                      className="w-16 h-12 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.categoryName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.addedOn}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusDot(row.status)}`}></div>
                      <span className={`text-[20px] font-[Rasa] ${getStatusColor(row.status)}`}>{row.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-3">
                      <span className="text-[20px] font-[Rasa] text-[#2f2f2f]">{row.unblock ? 'Unblocked' : 'Blocked'}</span>
                      <button
                        onClick={() => handleToggleBlock(row.id, categoriesData, setCategoriesData)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${row.unblock ? 'bg-green-500' : 'bg-red-500'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${row.unblock ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => setIsEditModalOpen(true)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                        >
                          <Edit className="w-4 h-4 text-black" />
                        </button>
                      </div>
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => handleDeleteClick(row.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-start gap-10 px-4 py-3 bg-gray-50">
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
              <div className={`${currentPage === i + 1 ? "border border-[#2F2F2F]" : "border border-[#CED4DA] rounded"}`} key={i}>
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "text-black border border-[#2F2F2F]" : "hover:bg-gray-100"}`}
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
      </div>
    );
  };

  const renderServicesTab = () => {
    const totalPages = Math.ceil(servicesData.length / 10);
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentData = servicesData.slice(startIndex, endIndex);

    return (
      <div className="py-4 px-2 rounded-xl" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">#</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Category Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Service Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Added On</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Status</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Block/Unblock</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.categoryName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.serviceName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.addedOn}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusDot(row.status)}`}></div>
                      <span className={`text-[20px] font-[Rasa] ${getStatusColor(row.status)}`}>{row.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-3">
                      <span className="text-[20px] font-[Rasa] text-[#2f2f2f]">{row.unblock ? 'Unblocked' : 'Blocked'}</span>
                      <button
                        onClick={() => handleToggleBlock(row.id, servicesData, setServicesData)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${row.unblock ? 'bg-green-500' : 'bg-red-500'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${row.unblock ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => setIsEditModalOpen(true)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                        >
                          <Edit className="w-4 h-4 text-black" />
                        </button>
                      </div>
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => handleDeleteClick(row.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-start gap-10 px-4 py-3 bg-gray-50">
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
              <div className={`${currentPage === i + 1 ? "border border-[#2F2F2F]" : "border border-[#CED4DA] rounded"}`} key={i}>
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "text-black border border-[#2F2F2F]" : "hover:bg-gray-100"}`}
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
      </div>
    );
  };

  const renderAdditionalServicesTab = () => {
    const totalPages = Math.ceil(additionalServicesData.length / 10);
    const startIndex = (currentPage - 1) * 10;
    const endIndex = startIndex + 10;
    const currentData = additionalServicesData.slice(startIndex, endIndex);

    return (
      <div className="py-4 px-2 rounded-xl" style={{ boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040" }}>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-50 text-[20px]">
              <tr>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">#</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Additional Service Name</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Added On</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Status</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Block/Unblock</th>
                <th className="px-4 py-2 text-left text-[20px] font-medium text-[#2F2F2F] tracking-wider border border-[#E9ECEF]">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.serviceName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-[20px] font-[Rasa] text-[#2f2f2f] border border-[#E9ECEF]">{row.addedOn}</td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusDot(row.status)}`}></div>
                      <span className={`text-[20px] font-[Rasa] ${getStatusColor(row.status)}`}>{row.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-3">
                      <span className="text-[20px] font-[Rasa] text-[#2f2f2f]">{row.unblock ? 'Unblocked' : 'Blocked'}</span>
                      <button
                        onClick={() => handleToggleBlock(row.id, additionalServicesData, setAdditionalServicesData)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${row.unblock ? 'bg-green-500' : 'bg-red-500'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${row.unblock ? 'translate-x-6' : 'translate-x-1'}`}
                        />
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap border border-[#E9ECEF]">
                    <div className="flex items-center gap-2">
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => setIsEditModalOpen(true)}
                          className="p-2 text-gray-400 hover:text-blue-600 transition-colors rounded-lg hover:bg-blue-50"
                        >
                          <Edit className="w-4 h-4 text-black" />
                        </button>
                      </div>
                      <div className="border-2 rounded-[6px] border-[#E9ECEF]">
                        <button
                          onClick={() => handleDeleteClick(row.id)}
                          className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-lg hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4 text-black" />
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-start gap-10 px-4 py-3 bg-gray-50">
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
              <div className={`${currentPage === i + 1 ? "border border-[#2F2F2F]" : "border border-[#CED4DA] rounded"}`} key={i}>
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "text-black border border-[#2F2F2F]" : "hover:bg-gray-100"}`}
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
      </div>
    );
  };

  const getTabFilters = () => {
    switch (activeTab) {
      case 'Categories':
        return (
          <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg">
            <button
              className="text-[#2f2f2f] text-[20px] font-[Rasa] font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="w-4 h-4" />
              Add A New Category
            </button>
          </div>
        );
      case 'Services':
        return (
          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 text-[20px] font-[Rasa] text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-w-[120px]"
              >
                <option>Sort By Categories</option>
                <option>All Categories</option>
                <option>Braids & Hair Extensions</option>
                <option>Cuts, Color & Silk Press</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
            <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg">
              <button
                className="text-[#2f2f2f] text-[20px] font-[Rasa] font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap"
                onClick={() => setIsModalOpen(true)}
              >
                <Plus className="w-4 h-4" />
                Add A New Service
              </button>
            </div>
          </div>
        );
      case 'Additional Services':
        return (
          <div className="bg-white border border-gray-300 px-4 py-2 rounded-lg">
            <button
              className="text-[#2f2f2f] text-[20px] font-[Rasa] font-medium hover:bg-gray-50 transition-colors flex items-center gap-2 whitespace-nowrap"
              onClick={() => setIsModalOpen(true)}
            >
              <Plus className="w-4 h-4" />
              Add A New Additional Service
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="w-full min-h-screen">
      <div className="max-w-full mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-2 border-b border-gray-200">
          <h1 className="text-[50px] font-[Rasa] font-semibold text-[#2f2f2f]">{activeTab}</h1>
          <div className="flex items-center">{getTabFilters()}</div>
        </div>
        <div className="mb-6">
          <div className="border-b border-gray-200 bg-white rounded-t-lg">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 text-[20px] font-[Rasa] font-medium transition-colors duration-200 relative ${
                    activeTab === tab
                      ? 'border-[#2f2f2f] text-[#2f2f2f]'
                      : 'border-transparent text-gray-500 hover:text-[#2f2f2f] hover:border-gray-300'
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2f2f2f]"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>
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
              {selectedSalonId && (
                <p className="text-sm text-gray-600 mt-4">
                  {(activeTab === 'Categories' && categoriesData.find((s) => s.id === selectedSalonId)?.categoryName) ||
                   (activeTab === 'Services' && servicesData.find((s) => s.id === selectedSalonId)?.serviceName) ||
                   (activeTab === 'Additional Services' && additionalServicesData.find((s) => s.id === selectedSalonId)?.serviceName)} -{' '}
                  {(activeTab === 'Categories' && categoriesData.find((s) => s.id === selectedSalonId)?.addedOn) ||
                   (activeTab === 'Services' && servicesData.find((s) => s.id === selectedSalonId)?.addedOn) ||
                   (activeTab === 'Additional Services' && additionalServicesData.find((s) => s.id === selectedSalonId)?.addedOn)}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;