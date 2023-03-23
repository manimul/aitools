import {
  getImageDimensions,
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import {
  Layout,
  RecordCover,
  Title
} from "/build/_shared/chunk-DFIOHKBP.js";
import {
  projectDetails
} from "/build/_shared/chunk-RVWPLYFV.js";
import {
  require_image_url_umd
} from "/build/_shared/chunk-7E4LWBBH.js";
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

// node_modules/@portabletext/toolkit/dist/portable-text-toolkit.esm.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function isPortableTextSpan(node) {
  return node._type === "span" && "text" in node && typeof node.text === "string" && (typeof node.marks === "undefined" || Array.isArray(node.marks) && node.marks.every((mark) => typeof mark === "string"));
}
function isPortableTextBlock(node) {
  return typeof node._type === "string" && node._type[0] !== "@" && (!("markDefs" in node) || Array.isArray(node.markDefs) && node.markDefs.every((def) => typeof def._key === "string")) && "children" in node && Array.isArray(node.children) && node.children.every((child) => typeof child === "object" && "_type" in child);
}
function isPortableTextListItemBlock(block) {
  return isPortableTextBlock(block) && "listItem" in block && typeof block.listItem === "string" && (typeof block.level === "undefined" || typeof block.level === "number");
}
function isPortableTextToolkitList(block) {
  return block._type === "@list";
}
function isPortableTextToolkitSpan(span) {
  return span._type === "@span";
}
function isPortableTextToolkitTextNode(node) {
  return node._type === "@text";
}
var knownDecorators = ["strong", "em", "code", "underline", "strike-through"];
function sortMarksByOccurences(span, index, blockChildren) {
  if (!isPortableTextSpan(span) || !span.marks) {
    return [];
  }
  if (!span.marks.length) {
    return [];
  }
  const marks = span.marks.slice();
  const occurences = {};
  marks.forEach((mark) => {
    occurences[mark] = 1;
    for (let siblingIndex = index + 1; siblingIndex < blockChildren.length; siblingIndex++) {
      const sibling = blockChildren[siblingIndex];
      if (sibling && isPortableTextSpan(sibling) && Array.isArray(sibling.marks) && sibling.marks.indexOf(mark) !== -1) {
        occurences[mark]++;
      } else {
        break;
      }
    }
  });
  return marks.sort((markA, markB) => sortMarks(occurences, markA, markB));
}
function sortMarks(occurences, markA, markB) {
  const aOccurences = occurences[markA];
  const bOccurences = occurences[markB];
  if (aOccurences !== bOccurences) {
    return bOccurences - aOccurences;
  }
  const aKnownPos = knownDecorators.indexOf(markA);
  const bKnownPos = knownDecorators.indexOf(markB);
  if (aKnownPos !== bKnownPos) {
    return aKnownPos - bKnownPos;
  }
  return markA.localeCompare(markB);
}
function buildMarksTree(block) {
  var _a;
  const {
    children,
    markDefs = []
  } = block;
  if (!children || !children.length) {
    return [];
  }
  const sortedMarks = children.map(sortMarksByOccurences);
  const rootNode = {
    _type: "@span",
    children: [],
    markType: "<unknown>"
  };
  let nodeStack = [rootNode];
  for (let i = 0; i < children.length; i++) {
    const span = children[i];
    if (!span) {
      continue;
    }
    const marksNeeded = sortedMarks[i] || [];
    let pos = 1;
    if (nodeStack.length > 1) {
      for (pos; pos < nodeStack.length; pos++) {
        const mark = ((_a = nodeStack[pos]) == null ? void 0 : _a.markKey) || "";
        const index = marksNeeded.indexOf(mark);
        if (index === -1) {
          break;
        }
        marksNeeded.splice(index, 1);
      }
    }
    nodeStack = nodeStack.slice(0, pos);
    let currentNode = nodeStack[nodeStack.length - 1];
    if (!currentNode) {
      continue;
    }
    for (const markKey of marksNeeded) {
      const markDef = markDefs.find((def) => def._key === markKey);
      const markType = markDef ? markDef._type : markKey;
      const node = {
        _type: "@span",
        _key: span._key,
        children: [],
        markDef,
        markType,
        markKey
      };
      currentNode.children.push(node);
      nodeStack.push(node);
      currentNode = node;
    }
    if (isPortableTextSpan(span)) {
      const lines = span.text.split("\n");
      for (let line = lines.length; line-- > 1; ) {
        lines.splice(line, 0, "\n");
      }
      currentNode.children = currentNode.children.concat(lines.map((text) => ({
        _type: "@text",
        text
      })));
    } else {
      currentNode.children = currentNode.children.concat(span);
    }
  }
  return rootNode.children;
}
function nestLists(blocks, mode) {
  const tree = [];
  let currentList;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    if (!block) {
      continue;
    }
    if (!isPortableTextListItemBlock(block)) {
      tree.push(block);
      currentList = void 0;
      continue;
    }
    if (!currentList) {
      currentList = listFromBlock(block, i, mode);
      tree.push(currentList);
      continue;
    }
    if (blockMatchesList(block, currentList)) {
      currentList.children.push(block);
      continue;
    }
    if ((block.level || 1) > currentList.level) {
      const newList = listFromBlock(block, i, mode);
      if (mode === "html") {
        const lastListItem = currentList.children[currentList.children.length - 1];
        const newLastChild = _objectSpread(_objectSpread({}, lastListItem), {}, {
          children: [...lastListItem.children, newList]
        });
        currentList.children[currentList.children.length - 1] = newLastChild;
      } else {
        currentList.children.push(newList);
      }
      currentList = newList;
      continue;
    }
    if ((block.level || 1) < currentList.level) {
      const matchingBranch = tree[tree.length - 1];
      const match = matchingBranch && findListMatching(matchingBranch, block);
      if (match) {
        currentList = match;
        currentList.children.push(block);
        continue;
      }
      currentList = listFromBlock(block, i, mode);
      tree.push(currentList);
      continue;
    }
    if (block.listItem !== currentList.listItem) {
      const matchingBranch = tree[tree.length - 1];
      const match = matchingBranch && findListMatching(matchingBranch, {
        level: block.level || 1
      });
      if (match && match.listItem === block.listItem) {
        currentList = match;
        currentList.children.push(block);
        continue;
      } else {
        currentList = listFromBlock(block, i, mode);
        tree.push(currentList);
        continue;
      }
    }
    console.warn("Unknown state encountered for block", block);
    tree.push(block);
  }
  return tree;
}
function blockMatchesList(block, list) {
  return (block.level || 1) === list.level && block.listItem === list.listItem;
}
function listFromBlock(block, index, mode) {
  return {
    _type: "@list",
    _key: "".concat(block._key || "".concat(index), "-parent"),
    mode,
    level: block.level || 1,
    listItem: block.listItem,
    children: [block]
  };
}
function findListMatching(rootNode, matching) {
  const level = matching.level || 1;
  const style = matching.listItem || "normal";
  const filterOnType = typeof matching.listItem === "string";
  if (isPortableTextToolkitList(rootNode) && (rootNode.level || 1) === level && filterOnType && (rootNode.listItem || "normal") === style) {
    return rootNode;
  }
  if (!("children" in rootNode)) {
    return void 0;
  }
  const node = rootNode.children[rootNode.children.length - 1];
  return node && !isPortableTextSpan(node) ? findListMatching(node, matching) : void 0;
}
function spanToPlainText(span) {
  let text = "";
  span.children.forEach((current) => {
    if (isPortableTextToolkitTextNode(current)) {
      text += current.text;
    } else if (isPortableTextToolkitSpan(current)) {
      text += spanToPlainText(current);
    }
  });
  return text;
}
var LIST_NEST_MODE_HTML = "html";

// node_modules/@portabletext/react/dist/react-portable-text.esm.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var import_react2 = __toESM(require_react());
function mergeComponents(parent, overrides) {
  const {
    block,
    list,
    listItem,
    marks,
    types,
    ...rest
  } = overrides;
  return {
    ...parent,
    block: mergeDeeply(parent, overrides, "block"),
    list: mergeDeeply(parent, overrides, "list"),
    listItem: mergeDeeply(parent, overrides, "listItem"),
    marks: mergeDeeply(parent, overrides, "marks"),
    types: mergeDeeply(parent, overrides, "types"),
    ...rest
  };
}
function mergeDeeply(parent, overrides, key) {
  const override = overrides[key];
  const parentVal = parent[key];
  if (typeof override === "function") {
    return override;
  }
  if (override && typeof parentVal === "function") {
    return override;
  }
  if (override) {
    return {
      ...parentVal,
      ...override
    };
  }
  return parentVal;
}
var link = (_ref) => {
  let {
    children,
    value
  } = _ref;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", {
    href: value == null ? void 0 : value.href,
    children
  });
};
var underlineStyle = {
  textDecoration: "underline"
};
var defaultMarks = {
  em: (_ref2) => {
    let {
      children
    } = _ref2;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("em", {
      children
    });
  },
  strong: (_ref3) => {
    let {
      children
    } = _ref3;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("strong", {
      children
    });
  },
  code: (_ref4) => {
    let {
      children
    } = _ref4;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("code", {
      children
    });
  },
  underline: (_ref5) => {
    let {
      children
    } = _ref5;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
      style: underlineStyle,
      children
    });
  },
  "strike-through": (_ref6) => {
    let {
      children
    } = _ref6;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("del", {
      children
    });
  },
  link
};
var defaultLists = {
  number: (_ref7) => {
    let {
      children
    } = _ref7;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ol", {
      children
    });
  },
  bullet: (_ref8) => {
    let {
      children
    } = _ref8;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", {
      children
    });
  }
};
var DefaultListItem = (_ref9) => {
  let {
    children
  } = _ref9;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
    children
  });
};
var getTemplate = (type, prop) => "[@portabletext/react] Unknown ".concat(type, ", specify a component for it in the `components.").concat(prop, "` prop");
var unknownTypeWarning = (typeName) => getTemplate('block type "'.concat(typeName, '"'), "types");
var unknownMarkWarning = (markType) => getTemplate('mark type "'.concat(markType, '"'), "marks");
var unknownBlockStyleWarning = (blockStyle) => getTemplate('block style "'.concat(blockStyle, '"'), "block");
var unknownListStyleWarning = (listStyle) => getTemplate('list style "'.concat(listStyle, '"'), "list");
var unknownListItemStyleWarning = (listStyle) => getTemplate('list item style "'.concat(listStyle, '"'), "listItem");
function printWarning(message) {
  console.warn(message);
}
var hidden = {
  display: "none"
};
var DefaultUnknownType = (_ref10) => {
  let {
    value,
    isInline
  } = _ref10;
  const warning = unknownTypeWarning(value._type);
  return isInline ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
    style: hidden,
    children: warning
  }) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", {
    style: hidden,
    children: warning
  });
};
var DefaultUnknownMark = (_ref11) => {
  let {
    markType,
    children
  } = _ref11;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", {
    className: "unknown__pt__mark__".concat(markType),
    children
  });
};
var DefaultUnknownBlockStyle = (_ref12) => {
  let {
    children
  } = _ref12;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
    children
  });
};
var DefaultUnknownList = (_ref13) => {
  let {
    children
  } = _ref13;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", {
    children
  });
};
var DefaultUnknownListItem = (_ref14) => {
  let {
    children
  } = _ref14;
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", {
    children
  });
};
var DefaultHardBreak = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {});
var defaultBlockStyles = {
  normal: (_ref15) => {
    let {
      children
    } = _ref15;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", {
      children
    });
  },
  blockquote: (_ref16) => {
    let {
      children
    } = _ref16;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("blockquote", {
      children
    });
  },
  h1: (_ref17) => {
    let {
      children
    } = _ref17;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", {
      children
    });
  },
  h2: (_ref18) => {
    let {
      children
    } = _ref18;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", {
      children
    });
  },
  h3: (_ref19) => {
    let {
      children
    } = _ref19;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", {
      children
    });
  },
  h4: (_ref20) => {
    let {
      children
    } = _ref20;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", {
      children
    });
  },
  h5: (_ref21) => {
    let {
      children
    } = _ref21;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h5", {
      children
    });
  },
  h6: (_ref22) => {
    let {
      children
    } = _ref22;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h6", {
      children
    });
  }
};
var defaultComponents = {
  types: {},
  block: defaultBlockStyles,
  marks: defaultMarks,
  list: defaultLists,
  listItem: DefaultListItem,
  hardBreak: DefaultHardBreak,
  unknownType: DefaultUnknownType,
  unknownMark: DefaultUnknownMark,
  unknownList: DefaultUnknownList,
  unknownListItem: DefaultUnknownListItem,
  unknownBlockStyle: DefaultUnknownBlockStyle
};
function PortableText(_ref23) {
  let {
    value: input,
    components: componentOverrides,
    listNestingMode,
    onMissingComponent: missingComponentHandler = printWarning
  } = _ref23;
  const handleMissingComponent = missingComponentHandler || noop;
  const blocks = Array.isArray(input) ? input : [input];
  const nested = nestLists(blocks, listNestingMode || LIST_NEST_MODE_HTML);
  const components2 = (0, import_react2.useMemo)(() => {
    return componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents;
  }, [componentOverrides]);
  const renderNode = (0, import_react2.useMemo)(() => getNodeRenderer(components2, handleMissingComponent), [components2, handleMissingComponent]);
  const rendered = nested.map((node, index) => renderNode({
    node,
    index,
    isInline: false,
    renderNode
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, {
    children: rendered
  });
}
var getNodeRenderer = (components2, handleMissingComponent) => {
  function renderNode(options) {
    const {
      node,
      index,
      isInline
    } = options;
    const key = node._key || "node-".concat(index);
    if (isPortableTextToolkitList(node)) {
      return renderList(node, index, key);
    }
    if (isPortableTextListItemBlock(node)) {
      return renderListItem(node, index, key);
    }
    if (isPortableTextToolkitSpan(node)) {
      return renderSpan(node, index, key);
    }
    if (isPortableTextBlock(node)) {
      return renderBlock(node, index, key, isInline);
    }
    if (isPortableTextToolkitTextNode(node)) {
      return renderText(node, key);
    }
    return renderCustomBlock(node, index, key, isInline);
  }
  function renderListItem(node, index, key) {
    const tree = serializeBlock({
      node,
      index,
      isInline: false,
      renderNode
    });
    const renderer = components2.listItem;
    const handler = typeof renderer === "function" ? renderer : renderer[node.listItem];
    const Li = handler || components2.unknownListItem;
    if (Li === components2.unknownListItem) {
      const style = node.listItem || "bullet";
      handleMissingComponent(unknownListItemStyleWarning(style), {
        type: style,
        nodeType: "listItemStyle"
      });
    }
    let children = tree.children;
    if (node.style && node.style !== "normal") {
      const {
        listItem,
        ...blockNode
      } = node;
      children = renderNode({
        node: blockNode,
        index,
        isInline: false,
        renderNode
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Li, {
      value: node,
      index,
      isInline: false,
      renderNode,
      children
    }, key);
  }
  function renderList(node, index, key) {
    const children = node.children.map((child, childIndex) => renderNode({
      node: child._key ? child : {
        ...child,
        _key: "li-".concat(index, "-").concat(childIndex)
      },
      index,
      isInline: false,
      renderNode
    }));
    const component = components2.list;
    const handler = typeof component === "function" ? component : component[node.listItem];
    const List = handler || components2.unknownList;
    if (List === components2.unknownList) {
      const style = node.listItem || "bullet";
      handleMissingComponent(unknownListStyleWarning(style), {
        nodeType: "listStyle",
        type: style
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(List, {
      value: node,
      index,
      isInline: false,
      renderNode,
      children
    }, key);
  }
  function renderSpan(node, _index, key) {
    const {
      markDef,
      markType,
      markKey
    } = node;
    const Span = components2.marks[markType] || components2.unknownMark;
    const children = node.children.map((child, childIndex) => renderNode({
      node: child,
      index: childIndex,
      isInline: true,
      renderNode
    }));
    if (Span === components2.unknownMark) {
      handleMissingComponent(unknownMarkWarning(markType), {
        nodeType: "mark",
        type: markType
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Span, {
      text: spanToPlainText(node),
      value: markDef,
      markType,
      markKey,
      renderNode,
      children
    }, key);
  }
  function renderBlock(node, index, key, isInline) {
    const {
      _key,
      ...props
    } = serializeBlock({
      node,
      index,
      isInline,
      renderNode
    });
    const style = props.node.style || "normal";
    const handler = typeof components2.block === "function" ? components2.block : components2.block[style];
    const Block = handler || components2.unknownBlockStyle;
    if (Block === components2.unknownBlockStyle) {
      handleMissingComponent(unknownBlockStyleWarning(style), {
        nodeType: "blockStyle",
        type: style
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Block, {
      ...props,
      value: props.node,
      renderNode
    }, key);
  }
  function renderText(node, key) {
    if (node.text === "\n") {
      const HardBreak = components2.hardBreak;
      return HardBreak ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(HardBreak, {}, key) : "\n";
    }
    return node.text;
  }
  function renderCustomBlock(node, index, key, isInline) {
    const Node = components2.types[node._type];
    const nodeOptions = {
      value: node,
      isInline,
      index,
      renderNode
    };
    if (Node) {
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Node, {
        ...nodeOptions
      }, key);
    }
    handleMissingComponent(unknownTypeWarning(node._type), {
      nodeType: "block",
      type: node._type
    });
    const UnknownType = components2.unknownType;
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(UnknownType, {
      ...nodeOptions
    }, key);
  }
  return renderNode;
};
function serializeBlock(options) {
  const {
    node,
    index,
    isInline,
    renderNode
  } = options;
  const tree = buildMarksTree(node);
  const children = tree.map((child, i) => renderNode({
    node: child,
    isInline: true,
    index: i,
    renderNode
  }));
  return {
    _key: node._key || "block-".concat(index),
    children,
    index,
    isInline,
    node
  };
}
function noop() {
}

// app/components/SanityImage.tsx
var import_image_url = __toESM(require_image_url_umd());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
function SanityImage(props) {
  const { value, isInline } = props;
  const { width, height } = getImageDimensions(value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
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
    false,
    {
      fileName: "app/components/SanityImage.tsx",
      lineNumber: 15,
      columnNumber: 5
    },
    this
  );
}

// app/components/SanityContent.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
var components = {
  types: {
    image: SanityImage
  }
};
function SanityContent(props) {
  const { value } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "prose font-serif dark:prose-invert md:prose-2xl prose-a:text-cyan-600 dark:prose-a:text-cyan-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(PortableText, { value, components }, void 0, false, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 22,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/ExitPreview.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
function ExitPreview() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pointer-events-none fixed inset-0 flex h-screen w-screen items-end justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { className: "pointer-events-auto", action: "/resource/preview", method: "POST", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "bg-black p-4 font-bold text-white", type: "submit", children: "Exit Preview Mode" }, void 0, false, {
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
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
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
  const nonYellowStar = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      className: "h-5 w-5 text-gray-300 dark:text-gray-500",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, void 0, false, {
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
  const yellowStar = /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "svg",
    {
      "aria-hidden": "true",
      className: "h-5 w-5 text-yellow-400",
      fill: "currentColor",
      viewBox: "0 0 20 20",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }, void 0, false, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Layout, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: " mb-6 border p-4 md:p-6  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mx-auto  grid  gap-4 md:py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "order-2 mr-auto space-y-2 place-self-center md:order-1 lg:col-span-7", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("header", { className: "space-y-4", children: [
        category ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "  text-xs uppercase tracking-widest opacity-70 ", children: [
          "Category:",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
        title ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Title, { children: title }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 83,
          columnNumber: 24
        }, this) : null,
        content && (content == null ? void 0 : content.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: " text-6xl  italic  ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SanityContent, { value: content }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 86,
          columnNumber: 19
        }, this) }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 85,
          columnNumber: 17
        }, this) : null,
        tags ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xs  uppercase tracking-widest opacity-70 ", children: "Tags:" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 92,
            columnNumber: 19
          }, this),
          tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "div",
            {
              className: " mx-2 my-4 inline-flex  rounded-lg bg-blue-300 py-2 px-3 lowercase tracking-widest",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Link, { to: "/tags/" + tag.slug, className: "text-xs", children: [
                tag.title,
                " "
              ] }, void 0, true, {
                fileName: "app/components/Product.tsx",
                lineNumber: 100,
                columnNumber: 23
              }, this)
            },
            tag._key,
            false,
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
        score ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xs  uppercase tracking-widest opacity-70 ", children: "Score:" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 109,
            columnNumber: 19
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-4xl text-yellow-500" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 112,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center", children: [
            starIcons,
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "ml-2 text-sm font-medium text-gray-500 dark:text-gray-400", children: [
              score,
              " out of 5"
            ] }, void 0, true, {
              fileName: "app/components/Product.tsx",
              lineNumber: 115,
              columnNumber: 21
            }, this)
          ] }, void 0, true, {
            fileName: "app/components/Product.tsx",
            lineNumber: 113,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 108,
          columnNumber: 17
        }, this) : null,
        pricing ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-xs  uppercase tracking-widest opacity-70 ", children: "Price Range:" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 123,
            columnNumber: 19
          }, this),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "text-bold font-serif text-2xl italic text-green-600", children: [
            " ",
            pricing
          ] }, void 0, true, {
            fileName: "app/components/Product.tsx",
            lineNumber: 126,
            columnNumber: 19
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 122,
          columnNumber: 17
        }, this) : null,
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "a",
          {
            href: "#overview",
            className: " mr-4 inline-flex border-2 border-blue-300 py-4 px-12 text-blue-600 dark:text-blue-300 ",
            children: "Learn more"
          },
          void 0,
          false,
          {
            fileName: "app/components/Product.tsx",
            lineNumber: 132,
            columnNumber: 15
          },
          this
        ),
        referral ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
          "a",
          {
            className: " from-blue-5 200 inline-flex border-2 border-blue-500 bg-blue-500  py-4\n                  px-12 text-white",
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
            lineNumber: 139,
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "order-1 md:order-2 lg:col-span-5 lg:mt-0 lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecordCover, { image, title }, void 0, false, {
        fileName: "app/components/Product.tsx",
        lineNumber: 150,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/components/Product.tsx",
        lineNumber: 149,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("article", { className: "flex flex-col items-start gap-4 lg:flex-row lg:gap-12", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid-gap-4 top-1 mx-auto grid grid-cols-1 space-y-4 md:sticky md:max-w-[70vw]", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(RecordCover, { image, title }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 157,
          columnNumber: 11
        }, this),
        features && (features == null ? void 0 : features.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 rounded border bg-[#ffffff] p-4 dark:divide-gray-900 dark:bg-[#111111]", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "featureing-tighter py-3 text-2xl font-bold", children: (features == null ? void 0 : features.length) === 1 ? `1 Great Feature` : `${features == null ? void 0 : features.length} Key Features` }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 161,
            columnNumber: 17
          }, this),
          features.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "li",
            {
              className: "flex items-center justify-between py-3",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-lg", children: feature.title }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 171,
                columnNumber: 21
              }, this)
            },
            feature._key,
            false,
            {
              fileName: "app/components/Product.tsx",
              lineNumber: 167,
              columnNumber: 19
            },
            this
          ))
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 160,
          columnNumber: 15
        }, this) }, void 0, false, {
          fileName: "app/components/Product.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/Product.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: " flex flex-shrink-0 flex-col gap-4 md:gap-4 lg:w-2/3", children: [
        overview && (overview == null ? void 0 : overview.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { id: "overview", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl", children: "Overview" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 181,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SanityContent, { value: overview }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 182,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 180,
          columnNumber: 13
        }, this) : null,
        ease && (ease == null ? void 0 : ease.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "mt-6 border-t border-gray-400 py-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl ", children: "Ease of Use" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SanityContent, { value: ease }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 188,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this) : null,
        support && (support == null ? void 0 : support.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { className: "mt-6 border-t border-gray-400 py-6", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-2xl ", children: "Customer Support" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 193,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SanityContent, { value: support }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 194,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 192,
          columnNumber: 13
        }, this) : null,
        referral ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
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
            lineNumber: 198,
            columnNumber: 13
          },
          this
        ) : null,
        pros && cons && (pros == null ? void 0 : pros.length) > 0 && (cons == null ? void 0 : cons.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("section", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: " py-3 text-2xl font-bold", children: "Pros & Cons" }, void 0, false, {
            fileName: "app/components/Product.tsx",
            lineNumber: 208,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "grid divide-x divide-gray-100 dark:divide-gray-900  md:grid-cols-2", children: [
            pros && (pros == null ? void 0 : pros.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { children: "Pros" }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 212,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: pros.map((pro) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                "li",
                {
                  className: "flex items-center justify-between py-3",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-lg", children: [
                    "\u{1F44D} ",
                    pro.title
                  ] }, void 0, true, {
                    fileName: "app/components/Product.tsx",
                    lineNumber: 219,
                    columnNumber: 27
                  }, this)
                },
                pro._key,
                false,
                {
                  fileName: "app/components/Product.tsx",
                  lineNumber: 215,
                  columnNumber: 25
                },
                this
              )) }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 213,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Product.tsx",
              lineNumber: 211,
              columnNumber: 19
            }, this) : null,
            cons && (cons == null ? void 0 : cons.length) > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "p-4", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "text-sm uppercase", children: "Cons" }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 227,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: " grid grid-cols-1 divide-y divide-gray-100 dark:divide-gray-900", children: cons.map((con) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: " py-3", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "text-lg", children: [
                  "\u{1F44E} ",
                  con.title
                ] }, void 0, true, {
                  fileName: "app/components/Product.tsx",
                  lineNumber: 232,
                  columnNumber: 27
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "text-lg", children: [
                  " ",
                  con.description
                ] }, void 0, true, {
                  fileName: "app/components/Product.tsx",
                  lineNumber: 233,
                  columnNumber: 27
                }, this)
              ] }, con._key, true, {
                fileName: "app/components/Product.tsx",
                lineNumber: 231,
                columnNumber: 25
              }, this)) }, void 0, false, {
                fileName: "app/components/Product.tsx",
                lineNumber: 229,
                columnNumber: 21
              }, this)
            ] }, void 0, true, {
              fileName: "app/components/Product.tsx",
              lineNumber: 226,
              columnNumber: 19
            }, this) : null
          ] }, void 0, true, {
            fileName: "app/components/Product.tsx",
            lineNumber: 209,
            columnNumber: 15
          }, this)
        ] }, void 0, true, {
          fileName: "app/components/Product.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, this) : null
      ] }, void 0, true, {
        fileName: "app/components/Product.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/Product.tsx",
      lineNumber: 155,
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ExitPreview, {}, void 0, false, {
      fileName: "app/components/Product.tsx",
      lineNumber: 264,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Record, { ...data }, void 0, false, {
      fileName: "app/components/Product.tsx",
      lineNumber: 265,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Product.tsx",
    lineNumber: 263,
    columnNumber: 5
  }, this);
}

export {
  PreviewSuspense,
  Record,
  PreviewRecord
};
//# sourceMappingURL=/build/_shared/chunk-TH6GI32Z.js.map
