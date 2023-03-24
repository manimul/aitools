import {
  ProductCard
} from "/build/_shared/chunk-AO2RGFCI.js";
import {
  Layout,
  RecordCover,
  Title,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-IXZ3F3AX.js";
import "/build/_shared/chunk-RVWPLYFV.js";
import "/build/_shared/chunk-7E4LWBBH.js";
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-2 mr-auto space-y-4 place-self-center md:order-1 lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: [
        home.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: home.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 67,
          columnNumber: 31
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl", children: [
          home.subTitle,
          " here "
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 66,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 65,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-1 md:order-2 lg:col-span-5 lg:mt-0 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: home.image, title: home.title }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 72,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 64,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid  gap-6 space-y-12 md:grid-cols-3 md:gap-16 ", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 79,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 83,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-ILPEBJM5.js.map
