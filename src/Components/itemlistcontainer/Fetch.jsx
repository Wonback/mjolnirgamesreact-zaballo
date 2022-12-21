const productos = [
  {
    id: 1,
    categoria: "Accion",
    foto: "https://imageio.forbes.com/specials-images/imageserve/628d337e791f9767c05ca2e7/1--2-/960x0.jpg?height=887&width=711&fit=bounds",
    nombre: "Modern Warfare 2",
    precio: 100,
    stock: 99,
  },
  {
    id: 2,
    categoria: "Accion",
    foto: "https://media.moddb.com/images/articles/1/296/295594/Battlefield_2042_Gold_Edition_Co.jpg",
    nombre: "Battlefield 2042",
    precio: 100,
    stock: 99,
  },
  {
    id: 3,
    categoria: "Accion",
    foto: "https://livezhibofj.com/wp-content/uploads/2020/03/Doom-Eternal-PC-Caratula.jpg",
    nombre: "DOOM",
    precio: 100,
    stock: 99,
  },
  {
    id: 4,
    categoria: "Aventura",
    foto: "https://cdn1.epicgames.com/3328b08ac1c14540aa265a1a85c07839/offer/hzd_tall-1200x1600-d4b1057afd47f9256d8da71f2f187be4.jpg",
    nombre: "Horizon: Zero Dawn",
    precio: 100,
    stock: 99,
  },
  {
    id: 5,
    categoria: "Aventura",
    foto: "https://i0.wp.com/areaxbox.com/wp-content/uploads/2021/11/skyrim-anniversary-edition-portada-2.jpg?fit=1280%2C1574&ssl=1?v=1636507487",
    nombre: "The elder scrolls V: Skyrim",
    precio: 100,
    stock: 99,
  },
  {
    id: 6,
    categoria: "Aventura",
    foto: "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f",
    nombre: "The Witcher 3",
    precio: 100,
    stock: 99,
  },
  {
    id: 7,
    categoria: "Roguelike",
    foto: "https://e.snmc.io/lk/l/x/33cff451d5d26b974833dc393e28bf22/5280582",
    nombre: "The Binding of Isaac",
    precio: 100,
    stock: 99,
  },
  {
    id: 8,
    categoria: "Roguelike",
    foto: "https://www.mobygames.com/images/covers/l/548137-moonlighter-nintendo-switch-front-cover.jpg",
    nombre: "Moonlighter",
    precio: 100,
    stock: 99,
  },
  {
    id: 9,
    categoria: "Roguelike",
    foto: "https://images.gog-statics.com/5ffd34e9ffdacf3ee3f75aba6025fb1ed013c4e56649de9f39b47aca5f2338b3.jpg",
    nombre: "Dead Cells",
    precio: 100,
    stock: 99,
  },
];

export const mostrarproductos = () => {
  return new Promise((res, rej) => {
    let condicion = true;
    if (condicion) {
      setTimeout(() => {
        res(productos);
      }, 2000);
    } else {
      rej("error");
    }
  });
};
