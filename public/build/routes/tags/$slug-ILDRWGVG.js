import {
  Layout,
  RecordCover,
  Title,
  tailwind_default
} from "/build/_shared/chunk-27ICLBYI.js";
import {
  Link,
  useLoaderData,
  useParams
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

// app/routes/tags/$slug.tsx
var import_groq = __toESM(require_groq());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function Tags() {
  const { tag, products } = useLoaderData();
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: " mb-6 border p-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto grid   py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-auto space-y-2 place-self-center lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: [
        'A list of products tagged with "',
        params.slug,
        '"'
      ] }, void 0, true, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 65,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 64,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:col-span-5 lg:mt-0 lg:flex", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", {}, void 0, false, {
          fileName: "app/routes/tags/$slug.tsx",
          lineNumber: 70,
          columnNumber: 15
        }, this),
        " "
      ] }, void 0, true, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 69,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/tags/$slug.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tags/$slug.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded border p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl", children: product.title }, void 0, false, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 78,
        columnNumber: 17
      }, this),
      product.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: product.image, title: product.title }, void 0, false, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 81,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 80,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.category }, void 0, false, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 84,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.slug}`, className: "underline", children: "View Product" }, void 0, false, {
        fileName: "app/routes/tags/$slug.tsx",
        lineNumber: 85,
        columnNumber: 17
      }, this)
    ] }, product._id, true, {
      fileName: "app/routes/tags/$slug.tsx",
      lineNumber: 77,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/tags/$slug.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found with this tag." }, void 0, false, {
      fileName: "app/routes/tags/$slug.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tags/$slug.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/tags/$slug.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
export {
  Tags as default,
  links
};
//# sourceMappingURL=/build/routes/tags/$slug-ILDRWGVG.js.map