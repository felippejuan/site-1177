// src/data/trajetoria.ts
// Macro números, linha do tempo e pares de contraste da Linha de Base

export interface MacroMetrica {
  numero: string;
  rotulo: string;
  detalhe: string;
  icone: string;
}

export interface JanelaHistorica {
  codigo: string;
  periodo: string;
  cargo: string;
  descricao: string;
  conquistas: string[];
}

export interface ParLinhaDeBase {
  titulo: string;
  comoRecebeu: string;
  oQueFez: string;
  icone: string;
}

export const MACRO_NUMEROS: MacroMetrica[] = [
  {
    numero: '100%',
    rotulo: 'dos 92 municípios com SAMU',
    detalhe: '249 ambulâncias e UTIs móveis com custeio integral garantido',
    icone: 'ambulance',
  },
  {
    numero: '1,63 milhão',
    rotulo: 'de exames no Rio Imagem Baixada',
    detalhe: 'Maior complexo público de diagnóstico por imagem da América Latina',
    icone: 'scan',
  },
  {
    numero: '19.000+',
    rotulo: 'cirurgias ortopédicas no HTO',
    detalhe: 'Polo de excelência em Nilópolis que desafogou os hospitais de trauma',
    icone: 'activity',
  },
  {
    numero: '100 leitos',
    rotulo: 'no Hospital de Câncer da Baixada',
    detalhe: 'Onco Baixada com 24 boxes de quimioterapia e atendimento integral',
    icone: 'heart-pulse',
  },
];

export const JANELAS_HISTORICAS: JanelaHistorica[] = [
  {
    codigo: 'J0',
    periodo: '2013 – 2015',
    cargo: 'Secretário Municipal de Saúde de Nova Iguaçu',
    descricao: 'Assumiu a saúde do maior município da Baixada em situação de calamidade e liderou uma virada histórica na atenção básica e obstétrica.',
    conquistas: [
      'Reabertura da Maternidade Mariana Bulhões após mais de um ano fechada por gestões anteriores',
      'Implantação das Clínicas da Família 24 Horas pioneiras com base SAMU acoplada (Patrícia Marinho, Odicéia Morais e Lagoinha)',
      'Mais de 8 mil partos seguros realizados nos primeiros 2 anos da nova maternidade',
    ],
  },
  {
    codigo: 'J1',
    periodo: '2016 – abril de 2018',
    cargo: 'Secretário de Estado de Saúde do Rio de Janeiro',
    descricao: 'Comandou a saúde fluminense durante a pior crise fiscal e política da história do estado, mantendo hospitais abertos e inaugurando polos de excelência.',
    conquistas: [
      'Inauguração do HTO Baixada em Nilópolis, transformando a ortopedia pública com mais de 19 mil cirurgias',
      'Entrega do Hospital Regional Zilda Arns em Volta Redonda com 237 leitos para o Médio Paraíba',
      'Instalação do primeiro Gamma Knife 100% público do Brasil no Instituto Estadual do Cérebro',
      'Inauguração do Banco de Leite e equipamentos neonatais no Hospital da Mulher Heloneida Studart',
    ],
  },
  {
    codigo: 'Mandato',
    periodo: '2019 – Presente',
    cargo: 'Deputado Federal pelo Rio de Janeiro',
    descricao: 'Eleito pela população fluminense para defender o SUS em Brasília. Foi presidente da Comissão de Seguridade Social e Família e relator de projetos históricos de financiamento da saúde.',
    conquistas: [
      'Mais de 51 municípios fluminenses beneficiados com recursos federais diretos já pagos na ponta',
      'Mais de 100 projetos de lei e PECs de fortalecimento do SUS e proteção das carreiras da saúde',
      'Articulação e destinação de recursos para os mutirões de visão do programa Revi-VER em Volta Redonda (+30 mil cirurgias)',
      'Liderança na bancada federal para garantir investimentos e custeio aos hospitais do interior e de todo o Estado',
    ],
  },
  {
    codigo: 'J2',
    periodo: 'Janeiro – Setembro de 2023',
    cargo: 'Secretário de Estado de Saúde do Rio de Janeiro',
    descricao: 'Retornou à Secretaria Estadual para executar o mais ambicioso plano de modernização e descentralização da história recente da saúde do RJ.',
    conquistas: [
      'Universalização do SAMU 100% RJ: 249 novas ambulâncias entregues a todos os 92 municípios',
      'Inauguração do Rio Imagem Baixada em Nova Iguaçu (mais de 1,6 milhão de exames)',
      'Idealização e início das obras do Onco Baixada (Instituto Estadual de Oncologia)',
      'Expansão com novo anexo de 6 andares no Instituto Estadual do Cérebro Paulo Niemeyer',
      'Implantação do Centro de Inteligência em Saúde (CIS), reduzindo o tempo de espera nas centrais em 38,4%',
      'Criação do Programa Acolhe RJ (+40 mil mulheres alcançadas e 30 mil métodos contraceptivos inseridos)',
      'Estruturação do Cedtea na Gávea, primeiro centro público para diagnóstico precoce de autismo',
    ],
  },
];

export const LINHA_DE_BASE: ParLinhaDeBase[] = [
  {
    titulo: 'Tratamento Oncológico',
    comoRecebeu: 'A Baixada Fluminense, com mais de 3 milhões de habitantes, não tinha um único hospital público especializado em câncer. Pacientes viajavam horas até a capital para conseguir quimioterapia.',
    oQueFez: 'Idealizou e estruturou o Onco Baixada: 100 leitos, 24 boxes de quimioterapia e capacidade para 300 cirurgias/mês. Tratamento humanizado do lado de casa.',
    icone: 'ribbon',
  },
  {
    titulo: 'Socorro Móvel & Urgência',
    comoRecebeu: 'Dezenas de municípios do interior não tinham nenhuma ambulância do SAMU. Pacientes com infarto ou politrauma ficavam desassistidos nas primeiras horas decisivas.',
    oQueFez: 'Entregou 249 ambulâncias e UTIs móveis novas, cobrindo 100% dos 92 municípios fluminenses com custeio integral do combustível e equipe pago pelo Estado.',
    icone: 'shield',
  },
  {
    titulo: 'Diagnóstico por Imagem',
    comoRecebeu: 'Filas de mais de um ano para exames simples de ressonância ou tomografia na rede pública, forçando famílias a pagarem clínicas particulares ou esperarem a doença avançar.',
    oQueFez: 'Inaugurou o Rio Imagem Baixada: mais de 1,6 milhão de exames realizados, 40 mil atendimentos por mês e resultados rápidos para iniciar o tratamento na hora certa.',
    icone: 'cpu',
  },
  {
    titulo: 'Saúde da Mulher & Maternidade',
    comoRecebeu: 'A Maternidade Mariana Bulhões estava fechada em Nova Iguaçu, e milhares de jovens vulneráveis enfrentavam gravidez não planejada sem acesso a métodos modernos.',
    oQueFez: 'Reabriu a Mariana Bulhões com 69 leitos e UTI neonatal, e criou o Programa Acolhe RJ, garantindo mais de 30 mil implantes contraceptivos gratuitos pelo SUS.',
    icone: 'heart',
  },
];
