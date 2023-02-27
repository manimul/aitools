import {
  Layout,
  RecordCover,
  Title,
  tailwind_default,
  useRouteData
} from "/build/_shared/chunk-7RNW3JRB.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-T5F5625V.js";
import "/build/_shared/chunk-B4T4FDK4.js";
import {
  require_groq
} from "/build/_shared/chunk-VFPAK4Q6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import "/build/_shared/chunk-RZ47BF3R.js";
import "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/index.tsx
var import_groq = __toESM(require_groq());
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
  const { records } = useLoaderData();
  const { home } = useRouteData(`root`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    home.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Title, { children: home.title }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 54,
      columnNumber: 23
    }, this) : null,
    records.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 lg:grid-cols-4", children: records.map((record) => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("li", { className: "group relative flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 bg-gradient-to-b from-white to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-y-10 group-hover:translate-x-10 group-hover:opacity-75" }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(RecordCover, { image: record.image, title: record.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col", children: [
        (record == null ? void 0 : record.slug) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
          Link,
          {
            prefetch: "intent",
            to: record == null ? void 0 : record.slug,
            className: "text-bold pt-4 text-xl font-bold tracking-tighter transition-colors duration-100 ease-in-out hover:bg-cyan-400 hover:text-white md:text-3xl",
            children: [
              record.title,
              /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "absolute inset-0" }, void 0, false, {
                fileName: "app/routes/index.tsx",
                lineNumber: 72,
                columnNumber: 23
              }, this)
            ]
          },
          void 0,
          true,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 65,
            columnNumber: 21
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "pt-4 text-xl font-bold", children: record.title }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        (record == null ? void 0 : record.artist) ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { className: "bg-black font-bold leading-none tracking-tighter text-white", children: record.artist }, void 0, false, {
          fileName: "app/routes/index.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/routes/index.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, record._id, true, {
      fileName: "app/routes/index.tsx",
      lineNumber: 58,
      columnNumber: 15
    }, this)) }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 56,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "No records found" }, void 0, false, {
      fileName: "app/routes/index.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/index.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/index.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
export {
  Index as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/index-2Z6SK5EG.js.map
