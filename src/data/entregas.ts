// src/data/entregas.ts
// Single Source of Truth para todas as entregas do Dr. Luizinho

export type Papel = 'entregou' | 'idealizou' | 'iniciou' | 'destinou_recurso' | 'articulou';
export type Status = 'verificado' | 'conferir';
export type Janela = 'J0' | 'J1' | 'Mandato' | 'J2';
export type Categoria = 'hospital' | 'urgencia' | 'oncologia' | 'especialidade' | 'basica' | 'tecnologia';

export interface Numero {
  valor: number | string; // Ex: 19000 ou "249" ou "R$ 87,4 mi"
  rotulo: string;         // Ex: "cirurgias ortopédicas"
  mes: number;            // 1 a 12 (OBRIGATÓRIO para compliance)
  ano: number;            // 4 dígitos (OBRIGATÓRIO)
  fonte: string;          // Ex: "SES-RJ / GovRJ" (OBRIGATÓRIO)
  linkFonte?: string;     // URL de auditoria oficial
}

export interface Entrega {
  id: string;
  nome: string;
  subtitulo: string;
  janela: Janela;
  papel: Papel;
  status: Status;
  destaque: boolean;       // true = Vitrine de ouro Top 6 na Home
  categoria: Categoria;
  fraseOQueE: string;     // 1ª frase: O que é e o papel exercido
  fraseNumero: string;    // 2ª frase: O dado auditado no padrão "mais de"
  fraseImpacto: string;   // 3ª frase: O impacto humano direto
  numeros: Numero[];
  municipioPrincipal: string;
  municipiosBeneficiados?: string[];
  imagem?: string;
  videoUrl?: string;
  videoDuracao?: string;
  badge?: string;
}

export const ENTREGAS: Entrega[] = [
  {
    id: 'samu-100-rj',
    nome: 'SAMU 100% RJ',
    subtitulo: 'Cobertura total de socorro móvel em todos os 92 municípios do estado',
    janela: 'J2',
    papel: 'entregou',
    status: 'verificado',
    destaque: true,
    categoria: 'urgencia',
    badge: 'Histórico no Brasil',
    municipioPrincipal: 'Todo o Estado do RJ',
    fraseOQueE: 'Como secretário estadual de Saúde, Doutor Luizinho levou o SAMU a todos os municípios do estado, tornando o Rio o primeiro do país com cobertura total de socorro móvel.',
    fraseNumero: 'Foram entregues 249 ambulâncias e UTIs móveis novas para as 92 cidades fluminenses, com custeio integral garantido pelo Governo do Estado.',
    fraseImpacto: 'Quem sofre um infarto ou um acidente grave no interior não espera mais horas sem socorro — a ambulância chega rápido e equipada para salvar a vida na hora.',
    numeros: [
      {
        valor: '249',
        rotulo: 'ambulâncias e UTIs móveis entregues',
        mes: 5,
        ano: 2023,
        fonte: 'SES-RJ / GovRJ',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/03/governo-do-estado-entrega-novas-ambulancias-do-samu-para-tres-municipios',
      },
      {
        valor: '92',
        rotulo: 'municípios com cobertura (100% do estado)',
        mes: 5,
        ano: 2023,
        fonte: 'SES-RJ / GovRJ',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/03/governo-do-estado-entrega-novas-ambulancias-do-samu-para-tres-municipios',
      },
      {
        valor: 'R$ 87,4 mi',
        rotulo: 'investidos com custeio anual garantido',
        mes: 5,
        ano: 2023,
        fonte: 'DOERJ / SES-RJ',
      },
    ],
  },
  {
    id: 'onco-baixada',
    nome: 'Onco Baixada',
    subtitulo: 'Instituto Estadual de Oncologia da Baixada Fluminense',
    janela: 'J2',
    papel: 'idealizou',
    status: 'verificado',
    destaque: true,
    categoria: 'oncologia',
    badge: 'Primeiro da Baixada',
    imagem: '/videos/onco-baixada-card-thumb.jpg',
    videoUrl: '/videos/onco-baixada.mp4',
    videoDuracao: '1:19',
    municipioPrincipal: 'Nova Iguaçu',
    municipiosBeneficiados: ['Nova Iguaçu', 'Duque de Caxias', 'Belford Roxo', 'São João de Meriti', 'Mesquita', 'Nilópolis', 'Queimados'],
    fraseOQueE: 'Doutor Luizinho idealizou, elaborou e iniciou em 2023 o projeto do Instituto Estadual de Oncologia da Baixada, o primeiro hospital público de câncer da região, inaugurado em 2026 ao lado do Rio Imagem.',
    fraseNumero: 'A unidade conta com 100 leitos, 24 boxes modernos de quimioterapia e capacidade para realizar 300 cirurgias e mais de cinco mil atendimentos por mês.',
    fraseImpacto: 'O morador da Baixada não precisa mais madrugar na estrada para fazer quimio ou cirurgia no Centro do Rio — agora faz o tratamento completo perto de casa, com dignidade e ao lado da família.',
    numeros: [
      {
        valor: '24 boxes',
        rotulo: 'de quimioterapia de alta tecnologia',
        mes: 2,
        ano: 2026,
        fonte: 'SES-RJ / GovRJ',
        linkFonte: 'https://www.rj.gov.br/saude/node/3855',
      },
      {
        valor: '100',
        rotulo: 'leitos exclusivos para oncologia (10 de UTI)',
        mes: 2,
        ano: 2026,
        fonte: 'SES-RJ / GovRJ',
        linkFonte: 'https://www.rj.gov.br/saude/node/3855',
      },
      {
        valor: '300',
        rotulo: 'cirurgias oncológicas por mês de capacidade',
        mes: 2,
        ano: 2026,
        fonte: 'SES-RJ / GovRJ',
        linkFonte: 'https://www.rj.gov.br/saude/node/3915',
      },
    ],
  },
  {
    id: 'rio-imagem-baixada',
    nome: 'Rio Imagem Baixada',
    subtitulo: 'Maior centro público de diagnóstico por imagem da América Latina',
    janela: 'J2',
    papel: 'entregou',
    status: 'verificado',
    destaque: true,
    categoria: 'tecnologia',
    badge: 'Maior da América Latina',
    municipioPrincipal: 'Nova Iguaçu',
    municipiosBeneficiados: ['Nova Iguaçu', 'Baixada Fluminense', 'Região Metropolitana'],
    fraseOQueE: 'Em 2023, Doutor Luizinho inaugurou em Nova Iguaçu o Rio Imagem Baixada, o maior centro público de diagnóstico por imagem de toda a América Latina.',
    fraseNumero: 'O complexo tem mais de 5 mil metros quadrados e capacidade para realizar mais de 40 mil exames por mês, reunindo tomografia, ressonância magnética e exames laboratoriais de alta precisão.',
    fraseImpacto: 'Exames que antes demoravam meses na fila agora saem em poucos dias, permitindo descobrir a doença no início e começar o tratamento a tempo.',
    numeros: [
      {
        valor: '1,63 mi',
        rotulo: 'de exames diagnósticos e laboratoriais em 2 anos',
        mes: 6,
        ano: 2025,
        fonte: 'SES-RJ / RDQA',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/07/baixada-ganha-maior-centro-de-diagnostico-por-imagem-da-america-latina',
      },
      {
        valor: '40 mil',
        rotulo: 'exames por mês de capacidade plena',
        mes: 7,
        ano: 2023,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/08/rio-imagem-baixada-completa-um-mes-de-inauguracao-com-mais-de-12-mil-exames-realizados',
      },
      {
        valor: '5.000 m²',
        rotulo: 'de área construída com tecnologia de ponta',
        mes: 7,
        ano: 2023,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'ie-olhos',
    nome: 'Instituto Estadual de Olhos',
    subtitulo: 'Centro de excelência oftalmológica em Senador Vasconcelos',
    janela: 'J2',
    papel: 'idealizou',
    status: 'verificado',
    destaque: true,
    categoria: 'especialidade',
    badge: 'Zona Oeste',
    municipioPrincipal: 'Rio de Janeiro (Zona Oeste)',
    municipiosBeneficiados: ['Senador Vasconcelos', 'Campo Grande', 'Santa Cruz', 'Bangu', 'Zona Oeste'],
    fraseOQueE: 'Idealizado por Doutor Luizinho quando esteve à frente da Saúde do Estado, o Instituto Estadual de Olhos foi aberto em Senador Vasconcelos para acabar com as filas históricas de cirurgia de visão.',
    fraseNumero: 'Em apenas seis meses de funcionamento, a unidade já realizou mais de 110 mil atendimentos, quase 100 mil exames e mais de 1.300 cirurgias de catarata e glaucoma.',
    fraseImpacto: 'Idosos que já não conseguiam ler, cozinhar ou sair à rua sozinhos voltam a enxergar em um procedimento rápido, indolor e com alta no mesmo dia.',
    numeros: [
      {
        valor: '113 mil',
        rotulo: 'atendimentos totais em apenas 6 meses',
        mes: 9,
        ano: 2025,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.rj.gov.br/saude/node/3617',
      },
      {
        valor: '1.390',
        rotulo: 'cirurgias de visão realizadas no 1º semestre',
        mes: 9,
        ano: 2025,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.rj.gov.br/saude/node/3617',
      },
      {
        valor: '99.779',
        rotulo: 'exames oftalmológicos avançados',
        mes: 9,
        ano: 2025,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'ie-cerebro',
    nome: 'Instituto Estadual do Cérebro',
    subtitulo: 'Ampliação histórica do centro neurocirúrgico Paulo Niemeyer',
    janela: 'J2',
    papel: 'entregou',
    status: 'verificado',
    destaque: true,
    categoria: 'hospital',
    badge: 'Referência Mundial',
    municipioPrincipal: 'Rio de Janeiro (Centro)',
    fraseOQueE: 'Em março de 2023, Doutor Luizinho entregou a histórica expansão do Instituto Estadual do Cérebro, inaugurando um prédio anexo de seis andares dedicado à alta complexidade.',
    fraseNumero: 'A obra elevou o hospital para mais de 100 leitos ativos — sendo 54 exclusivos de UTI intensiva — e permitiu dobrar a capacidade de cirurgias para mais de 200 procedimentos por mês.',
    fraseImpacto: 'Pacientes com tumores cerebrais graves ou aneurismas que antes não tinham esperança agora contam com neurocirurgias de padrão internacional 100% pelo SUS.',
    numeros: [
      {
        valor: '103',
        rotulo: 'leitos ativos (54 de UTI intensiva)',
        mes: 3,
        ano: 2023,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/03/novo-predio-do-instituto-estadual-do-cerebro-paulo-niemeyer-e-inaugurado',
      },
      {
        valor: '240/mês',
        rotulo: 'capacidade de cirurgias de alta complexidade',
        mes: 3,
        ano: 2023,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/03/novo-predio-do-instituto-estadual-do-cerebro-paulo-niemeyer-e-inaugurado',
      },
      {
        valor: '6 andares',
        rotulo: 'no novo edifício anexo interligado',
        mes: 3,
        ano: 2023,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'cedtea-gavea',
    nome: 'Cedtea Gávea',
    subtitulo: '1º Centro Estadual de Diagnóstico Precoce do Autismo (TEA)',
    janela: 'J2',
    papel: 'idealizou',
    status: 'verificado',
    destaque: true,
    categoria: 'especialidade',
    badge: 'Atenção ao Autismo',
    imagem: '/videos/cedtea-card-thumb.jpg',
    videoUrl: '/videos/cedtea.mp4',
    videoDuracao: '1:03',
    municipioPrincipal: 'Rio de Janeiro (Gávea)',
    municipiosBeneficiados: ['Rio de Janeiro', 'Nova Iguaçu', 'Miguel Pereira', 'Todo o Estado'],
    fraseOQueE: 'Doutor Luizinho idealizou e estruturou na rede estadual o Cedtea, o primeiro centro público do Governo do Estado dedicado exclusivamente ao diagnóstico precoce do Transtorno do Espectro Autista.',
    fraseNumero: 'O espaço conta com equipe multidisciplinar completa de neuropediatras, psicólogos e fonoaudiólogos, responsável por mais de 13 mil consultas e mais de mil laudos definitivos emitidos.',
    fraseImpacto: 'Mães que passavam anos peregrinando de posto em posto sem resposta agora saem com o laudo na mão, garantindo o início das terapias no momento certo para o futuro do filho.',
    numeros: [
      {
        valor: '13 mil',
        rotulo: 'consultas multidisciplinares realizadas',
        mes: 4,
        ano: 2024,
        fonte: 'Fundação Saúde / SES-RJ',
        linkFonte: 'https://www.rj.gov.br/fundacaosaude/sites/default/files/arquivos-paginas/72_ANEXO-LXXII_TR_CEDTEA.pdf',
      },
      {
        valor: '1.350+',
        rotulo: 'laudos conclusivos de TEA formalmente emitidos',
        mes: 6,
        ano: 2025,
        fonte: 'Fundação Saúde / Carta de Serviços',
      },
      {
        valor: '2.600',
        rotulo: 'crianças e famílias acolhidas com dignidade',
        mes: 4,
        ano: 2024,
        fonte: 'Fundação Saúde / SES-RJ',
      },
    ],
  },
  {
    id: 'hto-baixada',
    nome: 'HTO Baixada (Nilópolis)',
    subtitulo: 'Hospital Estadual de Traumatologia e Ortopedia Melchiades Calazans',
    janela: 'J1',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'hospital',
    municipioPrincipal: 'Nilópolis',
    municipiosBeneficiados: ['Nilópolis', 'Nova Iguaçu', 'Mesquita', 'São João de Meriti', 'Baixada Fluminense'],
    fraseOQueE: 'Inaugurado por Doutor Luizinho em 2017 como secretário de Estado, o HTO Baixada transformou a traumatologia pública ao criar um polo exclusivo de cirurgias ortopédicas em Nilópolis.',
    fraseNumero: 'Em seus primeiros cinco anos de funcionamento pleno, a unidade realizou mais de 19 mil cirurgias e mais de 440 mil exames de diagnóstico, absorvendo mais de 3 mil pacientes graves dos hospitais da Posse e Saracuruna.',
    fraseImpacto: 'O trabalhador que sofre uma fratura na Baixada é operado com rapidez e próteses de ponta, voltando a andar e a trabalhar sem meses de espera na fila de trauma.',
    numeros: [
      {
        valor: '28.700',
        rotulo: 'cirurgias ortopédicas acumuladas até 2025',
        mes: 12,
        ano: 2025,
        fonte: 'SES-RJ / RAG',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2022/06/hto-baixada-comemora-cinco-anos-com-mais-de-19-mil-cirurgias-ortopedicas-realizadas',
      },
      {
        valor: '445 mil',
        rotulo: 'exames de imagem e diagnósticos',
        mes: 6,
        ano: 2022,
        fonte: 'SES-RJ',
      },
      {
        valor: '68 mil',
        rotulo: 'consultas ambulatoriais especializadas',
        mes: 6,
        ano: 2022,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'zilda-arns',
    nome: 'Hospital Regional Zilda Arns',
    subtitulo: 'Grande hospital de referência do Médio Paraíba em Volta Redonda',
    janela: 'J1',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'hospital',
    municipioPrincipal: 'Volta Redonda',
    municipiosBeneficiados: ['Volta Redonda', 'Barra Mansa', 'Resende', 'Pinheiral', 'Piraí', 'Médio Paraíba'],
    fraseOQueE: 'Entregue por Doutor Luizinho em 2018 e reforçado em 2023 com a chegada de um moderno aparelho de ressonância magnética, o Hospital Regional Zilda Arns é a maior referência do Médio Paraíba.',
    fraseNumero: 'A unidade opera com 237 leitos de alta complexidade e realizou mais de 3.200 cirurgias em seu primeiro ano de novos centros cirúrgicos, além de realizar cerca de 50 mil exames anuais.',
    fraseImpacto: 'Moradores de Volta Redonda e de outros 11 municípios vizinhos têm retaguarda de UTI e exames de ponta sem precisar de transferência para a capital.',
    numeros: [
      {
        valor: '237',
        rotulo: 'leitos ativos de alta complexidade e UTI',
        mes: 3,
        ano: 2018,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/07/hospital-zilda-arns-realiza-3-2-mil-procedimentos-em-centros-cirurgicos-inaugurados-ha-um-ano',
      },
      {
        valor: '3.200',
        rotulo: 'cirurgias no 1º ano dos centros cirúrgicos',
        mes: 7,
        ano: 2023,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.saude.rj.gov.br/noticias/2023/07/hospital-zilda-arns-realiza-3-2-mil-procedimentos-em-centros-cirurgicos-inaugurados-ha-um-ano',
      },
      {
        valor: '12',
        rotulo: 'municípios do Médio Paraíba atendidos',
        mes: 5,
        ano: 2023,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'acolhe-rj',
    nome: 'Programa Acolhe RJ',
    subtitulo: 'Prevenção à gravidez não planejada e saúde integral da mulher',
    janela: 'J2',
    papel: 'idealizou',
    status: 'verificado',
    destaque: false,
    categoria: 'especialidade',
    municipioPrincipal: 'Todo o Estado do RJ',
    fraseOQueE: 'Criado por Doutor Luizinho na Secretaria de Estado de Saúde em 2023, o Acolhe RJ é o maior programa estadual de prevenção à gravidez não planejada do Brasil.',
    fraseNumero: 'O programa já alcançou mais de 40 mil meninas e mulheres com orientações em saúde reprodutiva e realizou a inserção gratuita de mais de 30 mil métodos contraceptivos modernos de longa duração, como o Implanon e o DIU.',
    fraseImpacto: 'Jovens de áreas vulneráveis ganham autonomia sobre suas próprias vidas, garantindo a oportunidade de estudar, trabalhar e planejar sua família na hora certa.',
    numeros: [
      {
        valor: '40 mil+',
        rotulo: 'jovens e mulheres orientadas e acolhidas',
        mes: 11,
        ano: 2025,
        fonte: 'SES-RJ',
        linkFonte: 'https://www.tribunadosertao.com.br/rj-em-foco/2025/11/25/822250-governo-do-rio-lanca-programa-para-prevencao-a-gravidez-nao-planejada-na-baixada-fluminense',
      },
      {
        valor: '30 mil+',
        rotulo: 'dispositivos de longa duração (LARC) inseridos',
        mes: 11,
        ano: 2025,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'cis-regulacao',
    nome: 'Centro de Inteligência em Saúde (CIS)',
    subtitulo: 'Monitoramento em tempo real e redução de filas do SUS',
    janela: 'J2',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'tecnologia',
    municipioPrincipal: 'Todo o Estado do RJ',
    fraseOQueE: 'Em julho de 2023, Doutor Luizinho implantou o Centro de Inteligência em Saúde (CIS), conectando dados hospitalares e inteligência artificial para monitorar o SUS em tempo real.',
    fraseNumero: 'O novo sistema deu agilidade à regulação de leitos de emergência e consultas especializadas, gerando uma redução auditada de quase 40% no tempo médio de espera dos pacientes.',
    fraseImpacto: 'Médicos e gestores acompanham cada leito vago no estado na tela de um computador, acabando com a burocracia de papel e agilizando as transferências de quem está entre a vida e a morte.',
    numeros: [
      {
        valor: '38,4%',
        rotulo: 'de redução auditada no tempo de espera global',
        mes: 7,
        ano: 2023,
        fonte: 'SES-RJ / 2º RDQA',
        linkFonte: 'https://www.saude.rj.gov.br/comum/code/MostrarArquivo.php?C=NjM3OTM%2C',
      },
    ],
  },
  {
    id: 'maternidade-mariana-bulhoes',
    nome: 'Maternidade Mariana Bulhões',
    subtitulo: 'Reabertura histórica em Nova Iguaçu após fechamento por gestões anteriores',
    janela: 'J0',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'hospital',
    municipioPrincipal: 'Nova Iguaçu',
    fraseOQueE: 'Quando foi secretário municipal de Saúde de Nova Iguaçu, Doutor Luizinho assumiu o desafio e reabriu a Maternidade Mariana Bulhões em dezembro de 2013, após mais de um ano fechada por gestões anteriores.',
    fraseNumero: 'A unidade foi totalmente reformada e entregue com 40 leitos de enfermaria, 25 leitos de UTI neonatal e 4 leitos de UTI materna, realizando 8 mil partos seguros em seus primeiros dois anos.',
    fraseImpacto: 'As mães de Nova Iguaçu deixaram de dar à luz em corredores ou de viajar desesperadas para outras cidades, tendo maternidade pública de referência no coração da Baixada.',
    numeros: [
      {
        valor: '8.000',
        rotulo: 'partos realizados nos 2 primeiros anos',
        mes: 12,
        ano: 2013,
        fonte: 'Prefeitura de Nova Iguaçu / RAG',
        linkFonte: 'https://portaldatransparencia.novaiguacu.rj.gov.br/docs/prestacao_fms/2021/RELATORIO%20ANUAL%20DE%20GEST%C3%83O%20%202021.pdf',
      },
      {
        valor: '69',
        rotulo: 'leitos totais (25 de UTI neonatal)',
        mes: 12,
        ano: 2013,
        fonte: 'Prefeitura de Nova Iguaçu',
      },
    ],
  },
  {
    id: 'clinicas-familia-ni',
    nome: 'Clínicas da Família 24h (Nova Iguaçu)',
    subtitulo: 'Modelo pioneiro com posto 24h, base SAMU e exames integrados',
    janela: 'J0',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'basica',
    municipioPrincipal: 'Nova Iguaçu',
    fraseOQueE: 'Como secretário de Saúde de Nova Iguaçu, Doutor Luizinho implantou o modelo pioneiro das Clínicas da Família 24 Horas, como a Patrícia Marinho no Jardim Paraíso e as unidades de Odicéia Morais e Lagoinha.',
    fraseNumero: 'As unidades uniram atendimento médico de atenção básica, consultório odontológico, exames no local e base integrada do SAMU para socorro imediato aos bairros periféricos.',
    fraseImpacto: 'O morador da periferia que tinha febre ou pressão alta à noite passou a ter atendimento digno na porta de casa, sem precisar lotar a emergência do Hospital da Posse.',
    numeros: [
      {
        valor: '24h',
        rotulo: 'de atendimento contínuo nas unidades polos',
        mes: 7,
        ano: 2014,
        fonte: 'Prefeitura de Nova Iguaçu',
        linkFonte: 'https://novaiguacu.rj.gov.br/2014/07/17/nova-iguacu-inaugura-clinica-da-familia-24-horas-patricia-marinho-neste-sabado-19-07/',
      },
    ],
  },
  {
    id: 'getulio-vargas',
    nome: 'Hospital Estadual Getúlio Vargas (Penha)',
    subtitulo: 'Nova UTI Pediátrica e Tomógrafo na porta da Emergência',
    janela: 'J2',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'hospital',
    municipioPrincipal: 'Rio de Janeiro (Zona Norte)',
    fraseOQueE: 'Doutor Luizinho reestruturou o atendimento de urgência do Hospital Getúlio Vargas, entregando uma nova UTI Pediátrica e instalando um tomógrafo computadorizado no centro da emergência.',
    fraseNumero: 'A unidade ganhou velocidade máxima no diagnóstico de traumas encefálicos e acidentes vasculares cerebrais, atendendo milhares de casos da Zona Norte e Baixada.',
    fraseImpacto: 'Crianças e adultos que chegam à emergência contam com tomografia imediata na entrada e UTI especializada, salvando minutos decisivos para a vida.',
    numeros: [
      {
        valor: '10 leitos',
        rotulo: 'de UTI pediátrica intensiva especializada',
        mes: 6,
        ano: 2023,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'uti-infantil-ricardo-cruz',
    nome: 'UTI Pediátrica Hosp. Dr. Ricardo Cruz',
    subtitulo: 'Maior UTI infantil 100% pública do Brasil em Nova Iguaçu',
    janela: 'J2',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'hospital',
    municipioPrincipal: 'Nova Iguaçu',
    fraseOQueE: 'Doutor Luizinho entregou em 2023 a maior UTI infantil 100% pública do Brasil, instalada no Hospital Estadual Dr. Ricardo Cruz, em Nova Iguaçu.',
    fraseNumero: 'São 50 leitos intensivos de última geração equipados exclusivamente para o cuidado crítico pediátrico de alta complexidade.',
    fraseImpacto: 'Mães e pais da Baixada têm a certeza de que seus filhos terão atendimento pediátrico intensivo do mais alto padrão sem depender de vagas fora da região.',
    numeros: [
      {
        valor: '50',
        rotulo: 'leitos de UTI pediátrica de alta complexidade',
        mes: 8,
        ano: 2023,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'gamma-knife',
    nome: 'Gamma Knife (Instituto do Cérebro)',
    subtitulo: 'Único equipamento público de radiocirurgia cerebral do Brasil',
    janela: 'J1',
    papel: 'entregou',
    status: 'verificado',
    destaque: false,
    categoria: 'tecnologia',
    municipioPrincipal: 'Rio de Janeiro (Centro)',
    fraseOQueE: 'Doutor Luizinho inaugurou em 2017 o Gamma Knife no Instituto Estadual do Cérebro, tornando o Rio o único estado do Brasil a oferecer essa tecnologia 100% pelo SUS.',
    fraseNumero: 'O equipamento utiliza feixes de radiação milimétricos para tratar tumores profundos e malformações cerebrais sem cortes e sem necessidade de abrir a cabeça.',
    fraseImpacto: 'O paciente faz o procedimento pela manhã, sem dor e sem cortes, e recebe alta para casa no dia seguinte, sem cicatrizes e pronto para retomar sua rotina.',
    numeros: [
      {
        valor: '100% SUS',
        rotulo: 'único centro público do Brasil com Gamma Knife',
        mes: 9,
        ano: 2017,
        fonte: 'SES-RJ',
      },
    ],
  },
  {
    id: 'mutirao-catarata-vr',
    nome: 'Programa Revi-VER (Volta Redonda)',
    subtitulo: 'Apoio e recursos para o maior mutirão municipal de cirurgias de catarata',
    janela: 'Mandato',
    papel: 'destinou_recurso',
    status: 'verificado',
    destaque: false,
    categoria: 'especialidade',
    municipioPrincipal: 'Volta Redonda',
    fraseOQueE: 'Doutor Luizinho destinou emendas e articulou cofinanciamento do SUS com o Governo do Estado para apoiar o programa municipal Revi-VER em Volta Redonda.',
    fraseNumero: 'A política municipal já realizou mais de 30 mil cirurgias de catarata entre 2021 e 2025, devolvendo a visão a milhares de idosos da região.',
    fraseImpacto: 'Idosos que estavam dependentes de familiares recuperaram a visão e a liberdade de caminhar e cuidar da própria casa.',
    numeros: [
      {
        valor: '30 mil+',
        rotulo: 'cirurgias de catarata realizadas no Revi-VER',
        mes: 12,
        ano: 2025,
        fonte: 'Prefeitura de Volta Redonda / SES-RJ',
        linkFonte: 'https://www.voltaredonda.rj.gov.br/comunicacao/noticias/29-sms/12558-cl%C3%ADnica-dos-olhos-de-volta-redonda-promove-mutir%C3%A3o-de-consultas-neste-s%C3%A1bado-12/',
      },
    ],
  },
];

// =======================================================================
// INVARIANTE DE BUILD — O site NÃO compila se qualquer número violar a regra:
// Todo Numero DEVE possuir mês (1-12), ano (4 dígitos) e fonte identificada.
// =======================================================================
function validarInvariantesDeBuild(lista: Entrega[]): void {
  for (const entrega of lista) {
    if (!entrega.numeros || entrega.numeros.length === 0) {
      throw new Error(`[INVARIANTE DE BUILD VIOLADA] A entrega '${entrega.id}' (${entrega.nome}) não possui nenhum número registrado!`);
    }

    for (const num of entrega.numeros) {
      if (!num.mes || num.mes < 1 || num.mes > 12) {
        throw new Error(
          `[INVARIANTE DE BUILD VIOLADA] Na entrega '${entrega.id}', o número '${num.rotulo}' possui mês inválido: ${num.mes}. Obrigatório mês entre 1 e 12.`
        );
      }
      if (!num.ano || num.ano < 2013 || num.ano > 2030) {
        throw new Error(
          `[INVARIANTE DE BUILD VIOLADA] Na entrega '${entrega.id}', o número '${num.rotulo}' possui ano inválido: ${num.ano}.`
        );
      }
      if (!num.fonte || num.fonte.trim().length === 0) {
        throw new Error(
          `[INVARIANTE DE BUILD VIOLADA] Na entrega '${entrega.id}', o número '${num.rotulo}' NÃO possui fonte oficial identificada!`
        );
      }
    }
  }
}

// Executa validação estática no import:
validarInvariantesDeBuild(ENTREGAS);
