import {
  PaneItem
} from "/build/_shared/chunk-Y2YXGXKY.js";
import {
  useDeskTool
} from "/build/_shared/chunk-FJTHRNVG.js";
import "/build/_shared/chunk-6URVWIZX.js";
import {
  BackLink,
  Pane,
  PaneContent,
  PaneHeader,
  PaneHeaderActions,
  _DEBUG,
  usePaneLayout
} from "/build/_shared/chunk-W7OSM6NY.js";
import {
  ArrowLeftIcon,
  Box,
  Button,
  Stack,
  require_omit,
  styled_components_browser_esm_default
} from "/build/_shared/chunk-7CSDLIHJ.js";
import "/build/_shared/chunk-BPU3GXCB.js";
import "/build/_shared/chunk-WA32A3L3.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import "/build/_shared/chunk-7E4LWBBH.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/sanity/lib/_chunks/index-1ad21cb1.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_omit = __toESM(require_omit());
var _templateObject;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
var Divider = styled_components_browser_esm_default.hr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: var(--card-border-color);\n  height: 1px;\n  margin: 0;\n  border: none;\n"])));
function ListPane(props) {
  const {
    childItemId,
    index,
    isActive,
    isSelected,
    pane,
    paneKey
  } = props;
  const {
    features
  } = useDeskTool();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const {
    defaultLayout,
    displayOptions,
    items,
    menuItems,
    menuItemGroups,
    title
  } = pane;
  const paneShowIcons = displayOptions == null ? void 0 : displayOptions.showIcons;
  const shouldShowIconForItem = (item) => {
    var _a;
    const itemShowIcon = (_a = item.displayOptions) == null ? void 0 : _a.showIcon;
    if (typeof itemShowIcon !== "undefined") {
      return itemShowIcon !== false;
    }
    return paneShowIcons !== false;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    currentMaxWidth: 350,
    "data-testid": "desk-tool-list-pane",
    id: paneKey,
    maxWidth: 640,
    minWidth: 320,
    selected: isSelected,
    children: [_DEBUG, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeaderActions, {
        menuItems,
        menuItemGroups
      }),
      backButton: features.backButton && index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        as: BackLink,
        "data-as": "a",
        icon: ArrowLeftIcon,
        mode: "bleed"
      }),
      title
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      overflow: layoutCollapsed ? void 0 : "auto",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
        padding: 2,
        space: 1,
        children: items && items.map((item, itemIndex) => {
          if (item.type === "divider") {
            return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              paddingY: 1,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Divider, {})
            }, "divider-".concat(itemIndex));
          }
          const pressed = !isActive && childItemId === item.id;
          const selected = isActive && childItemId === item.id;
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneItem, {
            icon: shouldShowIconForItem(item) ? item.icon : false,
            id: item.id,
            layout: defaultLayout,
            pressed,
            schemaType: item.schemaType,
            selected,
            title: item.title,
            value: item._id && item.schemaType ? {
              _id: item._id,
              _type: item.schemaType.name,
              title: item.title
            } : void 0
          }, item.id);
        })
      })
    })]
  });
}
export {
  ListPane as default
};
//# sourceMappingURL=/build/_shared/index-1ad21cb1-FLYIIJCF.js.map
