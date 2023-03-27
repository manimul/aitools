import {
  SanityContent
} from "/build/_shared/chunk-VKM3AXLT.js";
import "/build/_shared/chunk-PBYB3QU6.js";
import {
  RecordCover
} from "/build/_shared/chunk-NSFUBKRX.js";
import "/build/_shared/chunk-K3XBZMEA.js";
import "/build/_shared/chunk-UXONZQWX.js";
import {
  Layout,
  Title,
  tailwind_default
} from "/build/_shared/chunk-KEYK25BR.js";
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

// app/routes/guides/$slug.tsx
var import_groq = __toESM(require_groq());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
function GuidePage() {
  var _a;
  const { guide } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: " -mx-32 -mt-32 mb-32 h-screen  max-h-screen border   ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: " absolute top-1/2 z-0 mx-auto -mt-12 ml-48 max-w-6xl ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { className: "underline", to: "/guides", children: "A howtu.ai guide" }, void 0, false, {
          fileName: "app/routes/guides/$slug.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: guide.title }, void 0, false, {
          fileName: "app/routes/guides/$slug.tsx",
          lineNumber: 76,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "h-full  max-h-screen  overflow-hidden ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: guide.image, title: guide.title }, void 0, false, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 79,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/routes/guides/$slug.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/guides/$slug.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    guide.content && ((_a = guide.content) == null ? void 0 : _a.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("article", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(SanityContent, { value: guide.content }, void 0, false, {
      fileName: "app/routes/guides/$slug.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/guides/$slug.tsx",
      lineNumber: 83,
      columnNumber: 9
    }, this) : null
  ] }, void 0, true, {
    fileName: "app/routes/guides/$slug.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
export {
  GuidePage as default,
  links
};
//# sourceMappingURL=/build/routes/guides/$slug-ND63GWFU.js.map
