import {
  ProductCard
} from "/build/_shared/chunk-YLUQ6GRR.js";
import {
  RecordCover
} from "/build/_shared/chunk-NSFUBKRX.js";
import {
  Layout,
  Title,
  tailwind_default
} from "/build/_shared/chunk-7KIFQQ6S.js";
import "/build/_shared/chunk-K3XBZMEA.js";
import "/build/_shared/chunk-UXONZQWX.js";
import "/build/_shared/chunk-GTC6AJN5.js";
import "/build/_shared/chunk-LS6N33D7.js";
import {
  require_groq
} from "/build/_shared/chunk-VFPAK4Q6.js";
import {
  useLoaderData,
  useParams
} from "/build/_shared/chunk-6OT2F7ZE.js";
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
function groupProductsByTags(products) {
  const groupedProducts = {};
  products.forEach((product) => {
    if (product.tags) {
      product.tags.forEach((tag) => {
        const tagName = tag.title;
        if (tagName) {
          if (!groupedProducts[tagName]) {
            groupedProducts[tagName] = [];
          }
          groupedProducts[tagName].push(product);
        }
      });
    }
  });
  return groupedProducts;
}
function Categories() {
  const { category, products } = useLoaderData();
  const params = useParams();
  const groupedProducts = groupProductsByTags(products);
  console.log("Grouped products:", groupedProducts);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: " mb-6 border border-dashed p-4 md:p-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto grid   gap-3 py-3 lg:grid-cols-12 lg:gap-8 lg:py-4 xl:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-auto space-y-2 place-self-center lg:col-span-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-mono text-blue-300", children: "howtu.ai" }, void 0, false, {
          fileName: "app/routes/categories/$slug.tsx",
          lineNumber: 105,
          columnNumber: 23
        }, this),
        " ",
        "guide to AI",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "font-serif text-gray-400 ", children: category.title }, void 0, false, {
          fileName: "app/routes/categories/$slug.tsx",
          lineNumber: 107,
          columnNumber: 19
        }, this),
        " ",
        "tools"
      ] }, void 0, true, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 104,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 103,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 102,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " lg:col-span-6 lg:mt-0 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: category.image, title: category.title }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 115,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 114,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 100,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-12 mb-6 font-mono text-6xl capitalize", children: "New tools" }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-4 md:gap-16", children: products.slice(0, 4).map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 127,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 121,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found with this tag." }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 132,
      columnNumber: 11
    }, this),
    Object.keys(groupedProducts).length > 0 ? Object.keys(groupedProducts).map((tagTitle) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "my-12  border-t-2 border-dashed", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mt-12 mb-6 font-mono text-6xl capitalize", children: tagTitle }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 138,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid  gap-6 md:grid-cols-3 md:gap-16", children: groupedProducts[tagTitle].map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 143,
        columnNumber: 19
      }, this)) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 141,
        columnNumber: 15
      }, this)
    ] }, tagTitle, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 137,
      columnNumber: 13
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found with this tag." }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 149,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/categories/$slug.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/categories/$slug.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}
export {
  Categories as default,
  links
};
//# sourceMappingURL=/build/routes/categories/$slug-GE4QJQMY.js.map
