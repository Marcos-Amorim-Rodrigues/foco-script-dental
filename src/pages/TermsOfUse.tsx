
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TermsOfUse = () => {
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
          <h1 className="text-4xl font-bold text-black mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              Estes Termos de Uso regem o uso de nossos serviços de geração de scripts para clínicas odontológicas.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Aceitação dos Termos</h2>
            <p className="text-gray-600 mb-4">
              Ao utilizar nossos serviços, você concorda com estes termos e condições.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Uso dos Scripts</h2>
            <p className="text-gray-600 mb-4">
              Os scripts gerados são personalizados para sua clínica e devem ser utilizados de forma responsável e ética.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Propriedade Intelectual</h2>
            <p className="text-gray-600 mb-4">
              Os scripts gerados são de propriedade da Foco Marketing, mas você tem direito de uso para sua clínica.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Limitação de Responsabilidade</h2>
            <p className="text-gray-600 mb-4">
              A Foco Marketing não se responsabiliza por resultados específicos obtidos com o uso dos scripts.
            </p>

            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Contato</h2>
            <p className="text-gray-600 mb-4">
              Para esclarecimentos sobre estes termos, entre em contato através do e-mail contato@agenciafocomkt.com.br.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
