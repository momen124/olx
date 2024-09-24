import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FeaturedListingCard from "../components/listings/FeaturedListingCard "; // Ensure you import your card component

const items = {
    electronics: [
      {
        id: 1,
        title: "iPhone 12",
        price: "$999",
        location: "Online",
        imgSrc: "/path/to/image.jpg", // Provide a valid image source
        link: "/product/iphone12",
      },
      {
        id: 2,
        title: "Samsung Galaxy S21",
        price: "$899",
        location: "Online",
        imgSrc: "/path/to/image.jpg",
        link: "/product/galaxy-s21",
      },
    ],
    // ... other categories
  };
  

const CategoryItemsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();

  // Ensure category is valid and exists in the items object
  const categoryItems = category && items[category as keyof typeof items] ? items[category as keyof typeof items] : [];

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">
          {category ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') : "Category"} Items
        </h1>
        {categoryItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryItems.map((item) => (
              <FeaturedListingCard key={item.id} listing={item} />
            ))}
          </div>
        ) : (
          <p>No items found in this category.</p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryItemsPage;
