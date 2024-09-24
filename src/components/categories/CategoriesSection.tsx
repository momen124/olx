import React from "react";
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";

interface Category {
  name: string;
  icon: string;
  link: string;
}

const categories: Category[] = [
  { name: "Electronics", icon: "fas fa-mobile-alt", link: "/category/electronics" },
  { name: "Vehicles", icon: "fas fa-car", link: "/category/vehicles" },
  { name: "Furniture", icon: "fas fa-couch", link: "/category/furniture" },
  { name: "Real Estate", icon: "fas fa-home", link: "/category/real-estate" },
];

const CategoriesSection: React.FC = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (link: string) => {
    navigate(link); // Navigate to the category page
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-4">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.name} onClick={() => handleCategoryClick(category.link)}>
            <CategoryCard category={category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
