import React from 'react';
import { X } from 'lucide-react';

    interface MobilePreviewProps {
    isOpen: boolean;
    onClose: () => void;
    }

    export const MobilePreview: React.FC<MobilePreviewProps> = ({ isOpen, onClose }) => {
    return (
        <div
        className={`fixed inset-y-0 right-0 w-[375px] bg-dark-900 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50`}
        >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-dark-800">
            <h3 className="text-lg font-medium text-white">Visualização Mobile</h3>
            <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-dark-800 transition-colors"
            >
            <X className="w-5 h-5 text-gray-400" />
            </button>
        </div>

        {/* Mobile Frame */}
        <div className="p-4">
            <div className="relative w-full h-[667px] rounded-3xl border-8 border-dark-800 overflow-hidden bg-dark-800">
            {/* Status Bar */}
            <div className="h-6 bg-dark-800 flex items-center justify-between px-4">
                <span className="text-xs text-gray-400">9:41</span>
                <div className="flex items-center space-x-1">
                <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                <div className="w-4 h-4 rounded-full border border-gray-400"></div>
                </div>
            </div>

            {/* Content */}
            <div className="h-[calc(100%-1.5rem)] overflow-y-auto bg-dark-900">
                {/* Hero Section */}
                <div className="p-4 text-center">
                <h1 className="text-2xl font-bold text-white mb-2">
                    Desenvolvedor Full Stack
                </h1>
                <p className="text-primary font-semibold mb-4">React & TypeScript</p>
                <p className="text-sm text-gray-400 mb-6">
                    Criando experiências web modernas e escaláveis
                </p>
                <div className="space-y-2">
                    <button className="w-full py-2 px-4 bg-primary text-white rounded-md">
                    Ver Projetos
                    </button>
                    <button className="w-full py-2 px-4 border border-primary text-primary rounded-md">
                    Contato
                    </button>
                </div>
                </div>

                {/* Stack Preview */}
                <div className="p-4 bg-dark-800">
                <h2 className="text-xl font-bold text-white mb-4">Stack</h2>
                <div className="grid grid-cols-2 gap-4">
                    {['React', 'TypeScript', 'Node.js', 'PostgreSQL'].map((tech) => (
                    <div key={tech} className="bg-dark-900 p-3 rounded-lg">
                        <p className="text-sm font-medium text-white">{tech}</p>
                    </div>
                    ))}
                </div>
                </div>

                {/* Projects Preview */}
                <div className="p-4">
                <h2 className="text-xl font-bold text-white mb-4">Projetos</h2>
                <div className="space-y-4">
                    <div className="bg-dark-800 rounded-lg p-4">
                    <h3 className="text-white font-medium mb-2">Portfólio Profissional</h3>
                    <p className="text-sm text-gray-400">
                        Um portfólio moderno e responsivo com tema dark personalizado
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };