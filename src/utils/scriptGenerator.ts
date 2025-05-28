
interface ClinicData {
  nomeClinica: string;
  instagram: string;
  cidade: string;
  faturamento: string;
  procedimentos: string[];
  perfilPacientes: string;
  nomeSecretaria: string;
}

interface Script {
  fase: string;
  script: string;
}

export const generateScripts = (data: ClinicData): Script[] => {
  const nomeSecretaria = data.nomeSecretaria || "nossa equipe";
  const nomeClinica = data.nomeClinica;
  const procedimentosPrincipais = data.procedimentos.slice(0, 2);
  const isPerfilJovem = data.perfilPacientes.toLowerCase().includes('jovem') || 
                       data.perfilPacientes.toLowerCase().includes('20') ||
                       data.perfilPacientes.toLowerCase().includes('30');
  
  const emojis = isPerfilJovem ? "😊" : "🙂";
  const saudacao = isPerfilJovem ? "Oi!" : "Olá!";
  
  const scripts: Script[] = [
    {
      fase: "Primeiro contato",
      script: `${saudacao} Tudo bem? ${emojis} Aqui é ${data.nomeSecretaria ? `a ${data.nomeSecretaria}` : 'da equipe'}, da ${nomeClinica}! 

Vi que você demonstrou interesse nos nossos serviços! ${procedimentosPrincipais.length > 0 ? `Especialistas em ${procedimentosPrincipais[0].toLowerCase()}${procedimentosPrincipais[1] ? ` e ${procedimentosPrincipais[1].toLowerCase()}` : ''}! ` : ''}

Como posso te ajudar? 💙`
    },
    {
      fase: "Confirmação de agendamento", 
      script: `${saudacao} Passando aqui para confirmar seu agendamento na ${nomeClinica}! 

📅 Data: [INSERIR DATA]
⏰ Horário: [INSERIR HORÁRIO]
📍 Local: ${data.cidade}

Confirma sua presença? Qualquer imprevisto, me avise com antecedência para reagendarmos! ${emojis}`
    },
    {
      fase: "Lembrete 1 dia antes",
      script: `${saudacao} Lembrete carinhoso! ${emojis}

Sua consulta na ${nomeClinica} está marcada para amanhã às [HORÁRIO]! 

Algumas orientações importantes:
• Chegue 10 minutos antes
• Traga um documento com foto
• ${procedimentosPrincipais.includes('Clareamento dental') ? 'Evite alimentos escuros hoje' : 'Mantenha sua higiene bucal em dia'}

Nos vemos amanhã! 💙`
    },
    {
      fase: "Lembrete no dia da consulta",
      script: `Bom dia! ☀️

Só lembrando que sua consulta na ${nomeClinica} é hoje às [HORÁRIO]! 

Estamos ansiosos para te receber e cuidar do seu sorriso! ${emojis}

Qualquer dúvida ou imprevisto, me chame imediatamente!

Te esperamos! 💙`
    },
    {
      fase: "Pós-consulta",
      script: `${saudacao} Esperamos que tenha gostado do atendimento na ${nomeClinica}! ${emojis}

Algumas orientações importantes:
• [INSERIR ORIENTAÇÕES ESPECÍFICAS DO PROCEDIMENTO]
• Qualquer desconforto ou dúvida, entre em contato
• Mantenha a higiene bucal conforme orientado

${procedimentosPrincipais.length > 0 ? `Lembrando que também realizamos ${procedimentosPrincipais.join(' e ').toLowerCase()}! ` : ''}

Obrigad${data.nomeSecretaria ? 'a' : 'o'} pela confiança! 💙`
    },
    {
      fase: "Follow-up tratamento",
      script: `${saudacao} Como você está se sentindo após o procedimento na ${nomeClinica}? ${emojis}

Queria saber se:
• Está seguindo as orientações que passamos
• Tem alguma dúvida ou desconforto
• Precisa de algum esclarecimento

${procedimentosPrincipais.includes('Ortodontia/Aparelhos') ? 'Lembre-se: o resultado do tratamento ortodôntico depende muito da sua colaboração!' : 'Lembre-se: o cuidado contínuo é essencial para manter os resultados!'}

Estamos aqui para te ajudar! 💙`
    },
    {
      fase: "Follow-up pacientes inativos",
      script: `${saudacao} Que saudades! ${emojis}

Faz um tempo que não nos vemos na ${nomeClinica} e queria saber como você está!

Criamos algumas novidades especiais que podem te interessar:
${procedimentosPrincipais.map(p => `• ${p}`).join('\n')}

Que tal agendar uma avaliação? Tenho alguns horários especiais disponíveis para você! 

Responda se tiver interesse! 💙`
    },
    {
      fase: "Campanha promocional",
      script: `🎉 PROMOÇÃO ESPECIAL - ${nomeClinica}! 

${procedimentosPrincipais.length > 0 ? `✨ ${procedimentosPrincipais[0]} com condições imperdíveis!` : '✨ Condições especiais em todos os procedimentos!'}

🔥 Benefícios:
• Desconto exclusivo para novos pacientes
• Parcelamento facilitado
• Avaliação gratuita
• Atendimento personalizado em ${data.cidade}

⏰ Vagas limitadas! 

Quer saber mais? Responda "QUERO" e te passo todos os detalhes! 

#${data.instagram ? data.instagram.replace('@', '') : 'focomkt'} 💙`
    }
  ];

  return scripts;
};
