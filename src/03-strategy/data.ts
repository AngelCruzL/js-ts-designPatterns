export type Beer = {
  name: string;
  country: string;
  info: string;
  img: string;
};

export const mockData = [
  {
    name: 'Erdinger Pikantus',
    country: 'Alemania',
    info: 'Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.',
    img: 'https://dxjcdxuv6chk2.cloudfront.net/assets/biere/flascheglas/pikantus-2020-v2.png',
  },
  {
    name: 'Corona',
    country: 'México',
    info: 'La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Corona-6Pack.JPG',
  },
  {
    name: 'Delirium Tremens',
    country: 'Bélgica',
    info: 'Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.',
    img: 'https://www.delirium.be/themes/custom/delirium/assets/img/beers/beer_delirium_tremens_bottle.png',
  },
];
