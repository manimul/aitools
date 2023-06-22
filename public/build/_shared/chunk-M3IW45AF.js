import {
  getImageDimensions,
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
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
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/get-youtube-id/index.js
var require_get_youtube_id = __commonJS({
  "node_modules/get-youtube-id/index.js"(exports, module) {
    (function(root, factory) {
      if (typeof exports === "object") {
        module.exports = factory();
      } else if (typeof define === "function" && define.amd) {
        define(factory);
      } else {
        root.getYouTubeID = factory();
      }
    })(exports, function(exports2) {
      return function(url, opts) {
        if (opts == void 0) {
          opts = { fuzzy: true };
        }
        if (/youtu\.?be/.test(url)) {
          var i;
          var patterns = [
            /youtu\.be\/([^#\&\?]{11})/,
            /\?v=([^#\&\?]{11})/,
            /\&v=([^#\&\?]{11})/,
            /embed\/([^#\&\?]{11})/,
            /\/v\/([^#\&\?]{11})/
          ];
          for (i = 0; i < patterns.length; ++i) {
            if (patterns[i].test(url)) {
              return patterns[i].exec(url)[1];
            }
          }
          if (opts.fuzzy) {
            var tokens = url.split(/[\/\&\?=#\.\s]/g);
            for (i = 0; i < tokens.length; ++i) {
              if (/^[^#\&\?]{11}$/.test(tokens[i])) {
                return tokens[i];
              }
            }
          }
        }
        return null;
      };
    });
  }
});

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
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
      children
    });
  },
  strong: (_ref3) => {
    let {
      children
    } = _ref3;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
      children
    });
  },
  code: (_ref4) => {
    let {
      children
    } = _ref4;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
      children
    });
  },
  underline: (_ref5) => {
    let {
      children
    } = _ref5;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      style: underlineStyle,
      children
    });
  },
  "strike-through": (_ref6) => {
    let {
      children
    } = _ref6;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("del", {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
      children
    });
  },
  bullet: (_ref8) => {
    let {
      children
    } = _ref8;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
      children
    });
  }
};
var DefaultListItem = (_ref9) => {
  let {
    children
  } = _ref9;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
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
  return isInline ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    style: hidden,
    children: warning
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    style: hidden,
    children: warning
  });
};
var DefaultUnknownMark = (_ref11) => {
  let {
    markType,
    children
  } = _ref11;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
    className: "unknown__pt__mark__".concat(markType),
    children
  });
};
var DefaultUnknownBlockStyle = (_ref12) => {
  let {
    children
  } = _ref12;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
    children
  });
};
var DefaultUnknownList = (_ref13) => {
  let {
    children
  } = _ref13;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
    children
  });
};
var DefaultUnknownListItem = (_ref14) => {
  let {
    children
  } = _ref14;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
    children
  });
};
var DefaultHardBreak = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {});
var defaultBlockStyles = {
  normal: (_ref15) => {
    let {
      children
    } = _ref15;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
      children
    });
  },
  blockquote: (_ref16) => {
    let {
      children
    } = _ref16;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
      children
    });
  },
  h1: (_ref17) => {
    let {
      children
    } = _ref17;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
      children
    });
  },
  h2: (_ref18) => {
    let {
      children
    } = _ref18;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
      children
    });
  },
  h3: (_ref19) => {
    let {
      children
    } = _ref19;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
      children
    });
  },
  h4: (_ref20) => {
    let {
      children
    } = _ref20;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
      children
    });
  },
  h5: (_ref21) => {
    let {
      children
    } = _ref21;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h5", {
      children
    });
  },
  h6: (_ref22) => {
    let {
      children
    } = _ref22;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h6", {
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
  const components2 = (0, import_react.useMemo)(() => {
    return componentOverrides ? mergeComponents(defaultComponents, componentOverrides) : defaultComponents;
  }, [componentOverrides]);
  const renderNode = (0, import_react.useMemo)(() => getNodeRenderer(components2, handleMissingComponent), [components2, handleMissingComponent]);
  const rendered = nested.map((node, index) => renderNode({
    node,
    index,
    isInline: false,
    renderNode
  }));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Li, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(List, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Span, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
      ...props,
      value: props.node,
      renderNode
    }, key);
  }
  function renderText(node, key) {
    if (node.text === "\n") {
      const HardBreak = components2.hardBreak;
      return HardBreak ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HardBreak, {}, key) : "\n";
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
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Node, {
        ...nodeOptions
      }, key);
    }
    handleMissingComponent(unknownTypeWarning(node._type), {
      nodeType: "block",
      type: node._type
    });
    const UnknownType = components2.unknownType;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnknownType, {
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

// app/components/SanityYoutube.tsx
var import_get_youtube_id = __toESM(require_get_youtube_id());

// node_modules/react-lite-youtube-embed/dist/index.es.jsx
var React = __toESM(require_react());
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function LiteYouTubeEmbed(props) {
  var _a = React.useState(false), preconnected = _a[0], setPreconnected = _a[1];
  var _b = React.useState(false), iframe = _b[0], setIframe = _b[1];
  var videoId = encodeURIComponent(props.id);
  var videoPlaylisCovertId = typeof props.playlistCoverId === "string" ? encodeURIComponent(props.playlistCoverId) : null;
  var videoTitle = props.title;
  var posterImp = props.poster || "hqdefault";
  var paramsImp = "&" + props.params || "";
  var mutedImp = props.muted ? "&mute=1" : "";
  var announceWatch = props.announce || "Watch";
  var format = props.webp ? "webp" : "jpg";
  var vi = props.webp ? "vi_webp" : "vi";
  var posterUrl = props.thumbnail || (!props.playlist ? "https://i.ytimg.com/" + vi + "/" + videoId + "/" + posterImp + "." + format : "https://i.ytimg.com/" + vi + "/" + videoPlaylisCovertId + "/" + posterImp + "." + format);
  var ytUrl = props.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
  ytUrl = props.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
  var iframeSrc = !props.playlist ? ytUrl + "/embed/" + videoId + "?autoplay=1&state=1" + mutedImp + paramsImp : ytUrl + "/embed/videoseries?autoplay=1" + mutedImp + "&list=" + videoId + paramsImp;
  var activatedClassImp = props.activatedClass || "lyt-activated";
  var adNetworkImp = props.adNetwork || false;
  var aspectHeight = props.aspectHeight || 9;
  var aspectWidth = props.aspectWidth || 16;
  var iframeClassImp = props.iframeClass || "";
  var playerClassImp = props.playerClass || "lty-playbtn";
  var wrapperClassImp = props.wrapperClass || "yt-lite";
  var onIframeAdded = props.onIframeAdded || function() {
  };
  var rel = props.rel ? "prefetch" : "preload";
  var warmConnections = function() {
    if (preconnected)
      return;
    setPreconnected(true);
  };
  var addIframe = function() {
    if (iframe)
      return;
    setIframe(true);
  };
  React.useEffect(function() {
    if (iframe) {
      onIframeAdded();
    }
  }, [iframe]);
  return React.createElement(
    React.Fragment,
    null,
    React.createElement("link", { rel, href: posterUrl, as: "image" }),
    React.createElement(React.Fragment, null, preconnected && React.createElement(
      React.Fragment,
      null,
      React.createElement("link", { rel: "preconnect", href: ytUrl }),
      React.createElement("link", { rel: "preconnect", href: "https://www.google.com" }),
      adNetworkImp && React.createElement(
        React.Fragment,
        null,
        React.createElement("link", { rel: "preconnect", href: "https://static.doubleclick.net" }),
        React.createElement("link", { rel: "preconnect", href: "https://googleads.g.doubleclick.net" })
      )
    )),
    React.createElement(
      "article",
      { onPointerOver: warmConnections, onClick: addIframe, className: wrapperClassImp + " " + (iframe ? activatedClassImp : ""), "data-title": videoTitle, style: __assign({ backgroundImage: "url(" + posterUrl + ")" }, {
        "--aspect-ratio": aspectHeight / aspectWidth * 100 + "%"
      }) },
      React.createElement("button", { type: "button", className: playerClassImp, "aria-label": announceWatch + " " + videoTitle }),
      iframe && React.createElement("iframe", { className: iframeClassImp, title: videoTitle, width: "560", height: "315", frameBorder: "0", allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", allowFullScreen: true, src: iframeSrc })
    )
  );
}

// app/components/SanityYoutube.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
function SanityYoutube(props) {
  const { value } = props;
  const youtubeId = (0, import_get_youtube_id.default)(value.url) || "";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(LiteYouTubeEmbed, { id: youtubeId || "", title: value.title || "" }, void 0, false, {
    fileName: "app/components/SanityYoutube.tsx",
    lineNumber: 10,
    columnNumber: 10
  }, this);
}

// app/components/SanityContent.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
var components = {
  types: {
    image: SanityImage,
    youtube: SanityYoutube
  }
};
function SanityContent(props) {
  const { value } = props;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "prose font-serif dark:prose-invert md:prose-2xl prose-headings:font-mono prose-a:text-cyan-600 dark:prose-a:text-cyan-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(PortableText, { value, components }, void 0, false, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/SanityContent.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

export {
  SanityContent
};
//# sourceMappingURL=/build/_shared/chunk-M3IW45AF.js.map
