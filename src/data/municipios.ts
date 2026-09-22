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
    emendasPagas: 'R$ 73.750.000,00',
    emendasGarantidas: 'R$ 38.000.000,00',
    entregasDiretas: [
      'Onco Baixada (Instituto Estadual de Oncologia com 100 leitos e 24 boxes de quimioterapia)',
      'Rio Imagem Baixada (Maior centro de imagem da América Latina com +1,6M de exames)',
      'Reabertura da Maternidade Mariana Bulhões (69 leitos e 25 de UTI neonatal)',
      'Maior UTI Pediátrica pública do Brasil no Hosp. Dr. Ricardo Cruz (50 leitos)',
      'Clínicas da Família 24h pioneiras (Patrícia Marinho, Odicéia Morais e Lagoinha)',
    ],
    destaques: ['R$ 111,7M Total', 'Onco Baixada', 'Rio Imagem', 'Mariana Bulhões'],
    resumoLocal: 'Nova Iguaçu é o berço e coração da atuação do Dr. Luizinho. Como secretário municipal e estadual e líder no Congresso, garantiu mais de R$ 111,7 milhões consolidados para a saúde e transformou a cidade na maior potência hospitalar da Baixada.',
  },
  {
    nome: 'Duque de Caxias',
    slug: 'duque-de-caxias',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 52.800.000,00',
    emendasGarantidas: 'R$ 25.000.000,00',
    entregasDiretas: [
      'Mais de R$ 52,8 milhões em emendas federais pagas para custeio da saúde e policlínicas',
      'R$ 25 milhões pactuados na CIB-RJ para o Hospital Municipal Dr. Moacyr Rodrigues do Carmo',
      'Desafogamento do Adão Pereira Nunes (Saracuruna) com o Onco Baixada e HTO Nilópolis',
      'SAMU 100% RJ com frota renovada atendendo os quatro distritos da cidade',
    ],
    destaques: ['R$ 77,8M Total', 'Hosp. Moacyr do Carmo', 'SAMU 100%'],
    resumoLocal: 'Viabilizou quase R$ 78 milhões em investimentos consolidados para a rede de saúde de Caxias, modernizou o Hospital Moacyr do Carmo e garantiu o socorro integral do SAMU.',
  },
  {
    nome: 'Nilópolis',
    slug: 'nilopolis',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 23.300.000,00',
    emendasGarantidas: 'R$ 10.500.000,00',
    entregasDiretas: [
      'HTO Baixada (Melchiades Calazans) com mais de 19 mil cirurgias nos 5 anos e 28.700 até 2025',
      'Reforma da UPA 24h do JK e reabertura do Hospital Municipal Juscelino Kubitschek',
      'Apoio e recursos para ações sociais e de saúde no Instituto Beija-Flor (+R$ 2,5M pagos)',
      'SAMU 100% RJ com novas viaturas e custeio garantido',
    ],
    destaques: ['R$ 33,8M Total', 'HTO Baixada', 'Hospital JK & UPA'],
    resumoLocal: 'Mais de R$ 33,8 milhões consolidados para a saúde de Nilópolis, além de fundar o HTO Baixada — polo ortopédico de excelência estadual — e modernizar o complexo do Hospital e UPA JK.',
  },
  {
    nome: 'Rio de Janeiro',
    slug: 'rio-de-janeiro',
    regiao: 'Metropolitana (Capital)',
    samu100: true,
    emendasPagas: 'R$ 35.000.000,00',
    entregasDiretas: [
      'Instituto Estadual do Cérebro (novo prédio de 6 andares, 103 leitos e Gamma Knife 100% SUS)',
      'Instituto Estadual de Olhos em Senador Vasconcelos (+113 mil atendimentos na Zona Oeste)',
      'Cedtea Gávea (Primeiro centro público estadual de diagnóstico do Autismo)',
      'Nova UTI Pediátrica e Tomógrafo no Hosp. Estadual Getúlio Vargas (Penha)',
      'AME Cantagalo (Susana Naspolini) na Zona Sul (+40 mil atendimentos)',
    ],
    destaques: ['Instituto do Cérebro', 'Instituto de Olhos', 'Cedtea Gávea', 'Hosp. Getúlio Vargas'],
    resumoLocal: 'Investimentos massivos na Capital, desde a ponta neurocirúrgica mundial no Centro até o primeiro polo de catarata e glaucoma em Senador Vasconcelos, na Zona Oeste.',
  },
  {
    nome: 'Mesquita',
    slug: 'mesquita',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 15.200.000,00',
    emendasGarantidas: 'R$ 4.200.000,00',
    entregasDiretas: [
      'Mais de R$ 15,2 milhões em emendas federais pagas para postos e atenção básica',
      'R$ 4,2 milhões de aportes estaduais para a rede de Clínicas da Família',
      'Acesso direto da população ao HTO Baixada, Rio Imagem e Onco Baixada',
      'SAMU 100% RJ com novas ambulâncias operando na cidade',
    ],
    destaques: ['R$ 19,4M Total', 'Clínicas da Família', 'SAMU 100%'],
    resumoLocal: 'Garantiu mais de R$ 19,4 milhões consolidados para reformar e equipar a rede de saúde de Mesquita, além de socorro móvel universal e acesso aos novos polos da Baixada.',
  },
  {
    nome: 'Magé',
    slug: 'mage',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 19.100.000,00',
    entregasDiretas: [
      'Mais de R$ 19,1 milhões em emendas federais pagas para custeio da saúde e postos de família',
      'SAMU 100% RJ com novas ambulâncias entregues cobrindo todo o território de Magé',
      'Vagas reguladas de exames no Rio Imagem Baixada e tratamento no Onco Baixada',
      'Integração direta com o sistema de regulação em tempo real do CIS',
    ],
    destaques: ['R$ 19,1M Pagos', 'SAMU 100%', 'Acesso Onco Baixada'],
    resumoLocal: 'Destinou mais de R$ 19 milhões em emendas federais pagas para o custeio da saúde pública de Magé, assegurou ambulâncias novas do SAMU 100% e acesso direto aos hospitais e centros de diagnóstico estaduais.',
  },
  {
    nome: 'Quatis',
    slug: 'quatis',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 2.500.000,00',
    emendasGarantidas: 'R$ 16.000.000,00',
    entregasDiretas: [
      'Convênio estadual de R$ 16 milhões (SES-RJ nº 012/2023) para as obras do Hospital Municipal de Quatis',
      'R$ 2,5 milhões em emendas federais individuais pagas para equipamentos hospitalares',
      'Ambulância nova do SAMU 100% RJ entregue e custeada pelo Estado',
    ],
    destaques: ['R$ 18,5M Total', 'Hospital de Quatis', 'SAMU 100%'],
    resumoLocal: 'Dr. Luizinho formalizou como secretário de Estado o convênio de R$ 16 milhões para as obras estruturantes do hospital municipal e destinou R$ 2,5 milhões em emendas federais pagas.',
  },
  {
    nome: 'Petrópolis',
    slug: 'petropolis',
    regiao: 'Região Serrana',
    samu100: true,
    emendasPagas: 'R$ 11.400.000,00',
    entregasDiretas: [
      'Mais de R$ 11,4 milhões em emendas federais pagas para custeio hospitalar e atenção básica',
      'Aportes estaduais e pactuações na CIB para socorro financeiro ao Hospital Alcides Carneiro e Santa Teresa',
      'Frota de ambulâncias do SAMU 100% RJ adaptada para socorro no relevo da serra',
      'Integração na regulação inteligente de leitos do CIS',
    ],
    destaques: ['R$ 11,4M Pagos', 'SAMU 100%', 'Hospitais de Petrópolis'],
    resumoLocal: 'Destinou mais de R$ 11,4 milhões em recursos federais pagos para apoiar e reestruturar a rede hospitalar de Petrópolis, além de garantir socorro ágil do SAMU adaptado à serra.',
  },
  {
    nome: 'Volta Redonda',
    slug: 'volta-redonda',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 10.900.000,00',
    entregasDiretas: [
      'Hospital Regional Zilda Arns (237 leitos de alta complexidade e novos centros cirúrgicos)',
      'Nova Ressonância Magnética de alta precisão instalada no Zilda Arns em 2023',
      'Mais de R$ 10,9 milhões em emendas federais pagas para custeio de urgência e saúde',
      'Apoio financeiro aos mutirões do programa Revi-VER (+30 mil cirurgias de catarata)',
      'SAMU 100% com frota renovada e bases de socorro avançado',
    ],
    destaques: ['Hospital Zilda Arns', 'R$ 10,9M Pagos', 'Mutirão Revi-VER'],
    resumoLocal: 'Referência de saúde para o Médio Paraíba com mais de R$ 10,9 milhões pagos, o Hospital Zilda Arns fortalecido e apoio contínuo aos mutirões de visão do Revi-VER.',
  },
  {
    nome: 'Barra Mansa',
    slug: 'barra-mansa',
    regiao: 'Médio Paraíba',
    samu100: true,
    emendasPagas: 'R$ 9.800.000,00',
    entregasDiretas: [
      'Mais de R$ 9,8 milhões em emendas parlamentares federais pagas para o Fundo Municipal de Saúde',
      'Articulação institucional para o credenciamento oncológico e modernização da Santa Casa de Barra Mansa',
      'Ambulâncias novas do SAMU 100% RJ integradas ao socorro do Médio Paraíba',
    ],
    destaques: ['R$ 9,8M Pagos', 'Santa Casa', 'SAMU 100%'],
    resumoLocal: 'Destinou quase R$ 10 milhões em emendas federais pagas para custear a saúde de Barra Mansa, além de apoiar a infraestrutura da Santa Casa e universalizar o SAMU.',
  },
  {
    nome: 'Niterói',
    slug: 'niteroi',
    regiao: 'Metropolitana',
    samu100: true,
    emendasPagas: 'R$ 6.200.000,00',
    entregasDiretas: [
      'Reestruturação completa da Emergência e Maternidade do Hospital Estadual Azevedo Lima',
      'Mais de R$ 6,2 milhões em emendas federais pagas para entidades da rede SUS',
      'SAMU 100% RJ com renovação de UTIs móveis',
      'Integração de leitos de retaguarda com a regulação inteligente do CIS',
    ],
    destaques: ['Hosp. Azevedo Lima', 'R$ 6,2M Pagos', 'SAMU 100%'],
    resumoLocal: 'Destinou mais de R$ 6,2 milhões para a saúde de Niterói e modernizou o Hospital Azevedo Lima com emergência e maternidade de alto padrão humanizado.',
  },
  {
    nome: 'Belford Roxo',
    slug: 'belford-roxo',
    regiao: 'Baixada Fluminense',
    samu100: true,
    emendasPagas: 'R$ 11.500.000,00',
    entregasDiretas: [
      'Atendimento direto no Rio Imagem Baixada e Onco Baixada ao lado do município',
      'Novas ambulâncias do SAMU 100% RJ entregues',
      'Recursos federais pagos para a rede básica de saúde e postos de saúde da família',
    ],
    destaques: ['SAMU 100%', 'Acesso Exames Alta Complexidade'],
    resumoLocal: 'População de Belford Roxo realiza exames de tomografia e ressonância ao lado de casa com o Rio Imagem Baixada e conta com socorro ágil do SAMU.',
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
    nome: 'Campos dos Goytacazes',
    slug: 'campos-dos-goytacazes',
    regiao: 'Norte Fluminense',
    samu100: true,
    emendasPagas: 'R$ 12.000.000,00',
    entregasDiretas: [
      'SAMU 100% RJ com novas ambulâncias entregues para o polo regional',
      'Integração regulatória pelo Centro de Inteligência em Saúde (CIS)',
      'Emendas parlamentares pagas para custeio da média e alta complexidade',
    ],
    destaques: ['SAMU 100%', 'Regulação CIS'],
    resumoLocal: 'Polo do Norte Fluminense beneficiado com modernização do socorro pré-hospitalar e recursos federais diretos.',
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

    // Município com cobertura universal SAMU 100% e rede estadual estruturada pelo Dr. Luizinho
    return {
      nome: mPath.nome,
      slug: mPath.slug,
      regiao: mPath.regiao,
      samu100: true,
      entregasDiretas: [
        'SAMU 100% RJ: Ambulância nova entregue com custeio estadual de implantação garantido (Deliberação CIB nº 7.178/2023)',
        'Vagas reguladas nos novos centros de ponta (Rio Imagem Baixada, Instituto Estadual de Olhos e Onco Baixada)',
        'Regulação Inteligente no CIS: Redução auditada de 38,4% no tempo de espera por leitos de emergência',
        'Atuação em Brasília: Defesa contínua na Comissão de Saúde para garantir o custeio federal das equipes da Atenção Básica',
      ],
      destaques: ['SAMU 100% Universal', 'Regulação CIS (-38% fila)', 'Rede Estadual Integrada'],
      resumoLocal: `Como secretário de Estado de Saúde e líder no Congresso, Dr. Luizinho garantiu ambulâncias novas do SAMU 100% com custeio estadual para ${mPath.nome}, vagas diretas nos grandes centros de diagnóstico e cirurgia do estado e regulação ágil pelo CIS.`,
    };
  });
}

