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
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: " mb-6 border p-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto grid   py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mr-auto space-y-2 place-self-center lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: [
        "The ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-blue-500", children: "Howtu.ai" }, void 0, false, {
          fileName: "app/routes/categories/$slug.tsx",
          lineNumber: 99,
          columnNumber: 23
        }, this),
        " guide to",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "text-gray-400 ", children: category.title }, void 0, false, {
          fileName: "app/routes/categories/$slug.tsx",
          lineNumber: 100,
          columnNumber: 19
        }, this),
        " AI products"
      ] }, void 0, true, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 98,
        columnNumber: 17
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 97,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 96,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "hidden lg:col-span-5 lg:mt-0 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: category.image, title: category.title }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 106,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 105,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 95,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded border p-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl", children: product.title }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 114,
        columnNumber: 17
      }, this),
      product.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: product.image, title: product.title }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 117,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 116,
        columnNumber: 19
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.category }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 120,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: `/products/${product.slug}`, className: "underline", children: "View Product" }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 121,
        columnNumber: 17
      }, this)
    ] }, product._id, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 113,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 111,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found with this tag." }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 128,
      columnNumber: 11
    }, this),
    Object.keys(groupedProducts).length > 0 ? Object.keys(groupedProducts).map((tagTitle) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "my-4 text-2xl", children: tagTitle }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 134,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3", children: groupedProducts[tagTitle].map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "rounded border p-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h3", { className: "text-xl", children: product.title }, void 0, false, {
          fileName: "app/routes/categories/$slug.tsx",
          lineNumber: 138,
          columnNumber: 21
        }, this),
        product.image && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          RecordCover,
          {
            image: product.image,
            title: product.title
          },
          void 0,
          false,
          {
            fileName: "app/routes/categories/$slug.tsx",
            lineNumber: 141,
            columnNumber: 25
          },
          this
        ) }, void 0, false, {
          fileName: "app/routes/categories/$slug.tsx",
          lineNumber: 140,
          columnNumber: 23
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: product.category }, void 0, false, {
          fileName: "app/routes/categories/$slug.tsx",
          lineNumber: 147,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: `/products/${product.slug}`,
            className: "underline",
            children: "View Product"
          },
          void 0,
          false,
          {
            fileName: "app/routes/categories/$slug.tsx",
            lineNumber: 148,
            columnNumber: 21
          },
          this
        )
      ] }, product._id, true, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 137,
        columnNumber: 19
      }, this)) }, void 0, false, {
        fileName: "app/routes/categories/$slug.tsx",
        lineNumber: 135,
        columnNumber: 15
      }, this)
    ] }, tagTitle, true, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 133,
      columnNumber: 13
    }, this)) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found with this tag." }, void 0, false, {
      fileName: "app/routes/categories/$slug.tsx",
      lineNumber: 160,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/categories/$slug.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/categories/$slug.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}
export {
  Categories as default,
  links
};
//# sourceMappingURL=/build/routes/categories/$slug-NBGGZLOB.js.map
