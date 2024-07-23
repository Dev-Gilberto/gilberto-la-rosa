globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                 */
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_DF50JbGT.mjs';
import { $ as $$Layout } from '../chunks/Layout_G-QiqGG-.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://gilberto-la-rosa.xyz/");
const $$Empleos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Empleos;
  const {
    nameEnterprise,
    textEnterprise,
    jobTitle,
    experienceSumary,
    experienceSumaryTwo,
    month,
    monthTwo,
    year,
    yearTwo,
    number,
    contry,
    href,
    skill,
    skillTwo,
    skillThree,
    skillFor,
    skillFive,
    skillSix,
    skillSeven,
    skillEight,
    skillNine,
    skillTen
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex items-center"> <span class="h-px flex-1 bg-[#212121]"></span> <span class="shrink-0 px-6 font-bold text-5xl uppercase">${nameEnterprise}</span> <span class="h-px flex-1 bg-[#212121]"></span> </div> <p class="text-center text-sm font-light"> ${textEnterprise} </p> </section> <section> <h2 class="font-bold text-5xl">${jobTitle}</h2> <p class="font-light text-lg md:text-xl"> ${experienceSumary} </p> <p class="font-light text-lg md:text-xl mt-4"> ${experienceSumaryTwo} </p> </section> <section> <h2 class="font-bold text-5xl capitalize text-wrap">aptitudes</h2> <ul id="list" class="flex gap-3 flex-wrap justify-center wu md:w-1/2 mx-auto tracking-wide"> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skill} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillTwo} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillThree} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillFor} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillFive} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillSix} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillSeven} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillEight} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillNine} </li> <li class="py-1 px-4 rounded-xl border-t-2 border-[#f79533] uppercase"> ${skillTen} </li> </ul> </section> <section> <h2 class="font-bold text-5xl capitalize">periodo</h2> <time> <div class="flex justify-center gap-2 items-center"> <span class="capitalize font-light text-lg md:text-xl">${month} <span class="font-bold text-4xl"> ${year}</span></span>&#10145;
<span class="capitalize font-light text-lg md:text-xl">${monthTwo} <span class="font-bold text-4xl"> ${yearTwo}</span></span> </div> <div class="capitalize text-lg md:text-xl font-light text-center"> <span>durarion</span> <span class="text-3xl font-bold">${number} meses</span> </div> </time> <span class="flex items-center"> <span class="pr-6 font-bold text-3xl capitalize">pais</span> <span class="h-px flex-1 bg-[#212121]"></span> </span> <span class="text-center font-bold capitalize text-3xl block">${contry}</span> </section> <section class="rounded-b-xl text-center pb-8 mb-8 border-b-8 border-[#f79533]"> <a${addAttribute(href, "href")} target="_blank" title="sitio web de la empresa u organizacion" class="font-medium underline tracking-wide text-lg hover:text-[#f79533] duration-300">
Sitio web de la empresa u organizacion &#10138;
</a> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/Empleos.astro", void 0);

const $$ContadorExperiencia = createComponent(($$result, $$props, $$slots) => {
  var codafter = 4;
  var hbt = 11;
  var free = 50;
  var ucab = 11;
  var flasalle = 17;
  var year = 12;
  const meses = [hbt, ucab, flasalle, free, codafter];
  const timeMonths = meses.reduce((total, num) => total + num, 0);
  const years = Math.floor(timeMonths / 12);
  const months = timeMonths - year * years;
  return renderTemplate`${maybeRenderHead()}<section class=""> <h2 class="font-bold text-5xl">
Tiempo de experiencia acumulada en el área de TI
</h2> <p class="text-lg font-light md:text-xl">
En el vertiginoso mundo de las tecnologías de la información, el tiempo se
    convierte en un bien inestimable. Con cada año que pasa, las personas
    adquieren una gran experiencia acumulada en el área de TI. Esta experiencia
    es como un tesoro de conocimientos, perfeccionado a través de incontables
    horas de desarrollo de sistemas de soporte web. El profesional de TI que
    lleva años en este campo ha sido testigo de la evolución de la tecnología,
    desde los primeros días de los sitios web básicos hasta los complejos
    sistemas web que vemos hoy en día. Se han enfrentado a retos y han superado
    obstáculos, adaptándose constantemente al paisaje siempre cambiante del
    ámbito digital. Este tiempo de experiencia acumulada no es sólo un
    testimonio de su dedicación y pasión por su oficio, sino también una reserva
    de sabiduría que puede aprovecharse para futuros proyectos e iniciativas.
</p> <section class="flex justify-center mt-4"> <time class="bg-white inline rounded-xl text-lg md:text-2xl text-center"> <span class="capitalize font-light"> <span class="text-7xl font-black">${years}</span> años
</span> <span class="block px-8 py-4 capitalize font-light bg-[#f79533] text-[#f5efe7] rounded-b-xl"> <span class="font-black text-4xl">${months}</span> meses
</span> </time> </section> </section>`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/ContadorExperiencia.astro", void 0);

const $$TrabajosDependientes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Trabajos Dependientes \u{1F4BB} Gilberto La Rosa \u{1F680} Web Developer \u{1F30E}" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[90%] mx-auto my-8"> <section> <h1 class="text-6xl md:text-9xl font-bold capitalize">
Trabajos
<br>
dependientes
</h1> <p class="mb-4 font-light text-lg">
En el rol como ingeniero he realizado importantes contribuciones en el
        campo del soporte técnico de sistemas y el desarrollo web. Mi
        experiencia radica en el desarrolo web y mantenimiento de servidores,
        garantizando un funcionamiento sin problemas y un rendimiento óptimo.
</p> </section> <!-- empleos --> <section class="md:w-[60%] md:mx-auto flex flex-col gap-4 mt-8"> ${renderComponent($$result2, "Empleos", $$Empleos, { "nameEnterprise": "codafter", "textEnterprise": "En Codafter \u{1F680} SpA, nos especializamos en brindar soluciones inform\xE1ticas a peque\xF1as y medianas empresas (Pymes). Nuestro enfoque de trabajo se basa en la implementaci\xF3n de los m\xE1s avanzados est\xE1ndares tecnol\xF3gicos,respaldado por un equipo de profesionales \u{1F4AA} altamente capacitados.", "jobTitle": "Web Developer", "experienceSumary": "Como desarrollador web, mi funci\xF3n principal es crear y mantener sitios web. Esto implica trabajar tanto en el front end como en el back end del sitio web. En el front end, me centro en los aspectos visuales e interactivos del sitio, asegur\xE1ndome de que sea f\xE1cil de usar y est\xE9ticamente agradable. Esto incluye el dise\xF1o de la presentaci\xF3n, la selecci\xF3n de colores y fuentes, y la implementaci\xF3n de un dise\xF1o adaptable a distintos dispositivos.", "experienceSumaryTwo": "En el back-end, trabajo con bases de datos para almacenar y recuperar datos, garantizando que el sitio web funcione sin problemas y de manera eficiente. Adem\xE1s, soy responsable de encontrar opciones de alojamiento adecuadas para garantizar que el sitio web sea accesible a usuarios de todo el mundo. En general, mi papel como desarrollador web consiste en reunir diversos elementos, como el dise\xF1o, la funcionalidad y la gesti\xF3n de datos, para crear una experiencia en l\xEDnea fluida y atractiva.", "skill": "html", "skillTwo": "css", "skillThree": "javascript", "skillFor": "php", "skillFive": "sql", "skillSix": "webpack", "skillSeven": "wordpress", "skillEight": "react", "skillNine": "node.js", "skillTen": "mysql", "month": "enero", "monthTwo": "", "year": "2024", "yearTwo": "actualidad", "number": 4, "contry": "Chile", "href": "https://codafter.cl/" })} ${renderComponent($$result2, "Empleos", $$Empleos, { "nameEnterprise": "hbt", "textEnterprise": "HBT, LTDA, es una empresa familiar de origen n\xF3rdica fundada en Santiago, Chile por la Arquitecta Gisela Litvanyi quien con el objetivo de crear un punto de encuentro para profesionales y clientes decide desarrollar su propia cultura de dise\xF1o y tecnolog\xEDa de producci\xF3n en Chile.", "jobTitle": "Asistente de TI", "experienceSumary": "Durante mi tiempo como asistente de TI, adquir\xED una valiosa experiencia trabajando en un entorno de ritmo r\xE1pido proporcionando soporte t\xE9cnico a los usuarios. Una de mis principales responsabilidades era gestionar el servicio de asistencia, donde recib\xEDa y respond\xEDa a las consultas y problemas de los usuarios. Esto implicaba solucionar problemas de hardware y software, as\xED como proporcionar orientaci\xF3n sobre c\xF3mo utilizar diversas aplicaciones y sistemas.", "experienceSumaryTwo": "Adem\xE1s del servicio de asistencia, tambi\xE9n tuve la oportunidad de trabajar con sistemas de planificaci\xF3n de recursos empresariales (ERP). Esto implicaba ayudar en la implantaci\xF3n y el mantenimiento del software ERP, as\xED como formar a los empleados sobre c\xF3mo utilizarlo eficazmente.", "skill": "windows", "skillTwo": "linux", "skillThree": "microsoft 365", "skillFor": "comercio b2c - b2b", "skillFive": "administracion web", "skillSix": "bases de datos", "skillSeven": "sql", "skillEight": "mesa ayuda", "skillNine": "soporte tecnico nivel i - ii", "skillTen": "sistemas de tickets", "month": "marzo", "monthTwo": "enero", "year": "2023", "yearTwo": "2024", "number": 11, "contry": "chile", "href": "https://www.hbt.cl/" })} ${renderComponent($$result2, "Empleos", $$Empleos, { "nameEnterprise": "Independiente", "textEnterprise": "Un inform\xE1tico independiente es un profesional que posee un profundo conocimiento de diversos aspectos de la inform\xE1tica y trabaja de forma independiente, sin estar vinculado a ninguna organizaci\xF3n o empresa concreta. Su experiencia se centra en \xE1reas como el desarrollo web, el soporte de sistemas, el hardware y los servicios de asistencia t\xE9cnica.", "jobTitle": "Consultor Inform\xE1tico Independiente", "experienceSumary": "Como consultor inform\xE1tico independiente, he adquirido una amplia experiencia en diversos aspectos de este campo. Mi especialidad es el desarrollo web, donde he creado y mantenido numerosos sitios web para clientes de distintos sectores. Conozco muy bien lenguajes de programaci\xF3n como HTML, CSS y JavaScript, lo que me permite crear sitios web visualmente atractivos y funcionales.", "experienceSumaryTwo": "Adem\xE1s, he proporcionado sistemas de hardware de apoyo a los clientes, asegurando que sus sistemas inform\xE1ticos est\xE1n funcionando sin problemas y eficientemente. Esto incluye la soluci\xF3n de problemas de hardware, la instalaci\xF3n de nuevos componentes, y la realizaci\xF3n de un mantenimiento regular. Adem\xE1s, tambi\xE9n he trabajado como representante del servicio de asistencia t\xE9cnica, ayudando a los clientes con sus consultas relacionadas con TI y proporcionando soluciones a sus problemas.", "skill": "windows", "skillTwo": "linux", "skillThree": "desarrollo web", "skillFor": "html", "skillFive": "css", "skillSix": "php", "skillSeven": "javasript", "skillEight": "mesa ayuda", "skillNine": "soporte tecnico nivel i - ii", "skillTen": "servidores", "month": "diciembre", "monthTwo": "enero", "year": "2018", "yearTwo": "2023", "number": 50, "contry": "Per\xFA - Chile", "href": "https://codafter.cl/" })} ${renderComponent($$result2, "Empleos", $$Empleos, { "nameEnterprise": "ucab", "textEnterprise": "La Universidad Cat\xF3lica Andr\xE9s Bello, es una universidad privada con sede en Caracas, Venezuela, y con n\xFAcleos en Los Teques, Puerto Ordaz y Coro. Es miembro de la Asociaci\xF3n de Universidades Confiadas a la Compa\xF1\xEDa de Jes\xFAs en Am\xE9rica Latina, y la dirigen padres jesuitas.", "jobTitle": "Analista de Tecnologia y Soporte T\xE9cnico", "experienceSumary": "A lo largo de mi carrera como analista tecnol\xF3gico y especialista en soporte t\xE9cnico, he adquirido una amplia experiencia en el desarrollo y soporte de diversos sistemas web y bases de datos. Mi funci\xF3n como analista tecnol\xF3gico consist\xEDa en analizar los requisitos empresariales y traducirlos en soluciones t\xE9cnicas. Trabaj\xE9 estrechamente con las partes interesadas para comprender sus necesidades y colabor\xE9 con los equipos de desarrollo para dise\xF1ar e implantar aplicaciones basadas en web.", "experienceSumaryTwo": "Para ello utilic\xE9 mis conocimientos de lenguajes de desarrollo web como HTML, CSS, JavaScript y marcos de trabajo como Node.Js y PHP. Adem\xE1s, he tenido experiencia pr\xE1ctica con sistemas de gesti\xF3n de bases de datos como SQL Server y MySQL, donde dise\xF1\xE9 y mantuve bases de datos para garantizar un rendimiento \xF3ptimo y la integridad de los datos.", "skill": "windows", "skillTwo": "linux", "skillThree": "servidores", "skillFor": "soporte usuarios", "skillFive": "soporte sistemas", "skillSix": "bases de datos", "skillSeven": "sql", "skillEight": "html", "skillNine": "css", "skillTen": "javascript", "month": "noviembre", "monthTwo": "septiembre", "year": "2017", "yearTwo": "2018", "number": 11, "contry": "venezuela", "href": "https://www.ucab.edu.ve/" })} ${renderComponent($$result2, "Empleos", $$Empleos, { "nameEnterprise": "flasalle", "textEnterprise": "La Fundaci\xF3n La Salle de Ciencias Naturales es una instituci\xF3n venezolana sin fines de lucro que se dedica a impartir educaci\xF3n b\xE1sica, media, diversificada y t\xE9cnica para el trabajo. Tambi\xE9n desarrolla investigaciones cient\xEDficas relacionadas con las ciencias naturales y sociales, propias de Venezuela, y a transferir a las comunidades y relacionados las herramientas necesarias para ejecutar programas de extensi\xF3n y producci\xF3n que promuevan su autodesarrollo.", "jobTitle": "Coordinador de Inform\xE1tica", "experienceSumary": "Durante mi mandato como Coordinador de TI, he adquirido una amplia experiencia en la gesti\xF3n de servidores de desarrollo y en la prestaci\xF3n de apoyo a diversos sistemas. Mi principal responsabilidad ha sido garantizar el buen funcionamiento de la infraestructura de hardware y software dentro de la organizaci\xF3n. Esto implica supervisar la instalaci\xF3n, la configuraci\xF3n y el mantenimiento de los servidores, as\xED como solucionar cualquier problema t\xE9cnico que surja.", "experienceSumaryTwo": " Adem\xE1s, he trabajado en estrecha colaboraci\xF3n con el equipo de desarrollo para garantizar que se cumplen sus requisitos y que disponen de los recursos necesarios para llevar a cabo sus tareas con eficacia. En general, mi experiencia como coordinador inform\xE1tico me ha proporcionado un conocimiento exhaustivo de las complejidades de la gesti\xF3n y el soporte de los sistemas inform\xE1ticos en un entorno profesional.", "skill": "windows", "skillTwo": "linux", "skillThree": "servidores", "skillFor": "bases de datos", "skillFive": "informes kpis", "skillSix": "planes estrat\xE9gicos", "skillSeven": "redes", "skillEight": "active directory", "skillNine": "soporte a la arquitectura de ti", "skillTen": "pol\xEDticas de seguridad inform\xE1tica", "month": "mayo", "monthTwo": "noviembre", "year": "2016", "yearTwo": "2017", "number": 17, "contry": "venezuela", "href": "http://www.fundacionlasalle.org.ve/" })} </section> ${renderComponent($$result2, "ContadorExperencia", $$ContadorExperiencia, {})} </section> ` })}`;
}, "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/trabajos-dependientes.astro", void 0);

const $$file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/trabajos-dependientes.astro";
const $$url = "/trabajos-dependientes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TrabajosDependientes,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
