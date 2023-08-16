import {
  PreviewRecord,
  PreviewSuspense,
  Record
} from "/build/_shared/chunk-FO23PI4C.js";
import "/build/_shared/chunk-M3IW45AF.js";
import "/build/_shared/chunk-PBYB3QU6.js";
import "/build/_shared/chunk-GB5OAF5Y.js";
import "/build/_shared/chunk-Z5YUX75N.js";
import {
  tailwind_default
} from "/build/_shared/chunk-ANO2NPYG.js";
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
  useLoaderData
} from "/build/_shared/chunk-6OT2F7ZE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/routes/tools/$slug.tsx
var import_groq = __toESM(require_groq());
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
var links = () => {
  return [{ rel: "stylesheet", href: tailwind_default }];
};
var meta = ({ data, parentsData }) => {
  const home = parentsData.root.home;
  return {
    title: [data.product.metatitle, home.siteTitle].filter(Boolean).join(" | "),
    description: [data.product.metadescription],
    "og:image": (0, import_image_url.default)(projectDetails()).image(data.product.metaimage.asset._ref).url()
  };
};
function RecordPage() {
  const { product, preview, query, params, token } = useLoaderData();
  if (preview && query && params && token) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviewSuspense, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Record, { ...product }, void 0, false, {
      fileName: "app/routes/tools/$slug.tsx",
      lineNumber: 163,
      columnNumber: 34
    }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PreviewRecord, { query, params, token }, void 0, false, {
      fileName: "app/routes/tools/$slug.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/tools/$slug.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Record, { ...product }, void 0, false, {
    fileName: "app/routes/tools/$slug.tsx",
    lineNumber: 169,
    columnNumber: 10
  }, this);
}
export {
  RecordPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/tools/$slug-26CXFHQ7.js.map
