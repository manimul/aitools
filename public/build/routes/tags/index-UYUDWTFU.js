import {
  Title
} from "/build/_shared/chunk-Z5YUX75N.js";
import {
  Layout,
  tailwind_default
} from "/build/_shared/chunk-MXJIX5CJ.js";
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

// app/routes/tags/index.tsx
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
  const { tags } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("header", { className: "space-y-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: "All Tags" }, void 0, false, {
      fileName: "app/routes/tags/index.tsx",
      lineNumber: 58,
      columnNumber: 11
    }, this) }, void 0, false, {
      fileName: "app/routes/tags/index.tsx",
      lineNumber: 57,
      columnNumber: 9
    }, this),
    tags.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: " flex flex-wrap", children: tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      Link,
      {
        to: "/tags/" + tag.slug,
        className: "rounded-xl mr-4 mb-4 w-auto  rounded-full border border-black px-2 font-mono text-4xl   lowercase dark:border-white",
        children: [
          tag.title,
          " "
        ]
      },
      tag._key,
      true,
      {
        fileName: "app/routes/tags/index.tsx",
        lineNumber: 63,
        columnNumber: 15
      },
      this
    )) }, void 0, false, {
      fileName: "app/routes/tags/index.tsx",
      lineNumber: 61,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: " No products found " }, void 0, false, {
      fileName: "app/routes/tags/index.tsx",
      lineNumber: 73,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/tags/index.tsx",
    lineNumber: 56,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/tags/index.tsx",
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/tags/index-UYUDWTFU.js.map
