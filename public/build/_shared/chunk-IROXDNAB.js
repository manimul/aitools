import {
  require_prop_types
} from "/build/_shared/chunk-LS6N33D7.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/lucide-react/dist/esm/createReactComponent.js
var import_react = __toESM(require_react());
var import_prop_types = __toESM(require_prop_types());

// node_modules/lucide-react/dist/esm/defaultAttributes.js
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};

// node_modules/lucide-react/dist/esm/createReactComponent.js
var toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
var createReactComponent = (iconName, iconNode) => {
  const Component = (0, import_react.forwardRef)(
    ({ color = "currentColor", size = 24, strokeWidth = 2, children, ...rest }, ref) => (0, import_react.createElement)(
      "svg",
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        stroke: color,
        strokeWidth,
        className: `lucide lucide-${toKebabCase(iconName)}`,
        ...rest
      },
      [
        ...iconNode.map(([tag, attrs]) => (0, import_react.createElement)(tag, attrs)),
        ...(Array.isArray(children) ? children : [children]) || []
      ]
    )
  );
  Component.propTypes = {
    color: import_prop_types.default.string,
    size: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number]),
    strokeWidth: import_prop_types.default.oneOfType([import_prop_types.default.string, import_prop_types.default.number])
  };
  Component.displayName = `${iconName}`;
  return Component;
};

// node_modules/lucide-react/dist/esm/icons/disc.js
var Disc = createReactComponent("Disc", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }]
]);

// node_modules/lucide-react/dist/esm/icons/home.js
var Home = createReactComponent("Home", [
  [
    "path",
    { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" }
  ],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }]
]);

// node_modules/lucide-react/dist/esm/icons/info.js
var Info = createReactComponent("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", y1: "16", x2: "12", y2: "12", key: "dkqlv3" }],
  ["line", { x1: "12", y1: "8", x2: "12.01", y2: "8", key: "1kl4hv" }]
]);

// node_modules/lucide-react/dist/esm/icons/list.js
var List = createReactComponent("List", [
  ["line", { x1: "8", y1: "6", x2: "21", y2: "6", key: "1kveod" }],
  ["line", { x1: "8", y1: "12", x2: "21", y2: "12", key: "120u6p" }],
  ["line", { x1: "8", y1: "18", x2: "21", y2: "18", key: "1k409v" }],
  ["line", { x1: "3", y1: "6", x2: "3.01", y2: "6", key: "13co06" }],
  ["line", { x1: "3", y1: "12", x2: "3.01", y2: "12", key: "11tec3" }],
  ["line", { x1: "3", y1: "18", x2: "3.01", y2: "18", key: "14wug1" }]
]);

// node_modules/lucide-react/dist/esm/icons/tags.js
var Tags = createReactComponent("Tags", [
  [
    "path",
    {
      d: "M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z",
      key: "gt587u"
    }
  ],
  ["path", { d: "M6 9.01V9", key: "1flxpt" }],
  ["path", { d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19", key: "1cbfv1" }]
]);

// node_modules/lucide-react/dist/esm/icons/users.js
var Users = createReactComponent("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
]);

// node_modules/lucide-react/dist/esm/icons/wrench.js
var Wrench = createReactComponent("Wrench", [
  [
    "path",
    {
      d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/moon.js
var Moon = createReactComponent("Moon", [
  ["path", { d: "M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "1rit1i" }]
]);

// node_modules/lucide-react/dist/esm/icons/sun.js
var Sun = createReactComponent("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
]);

export {
  Disc,
  Home,
  Info,
  List,
  Moon,
  Sun,
  Tags,
  Users,
  Wrench
};
//# sourceMappingURL=/build/_shared/chunk-IROXDNAB.js.map
