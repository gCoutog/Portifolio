import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image, tags }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <div className="relative h-48">
        <img className="w-full h-full object-cover" src={image} alt={title} />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};