var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_styled_components = require("styled-components"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1;
    if (new URL(request.url).pathname.startsWith("/studio")) {
      let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(
        sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }))
      ), styles = sheet.getStyleTags();
      return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), resolve(
        new import_node.Response("<!DOCTYPE html>" + markup, {
          status: responseStatusCode,
          headers: responseHeaders
        })
      );
    }
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady: () => {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_groq = __toESM(require("groq")), import_zod2 = require("zod");

// app/sanity/client.ts
var import_client = require("@sanity/client");

// app/sanity/projectDetails.ts
var projectDetails = () => {
  let {
    SANITY_PUBLIC_PROJECT_ID,
    SANITY_PUBLIC_DATASET,
    SANITY_PUBLIC_API_VERSION
  } = typeof document > "u" ? process.env : window.ENV;
  return {
    projectId: SANITY_PUBLIC_PROJECT_ID ?? "hw4meujw",
    dataset: SANITY_PUBLIC_DATASET ?? "production",
    apiVersion: SANITY_PUBLIC_API_VERSION ?? "2022-09-19"
  };
};

// app/sanity/client.ts
var client = (0, import_client.createClient)({
  ...projectDetails(),
  useCdn: !0
}), previewClient = (0, import_client.createClient)({
  ...projectDetails(),
  useCdn: !1,
  token: process.env.SANITY_READ_TOKEN
}), getClient = (previewMode = !1) => previewMode ? previewClient : client, writeClient = (0, import_client.createClient)({
  ...projectDetails(),
  useCdn: !1,
  token: process.env.SANITY_WRITE_TOKEN
});

// app/types/home.ts
var import_zod = require("zod"), homeZ = import_zod.z.object({
  title: import_zod.z.string().nullable(),
  siteTitle: import_zod.z.string().nullable()
});

// app/cookies.ts
var import_node2 = require("@remix-run/node"), themePreferenceCookie = (0, import_node2.createCookie)("themePreference", {
  path: "/"
});

// app/lib/getBodyClassNames.ts
function getBodyClassNames(themePreference) {
  return [
    "transition-colors duration-1000 ease-in-out min-h-screen",
    (!themePreference && typeof document < "u" ? window.matchMedia("(prefers-color-scheme: dark)").matches : themePreference === "dark") ? "dark bg-black text-white" : "bg-white text-black"
  ].join(" ").trim();
}

// app/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
}), links = () => [
  { rel: "preconnect", href: "https://cdn.sanity.io" },
  { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  { rel: "preconnect", href: "https://fonts.googleapis.com", crossOrigin: "anonymous" },
  {
    href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@500;700&family=Inter:wght@500;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap",
    rel: "stylesheet"
  }
], loader = async ({ request }) => {
  let cookieHeader = request.headers.get("Cookie"), cookie = await themePreferenceCookie.parse(cookieHeader) || {}, themePreference = import_zod2.z.union([import_zod2.z.literal("dark"), import_zod2.z.literal("light")]).optional().parse(cookie.themePreference), query2 = import_groq.default`*[_id == "home"][0]{
    title,
    siteTitle
  }`, home = await getClient().fetch(query2).then((res) => res ? homeZ.parse(res) : null);
  return (0, import_node3.json)({
    home,
    themePreference,
    ENV: {
      SANITY_PUBLIC_PROJECT_ID: process.env.SANITY_PUBLIC_PROJECT_ID,
      SANITY_PUBLIC_DATASET: process.env.SANITY_PUBLIC_DATASET,
      SANITY_PUBLIC_API_VERSION: process.env.SANITY_PUBLIC_API_VERSION
    }
  });
};
function App() {
  let { ENV, themePreference } = (0, import_react2.useLoaderData)(), { pathname } = (0, import_react2.useLocation)(), isStudioRoute = pathname.startsWith("/studio"), bodyClassNames = getBodyClassNames(themePreference);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {}),
      isStudioRoute && typeof document > "u" ? "__STYLES__" : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: bodyClassNames, children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(ENV)}`
          }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// app/routes/resource/toggle-theme.ts
var toggle_theme_exports = {};
__export(toggle_theme_exports, {
  action: () => action,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
var action = async ({ request }) => {
  let cookieHeader = request.headers.get("Cookie"), themePreference = (await themePreferenceCookie.parse(cookieHeader) || {}).themePreference === "dark" ? "light" : "dark";
  return (0, import_node4.json)(
    { themePreference },
    {
      headers: {
        "Set-Cookie": await themePreferenceCookie.serialize({
          themePreference
        })
      }
    }
  );
}, loader2 = () => (0, import_node4.redirect)("/", { status: 404 });

// app/routes/resource/preview.ts
var preview_exports = {};
__export(preview_exports, {
  action: () => action2,
  loader: () => loader3
});
var import_node6 = require("@remix-run/node"), import_groq3 = __toESM(require("groq"));

// app/sanity/structure/getSecret.ts
var import_groq2 = __toESM(require("groq")), SECRET_ID = "sanity.preview.secret", query = (ttl) => import_groq2.default`*[_id == $id && dateTime(_updatedAt) > dateTime(now()) - ${ttl}][0].secret`, tag = "preview.secret";
async function getSecret(client2, id, createIfNotExists) {
  let secret = await client2.fetch(
    query(createIfNotExists ? 1800 : 3600),
    { id }
  );
  if (!secret && createIfNotExists) {
    let newSecret = createIfNotExists === !0 ? Math.random().toString(36).slice(2) : createIfNotExists();
    try {
      let patch = client2.patch(id).set({ secret: newSecret });
      return await client2.transaction().createIfNotExists({ _id: id, _type: id }).patch(patch).commit({ tag }), newSecret;
    } catch (err) {
      console.error(
        "Failed to create a new preview secret. Ensure the `client` has a `token` specified that has `write` permissions.",
        err
      );
    }
  }
  return secret;
}

// app/sessions.ts
var import_node5 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node5.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    httpOnly: !0,
    maxAge: 60,
    path: "/",
    sameSite: "lax",
    secrets: [String(process.env.SANITY_PREVIEW_SECRET)],
    secure: !0
  }
});

// app/routes/resource/preview.ts
var action2 = async ({ request }) => {
  if (request.method !== "POST")
    return (0, import_node6.json)({ message: "Method not allowed" }, 405);
  let session = await getSession(request.headers.get("Cookie"));
  return (0, import_node6.redirect)("/", {
    headers: {
      "Set-Cookie": await destroySession(session)
    }
  });
}, loader3 = async ({ request }) => {
  let requestUrl = new URL(request.url), slug = requestUrl.searchParams.get("slug");
  if (!slug)
    return new Response("No slug in URL", { status: 401 });
  let secret = requestUrl.searchParams.get("secret");
  if (!secret)
    return new Response("No secret in URL", { status: 401 });
  let validSlug = await previewClient.fetch(
    import_groq3.default`*[_type == "product" && slug.current == $slug][0].slug.current`,
    { slug }
  );
  if (!validSlug)
    return new Response("Invalid slug", { status: 401 });
  if (await getSecret(previewClient, SECRET_ID, !1) !== secret)
    return new Response("Invalid secret", { status: 401 });
  let session = await getSession(request.headers.get("Cookie"));
  return session.set("token", process.env.SANITY_READ_TOKEN), (0, import_node6.redirect)(`/${validSlug}`, {
    headers: {
      "Set-Cookie": await commitSession(session)
    }
  });
};

// app/routes/studio/$.tsx
var __exports = {};
__export(__exports, {
  default: () => StudioPage,
  links: () => links2,
  meta: () => meta2
});
var import_remix_utils = require("remix-utils"), import_sanity7 = require("sanity");

// app/styles/studio.css
var studio_default = "/build/_assets/studio-CZ6JLOEM.css";

// sanity.config.ts
var import_sanity6 = require("sanity"), import_desk = require("sanity/desk");

// app/sanity/schema/category.ts
var import_lucide_react = require("lucide-react"), import_sanity = require("sanity"), category_default = (0, import_sanity.defineType)({
  name: "category",
  title: "Category",
  type: "document",
  icon: import_lucide_react.Users,
  fields: [
    (0, import_sanity.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity.defineField)({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    }),
    (0, import_sanity.defineField)({
      name: "image",
      type: "image",
      options: { hotspot: !0 }
    })
  ]
});

// app/sanity/schema/tag.ts
var import_lucide_react2 = require("lucide-react"), import_sanity2 = require("sanity"), tag_default = (0, import_sanity2.defineType)({
  name: "tag",
  title: "Tag",
  type: "document",
  icon: import_lucide_react2.Tags,
  fields: [
    (0, import_sanity2.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity2.defineField)({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      }
    })
  ]
});

// app/sanity/schema/home.ts
var import_lucide_react3 = require("lucide-react"), import_sanity3 = require("sanity"), home_default = (0, import_sanity3.defineType)({
  name: "home",
  title: "Home",
  type: "document",
  icon: import_lucide_react3.Home,
  fields: [
    (0, import_sanity3.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity3.defineField)({
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
var import_lucide_react4 = require("lucide-react"), import_sanity4 = require("sanity"), product_default = (0, import_sanity4.defineType)({
  name: "product",
  title: "Record",
  type: "document",
  icon: import_lucide_react4.Disc,
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
    (0, import_sanity4.defineField)({
      name: "title",
      type: "string",
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "slug",
      type: "slug",
      options: {
        source: "title"
      },
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "referral",
      type: "url",
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "likes",
      type: "number",
      readOnly: !0,
      fieldset: "rating"
    }),
    (0, import_sanity4.defineField)({
      name: "dislikes",
      type: "number",
      readOnly: !0,
      fieldset: "rating"
    }),
    (0, import_sanity4.defineField)({
      name: "category",
      type: "reference",
      to: [{ type: "category" }],
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "tags",
      type: "array",
      of: [{ type: "reference", to: { type: "tag" } }],
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "content",
      type: "array",
      of: [{ type: "block" }, { type: "image" }],
      group: "editorial"
    }),
    (0, import_sanity4.defineField)({
      name: "image",
      type: "image",
      options: { hotspot: !0 },
      group: "editorial"
    }),
    (0, import_sanity4.defineField)({
      name: "features",
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
var import_sanity5 = require("sanity");

// app/lib/secondsToMinutes.ts
function secondsToMinutes(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

// app/sanity/components/Duration.tsx
var import_ui = require("@sanity/ui");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Duration(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_ui.Flex, { gap: 3, align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui.Box, { flex: 1, children: props.renderDefault(props) }),
    props.value ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_ui.Code, { size: 4, children: secondsToMinutes(props.value) }) : null
  ] });
}

// app/sanity/schema/feature.ts
var feature_default = (0, import_sanity5.defineType)({
  name: "feature",
  title: "Feature",
  type: "object",
  fields: [
    (0, import_sanity5.defineField)({
      name: "title",
      type: "string"
    }),
    (0, import_sanity5.defineField)({
      name: "duration",
      description: "Time in seconds",
      type: "number",
      components: {
        input: Duration
      }
    })
  ],
  preview: {
    select: {
      title: "title",
      duration: "duration"
    },
    prepare({ title, duration }) {
      return {
        title,
        subtitle: secondsToMinutes(duration)
      };
    }
  }
});

// app/sanity/schema/index.ts
var schema_default = [product_default, category_default, feature_default, tag_default, home_default];

// app/sanity/structure/index.ts
var import_sanity_plugin_iframe_pane = __toESM(require("sanity-plugin-iframe-pane")), import_lucide_react5 = require("lucide-react");

// app/sanity/structure/resolvePreviewUrl.ts
async function resolvePreviewUrl(doc, client2) {
  var _a, _b;
  let remoteUrl = "https://www.example.com", baseUrl = ((_a = window == null ? void 0 : window.location) == null ? void 0 : _a.hostname) === "localhost" ? window.origin : remoteUrl, previewUrl = new URL("/resource/preview", baseUrl);
  if (!((_b = doc == null ? void 0 : doc.slug) != null && _b.current))
    return previewUrl.toString();
  previewUrl.searchParams.set("slug", doc.slug.current);
  let secret = await getSecret(client2, SECRET_ID, !0);
  return secret && previewUrl.searchParams.set("secret", secret), previewUrl.toString();
}

// app/sanity/structure/index.ts
var structure = (S) => S.list().id("root").title("Content").items([
  S.documentListItem().schemaType("home").icon(import_lucide_react5.Home).id("home").title("Home"),
  S.divider(),
  S.documentTypeListItem("product").title("Products").icon(import_lucide_react5.Disc),
  S.documentTypeListItem("category").title("Category").icon(import_lucide_react5.Users),
  S.divider(),
  S.documentTypeListItem("tag").title("Tags").icon(import_lucide_react5.Tags)
]), defaultDocumentNode = (S, { schemaType, getClient: getClient2 }) => {
  let { apiVersion } = projectDetails(), client2 = getClient2({ apiVersion });
  switch (schemaType) {
    case "product":
      return S.document().views([
        S.view.form(),
        S.view.component(import_sanity_plugin_iframe_pane.default).options({
          url: (doc) => resolvePreviewUrl(doc, client2),
          reload: { button: !0 }
        }).title("Preview")
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

// sanity.config.ts
var config = (0, import_sanity6.defineConfig)({
  ...projectDetails(),
  name: "sanity-remix",
  title: "Sanity Remix",
  plugins: [(0, import_desk.deskTool)({ structure, defaultDocumentNode })],
  basePath: "/studio",
  schema: {
    types: schema_default
  }
});

// app/routes/studio/$.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), meta2 = () => ({
  title: "Sanity Studio",
  robots: "noindex"
}), links2 = () => [{ rel: "stylesheet", href: studio_default }];
function StudioPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_remix_utils.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    import_sanity7.Studio,
    {
      config
    }
  ) });
}

// app/routes/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  action: () => action3,
  default: () => RecordPage,
  links: () => links3,
  loader: () => loader4,
  meta: () => meta3
});
var import_node7 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_groq4 = __toESM(require("groq")), import_preview_kit2 = require("@sanity/preview-kit");

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-D6FERBOV.css";

// app/components/Product.tsx
var import_preview_kit = require("@sanity/preview-kit");

// app/components/SanityContent.tsx
var import_react3 = require("@portabletext/react");

// app/components/SanityImage.tsx
var import_image_url = __toESM(require("@sanity/image-url")), import_asset_utils = require("@sanity/asset-utils");
var import_jsx_runtime5 = require("react/jsx-runtime");
function SanityImage(props) {
  let { value, isInline } = props, { width, height } = (0, import_asset_utils.getImageDimensions)(value);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "img",
    {
      className: "not-prose h-auto w-full",
      src: (0, import_image_url.default)(projectDetails()).image(value).width(isInline ? 100 : 800).fit("max").auto("format").url(),
      alt: value.alt || "",
      loading: "lazy",
      style: {
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height
      }
    }
  );
}

// app/components/SanityContent.tsx
var import_jsx_runtime6 = require("react/jsx-runtime"), components = {
  types: {
    image: SanityImage
  }
};
function SanityContent(props) {
  let { value } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "prose font-serif prose-a:text-cyan-600 dark:prose-invert dark:prose-a:text-cyan-200 md:prose-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_react3.PortableText, { value, components }) });
}

// app/components/Logo.tsx
var import_react4 = require("@remix-run/react"), import_remix_utils2 = require("remix-utils"), import_jsx_runtime7 = require("react/jsx-runtime");
function Logo() {
  let { home } = (0, import_remix_utils2.useRouteData)("root");
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "featureing-tighter text-lg font-bold text-black dark:text-white lg:text-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_react4.Link, { to: "/", children: home.siteTitle }) });
}

// app/components/Footer.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("header", { className: "border-t border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Logo, {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex flex-1 flex-col items-end justify-end gap-2 text-sm md:flex-row md:items-center md:gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { className: "hover:text-cyan-600 dark:hover:text-cyan-200", href: "/studio", children: "Log in to Sanity Studio v3" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("a", { className: "hover:text-cyan-600 dark:hover:text-cyan-200", href: "https://sanity.io", children: "Sign up free at Sanity.io" }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        "a",
        {
          className: "hover:text-cyan-600 dark:hover:text-cyan-200",
          href: "https://github.com/SimeonGriggs/remix-sanity-studio-v3",
          children: "Clone this project on GitHub"
        }
      )
    ] })
  ] }) });
}

// app/components/ThemeToggle.tsx
var import_lucide_react6 = require("lucide-react"), import_react5 = require("@remix-run/react"), import_jsx_runtime9 = require("react/jsx-runtime");
function ThemeToggle() {
  let cookieToggle = (0, import_react5.useFetcher)(), { themePreference } = (0, import_react5.useLoaderData)(), isDarkMode = themePreference === "dark";
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(cookieToggle.Form, { method: "post", action: "/resource/toggle-theme", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("button", { type: "submit", disabled: cookieToggle.state === "submitting", children: [
    isDarkMode ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react6.Sun, { className: "h-auto w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_lucide_react6.Moon, { className: "h-auto w-4" }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "sr-only select-none", children: [
      isDarkMode ? "Light" : "Dark",
      " Mode"
    ] })
  ] }) });
}

// app/components/Header.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("header", { className: "border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Logo, {}),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ThemeToggle, {})
  ] }) });
}

// app/components/Layout.tsx
var import_jsx_runtime11 = require("react/jsx-runtime");
function Layout(props) {
  let { children } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "container mx-auto p-4 lg:p-12", children }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(Footer, {})
  ] });
}

// app/components/Title.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function Title(props) {
  return props.children ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("h1", { className: "text-bold featureing-tighter max-w-4xl text-4xl font-bold md:text-4xl lg:text-5xl xl:text-8xl", children: props.children }) : null;
}

// app/components/RecordCover.tsx
var import_image_url2 = __toESM(require("@sanity/image-url"));
var import_jsx_runtime13 = require("react/jsx-runtime");
function RecordCover(props) {
  let { title, image } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "aspect-square bg-gray-50", children: image ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    "img",
    {
      className: "h-auto w-full object-cover shadow-black transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-200",
      src: (0, import_image_url2.default)(projectDetails()).image(image.asset._ref).height(800).width(800).fit("max").auto("format").url(),
      alt: String(title) ?? "",
      loading: "lazy"
    }
  ) : /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: title ?? "Missing Record art" }) });
}

// app/components/LikeDislike.tsx
var import_react6 = require("@remix-run/react"), import_lucide_react7 = require("lucide-react"), import_jsx_runtime14 = require("react/jsx-runtime");
function LikeDislike(props) {
  let { id } = props, fetcher = (0, import_react6.useFetcher)(), location = (0, import_react6.useLocation)(), likes = fetcher.type === "done" ? fetcher.data.likes : props.likes, dislikes = fetcher.type === "done" ? fetcher.data.dislikes : props.dislikes;
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    fetcher.Form,
    {
      action: location.pathname,
      className: "flex items-center justify-center gap-4 bg-black text-white",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("input", { name: "id", type: "hidden", value: id }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "LIKE",
            disabled: fetcher.state !== "idle",
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Like",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-xs font-bold", children: likes }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react7.ThumbsUp, {}),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "sr-only", children: "Like" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "DISLIKE",
            disabled: fetcher.state !== "idle",
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Dislike",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_lucide_react7.ThumbsDown, {}),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "text-xs font-bold", children: dislikes }),
              /* @__PURE__ */ (0, import_jsx_runtime14.jsx)("span", { className: "sr-only", children: "Dislike" })
            ]
          }
        )
      ]
    }
  );
}

// app/components/ExitPreview.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
function ExitPreview() {
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: "pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-center", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("form", { className: "pointer-events-auto", action: "/resource/preview", method: "POST", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("button", { className: "bg-black p-4 font-bold text-white", type: "submit", children: "Exit Preview Mode" }) }) });
}

// app/components/Product.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function Record(props) {
  let { _id, title, category, content, image, features, likes, dislikes } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("article", { className: "flex flex-col items-start gap-4 lg:flex-row lg:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "grid-gap-4 mx-auto grid max-w-[70vw] grid-cols-1", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(RecordCover, { image, title }),
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(LikeDislike, { id: _id, likes, dislikes })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-shrink-0 flex-col gap-4 md:gap-6 lg:w-2/3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("header", { children: [
        title ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Title, { children: title }) : null,
        category ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("h2", { className: "featureing-tighter bg-black text-2xl font-bold text-white", children: category }) : null
      ] }),
      content && (content == null ? void 0 : content.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SanityContent, { value: content }) : null,
      /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        "a",
        {
          href: "www.test.com",
          className: "mr-auto w-auto border-2 border-purple-500 py-4 px-12 text-purple-500",
          children: "Try Out Now"
        }
      ),
      features && (features == null ? void 0 : features.length) > 0 ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_jsx_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("li", { className: "featureing-tighter py-3 text-2xl font-bold", children: (features == null ? void 0 : features.length) === 1 ? "1 Feature" : `${features == null ? void 0 : features.length} Key Features` }),
        features.map((feature) => /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
          "li",
          {
            className: "flex items-center justify-between py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-lg", children: feature.title }),
              feature.duration ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "text-sm font-bold", children: secondsToMinutes(feature.duration) }) : null
            ]
          },
          feature._key
        ))
      ] }) }) : null
    ] })
  ] }) });
}
var { projectId, dataset } = projectDetails(), usePreview = (0, import_preview_kit.definePreview)({ projectId, dataset });
function PreviewRecord(props) {
  let { query: query2, params, token } = props, data = usePreview(token ?? null, query2, params);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(import_jsx_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(ExitPreview, {}),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Record, { ...data })
  ] });
}

// app/types/product.ts
var import_zod3 = require("zod"), productZ = import_zod3.z.object({
  _id: import_zod3.z.string(),
  title: import_zod3.z.string().nullable(),
  slug: import_zod3.z.string().nullable(),
  likes: import_zod3.z.number(),
  dislikes: import_zod3.z.number(),
  category: import_zod3.z.string().nullable(),
  features: import_zod3.z.array(
    import_zod3.z.object({
      _key: import_zod3.z.string(),
      title: import_zod3.z.string().nullable(),
      duration: import_zod3.z.number().nullable()
    })
  ).nullable(),
  tags: import_zod3.z.array(
    import_zod3.z.object({
      _key: import_zod3.z.string(),
      title: import_zod3.z.string().nullable(),
      slug: import_zod3.z.string().nullable()
    })
  ).nullable(),
  image: import_zod3.z.any().nullable(),
  content: import_zod3.z.array(import_zod3.z.any()).nullable()
}), productsZ = import_zod3.z.array(productZ), productStubZ = import_zod3.z.object({
  _id: import_zod3.z.string(),
  title: import_zod3.z.string().nullable(),
  slug: import_zod3.z.string().nullable(),
  category: import_zod3.z.string().nullable(),
  image: import_zod3.z.any().nullable()
}), productStubsZ = import_zod3.z.array(productStubZ);

// app/routes/$slug.tsx
var import_jsx_runtime17 = require("react/jsx-runtime"), links3 = () => [{ rel: "stylesheet", href: tailwind_default }], meta3 = ({ data, parentsData }) => {
  let home = parentsData.root.home;
  return {
    title: [data.product.title, home.siteTitle].filter(Boolean).join(" | ")
  };
}, action3 = async ({ request }) => {
  if (request.method !== "POST")
    return (0, import_node7.json)({ message: "Method not allowed" }, 405);
  let body = await request.formData(), id = String(body.get("id")), action4 = String(body.get("action"));
  if (id)
    switch (action4) {
      case "LIKE":
        return await writeClient.patch(id).setIfMissing({ likes: 0 }).inc({ likes: 1 }).commit().then(({ likes, dislikes }) => ({
          likes: likes ?? 0,
          dislikes: dislikes ?? 0
        }));
      case "DISLIKE":
        return await writeClient.patch(id).setIfMissing({ dislikes: 0 }).inc({ dislikes: 1 }).commit().then(({ likes, dislikes }) => ({
          likes: likes ?? 0,
          dislikes: dislikes ?? 0
        }));
      default:
        return (0, import_node7.json)({ message: "Invalid action" }, 400);
    }
  return (0, import_node7.json)({ message: "Bad request" }, 400);
}, loader4 = async ({ params, request }) => {
  let token = (await getSession(request.headers.get("Cookie"))).get("token"), preview = Boolean(token), query2 = import_groq4.default`*[_type == "product" && slug.current == $slug][0]{
    _id,
    title,
    // GROQ can re-shape data in the request!
    "slug": slug.current,
    "category": category->title,
    // coalesce() returns the first value that is not null
    // so we can ensure we have at least a zero
    "likes": coalesce(likes, 0),
    "dislikes": coalesce(dislikes, 0),
    // for simplicity in this demo these are typed as "any"
    // we can make them type-safe with a little more work
    // https://www.simeongriggs.dev/type-safe-groq-queries-for-sanity-data-with-zod
    image,
    content,
    // this is how we extract values from arrays
    features[]{
      _key,
      title,
      duration
    },
    tags[]{
      _key,
      title,
      slug
    }
  }`, product = await getClient(preview).fetch(query2, params).then((res) => res ? productZ.parse(res) : null);
  if (!product)
    throw new Response("Not found", { status: 404 });
  return (0, import_node7.json)({
    product,
    preview,
    query: preview ? query2 : null,
    params: preview ? params : null,
    token: preview ? token : null
  });
};
function RecordPage() {
  let { product, preview, query: query2, params, token } = (0, import_react7.useLoaderData)();
  return preview && query2 && params && token ? /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_preview_kit2.PreviewSuspense, { fallback: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Record, { ...product }), children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(PreviewRecord, { query: query2, params, token }) }) : /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(Record, { ...product });
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links4,
  loader: () => loader5,
  meta: () => meta4
});
var import_node8 = require("@remix-run/node"), import_react8 = require("@remix-run/react"), import_groq5 = __toESM(require("groq")), import_remix_utils3 = require("remix-utils");
var import_jsx_runtime18 = require("react/jsx-runtime"), links4 = () => [{ rel: "stylesheet", href: tailwind_default }], meta4 = (data) => {
  let home = data.parentsData.root.home;
  return {
    title: [home.title, home.siteTitle].filter(Boolean).join(" | ")
  };
}, loader5 = async (props) => {
  let query2 = import_groq5.default`*[_type == "product"][0...12]{
    _id,
    title,
    "slug": slug.current,
    "category": category->title,
    image
  }`, products = await getClient().fetch(query2).then((res) => res ? productStubsZ.parse(res) : null);
  if (!products)
    throw new Response("Not found", { status: 404 });
  return (0, import_node8.json)({ products });
};
function Index() {
  let { products } = (0, import_react8.useLoaderData)(), { home } = (0, import_remix_utils3.useRouteData)("root");
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    home.title ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(Title, { children: home.title }) : null,
    products.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("ul", { className: "grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 lg:grid-cols-4", children: products.map((product) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("li", { className: "group relative flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90", children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { className: "absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 bg-gradient-to-b from-white to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-y-10 group-hover:translate-x-10 group-hover:opacity-75" }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(RecordCover, { image: product.image, title: product.title })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("div", { className: "flex flex-col", children: [
        product != null && product.slug ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
          import_react8.Link,
          {
            prefetch: "intent",
            to: product == null ? void 0 : product.slug,
            className: "text-bold featureing-tighter pt-4 text-xl font-bold transition-colors duration-100 ease-in-out hover:bg-cyan-400 hover:text-white md:text-3xl",
            children: [
              product.title,
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "absolute inset-0" })
            ]
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "pt-4 text-xl font-bold", children: product.title }),
        product != null && product.category ? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "featureing-tighter bg-black font-bold leading-none text-white", children: product.category }) : null
      ] })
    ] }, product._id)) }) : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { children: "No products found" })
  ] }) });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d3751bc8", entry: { module: "/build/entry.client-5GWE43QM.js", imports: ["/build/_shared/chunk-6QSCAR5C.js", "/build/_shared/chunk-BT6BK5OL.js", "/build/_shared/chunk-TE2R5WIX.js", "/build/_shared/chunk-ADMCF34Z.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TDLKFLN2.js", imports: ["/build/_shared/chunk-PM5GQWRX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug": { id: "routes/$slug", parentId: "root", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug-EILWYTBE.js", imports: ["/build/_shared/chunk-6LR2WKBX.js", "/build/_shared/chunk-VIEGSFVW.js", "/build/_shared/chunk-2GFJKGCD.js", "/build/_shared/chunk-LCNKOXSN.js", "/build/_shared/chunk-WRAB7R2F.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-DURG3XDG.js", imports: ["/build/_shared/chunk-VIEGSFVW.js", "/build/_shared/chunk-2GFJKGCD.js", "/build/_shared/chunk-WRAB7R2F.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resource/preview": { id: "routes/resource/preview", parentId: "root", path: "resource/preview", index: void 0, caseSensitive: void 0, module: "/build/routes/resource/preview-S7DZOXRI.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resource/toggle-theme": { id: "routes/resource/toggle-theme", parentId: "root", path: "resource/toggle-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/resource/toggle-theme-SX4PZDS3.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/studio/$": { id: "routes/studio/$", parentId: "root", path: "studio/*", index: void 0, caseSensitive: void 0, module: "/build/routes/studio/$-OHLAVDZU.js", imports: ["/build/_shared/chunk-6LR2WKBX.js", "/build/_shared/chunk-2GFJKGCD.js", "/build/_shared/chunk-6ORFEM36.js", "/build/_shared/chunk-2WXH3QX5.js", "/build/_shared/chunk-LCNKOXSN.js", "/build/_shared/chunk-WRAB7R2F.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-D3751BC8.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/resource/toggle-theme": {
    id: "routes/resource/toggle-theme",
    parentId: "root",
    path: "resource/toggle-theme",
    index: void 0,
    caseSensitive: void 0,
    module: toggle_theme_exports
  },
  "routes/resource/preview": {
    id: "routes/resource/preview",
    parentId: "root",
    path: "resource/preview",
    index: void 0,
    caseSensitive: void 0,
    module: preview_exports
  },
  "routes/studio/$": {
    id: "routes/studio/$",
    parentId: "root",
    path: "studio/*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  },
  "routes/$slug": {
    id: "routes/$slug",
    parentId: "root",
    path: ":slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
