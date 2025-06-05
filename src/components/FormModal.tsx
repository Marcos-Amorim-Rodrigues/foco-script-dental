import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
}
interface FormData {
  nomeClinica: string;
  instagram: string;
  cidade: string;
  telefone: string;
  faturamento: string;
  procedimentoPrincipal: string;
  perfilPacientes: string;
  nomeSecretaria: string;
}
const procedimentosOptions = ["Clareamento dental", "Implantes", "Ortodontia/Aparelhos", "Lentes de contato dental", "Próteses", "Periodontia", "Endodontia", "Cirurgia oral", "Odontopediatria", "Harmonização facial"];
const FormModal = ({
  isOpen,
  onClose
}: FormModalProps) => {
  const [formData, setFormData] = useState<FormData>({
    nomeClinica: "",
    instagram: "",
    cidade: "",
    telefone: "",
    faturamento: "",
    procedimentoPrincipal: "",
    perfilPacientes: "",
    nomeSecretaria: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast
  } = useToast();
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nomeClinica || !formData.cidade || !formData.telefone || !formData.procedimentoPrincipal) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      });
      return;
    }
    setIsLoading(true);
    try {
      console.log("Enviando dados via EmailJS:", formData);
      const emailParams = {
        nome_clinica: formData.nomeClinica,
        instagram: formData.instagram,
        cidade: formData.cidade,
        telefone: formData.telefone,
        faturamento: formData.faturamento || "Não informado",
        procedimento_principal: formData.procedimentoPrincipal,
        perfil_pacientes: formData.perfilPacientes,
        nome_secretaria: formData.nomeSecretaria || "Não informado"
      };
      await emailjs.send('service_53u6edm', 'template_6i8so5r', emailParams, 'AENd6qqqchcIP5Kia');
      toast({
        title: "Dados enviados com sucesso!",
        description: "Seus scripts personalizados estão sendo gerados..."
      });

      // Store form data in localStorage to use in scripts page
      localStorage.setItem('clinicData', JSON.stringify(formData));

      // Navigate to scripts page
      navigate('/scripts');
      onClose();
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({
        title: "Erro ao enviar dados",
        description: "Tente novamente em alguns instantes.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  return <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-black text-center">
            Dados da Sua Clínica
          </DialogTitle>
          <p className="text-gray-600 text-center">
            Preencha as informações para gerar scripts personalizados
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="nomeClinica" className="text-black font-medium">
                Nome da Clínica *
              </Label>
              <Input id="nomeClinica" value={formData.nomeClinica} onChange={e => setFormData(prev => ({
              ...prev,
              nomeClinica: e.target.value
            }))} placeholder="Ex: Clínica Sorriso Ideal" className="border-gray-200 focus:border-blue-600" required />
            </div>

            <div>
              <Label htmlFor="instagram" className="text-black font-medium">
                @ do Instagram
              </Label>
              <Input id="instagram" value={formData.instagram} onChange={e => setFormData(prev => ({
              ...prev,
              instagram: e.target.value
            }))} placeholder="@clinicasorriso" className="border-gray-200 focus:border-blue-600" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="cidade" className="text-black font-medium">
                Cidade *
              </Label>
              <Input id="cidade" value={formData.cidade} onChange={e => setFormData(prev => ({
              ...prev,
              cidade: e.target.value
            }))} placeholder="Ex: São Paulo - SP" className="border-gray-200 focus:border-blue-600" required />
            </div>

            <div>
              <Label htmlFor="telefone" className="text-black font-medium">
                Número de telefone (WhatsApp com DDD) *
              </Label>
              <Input id="telefone" type="tel" value={formData.telefone} onChange={e => setFormData(prev => ({
              ...prev,
              telefone: e.target.value
            }))} placeholder="Ex: (11) 99999-9999" className="border-gray-200 focus:border-blue-600" required />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="procedimentoPrincipal" className="text-black font-medium">
                Procedimento principal oferecido na clínica *
              </Label>
              <Select onValueChange={value => setFormData(prev => ({
              ...prev,
              procedimentoPrincipal: value
            }))}>
                <SelectTrigger className="border-gray-200 focus:border-blue-600">
                  <SelectValue placeholder="Selecione um procedimento" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {procedimentosOptions.map(procedimento => <SelectItem key={procedimento} value={procedimento}>
                      {procedimento}
                    </SelectItem>)}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="faturamento" className="text-black font-medium">
                Faturamento Mensal
              </Label>
              <Select onValueChange={value => setFormData(prev => ({
              ...prev,
              faturamento: value
            }))}>
                <SelectTrigger className="border-gray-200 focus:border-blue-600">
                  <SelectValue placeholder="Selecione uma faixa" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  <SelectItem value="ate-50k">Até R$ 50.000</SelectItem>
                  <SelectItem value="50k-100k">R$ 50.000 - R$ 100.000</SelectItem>
                  <SelectItem value="100k-200k">R$ 100.000 - R$ 200.000</SelectItem>
                  <SelectItem value="acima-200k">Acima de R$ 200.000</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="perfilPacientes" className="text-black font-medium">
              Perfil dos Pacientes
            </Label>
            <Textarea id="perfilPacientes" value={formData.perfilPacientes} onChange={e => setFormData(prev => ({
            ...prev,
            perfilPacientes: e.target.value
          }))} placeholder="Ex: Jovens de 20 a 35 anos, classe média, preocupados com estética..." className="border-gray-200 focus:border-blue-600" rows={3} />
          </div>

          <div>
            <Label htmlFor="nomeSecretaria" className="text-black font-medium">
              Nome da Secretária/Atendente
            </Label>
            <Input id="nomeSecretaria" value={formData.nomeSecretaria} onChange={e => setFormData(prev => ({
            ...prev,
            nomeSecretaria: e.target.value
          }))} placeholder="Ex: Ana, Carla, Maria..." className="border-gray-200 focus:border-blue-600" />
          </div>

          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50">
              Cancelar
            </Button>
            <Button type="submit" disabled={isLoading} className="flex-1 text-white bg-[#274587]">
              {isLoading ? "Gerando Scripts..." : "Gerar Scripts"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>;
};
export default FormModal;