// movies.js - Fichier contenant toutes les données des films

const movies = [
    {
        id: 40,
        title: "mother!",
        year: "2017",
        genre: ["Drame", "Horreur"],
        rating: "3",
        review: "",
        poster: "https://image.tmdb.org/t/p/original/qQ69kTStBSj5yK6kse1bzF8MTjP.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/1PZzp9LMfy9hh7q00jSczlKbdDI.jpg",
                "https://image.tmdb.org/t/p/original/9JeYbrXjnrP1dDOvxswIgaXXUKL.jpg",
                "https://image.tmdb.org/t/p/original/ezmC7E6E7djl8GPm9bH7g95lzmI.jpg"
        ],
        dateAdded: "22/08/2025"
    },
    {
        id: 39,
        title: "The Ugly Stepsister",
        year: "2025",
        genre: ["Fantaisie", "Comédie", "Drame", "Horreur"],
        rating: "2.5",
        review: "de 1 : elle est même pas moche<br>de 2 : sa daronne la pute<br>de 3 : belle bite",
        poster: "https://image.tmdb.org/t/p/original/uNc8VBHRxo9c0M2vnGS8PtihRLQ.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/eQV9rSQ6S1ja4lGTwHTnQuVhoG.jpg",
                "https://image.tmdb.org/t/p/original/5ony4q8mPMspZ0tO6eZn5bjTtEM.jpg",
                "https://image.tmdb.org/t/p/original/jMkaxw1VGQrJmTGhhAG8wINfAk8.jpg"
        ],
        dateAdded: "21/08/2025"
    },
    {
        id: 38,
        title: "Superman",
        year: "2025",
        genre: ["Science-fiction", "Action", "Aventure"],
        rating: "3.5",
        review: "Les films de super-héros ne seront jamais mes films préférés. Mais ce Superman de James Gunn est un blockbuster franchement honnête. Il filme les scènes de combat assez ingénieusement, je sais pas comment il a fait ça mais par moment on dirait que c'est pas filmé par une caméra mais par un drone, comme si on était dans l'espace en mode créatif comme sur Fortnite mdrrr. J'ai bien aimé Krypto et Green Lantern. Mais j'ai du mal avec cette légèreté, cet humour façon James Gunn. Mec si je vais voir Superman c'est pour le voir sauver le monde, pas pour me marrer",
        poster: "https://image.tmdb.org/t/p/original/ombsmhYUqR4qqOLOxAyr5V8hbyv.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/dCJbGbDv6kjIZNVTW0AHolsb6vP.jpg",
                "https://image.tmdb.org/t/p/original/eteyxgGEje1D5BPgpGsTWGevS39.jpg",
                "https://image.tmdb.org/t/p/original/1ItGGdOYifWNRJ3fNhiS9SSmdZM.jpg"
        ],
        dateAdded: "21/08/2025"
    },
    {
        id: 37,
        title: "Body Double",
        year: "1984",
        genre: ["Crime", "Mystère", "Thriller"],
        rating: "3.5",
        review: "J'ai été pris dans le film. Y'a toujours des scènes passionnantes chez De Palma, qui instaurent un tension de dingue. Dans ce film je retiens la scène du centre commercial, où Jake suit Gloria très maladroitement pour la protéger de l'indien. C'est une scène qui m'a fait penser à celle du musée de Dressed to Kill. Le film est néanmoins loin d'être parfait, kitsch par moment, la fin est rushée.<br>Body Double est un film fait par un homme, pour les hommes.",
        poster: "https://image.tmdb.org/t/p/original/3SPKa6Ie4eh4DoZ6Ctlu7HMQCW2.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/p0ork5YUlCjn967w2fR1XlMdvbs.jpg",
                "https://image.tmdb.org/t/p/original/8MZgK43QgU9OWdqZhNfMNaqKTVQ.jpg",
                "https://image.tmdb.org/t/p/original/znunBeRD79Sm8wGFBXnIaLpeS4D.jpg"
        ],
        dateAdded: "20/08/2025"
    },
    {
        id: 36,
        title: "Le Voyage dans la Lune",
        year: "1902",
        genre: ["Science-fiction", "Aventure"],
        rating: "",
        review: "J'ai demandé à ChatGPT \"donne moi une liste de films à regarder pour aborder chaque époque du cinéma\" et c'est le deuxième film qu'il m'a proposé. Chaque fois je me dis qu'à l'époque ils ont dû péter leur crâne en voyant ça. J'ai été surpris par l'inventivité des effets spéciaux et je me demande comment ils ont fait. Apparemment, c'est le premier film de science-fiction de l'histoire du cinéma.",
        poster: "https://image.tmdb.org/t/p/original/3jD6TlobtVWK5jDUCyPGy6nEzm4.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/g67r1eiQD3ERSEQFCFkSn7TeGw5.jpg",
                "https://image.tmdb.org/t/p/original/kJSnhBQZyCcbqxMZJuDby8ULcfS.jpg",
                "https://image.tmdb.org/t/p/original/jeC1kzwWnZTuXl7xF4E5D70BD8c.jpg"
        ],
        dateAdded: "20/08/2025"
    },
    {
        id: 35,
        title: "Dressed to Kill",
        year: "1980",
        genre: ["Horreur", "Crime", "Drame", "Mystère", "Thriller"],
        rating: "4",
        review: "J'ai beaucoup aimé ce thriller de Brian De Palma. L'affiche originale du film le vend comme un \"maitre du macabre\" mais pour moi il est davantage maitre du suspense. C'est pas pour rien si Hitchcock est cité comme une de ses influences majeures. La scène d'ouverture est incroyable bien que très male gaze orientée. La scène dans le musée n'est pas sans rappeler celle de Vertigo. J'ai été surpris que le personnage d'Angie Dickinson meure aussi tôt dans le film. Et puis cette scène de fin m'a donné la boule au ventre, c'était vraiment magistral au niveau de la tension que ça a instauré en moi. Le plot twist, avec du recul, était prévisible mais j'ai été pris au dépourvu.",
        poster: "https://image.tmdb.org/t/p/original/oy1m5dd44foNrxV8U9l6Walx82V.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/nXrKxxCG6zHh3fNPhEGcZ685bSR.jpg",
                "https://image.tmdb.org/t/p/original/nZK1ef05i7fk5FFKtsnwvHbnQnp.jpg",
                "https://image.tmdb.org/t/p/original/wmHfg56pvzmLCXz5Gs9D7d5rjvG.jpg"
        ],
        dateAdded: "19/08/2025"
    },
    {
        id: 34,
        title: "Carne",
        year: "1991",
        genre: ["Thriller", "Drame", "Crime"],
        rating: "2.5",
        review: "Un petit visionnage de ce moyen-métrage de Gaspar Noé pour passer le temps et pour compléter sa filmographie. C'est du Noé tout craché, bien pessimiste, bien trash, bien dérangeant. J'ai kiffé la mise en scène comme toujours avec Noé, et aussi l'acting de Nahon et sa voix off. Mais l'histoire m'a complétement laissé de marbre. Il existe une suite à ce moeyn-métrage : Seul contre Tous. Je pense qu'il faut l'avoir vue pour mieux apprécier Carne.",
        poster: "https://image.tmdb.org/t/p/original/7QNHk05hoi3dXaLFiZyXoj1I81b.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/rz66efamwtqajULRptXu19NcRk3.jpg",
                "https://image.tmdb.org/t/p/original/oUCzTZZSOJVITZF8LvEfvkGOCz8.jpg",
                "https://image.tmdb.org/t/p/original/zoObBpr4g2xeCnEWNxvlrBpGY3B.jpg"
        ],
        dateAdded: "19/08/2025"
    },
    {
        id: 33,
        title: "Fear and Desire",
        year: "1952",
        genre: ["Guerre", "Drame", "Thriller"],
        rating: "2",
        review: "Premier film de Kubrick. On ressent sur quelques images son passé de photographe, mais on ressent surtout le petit budget de ce film. Kubrick de son vivant à lui-même voulu interdire la diffusion de ce film qu'il jugeait prétentieux.",
        poster: "https://image.tmdb.org/t/p/original/mj7CDh6d5nJDDmEhd0ft6s3L8CM.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/e3o0Dwlzzpd4kJpOOJgVyMstnII.jpg",
                "https://image.tmdb.org/t/p/original/weKbLiUJQpiFt8hSHHxvZeRJMYG.jpg"
        ],
        dateAdded: "19/08/2025"
    },
    {
        id: 32,
        title: "Carrie",
        year: "1976",
        genre: ["Horreur", "Thriller"],
        rating: "4",
        review: "J'ai adoré ce film, adapté du premier roman de Stephen King. Le problème c'est que du début jusqu'au bal, même si c'est important pour la construction de l'histoire, bah j'en ai rien à foutre quoi. Alors que la suite est vraiment géniale, la scène du bal et la suite... Cette photo, ce split screen, ce sang partout sur Carrie, c'est exceptionnel. Supplément je me suis chié dessus à la fin !",
        poster: "https://image.tmdb.org/t/p/original/uc3OvgmbnYaS5Y0BOjSmC1EmSz1.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/zwJFfKQdfiptK2GY6N8GkZFrAxJ.jpg",
                "https://image.tmdb.org/t/p/original/eMSRztuWq9q0vKp3oKakNpXgbtI.jpg",
                "https://image.tmdb.org/t/p/original/bQYbSBVLPZo5sV9hDbSAs509Kv3.jpg"
        ],
        dateAdded: "18/08/2025"
    },
    {
        id: 31,
        title: "The Birth of a Nation",
        year: "1915",
        genre: ["Drame", "Histoire", "Guerre"],
        rating: "1",
        review: "J'ai demandé à ChatGPT \"donne moi une liste de films à regarder pour aborder chaque époque du cinéma\" et c'est le troisème film qu'il m'a proposé. C'est moche, long et raciste, mais c'est le premier blockbuster de l'histoire du cinéma.",
        poster: "https://image.tmdb.org/t/p/original/f9MkgI1ObRVvJwWgJyWtRbgyWng.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/4H4RAeeykpi0ijvu3wYgV346y06.jpg",
                "https://image.tmdb.org/t/p/original/qha83S6AjcUIj4F86cM8UqJVcSl.jpg",
                "https://image.tmdb.org/t/p/original/zuAZhhkNxMl7pgnWYgwbTbUTfIN.jpg"
        ],
        dateAdded: "17/08/2025"
    },
    {
        id: 30,
        title: "Still Alice",
        year: "2014",
        genre: ["Drame"],
        rating: "3.5",
        review: "Un très beau film qui aborde la maladie d'Alzheimer avec justesse. C'est honnêtement difficile à regarder. Les films sur les maladies c'est vraiment mon point faible dans le sens où j'y suis très sensible. J'ai beaucoup aimé la performance de Julianne Moore, les prix qui lui ont été decernés sont mérités. Par contre, j'ai un problème avec la photo de ce film : les couleurs sont tres réelles comme si rien avait été retouché, un peu téléfilmique. C'est sûrement voulu par avoir un côté réaliste, et montrer qu'Alzheimer est une maladie qui touche tout le monde.",
        poster: "https://image.tmdb.org/t/p/original/MeJJCT1o87j7D0mR3yQs4s4PIA.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/cWMeHXEGeZ8cjEOmznjVGr04Ofu.jpg",
                "https://image.tmdb.org/t/p/original/tw1IZuR6GVlSL4aqfsmLFfUJAN9.jpg",
                "https://image.tmdb.org/t/p/original/k4Uki0zmlCt52EcKslb20D6DLYs.jpg"
        ],
        dateAdded: "17/08/2025"
    },
    {
        id: 29,
        title: "L'Arrivée d'un train en gare de La Ciotat",
        year: "1896",
        genre: ["Documentaire"],
        rating: "",
        review: "J'ai demandé à ChatGPT \"donne moi une liste de films à regarder pour aborder chaque époque du cinéma\" et c'est le premier film qu'il m'a proposé.",
        poster: "https://image.tmdb.org/t/p/original/y3A15HpugKsPjVyxKa9POLTEX6B.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/kLDi7ST92diaAzISLgd94BYO6Zw.jpg",
                "https://image.tmdb.org/t/p/original/aLTxu9EiQ1EQ69qDUVE4Q5dtNfG.jpg",
                "https://image.tmdb.org/t/p/original/uusNog5m2aCuL53rrKw8RaBnprb.jpg"
        ],
        dateAdded: "16/08/2025"
    },
    {
        id: 28,
        title: "Companion",
        year: "2025",
        genre: ["Thriller", "Science-fiction", "Horreur"],
        rating: "2.5",
        review: "Je commence à en avoir marre des films que ne se prennent pas au sérieux avec des personnages clichés qui font des vannes de merde. Les trois quarts du scénario sont franchement prévisibles. On dirait un épisode de Black Mirror un peu long et chiant. C'est pas mauvais, mais c'est pas bon non plus.",
        poster: "https://image.tmdb.org/t/p/original/oCoTgC3UyWGfyQ9thE10ulWR7bn.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/9p2tVEEWw1M92Pt63Vbq7EjBpvk.jpg",
                "https://image.tmdb.org/t/p/original/hG7IQooYB6uZAqUD1fbZ5pjS1It.jpg",
                "https://image.tmdb.org/t/p/original/xtzDFcniq3RpmptnClDdi5NhcBD.jpg"
        ],
        dateAdded: "16/08/2025"
    },
    {
        id: 27,
        title: "The Shawshank Redemption",
        year: "1994",
        genre: ["Crime", "Drame"],
        rating: "4.5",
        review: "Rares sont les films qui me captivent du début à la fin. La narration est parfaite, les acteurs aussi (que ce soit les rôles principaux comme secondaires). Je pense que ma naïveté m'a en quelque sorte aidé à aimer ce film : j'ai été surpris lors de plusieurs scènes (l'assassinat de Tommy Williams, l'évasion d'Andy). On explore aussi dans ce film le meilleur de l'être humain avec cette amitié entre prisonniers, mais aussi ses plus sombres recoins avec ce directeur froid et corrompu brillamment interprété par Bob Gunton. Ce film aborde beaucoup d'aspect important de la vie avec brio et justifie selon moi ses nombreuses places dans les classements des meilleurs films de tous les temps.",
        poster: "https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/gZMgEUYbh0DIBNaRJT0ofxLDJ5T.jpg",
                "https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
                "https://image.tmdb.org/t/p/original/gNCqY2Y6e3wV8cnSVy4Xqpdl6oE.jpg"
        ],
        dateAdded: "16/08/2025"
    },
    {
        id: 26,
        title: "Sentimental Value",
        year: "2025",
        genre: ["Comédie", "Drame"],
        rating: "4.5",
        review: "Vu en avant-première au Majestic de Lille. Un film très juste qui parle d'une famille dont le père et réalisateur et la fille comédienne. Cette première scène qui nous met dans le contexte de cette maison à travers la rédaction d'une fille de 6 ans, la maison pleine de fissures, comme pour montrer les liens familiaux rompus. Et puis le père qui débarque et propose son scénario à sa fille, qui est en pleine dépression. C'était très touchant, on ressent la fibre artistique de Joachim Trier, ces plans sur la maison, les paysages... Et puis cette fin en apothéose, le souffle coupé. Ptit bonus pour apprécier encore plus ce film, le duo Renate Reinsve et Anders Danielsen Lie.",
        poster: "https://image.tmdb.org/t/p/original/pz9NCWxxOk3o0W3v1Zkhawrwb4i.jpg",
        images: [
                "https://image.tmdb.org/t/p/original/xeSjPJNREAxt1W7RqYPsd1t4kB6.jpg",
                "https://image.tmdb.org/t/p/original/t8U1eS9zbKSSN3JtjzKWo46uRys.jpg",
                "https://image.tmdb.org/t/p/original/o6c4TQsnZilCFuQExQuRkF2letr.jpg"
        ],
        dateAdded: "14/08/2025"
    },
    {
        id: 1,
        title: "Les Olympiades",
        year: "2021",
        genre: ["Drame", "Romance"],
        rating: "4.5",
        review: "C'est le premier film d'Audiard que je vois et j'ai énormément aimé ce film. Bon, déjà il est tourné à Paris dans un quartier que j'apprécie (bien que je n'y sois jamais allé) donc ça biaise déjà un peu mon avis, mais c'est surtout ses personnages qui sont magiques. On y suit Émilie, qui rencontre Camille, qui est attiré par Nora, qui elle-même croise le chemin de Amber (ouais c'est le synopsis sur Google j'avoue). J'avais l'impression d'être avec eux tout le film, envie de me battre pour leurs relations. Ils sont trop attachants quoi. Et puis je sais pas pourquoi j'aime autant le noir et blanc sur ce film, j'pense qu'il aurait eu une saveur différente en couleurs. Sans oublier la BO de Rone qui est elle aussi formidable.",
        poster: "https://image.tmdb.org/t/p/original/1ooaGiLir0fNO7jA30A6Jc2DELB.jpg",
        images: ["https://image.tmdb.org/t/p/original/99ELcYVIWtbNeP9qH4Ae6o3VAtn.jpg", "https://image.tmdb.org/t/p/original/diVh124ydoB2lKdT0ce3QjlSnlD.jpg", "https://image.tmdb.org/t/p/original/zME9UTHJ3KTP0v0oekG6bJ5t46I.jpg"],
        dateAdded: "12/07/2025"
    },
    {
        id: 2,
        title: "F1® The Movie",
        year: "2025",
        genre: ["Drame", "Action"],
        rating: "3.5",
        review: "J'y suis allé sans trop de hype, n'ayant vu aucun film de Kosinski et n'étant pas aficionado de Formule 1. Ma critique va être courte : ce film ne réinvente pas les blockbusters hollywoodiens, et c'est assez dommage vu son budget FARAMINEUX (300 millions de dollars)... Au programme : des allures de pubs pour un nombre indécent de marques, un scénario cliché vu et revu, mais des scènes immersives, rythmées et franchement plaisantes qui sauvent clairement ce film.",
        poster: "https://image.tmdb.org/t/p/original/6H6p82aWQFEKEuVUiZll6JxV8Ft.jpg",
        images: ["https://image.tmdb.org/t/p/original/MmqjopsTVKxSJodljLZZhMoFij.jpg", "https://image.tmdb.org/t/p/original/bPU53xe7pM3R3eQGfcW0VrDTfIC.jpg", "https://image.tmdb.org/t/p/original/cwDyYOuMFQmnEbF2rIxDBYfKeH5.jpg"],
        dateAdded: "13/07/2025"
    },
    {
        id: 3,
        title: "Alvin and the Chipmunks",
        year: "2007",
        genre: ["Fantaisie", "Comédie", "Famille"],
        rating: "4",
        review: "Ça faisait énormément de temps que j'avais pas vu ce film qui est un de mes films d'enfance préféré. Bon ça reste un film pour enfant donc c'est pas très poussé mais j'ai été agréablement surpris de ce re-visionnage. Ils sont vraiment trop adorables ces Chipmunks !! Le moment où Alvin regarde la femme de ménage avec des yeux de zinzin mental et qu'il enchaine avec les 'méga ROCKSTARRR' sous hélium ça me tabasse toujours plus de rire... Bref ça reste un excellent film pour les gosses et un coup de coeur pour moi !",
        poster: "https://image.tmdb.org/t/p/original/22YxmH8FHZGEVyBgKBNorVF4cqi.jpg",
        images: ["https://image.tmdb.org/t/p/original/zjz0bgfTIBExiGV78zvpH9Fg9mw.jpg", "https://image.tmdb.org/t/p/original/7iA7aIxupliBgAfIf4LHZQeaLUi.jpg", "https://image.tmdb.org/t/p/original/i3MoCylLd3D5GComRl3yEF1X9nF.jpg"],
        dateAdded: "15/07/2025"
    },
    {
        id: 4,
        title: "Before Sunrise",
        year: "1995",
        genre: ["Romance", "Drame"],
        rating: "3.5",
        review: "Second visionnage pour ma part, premier pour Shelby. Je pense sincèrement que ce film est légèrement sur-côté. C'est super bien écrit il faut l'admettre, mais c'est un peu long par moment, ça manque de peps... Ceci dit je comprends que certains l'élèvent au rang de chef-d'oeuvre et s'identifient voire se projettent à la place des protagonistes. Il faudrait que je revoie Before Sunset pour savoir lequel des deux je préfère.",
        poster: "https://image.tmdb.org/t/p/original/aZ2Vkrc4RqIjewYbmfy74oDgZfX.jpg",
        images: ["https://image.tmdb.org/t/p/original/cgnAVaq85tsCFr4IbNPACIuGCwP.jpg", "https://image.tmdb.org/t/p/original/yFBMRiEnDFfSirVRZI43JUwtxjP.jpg", "https://image.tmdb.org/t/p/original/fi4dycEE0IoIW827ikWJ7MFTCry.jpg"],
        dateAdded: "17/07/2025"
    },
    {
        id: 25,
        title: "Forrest Gump",
        year: "1994",
        genre: ["Drame", "Romance", "Comédie"],
        rating: "4.5",
        review: "Revisionnage de ce film magique. C'est plein d'espoir, d'amour, de joie et de tristesse. Comment ne pas aimer ce personnage emblématique qu'est Forrest Gump ?",
        poster: "https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        images: ["https://image.tmdb.org/t/p/original/mzfx54nfDPTUXZOG48u4LaEheDy.jpg", "https://image.tmdb.org/t/p/original/6VcfHAdYmdYgSm6ynqREu0NAAlJ.jpg", "https://image.tmdb.org/t/p/original/buJOnU5FK6iIXL0iQIRfgbl5dsH.jpg"],
        dateAdded: "14/08/2025"
    },
    {
        id: 24,
        title: "The Last Stop in Yuma County",
        year: "2023",
        genre: ["Drame", "Thriller", "Crime"],
        rating: "4",
        review: "Voilà un film bien sympathique, l'esthétique aux allures frères Coen ou Tarentino, bien américaine du désert et des diners me plait toujours autant. J'adore les films qui instaurent une tension comme celle-ci, sans pour antant se prendre trop au sérieux. Des personnages débarquent dans l'intrigue et viennent ajouter du peps au film (les deux jeunes qui veulent voler l'argent, les deux parents qui se retrouvent au mauvais endroit au mauvais moment). Premier long métrage du réalisateur, ça promet de bonnes choses pour la suite de sa carrière.",
        poster: "https://image.tmdb.org/t/p/original/eMcX2kXKrZwFJkRKYXPS2vJZDLX.jpg",
        images: ["https://image.tmdb.org/t/p/original/cxQlNtN1CMOsvh4UpqyhUaxvezM.jpg", "https://image.tmdb.org/t/p/original/5CCknOKFsI8tuHSdNP923RdaxDI.jpg", "https://image.tmdb.org/t/p/original/5gyGdmgDvBf0UCWsWNvRSCs9430.jpg"],
        dateAdded: "13/08/2025"
    },
{
        id: 23,
        title: "Eddington",
        year: "2025",
        genre: ["Comédie", "Western", "Crime"],
        rating: "3.5",
        review: "Je me suis un peu ennuyé sur le début du film et j'ai cru que ça allait être très long, ça a commencé à être mieux à partir du moment où Joe se présente en tant que candidat au maire. S'en suit un enchainement d'évènements qui me maintiennent dans le film (la manif et les accusations à l'encontre de Ted, le renoi qui découvre que sa meuf le trompe...). Et pour finir la fin beaucoup plus sombre. Tout ça donne un mélange des genres un peu fouillis, loin d'être mauvais (à mon goût en tout cas). Mention spéciale au zeub de Joaquin Phoenix",
        poster: "https://image.tmdb.org/t/p/original/4GIqZUgPZ146BhibsPHMHef2nXX.jpg",
        images: ["https://image.tmdb.org/t/p/original/znr3SYHph3FtTLpcFTeuMAAJ5mP.jpg", "https://image.tmdb.org/t/p/original/kBCV9WMt5xtuWTrVeE2bgXTiLMp.jpg", "https://image.tmdb.org/t/p/original/1oUXptyl0prDh8JnTNilg4IoSDd.jpg"],
        dateAdded: "13/08/2025"
    },
{
        id: 22,
        title: "For All Mankind",
        year: "1989",
        genre: ["Documentaire"],
        rating: "",
        review: "C'était magnifique. Que tous les platistes et autres complotistes aillent se faire foutre, moi je préfère y croire. Se dire que toutes les images de ce documentaires sont réelles c'est exceptionnel. Et ça fait plus de 50 ans qu’on y est pas retourné.",
        poster: "https://image.tmdb.org/t/p/original/7k8ylisWiEGxdRSlAf6v4PWiAjH.jpg",
        images: ["https://image.tmdb.org/t/p/original/lFvpmUBmVBI2BxD9AZt4Rzx18m2.jpg", "https://image.tmdb.org/t/p/original/7AgPZV34QJYiasClUJvv684HsE9.jpg", "https://image.tmdb.org/t/p/original/p4ufwcgEgEFI9qPFRim9g8gX5sJ.jpg"],
        dateAdded: "12/08/2025"
    },
{
        id: 21,
        title: "Perfect Blue",
        year: "1997",
        genre: ["Thriller", "Animation", "Horreur"],
        rating: "4",
        review: "Découverte de l'univers de Satoshi Kon. À la base je suis pas très féru d'anime donc je suis un peu réticent sur ce que je m'apprête à voir. Que dire... c'était très beau à voir, y'a des scènes que je ne suis pas près d'oublier, les transitions entre scènes sont magnifiques. La musique est trop cool aussi (mention spéciale pour Angel of Love). Par contre, le film m'a vraiment beaucoup trop perdu (c'est volontaire) et je pense qu'un second visionnage m'aidera à l'apprécier encore plus.",
        poster: "https://image.tmdb.org/t/p/original/79vujbsWEbX4dzffBV541QXN6sf.jpg",
        images: ["https://image.tmdb.org/t/p/original/1YRtgjLb5xxUb2rsNRnr54Oc0B2.jpg", "https://image.tmdb.org/t/p/original/A1Larywbw79kZQqkvCEiPHJqdLN.jpg", "https://image.tmdb.org/t/p/original/ns4vN9p3Z0inYlhh4q9vYXUw3zp.jpg"],
        dateAdded: "12/08/2025"
    },
{
        id: 20,
        title: "The Worst Person in the World",
        year: "2021",
        genre: ["Drame", "Romance", "Comédie"],
        rating: "5",
        review: "",
        poster: "https://image.tmdb.org/t/p/original/4dF5NT1dxw4CItns4ckXq4309bg.jpg",
        images: ["https://image.tmdb.org/t/p/original/iTPTdfEGYGwbELLLvNnmgKZpVZj.jpg", "https://image.tmdb.org/t/p/original/9BtirwHb53R2cdTZkXvnWTK4BFN.jpg", "https://image.tmdb.org/t/p/original/wWS3mz59AfgqjFCkxC4d87WGtyS.jpg"],
        dateAdded: "11/08/2025"
    },
{
        id: 19,
        title: "Funny Games",
        year: "1997",
        genre: ["Thriller", "Horreur", "Drame"],
        rating: "5",
        review: "Exceptionnel, je ne connaissais pas les intentions du réalisateur donc j'ai été très agréablement surpris par ce Funny Games qui refuse de respecter les codes du film d'horreur. On se sent complètement impuissant face à ces 2 psychopathes qui brisent même le quatrième mur en s'adressant au spectateur. Je suis resté bouche bée face à ce plan terrifiant de l'enfant mort. Ce film va sans doute grandir en moi au fil du temps. Et hâte de voir le remake de 2007 !",
        poster: "https://image.tmdb.org/t/p/original/2o0gAuHWIga8QXMt5X1IAOhrlgI.jpg",
        images: ["https://image.tmdb.org/t/p/original/9V4CYXdqoL3wblvxoKCZrrPvdmF.jpg", "https://image.tmdb.org/t/p/original/9cOWevA6ofoGGcZbQ7PUqUav2YK.jpg", "https://image.tmdb.org/t/p/original/piylt6C91KukjOGEF7wAsvIPVfJ.jpg"],
        dateAdded: "11/08/2025"
    },
{
        id: 18,
        title: "Triangle of Sadness",
        year: "2022",
        genre: ["Drame", "Comédie"],
        rating: "4",
        review: "J'avais déjà entendu parler de ce film mais jamais pour ce qu'il raconte, juste car il a eu la Palme d'Or en 2022. Et c'est mon premier film de Ruben Östlund. Véritable critique de la richesse et du pouvoir, cette comédie satirique est pour moi à séparer en 2 parties : la première, du début du film jusqu'à l'explosion du yacht, qui est absolument réussie, drôle et jouissive. Un film me fait rarement rire à ce point, et je pense que la scène du diner est une des meilleures scènes de cinéma que j'ai pu voir. En revanche, sa deuxième partie contraste totalement avec la première. On s'ennuie à mourir, plus rien n'est subtil. En même temps, il est dur de conserver un bon rythme après la folie du premier acte.",
        poster: "https://image.tmdb.org/t/p/original/k9eLozCgCed5FGTSdHu0bBElAV8.jpg",
        images: ["https://image.tmdb.org/t/p/original/s9c1FjUgw5jHxzW55fbQDUy92Di.jpg", "https://image.tmdb.org/t/p/original/rsKwebbUaPeSJkvqKpWXzh2Y9bJ.jpg", "https://image.tmdb.org/t/p/original/raxZjGemtmLio1EqnWQBP3PKZ8o.jpg"],
        dateAdded: "10/08/2025"
    },
{
        id: 17,
        title: "Les Vacances de Ducobu",
        year: "2012",
        genre: ["Comédie"],
        rating: "",
        review: "En vrai faut aller voir ma review de L'Élève Ducobu parce que j'en pense exactement la même chose !",
        poster: "https://image.tmdb.org/t/p/original/jl6Ze8DRXsm3vCgwajJ0cpRsjh3.jpg",
        images: ["https://image.tmdb.org/t/p/original/1ESciDN81pKupe1Gb8rmWhmYzKr.jpg", "https://image.tmdb.org/t/p/original/6n51YIizUggEvEWNAx04j73t52A.jpg"],
        dateAdded: "09/08/2025"
    },
{
        id: 16,
        title: "L'Élève Ducobu",
        year: "2011",
        genre: ["Comédie"],
        rating: "",
        review: "Je ne peux pas donner de note à ce film car si je notais l'aspect technique, ce serait vraiment méchant, mais si je notais l'aspect émotion ce serait trop gentil. Comme Alvin et les Chipmunks, c'est un de mes films d'enfance préférés donc c'est difficile d'être objectif. Bref j'adore ce film, mais j'en vois tous les défauts maintenant que j'ai grandi. (et Élie Semoun est toujours trop drôle)",
        poster: "https://image.tmdb.org/t/p/original/piVjl9Xhd6xeYxJnm7ifJaURjHd.jpg",
        images: ["https://image.tmdb.org/t/p/original/obP94bLjEXGFWQumzkKlBb9Fmzi.jpg", "https://image.tmdb.org/t/p/original/wG5bBiSggTYy9Z4paW6OVTF39Ai.jpg", "https://image.tmdb.org/t/p/original/gt8mBAcr1QDKDgiDRep1yo0589i.jpg"],
        dateAdded: "08/08/2025"
    },
{
        id: 15,
        title: "Titane",
        year: "2021",
        genre: ["Thriller", "Horreur", "Drame", "Science-fiction"],
        rating: "3",
        review: "C'est rare un film qui me laisse dubitatif à ce point... D'un côté j'ai adoré et de l'autre j'ai trouvé ça mid. J'ai adoré l'esthétique, les idées sont originales et géniales, tellement cheloues que ça en devient limite drôle. On est servi côté body horror... Mais le rythme est si mauvais, y'a vraiment 2 parties distinctes qui ne se ressemblent pas vraiment. C'est un film tout ou rien que certains vont adorer et d'autres détester.",
        poster: "https://image.tmdb.org/t/p/original/y93w5MGC9fbXjy1qfN6rUpSbBti.jpg",
        images: ["https://image.tmdb.org/t/p/original/dVOlJVHYRWx7DhMQRNLnbf5bT1q.jpg", "https://image.tmdb.org/t/p/original/x3UVh44oov4LGkAg2zVFXoPeYra.jpg", "https://image.tmdb.org/t/p/original/yJrdLTvXlwjUJ5l7dzrhCqznT8p.jpg"],
        dateAdded: "06/08/2025"
    },
{
        id: 14,
        title: "The Hunger Games",
        year: "2012",
        genre: ["Action", "Science-fiction", "Aventure"],
        rating: "4",
        review: "J'ai toujours du mal à me lancer dans les sagas de ce type par peur de rien comprendre au début (on te plonge dans un univers inconnu, pour ça que j'ai toujours pas vu LOTR, X-Men etc). Au final faut vraiment que je me force parce que y'a rien de compliqué à comprendre. J'ai même apprécié l'univers de Hunger Games et son concept qui m'a fait penser au Battle Royale de Kinji Fukasaku. Le temps passe vite devant, pour moi c'est un bon blockbuster. Ma note est biaisée du fait de Jennifer Lawrence qui est encore merveilleuse...",
        poster: "https://image.tmdb.org/t/p/original/yXCbOiVDCxO71zI7cuwBRXdftq8.jpg",
        images: ["https://image.tmdb.org/t/p/original/p2i9vE7mu2ZTmwYbEiimgHeKpq5.jpg", "https://image.tmdb.org/t/p/original/zqAtFrTmauJGRbqrL0XoENa2eL.jpg", "https://image.tmdb.org/t/p/original/6eBrmKCfXDAa9poRDjJBkTOh8nF.jpg"],
        dateAdded: "05/08/2025"
    },
{
        id: 13,
        title: "Secretary",
        year: "2002",
        genre: ["Comédie","Romance", "Drame"],
        rating: "2.5",
        review: "En fait j'avais pas vu que c'était une comédie du coup j'ai pris le film ultra au sérieux... Je me suis demandé pourquoi tous les persos étaient cons comme des bites, surtout Peter ahahahah alors lui... En vrai y'a pas grand chose à dire, ça m'a pas fait rire du tout mais je comprends la démarche. Pour moi c'est l'équivalent d'une dark romance de con. J'ai pas aimé mais j'ai pas détesté.",
        poster: "https://image.tmdb.org/t/p/original/dvnMdPlMEJUcw7nhWqjQvAaU3pK.jpg",
        images: ["https://image.tmdb.org/t/p/original/zdO5bRyzhQESwNBbGMPjrDNPiU5.jpg", "https://image.tmdb.org/t/p/original/eBSQ74Vgr9dsBTxhXglAXfEdaER.jpg", "https://image.tmdb.org/t/p/original/uenadEfqtjZOu83dp9igzj0P2i3.jpg"],
        dateAdded: "04/08/2025"
    },
{
        id: 12,
        title: "The Worst Person in the World",
        year: "2021",
        genre: ["Drame", "Romance", "Comédie"],
        rating: "5",
        review: "Ce film m'intriguait déjà depuis pas mal de temps, et en étant 95ème dans le top 100 des meilleurs films du 21ème siècle du New York Times, il m'a intrigué encore plus. Mes seules expériences du cinéma scandinave était Lars Von Trier et Thomas Vinterberg, réalisateurs que j'admire beaucoup. Cette fois-ci, c'est Joachim Trier qui tape dans le mille avec The Worst Person In The World. Un film émouvant qui dépeint les ressentis et émotions de Julie, une jeune femme qui navigue dans les eaux troubles de sa vie amoureuse et professionnelle. J'aime cette réalisation parfois osée et originale qui donne vie à un scénario simple qui peut parler à pas mal de monde. On parle de Renate Reinsve comme porteuse de ce film (c'est le cas), mais j'ai aussi aimé le rôle des deux hommes, particulièrement Anders Danielsen Lie.",
        poster: "https://image.tmdb.org/t/p/original/4dF5NT1dxw4CItns4ckXq4309bg.jpg",
        images: ["https://image.tmdb.org/t/p/original/iTPTdfEGYGwbELLLvNnmgKZpVZj.jpg", "https://image.tmdb.org/t/p/original/9BtirwHb53R2cdTZkXvnWTK4BFN.jpg", "https://image.tmdb.org/t/p/original/wWS3mz59AfgqjFCkxC4d87WGtyS.jpg"],
        dateAdded: "03/08/2025"
    },
{
        id: 11,
        title: "Dìdi (弟弟)",
        year: "2024",
        genre: ["Drame","Comédie"],
        rating: "3.5",
        review: "J'avais vu par hasard une bande-annonce de ce film qui m'a donné envie de le voir. Premier film du réalisateur Sean Wang, Dìdi est un bon coming-of-age movie. Ceux qui avaient l'âge du protagoniste en 2008 ont dû être ravis de voir revivre cette époque sur grand écran. J'ai beaucoup aimé la relation entre Didi et sa soeur, je m'y suis beaucoup retrouvé et je trouve que c'était assez pertinant. On ne se concentre pas seulement sur les amitiés et amours de Didi, mais aussi sur sa famille et ses doutes.",
        poster: "https://image.tmdb.org/t/p/original/dg151xqjJdecw7biwl9UtG1RMui.jpg",
        images: ["https://image.tmdb.org/t/p/original/2Bii9A3IibMrzmYOahsbC5hUMUm.jpg", "https://image.tmdb.org/t/p/original/bdLqdbLwkbjUWTioGhnfSro0bX7.jpg", "https://image.tmdb.org/t/p/original/kL611ECn9BAIBOiL120NzAhfXGm.jpg"],
        dateAdded: "01/08/2025"
    },
{
        id: 10,
        title: "Knock Knock",
        year: "2015",
        genre: ["Crime", "Horreur", "Thriller"],
        rating: "1",
        review: "Le plot : 2 femmes perdues sous la pluie viennent trouver refuge chez un père de famille seul pendant une soirée de fêtes des pères et tentent de le séduire. Évidemment j'ai regardé ce film pour Ana de Armas. J'avais vu passer sur les réseaux la scène où elles sonnent chez Keanu Reeves en mode bimbo... Bon le film est malsain, y'a des imitations d'inceste je sais pas c'était quoi le but, ils sont tous teubés. A la fin elles disent 'on est pas des assassins' (elles ont tué un boug la veille). Enfin bref Eli Roth je t'aimais bien en tant qu'acteur dans Inglourious Basterds mais lâche cette caméra. Keanu Reeves était sûrement en manque de thunes pour jouer là-dedans...",
        poster: "https://image.tmdb.org/t/p/original/cUC4rUb1Cs2KMaZ6RD4uYUEEwls.jpg",
        images: ["https://image.tmdb.org/t/p/original/nJkp7hYKScmvQuqfptIIclFxZ94.jpg", "https://image.tmdb.org/t/p/original/3tTG8eHmOY9Ic6F5tLYRmDXCLOc.jpg", "https://image.tmdb.org/t/p/original/5Kj4ngQ5u8p8tJzgi62yJQ3t9s9.jpg"],
        dateAdded: "01/08/2025"
    },
{
        id: 9,
        title: "Yes Man",
        year: "2008",
        genre: ["Romance", "Comédie"],
        rating: "3.5",
        review: "Second visionnage de ce film qui m'avait de mémoire moins marqué que Liar Liar. C'était bien drôle à regarder en couple, Jim Carrey est trop fort comme toujours. Maintenant j'ai envie de dire 'oui' plus souvent et d'être plus ouvert. Par contre, la relation entre Jim Carrey et Zooey Deschanel est un peu courte, j'aurais aimé qu'ils la développent un peu plus.",
        poster: "https://image.tmdb.org/t/p/original/16zVbgFLTUaUTG1wQHuGjfWNuDM.jpg",
        images: ["https://image.tmdb.org/t/p/original/84fH2grzA1OlrrkcNFAv9OcEiap.jpg", "https://image.tmdb.org/t/p/original/lLN18qqSVYXAD3lSvpTdF7N5cl2.jpg", "https://image.tmdb.org/t/p/original/cuTnu0MVUuzNAYA3BbCmsNn26Lr.jpg"],
        dateAdded: "01/08/2025"
    },
{
        id: 8,
        title: "Vertigo",
        year: "1958",
        genre: ["Thriller", "Mystère", "Romance"],
        rating: "4",
        review: "Alors j'ai pris des notes en découvrant ce classique et ça ressemble à ça : - C'est beau ptn - J'adore le vistavision - À donné son nom à une technique de ciné - J'attends d'être surpris - Surpris par le bisou wow absolute cinema - OMG le plot twist après ces 45min d'absolute cinéma - wtf la fin ??? - Et avec du recul j'ai adoré beaucoup de choses, notamment la scène dans la foret de séquoia, et ce plan de profil sur Kim Novak...",
        poster: "https://image.tmdb.org/t/p/original/15uOEfqBNTVtDUT7hGBVCka0rZz.jpg",
        images: ["https://image.tmdb.org/t/p/original/77aHwg1SCy89rfvQtiruPU58qEV.jpg", "https://image.tmdb.org/t/p/original/s3Eeszg2RVAnrB9XqtB83VI1Ogp.jpg", "https://image.tmdb.org/t/p/original/7wt1DA7duYtUitwZs4ChV3VYGRx.jpg"],
        dateAdded: "26/07/2025"
    },
{
        id: 7,
        title: "Black Mirror: Bête Noire",
        year: "2025",
        genre: ["Science-fiction"],
        rating: "3.5",
        review: "Dans la continuité de notre lancement dans cette septième saison de Black Mirror. Ce deuxième épisode, plus lent dans sa mise en place, aborde le sujet du mensonge par changement de réalité (si on peut l'appeler comme ça). J'ai bien aimé la réalisation, notamment les intertitres qui m'ont fait penser au film The Menu ou le côté scénaristique burlesque à la fin. Encore une fois ça fait réfléchir...",
        poster: "https://a.ltrbxd.com/resized/sm/upload/dk/ec/4o/lu/BM_BetteNoire-0-1000-0-1500-crop.jpg?v=0137115841",
        images: ["https://image.tmdb.org/t/p/original/4HheeR47LHsfD1hsSW79QwTX1z9.jpg", "https://image.tmdb.org/t/p/original/xkfetOweNToN6kfnJe61hc9UPJT.jpg"],
        dateAdded: "25/07/2025"
    },
{
        id: 6,
        title: "Black Mirror: Common People",
        year: "2025",
        genre: ["Science-fiction"],
        rating: "3",
        review: "Lancé un peu au hasard après quelques minutes de recherches hésitantes sur Netflix, cet épisode de la septième saison de Black Mirror s'avère être une bonne surprise et me conforte dans l'idée que, quand on sait pas quoi regarder, un épisode de Black Mirror et toujours une valeur sûre. Dans cet épisode, une femme atteinte d'une tumeur au cerveau se voit bénéficier d'un implant remplaçant une partie de son cerveau. Le problème : cet implant fonctionne par abonnement. On le comprend très vite, l'entreprise va modifier ses prix et le contenu de ses abonnements... J'aime toujours Black Mirror car ça me donne matière à réfléchir et cet épisode le confirme.",
        poster: "https://a.ltrbxd.com/resized/sm/upload/50/ta/ci/83/BM_CommonPeople-0-1000-0-1500-crop.jpg?v=0b5d34cea5",
        images: ["https://image.tmdb.org/t/p/original/156V2J7yQIOKEu1EuJbYUa105rE.jpg", "https://image.tmdb.org/t/p/original/gzZXsgv8wQbOPiV6eo65VMdK4YX.jpg", "https://image.tmdb.org/t/p/original/bXrL2SvSCMrl914sWnE8LEvhpJX.jpg"],
        dateAdded: "23/07/2025"
    },
{
        id: 5,
        title: "La La Land",
        year: "2016",
        genre: ["Drame", "Romance", "Musique", "Comédie"],
        rating: "4.5",
        review: "Énième visionnage de La La Land, un peu fatigué cette fois-ci (c'était minuit après une magnifique journée d'anniversaire). Rien de spécial à redire, c'est excellent comme d'hab, et ça m'a hypé pour le ciné-concert en octobre.",
        poster: "https://image.tmdb.org/t/p/original/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
        images: ["https://image.tmdb.org/t/p/original/2wmDyHz4gvF6m51IQZJnJzlLsnz.jpg", "https://image.tmdb.org/t/p/original/nofXR1TN1vgGjdfnwGQwFaAWBaY.jpg", "https://image.tmdb.org/t/p/original/tlCBtqrhbPcuXVXoxmQ0AYfUstt.jpg"],
        dateAdded: "20/07/2025"
    }
];