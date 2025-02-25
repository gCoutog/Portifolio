import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Palette, Layout, Search } from 'lucide-react';
import { MobilePreview } from '../components/MobilePreview';

    interface Project {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    demoUrl: string;
    githubUrl: string;
    implementation: {
        title: string;
        description: string;
        icon: React.ReactNode;
    }[];
    }

    export const Projects: React.FC = () => {
    const [isMobilePreviewOpen, setIsMobilePreviewOpen] = useState(false);

    const projects: Project[] = [
        {
        title: 'Portfólio Profissional',
        description: 'Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS, apresentando uma experiência de usuário fluida e design elegante.',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
        features: [
            'Design responsivo e moderno',
            'Tema dark personalizado',
            'Sistema de busca e filtros',
            'Navegação fluida entre páginas'
        ],
        demoUrl: '#',
        githubUrl: 'https://github.com/username/portfolio',
        implementation: [
            {
            title: 'Arquitetura React Moderna',
            description: 'Desenvolvido com React 18 e TypeScript, utilizando hooks personalizados e componentes reutilizáveis. A estrutura do projeto foi organizada em módulos para melhor manutenibilidade.',
            icon: <Code2 className="w-6 h-6 text-primary" />
            },
            {
            title: 'Design System Personalizado',
            description: 'Sistema de design construído com Tailwind CSS, incluindo uma paleta de cores personalizada, tipografia consistente e componentes estilizados para manter a identidade visual.',
            icon: <Palette className="w-6 h-6 text-primary" />
            },
            {
            title: 'Layout Responsivo',
            description: 'Interface adaptativa desenvolvida com Flexbox e Grid, garantindo uma experiência consistente em diferentes dispositivos e tamanhos de tela.',
            icon: <Layout className="w-6 h-6 text-primary" />
            },
            {
            title: 'Sistema de Busca e Filtros',
            description: 'Implementação de busca em tempo real e sistema de filtros na página de Stack, permitindo encontrar tecnologias rapidamente por nome, nível ou categoria.',
            icon: <Search className="w-6 h-6 text-primary" />
            }
        ]
        }
    ];

    return (
        <div className="min-h-screen bg-dark-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Projetos em Destaque
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Conheça em detalhes os projetos que desenvolvi utilizando as tecnologias mais modernas
            </p>
            </div>

            <div className="mt-16">
            {projects.map((project) => (
                <div key={project.title} className="bg-dark-800 rounded-lg shadow-lg overflow-hidden border border-dark-900">
                <div className="relative h-64 lg:h-96">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-gray-300">{project.description}</p>
                    </div>
                </div>

                <div className="p-6">
                    <div className="mb-8">
                    <h4 className="font-medium text-white mb-4">Tecnologias utilizadas:</h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary"
                        >
                            {tech}
                        </span>
                        ))}
                    </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.implementation.map((item, index) => (
                        <div key={index} className="bg-dark-900 rounded-lg p-6 hover:bg-dark-800 transition-colors duration-300">
                        <div className="flex items-center mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                            {item.icon}
                            </div>
                            <h5 className="ml-4 text-lg font-medium text-white">{item.title}</h5>
                        </div>
                        <p className="text-gray-400">{item.description}</p>
                        </div>
                    ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                    <button
                        onClick={() => setIsMobilePreviewOpen(true)}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90"
                    >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                    </button>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 border border-primary text-base font-medium rounded-md shadow-sm text-primary bg-transparent hover:bg-primary/10"
                    >
                        <Github className="w-4 h-4 mr-2" />
                        <a href="https://github.com/gCoutog/Portifolio.git">Código Fonte</a>
                    </a>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>

        <MobilePreview
            isOpen={isMobilePreviewOpen}
            onClose={() => setIsMobilePreviewOpen(false)}
        />
        </div>
    );
    };