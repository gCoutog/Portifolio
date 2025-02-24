import React from 'react';

interface TechItem {
  name: string;
  description: string;
  icon: string;
}

export const TechStack: React.FC = () => {
  const technologies: TechItem[] = [
    {
      name: 'Angular',
      description: 'Framework robusto para aplicações escaláveis',
      icon: 'https://angular.io/assets/images/logos/angular/angular.svg',
    },
    {
      name: 'Node.js',
      description: 'Backend JavaScript de alta performance',
      icon: 'https://nodejs.org/static/images/logo.svg',
    },
    {
      name: 'TypeScript',
      description: 'Desenvolvimento tipado e seguro',
      icon: 'https://raw.githubusercontent.com/remojansen/logo.ts/master/ts.png',
    },
    {
      name: 'MongoDB',
      description: 'Banco de dados NoSQL flexível',
      icon: 'https://www.mongodb.com/assets/images/global/leaf.png',
    },
  ];

  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {technologies.map((tech) => (
          <div key={tech.name} className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-20">
              <img className="h-16 w-16 object-contain" src={tech.icon} alt={tech.name} />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium text-gray-900">{tech.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};