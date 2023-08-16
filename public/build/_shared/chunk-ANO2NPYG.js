import {
  Moon,
  Sun
} from "/build/_shared/chunk-IROXDNAB.js";
import {
  Link,
  useFetcher,
  useLoaderData,
  useMatches
} from "/build/_shared/chunk-6OT2F7ZE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/remix-utils/browser/react/use-route-data.js
function useRouteData(routeId) {
  var _a;
  return (_a = useMatches().find((match) => match.id === routeId)) === null || _a === void 0 ? void 0 : _a.data;
}

// app/components/Logo.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function Logo() {
  const { home } = useRouteData(`root`);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { className: "featureing-tighter font-mono text-lg font-bold text-black dark:text-white lg:text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/", children: home.siteTitle }, void 0, false, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "border-t border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Logo, {}, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/ThemeToggle.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ThemeToggle() {
  const cookieToggle = useFetcher();
  const { themePreference } = useLoaderData();
  const isDarkMode = themePreference === `dark`;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(cookieToggle.Form, { method: "post", action: "/resource/toggle-theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { type: "submit", disabled: cookieToggle.state === "submitting", children: [
    isDarkMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Sun, { className: "h-auto w-4" }, void 0, false, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 14,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Moon, { className: "h-auto w-4" }, void 0, false, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 14,
      columnNumber: 56
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sr-only select-none", children: [
      isDarkMode ? `Light` : `Dark`,
      " Mode"
    ] }, void 0, true, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "z-10 w-full border-b border-gray-100 backdrop-blur-lg transition-colors duration-1000 ease-in-out dark:border-gray-900 md:fixed", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "container  mx-auto items-center justify-between p-4 md:flex lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Logo, {}, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 10,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "space-x-6 font-mono ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/", children: "Home" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/tools", children: "All AI Tools" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 13,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/categories", children: "AI Tool Categories" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 14,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/guides", children: "Howtu.ai Guides" }, void 0, false, {
        fileName: "app/components/Header.tsx",
        lineNumber: 15,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Header.tsx",
      lineNumber: 11,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ThemeToggle, {}, void 0, false, {
      fileName: "app/components/Header.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Header.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/Header.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/components/Layout.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
function Layout(props) {
  const { children } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Header, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "container mx-auto p-4  lg:p-12 lg:pt-32", children }, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, false, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-G62NLD7Q.css";

export {
  useRouteData,
  Layout,
  tailwind_default
};
//# sourceMappingURL=/build/_shared/chunk-ANO2NPYG.js.map
