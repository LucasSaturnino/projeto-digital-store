import AdidasSapatilhasFeminina from '../assets/AdidasSapatilhasFeminina.png';
import AdidasSuperstar from '../assets/AdidasSuperstar.png';
import AirJordanNikeToe from '../assets/AirJordanNikeToe.png';
import ChuckTaylorAllStars from '../assets/ChuckTaylorAll-Stars.png';
import KSwissSneakersTennis from '../assets/K-SwissSneakersTennis.png';
import NewBalanceShoe from '../assets/NewBalanceShoe.png';
import NikeAirMaxAirJordan from '../assets/NikeAirMaxAirJordan.png';
import NikeAirMaxRed from '../assets/NikeAirMaxRed.png';
import NikeAirMaxSneakersRunning from '../assets/NikeAirMaxSneakersRunning.png';
import TenisNikeAirMax from '../assets/TenisNikeAirMax.png';

export const productsList = [
  {
    id: 1,
    name: 'K-Swiss Sneakers Tennis',
    reference: 'Casual | K-Swiss | REF:38416711',
    category: 'Tênis',
    image: KSwissSneakersTennis,
    images: [KSwissSneakersTennis, KSwissSneakersTennis, KSwissSneakersTennis],
    price: 200,
    priceDiscount: 100,
    stars: 4.5,
    rating: 30,
    description: 'Tênis K-Swiss V8 ideal para treinos e uso casual, oferecendo excelente durabilidade e aderência.',
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D5200']
  },
  {
    id: 2,
    name: 'Adidas Superstar',
    reference: 'Casual | Adidas | REF:88416722',
    category: 'Tênis',
    image: AdidasSuperstar,
    images: [AdidasSuperstar, AdidasSuperstar],
    price: 300,
    priceDiscount: 210,
    stars: 4.8,
    rating: 45,
    description: 'O clássico Adidas Superstar com biqueira emborrachada e design icônico para compor qualquer estilo urbano.',
    sizes: ['38', '39', '40', '41'],
    colors: ['#000000', '#FFFFFF', '#FF6969']
  },
  {
    id: 3,
    name: 'Chuck Taylor All-Stars',
    reference: 'Casual | Converse | REF:55416733',
    category: 'Tênis',
    image: ChuckTaylorAllStars,
    images: [ChuckTaylorAllStars, ChuckTaylorAllStars],
    price: 250,
    priceDiscount: 180,
    stars: 4.6,
    rating: 60,
    description: 'O tradicional Chuck Taylor All-Star cano baixo, versátil e perfeito para o dia a dia.',
    sizes: ['37', '38', '39', '40', '41'],
    colors: ['#000000', '#FFFFFF', '#5E5E5E']
  },
  {
    id: 4,
    name: 'Nike Air Max Red',
    reference: 'Casual | Nike | REF:77416744',
    category: 'Tênis',
    image: NikeAirMaxRed,
    images: [NikeAirMaxRed, NikeAirMaxSneakersRunning],
    price: 400,
    priceDiscount: 299,
    stars: 4.9,
    rating: 120,
    description: 'Nike Air Max com detalhes em vermelho, garantindo estilo marcante e amortecimento premium.',
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#FF6969', '#5E5E5E', '#6FEEFF']
  },
  {
    id: 5,
    name: 'Nike Air Max Sneakers Running',
    reference: 'Casual | Nike | REF:38416711',
    category: 'Tênis',
    image: NikeAirMaxSneakersRunning,
    images: [NikeAirMaxSneakersRunning, NikeAirMaxRed, TenisNikeAirMax, AirJordanNikeToe, AdidasSuperstar],
    price: 450,
    priceDiscount: 320,
    stars: 4.7,
    rating: 90,
    description: 'Tênis Nike Air Max de alta performance e máximo conforto para corrida e uso casual no dia a dia. Cabedal em mesh respirável e amortecimento Air Max clássico.',
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#6FEEFF', '#FF6969', '#5E5E5E', '#6D5200']
  },
  {
    id: 6,
    name: 'Adidas Sapatilhas Feminina',
    reference: 'Esporte | Adidas | REF:99416755',
    category: 'Sapatilhas',
    image: AdidasSapatilhasFeminina,
    images: [AdidasSapatilhasFeminina, AdidasSuperstar],
    price: 180,
    priceDiscount: 120,
    stars: 4.4,
    rating: 25,
    description: 'Sapatilha leve e confortável da Adidas voltada para o público feminino.',
    sizes: ['35', '36', '37', '38', '39'],
    colors: ['#FF6969', '#FFFFFF', '#5E5E5E']
  },
  {
    id: 7,
    name: 'New Balance Shoe',
    reference: 'Casual | New Balance | REF:22416766',
    category: 'Tênis',
    image: NewBalanceShoe,
    images: [NewBalanceShoe, KSwissSneakersTennis],
    price: 350,
    priceDiscount: 240,
    stars: 4.5,
    rating: 55,
    description: 'Estilo e conforto incomparáveis com o design clássico da New Balance.',
    sizes: ['38', '39', '40', '41', '42', '43'],
    colors: ['#5E5E5E', '#FFFFFF', '#6FEEFF']
  },
  {
    id: 8,
    name: 'Tênis Nike Air Max',
    reference: 'Esporte | Nike | REF:11416777',
    category: 'Tênis',
    image: TenisNikeAirMax,
    images: [TenisNikeAirMax, NikeAirMaxSneakersRunning],
    price: 380,
    priceDiscount: 260,
    stars: 4.7,
    rating: 80,
    description: 'Amortecimento clássico Air Max com excelente suporte para atividades físicas e uso urbano.',
    sizes: ['39', '40', '41', '42', '43'],
    colors: ['#6FEEFF', '#5E5E5E', '#FF6969']
  },
];