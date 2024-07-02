globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                                               */
import { _ as __astro_tag_component__, n as Fragment, o as createVNode } from '../astro_DMCz-Pb0.mjs';
import { $ as $$Image } from './comandos-mas-usados-en-git_C_V0Qwfu.mjs';

const MDXLayout = async function ({
  children
}) {
  const Layout = (await import('../SinglePostLayout_h4y7auWe.mjs')).default;
  const {
    layout,
    ...content
  } = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    "server:root": true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/SinglePostLayout.astro",
  "title": "El origen de JavaScript",
  "emojis": "\u{1F304} \u{1F3C6}",
  "pubDate": "2024-03-14",
  "description": "JavaScript, uno de los lenguajes de programaci\xF3n m\xE1s utilizados en la actualidad, tuvo unos comienzos humildes.",
  "author": "Gilberto La Rosa",
  "image": {
    "url": "\u{1F30A}",
    "alt": "El icono del articulo"
  },
  "tags": "Programaci\xF3n"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "inicios",
    "text": "Inicios"
  }, {
    "depth": 2,
    "slug": "el-creador",
    "text": "El creador"
  }, {
    "depth": 2,
    "slug": "el-nombre-perfecto",
    "text": "El nombre perfecto"
  }, {
    "depth": 2,
    "slug": "el-gran-debut",
    "text": "El gran debut"
  }, {
    "depth": 2,
    "slug": "la-batalla-entre-los-gigantes-tecnol\xF3gicos",
    "text": "La batalla entre los gigantes tecnol\xF3gicos"
  }, {
    "depth": 2,
    "slug": "la-estandarizaci\xF3n-del-lenguaje",
    "text": "La estandarizaci\xF3n del lenguaje"
  }, {
    "depth": 2,
    "slug": "evoluci\xF3n-a-trav\xE9s-del-tiempo",
    "text": "Evoluci\xF3n a trav\xE9s del tiempo"
  }, {
    "depth": 2,
    "slug": "la-funcionalidad",
    "text": "La funcionalidad"
  }, {
    "depth": 2,
    "slug": "resumen",
    "text": "Resumen"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h2: "h2",
    p: "p",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "inicios",
      children: "Inicios"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), ", uno de los lenguajes de programaci\xF3n m\xE1s utilizados en la actualidad, tuvo unos comienzos humildes. Su origen se remonta a principios de los a\xF1os 90, cuando Internet a\xFAn estaba en pa\xF1ales. En aquella \xE9poca, las p\xE1ginas web eran est\xE1ticas y carec\xEDan de interactividad. Esto llev\xF3 a la necesidad de un lenguaje de programaci\xF3n que pudiera dar vida a estas p\xE1ginas web permiti\xE9ndoles responder a las acciones del usuario. Fue entonces cuando apareci\xF3 ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "el-creador",
      children: "El creador"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " fue creado por ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Brendan_Eich",
        children: "Brendan Eich"
      }), ", un programador que trabajaba en ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Netscape_Communications_Corporation",
        children: "Netscape Communications"
      }), " Corporation, una de las principales empresas de Internet de la \xE9poca. Eich se encarg\xF3 de desarrollar un ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Int%C3%A9rprete_(inform%C3%A1tica)",
        children: "lenguaje de scripting"
      }), " para ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Netscape_Navigator",
        children: "Netscape Navigator"
      }), ", el navegador insignia de la empresa. El objetivo era permitir a los desarrolladores escribir c\xF3digo que pudiera ser ejecutado por el navegador en el lado del cliente, es decir, en el ordenador del usuario y no en el servidor. Esto permitir\xEDa crear p\xE1ginas web din\xE1micas e interactivas."]
    }), "\n", createVNode(_components.h2, {
      id: "el-nombre-perfecto",
      children: "El nombre perfecto"
    }), "\n", createVNode(_components.p, {
      children: ["Inicialmente llamado \u201CMocha\u201D, el lenguaje pas\xF3 a llamarse \u201CLiveScript\u201D y finalmente \u201C", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), "\u201D como estrategia de marketing para aprovechar la popularidad de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)",
        children: "Java"
      }), ", otro lenguaje de programaci\xF3n que estaba ganando impulso en aquel momento. A pesar de la similitud del nombre, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " tiene poco en com\xFAn con ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)",
        children: "Java"
      }), " en cuanto a sintaxis y funcionalidad."]
    }), "\n", createVNode(_components.h2, {
      id: "el-gran-debut",
      children: "El gran debut"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " hizo su debut en septiembre de 1995, con el lanzamiento de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Netscape_Navigator",
        children: "Netscape Navigator 2.0"
      }), ". R\xE1pidamente gan\xF3 popularidad entre los desarrolladores web por su sencillez y versatilidad. Con ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), ", los programadores pod\xEDan manipular elementos de la p\xE1gina, validar formularios, crear animaciones interactivas y realizar otras tareas directamente en el navegador."]
    }), "\n", createVNode(_components.h2, {
      id: "la-batalla-entre-los-gigantes-tecnol\xF3gicos",
      children: "La batalla entre los gigantes tecnol\xF3gicos"
    }), "\n", createVNode(_components.p, {
      children: ["En 1996, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Microsoft",
        children: "Microsoft"
      }), " introdujo su propia versi\xF3n de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), ", denominada ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JScript",
        children: "JScript"
      }), ", como parte de su navegador Internet Explorer. Esto dio lugar a un periodo de competencia entre ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Netscape_Communications_Corporation",
        children: "Netscape"
      }), " y ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Microsoft",
        children: "Microsoft"
      }), ", en el que cada empresa introdujo nuevas funciones y mejoras en sus respectivas implementaciones de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "la-estandarizaci\xF3n-del-lenguaje",
      children: "La estandarizaci\xF3n del lenguaje"
    }), "\n", createVNode(_components.p, {
      children: ["En 1997, un organismo de normalizaci\xF3n llamado ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Ecma_International",
        children: "ECMA International"
      }), " public\xF3 una especificaci\xF3n para ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), ", que recibi\xF3 el nombre de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), ". Esta versi\xF3n estandarizada de JavaScript ayud\xF3 a garantizar la compatibilidad entre distintos navegadores y plataformas. ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), " se convirti\xF3 en el nombre oficial de la especificaci\xF3n del lenguaje, mientras que JavaScript sigui\xF3 siendo el nombre popular utilizado por los desarrolladores."]
    }), "\n", createVNode(_components.h2, {
      id: "evoluci\xF3n-a-trav\xE9s-del-tiempo",
      children: "Evoluci\xF3n a trav\xE9s del tiempo"
    }), "\n", createVNode(_components.p, {
      children: ["A lo largo de los a\xF1os, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " ha evolucionado significativamente. Peri\xF3dicamente se publicaban nuevas versiones de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), " con nuevas funciones y mejoras. Hoy en d\xEDa, tenemos ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), " 6 (ES6), que introdujo muchas caracter\xEDsticas modernas como funciones de flecha, clases y m\xF3dulos. La \xFAltima versi\xF3n es ", createVNode(_components.a, {
        href: "",
        children: "ECMAScript"
      }), " 2021, que sigue mejorando las capacidades de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), "."]
    }), "\n", createVNode(_components.h2, {
      id: "la-funcionalidad",
      children: "La funcionalidad"
    }), "\n", createVNode(_components.p, {
      children: ["Desde sus humildes comienzos como soluci\xF3n para a\xF1adir interactividad a las p\xE1ginas web, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " se ha convertido en una herramienta indispensable en el desarrollo web. Ahora se utiliza no solo para la programaci\xF3n del lado del cliente, sino tambi\xE9n del lado del servidor (", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Node.js",
        children: "Node.js"
      }), "), el desarrollo de aplicaciones m\xF3viles (", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/React_Native",
        children: "React Native"
      }), ") e incluso el desarrollo de aplicaciones de escritorio (", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Electron_(software)",
        children: "Electron"
      }), "). Su versatilidad y adopci\xF3n generalizada lo convierten en una habilidad esencial para cualquier aspirante a programador en la era digital actual."]
    }), "\n", createVNode(_components.h2, {
      id: "resumen",
      children: "Resumen"
    }), "\n", createVNode(_components.p, {
      children: ["En conclusi\xF3n, el origen de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " se remonta a los primeros d\xEDas de Internet, cuando exist\xEDa la necesidad de un lenguaje de programaci\xF3n que pudiera aportar interactividad a las p\xE1ginas web est\xE1ticas. La creaci\xF3n de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " por ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Brendan_Eich",
        children: "Brendan Eich"
      }), " en ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Netscape_Communications_Corporation",
        children: "Netscape"
      }), " allan\xF3 el camino para el desarrollo web din\xE1mico e interactivo. Con el tiempo, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " evolucion\xF3 a trav\xE9s de la estandarizaci\xF3n y la mejora continua, convirti\xE9ndose en uno de los lenguajes de programaci\xF3n m\xE1s utilizados en la actualidad. Su impacto en el mundo digital es incalculable y su futuro parece prometedor, ya que sigue adapt\xE1ndose y creciendo junto a las tecnolog\xEDas modernas."]
    })]
  });
}
function MDXContent(props = {}) {
  return createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  });
}
__astro_tag_component__(getHeadings, "astro:jsx");
__astro_tag_component__(MDXContent, "astro:jsx");
const url = "/blog/el-origen-de-javascript";
const file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/blog/el-origen-de-javascript.mdx";
const Content = (props = {}) => MDXContent({
											...props,
											components: { Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
										});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/blog/el-origen-de-javascript.mdx";

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
