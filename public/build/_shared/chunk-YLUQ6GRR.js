import {
  RecordCover
} from "/build/_shared/chunk-NSFUBKRX.js";
import {
  Link
} from "/build/_shared/chunk-6OT2F7ZE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/ProductCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ProductCard({ product }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "li",
    {
      className: "group relative flex flex-col transition-all duration-300 hover:-translate-y-2  ",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden transition-all ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: product.image, title: product.title }, void 0, false, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 15,
          columnNumber: 9
        }, this) }, void 0, false, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 14,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col space-y-2", children: [
          (product == null ? void 0 : product.category) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mt-2 font-mono text-xs uppercase opacity-60 ", children: [
            "Category: ",
            product.category
          ] }, void 0, true, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 19,
            columnNumber: 11
          }, this) : null,
          (product == null ? void 0 : product.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              prefetch: "intent",
              to: "/products/" + (product == null ? void 0 : product.slug),
              className: " text-xl  font-bold md:text-3xl ",
              children: [
                product.title,
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                  fileName: "app/components/ProductCard.tsx",
                  lineNumber: 31,
                  columnNumber: 13
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 24,
              columnNumber: 11
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-4 text-xl font-bold", children: product.title }, void 0, false, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 34,
            columnNumber: 11
          }, this),
          (product == null ? void 0 : product.tags) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-wrap space-x-2", children: product == null ? void 0 : product.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              to: "/tags/" + tag.slug,
              className: "rounded-xl w-auto  rounded-full border border-black px-2 font-mono text-sm   lowercase dark:border-white",
              children: [
                tag.title,
                " "
              ]
            },
            tag._key,
            true,
            {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 40,
              columnNumber: 15
            },
            this
          )) }, void 0, false, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 38,
            columnNumber: 11
          }, this) : null,
          (product == null ? void 0 : product.metadescription) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "   leading-snug opacity-60 ", children: product.metadescription }, void 0, false, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 51,
            columnNumber: 11
          }, this) : null,
          (product == null ? void 0 : product.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
            Link,
            {
              prefetch: "intent",
              to: "/tools/" + (product == null ? void 0 : product.slug),
              className: " text-md   md:text-lg",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "mr-1 opacity-0 group-hover:opacity-100", children: "\u{1F449}" }, void 0, false, {
                  fileName: "app/components/ProductCard.tsx",
                  lineNumber: 62,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "-ml-4 group-hover:-ml-0 group-hover:underline", children: "Learn More" }, void 0, false, {
                  fileName: "app/components/ProductCard.tsx",
                  lineNumber: 63,
                  columnNumber: 15
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                  fileName: "app/components/ProductCard.tsx",
                  lineNumber: 67,
                  columnNumber: 15
                }, this)
              ]
            },
            void 0,
            true,
            {
              fileName: "app/components/ProductCard.tsx",
              lineNumber: 57,
              columnNumber: 13
            },
            this
          ) }, void 0, false, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 56,
            columnNumber: 11
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-4 text-xl font-bold" }, void 0, false, {
            fileName: "app/components/ProductCard.tsx",
            lineNumber: 71,
            columnNumber: 11
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/ProductCard.tsx",
          lineNumber: 17,
          columnNumber: 7
        }, this)
      ]
    },
    product._id,
    true,
    {
      fileName: "app/components/ProductCard.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    this
  );
}

export {
  ProductCard
};
//# sourceMappingURL=/build/_shared/chunk-YLUQ6GRR.js.map
