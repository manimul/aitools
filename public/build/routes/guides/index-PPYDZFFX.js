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

// app/routes/guides/index.tsx
var import_groq = __toESM(require_groq());
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
  const { guides } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "All How.ai Guides" }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 72,
      columnNumber: 9
    }, this),
    guides.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("section", { className: "grid grid-cols-3", children: guides.map((guide) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/guides/" + guide.slug, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: guide.image, title: guide.title }, void 0, false, {
        fileName: "app/routes/guides/index.tsx",
        lineNumber: 80,
        columnNumber: 19
      }, this) }, void 0, false, {
        fileName: "app/routes/guides/index.tsx",
        lineNumber: 79,
        columnNumber: 17
      }, this),
      guide.title
    ] }, guide.title, true, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 78,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 76,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No products found " }, void 0, false, {
      fileName: "app/routes/guides/index.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/guides/index.tsx",
    lineNumber: 71,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/guides/index.tsx",
    lineNumber: 70,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/guides/index-PPYDZFFX.js.map
