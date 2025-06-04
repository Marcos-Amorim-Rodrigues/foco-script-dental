
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { generateScripts } from "@/utils/scriptGenerator";
import Footer from "@/components/Footer";
import { 
  MessageSquare, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Heart, 
  UserPlus, 
  Megaphone,
  Copy,
  Download,
  ArrowLeft,
  Shield
} from "lucide-react";

interface Script {
  fase: string;
  script: string;
  icon: any;
}

const ScriptsPage = () => {
  const [scripts, setScripts] = useState<Script[]>([]);
  const [objectionScripts, setObjectionScripts] = useState<Script[]>([]);
  const [clinicData, setClinicData] = useState<any>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const scriptIcons = {
    "Primeiro contato": MessageSquare,
    "Confirmação de agendamento": Calendar,
    "Lembrete 1 dia antes": Clock,
    "Lembrete no dia da consulta": Clock,
    "Pós-consulta": CheckCircle,
    "Follow-up tratamento": Heart,
    "Follow-up pacientes inativos": UserPlus,
    "Campanha promocional": Megaphone
  };

  useEffect(() => {
    const storedData = localStorage.getItem('clinicData');
    if (!storedData) {
      navigate('/');
      return;
    }

    const data = JSON.parse(storedData);
    setClinicData(data);
    
    const generatedScripts = generateScripts(data);
    
    // Separate regular scripts from objection scripts
    const regularScripts = generatedScripts
      .filter(script => !script.fase.startsWith('Objeção:'))
      .map(script => ({
        ...script,
        icon: scriptIcons[script.fase as keyof typeof scriptIcons] || MessageSquare
      }));
    
    const objections = generatedScripts
      .filter(script => script.fase.startsWith('Objeção:'))
      .map(script => ({
        ...script,
        icon: Shield
      }));
    
    setScripts(regularScripts);
    setObjectionScripts(objections);
  }, [navigate]);

  const copyToClipboard = (text: string, fase: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Script copiado!",
      description: `Script de "${fase}" copiado para a área de transferência.`,
    });
  };

  const exportScripts = () => {
    const allScripts = [...scripts, ...objectionScripts];
    const textContent = allScripts.map(script => 
      `=== ${script.fase.toUpperCase()} ===\n\n${script.script}\n\n`
    ).join('');
    
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `scripts-whatsapp-${clinicData?.nomeClinica?.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Scripts exportados!",
      description: "Arquivo baixado com sucesso.",
    });
  };

  if (!clinicData) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
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
              <div>
                <h1 className="text-2xl font-bold text-black">
                  Scripts para {clinicData.nomeClinica}
                </h1>
                <p className="text-gray-600">
                  {scripts.length} scripts personalizados gerados
                </p>
              </div>
            </div>
            <Button 
              onClick={exportScripts}
              className="text-white"
              style={{ backgroundColor: '#274587' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#1e3766'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#274587'}
            >
              <Download className="h-4 w-4 mr-2" />
              Exportar Todos
            </Button>
          </div>
        </div>
      </header>

      {/* Scripts Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-6">
          {scripts.map((script, index) => {
            const IconComponent = script.icon;
            return (
              <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-black">
                    <div className="p-2 rounded-lg bg-blue-100">
                      <IconComponent className="h-5 w-5" style={{ color: '#274587' }} />
                    </div>
                    {script.fase}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                      {script.script}
                    </p>
                  </div>
                  <Button
                    onClick={() => copyToClipboard(script.script, script.fase)}
                    variant="outline"
                    className="w-full border-blue-200 text-blue-600 hover:bg-blue-50"
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copiar Script
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Objection Scripts Section */}
        {objectionScripts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">
              🛡️ Quebras de objeções mais comuns sobre {clinicData.procedimentoPrincipal}
            </h3>
            <div className="grid lg:grid-cols-2 gap-6">
              {objectionScripts.map((script, index) => {
                const IconComponent = script.icon;
                return (
                  <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-orange-500">
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-3 text-black">
                        <div className="p-2 rounded-lg bg-orange-100">
                          <IconComponent className="h-5 w-5 text-orange-600" />
                        </div>
                        {script.fase.replace('Objeção: ', '')}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-orange-50 p-4 rounded-lg mb-4">
                        <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">
                          {script.script}
                        </p>
                      </div>
                      <Button
                        onClick={() => copyToClipboard(script.script, script.fase)}
                        variant="outline"
                        className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar Script
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-black mb-6 text-center">
            💡 Dicas para Usar os Scripts
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold text-black">✅ Personalize quando necessário</h4>
              <p className="text-gray-600">Adapte os scripts conforme a situação específica de cada paciente.</p>
              
              <h4 className="font-semibold text-black">✅ Mantenha o tom humano</h4>
              <p className="text-gray-600">Use os scripts como base, mas adicione seu toque pessoal na conversa.</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-black">✅ Teste e ajuste</h4>
              <p className="text-gray-600">Monitore as respostas e ajuste os scripts conforme necessário.</p>
              
              <h4 className="font-semibold text-black">✅ Seja consistente</h4>
              <p className="text-gray-600">Use os scripts regularmente para manter um padrão de qualidade.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Footer */}
      <Footer />
    </div>
  );
};

export default ScriptsPage;
