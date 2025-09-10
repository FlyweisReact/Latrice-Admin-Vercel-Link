import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { FaCar, FaWifi, FaCreditCard, FaChild, FaWheelchair } from "react-icons/fa";
import AddNewServiceModal from "./EditSalon/AddNewServiceModal";
import EditServiceModal from "./EditSalon/EditServiceModal";
import AddNewStaffModal from "./EditSalon/AddNewStaffModal";
import EditStaffModal from "./EditSalon/EditStaffModal";
import { useNavigate } from "react-router-dom";
import { Edit, FileText } from "lucide-react";
import SuccessBook from '../../assets/images/Successbook.gif'

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

const AddSalon = () => {

  const documents = [
    { id: 'business-license', label: 'Business License', icon: FileText },
    { id: 'cosmetology-license', label: 'Cosmetology License', icon: FileText },
    { id: 'proof-insurance', label: 'Proof of Insurance', icon: FileText },
    { id: 'drivers-license', label: "Driver's license", icon: FileText },
    { id: 'health-safety', label: 'Health & Safety Permits', icon: FileText },
    { id: 'passport', label: 'Passport', icon: FileText }
  ];

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

  // Modal state
  const [showAddService, setShowAddService] = useState(false);
  const [showEditService, setShowEditService] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [showAddStaff, setShowAddStaff] = useState(false);
  const [showEditStaff, setShowEditStaff] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [showPopup, setShowPopup] = useState(false);



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

  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const profileInputRef = useRef(null);
  const coverInputRef = useRef(null);
  const [images, setImages] = useState(Array(5).fill(null));

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



  const handleDeleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const handleDeleteStaff = (id) => {
    setStaffs(staffs.filter((s) => s.id !== id));
  };
  const handleAdd = () => {
    // You can also trigger API calls here before showing popup
    setShowPopup(true);
  };

  // Auto close after 3 seconds
  useEffect(() => {
    if (showPopup) {
      const timer = setTimeout(() => {
        setShowPopup(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showPopup]);
  return (
    <div className=" min-h-screen font-poppins p-2">
      {/* Header */}
      <div className="flex items-center space-x-2  mb-4 text-[#2F2F2F]">
        <div className="cursor-pointer text-[30px]" onClick={() => nav(-1)}><FaArrowLeft /></div>
        <h1 className="text-[50px]  font-semibold font-[Rasa]">Add A New Salon</h1>
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
            <div
              className="w-6 h-6  bg-yellow-400 rounded-full absolute bottom-0 right-5 flex items-center justify-center cursor-pointer"
              onClick={() => profileInputRef.current.click()}
            >
              <Edit className="w-3 h-3 text-gray-800" />
            </div>
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
        {/* Business Details */}
        <div
          className="bg-white rounded-[20px] p-6 mb-6 font-poppins"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
        >
          <div className="px-5">
            <h2 className="text-[32px] text-[#232323] font-medium mb-4">Business Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#232323]">
              {/* Business Name */}
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-1">Name of your business</label>
                <input
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                  placeholder="Enter business name"
                />
              </div>

              {/* Location */}
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-1">Location</label>
                <input
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                  placeholder="Enter location"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                  placeholder="Enter email address"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                  placeholder="Enter phone number"
                />
              </div>

              {/* Service Radius */}
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-1">Service Radius (miles)</label>
                <input
                  type="number"
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                  placeholder="Enter radius"
                />
              </div>

              {/* Country */}
              <div className="flex flex-col">
                <label className="text-[16px] font-medium mb-1">Country</label>
                <input
                  className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#123E41]"
                  placeholder="Enter country"
                />
              </div>
            </div>

            {/* Toggles Section */}
            <div className="flex flex-col md:flex-row justify-between mt-6 gap-4">
              <div className="flex items-center space-x-2">
                <span className="text-[#232323] text-[16px] font-semibold md:text-base">Is this a mobile salon service?</span>
                <Toggle enabled={mobileService} setEnabled={setMobileService} />
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-[#232323] text-[16px] font-semibold md:text-base">Do you accept custom style requests?</span>
                <Toggle enabled={customStyle} setEnabled={setCustomStyle} />
              </div>
            </div>
          </div>
        </div>


        {/* Amenities */}
        <div
          className="bg-white rounded-[20px] p-6 mb-6 font-poppins text-[#232323]"
          style={{
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.08), 0px 0px 6px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="px-5">
            <h2 className="text-[32px] text-[#232323] font-medium mb-4">Amenities</h2>

            <div className="flex flex-wrap gap-x-12 gap-y-6 sm:gap-x-16 lg:gap-x-44 lg:gap-y-10">
              {/* Parking */}
              <label className="flex items-center gap-2 cursor-pointer">
                <FaCar className="text-xl sm:text-2xl" />
                <span className="text-sm sm:text-base">Parking Space</span>
                <input
                  type="checkbox"
                  checked={amenities.parking}
                  onChange={(e) =>
                    setAmenities((prev) => ({ ...prev, parking: e.target.checked }))
                  }
                  className="w-[20px] h-[20px] accent-[#123E41] rounded-[20px]"
                />
              </label>

              {/* Wi-Fi */}
              <label className="flex items-center gap-2 cursor-pointer">
                <FaWifi className="text-xl sm:text-2xl" />
                <span className="text-sm sm:text-base">Wi-Fi</span>
                <input
                  type="checkbox"
                  checked={amenities.wifi}
                  onChange={(e) =>
                    setAmenities((prev) => ({ ...prev, wifi: e.target.checked }))
                  }
                  className="w-[20px] h-[20px] accent-[#123E41] rounded-md"
                />
              </label>

              {/* Credit Cards */}
              <label className="flex items-center gap-2 cursor-pointer">
                <FaCreditCard className="text-xl sm:text-2xl" />
                <span className="text-sm sm:text-base">Credit Cards Accepted</span>
                <input
                  type="checkbox"
                  checked={amenities.creditCards}
                  onChange={(e) =>
                    setAmenities((prev) => ({ ...prev, creditCards: e.target.checked }))
                  }
                  className="w-[20px] h-[20px] accent-[#123E41] rounded-md"
                />
              </label>

              {/* Child Friendly */}
              <label className="flex items-center gap-2 cursor-pointer">
                <FaChild className="text-xl sm:text-2xl" />
                <span className="text-sm sm:text-base">Child-Friendly</span>
                <input
                  type="checkbox"
                  checked={amenities.childFriendly}
                  onChange={(e) =>
                    setAmenities((prev) => ({ ...prev, childFriendly: e.target.checked }))
                  }
                  className="w-[20px] h-[20px] accent-[#123E41] rounded-md"
                />
              </label>

              {/* Accessible */}
              <label className="flex items-center gap-2 cursor-pointer">
                <FaWheelchair className="text-xl sm:text-2xl" />
                <span className="text-sm sm:text-base">
                  Accessible For People With Disabilities
                </span>
                <input
                  type="checkbox"
                  checked={amenities.accessible}
                  onChange={(e) =>
                    setAmenities((prev) => ({ ...prev, accessible: e.target.checked }))
                  }
                  className="w-[20px] h-[20px] accent-[#123E41] rounded-md"
                />
              </label>
            </div>
          </div>
        </div>


        {/* Services */}
        <div className="bg-white rounded-[20px] p-6 mb-6 font-poppins"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
        >
          <div className="px-5">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[32px] text-[#232323] font-medium">Services</h2>
              <div className="border border-[#8C8C8C] px-4 py-2 rounded-lg">
                <button
                  onClick={() => setShowAddService(true)}
                  className="  flex items-center space-x-2 text-sm hover:bg-gray-100 transition"
                >
                  <FaPlus /> <span>Add A New Service</span>
                </button>
              </div>
            </div>
            <div className="divide-y border rounded-lg">
              {services.map((service) => (
                <div key={service.id} className="flex justify-between items-center p-4 text-sm">
                  <div className="flex flex-col">
                    <p className="font-bold uppercase">{service.name}</p>
                    <div className="flex flex-wrap gap-x-4 text-gray-700 mt-1">
                      <span>Small, Butt-Length</span>
                      <span>{service.price}</span>
                      <span>⏳ {service.duration}</span>
                    </div>
                    <p className="text-gray-500 mt-1">{service.description}</p>
                  </div>
                  <div className="flex space-x-4 text-sm">
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setShowEditService(true);
                      }}
                      className="flex items-center space-x-1 text-gray-700 hover:text-black"
                    >
                      <FaEdit /> <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDeleteService(service.id)}
                      className="flex items-center space-x-1 text-red-500 hover:text-red-700"
                    >
                      <FaTrash /> <span>Delete</span>
                    </button>
                  </div>
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
                  <img
                    src={img}
                    alt="Uploaded preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
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
        <div
          className="bg-white rounded-[20px] p-6 mb-6"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[24px] md:text-[32px] text-[#232323] font-medium">
              Staffs
            </h2>
            <div className="border border-[#8C8C8C] px-3 py-2 rounded-lg">
              <button
                onClick={() => setShowAddStaff(true)}
                className="flex items-center  text-sm text-[#232323] hover:bg-gray-50 transition"
              >
                <FaPlus className="mr-2" /> Add A New Staff
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="hidden md:grid grid-cols-6 text-sm font-medium text-[#232323] pb-3 mb-3">
            <div>Name</div>
            <div>Experience In</div>
            <div>Phone No</div>
            <div>Email</div>
            <div>DOB</div>
            <div>Action</div>
          </div>

          {/* Table Rows */}
          {staffs.length > 0 ? (
            staffs.map((staff) => (
              <div
                key={staff.id}
                className="grid grid-cols-1 md:grid-cols-6 items-center gap-3 py-4 px-4 rounded-[15px] mb-4 bg-white"
                style={{
                  boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
                }}
              >
                {/* Avatar + Name */}
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded" /> {/* Square Avatar */}
                  <span className="text-sm font-medium">{staff.name}</span>
                </div>

                <div className="text-sm">{staff.serviceType}</div>
                <div className="text-sm">{staff.phone}</div>
                <div className="text-sm">{staff.email}</div>
                <div className="text-sm">{staff.dob}</div>

                <div className="flex space-x-3 text-sm">
                  <button className="text-blue-500 flex items-center space-x-1 hover:underline">
                    <FaEdit /> <span>Edit</span>
                  </button>
                  <button className="text-red-500 flex items-center space-x-1 hover:underline">
                    <FaTrash /> <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div
              className="w-full py-6 text-center text-gray-400 rounded-[15px] bg-white"
              style={{
                boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
              }}
            >
              No staff added yet
            </div>
          )}
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
                  placeholder="Enter here"
                />
              </div>

              {/* EIN Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Field labeled EIN
                </label>
                <input
                  className="border p-2 rounded"
                  placeholder="Enter here"
                />
              </div>

              {/* DBA Name */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Doing Business As (DBA) Name
                </label>
                <input
                  className="border p-2 rounded"
                  placeholder="Enter here"
                />
              </div>

              {/* DBA Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Field labeled DBA
                </label>
                <input
                  className="border p-2 rounded"
                  placeholder="Enter here"
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
            <h2 className="text-xl font-semibold mb-4">Taxpayer Identification</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SSN / ITIN */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Social Security Number (SSN) / ITIN
                </label>
                <input
                  className="border p-2 rounded"
                  placeholder="Enter here"
                />
              </div>

              {/* SSN / ITIN Field */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-[#232323] mb-1">
                  Field labeled SSN or ITIN
                </label>
                <input
                  className="border p-2 rounded"
                  placeholder="Enter here"
                />
              </div>
            </div>
          </div>
        </div>


        {/* Licence & Verification Documents */}
        <div className="bg-white rounded-lg p-6 mb-5"
          style={{
            boxShadow: "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
          }}>
          <div className="px-5">
            <h2 className="text-[32px] text-[#232323] font-medium mb-6">Licence & Verification Documents</h2>

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
        </div>
        {/* Save Button */}
        <div className="flex justify-center">
          <button className="bg-[#2F2F2F] text-[#FFCC4E] px-56 py-4 text-[20px] rounded-lg font-medium"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>



      {/* Modals */}
      <AddNewServiceModal isOpen={showAddService} onClose={() => setShowAddService(false)} />
      <EditServiceModal
        isOpen={showEditService}
        onClose={() => setShowEditService(false)}
        service={selectedService}
      />
      <AddNewStaffModal isOpen={showAddStaff} onClose={() => setShowAddStaff(false)} />
      <EditStaffModal
        isOpen={showEditStaff}
        onClose={() => setShowEditStaff(false)}
        staff={selectedStaff}
      />
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div
            className="bg-white rounded-[20px] p-10 text-center animate-fadeIn"
            style={{
              boxShadow:
                "0px 4px 4px 0px #EEEEEE80, 0px 0px 4px 0px #00000040",
            }}
          >
            {/* Success GIF */}
            <img
              src={SuccessBook}
              alt="success"
              className="w-[180px] h-[180px] mx-auto mb-6 object-contain"
            />

            {/* Message */}
            <p className="text-lg md:text-xl font-medium text-[#232323]">
              You Successfully Added A New Salon.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};

export default AddSalon;