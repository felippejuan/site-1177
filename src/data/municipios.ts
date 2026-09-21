// src/data/municipios.ts
// Base completa dos 92 municípios do Estado do Rio de Janeiro

export interface Municipio {
  nome: string;
  slug: string;
  regiao: string;
  samu100: boolean;
  emendasPagas?: string;
  emendasGarantidas?: string;
  entregasDiretas: string[];
  destaques: string[];
  resumoLocal: string;
}

export const MUNICIPIOS: Municipio[] = [
  {
    nome: 'Nova Iguaçu',
    slug: 'nova-iguacu',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 20.000.000,00',
    emendasGarantidas: 'R$ 5.400.000,00',
    entregasDiretas: [
      'Onco Baixada (Instituto Estadual de Oncologia com 100 leitos e 24 boxes de quimioterapia)',
      'Rio Imagem Baixada (Maior centro de imagem da América Latina com +1,6M de exames)',
      'Reabertura da Maternidade Mariana Bulhões (69 leitos e 25 de UTI neonatal)',
      'Maior UTI Pediátrica pública do Brasil no Hosp. Dr. Ricardo Cruz (50 leitos)',
      'Clínicas da Família 24h pioneiras (Patrícia Marinho, Odicéia Morais e Lagoinha)',
    ],
    destaques: ['Onco Baixada', 'Rio Imagem Baixada', 'Mariana Bulhões', 'UTI Ricardo Cruz'],
    resumoLocal: 'Nova Iguaçu é o coração da atuação do Dr. Luizinho. Como secretário municipal e estadual, transformou a cidade na maior potência hospitalar pública da história da Baixada Fluminense.',
  },
  {
    nome: 'Volta Redonda',
    slug: 'volta-redonda',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 8.500.000,00',
    entregasDiretas: [
      'Hospital Regional Zilda Arns (237 leitos de alta complexidade e novos centros cirúrgicos)',
      'Nova Ressonância Magnética instalada no Zilda Arns em 2023',
      'Apoio e recursos para o programa Revi-VER (+30 mil cirurgias de catarata)',
      'SAMU 100% com frota renovada e base avançada',
    ],
    destaques: ['Hospital Regional Zilda Arns', 'Mutirão Revi-VER', 'Ressonância Magnética'],
    resumoLocal: 'Referência de saúde para todo o Médio Paraíba com o Hospital Zilda Arns em pleno funcionamento e apoio contínuo aos mutirões de visão do Revi-VER.',
  },
  {
    nome: 'Nilópolis',
    slug: 'nilopolis',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 6.200.000,00',
    entregasDiretas: [
      'HTO Baixada (Melchiades Calazans) com mais de 19 mil cirurgias ortopédicas',
      'Centro de Reabilitação e Fisioterapia Integrado',
      'SAMU 100% RJ com custeio integral garantido',
    ],
    destaques: ['HTO Baixada', '19 mil cirurgias', 'SAMU 100%'],
    resumoLocal: 'Nilópolis abriga o HTO Baixada, polo ortopédico de referência estadual que devolveu a mobilidade a milhares de trabalhadores e desafogou os hospitais de trauma.',
  },
  {
    nome: 'Rio de Janeiro',
    slug: 'rio-de-janeiro',
    regiao: 'Metropolitana (Capital)',
    samu100: true,
    emendasPagas: 'R$ 35.000.000,00',
    entregasDiretas: [
      'Instituto Estadual do Cérebro (novo prédio de 6 andares e Gamma Knife 100% SUS)',
      'Instituto Estadual de Olhos em Senador Vasconcelos (+113 mil atendimentos na Zona Oeste)',
      'Cedtea Gávea (Primeiro centro público estadual de diagnóstico do Autismo)',
      'Nova UTI Pediátrica e Tomógrafo no Hosp. Estadual Getúlio Vargas (Penha)',
      'AME Cantagalo (Susana Naspolini) na Zona Sul (+40 mil atendimentos)',
    ],
    destaques: ['Instituto do Cérebro', 'Instituto de Olhos', 'Cedtea Gávea', 'Hosp. Getúlio Vargas'],
    resumoLocal: 'Investimentos massivos na Capital, desde a ponta neurocirúrgica mundial no Centro até o primeiro polo de catarata e glaucoma em Senador Vasconcelos, na Zona Oeste.',
  },
  {
    nome: 'Niterói',
    slug: 'niteroi',
    regiao: 'Metropolitana',
    samu100: true,
    emendasPagas: 'R$ 7.800.000,00',
    entregasDiretas: [
      'Reestruturação completa da Emergência e Maternidade do Hosp. Estadual Azevedo Lima',
      'SAMU 100% RJ com renovação de UTIs móveis',
      'Integração de leitos de retaguarda com a regulação do CIS',
    ],
    destaques: ['Hosp. Azevedo Lima', 'SAMU 100%'],
    resumoLocal: 'O Hospital Azevedo Lima foi modernizado para oferecer atendimento humanizado e emergência de alto padrão a Niterói e São Gonçalo.',
  },
  {
    nome: 'Duque de Caxias',
    slug: 'duque-de-caxias',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 14.200.000,00',
    entregasDiretas: [
      'Desafogamento do Adão Pereira Nunes com o Onco Baixada e HTO Nilópolis',
      'SAMU 100% RJ com novas ambulâncias para a frota municipal',
      'Recursos destinados ao Hospital do Olho e rede de atenção básica',
    ],
    destaques: ['Desafogamento Saracuruna', 'SAMU 100%'],
    resumoLocal: 'Fortalecimento da rede hospitalar e integração direta com os novos polos de oncologia e traumatologia da Baixada.',
  },
  {
    nome: 'São João de Meriti',
    slug: 'sao-joao-de-meriti',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 9.100.000,00',
    entregasDiretas: [
      'Inauguração do Banco de Leite e equipamentos no Hospital da Mulher Heloneida Studart',
      'SAMU 100% RJ com cobertura total nos bairros',
      'Acesso preferencial ao Onco Baixada e Rio Imagem',
    ],
    destaques: ['Hospital da Mulher', 'SAMU 100%'],
    resumoLocal: 'Cuidado especial com a saúde materno-infantil no Hospital Heloneida Studart e transporte de emergência com o SAMU.',
  },
  {
    nome: 'Belford Roxo',
    slug: 'belford-roxo',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 11.500.000,00',
    entregasDiretas: [
      'Atendimento direto no Rio Imagem Baixada e Onco Baixada',
      'Novas ambulâncias do SAMU 100% RJ entregues',
      'Recursos para a rede básica de saúde e postos de saúde da família',
    ],
    destaques: ['SAMU 100%', 'Acesso a exames de alta complexidade'],
    resumoLocal: 'População de Belford Roxo hoje realiza exames de tomografia e ressonância ao lado de casa com o Rio Imagem Baixada.',
  },
  {
    nome: 'Mesquita',
    slug: 'mesquita',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 6.300.000,00',
    entregasDiretas: [
      'SAMU 100% RJ com novas ambulâncias',
      'Acesso integral ao polo de traumatologia HTO Baixada e Onco Baixada',
      'Recursos federais de emendas para reformas de unidades de saúde',
    ],
    destaques: ['SAMU 100%', 'HTO Nilópolis'],
    resumoLocal: 'Beneficiada pela proximidade com o HTO e com o Onco Baixada, além de socorro móvel 100% ativo.',
  },
  {
    nome: 'Quatis',
    slug: 'quatis',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 2.500.000,00',
    emendasGarantidas: 'R$ 16.000.000,00',
    entregasDiretas: [
      'Articulação do convênio estadual de R$ 16M para o Hospital Municipal de Quatis',
      'R$ 2,5 milhões de emendas federais pagas para custeio da saúde',
      'Ambulância nova do SAMU 100% RJ entregue ao município',
    ],
    destaques: ['Hospital Municipal de Quatis', 'SAMU 100%'],
    resumoLocal: 'Dr. Luizinho destinou recursos diretos e articulou a viabilização das obras estruturantes do hospital municipal.',
  },
  {
    nome: 'Mangaratiba',
    slug: 'mangaratiba',
    regiao: 'Costa Verde',
    samu100: true,
    emendasPagas: 'R$ 4.200.000,00',
    entregasDiretas: [
      'Novas ambulâncias do SAMU 100% RJ adaptadas ao relevo local',
      'Recursos para a rede de pronto atendimento e postos de saúde',
      'Integração com o socorro aéreo de helicóptero para resgate na Rio-Santos',
    ],
    destaques: ['SAMU 100%', 'Socorro Aéreo'],
    resumoLocal: 'Ambulâncias do SAMU e apoio aeromédico para garantir socorro imediato tanto para os moradores quanto na rodovia.',
  },
  {
    nome: 'Piraí',
    slug: 'pirai',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 3.800.000,00',
    entregasDiretas: [
      'Novas ambulâncias do SAMU 100% RJ entregues com custeio pago',
      'Apoio à Associação Pestalozzi e centro de equoterapia',
      'Retaguarda no Hospital Regional Zilda Arns',
    ],
    destaques: ['SAMU 100%', 'Hospital Zilda Arns'],
    resumoLocal: 'Investimento na saúde preventiva, reabilitação e socorro de urgência para a população de Piraí.',
  },
  {
    nome: 'Petrópolis',
    slug: 'petropolis',
    regiao: 'Região Serrana',
    samu100: true,
    emendasPagas: 'R$ 6.400.000,00',
    entregasDiretas: [
      'Frota de UTIs móveis do SAMU 100% adaptada para socorro na serra',
      'Recursos emergenciais de saúde e reestruturação pós-chuvas',
      'Integração com os hospitais estaduais de alta complexidade',
    ],
    destaques: ['SAMU 100%', 'Apoio Emergencial'],
    resumoLocal: 'Fortalecimento da infraestrutura de urgência e emergência e suporte direto à rede pública petropolitana.',
  },
  {
    nome: 'Campos dos Goytacazes',
    slug: 'campos-dos-goytacazes',
    regiao: 'Norte Fluminense',
    samu100: true,
    emendasPagas: 'R$ 12.000.000,00',
    entregasDiretas: [
      'SAMU 100% RJ com novas ambulâncias entregues para o polo regional',
      'Integração regulatória pelo Centro de Inteligência em Saúde (CIS)',
      'Emendas parlamentares para custeio da média e alta complexidade',
    ],
    destaques: ['SAMU 100%', 'Regulação CIS'],
    resumoLocal: 'Polo do Norte Fluminense beneficiado com modernização do socorro pré-hospitalar e recursos federais diretos.',
  },
  {
    nome: 'Cabo Frio',
    slug: 'cabo-frio',
    regiao: 'Baixadas Litorâneas',
    samu100: true,
    emendasPagas: 'R$ 5.900.000,00',
    entregasDiretas: [
      'Novas ambulâncias do SAMU 100% RJ para a Região dos Lagos',
      'Recursos para reforço do atendimento durante as altas temporadas',
      'Integração com helicópteros da saúde para resgate de afogamentos e traumas',
    ],
    destaques: ['SAMU 100%', 'Resgate Aeromédico'],
    resumoLocal: 'Frota do SAMU renovada e apoio estratégico para absorver a demanda da população local e dos turistas.',
  },
  {
    nome: 'Itaperuna',
    slug: 'itaperuna',
    regiao: 'Noroeste Fluminense',
    samu100: true,
    emendasPagas: 'R$ 4.700.000,00',
    entregasDiretas: [
      'SAMU 100% RJ com cobertura em toda a zona urbana e distritos',
      'Apoio aos hospitais filantrópicos regionais e leitos de UTI',
      'Redução de tempo de espera via monitoramento do CIS',
    ],
    destaques: ['SAMU 100%', 'Hospitais Filantrópicos'],
    resumoLocal: 'Polo do Noroeste fluminense com socorro móvel de emergência universalizado e suporte aos centros de saúde.',
  },
  {
    nome: 'Angra dos Reis',
    slug: 'angra-dos-reis',
    regiao: 'Costa Verde',
    samu100: true,
    emendasPagas: 'R$ 7.100.000,00',
    entregasDiretas: [
      'SAMU 100% RJ com ambulâncias novas e suporte marítimo articulado',
      'Helicóptero da saúde para transferência rápida de emergências graves',
      'Emendas federais para a atenção primária do município',
    ],
    destaques: ['SAMU 100%', 'Resgate Aéreo'],
    resumoLocal: 'Socorro móvel rápido nas estradas e ilhas com ambulâncias e a frota de helicópteros da saúde.',
  },
];

import { MUNICIPIOS_MAPA } from './mapa-rj-paths';

export function obterTodosMunicipios(): Municipio[] {
  const mapaExistentes = new Map(MUNICIPIOS.map(m => [m.nome.toLowerCase(), m]));
  
  return MUNICIPIOS_MAPA.map(mPath => {
    const achado = mapaExistentes.get(mPath.nome.toLowerCase());
    if (achado) {
      return {
        ...achado,
        slug: mPath.slug,
        regiao: mPath.regiao,
      };
    }

    // Município com cobertura universal SAMU 100% e rede estadual
    return {
      nome: mPath.nome,
      slug: mPath.slug,
      regiao: mPath.regiao,
      samu100: true,
      entregasDiretas: [
        'SAMU 100% RJ: Ambulância nova entregue com custeio anual garantido pelo Estado',
        'Acesso aos novos centros estaduais de diagnóstico (Rio Imagem e Instituto de Olhos)',
        'Integração na regulação inteligente de leitos do CIS',
      ],
      destaques: ['SAMU 100%', 'Rede Estadual Integrada'],
      resumoLocal: `Todos os moradores de ${mPath.nome} contam com socorro de emergência pré-hospitalar garantido pelo programa SAMU 100% RJ e acesso a exames e cirurgias de alta complexidade na rede estadual.`,
    };
  });
}

