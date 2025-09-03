import React, { use, useState } from 'react';
import { ArrowLeft, Edit, Plus, FileText, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AddServiceModal from './AddServiceModal';
import EditServiceModal from './EditServiceModal';

const EditIndependent = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        location: '',
        email: '',
        phone: '',
        serviceRadius: '',
        country: '',
        isMobileSalon: false,
        acceptCustomRequests: false,
        ein: '',
        fieldEin: '',
        dbaName: '',
        fieldDbaName: '',
        ssn: '',
        fieldSsn: ''
    });
    const navigate = useNavigate()

    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState(null);

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleToggle = (field) => {
        setFormData(prev => ({
            ...prev,
            [field]: !prev[field]
        }));
    };

    const documents = [
        { id: 'business-license', label: 'Business License', icon: FileText },
        { id: 'cosmetology-license', label: 'Cosmetology License', icon: FileText },
        { id: 'proof-insurance', label: 'Proof of Insurance', icon: FileText },
        { id: 'drivers-license', label: "Driver's license", icon: FileText },
        { id: 'health-safety', label: 'Health & Safety Permits', icon: FileText },
        { id: 'passport', label: 'Passport', icon: FileText }
    ];
    // Add these handlers
    const handleAddService = (data) => {
        // Logic to add new service
        console.log('New service added:', data);
    };

    const handleEditService = (data) => {
        // Logic to edit service
        console.log('Service edited:', data);
    };
    return (
        <div className="min-h-screen bg-gray-50 font-[Rasa]">
            {/* Header */}
            <div className="bg-white border-b border-gray-200 px-6 py-4">
                <div className="flex items-center">
                    <ArrowLeft className="w-6 h-6 text-gray-600 mr-3 cursor-pointer" onClick={() => navigate(-1)} />
                    <h1 className="text-xl font-medium text-gray-900">Edit A New Independent Salon</h1>
                </div>
            </div>

            <div className="w-full mx-auto p-6 space-y-6">
                {/* Profile Image Section */}
                <div className="bg-gray-600 rounded-lg p-8 relative">
                    <div className="flex items-center justify-start">
                        <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-start relative">
                            <div className="w-6 h-6 bg-yellow-400 rounded-full absolute bottom-0 right-0 flex items-center justify-center">
                                <Edit className="w-3 h-3 text-gray-800" />
                            </div>
                        </div>
                    </div>
                    <Edit className="w-5 h-5 text-white absolute top-4 right-4 cursor-pointer" />
                </div>

                {/* Business Details */}
                <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Business Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name of your business
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.businessName}
                                onChange={(e) => handleInputChange('businessName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Location
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.location}
                                onChange={(e) => handleInputChange('location', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="enter here"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                            </label>
                            <div className="flex">
                                <span className="inline-flex items-center px-3 py-2 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm rounded-l-md">
                                    +1
                                </span>
                                <input
                                    type="tel"
                                    placeholder="enter here"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Service Radius (miles)
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.serviceRadius}
                                onChange={(e) => handleInputChange('serviceRadius', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Country
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.country}
                                onChange={(e) => handleInputChange('country', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Is this a mobile salon service?</span>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-3">No</span>
                                <button
                                    onClick={() => handleToggle('isMobileSalon')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.isMobileSalon ? 'bg-orange-500' : 'bg-gray-300'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.isMobileSalon ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">Do you accept custom style requests?</span>
                            <div className="flex items-center">
                                <span className="text-sm text-gray-500 mr-3">No</span>
                                <button
                                    onClick={() => handleToggle('acceptCustomRequests')}
                                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${formData.acceptCustomRequests ? 'bg-orange-500' : 'bg-gray-300'
                                        }`}
                                >
                                    <span
                                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${formData.acceptCustomRequests ? 'translate-x-6' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                {/* Services Section */}
                <div className="bg-white rounded-lg p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-medium text-gray-900">Services</h2>
                        <button
                            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
                            onClick={() => setIsAddModalOpen(true)}
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            Add A New Service
                        </button>
                    </div>

                    <div className="space-y-4">
                        {/* Service Item 1 */}
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium text-gray-900">BOX BRAIDS</span>
                                    <span className="text-sm text-gray-600">Small, Butt-Length</span>
                                    <span className="text-sm font-medium text-gray-900">$100.00</span>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <User className="w-4 h-4 mr-1" />
                                        <span>1 hr 30 mins</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-sm text-gray-500">
                                    Lorem Ipsum is simply dummy text
                                </div>
                                <button
                                    className="flex items-center text-sm text-gray-600 hover:text-gray-800"
                                    onClick={() => {

                                        setIsEditModalOpen(true);
                                    }}
                                >
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit
                                </button>
                                <button className="flex items-center text-sm text-red-500 hover:text-red-700">
                                    <span className="w-4 h-4 mr-1">🗑</span>
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium text-gray-900">BOX BRAIDS</span>
                                    <span className="text-sm text-gray-600">Jumbo, Shoulder-Length</span>
                                    <span className="text-sm font-medium text-gray-900">$120.00</span>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <User className="w-4 h-4 mr-1" />
                                        <span>2 hr 30 mins</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-sm text-gray-500">
                                    Lorem Ipsum is simply dummy text
                                </div>
                                <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit
                                </button>
                                <button className="flex items-center text-sm text-red-500 hover:text-red-700">
                                    <span className="w-4 h-4 mr-1">🗑</span>
                                    Delete
                                </button>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                            <div className="flex-1">
                                <div className="flex items-center space-x-4">
                                    <span className="text-sm font-medium text-gray-900">BOX BRAIDS</span>
                                    <span className="text-sm text-gray-600">Small, Shoulder-Length</span>
                                    <span className="text-sm font-medium text-gray-900">$150.00</span>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <User className="w-4 h-4 mr-1" />
                                        <span>3 hr 30 mins</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="text-sm text-gray-500">
                                    Lorem Ipsum is simply dummy text
                                </div>
                                <button className="flex items-center text-sm text-gray-600 hover:text-gray-800">
                                    <Edit className="w-4 h-4 mr-1" />
                                    Edit
                                </button>
                                <button className="flex items-center text-sm text-red-500 hover:text-red-700">
                                    <span className="w-4 h-4 mr-1">🗑</span>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Portfolio Images */}
                <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Portfolio Images</h2>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {[1, 2, 3, 4, 5].map((index) => (
                            <div
                                key={index}
                                className="aspect-square border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 transition-colors"
                            >
                                <Plus className="w-8 h-8 text-gray-400 mb-2" />
                                <span className="text-xs text-gray-500 text-center">Add New Photo</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Business Information */}
                <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Business Information</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Employer Identification Number (EIN)
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.ein}
                                onChange={(e) => handleInputChange('ein', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Field labeled Employer Identification Number (EIN)
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.fieldEin}
                                onChange={(e) => handleInputChange('fieldEin', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Doing Business As (DBA) Name
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.dbaName}
                                onChange={(e) => handleInputChange('dbaName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Field labeled Doing Business As (DBA) Name
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.fieldDbaName}
                                onChange={(e) => handleInputChange('fieldDbaName', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>
                    </div>
                </div>

                {/* Taxpayer Identification */}
                <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Taxpayer Identification</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Social Security Number (SSN) or Individual Taxpayer Identification Number (ITIN)
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.ssn}
                                onChange={(e) => handleInputChange('ssn', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Field labeled SSN or ITIN
                            </label>
                            <input
                                type="text"
                                placeholder="enter here"
                                value={formData.fieldSsn}
                                onChange={(e) => handleInputChange('fieldSsn', e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 placeholder-gray-400"
                            />
                        </div>
                    </div>
                </div>

                {/* Licence & Verification Documents */}
                <div className="bg-white rounded-lg p-6">
                    <h2 className="text-xl font-medium text-gray-900 mb-6">Licence & Verification Documents</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {documents.map((doc) => (
                            <div key={doc.id} className="flex items-center space-x-3 border border-gray-200 rounded-lg  pl-2">
                                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <FileText className="w-6 h-6 text-yellow-600" />
                                </div>
                                <div className="flex-1">
                                    <span className="text-sm font-medium text-gray-700">{doc.label}</span>
                                </div>
                                <button className="px-10 py-7 bg-gray-400 text-white text-sm font-medium rounded-md hover:bg-gray-500 transition-colors">
                                    Upload Document
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Add Button */}
                <div className="pb-6">
                    <button className="w-full bg-gray-800 text-yellow-400 py-4 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors">
                        Add
                    </button>
                </div>
            </div>
            {isAddModalOpen && <AddServiceModal onClose={() => setIsAddModalOpen(false)} onAdd={handleAddService} />}
            {isEditModalOpen && <EditServiceModal onClose={() => setIsEditModalOpen(false)} onEdit={handleEditService} initialData={selectedService} />}
        </div>
    );
};

export default EditIndependent;