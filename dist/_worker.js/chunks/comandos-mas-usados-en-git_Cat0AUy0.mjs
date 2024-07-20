globalThis.process ??= {}; globalThis.process.env ??= {};
/* empty css                         */
import { _ as __astro_tag_component__, H as Fragment, C as createVNode } from './astro/server_EQjFAZZG.mjs';
import { $ as $$Image } from './_astro_assets_DZ7CHJB7.mjs';

const MDXLayout = async function ({children}) {
  const Layout = (await import('./SinglePostLayout_DcvwGTik.mjs')).default;
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
  "title": "Comandos más utilizados en Git",
  "emojis": "👈 👏",
  "pubDate": "2024-03-22",
  "description": "Git es un potente sistema de control de versiones que permite a los desarrolladores gestionar y rastrear los cambios realizados en su código.",
  "author": "Gilberto La Rosa",
  "image": {
    "url": "😎",
    "alt": "Emoji del articulo"
  },
  "tags": "#git"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "que-es-git",
    "text": "Que es Git?"
  }, {
    "depth": 2,
    "slug": "el-comando-de-inicio",
    "text": "El comando de inicio"
  }, {
    "depth": 2,
    "slug": "agregando-archivos-y-cambios-en-tu-proyecto",
    "text": "Agregando archivos y cambios en tu proyecto"
  }, {
    "depth": 2,
    "slug": "registrando-los-cambios-realizados",
    "text": "Registrando los cambios realizados"
  }, {
    "depth": 2,
    "slug": "trabajando-en-equipo",
    "text": "Trabajando en equipo"
  }, {
    "depth": 2,
    "slug": "creando-las-populares-ramas-o-bifurcaciones",
    "text": "Creando las populares ramas o bifurcaciones"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "que-es-git",
      children: "Que es Git?"
    }), "\n", createVNode(_components.p, {
      children: "Git es un potente sistema de control de versiones que permite a los desarrolladores gestionar y rastrear los cambios realizados en su código. Su uso está muy extendido en la industria del desarrollo de software, y conocer los comandos más utilizados en Git es esencial para una gestión eficiente y eficaz del código."
    }), "\n", createVNode(_components.h2, {
      id: "el-comando-de-inicio",
      children: "El comando de inicio"
    }), "\n", createVNode(_components.p, {
      children: "Uno de los comandos más utilizados en Git es “git init”. Este comando inicializa un nuevo repositorio Git en el directorio actual, permitiendo a los desarrolladores comenzar el seguimiento de los cambios en su código. Al ejecutar este comando, Git crea una carpeta .git oculta que contiene todos los archivos y datos necesarios para el control de versiones."
    }), "\n", createVNode(_components.p, {
      children: "Ejemplo: Este comando inicia y crea el archivo oculto .gitignore."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " init"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Esta es una configuración básica del archivo .gitignore para un proyecto de Astro."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "md",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "# build output"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "dist/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "# generated types"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ".astro/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "# dependencies"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "node_modules/"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "# logs"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "npm-debug.log*"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "yarn-debug.log*"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "yarn-error.log*"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: "pnpm-debug.log*"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "# environment variables"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ".env"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ".env.production"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#6CB6FF",
              fontWeight: "bold"
            },
            children: "# macOS-specific files"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#ADBAC7"
            },
            children: ".DS_Store"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "agregando-archivos-y-cambios-en-tu-proyecto",
      children: "Agregando archivos y cambios en tu proyecto"
    }), "\n", createVNode(_components.p, {
      children: "Una vez inicializado un repositorio, los desarrolladores pueden empezar a añadirle archivos mediante el comando “git add”. Este comando escenifica los cambios realizados en el código, preparándolo para el commit. Especificando el nombre del archivo o directorio después del comando “git add”, los desarrolladores pueden poner en etapa archivos o directorios específicos. La preparación de los cambios es un paso importante en el flujo de trabajo de Git, ya que permite a los desarrolladores controlar qué cambios se incluyen en una confirmación."
    }), "\n", createVNode(_components.p, {
      children: "Ejemplo: preparando los cambios para hacer el commit."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " add"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " ."
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "registrando-los-cambios-realizados",
      children: "Registrando los cambios realizados"
    }), "\n", createVNode(_components.p, {
      children: "Después de preparar los cambios, los desarrolladores pueden crear una nueva confirmación utilizando el comando “git commit”. Un commit representa una instantánea del código en un momento determinado e incluye un mensaje que describe los cambios realizados. Los commits sirven como puntos de control en el proceso de desarrollo, permitiendo a los desarrolladores navegar fácilmente a través de diferentes versiones de su código y volver a estados anteriores si es necesario. El comando “git commit” suele ir seguido de la opción “-m” para proporcionar un mensaje de confirmación significativo y descriptivo."
    }), "\n", createVNode(_components.p, {
      children: "Ejemplo: no olvides siempre escribir una descripción exacta de lo que hiciste por si estas trabajando en equipo sea más fácil identificar en lo que trabajaste."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " commit"
          }), createVNode(_components.span, {
            style: {
              color: "#6CB6FF"
            },
            children: " -m"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " \"Haciendo mi primer commit con git\""
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "trabajando-en-equipo",
      children: "Trabajando en equipo"
    }), "\n", createVNode(_components.p, {
      children: "Otro comando muy utilizado en Git es “git pull”. Este comando recupera los cambios realizados en el repositorio remoto y los fusiona con la rama local. A menudo se utiliza para actualizar el código local con los últimos cambios de otros miembros del equipo o de un repositorio central. Al extraer actualizaciones con regularidad, los desarrolladores pueden asegurarse de que su código local está actualizado y evitar conflictos al fusionar los cambios."
    }), "\n", createVNode(_components.p, {
      children: "Ejemplo: realiza una fusión o actualización entre los cambios remotos y la rama local."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " pull"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "creando-las-populares-ramas-o-bifurcaciones",
      children: "Creando las populares ramas o bifurcaciones"
    }), "\n", createVNode(_components.p, {
      children: "La creación de ramas es otra característica esencial de Git, y el comando “git branch” se utiliza con frecuencia para gestionar ramas. Con Git, los desarrolladores pueden crear varias ramas para trabajar en distintas funciones o correcciones de errores de forma independiente. El comando “git branch” lista todas las ramas existentes en el repositorio, mientras que el comando “git branch nombre_de_rama>” crea una nueva rama con el nombre especificado. Los desarrolladores pueden pasar de una rama a otra mediante el comando “git checkout”, lo que les permite alternar sin problemas entre distintas tareas."
    }), "\n", createVNode(_components.p, {
      children: "Ejemplo:"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " branch"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " nombre_de_la_rama"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Lista todos los archivos los cuales sufrieron una modificación."
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark-dimmed",
      style: {
        backgroundColor: "#22272e",
        color: "#adbac7",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "sh",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F69D50"
            },
            children: "git"
          }), createVNode(_components.span, {
            style: {
              color: "#96D0FF"
            },
            children: " checkout"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    }), "\n", createVNode(_components.p, {
      children: "Al dia de hoy Git es unos de los controladores de versiones mas utilizados en el mundo de la programación, por ello que es vital aprender a utilizarlo."
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

const url = "/post/comandos-mas-usados-en-git";
const file = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/comandos-mas-usados-en-git.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/comandos-mas-usados-en-git.mdx";
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
