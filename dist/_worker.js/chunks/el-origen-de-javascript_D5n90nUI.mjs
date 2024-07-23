globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                         */
import { _ as __astro_tag_component__, H as Fragment, C as createVNode } from './astro/server_DF50JbGT.mjs';
import { $ as $$Image } from './_astro_assets_D3f2sY_6.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./SinglePostLayout_DbLU1a-W.mjs')).default;
  const {layout, ...content} = frontmatter;
  content.file = file;
  content.url = url;
  return createVNode(Layout, {
    file,
    url,
    content,
    frontmatter: content,
    headings: getHeadings(),
    'server:root': true,
    children
  });
};
const frontmatter = {
  "layout": "../../layouts/SinglePostLayout.astro",
  "title": "El origen de JavaScript",
  "emojis": "🌄 🏆",
  "pubDate": "2024-03-14",
  "description": "JavaScript, uno de los lenguajes de programación más utilizados en la actualidad, tuvo unos comienzos humildes.",
  "author": "Gilberto La Rosa",
  "image": {
    "url": "🌊",
    "alt": "El icono del articulo"
  },
  "tags": "#programación"
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
    "slug": "la-batalla-entre-los-gigantes-tecnológicos",
    "text": "La batalla entre los gigantes tecnológicos"
  }, {
    "depth": 2,
    "slug": "la-estandarización-del-lenguaje",
    "text": "La estandarización del lenguaje"
  }, {
    "depth": 2,
    "slug": "evolución-a-través-del-tiempo",
    "text": "Evolución a través del tiempo"
  }, {
    "depth": 2,
    "slug": "la-funcionalidad",
    "text": "La funcionalidad"
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
      }), ", uno de los lenguajes de programación más utilizados en la actualidad, tuvo unos comienzos humildes. Su origen se remonta a principios de los años 90, cuando Internet aún estaba en pañales. En aquella época, las páginas web eran estáticas y carecían de interactividad. Esto llevó a la necesidad de un lenguaje de programación que pudiera dar vida a estas páginas web permitiéndoles responder a las acciones del usuario. Fue entonces cuando apareció ", createVNode(_components.a, {
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
      }), " Corporation, una de las principales empresas de Internet de la época. Eich se encargó de desarrollar un ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Int%C3%A9rprete_(inform%C3%A1tica)",
        children: "lenguaje de scripting"
      }), " para ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Netscape_Navigator",
        children: "Netscape Navigator"
      }), ", el navegador insignia de la empresa. El objetivo era permitir a los desarrolladores escribir código que pudiera ser ejecutado por el navegador en el lado del cliente, es decir, en el ordenador del usuario y no en el servidor. Esto permitiría crear páginas web dinámicas e interactivas."]
    }), "\n", createVNode(_components.h2, {
      id: "el-nombre-perfecto",
      children: "El nombre perfecto"
    }), "\n", createVNode(_components.p, {
      children: ["Inicialmente llamado “Mocha”, el lenguaje pasó a llamarse “LiveScript” y finalmente “", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), "” como estrategia de marketing para aprovechar la popularidad de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Java_(lenguaje_de_programaci%C3%B3n)",
        children: "Java"
      }), ", otro lenguaje de programación que estaba ganando impulso en aquel momento. A pesar de la similitud del nombre, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " tiene poco en común con ", createVNode(_components.a, {
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
      }), ". Rápidamente ganó popularidad entre los desarrolladores web por su sencillez y versatilidad. Con ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), ", los programadores podían manipular elementos de la página, validar formularios, crear animaciones interactivas y realizar otras tareas directamente en el navegador."]
    }), "\n", createVNode(_components.h2, {
      id: "la-batalla-entre-los-gigantes-tecnológicos",
      children: "La batalla entre los gigantes tecnológicos"
    }), "\n", createVNode(_components.p, {
      children: ["En 1996, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Microsoft",
        children: "Microsoft"
      }), " introdujo su propia versión de ", createVNode(_components.a, {
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
      id: "la-estandarización-del-lenguaje",
      children: "La estandarización del lenguaje"
    }), "\n", createVNode(_components.p, {
      children: ["En 1997, un organismo de normalización llamado ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Ecma_International",
        children: "ECMA International"
      }), " publicó una especificación para ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), ", que recibió el nombre de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), ". Esta versión estandarizada de JavaScript ayudó a garantizar la compatibilidad entre distintos navegadores y plataformas. ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), " se convirtió en el nombre oficial de la especificación del lenguaje, mientras que JavaScript siguió siendo el nombre popular utilizado por los desarrolladores."]
    }), "\n", createVNode(_components.h2, {
      id: "evolución-a-través-del-tiempo",
      children: "Evolución a través del tiempo"
    }), "\n", createVNode(_components.p, {
      children: ["A lo largo de los años, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " ha evolucionado significativamente. Periódicamente se publicaban nuevas versiones de ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), " con nuevas funciones y mejoras. Hoy en día, tenemos ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/ECMAScript",
        children: "ECMAScript"
      }), " 6 (ES6), que introdujo muchas características modernas como funciones de flecha, clases y módulos. La última versión es ", createVNode(_components.a, {
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
      children: ["Desde sus humildes comienzos como solución para añadir interactividad a las páginas web, ", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/JavaScript",
        children: "JavaScript"
      }), " se ha convertido en una herramienta indispensable en el desarrollo web. Ahora se utiliza no solo para la programación del lado del cliente, sino también del lado del servidor (", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Node.js",
        children: "Node.js"
      }), "), el desarrollo de aplicaciones móviles (", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/React_Native",
        children: "React Native"
      }), ") e incluso el desarrollo de aplicaciones de escritorio (", createVNode(_components.a, {
        href: "https://es.wikipedia.org/wiki/Electron_(software)",
        children: "Electron"
      }), "). Su versatilidad y adopción generalizada lo convierten en una habilidad esencial para cualquier aspirante a programador en la era digital actual."]
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

const url = "/post/el-origen-de-javascript";
const file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/el-origen-de-javascript.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/el-origen-de-javascript.mdx";
__astro_tag_component__(Content, 'astro:jsx');

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  __usesAstroImage,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
