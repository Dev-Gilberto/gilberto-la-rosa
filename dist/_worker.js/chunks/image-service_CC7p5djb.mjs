globalThis.process ??= {}; globalThis.process.env ??= {};
import { F as baseService } from './astro/assets-service_wYDhUdhy.mjs';
import './_astro_assets_DZ7CHJB7.mjs';

function removeTrailingForwardSlash(path) {
  return path.endsWith("/") ? path.slice(0, path.length - 1) : path;
}
function removeLeadingForwardSlash(path) {
  return path.startsWith("/") ? path.substring(1) : path;
}
function trimSlashes(path) {
  return path.replace(/^\/|\/$/g, "");
}
function isString(path) {
  return typeof path === "string" || path instanceof String;
}
function joinPaths(...paths) {
  return paths.filter(isString).map((path, i) => {
    if (i === 0) {
      return removeTrailingForwardSlash(path);
    } else if (i === paths.length - 1) {
      return removeLeadingForwardSlash(path);
    } else {
      return trimSlashes(path);
    }
  }).join("/");
}
function isRemotePath(src) {
  return /^(?:http|ftp|https|ws):?\/\//.test(src) || src.startsWith("data:");
}

function isESMImportedImage(src) {
    return typeof src === 'object';
}
function matchHostname(url, hostname, allowWildcard) {
    if (!hostname) {
        return true;
    }
    if (!allowWildcard || !hostname.startsWith('*')) {
        return hostname === url.hostname;
    }
    if (hostname.startsWith('**.')) {
        const slicedHostname = hostname.slice(2); // ** length
        return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
    }
    if (hostname.startsWith('*.')) {
        const slicedHostname = hostname.slice(1); // * length
        const additionalSubdomains = url.hostname
            .replace(slicedHostname, '')
            .split('.')
            .filter(Boolean);
        return additionalSubdomains.length === 1;
    }
    return false;
}
function matchPort(url, port) {
    return !port || port === url.port;
}
function matchProtocol(url, protocol) {
    return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchPathname(url, pathname, allowWildcard) {
    if (!pathname) {
        return true;
    }
    if (!pathname.endsWith('*')) {
        return pathname === url.pathname;
    }
    if (pathname.endsWith('/**')) {
        const slicedPathname = pathname.slice(0, -2); // ** length
        return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
    }
    if (pathname.endsWith('/*')) {
        const slicedPathname = pathname.slice(0, -1); // * length
        const additionalPathChunks = url.pathname
            .replace(slicedPathname, '')
            .split('/')
            .filter(Boolean);
        return additionalPathChunks.length === 1;
    }
    return false;
}
function matchPattern(url, remotePattern) {
    return (matchProtocol(url, remotePattern.protocol) &&
        matchHostname(url, remotePattern.hostname, true) &&
        matchPort(url, remotePattern.port) &&
        matchPathname(url, remotePattern.pathname));
}
function isRemoteAllowed(src, { domains = [], remotePatterns = [], }) {
    if (!isRemotePath(src))
        return false;
    const url = new URL(src);
    return (domains.some((domain) => matchHostname(url, domain)) ||
        remotePatterns.some((remotePattern) => matchPattern(url, remotePattern)));
}

const service = {
  ...baseService,
  getURL: (options, imageConfig) => {
    const resizingParams = [];
    if (options.width)
      resizingParams.push(`width=${options.width}`);
    if (options.height)
      resizingParams.push(`height=${options.height}`);
    if (options.quality)
      resizingParams.push(`quality=${options.quality}`);
    if (options.fit)
      resizingParams.push(`fit=${options.fit}`);
    if (options.format)
      resizingParams.push(`format=${options.format}`);
    let imageSource = "";
    if (isESMImportedImage(options.src)) {
      imageSource = options.src.src;
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      imageSource = options.src;
    } else {
      return options.src;
    }
    const imageEndpoint = joinPaths(
      // @ts-expect-error - Property 'env' does not exist on type 'ImportMeta'.ts(2339)
      "/",
      "/cdn-cgi/image",
      resizingParams.join(","),
      imageSource
    );
    return imageEndpoint;
  }
};

export { service as default };
