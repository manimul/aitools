import {
  projectDetails
} from "/build/_shared/chunk-K3XBZMEA.js";
import {
  require_image_url_umd
} from "/build/_shared/chunk-UXONZQWX.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-5BVC5GJT.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/components/RecordCover.tsx
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function RecordCover(props) {
  var _a;
  const { title, image } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "aspect-square bg-gray-50", children: image ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
    "img",
    {
      className: "h-auto w-full  object-cover shadow-black transition-all duration-300  group-hover:scale-105 ",
      src: (0, import_image_url.default)(projectDetails()).image(image.asset._ref).height(800).width(800).fit("max").auto("format").url(),
      alt: (_a = String(title)) != null ? _a : ``,
      loading: "lazy"
    },
    void 0,
    false,
    {
      fileName: "app/components/RecordCover.tsx",
      lineNumber: 19,
      columnNumber: 9
    },
    this
  ) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex aspect-square w-full items-center justify-center bg-gray-100 text-gray-500", children: title != null ? title : `Missing Record art` }, void 0, false, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 32,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/RecordCover.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

export {
  RecordCover
};
//# sourceMappingURL=/build/_shared/chunk-NSFUBKRX.js.map
