import {
  ProductCard
} from "/build/_shared/chunk-4UFLJSU7.js";
import {
  SanityContent
} from "/build/_shared/chunk-M3IW45AF.js";
import "/build/_shared/chunk-PBYB3QU6.js";
import {
  RecordCover
} from "/build/_shared/chunk-GB5OAF5Y.js";
import {
  Layout,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-MXJIX5CJ.js";
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

// app/components/SecondaryHeading.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SecondaryHeading(props) {
  return props.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "mb-6 font-mono text-2xl capitalize md:text-6xl", children: props.children }, void 0, false, {
    fileName: "app/components/SecondaryHeading.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) : null;
}

// app/components/PrimaryHeading.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function PrimaryHeading(props) {
  return props.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h1", { className: "text-bold max-w-4xl  font-mono text-4xl font-bold md:text-3xl lg:text-4xl xl:text-6xl", children: props.children }, void 0, false, {
    fileName: "app/components/PrimaryHeading.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this) : null;
}

// app/components/Button.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function Button(props) {
  const { title, link, alt } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    Link,
    {
      className: `w-auto rounded-lg  border-2 p-3 px-4 font-mono text-sm uppercase 
      ${alt ? "border-white bg-black text-white dark:bg-white dark:text-black" : "border-black dark:border-white  "}`,
      to: link || "/",
      children: title
    },
    void 0,
    false,
    {
      fileName: "app/components/Button.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/PrimaryHero.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function PrimaryHero(props) {
  const { title, subtitle, buttons, image } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: " mb-6 rounded-lg border-2 border-black bg-white p-4 dark:border-white dark:bg-black md:p-6   ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto grid md:py-8 lg:grid-cols-12  lg:gap-5 lg:py-16 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "order-2 mr-auto space-y-4 place-self-center md:order-1 lg:col-span-6 ", children: [
      title ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PrimaryHeading, { children: title }, void 0, false, {
        fileName: "app/components/PrimaryHero.tsx",
        lineNumber: 27,
        columnNumber: 20
      }, this) : null,
      subtitle ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: subtitle }, void 0, false, {
        fileName: "app/components/PrimaryHero.tsx",
        lineNumber: 28,
        columnNumber: 23
      }, this) : null,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "w-auto ", children: buttons == null ? void 0 : buttons.map((button, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        Button,
        {
          link: button.link,
          title: button.text,
          alt: button.alt
        },
        index,
        false,
        {
          fileName: "app/components/PrimaryHero.tsx",
          lineNumber: 31,
          columnNumber: 15
        },
        this
      )) }, void 0, false, {
        fileName: "app/components/PrimaryHero.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PrimaryHero.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "order-1 h-auto w-full md:order-2 lg:col-start-8 lg:col-end-13 lg:mt-0 lg:flex", children: image ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecordCover, { image, title }, void 0, false, {
      fileName: "app/components/PrimaryHero.tsx",
      lineNumber: 42,
      columnNumber: 20
    }, this) : null }, void 0, false, {
      fileName: "app/components/PrimaryHero.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PrimaryHero.tsx",
    lineNumber: 25,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/PrimaryHero.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      PrimaryHero,
      {
        title: home.title,
        subtitle: home.subTitle,
        image: home.image,
        buttons: [
          { text: "Explore Writing Tools", link: "/categories/writing" }
        ]
      },
      void 0,
      false,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 111,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
      guides.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SecondaryHeading, { children: " Newest howtu.ai Guides" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 124,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h2", { className: "mb-6 font-mono text-2xl capitalize md:text-6xl" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 126,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid md:grid-cols-3", children: guides.map((guide) => {
          var _a, _b;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            Link,
            {
              to: "/guides/" + guide.slug,
              className: "group grid items-center gap-4 border p-2 transition-all duration-300 hover:-translate-y-2 hover:border-dashed md:grid-cols-2 ",
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "", children: guide.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = guide.title) != null ? _b : `Missing thumbnail` }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 149,
                  columnNumber: 23
                }, this) }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 134,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h3", { className: "text-2xl", children: [
                    guide.title,
                    " "
                  ] }, void 0, true, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 156,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "opacity-50  group-hover:underline group-hover:opacity-100", children: "Read the guide" }, void 0, false, {
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
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: " No products found " }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 166,
        columnNumber: 11
      }, this),
      products.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "my-12 border-t-2 border-dashed pt-12 ", children: [
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SecondaryHeading, { children: " Newest Tool Reviews" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 171,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("ul", { className: "mb-12  grid gap-6 md:grid-cols-4 md:gap-16 ", children: products.slice(0, 4).map((product) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProductCard, { product }, product._id, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 174,
          columnNumber: 17
        }, this)) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 172,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: "No products found" }, void 0, false, {
        fileName: "app/routes/index.tsx",
        lineNumber: 179,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: [
        " ",
        categories.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "my-12 border-t-2 border-dashed pt-12 ", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SecondaryHeading, { children: " Newest Categories" }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "grid gap-6 md:grid-cols-2", children: categories.map((category) => {
            var _a, _b;
            return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
              Link,
              {
                to: "/categories/" + category.slug.current,
                children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "h2",
                    {
                      className: "absolute z-10 bg-white p-4 font-mono text-3xl dark:bg-black\n                ",
                      children: category.title
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 194,
                      columnNumber: 21
                    },
                    this
                  ),
                  category.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                      lineNumber: 202,
                      columnNumber: 23
                    },
                    this
                  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = category.image.title) != null ? _b : `Missing Record art` }, void 0, false, {
                    fileName: "app/routes/index.tsx",
                    lineNumber: 215,
                    columnNumber: 23
                  }, this)
                ]
              },
              category.title,
              true,
              {
                fileName: "app/routes/index.tsx",
                lineNumber: 190,
                columnNumber: 19
              },
              this
            );
          }) }, void 0, false, {
            fileName: "app/routes/index.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/index.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: " No products found " }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 224,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { children: [
        " ",
        infos.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { className: "my-12 border-t-2 border-dashed pt-12 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: infos.map((info) => {
          var _a, _b, _c;
          return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            "div",
            {
              className: "my-12  grid gap-6 border-t-2 border-dashed pt-12 md:grid-cols-2 ",
              children: [
                info.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { children: [
                  " ",
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                    "h2",
                    {
                      className: " z-10  p-4 font-mono text-3xl \n                ",
                      children: info.title
                    },
                    void 0,
                    false,
                    {
                      fileName: "app/routes/index.tsx",
                      lineNumber: 241,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                      lineNumber: 247,
                      columnNumber: 25
                    },
                    this
                  )
                ] }, void 0, true, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 239,
                  columnNumber: 23
                }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = info.image.title) != null ? _b : `Missing Record art` }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 261,
                  columnNumber: 23
                }, this),
                info.content && ((_c = info.content) == null ? void 0 : _c.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("section", { id: "overview", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(SanityContent, { value: info.content }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 268,
                  columnNumber: 25
                }, this) }, void 0, false, {
                  fileName: "app/routes/index.tsx",
                  lineNumber: 267,
                  columnNumber: 23
                }, this) : null
              ]
            },
            info.title,
            true,
            {
              fileName: "app/routes/index.tsx",
              lineNumber: 234,
              columnNumber: 19
            },
            this
          );
        }) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 232,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 231,
          columnNumber: 13
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { children: " No products found " }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 276,
          columnNumber: 13
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 228,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 121,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 110,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-OR2R53XZ.js.map
