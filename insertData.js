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
        }*/
          
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
