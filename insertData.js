const { QueryError } = require("sequelize");
const { bleachDb } = require("./database");
const Character = require("./models/character")(sequelize, Sequelize.DataTypes);

// Crear un array de personajes de Bleach
const characters = [
  {
    nombre: "Uryū Ishida",
    raza: ["Quincy"],
    cumpleaños: "6 de noviembre",
    altura: "1.80 m",
    peso: "65 kg",
    afiliacion: "Quincy, Gotei 13",
    ocupacion: "Estudiante, Médico",
    shikai: "Ninguno",
    bankai: "Ninguno",
    poderes: `
            Uryū Ishida es un Quincy, lo que significa que tiene la capacidad de manipular el Reishi (espíritu de partículas). 
            Uno de sus poderes más notables es su habilidad para disparar flechas con una precisión increíble. 
            Es capaz de lanzar hasta 1200 flechas consecutivas, cada una de ellas cargada con una gran cantidad de energía espiritual. 
            Estas flechas pueden variar su dirección a lo largo del espacio una vez disparadas, lo que las convierte en un arma sumamente difícil de evitar. 
            A lo largo de la serie, se muestra que Uryū también posee el Schrift "A", un poder único que le fue otorgado por el rey Quincy. 
            Este Schrift, conocido como "Antítesis", le permite revertir los efectos de cualquier acción que haya sucedido. 
            Por ejemplo, puede sanar heridas graves a sí mismo o a otros, o revertir el daño que él o sus enemigos hayan recibido en combate. 
            Esta habilidad lo convierte en un oponente formidable y le otorga una gran ventaja en situaciones de lucha. 
            Además, Uryū puede crear barreras de energía y usar la luz espiritual para atacar o defenderse de manera más eficiente.
            `,
    habilidades: `
            - Disparo de flechas: Uryū puede disparar flechas de energía espiritual con una precisión letal. Con su habilidad, puede alcanzar a varios enemigos a la vez, disparando múltiples flechas en rápida sucesión.
            - Regeneración: Gracias a su habilidad Antítesis, Uryū puede sanar heridas y revertir el daño recibido, ya sea por él mismo o por sus aliados.
            - Antítesis: Esta habilidad le permite revertir cualquier acción que haya ocurrido, haciendo que los eventos no ocurran de la misma manera. Por ejemplo, puede curar heridas o cambiar el resultado de una batalla.
            - Schrift "A": Este es el poder más distintivo de Uryū, otorgado por el rey Quincy. Le permite manipular la antítesis de cualquier acción o situación, lo que lo convierte en un combatiente extremadamente peligroso.
            - Manipulación del Reishi: Uryū puede utilizar el Reishi para crear diversas armas espirituales, como flechas, y también puede crear barreras de energía o incluso utilizarlo para potenciar sus ataques.
        `,
    nivel_de_poder: `
            Uryū Ishida posee un nivel de poder extremadamente alto. Como Quincy, su habilidad para manipular el Reishi le otorga una ventaja considerable sobre otros personajes. 
            Su habilidad para disparar flechas de energía con una precisión y velocidad increíbles lo hace un combatiente formidable. 
            Además, su Schrift "A" le permite revertir las acciones de la batalla, lo que le da una ventaja estratégica significativa. 
            Su nivel de poder se incrementa aún más cuando se encuentra en situaciones de alto estrés, lo que le permite mejorar sus habilidades de manera exponencial. 
            A lo largo de la serie, Uryū demuestra ser capaz de enfrentarse a enemigos poderosos, incluyendo a los Espadas y otros Quincy, gracias a su entrenamiento y su capacidad para utilizar su poder de manera eficiente.
        `,
    galeria: JSON.stringify([
      "https://i.pinimg.com/736x/77/5a/36/775a36fea3615ee751189dc8696901b8.jpg",
      "https://s1.zerochan.net/Ishida.Uryuu.600.4027822.jpg",
      "https://preview.redd.it/r91hur617sa51.png?width=687&format=png&auto=webp&s=b642b74918589a2d130c2589071fc12293a44197",
      "https://static.wikia.nocookie.net/villains/images/c/c7/Bleach_Ury%C5%AB_Ishida_Anime_Schutztaffel_Render.png/revision/latest?cb=20230713200923",
    ]),
    historia: `
        Uryū Ishida es un Quincy, una antigua raza de guerreros espirituales que luchaban contra los Hollows. 
        Es el último sobreviviente de su clan, ya que su pueblo fue destruido por los Shinigami en el pasado. 
        A pesar de su resentimiento hacia los Shinigami, Uryū se une a Ichigo Kurosaki y sus amigos en la lucha contra los Hollows y otras amenazas. 
        A lo largo de la serie, Uryū se convierte en uno de los personajes más importantes y valientes, luchando al lado de Ichigo y enfrentándose a poderosos enemigos. 
        A lo largo de su historia, Uryū enfrenta conflictos internos debido a su identidad como Quincy y su relación con los Shinigami, pero finalmente aprende a equilibrar sus lealtades y luchar por el bien de todos. 
        En su viaje, se encuentra con varios personajes importantes, como su padre, Ryūken Ishida, y otros miembros del clan Quincy, quienes tienen sus propias motivaciones y objetivos. 
        Su habilidad para utilizar el Reishi y su capacidad de manipular el Schrift "A" lo convierten en un aliado invaluable en la lucha contra los enemigos más poderosos.
    `,
    personalidad: `
        Uryū es un personaje serio y calculador. A pesar de su actitud reservada, es muy leal a sus amigos y tiene un fuerte sentido de justicia, 
        aunque a veces puede ser un poco arrogante debido a su herencia Quincy. En su interior, tiene un gran deseo de proteger a sus seres queridos, 
        pero también lucha con la responsabilidad de ser el último Quincy, lo que le genera una carga emocional. Su carácter se desarrolla a lo largo de la serie, 
        y llega a aceptar tanto su rol como Quincy como su relación con los Shinigami, comprendiendo que a veces es necesario trabajar juntos para derrotar a enemigos comunes.
    `,
    batallas:
      "Ishida vs Mayuri[Ganador], Ishida vs Jugram[Empate], Ishida vs Renji[Ganador],Ishida vs Szayelaporro Granz[Ganador]",
  }/*
  {
    nombre: "Renji Abarai",
    raza: ["Shinigami"],
    cumpleaños: "31 de agosto",
    altura: "1.80 m",
    peso: "70 kg",
    afiliacion: "Escuadra 6, Gotei 13",
    ocupacion: "Oficial Shinigami",
    shikai: "Zabimaru",
    bankai: "Sōō Zabimaru",
    poderes: "Poderes Shinigami",
    habilidades: "Control de Zabimaru, Agilidad",
    nivel_de_poder: "Alto",
    galeria: JSON.stringify([
      "https://path/to/renji1.jpg",
      "https://path/to/renji2.jpg",
    ]),
    historia:
      "Renji Abarai es un shinigami de la 6ª división. Es amigo cercano de Ichigo Kurosaki.",
    personalidad: "Renji es leal, audaz y tiene una personalidad algo ruda.",
  },
  {
    nombre: "Byakuya Kuchiki",
    raza: ["Shinigami"],
    cumpleaños: "31 de enero",
    altura: "1.80 m",
    peso: "69 kg",
    afiliacion: "Escuadra 6, Gotei 13",
    ocupacion: "Capitán de la 6ª división",
    shikai: "Senbonzakura",
    bankai: "Senbonzakura Kageyoshi",
    poderes: "Poderes Shinigami",
    habilidades: "Control de Senbonzakura, Gran agilidad",
    nivel_de_poder: "Muy alto",
    galeria: JSON.stringify([
      "https://path/to/byakuya1.jpg",
      "https://path/to/byakuya2.jpg",
    ]),
    historia:
      "Byakuya Kuchiki es el capitán de la 6ª división y miembro de la noble familia Kuchiki.",
    personalidad: "Byakuya es calmado, serio y muy disciplinado.",
  },
  {
    nombre: "Sōsuke Aizen",
    raza: ["Shinigami", "Hollow"],
    cumpleaños: "29 de mayo",
    altura: "1.80 m",
    peso: "70 kg",
    afiliacion: "Ex-Capitán de la 5ª división, Espada",
    ocupacion: "Ex-Capitán, Traidor",
    shikai: "Kyoka Suigetsu",
    bankai: "Kyoka Suigetsu (desconocido)",
    poderes: "Poderes Shinigami, Manipulación de la mente",
    habilidades: "Control mental, Gran inteligencia",
    nivel_de_poder: "Extremadamente alto",
    galeria: JSON.stringify([
      "https://path/to/aizen1.jpg",
      "https://path/to/aizen2.jpg",
    ]),
    historia:
      "Sōsuke Aizen es un ex-capitán que se convierte en uno de los principales antagonistas de la serie.",
    personalidad:
      "Aizen es extremadamente astuto, manipulador y tiene un gran sentido de control.",
  },
  {
    nombre: "Tōshirō Hitsugaya",
    raza: ["Shinigami"],
    cumpleaños: "20 de diciembre",
    altura: "1.30 m",
    peso: "40 kg",
    afiliacion: "Escuadra 10, Gotei 13",
    ocupacion: "Capitán de la 10ª división",
    shikai: "Hyōrinmaru",
    bankai: "Daiguren Hyōrinmaru",
    poderes: "Poderes Shinigami, Control de hielo",
    habilidades: "Control del hielo, Gran velocidad",
    nivel_de_poder: "Alto",
    galeria: JSON.stringify([
      "https://path/to/hitsugaya1.jpg",
      "https://path/to/hitsugaya2.jpg",
    ]),
    historia:
      "Tōshirō Hitsugaya es el joven capitán de la 10ª división. Es conocido por su control sobre el hielo.",
    personalidad:
      "Hitsugaya es serio, valiente y tiene un gran sentido de la justicia.",
  },
  {
    nombre: "Shunsui Kyōraku",
    raza: ["Shinigami"],
    cumpleaños: "11 de noviembre",
    altura: "1.85 m",
    peso: "80 kg",
    afiliacion: "Escuadra 1, Gotei 13",
    ocupacion: "Capitán de la 1ª división",
    shikai: "Katen Kyōkotsu",
    bankai: "Katen Kyōkotsu (desconocido)",
    poderes: "Poderes Shinigami",
    habilidades: "Control de Katen Kyōkotsu, Gran resistencia",
    nivel_de_poder: "Alto",
    galeria: JSON.stringify([
      "https://path/to/shunsui1.jpg",
      "https://path/to/shunsui2.jpg",
    ]),
    historia:
      "Shunsui Kyōraku es el capitán de la 1ª división y uno de los personajes más experimentados.",
    personalidad:
      "Shunsui es relajado, bromista y tiene un gran sentido de camaradería.",
  },
  {
    nombre: "Sajin Komamura",
    raza: ["Shinigami"],
    cumpleaños: "9 de agosto",
    altura: "2.10 m",
    peso: "130 kg",
    afiliacion: "Escuadra 7, Gotei 13",
    ocupacion: "Capitán de la 7ª división",
    shikai: "Tenken",
    bankai: "Kokuō",
    poderes: "Poderes Shinigami",
    habilidades: "Fuerza sobrehumana, Gran resistencia",
    nivel_de_poder: "Alto",
    galeria: JSON.stringify([
      "https://path/to/komamura1.jpg",
      "https://path/to/komamura2.jpg",
    ]),
    historia:
      "Sajin Komamura es el capitán de la 7ª división, un hombre lobo con un gran sentido del honor.",
    personalidad: "Komamura es leal, serio y tiene una gran ética de trabajo.",
  },
  {
    nombre: "Yoruichi Shihōin",
    raza: ["Shinigami"],
    cumpleaños: "1 de enero",
    altura: "1.70 m",
    peso: "50 kg",
    afiliacion: "Escuadra 2, Gotei 13",
    ocupacion: "Ex-Capitán de la 2ª división",
    shikai: "Shunkō",
    bankai: "Shunkō (desconocido)",
    poderes: "Poderes Shinigami, Velocidad, Agilidad",
    habilidades: "Transformación en gato, Gran velocidad",
    nivel_de_poder: "Alto",
    galeria: JSON.stringify([
      "https://path/to/yoruichi1.jpg",
      "https://path/to/yoruichi2.jpg",
    ]),
    historia:
      "Yoruichi Shihōin es una ex-capitana de la 2ª división, experta en el Shunkō y en la transformación en gato.",
    personalidad:
      "Yoruichi es confiada, ágil y tiene un gran sentido del humor.",
  },
  {
    nombre: "Kisuke Urahara",
    raza: ["Shinigami"],
    cumpleaños: "30 de diciembre",
    altura: "1.80 m",
    peso: "70 kg",
    afiliacion: "Ex-Capitán de la 12ª división",
    ocupacion: "Dueño de la tienda de Urahara",
    shikai: "Benihime",
    bankai: "Benihime (desconocido)",
    poderes: "Poderes Shinigami, Gran intelecto",
    habilidades: "Invenciones, Gran control del Reiatsu",
    nivel_de_poder: "Alto",
    galeria: JSON.stringify([
      "https://path/to/urahara1.jpg",
      "https://path/to/urahara2.jpg",
    ]),
    historia:
      "Kisuke Urahara es un ex-capitán que ahora dirige una tienda en el mundo humano.",
    personalidad:
      "Urahara es astuto, misterioso y tiene un sentido del humor muy peculiar.",
  },
  {
    nombre: "Ichigo Kurosaki",
    raza: ["Humano", "Shinigami", "Hollow"],
    cumpleaños: "15 de julio",
    altura: "1.74 m",
    peso: "61 kg",
    afiliacion: "Escuela de Karakura, Shinigami",
    ocupacion: "Estudiante, Shinigami",
    shikai: "Zangetsu",
    bankai: "Tensa Zangetsu",
    poderes: "Poderes de Shinigami, Hollow, Quincy",
    habilidades: "Corte de Getsuga Tenshō, Regeneración",
    nivel_de_poder: "Extremadamente alto",
    galeria: JSON.stringify([
      "https://path/to/ichigo1.jpg",
      "https://path/to/ichigo2.jpg",
    ]),
    historia:
      "Ichigo Kurosaki es el protagonista principal de Bleach. Es un Shinigami con habilidades especiales...",
    personalidad:
      "Ichigo es valiente, impulsivo y tiene un fuerte sentido de justicia.",
  },
  {
    nombre: "Rukia Kuchiki",
    raza: ["Shinigami"],
    cumpleaños: "14 de enero",
    altura: "1.50 m",
    peso: "44 kg",
    afiliacion: "Escuadra 13, Gotei 13",
    ocupacion: "Shinigami",
    shikai: "Sode no Shirayuki",
    bankai: "Hakka no Togame",
    poderes: "Poderes de Shinigami, hielo",
    habilidades: "Control del hielo, habilidades de combate cuerpo a cuerpo",
    nivel_de_poder: "Alto",
    galeria: JSON.stringify([
      "https://path/to/rukia1.jpg",
      "https://path/to/rukia2.jpg",
    ]),
    historia:
      "Rukia Kuchiki es una Shinigami de la familia Kuchiki, enviada a la Tierra donde conoce a Ichigo...",
    personalidad:
      "Rukia es seria, pero tiene un gran corazón y es muy leal a sus amigos.",
  },*/
];

// Insertar los datos en la base de datos
const insertCharacters = async () => {
  try {
    await bleachDb.sync(); // Asegúrate de que la base de datos está sincronizada

    // Insertar los personajes
    for (const character of characters) {
      await Character.create(character);
    }

    console.log("Personajes insertados correctamente");
  } catch (error) {
    console.error("Error al insertar los personajes:", error);
  }
};

insertCharacters();
