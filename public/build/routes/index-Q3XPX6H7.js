import {
  ProductCard
} from "/build/_shared/chunk-YLUQ6GRR.js";
import {
  SanityContent
} from "/build/_shared/chunk-VKM3AXLT.js";
import "/build/_shared/chunk-PBYB3QU6.js";
import {
  RecordCover
} from "/build/_shared/chunk-NSFUBKRX.js";
import {
  Layout,
  Title,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-E75LE37J.js";
import {
  projectDetails
} from "/build/_shared/chunk-K3XBZMEA.js";
import {
  require_image_url_umd
} from "/build/_shared/chunk-UXONZQWX.js";
import "/build/_shared/chunk-GTC6AJN5.js";
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

// app/routes/index.tsx
var import_groq = __toESM(require_groq());
var import_image_url = __toESM(require_image_url_umd());
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
  const { products, categories, guides, infos } = useLoaderData();
  const { home } = useRouteData(`root`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: " mb-6 border p-4 md:p-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "mx-auto grid  gap-4 md:py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-2 mr-auto space-y-4 place-self-center md:order-1 lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: [
        home.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: home.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 113,
          columnNumber: 31
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "text-xl", children: [
          home.subTitle,
          " here "
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 114,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 112,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "order-1 md:order-2 lg:col-span-5 lg:mt-0 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: home.image, title: home.title }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 118,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 117,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 110,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 109,
      columnNumber: 9
    }, this),
    guides.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-6 font-mono text-2xl capitalize md:text-6xl", children: "Newest howtu.ai Guides" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 124,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid md:grid-cols-3", children: guides.map((guide) => {
        var _a, _b;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            to: "/guides/" + guide.slug,
            className: "group grid items-center gap-4 border p-2 transition-all duration-300 hover:-translate-y-2 hover:border-dashed md:grid-cols-2 ",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: guide.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                "img",
                {
                  className: "h-auto w-full  object-cover shadow-black transition-all duration-300  group-hover:scale-105 ",
                  src: (0, import_image_url.default)(projectDetails()).image(guide.image.asset._ref).height(300).width(400).fit("max").auto("format").url(),
                  alt: (_a = String(guide.title)) != null ? _a : ``,
                  loading: "lazy"
                },
                void 0,
                false,
                {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 136,
                  columnNumber: 23
                },
                this
              ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = guide.title) != null ? _b : `Missing thumbnail` }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 149,
                columnNumber: 23
              }, this) }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 134,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl", children: [
                  " ",
                  guide.title
                ] }, void 0, true, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 156,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "opacity-50  group-hover:underline group-hover:opacity-100", children: "Read the guide" }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 157,
                  columnNumber: 21
                }, this)
              ] }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 154,
                columnNumber: 19
              }, this)
            ]
          },
          guide.title,
          true,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 129,
            columnNumber: 17
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 127,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 123,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No products found " }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 166,
      columnNumber: 11
    }, this),
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "my-12 border-t-2 border-dashed pt-12 ", children: [
      " ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-6 font-mono text-2xl capitalize md:text-6xl", children: "Newest Tool Reviews" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 171,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "mb-12  grid gap-6 md:grid-cols-4 md:gap-16 ", children: products.slice(0, 4).map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ProductCard, { product }, product._id, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 176,
        columnNumber: 17
      }, this)) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 174,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 169,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No products found" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 181,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
      " ",
      categories.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "my-12 border-t-2 border-dashed pt-12 ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-6 font-mono text-2xl capitalize md:text-6xl", children: "Newest Categories" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2", children: categories.map((category) => {
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
                    fileName: "app/routes/index.tsx",
                    lineNumber: 197,
                    columnNumber: 21
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
                    fileName: "app/routes/index.tsx",
                    lineNumber: 205,
                    columnNumber: 23
                  },
                  this
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = category.image.title) != null ? _b : `Missing Record art` }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 218,
                  columnNumber: 23
                }, this)
              ]
            },
            category.title,
            true,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 193,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 191,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 187,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No products found " }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 227,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 184,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
      " ",
      infos.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "my-12 border-t-2 border-dashed pt-12 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: infos.map((info) => {
        var _a, _b, _c;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          "div",
          {
            className: "my-12  grid gap-6 border-t-2 border-dashed pt-12 md:grid-cols-2 ",
            children: [
              info.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
                " ",
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "h2",
                  {
                    className: " z-10  p-4 font-mono text-3xl \n                ",
                    children: info.title
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 244,
                    columnNumber: 25
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
                  "img",
                  {
                    className: "  h-auto  w-full object-cover  ",
                    src: (0, import_image_url.default)(projectDetails()).image(info.image.asset._ref).height(500).width(500).fit("max").auto("format").url(),
                    alt: (_a = String(info.image.title)) != null ? _a : ``,
                    loading: "lazy"
                  },
                  void 0,
                  false,
                  {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 250,
                    columnNumber: 25
                  },
                  this
                )
              ] }, void 0, true, {
                fileName: "app/routes/index.tsx",
                lineNumber: 242,
                columnNumber: 23
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = info.image.title) != null ? _b : `Missing Record art` }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 264,
                columnNumber: 23
              }, this),
              info.content && ((_c = info.content) == null ? void 0 : _c.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { id: "overview", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SanityContent, { value: info.content }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 271,
                columnNumber: 25
              }, this) }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 270,
                columnNumber: 23
              }, this) : null
            ]
          },
          info.title,
          true,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 237,
            columnNumber: 19
          },
          this
        );
      }) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 235,
        columnNumber: 15
      }, this) }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 234,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No products found " }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 279,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 231,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 108,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 107,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-Q3XPX6H7.js.map
