import React, { useState } from "react";
import { FaArrowLeft, FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Switch } from "@headlessui/react";
import { FaCar, FaWifi, FaCreditCard, FaChild, FaWheelchair } from "react-icons/fa";
import AddNewServiceModal from "./EditSalon/AddNewServiceModal";
import EditServiceModal from "./EditSalon/EditServiceModal";
import AddNewStaffModal from "./EditSalon/AddNewStaffModal";
import EditStaffModal from "./EditSalon/EditStaffModal";
import { useNavigate } from "react-router-dom";


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

  const handleDeleteService = (id) => {
    setServices(services.filter((s) => s.id !== id));
  };

  const handleDeleteStaff = (id) => {
    setStaffs(staffs.filter((s) => s.id !== id));
  };

  return (
    <div className="font-[Rasa] min-h-screen p-2">
      {/* Header */}
      <div className="flex items-center space-x-2 text-2xl font-bold mb-4">
        <div className="cursor-pointer" onClick={()=>nav(-1)}><FaArrowLeft /></div>
        <h1>Add Salon</h1>
      </div>

      {/* Cover + Profile */}
      <div className="relative rounded-2xl overflow-hidden mb-6">
        <img
          src="https://via.placeholder.com/800x200"
          alt="cover"
          className="w-full h-40 object-cover"
        />
        <div className="absolute -bottom-8 left-6 flex items-center">
          <div className="relative">
            <img
              src="https://via.placeholder.com/80"
              alt="profile"
              className="w-20 h-20 rounded-full border-4 border-white"
            />
            <button className="absolute bottom-1 right-1 bg-yellow-400 p-1 rounded-full">
              <FaEdit className="text-white text-xs" />
            </button>
          </div>
        </div>
      </div>

      {/* Business Details */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Business Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Name of your business" />
          <input className="border p-2 rounded" placeholder="Location" />
          <input className="border p-2 rounded" placeholder="Email Address" />
          <input className="border p-2 rounded" placeholder="Phone Number" />
          <input className="border p-2 rounded" placeholder="Service Radius (miles)" />
          <input className="border p-2 rounded" placeholder="Country" />
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex items-center space-x-2">
            <span>Is this a mobile salon service?</span>
            <Toggle enabled={mobileService} setEnabled={setMobileService} />
          </div>
          <div className="flex items-center space-x-2">
            <span>Do you accept custom style requests?</span>
            <Toggle enabled={customStyle} setEnabled={setCustomStyle} />
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 font-[Rasa]">
        <h2 className="text-xl font-semibold mb-4">Amenities</h2>
        <div className="flex flex-wrap gap-x-10 gap-y-6">
          {/* Parking */}
          <div className="flex items-center space-x-2">
            <FaCar className="text-2xl" />
            <span className="text-base">Parking Space</span>
            <Toggle
              enabled={amenities.parking}
              setEnabled={(val) => setAmenities((prev) => ({ ...prev, parking: val }))}
            />
          </div>
          {/* Wi-Fi */}
          <div className="flex items-center space-x-2">
            <FaWifi className="text-2xl" />
            <span className="text-base">Wi-Fi</span>
            <Toggle
              enabled={amenities.wifi}
              setEnabled={(val) => setAmenities((prev) => ({ ...prev, wifi: val }))}
            />
          </div>
          {/* Credit Cards */}
          <div className="flex items-center space-x-2">
            <FaCreditCard className="text-2xl" />
            <span className="text-base">Credit Cards Accepted</span>
            <Toggle
              enabled={amenities.creditCards}
              setEnabled={(val) => setAmenities((prev) => ({ ...prev, creditCards: val }))}
            />
          </div>
          {/* Child Friendly */}
          <div className="flex items-center space-x-2">
            <FaChild className="text-2xl" />
            <span className="text-base">Child-Friendly</span>
            <Toggle
              enabled={amenities.childFriendly}
              setEnabled={(val) => setAmenities((prev) => ({ ...prev, childFriendly: val }))}
            />
          </div>
          {/* Accessible */}
          <div className="flex items-center space-x-2">
            <FaWheelchair className="text-2xl" />
            <span className="text-base">Accessible For People With Disabilities</span>
            <Toggle
              enabled={amenities.accessible}
              setEnabled={(val) => setAmenities((prev) => ({ ...prev, accessible: val }))}
            />
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="bg-white rounded-xl shadow p-6 mb-6 font-[Rasa]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Services</h2>
          <button
            onClick={() => setShowAddService(true)}
            className="border px-4 py-2 rounded-lg flex items-center space-x-2 text-sm hover:bg-gray-100 transition"
          >
            <FaPlus /> <span>Add A New Service</span>
          </button>
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

      {/* Portfolio Images */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Portfolio Images</h2>
        <div className="flex space-x-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative">
              <img
                src="https://via.placeholder.com/100"
                alt="portfolio"
                className="w-24 h-24 rounded-lg object-cover"
              />
              <button className="absolute top-1 right-1 bg-black bg-opacity-60 text-white p-1 rounded">
                <FaEdit className="text-xs" />
              </button>
            </div>
          ))}
          {[1, 2].map((i) => (
            <div
              key={i}
              className="w-24 h-24 flex items-center justify-center border-2 border-dashed rounded-lg text-gray-400"
            >
              <FaPlus /> Add New Photo
            </div>
          ))}
        </div>
      </div>

      {/* Staffs */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Staffs</h2>
          <button
            onClick={() => setShowAddStaff(true)}
            className="border px-4 py-2 rounded-lg flex items-center space-x-2"
          >
            <FaPlus /> <span>Add A New Staff</span>
          </button>
        </div>
        <div className="space-y-4">
          {staffs.map((staff) => (
            <div key={staff.id} className="flex justify-between items-center border p-4 rounded-lg">
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="staff"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">{staff.name}</p>
                  <p className="text-sm text-gray-500">
                    {staff.serviceType} • {staff.phone} • {staff.email}
                  </p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => {
                    setSelectedStaff(staff);
                    setShowEditStaff(true);
                  }}
                  className="text-blue-500 flex items-center space-x-1"
                >
                  <FaEdit /> <span>Edit</span>
                </button>
                <button
                  onClick={() => handleDeleteStaff(staff.id)}
                  className="text-red-500 flex items-center space-x-1"
                >
                  <FaTrash /> <span>Delete</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Business Information */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Business Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Employer Identification Number (EIN)" />
          <input className="border p-2 rounded" placeholder="Field labeled EIN" />
          <input className="border p-2 rounded" placeholder="Doing Business As (DBA) Name" />
          <input className="border p-2 rounded" placeholder="Field labeled DBA" />
        </div>
      </div>

      {/* Taxpayer Identification */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Taxpayer Identification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="border p-2 rounded" placeholder="Social Security Number (SSN) / ITIN" />
          <input className="border p-2 rounded" placeholder="Field labeled SSN or ITIN" />
        </div>
      </div>

      {/* Licence & Verification Documents */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Licence & Verification Documents</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            "Business License",
            "Cosmetology License",
            "Proof of Insurance",
            "Driver’s License",
            "Health & Safety Permits",
            "Passport",
          ].map((doc) => (
            <div key={doc} className="flex items-center justify-between border p-3 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="bg-yellow-200 p-2 rounded-lg">📄</span>
                <span>{doc}</span>
              </div>
              <button className="bg-gray-300 px-4 py-2 rounded">Upload New Document</button>
            </div>
          ))}
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center">
        <button className="bg-black text-yellow-400 px-10 py-3 rounded-lg font-semibold">
          Add
        </button>
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
    </div>
  );
};

export default AddSalon;