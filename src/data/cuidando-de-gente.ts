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
    equipamento: 'Instituto Estadual dos Olhos',
    iconeEquipamento: '👁️',
    youtubeId: 'ivliQxs7eBU',
    youtubeUrl: 'https://www.youtube.com/watch?v=ivliQxs7eBU',
    dataPublicacao: '10 de setembro de 2026',
    fraseImpacto: 'Voltou a enxergar em todos os detalhes após cirurgia de catarata rápida, indolor e com alta no mesmo dia.',
    sinopse: 'Recuperou a visão após cirurgia de catarata rápida e indolor no Instituto Estadual dos Olhos, conquistando autonomia e dignidade pelo SUS.',
    badge: 'Instituto Estadual dos Olhos',
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
    fraseImpacto: 'Acolhimento de emergência do filho perto de casa, com retaguarda de UTI após 10 anos de obras paradas.',
    sinopse: 'Atendimento de emergência do filho no Hospital Regional Zilda Arns, destravado após 10 anos de abandono e hoje referência no Sul Fluminense.',
    badge: 'Hospital Regional Zilda Arns',
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
    fraseImpacto: 'Duas jovens sonhadoras com autonomia para planejar estudos, trabalho e o momento certo da família.',
    sinopse: 'Planejamento reprodutivo e autonomia pelo programa Acolhe RJ, que já beneficiou mais de 40 mil mulheres com implantes modernos pelo SUS.',
    badge: 'Programa Acolhe RJ',
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
    fraseImpacto: 'Tratamento de tumor no intestino com acolhimento humano ao lado de um grande amor de 42 anos.',
    sinopse: 'Tratamento de câncer perto de casa no Onco Baixada, com acolhimento humanizado e sem as exaustivas viagens até o Centro do Rio.',
    badge: 'Onco Baixada',
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
    fraseImpacto: 'Neurocirurgias de precisão internacional pelo SUS que devolveram a vida e a esperança em casos raros.',
    sinopse: 'Cirurgia neurológica de emergência e diagnóstico preciso no Instituto Estadual do Cérebro, com padrão de ponta 100% pelo SUS.',
    badge: 'Instituto Estadual do Cérebro',
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
    fraseImpacto: 'A luta vitoriosa pela vida da pequena Liz Helena na maior UTI infantil pública do Brasil.',
    sinopse: 'Acolhimento da bebê prematura na UTI Pediátrica do Hospital Ricardo Cruz, unidade mantida em definitivo e ampliada para atender a Baixada.',
    badge: 'Maior UTI Infantil do Brasil',
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
    fraseImpacto: 'Socorro ágil após queda grave em casa: a rapidez do SAMU fez a diferença entre a vida e a morte.',
    sinopse: 'Socorro emergencial rápido após queda doméstica em São João de Meriti. Atendimento pelo SAMU 100% RJ que garantiu socorro imediato.',
    badge: 'SAMU 100% RJ',
  },
];
