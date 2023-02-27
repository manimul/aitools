import {
  require_prop_types
} from "/build/_shared/chunk-RZ47BF3R.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// app/sanity/projectDetails.ts
var projectDetails = () => {
  const { SANITY_PUBLIC_PROJECT_ID, SANITY_PUBLIC_DATASET, SANITY_PUBLIC_API_VERSION } = typeof document === "undefined" ? process.env : window.ENV;
  return {
    projectId: SANITY_PUBLIC_PROJECT_ID != null ? SANITY_PUBLIC_PROJECT_ID : `pnkijp0b`,
    dataset: SANITY_PUBLIC_DATASET != null ? SANITY_PUBLIC_DATASET : `remix`,
    apiVersion: SANITY_PUBLIC_API_VERSION != null ? SANITY_PUBLIC_API_VERSION : `2022-09-19`
  };
};

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

// node_modules/lucide-react/dist/esm/icons/thumbs-down.js
var ThumbsDown = createReactComponent("ThumbsDown", [
  ["path", { d: "M17 14V2", key: "8ymqnk" }],
  [
    "path",
    {
      d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",
      key: "s6e0r"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/thumbs-up.js
var ThumbsUp = createReactComponent("ThumbsUp", [
  ["path", { d: "M7 10v12", key: "1qc93n" }],
  [
    "path",
    {
      d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",
      key: "y3tblf"
    }
  ]
]);

// node_modules/lucide-react/dist/esm/icons/users.js
var Users = createReactComponent("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }]
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
  projectDetails,
  Disc,
  Home,
  Moon,
  Sun,
  Tags,
  ThumbsDown,
  ThumbsUp,
  Users
};
//# sourceMappingURL=/build/_shared/chunk-B4T4FDK4.js.map
