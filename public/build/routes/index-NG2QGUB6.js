import {
  Layout,
  RecordCover,
  Title,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-BKRSQNMI.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-T5F5625V.js";
import "/build/_shared/chunk-YW6GLAJZ.js";
import {
  require_groq
} from "/build/_shared/chunk-VFPAK4Q6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import "/build/_shared/chunk-RZ47BF3R.js";
import "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/index.tsx
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
    home.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: home.title }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 55,
      columnNumber: 23
    }, this) : null,
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 lg:grid-cols-4", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "group relative flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 bg-gradient-to-b from-white to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-y-10 group-hover:translate-x-10 group-hover:opacity-75" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: product.image, title: product.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 62,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 60,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
        (product == null ? void 0 : product.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            prefetch: "intent",
            to: product == null ? void 0 : product.slug,
            className: "text-bold featureing-tighter pt-4 text-xl font-bold transition-colors duration-100 ease-in-out hover:bg-cyan-400 hover:text-white md:text-3xl",
            children: [
              product.title,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 73,
                columnNumber: 23
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 66,
            columnNumber: 21
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-4 text-xl font-bold", children: product.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 76,
          columnNumber: 21
        }, this),
        (product == null ? void 0 : product.category) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "featureing-tighter bg-black font-bold leading-none text-white", children: product.category }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 81,
          columnNumber: 21
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this)
    ] }, product._id, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 59,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 90,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 54,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 53,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-NG2QGUB6.js.map
