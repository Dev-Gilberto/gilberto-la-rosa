globalThis.process ??= {}; globalThis.process.env ??= {};
import { u as bold, v as red, y as yellow, w as dim, x as blue, z as escape, D as DEFAULT_404_COMPONENT } from './astro/server_EQjFAZZG.mjs';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function template({
  title,
  pathname,
  statusCode = 404,
  tabTitle,
  body
}) {
  return `<!doctype html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>${tabTitle}</title>
		<style>
			:root {
				--gray-10: hsl(258, 7%, 10%);
				--gray-20: hsl(258, 7%, 20%);
				--gray-30: hsl(258, 7%, 30%);
				--gray-40: hsl(258, 7%, 40%);
				--gray-50: hsl(258, 7%, 50%);
				--gray-60: hsl(258, 7%, 60%);
				--gray-70: hsl(258, 7%, 70%);
				--gray-80: hsl(258, 7%, 80%);
				--gray-90: hsl(258, 7%, 90%);
				--black: #13151A;
				--accent-light: #E0CCFA;
			}

			* {
				box-sizing: border-box;
			}

			html {
				background: var(--black);
				color-scheme: dark;
				accent-color: var(--accent-light);
			}

			body {
				background-color: var(--gray-10);
				color: var(--gray-80);
				font-family: ui-monospace, Menlo, Monaco, "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro", "Fira Mono", "Droid Sans Mono", "Courier New", monospace;
				line-height: 1.5;
				margin: 0;
			}

			a {
				color: var(--accent-light);
			}

			.center {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				height: 100vh;
				width: 100vw;
			}

			h1 {
				margin-bottom: 8px;
				color: white;
				font-family: system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
				font-weight: 700;
				margin-top: 1rem;
				margin-bottom: 0;
			}

			.statusCode {
				color: var(--accent-light);
			}

			.astro-icon {
				height: 124px;
				width: 124px;
			}

			pre, code {
				padding: 2px 8px;
				background: rgba(0,0,0, 0.25);
				border: 1px solid rgba(255,255,255, 0.25);
				border-radius: 4px;
				font-size: 1.2em;
				margin-top: 0;
				max-width: 60em;
			}
		</style>
	</head>
	<body>
		<main class="center">
			<svg class="astro-icon" xmlns="http://www.w3.org/2000/svg" width="64" height="80" viewBox="0 0 64 80" fill="none"> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="white"/> <path d="M20.5253 67.6322C16.9291 64.3531 15.8793 57.4632 17.3776 52.4717C19.9755 55.6188 23.575 56.6157 27.3035 57.1784C33.0594 58.0468 38.7122 57.722 44.0592 55.0977C44.6709 54.7972 45.2362 54.3978 45.9045 53.9931C46.4062 55.4451 46.5368 56.9109 46.3616 58.4028C45.9355 62.0362 44.1228 64.8429 41.2397 66.9705C40.0868 67.8215 38.8669 68.5822 37.6762 69.3846C34.0181 71.8508 33.0285 74.7426 34.403 78.9491C34.4357 79.0516 34.4649 79.1541 34.5388 79.4042C32.6711 78.5705 31.3069 77.3565 30.2674 75.7604C29.1694 74.0757 28.6471 72.2121 28.6196 70.1957C28.6059 69.2144 28.6059 68.2244 28.4736 67.257C28.1506 64.8985 27.0406 63.8425 24.9496 63.7817C22.8036 63.7192 21.106 65.0426 20.6559 67.1268C20.6215 67.2865 20.5717 67.4446 20.5218 67.6304L20.5253 67.6322Z" fill="url(#paint0_linear_738_686)"/> <path d="M0 51.6401C0 51.6401 10.6488 46.4654 21.3274 46.4654L29.3786 21.6102C29.6801 20.4082 30.5602 19.5913 31.5538 19.5913C32.5474 19.5913 33.4275 20.4082 33.7289 21.6102L41.7802 46.4654C54.4274 46.4654 63.1076 51.6401 63.1076 51.6401C63.1076 51.6401 45.0197 2.48776 44.9843 2.38914C44.4652 0.935933 43.5888 0 42.4073 0H20.7022C19.5206 0 18.6796 0.935933 18.1251 2.38914C18.086 2.4859 0 51.6401 0 51.6401Z" fill="white"/> <defs> <linearGradient id="paint0_linear_738_686" x1="31.554" y1="75.4423" x2="39.7462" y2="48.376" gradientUnits="userSpaceOnUse"> <stop stop-color="#D83333"/> <stop offset="1" stop-color="#F041FF"/> </linearGradient> </defs> </svg>
			<h1>${statusCode ? `<span class="statusCode">${statusCode}: </span> ` : ""}<span class="statusMessage">${title}</span></h1>
			${body || `
				<pre>Path: ${escape(pathname)}</pre>
			`}
			</main>
	</body>
</html>`;
}

const DEFAULT_404_ROUTE = {
  component: DEFAULT_404_COMPONENT,
  generate: () => "",
  params: [],
  pattern: /\/404/,
  prerender: false,
  pathname: "/404",
  segments: [[{ content: "404", dynamic: false, spread: false }]],
  type: "page",
  route: "/404",
  fallbackRoutes: [],
  isIndex: false
};
function ensure404Route(manifest) {
  if (!manifest.routes.some((route) => route.route === "/404")) {
    manifest.routes.push(DEFAULT_404_ROUTE);
  }
  return manifest;
}
async function default404Page({ pathname }) {
  return new Response(
    template({
      statusCode: 404,
      title: "Not found",
      tabTitle: "404: Not Found",
      pathname
    }),
    { status: 404, headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
}
default404Page.isAstroComponentFactory = true;
const default404Instance = {
  default: default404Page
};

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Gilberto%20La%20Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"body::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n.img-404-animate[data-astro-cid-zetdm5md]{max-width:100%;width:21rem;height:21rem;position:absolute;margin-left:auto;margin-right:auto;left:0;right:0;text-align:center;z-index:-2;animation:animacion cubic-bezier(.42,0,.58,1) 5s infinite alternate}@keyframes animacion{0%{transform:translateY(0)}to{transform:translateY(-30px)}}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"article p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/post/comandos-mas-usados-en-git","isIndex":false,"type":"page","pattern":"^\\/post\\/comandos-mas-usados-en-git\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"comandos-mas-usados-en-git","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/comandos-mas-usados-en-git.mdx","pathname":"/post/comandos-mas-usados-en-git","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"article p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/post/como-obtener-tu-primer-empleo-como-web-developer","isIndex":false,"type":"page","pattern":"^\\/post\\/como-obtener-tu-primer-empleo-como-web-developer\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"como-obtener-tu-primer-empleo-como-web-developer","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/como-obtener-tu-primer-empleo-como-web-developer.mdx","pathname":"/post/como-obtener-tu-primer-empleo-como-web-developer","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"article p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/post/como-utilizar-git-y-github-en-un-ambiente-profesional","isIndex":false,"type":"page","pattern":"^\\/post\\/como-utilizar-git-y-github-en-un-ambiente-profesional\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"como-utilizar-git-y-github-en-un-ambiente-profesional","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/como-utilizar-git-y-github-en-un-ambiente-profesional.mdx","pathname":"/post/como-utilizar-git-y-github-en-un-ambiente-profesional","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"article p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/post/el-origen-de-javascript","isIndex":false,"type":"page","pattern":"^\\/post\\/el-origen-de-javascript\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"el-origen-de-javascript","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/el-origen-de-javascript.mdx","pathname":"/post/el-origen-de-javascript","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"article p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/post/guia-para-ser-un-desarrollador-web","isIndex":false,"type":"page","pattern":"^\\/post\\/guia-para-ser-un-desarrollador-web\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"guia-para-ser-un-desarrollador-web","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/guia-para-ser-un-desarrollador-web.mdx","pathname":"/post/guia-para-ser-un-desarrollador-web","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"article p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/post/que-es-devin-el-primer-ingeniero-de-software-de-ia","isIndex":false,"type":"page","pattern":"^\\/post\\/que-es-devin-el-primer-ingeniero-de-software-de-ia\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"que-es-devin-el-primer-ingeniero-de-software-de-ia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/que-es-devin-el-primer-ingeniero-de-software-de-ia.mdx","pathname":"/post/que-es-devin-el-primer-ingeniero-de-software-de-ia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"article p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo","isIndex":false,"type":"page","pattern":"^\\/post\\/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.mdx","pathname":"/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"body::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/trabajos-dependientes","isIndex":false,"type":"page","pattern":"^\\/trabajos-dependientes\\/?$","segments":[[{"content":"trabajos-dependientes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/trabajos-dependientes.astro","pathname":"/trabajos-dependientes","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Oozc_hRb.js"},{"stage":"head-inline","children":"!(function(w,p,f,c){if(!window.crossOriginIsolated && !navigator.serviceWorker) return;c=w[p]=Object.assign(w[p]||{},{\"lib\":\"/~partytown/\",\"debug\":false});c[f]=(c[f]||[])})(window,'partytown','forward');/* Partytown 0.10.2 - MIT builder.io */\nconst t={preserveBehavior:!1},e=e=>{if(\"string\"==typeof e)return[e,t];const[n,r=t]=e;return[n,{...t,...r}]},n=Object.freeze((t=>{const e=new Set;let n=[];do{Object.getOwnPropertyNames(n).forEach((t=>{\"function\"==typeof n[t]&&e.add(t)}))}while((n=Object.getPrototypeOf(n))!==Object.prototype);return Array.from(e)})());!function(t,r,o,i,a,s,c,d,l,p,u=t,f){function h(){f||(f=1,\"/\"==(c=(s.lib||\"/~partytown/\")+(s.debug?\"debug/\":\"\"))[0]&&(l=r.querySelectorAll('script[type=\"text/partytown\"]'),i!=t?i.dispatchEvent(new CustomEvent(\"pt1\",{detail:t})):(d=setTimeout(v,1e4),r.addEventListener(\"pt0\",w),a?y(1):o.serviceWorker?o.serviceWorker.register(c+(s.swPath||\"partytown-sw.js\"),{scope:c}).then((function(t){t.active?y():t.installing&&t.installing.addEventListener(\"statechange\",(function(t){\"activated\"==t.target.state&&y()}))}),console.error):v())))}function y(e){p=r.createElement(e?\"script\":\"iframe\"),t._pttab=Date.now(),e||(p.style.display=\"block\",p.style.width=\"0\",p.style.height=\"0\",p.style.border=\"0\",p.style.visibility=\"hidden\",p.setAttribute(\"aria-hidden\",!0)),p.src=c+\"partytown-\"+(e?\"atomics.js?v=0.10.2\":\"sandbox-sw.html?\"+t._pttab),r.querySelector(s.sandboxParent||\"body\").appendChild(p)}function v(n,o){for(w(),i==t&&(s.forward||[]).map((function(n){const[r]=e(n);delete t[r.split(\".\")[0]]})),n=0;n<l.length;n++)(o=r.createElement(\"script\")).innerHTML=l[n].innerHTML,o.nonce=s.nonce,r.head.appendChild(o);p&&p.parentNode.removeChild(p)}function w(){clearTimeout(d)}s=t.partytown||{},i==t&&(s.forward||[]).map((function(r){const[o,{preserveBehavior:i}]=e(r);u=t,o.split(\".\").map((function(e,r,o){var a;u=u[o[r]]=r+1<o.length?u[o[r]]||(a=o[r+1],n.includes(a)?[]:{}):(()=>{let e=null;if(i){const{methodOrProperty:n,thisObject:r}=((t,e)=>{let n=t;for(let t=0;t<e.length-1;t+=1)n=n[e[t]];return{thisObject:n,methodOrProperty:e.length>0?n[e[e.length-1]]:void 0}})(t,o);\"function\"==typeof n&&(e=(...t)=>n.apply(r,...t))}return function(){let n;return e&&(n=e(arguments)),(t._ptf=t._ptf||[]).push(o,arguments),n}})()}))})),\"complete\"==r.readyState?h():(t.addEventListener(\"DOMContentLoaded\",h),t.addEventListener(\"load\",h))}(window,document,navigator,top,window.crossOriginIsolated);;(e=>{e.addEventListener(\"astro:before-swap\",e=>{let r=document.body.querySelector(\"iframe[src*='/~partytown/']\");e.newDocument.body.append(r)})})(document);"}],"styles":[{"type":"external","src":"/_astro/index.DNOg_urm.css"},{"type":"inline","content":"li[data-astro-cid-7nqkypoh]{box-shadow:none;transition:all .3s ease-in-out}li[data-astro-cid-7nqkypoh]:hover{box-shadow:8px 10px 0 var(--hover-orange)}\narticle p{font-size:1.3em;font-weight:300;letter-spacing:.025em;margin-bottom:2rem}article h2{font-size:2.2em;line-height:1;font-weight:700;margin-bottom:1.5rem;font-family:var(--font-nav)}@media (min-width: 768px){article h2{font-size:4em}}p a{font-weight:500;text-decoration:none;transition:all .3s ease-in-out}p a:hover{text-decoration:underline}article pre{font-size:.7em;padding:1.5rem;border-radius:.75rem;margin-bottom:1.5rem}.astro-code{background-color:#000}\nbody::-webkit-scrollbar{-webkit-appearance:none}body::-webkit-scrollbar:vertical{width:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar:horizontal{height:15px;background-color:var(--gray-dark-color)}body::-webkit-scrollbar-button{display:none}body::-webkit-scrollbar-button:increment{display:none}body::-webkit-scrollbar-thumb{background-color:var(--bg-global);border-radius:5px;border:solid 3px var(--gray-dark-color)}body::-webkit-scrollbar-track{border-radius:5px}:root{--Font-global: \"Fira Mono\", monospace;--font-nav: \"Antonio\", sans-serif;--bg-global: #f5efe7;--text-color-global: #213555;--navy-color: #4f709c;--beige-color: #d8c4b6;--gray-dark-color: #212121;--blue-color: #6ab0e4;--hover-orange: #f79533;--degra-text-rainbow: linear-gradient( 90deg, #f79533, #f37055, #ef4e7b, #a166ab, #5073b8, #1098ad, #07b39b, #6fba82 )}*,*:before,*:after{box-sizing:border-box}*{-webkit-user-select:var(--hover-orange);-moz-user-select:var(--hover-orange);user-select:var(--hover-orange)}*::selection{background:var(--hover-orange);color:var(--bg-global)}*::-moz-selection{background:var(--hover-orange);color:var(--bg-global)}html{font-family:var(--Font-global);background:var(--bg-global);font-size:1.3em;color:var(--gray-dark-color);scroll-behavior:smooth;-webkit-font-smoothing:antialiased;position:relative}.fira-mono-regular{font-family:Fira Mono,monospace;font-weight:400;font-style:normal}.fira-mono-medium{font-family:Fira Mono,monospace;font-weight:500;font-style:normal}.fira-mono-bold{font-family:Fira Mono,monospace;font-weight:700;font-style:normal}.text-deg{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent}.animate-text-deg{background:var(--degra-text-rainbow);background-size:300%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:fluido 6s ease-in-out infinite}@keyframes fluido{0%{background-position:0 50%}50%{background-position:100% 50%}to{background-position:0 50%}}h1{background:var(--degra-text-rainbow);-webkit-background-clip:text;background-clip:text;color:transparent;margin:3rem 0}.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0}}@keyframes astroFadeOut{to{opacity:0}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://gilberto-la-rosa.xyz/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/comandos-mas-usados-en-git.mdx",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/tags/[tags].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/como-obtener-tu-primer-empleo-como-web-developer.mdx",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/como-utilizar-git-y-github-en-un-ambiente-profesional.mdx",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/el-origen-de-javascript.mdx",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/guia-para-ser-un-desarrollador-web.mdx",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/que-es-devin-el-primer-ingeniero-de-software-de-ia.mdx",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.mdx",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/pages/trabajos-dependientes.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/layouts/SinglePostLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/post/comandos-mas-usados-en-git@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/components/AllTags.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tags]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/post/como-obtener-tu-primer-empleo-como-web-developer@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/post/como-utilizar-git-y-github-en-un-ambiente-profesional@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/post/el-origen-de-javascript@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/post/guia-para-ser-un-desarrollador-web@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/post/que-es-devin-el-primer-ingeniero-de-software-de-ia@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/trabajos-dependientes@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/post/comandos-mas-usados-en-git@_@mdx":"pages/post/comandos-mas-usados-en-git.astro.mjs","\u0000@astro-page:src/pages/post/como-obtener-tu-primer-empleo-como-web-developer@_@mdx":"pages/post/como-obtener-tu-primer-empleo-como-web-developer.astro.mjs","\u0000@astro-page:src/pages/post/como-utilizar-git-y-github-en-un-ambiente-profesional@_@mdx":"pages/post/como-utilizar-git-y-github-en-un-ambiente-profesional.astro.mjs","\u0000@astro-page:src/pages/post/el-origen-de-javascript@_@mdx":"pages/post/el-origen-de-javascript.astro.mjs","\u0000@astro-page:src/pages/post/guia-para-ser-un-desarrollador-web@_@mdx":"pages/post/guia-para-ser-un-desarrollador-web.astro.mjs","\u0000@astro-page:src/pages/post/que-es-devin-el-primer-ingeniero-de-software-de-ia@_@mdx":"pages/post/que-es-devin-el-primer-ingeniero-de-software-de-ia.astro.mjs","\u0000@astro-page:src/pages/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo@_@mdx":"pages/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/tags/[tags]@_@astro":"pages/tags/_tags_.astro.mjs","\u0000@astro-page:src/pages/trabajos-dependientes@_@astro":"pages/trabajos-dependientes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/node_modules/@astrojs/cloudflare/dist/entrypoints/image-service.js":"chunks/image-service_CC7p5djb.mjs","C:/Users/Gilberto La Rosa/Desktop/WebSitiesStactics/gilberto-la-rosa/src/layouts/SinglePostLayout.astro":"chunks/SinglePostLayout_Ar5i7fIq.mjs","\u0000@astrojs-manifest":"manifest_Cr5txkDz.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.Oozc_hRb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DNOg_urm.css","/404.svg","/AVATAR-GILBERTO.jpg","/codafter-cl.png","/logo.svg","/_astro/hoisted.Oozc_hRb.js","/_worker.js/index.js","/_worker.js/manifest_Cr5txkDz.mjs","/_worker.js/renderers.mjs","/_worker.js/_noop-middleware.mjs","/_worker.js/chunks/astro_CJQF6Z-k.mjs","/_worker.js/chunks/ButtonBack_De9OMSQ3.mjs","/_worker.js/chunks/comandos-mas-usados-en-git_CBZtWmQJ.mjs","/_worker.js/chunks/como-obtener-tu-primer-empleo-como-web-developer_DIHbkjoW.mjs","/_worker.js/chunks/como-utilizar-git-y-github-en-un-ambiente-profesional_C6eJtS43.mjs","/_worker.js/chunks/el-origen-de-javascript_4-xO2Lx-.mjs","/_worker.js/chunks/guia-para-ser-un-desarrollador-web_BYDXBX-Y.mjs","/_worker.js/chunks/image-service_CC7p5djb.mjs","/_worker.js/chunks/Layout_DiJaf4w2.mjs","/_worker.js/chunks/Posts_BCNUSPrc.mjs","/_worker.js/chunks/que-es-devin-el-primer-ingeniero-de-software-de-ia_Dvj9slGD.mjs","/_worker.js/chunks/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo_CnXzICxi.mjs","/_worker.js/chunks/SinglePostLayout_Ar5i7fIq.mjs","/_worker.js/chunks/SocialNetwork_Gqnfit1c.mjs","/_worker.js/chunks/utils_BneGKSZi.mjs","/_worker.js/chunks/_astro_assets_DZ7CHJB7.mjs","/_worker.js/pages/404.astro.mjs","/_worker.js/pages/index.astro.mjs","/_worker.js/pages/robots.txt.astro.mjs","/_worker.js/pages/trabajos-dependientes.astro.mjs","/_worker.js/pages/_image.astro.mjs","/_worker.js/_astro/index.DNOg_urm.css","/_worker.js/chunks/astro/assets-service_wYDhUdhy.mjs","/_worker.js/chunks/astro/env-setup_nxDOIah1.mjs","/_worker.js/chunks/astro/server_EQjFAZZG.mjs","/_worker.js/pages/post/comandos-mas-usados-en-git.astro.mjs","/_worker.js/pages/post/como-obtener-tu-primer-empleo-como-web-developer.astro.mjs","/_worker.js/pages/post/como-utilizar-git-y-github-en-un-ambiente-profesional.astro.mjs","/_worker.js/pages/post/el-origen-de-javascript.astro.mjs","/_worker.js/pages/post/guia-para-ser-un-desarrollador-web.astro.mjs","/_worker.js/pages/post/que-es-devin-el-primer-ingeniero-de-software-de-ia.astro.mjs","/_worker.js/pages/post/que-es-la-inteligencia-artificial-y-cual-es-su-impacto-en-el-mundo.astro.mjs","/_worker.js/pages/tags/_tags_.astro.mjs","/~partytown/partytown-atomics.js","/~partytown/partytown-media.js","/~partytown/partytown-sw.js","/~partytown/partytown.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"serverIslandNameMap":[],"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, DEFAULT_404_ROUTE as D, Logger as L, default404Instance as d, ensure404Route as e, getEventPrefix as g, levels as l, manifest as m };
