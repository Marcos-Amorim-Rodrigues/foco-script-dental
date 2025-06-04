import { useState } from "react";
import { Button } from "@/components/ui/button";
import FormModal from "@/components/FormModal";
import Footer from "@/components/Footer";
import { MessageSquare, Heart, Users } from "lucide-react";
const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <img src="/lovable-uploads/998adc47-d1d3-4c61-8f54-ad13ab2186d0.png" alt="Foco Marketing" className="h-20" />
            <div className="text-sm text-gray-600">
              by Foco Marketing
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <MessageSquare className="mx-auto mb-6 h-16 w-16" style={{
            color: '#274587'
          }} />
            <h1 className="text-5xl font-bold text-black mb-6">
              Gere scripts campeões em agendar novos pacientes para sua clínica odontológica
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transforme a comunicação da sua clínica odontológica com mensagens estratégicas, 
              humanas e persuasivas para cada etapa do relacionamento com seus pacientes.
            </p>
            <Button onClick={() => setIsModalOpen(true)} className="text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{
            backgroundColor: '#274587'
          }} onMouseEnter={e => e.target.style.backgroundColor = '#1e3766'} onMouseLeave={e => e.target.style.backgroundColor = '#274587'}>
              Criar Meus Scripts Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <Heart className="mx-auto mb-4 h-12 w-12" style={{
              color: '#274587'
            }} />
              <h3 className="text-xl font-semibold text-black mb-3">Comunicação Humanizada</h3>
              <p className="text-gray-600">
                Scripts naturais e acolhedores que fortalecem o relacionamento com seus pacientes.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <Users className="mx-auto mb-4 h-12 w-12" style={{
              color: '#274587'
            }} />
              <h3 className="text-xl font-semibold text-black mb-3">Totalmente Personalizado</h3>
              <p className="text-gray-600">
                Adaptado ao perfil da sua clínica, procedimentos oferecidos e público-alvo.
              </p>
            </div>
            <div className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <MessageSquare className="mx-auto mb-4 h-12 w-12" style={{
              color: '#274587'
            }} />
              <h3 className="text-xl font-semibold text-black mb-3">Estratégico e Eficaz</h3>
              <p className="text-gray-600">
                Baseado em copywriting e psicologia para aumentar conversões e fidelização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-black mb-8">
              Scripts para todas as etapas do atendimento, incluindo quebras de objeções e mensagens campeãs para aumentar o agendamento de pacientes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-black mb-2">✅ Primeiro Contato</h4>
                <p className="text-gray-600">Para conquistar novos pacientes</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-black mb-2">✅ Confirmação de Consultas</h4>
                <p className="text-gray-600">Reduza faltas e no-shows</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-black mb-2">✅ Lembretes Estratégicos</h4>
                <p className="text-gray-600">Mantenha pacientes engajados</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h4 className="font-semibold text-black mb-2">✅ Follow-up Inteligente</h4>
                <p className="text-gray-600">Reative pacientes inativos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>;
};
export default Index;