
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-gray-600 hover:text-black"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <img 
                src="/lovable-uploads/998adc47-d1d3-4c61-8f54-ad13ab2186d0.png" 
                alt="Foco Marketing" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-black mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Informações que Coletamos</h2>
            <p className="text-gray-600 mb-4">
              Coletamos informações que você nos fornece diretamente, como nome, e-mail, telefone e informações sobre sua clínica odontológica.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Como Usamos suas Informações</h2>
            <p className="text-gray-600 mb-4">
              Utilizamos suas informações para gerar scripts personalizados, melhorar nossos serviços e entrar em contato quando necessário.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Proteção de Dados</h2>
            <p className="text-gray-600 mb-4">
              Implementamos medidas de segurança adequadas para proteger suas informações pessoais contra acesso não autorizado.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Contato</h2>
            <p className="text-gray-600 mb-4">
              Se você tiver dúvidas sobre esta política, entre em contato conosco através do e-mail contato@agenciafocomkt.com.br.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
