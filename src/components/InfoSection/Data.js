import svg from '../../images/svg-1.svg';
import svg2 from '../../images/svg-2.svg';
import svg3 from '../../images/svg-33.svg';


export const homeObjOne = {
    id: 'erax',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'PROJETO ERA X',
    headline: ' A Nova Era da Sua Liberdade',
    description: 'Esse é o nosso principal canal de distribuição de conteúdo. Buscamos trazer as melhores informações para alcançar a liberdade de nossos apoiadores.',
    buttonLabel: 'Conheça o Projeto',
    imgStart: false,
    img: svg, 
    alt: 'X',
    dark: true,
    primary: true,
    darkText: false,
    link: '/erax'
};

export const homeObjTwo = {
    id: 'viva',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'VIVA DE INTERNET',
    headline: 'DESCUBRA MAIS DE 50 FONTES DE RENDA ONLINE',
    description: 'Conheça o nosso primeiro e-book, onde contamos praticamente todas as maneiras de monetizar no mercado online e alcançar sua liberdade geográfica.',
    buttonLabel: 'Saiba Mais',
    imgStart: true,
    img: svg2, 
    alt: 'X',
    dark: false,
    primary: true,
    darkText: true,
    link: '/ebook'
};

export const homeObjThree = {
    id: 'cold',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'PLANILHAS',
    headline: 'CONTROLE SUAS FINANÇAS',
    description: 'Baixe planilhas para controlar todas suas finanças de uma forma simples e muito organizada.',
    buttonLabel: 'Saiba Mais',
    imgStart: false,
    img: svg3, 
    alt: 'X',
    dark: true,
    primary: true,
    darkText: false,
    link: '/planilhas'
};
