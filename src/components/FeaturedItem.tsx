import React from 'react';

interface FeaturedItemProps {
  title: string;
  price: string;
  image: string;
  description: string;
}

export default function FeaturedItem({ title, price, image, description }: FeaturedItemProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-xl">
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <p className="mt-2 text-xl font-bold text-red-600">{price}</p>
      </div>
    </div>
  );
}