import {
  Layout,
  RecordCover,
  tailwind_default
} from "/build/_shared/chunk-M3J5IFP6.js";
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

// app/routes/categories/$slug.tsx
var import_groq = __toESM(require_groq());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function Categories() {
  const { category, products } = useLoaderData();
  const params = useParams();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: [
      "A list of products from the ",
      params.slug,
      " category"
    ] }, void 0, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded border p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl", children: product.title }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this),
      product.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: product.image, title: product.title }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 70,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.category }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 74,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.slug}`, className: "underline", children: "View Product" }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 75,
        columnNumber: 17
      }, this)
    ] }, product._id, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 67,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found with this tag." }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 82,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/categories/$slug.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/categories/$slug.tsx",
    lineNumber: 61,
    columnNumber: 5
  }, this);
}
export {
  Categories as default,
  links
};
//# sourceMappingURL=/build/routes/categories/$slug-NC7JX3WC.js.map
