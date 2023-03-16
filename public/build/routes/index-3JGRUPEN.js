import {
  Layout,
  RecordCover,
  Title,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-MD5PJD2T.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-6OT2F7ZE.js";
import "/build/_shared/chunk-RVWPLYFV.js";
import "/build/_shared/chunk-7E4LWBBH.js";
import {
  require_groq
} from "/build/_shared/chunk-VFPAK4Q6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: " mb-6 border p-4 md:p-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto grid  gap-4 md:py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-2 mr-auto space-y-2 place-self-center md:order-1 lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: [
        home.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: home.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 62,
          columnNumber: 31
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl", children: [
          home.subTitle,
          " here "
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 63,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 61,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-1 md:order-2 lg:col-span-5 lg:mt-0 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: home.image, title: home.title }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 67,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 66,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 59,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 lg:grid-cols-4", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "group relative flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 bg-gradient-to-b from-white to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-y-10 group-hover:translate-x-10 group-hover:opacity-75" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 76,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: product.image, title: product.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 77,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-2", children: [
        (product == null ? void 0 : product.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            prefetch: "intent",
            to: product == null ? void 0 : product.slug,
            className: "text-bold  d:text-3xl pt-4 text-xl font-bold transition-colors duration-100  ease-in-out",
            children: [
              product.title,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 88,
                columnNumber: 23
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 81,
            columnNumber: 21
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-4 text-xl font-bold", children: product.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 91,
          columnNumber: 21
        }, this),
        (product == null ? void 0 : product.category) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " font-bold leading-none ", children: product.category }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 96,
          columnNumber: 21
        }, this) : null,
        (product == null ? void 0 : product.metadescription) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: " ... truncate  font-light leading-none ", children: product.metadescription }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 101,
          columnNumber: 21
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this)
    ] }, product._id, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 74,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 72,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-3JGRUPEN.js.map
