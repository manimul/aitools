import {
  SanityContent
} from "/build/_shared/chunk-M3IW45AF.js";
import "/build/_shared/chunk-PBYB3QU6.js";
import {
  RecordCover
} from "/build/_shared/chunk-JCYV27SV.js";
import {
  Title
} from "/build/_shared/chunk-Z5YUX75N.js";
import {
  Layout,
  tailwind_default
} from "/build/_shared/chunk-P7CY5RSY.js";
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

// app/routes/guides/$slug.tsx
var import_groq = __toESM(require_groq());
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function GuidePage() {
  var _a, _b, _c;
  const { guide } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "mx-auto max-w-4xl ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "underline", to: "/guides", children: "A howtu.ai guide" }, void 0, false, {
          fileName: "app/routes/guides/$slug.tsx",
          lineNumber: 77,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: guide.title }, void 0, false, {
          fileName: "app/routes/guides/$slug.tsx",
          lineNumber: 80,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this),
      guide.image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        "img",
        {
          className: " my-6 h-auto  w-full object-cover  ",
          src: (0, import_image_url.default)(projectDetails()).image(guide.image.asset._ref).height(500).width(1400).fit("max").auto("format").url(),
          alt: (_a = String(guide.image.title)) != null ? _a : ``,
          loading: "lazy"
        },
        void 0,
        false,
        {
          fileName: "app/routes/guides/$slug.tsx",
          lineNumber: 83,
          columnNumber: 11
        },
        this
      ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: (_b = guide.image.title) != null ? _b : `Missing Record art` }, void 0, false, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 96,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guides/$slug.tsx",
      lineNumber: 75,
      columnNumber: 7
    }, this),
    guide.content && ((_c = guide.content) == null ? void 0 : _c.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "mx-auto max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SanityContent, { value: guide.content }, void 0, false, {
      fileName: "app/routes/guides/$slug.tsx",
      lineNumber: 103,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/guides/$slug.tsx",
      lineNumber: 102,
      columnNumber: 9
    }, this) : null,
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "-mx-32 -mt-32 mb-32 hidden h-screen  max-h-screen border   ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: " absolute top-1/2 z-0 mx-auto -mt-12 ml-48 max-w-6xl ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "underline", to: "/guides", children: "A howtu.ai guide" }, void 0, false, {
          fileName: "app/routes/guides/$slug.tsx",
          lineNumber: 109,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: guide.title }, void 0, false, {
          fileName: "app/routes/guides/$slug.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 108,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full  max-h-screen overflow-hidden  bg-black object-cover  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: guide.image, title: guide.title }, void 0, false, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 114,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guides/$slug.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/guides/$slug.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}
export {
  GuidePage as default,
  links
};
//# sourceMappingURL=/build/routes/guides/$slug-RKKSBHBX.js.map
