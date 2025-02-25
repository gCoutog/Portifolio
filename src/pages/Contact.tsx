import React, { useState } from 'react';
import { Mail, Phone, Send, ExternalLink, Loader2 } from 'lucide-react';

    export const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
        // Aqui você pode implementar a lógica de envio do email
        // Por exemplo, usando um serviço como EmailJS ou uma API própria
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulação
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
        setSubmitStatus('error');
        } finally {
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus('idle'), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="min-h-screen bg-dark-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Entre em Contato
            </h2>
            <p className="mt-4 text-lg text-gray-400">
                Vamos conversar sobre seu próximo projeto
            </p>
            </div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <div className="space-y-8">
                <div className="bg-dark-800 p-8 rounded-lg border border-dark-800">
                <h3 className="text-xl font-semibold text-white mb-6">
                    Informações de Contato
                </h3>
                
                <div className="space-y-6">
                    <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-400">Email</p>
                        <a
                        href="mailto:seu.email@exemplo.com"
                        className="text-white hover:text-primary transition-colors"
                        >
                        seu.email@exemplo.com
                        </a>
                    </div>
                    </div>

                    <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div className="ml-4">
                        <p className="text-sm font-medium text-gray-400">Telefone</p>
                        <a
                        href="tel:+5511999999999"
                        className="text-white hover:text-primary transition-colors"
                        >
                        +55 (11) 99999-9999
                        </a>
                    </div>
                    </div>
                </div>

                <div className="mt-8">
                    <h4 className="text-lg font-medium text-white mb-4">
                    Redes Sociais
                    </h4>
                    <div className="flex space-x-4">
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        LinkedIn
                        <ExternalLink className="inline-block ml-1 w-4 h-4" />
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        GitHub
                        <ExternalLink className="inline-block ml-1 w-4 h-4" />
                    </a>
                    </div>
                </div>
                </div>

                <div className="bg-dark-800 p-8 rounded-lg border border-dark-800">
                <h3 className="text-xl font-semibold text-white mb-4">
                    Horário de Trabalho
                </h3>
                <div className="space-y-2">
                    <p className="text-gray-400">
                    Segunda a Sexta: 9h às 18h
                    </p>
                    <p className="text-gray-400">
                    Sábado e Domingo: Fechado
                    </p>
                </div>
                </div>
            </div>

            {/* Formulário de Contato */}
            <div className="bg-dark-800 p-8 rounded-lg border border-dark-800">
                <h3 className="text-xl font-semibold text-white mb-6">
                Envie uma Mensagem
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400">
                    Nome
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-dark-900 border-dark-800 text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-dark-900 border-dark-800 text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400">
                    Assunto
                    </label>
                    <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-dark-900 border-dark-800 text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                    Mensagem
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md bg-dark-900 border-dark-800 text-white shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    required
                    />
                </div>

                <div>
                    <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                        isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    >
                    {isSubmitting ? (
                        <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Enviando...
                        </>
                    ) : (
                        <>
                        <Send className="w-5 h-5 mr-2" />
                        Enviar Mensagem
                        </>
                    )}
                    </button>
                </div>

                {submitStatus === 'success' && (
                    <div className="p-4 rounded-md bg-green-500/10 text-green-500">
                    Mensagem enviada com sucesso!
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="p-4 rounded-md bg-red-500/10 text-red-500">
                    Erro ao enviar mensagem. Tente novamente.
                    </div>
                )}
                </form>
            </div>
            </div>
        </div>
        </div>
    );
    };