import React, { useState } from 'react';
import axios from 'axios';
import Footer from '../components/layout/Footer';
import Header from '../components/layout/Header';
import Image from 'next/image';

const CreateListingPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: '',
    location: '',
    tags: '',
    allowCalls: false,
    allowTexts: false,
    allowEmails: false,
  });

  const [categorySpecificFields, setCategorySpecificFields] = useState<JSX.Element | null>(null);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
  
    // Only check for 'checked' if it's a checkbox input
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
  
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };
  

  // Handle image preview
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setImageFiles(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  // Handle category-specific fields
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setFormData({ ...formData, category });

    // Dynamically generate fields based on category selection
    switch (category) {
      case 'electronics':
        setCategorySpecificFields(
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Brand</label>
              <input
                type="text"
                name="brand"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Model</label>
              <input
                type="text"
                name="model"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </>
        );
        break;
      case 'vehicles':
        setCategorySpecificFields(
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Make</label>
              <input
                type="text"
                name="make"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Model</label>
              <input
                type="text"
                name="model"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Year</label>
              <input
                type="number"
                name="year"
                min="1900"
                max="2099"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Mileage</label>
              <input
                type="number"
                name="mileage"
                min="0"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </>
        );
        break;
      case 'real_estate':
        setCategorySpecificFields(
          <>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Property Type</label>
              <select name="propertyType" onChange={handleInputChange} className="w-full px-3 py-2 border rounded-lg">
                <option value="">Select property type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Bedrooms</label>
              <input
                type="number"
                name="bedrooms"
                min="0"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Bathrooms</label>
              <input
                type="number"
                name="bathrooms"
                min="0"
                step="0.5"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Square Footage</label>
              <input
                type="number"
                name="sqft"
                min="0"
                onChange={handleInputChange}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
          </>
        );
        break;
      default:
        setCategorySpecificFields(null);
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const finalFormData = new FormData();

    // Add basic form data
    for (const [key, value] of Object.entries(formData)) {
      finalFormData.append(key, value.toString());
    }

    // Add images
    imageFiles.forEach(file => {
      finalFormData.append('images', file);
    });

    try {
      await axios.post('/api/listings', finalFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Listing created successfully!');
    } catch (error) {
      console.error('Error creating listing:', error);
      alert('An error occurred while creating the listing. Please try again.');
    }
    
  };

  return (
    <>
    <Header/>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Create a New Listing</h1>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-bold mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">$</span>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleCategoryChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="vehicles">Vehicles</option>
            <option value="real_estate">Real Estate</option>
            <option value="services">Services</option>
            <option value="jobs">Jobs</option>
            <option value="other">Other</option>
          </select>
        </div>

        {categorySpecificFields}

        <div className="mb-4">
          <label htmlFor="condition" className="block text-gray-700 font-bold mb-2">Condition</label>
          <select
            id="condition"
            name="condition"
            value={formData.condition}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          >
            <option value="">Select condition</option>
            <option value="new">New</option>
            <option value="like_new">Like New</option>
            <option value="excellent">Excellent</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="poor">Poor</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="images" className="block text-gray-700 font-bold mb-2">Images</label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            onChange={handleImageChange}
            multiple
            className="w-full px-3 py-2 border rounded-lg"
          />
        </div>

        {/* Image Preview */}
        <div id="imagePreview" className="mb-4 flex flex-wrap gap-2">
          {imagePreviews.map((preview, index) => (
            <Image key={index} src={preview} alt="Preview" className="w-24 h-24 object-cover rounded" />
          ))}
        </div>

        <div className="mb-4">
          <label htmlFor="tags" className="block text-gray-700 font-bold mb-2">Tags (comma-separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg"
            placeholder="e.g. smartphone, android, 5G"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Contact Preferences</label>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="allowCalls"
              name="allowCalls"
              checked={formData.allowCalls}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="allowCalls" className="mr-4">Allow phone calls</label>
            <input
              type="checkbox"
              id="allowTexts"
              name="allowTexts"
              checked={formData.allowTexts}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="allowTexts" className="mr-4">Allow text messages</label>
            <input
              type="checkbox"
              id="allowEmails"
              name="allowEmails"
              checked={formData.allowEmails}
              onChange={handleInputChange}
              className="mr-2"
            />
            <label htmlFor="allowEmails">Allow emails</label>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Create Listing
        </button>
      </form>
      
    </div>
    <Footer/>
    </>
  );
};

export default CreateListingPage;
