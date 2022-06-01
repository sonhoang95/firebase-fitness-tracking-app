import React from 'react';

const Category = ({ categories, onFilterCategory }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8 mt-4">
      {categories.map(category => (
        <button
          key={category.id}
          className="bg-blue-600 px-4 py-1 rounded-lg text-white hover:bg-blue-800 capitalize"
          onClick={() => onFilterCategory(category.name.toLowerCase())}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default Category;
