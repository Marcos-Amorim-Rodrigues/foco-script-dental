
interface ClinicData {
  nomeClinica: string;
  instagram: string;
  cidade: string;
  telefone: string;
  faturamento: string;
  procedimentoPrincipal: string;
  perfilPacientes: string;
  nomeSecretaria: string;
}

interface Script {
  fase: string;
  script: string;
}

interface ObjectionScript {
  objecao: string;
  script: string;
}

const getObjectionsByProcedure = (procedimento: string): ObjectionScript[] => {
  const objections: Record<string, ObjectionScript[]> = {
    "Clareamento dental": [
      {
        objecao: "É muito caro",
        script: "Entendo sua preocupação com o investimento! 😊 Na verdade, o clareamento é um dos procedimentos com melhor custo-benefício na odontologia. Pense que é um investimento no seu sorriso que pode durar anos e impactar positivamente sua autoestima e confiança! Que tal agendar uma avaliação gratuita para conversarmos sobre opções de pagamento? Tenho certeza que encontraremos uma forma que caiba no seu orçamento! 💙"
      },
      {
        objecao: "Tenho medo de sensibilidade",
        script: "Sua preocupação é super válida e muito comum! 🤗 Hoje em dia, os produtos que usamos são muito mais avançados e causam bem menos sensibilidade. Além disso, fazemos todo um protocolo de proteção e acompanhamento durante o tratamento. A maioria dos nossos pacientes fica surpresa com o quão tranquilo é o processo! Que tal agendar uma consulta para eu explicar direitinho como funciona? Você vai ficar bem mais tranquil@! ✨"
      },
      {
        objecao: "Não tenho tempo",
        script: "Imagino como sua rotina deve ser corrida! ⏰ A boa notícia é que o clareamento é super prático - as sessões são rápidas e temos horários flexíveis, inclusive no final do dia e aos sábados! Além disso, você pode fazer a manutenção em casa. Em pouco tempo você já vê resultado e economiza tempo no futuro, pois o sorriso fica lindo por muito tempo! Que tal verificarmos um horário que encaixe na sua agenda? 😊"
      }
    ],
    "Implantes": [
      {
        objecao: "É muito caro",
        script: "Entendo perfeitamente sua preocupação! 💛 O implante realmente é um investimento, mas é literalmente um investimento para a vida toda! Diferente de outras opções temporárias, o implante é permanente e você não precisará gastar mais com substituições. Além disso, temos várias formas de pagamento e você pode parcelar de forma bem tranquila. Que tal agendar uma avaliação gratuita para conversarmos sobre as opções? 🦷"
      },
      {
        objecao: "Tenho medo da cirurgia",
        script: "Sua preocupação é muito natural! 🤗 A cirurgia de implante hoje é muito mais simples do que as pessoas imaginam. É um procedimento minimamente invasivo, feito com anestesia local, e a maioria dos pacientes fica surpresa com o quão tranquilo é! Muitos voltam ao trabalho no dia seguinte. Usamos tecnologia de ponta e você fica super confortável durante todo o processo. Que tal agendar uma consulta para eu te explicar cada etapa? Tenho certeza que você ficará mais tranquil@! ✨"
      },
      {
        objecao: "Demora muito para ficar pronto",
        script: "Entendo sua ansiedade! 😊 Realmente o implante tem suas etapas, mas o resultado vale muito a pena! Durante o processo, você não fica sem dente - temos soluções provisórias lindas! E o tempo passa rápido quando você sabe que está investindo em algo definitivo. Muitos pacientes me falam que foi a melhor decisão que tomaram para a qualidade de vida! Que tal agendar uma avaliação para te mostrar nosso planejamento digital? Você vai adorar ver como ficará seu novo sorriso! 🦷✨"
      }
    ],
    "Ortodontia/Aparelhos": [
      {
        objecao: "Demora muito tempo",
        script: "Entendo sua ansiedade! ⏰ Realmente o tratamento ortodôntico precisa de tempo, mas hoje temos opções muito mais rápidas que antigamente! O tempo varia de caso para caso, e com acompanhamento certinho, muitos pacientes ficam surpresos como o tempo 'voa'! Além disso, você já começa a ver melhorias desde os primeiros meses. Que tal agendar uma avaliação gratuita para te mostrar um planejamento personalizado com previsão real do seu caso? 😊✨"
      },
      {
        objecao: "Vou ficar feio com aparelho",
        script: "Entendo sua preocupação! 😊 Hoje em dia temos opções super discretas e modernas! Temos aparelhos estéticos, praticamente invisíveis, e até alinhadores transparentes! Muitos pacientes ficam surpresos como são discretos. E sabe o que é mais lindo? Ver a autoestima aumentando a cada consulta, quando você percebe seu sorriso se transformando! Que tal agendar uma consulta para te mostrar todas as opções? Você vai se surpreender! ✨🦷"
      },
      {
        objecao: "É muito caro",
        script: "Entendo sua preocupação! 💙 O investimento no aparelho realmente precisa ser planejado, mas pense que é um investimento na sua saúde e autoestima para o resto da vida! Temos várias formas de pagamento e parcelamento que cabem no orçamento. Além disso, muitos planos dentais cobrem parte do tratamento. Que tal agendar uma avaliação gratuita para conversarmos sobre as opções de pagamento? Tenho certeza que encontraremos uma forma! 😊"
      }
    ],
    "Lentes de contato dental": [
      {
        objecao: "É muito caro",
        script: "Entendo sua preocupação! 😊 Realmente as lentes são um investimento, mas pense no impacto que terão na sua vida! É uma transformação completa do seu sorriso em pouco tempo, com resultado que dura muitos anos. Muitos pacientes me falam que foi o melhor investimento que fizeram! Temos várias opções de pagamento e você pode parcelar de forma tranquila. Que tal agendar uma avaliação gratuita para ver como ficaria seu novo sorriso? 💎✨"
      },
      {
        objecao: "Tenho medo de ficar artificial",
        script: "Sua preocupação é super válida! 🤗 Hoje em dia, as lentes são feitas de forma super natural e personalizada para o seu rosto! Trabalhamos cada detalhe para que fique harmônico e com sua personalidade. Nossos pacientes sempre recebem elogios de como o sorriso ficou lindo e natural! Que tal agendar uma consulta para fazer uma simulação digital? Você vai poder ver exatamente como ficará antes mesmo de fazer! ✨"
      },
      {
        objecao: "Precisa desgastar o dente",
        script: "Entendo sua preocupação! 😊 Realmente é um procedimento que precisa ser bem planejado. O desgaste hoje é mínimo e preservamos ao máximo a estrutura natural do dente. Usamos tecnologia de ponta para fazer tudo com precisão milimétrica! E o resultado é incrível - dentes brancos, alinhados e com formato perfeito! Que tal agendar uma avaliação para eu te explicar todo o processo detalhadamente? Você ficará muito mais tranquil@! 🦷✨"
      }
    ]
  };

  return objections[procedimento] || [
    {
      objecao: "É muito caro",
      script: "Entendo sua preocupação com o investimento! 😊 Na verdade, investir na sua saúde bucal é investir na sua qualidade de vida! Temos várias opções de pagamento e parcelamento que cabem no seu orçamento. Que tal agendar uma avaliação gratuita para conversarmos sobre as melhores opções para você? 💙"
    },
    {
      objecao: "Tenho medo do procedimento",
      script: "Sua preocupação é muito natural! 🤗 Nosso foco é sempre o seu conforto e segurança. Usamos técnicas modernas e todo cuidado para que você se sinta tranquil@ durante o tratamento. Que tal agendar uma consulta para conhecer nossa clínica e tirar todas suas dúvidas? Tenho certeza que você ficará mais confiante! ✨"
    }
  ];
};

export const generateScripts = (data: ClinicData): Script[] => {
  const nomeSecretaria = data.nomeSecretaria || "nossa equipe";
  const nomeClinica = data.nomeClinica;
  const procedimentoPrincipal = data.procedimentoPrincipal;
  const isPerfilJovem = data.perfilPacientes.toLowerCase().includes('jovem') || 
                       data.perfilPacientes.toLowerCase().includes('20') ||
                       data.perfilPacientes.toLowerCase().includes('30');
  
  const emojis = isPerfilJovem ? "😊" : "🙂";
  const saudacao = isPerfilJovem ? "Oi!" : "Olá!";
  
  const scripts: Script[] = [
    {
      fase: "Primeiro contato",
      script: `${saudacao} Tudo bem? ${emojis} Aqui é ${data.nomeSecretaria ? `a ${data.nomeSecretaria}` : 'da equipe'}, da ${nomeClinica}! 

Vi que você demonstrou interesse nos nossos serviços! ${procedimentoPrincipal ? `Especialistas em ${procedimentoPrincipal.toLowerCase()}! ` : ''}

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
• ${procedimentoPrincipal === 'Clareamento dental' ? 'Evite alimentos escuros hoje' : 'Mantenha sua higiene bucal em dia'}

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

${procedimentoPrincipal ? `Lembrando que somos especialistas em ${procedimentoPrincipal.toLowerCase()}! ` : ''}

Obrigad${data.nomeSecretaria ? 'a' : 'o'} pela confiança! 💙`
    },
    {
      fase: "Follow-up tratamento",
      script: `${saudacao} Como você está se sentindo após o procedimento na ${nomeClinica}? ${emojis}

Queria saber se:
• Está seguindo as orientações que passamos
• Tem alguma dúvida ou desconforto
• Precisa de algum esclarecimento

${procedimentoPrincipal === 'Ortodontia/Aparelhos' ? 'Lembre-se: o resultado do tratamento ortodôntico depende muito da sua colaboração!' : 'Lembre-se: o cuidado contínuo é essencial para manter os resultados!'}

Estamos aqui para te ajudar! 💙`
    },
    {
      fase: "Follow-up pacientes inativos",
      script: `${saudacao} Que saudades! ${emojis}

Faz um tempo que não nos vemos na ${nomeClinica} e queria saber como você está!

${procedimentoPrincipal ? `Criamos algumas novidades especiais em ${procedimentoPrincipal.toLowerCase()} que podem te interessar!` : 'Criamos algumas novidades especiais que podem te interessar!'}

Que tal agendar uma avaliação? Tenho alguns horários especiais disponíveis para você! 

Responda se tiver interesse! 💙`
    },
    {
      fase: "Campanha promocional",
      script: `🎉 PROMOÇÃO ESPECIAL - ${nomeClinica}! 

${procedimentoPrincipal ? `✨ ${procedimentoPrincipal} com condições imperdíveis!` : '✨ Condições especiais em todos os procedimentos!'}

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

  // Add objection scripts
  const objectionScripts = getObjectionsByProcedure(procedimentoPrincipal);
  objectionScripts.forEach(objection => {
    scripts.push({
      fase: `Objeção: "${objection.objecao}"`,
      script: objection.script
    });
  });

  return scripts;
};
