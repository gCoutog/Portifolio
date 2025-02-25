import React, { useState } from 'react';
import { Code2, Database, Globe, Server, Search, LayoutGrid, List } from 'lucide-react';

interface TechItem {
  name: string;
  description: string;
  icon: React.ReactNode;
  details: string[];
  level: string;
  experience: string;
  category: string;
}

export const Stack: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [isGridView, setIsGridView] = useState(true);

  const technologies: TechItem[] = [
    {
      name: 'React',
      description: 'Biblioteca para interfaces modernas',
      icon: <Globe className="w-8 h-8 text-primary" />,
      details: [
        'Desenvolvimento de componentes reutilizáveis',
        'Gerenciamento de estado com hooks',
        'Integração com TypeScript',
        'Roteamento com React Router'
      ],
      level: 'Avançado',
      experience: '4 anos',
      category: 'Frontend'
    },
    {
      name: 'Angular',
      description: 'Framework robusto para aplicações escaláveis',
      icon: <Globe className="w-8 h-8 text-primary" />,
      details: [
        'Desenvolvimento de aplicações enterprise',
        'Arquitetura modular com NgModules',
        'Gerenciamento de estado com RxJS',
        'Testes unitários com Jasmine'
      ],
      level: 'Intermediário',
      experience: '2 anos',
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      description: 'Desenvolvimento tipado e seguro',
      icon: <Code2 className="w-8 h-8 text-primary" />,
      details: [
        'Tipagem estática para maior segurança',
        'Interfaces e tipos personalizados',
        'Integração com ferramentas modernas',
        'Melhor experiência de desenvolvimento'
      ],
      level: 'Avançado',
      experience: '3 anos',
      category: 'Linguagem'
    },
    {
      name: 'Node.js',
      description: 'Runtime JavaScript para backend',
      icon: <Server className="w-8 h-8 text-primary" />,
      details: [
        'APIs RESTful',
        'Integração com bancos de dados',
        'Middleware e autenticação',
        'Gerenciamento de pacotes com npm'
      ],
      level: 'Avançado',
      experience: '3 anos',
      category: 'Backend'
    },
    {
      name: 'PostgreSQL',
      description: 'Banco de dados relacional',
      icon: <Database className="w-8 h-8 text-primary" />,
      details: [
        'Modelagem de dados relacional',
        'Queries otimizadas',
        'Transações e consistência',
        'Backups e recuperação'
      ],
      level: 'Intermediário',
      experience: '2 anos',
      category: 'Banco de Dados'
    }
  ];

  const levels = ['Iniciante', 'Intermediário', 'Avançado'];
  const categories = ['Frontend', 'Backend', 'Banco de Dados', 'Linguagem'];

  const filteredTechnologies = technologies.filter((tech) => {
    const matchesSearch = tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tech.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLevel = !selectedLevel || tech.level === selectedLevel;
    const matchesCategory = !selectedCategory || tech.category === selectedCategory;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredTechnologies.map((tech) => (
        <div
          key={tech.name}
          className="bg-dark-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-dark-800 p-6"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-dark-900 rounded-lg p-3">
              {tech.icon}
            </div>
            <div className="ml-4">
              <div className="flex items-center flex-wrap gap-2">
                <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary bg-opacity-20 text-primary">
                  {tech.level}
                </span>
              </div>
              <p className="text-gray-300">{tech.description}</p>
            </div>
          </div>
          
          <div className="mt-4">
            <h4 className="text-lg font-medium text-white mb-2">Principais características:</h4>
            <ul className="space-y-2">
              {tech.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 h-6 w-6 text-primary flex items-center justify-center">•</span>
                  <span className="ml-2 text-gray-300">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-6">
      {filteredTechnologies.map((tech) => (
        <div
          key={tech.name}
          className="bg-dark-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-dark-800"
        >
          <div className="p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0 bg-dark-900 rounded-lg p-3">
                {tech.icon}
              </div>
              <div className="ml-6">
                <div className="flex items-center flex-wrap gap-2">
                  <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-primary bg-opacity-20 text-primary">
                    {tech.level}
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-dark-900 text-gray-300">
                    {tech.category}
                  </span>
                  <span className="text-sm text-gray-400">
                    {tech.experience} de experiência
                  </span>
                </div>
                <p className="mt-1 text-lg text-gray-300">{tech.description}</p>
              </div>
            </div>
            
            <div className="mt-6 pl-20">
              <h4 className="text-lg font-medium text-white mb-4">Principais características:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tech.details.map((detail, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-primary flex items-center justify-center">•</span>
                    <span className="ml-3 text-gray-300">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-dark-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Stack Tecnológica
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Tecnologias que utilizo para criar soluções robustas e escaláveis
          </p>
        </div>

        {/* Search, Filters and View Toggle */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 w-full">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Pesquisar tecnologias..."
                className="block w-full pl-10 pr-3 py-2 border border-dark-800 rounded-md leading-5 bg-dark-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button
              onClick={() => setIsGridView(!isGridView)}
              className="p-2 rounded-md bg-dark-800 hover:bg-dark-900 transition-colors duration-200 flex items-center gap-2 text-gray-400 hover:text-white border border-dark-800"
              title={isGridView ? "Mudar para lista" : "Mudar para grade"}
            >
              {isGridView ? (
                <>
                  <List className="w-5 h-5" />
                  <span className="text-sm">Lista</span>
                </>
              ) : (
                <>
                  <LayoutGrid className="w-5 h-5" />
                  <span className="text-sm">Grade</span>
                </>
              )}
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-dark-800 bg-dark-800 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="">Todos os níveis</option>
                {levels.map((level) => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>
            
            <div className="flex-1 min-w-[200px]">
              <select
                className="block w-full pl-3 pr-10 py-2 text-base border-dark-800 bg-dark-800 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="">Todas as categorias</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8">
          {filteredTechnologies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">Nenhuma tecnologia encontrada com os filtros selecionados.</p>
            </div>
          ) : isGridView ? (
            <GridView />
          ) : (
            <ListView />
          )}
        </div>
      </div>
    </div>
  );
};