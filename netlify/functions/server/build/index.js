var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const url = new URL(request.url);
  const cookie = (0, import_remix.createCookie)("pabio_v20220123_locale", {
    path: "/",
    httpOnly: true,
    sameSite: "strict"
  });
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  responseHeaders.set("Set-Cookie", await cookie.serialize(url.pathname.split("/")[1]));
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/root.tsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  meta: () => meta
});
init_react();
var import_react2 = __toModule(require("react"));
var import_remix4 = __toModule(require_remix());

// app/components/Header/index.tsx
init_react();
var import_remix2 = __toModule(require_remix());

// app/helpers/useMedia.ts
init_react();
var import_react = __toModule(require("react"));
var useMedia = (queries, values, defaultValue) => {
  const mediaQueryLists = queries.map((q) => window.matchMedia(q));
  const getValue = () => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches);
    return (values == null ? void 0 : values[index]) || defaultValue;
  };
  const [value, setValue] = (0, import_react.useState)(getValue);
  (0, import_react.useEffect)(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach((mql) => mql.addListener(handler));
    return () => mediaQueryLists.forEach((mql) => mql.removeListener(handler));
  }, []);
  return value;
};
var useMedia_default = useMedia;

// app/assets/images/logo.png
var logo_default = "/build/_assets/logo-BHSRVWXK.png";

// app/components/Header/index.tsx
var Header = (props) => {
  const { navActive, setNavActive } = props;
  const location = (0, import_remix2.useLocation)();
  const navLinks = [{ name: "Home", route: "/" }, { name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Contact", route: "/contact" }];
  let isMobile = null;
  if (typeof window !== "undefined") {
    isMobile = useMedia_default(["(min-width: 1250px)", "(max-width: 1249px)"], [false, true], false);
  }
  const onClickHandler = () => {
    setNavActive(!navActive);
  };
  return /* @__PURE__ */ React.createElement("header", null, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mobile-nav container mobile-nav-container"
  }, /* @__PURE__ */ React.createElement("img", {
    style: { pointerEvents: "none", position: "relative", marginRight: "auto !important" },
    id: "mobile-logo",
    src: logo_default,
    alt: "mobile_company_logo",
    height: "60"
  }), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    style: { zIndex: 9, position: "absolute", left: 0, top: 0, width: "100%", height: "100%", transform: "translate(-50%)" },
    to: "/"
  }), /* @__PURE__ */ React.createElement("button", {
    "aria-label": "open the menu",
    id: "menu-button",
    className: `hamburger hamburger--spring ${isMobile && navActive ? "is-active" : ""}`,
    onClick: onClickHandler,
    type: "button"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-box"
  }, /* @__PURE__ */ React.createElement("span", {
    "aria-hidden": "true",
    className: "hamburger-inner"
  }))))), /* @__PURE__ */ React.createElement("nav", null, isMobile ? /* @__PURE__ */ React.createElement("div", {
    style: navActive ? { width: "60%", position: "fixed" } : { width: 0 },
    className: "navbar-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "side-menu",
    className: "side-nav"
  }, /* @__PURE__ */ React.createElement("img", {
    style: { pointerEvents: "none", position: "relative", marginRight: "auto !important" },
    src: logo_default,
    alt: "company logo",
    width: "100px"
  }), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    style: { zIndex: 9, position: "absolute", left: 0, top: 0, width: "100%", height: "100%", transform: "translate(-50%)" },
    to: "/"
  }), /* @__PURE__ */ React.createElement("ul", {
    id: "on-top",
    className: `navbar-links ${!navActive ? "clicked" : ""}`
  }, navLinks.map((navLink) => {
    return /* @__PURE__ */ React.createElement("li", {
      onClick: onClickHandler,
      style: navActive ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" },
      key: navLink.name + navLink.route,
      className: "nav-li"
    }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
      style: navActive || !isMobile ? { opacity: 1, visibility: "visible" } : { opacity: 0, visibility: "hidden" },
      className: location.pathname === navLink.route ? "active-menu" : "",
      to: navLink.route
    }, navLink.name));
  })))) : /* @__PURE__ */ React.createElement("div", {
    style: { width: 0 },
    className: "navbar-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "side-menu",
    className: "side-nav"
  }, /* @__PURE__ */ React.createElement("img", {
    style: { pointerEvents: "none", position: "relative", marginRight: "auto !important" },
    src: logo_default,
    alt: "company logo",
    width: "100px"
  }), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    style: { zIndex: 9, position: "absolute", left: 0, top: 0, width: "100%", height: "100%", transform: "translate(-50%)" },
    to: "/"
  }), /* @__PURE__ */ React.createElement("ul", {
    id: "on-top",
    className: `navbar-links ${!navActive ? "clicked" : ""}`
  }, navLinks.map((navLink) => {
    return /* @__PURE__ */ React.createElement("li", {
      onClick: onClickHandler,
      key: navLink.name + navLink.route,
      className: "nav-li"
    }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
      className: location.pathname === navLink.route ? "active-menu" : "",
      to: navLink.route
    }, navLink.name));
  }))))));
};
var Header_default = Header;

// app/components/Footer/index.tsx
init_react();
var import_remix3 = __toModule(require_remix());
var Footer = () => {
  const navLinks = [{ name: "Home", route: "/" }, { name: "About", route: "/about" }, { name: "Services", route: "/services" }, { name: "Contact", route: "/contact" }];
  return /* @__PURE__ */ React.createElement("footer", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "footer-img light-mode-svg",
    src: "https://d33wubrfki0l68.cloudfront.net/c272e13f11fec5e8a82b6342bc194b3eb74b5b72/7cf10/images/footer-swoosh.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "footer-img dark-mode-svg",
    src: "https://d33wubrfki0l68.cloudfront.net/3b756ae30ef51ccd8564c2978ea8a5a70f1931f8/95db7/images/footer-swoosh-dark.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "flex-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "footer-item image-box"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "footer-logo mobile-display",
    src: logo_default,
    alt: "alki digital web designs logo",
    height: "50"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "footer-logo desktop-display",
    src: logo_default,
    alt: "alki digital web designs logo",
    height: "50"
  }), /* @__PURE__ */ React.createElement("a", {
    href: "mailto:alkidigital.webdesign@gmail.com"
  }, "alkidigital.webdesign@gmail.com"), /* @__PURE__ */ React.createElement("a", {
    href: "tel:509-481-7512"
  }, "(509)481-7512")), /* @__PURE__ */ React.createElement("div", {
    className: "footer-item"
  }, /* @__PURE__ */ React.createElement("h2", null, "Navigation"), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "footer-line"
  }), navLinks.map((navLink) => {
    return /* @__PURE__ */ React.createElement(import_remix3.Link, {
      key: navLink.name,
      className: "link",
      to: navLink.route
    }, navLink.name);
  })), /* @__PURE__ */ React.createElement("div", {
    className: "footer-item"
  }, /* @__PURE__ */ React.createElement("h2", null, "Services"), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "footer-line"
  }), /* @__PURE__ */ React.createElement("p", null, "Web Design"), /* @__PURE__ */ React.createElement("p", null, "Website Maintenance"), /* @__PURE__ */ React.createElement("p", null, "SEO Services"), /* @__PURE__ */ React.createElement("p", null, "Content Creation"), /* @__PURE__ */ React.createElement("p", null, "Logo Design")))), /* @__PURE__ */ React.createElement("div", {
    className: "branding"
  }, /* @__PURE__ */ React.createElement("p", null, "Copyright \xA9 2021 | Alki Digital Web Services | All Rights Reserved")));
};
var Footer_default = Footer;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/root.tsx
var meta = () => {
  return { title: "Alki Digital | Web Design" };
};
var BaseTemplate = ({ children }) => /* @__PURE__ */ React.createElement("html", {
  lang: "en"
}, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
  charSet: "UTF-8"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1.0"
}), /* @__PURE__ */ React.createElement("meta", {
  "http-equiv": "X-UA-Compatible",
  content: "ie=edge"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "description",
  content: "No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo."
}), /* @__PURE__ */ React.createElement("meta", {
  name: "keywords",
  content: "small business web designer usa, small business web developer usa, web developer near me usa, affordable web design usa, affordable business website usa, \n    web design agency usa, affordable web design agency for small businesses, custom web development usa, web design ageency, web design services usa, website designing compnay usa"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "format-detection",
  content: "telephone=no"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "theme-color",
  content: "#43b7ff"
}), /* @__PURE__ */ React.createElement("link", {
  rel: "apple-touch-icon",
  sizes: "180x180",
  href: "/apple-touch-icon.png"
}), /* @__PURE__ */ React.createElement("link", {
  rel: "icon",
  type: "image/png",
  sizes: "32x32",
  href: "/favicon-32x32.png"
}), /* @__PURE__ */ React.createElement("link", {
  rel: "icon",
  type: "image/png",
  sizes: "16x16",
  href: "/favicon-16x16.png"
}), /* @__PURE__ */ React.createElement("link", {
  rel: "manifest",
  href: "/site.webmanifest"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "msapplication-TileColor",
  content: "#da532c"
}), /* @__PURE__ */ React.createElement("meta", {
  name: "theme-color",
  content: "#ffffff"
}), /* @__PURE__ */ React.createElement("meta", {
  property: "og:title",
  content: "Small Business Web Design + Development"
}), /* @__PURE__ */ React.createElement("meta", {
  property: "og:description",
  content: "No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo."
}), /* @__PURE__ */ React.createElement("meta", {
  property: "og:type",
  content: "website"
}), /* @__PURE__ */ React.createElement("meta", {
  property: "og:url",
  content: "https://www.alki.digital/"
}), /* @__PURE__ */ React.createElement("meta", {
  property: "og:image",
  content: "https://www.alki.digital/"
}), /* @__PURE__ */ React.createElement("meta", {
  property: "og:image:secure_url",
  content: "https://www.alki.digital/"
}), /* @__PURE__ */ React.createElement("link", {
  rel: "canonical",
  href: "https://www.alki.digital/"
}), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null)), /* @__PURE__ */ React.createElement("body", null, children, /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), /* @__PURE__ */ React.createElement(import_remix4.LiveReload, null)));
function App() {
  const [navActive, setNavActive] = (0, import_react2.useState)(false);
  const onClickHandler = () => {
    setNavActive(!navActive);
  };
  let isMobile = null;
  if (typeof window !== "undefined") {
    isMobile = useMedia_default(["(min-width: 1250px)", "(max-width: 1249px)"], [false, true], false);
  }
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, /* @__PURE__ */ React.createElement(Header_default, {
    navActive,
    setNavActive
  }), /* @__PURE__ */ React.createElement("div", {
    onClick: navActive ? onClickHandler : void 0
  }, /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(Footer_default, null)));
}
var ErrorBoundary = ({ error }) => {
  console.error(error);
  return /* @__PURE__ */ React.createElement(BaseTemplate, null, error);
};

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/services/index.tsx
var services_exports = {};
__export(services_exports, {
  default: () => Homepage,
  links: () => links,
  loader: () => loader
});
init_react();
var import_react3 = __toModule(require("@remix-run/react"));

// app/components/Services/index.tsx
init_react();
var import_remix5 = __toModule(require_remix());
var Services = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Our Services")), /* @__PURE__ */ React.createElement("section", {
    id: "web-dev",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/056812f1d18390665bc20f315b66c795066e513f/68074/images/code-scg.svg",
    alt: "man staring at an open browser window"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Web Design & Development Done Differently"), /* @__PURE__ */ React.createElement("p", null, "What makes us unique in the development world is that we don't use WordPress, frameworks, or page builders. We meticulously write the code line by line.  This gives us much more control over the design, and the website performs lightning fast because there's no bloated or messy code that slows it down.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "Websites built by hand will ", /* @__PURE__ */ React.createElement("span", null, "out-perform most WordPress sites"), " and drag and drop page builders which could cost thousands of dollars.  When it comes to the web, the faster and more organized websites win."))), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "paper-airplane-path container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "line-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "svg-div"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 58.064 58.064",
    "xml:space": "preserve",
    width: "512px",
    height: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#43B7FF" },
    points: "17.064,31.032 58.064,10.032 24.064,35.032 44.064,48.032 58.064,10.032 0,22.032 ",
    "data-original": "#7383BF",
    className: "",
    "data-old_color": "#7383BF"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.127,48.032 17.064,31.032 58.064,10.032 ",
    "data-original": "#556080",
    className: "",
    "data-old_color": "#556080"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.064,48.032 31.912,40.133 ",
    "data-original": "#464F66",
    className: "active-path",
    "data-old_color": "#464F66"
  })), " "))))), /* @__PURE__ */ React.createElement("section", {
    id: "seo",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/82dfa31bd7245d1c5b7be8fd5b4ed281b6c32d63/183d7/images/speed.svg",
    alt: "man standing in front of a computer"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Search Engine Optimization For 2021"), /* @__PURE__ */ React.createElement("p", null, "If someone tells you they can get you to the front page of Google in 3 months - ", /* @__PURE__ */ React.createElement("span", null, "RUN!"), " Unless your website was featured by The New York Times it could take years to rank in the top of the search results.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "We offer a number of the latest search engine optimization techniques for 2021:"), /* @__PURE__ */ React.createElement("ul", {
    className: "checkmark"
  }, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Keyword-Centered Content & Blogs"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Mobile-First-Optimized for the Best Experience"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Clean & Organized Code Structure For Web Crawlers"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Fully Responsive For Mobile, Tablet, & Desktop")))), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "paper-airplane-path container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "line-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "svg-div"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Capa_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 58.064 58.064",
    width: "512px",
    height: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#43B7FF" },
    points: "17.064,31.032 58.064,10.032 24.064,35.032 44.064,48.032 58.064,10.032 0,22.032 ",
    "data-original": "#7383BF",
    className: "",
    "data-old_color": "#7383BF"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.127,48.032 17.064,31.032 58.064,10.032 ",
    "data-original": "#556080",
    className: "",
    "data-old_color": "#556080"
  }), /* @__PURE__ */ React.createElement("polygon", {
    style: { fill: "#3D84D5" },
    points: "24.064,35.032 20.064,48.032 31.912,40.133 ",
    "data-original": "#464F66",
    className: "active-path",
    "data-old_color": "#464F66"
  })), " "))))), /* @__PURE__ */ React.createElement("section", {
    id: "graphic-design",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/a9cb42a527a8f7d16f3804d86dc12261c3f33f80/58d60/images/design-svg.svg",
    alt: "man standing next graphic display"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Logos, Graphic Design, & Branding"), /* @__PURE__ */ React.createElement("p", null, "We also offer logo and graphic design services via our own in-house graphic designer.  If you have an existing logo that needs a touch up or need a completely new one we can help build your business's brand."), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Logos Starting at $350"), /* @__PURE__ */ React.createElement("p", null, "Rates may increase based on complexity, number of hours, and number of revisions")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("h3", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), "Social Media Graphics"), /* @__PURE__ */ React.createElement("p", null, "Make a post that stands out with its own custom graphics.  Give us a call for plans and rates.")))))), /* @__PURE__ */ React.createElement("section", {
    id: "updates",
    className: "section template"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("h2", null, "Lifetime Updates For Your Website"), /* @__PURE__ */ React.createElement("p", null, "Google changes its search alogrithm standards every so often, changing what is important to rank.  And web accessibility guidelines for users with screen readers get updated as well.  So we also include ", /* @__PURE__ */ React.createElement("span", null, "lifetime updates"), "to your website to make sure it never goes out of date and is always changing with the times.")), /* @__PURE__ */ React.createElement("div", {
    className: "boxes-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    "enable-background": "new 0 0 512 512",
    height: "512px",
    viewBox: "0 0 512 512",
    width: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m408.049 340.523v-35.642c0-4.144-3.36-7.504-7.504-7.504s-7.504 3.36-7.504 7.504v35.642c0 1.379-1.122 2.501-2.501 2.501h-99.772c-3.066-35.017 17.217-69.147 51.175-82.256 6.765-2.611 10.369-10.09 8.205-17.027l-9.733-31.228c-1.123-3.601-3.708-6.623-7.091-8.293-3.397-1.676-7.39-1.888-10.954-.579-33.926 12.456-61.487 37.236-77.608 69.775-16.176 32.652-19.126 69.751-8.307 104.462 11.751 37.7 38.708 68.567 74.39 85.43-.936 3.693.006 7.579 2.63 10.487 3.05 3.397 7.708 4.617 11.965 3.275l45.006-14.028c3.221-1.003 5.828-3.358 7.155-6.459s1.229-6.613-.269-9.636l-20.934-42.24c-2.017-4.07-6.088-6.512-10.631-6.392-4.541.127-8.471 2.8-10.258 6.976l-1.032 2.412c-19.341-9.844-33.916-26.998-40.396-47.788-.195-.626-.358-1.255-.537-1.882h96.994c9.656 0 17.511-7.855 17.511-17.51zm-74.46 83.321c4.807 2.051 10.394-.2 12.453-5.016l.28-.654 15.74 31.76-34.657 10.802c.041-1.306-.193-2.618-.701-3.866-.951-2.338-2.755-4.172-5.079-5.165-34.051-14.558-59.872-43.095-70.843-78.294-19.88-63.781 13.33-131.743 75.664-155.274l9.05 29.038c-46.099 18.415-70.562 69.665-55.744 117.206 8.339 26.753 27.961 48.425 53.837 59.463z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "55.468",
    cy: "91.146",
    r: "14.633",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "99.969",
    cy: "91.146",
    r: "14.633",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "144.469",
    cy: "91.146",
    r: "14.633",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m505.591 293.99c-12.068-38.719-39.919-69.994-76.86-86.579l.035-.081c1.787-4.176 1.006-8.865-2.038-12.236-3.044-3.372-7.63-4.627-11.965-3.275l-6.714 2.093v-142.007c0-9.655-7.855-17.51-17.51-17.51h-296.664c-4.144 0-7.504 3.36-7.504 7.504s3.36 7.504 7.504 7.504h296.664c1.379 0 2.501 1.122 2.501 2.501v81.545h-378.032v-81.544c0-1.379 1.122-2.501 2.501-2.501h38.228c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-38.227c-9.655-.001-17.51 7.854-17.51 17.509v288.618c0 9.655 7.855 17.51 17.51 17.51h180.493c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-180.493c-1.379 0-2.501-1.122-2.501-2.501v-192.065h378.031v50.131l-23.284 7.258c-3.22 1.003-5.828 3.357-7.155 6.459-1.327 3.101-1.229 6.613.269 9.636l20.934 42.24c2.017 4.07 6.103 6.511 10.631 6.392 4.541-.127 8.471-2.8 10.257-6.976l.296-.692c20.653 9.588 36.169 27.209 42.976 49.047 12.585 40.378-8.438 83.929-47.862 99.147-6.763 2.611-10.367 10.091-8.204 17.027l9.733 31.227c2.145 7.414 10.869 11.678 18.046 8.873 33.925-12.456 61.486-37.236 77.607-69.775 16.176-32.653 19.126-69.752 8.307-104.463zm-89.992 159.74-9.051-29.039c46.099-18.415 70.562-69.665 55.744-117.206-8.704-27.924-29.399-50.033-56.781-60.66-4.39-1.705-9.239.043-11.583 3.988l-15.789-31.86 34.061-10.616c-.401 1.862-.231 3.799.513 5.6.97 2.35 2.882 4.244 5.244 5.196 35.308 14.227 62.027 43.139 73.305 79.323 19.88 63.782-13.33 131.744-75.663 155.274z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m55.187 166.708c-12.052 0-21.856 9.805-21.856 21.856v71.396c0 12.052 9.804 21.856 21.856 21.856h71.396c12.052 0 21.856-9.804 21.856-21.856v-70.739c0-12.414-10.099-22.513-22.513-22.513zm78.244 22.513v70.739c0 3.776-3.072 6.848-6.848 6.848h-71.396c-3.776 0-6.848-3.072-6.848-6.848v-71.396c0-3.776 3.072-6.848 6.848-6.848h70.74c4.138.001 7.504 3.367 7.504 7.505z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m176.428 186.782h55.193c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-55.193c-4.144 0-7.504 3.36-7.504 7.504s3.36 7.504 7.504 7.504z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m176.428 221.488h55.193c4.144 0 7.504-3.36 7.504-7.504s-3.36-7.504-7.504-7.504h-55.193c-4.144 0-7.504 3.36-7.504 7.504s3.36 7.504 7.504 7.504z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }))), " "), /* @__PURE__ */ React.createElement("h3", null, "Design Updates"), /* @__PURE__ */ React.createElement("p", null, "If you ever want a new design, we will rebuild your website at no extra cost.")), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Capa_1",
    "enable-background": "new 0 0 512 512",
    height: "512px",
    viewBox: "0 0 512 512",
    width: "512px"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m220.716 512c-50.951 0-99.868-21.715-134.208-59.576-2.788-3.074-2.556-7.827.518-10.616 3.074-2.787 7.826-2.557 10.615.518 31.497 34.728 76.356 54.645 123.075 54.645 26.573 0 53.009-6.431 76.447-18.596 22.669-11.765 42.639-28.903 57.749-49.562 2.494-3.409 3.511-7.584 2.864-11.757-.648-4.173-2.882-7.845-6.291-10.339s-7.589-3.517-11.758-2.864c-4.174.647-7.845 2.881-10.339 6.29-25.285 34.567-65.91 55.204-108.672 55.204-74.186 0-134.541-60.355-134.541-134.541 0-25.694 7.263-50.666 21.003-72.218 13.388-21 32.269-37.863 54.601-48.764 5.793-2.829 9.367-9.085 8.829-15.522-.533-6.384-5.012-11.922-11.124-13.802-3.82-1.175-7.986-.846-11.577.906-27.569 13.458-50.873 34.268-67.393 60.183-16.983 26.638-25.961 57.488-25.961 89.218 0 31.47 8.877 62.121 25.67 88.641 2.221 3.507 1.178 8.149-2.328 10.369-3.506 2.222-8.148 1.179-10.369-2.328-18.32-28.929-28.003-62.361-28.003-96.682 0-34.598 9.792-68.243 28.317-97.298 18.01-28.25 43.416-50.937 73.473-65.61 7.402-3.613 15.77-4.13 23.56-1.45 7.791 2.679 14.071 8.232 17.685 15.635 3.613 7.402 4.129 15.77 1.449 23.561-2.679 7.79-8.231 14.07-15.634 17.684-19.842 9.688-36.621 24.674-48.521 43.34-12.199 19.133-18.647 41.311-18.647 64.138 0 65.899 53.613 119.512 119.512 119.512 37.986 0 74.076-18.336 96.541-49.048 4.864-6.65 12.025-11.007 20.166-12.269 8.135-1.263 16.286.72 22.935 5.586 6.649 4.863 11.006 12.024 12.268 20.164 1.263 8.141-.72 16.287-5.585 22.935-16.471 22.518-38.24 41.201-62.955 54.028-25.569 13.27-54.398 20.285-83.371 20.285z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m252.916 96.026c-26.475 0-48.013-21.539-48.013-48.014.001-26.474 21.539-48.012 48.013-48.012 26.475 0 48.014 21.538 48.014 48.013 0 26.474-21.539 48.013-48.014 48.013zm0-80.997c-18.187 0-32.983 14.796-32.983 32.983 0 18.188 14.797 32.984 32.983 32.984 18.188 0 32.984-14.797 32.984-32.984.001-18.186-14.796-32.983-32.984-32.983z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.566 366.168c-3.048 0-5.914-1.867-7.042-4.89l-15.136-40.581c-4.424-12.068-15.996-20.151-28.808-20.152h-97.477c-4.151 0-7.515-3.364-7.515-7.515v-71.143c0-4.151 3.364-7.515 7.515-7.515h91.071c8.743 0 15.856-7.114 15.856-15.857s-7.113-15.856-15.856-15.856h-91.071c-4.151 0-7.515-3.364-7.515-7.515v-15.399c0-16.913-13.759-30.672-30.672-30.672-16.912 0-30.671 13.759-30.671 30.672v81.221c0 4.151-3.364 7.515-7.515 7.515s-7.515-3.364-7.515-7.515v-81.221c0-25.2 20.501-45.702 45.701-45.702s45.702 20.502 45.702 45.702v7.884h83.557c17.03 0 30.885 13.855 30.885 30.886s-13.855 30.887-30.885 30.887h-83.557v56.113h89.962c19.092.001 36.334 12.044 42.905 29.969l15.121 40.541c1.45 3.889-.526 8.217-4.415 9.667-.865.324-1.752.476-2.625.476z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m441.561 461.828c-4.426 0-8.836-.964-12.97-2.88-7.485-3.47-13.171-9.646-16.012-17.391l-27.832-74.103c-4.431-12.085-16.003-20.167-28.815-20.167h-103.014c-25.201 0-45.702-20.502-45.702-45.703v-30.559c0-4.151 3.364-7.515 7.515-7.515s7.515 3.364 7.515 7.515v30.559c0 16.913 13.76 30.673 30.673 30.673h103.015c19.091 0 36.334 12.043 42.906 29.968l27.832 74.103c3.029 8.264 12.16 12.493 20.366 9.484 3.977-1.458 7.148-4.377 8.929-8.219s1.958-8.149.5-12.125l-13.407-35.946c-1.45-3.888.526-8.217 4.415-9.667 3.889-1.451 8.216.525 9.667 4.415l13.422 35.985c2.854 7.785 2.508 16.173-.961 23.658s-9.645 13.171-17.39 16.012c-3.47 1.27-7.066 1.903-10.652 1.903z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  })))), " "), /* @__PURE__ */ React.createElement("h3", null, "Web Accessibility"), /* @__PURE__ */ React.createElement("p", null, "Staying on top of the latest guidelines for web accessibility compliance.")), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Layer_1",
    "enable-background": "new 0 0 512 512",
    height: "512px",
    viewBox: "0 0 512 512",
    width: "512px"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m298.675 165.014c-32.124 24.689-38.173 70.911-13.484 103.035 11.943 15.539 29.249 25.501 48.729 28.051 3.249.425 6.492.635 9.714.635 16.095 0 31.645-5.251 44.592-15.202 15.539-11.943 25.501-29.249 28.051-48.729 2.549-19.48-2.624-38.767-14.566-54.306-24.69-32.124-70.911-38.172-103.036-13.484zm102.735 65.844c-2.03 15.509-9.957 29.284-22.321 38.786-25.57 19.651-62.359 14.837-82.01-10.733-19.651-25.569-14.837-62.358 10.733-82.01 10.603-8.149 23.133-12.09 35.572-12.09 17.559 0 34.936 7.856 46.438 22.823 9.503 12.365 13.618 27.715 11.588 43.224z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m325.551 199.983c6.208-4.771 13.913-6.84 21.71-5.818 7.791 1.02 14.709 5 19.481 11.209 5.966 7.763 17.744-1.518 11.889-9.137-14.908-19.398-42.82-23.05-62.217-8.143-7.668 5.893 1.468 17.781 9.137 11.889z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m511.795 145.551v-.392c0-36.929-30.044-66.972-66.973-66.972h-311.875c-9.671 0-9.671 14.994 0 14.994h311.875c28.661 0 51.979 23.317 51.979 51.978v.392c0 28.661-23.317 51.978-51.979 51.978h-2.051c-3.423-13.243-9.479-25.709-17.98-36.769-34.47-44.851-99.003-53.297-143.854-18.826-18.819 14.464-31.226 34.221-36.745 55.596h-177.219c-28.661 0-51.979-23.317-51.979-51.978v-.392c0-28.661 23.317-51.978 51.979-51.978h18.993c9.671 0 9.671-14.994 0-14.994h-18.993c-36.929-.001-66.973 30.042-66.973 66.971v.392c0 36.929 30.044 66.972 66.973 66.972h174.504c-2.671 25.274 3.961 51.571 20.634 73.265 16.698 21.727 40.858 35.65 68.028 39.206 4.522.592 9.037.884 13.523.884 14.748 0 29.168-3.185 42.465-9.297l13.149 17.109c-9.275 7.279-10.992 20.729-3.79 30.099 4.242 5.519 10.649 8.416 17.124 8.416 2.883 0 5.779-.576 8.504-1.749l40.294 52.574c21.908 28.506 66.804-5.316 44.571-34.243l-40.308-52.593c2.388-3.02 3.946-6.623 4.459-10.539.747-5.712-.774-11.373-4.285-15.94-7.201-9.37-20.639-11.172-30.061-4.083l-13.164-17.128c5.855-7.097 10.757-14.956 14.503-23.354 3.939-8.832-9.754-14.94-13.694-6.108-5.879 13.179-15.077 24.826-26.601 33.683-18.551 14.257-41.546 20.438-64.744 17.401-23.199-3.036-43.828-14.925-58.085-33.476-29.433-38.296-22.222-93.396 16.074-122.829s93.396-22.221 122.829 16.075c11.044 14.37 17.291 31.5 18.066 49.538.416 9.661 15.395 9.019 14.98-.643-.091-2.107-.263-4.2-.48-6.284 36.632-.351 66.327-30.245 66.327-66.956zm-15.106 262.055c-1.472 11.249-16.462 15.305-23.386 6.295l-39.896-52.055 20.788-15.977 39.89 52.048c2.133 2.776 3.058 6.217 2.604 9.689-.455 3.472.454-3.472 0 0zm-42.733-88.754c2.185 2.843 1.637 7.031-1.206 9.216l-36.159 27.791c-2.873 2.207-7.008 1.667-9.217-1.206s-1.667-7.008 1.206-9.217l36.159-27.79c2.873-2.208 7.009-1.668 9.217 1.206zm-47.991-14.238c2.127-1.635 4.178-3.36 6.166-5.152l11.166 14.529-12.73 9.784-11.159-14.52c2.231-1.457 4.421-3 6.557-4.641z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m66.473 146.447c0 4.14 3.357 7.497 7.497 7.497h138.944c9.671 0 9.671-14.994 0-14.994h-138.944c-4.14 0-7.497 3.357-7.497 7.497z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  })), " "), /* @__PURE__ */ React.createElement("h3", null, "Search Engine Updates"), /* @__PURE__ */ React.createElement("p", null, "Your website will stay up to date with Google's search guidelines for ranking.")), /* @__PURE__ */ React.createElement("div", {
    className: "box"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    id: "Layer_1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 512 512",
    width: "512px",
    height: "512px",
    className: ""
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "M507.527,208.179c-0.908-4.782-5.088-8.242-9.955-8.242H261.404c-5.596,0-10.132,4.536-10.132,10.132v97.266    c0,5.596,4.536,10.132,10.132,10.132h115.967c-11.752,23.149-30.065,42.7-52.671,55.958c-20.729,12.168-44.485,18.599-68.7,18.599    c-56.417,0-107.615-35.479-127.404-88.296c-5.72-15.213-8.62-31.271-8.62-47.729c0-15.134,2.471-30.009,7.34-44.206    c18.871-54.919,70.586-91.818,128.685-91.818c25.528,0,50.398,7.11,71.916,20.561c3.684,2.303,8.427,2.001,11.788-0.752    l79.65-65.209c2.341-1.917,3.703-4.78,3.714-7.804c0.011-3.026-1.332-5.897-3.66-7.83C373.632,20.933,315.599,0,256,0    C114.841,0,0,114.841,0,256c0,42.345,10.552,84.299,30.516,121.326C75.307,460.396,161.708,512,256,512    c59.004,0,116.586-20.556,162.139-57.879c44.922-36.807,76.269-88.19,88.261-144.677c3.715-17.449,5.6-35.431,5.6-53.445    C512,239.906,510.495,223.817,507.527,208.179z M256,20.264c50.746,0,100.257,16.477,140.753,46.628l-64.4,52.724    c-23.24-13.043-49.482-19.904-76.353-19.904c-61.934,0-117.53,36.511-142.555,92.184l-62.849-51.454    C91.079,68.767,167.977,20.264,256,20.264z M20.264,256c0-34.585,7.488-67.453,20.924-97.071l64.819,53.067    c-4.173,14.251-6.295,29.018-6.295,44.004c0,16.43,2.525,32.523,7.502,47.94l-64.412,52.727    C28.041,325.39,20.264,290.848,20.264,256z M256,491.736c-84.05,0-161.291-44.532-203.565-116.768l62.675-51.305    c11.504,23.986,28.887,44.597,50.889,60.122c26.427,18.647,57.549,28.504,90,28.504c25.424,0,50.411-6.197,72.719-17.94    l64.854,53.093C353.689,476.097,305.388,491.736,256,491.736z M486.581,305.23c-10.63,50.067-37.787,95.775-76.714,129.362    l-62.917-51.508c25.118-18.016,44.552-43.208,55.414-72.195c1.166-3.111,0.732-6.597-1.16-9.327    c-1.893-2.73-5.005-4.359-8.327-4.359H271.536v-77.003h217.493c1.798,11.78,2.707,23.786,2.707,35.799    C491.736,272.599,490.002,289.161,486.581,305.23z",
    "data-original": "#000000",
    className: "active-path",
    "data-old_color": "#000000",
    fill: "#43B7FF"
  })))), " "), /* @__PURE__ */ React.createElement("h3", null, "Google Business Profile"), /* @__PURE__ */ React.createElement("p", null, "We also help optimize and manage your Google, Bing, & Yahoo Business Profile"))))), /* @__PURE__ */ React.createElement("section", {
    id: "pricing",
    className: "section "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Standard + Blogging"), /* @__PURE__ */ React.createElement("span", null, "STARTING AT"), /* @__PURE__ */ React.createElement("h3", null, "300"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 1000+ Word Post"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Written By an SEO Specialist"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 1 Post Per Month"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " $150 Per Extra Post")), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid services-button",
    type: "button"
  }, "CONTACT US"))), /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Standard"), /* @__PURE__ */ React.createElement("span", null, "5 PAGES"), /* @__PURE__ */ React.createElement("h3", null, "150"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Unlimited Edits"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Includes Hosting"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 24/7 Customer Service"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Lifetime Updates")), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid services-button",
    type: "button"
  }, "CONTACT US"))), /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Logos & Graphic Design"), /* @__PURE__ */ React.createElement("span", null, "INCLUDED!"), /* @__PURE__ */ React.createElement("h3", null, "0"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 2 revisions"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " All File Formats"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Ready to use"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " FREE w/ Subscription")), /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid services-button",
    type: "button"
  }, "CONTACT US"))))));
};
var Services_default = Services;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/services/index.tsx
function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/01ba941265b8ab55efcb1e2c16cda90619453695.css"
    }
  ];
}
var loader = async ({
  params
}) => {
  console.log(params);
  return params;
};
function Homepage() {
  const params = (0, import_react3.useParams)();
  console.log(params);
  return /* @__PURE__ */ React.createElement(Services_default, null);
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/contact/index.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => Homepage2,
  links: () => links2
});
init_react();

// app/components/Contact/index.tsx
init_react();
var Contact = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Contact Us")), /* @__PURE__ */ React.createElement("section", {
    id: "valley-form",
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    className: "border-group"
  }, /* @__PURE__ */ React.createElement("p", null, "Email:"), /* @__PURE__ */ React.createElement("p", null, "alkidigital.webdesign@gmail.com")), /* @__PURE__ */ React.createElement("div", {
    className: "border-group"
  }, /* @__PURE__ */ React.createElement("p", null, "Phone:"), /* @__PURE__ */ React.createElement("p", null, "(509) 481-7512"))), /* @__PURE__ */ React.createElement("div", {
    className: "form-wrapper"
  }, /* @__PURE__ */ React.createElement("form", {
    action: "https://submit-form.com/Nutg910E",
    id: "contact",
    name: "CONTACT FORM"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "form"
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "contact-topper"
  }, /* @__PURE__ */ React.createElement("span", null, "DROP"), " US A LINE"), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "name",
    name: "name",
    placeholder: "Name",
    type: "text",
    tabIndex: 1,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "name",
    name: "name",
    placeholder: "Business",
    type: "text",
    tabIndex: 2,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "email",
    name: "email",
    placeholder: "Email Address",
    type: "email",
    tabIndex: 3,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "phone number",
    name: "phone",
    placeholder: "Phone Number",
    type: "tel",
    tabIndex: 4,
    required: true
  }), /* @__PURE__ */ React.createElement("textarea", {
    "aria-label": "write your message",
    name: "message",
    placeholder: "Type your Message Here....",
    tabIndex: 5,
    required: true
  }), /* @__PURE__ */ React.createElement("p", {
    className: "form-submit"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "submit",
    type: "submit",
    id: "contact-submit",
    className: "primary button-solid",
    "data-submit": "...Sending"
  }, "Submit"))))));
};
var Contact_default = Contact;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/contact/index.tsx
function links2() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/1dd11a07866c5467a9744f635db24cbe6e6b6dd2.css"
    }
  ];
}
function Homepage2() {
  return /* @__PURE__ */ React.createElement(Contact_default, null);
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Homepage3,
  links: () => links3
});
init_react();

// app/components/About/index.tsx
init_react();
var import_remix6 = __toModule(require_remix());
var About = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "page-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "About Us")), /* @__PURE__ */ React.createElement("section", {
    id: "about",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "section-content"
  }, /* @__PURE__ */ React.createElement("span", null, "Alki Digital Web Services"), /* @__PURE__ */ React.createElement("h2", null, "Giving Small Businesses The Big Business Treatment"), /* @__PURE__ */ React.createElement("p", null, "My name is Alex, I'm the owner and sole developer of Alki Digital. After working in the tech industry for a little over 4 years I launched this business as a way for me to serve small businesses while building my own. My goal is to build a company that can foster community, and provide a safe space for industry professionals to harness their skills to build careers of their own.", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "A lot of small businesses don't have the funds to spend thousands of dollars upfront on a new website. The ones that do, get taken advantage of and have a terrible website that looks like it was built by someone in a dungeon and haven't seen design trends for the last 10 years. A lot of businesses are in a tough spot - they either can't afford a good website, and if they can they don't know who to trust to make something great. That's where the $0 down and $100 a month model comes in. It's more managable for a small business to handle and won't hurt their bank accounts.")))), /* @__PURE__ */ React.createElement("section", {
    id: "circles"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "topper"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "Quality "), " Over Quantity"), /* @__PURE__ */ React.createElement("p", null, "We focus on the needs on each individual business and tailor content around what makes it unique. Our collaborative process is very hands on as we work closely with you to create a website you're 100% happy with and not something you just settle for.")), /* @__PURE__ */ React.createElement("div", {
    className: "circles"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle"
  }, /* @__PURE__ */ React.createElement("span", null, "1")), /* @__PURE__ */ React.createElement("h3", null, "No Pre-Written Content"), /* @__PURE__ */ React.createElement("p", null, "We write unique and engaging content around your company.  Everyone is unique!")), /* @__PURE__ */ React.createElement("div", {
    className: "circle-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle"
  }, /* @__PURE__ */ React.createElement("span", null, "2")), /* @__PURE__ */ React.createElement("h3", null, "Unbeatable Customer Service"), /* @__PURE__ */ React.createElement("p", null, "No automated systems - When you need help the lead developer answers your call.")), /* @__PURE__ */ React.createElement("div", {
    className: "circle-box"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "circle"
  }, /* @__PURE__ */ React.createElement("span", null, "3")), /* @__PURE__ */ React.createElement("h3", null, "No Limits On Design"), /* @__PURE__ */ React.createElement("p", null, "We can edit the design to cater to your tastes.  Everything is customizable!")))), /* @__PURE__ */ React.createElement(import_remix6.Link, {
    style: { textDecoration: "none" },
    to: "/services"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid about-button",
    type: "button"
  }, "OUR SERVICES"))), /* @__PURE__ */ React.createElement("section", {
    id: "about-contact",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "about-container container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "contact-left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "contact-item"
  }, /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "contact-line"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "contact-info"
  }, /* @__PURE__ */ React.createElement("h2", null, "Phone:"), /* @__PURE__ */ React.createElement("p", null, "(509) 481-7512"))), /* @__PURE__ */ React.createElement("div", {
    className: "contact-item"
  }, /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "contact-line"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "contact-info"
  }, /* @__PURE__ */ React.createElement("h2", null, "Email:"), /* @__PURE__ */ React.createElement("p", null, "alkidigital.webdesign@gmail.com")))), /* @__PURE__ */ React.createElement("div", {
    className: "form-wrapper"
  }, /* @__PURE__ */ React.createElement("form", {
    action: "https://submit-form.com/Nutg910E",
    id: "contact",
    method: "post",
    name: "ABOUT FORM"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "form-name",
    value: "Contact Form"
  }), /* @__PURE__ */ React.createElement("h3", {
    className: "contact-topper"
  }, /* @__PURE__ */ React.createElement("span", null, "DROP"), " US A LINE"), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "name",
    name: "name",
    placeholder: "Your Name",
    type: "text",
    tabIndex: 1,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "email",
    name: "email",
    placeholder: "Your Email Address",
    type: "email",
    tabIndex: 2,
    required: true
  }), /* @__PURE__ */ React.createElement("input", {
    "aria-label": "phone number",
    name: "phone",
    placeholder: "Your Phone Number",
    type: "tel",
    tabIndex: 3,
    required: true
  }), /* @__PURE__ */ React.createElement("textarea", {
    "aria-label": "write your message",
    name: "message",
    placeholder: "Type your Message Here....",
    tabIndex: 4,
    required: true
  }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("script", {
    src: "https://www.google.com/recaptcha/api.js"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "g-recaptcha",
    "data-sitekey": "6LdAvUIUAAAAAHjrjmjtNTcXyKm0WKwefLp-dQv9"
  }), /* @__PURE__ */ React.createElement("noscript", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
    style: { width: 302, height: 422, position: "relative" }
  }, /* @__PURE__ */ React.createElement("div", {
    style: { width: 302, height: 422, position: "absolute" }
  })), /* @__PURE__ */ React.createElement("div", {
    style: { width: 300, height: 60, borderStyle: "none", bottom: 12, left: 25, margin: 0, padding: 0, right: 25, background: "#f9f9f9", border: "1px solid #c1c1c1", borderRadius: 3 }
  }, /* @__PURE__ */ React.createElement("textarea", {
    id: "g-recaptcha-response",
    name: "g-recaptcha-response",
    className: "g-recaptcha-response",
    style: { width: 250, height: 40, border: "1px solid #c1c1c1", margin: "10px 25px", padding: 0, resize: "none" }
  }))))), /* @__PURE__ */ React.createElement("p", {
    className: "form-submit"
  }, /* @__PURE__ */ React.createElement("button", {
    name: "submit",
    type: "submit",
    id: "contact-submit",
    className: "primary button-solid",
    "data-submit": "...Sending"
  }, "Submit")))))));
};
var About_default = About;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/about/index.tsx
function links3() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/bf62e7a7871d940c3c6df187eae9258636299ed4.css"
    }
  ];
}
function Homepage3() {
  return /* @__PURE__ */ React.createElement(About_default, null);
}

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Homepage4,
  links: () => links4
});
init_react();

// app/components/Main/index.tsx
init_react();
var import_remix7 = __toModule(require_remix());
var Main = () => {
  return /* @__PURE__ */ React.createElement("main", {
    id: "main"
  }, /* @__PURE__ */ React.createElement("section", {
    id: "landing",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("h1", null, "Small Business Web Design + Development"), /* @__PURE__ */ React.createElement("h2", null, "No page builders or WordPress - We offer 100% hand-coded websites with superior results starting at $150/mo."), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    style: { textDecoration: "none" },
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid quote-button",
    type: "button"
  }, "GET IN TOUCH!")), /* @__PURE__ */ React.createElement("img", {
    className: "mock-up desktop-display",
    src: "https://d33wubrfki0l68.cloudfront.net/81ff3b9ad31c44ae1e5d3af2f0d6364d60edee85/2f15f/images/mock-up-replace.png",
    alt: "mockup of a website on computer desktop and phone"
  }), /* @__PURE__ */ React.createElement("img", {
    className: "mock-up mobile-display",
    src: "https://d33wubrfki0l68.cloudfront.net/9e5482183c08d98fc43a56fa1c9a7f1a0f61a207/a3b7c/images/mock-up-mobile-repace.png",
    alt: "a mockup of a website on computer desktop and phone"
  })), /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "swoop light-swoop",
    src: "https://d33wubrfki0l68.cloudfront.net/25e94eabb1cdec2613bd265d645dc15324bacfe8/86f45/images/landing-swoosh.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    className: "swoop dark-swoop ",
    src: "https://d33wubrfki0l68.cloudfront.net/2c499269a4a33fbbfca28010db8fdbb668a23c1c/beba6/images/landing-swoosh-dark.svg",
    alt: ""
  })), /* @__PURE__ */ React.createElement("section", {
    id: "what-we-do",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "what-topper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "what-we-do-topper container"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "WHAT "), " WE DO"), /* @__PURE__ */ React.createElement("div", {
    "aria-hidden": "true",
    className: "graphic-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "dash"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://d33wubrfki0l68.cloudfront.net/29048d9efe89252399122cd2487f253dcbe9bcc4/cf8a5/images/code.svg",
    alt: ""
  }), /* @__PURE__ */ React.createElement("div", {
    className: "dash"
  })), /* @__PURE__ */ React.createElement("p", null, "We specialize in small business web design and development for clients anywhere in the US. Every line of code is written by hand to ensure the best performance, which helps bring in more customers to your site and bring more revenue to your business."))), /* @__PURE__ */ React.createElement("div", {
    className: "what-we-do-content container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "item"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    height: "512pt",
    viewBox: "-11 0 512 512.001",
    width: "512pt"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m261.4375 511.441406 138.851562-54.941406c54.765626-44.929688 89.710938-113.132812 89.710938-189.5 0-135.308594-109.691406-245-245-245s-245 109.691406-245 245c0 135.3125 109.691406 245 245 245 5.527344 0 11.003906-.199219 16.4375-.558594zm0 0",
    fill: "#27a3ff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m388.742188 318.949219c1.953124-23.644531-1.648438-47.335938-12.117188-68.628907-27.042969-55.011718-20.839844-59.003906-21.679688-113.601562 0-11.15625-9.042968-20.195312-20.195312-20.195312-11.15625 0-20.195312 9.039062-20.195312 20.195312 0 7.203125 0 203.832031 0 203.0625 0 3.148438-.335938 6.222656-.957032 9.1875v29.070312c0 24.496094-19.929687 44.429688-44.425781 44.429688-16.269531 0-72.375 0-110.550781 0 16.980468 23.617188 40.214844 42.113281 67.179687 53.3125.167969.066406.335938.136719.503907.207031 16.222656 6.855469 28.609374 19.78125 35.132812 35.453125 52.535156-3.480468 100.546875-23.507812 138.851562-54.9375l-15.050781-55.292968c-2.148437-7.902344-2.90625-16.117188-2.238281-24.277344zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m83.609375 117.230469-6.152344-5.699219c-9.480469-8.789062-24.429687-8.21875-33.214843 1.265625-8.785157 9.480469-8.214844 24.429687 1.265624 33.214844l38.101563 35.304687zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m285.621094 0h-172.714844c-16.757812 0-30.390625 13.636719-30.390625 30.394531v363.980469c0 16.757812 13.632813 30.394531 30.390625 30.394531h172.714844c16.757812 0 30.394531-13.636719 30.394531-30.394531v-363.980469c0-16.757812-13.636719-30.394531-30.394531-30.394531zm0 0",
    fill: "#3d4ec6"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m141.035156 22.539062c-1.644531-2.445312-2.605468-5.386718-2.605468-8.554687 0-6.21875 3.703124-11.5625 9.015624-13.984375h-34.539062c-16.785156 0-30.394531 13.609375-30.394531 30.394531v363.980469c0 16.785156 13.609375 30.390625 30.394531 30.390625h36.71875v-375.589844c0-9.558593-3.253906-18.703125-8.589844-26.636719zm0 0",
    fill: "#2b3894"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m100.109375 191.976562v202.398438c0 7.070312 5.730469 12.800781 12.796875 12.800781h172.714844c7.066406 0 12.796875-5.730469 12.796875-12.800781 0-6.945312 0-108.335938 0-202.398438zm0 0",
    fill: "#e6f7fe"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m100.109375 191.976562v202.398438c0 7.070312 5.730469 12.800781 12.796875 12.800781h30.273438v-215.199219zm0 0",
    fill: "#d5f1fe"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m169.675781 253.03125c0 11.074219-8.976562 20.050781-20.050781 20.050781s-20.050781-8.976562-20.050781-20.050781 8.976562-20.054688 20.050781-20.054688 20.050781 8.980469 20.050781 20.054688zm0 0",
    fill: "#3d4ec6"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m169.675781 327.382812c0 11.074219-8.976562 20.054688-20.050781 20.054688s-20.050781-8.980469-20.050781-20.054688c0-11.074218 8.976562-20.050781 20.050781-20.050781s20.050781 8.976563 20.050781 20.050781zm0 0",
    fill: "#3d4ec6"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m147.359375 233.113281c-10.007813 1.128907-17.785156 9.609375-17.785156 19.917969 0 11.074219 8.976562 20.050781 20.050781 20.050781 6.90625 0 12.992188-3.492187 16.597656-8.804687-17.289062 1.949218-28.296875-17.269532-18.863281-31.164063zm0 0",
    fill: "#2b3894"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m147.359375 307.46875c-10.007813 1.125-17.785156 9.609375-17.785156 19.914062 0 11.078126 8.976562 20.054688 20.050781 20.054688 6.90625 0 12.992188-3.492188 16.597656-8.804688-17.183594 1.933594-28.359375-17.179687-18.863281-31.164062zm0 0",
    fill: "#2b3894"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "#11dfef"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m231.566406 244.695312h-28.46875c-4.140625 0-7.5-3.359374-7.5-7.5 0-4.144531 3.359375-7.5 7.5-7.5h28.46875c4.140625 0 7.5 3.355469 7.5 7.5 0 4.140626-3.359375 7.5-7.5 7.5zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m260.035156 276.367188h-56.9375c-4.144531 0-7.5-3.359376-7.5-7.5 0-4.144532 3.355469-7.5 7.5-7.5h56.9375c4.140625 0 7.5 3.355468 7.5 7.5 0 4.140624-3.359375 7.5-7.5 7.5zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m231.566406 319.046875h-28.46875c-4.140625 0-7.5-3.355469-7.5-7.5s3.359375-7.5 7.5-7.5h28.46875c4.140625 0 7.5 3.355469 7.5 7.5s-3.359375 7.5-7.5 7.5zm0 0"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m260.035156 350.71875h-56.9375c-4.144531 0-7.5-3.355469-7.5-7.5 0-4.140625 3.355469-7.5 7.5-7.5h56.9375c4.140625 0 7.5 3.359375 7.5 7.5 0 4.144531-3.359375 7.5-7.5 7.5zm0 0"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m285.519531 17.597656h-25.667969c-2.421874 0-4.382812 1.960938-4.382812 4.378906 0 5.808594-4.75 10.558594-10.554688 10.558594h-91.496093c-5.808594 0-10.558594-4.75-10.558594-10.558594 0-2.417968-1.960937-4.378906-4.382813-4.378906h-25.667968c-7.070313 0-12.800782 5.730469-12.800782 12.796875v163.582031h198.3125v-163.582031c0-7.066406-5.730468-12.796875-12.800781-12.796875zm0 0",
    fill: "#f948b4"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m143.179688 24.507812c-.203126-.8125-.320313-1.65625-.320313-2.527343 0-2.421875-1.960937-4.382813-4.382813-4.382813h-25.667968c-7.070313 0-12.800782 5.730469-12.800782 12.796875v163.582031h43.171876zm0 0",
    fill: "#e00e8b"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m285.519531 17.597656h-25.667969c-2.421874 0-4.382812 1.960938-4.382812 4.378906 0 5.808594-4.75 10.558594-10.554688 10.558594h-50.464843l103.871093 130.203125v-132.34375c0-7.066406-5.730468-12.796875-12.800781-12.796875zm0 0",
    fill: "#fc7acd"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m166.917969 77.207031h-34.585938c-4.140625 0-7.5-3.355469-7.5-7.5s3.359375-7.5 7.5-7.5h34.585938c4.140625 0 7.5 3.355469 7.5 7.5 0 4.140625-3.359375 7.5-7.5 7.5zm0 0",
    fill: "#fc7acd"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m117.816406 241.191406c-7.730468 8.339844-20.761718 8.839844-29.105468 1.109375l-34.496094-31.964843c-8.34375-7.730469-8.839844-20.761719-1.109375-29.105469s20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730468 8.839844 20.761718 1.109375 29.105468zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m116.707031 212.085938-16.410156-15.203126c2.160156 7.824219.367187 16.542969-5.550781 22.929688-5.921875 6.390625-14.480469 8.839844-22.441406 7.285156l16.40625 15.203125c8.34375 7.730469 21.371093 7.230469 29.105468-1.109375 7.730469-8.34375 7.230469-21.375-1.109375-29.105468zm0 0",
    fill: "#fbbc8d"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m117.816406 297.363281c-7.730468 8.34375-20.761718 8.839844-29.105468 1.109375l-34.496094-31.964844c-8.34375-7.730468-8.839844-20.761718-1.109375-29.101562 7.730469-8.34375 20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730469 8.839844 20.757812 1.109375 29.101562zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m117.816406 353.539062c-7.730468 8.34375-20.761718 8.839844-29.105468 1.109376l-34.496094-31.964844c-8.34375-7.730469-8.839844-20.761719-1.109375-29.105469s20.761719-8.839844 29.105469-1.109375l34.496093 31.964844c8.339844 7.730468 8.839844 20.761718 1.109375 29.105468zm0 0",
    fill: "#f9cfa9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m385.238281 401.207031c-1.066406-3.929687-1.789062-7.933593-2.167969-11.972656-38.164062 62.65625-112.257812 91.753906-181.855468 73.660156 7.761718 4.988281 15.984375 9.308594 24.585937 12.882813.167969.070312.335938.140625.503907.210937 16.222656 6.851563 28.609374 19.777344 35.132812 35.453125 52.535156-3.480468 100.546875-23.511718 138.851562-54.941406zm0 0",
    fill: "#fbbc8d"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m116.707031 268.261719-16.410156-15.203125c2.160156 7.820312.367187 16.539062-5.550781 22.929687-5.921875 6.390625-14.480469 8.839844-22.441406 7.285157l16.40625 15.199218c8.34375 7.730469 21.375 7.234375 29.105468-1.109375 7.730469-8.34375 7.230469-21.371093-1.109375-29.101562zm0 0",
    fill: "#fbbc8d"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m116.707031 324.433594-16.410156-15.203125c2.160156 7.824219.367187 16.542969-5.550781 22.929687-5.921875 6.390625-14.480469 8.84375-22.441406 7.285156l16.40625 15.203126c8.34375 7.730468 21.375 7.234374 29.105468-1.109376 7.730469-8.34375 7.230469-21.375-1.109375-29.105468zm0 0",
    fill: "#fbbc8d"
  })), /* @__PURE__ */ React.createElement("h3", null, "Mobile-First Design"), /* @__PURE__ */ React.createElement("p", null, "We start building your site for mobile devices first, then we add on to it to make tablet and desktop.")), /* @__PURE__ */ React.createElement("div", {
    className: "item"
  }, /* @__PURE__ */ React.createElement("svg", {
    "aria-hidden": "true",
    xmlns: "http://www.w3.org/2000/svg",
    id: "Layer_1",
    height: "512",
    viewBox: "0 0 512 512",
    width: "512"
  }, /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m256 21.995c-135.311 0-245.002 109.691-245.002 245.002 0 52.367 16.439 100.889 44.425 140.708l286.822 88.666c92.755-34.893 158.757-124.419 158.757-229.373 0-135.311-109.691-245.003-245.002-245.003z",
    fill: "#ffdd40"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m231.432 113.764c0-9.306 1.146-18.348 3.29-27.001h-136.783c-3.034 0-5.995.316-8.855.911-12.847 11.963-24.404 25.288-34.446 39.748-.057.906-.096 1.818-.096 2.738v276.275c10.451 15.071 22.551 28.912 36.035 41.265l216.579 58.936c12.562-2.672 24.769-6.302 36.54-10.816v-269.794c-61.903 0-112.264-50.36-112.264-112.262z",
    fill: "#167cc1"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m162.165 480.399-2.113-336.11c-.003-.492-.185-.964-.49-1.35-5.347-6.752-2.011-11.404.082-13.366.685-.642.846-1.673.417-2.508-2.463-4.796.815-7.829 2.195-8.834.379-.276.648-.676.779-1.126l3.773-13.061c.203-.703.041-1.471-.449-2.014-6.459-7.16-1.993-12.277.494-14.304.318-.259.539-.596.664-.963h-69.578c-23.929 0-43.397 19.468-43.397 43.397v276.273c10.054 14.499 21.633 27.858 34.503 39.85z",
    fill: "#024788"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m81.542 195.887v243.108c44.43 45.062 106.177 73.005 174.458 73.005 20.951 0 41.285-2.636 60.695-7.583v-281.681c-18.787-4.656-35.72-14.055-49.454-26.849z",
    fill: "#e9efff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m81.542 438.996c22.271 22.587 48.888 40.875 78.506 53.494v-296.603h-78.506z",
    fill: "#d3dcfb"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m167.149 117.862h-4.333c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h4.333c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",
    fill: "#1e92d3"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m234.384 117.862h-41.638c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h41.638c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",
    fill: "#1e92d3"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m233.653 136.029h-83.035c-6.6 0-12-5.4-12-12 0-5.67-4.596-10.266-10.266-10.266h-30.413c-9.056 0-16.397 7.341-16.397 16.397v68.385h188.644c-18.379-15.956-31.535-37.775-36.533-62.516z",
    fill: "#9bd8f9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m150.618 136.029c-6.6 0-12-5.4-12-12 0-5.67-4.596-10.266-10.265-10.266h-30.414c-9.056 0-16.397 7.341-16.397 16.397v68.385h78.505v-62.517h-9.429z",
    fill: "#73c3f9"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "#1e92d3"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m316.695 210.236c-4.142 0-7.5 3.357-7.5 7.5v288.455c5.06-1.12 10.063-2.392 15-3.819v-284.636c0-4.142-3.358-7.5-7.5-7.5z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m89.042 446.282v-316.122c0-4.906 3.991-8.897 8.897-8.897h30.414c1.525 0 2.766 1.24 2.766 2.765 0 10.752 8.748 19.5 19.5 19.5h88.035c4.142 0 7.5-3.357 7.5-7.5 0-4.142-3.358-7.5-7.5-7.5h-88.035c-2.439 0-4.5-2.06-4.5-4.5 0-9.796-7.97-17.765-17.766-17.765h-30.414c-13.177 0-23.897 10.721-23.897 23.897v300.892c4.776 5.293 9.784 10.371 15 15.23z"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m159.644 129.573c.306-.286.489-.655.58-1.044h-9.606c-2.439 0-4.5-2.06-4.5-4.5 0-9.796-7.97-17.765-17.766-17.765h-30.413c-13.177 0-23.897 10.721-23.897 23.897v300.892c4.776 5.293 9.784 10.371 15 15.23v-316.123c0-4.906 3.991-8.897 8.897-8.897h30.414c1.525 0 2.766 1.24 2.766 2.765 0 10.752 8.748 19.5 19.5 19.5h9.281c-.083-.21-.195-.41-.337-.59-5.347-6.751-2.011-11.404.081-13.365z",
    fill: "#167cc1"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m241.934 157.106h-81.585v26.286h94.292c.568 0 1.124-.048 1.674-.118-5.892-7.984-10.75-16.772-14.381-26.168z",
    fill: "#e9efff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m161.349 157.106h-14.752c-7.259 0-13.143 5.884-13.143 13.143s5.884 13.143 13.143 13.143h14.752z",
    fill: "#3c58a0"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m116.535 141.832h-10.334c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h10.334c4.142 0 7.5 3.357 7.5 7.5s-3.358 7.5-7.5 7.5z",
    fill: "#e9efff"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m279.821 344.5h-161.405c-5.445 0-9.899-4.455-9.899-9.899v-87.32c0-5.445 4.455-9.899 9.899-9.899h161.405c5.445 0 9.899 4.455 9.899 9.899v87.32c0 5.445-4.454 9.899-9.899 9.899z",
    fill: "#ff4155"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m108.517 247.281v87.32c0 5.445 4.455 9.899 9.899 9.899h103.706c-.316-.525-.778-.97-1.374-1.255-8.068-3.848-7.854-10.046-6.848-13.692.443-1.607-.374-3.315-1.94-3.886-14.32-5.216-11.761-18.034-10.633-21.86.218-.739.172-1.527-.14-2.232l-10.99-24.823c-.479-1.081-1.51-1.839-2.69-1.908-9.687-.567-11.434-8.464-11.672-12.684-.084-1.484-1.191-2.714-2.656-2.964-16.049-2.743-14.719-15.34-13.63-20.039.139-.601.094-1.214-.103-1.775h-41.029c-5.446 0-9.9 4.454-9.9 9.899z",
    fill: "#e80054"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m138.23 382.003h-5c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h5c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.357 7.5-7.5 7.5z",
    fill: "#ff4155"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m113.517 382.003h-5c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h5c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#ff4155"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 382.003h-94.074c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h94.074c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#bec8f7"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m195.647 382.003h-37.083c-4.142 0-7.5-3.357-7.5-7.5 0-4.142 3.358-7.5 7.5-7.5h37.083c4.142 0 7.5 3.358 7.5 7.5 0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#ff4155"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m195.648 389.882c-4.142 0-7.5-3.357-7.5-7.5v-15.5c0-4.143 3.358-7.5 7.5-7.5s7.5 3.357 7.5 7.5v15.5c0 4.143-3.358 7.5-7.5 7.5z",
    fill: "#e80054"
  })), /* @__PURE__ */ React.createElement("ellipse", {
    cx: "199.118",
    cy: "290.941",
    fill: "#e9efff",
    rx: "39.071",
    ry: "39.071",
    transform: "matrix(.16 -.987 .987 .16 -119.961 440.885)"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m211.959 325.668c-14.32-5.216-11.761-18.034-10.633-21.86.218-.739.172-1.527-.14-2.232l-10.99-24.823c-.479-1.081-1.51-1.839-2.69-1.908-9.687-.567-11.434-8.464-11.672-12.684-.042-.747-.345-1.43-.821-1.955-9.108 7.153-14.965 18.257-14.965 30.736 0 21.578 17.493 39.071 39.071 39.071 5.145 0 10.053-1.004 14.551-2.811-.347-.69-.936-1.252-1.711-1.534z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m213.804 286.915-19.081-12.199c-3.18-2.033-7.352.251-7.352 4.026v24.398c0 3.775 4.172 6.059 7.352 4.026l19.081-12.199c2.939-1.879 2.939-6.173 0-8.052z",
    fill: "#ff4155"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m180.747 414.763h-72.23c-4.142 0-7.5-3.357-7.5-7.5s3.358-7.5 7.5-7.5h72.23c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z",
    fill: "#bec8f7"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 444.145h-181.204c-4.142 0-7.5-3.358-7.5-7.5 0-4.143 3.358-7.5 7.5-7.5h181.204c4.142 0 7.5 3.357 7.5 7.5 0 4.142-3.358 7.5-7.5 7.5z",
    fill: "#bec8f7"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 456.922h-181.204c-1.9 0-3.63.712-4.952 1.877 5.833 4.642 11.884 9.02 18.133 13.123h168.023c4.142 0 7.5-3.357 7.5-7.5s-3.358-7.5-7.5-7.5z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m289.721 484.7h-146.2c11.395 5.899 23.313 10.925 35.665 15h110.534c4.142 0 7.5-3.357 7.5-7.5.001-4.142-3.357-7.5-7.499-7.5z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("circle", {
    cx: "343.695",
    cy: "113.763",
    fill: "#2a428c",
    r: "113.763"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m387.182 155.35c.097-1.953-.613-3.856-1.996-5.239l-6.662-6.662c-1.2-1.2-2.808-1.891-4.502-1.997-21.61-1.357-22.772-19.765-22.708-24.531.011-.815-.137-1.622-.417-2.387l-5.878-16.076c-.837-2.287-2.829-3.926-5.219-4.394-51.017-9.995-39.706-68.875-35.972-83.791.258-1.031.257-2.089.037-3.098-43.184 16.144-73.934 57.773-73.934 106.589 0 62.83 50.933 113.763 113.763 113.763 7.325 0 14.484-.701 21.424-2.023l30.396-60.95c-7.418-1.528-8.482-6.176-8.332-9.204z",
    fill: "#1c2e7a"
  }), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m299.712 152.603-33.304-33.304c-3.057-3.057-3.057-8.015 0-11.072l33.304-33.304c3.057-3.057 8.014-3.058 11.072 0 3.057 3.057 3.058 8.015 0 11.072l-27.768 27.769 27.768 27.768c3.057 3.057 3.057 8.015 0 11.072-3.058 3.057-8.014 3.056-11.072-.001z",
    fill: "#4b6bb2"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m376.607 152.603c-3.057-3.057-3.057-8.014 0-11.072l27.768-27.768-27.769-27.768c-3.057-3.057-3.057-8.015 0-11.072 3.058-3.058 8.015-3.058 11.072 0l33.305 33.304c3.055 3.056 3.057 8.015 0 11.072l-33.304 33.304c-3.057 3.057-8.014 3.058-11.072 0z",
    fill: "#4b6bb2"
  })), /* @__PURE__ */ React.createElement("g", null, /* @__PURE__ */ React.createElement("path", {
    d: "m325.589 154.213c-3.947-1.766-5.714-6.398-3.948-10.344l29.816-66.608c1.767-3.946 6.399-5.713 10.344-3.947 3.947 1.767 5.714 6.398 3.947 10.344l-29.816 66.608c-1.76 3.934-6.385 5.718-10.343 3.947z",
    fill: "#4b6bb2"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m441.789 192.471h-9.091c-2.402 0-4.356-1.954-4.356-4.356v-9.091c0-10.81-7.631-14.419-12.5-15.622h-67.236c-2.738 0-4.958 2.22-4.958 4.958v152.775c0 2.738 2.22 4.958 4.958 4.958h103.848c2.738 0 4.958-2.22 4.958-4.958v-117.961c-2.916-10.459-15.475-10.701-15.623-10.703z",
    fill: "#e9efff"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m383.069 301.465v-113.435c0-13.601 11.026-24.628 24.627-24.628h-59.09c-2.738 0-4.958 2.22-4.958 4.958v152.775c0 2.738 2.22 4.958 4.958 4.958h59.09c-13.601 0-24.627-11.026-24.627-24.628z",
    fill: "#d3dcfb"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m452.296 187.958-19.44-19.44c-3.275-3.275-7.718-5.115-12.35-5.115h-8.628s15.862.242 15.862 15.622v9.091c0 2.738 2.22 4.958 4.958 4.958h9.091s15.622.128 15.622 14.771v-7.537c0-4.632-1.84-9.075-5.115-12.35z",
    fill: "#bec8f7"
  }), /* @__PURE__ */ React.createElement("g", {
    fill: "#73c3f9"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "m414.045 238.911h-31.483c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h31.483c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.22 218.407h-26.082c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h26.082c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m395.563 218.407h-13.001c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h13.001c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.22 258.586h-26.082c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h26.082c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m395.563 258.586h-13.001c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h13.001c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m386.377 279.088h-3.814c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h3.814c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m439.22 279.088h-35.644c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h35.644c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z"
  })), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 238.911h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 218.407h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 258.586h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 279.088h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m436.647 238.911h-5.395c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h5.395c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z",
    fill: "#73c3f9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m414.045 299.591h-31.483c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h31.483c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z",
    fill: "#73c3f9"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m366.783 299.591h-4.943c-2.841 0-5.145-2.303-5.145-5.145s2.304-5.145 5.145-5.145h4.943c2.841 0 5.145 2.303 5.145 5.145s-2.304 5.145-5.145 5.145z",
    fill: "#4b6bb2"
  }), /* @__PURE__ */ React.createElement("path", {
    d: "m436.647 299.591h-5.395c-2.841 0-5.145-2.303-5.145-5.145s2.303-5.145 5.145-5.145h5.395c2.841 0 5.145 2.303 5.145 5.145s-2.303 5.145-5.145 5.145z",
    fill: "#73c3f9"
  }))), /* @__PURE__ */ React.createElement("h3", null, "Optimization"), /* @__PURE__ */ React.createElement("p", null, "60% of all internet traffic is on mobile devices, so we optimize your mobile to perform their best in search engines."))))), /* @__PURE__ */ React.createElement("section", {
    id: "pricing",
    className: "section"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "piggy-bank",
    src: "https://d33wubrfki0l68.cloudfront.net/1a6a7635d723bd43ad01eb8e14ca555ade9200d9/e643b/images/savings.svg",
    alt: "drawing of a man next to a large piggy bank",
    width: "300px"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "left"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "left-text-group"
  }, /* @__PURE__ */ React.createElement("h2", null, /* @__PURE__ */ React.createElement("span", null, "$0"), " Down, ", /* @__PURE__ */ React.createElement("span", null, "$150"), " Per Month, ", /* @__PURE__ */ React.createElement("br", null), "No Minimum Contract"), /* @__PURE__ */ React.createElement("p", null, "$0 down for a standard 5 page small business website. If you need more than that then we have to do custom pricing based on the scope of work, number of additional pages, and time involved. ", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("br", null), "You own your domain, content, listing, and profiles.  Cancel anytime with no fees or hassle.")), /* @__PURE__ */ React.createElement("div", {
    className: "list-group"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Hosting Fees Included"), /* @__PURE__ */ React.createElement("p", null, "Hosting fees are built right into the monthly payment."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Unlimited Edits"), /* @__PURE__ */ React.createElement("p", null, "Change anything you want at anytime and it will be done that day."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "24/7 Customer Service"), /* @__PURE__ */ React.createElement("p", null, "Call direct anytime day or night, no phone trees or automated responses."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Web Design & Development"), /* @__PURE__ */ React.createElement("p", null, "Includes over 40 hours of design, development, and testing."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Citations And Listings"), /* @__PURE__ */ React.createElement("p", null, "It's important to have your website linked from other websites, like directories."))), /* @__PURE__ */ React.createElement("div", {
    className: "list-item"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "list-item-content"
  }, /* @__PURE__ */ React.createElement("h3", null, "Google Analytics"), /* @__PURE__ */ React.createElement("p", null, "We install Analytics for free to monitor traffic and where it comes from."))))))), /* @__PURE__ */ React.createElement("section", {
    id: "prices",
    className: "section "
  }, /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Standard + Blogging"), /* @__PURE__ */ React.createElement("span", null, "STARTING AT"), /* @__PURE__ */ React.createElement("h3", null, "300"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 1000+ Word Post"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Written By an SEO Specialist"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 1 Post Per Month"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " $150 Per Extra Post")), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid services-button",
    type: "button"
  }, "CONTACT US"))), /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Standard"), /* @__PURE__ */ React.createElement("span", null, "5 PAGES"), /* @__PURE__ */ React.createElement("h3", null, "150"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Unlimited Edits"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Includes Hosting"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 24/7 Customer Service"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Lifetime Updates")), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid",
    type: "button"
  }, "CONTACT US"))), /* @__PURE__ */ React.createElement("div", {
    className: "price-box"
  }, /* @__PURE__ */ React.createElement("h2", null, "Logos & Graphic Design"), /* @__PURE__ */ React.createElement("span", null, "INCLUDED!"), /* @__PURE__ */ React.createElement("h3", null, "0"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " 2 revisions"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " All File Formats"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " Ready to use"), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("img", {
    "aria-hidden": "true",
    src: "https://d33wubrfki0l68.cloudfront.net/608a680adbcdbdfc5b0db51ce6104719aaf2b24b/7080e/images/tick.svg",
    alt: ""
  }), " FREE w/ Subscription")), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    to: "/contact"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button-solid services-button",
    type: "button"
  }, "CONTACT US"))))));
};
var Main_default = Main;

// route-module:/Users/telos/Documents/GitHub/netlifyremix/app/routes/index.tsx
function links4() {
  return [
    {
      rel: "stylesheet",
      href: "https://d33wubrfki0l68.cloudfront.net/bundles/531aa08a1619a26df663f78609c28da905315645.css"
    }
  ];
}
function Homepage4() {
  return /* @__PURE__ */ React.createElement(Main_default, null);
}

// <stdin>
var import_assets = __toModule(require("./assets.json"));
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/services/index": {
    id: "routes/services/index",
    parentId: "root",
    path: "services",
    index: true,
    caseSensitive: void 0,
    module: services_exports
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "root",
    path: "contact",
    index: true,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: true,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vLi4vLi4vLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm9vdC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvaGVscGVycy91c2VNZWRpYS50cyIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3giLCAiLi4vLi4vLi4vLi4vYXBwL2NvbXBvbmVudHMvU2VydmljZXMvaW5kZXgudHN4IiwgInJvdXRlLW1vZHVsZTovVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9jb250YWN0L2luZGV4LnRzeCIsICIuLi8uLi8uLi8uLi9hcHAvY29tcG9uZW50cy9Db250YWN0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL0Fib3V0L2luZGV4LnRzeCIsICJyb3V0ZS1tb2R1bGU6L1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvaW5kZXgudHN4IiwgIi4uLy4uLy4uLy4uL2FwcC9jb21wb25lbnRzL01haW4vaW5kZXgudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCB7IFJlYWN0IH07XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjEuM1xuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5jcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVGaWxlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG4iLCAiLyoqXG4gKiByZW1peCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnLi9jbGllbnQnKTtcbnZhciBzZXJ2ZXIgPSByZXF1aXJlKCcuL3NlcnZlcicpO1xudmFyIHBsYXRmb3JtID0gcmVxdWlyZSgnLi9wbGF0Zm9ybScpO1xuXG5cblxuT2JqZWN0LmtleXMoY2xpZW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNsaWVudFtrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMoc2VydmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlcltrXTsgfVxuXHR9KTtcbn0pO1xuT2JqZWN0LmtleXMocGxhdGZvcm0pLmZvckVhY2goZnVuY3Rpb24gKGspIHtcblx0aWYgKGsgIT09ICdkZWZhdWx0JyAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShrKSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGssIHtcblx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcGxhdGZvcm1ba107IH1cblx0fSk7XG59KTtcbiIsICJcbmltcG9ydCAqIGFzIGVudHJ5U2VydmVyIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL2VudHJ5LnNlcnZlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMCBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvdGVsb3MvRG9jdW1lbnRzL0dpdEh1Yi9uZXRsaWZ5cmVtaXgvYXBwL3JvdXRlcy9zZXJ2aWNlcy9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvY29udGFjdC9pbmRleC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL3RlbG9zL0RvY3VtZW50cy9HaXRIdWIvbmV0bGlmeXJlbWl4L2FwcC9yb3V0ZXMvYWJvdXQvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIi9Vc2Vycy90ZWxvcy9Eb2N1bWVudHMvR2l0SHViL25ldGxpZnlyZW1peC9hcHAvcm91dGVzL2luZGV4LnRzeFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiLi9hc3NldHMuanNvblwiO1xuZXhwb3J0IGNvbnN0IGVudHJ5ID0geyBtb2R1bGU6IGVudHJ5U2VydmVyIH07XG5leHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICBcInJvb3RcIjoge1xuICAgIGlkOiBcInJvb3RcIixcbiAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgIHBhdGg6IFwiXCIsXG4gICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTBcbiAgfSxcbiAgXCJyb3V0ZXMvc2VydmljZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9zZXJ2aWNlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcInNlcnZpY2VzXCIsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2NvbnRhY3QvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9jb250YWN0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiY29udGFjdFwiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlMlxuICB9LFxuICBcInJvdXRlcy9hYm91dC9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Fib3V0L2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTNcbiAgfSxcbiAgXCJyb3V0ZXMvaW5kZXhcIjoge1xuICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgaW5kZXg6IHRydWUsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGU0XG4gIH1cbn07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBjcmVhdGVDb29raWUsIFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVJlcXVlc3QoXG4gIHJlcXVlc3Q6IFJlcXVlc3QsXG4gIHJlc3BvbnNlU3RhdHVzQ29kZTogbnVtYmVyLFxuICByZXNwb25zZUhlYWRlcnM6IEhlYWRlcnMsXG4gIHJlbWl4Q29udGV4dDogRW50cnlDb250ZXh0XG4pIHtcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XG4gIGNvbnN0IGNvb2tpZSA9IGNyZWF0ZUNvb2tpZShcInBhYmlvX3YyMDIyMDEyM19sb2NhbGVcIiwge1xuICAgIHBhdGg6IFwiL1wiLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICAgIHNhbWVTaXRlOiBcInN0cmljdFwiLFxuICB9KTtcblxuICBjb25zdCBtYXJrdXAgPSByZW5kZXJUb1N0cmluZyhcbiAgICA8UmVtaXhTZXJ2ZXIgY29udGV4dD17cmVtaXhDb250ZXh0fSB1cmw9e3JlcXVlc3QudXJsfSAvPlxuICApO1xuXG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXCJDb250ZW50LVR5cGVcIiwgXCJ0ZXh0L2h0bWxcIik7XG4gIHJlc3BvbnNlSGVhZGVycy5zZXQoXG4gICAgXCJTZXQtQ29va2llXCIsXG4gICAgYXdhaXQgY29va2llLnNlcmlhbGl6ZSh1cmwucGF0aG5hbWUuc3BsaXQoXCIvXCIpWzFdKVxuICApO1xuXG4gIHJldHVybiBuZXcgUmVzcG9uc2UoXCI8IURPQ1RZUEUgaHRtbD5cIiArIG1hcmt1cCwge1xuICAgIHN0YXR1czogcmVzcG9uc2VTdGF0dXNDb2RlLFxuICAgIGhlYWRlcnM6IHJlc3BvbnNlSGVhZGVycyxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUge1xuICBFcnJvckJvdW5kYXJ5Q29tcG9uZW50LFxuICBMb2FkZXJGdW5jdGlvbixcbiAgTWV0YUZ1bmN0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VNYXRjaGVzLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL0hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gXCIuL2hlbHBlcnMvdXNlTWVkaWFcIjtcblxuXG5cbmV4cG9ydCBjb25zdCBtZXRhOiBNZXRhRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlOiBcIkFsa2kgRGlnaXRhbCB8IFdlYiBEZXNpZ25cIiB9O1xufTtcblxuXG5cbmNvbnN0IEJhc2VUZW1wbGF0ZTogUmVhY3QuRkMgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxodG1sIGxhbmc9XCJlblwiPlxuICAgIDxoZWFkPlxuICAgXG5cbiAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAgLz5cbiAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiIC8+XG4gICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJpZT1lZGdlXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTm8gcGFnZSBidWlsZGVycyBvciBXb3JkUHJlc3MgLSBXZSBvZmZlciAxMDAlIGhhbmQtY29kZWQgd2Vic2l0ZXMgd2l0aCBzdXBlcmlvciByZXN1bHRzIHN0YXJ0aW5nIGF0ICQxNTAvbW8uXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwia2V5d29yZHNcIiBjb250ZW50PVwic21hbGwgYnVzaW5lc3Mgd2ViIGRlc2lnbmVyIHVzYSwgc21hbGwgYnVzaW5lc3Mgd2ViIGRldmVsb3BlciB1c2EsIHdlYiBkZXZlbG9wZXIgbmVhciBtZSB1c2EsIGFmZm9yZGFibGUgd2ViIGRlc2lnbiB1c2EsIGFmZm9yZGFibGUgYnVzaW5lc3Mgd2Vic2l0ZSB1c2EsIFxuICAgIHdlYiBkZXNpZ24gYWdlbmN5IHVzYSwgYWZmb3JkYWJsZSB3ZWIgZGVzaWduIGFnZW5jeSBmb3Igc21hbGwgYnVzaW5lc3NlcywgY3VzdG9tIHdlYiBkZXZlbG9wbWVudCB1c2EsIHdlYiBkZXNpZ24gYWdlZW5jeSwgd2ViIGRlc2lnbiBzZXJ2aWNlcyB1c2EsIHdlYnNpdGUgZGVzaWduaW5nIGNvbXBuYXkgdXNhXCIgLz5cbiAgICA8bWV0YSBuYW1lPVwiZm9ybWF0LWRldGVjdGlvblwiIGNvbnRlbnQ9XCJ0ZWxlcGhvbmU9bm9cIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjNDNiN2ZmXCIgLz5cblxuICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBzaXplcz1cIjE4MHgxODBcIiBocmVmPVwiL2FwcGxlLXRvdWNoLWljb24ucG5nXCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMzJ4MzJcIiBocmVmPVwiL2Zhdmljb24tMzJ4MzIucG5nXCIgLz5cbiAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3BuZ1wiIHNpemVzPVwiMTZ4MTZcIiBocmVmPVwiL2Zhdmljb24tMTZ4MTYucG5nXCIgLz5cbiAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgPG1ldGEgbmFtZT1cIm1zYXBwbGljYXRpb24tVGlsZUNvbG9yXCIgY29udGVudD1cIiNkYTUzMmNcIiAvPlxuICAgIDxtZXRhIG5hbWU9XCJ0aGVtZS1jb2xvclwiIGNvbnRlbnQ9XCIjZmZmZmZmXCIgLz5cblxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiU21hbGwgQnVzaW5lc3MgV2ViIERlc2lnbiArIERldmVsb3BtZW50XCIvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiTm8gcGFnZSBidWlsZGVycyBvciBXb3JkUHJlc3MgLSBXZSBvZmZlciAxMDAlIGhhbmQtY29kZWQgd2Vic2l0ZXMgd2l0aCBzdXBlcmlvciByZXN1bHRzIHN0YXJ0aW5nIGF0ICQxNTAvbW8uXCIvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9XCJodHRwczovL3d3dy5hbGtpLmRpZ2l0YWwvXCIvPlxuICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cuYWxraS5kaWdpdGFsL1wiLz5cbiAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cuYWxraS5kaWdpdGFsL1wiLz5cblxuICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL3d3dy5hbGtpLmRpZ2l0YWwvXCIgLz5cblxuICAgICAgPE1ldGEgLz5cbiAgICAgIDxMaW5rcyAvPlxuICAgIFxuICAgIDwvaGVhZD5cbiAgICA8Ym9keT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgPFNjcmlwdHMgLz5cbiAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgIDwvYm9keT5cbiAgPC9odG1sPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBbbmF2QWN0aXZlLCBzZXROYXZBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKCk9PiB7XG4gICAgc2V0TmF2QWN0aXZlKCFuYXZBY3RpdmUpO1xufVxubGV0IGlzTW9iaWxlOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG5pZih0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICBpc01vYmlsZSA9IHVzZU1lZGlhPGJvb2xlYW4+KFxuICAgICAgICAvLyBNZWRpYSBxdWVyaWVzXG4gICAgICAgIFtcIihtaW4td2lkdGg6IDEyNTBweClcIiwgXCIobWF4LXdpZHRoOiAxMjQ5cHgpXCJdLFxuICAgICAgICAvLyBDb2x1bW4gY291bnRzIChyZWxhdGVzIHRvIGFib3ZlIG1lZGlhIHF1ZXJpZXMgYnkgYXJyYXkgaW5kZXgpXG4gICAgICAgIFtmYWxzZSwgdHJ1ZV0sXG5cbiAgICAgICAgZmFsc2VcbiAgIFxuICAgICAgKTtcblxufVxuICByZXR1cm4gKFxuICAgIDxCYXNlVGVtcGxhdGU+XG4gICAgICA8SGVhZGVyIG5hdkFjdGl2ZT17bmF2QWN0aXZlfSBzZXROYXZBY3RpdmU9e3NldE5hdkFjdGl2ZX0gLz5cbiAgICAgIDxkaXYgb25DbGljaz17bmF2QWN0aXZlID8gb25DbGlja0hhbmRsZXIgOiB1bmRlZmluZWR9PlxuICAgICAgPE91dGxldCAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICBcbiAgICA8L0Jhc2VUZW1wbGF0ZT5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IEVycm9yQm91bmRhcnk6IEVycm9yQm91bmRhcnlDb21wb25lbnQgPSAoeyBlcnJvciB9KSA9PiB7XG4gIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICByZXR1cm4gPEJhc2VUZW1wbGF0ZT57ZXJyb3J9PC9CYXNlVGVtcGxhdGU+O1xufTtcbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExpbmssIHVzZUxvY2F0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgdXNlTWVkaWEgZnJvbSBcIi4uLy4uL2hlbHBlcnMvdXNlTWVkaWFcIjtcblxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIjtcblxuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cblxuXG5jb25zdCBIZWFkZXIgPSAoIHByb3BzOiB7IG5hdkFjdGl2ZTogYW55OyBzZXROYXZBY3RpdmU6IGFueTsgfSkgPT4ge1xuICAgIGNvbnN0IHtuYXZBY3RpdmUsIHNldE5hdkFjdGl2ZX0gPSBwcm9wcztcbiAgICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7ICAgICBcbiAgICBjb25zdCBuYXZMaW5rcyA9IFt7IG5hbWU6ICdIb21lJywgcm91dGU6ICcvJ30seyBuYW1lOiAnQWJvdXQnLCByb3V0ZTogJy9hYm91dCd9LHsgbmFtZTogJ1NlcnZpY2VzJywgcm91dGU6ICcvc2VydmljZXMnfSx7IG5hbWU6ICdDb250YWN0Jywgcm91dGU6ICcvY29udGFjdCd9XVxuXG4gICAgbGV0IGlzTW9iaWxlOiBib29sZWFuIHwgbnVsbCA9IG51bGw7XG4gICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgIGlzTW9iaWxlID0gdXNlTWVkaWE8Ym9vbGVhbj4oXG4gICAgICAgICAgICAvLyBNZWRpYSBxdWVyaWVzXG4gICAgICAgICAgICBbXCIobWluLXdpZHRoOiAxMjUwcHgpXCIsIFwiKG1heC13aWR0aDogMTI0OXB4KVwiXSxcbiAgICAgICAgICAgIC8vIENvbHVtbiBjb3VudHMgKHJlbGF0ZXMgdG8gYWJvdmUgbWVkaWEgcXVlcmllcyBieSBhcnJheSBpbmRleClcbiAgICAgICAgICAgIFtmYWxzZSwgdHJ1ZV0sXG4gICAgXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgIFxuICAgICAgICAgICk7XG4gICAgXG4gICAgfVxuXG5cbiBcblxuY29uc3Qgb25DbGlja0hhbmRsZXIgPSAoKT0+IHtcbiAgICBzZXROYXZBY3RpdmUoIW5hdkFjdGl2ZSk7XG59XG5yZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLW5hdiBjb250YWluZXIgbW9iaWxlLW5hdi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ25vbmUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luUmlnaHQ6J2F1dG8gIWltcG9ydGFudCd9fSBpZD1cIm1vYmlsZS1sb2dvXCIgc3JjPXtMb2dvfSBhbHQ9XCJtb2JpbGVfY29tcGFueV9sb2dvXCIgaGVpZ2h0PVwiNjBcIiAvPiBcbiAgICAgICAgICAgICAgICA8TGluayBzdHlsZT17e3pJbmRleDo5LCBwb3NpdGlvbjogJ2Fic29sdXRlJywgbGVmdDogMCwgdG9wOiAwLCAgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUpJyB9fSB0bz17Jy8nfS8+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGFyaWEtbGFiZWw9XCJvcGVuIHRoZSBtZW51XCIgaWQ9XCJtZW51LWJ1dHRvblwiIGNsYXNzTmFtZT17YGhhbWJ1cmdlciBoYW1idXJnZXItLXNwcmluZyAke2lzTW9iaWxlICYmIG5hdkFjdGl2ZSA/ICdpcy1hY3RpdmUnIDogJyd9YH0gb25DbGljaz17b25DbGlja0hhbmRsZXJ9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiaGFtYnVyZ2VyLWlubmVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cblxuICAgICAgICA8bmF2PlxuICAgICAgICAgICAge2lzTW9iaWxlID9cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e25hdkFjdGl2ZSAgPyB7d2lkdGg6ICc2MCUnLCBwb3NpdGlvbjogJ2ZpeGVkJ30gOiAge3dpZHRoOiAwfX0gY2xhc3NOYW1lPVwibmF2YmFyLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2lkZS1tZW51XCIgY2xhc3NOYW1lPVwic2lkZS1uYXZcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7cG9pbnRlckV2ZW50czogJ25vbmUnLCBwb3NpdGlvbjogJ3JlbGF0aXZlJywgbWFyZ2luUmlnaHQ6J2F1dG8gIWltcG9ydGFudCd9fSBzcmM9e0xvZ299IGFsdD1cImNvbXBhbnkgbG9nb1wiIHdpZHRoPVwiMTAwcHhcIiAvPiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8TGluayBzdHlsZT17eyB6SW5kZXg6OSwgcG9zaXRpb246ICdhYnNvbHV0ZScsIGxlZnQ6IDAsIHRvcDogMCwgIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlKScgfX0gdG89eycvJ30vPlxuICAgICAgICAgICAgICAgICAgICA8dWwgIGlkPVwib24tdG9wXCIgY2xhc3NOYW1lPXtgbmF2YmFyLWxpbmtzICR7IW5hdkFjdGl2ZSA/ICdjbGlja2VkJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobmF2TGluayk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSBzdHlsZT17bmF2QWN0aXZlICA/IHtvcGFjaXR5OiAxLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9IDogIHtvcGFjaXR5OiAwLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ319IGtleT17bmF2TGluay5uYW1lICsgbmF2TGluay5yb3V0ZX0gY2xhc3NOYW1lPVwibmF2LWxpXCI+PExpbmsgc3R5bGU9e25hdkFjdGl2ZSB8fCAhaXNNb2JpbGUgICA/IHtvcGFjaXR5OiAxLCB2aXNpYmlsaXR5OiAndmlzaWJsZSd9IDogIHtvcGFjaXR5OiAwLCB2aXNpYmlsaXR5OiAnaGlkZGVuJ319IGNsYXNzTmFtZT17bG9jYXRpb24ucGF0aG5hbWUgPT09IG5hdkxpbmsucm91dGUgPyAnYWN0aXZlLW1lbnUnIDogJyd9ICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bz17bmF2TGluay5yb3V0ZX0+e25hdkxpbmsubmFtZX08L0xpbms+PC9saT5cblxufSl9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgIDogXG4gICAgICAgICAgIDxkaXYgc3R5bGU9eyB7d2lkdGg6IDB9fSBjbGFzc05hbWU9XCJuYXZiYXItbWVudVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlLW1lbnVcIiBjbGFzc05hbWU9XCJzaWRlLW5hdlwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3twb2ludGVyRXZlbnRzOiAnbm9uZScsIHBvc2l0aW9uOiAncmVsYXRpdmUnLCBtYXJnaW5SaWdodDonYXV0byAhaW1wb3J0YW50J319IHNyYz17TG9nb30gYWx0PVwiY29tcGFueSBsb2dvXCIgd2lkdGg9XCIxMDBweFwiIC8+XG4gICAgICAgICAgICAgICAgPExpbmsgc3R5bGU9e3sgekluZGV4OjksIHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAwLCB0b3A6IDAsIHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgtNTAlKScgfX0gdG89eycvJ30vPlxuICAgICAgICAgICAgICAgICAgICA8dWwgIGlkPVwib24tdG9wXCIgY2xhc3NOYW1lPXtgbmF2YmFyLWxpbmtzICR7IW5hdkFjdGl2ZSA/ICdjbGlja2VkJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAge25hdkxpbmtzLm1hcCgobmF2TGluayk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGxpIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfSAga2V5PXtuYXZMaW5rLm5hbWUgKyBuYXZMaW5rLnJvdXRlfSBjbGFzc05hbWU9XCJuYXYtbGlcIj48TGluayBjbGFzc05hbWU9e2xvY2F0aW9uLnBhdGhuYW1lID09PSBuYXZMaW5rLnJvdXRlID8gJ2FjdGl2ZS1tZW51JyA6ICcnfSAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG89e25hdkxpbmsucm91dGV9PntuYXZMaW5rLm5hbWV9PC9MaW5rPjwvbGk+XG5cbn0pfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PiB9XG4gICAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuXG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXI7XG5cblxuIiwgImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8gSG9va1xuY29uc3QgdXNlTWVkaWEgPSA8VD4ocXVlcmllczogc3RyaW5nW10sIHZhbHVlczogVFtdLCBkZWZhdWx0VmFsdWU6IFQpID0+IHtcbiAgLy8gQXJyYXkgY29udGFpbmluZyBhIG1lZGlhIHF1ZXJ5IGxpc3QgZm9yIGVhY2ggcXVlcnlcbiAgY29uc3QgbWVkaWFRdWVyeUxpc3RzID0gcXVlcmllcy5tYXAoKHEpID0+IHdpbmRvdy5tYXRjaE1lZGlhKHEpKTtcbiAgLy8gRnVuY3Rpb24gdGhhdCBnZXRzIHZhbHVlIGJhc2VkIG9uIG1hdGNoaW5nIG1lZGlhIHF1ZXJ5XG4gIGNvbnN0IGdldFZhbHVlID0gKCkgPT4ge1xuICAgIC8vIEdldCBpbmRleCBvZiBmaXJzdCBtZWRpYSBxdWVyeSB0aGF0IG1hdGNoZXNcbiAgICBjb25zdCBpbmRleCA9IG1lZGlhUXVlcnlMaXN0cy5maW5kSW5kZXgoKG1xbCkgPT4gbXFsLm1hdGNoZXMpO1xuICAgIC8vIFJldHVybiByZWxhdGVkIHZhbHVlIG9yIGRlZmF1bHRWYWx1ZSBpZiBub25lXG4gICAgcmV0dXJuIHZhbHVlcz8uW2luZGV4XSB8fCBkZWZhdWx0VmFsdWU7XG4gIH07XG4gIC8vIFN0YXRlIGFuZCBzZXR0ZXIgZm9yIG1hdGNoZWQgdmFsdWVcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZTxUPihnZXRWYWx1ZSk7XG4gIHVzZUVmZmVjdChcbiAgICAoKSA9PiB7XG4gICAgICAvLyBFdmVudCBsaXN0ZW5lciBjYWxsYmFja1xuICAgICAgLy8gTm90ZTogQnkgZGVmaW5pbmcgZ2V0VmFsdWUgb3V0c2lkZSBvZiB1c2VFZmZlY3Qgd2UgZW5zdXJlIHRoYXQgaXQgaGFzIC4uLlxuICAgICAgLy8gLi4uIGN1cnJlbnQgdmFsdWVzIG9mIGhvb2sgYXJncyAoYXMgdGhpcyBob29rIGNhbGxiYWNrIGlzIGNyZWF0ZWQgb25jZSBvbiBtb3VudCkuXG4gICAgICBjb25zdCBoYW5kbGVyID0gKCkgPT4gc2V0VmFsdWUoZ2V0VmFsdWUpO1xuICAgICAgLy8gU2V0IGEgbGlzdGVuZXIgZm9yIGVhY2ggbWVkaWEgcXVlcnkgd2l0aCBhYm92ZSBoYW5kbGVyIGFzIGNhbGxiYWNrLlxuICAgICAgbWVkaWFRdWVyeUxpc3RzLmZvckVhY2goKG1xbCkgPT4gbXFsLmFkZExpc3RlbmVyKGhhbmRsZXIpKTtcbiAgICAgIC8vIFJlbW92ZSBsaXN0ZW5lcnMgb24gY2xlYW51cFxuICAgICAgcmV0dXJuICgpID0+XG4gICAgICAgIG1lZGlhUXVlcnlMaXN0cy5mb3JFYWNoKChtcWwpID0+IG1xbC5yZW1vdmVMaXN0ZW5lcihoYW5kbGVyKSk7XG4gICAgfSxcbiAgICBbXSAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIGVmZmVjdCBpcyBvbmx5IHJ1biBvbiBtb3VudCBhbmQgdW5tb3VudFxuICApO1xuICByZXR1cm4gdmFsdWU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VNZWRpYTsiLCAiXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiO1xuXG5cbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xuICBjb25zdCBuYXZMaW5rcyA9IFt7IG5hbWU6ICdIb21lJywgcm91dGU6ICcvJ30seyBuYW1lOiAnQWJvdXQnLCByb3V0ZTogJy9hYm91dCd9LHsgbmFtZTogJ1NlcnZpY2VzJywgcm91dGU6ICcvc2VydmljZXMnfSx7IG5hbWU6ICdDb250YWN0Jywgcm91dGU6ICcvY29udGFjdCd9XVxuXG4gIHJldHVybiAoXG4gICAgPGZvb3Rlcj5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBsaWdodC1tb2RlLXN2Z1wiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYzI3MmUxM2YxMWZlYzVlOGE4MmI2MzQyYmMxOTRiM2ViNzRiNWI3Mi83Y2YxMC9pbWFnZXMvZm9vdGVyLXN3b29zaC5zdmdcIiBhbHQ9XCJcIiAgLz5cbiAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9vdGVyLWltZyBkYXJrLW1vZGUtc3ZnXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8zYjc1NmFlMzBlZjUxY2NkODU2NGMyOTc4ZWE4YTVhNzBmMTkzMWY4Lzk1ZGI3L2ltYWdlcy9mb290ZXItc3dvb3NoLWRhcmsuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3VwXCI+IFxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW0gaW1hZ2UtYm94XCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImZvb3Rlci1sb2dvIG1vYmlsZS1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZm9vdGVyLWxvZ28gZGVza3RvcC1kaXNwbGF5XCIgc3JjPXtMb2dvfSBhbHQ9XCJhbGtpIGRpZ2l0YWwgd2ViIGRlc2lnbnMgbG9nb1wiIGhlaWdodD1cIjUwXCIgLz5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIm1haWx0bzphbGtpZGlnaXRhbC53ZWJkZXNpZ25AZ21haWwuY29tXCI+YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbTwvYT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6NTA5LTQ4MS03NTEyXCI+KDUwOSk0ODEtNzUxMjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWl0ZW1cIj4gXG4gICAgICAgICAgICAgICAgICA8aDI+TmF2aWdhdGlvbjwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvb3Rlci1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICB7bmF2TGlua3MubWFwKChuYXZMaW5rKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAgPExpbmsga2V5PXtuYXZMaW5rLm5hbWV9IGNsYXNzTmFtZT0nbGluaycgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvPXtuYXZMaW5rLnJvdXRlfT57bmF2TGluay5uYW1lfTwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICA8aDI+U2VydmljZXM8L2gyPlxuICAgICAgICAgICAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJmb290ZXItbGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+V2ViIERlc2lnbjwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPldlYnNpdGUgTWFpbnRlbmFuY2U8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5TRU8gU2VydmljZXM8L3A+XG4gICAgICAgICAgICAgICAgICA8cD5Db250ZW50IENyZWF0aW9uPC9wPlxuICAgICAgICAgICAgICAgICAgPHA+TG9nbyBEZXNpZ248L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyYW5kaW5nXCI+XG4gICAgICAgICAgPHA+Q29weXJpZ2h0ICZjb3B5OyAyMDIxIHwgQWxraSBEaWdpdGFsIFdlYiBTZXJ2aWNlcyB8IEFsbCBSaWdodHMgUmVzZXJ2ZWQ8L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCAiaW1wb3J0IHR5cGUgeyBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdFwiO1xuXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZXJ2aWNlcydcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmtzKCkge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHJlbDogXCJzdHlsZXNoZWV0XCIsXG4gICAgICAgIGhyZWY6IFwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC9idW5kbGVzLzAxYmE5NDEyNjViOGFiNTVlZmNiMWUyYzE2Y2RhOTA2MTk0NTM2OTUuY3NzXCIsXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBleHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7XG4gICAgcGFyYW1zLFxuICB9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocGFyYW1zKTtcbiAgICByZXR1cm4gcGFyYW1zXG4gIH07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICAgXG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHVzZVBhcmFtcygpO1xuICAgICAgICBjb25zb2xlLmxvZyhwYXJhbXMpO1xuICAgICAgXG4gIHJldHVybiA8U2VydmljZXMgLz5cbn1cbiIsICJcblxuXG5pbXBvcnQgdHlwZSB7IFJlbWl4TGlua1Byb3BzIH0gZnJvbSBcIkByZW1peC1ydW4vcmVhY3QvY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgTGluaywgdXNlUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG4vLyBAdHMtbm9jaGVja1xuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxtYWluIGlkPVwibWFpblwiPlxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwYWdlLWhlYWRlclwiPlxuICAgICAgICA8aDE+T3VyIFNlcnZpY2VzPC9oMT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwid2ViLWRldlwiIGNsYXNzTmFtZT1cInNlY3Rpb24gdGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8wNTY4MTJmMWQxODM5MDY2NWJjMjBmMzE1YjY2Yzc5NTA2NmU1MTNmLzY4MDc0L2ltYWdlcy9jb2RlLXNjZy5zdmdcIiBhbHQ9XCJtYW4gc3RhcmluZyBhdCBhbiBvcGVuIGJyb3dzZXIgd2luZG93XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGgyPldlYiBEZXNpZ24gJiBEZXZlbG9wbWVudCBEb25lIERpZmZlcmVudGx5PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XaGF0IG1ha2VzIHVzIHVuaXF1ZSBpbiB0aGUgZGV2ZWxvcG1lbnQgd29ybGQgaXMgdGhhdCB3ZSBkb24ndCB1c2UgV29yZFByZXNzLCBmcmFtZXdvcmtzLCBvciBwYWdlIGJ1aWxkZXJzLiAgXG4gICAgICAgICAgICAgICAgV2UgbWV0aWN1bG91c2x5IHdyaXRlIHRoZSBjb2RlIGxpbmUgYnkgbGluZS4gIFRoaXMgZ2l2ZXMgdXMgbXVjaCBtb3JlIGNvbnRyb2wgb3ZlciB0aGUgZGVzaWduLCBcbiAgICAgICAgICAgICAgICBhbmQgdGhlIHdlYnNpdGUgcGVyZm9ybXMgbGlnaHRuaW5nIGZhc3QgYmVjYXVzZSB0aGVyZSdzIG5vIGJsb2F0ZWQgb3IgbWVzc3kgY29kZSB0aGF0IHNsb3dzIGl0IGRvd24uXG4gICAgICAgICAgICAgICAgPGJyLz48YnIvPlxuICAgICAgICAgICAgICAgIFdlYnNpdGVzIGJ1aWx0IGJ5IGhhbmQgd2lsbCA8c3Bhbj5vdXQtcGVyZm9ybSBtb3N0IFdvcmRQcmVzcyBzaXRlczwvc3Bhbj4gYW5kIGRyYWcgYW5kIGRyb3AgcGFnZSBidWlsZGVycyBcbiAgICAgICAgICAgICAgICB3aGljaCBjb3VsZCBjb3N0IHRob3VzYW5kcyBvZiBkb2xsYXJzLiAgV2hlbiBpdCBjb21lcyB0byB0aGUgd2ViLCB0aGUgZmFzdGVyIGFuZCBtb3JlIG9yZ2FuaXplZCB3ZWJzaXRlcyB3aW4uXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJwYXBlci1haXJwbGFuZS1wYXRoIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lLWJveFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ZnLWRpdlwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNTguMDY0IDU4LjA2NFwiICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiIGNsYXNzTmFtZT1cIlwiPjxnPjxwb2x5Z29uIHN0eWxlPXt7ZmlsbDonIzQzQjdGRid9fSBwb2ludHM9XCIxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgMjQuMDY0LDM1LjAzMiA0NC4wNjQsNDguMDMyIDU4LjA2NCwxMC4wMzIgMCwyMi4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM3MzgzQkZcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM3MzgzQkZcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOicjM0Q4NEQ1J319IHBvaW50cz1cIjI0LjA2NCwzNS4wMzIgMjAuMTI3LDQ4LjAzMiAxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM1NTYwODBcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM1NTYwODBcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOiAnIzNEODRENSd9fSBwb2ludHM9XCIyNC4wNjQsMzUuMDMyIDIwLjA2NCw0OC4wMzIgMzEuOTEyLDQwLjEzMyBcIiBkYXRhLW9yaWdpbmFsPVwiIzQ2NEY2NlwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjNDY0RjY2XCIvPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG4gICAgPHNlY3Rpb24gaWQ9XCJzZW9cIiBjbGFzc05hbWU9XCJzZWN0aW9uIHRlbXBsYXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvODJkZmEzMWJkNzI0NWQxYzViN2JlOGZkNWI0ZWQyODFiNmMzMmQ2My8xODNkNy9pbWFnZXMvc3BlZWQuc3ZnXCIgYWx0PVwibWFuIHN0YW5kaW5nIGluIGZyb250IG9mIGEgY29tcHV0ZXJcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TZWFyY2ggRW5naW5lIE9wdGltaXphdGlvbiBGb3IgMjAyMTwvaDI+XG4gICAgICAgICAgICAgICAgPHA+SWYgc29tZW9uZSB0ZWxscyB5b3UgdGhleSBjYW4gZ2V0IHlvdSB0byB0aGUgZnJvbnQgcGFnZSBvZiBHb29nbGUgaW4gMyBtb250aHMgLSA8c3Bhbj5SVU4hPC9zcGFuPiBVbmxlc3MgeW91ciB3ZWJzaXRlIFxuICAgICAgICAgICAgICAgICAgIHdhcyBmZWF0dXJlZCBieSBUaGUgTmV3IFlvcmsgVGltZXMgaXQgY291bGQgdGFrZSB5ZWFycyB0byByYW5rIGluIHRoZSB0b3Agb2YgdGhlIHNlYXJjaCByZXN1bHRzLlxuICAgICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICAgICBXZSBvZmZlciBhIG51bWJlciBvZiB0aGUgbGF0ZXN0IHNlYXJjaCBlbmdpbmUgb3B0aW1pemF0aW9uIHRlY2huaXF1ZXMgZm9yIDIwMjE6XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjaGVja21hcmtcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+S2V5d29yZC1DZW50ZXJlZCBDb250ZW50ICYgQmxvZ3M8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPk1vYmlsZS1GaXJzdC1PcHRpbWl6ZWQgZm9yIHRoZSBCZXN0IEV4cGVyaWVuY2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPkNsZWFuICYgT3JnYW5pemVkIENvZGUgU3RydWN0dXJlIEZvciBXZWIgQ3Jhd2xlcnM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPkZ1bGx5IFJlc3BvbnNpdmUgRm9yIE1vYmlsZSwgVGFibGV0LCAmIERlc2t0b3A8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwicGFwZXItYWlycGxhbmUtcGF0aCBjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZS1ib3hcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN2Zy1kaXZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDU4LjA2NCA1OC4wNjRcIiAgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCIgY2xhc3NOYW1lPVwiXCI+PGc+PHBvbHlnb24gc3R5bGU9e3tmaWxsOiAnIzQzQjdGRid9fSBwb2ludHM9XCIxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgMjQuMDY0LDM1LjAzMiA0NC4wNjQsNDguMDMyIDU4LjA2NCwxMC4wMzIgMCwyMi4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM3MzgzQkZcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM3MzgzQkZcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOicjM0Q4NEQ1J319IHBvaW50cz1cIjI0LjA2NCwzNS4wMzIgMjAuMTI3LDQ4LjAzMiAxNy4wNjQsMzEuMDMyIDU4LjA2NCwxMC4wMzIgXCIgZGF0YS1vcmlnaW5hbD1cIiM1NTYwODBcIiBjbGFzc05hbWU9XCJcIiBkYXRhLW9sZF9jb2xvcj1cIiM1NTYwODBcIi8+PHBvbHlnb24gc3R5bGU9e3tmaWxsOicjM0Q4NEQ1J319IHBvaW50cz1cIjI0LjA2NCwzNS4wMzIgMjAuMDY0LDQ4LjAzMiAzMS45MTIsNDAuMTMzIFwiIGRhdGEtb3JpZ2luYWw9XCIjNDY0RjY2XCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiM0NjRGNjZcIi8+PC9nPiA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwiZ3JhcGhpYy1kZXNpZ25cIiBjbGFzc05hbWU9XCJzZWN0aW9uIHRlbXBsYXRlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYTljYjQyYTUyN2E4ZjdkMTZmMzgwNGQ4NmRjMTIyNjFjM2YzM2Y4MC81OGQ2MC9pbWFnZXMvZGVzaWduLXN2Zy5zdmdcIiBhbHQ9XCJtYW4gc3RhbmRpbmcgbmV4dCBncmFwaGljIGRpc3BsYXlcIi8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxoMj5Mb2dvcywgR3JhcGhpYyBEZXNpZ24sICYgQnJhbmRpbmc8L2gyPlxuICAgICAgICAgICAgICAgIDxwPldlIGFsc28gb2ZmZXIgbG9nbyBhbmQgZ3JhcGhpYyBkZXNpZ24gc2VydmljZXMgdmlhIG91ciBvd24gaW4taG91c2UgZ3JhcGhpYyBkZXNpZ25lci4gIElmIHlvdSBoYXZlIGFuIFxuICAgICAgICAgICAgICAgICAgICBleGlzdGluZyBsb2dvIHRoYXQgbmVlZHMgYSB0b3VjaCB1cCBvciBuZWVkIGEgY29tcGxldGVseSBuZXcgb25lIHdlIGNhbiBoZWxwIGJ1aWxkIHlvdXIgYnVzaW5lc3MncyBicmFuZC5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBMb2dvcyBTdGFydGluZyBhdCAkMzUwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlJhdGVzIG1heSBpbmNyZWFzZSBiYXNlZCBvbiBjb21wbGV4aXR5LCBudW1iZXIgb2YgaG91cnMsIGFuZCBudW1iZXIgb2YgcmV2aXNpb25zPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPlNvY2lhbCBNZWRpYSBHcmFwaGljczwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5NYWtlIGEgcG9zdCB0aGF0IHN0YW5kcyBvdXQgd2l0aCBpdHMgb3duIGN1c3RvbSBncmFwaGljcy4gIEdpdmUgdXMgYSBjYWxsIGZvciBwbGFucyBhbmQgcmF0ZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwidXBkYXRlc1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gdGVtcGxhdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPkxpZmV0aW1lIFVwZGF0ZXMgRm9yIFlvdXIgV2Vic2l0ZTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPkdvb2dsZSBjaGFuZ2VzIGl0cyBzZWFyY2ggYWxvZ3JpdGhtIHN0YW5kYXJkcyBldmVyeSBzbyBvZnRlbiwgY2hhbmdpbmcgd2hhdCBpcyBpbXBvcnRhbnQgdG8gcmFuay4gIEFuZCB3ZWIgXG4gICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHkgZ3VpZGVsaW5lcyBmb3IgdXNlcnMgd2l0aCBzY3JlZW4gcmVhZGVycyBnZXQgdXBkYXRlZCBhcyB3ZWxsLiAgU28gd2UgYWxzbyBpbmNsdWRlIDxzcGFuPmxpZmV0aW1lIHVwZGF0ZXM8L3NwYW4+IFxuICAgICAgICAgICAgICAgICAgICAgICB0byB5b3VyIHdlYnNpdGUgdG8gbWFrZSBzdXJlIGl0IG5ldmVyIGdvZXMgb3V0IG9mIGRhdGUgYW5kIGlzIGFsd2F5cyBjaGFuZ2luZyB3aXRoIHRoZSB0aW1lcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94ZXMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaWQ9XCJDYXBhXzFcIiBlbmFibGUtYmFja2dyb3VuZD1cIm5ldyAwIDAgNTEyIDUxMlwiIGhlaWdodD1cIjUxMnB4XCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJweFwiIGNsYXNzTmFtZT1cIlwiPjxnPjxnPjxwYXRoIGQ9XCJtNDA4LjA0OSAzNDAuNTIzdi0zNS42NDJjMC00LjE0NC0zLjM2LTcuNTA0LTcuNTA0LTcuNTA0cy03LjUwNCAzLjM2LTcuNTA0IDcuNTA0djM1LjY0MmMwIDEuMzc5LTEuMTIyIDIuNTAxLTIuNTAxIDIuNTAxaC05OS43NzJjLTMuMDY2LTM1LjAxNyAxNy4yMTctNjkuMTQ3IDUxLjE3NS04Mi4yNTYgNi43NjUtMi42MTEgMTAuMzY5LTEwLjA5IDguMjA1LTE3LjAyN2wtOS43MzMtMzEuMjI4Yy0xLjEyMy0zLjYwMS0zLjcwOC02LjYyMy03LjA5MS04LjI5My0zLjM5Ny0xLjY3Ni03LjM5LTEuODg4LTEwLjk1NC0uNTc5LTMzLjkyNiAxMi40NTYtNjEuNDg3IDM3LjIzNi03Ny42MDggNjkuNzc1LTE2LjE3NiAzMi42NTItMTkuMTI2IDY5Ljc1MS04LjMwNyAxMDQuNDYyIDExLjc1MSAzNy43IDM4LjcwOCA2OC41NjcgNzQuMzkgODUuNDMtLjkzNiAzLjY5My4wMDYgNy41NzkgMi42MyAxMC40ODcgMy4wNSAzLjM5NyA3LjcwOCA0LjYxNyAxMS45NjUgMy4yNzVsNDUuMDA2LTE0LjAyOGMzLjIyMS0xLjAwMyA1LjgyOC0zLjM1OCA3LjE1NS02LjQ1OXMxLjIyOS02LjYxMy0uMjY5LTkuNjM2bC0yMC45MzQtNDIuMjRjLTIuMDE3LTQuMDctNi4wODgtNi41MTItMTAuNjMxLTYuMzkyLTQuNTQxLjEyNy04LjQ3MSAyLjgtMTAuMjU4IDYuOTc2bC0xLjAzMiAyLjQxMmMtMTkuMzQxLTkuODQ0LTMzLjkxNi0yNi45OTgtNDAuMzk2LTQ3Ljc4OC0uMTk1LS42MjYtLjM1OC0xLjI1NS0uNTM3LTEuODgyaDk2Ljk5NGM5LjY1NiAwIDE3LjUxMS03Ljg1NSAxNy41MTEtMTcuNTF6bS03NC40NiA4My4zMjFjNC44MDcgMi4wNTEgMTAuMzk0LS4yIDEyLjQ1My01LjAxNmwuMjgtLjY1NCAxNS43NCAzMS43Ni0zNC42NTcgMTAuODAyYy4wNDEtMS4zMDYtLjE5My0yLjYxOC0uNzAxLTMuODY2LS45NTEtMi4zMzgtMi43NTUtNC4xNzItNS4wNzktNS4xNjUtMzQuMDUxLTE0LjU1OC01OS44NzItNDMuMDk1LTcwLjg0My03OC4yOTQtMTkuODgtNjMuNzgxIDEzLjMzLTEzMS43NDMgNzUuNjY0LTE1NS4yNzRsOS4wNSAyOS4wMzhjLTQ2LjA5OSAxOC40MTUtNzAuNTYyIDY5LjY2NS01NS43NDQgMTE3LjIwNiA4LjMzOSAyNi43NTMgMjcuOTYxIDQ4LjQyNSA1My44MzcgNTkuNDYzelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48Y2lyY2xlIGN4PVwiNTUuNDY4XCIgY3k9XCI5MS4xNDZcIiByPVwiMTQuNjMzXCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxjaXJjbGUgY3g9XCI5OS45NjlcIiBjeT1cIjkxLjE0NlwiIHI9XCIxNC42MzNcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PGNpcmNsZSBjeD1cIjE0NC40NjlcIiBjeT1cIjkxLjE0NlwiIHI9XCIxNC42MzNcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm01MDUuNTkxIDI5My45OWMtMTIuMDY4LTM4LjcxOS0zOS45MTktNjkuOTk0LTc2Ljg2LTg2LjU3OWwuMDM1LS4wODFjMS43ODctNC4xNzYgMS4wMDYtOC44NjUtMi4wMzgtMTIuMjM2LTMuMDQ0LTMuMzcyLTcuNjMtNC42MjctMTEuOTY1LTMuMjc1bC02LjcxNCAyLjA5M3YtMTQyLjAwN2MwLTkuNjU1LTcuODU1LTE3LjUxLTE3LjUxLTE3LjUxaC0yOTYuNjY0Yy00LjE0NCAwLTcuNTA0IDMuMzYtNy41MDQgNy41MDRzMy4zNiA3LjUwNCA3LjUwNCA3LjUwNGgyOTYuNjY0YzEuMzc5IDAgMi41MDEgMS4xMjIgMi41MDEgMi41MDF2ODEuNTQ1aC0zNzguMDMydi04MS41NDRjMC0xLjM3OSAxLjEyMi0yLjUwMSAyLjUwMS0yLjUwMWgzOC4yMjhjNC4xNDQgMCA3LjUwNC0zLjM2IDcuNTA0LTcuNTA0cy0zLjM2LTcuNTA0LTcuNTA0LTcuNTA0aC0zOC4yMjdjLTkuNjU1LS4wMDEtMTcuNTEgNy44NTQtMTcuNTEgMTcuNTA5djI4OC42MThjMCA5LjY1NSA3Ljg1NSAxNy41MSAxNy41MSAxNy41MWgxODAuNDkzYzQuMTQ0IDAgNy41MDQtMy4zNiA3LjUwNC03LjUwNHMtMy4zNi03LjUwNC03LjUwNC03LjUwNGgtMTgwLjQ5M2MtMS4zNzkgMC0yLjUwMS0xLjEyMi0yLjUwMS0yLjUwMXYtMTkyLjA2NWgzNzguMDMxdjUwLjEzMWwtMjMuMjg0IDcuMjU4Yy0zLjIyIDEuMDAzLTUuODI4IDMuMzU3LTcuMTU1IDYuNDU5LTEuMzI3IDMuMTAxLTEuMjI5IDYuNjEzLjI2OSA5LjYzNmwyMC45MzQgNDIuMjRjMi4wMTcgNC4wNyA2LjEwMyA2LjUxMSAxMC42MzEgNi4zOTIgNC41NDEtLjEyNyA4LjQ3MS0yLjggMTAuMjU3LTYuOTc2bC4yOTYtLjY5MmMyMC42NTMgOS41ODggMzYuMTY5IDI3LjIwOSA0Mi45NzYgNDkuMDQ3IDEyLjU4NSA0MC4zNzgtOC40MzggODMuOTI5LTQ3Ljg2MiA5OS4xNDctNi43NjMgMi42MTEtMTAuMzY3IDEwLjA5MS04LjIwNCAxNy4wMjdsOS43MzMgMzEuMjI3YzIuMTQ1IDcuNDE0IDEwLjg2OSAxMS42NzggMTguMDQ2IDguODczIDMzLjkyNS0xMi40NTYgNjEuNDg2LTM3LjIzNiA3Ny42MDctNjkuNzc1IDE2LjE3Ni0zMi42NTMgMTkuMTI2LTY5Ljc1MiA4LjMwNy0xMDQuNDYzem0tODkuOTkyIDE1OS43NC05LjA1MS0yOS4wMzljNDYuMDk5LTE4LjQxNSA3MC41NjItNjkuNjY1IDU1Ljc0NC0xMTcuMjA2LTguNzA0LTI3LjkyNC0yOS4zOTktNTAuMDMzLTU2Ljc4MS02MC42Ni00LjM5LTEuNzA1LTkuMjM5LjA0My0xMS41ODMgMy45ODhsLTE1Ljc4OS0zMS44NiAzNC4wNjEtMTAuNjE2Yy0uNDAxIDEuODYyLS4yMzEgMy43OTkuNTEzIDUuNi45NyAyLjM1IDIuODgyIDQuMjQ0IDUuMjQ0IDUuMTk2IDM1LjMwOCAxNC4yMjcgNjIuMDI3IDQzLjEzOSA3My4zMDUgNzkuMzIzIDE5Ljg4IDYzLjc4Mi0xMy4zMyAxMzEuNzQ0LTc1LjY2MyAxNTUuMjc0elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48cGF0aCBkPVwibTU1LjE4NyAxNjYuNzA4Yy0xMi4wNTIgMC0yMS44NTYgOS44MDUtMjEuODU2IDIxLjg1NnY3MS4zOTZjMCAxMi4wNTIgOS44MDQgMjEuODU2IDIxLjg1NiAyMS44NTZoNzEuMzk2YzEyLjA1MiAwIDIxLjg1Ni05LjgwNCAyMS44NTYtMjEuODU2di03MC43MzljMC0xMi40MTQtMTAuMDk5LTIyLjUxMy0yMi41MTMtMjIuNTEzem03OC4yNDQgMjIuNTEzdjcwLjczOWMwIDMuNzc2LTMuMDcyIDYuODQ4LTYuODQ4IDYuODQ4aC03MS4zOTZjLTMuNzc2IDAtNi44NDgtMy4wNzItNi44NDgtNi44NDh2LTcxLjM5NmMwLTMuNzc2IDMuMDcyLTYuODQ4IDYuODQ4LTYuODQ4aDcwLjc0YzQuMTM4LjAwMSA3LjUwNCAzLjM2NyA3LjUwNCA3LjUwNXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm0xNzYuNDI4IDE4Ni43ODJoNTUuMTkzYzQuMTQ0IDAgNy41MDQtMy4zNiA3LjUwNC03LjUwNHMtMy4zNi03LjUwNC03LjUwNC03LjUwNGgtNTUuMTkzYy00LjE0NCAwLTcuNTA0IDMuMzYtNy41MDQgNy41MDRzMy4zNiA3LjUwNCA3LjUwNCA3LjUwNHpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm0xNzYuNDI4IDIyMS40ODhoNTUuMTkzYzQuMTQ0IDAgNy41MDQtMy4zNiA3LjUwNC03LjUwNHMtMy4zNi03LjUwNC03LjUwNC03LjUwNGgtNTUuMTkzYy00LjE0NCAwLTcuNTA0IDMuMzYtNy41MDQgNy41MDRzMy4zNiA3LjUwNCA3LjUwNCA3LjUwNHpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PC9nPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5EZXNpZ24gVXBkYXRlczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPklmIHlvdSBldmVyIHdhbnQgYSBuZXcgZGVzaWduLCB3ZSB3aWxsIHJlYnVpbGQgeW91ciB3ZWJzaXRlIGF0IG5vIGV4dHJhIGNvc3QuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGlkPVwiQ2FwYV8xXCIgZW5hYmxlLWJhY2tncm91bmQ9XCJuZXcgMCAwIDUxMiA1MTJcIiBoZWlnaHQ9XCI1MTJweFwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiIHdpZHRoPVwiNTEycHhcIj48Zz48Zz48Zz48cGF0aCBkPVwibTIyMC43MTYgNTEyYy01MC45NTEgMC05OS44NjgtMjEuNzE1LTEzNC4yMDgtNTkuNTc2LTIuNzg4LTMuMDc0LTIuNTU2LTcuODI3LjUxOC0xMC42MTYgMy4wNzQtMi43ODcgNy44MjYtMi41NTcgMTAuNjE1LjUxOCAzMS40OTcgMzQuNzI4IDc2LjM1NiA1NC42NDUgMTIzLjA3NSA1NC42NDUgMjYuNTczIDAgNTMuMDA5LTYuNDMxIDc2LjQ0Ny0xOC41OTYgMjIuNjY5LTExLjc2NSA0Mi42MzktMjguOTAzIDU3Ljc0OS00OS41NjIgMi40OTQtMy40MDkgMy41MTEtNy41ODQgMi44NjQtMTEuNzU3LS42NDgtNC4xNzMtMi44ODItNy44NDUtNi4yOTEtMTAuMzM5cy03LjU4OS0zLjUxNy0xMS43NTgtMi44NjRjLTQuMTc0LjY0Ny03Ljg0NSAyLjg4MS0xMC4zMzkgNi4yOS0yNS4yODUgMzQuNTY3LTY1LjkxIDU1LjIwNC0xMDguNjcyIDU1LjIwNC03NC4xODYgMC0xMzQuNTQxLTYwLjM1NS0xMzQuNTQxLTEzNC41NDEgMC0yNS42OTQgNy4yNjMtNTAuNjY2IDIxLjAwMy03Mi4yMTggMTMuMzg4LTIxIDMyLjI2OS0zNy44NjMgNTQuNjAxLTQ4Ljc2NCA1Ljc5My0yLjgyOSA5LjM2Ny05LjA4NSA4LjgyOS0xNS41MjItLjUzMy02LjM4NC01LjAxMi0xMS45MjItMTEuMTI0LTEzLjgwMi0zLjgyLTEuMTc1LTcuOTg2LS44NDYtMTEuNTc3LjkwNi0yNy41NjkgMTMuNDU4LTUwLjg3MyAzNC4yNjgtNjcuMzkzIDYwLjE4My0xNi45ODMgMjYuNjM4LTI1Ljk2MSA1Ny40ODgtMjUuOTYxIDg5LjIxOCAwIDMxLjQ3IDguODc3IDYyLjEyMSAyNS42NyA4OC42NDEgMi4yMjEgMy41MDcgMS4xNzggOC4xNDktMi4zMjggMTAuMzY5LTMuNTA2IDIuMjIyLTguMTQ4IDEuMTc5LTEwLjM2OS0yLjMyOC0xOC4zMi0yOC45MjktMjguMDAzLTYyLjM2MS0yOC4wMDMtOTYuNjgyIDAtMzQuNTk4IDkuNzkyLTY4LjI0MyAyOC4zMTctOTcuMjk4IDE4LjAxLTI4LjI1IDQzLjQxNi01MC45MzcgNzMuNDczLTY1LjYxIDcuNDAyLTMuNjEzIDE1Ljc3LTQuMTMgMjMuNTYtMS40NSA3Ljc5MSAyLjY3OSAxNC4wNzEgOC4yMzIgMTcuNjg1IDE1LjYzNSAzLjYxMyA3LjQwMiA0LjEyOSAxNS43NyAxLjQ0OSAyMy41NjEtMi42NzkgNy43OS04LjIzMSAxNC4wNy0xNS42MzQgMTcuNjg0LTE5Ljg0MiA5LjY4OC0zNi42MjEgMjQuNjc0LTQ4LjUyMSA0My4zNC0xMi4xOTkgMTkuMTMzLTE4LjY0NyA0MS4zMTEtMTguNjQ3IDY0LjEzOCAwIDY1Ljg5OSA1My42MTMgMTE5LjUxMiAxMTkuNTEyIDExOS41MTIgMzcuOTg2IDAgNzQuMDc2LTE4LjMzNiA5Ni41NDEtNDkuMDQ4IDQuODY0LTYuNjUgMTIuMDI1LTExLjAwNyAyMC4xNjYtMTIuMjY5IDguMTM1LTEuMjYzIDE2LjI4Ni43MiAyMi45MzUgNS41ODYgNi42NDkgNC44NjMgMTEuMDA2IDEyLjAyNCAxMi4yNjggMjAuMTY0IDEuMjYzIDguMTQxLS43MiAxNi4yODctNS41ODUgMjIuOTM1LTE2LjQ3MSAyMi41MTgtMzguMjQgNDEuMjAxLTYyLjk1NSA1NC4wMjgtMjUuNTY5IDEzLjI3LTU0LjM5OCAyMC4yODUtODMuMzcxIDIwLjI4NXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm0yNTIuOTE2IDk2LjAyNmMtMjYuNDc1IDAtNDguMDEzLTIxLjUzOS00OC4wMTMtNDguMDE0LjAwMS0yNi40NzQgMjEuNTM5LTQ4LjAxMiA0OC4wMTMtNDguMDEyIDI2LjQ3NSAwIDQ4LjAxNCAyMS41MzggNDguMDE0IDQ4LjAxMyAwIDI2LjQ3NC0yMS41MzkgNDguMDEzLTQ4LjAxNCA0OC4wMTN6bTAtODAuOTk3Yy0xOC4xODcgMC0zMi45ODMgMTQuNzk2LTMyLjk4MyAzMi45ODMgMCAxOC4xODggMTQuNzk3IDMyLjk4NCAzMi45ODMgMzIuOTg0IDE4LjE4OCAwIDMyLjk4NC0xNC43OTcgMzIuOTg0LTMyLjk4NC4wMDEtMTguMTg2LTE0Ljc5Ni0zMi45ODMtMzIuOTg0LTMyLjk4M3pcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm00MzkuNTY2IDM2Ni4xNjhjLTMuMDQ4IDAtNS45MTQtMS44NjctNy4wNDItNC44OWwtMTUuMTM2LTQwLjU4MWMtNC40MjQtMTIuMDY4LTE1Ljk5Ni0yMC4xNTEtMjguODA4LTIwLjE1MmgtOTcuNDc3Yy00LjE1MSAwLTcuNTE1LTMuMzY0LTcuNTE1LTcuNTE1di03MS4xNDNjMC00LjE1MSAzLjM2NC03LjUxNSA3LjUxNS03LjUxNWg5MS4wNzFjOC43NDMgMCAxNS44NTYtNy4xMTQgMTUuODU2LTE1Ljg1N3MtNy4xMTMtMTUuODU2LTE1Ljg1Ni0xNS44NTZoLTkxLjA3MWMtNC4xNTEgMC03LjUxNS0zLjM2NC03LjUxNS03LjUxNXYtMTUuMzk5YzAtMTYuOTEzLTEzLjc1OS0zMC42NzItMzAuNjcyLTMwLjY3Mi0xNi45MTIgMC0zMC42NzEgMTMuNzU5LTMwLjY3MSAzMC42NzJ2ODEuMjIxYzAgNC4xNTEtMy4zNjQgNy41MTUtNy41MTUgNy41MTVzLTcuNTE1LTMuMzY0LTcuNTE1LTcuNTE1di04MS4yMjFjMC0yNS4yIDIwLjUwMS00NS43MDIgNDUuNzAxLTQ1LjcwMnM0NS43MDIgMjAuNTAyIDQ1LjcwMiA0NS43MDJ2Ny44ODRoODMuNTU3YzE3LjAzIDAgMzAuODg1IDEzLjg1NSAzMC44ODUgMzAuODg2cy0xMy44NTUgMzAuODg3LTMwLjg4NSAzMC44ODdoLTgzLjU1N3Y1Ni4xMTNoODkuOTYyYzE5LjA5Mi4wMDEgMzYuMzM0IDEyLjA0NCA0Mi45MDUgMjkuOTY5bDE1LjEyMSA0MC41NDFjMS40NSAzLjg4OS0uNTI2IDguMjE3LTQuNDE1IDkuNjY3LS44NjUuMzI0LTEuNzUyLjQ3Ni0yLjYyNS40NzZ6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNDQxLjU2MSA0NjEuODI4Yy00LjQyNiAwLTguODM2LS45NjQtMTIuOTctMi44OC03LjQ4NS0zLjQ3LTEzLjE3MS05LjY0Ni0xNi4wMTItMTcuMzkxbC0yNy44MzItNzQuMTAzYy00LjQzMS0xMi4wODUtMTYuMDAzLTIwLjE2Ny0yOC44MTUtMjAuMTY3aC0xMDMuMDE0Yy0yNS4yMDEgMC00NS43MDItMjAuNTAyLTQ1LjcwMi00NS43MDN2LTMwLjU1OWMwLTQuMTUxIDMuMzY0LTcuNTE1IDcuNTE1LTcuNTE1czcuNTE1IDMuMzY0IDcuNTE1IDcuNTE1djMwLjU1OWMwIDE2LjkxMyAxMy43NiAzMC42NzMgMzAuNjczIDMwLjY3M2gxMDMuMDE1YzE5LjA5MSAwIDM2LjMzNCAxMi4wNDMgNDIuOTA2IDI5Ljk2OGwyNy44MzIgNzQuMTAzYzMuMDI5IDguMjY0IDEyLjE2IDEyLjQ5MyAyMC4zNjYgOS40ODQgMy45NzctMS40NTggNy4xNDgtNC4zNzcgOC45MjktOC4yMTlzMS45NTgtOC4xNDkuNS0xMi4xMjVsLTEzLjQwNy0zNS45NDZjLTEuNDUtMy44ODguNTI2LTguMjE3IDQuNDE1LTkuNjY3IDMuODg5LTEuNDUxIDguMjE2LjUyNSA5LjY2NyA0LjQxNWwxMy40MjIgMzUuOTg1YzIuODU0IDcuNzg1IDIuNTA4IDE2LjE3My0uOTYxIDIzLjY1OHMtOS42NDUgMTMuMTcxLTE3LjM5IDE2LjAxMmMtMy40NyAxLjI3LTcuMDY2IDEuOTAzLTEwLjY1MiAxLjkwM3pcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PC9nPjwvZz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+V2ViIEFjY2Vzc2liaWxpdHk8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5TdGF5aW5nIG9uIHRvcCBvZiB0aGUgbGF0ZXN0IGd1aWRlbGluZXMgZm9yIHdlYiBhY2Nlc3NpYmlsaXR5IGNvbXBsaWFuY2UuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGlkPVwiTGF5ZXJfMVwiIGVuYWJsZS1iYWNrZ3JvdW5kPVwibmV3IDAgMCA1MTIgNTEyXCIgaGVpZ2h0PVwiNTEycHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB3aWR0aD1cIjUxMnB4XCI+PGc+PHBhdGggZD1cIm0yOTguNjc1IDE2NS4wMTRjLTMyLjEyNCAyNC42ODktMzguMTczIDcwLjkxMS0xMy40ODQgMTAzLjAzNSAxMS45NDMgMTUuNTM5IDI5LjI0OSAyNS41MDEgNDguNzI5IDI4LjA1MSAzLjI0OS40MjUgNi40OTIuNjM1IDkuNzE0LjYzNSAxNi4wOTUgMCAzMS42NDUtNS4yNTEgNDQuNTkyLTE1LjIwMiAxNS41MzktMTEuOTQzIDI1LjUwMS0yOS4yNDkgMjguMDUxLTQ4LjcyOSAyLjU0OS0xOS40OC0yLjYyNC0zOC43NjctMTQuNTY2LTU0LjMwNi0yNC42OS0zMi4xMjQtNzAuOTExLTM4LjE3Mi0xMDMuMDM2LTEzLjQ4NHptMTAyLjczNSA2NS44NDRjLTIuMDMgMTUuNTA5LTkuOTU3IDI5LjI4NC0yMi4zMjEgMzguNzg2LTI1LjU3IDE5LjY1MS02Mi4zNTkgMTQuODM3LTgyLjAxLTEwLjczMy0xOS42NTEtMjUuNTY5LTE0LjgzNy02Mi4zNTggMTAuNzMzLTgyLjAxIDEwLjYwMy04LjE0OSAyMy4xMzMtMTIuMDkgMzUuNTcyLTEyLjA5IDE3LjU1OSAwIDM0LjkzNiA3Ljg1NiA0Ni40MzggMjIuODIzIDkuNTAzIDEyLjM2NSAxMy42MTggMjcuNzE1IDExLjU4OCA0My4yMjR6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtMzI1LjU1MSAxOTkuOTgzYzYuMjA4LTQuNzcxIDEzLjkxMy02Ljg0IDIxLjcxLTUuODE4IDcuNzkxIDEuMDIgMTQuNzA5IDUgMTkuNDgxIDExLjIwOSA1Ljk2NiA3Ljc2MyAxNy43NDQtMS41MTggMTEuODg5LTkuMTM3LTE0LjkwOC0xOS4zOTgtNDIuODItMjMuMDUtNjIuMjE3LTguMTQzLTcuNjY4IDUuODkzIDEuNDY4IDE3Ljc4MSA5LjEzNyAxMS44ODl6XCIgZGF0YS1vcmlnaW5hbD1cIiMwMDAwMDBcIiBjbGFzc05hbWU9XCJhY3RpdmUtcGF0aFwiIGRhdGEtb2xkX2NvbG9yPVwiIzAwMDAwMFwiIGZpbGw9XCIjNDNCN0ZGXCIvPjxwYXRoIGQ9XCJtNTExLjc5NSAxNDUuNTUxdi0uMzkyYzAtMzYuOTI5LTMwLjA0NC02Ni45NzItNjYuOTczLTY2Ljk3MmgtMzExLjg3NWMtOS42NzEgMC05LjY3MSAxNC45OTQgMCAxNC45OTRoMzExLjg3NWMyOC42NjEgMCA1MS45NzkgMjMuMzE3IDUxLjk3OSA1MS45Nzh2LjM5MmMwIDI4LjY2MS0yMy4zMTcgNTEuOTc4LTUxLjk3OSA1MS45NzhoLTIuMDUxYy0zLjQyMy0xMy4yNDMtOS40NzktMjUuNzA5LTE3Ljk4LTM2Ljc2OS0zNC40Ny00NC44NTEtOTkuMDAzLTUzLjI5Ny0xNDMuODU0LTE4LjgyNi0xOC44MTkgMTQuNDY0LTMxLjIyNiAzNC4yMjEtMzYuNzQ1IDU1LjU5NmgtMTc3LjIxOWMtMjguNjYxIDAtNTEuOTc5LTIzLjMxNy01MS45NzktNTEuOTc4di0uMzkyYzAtMjguNjYxIDIzLjMxNy01MS45NzggNTEuOTc5LTUxLjk3OGgxOC45OTNjOS42NzEgMCA5LjY3MS0xNC45OTQgMC0xNC45OTRoLTE4Ljk5M2MtMzYuOTI5LS4wMDEtNjYuOTczIDMwLjA0Mi02Ni45NzMgNjYuOTcxdi4zOTJjMCAzNi45MjkgMzAuMDQ0IDY2Ljk3MiA2Ni45NzMgNjYuOTcyaDE3NC41MDRjLTIuNjcxIDI1LjI3NCAzLjk2MSA1MS41NzEgMjAuNjM0IDczLjI2NSAxNi42OTggMjEuNzI3IDQwLjg1OCAzNS42NSA2OC4wMjggMzkuMjA2IDQuNTIyLjU5MiA5LjAzNy44ODQgMTMuNTIzLjg4NCAxNC43NDggMCAyOS4xNjgtMy4xODUgNDIuNDY1LTkuMjk3bDEzLjE0OSAxNy4xMDljLTkuMjc1IDcuMjc5LTEwLjk5MiAyMC43MjktMy43OSAzMC4wOTkgNC4yNDIgNS41MTkgMTAuNjQ5IDguNDE2IDE3LjEyNCA4LjQxNiAyLjg4MyAwIDUuNzc5LS41NzYgOC41MDQtMS43NDlsNDAuMjk0IDUyLjU3NGMyMS45MDggMjguNTA2IDY2LjgwNC01LjMxNiA0NC41NzEtMzQuMjQzbC00MC4zMDgtNTIuNTkzYzIuMzg4LTMuMDIgMy45NDYtNi42MjMgNC40NTktMTAuNTM5Ljc0Ny01LjcxMi0uNzc0LTExLjM3My00LjI4NS0xNS45NC03LjIwMS05LjM3LTIwLjYzOS0xMS4xNzItMzAuMDYxLTQuMDgzbC0xMy4xNjQtMTcuMTI4YzUuODU1LTcuMDk3IDEwLjc1Ny0xNC45NTYgMTQuNTAzLTIzLjM1NCAzLjkzOS04LjgzMi05Ljc1NC0xNC45NC0xMy42OTQtNi4xMDgtNS44NzkgMTMuMTc5LTE1LjA3NyAyNC44MjYtMjYuNjAxIDMzLjY4My0xOC41NTEgMTQuMjU3LTQxLjU0NiAyMC40MzgtNjQuNzQ0IDE3LjQwMS0yMy4xOTktMy4wMzYtNDMuODI4LTE0LjkyNS01OC4wODUtMzMuNDc2LTI5LjQzMy0zOC4yOTYtMjIuMjIyLTkzLjM5NiAxNi4wNzQtMTIyLjgyOXM5My4zOTYtMjIuMjIxIDEyMi44MjkgMTYuMDc1YzExLjA0NCAxNC4zNyAxNy4yOTEgMzEuNSAxOC4wNjYgNDkuNTM4LjQxNiA5LjY2MSAxNS4zOTUgOS4wMTkgMTQuOTgtLjY0My0uMDkxLTIuMTA3LS4yNjMtNC4yLS40OC02LjI4NCAzNi42MzItLjM1MSA2Ni4zMjctMzAuMjQ1IDY2LjMyNy02Ni45NTZ6bS0xNS4xMDYgMjYyLjA1NWMtMS40NzIgMTEuMjQ5LTE2LjQ2MiAxNS4zMDUtMjMuMzg2IDYuMjk1bC0zOS44OTYtNTIuMDU1IDIwLjc4OC0xNS45NzcgMzkuODkgNTIuMDQ4YzIuMTMzIDIuNzc2IDMuMDU4IDYuMjE3IDIuNjA0IDkuNjg5LS40NTUgMy40NzIuNDU0LTMuNDcyIDAgMHptLTQyLjczMy04OC43NTRjMi4xODUgMi44NDMgMS42MzcgNy4wMzEtMS4yMDYgOS4yMTZsLTM2LjE1OSAyNy43OTFjLTIuODczIDIuMjA3LTcuMDA4IDEuNjY3LTkuMjE3LTEuMjA2cy0xLjY2Ny03LjAwOCAxLjIwNi05LjIxN2wzNi4xNTktMjcuNzljMi44NzMtMi4yMDggNy4wMDktMS42NjggOS4yMTcgMS4yMDZ6bS00Ny45OTEtMTQuMjM4YzIuMTI3LTEuNjM1IDQuMTc4LTMuMzYgNi4xNjYtNS4xNTJsMTEuMTY2IDE0LjUyOS0xMi43MyA5Ljc4NC0xMS4xNTktMTQuNTJjMi4yMzEtMS40NTcgNC40MjEtMyA2LjU1Ny00LjY0MXpcIiBkYXRhLW9yaWdpbmFsPVwiIzAwMDAwMFwiIGNsYXNzTmFtZT1cImFjdGl2ZS1wYXRoXCIgZGF0YS1vbGRfY29sb3I9XCIjMDAwMDAwXCIgZmlsbD1cIiM0M0I3RkZcIi8+PHBhdGggZD1cIm02Ni40NzMgMTQ2LjQ0N2MwIDQuMTQgMy4zNTcgNy40OTcgNy40OTcgNy40OTdoMTM4Ljk0NGM5LjY3MSAwIDkuNjcxLTE0Ljk5NCAwLTE0Ljk5NGgtMTM4Ljk0NGMtNC4xNCAwLTcuNDk3IDMuMzU3LTcuNDk3IDcuNDk3elwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz48L2c+IDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+U2VhcmNoIEVuZ2luZSBVcGRhdGVzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+WW91ciB3ZWJzaXRlIHdpbGwgc3RheSB1cCB0byBkYXRlIHdpdGggR29vZ2xlJ3Mgc2VhcmNoIGd1aWRlbGluZXMgZm9yIHJhbmtpbmcuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiAgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCIgY2xhc3NOYW1lPVwiXCI+PGc+PGc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUwNy41MjcsMjA4LjE3OWMtMC45MDgtNC43ODItNS4wODgtOC4yNDItOS45NTUtOC4yNDJIMjYxLjQwNGMtNS41OTYsMC0xMC4xMzIsNC41MzYtMTAuMTMyLDEwLjEzMnY5Ny4yNjYgICAgYzAsNS41OTYsNC41MzYsMTAuMTMyLDEwLjEzMiwxMC4xMzJoMTE1Ljk2N2MtMTEuNzUyLDIzLjE0OS0zMC4wNjUsNDIuNy01Mi42NzEsNTUuOTU4Yy0yMC43MjksMTIuMTY4LTQ0LjQ4NSwxOC41OTktNjguNywxOC41OTkgICAgYy01Ni40MTcsMC0xMDcuNjE1LTM1LjQ3OS0xMjcuNDA0LTg4LjI5NmMtNS43Mi0xNS4yMTMtOC42Mi0zMS4yNzEtOC42Mi00Ny43MjljMC0xNS4xMzQsMi40NzEtMzAuMDA5LDcuMzQtNDQuMjA2ICAgIGMxOC44NzEtNTQuOTE5LDcwLjU4Ni05MS44MTgsMTI4LjY4NS05MS44MThjMjUuNTI4LDAsNTAuMzk4LDcuMTEsNzEuOTE2LDIwLjU2MWMzLjY4NCwyLjMwMyw4LjQyNywyLjAwMSwxMS43ODgtMC43NTIgICAgbDc5LjY1LTY1LjIwOWMyLjM0MS0xLjkxNywzLjcwMy00Ljc4LDMuNzE0LTcuODA0YzAuMDExLTMuMDI2LTEuMzMyLTUuODk3LTMuNjYtNy44M0MzNzMuNjMyLDIwLjkzMywzMTUuNTk5LDAsMjU2LDAgICAgQzExNC44NDEsMCwwLDExNC44NDEsMCwyNTZjMCw0Mi4zNDUsMTAuNTUyLDg0LjI5OSwzMC41MTYsMTIxLjMyNkM3NS4zMDcsNDYwLjM5NiwxNjEuNzA4LDUxMiwyNTYsNTEyICAgIGM1OS4wMDQsMCwxMTYuNTg2LTIwLjU1NiwxNjIuMTM5LTU3Ljg3OWM0NC45MjItMzYuODA3LDc2LjI2OS04OC4xOSw4OC4yNjEtMTQ0LjY3N2MzLjcxNS0xNy40NDksNS42LTM1LjQzMSw1LjYtNTMuNDQ1ICAgIEM1MTIsMjM5LjkwNiw1MTAuNDk1LDIyMy44MTcsNTA3LjUyNywyMDguMTc5eiBNMjU2LDIwLjI2NGM1MC43NDYsMCwxMDAuMjU3LDE2LjQ3NywxNDAuNzUzLDQ2LjYyOGwtNjQuNCw1Mi43MjQgICAgYy0yMy4yNC0xMy4wNDMtNDkuNDgyLTE5LjkwNC03Ni4zNTMtMTkuOTA0Yy02MS45MzQsMC0xMTcuNTMsMzYuNTExLTE0Mi41NTUsOTIuMTg0bC02Mi44NDktNTEuNDU0ICAgIEM5MS4wNzksNjguNzY3LDE2Ny45NzcsMjAuMjY0LDI1NiwyMC4yNjR6IE0yMC4yNjQsMjU2YzAtMzQuNTg1LDcuNDg4LTY3LjQ1MywyMC45MjQtOTcuMDcxbDY0LjgxOSw1My4wNjcgICAgYy00LjE3MywxNC4yNTEtNi4yOTUsMjkuMDE4LTYuMjk1LDQ0LjAwNGMwLDE2LjQzLDIuNTI1LDMyLjUyMyw3LjUwMiw0Ny45NGwtNjQuNDEyLDUyLjcyNyAgICBDMjguMDQxLDMyNS4zOSwyMC4yNjQsMjkwLjg0OCwyMC4yNjQsMjU2eiBNMjU2LDQ5MS43MzZjLTg0LjA1LDAtMTYxLjI5MS00NC41MzItMjAzLjU2NS0xMTYuNzY4bDYyLjY3NS01MS4zMDUgICAgYzExLjUwNCwyMy45ODYsMjguODg3LDQ0LjU5Nyw1MC44ODksNjAuMTIyYzI2LjQyNywxOC42NDcsNTcuNTQ5LDI4LjUwNCw5MCwyOC41MDRjMjUuNDI0LDAsNTAuNDExLTYuMTk3LDcyLjcxOS0xNy45NCAgICBsNjQuODU0LDUzLjA5M0MzNTMuNjg5LDQ3Ni4wOTcsMzA1LjM4OCw0OTEuNzM2LDI1Niw0OTEuNzM2eiBNNDg2LjU4MSwzMDUuMjNjLTEwLjYzLDUwLjA2Ny0zNy43ODcsOTUuNzc1LTc2LjcxNCwxMjkuMzYyICAgIGwtNjIuOTE3LTUxLjUwOGMyNS4xMTgtMTguMDE2LDQ0LjU1Mi00My4yMDgsNTUuNDE0LTcyLjE5NWMxLjE2Ni0zLjExMSwwLjczMi02LjU5Ny0xLjE2LTkuMzI3ICAgIGMtMS44OTMtMi43My01LjAwNS00LjM1OS04LjMyNy00LjM1OUgyNzEuNTM2di03Ny4wMDNoMjE3LjQ5M2MxLjc5OCwxMS43OCwyLjcwNywyMy43ODYsMi43MDcsMzUuNzk5ICAgIEM0OTEuNzM2LDI3Mi41OTksNDkwLjAwMiwyODkuMTYxLDQ4Ni41ODEsMzA1LjIzelwiIGRhdGEtb3JpZ2luYWw9XCIjMDAwMDAwXCIgY2xhc3NOYW1lPVwiYWN0aXZlLXBhdGhcIiBkYXRhLW9sZF9jb2xvcj1cIiMwMDAwMDBcIiBmaWxsPVwiIzQzQjdGRlwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9nPjwvZz4gPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Hb29nbGUgQnVzaW5lc3MgUHJvZmlsZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlIGFsc28gaGVscCBvcHRpbWl6ZSBhbmQgbWFuYWdlIHlvdXIgR29vZ2xlLCBCaW5nLCAmIFlhaG9vIEJ1c2luZXNzIFByb2ZpbGU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cInNlY3Rpb24gXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZCArIEJsb2dnaW5nPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5TVEFSVElORyBBVDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MzAwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDEwMDArIFdvcmQgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFdyaXR0ZW4gQnkgYW4gU0VPIFNwZWNpYWxpc3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAxIFBvc3QgUGVyIE1vbnRoPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gJDE1MCBQZXIgRXh0cmEgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9jb250YWN0J30+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlLWJveFwiPlxuICAgICAgICAgICAgICAgIDxoMj5TdGFuZGFyZDwvaDI+XG4gICAgICAgICAgICAgICAgPHNwYW4+NSBQQUdFUzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MTUwPC9oMz5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IFVubGltaXRlZCBFZGl0czwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEluY2x1ZGVzIEhvc3Rpbmc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyNC83IEN1c3RvbWVyIFNlcnZpY2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBMaWZldGltZSBVcGRhdGVzPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2NvbnRhY3QnfT5cblxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXNvbGlkIHNlcnZpY2VzLWJ1dHRvblwiICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPkxvZ29zICYgR3JhcGhpYyBEZXNpZ248L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPklOQ0xVREVEITwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyIHJldmlzaW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEFsbCBGaWxlIEZvcm1hdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBSZWFkeSB0byB1c2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBGUkVFIHcvIFN1YnNjcmlwdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9jb250YWN0J30+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBDT05UQUNUIFVTXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuPC9tYWluPlxuKVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7IiwgImltcG9ydCB7IExvYWRlckZ1bmN0aW9uLCBNZXRhRnVuY3Rpb24sIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbnRhY3QnXG5cblxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2J1bmRsZXMvMWRkMTFhMDc4NjZjNTQ2N2E5NzQ0ZjYzNWRiMjRjYmU2ZTZiNmRkMi5jc3NcIixcbiAgICAgIH0sXG4gICAgXTtcbiAgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lcGFnZSgpIHtcbiAgcmV0dXJuIDxDb250YWN0IC8+XG59XG4iLCAiXG5cblxuXG5cbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbi8vIEB0cy1ub2NoZWNrXG4vKipcbiAqIEdldCBhIGxpbmsgd2l0aCB0aGUgY3VycmVudCBsb2NhbGUgcGFyYW1ldGVyXG4gKiBAcmV0dXJucyBBIGxvY2FsaXplZCA8TGluaz5cbiAqL1xuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgXG5cbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cblxuICAgXG4gICAgICAgIFxuICAgICAgICA8c2VjdGlvbiBpZD1cInBhZ2UtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDE+Q29udGFjdCBVczwvaDE+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgXG4gICAgICAgIDxzZWN0aW9uIGlkPVwidmFsbGV5LWZvcm1cIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cblxuICAgICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci1ncm91cFwiPlxuICAgICAgICAgICAgPHA+RW1haWw6PC9wPlxuICAgICAgICAgICAgPHA+YWxraWRpZ2l0YWwud2ViZGVzaWduQGdtYWlsLmNvbTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWdyb3VwXCI+XG4gICAgICAgICAgICA8cD5QaG9uZTo8L3A+XG4gICAgICAgICAgICA8cD4oNTA5KSA0ODEtNzUxMjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJodHRwczovL3N1Ym1pdC1mb3JtLmNvbS9OdXRnOTEwRVwiICBpZD0nY29udGFjdCcgbmFtZT0nQ09OVEFDVCBGT1JNJz48aW5wdXQgdHlwZT0naGlkZGVuJyBuYW1lPSdmb3JtLW5hbWUnIHZhbHVlPSdmb3JtJy8+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0LXRvcHBlclwiPjxzcGFuPkRST1A8L3NwYW4+IFVTIEEgTElORTwvaDM+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB0eXBlPVwidGV4dFwiIHRhYkluZGV4PXsxfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkJ1c2luZXNzXCIgdHlwZT1cInRleHRcIiB0YWJJbmRleD17Mn0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsIEFkZHJlc3NcIiB0eXBlPVwiZW1haWxcIiB0YWJJbmRleD17M30gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwicGhvbmUgbnVtYmVyXCIgbmFtZT1cInBob25lXCIgcGxhY2Vob2xkZXI9XCJQaG9uZSBOdW1iZXJcIiB0eXBlPVwidGVsXCIgdGFiSW5kZXg9ezR9cmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBhcmlhLWxhYmVsPVwid3JpdGUgeW91ciBtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBNZXNzYWdlIEhlcmUuLi4uXCIgdGFiSW5kZXg9ezV9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLXN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBuYW1lPVwic3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwiY29udGFjdC1zdWJtaXRcIiBjbGFzc05hbWU9XCJwcmltYXJ5IGJ1dHRvbi1zb2xpZFwiIGRhdGEtc3VibWl0PVwiLi4uU2VuZGluZ1wiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cblxuICAgIDwvbWFpbj5cblxuICBcbilcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7IiwgImltcG9ydCB0eXBlIHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IEFib3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQWJvdXQnXG5pbXBvcnQgQWJvdXRTdHlsZXMgZnJvbSAnLi4vLi4vYXNzZXRzL3N0eWxlcy9hYm91dC5jc3MnXG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5rcygpIHtcbiAgICByZXR1cm4gW1xuICAgICAge1xuICAgICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgICAgICBocmVmOiBcImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvYnVuZGxlcy9iZjYyZTdhNzg3MWQ5NDBjM2M2ZGYxODdlYWU5MjU4NjM2Mjk5ZWQ0LmNzc1wiLFxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVwYWdlKCkge1xuICByZXR1cm4gPEFib3V0IC8+XG59XG4iLCAiXG5cblxuaW1wb3J0IHR5cGUgeyBSZW1peExpbmtQcm9wcyB9IGZyb20gXCJAcmVtaXgtcnVuL3JlYWN0L2NvbXBvbmVudHNcIjtcbmltcG9ydCB7IExpbmssIHVzZVBhcmFtcyB9IGZyb20gXCJyZW1peFwiO1xuLy8gQHRzLW5vY2hlY2tcbi8qKlxuICogR2V0IGEgbGluayB3aXRoIHRoZSBjdXJyZW50IGxvY2FsZSBwYXJhbWV0ZXJcbiAqIEByZXR1cm5zIEEgbG9jYWxpemVkIDxMaW5rPlxuICovXG5jb25zdCBBYm91dCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cbiAgICBcbiAgICBcblxuICBcblxuICAgIDxzZWN0aW9uIGlkPVwicGFnZS1oZWFkZXJcIj5cbiAgICAgICAgPGgxPkFib3V0IFVzPC9oMT5cbiAgICA8L3NlY3Rpb24+XG5cblxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPkFsa2kgRGlnaXRhbCBXZWIgU2VydmljZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGgyPkdpdmluZyBTbWFsbCBCdXNpbmVzc2VzIFRoZSBCaWcgQnVzaW5lc3MgVHJlYXRtZW50PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5NeSBuYW1lIGlzIEFsZXgsIEknbSB0aGUgb3duZXIgYW5kIHNvbGUgZGV2ZWxvcGVyIG9mIEFsa2kgRGlnaXRhbC4gQWZ0ZXIgd29ya2luZyBpbiB0aGUgdGVjaCBpbmR1c3RyeSBmb3IgYSBsaXR0bGUgb3ZlciA0IHllYXJzIEkgbGF1bmNoZWRcbiAgICAgICAgICAgICAgICAgICAgdGhpcyBidXNpbmVzcyBhcyBhIHdheSBmb3IgbWUgdG8gc2VydmUgc21hbGwgYnVzaW5lc3NlcyB3aGlsZSBidWlsZGluZyBteSBvd24uIE15IGdvYWwgaXMgdG8gYnVpbGQgYSBjb21wYW55IHRoYXQgY2FuIGZvc3RlciBjb21tdW5pdHksIGFuZCBcbiAgICAgICAgICAgICAgICAgICAgcHJvdmlkZSBhIHNhZmUgc3BhY2UgZm9yIGluZHVzdHJ5IHByb2Zlc3Npb25hbHMgdG8gaGFybmVzcyB0aGVpciBza2lsbHMgdG8gYnVpbGQgY2FyZWVycyBvZiB0aGVpciBvd24uIFxuICAgICAgICAgICAgICAgIDxici8+PGJyLz5cbiAgICAgICAgICAgICAgICBBIGxvdCBvZiBzbWFsbCBidXNpbmVzc2VzIGRvbid0IGhhdmUgdGhlIGZ1bmRzIHRvIHNwZW5kIHRob3VzYW5kcyBvZiBkb2xsYXJzIHVwZnJvbnQgb24gYSBuZXcgd2Vic2l0ZS5cbiAgICAgICAgICAgICAgICBUaGUgb25lcyB0aGF0IGRvLCBnZXQgdGFrZW4gYWR2YW50YWdlIG9mIGFuZCBoYXZlIGEgdGVycmlibGUgd2Vic2l0ZSB0aGF0IGxvb2tzIGxpa2UgaXQgd2FzIGJ1aWx0IGJ5IHNvbWVvbmUgaW4gYSBkdW5nZW9uIFxuICAgICAgICAgICAgICAgIGFuZCBoYXZlbid0IHNlZW4gZGVzaWduIHRyZW5kcyBmb3IgdGhlIGxhc3QgMTAgeWVhcnMuIEEgbG90IG9mIGJ1c2luZXNzZXMgYXJlIGluIGEgdG91Z2ggc3BvdCAtIHRoZXkgZWl0aGVyIGNhbid0IGFmZm9yZCBhIGdvb2Qgd2Vic2l0ZSwgYW5kIFxuICAgICAgICAgICAgICAgIGlmIHRoZXkgY2FuIHRoZXkgZG9uJ3Qga25vdyB3aG8gdG8gdHJ1c3QgdG8gbWFrZSBzb21ldGhpbmcgZ3JlYXQuIFRoYXQncyB3aGVyZSB0aGUgJDAgZG93biBhbmQgJDEwMCBhIG1vbnRoIG1vZGVsIGNvbWVzIGluLiAgXG4gICAgICAgICAgICAgICAgSXQncyBtb3JlIG1hbmFnYWJsZSBmb3IgYSBzbWFsbCBidXNpbmVzcyB0byBoYW5kbGUgYW5kIHdvbid0IGh1cnQgdGhlaXIgYmFuayBhY2NvdW50cy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cbiAgICA8c2VjdGlvbiBpZD1cImNpcmNsZXNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wcGVyXCI+XG4gICAgICAgICAgICAgICAgPGgyPjxzcGFuPlF1YWxpdHkgPC9zcGFuPiBPdmVyIFF1YW50aXR5PC9oMj5cbiAgICAgICAgICAgICAgICA8cD5XZSBmb2N1cyBvbiB0aGUgbmVlZHMgb24gZWFjaCBpbmRpdmlkdWFsIGJ1c2luZXNzIGFuZCB0YWlsb3IgY29udGVudCBhcm91bmQgd2hhdCBtYWtlcyBpdCB1bmlxdWUuIE91ciBjb2xsYWJvcmF0aXZlIHByb2Nlc3MgaXMgdmVyeSBoYW5kcyBvbiBcbiAgICAgICAgICAgICAgICAgICAgYXMgd2Ugd29yayBjbG9zZWx5IHdpdGggeW91IHRvIGNyZWF0ZSBhIHdlYnNpdGUgeW91J3JlIDEwMCUgaGFwcHkgd2l0aCBhbmQgbm90IHNvbWV0aGluZyB5b3UganVzdCBzZXR0bGUgZm9yLiBcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlc1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjxzcGFuPjE8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5ObyBQcmUtV3JpdHRlbiBDb250ZW50PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2Ugd3JpdGUgdW5pcXVlIGFuZCBlbmdhZ2luZyBjb250ZW50IGFyb3VuZCB5b3VyIGNvbXBhbnkuICBFdmVyeW9uZSBpcyB1bmlxdWUhPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjxzcGFuPjI8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5VbmJlYXRhYmxlIEN1c3RvbWVyIFNlcnZpY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cD5ObyBhdXRvbWF0ZWQgc3lzdGVtcyAtIFdoZW4geW91IG5lZWQgaGVscCB0aGUgbGVhZCBkZXZlbG9wZXIgYW5zd2VycyB5b3VyIGNhbGwuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2lyY2xlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNpcmNsZVwiPjxzcGFuPjM8L3NwYW4+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5ObyBMaW1pdHMgT24gRGVzaWduPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2UgY2FuIGVkaXQgdGhlIGRlc2lnbiB0byBjYXRlciB0byB5b3VyIHRhc3Rlcy4gIEV2ZXJ5dGhpbmcgaXMgY3VzdG9taXphYmxlITwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPExpbmsgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0gdG89eycvc2VydmljZXMnfT5cblxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBhYm91dC1idXR0b25cIiAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgT1VSIFNFUlZJQ0VTXG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L0xpbms+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwiYWJvdXQtY29udGFjdFwiIGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dC1jb250YWluZXIgY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pdGVtXCI+XG5cbiAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiY29udGFjdC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UGhvbmU6PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPig1MDkpIDQ4MS03NTEyPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiY29udGFjdC1saW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RW1haWw6PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPmFsa2lkaWdpdGFsLndlYmRlc2lnbkBnbWFpbC5jb208L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0td3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cImh0dHBzOi8vc3VibWl0LWZvcm0uY29tL051dGc5MTBFXCIgaWQ9J2NvbnRhY3QnIG1ldGhvZD0ncG9zdCcgbmFtZT0nQUJPVVQgRk9STSc+PGlucHV0IHR5cGU9J2hpZGRlbicgbmFtZT0nZm9ybS1uYW1lJyB2YWx1ZT0nQ29udGFjdCBGb3JtJyAvPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdC10b3BwZXJcIj48c3Bhbj5EUk9QPC9zcGFuPiBVUyBBIExJTkU8L2gzPlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBhcmlhLWxhYmVsPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJZb3VyIE5hbWVcIiB0eXBlPVwidGV4dFwiIHRhYkluZGV4PXsxfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGFyaWEtbGFiZWw9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiWW91ciBFbWFpbCBBZGRyZXNzXCIgdHlwZT1cImVtYWlsXCIgdGFiSW5kZXg9ezJ9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgYXJpYS1sYWJlbD1cInBob25lIG51bWJlclwiIG5hbWU9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwiWW91ciBQaG9uZSBOdW1iZXJcIiB0eXBlPVwidGVsXCIgdGFiSW5kZXg9ezN9cmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBhcmlhLWxhYmVsPVwid3JpdGUgeW91ciBtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBNZXNzYWdlIEhlcmUuLi4uXCIgdGFiSW5kZXg9ezR9IHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxzY3JpcHQgc3JjPSdodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanMnPjwvc2NyaXB0PlxuPGRpdiBjbGFzc05hbWU9J2ctcmVjYXB0Y2hhJyBkYXRhLXNpdGVrZXk9JzZMZEF2VUlVQUFBQUFIanJqbWp0TlRjWHlLbTBXS3dlZkxwLWRRdjknPjwvZGl2PlxuPG5vc2NyaXB0PlxuPGRpdj5cbjxkaXYgc3R5bGU9e3t3aWR0aDogMzAyLCBoZWlnaHQ6IDQyMiwgcG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxuPGRpdiBzdHlsZT17e3dpZHRoOiAzMDIsIGhlaWdodDogNDIyLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwifX0+XG5cbnsvKiA8aWZyYW1lIHNyYz1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS9mYWxsYmFjaz9rPTZMZEF2VUlVQUFBQUFIanJqbWp0TlRjWHlLbTBXS3dlZkxwLWRRdjlcIiBmcmFtZUJvcmRlcj17MH0gc2Nyb2xsaW5nPVwibm9cIlxuc3R5bGU9e3t3aWR0aDogMzAyLCBoZWlnaHQ6IDQyMiwgYm9yZGVyU3R5bGU6IFwibm9uZVwifX0+XG5cbjwvaWZyYW1lPiAqL31cbjwvZGl2PlxuPC9kaXY+XG48ZGl2IHN0eWxlPXt7d2lkdGg6IDMwMCwgaGVpZ2h0OiA2MCwgYm9yZGVyU3R5bGU6ICdub25lJywgYm90dG9tOiAxMiwgbGVmdDogMjUsIG1hcmdpbjogMCwgcGFkZGluZzogMCwgcmlnaHQ6IDI1LCBiYWNrZ3JvdW5kOiAnI2Y5ZjlmOScsIGJvcmRlcjogJzFweCBzb2xpZCAjYzFjMWMxJywgYm9yZGVyUmFkaXVzOiAzfX0+XG48dGV4dGFyZWEgaWQ9XCJnLXJlY2FwdGNoYS1yZXNwb25zZVwiIG5hbWU9XCJnLXJlY2FwdGNoYS1yZXNwb25zZVwiIGNsYXNzTmFtZT1cImctcmVjYXB0Y2hhLXJlc3BvbnNlXCJcbiAgc3R5bGU9e3t3aWR0aDogMjUwLCBoZWlnaHQ6IDQwLCBib3JkZXI6ICcxcHggc29saWQgI2MxYzFjMScsIG1hcmdpbjogJzEwcHggMjVweCcsIHBhZGRpbmc6IDAsIHJlc2l6ZTogJ25vbmUnfX0gPlxuPC90ZXh0YXJlYT5cbjwvZGl2PlxuPC9kaXY+XG48L25vc2NyaXB0PlxuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvcm0tc3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG5hbWU9XCJzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgaWQ9XCJjb250YWN0LXN1Ym1pdFwiIGNsYXNzTmFtZT1cInByaW1hcnkgYnV0dG9uLXNvbGlkXCIgZGF0YS1zdWJtaXQ9XCIuLi5TZW5kaW5nXCI+U3VibWl0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG48L21haW4+XG4pXG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBBYm91dDsiLCAiaW1wb3J0IHsgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiwgcmVkaXJlY3QgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBNYWluIGZyb20gXCIuLi9jb21wb25lbnRzL01haW5cIlxuXG5leHBvcnQgZnVuY3Rpb24gbGlua3MoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgcmVsOiBcInN0eWxlc2hlZXRcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0L2J1bmRsZXMvNTMxYWEwOGExNjE5YTI2ZGY2NjNmNzg2MDljMjhkYTkwNTMxNTY0NS5jc3NcIiwgICBcblxuICAgICAgfSxcbiAgICBdO1xuICB9XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZXBhZ2UoKSB7XG4gIHJldHVybiA8TWFpbiAvPlxufVxuIiwgIlxuXG5cbmltcG9ydCB0eXBlIHsgUmVtaXhMaW5rUHJvcHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9yZWFjdC9jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBMaW5rLCB1c2VQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcblxuLyoqXG4gKiBHZXQgYSBsaW5rIHdpdGggdGhlIGN1cnJlbnQgbG9jYWxlIHBhcmFtZXRlclxuICogQHJldHVybnMgQSBsb2NhbGl6ZWQgPExpbms+XG4gKi9cbmNvbnN0IE1haW4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICBcbiAgICA8bWFpbiBpZD1cIm1haW5cIj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJsYW5kaW5nXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aDE+U21hbGwgQnVzaW5lc3MgV2ViIERlc2lnbiArIERldmVsb3BtZW50PC9oMT5cbiAgICAgICAgICAgIDxoMj5ObyBwYWdlIGJ1aWxkZXJzIG9yIFdvcmRQcmVzcyAtIFdlIG9mZmVyIDEwMCUgaGFuZC1jb2RlZCB3ZWJzaXRlcyB3aXRoIHN1cGVyaW9yIHJlc3VsdHMgc3RhcnRpbmcgYXQgJDE1MC9tby48L2gyPlxuICAgICAgICAgICAgPExpbmsgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjogJ25vbmUnfX0gdG89eycvY29udGFjdCd9PiAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9XCJidXR0b24tc29saWQgcXVvdGUtYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICBHRVQgSU4gVE9VQ0ghXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1vY2stdXAgZGVza3RvcC1kaXNwbGF5XCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC84MWZmM2I5YWQzMWM0NGFlMWU1ZDNhZjJmMGQ2MzY0ZDYwZWRlZTg1LzJmMTVmL2ltYWdlcy9tb2NrLXVwLXJlcGxhY2UucG5nXCIgYWx0PVwibW9ja3VwIG9mIGEgd2Vic2l0ZSBvbiBjb21wdXRlciBkZXNrdG9wIGFuZCBwaG9uZVwiLz5cbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibW9jay11cCBtb2JpbGUtZGlzcGxheVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvOWU1NDgyMTgzYzA4ZDk4ZmM0M2E1NmZhMWM5YTdmMWEwZjYxYTIwNy9hM2I3Yy9pbWFnZXMvbW9jay11cC1tb2JpbGUtcmVwYWNlLnBuZ1wiIGFsdD1cImEgbW9ja3VwIG9mIGEgd2Vic2l0ZSBvbiBjb21wdXRlciBkZXNrdG9wIGFuZCBwaG9uZVwiLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3dvb3AgbGlnaHQtc3dvb3BcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzI1ZTk0ZWFiYjFjZGVjMjYxM2JkMjY1ZDY0NWRjMTUzMjRiYWNmZTgvODZmNDUvaW1hZ2VzL2xhbmRpbmctc3dvb3NoLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgIDxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwic3dvb3AgZGFyay1zd29vcCBcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzJjNDk5MjY5YTRhMzNmYmJmY2EyODAxMGRiOGZkYmI2NjhhMjNjMWMvYmViYTYvaW1hZ2VzL2xhbmRpbmctc3dvb3NoLWRhcmsuc3ZnXCIgYWx0PVwiXCIgLz5cbiAgICA8L3NlY3Rpb24+XG5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJ3aGF0LXdlLWRvXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtdG9wcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoYXQtd2UtZG8tdG9wcGVyIGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+V0hBVCA8L3NwYW4+IFdFIERPXG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cImdyYXBoaWMtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXNoXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8yOTA0OGQ5ZWZlODkyNTIzOTkxMjJjZDI0ODdmMjUzZGNiZTliY2M0L2NmOGE1L2ltYWdlcy9jb2RlLnN2Z1wiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFzaFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxwPldlIHNwZWNpYWxpemUgaW4gc21hbGwgYnVzaW5lc3Mgd2ViIGRlc2lnbiBhbmQgZGV2ZWxvcG1lbnQgZm9yIGNsaWVudHMgYW55d2hlcmUgaW4gdGhlIFVTLiBFdmVyeSBsaW5lIG9mIGNvZGUgaXMgd3JpdHRlbiBieSBoYW5kIHRvIGVuc3VyZSB0aGUgYmVzdCBwZXJmb3JtYW5jZSwgd2hpY2ggaGVscHMgYnJpbmcgaW4gbW9yZSBjdXN0b21lcnMgdG8geW91ciBzaXRlIGFuZCBicmluZyBtb3JlIHJldmVudWUgdG8geW91ciBidXNpbmVzcy5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2hhdC13ZS1kby1jb250ZW50IGNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIGhlaWdodD1cIjUxMnB0XCIgdmlld0JveD1cIi0xMSAwIDUxMiA1MTIuMDAxXCIgd2lkdGg9XCI1MTJwdFwiPjxwYXRoIGQ9XCJtMjYxLjQzNzUgNTExLjQ0MTQwNiAxMzguODUxNTYyLTU0Ljk0MTQwNmM1NC43NjU2MjYtNDQuOTI5Njg4IDg5LjcxMDkzOC0xMTMuMTMyODEyIDg5LjcxMDkzOC0xODkuNSAwLTEzNS4zMDg1OTQtMTA5LjY5MTQwNi0yNDUtMjQ1LTI0NXMtMjQ1IDEwOS42OTE0MDYtMjQ1IDI0NWMwIDEzNS4zMTI1IDEwOS42OTE0MDYgMjQ1IDI0NSAyNDUgNS41MjczNDQgMCAxMS4wMDM5MDYtLjE5OTIxOSAxNi40Mzc1LS41NTg1OTR6bTAgMFwiIGZpbGw9XCIjMjdhM2ZmXCIvPjxwYXRoIGQ9XCJtMzg4Ljc0MjE4OCAzMTguOTQ5MjE5YzEuOTUzMTI0LTIzLjY0NDUzMS0xLjY0ODQzOC00Ny4zMzU5MzgtMTIuMTE3MTg4LTY4LjYyODkwNy0yNy4wNDI5NjktNTUuMDExNzE4LTIwLjgzOTg0NC01OS4wMDM5MDYtMjEuNjc5Njg4LTExMy42MDE1NjIgMC0xMS4xNTYyNS05LjA0Mjk2OC0yMC4xOTUzMTItMjAuMTk1MzEyLTIwLjE5NTMxMi0xMS4xNTYyNSAwLTIwLjE5NTMxMiA5LjAzOTA2Mi0yMC4xOTUzMTIgMjAuMTk1MzEyIDAgNy4yMDMxMjUgMCAyMDMuODMyMDMxIDAgMjAzLjA2MjUgMCAzLjE0ODQzOC0uMzM1OTM4IDYuMjIyNjU2LS45NTcwMzIgOS4xODc1djI5LjA3MDMxMmMwIDI0LjQ5NjA5NC0xOS45Mjk2ODcgNDQuNDI5Njg4LTQ0LjQyNTc4MSA0NC40Mjk2ODgtMTYuMjY5NTMxIDAtNzIuMzc1IDAtMTEwLjU1MDc4MSAwIDE2Ljk4MDQ2OCAyMy42MTcxODggNDAuMjE0ODQ0IDQyLjExMzI4MSA2Ny4xNzk2ODcgNTMuMzEyNS4xNjc5NjkuMDY2NDA2LjMzNTkzOC4xMzY3MTkuNTAzOTA3LjIwNzAzMSAxNi4yMjI2NTYgNi44NTU0NjkgMjguNjA5Mzc0IDE5Ljc4MTI1IDM1LjEzMjgxMiAzNS40NTMxMjUgNTIuNTM1MTU2LTMuNDgwNDY4IDEwMC41NDY4NzUtMjMuNTA3ODEyIDEzOC44NTE1NjItNTQuOTM3NWwtMTUuMDUwNzgxLTU1LjI5Mjk2OGMtMi4xNDg0MzctNy45MDIzNDQtMi45MDYyNS0xNi4xMTcxODgtMi4yMzgyODEtMjQuMjc3MzQ0em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTgzLjYwOTM3NSAxMTcuMjMwNDY5LTYuMTUyMzQ0LTUuNjk5MjE5Yy05LjQ4MDQ2OS04Ljc4OTA2Mi0yNC40Mjk2ODctOC4yMTg3NS0zMy4yMTQ4NDMgMS4yNjU2MjUtOC43ODUxNTcgOS40ODA0NjktOC4yMTQ4NDQgMjQuNDI5Njg3IDEuMjY1NjI0IDMzLjIxNDg0NGwzOC4xMDE1NjMgMzUuMzA0Njg3em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTI4NS42MjEwOTQgMGgtMTcyLjcxNDg0NGMtMTYuNzU3ODEyIDAtMzAuMzkwNjI1IDEzLjYzNjcxOS0zMC4zOTA2MjUgMzAuMzk0NTMxdjM2My45ODA0NjljMCAxNi43NTc4MTIgMTMuNjMyODEzIDMwLjM5NDUzMSAzMC4zOTA2MjUgMzAuMzk0NTMxaDE3Mi43MTQ4NDRjMTYuNzU3ODEyIDAgMzAuMzk0NTMxLTEzLjYzNjcxOSAzMC4zOTQ1MzEtMzAuMzk0NTMxdi0zNjMuOTgwNDY5YzAtMTYuNzU3ODEyLTEzLjYzNjcxOS0zMC4zOTQ1MzEtMzAuMzk0NTMxLTMwLjM5NDUzMXptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNDEuMDM1MTU2IDIyLjUzOTA2MmMtMS42NDQ1MzEtMi40NDUzMTItMi42MDU0NjgtNS4zODY3MTgtMi42MDU0NjgtOC41NTQ2ODcgMC02LjIxODc1IDMuNzAzMTI0LTExLjU2MjUgOS4wMTU2MjQtMTMuOTg0Mzc1aC0zNC41MzkwNjJjLTE2Ljc4NTE1NiAwLTMwLjM5NDUzMSAxMy42MDkzNzUtMzAuMzk0NTMxIDMwLjM5NDUzMXYzNjMuOTgwNDY5YzAgMTYuNzg1MTU2IDEzLjYwOTM3NSAzMC4zOTA2MjUgMzAuMzk0NTMxIDMwLjM5MDYyNWgzNi43MTg3NXYtMzc1LjU4OTg0NGMwLTkuNTU4NTkzLTMuMjUzOTA2LTE4LjcwMzEyNS04LjU4OTg0NC0yNi42MzY3MTl6bTAgMFwiIGZpbGw9XCIjMmIzODk0XCIvPjxwYXRoIGQ9XCJtMTAwLjEwOTM3NSAxOTEuOTc2NTYydjIwMi4zOTg0MzhjMCA3LjA3MDMxMiA1LjczMDQ2OSAxMi44MDA3ODEgMTIuNzk2ODc1IDEyLjgwMDc4MWgxNzIuNzE0ODQ0YzcuMDY2NDA2IDAgMTIuNzk2ODc1LTUuNzMwNDY5IDEyLjc5Njg3NS0xMi44MDA3ODEgMC02Ljk0NTMxMiAwLTEwOC4zMzU5MzggMC0yMDIuMzk4NDM4em0wIDBcIiBmaWxsPVwiI2U2ZjdmZVwiLz48cGF0aCBkPVwibTEwMC4xMDkzNzUgMTkxLjk3NjU2MnYyMDIuMzk4NDM4YzAgNy4wNzAzMTIgNS43MzA0NjkgMTIuODAwNzgxIDEyLjc5Njg3NSAxMi44MDA3ODFoMzAuMjczNDM4di0yMTUuMTk5MjE5em0wIDBcIiBmaWxsPVwiI2Q1ZjFmZVwiLz48cGF0aCBkPVwibTE2OS42NzU3ODEgMjUzLjAzMTI1YzAgMTEuMDc0MjE5LTguOTc2NTYyIDIwLjA1MDc4MS0yMC4wNTA3ODEgMjAuMDUwNzgxcy0yMC4wNTA3ODEtOC45NzY1NjItMjAuMDUwNzgxLTIwLjA1MDc4MSA4Ljk3NjU2Mi0yMC4wNTQ2ODggMjAuMDUwNzgxLTIwLjA1NDY4OCAyMC4wNTA3ODEgOC45ODA0NjkgMjAuMDUwNzgxIDIwLjA1NDY4OHptMCAwXCIgZmlsbD1cIiMzZDRlYzZcIi8+PHBhdGggZD1cIm0xNjkuNjc1NzgxIDMyNy4zODI4MTJjMCAxMS4wNzQyMTktOC45NzY1NjIgMjAuMDU0Njg4LTIwLjA1MDc4MSAyMC4wNTQ2ODhzLTIwLjA1MDc4MS04Ljk4MDQ2OS0yMC4wNTA3ODEtMjAuMDU0Njg4YzAtMTEuMDc0MjE4IDguOTc2NTYyLTIwLjA1MDc4MSAyMC4wNTA3ODEtMjAuMDUwNzgxczIwLjA1MDc4MSA4Ljk3NjU2MyAyMC4wNTA3ODEgMjAuMDUwNzgxem0wIDBcIiBmaWxsPVwiIzNkNGVjNlwiLz48cGF0aCBkPVwibTE0Ny4zNTkzNzUgMjMzLjExMzI4MWMtMTAuMDA3ODEzIDEuMTI4OTA3LTE3Ljc4NTE1NiA5LjYwOTM3NS0xNy43ODUxNTYgMTkuOTE3OTY5IDAgMTEuMDc0MjE5IDguOTc2NTYyIDIwLjA1MDc4MSAyMC4wNTA3ODEgMjAuMDUwNzgxIDYuOTA2MjUgMCAxMi45OTIxODgtMy40OTIxODcgMTYuNTk3NjU2LTguODA0Njg3LTE3LjI4OTA2MiAxLjk0OTIxOC0yOC4yOTY4NzUtMTcuMjY5NTMyLTE4Ljg2MzI4MS0zMS4xNjQwNjN6bTAgMFwiIGZpbGw9XCIjMmIzODk0XCIvPjxwYXRoIGQ9XCJtMTQ3LjM1OTM3NSAzMDcuNDY4NzVjLTEwLjAwNzgxMyAxLjEyNS0xNy43ODUxNTYgOS42MDkzNzUtMTcuNzg1MTU2IDE5LjkxNDA2MiAwIDExLjA3ODEyNiA4Ljk3NjU2MiAyMC4wNTQ2ODggMjAuMDUwNzgxIDIwLjA1NDY4OCA2LjkwNjI1IDAgMTIuOTkyMTg4LTMuNDkyMTg4IDE2LjU5NzY1Ni04LjgwNDY4OC0xNy4xODM1OTQgMS45MzM1OTQtMjguMzU5Mzc1LTE3LjE3OTY4Ny0xOC44NjMyODEtMzEuMTY0MDYyem0wIDBcIiBmaWxsPVwiIzJiMzg5NFwiLz48ZyBmaWxsPVwiIzExZGZlZlwiPjxwYXRoIGQ9XCJtMjMxLjU2NjQwNiAyNDQuNjk1MzEyaC0yOC40Njg3NWMtNC4xNDA2MjUgMC03LjUtMy4zNTkzNzQtNy41LTcuNSAwLTQuMTQ0NTMxIDMuMzU5Mzc1LTcuNSA3LjUtNy41aDI4LjQ2ODc1YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjUgMCA0LjE0MDYyNi0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIvPjxwYXRoIGQ9XCJtMjYwLjAzNTE1NiAyNzYuMzY3MTg4aC01Ni45Mzc1Yy00LjE0NDUzMSAwLTcuNS0zLjM1OTM3Ni03LjUtNy41IDAtNC4xNDQ1MzIgMy4zNTU0NjktNy41IDcuNS03LjVoNTYuOTM3NWM0LjE0MDYyNSAwIDcuNSAzLjM1NTQ2OCA3LjUgNy41IDAgNC4xNDA2MjQtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTIzMS41NjY0MDYgMzE5LjA0Njg3NWgtMjguNDY4NzVjLTQuMTQwNjI1IDAtNy41LTMuMzU1NDY5LTcuNS03LjVzMy4zNTkzNzUtNy41IDcuNS03LjVoMjguNDY4NzVjNC4xNDA2MjUgMCA3LjUgMy4zNTU0NjkgNy41IDcuNXMtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48cGF0aCBkPVwibTI2MC4wMzUxNTYgMzUwLjcxODc1aC01Ni45Mzc1Yy00LjE0NDUzMSAwLTcuNS0zLjM1NTQ2OS03LjUtNy41IDAtNC4xNDA2MjUgMy4zNTU0NjktNy41IDcuNS03LjVoNTYuOTM3NWM0LjE0MDYyNSAwIDcuNSAzLjM1OTM3NSA3LjUgNy41IDAgNC4xNDQ1MzEtMy4zNTkzNzUgNy41LTcuNSA3LjV6bTAgMFwiLz48L2c+PHBhdGggZD1cIm0yODUuNTE5NTMxIDE3LjU5NzY1NmgtMjUuNjY3OTY5Yy0yLjQyMTg3NCAwLTQuMzgyODEyIDEuOTYwOTM4LTQuMzgyODEyIDQuMzc4OTA2IDAgNS44MDg1OTQtNC43NSAxMC41NTg1OTQtMTAuNTU0Njg4IDEwLjU1ODU5NGgtOTEuNDk2MDkzYy01LjgwODU5NCAwLTEwLjU1ODU5NC00Ljc1LTEwLjU1ODU5NC0xMC41NTg1OTQgMC0yLjQxNzk2OC0xLjk2MDkzNy00LjM3ODkwNi00LjM4MjgxMy00LjM3ODkwNmgtMjUuNjY3OTY4Yy03LjA3MDMxMyAwLTEyLjgwMDc4MiA1LjczMDQ2OS0xMi44MDA3ODIgMTIuNzk2ODc1djE2My41ODIwMzFoMTk4LjMxMjV2LTE2My41ODIwMzFjMC03LjA2NjQwNi01LjczMDQ2OC0xMi43OTY4NzUtMTIuODAwNzgxLTEyLjc5Njg3NXptMCAwXCIgZmlsbD1cIiNmOTQ4YjRcIi8+PHBhdGggZD1cIm0xNDMuMTc5Njg4IDI0LjUwNzgxMmMtLjIwMzEyNi0uODEyNS0uMzIwMzEzLTEuNjU2MjUtLjMyMDMxMy0yLjUyNzM0MyAwLTIuNDIxODc1LTEuOTYwOTM3LTQuMzgyODEzLTQuMzgyODEzLTQuMzgyODEzaC0yNS42Njc5NjhjLTcuMDcwMzEzIDAtMTIuODAwNzgyIDUuNzMwNDY5LTEyLjgwMDc4MiAxMi43OTY4NzV2MTYzLjU4MjAzMWg0My4xNzE4NzZ6bTAgMFwiIGZpbGw9XCIjZTAwZThiXCIvPjxwYXRoIGQ9XCJtMjg1LjUxOTUzMSAxNy41OTc2NTZoLTI1LjY2Nzk2OWMtMi40MjE4NzQgMC00LjM4MjgxMiAxLjk2MDkzOC00LjM4MjgxMiA0LjM3ODkwNiAwIDUuODA4NTk0LTQuNzUgMTAuNTU4NTk0LTEwLjU1NDY4OCAxMC41NTg1OTRoLTUwLjQ2NDg0M2wxMDMuODcxMDkzIDEzMC4yMDMxMjV2LTEzMi4zNDM3NWMwLTcuMDY2NDA2LTUuNzMwNDY4LTEyLjc5Njg3NS0xMi44MDA3ODEtMTIuNzk2ODc1em0wIDBcIiBmaWxsPVwiI2ZjN2FjZFwiLz48cGF0aCBkPVwibTE2Ni45MTc5NjkgNzcuMjA3MDMxaC0zNC41ODU5MzhjLTQuMTQwNjI1IDAtNy41LTMuMzU1NDY5LTcuNS03LjVzMy4zNTkzNzUtNy41IDcuNS03LjVoMzQuNTg1OTM4YzQuMTQwNjI1IDAgNy41IDMuMzU1NDY5IDcuNSA3LjUgMCA0LjE0MDYyNS0zLjM1OTM3NSA3LjUtNy41IDcuNXptMCAwXCIgZmlsbD1cIiNmYzdhY2RcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDI0MS4xOTE0MDZjLTcuNzMwNDY4IDguMzM5ODQ0LTIwLjc2MTcxOCA4LjgzOTg0NC0yOS4xMDU0NjggMS4xMDkzNzVsLTM0LjQ5NjA5NC0zMS45NjQ4NDNjLTguMzQzNzUtNy43MzA0NjktOC44Mzk4NDQtMjAuNzYxNzE5LTEuMTA5Mzc1LTI5LjEwNTQ2OXMyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjggOC44Mzk4NDQgMjAuNzYxNzE4IDEuMTA5Mzc1IDI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDIxMi4wODU5MzgtMTYuNDEwMTU2LTE1LjIwMzEyNmMyLjE2MDE1NiA3LjgyNDIxOS4zNjcxODcgMTYuNTQyOTY5LTUuNTUwNzgxIDIyLjkyOTY4OC01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44Mzk4NDQtMjIuNDQxNDA2IDcuMjg1MTU2bDE2LjQwNjI1IDE1LjIwMzEyNWM4LjM0Mzc1IDcuNzMwNDY5IDIxLjM3MTA5MyA3LjIzMDQ2OSAyOS4xMDU0NjgtMS4xMDkzNzUgNy43MzA0NjktOC4zNDM3NSA3LjIzMDQ2OS0yMS4zNzUtMS4xMDkzNzUtMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48cGF0aCBkPVwibTExNy44MTY0MDYgMjk3LjM2MzI4MWMtNy43MzA0NjggOC4zNDM3NS0yMC43NjE3MTggOC44Mzk4NDQtMjkuMTA1NDY4IDEuMTA5Mzc1bC0zNC40OTYwOTQtMzEuOTY0ODQ0Yy04LjM0Mzc1LTcuNzMwNDY4LTguODM5ODQ0LTIwLjc2MTcxOC0xLjEwOTM3NS0yOS4xMDE1NjIgNy43MzA0NjktOC4zNDM3NSAyMC43NjE3MTktOC44Mzk4NDQgMjkuMTA1NDY5LTEuMTA5Mzc1bDM0LjQ5NjA5MyAzMS45NjQ4NDRjOC4zMzk4NDQgNy43MzA0NjkgOC44Mzk4NDQgMjAuNzU3ODEyIDEuMTA5Mzc1IDI5LjEwMTU2MnptMCAwXCIgZmlsbD1cIiNmOWNmYTlcIi8+PHBhdGggZD1cIm0xMTcuODE2NDA2IDM1My41MzkwNjJjLTcuNzMwNDY4IDguMzQzNzUtMjAuNzYxNzE4IDguODM5ODQ0LTI5LjEwNTQ2OCAxLjEwOTM3NmwtMzQuNDk2MDk0LTMxLjk2NDg0NGMtOC4zNDM3NS03LjczMDQ2OS04LjgzOTg0NC0yMC43NjE3MTktMS4xMDkzNzUtMjkuMTA1NDY5czIwLjc2MTcxOS04LjgzOTg0NCAyOS4xMDU0NjktMS4xMDkzNzVsMzQuNDk2MDkzIDMxLjk2NDg0NGM4LjMzOTg0NCA3LjczMDQ2OCA4LjgzOTg0NCAyMC43NjE3MTggMS4xMDkzNzUgMjkuMTA1NDY4em0wIDBcIiBmaWxsPVwiI2Y5Y2ZhOVwiLz48cGF0aCBkPVwibTM4NS4yMzgyODEgNDAxLjIwNzAzMWMtMS4wNjY0MDYtMy45Mjk2ODctMS43ODkwNjItNy45MzM1OTMtMi4xNjc5NjktMTEuOTcyNjU2LTM4LjE2NDA2MiA2Mi42NTYyNS0xMTIuMjU3ODEyIDkxLjc1MzkwNi0xODEuODU1NDY4IDczLjY2MDE1NiA3Ljc2MTcxOCA0Ljk4ODI4MSAxNS45ODQzNzUgOS4zMDg1OTQgMjQuNTg1OTM3IDEyLjg4MjgxMy4xNjc5NjkuMDcwMzEyLjMzNTkzOC4xNDA2MjUuNTAzOTA3LjIxMDkzNyAxNi4yMjI2NTYgNi44NTE1NjMgMjguNjA5Mzc0IDE5Ljc3NzM0NCAzNS4xMzI4MTIgMzUuNDUzMTI1IDUyLjUzNTE1Ni0zLjQ4MDQ2OCAxMDAuNTQ2ODc1LTIzLjUxMTcxOCAxMzguODUxNTYyLTU0Ljk0MTQwNnptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PHBhdGggZD1cIm0xMTYuNzA3MDMxIDI2OC4yNjE3MTktMTYuNDEwMTU2LTE1LjIwMzEyNWMyLjE2MDE1NiA3LjgyMDMxMi4zNjcxODcgMTYuNTM5MDYyLTUuNTUwNzgxIDIyLjkyOTY4Ny01LjkyMTg3NSA2LjM5MDYyNS0xNC40ODA0NjkgOC44Mzk4NDQtMjIuNDQxNDA2IDcuMjg1MTU3bDE2LjQwNjI1IDE1LjE5OTIxOGM4LjM0Mzc1IDcuNzMwNDY5IDIxLjM3NSA3LjIzNDM3NSAyOS4xMDU0NjgtMS4xMDkzNzUgNy43MzA0NjktOC4zNDM3NSA3LjIzMDQ2OS0yMS4zNzEwOTMtMS4xMDkzNzUtMjkuMTAxNTYyem0wIDBcIiBmaWxsPVwiI2ZiYmM4ZFwiLz48cGF0aCBkPVwibTExNi43MDcwMzEgMzI0LjQzMzU5NC0xNi40MTAxNTYtMTUuMjAzMTI1YzIuMTYwMTU2IDcuODI0MjE5LjM2NzE4NyAxNi41NDI5NjktNS41NTA3ODEgMjIuOTI5Njg3LTUuOTIxODc1IDYuMzkwNjI1LTE0LjQ4MDQ2OSA4Ljg0Mzc1LTIyLjQ0MTQwNiA3LjI4NTE1NmwxNi40MDYyNSAxNS4yMDMxMjZjOC4zNDM3NSA3LjczMDQ2OCAyMS4zNzUgNy4yMzQzNzQgMjkuMTA1NDY4LTEuMTA5Mzc2IDcuNzMwNDY5LTguMzQzNzUgNy4yMzA0NjktMjEuMzc1LTEuMTA5Mzc1LTI5LjEwNTQ2OHptMCAwXCIgZmlsbD1cIiNmYmJjOGRcIi8+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5Nb2JpbGUtRmlyc3QgRGVzaWduPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2Ugc3RhcnQgYnVpbGRpbmcgeW91ciBzaXRlIGZvciBtb2JpbGUgZGV2aWNlcyBmaXJzdCwgdGhlbiB3ZSBhZGQgb24gdG8gaXQgdG8gbWFrZSB0YWJsZXQgYW5kIGRlc2t0b3AuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBpZD1cIkxheWVyXzFcIiAgaGVpZ2h0PVwiNTEyXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgd2lkdGg9XCI1MTJcIj48Zz48cGF0aCBkPVwibTI1NiAyMS45OTVjLTEzNS4zMTEgMC0yNDUuMDAyIDEwOS42OTEtMjQ1LjAwMiAyNDUuMDAyIDAgNTIuMzY3IDE2LjQzOSAxMDAuODg5IDQ0LjQyNSAxNDAuNzA4bDI4Ni44MjIgODguNjY2YzkyLjc1NS0zNC44OTMgMTU4Ljc1Ny0xMjQuNDE5IDE1OC43NTctMjI5LjM3MyAwLTEzNS4zMTEtMTA5LjY5MS0yNDUuMDAzLTI0NS4wMDItMjQ1LjAwM3pcIiBmaWxsPVwiI2ZmZGQ0MFwiLz48cGF0aCBkPVwibTIzMS40MzIgMTEzLjc2NGMwLTkuMzA2IDEuMTQ2LTE4LjM0OCAzLjI5LTI3LjAwMWgtMTM2Ljc4M2MtMy4wMzQgMC01Ljk5NS4zMTYtOC44NTUuOTExLTEyLjg0NyAxMS45NjMtMjQuNDA0IDI1LjI4OC0zNC40NDYgMzkuNzQ4LS4wNTcuOTA2LS4wOTYgMS44MTgtLjA5NiAyLjczOHYyNzYuMjc1YzEwLjQ1MSAxNS4wNzEgMjIuNTUxIDI4LjkxMiAzNi4wMzUgNDEuMjY1bDIxNi41NzkgNTguOTM2YzEyLjU2Mi0yLjY3MiAyNC43NjktNi4zMDIgMzYuNTQtMTAuODE2di0yNjkuNzk0Yy02MS45MDMgMC0xMTIuMjY0LTUwLjM2LTExMi4yNjQtMTEyLjI2MnpcIiBmaWxsPVwiIzE2N2NjMVwiLz48cGF0aCBkPVwibTE2Mi4xNjUgNDgwLjM5OS0yLjExMy0zMzYuMTFjLS4wMDMtLjQ5Mi0uMTg1LS45NjQtLjQ5LTEuMzUtNS4zNDctNi43NTItMi4wMTEtMTEuNDA0LjA4Mi0xMy4zNjYuNjg1LS42NDIuODQ2LTEuNjczLjQxNy0yLjUwOC0yLjQ2My00Ljc5Ni44MTUtNy44MjkgMi4xOTUtOC44MzQuMzc5LS4yNzYuNjQ4LS42NzYuNzc5LTEuMTI2bDMuNzczLTEzLjA2MWMuMjAzLS43MDMuMDQxLTEuNDcxLS40NDktMi4wMTQtNi40NTktNy4xNi0xLjk5My0xMi4yNzcuNDk0LTE0LjMwNC4zMTgtLjI1OS41MzktLjU5Ni42NjQtLjk2M2gtNjkuNTc4Yy0yMy45MjkgMC00My4zOTcgMTkuNDY4LTQzLjM5NyA0My4zOTd2Mjc2LjI3M2MxMC4wNTQgMTQuNDk5IDIxLjYzMyAyNy44NTggMzQuNTAzIDM5Ljg1elwiIGZpbGw9XCIjMDI0Nzg4XCIvPjxwYXRoIGQ9XCJtODEuNTQyIDE5NS44ODd2MjQzLjEwOGM0NC40MyA0NS4wNjIgMTA2LjE3NyA3My4wMDUgMTc0LjQ1OCA3My4wMDUgMjAuOTUxIDAgNDEuMjg1LTIuNjM2IDYwLjY5NS03LjU4M3YtMjgxLjY4MWMtMTguNzg3LTQuNjU2LTM1LjcyLTE0LjA1NS00OS40NTQtMjYuODQ5elwiIGZpbGw9XCIjZTllZmZmXCIvPjxwYXRoIGQ9XCJtODEuNTQyIDQzOC45OTZjMjIuMjcxIDIyLjU4NyA0OC44ODggNDAuODc1IDc4LjUwNiA1My40OTR2LTI5Ni42MDNoLTc4LjUwNnpcIiBmaWxsPVwiI2QzZGNmYlwiLz48Zz48cGF0aCBkPVwibTE2Ny4xNDkgMTE3Ljg2MmgtNC4zMzNjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoNC4zMzNjNC4xNDIgMCA3LjUgMy4zNTcgNy41IDcuNXMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiMxZTkyZDNcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMjM0LjM4NCAxMTcuODYyaC00MS42MzhjLTQuMTQyIDAtNy41LTMuMzU3LTcuNS03LjVzMy4zNTgtNy41IDcuNS03LjVoNDEuNjM4YzQuMTQyIDAgNy41IDMuMzU3IDcuNSA3LjVzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjMWU5MmQzXCIvPjwvZz48cGF0aCBkPVwibTIzMy42NTMgMTM2LjAyOWgtODMuMDM1Yy02LjYgMC0xMi01LjQtMTItMTIgMC01LjY3LTQuNTk2LTEwLjI2Ni0xMC4yNjYtMTAuMjY2aC0zMC40MTNjLTkuMDU2IDAtMTYuMzk3IDcuMzQxLTE2LjM5NyAxNi4zOTd2NjguMzg1aDE4OC42NDRjLTE4LjM3OS0xNS45NTYtMzEuNTM1LTM3Ljc3NS0zNi41MzMtNjIuNTE2elwiIGZpbGw9XCIjOWJkOGY5XCIvPjxwYXRoIGQ9XCJtMTUwLjYxOCAxMzYuMDI5Yy02LjYgMC0xMi01LjQtMTItMTIgMC01LjY3LTQuNTk2LTEwLjI2Ni0xMC4yNjUtMTAuMjY2aC0zMC40MTRjLTkuMDU2IDAtMTYuMzk3IDcuMzQxLTE2LjM5NyAxNi4zOTd2NjguMzg1aDc4LjUwNXYtNjIuNTE3aC05LjQyOXpcIiBmaWxsPVwiIzczYzNmOVwiLz48ZyBmaWxsPVwiIzFlOTJkM1wiPjxwYXRoIGQ9XCJtMzE2LjY5NSAyMTAuMjM2Yy00LjE0MiAwLTcuNSAzLjM1Ny03LjUgNy41djI4OC40NTVjNS4wNi0xLjEyIDEwLjA2My0yLjM5MiAxNS0zLjgxOXYtMjg0LjYzNmMwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41elwiLz48cGF0aCBkPVwibTg5LjA0MiA0NDYuMjgydi0zMTYuMTIyYzAtNC45MDYgMy45OTEtOC44OTcgOC44OTctOC44OTdoMzAuNDE0YzEuNTI1IDAgMi43NjYgMS4yNCAyLjc2NiAyLjc2NSAwIDEwLjc1MiA4Ljc0OCAxOS41IDE5LjUgMTkuNWg4OC4wMzVjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNSAwLTQuMTQyLTMuMzU4LTcuNS03LjUtNy41aC04OC4wMzVjLTIuNDM5IDAtNC41LTIuMDYtNC41LTQuNSAwLTkuNzk2LTcuOTctMTcuNzY1LTE3Ljc2Ni0xNy43NjVoLTMwLjQxNGMtMTMuMTc3IDAtMjMuODk3IDEwLjcyMS0yMy44OTcgMjMuODk3djMwMC44OTJjNC43NzYgNS4yOTMgOS43ODQgMTAuMzcxIDE1IDE1LjIzelwiLz48L2c+PHBhdGggZD1cIm0xNTkuNjQ0IDEyOS41NzNjLjMwNi0uMjg2LjQ4OS0uNjU1LjU4LTEuMDQ0aC05LjYwNmMtMi40MzkgMC00LjUtMi4wNi00LjUtNC41IDAtOS43OTYtNy45Ny0xNy43NjUtMTcuNzY2LTE3Ljc2NWgtMzAuNDEzYy0xMy4xNzcgMC0yMy44OTcgMTAuNzIxLTIzLjg5NyAyMy44OTd2MzAwLjg5MmM0Ljc3NiA1LjI5MyA5Ljc4NCAxMC4zNzEgMTUgMTUuMjN2LTMxNi4xMjNjMC00LjkwNiAzLjk5MS04Ljg5NyA4Ljg5Ny04Ljg5N2gzMC40MTRjMS41MjUgMCAyLjc2NiAxLjI0IDIuNzY2IDIuNzY1IDAgMTAuNzUyIDguNzQ4IDE5LjUgMTkuNSAxOS41aDkuMjgxYy0uMDgzLS4yMS0uMTk1LS40MS0uMzM3LS41OS01LjM0Ny02Ljc1MS0yLjAxMS0xMS40MDQuMDgxLTEzLjM2NXpcIiBmaWxsPVwiIzE2N2NjMVwiLz48cGF0aCBkPVwibTI0MS45MzQgMTU3LjEwNmgtODEuNTg1djI2LjI4Nmg5NC4yOTJjLjU2OCAwIDEuMTI0LS4wNDggMS42NzQtLjExOC01Ljg5Mi03Ljk4NC0xMC43NS0xNi43NzItMTQuMzgxLTI2LjE2OHpcIiBmaWxsPVwiI2U5ZWZmZlwiLz48cGF0aCBkPVwibTE2MS4zNDkgMTU3LjEwNmgtMTQuNzUyYy03LjI1OSAwLTEzLjE0MyA1Ljg4NC0xMy4xNDMgMTMuMTQzczUuODg0IDEzLjE0MyAxMy4xNDMgMTMuMTQzaDE0Ljc1MnpcIiBmaWxsPVwiIzNjNThhMFwiLz48Zz48cGF0aCBkPVwibTExNi41MzUgMTQxLjgzMmgtMTAuMzM0Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41czMuMzU4LTcuNSA3LjUtNy41aDEwLjMzNGM0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41cy0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2U5ZWZmZlwiLz48L2c+PHBhdGggZD1cIm0yNzkuODIxIDM0NC41aC0xNjEuNDA1Yy01LjQ0NSAwLTkuODk5LTQuNDU1LTkuODk5LTkuODk5di04Ny4zMmMwLTUuNDQ1IDQuNDU1LTkuODk5IDkuODk5LTkuODk5aDE2MS40MDVjNS40NDUgMCA5Ljg5OSA0LjQ1NSA5Ljg5OSA5Ljg5OXY4Ny4zMmMwIDUuNDQ1LTQuNDU0IDkuODk5LTkuODk5IDkuODk5elwiIGZpbGw9XCIjZmY0MTU1XCIvPjxwYXRoIGQ9XCJtMTA4LjUxNyAyNDcuMjgxdjg3LjMyYzAgNS40NDUgNC40NTUgOS44OTkgOS44OTkgOS44OTloMTAzLjcwNmMtLjMxNi0uNTI1LS43NzgtLjk3LTEuMzc0LTEuMjU1LTguMDY4LTMuODQ4LTcuODU0LTEwLjA0Ni02Ljg0OC0xMy42OTIuNDQzLTEuNjA3LS4zNzQtMy4zMTUtMS45NC0zLjg4Ni0xNC4zMi01LjIxNi0xMS43NjEtMTguMDM0LTEwLjYzMy0yMS44Ni4yMTgtLjczOS4xNzItMS41MjctLjE0LTIuMjMybC0xMC45OS0yNC44MjNjLS40NzktMS4wODEtMS41MS0xLjgzOS0yLjY5LTEuOTA4LTkuNjg3LS41NjctMTEuNDM0LTguNDY0LTExLjY3Mi0xMi42ODQtLjA4NC0xLjQ4NC0xLjE5MS0yLjcxNC0yLjY1Ni0yLjk2NC0xNi4wNDktMi43NDMtMTQuNzE5LTE1LjM0LTEzLjYzLTIwLjAzOS4xMzktLjYwMS4wOTQtMS4yMTQtLjEwMy0xLjc3NWgtNDEuMDI5Yy01LjQ0NiAwLTkuOSA0LjQ1NC05LjkgOS44OTl6XCIgZmlsbD1cIiNlODAwNTRcIi8+PGc+PHBhdGggZD1cIm0xMzguMjMgMzgyLjAwM2gtNWMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDVjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU3IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZmY0MTU1XCIvPjwvZz48Zz48cGF0aCBkPVwibTExMy41MTcgMzgyLjAwM2gtNWMtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDVjNC4xNDIgMCA3LjUgMy4zNTggNy41IDcuNSAwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZmY0MTU1XCIvPjwvZz48Zz48cGF0aCBkPVwibTI4OS43MjEgMzgyLjAwM2gtOTQuMDc0Yy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41IDAtNC4xNDIgMy4zNTgtNy41IDcuNS03LjVoOTQuMDc0YzQuMTQyIDAgNy41IDMuMzU4IDcuNSA3LjUgMCA0LjE0My0zLjM1OCA3LjUtNy41IDcuNXpcIiBmaWxsPVwiI2JlYzhmN1wiLz48L2c+PGc+PHBhdGggZD1cIm0xOTUuNjQ3IDM4Mi4wMDNoLTM3LjA4M2MtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNSAwLTQuMTQyIDMuMzU4LTcuNSA3LjUtNy41aDM3LjA4M2M0LjE0MiAwIDcuNSAzLjM1OCA3LjUgNy41IDAgNC4xNDMtMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNmZjQxNTVcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMTk1LjY0OCAzODkuODgyYy00LjE0MiAwLTcuNS0zLjM1Ny03LjUtNy41di0xNS41YzAtNC4xNDMgMy4zNTgtNy41IDcuNS03LjVzNy41IDMuMzU3IDcuNSA3LjV2MTUuNWMwIDQuMTQzLTMuMzU4IDcuNS03LjUgNy41elwiIGZpbGw9XCIjZTgwMDU0XCIvPjwvZz48ZWxsaXBzZSBjeD1cIjE5OS4xMThcIiBjeT1cIjI5MC45NDFcIiBmaWxsPVwiI2U5ZWZmZlwiIHJ4PVwiMzkuMDcxXCIgcnk9XCIzOS4wNzFcIiB0cmFuc2Zvcm09XCJtYXRyaXgoLjE2IC0uOTg3IC45ODcgLjE2IC0xMTkuOTYxIDQ0MC44ODUpXCIvPjxwYXRoIGQ9XCJtMjExLjk1OSAzMjUuNjY4Yy0xNC4zMi01LjIxNi0xMS43NjEtMTguMDM0LTEwLjYzMy0yMS44Ni4yMTgtLjczOS4xNzItMS41MjctLjE0LTIuMjMybC0xMC45OS0yNC44MjNjLS40NzktMS4wODEtMS41MS0xLjgzOS0yLjY5LTEuOTA4LTkuNjg3LS41NjctMTEuNDM0LTguNDY0LTExLjY3Mi0xMi42ODQtLjA0Mi0uNzQ3LS4zNDUtMS40My0uODIxLTEuOTU1LTkuMTA4IDcuMTUzLTE0Ljk2NSAxOC4yNTctMTQuOTY1IDMwLjczNiAwIDIxLjU3OCAxNy40OTMgMzkuMDcxIDM5LjA3MSAzOS4wNzEgNS4xNDUgMCAxMC4wNTMtMS4wMDQgMTQuNTUxLTIuODExLS4zNDctLjY5LS45MzYtMS4yNTItMS43MTEtMS41MzR6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PHBhdGggZD1cIm0yMTMuODA0IDI4Ni45MTUtMTkuMDgxLTEyLjE5OWMtMy4xOC0yLjAzMy03LjM1Mi4yNTEtNy4zNTIgNC4wMjZ2MjQuMzk4YzAgMy43NzUgNC4xNzIgNi4wNTkgNy4zNTIgNC4wMjZsMTkuMDgxLTEyLjE5OWMyLjkzOS0xLjg3OSAyLjkzOS02LjE3MyAwLTguMDUyelwiIGZpbGw9XCIjZmY0MTU1XCIvPjxnPjxwYXRoIGQ9XCJtMTgwLjc0NyA0MTQuNzYzaC03Mi4yM2MtNC4xNDIgMC03LjUtMy4zNTctNy41LTcuNXMzLjM1OC03LjUgNy41LTcuNWg3Mi4yM2M0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41IDAgNC4xNDItMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PC9nPjxnPjxwYXRoIGQ9XCJtMjg5LjcyMSA0NDQuMTQ1aC0xODEuMjA0Yy00LjE0MiAwLTcuNS0zLjM1OC03LjUtNy41IDAtNC4xNDMgMy4zNTgtNy41IDcuNS03LjVoMTgxLjIwNGM0LjE0MiAwIDcuNSAzLjM1NyA3LjUgNy41IDAgNC4xNDItMy4zNTggNy41LTcuNSA3LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PC9nPjxwYXRoIGQ9XCJtMjg5LjcyMSA0NTYuOTIyaC0xODEuMjA0Yy0xLjkgMC0zLjYzLjcxMi00Ljk1MiAxLjg3NyA1LjgzMyA0LjY0MiAxMS44ODQgOS4wMiAxOC4xMzMgMTMuMTIzaDE2OC4wMjNjNC4xNDIgMCA3LjUtMy4zNTcgNy41LTcuNXMtMy4zNTgtNy41LTcuNS03LjV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PHBhdGggZD1cIm0yODkuNzIxIDQ4NC43aC0xNDYuMmMxMS4zOTUgNS44OTkgMjMuMzEzIDEwLjkyNSAzNS42NjUgMTVoMTEwLjUzNGM0LjE0MiAwIDcuNS0zLjM1NyA3LjUtNy41LjAwMS00LjE0Mi0zLjM1Ny03LjUtNy40OTktNy41elwiIGZpbGw9XCIjYmVjOGY3XCIvPjxjaXJjbGUgY3g9XCIzNDMuNjk1XCIgY3k9XCIxMTMuNzYzXCIgZmlsbD1cIiMyYTQyOGNcIiByPVwiMTEzLjc2M1wiLz48cGF0aCBkPVwibTM4Ny4xODIgMTU1LjM1Yy4wOTctMS45NTMtLjYxMy0zLjg1Ni0xLjk5Ni01LjIzOWwtNi42NjItNi42NjJjLTEuMi0xLjItMi44MDgtMS44OTEtNC41MDItMS45OTctMjEuNjEtMS4zNTctMjIuNzcyLTE5Ljc2NS0yMi43MDgtMjQuNTMxLjAxMS0uODE1LS4xMzctMS42MjItLjQxNy0yLjM4N2wtNS44NzgtMTYuMDc2Yy0uODM3LTIuMjg3LTIuODI5LTMuOTI2LTUuMjE5LTQuMzk0LTUxLjAxNy05Ljk5NS0zOS43MDYtNjguODc1LTM1Ljk3Mi04My43OTEuMjU4LTEuMDMxLjI1Ny0yLjA4OS4wMzctMy4wOTgtNDMuMTg0IDE2LjE0NC03My45MzQgNTcuNzczLTczLjkzNCAxMDYuNTg5IDAgNjIuODMgNTAuOTMzIDExMy43NjMgMTEzLjc2MyAxMTMuNzYzIDcuMzI1IDAgMTQuNDg0LS43MDEgMjEuNDI0LTIuMDIzbDMwLjM5Ni02MC45NWMtNy40MTgtMS41MjgtOC40ODItNi4xNzYtOC4zMzItOS4yMDR6XCIgZmlsbD1cIiMxYzJlN2FcIi8+PGc+PHBhdGggZD1cIm0yOTkuNzEyIDE1Mi42MDMtMzMuMzA0LTMzLjMwNGMtMy4wNTctMy4wNTctMy4wNTctOC4wMTUgMC0xMS4wNzJsMzMuMzA0LTMzLjMwNGMzLjA1Ny0zLjA1NyA4LjAxNC0zLjA1OCAxMS4wNzIgMCAzLjA1NyAzLjA1NyAzLjA1OCA4LjAxNSAwIDExLjA3MmwtMjcuNzY4IDI3Ljc2OSAyNy43NjggMjcuNzY4YzMuMDU3IDMuMDU3IDMuMDU3IDguMDE1IDAgMTEuMDcyLTMuMDU4IDMuMDU3LTguMDE0IDMuMDU2LTExLjA3Mi0uMDAxelwiIGZpbGw9XCIjNGI2YmIyXCIvPjwvZz48Zz48cGF0aCBkPVwibTM3Ni42MDcgMTUyLjYwM2MtMy4wNTctMy4wNTctMy4wNTctOC4wMTQgMC0xMS4wNzJsMjcuNzY4LTI3Ljc2OC0yNy43NjktMjcuNzY4Yy0zLjA1Ny0zLjA1Ny0zLjA1Ny04LjAxNSAwLTExLjA3MiAzLjA1OC0zLjA1OCA4LjAxNS0zLjA1OCAxMS4wNzIgMGwzMy4zMDUgMzMuMzA0YzMuMDU1IDMuMDU2IDMuMDU3IDguMDE1IDAgMTEuMDcybC0zMy4zMDQgMzMuMzA0Yy0zLjA1NyAzLjA1Ny04LjAxNCAzLjA1OC0xMS4wNzIgMHpcIiBmaWxsPVwiIzRiNmJiMlwiLz48L2c+PGc+PHBhdGggZD1cIm0zMjUuNTg5IDE1NC4yMTNjLTMuOTQ3LTEuNzY2LTUuNzE0LTYuMzk4LTMuOTQ4LTEwLjM0NGwyOS44MTYtNjYuNjA4YzEuNzY3LTMuOTQ2IDYuMzk5LTUuNzEzIDEwLjM0NC0zLjk0NyAzLjk0NyAxLjc2NyA1LjcxNCA2LjM5OCAzLjk0NyAxMC4zNDRsLTI5LjgxNiA2Ni42MDhjLTEuNzYgMy45MzQtNi4zODUgNS43MTgtMTAuMzQzIDMuOTQ3elwiIGZpbGw9XCIjNGI2YmIyXCIvPjwvZz48cGF0aCBkPVwibTQ0MS43ODkgMTkyLjQ3MWgtOS4wOTFjLTIuNDAyIDAtNC4zNTYtMS45NTQtNC4zNTYtNC4zNTZ2LTkuMDkxYzAtMTAuODEtNy42MzEtMTQuNDE5LTEyLjUtMTUuNjIyaC02Ny4yMzZjLTIuNzM4IDAtNC45NTggMi4yMi00Ljk1OCA0Ljk1OHYxNTIuNzc1YzAgMi43MzggMi4yMiA0Ljk1OCA0Ljk1OCA0Ljk1OGgxMDMuODQ4YzIuNzM4IDAgNC45NTgtMi4yMiA0Ljk1OC00Ljk1OHYtMTE3Ljk2MWMtMi45MTYtMTAuNDU5LTE1LjQ3NS0xMC43MDEtMTUuNjIzLTEwLjcwM3pcIiBmaWxsPVwiI2U5ZWZmZlwiLz48cGF0aCBkPVwibTM4My4wNjkgMzAxLjQ2NXYtMTEzLjQzNWMwLTEzLjYwMSAxMS4wMjYtMjQuNjI4IDI0LjYyNy0yNC42MjhoLTU5LjA5Yy0yLjczOCAwLTQuOTU4IDIuMjItNC45NTggNC45NTh2MTUyLjc3NWMwIDIuNzM4IDIuMjIgNC45NTggNC45NTggNC45NThoNTkuMDljLTEzLjYwMSAwLTI0LjYyNy0xMS4wMjYtMjQuNjI3LTI0LjYyOHpcIiBmaWxsPVwiI2QzZGNmYlwiLz48cGF0aCBkPVwibTQ1Mi4yOTYgMTg3Ljk1OC0xOS40NC0xOS40NGMtMy4yNzUtMy4yNzUtNy43MTgtNS4xMTUtMTIuMzUtNS4xMTVoLTguNjI4czE1Ljg2Mi4yNDIgMTUuODYyIDE1LjYyMnY5LjA5MWMwIDIuNzM4IDIuMjIgNC45NTggNC45NTggNC45NThoOS4wOTFzMTUuNjIyLjEyOCAxNS42MjIgMTQuNzcxdi03LjUzN2MwLTQuNjMyLTEuODQtOS4wNzUtNS4xMTUtMTIuMzV6XCIgZmlsbD1cIiNiZWM4ZjdcIi8+PGcgZmlsbD1cIiM3M2MzZjlcIj48cGF0aCBkPVwibTQxNC4wNDUgMjM4LjkxMWgtMzEuNDgzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDMxLjQ4M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwMyA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm00MzkuMjIgMjE4LjQwN2gtMjYuMDgyYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDI2LjA4MmMyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIi8+PHBhdGggZD1cIm0zOTUuNTYzIDIxOC40MDdoLTEzLjAwMWMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWgxMy4wMDFjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtNDM5LjIyIDI1OC41ODZoLTI2LjA4MmMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWgyNi4wODJjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtMzk1LjU2MyAyNTguNTg2aC0xMy4wMDFjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMTMuMDAxYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiLz48cGF0aCBkPVwibTM4Ni4zNzcgMjc5LjA4OGgtMy44MTRjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMy44MTRjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjxwYXRoIGQ9XCJtNDM5LjIyIDI3OS4wODhoLTM1LjY0NGMtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwMy01LjE0NSA1LjE0NS01LjE0NWgzNS42NDRjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIvPjwvZz48cGF0aCBkPVwibTM2Ni43ODMgMjM4LjkxMWgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm0zNjYuNzgzIDIxOC40MDdoLTQuOTQzYy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzA0LTUuMTQ1IDUuMTQ1LTUuMTQ1aDQuOTQzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzA0IDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNGI2YmIyXCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyNTguNTg2aC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTM2Ni43ODMgMjc5LjA4OGgtNC45NDNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoNC45NDNjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDQgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM0YjZiYjJcIi8+PHBhdGggZD1cIm00MzYuNjQ3IDIzOC45MTFoLTUuMzk1Yy0yLjg0MSAwLTUuMTQ1LTIuMzAzLTUuMTQ1LTUuMTQ1czIuMzAzLTUuMTQ1IDUuMTQ1LTUuMTQ1aDUuMzk1YzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjxwYXRoIGQ9XCJtNDE0LjA0NSAyOTkuNTkxaC0zMS40ODNjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDQtNS4xNDUgNS4xNDUtNS4xNDVoMzEuNDgzYzIuODQxIDAgNS4xNDUgMi4zMDMgNS4xNDUgNS4xNDVzLTIuMzAzIDUuMTQ1LTUuMTQ1IDUuMTQ1elwiIGZpbGw9XCIjNzNjM2Y5XCIvPjxwYXRoIGQ9XCJtMzY2Ljc4MyAyOTkuNTkxaC00Ljk0M2MtMi44NDEgMC01LjE0NS0yLjMwMy01LjE0NS01LjE0NXMyLjMwNC01LjE0NSA1LjE0NS01LjE0NWg0Ljk0M2MyLjg0MSAwIDUuMTQ1IDIuMzAzIDUuMTQ1IDUuMTQ1cy0yLjMwNCA1LjE0NS01LjE0NSA1LjE0NXpcIiBmaWxsPVwiIzRiNmJiMlwiLz48cGF0aCBkPVwibTQzNi42NDcgMjk5LjU5MWgtNS4zOTVjLTIuODQxIDAtNS4xNDUtMi4zMDMtNS4xNDUtNS4xNDVzMi4zMDMtNS4xNDUgNS4xNDUtNS4xNDVoNS4zOTVjMi44NDEgMCA1LjE0NSAyLjMwMyA1LjE0NSA1LjE0NXMtMi4zMDMgNS4xNDUtNS4xNDUgNS4xNDV6XCIgZmlsbD1cIiM3M2MzZjlcIi8+PC9nPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICA8aDM+T3B0aW1pemF0aW9uPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHA+NjAlIG9mIGFsbCBpbnRlcm5ldCB0cmFmZmljIGlzIG9uIG1vYmlsZSBkZXZpY2VzLCBzbyB3ZSBvcHRpbWl6ZSB5b3VyIG1vYmlsZSB0byBwZXJmb3JtIHRoZWlyIGJlc3QgaW4gc2VhcmNoIGVuZ2luZXMuPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cblxuXG4gICAgPHNlY3Rpb24gaWQ9XCJwcmljaW5nXCIgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwaWdneS1iYW5rXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC8xYTZhNzYzNWQ3MjNiZDQzYWQwMWViOGUxNGNhNTU1YWRlOTIwMGQ5L2U2NDNiL2ltYWdlcy9zYXZpbmdzLnN2Z1wiIGFsdD1cImRyYXdpbmcgb2YgYSBtYW4gbmV4dCB0byBhIGxhcmdlIHBpZ2d5IGJhbmtcIiB3aWR0aD1cIjMwMHB4XCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdC10ZXh0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiQwPC9zcGFuPiBEb3duLCA8c3Bhbj4kMTUwPC9zcGFuPiBQZXIgTW9udGgsIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgTm8gTWluaW11bSBDb250cmFjdFxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD4kMCBkb3duIGZvciBhIHN0YW5kYXJkIDUgcGFnZSBzbWFsbCBidXNpbmVzcyB3ZWJzaXRlLiBJZiB5b3UgbmVlZCBtb3JlIHRoYW4gdGhhdCB0aGVuIHdlIGhhdmUgdG8gZG8gY3VzdG9tIHByaWNpbmcgYmFzZWQgb24gdGhlIHNjb3BlIG9mIHdvcmssIG51bWJlciBvZiBhZGRpdGlvbmFsIHBhZ2VzLCBhbmQgdGltZSBpbnZvbHZlZC4gPGJyLz48YnIvPiAgXG4gICAgICAgICAgICAgICAgICAgICAgICBZb3Ugb3duIHlvdXIgZG9tYWluLCBjb250ZW50LCBsaXN0aW5nLCBhbmQgcHJvZmlsZXMuICBDYW5jZWwgYW55dGltZSB3aXRoIG5vIGZlZXMgb3IgaGFzc2xlLiAgXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+SG9zdGluZyBGZWVzIEluY2x1ZGVkPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Ib3N0aW5nIGZlZXMgYXJlIGJ1aWx0IHJpZ2h0IGludG8gdGhlIG1vbnRobHkgcGF5bWVudC48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlVubGltaXRlZCBFZGl0czwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2hhbmdlIGFueXRoaW5nIHlvdSB3YW50IGF0IGFueXRpbWUgYW5kIGl0IHdpbGwgYmUgZG9uZSB0aGF0IGRheS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjI0LzcgQ3VzdG9tZXIgU2VydmljZTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+Q2FsbCBkaXJlY3QgYW55dGltZSBkYXkgb3IgbmlnaHQsIG5vIHBob25lIHRyZWVzIG9yIGF1dG9tYXRlZCByZXNwb25zZXMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5XZWIgRGVzaWduICYgRGV2ZWxvcG1lbnQ8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkluY2x1ZGVzIG92ZXIgNDAgaG91cnMgb2YgZGVzaWduLCBkZXZlbG9wbWVudCwgYW5kIHRlc3RpbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DaXRhdGlvbnMgQW5kIExpc3RpbmdzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5JdCdzIGltcG9ydGFudCB0byBoYXZlIHlvdXIgd2Vic2l0ZSBsaW5rZWQgZnJvbSBvdGhlciB3ZWJzaXRlcywgbGlrZSBkaXJlY3Rvcmllcy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkdvb2dsZSBBbmFseXRpY3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPldlIGluc3RhbGwgQW5hbHl0aWNzIGZvciBmcmVlIHRvIG1vbml0b3IgdHJhZmZpYyBhbmQgd2hlcmUgaXQgY29tZXMgZnJvbS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuXG5cblxuICAgIDxzZWN0aW9uIGlkPVwicHJpY2VzXCIgY2xhc3NOYW1lPVwic2VjdGlvbiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPlN0YW5kYXJkICsgQmxvZ2dpbmc8L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPlNUQVJUSU5HIEFUPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4zMDA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+IDEwMDArIFdvcmQgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIiAvPiBXcml0dGVuIEJ5IGFuIFNFTyBTcGVjaWFsaXN0PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiIC8+IDEgUG9zdCBQZXIgTW9udGg8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIgLz4gJDE1MCBQZXIgRXh0cmEgUG9zdDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9jb250YWN0J30+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZCBzZXJ2aWNlcy1idXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIENPTlRBQ1QgVVNcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPlN0YW5kYXJkPC9oMj5cbiAgICAgICAgICAgICAgICA8c3Bhbj41IFBBR0VTPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxoMz4xNTA8L2gzPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gVW5saW1pdGVkIEVkaXRzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjxpbWcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgc3JjPVwiaHR0cHM6Ly9kMzN3dWJyZmtpMGw2OC5jbG91ZGZyb250Lm5ldC82MDhhNjgwYWRiY2RiZGZjNWIwZGI1MWNlNjEwNDcxOWFhZjJiMjRiLzcwODBlL2ltYWdlcy90aWNrLnN2Z1wiIGFsdD1cIlwiLz4gSW5jbHVkZXMgSG9zdGluZzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IDI0LzcgQ3VzdG9tZXIgU2VydmljZTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IExpZmV0aW1lIFVwZGF0ZXM8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89eycvY29udGFjdCd9PlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1zb2xpZFwidHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2UtYm94XCI+XG4gICAgICAgICAgICAgICAgPGgyPkxvZ29zICYgR3JhcGhpYyBEZXNpZ248L2gyPlxuICAgICAgICAgICAgICAgIDxzcGFuPklOQ0xVREVEITwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8aDM+MDwvaDM+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiAyIHJldmlzaW9uczwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT48aW1nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHNyYz1cImh0dHBzOi8vZDMzd3VicmZraTBsNjguY2xvdWRmcm9udC5uZXQvNjA4YTY4MGFkYmNkYmRmYzViMGRiNTFjZTYxMDQ3MTlhYWYyYjI0Yi83MDgwZS9pbWFnZXMvdGljay5zdmdcIiBhbHQ9XCJcIi8+IEFsbCBGaWxlIEZvcm1hdHM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBSZWFkeSB0byB1c2U8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+PGltZyBhcmlhLWhpZGRlbj1cInRydWVcIiBzcmM9XCJodHRwczovL2QzM3d1YnJma2kwbDY4LmNsb3VkZnJvbnQubmV0LzYwOGE2ODBhZGJjZGJkZmM1YjBkYjUxY2U2MTA0NzE5YWFmMmIyNGIvNzA4MGUvaW1hZ2VzL3RpY2suc3ZnXCIgYWx0PVwiXCIvPiBGUkVFIHcvIFN1YnNjcmlwdGlvbjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9jb250YWN0J30+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tc29saWQgc2VydmljZXMtYnV0dG9uXCIgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgQ09OVEFDVCBVU1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG5cbjwvbWFpbj5cbil9O1xuXG5leHBvcnQgZGVmYXVsdCBNYWluOyJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0F2QjtBQUFBO0FBQUE7QUFVQTtBQUVBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksUUFBUSxRQUFRO0FBSXBCLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFNBQVM7QUFBQSxNQUN0QyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLGNBQWM7QUFBQSxNQUMzQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFFBQVE7QUFBQSxNQUNyQyxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLE1BQU07QUFBQTtBQUFBO0FBRWxDLFdBQU8sZUFBZSxTQUFTLFdBQVc7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RCxNQUFHLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFzUCxNQUFLO0FBQUEsT0FBZSxvQ0FBQyxLQUFELE1BQUcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQXFQLE1BQUs7QUFBQSxPQUFlLG9DQUFDLEtBQUQsTUFBRyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBc00sTUFBSztBQUFBLE9BQWUsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQTZRLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUE0TCxNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBK00sTUFBSztBQUFBLE1BQVcsb0NBQUMsS0FBRDtBQUFBLElBQUcsTUFBSztBQUFBLEtBQVUsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE1BQXNKLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUFxSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFBc0osb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE1BQXFKLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxNQUFzSixvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsTUFBb0osb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLE9BQXlKLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFtSixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBbUosTUFBSztBQUFBLE1BQVcsb0NBQUMsUUFBRDtBQUFBLElBQU0sR0FBRTtBQUFBLElBQW1KLE1BQUs7QUFBQSxNQUFXLG9DQUFDLFFBQUQ7QUFBQSxJQUFNLEdBQUU7QUFBQSxJQUFtSixNQUFLO0FBQUEsTUFBVyxvQ0FBQyxRQUFEO0FBQUEsSUFBTSxHQUFFO0FBQUEsSUFBbUosTUFBSztBQUFB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
