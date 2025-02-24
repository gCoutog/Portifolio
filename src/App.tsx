
import { Routes, Route, Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Code2, Database, Globe, Server, ExternalLink } from 'lucide-react';
import { Stack } from './pages/stack';
import { Projects } from './pages/project';

function App() {
  const featuredTechnologies = [
    {
      name: 'React',
      icon: <Globe className="w-6 h-6 text-primary" />,
      description: 'Biblioteca para interfaces modernas'
    },
    {
      name: 'TypeScript',
      icon: <Code2 className="w-6 h-6 text-primary" />,
      description: 'Desenvolvimento tipado e seguro'
    },
    {
      name: 'Node.js',
      icon: <Server className="w-6 h-6 text-primary" />,
      description: 'Runtime JavaScript para backend'
    },
    {
      name: 'PostgreSQL',
      icon: <Database className="w-6 h-6 text-primary" />,
      description: 'Banco de dados relacional'
    }
  ];

  const featuredProjects = [
    {
      title: 'Portfólio Profissional',
      description: 'Um portfólio moderno e responsivo com tema dark personalizado.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
      technologies: ['React', 'TypeScript', 'Tailwind CSS']
    }
  ];

  return (
    <div className="min-h-screen bg-dark-900">
      {/* Navigation */}
      <nav className="bg-dark-800 border-b border-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">Couto.dev</Link>
            </div>
            <div className="flex space-x-8">
              <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white">Home</Link>
              <Link to="/projects" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-white">Projetos</Link>
              <Link to="/stack" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-white">Stack</Link>
              <Link to="/contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-400 hover:text-white">Contato</Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/stack" element={<Stack />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/" element={
          <div className="bg-dark-900">
            {/* Hero Section */}
            <div className="relative bg-dark-900 overflow-hidden">
              <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-dark-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                  <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                    <div className="sm:text-center lg:text-left">
                      <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                        <span className="block">Desenvolvedor Full Stack</span>
                        <span className="block text-primary">React & TypeScript</span>
                      </h1>
                      <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        Criando experiências web modernas e escaláveis com as melhores práticas de desenvolvimento.
                      </p>
                      <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                          <Link
                            to="/projects"
                            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 md:py-4 md:text-lg md:px-10"
                          >
                            Ver Projetos
                          </Link>
                        </div>
                        <div className="mt-3 sm:mt-0 sm:ml-3">
                          <Link
                            to="/contact"
                            className="w-full flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10 md:py-4 md:text-lg md:px-10"
                          >
                            Contato
                          </Link>
                        </div>
                      </div>
                    </div>
                  </main>
                </div>
              </div>
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
                  alt="Developer workspace"
                />
              </div>
            </div>

            {/* Stack Section */}
            <div className="py-16 bg-dark-800">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Stack Tecnológica</h2>
                  <p className="mt-4 text-lg text-gray-400">Principais tecnologias que utilizo em meus projetos</p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                  {featuredTechnologies.map((tech) => (
                    <div key={tech.name} className="bg-dark-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-dark-800">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-dark-800 mx-auto">
                        {tech.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-white text-center">{tech.name}</h3>
                      <p className="mt-2 text-sm text-gray-400 text-center">{tech.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Link
                    to="/stack"
                    className="inline-flex items-center px-6 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/10"
                  >
                    Ver Stack Completa
                    <ExternalLink className="ml-2 -mr-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Projects Section */}
            <div className="py-16 bg-dark-900">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-white">Projetos em Destaque</h2>
                  <p className="mt-4 text-lg text-gray-400">Conheça alguns dos meus principais trabalhos</p>
                </div>
                <div className="mt-12 grid grid-cols-1 gap-8">
                  {featuredProjects.map((project) => (
                    <div key={project.title} className="bg-dark-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-dark-900">
                      <div className="relative h-48">
                        <img
                          className="w-full h-full object-cover"
                          src={project.image}
                          alt={project.title}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-lg font-medium text-white">{project.title}</h3>
                        <p className="mt-2 text-sm text-gray-400">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/20 text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 text-center">
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
                  >
                    Ver Todos os Projetos
                    <ExternalLink className="ml-2 -mr-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        } />
      </Routes>

      {/* Footer */}
      <footer className="bg-dark-800 border-t border-dark-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-white text-lg font-bold">Couto.dev</h3>
              <p className="mt-2 text-gray-400 text-sm">
                Desenvolvedor Full Stack especializado em React e TypeScript
              </p>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Links Rápidos</h3>
              <ul className="mt-4 space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                <li><Link to="/projects" className="text-gray-400 hover:text-white">Projetos</Link></li>
                <li><Link to="/stack" className="text-gray-400 hover:text-white">Stack</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Redes Sociais</h3>
              <div className="mt-4 flex space-x-4">
                <a href="https://github.com" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
                <a href="https://linkedin.com" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://twitter.com" className="text-gray-400 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-dark-900 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © 2025 Couto.dev. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;