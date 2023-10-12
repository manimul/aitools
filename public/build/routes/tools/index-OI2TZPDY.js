import {
  ProductCard
} from "/build/_shared/chunk-ZTGOFDCS.js";
import "/build/_shared/chunk-JCYV27SV.js";
import {
  Title
} from "/build/_shared/chunk-Z5YUX75N.js";
import {
  Layout,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-AR65SWWO.js";
import "/build/_shared/chunk-K3XBZMEA.js";
import "/build/_shared/chunk-UXONZQWX.js";
import "/build/_shared/chunk-IROXDNAB.js";
import "/build/_shared/chunk-LS6N33D7.js";
import {
  require_groq
} from "/build/_shared/chunk-VFPAK4Q6.js";
import {
  useLoaderData
} from "/build/_shared/chunk-6OT2F7ZE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/tools/index.tsx
var import_groq = __toESM(require_groq());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = (data) => {
  const home = data.parentsData.root.home;
  return {
    title: ["Browse a huge range of AI tools", home.siteTitle].filter(Boolean).join(" | "),
    "og:title": ["Browse a huge range of AI tools", home.siteTitle].filter(Boolean).join(" | "),
    description: "Browse howtu.ai's comprehensive list of AI tools and solutions. Explore step-by-step tutorials and expert reviews to find the best AI tool for your needs.",
    "og:description": "Browse howtu.ai's comprehensive list of AI tools and solutions. Explore step-by-step tutorials and expert reviews to find the best AI tool for your needs.",
    "og:type": "website",
    "og:url": "https://howtu.ai/tools",
    "og:site_name": "howtu.ai"
  };
};
function Index() {
  const { products } = useLoaderData();
  const { home } = useRouteData(`root`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "All tools" }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 75,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid  gap-6 md:grid-cols-3 md:gap-16 ", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 81,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 79,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found" }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tools/index.tsx",
    lineNumber: 74,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/tools/index.tsx",
    lineNumber: 73,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/tools/index-OI2TZPDY.js.map
