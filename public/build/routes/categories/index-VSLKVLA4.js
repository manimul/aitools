import {
  Layout,
  Title,
  tailwind_default
} from "/build/_shared/chunk-6RDU6RSJ.js";
import {
  projectDetails
} from "/build/_shared/chunk-K3XBZMEA.js";
import {
  require_image_url_umd
} from "/build/_shared/chunk-UXONZQWX.js";
import "/build/_shared/chunk-6TE67VER.js";
import "/build/_shared/chunk-LS6N33D7.js";
import {
  require_groq
} from "/build/_shared/chunk-VFPAK4Q6.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-6OT2F7ZE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/categories/index.tsx
var import_groq = __toESM(require_groq());
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = (data) => {
  const home = data.parentsData.root.home;
  return {
    title: ["Browse AI Tool Categories", home.siteTitle].filter(Boolean).join(" | "),
    description: "Browse the different types of AI tools listed by category type."
  };
};
function Index() {
  const { categories } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "All Categories" }, void 0, false, {
      fileName: "app/routes/categories/index.tsx",
      lineNumber: 62,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/categories/index.tsx",
      lineNumber: 61,
      columnNumber: 9
    }, this),
    categories.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grid gap-6 md:grid-cols-2", children: categories.map((category) => {
      var _a, _b;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        Link,
        {
          to: "/categories/" + category.slug.current,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "h2",
              {
                className: "absolute z-10 bg-white p-4 font-mono text-3xl dark:bg-black\n                ",
                children: category.title
              },
              void 0,
              false,
              {
                fileName: "app/routes/categories/index.tsx",
                lineNumber: 71,
                columnNumber: 17
              },
              this
            ),
            category.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
              "img",
              {
                className: "  h-auto  w-full object-cover  ",
                src: (0, import_image_url.default)(projectDetails()).image(category.image.asset._ref).height(200).width(500).fit("max").auto("format").url(),
                alt: (_a = String(category.image.title)) != null ? _a : ``,
                loading: "lazy"
              },
              void 0,
              false,
              {
                fileName: "app/routes/categories/index.tsx",
                lineNumber: 79,
                columnNumber: 19
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = category.image.title) != null ? _b : `Missing Record art` }, void 0, false, {
              fileName: "app/routes/categories/index.tsx",
              lineNumber: 92,
              columnNumber: 19
            }, this)
          ]
        },
        category.title,
        true,
        {
          fileName: "app/routes/categories/index.tsx",
          lineNumber: 67,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/categories/index.tsx",
      lineNumber: 65,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No products found " }, void 0, false, {
      fileName: "app/routes/categories/index.tsx",
      lineNumber: 100,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/categories/index.tsx",
    lineNumber: 60,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/categories/index.tsx",
    lineNumber: 59,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/categories/index-VSLKVLA4.js.map
