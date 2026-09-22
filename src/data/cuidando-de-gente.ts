// src/data/cuidando-de-gente.ts
// Episódios da Série Documental "Cuidando de Gente" — Dr. Luizinho no YouTube

export interface EpisodioCuidandoDeGente {
  id: string;
  numero: string;
  titulo: string;
  personagem: string;
  cidade: string;
  regiao: string;
  equipamento: string;
  iconeEquipamento?: string;
  youtubeId?: string;
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
    numero: '#1',
    titulo: 'A Volta da Visão e da Autonomia',
    personagem: 'Dona Rosangela Maria',
    cidade: 'Belford Roxo',
    regiao: 'Baixada Fluminense',
    equipamento: 'Instituto Estadual de Olhos (Senador Vasconcelos)',
    youtubeId: 'ivliQxs7eBU',
    youtubeUrl: 'https://www.youtube.com/watch?v=ivliQxs7eBU',
    dataPublicacao: '10 de setembro de 2026',
    fraseImpacto: 'Voltou a enxergar a vida em todos os detalhes após cirurgia de catarata rápida, indolor e com alta no mesmo dia.',
    sinopse: 'Conta a história da recuperação da visão de Dona Rosangela, de Belford Roxo, após cirurgia de catarata no Instituto Estadual dos Olhos, inaugurado em 2025. Idosos que antes dependiam de familiares para ler, cozinhar ou sair à rua sozinhos recuperam sua dignidade e independência 100% pelo SUS.',
    badge: 'Oftalmologia / Visão',
    destaque: true,
  },
  {
    id: 'amanda-da-cruz',
    numero: '#3',
    titulo: 'Esperança e Retaguarda no Médio Paraíba',
    personagem: 'Amanda da Cruz',
    cidade: 'Volta Redonda',
    regiao: 'Médio Paraíba',
    equipamento: 'Hospital Regional Zilda Arns',
    youtubeId: 'LeqBHlc2WFM',
    youtubeUrl: 'https://www.youtube.com/watch?v=LeqBHlc2WFM',
    dataPublicacao: '14 de setembro de 2026',
    fraseImpacto: 'Acolhimento de alta complexidade perto de casa após mais de dez anos de espera histórica de toda a região.',
    sinopse: 'Mostra a comovente experiência de Amanda no Hospital Regional Zilda Arns, em Volta Redonda. A unidade, que estava com obras travadas há mais de uma década, foi concluída e entregue por Dr. Luizinho em 2018 e reforçada com centros cirúrgicos e nova ressonância magnética, transformando-se na maior retaguarda de UTI do Sul Fluminense.',
    badge: 'Alta Complexidade Regional',
  },
  {
    id: 'tayane-e-vitoria',
    numero: 'Especial',
    titulo: 'O Futuro Escolhido na Hora Certa',
    personagem: 'Tayane Rodrigues e Vitória Silva',
    cidade: 'Rio de Janeiro',
    regiao: 'Capital',
    equipamento: 'Programa Acolhe RJ',
    youtubeUrl: 'https://www.youtube.com/@doutorluizinho',
    fraseImpacto: 'Duas jovens sonhadoras e trabalhadoras com autonomia para planejar seus estudos, empregos e o momento de constituir família.',
    sinopse: 'Duas jovens mulheres sonhadoras e trabalhadoras que tiveram seus caminhos cruzados graças ao programa Acolhe RJ, um sonho da ginecologista Dra. Ana Teresa Derraik realizado e inaugurado pelo Dr. Luizinho em 2023. Pioneiro em oferecer o implante subdérmico contraceptivo Implanon pelo SUS, o programa já permitiu a mais de 40 mil meninas escolherem com dignidade o momento certo de suas vidas para engravidar.',
    badge: 'Saúde da Mulher & Futuro',
  },
  {
    id: 'hever-rodrigues',
    numero: '#5',
    titulo: 'Vencer o Câncer Perto da Família',
    personagem: 'Seu Hever Rodrigues',
    cidade: 'Nilópolis',
    regiao: 'Baixada Fluminense',
    equipamento: 'Onco Baixada (Inst. Est. de Oncologia)',
    youtubeId: 'lF3A7r4WB3o',
    youtubeUrl: 'https://www.youtube.com/watch?v=lF3A7r4WB3o',
    fraseImpacto: 'Tratamento de tumor no intestino com acolhimento humano ao lado de um grande amor que já dura 42 anos.',
    sinopse: 'Seu Hever passou a enxergar a vida com um novo brilho depois de ser tratado com sucesso de um tumor no intestino no Onco Baixada, o primeiro hospital público de câncer da região, concebido e iniciado por Dr. Luizinho em 2023 e entregue em 2026. Uma história emocionante de amor de 42 anos que agora tem tudo para durar muito mais perto da família.',
    badge: 'Oncologia da Baixada',
  },
  {
    id: 'fernanda-e-sirleide',
    numero: '#7',
    titulo: 'Cirurgia às Pressas e Cura de Doença Rara',
    personagem: 'Fernanda Marques e Dona Sirleide',
    cidade: 'Rio de Janeiro',
    regiao: 'Capital',
    equipamento: 'Instituto Estadual do Cérebro Paulo Niemeyer',
    youtubeId: 'DOcMpkDhWGw',
    youtubeUrl: 'https://www.youtube.com/watch?v=DOcMpkDhWGw',
    fraseImpacto: 'Neurocirurgias de padrão mundial pelo SUS que devolveram a vida e a esperança contra casos graves e raros.',
    sinopse: 'Histórias reais de Dona Sirleide, que precisou ser operada às pressas para sobreviver, e de Fernanda, que encontrou alívio e esperança no diagnóstico e tratamento de uma doença neurológica raríssima. Ambas foram atendidas no SUS pela equipe do Dr. Paulo Niemeyer Filho graças à grande duplicação do Instituto do Cérebro promovida por Dr. Luizinho.',
    badge: 'Neurocirurgia Mundial',
  },
  {
    id: 'jaqueline-e-liz-helena',
    numero: '#8',
    titulo: 'A Guerreirinha da Maior UTI Infantil',
    personagem: 'Jaqueline Freitas e Liz Helena',
    cidade: 'Nova Iguaçu',
    regiao: 'Baixada Fluminense',
    equipamento: 'UTI Pediátrica do Hosp. Dr. Ricardo Cruz',
    youtubeId: 'BluBZk4ywso',
    youtubeUrl: 'https://www.youtube.com/watch?v=BluBZk4ywso',
    fraseImpacto: 'A luta pela vida da pequena Liz Helena em seus dois primeiros meses de vida na maior UTI infantil pública do Brasil.',
    sinopse: 'O Hospital Estadual Ricardo Cruz, construído em módulos no Centro de Nova Iguaçu durante a pandemia, seria desmontado e retirado do local. Mas Dr. Luizinho, conhecendo as necessidades da Baixada, brigou para a unidade não parar de funcionar e duplicou a UTI intensiva que hoje é referência nacional. E que salvou a vida da pequena Liz, que hoje tem uma infância saudável e divertida.',
    badge: 'Maior UTI Pediátrica do País',
  },
  {
    id: 'iracy-meirelles',
    numero: '#9',
    titulo: 'Minutos Decisivos que Salvaram uma Vida',
    personagem: 'Dona Iracy Meirelles',
    cidade: 'São João de Meriti',
    regiao: 'Baixada Fluminense',
    equipamento: 'SAMU 100% RJ',
    youtubeId: 'NAEO97MBvzA',
    youtubeUrl: 'https://www.youtube.com/watch?v=NAEO97MBvzA',
    fraseImpacto: 'Socorro ágil após queda grave em casa: a rapidez do atendimento do SAMU fez a diferença entre a vida e a morte.',
    sinopse: 'Uma queda dentro de casa e momentos de angústia à espera do socorro. O acidente sofrido por Dona Iracy Meirelles poderia ter deixado sequelas graves. Graças à agilidade das novas ambulâncias do SAMU 100% RJ, viabilizadas pelo Dr. Luizinho para todos os 92 municípios do estado, ela foi rapidamente socorrida e encaminhada a um hospital, tendo sua vida salva.',
    badge: 'SAMU 100% RJ Universal',
  },
];
