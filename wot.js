bgModal = document.querySelector(".bgModal")
modal = document.querySelector(".modalContent")
submitn = document.getElementById("submitn")
exit = document.getElementById("exit")
submitn.setAttribute("onclick","hideWindow()");
exit.setAttribute("onclick","hideWindow()");
console.log(submitn.onclick);
TopScroll = window.pageYOffset || document.documentElement.scrollTop;
LeftScroll = window.pageXOffset || document.documentElement.scrollLeft;

window.onbeforeunload = function() 
{
    window.scrollTo(0, 0);
}

function hideWindow()
{
    console.log("got here");
    enable()
    modal.style.display = "none"
    bgModal.style.display = "none"
}

window.onload = function()
{
    disable()
    modal.style.display = "block"
}

function disable() 
{
    window.onscroll = function() 
    {
        window.scrollTo(LeftScroll, TopScroll);
    };
}
        
function enable() 
{
    window.onscroll = function() {};
}

var maleList = ["Robert Abdesselam",
"José Acasuso",
"András Ádám-Stolpa",
"Andre Agassi",
"Ronald Agénor",
"Juan Aguilera",
"Roberto Bautista Agut",
"Karim Alami",
"Fred Alexander",
"John Alexander",
"Wilmer Allison, Jr.",
"Nicolás Almagro",
"Manuel Alonso",
"Felicisimo Ampon",
"Vijay Amritraj",
"Mario Ančić",
"James Anderson",
"Kevin Anderson",
"Mal Anderson",
"Igor Andreev",
"John Andrews",
"Matt Anger",
"Paul Annacone",
"Hicham Arazi",
"Jimmy Arias",
"Jordi Arrese",
"József Asbóth",
"Arthur Ashe",
"Félix Auger-Aliassime",
"Bunny Austin",
"Luis Ayala",
"Wilfred Baddeley",
"Marcos Baghdatis",
"Corrado Barazzutti",
"Herbert Roper Barrett",
"Pierre Barthès",
"Nikoloz Basilashvili",
"Alfred Beamish",
"Boris Becker",
"Karl Behr",
"Mike Belkin",
"Thomaz Bellucci",
"Eduardo Bengoechea",
"Julien Benneteau",
"Alberto Berasategui",
"Tomáš Berdych",
"Lennart Bergelin",
"Jay Berger",
"Christian Bergström",
"Marcel Bernard",
"Matteo Berrettini",
"Paolo Bertolucci",
"Henry Billington",
"Jonas Björkman",
"Byron Black",
"James Blake",
"Galo Blanco",
"Arnaud Boetsch",
"Björn Borg",
"Jean Borotra",
"Jeff Borowiak",
"William Bowrey",
"Christian Boussus",
"Jacques Brichant",
"Godfrey Brinley",
"John Bromwich",
"Norman Brookes",
"Geoff Brown",
"Tom Brown",
"Sergi Bruguera",
"Butch Buchholz",
"Don Budge",
"Pablo Carreño Busta",
"Darren Cahill",
"Oliver Campbell",
"Agustín Calleri",
"Omar Camporese",
"Francesco Cancellotti",
"Guillermo Cañas",
"Cristiano Caratti",
"Kent Carlsson",
"Ross Case",
"Pat Cash",
"Marco Cecchinato",
"František Cejnar",
"Malcolm Chace",
"Thierry Champion",
"Michael Chang",
"Jérémy Chardy",
"Juan Ignacio Chela",
"Andrei Cherkasov",
"Andrei Chesnokov",
"Herbert Chipp",
"Marin Čilić",
"Francisco Clavet",
"Arnaud Clément",
"José Luis Clerc",
"William Clothier",
"Henri Cochet",
"Jimmy Connors",
"Elwood Cooke",
"Ashley Cooper",
"John Cooper",
"Patricio Cornejo",
"Guillermo Coria",
"Borna Ćorić",
"Àlex Corretja",
"Albert Costa",
"Carlos Costa",
"Jim Courier",
"Mark Cox",
"Gottfried von Cramm",
"Jack Crawford",
"Dick Crealy",
"Gianni Cucelli",
"Pablo Cuevas",
"Kevin Curren",
"Sven Davidson",
"Dwight Davis",
"Scott Davis",
"Franco Davín",
"Nikolay Davydenko",
"Max Decugis",
"Juan Martín del Potro",
"Alex de Minaur",
"Phil Dent",
"Taylor Dent",
"Steve Denton",
"Bernard Destremau",
"Filip Dewulf",
"Colin Dibley",
"Eddie Dibbs",
"Mark Dickson",
"Keith Diepraam",
"Grigor Dimitrov",
"Charles P. Dixon",
"Arnaud Di Pasquale",
"Novak Djokovic",
"John Doeg",
"Laurence Doherty",
"Reginald Doherty",
"Alexandr Dolgopolov",
"Irvin Dorfman",
"Sláva Doseděl",
"Stanley Doust",
"Hendrik Dreekmann",
"Brad Drewett",
"Jaroslav Drobný",
"Cliff Drysdale",
"Robin Drysdale",
"Pat Du Pré",
"James Dwight",
"Wilberforce Eaves",
"Stefan Edberg",
"Mark Edmondson",
"Kyle Edmund",
"Younes El Aynaoui",
"Ismail El Shafei",
"Jacco Eltingh",
"Roy Emerson",
"Thomas Enqvist",
"Nicolas Escudé",
"Lestocq Robert Erskine",
"Dan Evans",
"Kelly Evernden",
"Brian Fairlie",
"Robert Falkenburg",
"Roger Federer",
"Peter Feigl",
"Wayne Ferreira",
"David Ferrer",
"Juan Carlos Ferrero",
"Wojtek Fibak",
"Marcelo Filippini",
"Jaime Fillol",
"Mardy Fish",
"John Fitzgerald",
"Herbie Flam",
"Peter Fleming",
"Fabio Fognini",
"Gordon Forbes",
"Guy Forget",
"Željko Franulović",
"Neale Fraser",
"Rod Frawley",
"Taylor Fritz",
"Frank Froehling",
"Otto Froitzheim",
"Richard Fromberg",
"Renzo Furlan",
"Jan-Michael Gambill",
"Guillermo García-López",
"Cristian Garín",
"Chuck Garland",
"Richard Gasquet",
"Andrea Gaudenzi",
"Gastón Gaudio",
"Vitas Gerulaitis",
"Sam Giammalva",
"Sammy Giammalva, Jr.",
"Bob Giltinan",
"Robby Ginepri",
"Andrés Gimeno",
"Juan Gisbert, Sr.",
"Drew Gitlin",
"Brad Gilbert",
"Hans Gildemeister",
"Shlomo Glickstein",
"William Glyn",
"André Gobert",
"David Goffin",
"Dan Goldie",
"Jérôme Golmard",
"Andrés Gómez",
"Pancho Gonzales",
"Fernando González",
"Vere St. Leger Goold",
"Arthur Gore",
"Spencer Gore",
"Tom Gorman",
"Brian Gottfried",
"Georges Goven",
"Clark Graebner",
"Bryan Grant",
"Colin Gregory",
"Seymour Greenberg",
"Charles Walder Grinstead",
"Sébastien Grosjean",
"Ernests Gulbis",
"Tim Gullikson",
"Tom Gullikson",
"István Gulyás",
"Jan Gunnarsson",
"Heinz Günthardt",
"Magnus Gustafsson",
"Paul Haarhuis",
"Tommy Haas",
"Harold Hackett",
"Frank Hadow",
"Edward L. Hall",
"Valentine Hall",
"Willoughby Hamilton",
"Victor Hănescu",
"Charles Hare",
"Rodney Harmon",
"John Hartley",
"John Hawkes",
"Charles Heathcote",
"Henner Henkel",
"Tim Henman",
"John Hennessey",
"Bob Hewitt",
"Lleyton Hewitt",
"José Higueras",
"Jakob Hlasek",
"Lew Hoad",
"Clarence Hobart",
"Henrik Holm",
"Ronald Holmberg",
"Greg Holmes",
"Chip Hooper",
"Harry Hopman",
"Fred Hovey",
"Dominik Hrbatý",
"Jiří Hřebec",
"Pat Hughes",
"Ugo Humbert",
"Joe Hunt",
"Frank Hunter",
"Hubert Hurkacz",
"John Isner",
"Goran Ivanišević",
"Sydney Jacob",
"Martín Jaite",
"François Jauffret",
"Anders Järryd",
"Joachim Johansson",
"Thomas Johansson",
"Steve Johnson",
"Bill Johnston",
"Boro Jovanović",
"Yevgeny Kafelnikov",
"Aslan Karatsev",
"Bernd Karbacher",
"Ivo Karlović",
"Béla von Kehrling",
"Karen Khachanov",
"Nicolas Kiefer",
"Howard Kinsey",
"Algernon Kingscote",
"Vernon Kirby",
"Martin Kližan",
"Percy Knapp",
"Billy Knight",
"Thomaz Koch",
"Jan Kodeš",
"Philipp Kohlschreiber",
"Petr Korda",
"Stefan Koubek",
"Jan Koželuh",
"Karel Koželuh",
"Richard Krajicek",
"Jack Kramer",
"Oscar Kreuzer",
"Aaron Krickstein",
"Johan Kriek",
"Ramanathan Krishnan",
"Ramesh Krishnan",
"Paul Kronk",
"Łukasz Kubot",
"Gustavo Kuerten",
"Karol Kučera",
"Nicklas Kulti",
"Ichiya Kumagae",
"Nick Kyrgios",
"René Lacoste",
"Dušan Lajović",
"Nicolás Lapentti",
"William Larned",
"Art Larsen",
"Magnus Larsson",
"Rod Laver",
"Herbert Lawford",
"Henri Leconte",
"Harry Lee",
"Ivan Lendl",
"Ernest Lewis",
"Chris Lewis",
"Ivan Ljubičić",
"Michaël Llodra",
"John Lloyd",
"Feliciano López",
"George Lott",
"Gordon Lowe",
"Yen-hsun Lu",
"Peter Lundgren",
"Jan-Erik Lundqvist",
"Bob Lutz",
"Randolph Lycett",
"George Lyttleton-Rogers",
"Barry MacKay",
"Harold Mahoney",
"Gene Mako",
"Xavier Malisse",
"Boris Maneff",
"Amos Mansdorf",
"Alberto Mancini",
"Gregory Mangin",
"Adrian Mannarino",
"Bruce Manson",
"Félix Mantilla",
"John Marks",
"William Marshall",
"Billy Martin",
"Todd Martin",
"Nicolás Massú",
"Geoff Masters",
"Wally Masur",
"Paul-Henri Mathieu",
"Shuzo Matsuoka",
"Andreas Maurer",
"Theodore Mavrogordato",
"Florian Mayer",
"Gene Mayer",
"Leonardo Mayer",
"Sandy Mayer",
"Tim Mayotte",
"John McEnroe",
"Patrick McEnroe",
"Vivian McGrath",
"Ken McGregor",
"Chuck McKinley",
"Maurice McLoughlin",
"Peter McNamara",
"Paul McNamee",
"Don McNeill",
"Frew McMillan",
"Miloslav Mečíř",
"Andrei Medvedev",
"Daniil Medvedev",
"Ernest George Meers",
"Karl Meiler",
"Fernando Meligeni",
"Jürgen Melzer",
"Roderich Menzel",
"Giuseppe Merlo",
"Alex Metreveli",
"Max Mirnyi",
"Dragutin Mitić",
"Juan Mónaco",
"Gaël Monfils",
"Albert Montañés",
"Edgar Moon",
"Raymond Moore",
"Enrique Morea",
"Umberto De Morpurgo",
"Buster Mottram",
"Carlos Moyá",
"Marty Mulligan",
"Gardnar Mulloy",
"Gilles Müller",
"Andy Murray",
"Robert Murray",
"Thomas Muster",
"Rafael Nadal",
"David Nalbandian",
"Ilie Năstase",
"Carr Neel",
"John Newcombe",
"Kurt Nielsen",
"Jarkko Nieminen",
"Nathaniel Niles",
"Harold Nisbet",
"Kei Nishikori",
"Yannick Noah",
"Magnus Norman",
"Cameron Norrie",
"Brian Norton",
"Karel Nováček",
"Jiří Novák",
"Hans Nüsslein",
"Joakim Nyström",
"Tom Okker",
"Alex Olmedo",
"Reilly Opelka",
"Manuel Orantes",
"Jim Osborne",
"Rafael Osuna",
"Dinny Pails",
"Benoît Paire",
"Josip Palada",
"Antonio Palafox",
"Adriano Panatta",
"Jahial Parmly Paret",
"James Cecil Parke",
"Frank Parker",
"Cecil Parr",
"Onny Parun",
"Charlie Pasarell",
"David Pate",
"Gerald Patterson",
"Andrew Pattison",
"Budge Patty",
"Andrei Pavel",
"Victor Pecci",
"Theodore Pell",
"Guido Pella",
"Pierre Pellizza",
"Guillermo Pérez Roldán",
"Mikael Pernfors",
"Fred Perry",
"Yvon Petra",
"Hank Pfister",
"Mark Philippoussis",
"Barry Phillips-Moore",
"Nicola Pietrangeli",
"Nikola Pilić",
"Joshua Pim",
"Libor Pimek",
"Ulrich Pinner",
"Cédric Pioline",
"Hans-Jürgen Pohmann",
"Alexander Popp",
"Vasek Pospisil",
"Lucas Pouille",
"Goran Prpić",
"Patrick Proisy",
"Mariano Puerta",
"Franjo Punčec",
"Mel Purcell",
"Sam Querrey",
"Adrian Quist",
"Patrick Rafter",
"Dennis Ralston",
"Raúl Ramírez",
"Albert Ramos Viñolas",
"Milos Raonic",
"Louis Raymond",
"Richey Reneberg",
"Peter Rennert",
"Ernest Renshaw",
"William Renshaw",
"George E. Richards",
"Vinnie Richards",
"Cliff Richey",
"Bobby Riggs",
"Marty Riessen",
"Marcelo Ríos",
"Frank Riseley",
"Major Ritchie",
"Tommy Robredo",
"Tony Roche",
"Olivier Rochus",
"Andy Roddick",
"Christophe Roger-Vasselin",
"Mervyn Rose",
"Ken Rosewall",
"Marc Rosset",
"Derrick Rostagno",
"Andrey Rublev",
"Ray Ruffels",
"Greg Rusedski",
"Alejo Russell",
"Casper Ruud",
"André Sá",
"John Sadri",
"Marat Safin",
"Pete Sampras",
"Emilio Sánchez",
"Javier Sánchez",
"Tennys Sandgren",
"Manuel Santana",
"Fabrice Santoro",
"Jiro Sato",
"Dick Savitt",
"Bill Scanlon",
"Sjeng Schalken",
"Michiel Schapers",
"Richard Schlesinger",
"Ted Schroeder",
"Rainer Schüttler",
"Diego Schwartzman",
"Richard Sears",
"Frank Sedgman",
"Abe Segal",
"Pancho Segura",
"Vic Seixas",
"Andreas Seppi",
"Denis Shapovalov",
"Quincy Shaw",
"Frank Shields",
"Zenzo Shimizu",
"Bill Sidwell",
"Jan Siemerink",
"Gilles Simon",
"Jannik Sinner",
"Orlando Sirola",
"Dick Skeen",
"Horst Skoff",
"Henry Slocum",
"Pavel Složil",
"Tomáš Šmíd",
"Stan Smith",
"Sydney Howard Smith",
"Jack Sock",
"Robin Söderling",
"Harold Solomon",
"Lorenzo Sonego",
"Vince Spadea",
"Pat Spence",
"Franco Squillari",
"Milan Šrejber",
"Paradorn Srichaphan",
"Carl-Uwe Steeb",
"Giorgio de Stefani",
"Ulf Stenlund",
"Radek Štěpánek",
"Brett Steven",
"Michael Stich",
"Dick Stockton",
"Les Stoefen",
"Fred Stolle",
"Jason Stoltenberg",
"Allan Stone",
"Eric Sturgess",
"Henrik Sundström",
"Jonas Svensson",
"Ottó Szigeti",
"Bill Talbert",
"Roscoe Tanner",
"Balázs Taróczy",
"Howard Taylor",
"Roger Taylor",
"Brian Teacher",
"Eliot Teltscher",
"Ben Testerman",
"Dominic Thiem",
"Frances Tiafoe",
"Bill Tilden",
"Mikael Tillström",
"Henk Timmer",
"Janko Tipsarević",
"Ion Ţiriac",
"Ignacy Tłoczyński",
"Bernard Tomic",
"Tony Trabert",
"Viktor Troicki",
"Stefanos Tsitsipas",
"Jo-Wilfried Tsonga",
"Thierry Tulasne",
"Dmitry Tursunov",
"Robert Van't Hof",
"Fernando Verdasco",
"Martin Verkerk",
"Ian Vermaak",
"Armando Vieira",
"Guillermo Vilas",
"Ellsworth Vines",
"Adrian Voinea",
"Filippo Volandri",
"Alexander Volkov",
"Butch Walts",
"Holcombe Ward",
"Leo Ware",
"Kim Warwick",
"Philippe Washer",
"MaliVai Washington",
"Stan Wawrinka",
"David Wheaton",
"Malcolm Whitman",
"Mats Wilander",
"Tony Wilding",
"R. Norris Williams",
"Tim Wilkison",
"Bobby Wilson",
"Todd Witsken",
"Sidney Wood",
"Todd Woodbridge",
"Mark Woodforde",
"Chris Woodruff",
"Robert Wrenn",
"George Wrenn",
"Beals Wright",
"Mikhail Youzhny",
"Jaime Yzaga",
"Mariano Zabaleta",
"Vladimír Zedník",
"Slobodan Živojinović",
"Alexander Zverev",
"Mischa Zverev"]
listItems = [];
male = document.createElement("ul");
male.setAttribute('id',"myList");

for (var i = 0; i < maleList.length; i++)
{
 listItems[i] = document.createElement("option");
 listItems[i].setAttribute('value',i)
 listItems[i].innerHTML = maleList[i];
 document.getElementById("men").appendChild(listItems[i]);
}

var femaleList = ["Betsy Abbas",
"Jane Albert",
"Leslie Allen",
"Lili de Alvarez Valdene",
"Sophie Amiach",
"Josette Amouretti",
"Bianca Andreescu",
"Sabine Appelmans",
"Laura Arraya (Gildemeister)",
"Jeanne Arth",
"Shinobu Asagoe",
"Cilly Aussem",
"Tracy Austin",
"Victoria Azarenka",
"Tímea Babos",
"Timea Bacsinszky",
"Dianne Fromholtz Balestrat",
"Sybille Bammer",
"Sue Barker",
"Pilar Barril",
"Mona Barthel",
"Jane Bartkowicz",
"Marion Bartoli",
"Ashleigh Barty",
"Carling Bassett-Seguso",
"Yayuk Basuki",
"Joan Hartigan Bathurst",
"Norma Baylon",
"Geraldine Beamish",
"Claire Beckingham",
"Dája Bedáňová",
"Irina-Camelia Begu",
"Belinda Bencic",
"Mirka Koželuhová",
"Iveta Benešová",
"Kiki Bertens",
"Pauline Betz Addie",
"Louie Bickerton",
"Blanche Bingley Hillyard",
"Cara Black",
"Jill Blackman",
"Molly Blair",
"Manon Bollegraf",
"Nancye Wynne Bolton",
"Alona Bondarenko",
"Kateryna Bondarenko",
"Lisa Bonder-Kreiss",
"Fiorella Bonicelli",
"Kristie Boogert",
"Penelope Dora Boothby",
"Linky Boshoff",
"Annalisa Bossi",
"Jean Bostock",
"Eugenie Bouchard",
"Kornelia Bouman",
"Elena Bovina",
"Nicole (Provis) Bradtke",
"Shirley Brasher",
"Heather Brewer-Segal",
"Marguerite Broquedis",
"Louise Brough",
"Mary Kendall Browne",
"Ginette Bucaille",
"Iva Budařová",
"Edda Buding",
"Ilse Buding",
"Maria Bueno",
"Bettina Bunge",
"Coral Buttsworth",
"Angela Buxton",
"Mihaela Buzărnescu",
"Jennifer Capriati",
"Mary Carillo",
"Pam Casale",
"Rosemary Casals",
"Michelle (Torres) Casati",
"Helen Gourlay Cawley",
"Arlette de Cazalet",
"Sandra Cecchini",
"Anna Chakvetadze",
"Dorothy Bundy Cheney",
"Natasha Chmyreva",
"Dominika Cibulková",
"Sorana Cîrstea",
"Kim Clijsters",
"Amanda Coetzer",
"Lorraine Coghlan Robinson",
"J. S. Colegate",
"Patricia Coleman",
"Beryl Penrose Collier",
"Maureen Connolly Brinker",
"Helene Contostavlos",
"Sarah Palfrey Cooke",
"Charlotte Cooper Sterry",
"Belinda Cordwell",
"Alizé Cornet",
"Margaret (Smith) Court",
"Paule Courteix",
"Thelma Coyne Long",
"Daphne Akhurst Cozens",
"Marjorie Cox Crawford",
"Annabel Croft",
"Isabel Cueto",
"Joan Curry",
"Eleni Daniilidou",
"Rosa-Maria Reyes Darmon",
"Kimiko Date-Krumm",
"Lindsay Davenport",
"Barbara Scofield",
"Nathalie Dechy",
"Casey Dellacqua",
"Elena Dementieva",
"Lottie Dod",
"Jelena Dokić",
"Ruxandra Dragomir Ilie",
"Gisela Dulko",
"Annette Van Zyl Du Plooy",
"Margaret Osborne duPont",
"Jo Durie",
"Françoise Durr",
"Robyn Ebbern",
"Katja Ebbinghaus",
"Mary-Ann Eisel",
"Silvia Farina Elia",
"Sara Errani",
"Chris Evert",
"Rosalyn (Fairbank) Nideffer",
"Donna Floyd Fales",
"Patty Fendick",
"Gigi Fernández",
"Mary Joe Fernandez",
"Joyce Fitch Rymer",
"Beverly Baker Fleitz",
"Helen Fletcher Barker",
"Kirsten Flipkens",
"Amy Frazier",
"Shirley Fry Irvin",
"Bettina Fulco-Villella",
"Bonnie Gadusek",
"Donna Ganz",
"Tathiana Garbin",
"Caroline Garcia",
"Zina Garrison (Jackson)",
"Daria (Gavrilova) Saville",
"Ruta Gerulaitis",
"Althea Gibson",
"Camila Giorgi",
"Raquel Giscafré",
"Kathleen McKane Godfree",
"Elsie Goldsack Pittman",
"Tatiana Golovin",
"Kate Gompert",
"Evonne Goolagong Cawley",
"Julia Görges",
"Inés Gorrochategui",
"Eleanor Goss",
"Carole Caldwell Graebner",
"Steffi Graf",
"Rita Grande",
"Trudy Groenman",
"Anna-Lena Grönefeld",
"Jarmila (Gajdošová) Wolfe",
"Carly Gullickson",
"Michèle Gurdal",
"Melissa Gurney",
"Karina Habšudová",
"Sabine Hack",
"Julie Halard-Decugis",
"Simona Halep",
"Jamie Hampton",
"Sylvia Hanika",
"Daniela Hantuchová",
"Darlene Hard",
"Mary Hardwick",
"Tanya Harford",
"Anna McCune Harper",
"Kerry Harris",
"Betty Harrison",
"Doris Hart",
"Kathleen Harter",
"Linda Harvey-Wild",
"Barbara Hawcroft",
"Marie Hazel",
"Mary Heeley",
"Bobbie Heine Miller",
"Julie Heldman",
"Justine Henin",
"Betty Hilton",
"Martina Hingis",
"Rika Hiraki",
"Andrea Hlaváčková",
"Jenny Hoad",
"Patti Hogan",
"Dorothy Holman",
"Miroslava Holubová",
"Nell Hall Hopman",
"Marie Luise Horn",
"Kathleen Horvath",
"Justina Bricka Horwitz",
"Lucie Hradecká",
"Hsieh Su-wei",
"Anke Huber",
"Liezel (Horn) Huber",
"Lesley Hunt",
"Ana Ivanovic",
"Helen Jacobs",
"Andrea Jaeger",
"Jelena Janković",
"Mima Jaušovec",
"Jadwiga Jędrzejowska",
"Marion Jessup",
"Ann Haydon Jones",
"Marion Jones Farquhar",
"Barbara Jordan",
"Kathy Jordan",
"Yone Kamio",
"Kaia Kanepi",
"Carina Karlsson",
"Daria Kasatkina",
"Helen Kelesi",
"Sofia Kenin",
"Angelique Kerber",
"Madison Keys",
"Billie Jean King",
"Vania King",
"Maria Kirilenko",
"Alisa Kleybanova",
"Ilana Kloss",
"Dorothy Head Knode",
"Claudia Kohde-Kilsch",
"Zsuzsa Körmöczy",
"Ana Konjuh",
"Johanna Konta",
"Anett Kontaveit",
"Klára Koukalová",
"Anna Kournikova",
"Karen Krantzcke",
"Lina Krasnoroutskaya",
"Barbora Krejčíková",
"Anne Kremer",
"Joannette Kruger",
"Marise Kruger",
"Kathy Kuykendall",
"Svetlana Kuznetsova",
"Petra Kvitová",
"Simone Laffargue",
"Joan Fry",
"Dorothea Lambert Chambers",
"Sylvia Lance Harper",
"Nelly Adamson Landry",
"Ethel Thomson Larcombe",
"Silvana Lazzarino",
"Andrea Leand",
"Jan Lehane O'Neill",
"Suzanne Lenglen",
"Varvara Lepchenko",
"Dorothy Levine",
"Li Na",
"Li Ting",
"Elena Likhovtseva",
"Catarina Lindqvist",
"Sabine Lisicki",
"Dorothy Round Little",
"Anita Lizana",
"Peanut Louie Harper",
"Gail Sherriff",
"Chanfreau Lovera",
"Mirjana Lučić",
"Ivanna Madrgua-Osses",
"Gretchen (Rush) Magers",
"Iva Majoli",
"Ekaterina Makarova",
"Katerina Maleeva",
"Magdalena Maleeva",
"Manuela Maleeva-Fragniere",
"Molla Bjurstedt Mallory",
"Hana Mandlíková",
"Lucia Manfredi",
"Eugenia Maniokova",
"Alice Marble",
"Norma Marsh",
"Regina Maršíková",
"Cecilia Martinez",
"Conchita Martínez",
"María José Martínez Sánchez",
"Helga Niessen Masthoff",
"Simonne Mathieu",
"Christine Matison",
"Bethanie Mattek-Sands",
"Amélie Mauresmo",
"Kathy May",
"Meredith McGrath",
"Christina McHale",
"Mary McIlquham",
"Lori McNeil",
"Anabel Medina Garrigues",
"Natalia Medvedeva",
"Christiane Mercelis",
"Elise Mertens",
"Leila Meskhi",
"Margaret 'Peggy' Michel",
"Florența Mihai",
"Anne Minter",
"Sania Mirza",
"Kristina Mladenovic",
"Corinne Molesworth",
"Margaret Molesworth",
"Alicia Molik",
"Dominique Monami",
"Ángeles Montolio",
"Helen Wills Moody",
"Sally Moore Huss",
"Corina Morariu",
"Olga Morozova",
"Angela Mortimer Barrett",
"Joy Gannon Mottram",
"Alycia Moulton",
"Phyllis Mudford King",
"Garbiñe Muguruza",
"Anastasia Myskina",
"Kyōko Nagatsuka",
"Betsy Nagelsen",
"Henrieta Nagyová",
"Martina Navratilova",
"Larisa (Savchenko) Neiland",
"Janet Newberry",
"Jana Novotná",
"Yola Ramírez Ochoa",
"Naomi Osaka",
"Jeļena Ostapenko",
"Miriam Oremans",
"Melanie Oudin",
"Tatiana Panova",
"Pascale Paradis",
"Susan Chatrier Partridge",
"Barbara Paulus",
"Anastasia Pavlyuchenkova",
"Lolette Payot",
"Irene Bowder Peacock",
"Shahar Pe'er",
"Peng Shuai",
"Flavia Pennetta",
"Květa (Hrdličková) Peschke",
"Andrea Petkovic",
"Nadia Petrova",
"Eva Pfaff",
"Terry Phelps",
"Mary Pierce",
"Marie",
"Neumannová Pinterova",
"Sylvia Plischke",
"Karolína Plíšková",
"Kimberly Po-Messerli",
"Claudia Porwik",
"Barbara Potter",
"Betty Rosenquest Pratt",
"Mary Ann Prentiss",
"Sandra Reynolds Price",
"Monica Puig",
"Jean Quertier",
"Emma Raducanu",
"Agnieszka Radwańska",
"Lisa Raymond",
"Virginie Razzano",
"Hazel Redick-Smith",
"Raffaella Reggi",
"Stephanie Rehe",
"Kerry Melville Reid",
"Elna Reinach",
"Jennifer Mundel Reinbold",
"Mary Carter Reitano",
"Aravane Rezaï",
"Nancy Richey (Gunter)",
"Joan Ridley O'Meara",
"Helen Rihbany",
"Kathy Rinaldi",
"Barbara Rittner",
"Esna Boyd Robertson",
"Madzy Rollin Couquerque",
"E. F. Rose",
"Odile de Roubin",
"Virginia Ruano Pascual",
"Chanda Rubin",
"Magda Rurac",
"Joanne Russell",
"Virginia Ruzici",
"Elizabeth Ryan",
"Magdaléna Rybáriková",
"Aryna Sabalenka",
"Gabriela Sabatini",
"Lucie Šafářová",
"Dinara Safina",
"Arantxa Sánchez Vicario",
"Christina Sandberg",
"Mara Santangelo",
"Phyllis Satterthwaite",
"Kazuko Sawamatsu",
"Naoko Sawamatsu",
"Mary Sawyer",
"Marijke Schaar",
"Barbara Schett",
"Francesca Schiavone",
"Patty Schnyder",
"Brenda Schultz-McCarthy",
"Helga Schultze",
"Renée Schuurman",
"Barbara Schwartz",
"Margaret Scriven Vivian",
"Anne-Marie Seghers",
"Monica Seles",
"Magüi Serna",
"Anastasija Sevastova",
"Maria Sharapova",
"Meghann Shaughnessy",
"Winnie Shaw",
"Dorothy Shepherd-Barron",
"Betty Nuthall Shoemaker",
"Pam Shriver",
"Yaroslava Shvedova",
"Anne-Gaëlle Sidot",
"Laura Siegemund",
"Brigitte Simon-Glinel",
"Susan Sloane-Lundy",
"Anna Smashnova (Pistolesi)",
"Anne Smith",
"Elizabeth Smylie",
"Abigail Spears",
"Hilde Krahwinkel Sperling",
"Irina Spîrlea",
"Karolina Šprem",
"Katarina Srebotnik",
"Kay Stammers Bullitt",
"Carolin Babcock Stark",
"Sloane Stephens",
"Greer Stevens",
"Alexandra Stevenson",
"Samantha Stosur",
"Betty Stöve",
"Barbora Strýcová",
"Rennae Stubbs",
"Paola Suárez",
"Carla Suárez Navarro",
"Elena Subirats",
"Ai Sugiyama",
"Helena Suková",
"Věra Suková",
"Sheila Piercey Summers",
"Sun Tiantian",
"Karen Hantze Susman",
"May Sutton Bundy",
"Astrid Suurbeek",
"Elina Svitolina",
"Mariaan de Swardt",
"Iga Świątek",
"Éva Szabó",
"Ágnes Szávay",
"Silvija Talaja",
"Tamarine Tanasugarn",
"Catherine Tanvier",
"Billie Tapscott",
"Patricia Tarabini",
"Nathalie Tauziat",
"Pam Teeguarden",
"Judy Tegart Dalton",
"Andrea Temesvári",
"Sandrine Testud",
"Patricia Canning Todd",
"Renáta Tomanová",
"Christine Truman Janes",
"Kay Tuckey",
"Linda Tuero",
"Iroda Tulyaganova",
"Wendy Turnbull",
"Lesley Turner Bowrey",
"C Tyrell",
"Vladimíra Uhlířová",
"Nicole Vaidišová",
"Lucia Valerio",
"Molly Van Nostrand",
"Coco Vandeweghe",
"Yvonne Vermaak",
"Elena Vesnina",
"Roberta Vinci",
"Erika Vollmer",
"Vlasta Vopičková",
"Bernice Carr Vukovich",
"Virginia Wade",
"Jean Walker-Smith",
"Wang Qiang",
"Patricia Ward Hales",
"Heather Watson",
"Maud Watson",
"Phoebe Holcroft Watson",
"Maria Teran Weiss",
"Alice Weiwers",
"Mimi Arnold",
"Nancy Chaffee",
"Anne White",
"Robin White",
"Eileen Bennett Whittingstall",
"Yanina Wickmayer",
"Judith Wiesner",
"Hazel",
"Hotchkiss Wightman",
"Serena Williams",
"Venus Williams",
"Julia Wipplinger",
"Marianne Werdel Witmeyer",
"Caroline Wozniacki",
"Aleksandra Wozniak",
"Yan Zi",
"Zhang Shuai",
"Zheng Jie",
"Radka Zrubáková",
"Fabiola Zuluaga",
"Natasha Zvereva",
"Vera Zvonareva"]
listItems = [];
female = document.createElement("ul");
female.setAttribute('id',"myList");

for (var i = 0; i < femaleList.length; i++)
{
 listItems[i] = document.createElement("option");
 listItems[i].setAttribute('value',i)
 listItems[i].innerHTML = femaleList[i];
 document.getElementById("women").appendChild(listItems[i]);
}

