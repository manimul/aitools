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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_styled_components = require("styled-components"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1;
    if (new URL(request.url).pathname.startsWith("/studio")) {
      let sheet = new import_styled_components.ServerStyleSheet(), markup = (0, import_server.renderToString)(
        sheet.collectStyles(/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
          fileName: "app/entry.server.tsx",
          lineNumber: 25,
          columnNumber: 29
        }, this))
      ), styles = sheet.getStyleTags();
      return markup = markup.replace("__STYLES__", styles), responseHeaders.set("Content-Type", "text/html"), resolve(
        new import_node.Response("<!DOCTYPE html>" + markup, {
          status: responseStatusCode,
          headers: responseHeaders
        })
      );
    }
    let { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
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
  let { SANITY_PUBLIC_PROJECT_ID, SANITY_PUBLIC_DATASET, SANITY_PUBLIC_API_VERSION } = typeof document > "u" ? process.env : window.ENV;
  return {
    projectId: SANITY_PUBLIC_PROJECT_ID ?? "pnkijp0b",
    dataset: SANITY_PUBLIC_DATASET ?? "remix",
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
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 77,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 78,
        columnNumber: 9
      }, this),
      isStudioRoute && typeof document > "u" ? "__STYLES__" : null
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 76,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { className: bodyClassNames, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 82,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `window.ENV = ${JSON.stringify(ENV)}`
          }
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 84,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 89,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 81,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 75,
    columnNumber: 5
  }, this);
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
    import_groq3.default`*[_type == "record" && slug.current == $slug][0].slug.current`,
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
var studio_default = "/build/_assets/studio-7UYMGTOZ.css";

// sanity.config.ts
var import_sanity6 = require("sanity"), import_desk = require("sanity/desk");

// app/sanity/schema/artist.ts
var import_lucide_react = require("lucide-react"), import_sanity = require("sanity"), artist_default = (0, import_sanity.defineType)({
  name: "artist",
  title: "Artist",
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

// app/sanity/schema/genre.ts
var import_lucide_react2 = require("lucide-react"), import_sanity2 = require("sanity"), genre_default = (0, import_sanity2.defineType)({
  name: "genre",
  title: "Genre",
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
      artist: "siteTitle"
    }
  }
});

// app/sanity/schema/record.ts
var import_lucide_react4 = require("lucide-react"), import_sanity4 = require("sanity"), record_default = (0, import_sanity4.defineType)({
  name: "record",
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
      name: "tracks",
      title: "Tracks"
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
      name: "artist",
      type: "reference",
      to: [{ type: "artist" }],
      group: "details"
    }),
    (0, import_sanity4.defineField)({
      name: "genres",
      type: "array",
      of: [{ type: "reference", to: { type: "genre" } }],
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
      name: "tracks",
      type: "array",
      of: [{ type: "track" }],
      group: "tracks"
    })
  ],
  preview: {
    select: {
      title: "title",
      artist: "artist.title",
      media: "image"
    },
    prepare({ title, artist, media }) {
      return {
        title,
        subtitle: artist,
        media
      };
    }
  }
});

// app/sanity/schema/track.ts
var import_sanity5 = require("sanity");

// app/lib/secondsToMinutes.ts
function secondsToMinutes(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

// app/sanity/components/Duration.tsx
var import_ui = require("@sanity/ui");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Duration(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ui.Flex, { gap: 3, align: "center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ui.Box, { flex: 1, children: props.renderDefault(props) }, void 0, !1, {
      fileName: "app/sanity/components/Duration.tsx",
      lineNumber: 9,
      columnNumber: 7
    }, this),
    props.value ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_ui.Code, { size: 4, children: secondsToMinutes(props.value) }, void 0, !1, {
      fileName: "app/sanity/components/Duration.tsx",
      lineNumber: 10,
      columnNumber: 22
    }, this) : null
  ] }, void 0, !0, {
    fileName: "app/sanity/components/Duration.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

// app/sanity/schema/track.ts
var track_default = (0, import_sanity5.defineType)({
  name: "track",
  title: "Track",
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
var schema_default = [record_default, artist_default, track_default, genre_default, home_default];

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
  S.documentTypeListItem("record").title("Products").icon(import_lucide_react5.Disc),
  S.documentTypeListItem("artist").title("Category").icon(import_lucide_react5.Users),
  S.divider(),
  S.documentTypeListItem("genre").title("Tags").icon(import_lucide_react5.Tags)
]), defaultDocumentNode = (S, { schemaType, getClient: getClient2 }) => {
  let { apiVersion } = projectDetails(), client2 = getClient2({ apiVersion });
  switch (schemaType) {
    case "record":
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
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "Sanity Studio",
  robots: "noindex"
}), links2 = () => [{ rel: "stylesheet", href: studio_default }];
function StudioPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix_utils.ClientOnly, { children: () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_sanity7.Studio,
    {
      config
    },
    void 0,
    !1,
    {
      fileName: "app/routes/studio/$.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/studio/$.tsx",
    lineNumber: 19,
    columnNumber: 5
  }, this);
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
var tailwind_default = "/build/_assets/tailwind-VPJCSMFP.css";

// app/components/Record.tsx
var import_preview_kit = require("@sanity/preview-kit");

// app/components/SanityContent.tsx
var import_react3 = require("@portabletext/react");

// app/components/SanityImage.tsx
var import_image_url = __toESM(require("@sanity/image-url")), import_asset_utils = require("@sanity/asset-utils");
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function SanityImage(props) {
  let { value, isInline } = props, { width, height } = (0, import_asset_utils.getImageDimensions)(value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
    },
    void 0,
    !1,
    {
      fileName: "app/components/SanityImage.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/SanityContent.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), components = {
  types: {
    image: SanityImage
  }
};
function SanityContent(props) {
  let { value } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "prose font-serif prose-a:text-cyan-600 dark:prose-invert dark:prose-a:text-cyan-200 md:prose-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.PortableText, { value, components }, void 0, !1, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 21,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

// app/components/Logo.tsx
var import_react4 = require("@remix-run/react"), import_remix_utils2 = require("remix-utils"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Logo() {
  let { home } = (0, import_remix_utils2.useRouteData)("root");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-lg font-bold tracking-tighter text-black dark:text-white lg:text-2xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Link, { to: "/", children: home.siteTitle }, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Logo.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/Footer.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("header", { className: "border-t border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Logo, {}, void 0, !1, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 7,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-1 flex-col items-end justify-end gap-2 text-sm md:flex-row md:items-center md:gap-5", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "hover:text-cyan-600 dark:hover:text-cyan-200", href: "/studio", children: "Log in to Sanity Studio v3" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 9,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("a", { className: "hover:text-cyan-600 dark:hover:text-cyan-200", href: "https://sanity.io", children: "Sign up free at Sanity.io" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 12,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "a",
        {
          className: "hover:text-cyan-600 dark:hover:text-cyan-200",
          href: "https://github.com/SimeonGriggs/remix-sanity-studio-v3",
          children: "Clone this project on GitHub"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/ThemeToggle.tsx
var import_lucide_react6 = require("lucide-react"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function ThemeToggle() {
  let cookieToggle = (0, import_react5.useFetcher)(), { themePreference } = (0, import_react5.useLoaderData)(), isDarkMode = themePreference === "dark";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(cookieToggle.Form, { method: "post", action: "/resource/toggle-theme", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("button", { type: "submit", disabled: cookieToggle.state === "submitting", children: [
    isDarkMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_lucide_react6.Sun, { className: "h-auto w-4" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 14,
      columnNumber: 23
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_lucide_react6.Moon, { className: "h-auto w-4" }, void 0, !1, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 14,
      columnNumber: 56
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "sr-only select-none", children: [
      isDarkMode ? "Light" : "Dark",
      " Mode"
    ] }, void 0, !0, {
      fileName: "app/components/ThemeToggle.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ThemeToggle.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/components/Header.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("header", { className: "border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "container mx-auto flex items-center justify-between p-4 lg:px-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Logo, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 8,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(ThemeToggle, {}, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/components/Layout.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Layout(props) {
  let { children } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Header, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container mx-auto p-4 lg:p-12", children }, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Footer, {}, void 0, !1, {
      fileName: "app/components/Layout.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/components/Title.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function Title(props) {
  return props.children ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-bold max-w-4xl text-4xl font-bold tracking-tighter md:text-4xl lg:text-5xl xl:text-8xl", children: props.children }, void 0, !1, {
    fileName: "app/components/Title.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this) : null;
}

// app/components/RecordCover.tsx
var import_image_url2 = __toESM(require("@sanity/image-url"));
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function RecordCover(props) {
  let { title, image } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "aspect-square bg-gray-50", children: image ? /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    "img",
    {
      className: "h-auto w-full object-cover shadow-black transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-cyan-200",
      src: (0, import_image_url2.default)(projectDetails()).image(image.asset._ref).height(800).width(800).fit("max").auto("format").url(),
      alt: String(title) ?? "",
      loading: "lazy"
    },
    void 0,
    !1,
    {
      fileName: "app/components/RecordCover.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: title ?? "Missing Record art" }, void 0, !1, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 31,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/components/LikeDislike.tsx
var import_react6 = require("@remix-run/react"), import_lucide_react7 = require("lucide-react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function LikeDislike(props) {
  let { id } = props, fetcher = (0, import_react6.useFetcher)(), location = (0, import_react6.useLocation)(), likes = fetcher.type === "done" ? fetcher.data.likes : props.likes, dislikes = fetcher.type === "done" ? fetcher.data.dislikes : props.dislikes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    fetcher.Form,
    {
      action: location.pathname,
      className: "flex items-center justify-center gap-4 bg-black text-white",
      method: "post",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("input", { name: "id", type: "hidden", value: id }, void 0, !1, {
          fileName: "app/components/LikeDislike.tsx",
          lineNumber: 26,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "LIKE",
            disabled: fetcher.state !== "idle",
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Like",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-xs font-bold", children: likes }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 35,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_lucide_react7.ThumbsUp, {}, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 36,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "sr-only", children: "Like" }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 37,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/LikeDislike.tsx",
            lineNumber: 27,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          "button",
          {
            name: "action",
            type: "submit",
            value: "DISLIKE",
            disabled: fetcher.state !== "idle",
            className: "flex items-center gap-2 bg-black p-4 transition-all duration-100 ease-in-out hover:bg-cyan-400 hover:text-black disabled:opacity-50",
            title: "Dislike",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_lucide_react7.ThumbsDown, {}, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 47,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "text-xs font-bold", children: dislikes }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 48,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { className: "sr-only", children: "Dislike" }, void 0, !1, {
                fileName: "app/components/LikeDislike.tsx",
                lineNumber: 49,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/LikeDislike.tsx",
            lineNumber: 39,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/LikeDislike.tsx",
      lineNumber: 21,
      columnNumber: 5
    },
    this
  );
}

// app/components/ExitPreview.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function ExitPreview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("form", { className: "pointer-events-auto", action: "/resource/preview", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("button", { className: "bg-black p-4 font-bold text-white", type: "submit", children: "Exit Preview Mode" }, void 0, !1, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/ExitPreview.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/components/Record.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function Record(props) {
  let { _id, title, artist, content, image, tracks, likes, dislikes } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("article", { className: "flex flex-col items-start gap-4 lg:flex-row lg:gap-12", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "grid-gap-4 mx-auto grid max-w-[70vw] grid-cols-1", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(RecordCover, { image, title }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 21,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(LikeDislike, { id: _id, likes, dislikes }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 22,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Record.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex flex-shrink-0 flex-col gap-4 md:gap-6 lg:w-2/3", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("header", { children: [
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Title, { children: title }, void 0, !1, {
          fileName: "app/components/Record.tsx",
          lineNumber: 26,
          columnNumber: 22
        }, this) : null,
        artist ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "bg-black text-2xl font-bold tracking-tighter text-white", children: artist }, void 0, !1, {
          fileName: "app/components/Record.tsx",
          lineNumber: 28,
          columnNumber: 15
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/Record.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this),
      content && (content == null ? void 0 : content.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(SanityContent, { value: content }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this) : null,
      tracks && (tracks == null ? void 0 : tracks.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("li", { className: "py-3 text-2xl font-bold tracking-tighter", children: (tracks == null ? void 0 : tracks.length) === 1 ? "1 Track" : `${tracks == null ? void 0 : tracks.length} Key Features` }, void 0, !1, {
          fileName: "app/components/Record.tsx",
          lineNumber: 39,
          columnNumber: 17
        }, this),
        tracks.map((track) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
          "li",
          {
            className: "flex items-center justify-between py-3",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-lg", children: track.title }, void 0, !1, {
                fileName: "app/components/Record.tsx",
                lineNumber: 49,
                columnNumber: 21
              }, this),
              track.duration ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("span", { className: "text-sm font-bold", children: secondsToMinutes(track.duration) }, void 0, !1, {
                fileName: "app/components/Record.tsx",
                lineNumber: 51,
                columnNumber: 23
              }, this) : null
            ]
          },
          track._key,
          !0,
          {
            fileName: "app/components/Record.tsx",
            lineNumber: 45,
            columnNumber: 19
          },
          this
        ))
      ] }, void 0, !0, {
        fileName: "app/components/Record.tsx",
        lineNumber: 38,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Record.tsx",
        lineNumber: 37,
        columnNumber: 13
      }, this) : null
    ] }, void 0, !0, {
      fileName: "app/components/Record.tsx",
      lineNumber: 24,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Record.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Record.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
var { projectId, dataset } = projectDetails(), usePreview = (0, import_preview_kit.definePreview)({ projectId, dataset });
function PreviewRecord(props) {
  let { query: query2, params, token } = props, data = usePreview(token ?? null, query2, params);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(ExitPreview, {}, void 0, !1, {
      fileName: "app/components/Record.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Record, { ...data }, void 0, !1, {
      fileName: "app/components/Record.tsx",
      lineNumber: 83,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Record.tsx",
    lineNumber: 81,
    columnNumber: 5
  }, this);
}

// app/types/record.ts
var import_zod3 = require("zod"), recordZ = import_zod3.z.object({
  _id: import_zod3.z.string(),
  title: import_zod3.z.string().nullable(),
  slug: import_zod3.z.string().nullable(),
  likes: import_zod3.z.number(),
  dislikes: import_zod3.z.number(),
  artist: import_zod3.z.string().nullable(),
  tracks: import_zod3.z.array(
    import_zod3.z.object({
      _key: import_zod3.z.string(),
      title: import_zod3.z.string().nullable(),
      duration: import_zod3.z.number().nullable()
    })
  ).nullable(),
  image: import_zod3.z.any().nullable(),
  content: import_zod3.z.array(import_zod3.z.any()).nullable()
}), recordsZ = import_zod3.z.array(recordZ), recordStubZ = import_zod3.z.object({
  _id: import_zod3.z.string(),
  title: import_zod3.z.string().nullable(),
  slug: import_zod3.z.string().nullable(),
  artist: import_zod3.z.string().nullable(),
  image: import_zod3.z.any().nullable()
}), recordStubsZ = import_zod3.z.array(recordStubZ);

// app/routes/$slug.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), links3 = () => [{ rel: "stylesheet", href: tailwind_default }], meta3 = ({ data, parentsData }) => {
  let home = parentsData.root.home;
  return {
    title: [data.record.title, home.siteTitle].filter(Boolean).join(" | ")
  };
}, action3 = async ({ request }) => {
  if (request.method !== "POST")
    return (0, import_node7.json)({ message: "Method not allowed" }, 405);
  let body = await request.formData(), id = String(body.get("id")), action4 = String(body.get("action"));
  if (id)
    switch (action4) {
      case "LIKE":
        return await writeClient.patch(id).setIfMissing({ likes: 0 }).inc({ likes: 1 }).commit().then(({ likes, dislikes }) => ({ likes: likes ?? 0, dislikes: dislikes ?? 0 }));
      case "DISLIKE":
        return await writeClient.patch(id).setIfMissing({ dislikes: 0 }).inc({ dislikes: 1 }).commit().then(({ likes, dislikes }) => ({ likes: likes ?? 0, dislikes: dislikes ?? 0 }));
      default:
        return (0, import_node7.json)({ message: "Invalid action" }, 400);
    }
  return (0, import_node7.json)({ message: "Bad request" }, 400);
}, loader4 = async ({ params, request }) => {
  let token = (await getSession(request.headers.get("Cookie"))).get("token"), preview = Boolean(token), query2 = import_groq4.default`*[_type == "record" && slug.current == $slug][0]{
    _id,
    title,
    // GROQ can re-shape data in the request!
    "slug": slug.current,
    "artist": artist->title,
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
    tracks[]{
      _key,
      title,
      duration
    }
  }`, record = await getClient(preview).fetch(query2, params).then((res) => res ? recordZ.parse(res) : null);
  if (!record)
    throw new Response("Not found", { status: 404 });
  return (0, import_node7.json)({
    record,
    preview,
    query: preview ? query2 : null,
    params: preview ? params : null,
    token: preview ? token : null
  });
};
function RecordPage() {
  let { record, preview, query: query2, params, token } = (0, import_react7.useLoaderData)();
  return preview && query2 && params && token ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_preview_kit2.PreviewSuspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Record, { ...record }, void 0, !1, {
    fileName: "app/routes/$slug.tsx",
    lineNumber: 118,
    columnNumber: 34
  }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(PreviewRecord, { query: query2, params, token }, void 0, !1, {
    fileName: "app/routes/$slug.tsx",
    lineNumber: 119,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/$slug.tsx",
    lineNumber: 118,
    columnNumber: 7
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Record, { ...record }, void 0, !1, {
    fileName: "app/routes/$slug.tsx",
    lineNumber: 124,
    columnNumber: 10
  }, this);
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
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), links4 = () => [{ rel: "stylesheet", href: tailwind_default }], meta4 = (data) => {
  let home = data.parentsData.root.home;
  return {
    title: [home.title, home.siteTitle].filter(Boolean).join(" | ")
  };
}, loader5 = async (props) => {
  let query2 = import_groq5.default`*[_type == "record"][0...12]{
    _id,
    title,
    "slug": slug.current,
    "artist": artist->title,
    image
  }`, records = await getClient().fetch(query2).then((res) => res ? recordStubsZ.parse(res) : null);
  if (!records)
    throw new Response("Not found", { status: 404 });
  return (0, import_node8.json)({ records });
};
function Index() {
  let { records } = (0, import_react8.useLoaderData)(), { home } = (0, import_remix_utils3.useRouteData)("root");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "grid grid-cols-1 gap-6 md:gap-12", children: [
    home.title ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Title, { children: home.title }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 54,
      columnNumber: 23
    }, this) : null,
    records.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("ul", { className: "grid grid-cols-2 gap-6 md:grid-cols-3 md:gap-12 lg:grid-cols-4", children: records.map((record) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("li", { className: "group relative flex flex-col", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative overflow-hidden transition-all duration-200 ease-in-out group-hover:scale-105 group-hover:opacity-90", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "absolute z-0 h-48 w-[200%] translate-x-20 translate-y-20 -rotate-45 bg-gradient-to-b from-white to-transparent opacity-25 mix-blend-overlay transition-transform duration-500 ease-in-out group-hover:translate-y-10 group-hover:translate-x-10 group-hover:opacity-75" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 60,
          columnNumber: 19
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(RecordCover, { image: record.image, title: record.title }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 61,
          columnNumber: 19
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 59,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col", children: [
        record != null && record.slug ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_react8.Link,
          {
            prefetch: "intent",
            to: record == null ? void 0 : record.slug,
            className: "text-bold pt-4 text-xl font-bold tracking-tighter transition-colors duration-100 ease-in-out hover:bg-cyan-400 hover:text-white md:text-3xl",
            children: [
              record.title,
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "absolute inset-0" }, void 0, !1, {
                fileName: "app/routes/index.tsx",
                lineNumber: 72,
                columnNumber: 23
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/routes/index.tsx",
            lineNumber: 65,
            columnNumber: 21
          },
          this
        ) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "pt-4 text-xl font-bold", children: record.title }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 75,
          columnNumber: 21
        }, this),
        record != null && record.artist ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "bg-black font-bold leading-none tracking-tighter text-white", children: record.artist }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 78,
          columnNumber: 21
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 63,
        columnNumber: 17
      }, this)
    ] }, record._id, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 58,
      columnNumber: 15
    }, this)) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 56,
      columnNumber: 11
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { children: "No records found" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 87,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "85634deb", entry: { module: "/build/entry.client-SW4EYPZN.js", imports: ["/build/_shared/chunk-T5F5625V.js", "/build/_shared/chunk-5BVC5GJT.js", "/build/_shared/chunk-WA32A3L3.js", "/build/_shared/chunk-247AAKB7.js", "/build/_shared/chunk-CUPSZOF3.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-DUSLR3OO.js", imports: ["/build/_shared/chunk-VFPAK4Q6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/$slug": { id: "routes/$slug", parentId: "root", path: ":slug", index: void 0, caseSensitive: void 0, module: "/build/routes/$slug-XZOPR25G.js", imports: ["/build/_shared/chunk-XOLG3HXY.js", "/build/_shared/chunk-7RNW3JRB.js", "/build/_shared/chunk-B4T4FDK4.js", "/build/_shared/chunk-PBYB3QU6.js", "/build/_shared/chunk-RZ47BF3R.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-2Z6SK5EG.js", imports: ["/build/_shared/chunk-7RNW3JRB.js", "/build/_shared/chunk-B4T4FDK4.js", "/build/_shared/chunk-RZ47BF3R.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resource/preview": { id: "routes/resource/preview", parentId: "root", path: "resource/preview", index: void 0, caseSensitive: void 0, module: "/build/routes/resource/preview-LKSRCSFF.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/resource/toggle-theme": { id: "routes/resource/toggle-theme", parentId: "root", path: "resource/toggle-theme", index: void 0, caseSensitive: void 0, module: "/build/routes/resource/toggle-theme-2UZDET2H.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/studio/$": { id: "routes/studio/$", parentId: "root", path: "studio/*", index: void 0, caseSensitive: void 0, module: "/build/routes/studio/$-QFYBJ5VS.js", imports: ["/build/_shared/chunk-XOLG3HXY.js", "/build/_shared/chunk-B4T4FDK4.js", "/build/_shared/chunk-3PXH2B7D.js", "/build/_shared/chunk-BPU3GXCB.js", "/build/_shared/chunk-PBYB3QU6.js", "/build/_shared/chunk-RZ47BF3R.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, url: "/build/manifest-85634DEB.js" };

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
//# sourceMappingURL=index.js.map
