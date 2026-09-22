// src/data/cuidando-de-gente.ts
// Episódios da Série Documental "Cuidando de Gente" — Dr. Luizinho no YouTube

export interface EpisodioCuidandoDeGente {
  id: string;
  titulo: string;
  personagem: string;
  cidade: string;
  regiao: string;
  equipamento: string;
  iconeEquipamento?: string;
  youtubeId: string;
  youtubeUrl: string;
  dataPublicacao?: string;
  fraseImpacto: string;
  sinopse: string;
  badge: string;
  destaque?: boolean;
}

export const EPISODIOS_SERIE: EpisodioCuidandoDeGente[] = [
  {
    id: 'rosangela-maria',
    titulo: 'A Volta da Visão e da Autonomia',
    personagem: 'Dona Rosangela Maria',
    cidade: 'Belford Roxo',
    regiao: 'Baixada Fluminense',
    equipamento: 'Instituto Estadual do Olho',
    iconeEquipamento: '👁️',
    youtubeId: 'ivliQxs7eBU',
    youtubeUrl: 'https://www.youtube.com/watch?v=ivliQxs7eBU',
    dataPublicacao: '10 de setembro de 2026',
    fraseImpacto: 'Voltou a enxergar a vida em todos os detalhes após cirurgia de catarata rápida, indolor e com alta no mesmo dia.',
    sinopse: 'Recuperação da visão após cirurgia de catarata no Instituto Estadual do Olho (2025). Procedimento ágil e indolor com alta no mesmo dia, devolvendo autonomia e independência pelo SUS.',
    badge: 'Oftalmologia SUS',
    destaque: true,
  },
  {
    id: 'amanda-da-cruz',
    titulo: 'Esperança e Retaguarda no Médio Paraíba',
    personagem: 'Amanda da Cruz',
    cidade: 'Volta Redonda',
    regiao: 'Médio Paraíba',
    equipamento: 'Hospital Regional Zilda Arns',
    iconeEquipamento: '🏥',
    youtubeId: 'LeqBHlc2WFM',
    youtubeUrl: 'https://www.youtube.com/watch?v=LeqBHlc2WFM',
    dataPublicacao: '14 de setembro de 2026',
    fraseImpacto: 'Acolhimento de alta complexidade perto de casa após mais de dez anos de espera histórica de toda a região.',
    sinopse: 'Atendimento de emergência do filho no Hospital Regional Zilda Arns, em Volta Redonda. Unidade destravada após mais de 10 anos de obras paradas, consolidada como a maior retaguarda de UTI do Sul Fluminense.',
    badge: 'Alta Complexidade Regional',
  },
  {
    id: 'tayane-e-vitoria',
    titulo: 'O Futuro Escolhido na Hora Certa',
    personagem: 'Tayane Rodrigues e Vitória Silva',
    cidade: 'Rio de Janeiro',
    regiao: 'Capital',
    equipamento: 'Programa Acolhe RJ',
    iconeEquipamento: '🌸',
    youtubeId: 'heI1KvTNMrk',
    youtubeUrl: 'https://www.youtube.com/watch?v=heI1KvTNMrk',
    fraseImpacto: 'Duas jovens sonhadoras e trabalhadoras com autonomia para planejar seus estudos, empregos e o momento de constituir família.',
    sinopse: 'Planejamento reprodutivo e autonomia pelo programa Acolhe RJ, criado em 2023. Primeiro programa do SUS a oferecer o contraceptivo subdérmico Implanon, beneficiando mais de 40 mil jovens.',
    badge: 'Saúde da Mulher & Futuro',
  },
  {
    id: 'hever-rodrigues',
    titulo: 'Vencer o Câncer Perto da Família',
    personagem: 'Seu Hever Rodrigues',
    cidade: 'Nilópolis',
    regiao: 'Baixada Fluminense',
    equipamento: 'Onco Baixada (Inst. Est. de Oncologia)',
    iconeEquipamento: '🎗️',
    youtubeId: 'lF3A7r4WB3o',
    youtubeUrl: 'https://www.youtube.com/watch?v=lF3A7r4WB3o',
    fraseImpacto: 'Tratamento de tumor no intestino com acolhimento humano ao lado de um grande amor que já dura 42 anos.',
    sinopse: 'Tratamento bem-sucedido de tumor intestinal no Onco Baixada, primeiro hospital público especializado em câncer da Baixada Fluminense, assegurando cuidado próximo da família sem viagens exaustivas à capital.',
    badge: 'Oncologia da Baixada',
  },
  {
    id: 'fernanda-e-sirleide',
    titulo: 'Cirurgia às Pressas e Cura de Doença Rara',
    personagem: 'Fernanda Marques e Dona Sirleide',
    cidade: 'Rio de Janeiro',
    regiao: 'Capital',
    equipamento: 'Instituto Estadual do Cérebro Paulo Niemeyer',
    iconeEquipamento: '🧠',
    youtubeId: 'DOcMpkDhWGw',
    youtubeUrl: 'https://www.youtube.com/watch?v=DOcMpkDhWGw',
    fraseImpacto: 'Neurocirurgias de padrão mundial pelo SUS que devolveram a vida e a esperança contra casos graves e raros.',
    sinopse: 'Cirurgia neurológica de emergência e diagnóstico de doença rara no Instituto Estadual do Cérebro. Tratamento de precisão pelo SUS viabilizado pela duplicação e ampliação de leitos da unidade.',
    badge: 'Neurocirurgia Mundial',
  },
  {
    id: 'jaqueline-e-liz-helena',
    titulo: 'A Guerreirinha da Maior UTI Infantil',
    personagem: 'Jaqueline Freitas e Liz Helena',
    cidade: 'Nova Iguaçu',
    regiao: 'Baixada Fluminense',
    equipamento: 'UTI Pediátrica do Hosp. Dr. Ricardo Cruz',
    iconeEquipamento: '👶',
    youtubeId: 'BluBZk4ywso',
    youtubeUrl: 'https://www.youtube.com/watch?v=BluBZk4ywso',
    fraseImpacto: 'A luta pela vida da pequena Liz Helena em seus dois primeiros meses de vida na maior UTI infantil pública do Brasil.',
    sinopse: 'Internação de dois meses e recuperação da pequena Liz Helena na UTI Pediátrica do Hospital Ricardo Cruz. Hospital modular mantido em definitivo e ampliado para ser a maior UTI infantil do país.',
    badge: 'Maior UTI Pediátrica do País',
  },
  {
    id: 'iracy-meirelles',
    titulo: 'Minutos Decisivos que Salvaram uma Vida',
    personagem: 'Dona Iracy Meirelles',
    cidade: 'São João de Meriti',
    regiao: 'Baixada Fluminense',
    equipamento: 'SAMU 100% RJ',
    iconeEquipamento: '🚑',
    youtubeId: 'NAEO97MBvzA',
    youtubeUrl: 'https://www.youtube.com/watch?v=NAEO97MBvzA',
    fraseImpacto: 'Socorro ágil após queda grave em casa: a rapidez do atendimento do SAMU fez a diferença entre a vida e a morte.',
    sinopse: 'Socorro ágil após queda doméstica grave em São João de Meriti. Atendimento pré-hospitalar rápido pelas novas ambulâncias do SAMU 100% RJ, assegurando transporte imediato e salvando a vida.',
    badge: 'SAMU 100% RJ Universal',
  },
];
