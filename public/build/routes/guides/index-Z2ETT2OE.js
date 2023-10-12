import {
  Title
} from "/build/_shared/chunk-Z5YUX75N.js";
import {
  Layout,
  tailwind_default
} from "/build/_shared/chunk-AR65SWWO.js";
import {
  projectDetails
} from "/build/_shared/chunk-K3XBZMEA.js";
import {
  require_image_url_umd
} from "/build/_shared/chunk-UXONZQWX.js";
import "/build/_shared/chunk-IROXDNAB.js";
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

// app/routes/guides/index.tsx
var import_groq = __toESM(require_groq());
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = (data) => {
  const home = data.parentsData.root.home;
  return {
    title: ["Learn how to use AI to your advantage", home.siteTitle].filter(Boolean).join(" | "),
    description: "Browse the different types of AI tools. Unlock the power of AI with our comprehensive guides! Whether you're a beginner or seasoned pro, explore step-by-step tutorials and insights to navigate through various AI tools with ease. Elevate your skills, understand complex technologies, and harness AI's potential to drive innovation and solutions in your projects or business, listed by category type.",
    "og:title": ["Learn how to use AI to your advantage", home.siteTitle].filter(Boolean).join(" | "),
    "og:description": "Browse the different types of AI tools. Unlock the power of AI with our comprehensive guides! Whether you're a beginner or seasoned pro, explore step-by-step tutorials and insights to navigate through various AI tools with ease. Elevate your skills, understand complex technologies, and harness AI's potential to drive innovation and solutions in your projects or business, listed by category type.",
    "og:type": "website",
    "og:url": "https://howtu.ai/guides",
    "og:site_name": "howtu.ai"
  };
};
function Index() {
  const { guides } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "All howtu.ai Guides" }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 85,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 84,
      columnNumber: 9
    }, this),
    guides.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grid md:grid-cols-3", children: guides.map((guide) => {
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
                fileName: "app/routes/guides/index.tsx",
                lineNumber: 97,
                columnNumber: 21
              },
              this
            ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = guide.title) != null ? _b : `Missing thumbnail` }, void 0, false, {
              fileName: "app/routes/guides/index.tsx",
              lineNumber: 110,
              columnNumber: 21
            }, this) }, void 0, false, {
              fileName: "app/routes/guides/index.tsx",
              lineNumber: 95,
              columnNumber: 17
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [
              " ",
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { className: "text-2xl", children: [
                " ",
                guide.title
              ] }, void 0, true, {
                fileName: "app/routes/guides/index.tsx",
                lineNumber: 117,
                columnNumber: 19
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "opacity-50  group-hover:underline group-hover:opacity-100", children: "Read the guide" }, void 0, false, {
                fileName: "app/routes/guides/index.tsx",
                lineNumber: 118,
                columnNumber: 19
              }, this)
            ] }, void 0, true, {
              fileName: "app/routes/guides/index.tsx",
              lineNumber: 115,
              columnNumber: 17
            }, this)
          ]
        },
        guide.title,
        true,
        {
          fileName: "app/routes/guides/index.tsx",
          lineNumber: 90,
          columnNumber: 15
        },
        this
      );
    }) }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No products found " }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/guides/index.tsx",
    lineNumber: 83,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/guides/index.tsx",
    lineNumber: 82,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/guides/index-Z2ETT2OE.js.map