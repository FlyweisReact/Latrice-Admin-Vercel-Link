import React, { useRef, useState } from "react";
import { FaArrowLeft, FaEdit, FaTrash, FaPlus, FaDollarSign, FaClock, FaFileAlt } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { FaCar, FaWifi, FaCreditCard, FaChild, FaWheelchair } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { Edit, FileText, View } from "lucide-react";


const Toggle = ({ enabled, setEnabled }) => (
  <Switch
    checked={enabled}
    onChange={setEnabled}
    className={`${enabled ? "bg-[#123E41]" : "bg-gray-300"
      } relative inline-flex h-6 w-11 items-center rounded-full transition`}
  >
    <span
      className={`${enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 transform rounded-full bg-white transition`}
    />
  </Switch>
);

const services = [
  {
    id: 1,
    name: "BOX BRAIDS",
    size: "Small, Butt-Length",
    price: "100.00",
    duration: "1 hr 30 mins",
    description: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 2,
    name: "BOX BRAIDS",
    size: "Jumbo, Shoulder-Length",
    price: "120.00",
    duration: "2 hr 30 mins",
    description: "Lorem Ipsum is simply dummy text",
  },
  {
    id: 3,
    name: "BOX BRAIDS",
    size: "Small, Shoulder-Length",
    price: "150.00",
    duration: "3 hr 30 mins",
    description: "Lorem Ipsum is simply dummy text",
  },
];

const documents = [
  { id: 'business-license', label: 'Business License', icon: FileText },
  { id: 'cosmetology-license', label: 'Cosmetology License', icon: FileText },
  { id: 'proof-insurance', label: 'Proof of Insurance', icon: FileText },
  { id: 'drivers-license', label: "Driver's license", icon: FileText },
  { id: 'health-safety', label: 'Health & Safety Permits', icon: FileText },
  { id: 'passport', label: 'Passport', icon: FileText }
];

const ViewSalon = () => {
  const nav = useNavigate();
  const [mobileService, setMobileService] = useState(true);
  const [customStyle, setCustomStyle] = useState(true);
  const [amenities, setAmenities] = useState({
    parking: true,
    wifi: true,
    creditCards: true,
    childFriendly: true,
    accessible: true,
  });
  const [profileImage, setProfileImage] = useState(
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&crop=faces&q=80" // dummy profile
  );
  const [coverImage, setCoverImage] = useState(
    "https://images.unsplash.com/photo-1503264116251-35a269479413?w=1200&h=400&fit=crop&q=80" // dummy cover
  );
  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  // Modal state
  const [showAddService, setShowAddService] = useState(false);
  const [showEditService, setShowEditService] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [showEditStaff, setShowEditStaff] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  // Sample service data (replace with actual data or API call)
  const [services, setServices] = useState([
    { id: 1, name: "Box Braids", price: "$100.00", duration: "1 hr 30 mins", description: "Lorem Ipsum is simply dummy text", bookable: true },
    { id: 2, name: "Twists", price: "$80.00", duration: "1 hr", description: "Dummy text for twists", bookable: false },
    { id: 3, name: "Cornrows", price: "$90.00", duration: "1 hr 15 mins", description: "Another dummy text", bookable: true },
  ]);

  // Sample staff data (replace with actual data or API call)
  const [staffs, setStaffs] = useState([
    { id: 1, name: "Jordyn Mango", serviceType: "Hair Service", phone: "+1 778 6931 369", email: "jordyn@example.com", isActive: true },
    { id: 2, name: "Alex Rivera", serviceType: "Nail Service", phone: "+1 604 1234 567", email: "alex@example.com", isActive: false },
  ]);

  const [images, setImages] = useState([
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&q=80", // salon hair styling
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=500&q=80", // makeup
    "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=500&q=80", // makeup
    null,
    null,
  ]);

  const handleDeleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const handleDeleteStaff = (id) => {
    setStaffs(staffs.filter((s) => s.id !== id));
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCoverImage(URL.createObjectURL(file));
    }
  };

  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImages = [...images];
        newImages[index] = reader.result;
        setImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen p-2 font-poppins">
      {/* Header */}
      <div className="flex items-center space-x-2  mb-4">
        <div className="cursor-pointer text-[20px]" onClick={() => nav(-1)}><FaArrowLeft /></div>
        <h1 className="text-[50px]  font-semibold font-[Rasa]">Alyvia Kelley</h1>
      </div>

      {/* Cover + Profile */}
      <div
        className="bg-gray-600 rounded-lg p-8 relative mb-5"
        style={{
          backgroundImage: coverImage ? `url(${coverImage})` : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Profile */}
        <div className="flex items-center justify-start">
          <div className="w-25 h-25 bg-gray-400 rounded-full flex items-center justify-start relative overflow-hidden">
            {profileImage && (
              <img
                src={profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            )}

            <input
              type="file"
              accept="image/*"
              ref={profileInputRef}
              className="hidden"
              onChange={handleProfileChange}
            />
          </div>
        </div>

        {/* Cover edit */}
        <Edit
          className="w-5 h-5 text-white absolute top-4 right-4 cursor-pointer"
          onClick={() => coverInputRef.current.click()}
        />
        <input
          type="file"
          accept="image/*"
          ref={coverInputRef}
          className="hidden"
          onChange={handleCoverChange}
        />
      </div>
      <div className="overflow-y-auto max-h-[60vh] mb-10 p-2"
      >
        <div className="space-y-6">
          {/* Amenities */}
          <div className="bg-white rounded-xl shadow p-6">
            <h2 className="text-[32px] text-[#232323] font-medium mb-4">Amenities</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Parking Space", icon: <FaCar /> },
                { label: "Wi-Fi", icon: <FaWifi /> },
                { label: "Child-Friendly", icon: <FaChild /> },
                { label: "Credit Cards Accepted", icon: <FaCreditCard /> },
                { label: "Accessible For People With Disabilities", icon: <FaWheelchair /> },
              ].map((amenity, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-yellow-100 text-gray-800 rounded-md text-sm font-medium"
                >
                  {amenity.label}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-xl shadow p-6 mb-6">
            <h2 className="text-[32px] text-[#232323] font-medium mb-4">Services</h2>

            <div className="border rounded-lg divide-y">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="grid grid-cols-5 items-center p-4 text-sm gap-4"
                >
                  {/* Name */}
                  <p className="font-bold uppercase">{service.name}</p>

                  {/* Size */}
                  <p className="text-gray-700">{service.size}</p>

                  {/* Price */}
                  <p className="flex items-center font-semibold text-gray-800">
                    <FaDollarSign className="mr-1 text-gray-600" /> ${service.price}
                  </p>

                  {/* Duration */}
                  <p className="flex items-center text-gray-700">
                    <FaClock className="mr-1 text-gray-600" /> {service.duration}
                  </p>

                  {/* Description */}
                  <p className="text-gray-500">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Images */}
        <div
          className="bg-white rounded-[20px] p-6 mb-6"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
        >
          <h2 className="text-[20px] md:text-[28px] lg:text-[32px] text-[#232323] font-medium mb-6">
            Portfolio Images
          </h2>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((img, index) => (
              <label
                key={index}
                className="flex flex-col items-center justify-center h-32 w-full rounded-xl border-2 border-dashed border-gray-400 cursor-pointer hover:border-black transition relative overflow-hidden"
              >
                {img ? (
                  <>
                    <img
                      src={img}
                      alt="Uploaded preview"
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {/* Edit icon overlay */}
                    <div className="absolute top-2 right-2 bg-black bg-opacity-60 p-1 rounded-full">
                      <FaEdit className="text-white text-sm" />
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center">
                    <FaPlus className="text-xl mb-2 text-black" />
                    <span className="text-sm text-black">Add New Photo</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFileChange(e, index)}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Staffs */}
        <div className="bg-white rounded-xl shadow p-6 mb-6 overflow-x-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[28px] md:text-[32px] text-[#232323] font-medium">
              Staffs
            </h2>
          </div>

          {/* Table */}
          <div className="w-full">
            <div className="grid grid-cols-5 text-left text-[#232323] font-semibold text-sm md:text-base px-4 py-2">
              <p>Name</p>
              <p>Experience In</p>
              <p>Phone No</p>
              <p>Email</p>
              <p>DOB</p>
            </div>

            {/* Staff Rows */}
            <div className="space-y-3">
              {staffs.map((staff) => (
                <div
                  key={staff.id}
                  className="grid grid-cols-5 items-center bg-white border rounded-lg px-4 py-3 shadow-sm"
                >
                  {/* Name + Image */}
                  <div className="flex items-center space-x-3">
                    <img
                      src={staff.image || "https://via.placeholder.com/50"}
                      alt={staff.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="font-medium text-sm md:text-base">{staff.name}</p>
                  </div>

                  {/* Experience */}
                  <p className="text-sm md:text-base text-gray-700">
                    {staff.serviceType}
                  </p>

                  {/* Phone */}
                  <p className="text-sm md:text-base text-gray-700">
                    {staff.phone}
                  </p>

                  {/* Email */}
                  <p className="text-sm md:text-base text-gray-700 truncate">
                    {staff.email}
                  </p>

                  {/* DOB */}
                  <p className="text-sm md:text-base text-gray-700">{staff.dob}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Business Information */}
        <div
          className="bg-white rounded-[20px] p-6 mb-6 font-poppins"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
        >
          <div className="px-5">
            <h2 className="text-[32px] text-[#232323] font-medium mb-4">
              Business Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EIN */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Employer Identification Number (EIN)
                </label>
                <input
                  className="border p-2 rounded"
                  defaultValue="12-3456789"
                />
              </div>

              {/* EIN Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Field labeled EIN
                </label>
                <input
                  className="border p-2 rounded"
                  defaultValue="EIN-001"
                />
              </div>

              {/* DBA Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Doing Business As (DBA) Name
                </label>
                <input
                  className="border p-2 rounded"
                  defaultValue="Glamour Salon & Spa"
                />
              </div>

              {/* DBA Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Field labeled DBA
                </label>
                <input
                  className="border p-2 rounded"
                  defaultValue="DBA-2025"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Taxpayer Identification */}
        <div
          className="bg-white rounded-[20px] p-6 mb-6"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
        >
          <div className="px-5">
            <h2 className="text-[32px] text-[#232323] font-medium mb-4">Taxpayer Identification</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SSN / ITIN */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Social Security Number (SSN) / ITIN
                </label>
                <input
                  className="border p-2 rounded"
                  defaultValue="123-45-6789"
                />
              </div>

              {/* SSN / ITIN Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Field labeled SSN or ITIN
                </label>
                <input
                  className="border p-2 rounded"
                  defaultValue="ITIN-2025"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Licence & Verification Documents */}

        <div
          className="bg-white rounded-lg p-6 mb-5"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
        >
          <div className="px-5">
            <h2 className="text-[32px] text-[#232323] font-medium mb-6">
              Licence & Verification Documents
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center space-x-3">
                  {/* Left section (with border) */}
                  <div className="flex items-center space-x-3 border border-gray-200 rounded-lg pl-2 flex-1">
                    {/* Icon */}
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-yellow-600" />
                    </div>

                    {/* Label */}
                    <div className="flex-1">
                      <span className="text-sm font-medium text-gray-700">
                        {doc.label}
                      </span>
                    </div>

                    {/* Download button */}
                    <button className="px-6 py-10 bg-gray-400 text-white text-sm font-medium rounded-md hover:bg-gray-500 transition-colors">
                      Download
                    </button>
                  </div>

                  {/* Report button (NO border) */}
                  <button className="w-16 h-16 flex items-center justify-center bg-red-600 text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors">
                    Report
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ViewSalon;