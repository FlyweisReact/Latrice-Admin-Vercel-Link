import React, { useState } from 'react';
import { ArrowLeft, Camera, Calendar, Clock, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CreatePromotionForm = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    offerName: '',
    couponCode: '',
    couponType: 'public',
    usageLimit: '',
    unlimitedUsage: false,
    visibility: true,
    discountType: 'flat',
    flatDiscountAmount: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    lifetimeValidity: false
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 font-['Rasa']">
      <div className="max-w-full mx-auto p-6">
        {/* Header */}
        <div className="flex items-center mb-8">
          <ArrowLeft className="w-6 h-6 text-gray-700 mr-4 cursor-pointer" onClick={()=>navigate(-1)}/>
          <h1 className="text-3xl font-semibold text-gray-900">Create Promotions</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image Upload */}
          <div className="space-y-6">
            <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center border-2 border-dashed border-gray-300">
              <Camera className="w-12 h-12 text-gray-500" />
            </div>

            {/* Coupon Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Coupon Type</h3>
              <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="couponType"
                      value="public"
                      checked={formData.couponType === 'public'}
                      onChange={(e) => handleInputChange('couponType', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.couponType === 'public' ? 'border-green-500 bg-green-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {formData.couponType === 'public' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Public Coupon</span>
                  <Info className="w-4 h-4 text-gray-400 ml-2" />
                </label>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="couponType"
                      value="private"
                      checked={formData.couponType === 'private'}
                      onChange={(e) => handleInputChange('couponType', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.couponType === 'private' ? 'border-green-500 bg-green-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {formData.couponType === 'private' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Private Coupon</span>
                  <Info className="w-4 h-4 text-gray-400 ml-2" />
                </label>
              </div>
            </div>

            {/* Number of times code can be used */}
            <div className="space-y-3">
              <label className="block text-gray-700 font-medium">
                Number of times code can be used
              </label>
              <input
                type="text"
                placeholder="e.g. 1000"
                value={formData.usageLimit}
                onChange={(e) => handleInputChange('usageLimit', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.unlimitedUsage}
                  onChange={(e) => handleInputChange('unlimitedUsage', e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-600">Check, if you want to set number of times to unlimited</span>
              </label>
            </div>

            {/* Visibility */}
            <div className="space-y-3">
              <h3 className="text-lg font-medium text-gray-900">Visibility</h3>
              <p className="text-gray-600 text-sm">Toggle OFF, in case you don't want to show this coupon to your users</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-700">On</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.visibility}
                    onChange={(e) => handleInputChange('visibility', e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-12 h-6 rounded-full transition-colors ${formData.visibility ? 'bg-teal-600' : 'bg-gray-300'}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${formData.visibility ? 'translate-x-6' : 'translate-x-0.5'} mt-0.5`}></div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column - Form Fields */}
          <div className="space-y-6">
            {/* Offer Name */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                Offer Name
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </label>
              <input
                type="text"
                placeholder="enter offer name..."
                value={formData.offerName}
                onChange={(e) => handleInputChange('offerName', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Coupon Code */}
            <div className="space-y-2">
              <label className="flex items-center text-gray-700 font-medium">
                Coupon Code
                <Info className="w-4 h-4 text-gray-400 ml-2" />
              </label>
              <input
                type="text"
                placeholder="e.g. LATRICEFLAT25"
                value={formData.couponCode}
                onChange={(e) => handleInputChange('couponCode', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            {/* Discount Type */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Discount Type</h3>
              <div className="flex items-center space-x-6">
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="discountType"
                      value="flat"
                      checked={formData.discountType === 'flat'}
                      onChange={(e) => handleInputChange('discountType', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.discountType === 'flat' ? 'border-green-500 bg-green-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {formData.discountType === 'flat' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Flat Discount</span>
                  <Info className="w-4 h-4 text-gray-400 ml-2" />
                </label>
                <label className="flex items-center cursor-pointer">
                  <div className="relative">
                    <input
                      type="radio"
                      name="discountType"
                      value="percentage"
                      checked={formData.discountType === 'percentage'}
                      onChange={(e) => handleInputChange('discountType', e.target.value)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 ${formData.discountType === 'percentage' ? 'border-green-500 bg-green-500' : 'border-gray-300'} flex items-center justify-center`}>
                      {formData.discountType === 'percentage' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  <span className="ml-3 text-gray-700 font-medium">Percentage Discount</span>
                  <Info className="w-4 h-4 text-gray-400 ml-2" />
                </label>
              </div>
            </div>

            {/* Flat Discount Amount */}
            <div className="space-y-2">
              <label className="block text-gray-700 font-medium">
                Flat Discount Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">$</span>
                <input
                  type="text"
                  placeholder="enter discount amount"
                  value={formData.flatDiscountAmount}
                  onChange={(e) => handleInputChange('flatDiscountAmount', e.target.value)}
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Date and Time Row 1 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Start Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    value={formData.startDate}
                    onChange={(e) => handleInputChange('startDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">Start Time</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="00:00"
                    value={formData.startTime}
                    onChange={(e) => handleInputChange('startTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                  <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Date and Time Row 2 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">End Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD/MM/YYYY"
                    value={formData.endDate}
                    onChange={(e) => handleInputChange('endDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-gray-700 font-medium">End Time</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="00:00"
                    value={formData.endTime}
                    onChange={(e) => handleInputChange('endTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-gray-700 placeholder-gray-400"
                  />
                  <Clock className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Lifetime Validity Checkbox */}
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.lifetimeValidity}
                  onChange={(e) => handleInputChange('lifetimeValidity', e.target.checked)}
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="ml-3 text-gray-600">Check, if you want to see coupon validity to lifetime</span>
              </label>
            </div>

            {/* Create Button */}
            <button className="w-full bg-gray-800 text-orange-400 py-4 rounded-lg font-medium text-lg hover:bg-gray-900 transition-colors">
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePromotionForm;