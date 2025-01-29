const { bleachDb } = require("./database");
const Character = require("./models/character")(
  bleachDb,
  require("sequelize").DataTypes
); // Asegúrate de pasar bleachDb y DataTypes

console.log(Character); // Esto debe mostrar la función de creación del modelo

const characters = [
  /*{
    nombre: "Uryū Ishida",
    raza: "Quincy",
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
  },

  {
    nombre: "Ichigo Kurosaki",
    raza: "Shinigami (Humano), Quincy, Fullbringer",
    cumpleaños: "15 de julio",
    altura: "1.81 m",
    peso: "66 kg",
    afiliacion: "Gotei 13, Grupo de Ichigo Kurosaki",
    ocupacion: " Shinigami Sustituto",
    shikai: "Zangetsu",
    bankai: "Tensa Zangetsu",
    poderes: `
              Ichigo Kurosaki es un Shinigami, lo que le otorga habilidades espirituales excepcionales. 
              Su poder más notable es el uso de su zanpakutō, Zangetsu, que le permite liberar una gran cantidad de energía espiritual. 
              Su Shikai le permite usar una gran espada para luchar contra los enemigos, mientras que su Bankai, Tensa Zangetsu, aumenta enormemente su velocidad y poder destructivo. 
              A lo largo de la serie, Ichigo también adquiere el poder de un Hollow, lo que le otorga habilidades adicionales como la regeneración y la capacidad de liberar ataques devastadores. 
              Además, su capacidad para usar el Getsuga Tenshō, un ataque de energía espiritual, lo convierte en un combatiente extremadamente peligroso.
          `,
    habilidades: `
              - Zangetsu: Su zanpakutō le permite liberar energía espiritual en forma de una gran espada. 
              - Getsuga Tenshō: Ichigo puede liberar un ataque de energía espiritual en forma de una onda destructiva.
              - Tensa Zangetsu: Su Bankai le otorga una gran mejora en su velocidad y fuerza, además de un control superior sobre su energía espiritual.
              - Poder Hollow: Durante la serie, Ichigo obtiene poderes de Hollow, lo que le otorga habilidades adicionales como regeneración y la capacidad de liberar ataques más poderosos.
              - Gran Rey Cero: Una habilidad que combina el poder de Ichigo como Shinigami y Hollow, lanzando un ataque de energía devastador.
          `,
    nivel_de_poder: `
              Ichigo Kurosaki posee un nivel de poder excepcionalmente alto. Como Shinigami, su habilidad para controlar su energía espiritual le permite enfrentar a enemigos poderosos. 
              Su Bankai, Tensa Zangetsu, le otorga una velocidad y fuerza increíbles, mientras que su habilidad para usar el Getsuga Tenshō le permite lanzar ataques devastadores. 
              Cuando obtiene poderes de Hollow, su nivel de poder se incrementa aún más, lo que le permite enfrentarse a enemigos de nivel superior, como los Espadas y Aizen. 
              Ichigo también ha demostrado la capacidad de crecer rápidamente en situaciones de combate, lo que lo convierte en un oponente impredecible y peligroso.
          `,
    galeria: JSON.stringify([
      "https://steamuserimages-a.akamaihd.net/ugc/931560939712074916/07240C3F87D54A509C0D2FF5CBCB7C7A79632780/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      "https://i.pinimg.com/736x/61/41/2e/61412e37c693c93d9620a6b040516cec.jpg",
      "https://static.wixstatic.com/media/9149f5_0576b1658c224207bc916f106dfd0dc6~mv2.jpg/v1/fill/w_980,h_719,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9149f5_0576b1658c224207bc916f106dfd0dc6~mv2.jpg",
      "https://i.pinimg.com/736x/47/c4/5c/47c45c58bc10e41d6408fe91b791cfb8.jpg",
    ]),
    historia: `
          Ichigo Kurosaki es un joven con la capacidad de ver espíritus, lo que lo lleva a convertirse en un Shinigami sustituto tras encontrar a Rukia Kuchiki, quien le otorga sus poderes. 
          A lo largo de la serie, Ichigo se enfrenta a varios enemigos, incluidos los Hollows, los Espadas y otros seres sobrenaturales. 
          A pesar de su naturaleza impulsiva y su tendencia a actuar sin pensar, Ichigo demuestra ser un líder valiente y protector de sus amigos y seres queridos. 
          Su lucha interna con su poder, su relación con su familia y su deseo de proteger a los demás lo convierten en un personaje complejo y en uno de los más poderosos en el universo de Bleach.
      `,
    personalidad: `
          Ichigo es un personaje fuerte, impulsivo y determinado. A pesar de su actitud ruda y su tendencia a actuar por impulso, tiene un fuerte sentido de justicia y está dispuesto a sacrificarse por aquellos que ama. 
          Aunque inicialmente parece distante, es profundamente leal a sus amigos y siempre lucha por protegerlos. Su vida como Shinigami le trae grandes responsabilidades, pero siempre se enfrenta a los desafíos con valentía. 
          A lo largo de la serie, Ichigo madura y aprende a equilibrar su vida como estudiante y como protector de los vivos y los muertos.
      `,
    batallas:
      "Ichigo vs Uryū[Empate], Ichigo vs Renji[Ganador], Ichigo vs Aizen[Ganador], Ichigo vs Ulquiorra[Ganador], Ichigo vs Byakuya[Empate]",
  },

  {
    nombre: "Sosuke Aizen",
    raza: "Shinigami (Traidor)",
    cumpleaños: "29 de mayo",
    altura: "1.86 m",
    peso: "74 kg",
    afiliacion: "Ex-Gotei 13, Espada",
    ocupacion: "Capitán del Gotei 13 (anteriormente), Líder de los Arrancar",
    shikai: "Kyoka Suigetsu",
    bankai: "Desconocido",
    poderes: `
            Sosuke Aizen es un Shinigami extremadamente poderoso, conocido por su habilidad para manipular la mente de sus enemigos. 
            Su Shikai, Kyoka Suigetsu, le permite controlar los sentidos de los demás, haciendo que perciban una realidad completamente falsa. 
            Esta habilidad le otorga un control absoluto sobre la percepción de sus oponentes, lo que le permite manipular situaciones a su favor. 
            Aunque su Bankai nunca se revela en la serie, Aizen es conocido por su increíble poder espiritual y su habilidad para enfrentarse a los Shinigami más poderosos.
            A lo largo de la serie, Aizen demuestra ser un estratega formidable, manipulando a sus enemigos y aliados por igual para lograr sus propios fines.
        `,
    habilidades: `
            - Kyoka Suigetsu: Su Shikai le permite manipular los cinco sentidos de sus enemigos, haciéndoles ver, oír, oler, saborear y sentir cosas que no son reales.
            - Regeneración: Aizen tiene una habilidad excepcional para sanar rápidamente, lo que le permite recuperarse de heridas graves.
            - Manipulación espiritual: Aizen tiene un control increíble sobre su energía espiritual, lo que le permite lanzar ataques poderosos y realizar manipulaciones complejas de la energía espiritual.
            - Inteligencia estratégica: Aizen es un maestro de la manipulación y la estrategia, utilizando su astucia para engañar a sus enemigos y aliados por igual.
            - Reiryoku: Su nivel de energía espiritual es extremadamente alto, lo que le permite enfrentarse a varios enemigos poderosos a la vez.
        `,
    nivel_de_poder: `
            Sosuke Aizen es uno de los personajes más poderosos de la serie. Su nivel de poder espiritual es tan alto que es capaz de enfrentarse a los Capitanes del Gotei 13 y a los Espadas sin esfuerzo. 
            Su habilidad para manipular los sentidos con su Shikai, Kyoka Suigetsu, lo convierte en un enemigo casi invencible, ya que puede controlar la percepción de la realidad de cualquier persona que se enfrente a él. 
            A lo largo de la serie, Aizen demuestra ser un estratega extremadamente inteligente, capaz de manipular a varios personajes para alcanzar sus propios objetivos. 
            Su poder se incrementa aún más cuando se fusiona con el Hōgyoku, una poderosa piedra espiritual que le otorga habilidades aún más devastadoras.
        `,
    galeria: JSON.stringify([
      "https://preview.redd.it/blm5slud28za1.jpg?auto=webp&s=3adb2d9ce52b8e89fe03549917f5666d3f53d717",
      "https://static.wikia.nocookie.net/bleach/images/9/94/S%C5%8Dsuke_Muken.png/revision/latest?cb=20210825194946&path-prefix=es",
      "https://i.pinimg.com/originals/9e/61/7d/9e617de9647b63d4a7e2e3c859b95b17.jpg",
      "https://static.wikia.nocookie.net/bleachwiki/images/6/6e/AizenVerwandlung4.jpg/revision/latest/scale-to-width-down/732?cb=20110614154626&path-prefix=de"
    ]),
    historia: `
        Sosuke Aizen era un capitán del Gotei 13 y uno de los personajes más respetados dentro de la Sociedad de Almas. Sin embargo, traicionó a sus compañeros y se reveló como el principal antagonista de la serie. 
        Aizen se alió con los Arrancar y comenzó a manipular los eventos para conseguir su objetivo: convertirse en un ser inmortal y alcanzar un poder absoluto. 
        A lo largo de la serie, Aizen demuestra ser un maestro manipulador, utilizando su astucia y su poder para manipular a los demás a su favor. 
        Su objetivo final es destruir la Sociedad de Almas y gobernar el mundo de los vivos, pero su ambición lo lleva a enfrentarse con los personajes principales, como Ichigo Kurosaki, quien finalmente lo derrota. 
        Aizen también tiene una relación complicada con los Espadas, ya que, aunque los manipula, también los considera herramientas valiosas para alcanzar sus fines.
    `,
    personalidad: `
        Aizen es un personaje extremadamente inteligente, calculador y manipulador. Su actitud calmada y su confianza en su propio poder lo hacen parecer invencible. 
        A pesar de su apariencia tranquila, Aizen tiene una ambición desmesurada y un deseo de poder absoluto. Su ego y su inteligencia lo llevan a subestimar a sus enemigos, lo que finalmente le cuesta la derrota. 
        Aizen no tiene problemas en manipular y traicionar a aquellos que considera útiles, y su lealtad es solo hacia sí mismo y su objetivo final. A lo largo de la serie, demuestra ser un antagonista formidable, capaz de controlar a otros con facilidad.
    `,
    batallas: 
      "Aizen vs Ichigo[Ganador], Aizen vs Shinigami[Ganador], Aizen vs Ichigo(Mugetsu)[Perdedor]",
  },
  
    {
      nombre: "Rukia Kuchiki",
      raza: "Shinigami",
      cumpleaños: "14 de enero",
      altura: "1.44 m",
      peso: "33 kg",
      afiliacion: "Gotei 13",
      ocupacion: "Capitana de la 13ª División",
      shikai: "Sode no Shirayuki",
      bankai: "Hakka no Togame",
      poderes: `
              Rukia Kuchiki es una Shinigami y miembro de la familia Kuchiki, una de las familias nobles más poderosas de la Sociedad de Almas. 
              Su Shikai, Sode no Shirayuki, es una zanpakuto de hielo que le permite controlar y manipular el hielo y la nieve. 
              Su habilidad más notable es la creación de una neblina helada que congela a sus enemigos, dejándolos inmóviles y vulnerables a sus ataques. 
              Su Bankai, Hakka no Togame, aumenta considerablemente su poder y le permite congelar todo lo que toca, creando un campo de hielo mortal. 
              Rukia también es conocida por su habilidad en combate cuerpo a cuerpo, su valentía y su lealtad a sus amigos y compañeros de batalla.
          `,
      habilidades: `
              - Sode no Shirayuki: Su Shikai le permite manipular el hielo y la nieve, creando poderosos ataques de hielo que pueden congelar a sus enemigos.
              - Hakka no Togame: Su Bankai le otorga un control absoluto sobre el hielo, permitiéndole congelar todo lo que toca y creando un campo de hielo mortal que congela a sus oponentes.
              - Combate cuerpo a cuerpo: A pesar de ser una experta en el uso de su zanpakuto, Rukia también es hábil en combate físico, utilizando su velocidad y agilidad para enfrentarse a sus enemigos.
              - Reiryoku: Rukia tiene un alto nivel de energía espiritual, lo que le permite realizar ataques poderosos y mantener su resistencia durante largas batallas.
          `,
      nivel_de_poder: `
              Rukia Kuchiki es una de las Shinigami más fuertes de la serie, especialmente en el uso de su zanpakuto. 
              Su habilidad para controlar el hielo con Sode no Shirayuki la convierte en una combatiente formidable, capaz de derrotar a enemigos poderosos. 
              Aunque inicialmente no tiene el nivel de poder de otros Capitanes, Rukia demuestra a lo largo de la serie que su fuerza y determinación la hacen una aliada valiosa en las batallas más difíciles. 
              Su Bankai, Hakka no Togame, la convierte en una de las luchadoras más letales de la Sociedad de Almas, capaz de derrotar a enemigos con un solo golpe.
          `,
      galeria: JSON.stringify([
        "https://www.superherodb.com/pictures2/portraits/10/050/12697.jpg?v=1633152958",
        "https://static.wikia.nocookie.net/bleach/images/9/9c/Bankai_di_Rukia%3B_Hakka_no_Togame.jpg/revision/latest/scale-to-width-down/736?cb=20241003171703&path-prefix=it",
        "https://s3.amazonaws.com/comicgeeks/characters/avatars/35479.jpg?t=1665702621",
        "https://i.pinimg.com/736x/ca/c4/9a/cac49a1f3cd8153ddeb756bad60a3c62.jpg"
      ]),
      historia: `
          Rukia Kuchiki es una Shinigami que fue adoptada por la noble familia Kuchiki después de la muerte de sus padres. 
          A lo largo de la serie, Rukia juega un papel crucial en la vida de Ichigo Kurosaki, ya que es ella quien le da sus poderes de Shinigami. 
          Tras un enfrentamiento con el Capitán de la 6ª División, Byakuya Kuchiki, su hermano adoptivo, Rukia es arrestada y condenada a muerte por el uso indebido de sus poderes. 
          Sin embargo, Ichigo y sus amigos luchan para salvarla, y ella se convierte en una aliada clave en la lucha contra los Espadas y otras amenazas. 
          A lo largo de la serie, Rukia se enfrenta a varios desafíos personales, incluidos los conflictos con su familia y su propia identidad como Shinigami.
      `,
      personalidad: `
          Rukia Kuchiki es un personaje valiente, leal y con un fuerte sentido del deber. Aunque es una persona reservada y seria, también tiene un lado amable y protector, especialmente hacia sus amigos y compañeros de batalla. 
          A lo largo de la serie, se muestra que Rukia es muy leal a Ichigo y sus amigos, y siempre está dispuesta a arriesgar su vida para protegerlos. 
          Su relación con su hermano adoptivo, Byakuya, es compleja, ya que ambos tienen diferentes perspectivas sobre el deber y la familia, pero a lo largo de la serie, Rukia aprende a encontrar su propio camino y propósito.
      `,
      batallas: 
        "Rukia vs Renji[Perdedora], Rukia vs Kaien[Ganadora], Rukia vs Aaroniero[Ganadora], Rukia vs As Nodt[Ganadora]",
    },
    {
      nombre: "Byakuya Kuchiki",
      raza: "Shinigami",
      cumpleaños: "31 de enero",
      altura: "1.80 m",
      peso: "68 kg",
      afiliacion: "Gotei 13",
      ocupacion: "Capitán de la 6ª División",
      shikai: "Senbonzakura",
      bankai: "Senbonzakura Kageyoshi",
      poderes: `
              Byakuya Kuchiki es un Capitán de la 6ª División en el Gotei 13 y uno de los Shinigami más poderosos de la serie. 
              Su zanpakuto, Senbonzakura, tiene la capacidad de desintegrarse en miles de pequeñas hojas de sakura (cerezos) que pueden atacar a sus enemigos desde cualquier dirección. 
              Su Bankai, Senbonzakura Kageyoshi, es aún más destructivo, creando un mar de hojas afiladas que pueden cortar todo a su paso. 
              Byakuya también es conocido por su gran habilidad en el uso de técnicas de Kido (hechizos), lo que le otorga una ventaja estratégica en combate. 
              Su control sobre su energía espiritual es excepcional, lo que le permite realizar ataques a larga distancia con una precisión mortal.
          `,
      habilidades: `
              - Senbonzakura: Su Shikai le permite desintegrar su zanpakuto en miles de pequeñas hojas que pueden atacar a sus enemigos desde cualquier dirección. 
              - Senbonzakura Kageyoshi: Su Bankai aumenta la cantidad de hojas y les da una mayor capacidad de destrucción, creando un mar de hojas afiladas que puede controlar a su voluntad.
              - Kido: Byakuya es un experto en el uso de Kido, el arte de la magia espiritual, lo que le permite lanzar poderosos hechizos y barreras para atacar o defenderse.
              - Gran control de Reiryoku: Byakuya tiene un control excepcional sobre su energía espiritual, lo que le permite mantener una gran resistencia y realizar ataques a larga distancia con gran precisión.
          `,
      nivel_de_poder: `
              Byakuya Kuchiki es uno de los Shinigami más poderosos de la serie, con un nivel de poder extremadamente alto. 
              Su habilidad para controlar su zanpakuto y usar su Bankai con maestría lo convierte en un oponente formidable. 
              Su dominio de las técnicas de Kido también lo hace muy versátil en combate, ya que puede atacar a sus enemigos con hechizos y defensas mágicas, además de su impresionante habilidad con su zanpakuto. 
              Byakuya ha demostrado ser capaz de enfrentarse a enemigos extremadamente poderosos, incluyendo a los Espadas y otros miembros de alto rango en la Sociedad de Almas.
          `,
      galeria: JSON.stringify([
        "https://upload.wikimedia.org/wikipedia/en/7/7e/Byakuya_New_Hair.png",
        "https://i.pinimg.com/736x/0d/4f/54/0d4f5432480992d9e58bcac96707c4a7.jpg",
        "https://imgix.ranker.com/list_img_v2/8379/2728379/original/best-byakuya-kuchiki-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720",
        "https://static.wikia.nocookie.net/bleachfanfiction/images/4/49/Byakuya_after_training_redone.png/revision/latest?cb=20140219152104"
      ]),
      historia: `
          Byakuya Kuchiki es el Capitán de la 6ª División en el Gotei 13 y miembro de la noble familia Kuchiki. 
          A lo largo de la serie, Byakuya es conocido por su actitud calmada, seria y distante, así como por su sentido del deber y la lealtad hacia la Sociedad de Almas. 
          Aunque inicialmente parece ser un hombre frío e implacable, su historia revela una profunda conexión con su hermana adoptiva, Rukia, y su amor por ella, a pesar de las restricciones de la familia Kuchiki. 
          Byakuya es un hombre que valora profundamente el honor y el cumplimiento de su deber, pero a lo largo de la serie, se enfrenta a dilemas personales relacionados con su familia y su relación con Rukia.
      `,
      personalidad: `
          Byakuya Kuchiki es un hombre serio, calmado y con una fuerte sensación del deber. 
          A pesar de su exterior frío y distante, tiene un profundo amor y lealtad hacia su familia, especialmente hacia su hermana adoptiva, Rukia. 
          A lo largo de la serie, Byakuya demuestra que su sentido del honor y la justicia son fundamentales para él, aunque también enfrenta conflictos internos relacionados con las expectativas de su familia y su relación con los demás. 
          A pesar de sus reservas emocionales, Byakuya es un líder natural y un combatiente formidable, siempre dispuesto a hacer lo necesario para proteger a los que le importan.
      `,
      batallas: 
        "Byakuya vs Ichigo[Empate], Byakuya vs Renji[Ganador], Byakuya vs Zommari[Ganador], Byakuya vs Gerard[Ganador]",
    },
    {
    nombre: "Renji Abarai",
    raza: "Shinigami",
    cumpleaños: "31 de Agosto",
    altura: "1.88 m",
    peso: "78 kg",
    afiliacion: "Gotei 13",
    ocupacion: "Teniente de la 6ª División",
    shikai: "Zabimaru",
    bankai: "Sōō Zabimaru",
    poderes: `
            Renji Abarai es el teniente de la 6ª División del Gotei 13 y un Shinigami muy talentoso. 
            Su zanpakuto, Zabimaru, tiene la capacidad de transformarse en una espada de gran tamaño, con una forma serpenteante, y se especializa en ataques a larga distancia. 
            En su Bankai, Hihiō Zabimaru, Renji invoca una versión mucho más poderosa de su zanpakuto, que toma la forma de un gigantesco dragón que le permite atacar a sus enemigos con gran fuerza y velocidad. 
            Renji también es conocido por su habilidad para usar técnicas de Kido, aunque no tiene tanto dominio como otros personajes, pero su capacidad para controlar su energía espiritual es notable.
        `,
    habilidades: `
            - Zabimaru: Su Shikai le permite usar su zanpakuto como una espada que se extiende y se curva, permitiéndole atacar a sus enemigos a distancia. 
            - Hihiō Zabimaru: Su Bankai transforma su zanpakuto en un gigantesco dragón de hueso que le permite realizar ataques destructivos a gran escala. 
            - Kido: Renji tiene una habilidad moderada con las técnicas de Kido, aunque no es tan experto como otros Shinigami, lo que le permite usar hechizos de apoyo y ataque.
            - Gran resistencia: Renji tiene una gran resistencia física y espiritual, lo que le permite enfrentarse a enemigos poderosos sin rendirse fácilmente.
        `,
    nivel_de_poder: `
            Renji Abarai es un Shinigami muy poderoso, especialmente cuando utiliza su Bankai, Hihiō Zabimaru. 
            Su nivel de poder ha aumentado considerablemente a lo largo de la serie, lo que le permite enfrentarse a enemigos muy fuertes, como los Espadas. 
            Aunque su control sobre el Kido no es tan avanzado como el de otros Shinigami, su destreza en combate cuerpo a cuerpo y su habilidad con su zanpakuto lo convierten en un combatiente formidable. 
            Renji también ha demostrado tener una gran resistencia y la capacidad de adaptarse a situaciones difíciles, lo que le permite luchar en condiciones extremas.
        `,
    galeria: JSON.stringify([
      "https://upload.wikimedia.org/wikipedia/en/2/2e/RenjiAbaraiKubo.png",
      "https://static.wikia.nocookie.net/bleachwiki/images/5/5b/Renji_manga_.jpg/revision/latest?cb=20240411132729&path-prefix=de",
      "https://naniwallpaper.com/files/wallpapers/renji-abarai/3-renji%20abarai-1080x1920.jpg",
      "https://i1.sndcdn.com/artworks-IzOOhMfVIr3NBwNj-yZwrAQ-t500x500.jpg"
    ]),
    historia: `
        Renji Abarai es un miembro del Gotei 13 y el teniente de la 6ª División bajo el mando de Byakuya Kuchiki. 
        A lo largo de la serie, Renji demuestra ser un personaje leal, valiente y determinado, aunque al principio tiene una relación algo tensa con su capitán, Byakuya, debido a su amistad con Rukia Kuchiki. 
        Renji es un hombre de gran corazón, dispuesto a hacer lo que sea necesario para proteger a sus amigos y seres queridos. A pesar de su actitud algo ruda, tiene una fuerte moralidad y un profundo sentido de justicia. 
        En la serie, Renji pasa por una gran evolución, desde ser un Shinigami novato hasta convertirse en un combatiente de alto nivel, capaz de enfrentarse a enemigos poderosos como los Espadas.
    `,
    personalidad: `
        Renji Abarai es un hombre extrovertido, valiente y leal, con una gran determinación. 
        Aunque tiene una actitud algo ruda y a veces es impulsivo, es profundamente leal a sus amigos y su capitán, Byakuya Kuchiki. 
        A lo largo de la serie, Renji demuestra un fuerte sentido de justicia y un deseo de proteger a los que le importan, especialmente a Rukia, con quien tiene una relación muy cercana. 
        Su personalidad se caracteriza por su voluntad de mejorar y superar sus limitaciones, lo que lo convierte en un personaje muy querido por los fans.
    `,
    batallas: 
      "Renji vs Ichigo[Perdedor], Renji vs Byakuya[Perdedor], Renji vs Szayelaporro Granz[Ganador], Renji vs Kageroza Inaba[Ganador]",
  },
  {
    nombre: "Orihime Inoue",
    raza: "Humana, Fullbringer",
    cumpleaños: "3 de septiembre",
    altura: "1.57 m",
    peso: "45 kg",
    afiliacion: "Humanos, Gotei 13",
    ocupacion: "Estudiante, Miembro del Gotei 13",
    shikai: "Ninguno",
    bankai: "Ninguno",
    poderes: `
            Orihime Inoue es una humana con habilidades espirituales excepcionales, especialmente con su poder curativo. Su habilidad más conocida es la manipulación de sus "Escudos de la Diosa", que son seis pequeñas barreras que puede utilizar para protegerse a sí misma y a otros. Estas barreras pueden defender contra ataques y también tienen la capacidad de curar heridas. 
            Además, Orihime posee la habilidad de revertir el tiempo en un área determinada, lo que le permite curar heridas y revivir a personas en ciertas circunstancias. 
            A lo largo de la serie, se muestra que su poder tiene un gran potencial, y Orihime demuestra ser una aliada invaluable, especialmente en situaciones críticas.
        `,
    habilidades: `
            - Barreras de protección: Orihime puede crear barreras que la protegen a ella y a sus aliados de los ataques enemigos.
            - Reversión del tiempo: Su habilidad más poderosa es la capacidad de revertir el tiempo dentro de un área limitada, lo que le permite curar heridas y revivir a personas.
            - Regeneración: Orihime puede sanar heridas graves con su poder, y su habilidad para sanar a otros se vuelve crucial en la lucha contra los enemigos.
            - Poder espiritual: Aunque inicialmente no era consciente de su propio poder, Orihime demuestra ser capaz de utilizar su energía espiritual de manera efectiva.
        `,
    nivel_de_poder: `
            Orihime Inoue tiene un nivel de poder significativo, aunque al principio de la serie no es tan consciente de su potencial. Su habilidad para sanar heridas y revertir el tiempo la convierte en una de las personas más valiosas del Gotei 13. 
            Su poder de curación es vital, especialmente en las batallas más intensas, y su habilidad de revivir a los muertos o sanar lesiones fatales la hace indispensable para su equipo. 
            Aunque no es una luchadora en el sentido tradicional, su poder es un recurso extremadamente valioso.
        `,
    galeria: JSON.stringify([
      "https://static.wikia.nocookie.net/bleach/images/c/c7/Ep397OrihimeProfile.png/revision/latest/scale-to-width/360?cb=20241111181107&path-prefix=en",
      "https://static.wikia.nocookie.net/bleach/images/1/13/Kurosaki_Orihime.png/revision/latest?cb=20211220122331&path-prefix=es",
      "https://i.redd.it/evl2n103gtl81.jpg",
      "https://i.pinimg.com/736x/a7/99/ca/a799ca45a24c44d6752ccbc63aa77c2d.jpg",
    ]),
    historia: `
        Orihime Inoue es una joven que vive en Karakura Town y, al principio de la serie, no tiene idea de las implicaciones de sus habilidades espirituales. A pesar de su naturaleza amable y algo ingenua, Orihime demuestra ser una persona extremadamente valiente y dispuesta a sacrificarse por los demás. 
        A lo largo de la serie, se une al grupo de Ichigo Kurosaki para luchar contra los Hollows y proteger a sus amigos. Su historia está marcada por su profundo deseo de proteger a sus seres queridos, lo que la lleva a desarrollar sus habilidades curativas y espirituales. 
        Orihime tiene una relación cercana con Ichigo y, aunque no es una luchadora tradicional, su poder es fundamental para el éxito de su equipo.
    `,
    personalidad: `
        Orihime es una persona muy amable, alegre y positiva. A pesar de las dificultades que enfrenta, siempre trata de ver lo mejor en las personas y situaciones. Es muy protectora con sus amigos y, aunque no siempre es consciente de la magnitud de su propio poder, se esfuerza por ayudar a los demás de cualquier manera posible. 
        A menudo se muestra un poco insegura y tiene una profunda admiración por Ichigo, pero a lo largo de la serie, crece significativamente en términos de confianza en sí misma y en sus habilidades.
    `,
    batallas: "Orihime vs Ulquiorra[Empate]",
  },
  {
    nombre: "Yasutora 'Chad' Sado",
    raza: "Humano, Fullbringer",
    cumpleaños: "7 de abril",
    altura: "1.96 m",
    peso: "112 kg",
    afiliacion: "Humanos, Gotei 13",
    ocupacion: "Estudiante",
    shikai: "Ninguno",
    bankai: "Ninguno",
    poderes: `
            Chad posee una habilidad espiritual única que se manifiesta a través de su brazo derecho y su brazo izquierdo. Su brazo derecho, conocido como "Brazo Derecho de la Tormenta", le permite canalizar energía espiritual en un poderoso ataque de energía, que puede destruir enemigos con gran fuerza. Su brazo izquierdo, llamado "Brazo Izquierdo de la Protección", tiene la capacidad de generar un escudo protector que puede bloquear ataques enemigos. 
            A lo largo de la serie, Chad demuestra que su poder crece considerablemente a medida que se enfrenta a enemigos más fuertes, y su determinación y lealtad lo convierten en un miembro clave del grupo de Ichigo.
        `,
    habilidades: `
            - Brazo Derecho del diablo: Chad puede canalizar energía espiritual en su brazo derecho, liberando un potente ataque de energía destructiva.
            - Brazo Izquierdo de la Protección: Chad utiliza su brazo izquierdo para generar un escudo protector, que puede bloquear ataques poderosos y proteger a sus aliados.
            - Fuerza física: Chad tiene una gran resistencia física, lo que lo convierte en un combatiente formidable en combate cuerpo a cuerpo.
            - Adaptabilidad: A medida que avanza la serie, Chad aprende a controlar y mejorar sus habilidades espirituales, lo que lo hace más fuerte en combate.
        `,
    nivel_de_poder: `
            Chad tiene un nivel de poder considerable, especialmente en términos de resistencia física y poder destructivo. Aunque no es tan hábil en el uso de la energía espiritual como otros personajes, su determinación y el poder de sus habilidades lo convierten en un combatiente muy valioso. 
            Su habilidad para proteger a sus amigos con su brazo izquierdo y su capacidad para causar daño masivo con su brazo derecho lo hacen un miembro importante del equipo.
        `,
    galeria: JSON.stringify([
      "https://static.wikia.nocookie.net/bleach/images/e/e9/Ep351SadoProfile.png/revision/latest/scale-to-width/360?cb=20231105184729&path-prefix=en",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjBgS07z5n2c7QfLohPamewqPzfqF5jn35R2AH0R0K2eXwkkb4IAcwB9K06QXb4eQvqB8&usqp=CAU",
      "https://i.pinimg.com/736x/00/e7/4e/00e74e892d4afa6a52786460f84ba8e9.jpg",
      "https://s0.smartresize.com/wallpaper/182/116/HD-wallpaper-anime-bleach-yasutora-sado.jpg",
    ]),
    historia: `
        Yasutora "Chad" Sado es un joven con un pasado complicado, pero es uno de los amigos más leales de Ichigo Kurosaki. A pesar de haber tenido una vida difícil, Chad es una persona amable y protectora, especialmente con sus amigos. 
        Al principio de la serie, Chad no tiene idea de la magnitud de sus habilidades espirituales, pero a medida que avanza la historia, se da cuenta de su potencial. Chad se une a Ichigo en la lucha contra los Hollows y otros enemigos, y su poder se desarrolla a lo largo de la serie. 
        Su relación con Ichigo es muy fuerte, y Chad se convierte en uno de los miembros más importantes de su equipo.
    `,
    personalidad: `
        Chad es un personaje serio y tranquilo, pero también muy leal y protector con sus amigos. Aunque tiene una apariencia algo intimidante debido a su tamaño y fuerza, es una persona bondadosa y siempre está dispuesto a ayudar a los demás. 
        A lo largo de la serie, se muestra que Chad tiene una gran determinación y un fuerte sentido de justicia, lo que lo convierte en un valioso aliado en la lucha contra los enemigos.
    `,
    batallas: "Chad vs Shunsui[Perdedor]",
  },
  
    {
      nombre: "Yhwach",
      raza: "Quincy",
      cumpleaños: "1 de enero",
      altura: "2.00 m",
      peso: "90 kg",
      afiliacion: "Quincy, Wandenreich",
      ocupacion: "Rey de los Quincy",
      shikai: "Ninguno",
      bankai: "Zanka no tachi (robado)",
      poderes: `
              Yhwach es el líder de los Quincy y el principal antagonista de la saga final de *Bleach*. Su habilidad más notable es el poder de su Bankai, "Aushwahlen", que le permite absorber las habilidades y los poderes de aquellos a quienes ha derrotado. 
              Además, posee la habilidad "The Almighty", que le otorga la capacidad de ver el futuro y modificarlo a su favor. Yhwach puede tomar el poder de los seres más poderosos y aumentar su propia fuerza de manera exponencial, lo que lo convierte en un enemigo extremadamente peligroso.
              `,
      habilidades: `
              - The Almighty: Esta habilidad le permite ver y alterar el futuro. Puede predecir los movimientos de sus oponentes y manipular los eventos a su favor, lo que lo convierte en un enemigo casi invencible.
              - Aushwahlen: La habilidad de su Bankai le permite absorber los poderes de aquellos que han muerto a su alrededor, aumentando su propio poder y permitiéndole usar sus habilidades.
              - Manipulación del Reishi: Como Quincy, Yhwach puede manipular el Reishi para crear armas y ataques poderosos, incluyendo flechas y barreras de energía.
              - Creación de Soldados: Yhwach tiene la capacidad de otorgar poder a sus seguidores, como los Sternritter, otorgándoles habilidades únicas basadas en sus letras del alfabeto.
          `,
      nivel_de_poder: `
              Yhwach es uno de los personajes más poderosos de la serie *Bleach*. Su habilidad para manipular el futuro y absorber las habilidades de otros lo convierte en un combatiente casi invencible. 
              Su poder aumenta exponencialmente cuando derrota a un oponente poderoso, lo que lo convierte en una amenaza aún mayor. A lo largo de la serie, demuestra su habilidad para enfrentarse a los Shinigami más fuertes y a otros Quincy, siendo un adversario temible.
          `,
      galeria: JSON.stringify([
        "https://static.wikia.nocookie.net/bleach/images/5/5c/Ep390YhwachProfile.png/revision/latest?cb=20230928065020&path-prefix=en",
        "https://preview.redd.it/i-got-a-few-questions-is-yhwach-a-good-villain-is-his-v0-t3de3gerhisb1.jpg?width=640&crop=smart&auto=webp&s=784d1de8690e9da8feabc99ab079dd36cdf83e49",
        "https://i.pinimg.com/736x/64/03/cb/6403cb9b98173264300e822a6a8df204.jpg",
        "https://i.pinimg.com/564x/80/46/38/804638eaa7091cf1fd3b63d25c18576b.jpg",
      ]),
      historia: `
          Yhwach es el líder de los Quincy y el principal antagonista de la saga final de *Bleach*. Es el hijo del Espíritu del Mundo, y su poder es inmenso. Durante siglos, Yhwach ha estado planeando la destrucción de los Shinigami y la creación de un nuevo mundo bajo su dominio. 
          A lo largo de la serie, se revela que Yhwach tiene una conexión profunda con la historia de los Quincy y que es el responsable de muchos de los eventos que ocurrieron en el pasado. Su habilidad para manipular el futuro y absorber poderes lo convierte en una amenaza casi invencible, y su lucha contra Ichigo y los demás personajes principales es uno de los puntos culminantes de la serie.
      `,
      personalidad: `
          Yhwach es un personaje calculador y despiadado. Tiene una visión grandiosa del mundo, creyendo que solo él tiene el derecho de gobernar sobre todos los seres vivos. 
          Su personalidad es fría y distante, y no muestra compasión por aquellos que considera inferiores. A pesar de su poder y su inmenso control sobre los Quincy, Yhwach también es un líder que inspira lealtad en sus seguidores, quienes lo ven como el salvador de su raza.
      `,
      batallas: "Yhwach vs Ichigo[Empate]",
    },

    {
      nombre: "Shunsui Kyōraku",
      raza: "Shinigami",
      cumpleaños: "11 de julio",
      altura: "1.92 m",
      peso: "87 kg",
      afiliacion: "Gotei 13, 8ª División",
      ocupacion: "Capitán de la 8ª División",
      shikai: "Katen Kyōkotsu",
      bankai: "Katen Kyōkotsu: Karamatsu Shinjū",
      poderes: `
              Shunsui Kyōraku es el capitán de la 8ª División del Gotei 13 y uno de los personajes más poderosos de *Bleach*. Su Zanpakutō, Katen Kyōkotsu, tiene la habilidad única de manipular el juego y la estrategia durante las batallas, haciendo que los combates sean más impredecibles y peligrosos.
              En su Bankai, Shunsui invoca una forma más peligrosa de su Zanpakutō, creando una situación en la que sus enemigos deben enfrentarse a sus propios miedos y deseos más oscuros. Su poder también se basa en su astucia y su capacidad para leer a sus oponentes, lo que lo convierte en un maestro del combate.
              `,
      habilidades: `
              - Katen Kyōkotsu (Shikai): La habilidad de su Zanpakutō permite a Shunsui manipular el juego durante el combate. Cada vez que un ataque de su espada toca al oponente, la "regla" del juego cambia, lo que hace que la lucha sea impredecible.
              - Bankai - Katen Kyōkotsu: Karamatsu Shinjū: En su Bankai, Shunsui crea un escenario donde sus enemigos deben enfrentarse a sus propios miedos, llevando el combate a un nivel psicológico. Esto le da ventaja, ya que puede manipular las emociones y pensamientos de sus oponentes.
              - Maestría en combate: Shunsui es un experto combatiente, capaz de enfrentarse a los enemigos más poderosos gracias a su astucia, habilidad en el combate cuerpo a cuerpo y su experiencia como capitán del Gotei 13.
              - Liderazgo: Como capitán de la 8ª División, Shunsui tiene una gran habilidad para liderar a su equipo y motivar a sus subordinados en momentos de crisis.
          `,
      nivel_de_poder: `
              Shunsui Kyōraku es uno de los combatientes más poderosos del Gotei 13. Su habilidad para leer a sus oponentes y manipular las reglas del combate lo convierte en un adversario extremadamente peligroso. 
              Además, su Bankai es de los más poderosos y temidos, ya que puede manipular las emociones y la psicología de sus enemigos. A lo largo de la serie, Shunsui demuestra ser capaz de enfrentarse a los enemigos más fuertes, incluyendo a los Sternritter y otros Shinigami poderosos.
          `,
      galeria: JSON.stringify([
        "https://static.wikia.nocookie.net/bleachfanwork/images/2/25/Kyoraku_E9.png/revision/latest?cb=20230406214525",
        "https://preview.redd.it/r49og0m806481.jpg?width=640&crop=smart&auto=webp&s=e7eb683c004f94fcdd7aa54fecb77732f6fa5c26",
        "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/kyoraku-bankai_image1-49_katen-kyokotsu-karamatsu-shinju-bleach-tybw-part-3-episode-9.jpg",
        "https://preview.redd.it/ascd619wwdb81.jpg?auto=webp&s=17f46c16b6fc7f6137516af5de1c98db221eeec2",
      ]),
      historia: `
          Shunsui Kyōraku es el capitán de la 8ª División del Gotei 13 y uno de los personajes más importantes en la serie *Bleach*. A lo largo de la historia, se revela que Shunsui tiene una relación cercana con otros personajes clave, como Nanao Ise, su teniente, y Ukitake, su amigo de toda la vida. 
          A pesar de su actitud relajada y su amor por el sake, Shunsui es un líder extremadamente capaz y un combatiente formidable. Durante la guerra contra los Quincy y los Sternritter, Shunsui juega un papel fundamental en la defensa de la Sociedad de Almas, enfrentándose a poderosos enemigos y demostrando su valía como capitán.
      `,
      personalidad: `
          Shunsui es conocido por su personalidad relajada y su actitud despreocupada. A menudo se le ve tomando sake y actuando de manera juguetona, pero esta actitud oculta su gran habilidad y su seriedad cuando se trata de proteger a sus amigos y compañeros.
          Es un líder sabio y compasivo, siempre dispuesto a tomar decisiones difíciles por el bien de la Sociedad de Almas. A pesar de su naturaleza relajada, Shunsui es extremadamente astuto y peligroso en combate, lo que lo convierte en un personaje muy respetado dentro del Gotei 13.
      `,
      batallas: "Shunsui vs Starrk[Ganador], Shunsui vs Lille Barro[Ganador], Shunsui vs Chad[Ganador]",
    },

    {
      nombre: "Kisuke Urahara",
      raza: "Shinigami",
      cumpleaños: "31 de diciembre",
      altura: "1.83 m",
      peso: "69 kg",
      afiliacion: "Gotei 13 (exiliado), Urahara Shop",
      ocupacion: "Dueño de la tienda Urahara, ex Capitán de la 12ª División",
      shikai: "Benihime",
      bankai: "Benihime Aratame",
      poderes: `
              Kisuke Urahara es un Shinigami extremadamente habilidoso y un experto en el uso de técnicas de combate y manipulación espiritual. Su Zanpakutō, Benihime, tiene la capacidad de generar y manipular energía espiritual en forma de poderosos ataques. Aunque su Bankai nunca se ha revelado, Urahara ha demostrado tener un dominio absoluto sobre su Shikai y sus habilidades en combate.
              Urahara también es un genio en la creación de tecnología espiritual y el uso de la energía espiritual para crear dispositivos innovadores, como el Gigai y el Shunpo. Además, su conocimiento sobre la manipulación del Reishi y su capacidad para crear trampas y estrategias lo convierten en un combatiente impredecible y peligroso.
              `,
      habilidades: `
              - Benihime (Shikai): Su Zanpakutō tiene la capacidad de generar ataques de energía espiritual en forma de rayos, barreras y ondas de choque. Su Shikai también le permite manipular el entorno y crear diversas formas de energía para atacar a sus enemigos.
              - Shunpo: Urahara es un experto en el uso de Shunpo, una técnica de teletransportación que le permite moverse a velocidades extremadamente altas, lo que lo convierte en un adversario difícil de seguir y predecir en combate.
              - Kido: Urahara es muy habilidoso en el uso de Kido, las artes espirituales de los Shinigami, y puede lanzar hechizos de manera precisa y rápida para atacar o defenderse.
              - Creación de dispositivos espirituales: Urahara tiene una gran habilidad para crear dispositivos espirituales que mejoran las habilidades de los Shinigami, como el Gigai, que permite a los Shinigami entrar en el mundo humano sin perder sus poderes.
              - Estratega: Urahara es un genio táctico y estratégico, capaz de idear planes complejos para derrotar a sus enemigos o superar situaciones difíciles.
          `,
      nivel_de_poder: `
              Kisuke Urahara es uno de los personajes más poderosos y astutos de *Bleach*. Su habilidad para manipular la energía espiritual y su gran conocimiento de las artes Shinigami lo convierten en un combatiente extremadamente peligroso. 
              Aunque su Bankai nunca se ha revelado, su Shikai, Benihime, le permite realizar ataques devastadores, y su capacidad para crear estrategias y trampas lo hace aún más formidable.
              A lo largo de la serie, Urahara demuestra ser capaz de enfrentarse a los enemigos más poderosos, incluyendo a los Espadas y los Quincy, gracias a su astucia, habilidades y experiencia.
          `,
      galeria: JSON.stringify([
        "https://preview.redd.it/sr8f2tid3enb1.jpg?width=640&crop=smart&auto=webp&s=c570d47a3ff3b3527dbd2408feb2718bce46d1d4",
        "https://preview.redd.it/whats-your-thoughts-on-kisuke-urahara-v0-2p05q0ze13qc1.jpeg?width=640&crop=smart&auto=webp&s=6edf2dfe0614d28adab3d9a21612c60aeb07ae3d",
        "https://i.namu.wiki/i/WfcxOrk5yNa_l0cTjWVF3BZ146WNk_IHA7DM5ViAk2VY9fNDzCuwxtFgeC80eH8kllynM41fFvLGqO2v1REMDw.webp",
        "https://images2.alphacoders.com/950/thumb-1920-950350.png",
      ]),
      historia: `
          Kisuke Urahara es un ex capitán de la 12ª División del Gotei 13 y el actual dueño de la tienda Urahara en el mundo humano. Tras ser exiliado de la Sociedad de Almas debido a su implicación en la creación de una peligrosa tecnología espiritual, Urahara se establece en el mundo humano, donde juega un papel clave en la protección de Ichigo Kurosaki y sus amigos. 
          A lo largo de la serie, Urahara se revela como un hombre enigmático con un pasado oscuro, pero también como un aliado indispensable en la lucha contra los enemigos más poderosos, incluyendo a los Espadas y los Quincy. Su conocimiento y habilidades le permiten hacer frente a desafíos aparentemente insuperables.
      `,
      personalidad: `
          Kisuke Urahara es un hombre tranquilo, astuto y calculador, conocido por su actitud relajada y su comportamiento misterioso. Aunque suele parecer despreocupado y bromista, es un hombre extremadamente serio cuando se trata de proteger a sus amigos y seres queridos. 
          Es un genio táctico y un estratega, siempre dispuesto a tomar decisiones difíciles para alcanzar sus objetivos. Su carácter esconde una gran carga emocional, ya que ha sufrido la pérdida de amigos cercanos y la traición en el pasado.
      `,
      batallas: "Urahara vs Aizen[Ganador], , Urahara vs Askin[Ganador]",
    },
    {
      nombre: "Yoruichi Shihouin",
      raza: "Shinigami",
      cumpleaños: "1 de enero",
      altura: "1.56 m",
      peso: "42 kg",
      afiliacion: "Gotei 13 (exiliada), Clan Shihouin",
      ocupacion: "Ex-Capitana de la 2ª División, ex-Comandante de los Onmitsukidō",
      shikai: "Shunkō",
      bankai: "Desconocido",
      poderes: `
              Yoruichi Shihouin es una Shinigami extremadamente poderosa y una experta en combate cuerpo a cuerpo y en el uso de habilidades relacionadas con el Shunpo (transporte instantáneo). Su Zanpakutō, Shunkō, le permite utilizar una técnica avanzada de combate que combina el control del Reiryoku (energía espiritual) con la habilidad física para aumentar su velocidad y fuerza.
              Además de sus habilidades de combate, Yoruichi es una experta en el uso de las artes del Onmitsukidō, una organización secreta de los Shinigami, lo que le otorga un vasto conocimiento de espionaje, sigilo y tácticas militares.
              `,
      habilidades: `
              - Shunkō: Esta técnica le permite a Yoruichi concentrar su energía espiritual en su cuerpo para aumentar su velocidad, fuerza y capacidad de combate. Es una habilidad extremadamente poderosa que la hace casi invencible en combate cuerpo a cuerpo.
              - Shunpo: Yoruichi es una de las más grandes maestras del Shunpo, una técnica que le permite moverse a velocidades increíbles, desplazándose instantáneamente de un lugar a otro.
              - Combate cuerpo a cuerpo: Yoruichi es una experta en combate físico, capaz de derrotar a enemigos mucho más grandes y fuertes con su agilidad y habilidades de lucha.
              - Onmitsukidō: Yoruichi fue la comandante de esta unidad secreta, especializada en espionaje, infiltración y asesinatos. Su conocimiento de estas técnicas la hace una estratega formidable.
              - Transformación felina: Yoruichi tiene la habilidad de transformarse en un gato negro, lo que le permite moverse sigilosamente y esconde su verdadera identidad cuando lo necesita.
          `,
      nivel_de_poder: `
              Yoruichi Shihouin es una de las combatientes más poderosas de *Bleach*. Su velocidad y agilidad son legendarias, y su habilidad para usar el Shunpo la convierte en un oponente extremadamente difícil de atrapar. 
              Además, su dominio de técnicas como el Shunkō la hace aún más formidable en combate. A lo largo de la serie, Yoruichi demuestra ser capaz de enfrentarse a enemigos muy poderosos, incluidos los Espadas y otros Shinigami de alto nivel, con gran destreza y habilidad.
          `,
      galeria: JSON.stringify([
        "https://static.wikia.nocookie.net/bleach/images/b/bd/Yoruichi_Shihoin.png/revision/latest?cb=20241018211132&path-prefix=es",
        "https://static.wikia.nocookie.net/liberproeliis/images/f/f6/Pre-Timeskip_Yoruichi_Rendered.png/revision/latest?cb=20180825035622&path-prefix=pt-br",
        "https://static.wikia.nocookie.net/anicrossbr/images/6/6f/Yoruichi-fan-art-2-3-yoruichi-16409249-1143-1600.jpg/revision/latest?cb=20151024221043&path-prefix=pt-br",
        "https://rare-gallery.com/uploads/posts/4593733-bleach-shihouin-yoruichi-anime-girls.jpg",
      ]),
      historia: `
          Yoruichi Shihouin es una noble de la familia Shihouin, una de las familias más poderosas de la Sociedad de Almas. Fue la Capitán de la 2ª División del Gotei 13 y la comandante de los Onmitsukidō, una organización secreta encargada de misiones de espionaje y eliminación. 
          Tras una serie de eventos, Yoruichi abandona la Sociedad de Almas y se exilia en el mundo humano, donde se convierte en una aliada clave de Ichigo Kurosaki y sus amigos en su lucha contra los Hollows y otros enemigos.
          A lo largo de la serie, Yoruichi desempeña un papel crucial en el entrenamiento de Ichigo, enseñándole a controlar sus poderes y guiándolo en sus batallas. Su habilidad para moverse rápidamente y su gran destreza en combate la convierten en una de las guerreras más formidables.
      `,
      personalidad: `
          Yoruichi es una mujer fuerte, decidida y de carácter independiente. Aunque es seria y responsable cuando se trata de proteger a sus amigos y seres queridos, también tiene un lado juguetón y bromista. 
          Es conocida por su actitud relajada y su capacidad para mantenerse calmada en situaciones difíciles. A pesar de su pasado como miembro de la nobleza y líder de una organización secreta, Yoruichi valora profundamente la lealtad y la amistad, y está dispuesta a hacer lo que sea necesario para proteger a los demás.
      `,
      batallas: "Yoruichi vs Soi Fon[Ganadora], Yoruichi vs Aizen[Perdedora], Yoruichi vs Askin[Ganadora]",
    },
    {
      nombre: "Jūshirō Ukitake",
      raza: "Shinigami",
      cumpleaños: "21 de diciembre",
      altura: "1.87 m",
      peso: "72 kg",
      afiliacion: "Gotei 13",
      ocupacion: "Ex-Capitán de la 13ª División",
      shikai: "Sōgyo no Kotowari",
      bankai: "Desconocido",
      poderes: `
              Jūshirō Ukitake es un Shinigami muy respetado y uno de los Capitanes del Gotei 13. Su Zanpakutō, Sōgyo no Kotowari, le permite crear y manipular un par de espadas espirituales, las cuales pueden ser utilizadas para ataques a distancia y en combate cuerpo a cuerpo. 
              Además, Ukitake es un experto en la manipulación de la energía espiritual y es muy hábil en la utilización de técnicas de Kido (artes espirituales), lo que lo convierte en un combatiente muy versátil.
              A lo largo de la serie, Ukitake también demuestra ser un líder sabio y amable, a menudo actuando como mentor de sus subordinados.
              `,
      habilidades: `
              - Sōgyo no Kotowari: El Shikai de Ukitake le permite invocar dos espadas espirituales que pueden ser utilizadas tanto en combate cuerpo a cuerpo como a distancia. Estas espadas tienen una gran capacidad ofensiva y defensiva.
              - Kido: Ukitake es un experto en el uso de Kido, lo que le permite utilizar una amplia variedad de técnicas espirituales para atacar, defender y sanar.
              - Regeneración: Debido a su enfermedad crónica, Ukitake tiene una gran resistencia y capacidad de recuperación, lo que le permite luchar durante largos períodos de tiempo sin rendirse.
              - Liderazgo: Ukitake es un líder natural y un mentor sabio para sus subordinados. Su habilidad para inspirar confianza y su fuerte sentido de la justicia lo convierten en un capitán respetado.
          `,
      nivel_de_poder: `
              Jūshirō Ukitake es un Shinigami de nivel alto con un vasto control sobre su energía espiritual. Su habilidad para utilizar el Shikai de su Zanpakutō y las artes de Kido lo convierte en un combatiente formidable, capaz de enfrentarse a enemigos poderosos. 
              Aunque no se conoce su Bankai, su habilidad para coordinarse con su equipo y liderar en combate lo hace una pieza clave en las batallas del Gotei 13.
              A pesar de su enfermedad, Ukitake ha demostrado ser un luchador resistente y valiente, capaz de mantener su fortaleza incluso en las situaciones más difíciles.
          `,
      galeria: JSON.stringify([
        "https://preview.redd.it/ahiv299pw51c1.jpg?width=640&crop=smart&auto=webp&s=494f9107a83c07f8a62e2530569eb1ff30baa7d8",
        "https://i.pinimg.com/736x/63/4b/b8/634bb8fcb5366fa2cd7457cf2f261681.jpg",
        "https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/10/jushiro-ukitake-has-blood-on-his-chin-1.jpg",
        "https://preview.redd.it/37q7arm1nwjd1.jpeg?auto=webp&s=bb81f73dbf6e0c05920c6cb9d09d25d5530aee7d",
      ]),
      historia: `
          Jūshirō Ukitake es el Capitán de la 13ª División del Gotei 13, conocido por su sabiduría, su compasión y su liderazgo. Desde joven, Ukitake fue diagnosticado con una enfermedad crónica que afectó su salud durante toda su vida, pero esto no le impidió convertirse en uno de los capitanes más respetados de la Sociedad de Almas.
          A lo largo de la serie, Ukitake desempeña un papel clave en la protección de la Sociedad de Almas y en las batallas contra los enemigos más poderosos, como los Arrancar y los Quincy. A pesar de su enfermedad, su habilidad para luchar y su dedicación a sus subordinados lo convierten en un líder ejemplar.
          Durante los eventos de la serie, Ukitake se muestra dispuesto a sacrificarse por el bien de sus compañeros y amigos, demostrando su inquebrantable sentido de justicia.
      `,
      personalidad: `
          Jūshirō Ukitake es una persona amable, sabia y compasiva, conocida por su liderazgo tranquilo y su preocupación por el bienestar de sus subordinados. Aunque sufre de una enfermedad crónica, siempre se esfuerza por ser un capitán digno de su puesto, y se preocupa profundamente por el bienestar de su división.
          Su actitud serena y su empatía lo convierten en una figura paternal para muchos de los miembros de la 13ª División. A pesar de las dificultades que enfrenta debido a su salud, Ukitake siempre mantiene una actitud positiva y se dedica a proteger a los demás.
      `,
      batallas: "Ukitake vs Starrk[Empate]",
    },
    {
      nombre: "Soi Fon",
      raza: "Shinigami",
      cumpleaños: "11 de febrero",
      altura: "1.50 m",
      peso: "38 kg",
      afiliacion: "Gotei 13",
      ocupacion: "Capitana de la 2ª División, Comandante de la Onmitsukidō",
      shikai: "Suzumebachi",
      bankai: "Jakuho Raikōben",
      poderes: `
              Soi Fon es una Shinigami de alto rango y capitana de la 2ª División del Gotei 13. Su Zanpakutō, Suzumebachi, le permite crear una aguja venenosa con la que puede atacar a sus enemigos. La habilidad más destacada de Suzumebachi es que, cuando marca a un objetivo con su aguja, la próxima vez que la ataque en el mismo lugar, la herida será mortal. 
              Soi Fon también es una experta en el uso de técnicas de sigilo y espionaje, gracias a su posición como comandante de la Onmitsukidō, la unidad encargada de las misiones secretas.
              En su Bankai, Jakuho Raikōben, Soi Fon invoca un enorme cañón que dispara una poderosa ráfaga de energía, capaz de destruir a sus enemigos con una precisión letal.
          `,
      habilidades: `
              - Suzumebachi: El Shikai de Soi Fon le permite crear una aguja venenosa que, al marcar a un objetivo, lo hace vulnerable a un ataque mortal en el mismo lugar. Es una técnica extremadamente letal y precisa.
              - Jakuho Raikōben: El Bankai de Soi Fon invoca un cañón de gran poder que dispara una ráfaga de energía capaz de destruir a sus enemigos con una precisión mortal.
              - Técnicas de sigilo: Soi Fon es una experta en el uso de técnicas de sigilo, lo que le permite moverse sin ser detectada y atacar a sus enemigos por sorpresa.
              - Agilidad y velocidad: Soi Fon es extremadamente ágil y rápida, lo que le permite esquivar ataques y atacar a sus enemigos con gran rapidez.
          `,
      nivel_de_poder: `
              Soi Fon es una combatiente excepcionalmente habilidosa, tanto en combate cuerpo a cuerpo como en el uso de su Zanpakutō. Su Shikai es extremadamente letal, ya que puede marcar a sus enemigos con facilidad y luego matarlos con un solo golpe. 
              Su Bankai, Jakuho Raikōben, es una de las técnicas más destructivas de los Shinigami, lo que la convierte en una amenaza formidable en combate.
              Además, su habilidad para utilizar técnicas de sigilo y su agilidad le otorgan una ventaja estratégica en muchas batallas, permitiéndole derrotar a enemigos más grandes y fuertes con rapidez.
          `,
      galeria: JSON.stringify([
        "https://static.wikia.nocookie.net/bleach/images/f/f9/Soi_fon2.png/revision/latest?cb=20221118150054&path-prefix=pt",
        "https://preview.redd.it/soi-fon-v0-fzzq5nrpo8wc1.jpg?width=1080&crop=smart&auto=webp&s=e6120bea39a0646f623d039933d083aeacdc5e60",
        "https://i.pinimg.com/736x/04/c6/46/04c6462e2ccd59ceb552ea75e751e3f6.jpg",
        "https://static.wikia.nocookie.net/bleach/images/e/e3/Suzumebachi_liberada.png/revision/latest/scale-to-width-down/985?cb=20241230075944&path-prefix=es",
      ]),
      historia: `
          Soi Fon es la capitana de la 2ª División del Gotei 13 y la comandante de la Onmitsukidō, la unidad encargada de las misiones secretas y de inteligencia. Desde joven, Soi Fon fue entrenada en el uso de técnicas de sigilo y espionaje, lo que la convirtió en una de las Shinigami más letales en el combate furtivo.
          A lo largo de la serie, Soi Fon demuestra ser una luchadora decidida y leal, especialmente a su anterior capitán, Yoruichi Shihōin, quien la entrenó y la ayudó a convertirse en la líder que es hoy. A pesar de su relación algo tensa con Yoruichi, Soi Fon sigue siendo una persona que respeta profundamente a su mentor y se esfuerza por proteger la Sociedad de Almas.
          En varias ocasiones, Soi Fon se enfrenta a poderosos enemigos, como los Arrancar y los Quincy, demostrando su habilidad para luchar en situaciones extremas.
      `,
      personalidad: `
          Soi Fon es una persona seria, reservada y extremadamente dedicada a su trabajo. Su lealtad a la Sociedad de Almas y su fuerte sentido del deber la convierten en una capitana ejemplar. A pesar de su actitud dura, Soi Fon tiene un gran respeto por aquellos a quienes considera sus superiores, especialmente por Yoruichi, a quien ve como su mentora y modelo a seguir.
          A menudo se muestra impaciente con aquellos que no siguen el protocolo, y su deseo de ser una guerrera poderosa la lleva a tomar decisiones difíciles en la batalla. Sin embargo, a pesar de su seriedad, Soi Fon también tiene un lado más humano que se muestra en sus interacciones con sus subordinados.
      `,
      batallas: "Soi Fon vs Yoruichi[Perdedor], Soi Fon vs Barragan[Ganador]",
    },
    
      {
        nombre: "Toshiro Hitsugaya",
        raza: "Shinigami",
        cumpleaños: "20 de diciembre",
        altura: "1.33 m",
        peso: "26 kg",
        afiliacion: "Gotei 13",
        ocupacion: "Capitán de la 10ª División",
        shikai: "Hyōrinmaru",
        bankai: "Daiguren Hyōrinmaru",
        poderes: `
                Toshiro Hitsugaya es el joven y talentoso capitán de la 10ª División del Gotei 13. Su Zanpakutō, Hyōrinmaru, es un dragón de hielo que le otorga el control absoluto sobre el hielo y el agua. 
                En su Shikai, Hyōrinmaru le permite manipular el hielo a gran escala, creando armas de hielo y controlando el entorno a su alrededor. 
                Su Bankai, Daiguren Hyōrinmaru, aumenta aún más su poder, permitiéndole invocar un dragón de hielo gigante que puede congelar todo a su alrededor y causar destrucción masiva.
                Además de sus habilidades con el hielo, Hitsugaya es un estratega excepcional, lo que le permite enfrentar a sus enemigos con gran astucia y precisión.
            `,
        habilidades: `
                - Hyōrinmaru: El Shikai de Hitsugaya le permite manipular el hielo y el agua, creando armas y barreras de hielo, así como controlando el clima a su alrededor.
                - Daiguren Hyōrinmaru: El Bankai de Hitsugaya invoca un dragón de hielo gigante que puede congelar grandes áreas y causar destrucción masiva.
                - Habilidad estratégica: Hitsugaya es un combatiente muy inteligente, capaz de analizar las situaciones rápidamente y tomar decisiones tácticas para derrotar a sus enemigos.
                - Gran resistencia: A pesar de su apariencia juvenil, Hitsugaya tiene una gran resistencia y capacidad para soportar combates largos y difíciles.
            `,
        nivel_de_poder: `
                Toshiro Hitsugaya es uno de los Shinigami más poderosos de la Sociedad de Almas, y su habilidad para controlar el hielo le otorga una ventaja significativa en combate. Su Shikai, Hyōrinmaru, le permite controlar el hielo a su antojo, lo que le da una gran versatilidad en la batalla.
                Su Bankai, Daiguren Hyōrinmaru, es uno de los Bankai más destructivos, capaz de congelar vastas áreas y atacar con gran fuerza. 
                Hitsugaya es un combatiente excepcionalmente habilidoso, no solo por su poder, sino también por su aguda mente estratégica, lo que le permite enfrentarse a enemigos mucho más poderosos que él.
            `,
        galeria: JSON.stringify([
          "https://www.mundodeportivo.com/alfabeta/hero/2023/03/bleach-toshiro-hitsugaya.jpg?width=1200",
          "https://i.pinimg.com/736x/e2/86/b7/e286b73015a892d4171197c19f490750.jpg",
          "https://static.wikia.nocookie.net/universecw/images/c/c2/HitsugayaBleach.png/revision/latest?cb=20201117152906&path-prefix=es",
          "https://i.redd.it/h38wf5xr21q71.jpg",
        ]),
        historia: `
            Toshiro Hitsugaya es uno de los personajes más destacados de la serie Bleach, conocido por su gran talento y poder. Desde joven, fue un prodigio del Gotei 13, convirtiéndose en el capitán más joven en la historia de la Sociedad de Almas. 
            A lo largo de la serie, Hitsugaya demuestra ser un líder capaz y valiente, enfrentándose a enemigos poderosos como los Arrancar y los Quincy. Aunque su apariencia juvenil puede hacer que otros lo subestimen, su habilidad y astucia en combate lo convierten en uno de los Shinigami más temidos.
            Hitsugaya también muestra una fuerte lealtad a sus compañeros y subordinados, protegiendo a su división y a la Sociedad de Almas con determinación.
        `,
        personalidad: `
            A pesar de su juventud, Toshiro Hitsugaya es un líder serio, responsable y calculador. Su actitud madura y su sentido del deber lo convierten en un capitán ejemplar, aunque a menudo es percibido como frío y distante debido a su personalidad reservada.
            Hitsugaya también tiene una gran responsabilidad sobre sus hombros debido a su rango como capitán, lo que lo lleva a tomar decisiones difíciles en combate. A pesar de su seriedad, tiene una profunda preocupación por sus amigos y compañeros, y está dispuesto a hacer lo que sea necesario para protegerlos.
        `,
        batallas: "Hitsugaya vs Gin Ichimaru[Empate], Hitsugaya vs Harribel[Ganador], Hitsugaya vs Gerard[Ganador]",
      },

      
        {
          nombre: "Kenpachi Zaraki",
          raza: "Shinigami",
          cumpleaños: "19 de Noviembre",
          altura: "2.02 m",
          peso: "97 kg",
          afiliacion: "Gotei 13",
          ocupacion: "Capitán de la 11ª División",
          shikai: "Nozarashi",
          bankai: "Aaaaaaaaaaaaa",
          poderes: `
                  Kenpachi Zaraki es uno de los personajes más poderosos de la serie Bleach, conocido por su increíble fuerza física y su amor por la lucha. 
                  Como Capitán de la 11ª División del Gotei 13, Kenpachi no utiliza una Zanpakutō convencional, ya que su poder se basa en su propia fuerza bruta y su habilidad para disfrutar del combate. 
                  No tiene un Shikai ni un Bankai tradicional, pero su habilidad para pelear y su resistencia física son tan grandes que puede derrotar a casi cualquier oponente. 
                  Su poder se incrementa aún más cuando está en combate, ya que disfruta de la batalla y se vuelve más fuerte mientras lucha.
              `,
          habilidades: `
                  - Fuerza física sobrehumana: Kenpachi tiene una fuerza increíblemente alta, capaz de derrotar a enemigos poderosos con facilidad.
                  - Resistencia excepcional: Su resistencia es prácticamente ilimitada, lo que le permite seguir luchando incluso después de recibir grandes daños.
                  - Habilidad en combate: Kenpachi es un experto en combate cuerpo a cuerpo, capaz de enfrentarse a los enemigos más poderosos sin necesidad de utilizar una Zanpakutō.
                  - Disfrute de la lucha: A diferencia de otros Shinigami, Kenpachi se fortalece a medida que combate, disfrutando de la pelea y superando sus propios límites.
              `,
          nivel_de_poder: `
                  Kenpachi Zaraki es uno de los personajes más poderosos de la serie, y su nivel de poder está entre los más altos de todos los Shinigami. 
                  A pesar de no tener un Shikai o un Bankai convencional, su fuerza física y su habilidad en combate lo convierten en un oponente temible. 
                  Su resistencia es casi ilimitada, y puede seguir luchando incluso cuando está gravemente herido. Además, su disfrute por la batalla le permite superar sus propios límites, volviéndose más fuerte a medida que combate.
              `,
          galeria: JSON.stringify([
            "https://preview.redd.it/u4rz9lktr3mb1.jpg?auto=webp&s=3dee021a0f07774c8809770588382dda4809cbaf",
            "https://i.pinimg.com/564x/df/a3/22/dfa32241e9a321a18429293b5ebed189.jpg",
            "https://p4.wallpaperbetter.com/wallpaper/456/20/867/bleach-manga-kenpachi-zaraki-1505x1200-anime-bleach-hd-art-wallpaper-preview.jpg",
            "https://preview.redd.it/what-are-your-thoughts-on-kenpachi-zaraki-v0-tf9k51cz1xrc1.jpeg?auto=webp&s=c6abf7832aed4396f5215ab302674e1b8baed0ed",
          ]),
          historia: `
              Kenpachi Zaraki es un Shinigami que se convierte en el capitán de la 11ª División del Gotei 13. Su nombre proviene de la zona de Zaraki, un distrito peligroso de la Sociedad de Almas, donde creció luchando por su supervivencia. 
              A lo largo de su vida, Kenpachi ha buscado siempre oponentes fuertes para desafiar su poder, y se ha convertido en el líder de la 11ª División, que se especializa en el combate cuerpo a cuerpo. 
              Kenpachi no tiene un Shikai ni un Bankai, pero su increíble fuerza y habilidades de combate lo convierten en un combatiente temible. 
              A lo largo de la serie, Kenpachi demuestra ser una figura imponente, disfrutando de la lucha y buscando siempre nuevos desafíos. 
              Su relación con su subordinada, Yachiru Kusajishi, es también una parte importante de su historia.
          `,
          personalidad: `
              Kenpachi Zaraki es un hombre de carácter feroz y temerario, conocido por su amor por la lucha. A diferencia de otros Shinigami, Kenpachi no busca la paz ni la tranquilidad; en su lugar, disfruta de los combates y busca constantemente oponentes fuertes para desafiar su poder.
              A pesar de su naturaleza agresiva y su falta de respeto por la autoridad, Kenpachi tiene una lealtad profunda hacia su división y sus subordinados. 
              Es un líder que se preocupa por sus soldados, aunque de una manera poco convencional. Su personalidad se caracteriza por una gran confianza en sí mismo y un deseo insaciable de luchar.
          `,
          batallas: "Kenpachi vs Ichigo Kurosaki[Empate], Kenpachi vs Nnoitra Jiruga[Ganador], Kenpachi vs Unohana[Ganador]",
        },

        {
          nombre: "Retsu Unohana",
          raza: "Shinigami",
          cumpleaños: "21 de abril",
          altura: "1.59 m",
          peso: "45 kg",
          afiliacion: "Gotei 13",
          ocupacion: "Capitana de la 4ª División",
          shikai: "Minazuki",
          bankai: "Minazuki (Desconocido)",
          poderes: `
                  Retsu Unohana es una de las figuras más enigmáticas y poderosas de la serie Bleach. Como capitana de la 4ª División, se especializa en la curación y el cuidado de los heridos. 
                  Su habilidad para sanar es legendaria, y se dice que es la mejor médica de la Sociedad de Almas. Sin embargo, Unohana también tiene un lado oscuro, ya que fue la primera Kenpachi y una de las luchadoras más poderosas de su tiempo.
                  Su Zanpakutō, Minazuki, tiene la capacidad de curar a los heridos, pero también puede transformarse en una criatura gigantesca capaz de atacar a sus enemigos. 
                  Aunque en su vida actual se dedica a sanar, su habilidad en combate es excepcional y ha sido un miembro clave del Gotei 13 durante siglos.
              `,
          habilidades: `
                  - Sanación: Unohana es la mejor sanadora de la Sociedad de Almas, capaz de curar incluso las heridas más graves en cuestión de segundos.
                  - Minazuki: Su Zanpakutō, Minazuki, tiene la capacidad de curar heridas, pero también puede transformarse en una bestia gigantesca que ataca a sus enemigos.
                  - Habilidad en combate: A pesar de su rol como sanadora, Unohana es una combatiente excepcional, con una gran destreza en el uso de la espada y un dominio de técnicas poderosas.
                  - Experiencia en batalla: Unohana fue la primera Kenpachi, lo que le otorgó una vasta experiencia en combate. A lo largo de su vida, ha luchado contra los oponentes más fuertes y ha salido victoriosa.
              `,
          nivel_de_poder: `
                  Retsu Unohana es una de las Shinigami más poderosas, y su nivel de poder es impresionante. Aunque se dedica a la curación en la actualidad, su habilidad en combate es sobresaliente. 
                  Fue la primera Kenpachi y, como tal, tiene una increíble habilidad para luchar y derrotar a sus enemigos. Su poder se incrementa aún más cuando se enfrenta a situaciones extremas, como lo demuestra en su combate contra Kenpachi Zaraki.
                  Su Zanpakutō, Minazuki, también es una de las más poderosas, ya que puede curar heridas y transformarse en una criatura gigantesca capaz de destruir a sus enemigos.
              `,
          galeria: JSON.stringify([
            "https://i.pinimg.com/736x/93/c4/98/93c4986b3db2be35ebfa4c6f9d16af54.jpg",
            "https://i.redd.it/retsu-unohana-bleach-v0-20w6sdepxlae1.jpg?width=1239&format=pjpg&auto=webp&s=5d01d236c6de9e3063c958c0a77712b64923a9d2",
            "https://i.pinimg.com/736x/ec/d2/69/ecd269f2ba33ed503ff13f79f7926e56.jpg",
            "https://static.wikia.nocookie.net/villains/images/1/1a/Unohana_Yachiru_Render.png/revision/latest?cb=20230518152752",
          ]),
          historia: `
              Retsu Unohana fue la primera Kenpachi de la historia y una de las luchadoras más poderosas de su tiempo. A lo largo de su vida, luchó en innumerables batallas y se convirtió en la líder de la 4ª División del Gotei 13, un rol que desempeñó durante siglos. 
              Aunque su papel en la Sociedad de Almas es conocido principalmente por su habilidad para sanar, Unohana tiene una historia oscura y una conexión profunda con el combate. 
              Fue la primera persona en derrotar a un Kenpachi en combate y, a lo largo de los años, se convirtió en una de las figuras más respetadas y temidas de la Sociedad de Almas.
              Su relación con Kenpachi Zaraki es fundamental en su historia, ya que fue la que le enseñó a Zaraki lo que significa ser un verdadero Kenpachi.
          `,
          personalidad: `
              Retsu Unohana es una mujer tranquila, amable y serena, con una profunda dedicación a su rol como sanadora. Aunque es conocida por su compasión y su habilidad para curar a los heridos, también tiene un lado oscuro y peligroso debido a su historia como la primera Kenpachi. 
              Su personalidad es compleja, ya que muestra una gran paz y serenidad en su vida diaria, pero también es capaz de desatar una furia letal cuando se enfrenta a situaciones extremas. 
              Unohana es una persona sabia y compasiva, pero no duda en luchar si es necesario para proteger a los demás.
          `,
          batallas: "Unohana vs Kenpachi Zaraki[Perdedora], Unohana vs Yachiru Kusajishi[Ganadora]",
        }
          
            {
              nombre: "Tōsen Kaname",
              raza: "Shinigami",
              cumpleaños: "13 de noviembre",
              altura: "1.76 m",
              peso: "70 kg",
              afiliacion: "Ex-Capitán del Gotei 13, Espada",
              ocupacion: "Ex-Capitán, Líder de los Arrancar",
              shikai: "Mujin Ikoku",
              bankai: "Enma Kōrogi",
              poderes: `
                      Tōsen Kaname es un ex-capitán del Gotei 13 que se une a Aizen y los Arrancar en su lucha contra el Gotei 13. Su Zanpakutō, Mujin Ikoku, le permite crear un campo de distorsión donde sus enemigos quedan cegados, y él puede ver todo claramente.
                      Además, su Bankai, Enma Kōrogi, amplifica su poder al permitirle manipular aún más el sentido de la vista de sus enemigos, dejándolos completamente indefensos.
                      Tōsen es un personaje guiado por su fuerte sentido de justicia, aunque su visión del mundo lo lleva a tomar decisiones extremas, lo que lo convierte en un personaje complejo y trágico.
                  `,
              habilidades: `
                      - Ceguera: Gracias a su Shikai y Bankai, Tōsen tiene la habilidad de manipular los sentidos de la vista de sus enemigos, dejándolos cegados y vulnerables.
                      - Habilidad de combate: A pesar de su ceguera, Tōsen es un combatiente formidable, utilizando su agudo sentido del oído y otras habilidades para luchar de manera efectiva.
                      - Sentido de la justicia: Su fuerte creencia en la justicia le permite tomar decisiones drásticas, aunque estas a menudo lo ponen en conflicto con sus antiguos compañeros del Gotei 13.
                  `,
              nivel_de_poder: `
                      Tōsen Kaname es un luchador extremadamente fuerte, tanto en combate físico como en manipulación de los sentidos. Su habilidad para cegar a sus enemigos y su gran destreza en combate lo convierten en un adversario temible. 
                      Aunque su ceguera le impide ver físicamente, su agudo sentido del oído y su capacidad para percibir el flujo espiritual lo hacen un combatiente formidable.
                      Su nivel de poder aumenta considerablemente cuando se encuentra en su Bankai, Enma Kōrogi, donde puede manipular aún más la percepción de sus enemigos.
                  `,
              galeria: JSON.stringify([
                "https://i.redd.it/tosen-is-top-5-best-written-character-agree-or-disagree-v0-4i0kdbvi86sb1.jpg?width=828&format=pjpg&auto=webp&s=5ff5fd962def5fff0a7e3d53da7c29cf88849e16",
                "https://preview.redd.it/nhgsz0p88da91.jpg?width=640&crop=smart&auto=webp&s=9d02fa7bc29db2c8a66a90d52d3ec217395e8abb",
                "https://i.pinimg.com/1200x/6f/07/dd/6f07dd6e9bd7dddf4d89d970f5d9cdf2.jpg",
                "https://i.namu.wiki/i/igDt4iQm0KnaYP2YtqAS99GDkkL-xEKQ0yynkR35yhulSsoH9s5YeY8nYkaFahRmTbcha3vX_ML1bllXh09SCg.webp"
              ]),
              historia: `
                      Tōsen Kaname es un ex-capitán del Gotei 13 que, después de un evento trágico, se unió a Aizen y los Arrancar, adoptando una visión radical de la justicia. 
                      Tōsen se sintió traicionado por el Gotei 13 debido a la injusticia que percibió en su sistema, lo que lo llevó a unirse a Aizen y luchar contra sus antiguos compañeros.
                      A lo largo de la serie, Tōsen demuestra ser un personaje decidido y con una fuerte moral, aunque sus decisiones lo alejan de la mayoría de sus amigos y compañeros.
                  `,
              personalidad: `
                      Tōsen Kaname es un hombre tranquilo, serio y reflexivo. Tiene un sentido muy fuerte de la justicia, pero su interpretación de esta es radical y, a menudo, lo lleva a tomar decisiones extremas.
                      Su ceguera simboliza su incapacidad para ver las cosas tal como son, lo que lo convierte en un personaje trágico. Aunque es leal a Aizen, su sentido de la justicia lo pone en conflicto con sus antiguos compañeros.
                  `,
              batallas: "Tōsen vs Komamura[Empate], Tōsen vs Hisagi[Perdedor], Tōsen vs Zaraki Kenpachi[Perdedor]",
            },
            {
              nombre: "Komamura Sajin",
              raza: "Shinigami",
              cumpleaños: "23 de agosto",
              altura: "2.88 m",
              peso: "301 kg",
              afiliacion: "Gotei 13",
              ocupacion: "Ex-Capitán de la 7ª División",
              shikai: "Tenken",
              bankai: "Kokujō Tengen Myō'ō",
              poderes: `
                      Komamura Sajin es el capitán de la 7ª División del Gotei 13 y tiene una gran fuerza física, además de ser un combatiente muy hábil. Su Zanpakutō, Tenken, invoca un gran lobo espiritual que lo asiste en combate. 
                      Su Bankai, Kokuō, aumenta su poder al invocar una gigantesca figura espiritual que combate junto a él. Komamura es conocido por su lealtad y su fuerte sentido del honor.
                  `,
              habilidades: `
                      - Gran fuerza física: Komamura es un combatiente extremadamente fuerte, con una gran resistencia y habilidades de lucha cuerpo a cuerpo.
                      - Tenken: Su Shikai invoca un lobo espiritual que lo asiste en combate, ayudando a Komamura a atacar y defender con gran destreza.
                      - Kokuō: Su Bankai invoca una gigantesca figura espiritual que combate junto a él, aumentando su poder y la capacidad de destruir a sus enemigos.
                      - Sentido del honor: Komamura es un hombre de honor y siempre lucha por la justicia, protegiendo a sus compañeros y a la Sociedad de Almas.
                  `,
              nivel_de_poder: `
                      Komamura Sajin es un combatiente formidable, con un nivel de poder que rivaliza con otros capitanes del Gotei 13. Su fuerza física y habilidades de combate cuerpo a cuerpo lo convierten en un oponente difícil de derrotar.
                      Su Bankai, Kokuō, le otorga una ventaja significativa, ya que invoca un gigantesco ser espiritual que combate junto a él, mejorando su capacidad de destrucción.
                      A pesar de su gran poder, Komamura tiene una personalidad noble y valiente, lo que lo convierte en un líder confiable dentro del Gotei 13.
                  `,
              galeria: JSON.stringify([
                "https://static.wikia.nocookie.net/bleach/images/f/f4/Ep215SajinKomamura.png/revision/latest?cb=20231105061227&path-prefix=en",
                "https://static.wikia.nocookie.net/bleach/images/c/cc/Sajin_forma_humana.png/revision/latest?cb=20230803094156&path-prefix=es",
                "https://static.wikia.nocookie.net/anicrossbr/images/c/cb/Sajin_Komamura2.png/revision/latest?cb=20151205191351&path-prefix=pt-br",
                "https://preview.redd.it/sajin-komamura-appreciation-post-volume-62-is-the-next-to-v0-cb70g3o6o0ya1.jpg?width=640&crop=smart&auto=webp&s=8c1fc49263df81fe8e58d84cdd0569e5841cba7b"

              ]),
              historia: `
                      Komamura Sajin es un shinigami noble que ocupa el puesto de capitán de la 7ª División en el Gotei 13. A pesar de su apariencia y naturaleza animalesca, Komamura es un hombre honorable y leal.
                      A lo largo de la serie, Komamura demuestra ser un líder fuerte y valiente, dispuesto a sacrificarse por el bien de sus compañeros y la Sociedad de Almas. Su relación con su Bankai es profunda, ya que representa la conexión espiritual con su ancestro.
                  `,
              personalidad: `
                      Komamura Sajin es un hombre de gran honor y nobleza. A pesar de su apariencia de lobo, es amable y protector, con un fuerte sentido de justicia. Es un líder que prioriza el bienestar de sus subordinados y siempre está dispuesto a luchar por la paz.
                      Su lealtad hacia sus compañeros y su fuerte sentido del deber lo convierten en un capitán respetado dentro del Gotei 13.
                  `,
              batallas: "Komamura vs Tōsen Kaname[Perdedor], Komamura vs Zaraki Kenpachi[Perdedor], Komamura vs Aizen[Perdedor]",
            },
            {
              nombre: "Gin Ichimaru",
              raza: "Shinigami",
              cumpleaños: "10 de septiembre",
              altura: "1.85 m",
              peso: "69 kg",
              afiliacion: "Ex-Capitán de la 3ª División del Gotei 13, Espada (Ex)",
              ocupacion: "Ex-Capitán, Espada",
              shikai: "Shinsō",
              bankai: "Kamishini no Yari",
              poderes: `
                      Gin Ichimaru es un shinigami extremadamente astuto y peligroso. Su Zanpakutō, Shinsō, tiene la capacidad de extenderse a una velocidad extremadamente alta, permitiéndole atacar a sus enemigos a larga distancia.
                      Su Bankai, Kōrin, amplifica esta habilidad, permitiéndole realizar ataques letales en fracciones de segundo. Gin es conocido por su naturaleza calculadora y su habilidad para manipular a los demás.
                  `,
              habilidades: `
                      - Shinsō: Su Zanpakutō tiene la capacidad de alargarse a una velocidad increíble, permitiéndole atacar a sus enemigos a gran distancia y con una precisión mortal.
                      - Kōrin: Su Bankai amplifica la habilidad de Shinsō, permitiéndole realizar ataques letales en un abrir y cerrar de ojos.
                      - Astucia: Gin es un maestro de la manipulación y la estrategia, utilizando su inteligencia para adelantarse a sus enemigos y manipular situaciones a su favor.
                      - Velocidad: A pesar de su apariencia tranquila, Gin es extremadamente rápido, capaz de atacar y moverse con una agilidad impresionante.
                  `,
              nivel_de_poder: `
                      Gin Ichimaru es un shinigami extremadamente poderoso, tanto por su habilidad con su Zanpakutō como por su astucia. Su Shikai y Bankai le otorgan un nivel de poder letal que lo convierte en un oponente formidable.
                      Aunque su habilidad de combate es impresionante, es su inteligencia y su capacidad para manipular a los demás lo que lo hace verdaderamente peligroso. A lo largo de la serie, Gin demuestra ser capaz de enfrentarse a poderosos enemigos, incluidos los Capitanes y los Espadas.
                  `,
              galeria: JSON.stringify([
                "https://static.wikia.nocookie.net/villains/images/4/4a/Gin_Ichimaru1.png/revision/latest?cb=20220911005302",
                "https://i.pinimg.com/736x/03/92/db/0392db6aaf78cbd36eafecad3eb11e2d.jpg",
                "https://i.pinimg.com/736x/3f/3c/74/3f3c74cbe140cc62311345ee75f51405.jpg",
                "https://static.wikia.nocookie.net/bleach/images/2/2d/BBSBankai_Gin.png/revision/latest?cb=20210506225317&path-prefix=en"
              ]),
              historia: `
                      Gin Ichimaru fue originalmente un shinigami que sirvió como capitán de la 3ª División del Gotei 13. Durante muchos años, Gin ocultó su verdadera lealtad y sus intenciones, manipulando a todos a su alrededor.
                      Tras su traición a la Sociedad de Almas y su alianza con Aizen, Gin se convierte en uno de los principales antagonistas de la serie. A pesar de su naturaleza fría y calculadora, Gin tiene una historia trágica que lo llevó a tomar decisiones oscuras.
                  `,
              personalidad: `
                      Gin Ichimaru es un personaje frío, calculador y manipulatorio. Siempre mantiene una sonrisa en su rostro, lo que oculta su verdadera naturaleza y sus intenciones. Es un maestro de la estrategia y de la manipulación, capaz de controlar situaciones con gran destreza.
                      A pesar de su aparente indiferencia, Gin tiene un pasado doloroso que lo llevó a tomar las decisiones que tomó. Su lealtad a Aizen y su participación en la traición a la Sociedad de Almas son parte de su trágica historia.
                  `,
              batallas: "Gin vs Aizen[Perdedor], Gin vs Hitsugaya[Empate]",
            },

            {
              nombre: "Shinji Hirako",
              raza: "Shinigami, Vizard",
              cumpleaños: "10 de mayo",
              altura: "1.76 m",
              peso: "60 kg",
              afiliacion: "Capitán de la 5ª División del Gotei 13, Vizards",
              ocupacion: "Capitán, Exiliado (anteriormente)",
              shikai: "Sakanade",
              bankai: "Sakashima Yokoshima Happōfusagar",
              poderes: `
                      Shinji Hirako es un shinigami y líder de los Vizards, un grupo de exiliados que han obtenido poderes de Hollow. Su Zanpakutō, Sakanade, tiene la capacidad única de invertir los sentidos de su oponente, confundiendo su percepción de dirección y ataque.
                      Como Vizard, también puede acceder a una máscara de Hollow, lo que le otorga un aumento significativo en su velocidad, fuerza y resistencia, además de habilidades regenerativas.
                  `,
              habilidades: `
                      - Sakanade (Shikai): Su Zanpakutō invierte los sentidos de sus oponentes, haciendo que izquierda y derecha, arriba y abajo, y adelante y atrás se intercambien, confundiendo a su enemigo y haciéndolo vulnerable a los ataques.
                      - Poder de Vizard: Como Vizard, Shinji puede manifestar una máscara de Hollow, aumentando drásticamente su fuerza, velocidad y resistencia, además de permitirle utilizar ataques basados en energía Hollow.
                      - Experto en Zanjutsu y Hakuda: Como ex-capitán, Shinji es un maestro en el combate con espada y cuerpo a cuerpo, capaz de enfrentarse a enemigos de alto nivel sin problemas.
                      - Gran estratega: Su inteligencia y capacidad táctica le permiten manipular el campo de batalla a su favor, utilizando su Zanpakutō y habilidades de manera óptima.
                  `,
              nivel_de_poder: `
                      Como ex-capitán del Gotei 13 y líder de los Vizards, Shinji es un combatiente extremadamente poderoso. Su Shikai es una de las habilidades más desconcertantes de la serie, ya que altera completamente la percepción de su oponente, dándole una ventaja táctica abrumadora.
                      Su dominio del poder Hollow lo hace aún más formidable, permitiéndole enfrentarse a enemigos de alto nivel como Aizen y los Espadas. Aunque su Bankai no ha sido revelado, su nivel de poder es comparable al de los capitanes más fuertes del Gotei 13.
                  `,
              galeria: JSON.stringify([
                "https://static.wikia.nocookie.net/bleach/images/b/b9/Ep125ShinjiHirako.png/revision/latest/scale-to-width/360?cb=20231105205939&path-prefix=en",
                "https://i.pinimg.com/736x/6b/da/76/6bda76a639b92fe86301358c6fb0fbf3.jpg",
                "https://preview.redd.it/9zyb9pf6h83b1.png?width=640&crop=smart&auto=webp&s=a17537ba2e1950e36cfb8b00b850db1288757c54",
                "https://i.pinimg.com/736x/0a/5e/78/0a5e780c08fa68f11477b000397597bc.jpg"
              ]),
              historia: `
                      Shinji Hirako fue el capitán de la 5ª División del Gotei 13 antes de ser traicionado por Aizen y convertido en un Vizard. Junto con otros capitanes y tenientes, fue víctima de los experimentos de Aizen con la Hollowficación, lo que los obligó a huir de la Sociedad de Almas.
                      Durante años, Shinji y los Vizards vivieron en el mundo humano, entrenando y esperando el momento de enfrentarse a Aizen. Eventualmente, regresó al Gotei 13 y retomó su puesto como capitán de la 5ª División, demostrando su lealtad a la Sociedad de Almas.
                  `,
              personalidad: `
                      Shinji es un personaje carismático y relajado, con una personalidad excéntrica y un gran sentido del humor. A pesar de su actitud despreocupada, es un líder sabio y experimentado que se preocupa profundamente por sus compañeros.
                      Es astuto y desconfiado, especialmente cuando se trata de Aizen, ya que fue una de sus primeras víctimas. Su naturaleza juguetona oculta una mente brillante y una gran capacidad de análisis en combate.
                  `,
              batallas: "Shinji vs Aizen[Perdedor], Shinji vs Grimmjow[Empate]",
            },
            {
              nombre: "Mayuri Kurotsuchi",
              raza: "Shinigami",
              cumpleaños: "30 de marzo",
              altura: "1.74 m",
              peso: "54 kg",
              afiliacion: "Capitán de la 12ª División del Gotei 13, Instituto de Investigación y Desarrollo Shinigami",
              ocupacion: "Científico, Capitán",
              shikai: "Ashisogi Jizō",
              bankai: "Konjiki Ashisogi Jizō",
              poderes: `
                      Mayuri Kurotsuchi es uno de los shinigamis más inteligentes y despiadados del Gotei 13. Como capitán de la 12ª División y jefe del Instituto de Investigación y Desarrollo Shinigami, es un maestro de la biotecnología y la manipulación genética.
                      Su Zanpakutō, Ashisogi Jizō, libera una toxina paralizante en su Shikai, mientras que su Bankai, Konjiki Ashisogi Jizō, invoca una criatura gigante con un veneno letal que ataca indiscriminadamente.
                  `,
              habilidades: `
                      - Ashisogi Jizō (Shikai): Su Zanpakutō libera una toxina que paraliza el sistema nervioso de su oponente, impidiendo que controle su cuerpo, pero sin causar la muerte inmediata.
                      - Konjiki Ashisogi Jizō (Bankai): Su Bankai libera una enorme criatura con múltiples cuchillas en su boca, capaz de segregar un veneno letal que afecta a cualquier ser vivo en su rango.
                      - Regeneración corporal: Mayuri ha modificado su propio cuerpo para ser capaz de regenerar extremidades y órganos dañados a voluntad.
                      - Manipulación genética: Puede alterar su cuerpo y el de otros seres mediante experimentos científicos, creando mejoras biológicas únicas.
                      - Intelecto superior: Es uno de los shinigamis más inteligentes de la Sociedad de Almas, con una mente analítica y despiadada que le permite crear estrategias complejas en batalla.
                  `,
              nivel_de_poder: `
                      Aunque Mayuri no es un luchador tradicional, su intelecto y adaptabilidad lo convierten en un oponente extremadamente peligroso. Su uso de venenos, modificaciones corporales y tácticas impredecibles le han permitido vencer a enemigos poderosos, como Szayelaporro Granz y Pernida Parnkgjas.
                      Su Bankai es una de las habilidades más letales de la serie, ya que su veneno es casi imposible de contrarrestar. Además, Mayuri siempre tiene múltiples planes de respaldo y modificaciones preparadas para cualquier situación.
                  `,
              galeria: JSON.stringify([
                "https://preview.redd.it/ouic50v3n5gc1.jpeg?auto=webp&s=c06f76af8bf3d7ad549ac646f390cdf16fda3c4b",
                "https://i.pinimg.com/736x/6b/bc/88/6bbc8883ba1426ebc758a7ed8d5a54ac.jpg",
                "https://wallpapers.com/images/featured/mayuri-kurotsuchi-w5p2sy0c7b9v59cr.jpg",
                "https://i.pinimg.com/736x/f3/2c/11/f32c11fe679145a56874fad97b569bee.jpg"
              ]),
              historia: `
                      Mayuri Kurotsuchi fue encarcelado en la 2ª División antes de ser liberado por Kisuke Urahara, quien lo convirtió en su segundo al mando en el Instituto de Investigación y Desarrollo Shinigami. Tras la partida de Urahara, Mayuri se convirtió en el jefe del instituto y en el capitán de la 12ª División.
                      A lo largo de la serie, Mayuri demuestra ser un científico despiadado, dispuesto a experimentar con cualquier ser vivo, incluyendo sus propios aliados, para avanzar en su investigación. Sin embargo, a pesar de su naturaleza cruel, es un miembro valioso del Gotei 13 y ha contribuido a la derrota de múltiples enemigos con su intelecto y habilidades únicas.
                  `,
              personalidad: `
                      Mayuri es un personaje excéntrico, sádico y extremadamente calculador. No tiene escrúpulos cuando se trata de experimentar con otros, y ve la vida como un simple objeto de estudio. Su manera de hablar y actuar es teatral, y disfruta humillar a sus enemigos con su superioridad intelectual.
                      A pesar de su frialdad, muestra cierto respeto por aquellos que considera dignos o que han demostrado ser útiles para su investigación. Su relación con su "hija" artificial, Nemu Kurotsuchi, también muestra un lado más complejo de su personalidad.
                  `,
              batallas: "Mayuri vs Uryū Ishida[Perdedor], Mayuri vs Szayelaporro Granz[Ganador], Mayuri vs Pernida Parnkgjas[Ganador]",
            },
            
              {
                nombre: "Isane Kotetsu",
                raza: "Shinigami",
                cumpleaños: "2 de agosto",
                altura: "1.87 m",
                peso: "70 kg",
                afiliacion: "Gotei 13, 4ª División",
                ocupacion: "Capitana de la 4ª División",
                shikai: "Itegumo",
                bankai: "Desconocido",
                poderes: `
                        Isane Kotetsu es la teniente de la 4ª División, especializada en curación y apoyo en combate. Su Zanpakutō, Itegumo, tiene una forma única que se divide en tres hojas, aunque su capacidad ofensiva es limitada en comparación con otros shinigamis.
                        Como miembro de la 4ª División, posee una gran habilidad en kido de curación, lo que la convierte en una pieza clave en la recuperación de aliados heridos en batalla.
                    `,
                habilidades: `
                        - Experta en Kido de curación: Como teniente de la 4ª División, Isane domina las técnicas de curación, siendo capaz de sanar heridas graves en poco tiempo.
                        - Itegumo (Shikai): Su Zanpakutō se divide en tres hojas, lo que le permite realizar ataques rápidos y multidireccionales.
                        - Comunicación telepática: Tiene la capacidad de transmitir mensajes a largas distancias usando kido.
                        - Gran velocidad y reflejos: A pesar de no ser una combatiente de primera línea, su entrenamiento le permite reaccionar rápidamente en situaciones de peligro.
                    `,
                nivel_de_poder: `
                        Isane no es una luchadora destacada en combate directo, pero su habilidad en kido y curación la hacen indispensable en el campo de batalla. Su Shikai no es particularmente poderoso en comparación con otras Zanpakutō, pero su capacidad de apoyo y estrategia la convierten en una aliada valiosa.
                    `,
                galeria: JSON.stringify([
                  "https://static.wikia.nocookie.net/bleach/images/2/25/Kotetsu_Isane_P.P2.png/revision/latest?cb=20221112115354&path-prefix=es",
                  "https://static.wikia.nocookie.net/bleach/images/1/1b/571Isane_profile.png/revision/latest?cb=20200322074711&path-prefix=en",
                  "https://img.favpng.com/19/19/24/dulce-guerrero-isane-kotetsu-retsu-unohana-bleach-rangiku-matsumoto-png-favpng-YQfq2qTau9mpXUa6U7UTHQ3bn_t.jpg",
                  "https://static.wikia.nocookie.net/bleach/images/b/b5/685Isane_profile.png/revision/latest?cb=20200322074311&path-prefix=en"
                ]),
                historia: `
                        Isane Kotetsu es la leal teniente de la 4ª División bajo el mando de Retsu Unohana. Su papel principal es asistir en la curación de los heridos durante las batallas y mantener el orden en la Sociedad de Almas.
                        Durante la traición de Aizen, Isane fue una de las primeras en advertir a los demás sobre su plan, utilizando su kido de comunicación. Tras la muerte de Unohana en la Guerra Sangrienta de los Mil Años, Isane se convierte en la capitana de la 4ª División, asumiendo el legado de su maestra.
                    `,
                personalidad: `
                        Isane es seria y responsable, pero también tiene una personalidad nerviosa y propensa a la preocupación. A pesar de su apariencia alta e imponente, es amable y protectora con sus compañeros.
                        Es muy leal a su capitana y a la 4ª División, y aunque no es la más fuerte en combate, su valentía y determinación la convierten en una shinigami respetada dentro del Gotei 13.
                    `,
                batallas: "Isane vs Aizen[Perdedor], Isane vs Quincy Soldados[Ganadora]",
              },

              {
                nombre: "Hisagi Shūhei",
                raza: "Shinigami",
                cumpleaños: "14 de agosto",
                altura: "1.81 m",
                peso: "67 kg",
                afiliacion: "Gotei 13, 9ª División",
                ocupacion: "Teniente de la 9ª División",
                shikai: "Kazeshini",
                bankai: "Kazeshini: Fushi no Kōjyō",
                poderes: `
                        Hisagi Shūhei es el teniente de la 9ª División del Gotei 13. Aunque es un shinigami de alto nivel, odia la violencia y prefiere evitar el combate innecesario.
                        Su Zanpakutō, Kazeshini, toma la forma de dos guadañas unidas por cadenas, lo que le permite realizar ataques a larga y corta distancia con gran agilidad.
                        A pesar de su naturaleza pacífica, Hisagi es un combatiente extremadamente hábil, con un gran dominio del Zanjutsu, Hakuda y Kido.
                    `,
                habilidades: `
                        - Shikai: Kazeshini: Su Zanpakutō adopta la forma de dos guadañas unidas por cadenas, permitiéndole atacar con rapidez y precisión.
                        - Experto en combate cuerpo a cuerpo: Su entrenamiento en Hakuda lo convierte en un luchador formidable incluso sin su Zanpakutō.
                        - Habilidad con Kido: Puede usar técnicas de Kido tanto ofensivas como defensivas para complementar su estilo de lucha.
                        - Gran velocidad y reflejos: Su agilidad le permite esquivar ataques y contraatacar rápidamente.
                        - Estratega: Es un luchador inteligente que analiza a sus oponentes y encuentra sus debilidades.
                    `,
                nivel_de_poder: `
                        Hisagi es un shinigami de gran habilidad, pero aún no ha alcanzado el nivel de Bankai. A pesar de esto, su Shikai es extremadamente peligroso en combate, 
                        y su destreza en combate cuerpo a cuerpo lo hace un oponente formidable. Su poder y experiencia le permiten enfrentarse a enemigos de alto nivel sin depender de una liberación avanzada.
                    `,
                galeria: JSON.stringify([
                  "https://static.wikia.nocookie.net/bleach/images/1/10/Ep216HisagiProfile.png/revision/latest?cb=20220503231623&path-prefix=en",
                  "https://preview.redd.it/vk74a4sptuzc1.jpeg?width=640&crop=smart&auto=webp&s=b39ef9a197ffd92b00b2a35ede545c0587141302",
                  "https://preview.redd.it/what-if-we-actually-got-to-see-hisagis-bankai-hisagi-rewrite-v0-hso7lwqqv9ra1.png?width=949&format=png&auto=webp&s=929b8071e07eae833a282091ef2c2738e1254e61",
                  "https://preview.redd.it/w6ggwefttsp91.jpg?auto=webp&s=7ad91ae0ef5bfbd1ba06e628b5b56d76bc1d5392"
                ]),
                historia: `
                        Hisagi Shūhei es un talentoso shinigami que fue salvado en su infancia por Kensei Muguruma, lo que lo inspiró a unirse al Gotei 13 y convertirse en teniente de la 9ª División.
                        Durante la traición de Aizen, luchó contra Kaname Tōsen, su antiguo capitán, y aunque intentó hacerle entrar en razón, se vio obligado a enfrentarlo en una batalla mortal.
                        Posteriormente, desempeñó un papel clave en la Guerra Sangrienta de los Mil Años, luchando contra los Quincy y demostrando su valentía como líder de la 9ª División.
                    `,
                personalidad: `
                        Hisagi es un shinigami serio y responsable, que valora la paz y evita el combate innecesario. A pesar de su apariencia ruda y su Zanpakutō de aspecto siniestro, 
                        es una persona amable y reflexiva. Admira profundamente a su difunto capitán y se esfuerza por seguir su ejemplo, aunque a veces duda de su propia fuerza y habilidades.
                    `,
                batallas: "Hisagi vs Findorr[Ganador], Hisagi vs Tōsen[Ganador], Hisagi vs Mask De Masculine[Perdedor]",
              },
            
              {
                nombre: "Izuru Kira",
                raza: "Shinigami",
                cumpleaños: "27 de marzo",
                altura: "1.73 m",
                peso: "56 kg",
                afiliacion: "Gotei 13, 3ª División",
                ocupacion: "Teniente de la 3ª División",
                shikai: "Wabisuke",
                bankai: "Desconocido",
                poderes: `
                        Izuru Kira es el teniente de la 3ª División del Gotei 13. Es un espadachín experto y un estratega brillante, aunque su personalidad es melancólica y reflexiva.
                        Su Zanpakutō, Wabisuke, tiene la habilidad única de duplicar el peso de todo lo que golpea, lo que le permite inutilizar las armas de sus oponentes o hacer que caigan de rodillas por su propio peso.
                        Aunque no ha mostrado su Bankai, su Shikai lo convierte en un combatiente peligroso que puede derrotar a oponentes más fuertes con inteligencia y técnica.
                    `,
                habilidades: `
                        - Shikai: Wabisuke: Su espada dobla el peso de cualquier objeto o persona que golpea, haciéndolos cada vez más pesados hasta que no pueden moverse.
                        - Maestro en Zanjutsu: Es un espadachín hábil que combina su Zanpakutō con tácticas inteligentes en combate.
                        - Habilidad con Kido: Puede usar técnicas de Kido tanto ofensivas como defensivas para apoyar su estilo de lucha.
                        - Gran resistencia: A pesar de su apariencia frágil, Kira ha demostrado una gran resistencia en combate y una determinación inquebrantable.
                        - Estratega: Su mentalidad analítica le permite encontrar las debilidades de sus enemigos y aprovecharlas en batalla.
                    `,
                nivel_de_poder: `
                        Izuru Kira es un shinigami talentoso, aunque su poder no está al nivel de un capitán. Sin embargo, su Shikai es extremadamente útil en combate, permitiéndole incapacitar a enemigos más fuertes 
                        al hacer que sus armas o cuerpos sean demasiado pesados para moverse. Su nivel de poder lo convierte en un rival peligroso en combates prolongados.
                    `,
                galeria: JSON.stringify([
                  "https://i.pinimg.com/736x/8d/b4/48/8db44860be7af6aa78a13982c66d2589.jpg",
                  "https://i.redd.it/ixmmmye8onz61.jpg",
                  "https://static.wikia.nocookie.net/vsbattles/images/1/1f/IzuruKira_%28Game%29.png/revision/latest?cb=20211121182559",
                  "https://static.wikia.nocookie.net/bleach/images/b/b7/Wabisuke.jpeg/revision/latest?cb=20211007190720&path-prefix=es"
                ]),
                historia: `
                        Izuru Kira fue uno de los mejores estudiantes de la Academia Shinigami y se convirtió en teniente de la 3ª División bajo la tutela de Gin Ichimaru. 
                        Su lealtad fue puesta a prueba cuando Gin traicionó el Gotei 13, dejándolo confundido y sin rumbo. A pesar de esto, Kira siguió adelante y asumió su papel como líder de la 3ª División.
                        Durante la Guerra Sangrienta de los Mil Años, fue gravemente herido por los Quincy, pero logró sobrevivir y regresar al combate, demostrando su determinación y fortaleza.
                    `,
                personalidad: `
                        Kira es un shinigami melancólico y serio, con una visión pesimista de la vida. Cree que la guerra y la muerte son inevitables y carga con un profundo sentimiento de culpa 
                        por la traición de su antiguo capitán. A pesar de esto, es leal y comprometido con su deber, y hará lo que sea necesario para proteger a sus compañeros.
                    `,
                batallas: "Kira vs Abirama[Ganador], Kira vs Bazz-B[Perdedor], Kira vs Lille Barro[Ganador]",
              },

              {
                nombre: "Rangiku Matsumoto",
                raza: "Shinigami",
                cumpleaños: "29 de septiembre",
                altura: "1.72 m",
                peso: "57 kg",
                afiliacion: "Gotei 13, 10ª División",
                ocupacion: "Teniente de la 10ª División",
                shikai: "Haineko",
                bankai: "Desconocido",
                poderes: `
                        Rangiku Matsumoto es la teniente de la 10ª División del Gotei 13. Es una combatiente talentosa con una personalidad relajada y despreocupada, aunque esconde una gran inteligencia y determinación.
                        Su Zanpakutō, Haineko, se desintegra en ceniza al activarse en su Shikai, permitiéndole atacar a sus oponentes con un polvo cortante que puede moverse a voluntad.
                        Aunque no ha demostrado tener un Bankai, su Shikai le permite luchar de manera efectiva contra enemigos poderosos, usando su astucia para aprovechar su ventaja en combate.
                    `,
                habilidades: `
                        - Shikai: Haineko: Su Zanpakutō se convierte en ceniza y corta a sus enemigos desde cualquier dirección, dándole una gran versatilidad en combate.
                        - Maestra en Zanjutsu: Es una espadachina hábil que usa su Shikai de forma estratégica para desarmar y confundir a sus oponentes.
                        - Habilidad con Kido: Aunque no es su fuerte, puede usar Kido para ataques sorpresa o apoyo en combate.
                        - Gran resistencia: A pesar de su actitud despreocupada, ha demostrado una gran resistencia en batalla y la capacidad de continuar luchando incluso en situaciones difíciles.
                        - Inteligencia táctica: Aunque suele parecer perezosa, Rangiku es una estratega astuta que sabe cuándo y cómo atacar.
                    `,
                nivel_de_poder: `
                        Rangiku Matsumoto es una teniente fuerte, pero no se encuentra entre los shinigamis más poderosos. Su Shikai le da una ventaja táctica considerable, permitiéndole atacar desde múltiples ángulos sin exponer su posición.
                        Sin embargo, su falta de un Bankai limita su verdadero potencial en combate contra enemigos de alto nivel.
                    `,
                galeria: JSON.stringify([
                  "https://www.mundodeportivo.com/alfabeta/hero/2021/12/bleach-rangiku-matsumoto-cosplay.jpg?width=768&aspect_ratio=16:9&format=nowebp",
                  "https://static.wikia.nocookie.net/bleach/images/d/d1/Ep24RangikuArrives.png/revision/latest?cb=20210331032855&path-prefix=en",
                  "https://static.wikia.nocookie.net/bleach/images/b/b6/-16Rangiku_profile.png/revision/latest/scale-to-width/360?cb=20220625045948&path-prefix=en",
                  "https://preview.redd.it/how-strong-could-rangiku-have-been-v0-3bpnw7qaodmb1.jpg?width=640&crop=smart&auto=webp&s=b34e652eb0538a049e2a7e0c584ed18a170c9b38"
                ]),
                historia: `
                        Rangiku Matsumoto tuvo una infancia difícil, creciendo en la pobreza junto a Gin Ichimaru, quien se convirtió en su mejor amigo y protector.
                        Más tarde, se unió al Gotei 13 y ascendió al rango de teniente bajo el mando de Tōshirō Hitsugaya. A lo largo de la serie, ha demostrado ser una guerrera leal y fuerte, 
                        aunque su actitud relajada y su amor por la bebida la hacen parecer menos seria de lo que realmente es.
                        Su relación con Gin Ichimaru es uno de los aspectos más importantes de su historia, ya que su muerte la afectó profundamente y la motivó a volverse aún más fuerte.
                    `,
                personalidad: `
                        Rangiku es extrovertida, coqueta y relajada, con una actitud despreocupada hacia la vida. Sin embargo, bajo su apariencia juguetona se esconde una mujer con un gran sentido de la responsabilidad y una profunda tristeza.
                        Es leal a sus amigos y compañeros, y aunque a veces se muestra perezosa, cuando la situación lo requiere, demuestra ser una guerrera formidable y decidida.
                    `,
                batallas: "Rangiku vs Nakeem[Ganador], Rangiku vs Luppi[Perdedor], Rangiku vs Bazz-B[Perdedor]",
              },

              {
                nombre: "Ikkaku Madarame",
                raza: "Shinigami",
                cumpleaños: "9 de noviembre",
                altura: "1.82 m",
                peso: "76 kg",
                afiliacion: "Gotei 13, 11ª División",
                ocupacion: "Tercer Oficial de la 11ª División",
                shikai: "Hōzukimaru",
                bankai: "Ryūmon Hōzukimaru",
                poderes: `
                        Ikkaku Madarame es un feroz combatiente de la 11ª División del Gotei 13, conocido por su amor por la batalla y su espíritu indomable.
                        Su Zanpakutō, Hōzukimaru, tiene la capacidad de transformarse en un arma de tres secciones en su Shikai, permitiéndole atacar con gran alcance y potencia.
                        Su Bankai, Ryūmon Hōzukimaru, aumenta enormemente su fuerza y resistencia, dándole un poder devastador en combate cuerpo a cuerpo.
                        A pesar de su fuerza, Ikkaku evita revelar su Bankai, ya que prefiere permanecer en la 11ª División sin ascender de rango.
                    `,
                habilidades: `
                        - Maestro en Zanjutsu: Ikkaku es un experto espadachín que prefiere el combate cuerpo a cuerpo y disfruta de las peleas prolongadas.
                        - Shikai: Hōzukimaru: Se convierte en una naginata de tres secciones, lo que le permite atacar con flexibilidad y gran alcance.
                        - Bankai: Ryūmon Hōzukimaru: Aumenta drásticamente su poder de ataque y resistencia, aunque necesita tiempo para alcanzar su máximo poder.
                        - Gran resistencia y durabilidad: Puede seguir luchando incluso con heridas graves, demostrando una resistencia impresionante.
                        - Espíritu de lucha indomable: Su amor por la batalla lo impulsa a seguir peleando sin importar las circunstancias.
                    `,
                nivel_de_poder: `
                        Ikkaku es uno de los luchadores más fuertes de la 11ª División y posee un Bankai, lo que lo coloca por encima de la mayoría de los tenientes en términos de poder.
                        Sin embargo, su Bankai tiene una gran desventaja: requiere tiempo para alcanzar su máximo potencial, lo que lo hace vulnerable en enfrentamientos rápidos.
                        A pesar de esto, su habilidad con la espada y su resistencia lo convierten en un oponente formidable.
                    `,
                galeria: JSON.stringify([
                  "https://static.wikia.nocookie.net/bleach/images/e/ed/237Ikkaku_profile.png/revision/latest?cb=20220906215055&path-prefix=en",
                  "https://i.pinimg.com/564x/82/eb/94/82eb94a79ef64c2ac25485c7eb5cad21.jpg",
                  "https://m.media-amazon.com/images/M/MV5BZGY2MzA0NTktMTg3ZC00ZjQ4LTgwODYtMWRlNjQ3NWJlODk4XkEyXkFqcGc@._V1_.jpg",
                  "https://static.wikia.nocookie.net/bleach/images/8/84/Ikkaku_Bankai.jpg/revision/latest?cb=20090317004930&path-prefix=es"
                ]),
                historia: `
                        Ikkaku Madarame nació en el Rukongai y siempre ha sido un apasionado de la lucha. Fue derrotado por Zaraki Kenpachi en el pasado, lo que lo llevó a unirse a la 11ª División para seguir su filosofía de combate.
                        Se convirtió en el tercer oficial de la división y desarrolló una gran amistad con Yumichika Ayasegawa. A lo largo de la serie, ha demostrado su valentía en múltiples batallas y su lealtad a Kenpachi.
                        A pesar de poseer un Bankai, se niega a ascender de rango porque quiere seguir luchando bajo el mando de Kenpachi.
                    `,
                personalidad: `
                        Ikkaku es un guerrero apasionado que vive para la batalla. Es valiente, leal y tiene un gran sentido del honor. Aunque a veces es impulsivo y competitivo, su determinación lo hace un luchador formidable.
                        Es muy orgulloso y evita mostrar su Bankai, ya que teme que lo obliguen a ascender y perder su lugar en la 11ª División.
                    `,
                batallas: "Ikkaku vs Ichigo[Perdedor], Ikkaku vs Edorad[Ganador], Ikkaku vs Poww[Ganador], Ikkaku vs Bambietta[Perdedor]",
              },

              {
                nombre: "Yachiru Kusajishi",
                raza: "Shinigami",
                cumpleaños: "12 de febrero",
                altura: "1.09 m",
                peso: "15.5 kg",
                afiliacion: "Gotei 13, 11ª División",
                ocupacion: "Teniente de la 11ª División",
                shikai: "Sanpo Kenjū",
                bankai: "Desconocido",
                poderes: `
                        Yachiru Kusajishi es la teniente de la 11ª División del Gotei 13 y la mano derecha de Kenpachi Zaraki. 
                        A pesar de su apariencia infantil y personalidad juguetona, es increíblemente fuerte y posee una velocidad y agilidad impresionantes.
                        Su Zanpakutō, Sanpo Kenjū, invoca dos criaturas espirituales que atacan simultáneamente desde diferentes ángulos, haciendo que sus ataques sean difíciles de esquivar.
                        Su fuerza espiritual es inmensa, lo que le permite moverse a gran velocidad y golpear con una potencia sorprendente.
                    `,
                habilidades: `
                        - Velocidad y agilidad sobrehumanas: Yachiru puede moverse a una velocidad increíble, lo que la hace difícil de alcanzar en combate.
                        - Shikai: Sanpo Kenjū: Invoca dos criaturas espirituales que atacan desde diferentes direcciones, asegurando que su enemigo sea golpeado sin importar cómo se defienda.
                        - Instintos de combate naturales: Aunque rara vez pelea en serio, tiene un sentido del combate innato y puede derrotar enemigos con facilidad.
                        - Gran resistencia: Puede recibir golpes y continuar luchando sin mostrar signos de fatiga o dolor.
                        - Percepción espiritual avanzada: Puede detectar la presencia de enemigos con facilidad y rastrear a personas con gran precisión.
                    `,
                nivel_de_poder: `
                        Aunque no se muestra en muchas batallas, Yachiru posee un nivel de poder sorprendentemente alto para su apariencia. 
                        Su velocidad, fuerza y habilidades de combate la hacen una oponente formidable. 
                        Su Zanpakutō es única y extremadamente efectiva, permitiéndole atacar sin que el enemigo pueda reaccionar a tiempo.
                    `,
                galeria: JSON.stringify([
                  "https://preview.redd.it/hafphjihe3fd1.jpeg?auto=webp&s=864f65634d10c2d8d108e933f1c36959daa8a894",
                  "https://i.pinimg.com/564x/ec/45/8a/ec458ae6639b9442efb757be0c323a5a.jpg",
                  "https://i.namu.wiki/i/7efE0qziDiWJ3KOlMbBRUn4HTCUed7zQpMwBt16o6mgZ9CXT8sZ_MIxM41brC-uou08BbC-IpPpi9Hei_0xlAQ.webp",
                  "https://static.wikia.nocookie.net/five-world-war/images/2/25/Yachiru.png/revision/latest?cb=20210518212116"
                ]),
                historia: `
                        Yachiru fue encontrada por Kenpachi Zaraki en el distrito 79 del Rukongai, un lugar peligroso y sin ley. A pesar de su corta edad, no mostró miedo y se encariñó con Kenpachi de inmediato.
                        Él la adoptó y le dio el nombre "Yachiru" en honor a una persona importante en su vida. Desde entonces, se convirtió en su fiel compañera y teniente de la 11ª División.
                        A lo largo de la serie, se la ve montada en los hombros de Kenpachi, animándolo en combate y burlándose de sus enemigos.
                        Sin embargo, en la Guerra contra los Quincy, su verdadera naturaleza se vuelve un misterio cuando desaparece después de que Kenpachi desbloquea su Bankai.
                    `,
                personalidad: `
                        Yachiru es juguetona, traviesa y siempre está de buen humor. Le encanta hacer bromas y molestar a otros, pero tiene un vínculo inquebrantable con Kenpachi.
                        A pesar de su actitud infantil, es increíblemente perceptiva y muestra una gran lealtad a la 11ª División. También tiene un lado aterrador cuando se enoja, especialmente si alguien insulta a Kenpachi.
                    `,
                batallas: "Yachiru vs Gremmy[Perdedora]",
              }
                
                  {
                    nombre: "Grimmjow Jaegerjaquez",
                    raza: "Hollow",
                    cumpleaños: "31 de julio",
                    altura: "1.86 m",
                    peso: "80 kg",
                    afiliacion: "Ejército de Sōsuke Aizen, Espada #6",
                    ocupacion: "Espada",
                    shikai: "No tiene",
                bankai: "No tiene",
                    poderes: `
                            Grimmjow Jaegerjaquez es el Sexto Espada en el ejército de Sōsuke Aizen. Es un combatiente feroz con una personalidad salvaje y sed de batalla.
                            Su poder proviene de su Zanpakutō, Pantera, que le permite transformarse en una bestia felina, aumentando su velocidad, fuerza y reflejos.
                            Posee una regeneración acelerada y puede disparar potentes Cero desde sus manos y boca.
                            Su Gran Rey Cero es una versión mucho más poderosa del Cero común, capaz de devastar grandes áreas con facilidad.
                        `,
                    habilidades: `
                            - Cero: Dispara potentes ráfagas de energía espiritual desde sus manos o boca.
                            - Gran Rey Cero: Una versión mejorada del Cero que solo los Espada pueden usar, con una potencia devastadora.
                            - Sonído: Su velocidad es impresionante, permitiéndole moverse más rápido que la mayoría de sus oponentes.
                            - Hierro (Hierro): Su piel es extremadamente dura, lo que le permite resistir ataques poderosos sin sufrir mucho daño.
                            - Zarpazos de Desgarrón: En su forma resurrección, puede lanzar cortes de energía desde sus garras con gran velocidad y precisión.
                            - Regeneración acelerada: Puede curar heridas a gran velocidad, aunque no puede regenerar órganos perdidos.
                        `,
                    nivel_de_poder: `
                            Grimmjow es un Espada de nivel extremadamente alto, considerado uno de los más fuertes debido a su agresividad y talento en combate.
                            Su velocidad y fuerza física lo hacen un oponente formidable incluso para los Shinigami más poderosos.
                            En su forma resurrección, su poder se multiplica, permitiéndole enfrentarse a Ichigo Kurosaki en su estado más avanzado.
                        `,
                    galeria: JSON.stringify([
                      "https://static.wikia.nocookie.net/bleach/images/4/4c/Ep398GrimmjowProfile.png/revision/latest?cb=20241110032104&path-prefix=en",
                      "https://preview.redd.it/b8g8rrm6ew8a1.jpg?auto=webp&s=f9e0bce6463657dcfcb8e1fe3a729fa5e3675601",
                      "https://static.wikia.nocookie.net/bleachwiki/images/6/63/Grimmjow_TYBW.jpg/revision/latest?cb=20230417194421&path-prefix=de",
                      "https://i.pinimg.com/736x/e2/9e/de/e29edea26c4998aa163a8119b60d50bc.jpg"
                    ]),
                    historia: `
                            Grimmjow era originalmente un Adjucha, líder de un grupo de Hollows que buscaban evolucionar. Tras devorar a muchos de sus compañeros, se convirtió en un Arrancar y fue reclutado por Aizen.
                            Como Sexto Espada, se enfrentó a Ichigo en varias ocasiones, desarrollando una rivalidad intensa con él.
                            Tras la caída de Aizen, Grimmjow sobrevivió y más tarde reaparece en la Guerra contra los Quincy, aliándose con Ichigo temporalmente para derrotar a un enemigo en común.
                        `,
                    personalidad: `
                            Grimmjow es arrogante, violento y disfruta de la batalla más que cualquier otra cosa. Tiene un fuerte sentido del orgullo y no tolera ser menospreciado.
                            Aunque es despiadado, respeta a los oponentes que luchan con valentía, especialmente Ichigo, con quien desarrolla una relación de rivalidad y respeto mutuo.
                        `,
                    batallas: "Grimmjow vs Ichigo Kurosaki [Perdedor], Grimmjow vs Ulquiorra Cifer [Interrumpida], Grimmjow vs Askin Nakk Le Vaar [Ganador]",
                  },

                  {
                    "nombre": "Ulquiorra Cifer",
                    "raza": "Hollow",
                    "cumpleaños": "31 de octubre",
                    "altura": "1.69 m",
                    "peso": "55 kg",
                    "afiliacion": "Espada, Hueco Mundo",
                    "ocupacion": "Espada",
                    "shikai": "No tiene",
                    "bankai": "No tiene",
                    "poderes": `
                      Ulquiorra Cifer es uno de los más poderosos de los Espada, la élite de los Arrancar. 
                      Su habilidad principal es el uso del "Cero", una poderosa técnica de energía espiritual que puede destruir a sus enemigos en un solo disparo. 
                      Además, su habilidad "Segunda Etapa" le permite transformarse en una forma más poderosa, en la que su velocidad y fuerza aumentan considerablemente.
                      Ulquiorra también tiene la capacidad de volar y una gran resistencia a los ataques físicos y espirituales. 
                      Es un luchador extremadamente calculador, que prefiere analizar la situación antes de actuar.
                    `,
                    "habilidades": `
                      - Cero: Ulquiorra es capaz de liberar un Cero, una poderosa onda de energía espiritual que puede causar una destrucción masiva.
                      - Segunda Etapa: En su transformación, Ulquiorra alcanza un nivel de poder mucho mayor, con una mejora significativa en su velocidad y fuerza.
                      - Regeneración: Como Arrancar, Ulquiorra puede regenerar rápidamente sus heridas, lo que lo hace un oponente difícil de derrotar.
                      - Vuelo: Ulquiorra puede volar a gran velocidad, lo que le da una ventaja táctica en combate.
                    `,
                    "nivel_de_poder": `
                      Ulquiorra Cifer es uno de los personajes más poderosos de la serie. Como Espada, ocupa el cuarto lugar en la jerarquía de los Arrancar, lo que demuestra su gran habilidad. 
                      Su Cero es una de las técnicas más destructivas, y su Segunda Etapa lo convierte en un combatiente casi invencible. 
                      Ulquiorra es capaz de enfrentarse a los Shinigami más fuertes y tiene una gran resistencia tanto física como espiritual. 
                      Su capacidad para analizar y adaptar su estrategia lo hace aún más peligroso en combate.
                    `,
                    "galeria": JSON.stringify([
                      "https://static.wikia.nocookie.net/bleach/images/3/36/Ulquiorra_Vizard.png/revision/latest?cb=20180421225651",
                      "https://i.pinimg.com/originals/4f/22/9f/4f229f9ff5bdb6a6a2c6c735b2689a4e.jpg",
                      "https://preview.redd.it/0g2zv7k6xz021.jpg?width=960&crop=smart&auto=webp&s=2be1c87e5c5ff9f67839d8d61ab8b8b5a5c07033",
                      "https://vignette.wikia.nocookie.net/bleach/images/2/2e/Ulquiorra_Cifer_Anime.png/revision/latest/scale-to-width-down/350?cb=20200119163152"
                    ]),
                    "historia": `
                      Ulquiorra Cifer es uno de los personajes más enigmáticos de la serie. Originalmente un Hollow, fue convertido en Arrancar por Aizen, quien lo colocó como uno de los Espada más poderosos. 
                      A lo largo de la serie, Ulquiorra demuestra una actitud fría y distante, sin mostrar emociones humanas. 
                      Su misión principal es capturar a Ichigo Kurosaki y traerlo a Hueco Mundo, pero a medida que avanza la historia, Ulquiorra se encuentra con Ichigo y sus amigos, desafiando su perspectiva sobre los seres humanos y los Hollows.
                    `,
                    "personalidad": `
                      Ulquiorra es conocido por su frialdad y su falta de emociones, lo que lo convierte en un personaje misterioso y calculador. 
                      Aunque parece indiferente a la vida y la muerte, su encuentro con Ichigo y los demás Shinigami lo hace cuestionar sus propias creencias. 
                      A pesar de su lealtad a Aizen y su misión como Espada, Ulquiorra empieza a mostrar una pequeña vulnerabilidad, especialmente cuando se enfrenta a Ichigo en su lucha final.
                    `,
                    "batallas": "Ulquiorra vs Ichigo[Perdedor]"
                  },
                  {
                    "nombre": "Baraggan Louisenbairn",
                    "raza": "Hollow",
                    "cumpleaños": "9 de Febrero",
                    "altura": "2.10 m",
                    "peso": "95 kg",
                    "afiliacion": "Espada, Hueco Mundo",
                    "ocupacion": "Espada",
                    "shikai": "No tiene",
                    "bankai": "No tiene",
                    "poderes": `
                      Baraggan Louisenbairn es uno de los Espada más poderosos. Su habilidad principal es su control sobre la muerte. 
                      Su zanpakutō, "La Muerte", tiene el poder de controlar el envejecimiento y la decadencia. 
                      Cualquier cosa que entre en su área de influencia comienza a envejecer rápidamente hasta morir. 
                      Este poder lo hace extremadamente peligroso, ya que puede desintegrar a sus enemigos con solo tocarlos. 
                      Además, Baraggan tiene una gran resistencia y es un combatiente formidable, capaz de enfrentarse a los enemigos más poderosos.
                    `,
                    "habilidades": `
                      - La Muerte: Su zanpakutō permite que cualquier cosa que entre en su campo de visión envejezca rápidamente y muera.
                      - Regeneración: Baraggan puede regenerar sus heridas rápidamente, lo que lo hace un oponente difícil de derrotar.
                      - Control del tiempo: Baraggan tiene una habilidad que le permite manipular el tiempo a su favor, ralentizando o acelerando su propio tiempo.
                      - Fuerza sobrehumana: Como uno de los Espada, Baraggan posee una fuerza física extremadamente alta, lo que lo convierte en un combatiente letal en combate cercano.
                    `,
                    "nivel_de_poder": `
                      Baraggan Louisenbairn es uno de los Espada más poderosos, con un control absoluto sobre el envejecimiento y la muerte. 
                      Su habilidad con "La Muerte" le otorga un poder destructivo casi inigualable, ya que puede desintegrar a sus enemigos a una velocidad impresionante. 
                      A pesar de su edad, Baraggan posee una gran resistencia y una fuerza física sobrehumana. 
                      Su capacidad para manipular el tiempo y su resistencia lo convierten en un oponente extremadamente peligroso para cualquiera que se cruce en su camino.
                    `,
                    "galeria": JSON.stringify([
                      "https://vignette.wikia.nocookie.net/bleach/images/1/1f/BaragganLouisenbairn.png/revision/latest?cb=20190126193024",
                      "https://i.pinimg.com/originals/d4/cf/5f/d4cf5f6d8c0e678b3a4d717ef53b6b6b.jpg",
                      "https://preview.redd.it/mt1nrspph7s41.jpg?width=960&crop=smart&auto=webp&s=5f1a5b9b88b78a4c8e4b5eebac55c1bc0ffb56f3",
                      "https://static.wikia.nocookie.net/bleach/images/0/0d/Baraggan_Anime_Render.png/revision/latest?cb=20201021182443"
                    ]),
                    "historia": `
                      Baraggan Louisenbairn fue uno de los primeros Arrancar creados por Aizen y uno de los Espada más poderosos de Hueco Mundo. 
                      Su habilidad para controlar el envejecimiento lo convirtió en una figura temida y respetada en el mundo de los Hollows. 
                      A lo largo de la serie, Baraggan demuestra ser un ser extremadamente orgulloso, que desprecia a los demás y valora su poder por encima de todo. 
                      Aunque fue derrotado por uno de los protagonistas, su poder y su legado como Espada siguen siendo recordados como uno de los más grandes.
                    `,
                    "personalidad": `
                      Baraggan es un ser extremadamente orgulloso y arrogante, que se considera superior a los demás. 
                      Tiene un profundo desprecio por los débiles y se ve a sí mismo como una figura casi divina. 
                      Su actitud de superioridad lo hace un personaje difícil de tratar, ya que no duda en mostrar su desprecio por aquellos que considera inferiores. 
                      A pesar de su arrogancia, Baraggan es extremadamente inteligente y calculador, lo que lo convierte en un oponente formidable en combate.
                    `,
                    "batallas": "Baraggan vs Soi Fon[Perdedor]"
                  },
                  
                  {
                    "nombre": "Coyote Starrk",
                    "raza": "Espada",
                    "cumpleaños": "19 de enero",
                    "altura": "1.87 m",
                    "peso": "77 kg",
                    "afiliacion": "Espada, Hueco Mundo",
                    "ocupacion": "Espada",
                    "shikai": "No tiene",
                    "bankai": "No tiene",
                    "poderes": `
                      Coyote Starrk es uno de los Espada más poderosos de Hueco Mundo, conocido por su habilidad para controlar y crear lobos espirituales. 
                      Su zanpakutō, "Los Lobos", le permite invocar a poderosos lobos espirituales que luchan a su lado y le otorgan una gran ventaja en combate. 
                      Starrk también tiene una habilidad única de dividir su alma en múltiples fragmentos, lo que le permite tener una resistencia y poder de combate mucho mayores. 
                      Además, su habilidad para liberar su energía a gran escala lo convierte en un oponente extremadamente peligroso.
                    `,
                    "habilidades": `
                      - Los Lobos: Su zanpakutō le permite invocar lobos espirituales que luchan a su lado y le proporcionan un poder significativo en combate.
                      - Divisiones de alma: Starrk puede dividir su alma en fragmentos, lo que le permite multiplicar su poder y resistencia.
                      - Fuerza sobrehumana: Como uno de los Espada, Starrk posee una gran fuerza física y una increíble resistencia en combate.
                      - Regeneración: Al igual que otros Espada, Coyote Starrk tiene una habilidad de regeneración avanzada que le permite recuperarse rápidamente de las heridas.
                    `,
                    "nivel_de_poder": `
                      Coyote Starrk es uno de los Espada más poderosos, capaz de invocar lobos espirituales y dividir su alma en múltiples fragmentos. 
                      Su poder destructivo es tremendo, y su habilidad para generar una gran cantidad de energía lo convierte en un combatiente extremadamente formidable. 
                      Su resistencia y fuerza son de nivel sobrehumano, lo que le permite enfrentarse a los más poderosos de los Shinigami y otros enemigos. 
                      A pesar de su personalidad relajada, Starrk es un combatiente letal cuando se enfrenta a la adversidad.
                    `,
                    "galeria": JSON.stringify([
                      "https://static.wikia.nocookie.net/bleach/images/a/a9/Coyote_Starrk.png/revision/latest?cb=20180409183950",
                      "https://vignette.wikia.nocookie.net/bleach/images/e/e1/Coyote_Starrk_Anime_Render.png/revision/latest?cb=20170622095133",
                      "https://i.pinimg.com/originals/97/38/cc/9738ccf7b4b4b3d1154f6a1951f89e85.jpg",
                      "https://static.wikia.nocookie.net/bleach/images/e/ea/Coyote_Starrk_1.png/revision/latest?cb=20190906030145"
                    ]),
                    "historia": `
                      Coyote Starrk es el primer Espada y uno de los más poderosos en Hueco Mundo. 
                      A pesar de su increíble poder, Starrk tiene una personalidad relajada y tranquila, prefiriendo evitar la lucha cuando es posible. 
                      Se convierte en un personaje clave durante la invasión de los Shinigami a Hueco Mundo, donde se enfrenta a varios de los principales personajes de la serie. 
                      A lo largo de su historia, Starrk demuestra ser un líder que prefiere evitar conflictos innecesarios, pero no duda en luchar cuando es necesario.
                    `,
                    "personalidad": `
                      Coyote Starrk es un personaje relajado y tranquilo, que prefiere evitar conflictos y mantener una actitud despreocupada. 
                      Aunque tiene un poder inmenso, no le gusta la lucha constante y prefiere disfrutar de su tiempo. 
                      A pesar de su aparente desinterés, Starrk es un ser muy leal y valiente cuando se trata de proteger a sus compañeros o enfrentarse a una amenaza. 
                      Su personalidad calmada y su gran poder lo hacen un personaje interesante y único dentro de los Espada.
                    `,
                    "batallas": "Starrk vs Shunsui[Perdedor], Starrk vs Ukitake[Empate]"
                  },

                  {
                    "nombre": "Tia Harribel",
                    "raza": "Hollow ",
                    "cumpleaños": "25 de Julio",
                    "altura": "1.75 m",
                    "peso": "61 kg",
                    "afiliacion": "Espada, Hueco Mundo",
                    "ocupacion": "Espada",
                    "shikai": "Ninguno",
                    "bankai": "Ninguno",
                    "poderes": `
                      Tia Harribel es una de las Espada más poderosas de Hueco Mundo. Su habilidad principal radica en su control sobre el agua y su capacidad para manipularla en combate. 
                      Su zanpakutō, "Tiburon", le permite crear y controlar agua en forma de ataques de alta presión, además de utilizarla para defenderse y crear barreras. 
                      A pesar de su poder, Harribel es conocida por su personalidad tranquila y su fuerte sentido del honor. 
                      Su habilidad en combate es tan formidable que incluso los Shinigami más poderosos tienen dificultades para enfrentarse a ella.
                    `,
                    "habilidades": `
                      - Control del agua: Su zanpakutō, "Tiburon", le permite manipular el agua en diversas formas, creando ataques de alta presión y poderosas barreras defensivas.
                      - Fuerza física: Como Espada, Harribel posee una gran fuerza física, siendo capaz de enfrentarse a enemigos poderosos sin esfuerzo.
                      - Regeneración: Al igual que otros Hollows, Tia Harribel tiene una regeneración avanzada que le permite sanar rápidamente durante el combate.
                      - Sentido del honor: A pesar de ser un Hollow, Harribel posee un fuerte sentido del honor y es conocida por su actitud justa y equilibrada.
                    `,
                    "nivel_de_poder": `
                      Tia Harribel es una de las Espada más poderosas, con un dominio impresionante sobre el agua y una gran resistencia en combate. 
                      Su habilidad para manipular el agua la convierte en un adversario extremadamente peligroso, capaz de realizar ataques de gran alcance y precisión. 
                      Su fuerza física y regeneración avanzada también le otorgan una ventaja significativa en combate, lo que la convierte en una de las Espada más formidables.
                    `,
                    "galeria": JSON.stringify([
                      "https://static.wikia.nocookie.net/bleach/images/c/c7/Tia_Harribel_Render.png/revision/latest?cb=20180205151045",
                      "https://vignette.wikia.nocookie.net/bleach/images/2/29/Tia_Harribel.png/revision/latest?cb=20180410005355",
                      "https://i.pinimg.com/originals/c1/ef/7a/c1ef7a9d87a4b7b8e1c2e85e4d9a1f4f.jpg",
                      "https://static.wikia.nocookie.net/bleach/images/4/4f/Tia_Harribel_2.png/revision/latest?cb=20180410010722"
                    ]),
                    "historia": `
                      Tia Harribel es una de las Espada más poderosas de Hueco Mundo, y se caracteriza por su actitud tranquila y su fuerte sentido del honor. 
                      A pesar de ser una Hollow, Harribel tiene un gran respeto por la vida y se muestra como una líder justa. 
                      Durante la invasión de los Shinigami a Hueco Mundo, Harribel juega un papel importante, enfrentándose a varios de los principales personajes de la serie. 
                      Su historia está marcada por su lucha por el poder y la supervivencia, pero también por su deseo de mantener la paz y el orden en Hueco Mundo.
                    `,
                    "personalidad": `
                      Tia Harribel es una persona tranquila y calculadora, con un fuerte sentido del honor y la justicia. 
                      Aunque es una Hollow, su personalidad es bastante diferente a la de otros miembros de la Espada, ya que se preocupa por sus subordinados y se muestra respetuosa con sus enemigos. 
                      Su actitud calmada y su sabiduría le permiten tomar decisiones justas en situaciones difíciles, y siempre actúa con una gran dignidad y honor.
                    `,
                    "batallas": "Harribel vs Hitsugaya[Perdedora]"
                  }
                    {
                      "nombre": "Jugram Haschwalth",
                      "raza": "Quincy",
                      "cumpleaños": "5 de Noviembre",
                      "altura": "1.89 m",
                      "peso": "74 kg",
                      "afiliacion": "Quincy, Wandenreich",
                      "ocupacion": "Comandante de la Fuerza de Asalto de la Wandenreich",
                      "shikai": "Ninguno",
                      "bankai": "Ninguno",
                      "poderes": `
                        Jugram Haschwalth es uno de los más poderosos Quincy y el segundo al mando en el ejército de los Quincy, la Wandenreich. 
                        Su poder más destacado es su habilidad para manipular la "Balance", que le permite controlar la suerte y la fortuna. 
                        Esta habilidad le da una ventaja significativa en combate, ya que puede transferir la suerte entre él y su oponente, 
                        lo que lo hace extremadamente peligroso. Además, su habilidad le permite también absorber la energía espiritual de sus enemigos para fortalecer su propio poder.
                      `,
                      "habilidades": `
                        - Balance: La habilidad principal de Jugram es "Balance", que le permite transferir la suerte entre él y su oponente. 
                          Esto le da una ventaja estratégica, ya que puede hacer que su enemigo sufra mala suerte, mientras que él mismo se beneficia de la buena suerte.
                        - Manipulación de Reishi: Como Quincy, Jugram puede manipular el Reishi para crear diversas armas y ataques, 
                          y también para fortalecer su propio cuerpo o crear barreras defensivas.
                        - Fuerza física: Aunque no es tan conocido por su fuerza física como otros personajes, Jugram es un combatiente extremadamente hábil y resistente.
                      `,
                      "nivel_de_poder": `
                        Jugram Haschwalth es un combatiente excepcionalmente fuerte, con una habilidad única que le da una ventaja significativa en combate. 
                        Su poder de "Balance" le permite manipular las probabilidades a su favor, lo que lo convierte en un adversario muy difícil de vencer. 
                        Además, su habilidad para manipular el Reishi y su entrenamiento como Quincy le otorgan una gran capacidad ofensiva y defensiva. 
                        A lo largo de la serie, Jugram demuestra ser uno de los personajes más poderosos, enfrentándose a varios de los personajes más fuertes de la serie.
                      `,
                      "galeria": JSON.stringify([
                        "https://i.pinimg.com/736x/c6/f7/74/c6f7745f164e0d43a9e45c3e90ed4ea0.jpg",
                        "https://static.wikia.nocookie.net/bleach/images/6/68/Jugram_ve_a_Zaraki_%28anime%29.png/revision/latest/scale-to-width-down/1280?cb=20230121021349&path-prefix=es",
                        "https://i.pinimg.com/736x/f0/a7/ff/f0a7fff37aaf6afdcd6886d4103d1c65.jpg",
                        "https://i.pinimg.com/736x/07/75/a8/0775a844061a406ad4977206ef3fd242.jpg"
                      ]),
                      "historia": `
                        Jugram Haschwalth es uno de los líderes más poderosos de la Wandenreich, la organización de los Quincy liderada por Yhwach. 
                        Es el compañero cercano y más leal de Yhwach, desempeñando un papel crucial en la invasión de los Shinigami. 
                        Haschwalth tiene una fuerte conexión con su líder, pero a lo largo de la serie se revelan sus propios conflictos internos y su lucha por la lealtad y el poder. 
                        A pesar de su apariencia fría y calculadora, Jugram es un personaje profundamente complejo, con una visión única del mundo y la guerra.
                      `,
                      "personalidad": `
                        Jugram Haschwalth es un personaje serio, calculador y extremadamente leal a Yhwach. 
                        A pesar de su naturaleza fría, tiene una fuerte moralidad y una visión personal del destino y el orden. 
                        Es un estratega brillante y un combatiente excepcionalmente habilidoso, pero también se enfrenta a dilemas internos sobre el futuro de los Quincy y la guerra. 
                        Su lealtad a Yhwach es inquebrantable, aunque a veces se muestra conflictivo respecto a sus propios deseos y su deber.
                      `,
                      "batallas": "Haschwalth vs Uryū Ishida[Empate]"
                    },

                    {
                      "nombre": "Gerard Valkyrie",
                      "raza": "Quincy",
                      "cumpleaños": "No especificado",
                      "altura": "2.22 m",
                      "peso": "No especificado",
                      "afiliacion": "Wandenreich",
                      "ocupacion": "Soldado de la Wandenreich, Fuerza de Asalto",
                      "shikai": "Ninguno",
                      "bankai": "Ninguno",
                      "poderes": `
                        Gerard Valkyrie es uno de los Quincy más poderosos de la Wandenreich y uno de los miembros de los "Vandenreich Sternritter". 
                        Su habilidad más destacada es su poder conocido como "The Miracle", que le permite manipular su propio destino, 
                        transformando cualquier daño que reciba en un aumento de su propio poder. 
                        Cuanto más herido está, más fuerte se vuelve, lo que lo convierte en un enemigo muy difícil de derrotar. 
                        Además, su enorme tamaño y fuerza física lo convierten en una amenaza formidable en combate.
                      `,
                      "habilidades": `
                        - The Miracle: Esta habilidad le permite a Gerard Valkyrie manipular su destino, convirtiendo cualquier herida o daño que reciba en un aumento de su propio poder. 
                          Cuanto más daño sufra, más fuerte se vuelve, lo que lo hace extremadamente resistente y difícil de derrotar.
                        - Fuerza física sobrehumana: Gerard posee una fuerza física increíblemente alta, lo que le permite usar su cuerpo como un arma en combate cuerpo a cuerpo.
                        - Reishi Manipulation: Como Quincy, Gerard tiene la capacidad de manipular el Reishi, lo que le permite crear armas y barreras de energía, 
                          además de potenciar sus ataques a través de esta habilidad.
                      `,
                      "nivel_de_poder": `
                        Gerard Valkyrie es un combatiente extremadamente fuerte. Su habilidad "The Miracle" lo hace casi invencible, ya que se vuelve más poderoso con cada golpe que recibe. 
                        Además, su gran tamaño y fuerza física le otorgan una ventaja en combate cuerpo a cuerpo, y su capacidad para manipular el Reishi lo convierte en un enemigo aún más peligroso. 
                        A lo largo de la serie, demuestra ser uno de los Quincy más poderosos, capaz de enfrentarse a varios Shinigami y otras amenazas con facilidad.
                      `,
                      "galeria": JSON.stringify([
                        "https://static.wikia.nocookie.net/bleach/images/4/4b/Ep396GerardProfile.png/revision/latest?cb=20241030014829&path-prefix=en9",
                        "https://static.wikia.nocookie.net/character-stats-and-profiles/images/a/aa/Gerard_Valkyrie_Vollst%C3%A4ndig.png/revision/latest/scale-to-width-down/334?cb=20201010212114",
                        "https://www.superherodb.com/pictures2/portraits/10/050/23339.jpg?v=1666385141",
                        "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/07/bleach-gerard-valkyrie.jpg"
                      ]),
                      "historia": `
                        Gerard Valkyrie es uno de los miembros más poderosos de la Wandenreich, y uno de los más leales a Yhwach. 
                        Como parte de la Fuerza de Asalto, fue uno de los principales combatientes en la invasión de los Shinigami. 
                        A lo largo de la serie, se muestra que Gerard tiene una fuerte creencia en la causa de la Wandenreich y en la misión de Yhwach, 
                        y su habilidad "The Miracle" lo convierte en un combatiente casi invencible. 
                        A pesar de su lealtad a Yhwach, su poder y su naturaleza despiadada lo convierten en uno de los enemigos más temidos en la serie.
                      `,
                      "personalidad": `
                        Gerard Valkyrie es un personaje muy leal a Yhwach y a la causa de la Wandenreich. 
                        A pesar de su naturaleza feroz y su brutalidad en combate, también tiene un sentido del honor y la devoción hacia su líder. 
                        Su poder y su habilidad para manipular su destino lo hacen muy confiado en sus habilidades, y es un personaje que se considera invencible mientras esté en combate. 
                        A lo largo de la serie, se muestra que su lealtad y su creencia en la causa de la Wandenreich son inquebrantables.
                      `,
                      "batallas": "Gerard Valkyrie vs Kenpachi Zaraki[Perdedor]"
                    },
                    {
                      "nombre": "Lille Barro",
                      "raza": "Quincy",
                      "cumpleaños": "11 de Abril",
                      "altura": "1.88 m",
                      "peso": "No especificado",
                      "afiliacion": "Wandenreich",
                      "ocupacion": "Sternritter",
                      "shikai": "Ninguno",
                      "bankai": "Ninguno",
                      "poderes": `
                        Lille Barro es uno de los Sternritter más poderosos de la Wandenreich y uno de los principales subordinados de Yhwach. 
                        Su habilidad, conocida como "The X-Axis", le permite disparar proyectiles extremadamente poderosos a través del aire, 
                        con una precisión letal. Además, su habilidad le permite disparar a través de cualquier cosa, lo que lo hace casi imposible de evitar. 
                        A lo largo de la serie, se muestra que Lille tiene un control impresionante sobre su habilidad y es capaz de enfrentarse a varios enemigos poderosos.
                      `,
                      "habilidades": `
                        - The X-Axis: Esta habilidad le permite disparar proyectiles de energía a través del aire con una precisión increíble. 
                          Puede disparar a través de cualquier cosa, incluso a través de objetos sólidos, lo que lo convierte en un enemigo extremadamente peligroso.
                        - Precisión letal: Lille tiene una precisión sobresaliente en sus disparos, lo que le permite atacar a sus enemigos desde largas distancias con una efectividad letal.
                        - Fuerza física: Aunque su habilidad principal es el uso de proyectiles, Lille también tiene una gran capacidad física, siendo capaz de enfrentarse en combate cuerpo a cuerpo cuando es necesario.
                      `,
                      "nivel_de_poder": `
                        Lille Barro es un combatiente extremadamente fuerte, especialmente debido a su habilidad "The X-Axis". 
                        Su capacidad para disparar proyectiles con precisión letal y atravesar cualquier objeto lo convierte en una amenaza formidable. 
                        A lo largo de la serie, demuestra ser capaz de enfrentarse a los Shinigami más poderosos y poner a prueba a varios de los personajes principales de la serie. 
                        Aunque su habilidad es su principal ventaja, su fuerza física también es considerable, lo que lo convierte en un combatiente completo.
                      `,
                      "galeria": JSON.stringify([
                        "https://i.pinimg.com/236x/bc/94/73/bc94734e006e12f61328444cd422ba4f.jpg",
                        "https://preview.redd.it/ec5spb68gda81.jpg?width=640&crop=smart&auto=webp&s=82402511ee844f298d6fbb18d842f9a1f4079782",
                        "https://preview.redd.it/sosuke-aizen-without-kyoka-suigetsu-versus-lille-barro-v0-dewwyy1ruwk91.jpg?width=640&crop=smart&auto=webp&s=6a57dfc0d07158b03a078bf4154c513a582ed4ef",
                        "https://preview.redd.it/4411r1jfrpyd1.jpeg?auto=webp&s=db0f7a851a50b2a9eced08fd244ed616d2374e68"
                      ]),
                      "historia": `
                        Lille Barro es uno de los Sternritter más temidos de la Wandenreich. Sirve a Yhwach y participa activamente en la invasión de los Shinigami. 
                        A lo largo de la serie, Lille demuestra ser un combatiente extremadamente habilidoso, capaz de enfrentarse a varios enemigos con su habilidad única "The X-Axis". 
                        A pesar de su naturaleza fría y calculadora, su lealtad a Yhwach y la causa de la Wandenreich lo convierten en un aliado valioso para su líder. 
                        A lo largo de la serie, se muestra que Lille tiene una gran destreza en combate a distancia, y su habilidad le permite aniquilar a sus enemigos con facilidad.
                      `,
                      "personalidad": `
                        Lille Barro es un personaje calculador y meticuloso. Aunque es extremadamente leal a Yhwach, no tiene reparos en actuar de manera fría y despiadada hacia sus enemigos. 
                        Su carácter se caracteriza por su calma y su enfoque preciso en el combate. A pesar de ser un Sternritter, no muestra mucha emoción, prefiriendo centrarse en cumplir su misión con la máxima eficiencia. 
                        Su habilidad lo convierte en un combatiente distante, prefiriendo atacar desde lejos y con precisión, lo que le otorga una ventaja en combate.
                      `,
                      "batallas": "Lille Barro vs Shunsui Kyoraku[Perdedor], Lille Barro vs Izuru Kira[Perdedor]"
                    },
                    {
                      "nombre": "Askin Nakk Le Vaar",
                      "raza": "Quincy",
                      "cumpleaños": "6 de Junio",
                      "altura": "1.87 m",
                      "peso": "No especificado",
                      "afiliacion": "Wandenreich",
                      "ocupacion": "Sternritter",
                      "shikai": "Ninguno",
                      "bankai": "Ninguno",
                      "poderes": `
                        Askin Nakk Le Vaar es uno de los Sternritter más astutos y peligrosos de la Wandenreich. Su habilidad, conocida como "The Deathdealing", 
                        le permite manipular la cantidad de "muerte" que una persona recibe, controlando así su tasa de mortalidad. 
                        Esta habilidad le permite reducir la tasa de mortalidad de sus enemigos, haciendo que se vuelvan casi invulnerables a sus ataques, 
                        o aumentarla de manera extrema, volviéndolos extremadamente vulnerables. Además, Askin es extremadamente inteligente y tiene una gran capacidad para analizar y manipular situaciones de combate.
                      `,
                      "habilidades": `
                        - The Deathdealing: La habilidad principal de Askin le permite controlar la cantidad de "muerte" que una persona recibe, 
                          lo que le da la capacidad de manipular la tasa de mortalidad de sus enemigos. 
                          Puede hacer que los enemigos se vuelvan extremadamente vulnerables o incluso curarse a sí mismo al manipular su propia tasa de mortalidad.
                        - Estrategia y manipulación: Askin es un maestro de la manipulación y la estrategia. Es capaz de analizar rápidamente las situaciones de combate 
                          y usar su habilidad de manera inteligente para obtener ventaja sobre sus oponentes.
                        - Resistencia física: Aunque no es tan conocido por su fuerza bruta, Askin tiene una resistencia notable, pudiendo soportar ataques poderosos debido a su habilidad para manipular la muerte.
                      `,
                      "nivel_de_poder": `
                        Askin Nakk Le Vaar es uno de los Sternritter más peligrosos debido a su habilidad "The Deathdealing", que le permite manipular la tasa de mortalidad de sus enemigos. 
                        Esta habilidad le da una ventaja significativa en combate, ya que puede hacer que sus oponentes sean increíblemente vulnerables o resistentes, según lo desee. 
                        A pesar de no tener una gran fuerza física en comparación con otros personajes, su habilidad lo convierte en un oponente extremadamente difícil de derrotar.
                      `,
                      "galeria": JSON.stringify([
                        "https://i.redd.it/oglq1hntyevb1.jpeg",
                        "https://static.wikia.nocookie.net/bleach/images/e/e6/BBSAskin.png/revision/latest?cb=20200808065138&path-prefix=en",
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ_1y3e-Jv-xFeKcRNF1pPm1Zyp6loZXGQhw&s",
                        "https://static.wikia.nocookie.net/mmotaku/images/b/b3/Askin.png/revision/latest?cb=20160418110526"
                      ]),
                      "historia": `
                        Askin Nakk Le Vaar es uno de los Sternritter más poderosos de la Wandenreich. A lo largo de la serie, se demuestra que es extremadamente inteligente y calculador. 
                        Su habilidad "The Deathdealing" lo convierte en un oponente formidable, ya que puede manipular la tasa de mortalidad de cualquier persona, 
                        haciendo que se vuelvan increíblemente vulnerables o resistentes según su voluntad. A pesar de su apariencia relajada, Askin es un enemigo extremadamente peligroso 
                        debido a su habilidad y su naturaleza astuta.
                      `,
                      "personalidad": `
                        Askin Nakk Le Vaar es un personaje muy inteligente y calmado. A menudo se le ve con una actitud relajada y un tono sarcástico, pero su mente es extremadamente aguda. 
                        Es un estratega nato y disfruta manipulando a sus enemigos y controlando las situaciones a su favor. A pesar de ser un Quincy leal a Yhwach, Askin tiene una personalidad algo excéntrica, 
                        y a menudo se muestra como alguien que disfruta de los desafíos y de poner a prueba a los demás. Su habilidad lo convierte en un oponente difícil de leer y aún más difícil de derrotar.
                      `,
                      "batallas": "Askin Nakk Le Vaar vs Urahara Kisuke[Perdedor]"
                    },

                    {
                      "nombre": "Pernida Parnkgjas",
                      "raza": "Quincy",
                      "cumpleaños": "No especificado",
                      "altura": "1.50 m",
                      "peso": "No especificado",
                      "afiliacion": "Wandenreich",
                      "ocupacion": "Sternritter",
                      "shikai": "Ninguno",
                      "bankai": "Ninguno",
                      "poderes": `
                        Pernida Parnkgjas es uno de los Sternritter más aterradores de la Wandenreich. Su habilidad, conocida como "The Compulsory", 
                        le permite controlar y manipular el nervio de cualquier persona que entre en contacto con su mano. 
                        Esta habilidad le otorga el poder de controlar el cuerpo de sus enemigos, provocando que se muevan según su voluntad, 
                        o incluso provocando su muerte al controlar sus nervios de manera fatal. Además, su brazo tiene la capacidad de regenerarse rápidamente, 
                        lo que lo hace muy difícil de derrotar.
                      `,
                      "habilidades": `
                        - The Compulsory: La habilidad principal de Pernida le permite manipular los nervios de cualquier ser vivo que toque, 
                          controlando su cuerpo o incluso causando su muerte al alterar sus nervios.
                        - Regeneración: Su brazo, que tiene una conexión directa con su habilidad, puede regenerarse rápidamente, lo que lo hace difícil de derrotar.
                        - Control mental: Pernida también tiene una habilidad de control mental sobre sus enemigos, controlando sus movimientos y reacciones.
                      `,
                      "nivel_de_poder": `
                        Pernida Parnkgjas es uno de los Sternritter más poderosos debido a su habilidad "The Compulsory". 
                        La capacidad de controlar el cuerpo de sus enemigos es extremadamente peligrosa, y su regeneración lo hace muy difícil de vencer. 
                        Además, su poder para controlar los nervios de sus oponentes le otorga una ventaja significativa en combate, 
                        ya que puede neutralizar a sus enemigos sin necesidad de un combate físico directo.
                      `,
                      "galeria": JSON.stringify([
                        "https://static.wikia.nocookie.net/bleach/images/6/60/Pernida_Perfil_novo.PNG/revision/latest?cb=20231014010745&path-prefix=es",
                        "https://static.wikia.nocookie.net/topstrongest/images/b/b5/Pernida12.png/revision/latest/thumbnail/width/360/height/360?cb=20210530112605",
                        "https://i.imgur.com/1SY7gQE.jpg",
                        "https://static.wikia.nocookie.net/bleach/images/4/4b/Pernida_Parnkgjas_descubierto_%28anime%29.png/revision/latest/scale-to-width-down/250?cb=20241206182243&path-prefix=es"
                      ]),
                      "historia": `
                        Pernida Parnkgjas es uno de los Sternritter más temidos debido a su habilidad para controlar los nervios de sus enemigos. 
                        A lo largo de la serie, se demuestra que es un oponente extremadamente peligroso, capaz de derrotar a sus enemigos sin necesidad de combate físico directo. 
                        Su habilidad "The Compulsory" lo convierte en una amenaza mortal, ya que puede manipular a sus enemigos a su voluntad. 
                        Aunque no tiene una gran presencia como otros personajes de la Wandenreich, su poder y habilidades lo hacen uno de los más peligrosos.
                      `,
                      "personalidad": `
                        Pernida Parnkgjas es una figura inquietante, con una personalidad que refleja su naturaleza cruel y manipuladora. 
                        A menudo se muestra calmado y calculador, disfrutando del sufrimiento de sus enemigos. 
                        Su habilidad para controlar a los demás lo hace aún más aterrador, ya que no necesita hacer mucho para destruir a aquellos que se interponen en su camino. 
                        Su presencia es ominosa, y su forma de pensar es fría y despiadada, lo que lo convierte en un enemigo aterrador.
                      `,
                      "batallas": "Pernida Parnkgjas vs Mayuri Kurotsuchi[Perdedor], Pernida Parnkgjas vs Urahara Kisuke[Perdedor]"
                    },*/
                    {
                      "nombre": "Ishin Kurosaki",
                      "raza": "Shinigami",
                      "cumpleaños": "10 de Diciembre",
                      "altura": "1.86 m",
                      "peso": "80 kg",
                      "afiliacion": "Gotei 13 (antiguo)",
                      "ocupacion": "Ex-Capitán de la 10ª División, Médico",
                      "shikai": "No especificado",
                      "bankai": "No especificado",
                      "poderes": `
                        Ishin Kurosaki es un ex-Capitán de la 10ª División del Gotei 13. Su habilidad como Shinigami le permite manipular y controlar el Reiatsu 
                        (energía espiritual) para realizar ataques poderosos. Aunque no se conocen todos los detalles de su Shikai o Bankai, su poder es considerable 
                        y se muestra que es capaz de enfrentarse a enemigos fuertes. A lo largo de la serie, se revela que tiene una conexión especial con los eventos 
                        que rodean la familia Kurosaki y el origen de Ichigo como Shinigami.
                      `,
                      "habilidades": `
                        - Habilidad con la espada: Como antiguo Capitán de la 10ª División, Ishin tiene una gran habilidad en el combate con espada.
                        - Reiatsu: Al ser un Shinigami, Ishin puede usar su Reiatsu para realizar ataques poderosos y defenderse de amenazas.
                        - Regeneración: Como Shinigami, tiene una capacidad de regeneración mejorada, lo que le permite recuperarse rápidamente de heridas.
                      `,
                      "nivel_de_poder": `
                        Ishin Kurosaki es un combatiente altamente capacitado, con un nivel de poder considerable debido a su rango como Capitán en el Gotei 13. 
                        Aunque su poder es impresionante, no se muestra completamente en la serie, ya que se mantiene en un segundo plano debido a su retiro y su rol como médico. 
                        Sin embargo, su habilidad como Shinigami y su capacidad de lucha lo convierten en un oponente formidable cuando es necesario.
                      `,
                      "galeria": JSON.stringify([
                        "https://static.wikia.nocookie.net/bleach/images/7/70/535Isshin_profile.png/revision/latest/scale-to-width/360?cb=20220625083232&path-prefix=en",
                        "https://static.wikia.nocookie.net/mangakaart/images/0/05/IsshinShinigami.jpg/revision/latest?cb=20131001190039&path-prefix=es",
                        "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dd9d7a8-dc29b71e-43f0-4c1a-adc9-f3f1adce9430.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGQ5ZDdhOC1kYzI5YjcxZS00M2YwLTRjMWEtYWRjOS1mM2YxYWRjZTk0MzAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.rFD3umN2PecCWRtoEjqV5vQwqdrpBtCIMOiJSMEEqFw",
                        "https://i.pinimg.com/736x/e3/5e/4f/e35e4f2f2d538148eb3f97c4ae35542d.jpg"
                      ]),
                      "historia": `
                        Ishin Kurosaki es el padre de Ichigo Kurosaki y un ex-Capitán de la 10ª División del Gotei 13. Tras dejar su puesto como Capitán, 
                        se traslada a Karakura Town, donde se convierte en médico. Durante años, Ishin guarda en secreto su pasado como Shinigami, 
                        protegiendo a su familia de las amenazas sobrenaturales. Su verdadera identidad como Shinigami y su relación con los eventos 
                        que rodean a Ichigo son revelados más tarde en la serie, cuando se descubre que tiene una conexión profunda con los poderes 
                        de su hijo.
                      `,
                      "personalidad": `
                        Ishin es un personaje carismático y extrovertido. Aunque es un hombre serio y dedicado a su familia, también tiene una personalidad 
                        juguetona y bromista, especialmente con sus hijos. A menudo se muestra como una figura protectora y cariñosa, pero también 
                        es un hombre de gran integridad y fuerza de voluntad. A pesar de su actitud relajada, Ishin es un hombre con una gran carga emocional 
                        debido a su pasado como Shinigami y su papel en la protección de su familia.
                      `,
                      "batallas": "Ishin Kurosaki vs Aizen Sosuke[Perdedor]"
                    },

                    {
                      "nombre": "Masaki Kurosaki",
                      "raza": "Shinigami (antiguo)",
                      "cumpleaños": "No especificado",
                      "altura": "No especificado",
                      "peso": "No especificado",
                      "afiliacion": "No especificado",
                      "ocupacion": "Madre, esposa",
                      "shikai": "No especificado",
                      "bankai": "No especificado",
                      "poderes": `
                        Masaki Kurosaki era una mujer de gran fortaleza y habilidad. Aunque no se detalla completamente en la serie, se sabe que Masaki era una 
                        Shinigami que poseía un alto nivel de poder espiritual. Su habilidad más destacada era su capacidad para defenderse de los Hollows y 
                        proteger a los demás, lo que la convirtió en una figura protectora para su familia. Además, su poder como Shinigami le permitió sellar 
                        una gran parte de su propia energía para evitar que los Hollows la detectaran.
                      `,
                      "habilidades": `
                        - Gran habilidad espiritual: Como Shinigami, Masaki poseía un alto nivel de poder espiritual, que le permitía defenderse de los Hollows.
                        - Protección: Su habilidad para proteger a sus seres queridos, especialmente a su hijo Ichigo, era una de sus mayores virtudes.
                      `,
                      "nivel_de_poder": `
                        Aunque no se muestra en su totalidad, el poder de Masaki era considerable, y se puede inferir que tenía un alto nivel de Reiatsu 
                        (energía espiritual). Masaki fue capaz de enfrentarse a Hollows poderosos, y su habilidad para sellar su poder para proteger a su familia 
                        muestra que tenía un control excepcional sobre su energía espiritual. A pesar de no ser una luchadora activa, su poder fue crucial 
                        para la protección de Ichigo en sus primeros años.
                      `,
                      "galeria": JSON.stringify([
                        "https://i.redd.it/what-are-your-honest-thoughts-about-masaki-kurosaki-v0-2thfk0otg56e1.jpg?width=1600&format=pjpg&auto=webp&s=a871fd47e9393a61edbe5f3dc602c15957917823",
                        "https://i.pinimg.com/736x/1b/ed/2a/1bed2a80b26e383bdc0b1fe971adaa0e.jpg",
                        "https://comicbook.com/wp-content/uploads/sites/4/2022/12/e0b9f6a5-2856-490f-a201-569cc92e464c.jpg",
                        "https://preview.redd.it/ylahfwtxiyqb1.jpg?auto=webp&s=e27af8050293c7e705bd9bd7ab51783193fa7169"
                      ]),
                      "historia": `
                        Masaki Kurosaki es la madre de Ichigo Kurosaki y la esposa de Isshin Kurosaki. Ella fue una Shinigami que, en su juventud, se 
                        encontró con Isshin y se enamoró de él. Durante una de sus misiones, Masaki fue atacada por un Hollow, y en un intento por salvarla, 
                        Isshin la salvó, lo que resultó en la pérdida de su poder como Shinigami. Después de este evento, Masaki se mudó a Karakura Town, 
                        donde vivió una vida normal como madre y esposa. Sin embargo, su sacrificio y su amor por su familia tuvieron un impacto duradero 
                        en Ichigo y en el destino de su hijo.
                      `,
                      "personalidad": `
                        Masaki era una mujer cálida, cariñosa y protectora. Su mayor deseo era cuidar a su familia, especialmente a su hijo Ichigo. 
                        A pesar de las tragedias que enfrentó, Masaki mantuvo una actitud positiva y amorosa hacia todos los que la rodeaban. 
                        Su personalidad se destacó por su fortaleza interior, su dedicación y su capacidad para hacer sacrificios por el bienestar de su familia.
                      `,
                      "batallas": "Masaki Kurosaki vs Hollow (Perdedora)"
                    }
                    
                    

                    

                    
                    
                    
                  
                  
                
                
          
            
          
      
      
    
    
  
  
  
  
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
