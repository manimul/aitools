import {
  ProductCard
} from "/build/_shared/chunk-4UFLJSU7.js";
import "/build/_shared/chunk-GB5OAF5Y.js";
import {
  Title
} from "/build/_shared/chunk-Z5YUX75N.js";
import {
  Layout,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-ANO2NPYG.js";
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
    title: [home.title, home.siteTitle].filter(Boolean).join(" | ")
  };
};
function Index() {
  const { products } = useLoaderData();
  const { home } = useRouteData(`root`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "All tools" }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid  gap-6 md:grid-cols-3 md:gap-16 ", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 69,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found" }, void 0, false, {
      fileName: "app/routes/tools/index.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tools/index.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/tools/index.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/tools/index-RQ4URK2I.js.map
