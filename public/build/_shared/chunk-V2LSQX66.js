import {
  ChevronRightIcon,
  DocumentIcon,
  FolderIcon,
  PaneItemPreview,
  PreviewCard$1,
  SanityDefaultPreview,
  Text,
  WarningOutlineIcon,
  isSanityDocument,
  require_omit,
  useDocumentPresence,
  useDocumentPreviewStore,
  usePaneRouter,
  useSchema
} from "/build/_shared/chunk-3PXH2B7D.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/sanity/lib/_chunks/PaneItem-61ee1040.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_omit = __toESM(require_omit());
var getUnknownTypeFallback = (id, typeName) => ({
  title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
    children: ["No schema found for type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
      children: typeName
    })]
  }),
  subtitle: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("em", {
    children: ["Document: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
      children: id
    })]
  }),
  media: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
});
function MissingSchemaType(props) {
  const {
    layout,
    value
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanityDefaultPreview, {
    ...getUnknownTypeFallback(value._id, value._type),
    layout
  });
}
function getIconWithFallback(icon, schemaType, defaultIcon) {
  if (icon === false) {
    return false;
  }
  return icon || schemaType && schemaType.icon || defaultIcon || false;
}
function PaneItem(props) {
  const {
    icon,
    id,
    layout = "default",
    pressed,
    schemaType,
    selected,
    title,
    value
  } = props;
  const schema = useSchema();
  const documentPreviewStore = useDocumentPreviewStore();
  const {
    ChildLink
  } = usePaneRouter();
  const documentPresence = useDocumentPresence(id);
  const hasSchemaType = Boolean(schemaType && schemaType.name && schema.get(schemaType.name));
  const [clicked, setClicked] = (0, import_react.useState)(false);
  const preview = (0, import_react.useMemo)(() => {
    if (value && isSanityDocument(value)) {
      if (!schemaType || !hasSchemaType) {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissingSchemaType, {
          value
        });
      }
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneItemPreview, {
        documentPreviewStore,
        icon: getIconWithFallback(icon, schemaType, DocumentIcon),
        layout,
        schemaType,
        value,
        presence: documentPresence
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanityDefaultPreview, {
      status: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        muted: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRightIcon, {})
      }),
      icon: getIconWithFallback(icon, schemaType, FolderIcon),
      layout,
      title
    });
  }, [documentPreviewStore, hasSchemaType, icon, layout, schemaType, title, value, documentPresence]);
  const Link = (0, import_react.useMemo)(() => function LinkComponent(linkProps) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChildLink, {
      ...linkProps,
      childId: id
    });
  }, [ChildLink, id]);
  const handleClick = (0, import_react.useCallback)(() => setClicked(true), []);
  (0, import_react.useEffect)(() => setClicked(false), [selected]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCard$1, {
    __unstable_focusRing: true,
    as: Link,
    "data-as": "a",
    "data-ui": "PaneItem",
    padding: 2,
    radius: 2,
    onClick: handleClick,
    pressed,
    selected: selected || clicked,
    tone: "inherit",
    children: preview
  });
}

export {
  PaneItem
};
//# sourceMappingURL=/build/_shared/chunk-V2LSQX66.js.map
