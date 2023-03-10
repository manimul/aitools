import {
  Disc,
  Home,
  Tags,
  Users,
  projectDetails
} from "/build/_shared/chunk-YW6GLAJZ.js";
import {
  require_groq
} from "/build/_shared/chunk-VFPAK4Q6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import {
  Box,
  Button,
  Card,
  CopyIcon,
  Flex,
  LeaveIcon,
  MobileDeviceIcon,
  Spinner,
  Studio,
  Text,
  ThemeProvider,
  UndoIcon,
  defineConfig,
  defineField,
  defineType,
  deskTool,
  require_isNumber,
  require_isString,
  require_omit
} from "/build/_shared/chunk-3PXH2B7D.js";
import "/build/_shared/chunk-BPU3GXCB.js";
import "/build/_shared/chunk-WA32A3L3.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import "/build/_shared/chunk-RZ47BF3R.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/remix-utils/browser/react/client-only.js
var import_jsx_runtime = __toESM(require_jsx_runtime());

// node_modules/remix-utils/browser/react/use-hydrated.js
var import_react = __toESM(require_react());
var hydrating = true;
function useHydrated() {
  let [hydrated, setHydrated] = (0, import_react.useState)(() => !hydrating);
  (0, import_react.useEffect)(function hydrate() {
    hydrating = false;
    setHydrated(true);
  }, []);
  return hydrated;
}

// node_modules/remix-utils/browser/react/client-only.js
function ClientOnly({ children, fallback = null }) {
  return useHydrated() ? (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: children() }) : (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: fallback });
}

// app/styles/studio.css
var studio_default = "/build/_assets/studio-7UYMGTOZ.css";

// node_modules/sanity/lib/desk.esm.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
var import_omit = __toESM(require_omit());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());

// app/sanity/schema/category.ts
var category_default = defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: Users,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true }
    })
  ]
});

// app/sanity/schema/tag.ts
var tag_default = defineType({
  name: "tag",
  title: "Tag",
  type: "document",
  icon: Tags,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    })
  ]
});

// app/sanity/schema/home.ts
var home_default = defineType({
  name: "home",
  title: "Home",
  type: "document",
  icon: Home,
  fields: [
    defineField({
      name: "title",
      type: "string"
    }),
    defineField({
      name: "siteTitle",
      type: "string"
    })
  ],
  preview: {
    select: {
      title: "title",
      category: "siteTitle"
    }
  }
});

// app/sanity/schema/product.ts
var product_default = defineType({
  name: "product",
  title: "Record",
  type: "document",
  icon: Disc,
  fieldsets: [
    {
      name: "rating",
      title: "Rating",
      options: { columns: 2 }
    }
  ],
  groups: [
    {
      name: "details",
      title: "Details"
    },
    {
      name: "editorial",
      title: "Editorial"
    },
    {
      name: "features",
      title: "Features"
    }
  ],
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "details"
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      },
      group: "details"
    }),
    defineField({
      name: "referral",
      type: "url",
      group: "details"
    }),
    defineField({
      name: "score",
      type: "number",
      fieldset: "rating"
    }),
    defineField({
      name: "pricing",
      type: "string",
      group: "details"
    }),
    defineField({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      group: "details"
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
      group: "details"
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      group: "editorial"
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [{ type: "image" }],
      group: "editorial"
    }),
    defineField({
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "editorial"
    }),
    defineField({
      name: "overview",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "editorial"
    }),
    defineField({
      name: "ease",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "editorial"
    }),
    defineField({
      name: "support",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "editorial"
    }),
    defineField({
      name: "features",
      type: "array",
      of: [{ type: "feature" }],
      group: "features"
    }),
    defineField({
      name: "pros",
      type: "array",
      of: [{ type: "feature" }],
      group: "features"
    }),
    defineField({
      name: "cons",
      type: "array",
      of: [{ type: "feature" }],
      group: "features"
    })
  ],
  preview: {
    select: {
      title: "title",
      category: "category.title",
      media: "image"
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media
      };
    }
  }
});

// app/sanity/schema/feature.ts
var feature_default = defineType({
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({
      name: "title",
      type: "string"
    })
  ],
  preview: {
    select: {
      title: "title"
    },
    prepare({ title }) {
      return {
        title
      };
    }
  }
});

// app/sanity/schema/index.ts
var schema_default = [product_default, category_default, feature_default, tag_default, home_default];

// node_modules/sanity-plugin-iframe-pane/lib/index.esm.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_react35 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useBoolean/useBoolean.js
var import_react3 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useCopyToClipboard/useCopyToClipboard.js
var import_react4 = __toESM(require_react());
var __awaiter = function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e2) {
        reject(e2);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function useCopyToClipboard() {
  const [copiedText, setCopiedText] = (0, import_react4.useState)(null);
  const copy = (text) => __awaiter(this, void 0, void 0, function* () {
    if (!(navigator === null || navigator === void 0 ? void 0 : navigator.clipboard)) {
      console.warn("Clipboard not supported");
      return false;
    }
    try {
      yield navigator.clipboard.writeText(text);
      setCopiedText(text);
      return true;
    } catch (error) {
      console.warn("Copy failed", error);
      setCopiedText(null);
      return false;
    }
  });
  return [copiedText, copy];
}
var useCopyToClipboard_default = useCopyToClipboard;

// node_modules/usehooks-ts/dist/esm/useCountdown/useCountdown.js
var import_react5 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useCounter/useCounter.js
var import_react6 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useDebounce/useDebounce.js
var import_react7 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useEffectOnce/useEffectOnce.js
var import_react8 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useElementSize/useElementSize.js
var import_react9 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useEventCallback/useEventCallback.js
var import_react10 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useEventListener/useEventListener.js
var import_react11 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useFetch/useFetch.js
var import_react12 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useHover/useHover.js
var import_react13 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useImageOnLoad/useImageOnLoad.js
var import_react14 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIntersectionObserver/useIntersectionObserver.js
var import_react15 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useInterval/useInterval.js
var import_react16 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsClient/useIsClient.js
var import_react17 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsFirstRender/useIsFirstRender.js
var import_react18 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsMounted/useIsMounted.js
var import_react19 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useIsomorphicLayoutEffect/useIsomorphicLayoutEffect.js
var import_react20 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useLocalStorage/useLocalStorage.js
var import_react21 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useLockedBody/useLockedBody.js
var import_react22 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useMap/useMap.js
var import_react23 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useMediaQuery/useMediaQuery.js
var import_react24 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useReadLocalStorage/useReadLocalStorage.js
var import_react25 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useScreen/useScreen.js
var import_react26 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useScript/useScript.js
var import_react27 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useSessionStorage/useSessionStorage.js
var import_react28 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useStep/useStep.js
var import_react29 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useTernaryDarkMode/useTernaryDarkMode.js
var import_react30 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useTimeout/useTimeout.js
var import_react31 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useToggle/useToggle.js
var import_react32 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useUpdateEffect/useUpdateEffect.js
var import_react33 = __toESM(require_react());

// node_modules/usehooks-ts/dist/esm/useWindowSize/useWindowSize.js
var import_react34 = __toESM(require_react());

// node_modules/sanity-plugin-iframe-pane/lib/index.esm.js
function e(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    t2 && (i2 = i2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, i2);
  }
  return n2;
}
function t(t2) {
  for (var i2 = 1; i2 < arguments.length; i2++) {
    var r2 = null != arguments[i2] ? arguments[i2] : {};
    i2 % 2 ? e(Object(r2), true).forEach(function(e2) {
      n(t2, e2, r2[e2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(r2)) : e(Object(r2)).forEach(function(e2) {
      Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(r2, e2));
    });
  }
  return t2;
}
function n(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
var O = { desktop: { width: "100%", height: "100%", maxHeight: "100%" }, mobile: { width: 414, height: "100%", maxHeight: 736 } };
var j = "desktop";
function w(e2) {
  const { document: n2, options: w2 } = e2, { url: k, defaultSize: x = j, reload: P, attributes: S = {} } = w2, [z, C] = (0, import_react35.useState)(k && "string" == typeof k ? k : ""), [D, E] = (0, import_react35.useState)((null == O ? void 0 : O[x]) ? x : j), B = (0, import_react35.useRef)(null), H = (0, import_react35.useRef)(null), { displayed: R } = n2, [, _] = useCopyToClipboard_default();
  function I() {
    (null == H ? void 0 : H.current) && (H.current.src = H.current.src);
  }
  return (0, import_react35.useEffect)(() => {
    ((null == P ? void 0 : P.revision) || 0 == (null == P ? void 0 : P.revision)) && setTimeout(() => {
      I();
    }, Number(null == P ? void 0 : P.revision));
  }, [R._rev, null == P ? void 0 : P.revision]), (0, import_react35.useEffect)(() => {
    "function" == typeof k && (async () => {
      const e3 = "function" == typeof k ? await k(R) : "";
      e3 !== z && e3 && "string" == typeof e3 && C(e3);
    })();
  }, [R._rev]), z && "string" == typeof z ? (0, import_jsx_runtime3.jsxs)(ThemeProvider, { children: [(0, import_jsx_runtime3.jsx)("textarea", { style: { position: "absolute", pointerEvents: "none", opacity: 0 }, ref: B, value: z, readOnly: true, tabIndex: -1 }), (0, import_jsx_runtime3.jsxs)(Flex, { direction: "column", style: { height: "100%" }, children: [(0, import_jsx_runtime3.jsx)(Card, { padding: 2, borderBottom: true, children: (0, import_jsx_runtime3.jsxs)(Flex, { align: "center", gap: 2, children: [(0, import_jsx_runtime3.jsx)(Flex, { align: "center", gap: 1, children: (0, import_jsx_runtime3.jsx)(Button, { fontSize: [1], padding: 2, tone: "primary", mode: "mobile" === D ? "default" : "ghost", icon: MobileDeviceIcon, onClick: () => E("mobile" === D ? "desktop" : "mobile") }) }), (0, import_jsx_runtime3.jsx)(Box, { flex: 1, children: (0, import_jsx_runtime3.jsx)(Text, { size: 0, textOverflow: "ellipsis", children: z }) }), (0, import_jsx_runtime3.jsxs)(Flex, { align: "center", gap: 1, children: [(null == P ? void 0 : P.button) ? (0, import_jsx_runtime3.jsx)(Button, { fontSize: [1], padding: 2, icon: UndoIcon, title: "Reload", "aria-label": "Reload", onClick: () => I() }) : null, (0, import_jsx_runtime3.jsx)(Button, { fontSize: [1], icon: CopyIcon, padding: [2], title: "Copy", "aria-label": "Copy", onClick: () => {
    var e3;
    (null == (e3 = null == B ? void 0 : B.current) ? void 0 : e3.value) && _(B.current.value);
  } }), (0, import_jsx_runtime3.jsx)(Button, { fontSize: [1], icon: LeaveIcon, padding: [2], text: "Open", tone: "primary", onClick: () => window.open(z) })] })] }) }), (0, import_jsx_runtime3.jsx)(Card, { tone: "transparent", padding: "mobile" === D ? 2 : 0, style: { height: "100%" }, children: (0, import_jsx_runtime3.jsx)(Flex, { align: "center", justify: "center", style: { height: "100%" }, children: (0, import_jsx_runtime3.jsx)("iframe", t({ ref: H, title: "preview", style: O[D], frameBorder: "0", src: z }, S)) }) })] })] }) : (0, import_jsx_runtime3.jsx)(ThemeProvider, { children: (0, import_jsx_runtime3.jsx)(Flex, { padding: 5, align: "center", justify: "center", children: (0, import_jsx_runtime3.jsx)(Spinner, {}) }) });
}

// app/sanity/structure/getSecret.ts
var import_groq = __toESM(require_groq());
var SECRET_ID = `sanity.preview.secret`;
var query = (ttl) => import_groq.default`*[_id == $id && dateTime(_updatedAt) > dateTime(now()) - ${ttl}][0].secret`;
var tag = "preview.secret";
async function getSecret(client, id, createIfNotExists) {
  const secret = await client.fetch(
    query(createIfNotExists ? 60 * 30 : 60 * 60),
    { id }
  );
  if (!secret && createIfNotExists) {
    const newSecret = createIfNotExists === true ? Math.random().toString(36).slice(2) : createIfNotExists();
    try {
      const patch = client.patch(id).set({ secret: newSecret });
      await client.transaction().createIfNotExists({ _id: id, _type: id }).patch(patch).commit({ tag });
      return newSecret;
    } catch (err) {
      console.error(
        "Failed to create a new preview secret. Ensure the `client` has a `token` specified that has `write` permissions.",
        err
      );
    }
  }
  return secret;
}

// app/sanity/structure/resolvePreviewUrl.ts
async function resolvePreviewUrl(doc, client) {
  var _a, _b;
  const remoteUrl = `https://www.example.com`;
  const baseUrl = ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.hostname) === "localhost" ? window.origin : remoteUrl;
  const previewUrl = new URL("/resource/preview", baseUrl);
  if (!((_b = doc == null ? void 0 : doc.slug) == null ? void 0 : _b.current)) {
    return previewUrl.toString();
  }
  previewUrl.searchParams.set("slug", doc.slug.current);
  const secret = await getSecret(client, SECRET_ID, true);
  if (secret) {
    previewUrl.searchParams.set("secret", secret);
  }
  return previewUrl.toString();
}

// app/sanity/structure/index.ts
var structure = (S) => S.list().id("root").title("Content").items([
  S.documentListItem().schemaType("home").icon(Home).id("home").title("Home"),
  S.divider(),
  S.documentTypeListItem("product").title("Products").icon(Disc),
  S.documentTypeListItem("category").title("Category").icon(Users),
  S.divider(),
  S.documentTypeListItem("tag").title("Tags").icon(Tags)
]);
var defaultDocumentNode = (S, { schemaType, getClient }) => {
  const { apiVersion } = projectDetails();
  const client = getClient({ apiVersion });
  switch (schemaType) {
    case `product`:
      return S.document().views([
        S.view.form(),
        S.view.component(w).options({
          url: (doc) => resolvePreviewUrl(doc, client),
          reload: { button: true }
        }).title("Preview")
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

// sanity.config.ts
var config = defineConfig({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [deskTool({ structure, defaultDocumentNode })],
  basePath: `/studio`,
  schema: {
    types: schema_default
  }
});

// app/routes/studio/$.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var meta = () => ({
  title: "Sanity Studio",
  robots: "noindex"
});
var links = () => {
  return [{ rel: "stylesheet", href: studio_default }];
};
function StudioPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    Studio,
    {
      config
    },
    void 0,
    false,
    {
      fileName: "app/routes/studio/$.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  ) }, void 0, false, {
    fileName: "app/routes/studio/$.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
export {
  StudioPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/studio/$-VA7Q2MTW.js.map
