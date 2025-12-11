"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FAQCategoriesProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FAQCategories = ({ categories, activeCategory, onCategoryChange }: FAQCategoriesProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? "default" : "outline"}
          className={cn(
            "rounded-full px-6 py-2 text-base font-medium",
            activeCategory === category
              ? "bg-blue-700 hover:bg-blue-800 text-white"
              : "bg-white hover:bg-gray-100 text-gray-700 border-gray-300"
          )}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default FAQCategories;