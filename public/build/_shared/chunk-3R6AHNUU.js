import {
  SanityContent
} from "/build/_shared/chunk-VKM3AXLT.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import {
  RecordCover
} from "/build/_shared/chunk-NSFUBKRX.js";
import {
  projectDetails
} from "/build/_shared/chunk-K3XBZMEA.js";
import {
  Layout,
  Title
} from "/build/_shared/chunk-KEYK25BR.js";
import {
  Link
} from "/build/_shared/chunk-6OT2F7ZE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@sanity/preview-kit/dist/index.js
var import_react = __toESM(require_react(), 1);

// node_modules/suspend-react/dist/index.js
var globalCache = [];
function shallowEqualArrays(arrA, arrB, equal = (a, b) => a === b) {
  if (arrA === arrB)
    return true;
  if (!arrA || !arrB)
    return false;
  const len = arrA.length;
  if (arrB.length !== len)
    return false;
  for (let i = 0; i < len; i++)
    if (!equal(arrA[i], arrB[i]))
      return false;
  return true;
}
function query(fn, keys, preload = false, config = {}) {
  for (const entry2 of globalCache) {
    if (shallowEqualArrays(keys, entry2.keys, entry2.equal)) {
      if (preload)
        return void 0;
      if (Object.prototype.hasOwnProperty.call(entry2, "error"))
        throw entry2.error;
      if (Object.prototype.hasOwnProperty.call(entry2, "response"))
        return entry2.response;
      if (!preload)
        throw entry2.promise;
    }
  }
  const entry = {
    keys,
    equal: config.equal,
    promise: fn(...keys).then((response) => entry.response = response).then(() => {
      if (config.lifespan && config.lifespan > 0) {
        setTimeout(() => {
          const index = globalCache.indexOf(entry);
          if (index !== -1)
            globalCache.splice(index, 1);
        }, config.lifespan);
      }
    }).catch((error) => entry.error = error)
  };
  globalCache.push(entry);
  if (!preload)
    throw entry.promise;
  return void 0;
}
var suspend = (fn, keys, config) => query(fn, keys, false, config);

// node_modules/@sanity/preview-kit/dist/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var _checkAuth = async (projectId2, token) => {
  const headers = token ? {
    Authorization: "Bearer ".concat(token)
  } : void 0;
  const res = await fetch("https://".concat(projectId2, ".api.sanity.io/v1/users/me"), {
    credentials: "include",
    headers
  });
  const json = await res.json();
  return Boolean(json == null ? void 0 : json.id);
};
var _lazyGroqStore = async () => {
  const pkg = await import("/build/_shared/index.browser-YPACSZYC.js");
  const {
    groqStore
  } = "default" in pkg ? pkg.default : pkg;
  return groqStore;
};
var _lazyEventSourcePolyfill = async () => {
  const pkg = await import("/build/_shared/eventsource-UXHCZPGJ.js");
  const {
    EventSourcePolyfill
  } = "default" in pkg ? pkg.default : pkg;
  return EventSourcePolyfill;
};
function useParams(params) {
  const stringifiedParams = (0, import_react.useMemo)(() => JSON.stringify(params || {}), [params]);
  return (0, import_react.useMemo)(() => JSON.parse(stringifiedParams), [stringifiedParams]);
}
var _definePreview = (_ref) => {
  let {
    projectId: projectId2,
    dataset: dataset2,
    documentLimit = 3e3,
    subscriptionThrottleMs = 10,
    overlayDrafts = true,
    importEventSourcePolyfill,
    importGroqStore,
    preload,
    onPublicAccessOnly,
    checkAuth,
    includeTypes
  } = _ref;
  if (!projectId2) {
    console.warn("No projectId set for createPreviewHook, returning dummy hook");
    const usePreview2 = function usePreview22() {
      console.warn("The hook returned by createPreviewHook is a dummy as there is no projectId set, returning null");
      return null;
    };
    return usePreview2;
  }
  let store;
  return function usePreview2(token, query2, _params, _serverSnapshot) {
    if (typeof document === "undefined") {
      throw new Error("Calling usePreview outside a browser environment isn't supported. Ensure the component using the hook is only rendering on the client. For example by wrapping it in PreviewSuspense.");
    }
    if (!token && token !== null) {
      throw new Error("No `token` given to usePreview hook, if this is intentional then set it to `null`");
    }
    const [serverSnapshot] = (0, import_react.useState)(() => _serverSnapshot);
    const params = useParams(_params);
    if (!store) {
      if (onPublicAccessOnly) {
        const hasAuth = checkAuth(projectId2, token);
        if (!hasAuth) {
          onPublicAccessOnly();
        }
      }
      const groqStore = importGroqStore();
      store = groqStore({
        projectId: projectId2,
        dataset: dataset2,
        documentLimit,
        subscriptionThrottleMs,
        includeTypes,
        token: token === null ? void 0 : token,
        EventSource: token === null ? void 0 : importEventSourcePolyfill(),
        listen: true,
        overlayDrafts
      });
    }
    const initial = serverSnapshot != null ? serverSnapshot : preload(store, query2, params);
    const syncStore = (0, import_react.useMemo)(() => {
      let snapshot = initial;
      return {
        getServerSnapshot: serverSnapshot === void 0 ? void 0 : () => serverSnapshot,
        getSnapshot: () => snapshot,
        subscribe: (onStoreChange) => {
          const subscription = store.subscribe(query2, typeof params === "undefined" ? {} : params, (err, result) => {
            if (err) {
              console.error("Error thrown in the usePreviewHook subscription", err);
              throw err;
            } else {
              snapshot = result;
              onStoreChange();
            }
          });
          return () => subscription.unsubscribe();
        }
      };
    }, [initial, params, query2, serverSnapshot]);
    (0, import_react.useEffect)(() => {
      const callback = () => {
        store.close();
      };
      window.addEventListener("beforeunload", callback);
      return () => window.removeEventListener("beforeunload", callback);
    }, []);
    return (0, import_react.useSyncExternalStore)(syncStore.subscribe, syncStore.getSnapshot, syncStore.getServerSnapshot);
  };
};
var _preloadQuery = (store, query2, params) => store.query(query2, params);
var definePreview = (config) => _definePreview({
  ...config,
  importEventSourcePolyfill: () => suspend(() => _lazyEventSourcePolyfill(), ["@sanity/preview-kit", "event-source-polyfill"]),
  importGroqStore: () => suspend(() => _lazyGroqStore(), ["@sanity/preview-kit", "@sanity/groq-store"]),
  preload: (store, query2, params) => suspend(() => _preloadQuery(store, query2, params), ["@sanity/preview-kit", "preload", query2, JSON.stringify(params != null ? params : {})]),
  checkAuth: (projectId2, token) => suspend(() => _checkAuth(projectId2, token), ["@sanity/preview-kit", "checkAuth", projectId2, token])
});
function PreviewSuspense(_ref2) {
  let {
    children,
    fallback
  } = _ref2;
  const [mounted, mount] = (0, import_react.useReducer)(() => true, false);
  (0, import_react.useEffect)(mount, [mount]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
    fallback,
    children: mounted ? children : fallback
  });
}

// app/components/ExitPreview.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function ExitPreview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("form", { className: "pointer-events-auto", action: "/resource/preview", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "bg-black p-4 font-bold text-white", type: "submit", children: "Exit Preview Mode" }, void 0, false, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Product.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function Record(props) {
  const {
    _id,
    title,
    referral,
    category,
    categoryslug,
    tags,
    content,
    overview,
    support,
    ease,
    image,
    features,
    pros,
    cons,
    score,
    pricing
  } = props;
  const nonYellowStar = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      className: "h-5 w-5 text-gray-300 dark:text-gray-500",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, void 0, false, {
        fileName: "app/components/Product.tsx",
        lineNumber: 42,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Product.tsx",
      lineNumber: 35,
      columnNumber: 5
    },
    this
  );
  const yellowStar = /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      className: "h-5 w-5 text-yellow-400",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, void 0, false, {
        fileName: "app/components/Product.tsx",
        lineNumber: 53,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "app/components/Product.tsx",
      lineNumber: 46,
      columnNumber: 5
    },
    this
  );
  const starIcons = Array(5).fill(nonYellowStar).map((star, index) => {
    if (index < (score != null ? score : 0)) {
      return yellowStar;
    }
    return star;
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: " mb-6 border p-4 md:p-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto  grid  gap-4 md:py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "order-2 mr-auto space-y-2 place-self-center md:order-1 lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "space-y-4", children: [
        category ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "  text-xs uppercase tracking-widest opacity-70 ", children: [
          "Category:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Link,
            {
              to: "/categories/" + categoryslug,
              className: "text-xs underline",
              children: category
            },
            void 0,
            false,
            {
              fileName: "app/components/Product.tsx",
              lineNumber: 75,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 73,
          columnNumber: 17
        }, this) : null,
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Title, { children: title }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 83,
          columnNumber: 24
        }, this) : null,
        content && (content == null ? void 0 : content.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: " text-6xl  italic  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SanityContent, { value: content }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this) : null,
        tags ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex flex-wrap space-x-2 space-y-2", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "w-full text-xs uppercase tracking-widest opacity-70 ", children: "Tags:" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 92,
            columnNumber: 19
          }, this),
          tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            Link,
            {
              to: "/tags/" + tag.slug,
              className: "rounded-xl w-auto  rounded-full border border-black px-2 font-mono text-sm   lowercase dark:border-white",
              children: [
                tag.title,
                " "
              ]
            },
            tag._key,
            true,
            {
              fileName: "app/components/Product.tsx",
              lineNumber: 96,
              columnNumber: 21
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 91,
          columnNumber: 17
        }, this) : null,
        score ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-xs  uppercase tracking-widest opacity-70 ", children: "Score:" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 108,
            columnNumber: 19
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-4xl text-yellow-500" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 111,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "flex items-center", children: [
            starIcons,
            /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "ml-2 text-sm font-medium text-gray-500 dark:text-gray-400", children: [
              score,
              " out of 5"
            ] }, void 0, true, {
              fileName: "app/components/Product.tsx",
              lineNumber: 114,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Product.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 107,
          columnNumber: 17
        }, this) : null,
        pricing ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-xs  uppercase tracking-widest opacity-70 ", children: "Price Range:" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 122,
            columnNumber: 19
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "text-bold font-serif text-2xl italic text-green-600", children: [
            " ",
            pricing
          ] }, void 0, true, {
            fileName: "app/components/Product.tsx",
            lineNumber: 125,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 121,
          columnNumber: 17
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          Link,
          {
            to: "#overview",
            className: " mr-4 inline-flex w-full justify-center border-2 border-blue-300 py-4 px-12 text-blue-600 dark:text-blue-300 md:w-auto ",
            children: "Learn more"
          },
          void 0,
          false,
          {
            fileName: "app/components/Product.tsx",
            lineNumber: 131,
            columnNumber: 15
          },
          this
        ),
        referral ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            className: " from-blue-5 200 inline-flex w-full justify-center border-2 border-blue-500 bg-blue-500 py-4 px-12\n                  text-white md:w-auto",
            href: referral,
            children: [
              "Try ",
              title,
              " now"
            ]
          },
          void 0,
          true,
          {
            fileName: "app/components/Product.tsx",
            lineNumber: 138,
            columnNumber: 17
          },
          this
        ) : null
      ] }, void 0, true, {
        fileName: "app/components/Product.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Product.tsx",
        lineNumber: 70,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "order-1 md:order-2 lg:col-span-5 lg:mt-0 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RecordCover, { image, title }, void 0, false, {
        fileName: "app/components/Product.tsx",
        lineNumber: 149,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Product.tsx",
        lineNumber: 148,
        columnNumber: 11
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Product.tsx",
      lineNumber: 69,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/components/Product.tsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("article", { className: "flex flex-col items-start gap-4 lg:flex-row lg:gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid-gap-4 top-1 mx-auto grid grid-cols-1 space-y-4 md:sticky md:max-w-[70vw]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(RecordCover, { image, title }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 156,
          columnNumber: 11
        }, this),
        features && (features == null ? void 0 : features.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 rounded border bg-[#ffffff] p-4 dark:divide-gray-900 dark:bg-[#111111]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "featureing-tighter py-3 text-2xl font-bold", children: (features == null ? void 0 : features.length) === 1 ? `1 Great Feature` : `${features == null ? void 0 : features.length} Key Features` }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 160,
            columnNumber: 17
          }, this),
          features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
            "li",
            {
              className: "flex items-center justify-between py-3",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg", children: feature.title }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 170,
                columnNumber: 21
              }, this)
            },
            feature._key,
            false,
            {
              fileName: "app/components/Product.tsx",
              lineNumber: 166,
              columnNumber: 19
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 159,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 158,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/Product.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: " flex flex-shrink-0 flex-col gap-4 md:gap-4 lg:w-2/3", children: [
        overview && (overview == null ? void 0 : overview.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { id: "overview", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl", children: "Overview" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 180,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SanityContent, { value: overview }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 179,
          columnNumber: 13
        }, this) : null,
        ease && (ease == null ? void 0 : ease.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "mt-6 border-t border-gray-400 py-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl ", children: "Ease of Use" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 186,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SanityContent, { value: ease }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 185,
          columnNumber: 13
        }, this) : null,
        support && (support == null ? void 0 : support.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { className: "mt-6 border-t border-gray-400 py-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-2xl ", children: "Customer Support" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 192,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(SanityContent, { value: support }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 191,
          columnNumber: 13
        }, this) : null,
        referral ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          "a",
          {
            href: referral,
            className: "mr-auto w-auto border-2 border-purple-500 py-4 px-12 text-purple-500",
            children: "Try Out Now"
          },
          void 0,
          false,
          {
            fileName: "app/components/Product.tsx",
            lineNumber: 197,
            columnNumber: 13
          },
          this
        ) : null,
        pros && cons && (pros == null ? void 0 : pros.length) > 0 && (cons == null ? void 0 : cons.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: " py-3 text-2xl font-bold", children: "Pros & Cons" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 207,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "grid divide-x divide-gray-100 dark:divide-gray-900  md:grid-cols-2", children: [
            pros && (pros == null ? void 0 : pros.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { children: "Pros" }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 211,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: pros.map((pro) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
                "li",
                {
                  className: "flex items-center justify-between py-3",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg", children: [
                    "\u{1F44D} ",
                    pro.title
                  ] }, void 0, true, {
                    fileName: "app/components/Product.tsx",
                    lineNumber: 218,
                    columnNumber: 27
                  }, this)
                },
                pro._key,
                false,
                {
                  fileName: "app/components/Product.tsx",
                  lineNumber: 214,
                  columnNumber: 25
                },
                this
              )) }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 212,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Product.tsx",
              lineNumber: 210,
              columnNumber: 19
            }, this) : null,
            cons && (cons == null ? void 0 : cons.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h2", { className: "text-sm uppercase", children: "Cons" }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 226,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("ul", { className: " grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: cons.map((con) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: " py-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("h3", { className: "text-lg", children: [
                  "\u{1F44E} ",
                  con.title
                ] }, void 0, true, {
                  fileName: "app/components/Product.tsx",
                  lineNumber: 231,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "text-lg", children: [
                  " ",
                  con.description
                ] }, void 0, true, {
                  fileName: "app/components/Product.tsx",
                  lineNumber: 232,
                  columnNumber: 27
                }, this)
              ] }, con._key, true, {
                fileName: "app/components/Product.tsx",
                lineNumber: 230,
                columnNumber: 25
              }, this)) }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 228,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Product.tsx",
              lineNumber: 225,
              columnNumber: 19
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/components/Product.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/Product.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Product.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Product.tsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
var { projectId, dataset } = projectDetails();
var usePreview = definePreview({ projectId, dataset });
function PreviewRecord(props) {
  const { query: query2, params, token } = props;
  const data = usePreview(token != null ? token : null, query2, params);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ExitPreview, {}, void 0, false, {
      fileName: "app/components/Product.tsx",
      lineNumber: 263,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(Record, { ...data }, void 0, false, {
      fileName: "app/components/Product.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Product.tsx",
    lineNumber: 262,
    columnNumber: 5
  }, this);
}

export {
  PreviewSuspense,
  Record,
  PreviewRecord
};
//# sourceMappingURL=/build/_shared/chunk-3R6AHNUU.js.map
