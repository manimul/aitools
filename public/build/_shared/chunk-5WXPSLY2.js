import {
  BoundaryElementProvider,
  Box,
  Button,
  Card,
  Ce,
  CheckmarkIcon,
  ChevronDownIcon,
  ClipboardIcon,
  ComposeIcon,
  Container,
  CopyIcon,
  DEFAULT_STUDIO_CLIENT_OPTIONS,
  Dialog,
  DocumentPreviewPresence,
  DocumentsIcon,
  EMPTY,
  EditIcon,
  EllipsisVerticalIcon,
  ErrorBoundary,
  Flex,
  Grid,
  InfoOutlineIcon,
  Inline,
  InsufficientPermissionsMessage,
  IntentLink,
  Label,
  Layer,
  LayerProvider,
  LegacyLayerProvider,
  MasterDetailIcon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  PreviewCard$1,
  PublishIcon,
  ResetIcon,
  RestoreIcon,
  SanityDefaultPreview,
  SortIcon,
  Spinner,
  Stack,
  StackCompactIcon,
  StackIcon,
  StateLink,
  Text,
  TextSkeleton,
  TextWithTone,
  Tooltip,
  TrashIcon,
  UnknownIcon,
  UnpublishIcon,
  WarningOutlineIcon,
  catchError,
  createHookFromObservableFactory,
  definePlugin,
  distinctUntilChanged,
  fromEvent,
  getConfigContextFromSource,
  getDraftId,
  getPreviewStateObservable,
  getPreviewValueWithFallback,
  getPublishedId,
  isRecord$2,
  isValidationErrorMarker,
  map,
  of,
  rem,
  require_baseGetTag,
  require_capitalize,
  require_createCompounder,
  require_find,
  require_isObjectLike,
  require_isString,
  require_omit,
  require_partition,
  require_pickBy,
  require_react_is,
  require_startCase,
  require_uniq,
  require_uniqBy,
  require_uniqueId,
  rgba,
  route,
  shareReplay,
  startWith,
  styled_components_browser_esm_default,
  switchMap,
  timer,
  toString,
  useClient,
  useConfigContextFromSource,
  useCurrentUser,
  useDocumentOperation,
  useDocumentPairPermissions,
  useDocumentPresence,
  useDocumentPreview,
  useDocumentPreviewStore,
  useDocumentStore,
  useEditState,
  useElementRect,
  useForwardedRef,
  useMemoObservable,
  useRouter,
  useSchema,
  useSource,
  useSyncState,
  useTemplatePermissions,
  useTemplates,
  useTimeAgo,
  useToast,
  useUnique,
  useValidationStatus,
  v4_default
} from "/build/_shared/chunk-V7LJJAU7.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __commonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/lodash/isNumber.js
var require_isNumber = __commonJS({
  "node_modules/lodash/isNumber.js"(exports, module) {
    var baseGetTag = require_baseGetTag();
    var isObjectLike = require_isObjectLike();
    var numberTag = "[object Number]";
    function isNumber2(value) {
      return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
    }
    module.exports = isNumber2;
  }
});

// node_modules/lodash/camelCase.js
var require_camelCase = __commonJS({
  "node_modules/lodash/camelCase.js"(exports, module) {
    var capitalize = require_capitalize();
    var createCompounder = require_createCompounder();
    var camelCase2 = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    module.exports = camelCase2;
  }
});

// node_modules/lodash/kebabCase.js
var require_kebabCase = __commonJS({
  "node_modules/lodash/kebabCase.js"(exports, module) {
    var createCompounder = require_createCompounder();
    var kebabCase2 = createCompounder(function(result, word, index) {
      return result + (index ? "-" : "") + word.toLowerCase();
    });
    module.exports = kebabCase2;
  }
});

// node_modules/toggle-selection/index.js
var require_toggle_selection = __commonJS({
  "node_modules/toggle-selection/index.js"(exports, module) {
    module.exports = function() {
      var selection = document.getSelection();
      if (!selection.rangeCount) {
        return function() {
        };
      }
      var active = document.activeElement;
      var ranges = [];
      for (var i = 0; i < selection.rangeCount; i++) {
        ranges.push(selection.getRangeAt(i));
      }
      switch (active.tagName.toUpperCase()) {
        case "INPUT":
        case "TEXTAREA":
          active.blur();
          break;
        default:
          active = null;
          break;
      }
      selection.removeAllRanges();
      return function() {
        selection.type === "Caret" && selection.removeAllRanges();
        if (!selection.rangeCount) {
          ranges.forEach(function(range) {
            selection.addRange(range);
          });
        }
        active && active.focus();
      };
    };
  }
});

// node_modules/copy-to-clipboard/index.js
var require_copy_to_clipboard = __commonJS({
  "node_modules/copy-to-clipboard/index.js"(exports, module) {
    "use strict";
    var deselectCurrent = require_toggle_selection();
    var clipboardToIE11Formatting = {
      "text/plain": "Text",
      "text/html": "Url",
      "default": "Text"
    };
    var defaultMessage = "Copy to clipboard: #{key}, Enter";
    function format(message) {
      var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
      return message.replace(/#{\s*key\s*}/g, copyKey);
    }
    function copy(text, options) {
      var debug, message, reselectPrevious, range, selection, mark, success = false;
      if (!options) {
        options = {};
      }
      debug = options.debug || false;
      try {
        reselectPrevious = deselectCurrent();
        range = document.createRange();
        selection = document.getSelection();
        mark = document.createElement("span");
        mark.textContent = text;
        mark.ariaHidden = "true";
        mark.style.all = "unset";
        mark.style.position = "fixed";
        mark.style.top = 0;
        mark.style.clip = "rect(0, 0, 0, 0)";
        mark.style.whiteSpace = "pre";
        mark.style.webkitUserSelect = "text";
        mark.style.MozUserSelect = "text";
        mark.style.msUserSelect = "text";
        mark.style.userSelect = "text";
        mark.addEventListener("copy", function(e) {
          e.stopPropagation();
          if (options.format) {
            e.preventDefault();
            if (typeof e.clipboardData === "undefined") {
              debug && console.warn("unable to use e.clipboardData");
              debug && console.warn("trying IE specific stuff");
              window.clipboardData.clearData();
              var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
              window.clipboardData.setData(format2, text);
            } else {
              e.clipboardData.clearData();
              e.clipboardData.setData(options.format, text);
            }
          }
          if (options.onCopy) {
            e.preventDefault();
            options.onCopy(e.clipboardData);
          }
        });
        document.body.appendChild(mark);
        range.selectNodeContents(mark);
        selection.addRange(range);
        var successful = document.execCommand("copy");
        if (!successful) {
          throw new Error("copy command was unsuccessful");
        }
        success = true;
      } catch (err) {
        debug && console.error("unable to copy using execCommand: ", err);
        debug && console.warn("trying IE specific stuff");
        try {
          window.clipboardData.setData(options.format || "text", text);
          options.onCopy && options.onCopy(window.clipboardData);
          success = true;
        } catch (err2) {
          debug && console.error("unable to copy using clipboardData: ", err2);
          debug && console.error("falling back to prompt");
          message = format("message" in options ? options.message : defaultMessage);
          window.prompt(message, text);
        }
      } finally {
        if (selection) {
          if (typeof selection.removeRange == "function") {
            selection.removeRange(range);
          } else {
            selection.removeAllRanges();
          }
        }
        if (mark) {
          document.body.removeChild(mark);
        }
        reselectPrevious();
      }
      return success;
    }
    module.exports = copy;
  }
});

// node_modules/react-copy-to-clipboard/lib/Component.js
var require_Component = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/Component.js"(exports) {
    "use strict";
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CopyToClipboard = void 0;
    var _react = _interopRequireDefault(require_react());
    var _copyToClipboard = _interopRequireDefault(require_copy_to_clipboard());
    var _excluded = ["text", "onCopy", "options", "children"];
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : { "default": obj };
    }
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
    function _objectWithoutProperties(source, excluded) {
      if (source == null)
        return {};
      var target = _objectWithoutPropertiesLoose(source, excluded);
      var key, i;
      if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
          key = sourceSymbolKeys[i];
          if (excluded.indexOf(key) >= 0)
            continue;
          if (!Object.prototype.propertyIsEnumerable.call(source, key))
            continue;
          target[key] = source[key];
        }
      }
      return target;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps)
        _defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", { writable: false });
      return Constructor;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });
      Object.defineProperty(subClass, "prototype", { writable: false });
      if (superClass)
        _setPrototypeOf(subClass, superClass);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    var CopyToClipboard2 = /* @__PURE__ */ function(_React$PureComponent) {
      _inherits(CopyToClipboard3, _React$PureComponent);
      var _super = _createSuper(CopyToClipboard3);
      function CopyToClipboard3() {
        var _this;
        _classCallCheck(this, CopyToClipboard3);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _defineProperty(_assertThisInitialized(_this), "onClick", function(event) {
          var _this$props = _this.props, text = _this$props.text, onCopy = _this$props.onCopy, children = _this$props.children, options = _this$props.options;
          var elem = _react["default"].Children.only(children);
          var result = (0, _copyToClipboard["default"])(text, options);
          if (onCopy) {
            onCopy(text, result);
          }
          if (elem && elem.props && typeof elem.props.onClick === "function") {
            elem.props.onClick(event);
          }
        });
        return _this;
      }
      _createClass(CopyToClipboard3, [{
        key: "render",
        value: function render() {
          var _this$props2 = this.props, _text = _this$props2.text, _onCopy = _this$props2.onCopy, _options = _this$props2.options, children = _this$props2.children, props = _objectWithoutProperties(_this$props2, _excluded);
          var elem = _react["default"].Children.only(children);
          return /* @__PURE__ */ _react["default"].cloneElement(elem, _objectSpread(_objectSpread({}, props), {}, {
            onClick: this.onClick
          }));
        }
      }]);
      return CopyToClipboard3;
    }(_react["default"].PureComponent);
    exports.CopyToClipboard = CopyToClipboard2;
    _defineProperty(CopyToClipboard2, "defaultProps", {
      onCopy: void 0,
      options: void 0
    });
  }
});

// node_modules/react-copy-to-clipboard/lib/index.js
var require_lib = __commonJS({
  "node_modules/react-copy-to-clipboard/lib/index.js"(exports, module) {
    "use strict";
    var _require = require_Component();
    var CopyToClipboard2 = _require.CopyToClipboard;
    CopyToClipboard2.CopyToClipboard = CopyToClipboard2;
    module.exports = CopyToClipboard2;
  }
});

// node_modules/sanity/lib/_chunks/desk-2d9c1d72.js
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react_copy_to_clipboard = __toESM(require_lib());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());
var import_omit = __toESM(require_omit());
var import_partition = __toESM(require_partition());
var import_uniqBy = __toESM(require_uniqBy());
var import_camelCase = __toESM(require_camelCase());
var import_uniq = __toESM(require_uniq());
var import_kebabCase = __toESM(require_kebabCase());
var import_pickBy = __toESM(require_pickBy());
var import_find = __toESM(require_find());
var import_uniqueId = __toESM(require_uniqueId());
var import_react_is = __toESM(require_react_is());
var import_startCase = __toESM(require_startCase());
var _templateObject;
var _templateObject2;
var _templateObject3;
var _templateObject4;
var _templateObject5;
var _templateObject6;
var _templateObject7;
var _templateObject8;
var _templateObject9;
var _templateObject10;
var _templateObject11;
var _templateObject12;
var _templateObject13;
var _templateObject14;
var _templateObject15;
var _templateObject16;
var _templateObject17;
var _templateObject18;
var _templateObject19;
var _templateObject20;
var _templateObject21;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function DocTitle(props) {
  const {
    document: documentValue
  } = props;
  const schema = useSchema();
  const schemaType = schema.get(documentValue._type);
  const {
    error,
    value
  } = useDocumentPreview({
    schemaType,
    value: documentValue
  });
  if (!schemaType) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("code", {
      children: ["Unknown schema type: ", documentValue._type]
    });
  }
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: ["Error: ", error.message]
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: (value == null ? void 0 : value.title) || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
      style: {
        color: "var(--card-muted-fg-color)"
      },
      children: "Untitled"
    })
  });
}
function TimeAgo(_ref) {
  let {
    time
  } = _ref;
  const timeAgo = useTimeAgo(time);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
    title: timeAgo,
    children: [timeAgo, " ago"]
  });
}
function isClientError(e) {
  if (typeof e !== "object")
    return false;
  if (!e)
    return false;
  return "statusCode" in e && "response" in e;
}
var POLL_INTERVAL = 5e3;
var visiblePoll$;
var getVisiblePoll$ = () => {
  if (!visiblePoll$) {
    visiblePoll$ = fromEvent(document, "visibilitychange").pipe(
      startWith(null),
      map(() => document.visibilityState === "visible"),
      distinctUntilChanged(),
      switchMap((visible) => visible ? timer(0, POLL_INTERVAL) : EMPTY),
      shareReplay({
        refCount: true,
        bufferSize: 1
      })
    );
  }
  return visiblePoll$;
};
function getDocumentExistence(documentId, _ref2) {
  let {
    versionedClient
  } = _ref2;
  const draftId = getDraftId(documentId);
  const publishedId = getPublishedId(documentId);
  const requestOptions = {
    uri: versionedClient.getDataUrl("doc", "".concat(draftId, ",").concat(publishedId)),
    json: true,
    query: {
      excludeContent: "true"
    },
    tag: "use-referring-documents.document-existence"
  };
  return versionedClient.observable.request(requestOptions).pipe(map((_ref3) => {
    let {
      omitted
    } = _ref3;
    const nonExistant = omitted.filter((doc) => doc.reason === "existence");
    if (nonExistant.length === 2) {
      return void 0;
    }
    if (nonExistant.length === 0) {
      return publishedId;
    }
    return nonExistant.some((doc) => doc.id === draftId) ? publishedId : draftId;
  }));
}
function fetchCrossDatasetReferences(documentId, context) {
  const {
    versionedClient
  } = context;
  return getVisiblePoll$().pipe(switchMap(() => getDocumentExistence(documentId, context)), switchMap((checkDocumentId) => {
    if (!checkDocumentId) {
      return of({
        totalCount: 0,
        references: []
      });
    }
    const currentDataset = versionedClient.config().dataset;
    return versionedClient.observable.request({
      url: "/data/references/".concat(currentDataset, "/documents/").concat(checkDocumentId, "/to?excludeInternalReferences=true&excludePaths=true"),
      tag: "use-referring-documents.external"
    }).pipe(catchError((e) => {
      if (isClientError(e) && e.statusCode === 404) {
        return of({
          totalCount: 0,
          references: []
        });
      }
      throw e;
    }));
  }));
}
var useInternalReferences = createHookFromObservableFactory((_ref4) => {
  let [documentId, documentStore] = _ref4;
  const referencesClause = "*[references($documentId)][0...100]{_id,_type}";
  const totalClause = "count(*[references($documentId)])";
  const fetchQuery = '{"references":'.concat(referencesClause, ',"totalCount":').concat(totalClause, "}");
  const listenQuery = "*[references($documentId)]";
  return documentStore.listenQuery({
    fetch: fetchQuery,
    listen: listenQuery
  }, {
    documentId
  }, {
    tag: "use-referring-documents",
    transitions: ["appear", "disappear"],
    throttleTime: 5e3
  });
});
var useCrossDatasetReferences = createHookFromObservableFactory((_ref5) => {
  let [documentId, versionedClient] = _ref5;
  return getVisiblePoll$().pipe(switchMap(() => fetchCrossDatasetReferences(documentId, {
    versionedClient
  })));
});
function useReferringDocuments(documentId) {
  const versionedClient = useClient(DEFAULT_STUDIO_CLIENT_OPTIONS);
  const documentStore = useDocumentStore();
  const publishedId = getPublishedId(documentId);
  const [internalReferences, isInternalReferencesLoading] = useInternalReferences((0, import_react.useMemo)(() => [publishedId, documentStore], [documentStore, publishedId]));
  const [crossDatasetReferences, isCrossDatasetReferencesLoading] = useCrossDatasetReferences((0, import_react.useMemo)(() => [publishedId, versionedClient], [publishedId, versionedClient]));
  const projectIds = (0, import_react.useMemo)(() => {
    return Array.from(new Set(crossDatasetReferences == null ? void 0 : crossDatasetReferences.references.map((crossDatasetReference) => crossDatasetReference.projectId).filter(Boolean))).sort();
  }, [crossDatasetReferences == null ? void 0 : crossDatasetReferences.references]);
  const datasetNames = (0, import_react.useMemo)(() => {
    return Array.from(new Set(crossDatasetReferences == null ? void 0 : crossDatasetReferences.references.map((crossDatasetReference) => (crossDatasetReference == null ? void 0 : crossDatasetReference.datasetName) || "").filter((datasetName) => Boolean(datasetName) && datasetName !== ""))).sort();
  }, [crossDatasetReferences == null ? void 0 : crossDatasetReferences.references]);
  const hasUnknownDatasetNames = (0, import_react.useMemo)(() => {
    return Boolean(crossDatasetReferences == null ? void 0 : crossDatasetReferences.references.some((crossDatasetReference) => typeof crossDatasetReference.datasetName !== "string"));
  }, [crossDatasetReferences == null ? void 0 : crossDatasetReferences.references]);
  return {
    totalCount: ((internalReferences == null ? void 0 : internalReferences.totalCount) || 0) + ((crossDatasetReferences == null ? void 0 : crossDatasetReferences.totalCount) || 0),
    projectIds,
    datasetNames,
    hasUnknownDatasetNames,
    internalReferences,
    crossDatasetReferences,
    isLoading: isInternalReferencesLoading || isCrossDatasetReferencesLoading
  };
}
function PublishedStatus(props) {
  const {
    document: document2
  } = props;
  const updatedAt = document2 && "_updatedAt" in document2 && document2._updatedAt;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
    portal: true,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      padding: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        children: document2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: ["Published ", updatedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeAgo, {
            time: updatedAt
          })]
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: "Not published"
        })
      })
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
      tone: "positive",
      dimmed: !document2,
      muted: !document2,
      size: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishIcon, {})
    })
  });
}
function DraftStatus(props) {
  const {
    document: document2
  } = props;
  const updatedAt = document2 && "_updatedAt" in document2 && document2._updatedAt;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
    portal: true,
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      padding: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        children: document2 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: ["Edited ", updatedAt && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeAgo, {
            time: updatedAt
          })]
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: "No unpublished edits"
        })
      })
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextWithTone, {
      tone: "caution",
      dimmed: !document2,
      muted: !document2,
      size: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditIcon, {})
    })
  });
}
function PaneItemPreview(props) {
  const {
    icon,
    layout,
    presence,
    schemaType,
    value
  } = props;
  const title = isRecord$2(value.title) && (0, import_react.isValidElement)(value.title) || (0, import_isString.default)(value.title) || (0, import_isNumber.default)(value.title) ? value.title : null;
  const {
    draft,
    published,
    isLoading
  } = useMemoObservable(() => getPreviewStateObservable(props.documentPreviewStore, schemaType, value._id, title), [props.documentPreviewStore, schemaType, value._id, title]);
  const status = isLoading ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Inline, {
    space: 4,
    children: [presence && presence.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPreviewPresence, {
      presence
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishedStatus, {
      document: published
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DraftStatus, {
      document: draft
    })]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanityDefaultPreview, {
    ...getPreviewValueWithFallback({
      value,
      draft,
      published
    }),
    isPlaceholder: isLoading,
    icon,
    layout,
    status
  });
}
function missingContext() {
  throw new Error("Pane is missing router context");
}
var PaneRouterContext = (0, import_react.createContext)({
  index: 0,
  groupIndex: 0,
  siblingIndex: 0,
  payload: void 0,
  params: {},
  hasGroupSiblings: false,
  groupLength: 0,
  routerPanesState: [],
  BackLink: () => missingContext(),
  ChildLink: () => missingContext(),
  ReferenceChildLink: () => missingContext(),
  handleEditReference: () => missingContext(),
  ParameterizedLink: () => missingContext(),
  replaceCurrent: () => missingContext(),
  closeCurrent: () => missingContext(),
  duplicateCurrent: () => missingContext(),
  setView: () => missingContext(),
  setParams: () => missingContext(),
  setPayload: () => missingContext(),
  navigateIntent: () => missingContext()
});
var BackLink = (0, import_react.forwardRef)(function BackLink2(props, ref) {
  const {
    routerPanesState,
    groupIndex
  } = (0, import_react.useContext)(PaneRouterContext);
  const panes = (0, import_react.useMemo)(() => routerPanesState.slice(0, groupIndex), [groupIndex, routerPanesState]);
  const state2 = (0, import_react.useMemo)(() => ({
    panes
  }), [panes]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateLink, {
    ...props,
    ref,
    state: state2
  });
});
var ChildLink = (0, import_react.forwardRef)(function ChildLink2(props, ref) {
  const {
    childId,
    childPayload,
    childParameters,
    ...rest
  } = props;
  const {
    routerPanesState,
    groupIndex
  } = (0, import_react.useContext)(PaneRouterContext);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateLink, {
    ...rest,
    ref,
    state: {
      panes: [...routerPanesState.slice(0, groupIndex + 1), [{
        id: childId,
        params: childParameters,
        payload: childPayload
      }]]
    }
  });
});
var ReferenceChildLink = (0, import_react.forwardRef)(function ReferenceChildLink2(_ref6, ref) {
  let {
    documentId,
    documentType,
    parentRefPath,
    children,
    template,
    ...rest
  } = _ref6;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChildLink, {
    ...rest,
    ref,
    childId: documentId,
    childPayload: template == null ? void 0 : template.params,
    childParameters: {
      type: documentType,
      parentRefPath: toString(parentRefPath),
      ...template && {
        template: template == null ? void 0 : template.id
      }
    },
    children
  });
});
var ParameterizedLink = (0, import_react.forwardRef)(function ParameterizedLink2(props, ref) {
  const {
    routerPanesState: currentPanes,
    groupIndex,
    siblingIndex
  } = (0, import_react.useContext)(PaneRouterContext);
  const {
    params,
    payload,
    ...rest
  } = props;
  const nextParams = useUnique(params);
  const nextPayload = useUnique(payload);
  const nextState = (0, import_react.useMemo)(() => {
    const currentGroup = currentPanes[groupIndex];
    const currentSibling = currentGroup[siblingIndex];
    const nextSibling = {
      ...currentSibling,
      params: nextParams != null ? nextParams : currentSibling.params,
      payload: nextPayload != null ? nextPayload : currentSibling.payload
    };
    const nextGroup = [...currentGroup.slice(0, siblingIndex), nextSibling, ...currentGroup.slice(siblingIndex + 1)];
    const nextPanes = [...currentPanes.slice(0, groupIndex), nextGroup, ...currentPanes.slice(groupIndex + 1)];
    return {
      panes: nextPanes
    };
  }, [currentPanes, groupIndex, nextParams, nextPayload, siblingIndex]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StateLink, {
    ref,
    ...rest,
    state: nextState
  });
});
function usePaneRouter() {
  return (0, import_react.useContext)(PaneRouterContext);
}
var EMPTY_ARRAY = [];
function ReferencePreviewLink(props) {
  const {
    onClick,
    type,
    value
  } = props;
  const publishedId = getPublishedId(value == null ? void 0 : value._id);
  const documentPresence = useDocumentPresence(publishedId);
  const documentPreviewStore = useDocumentPreviewStore();
  const {
    ReferenceChildLink: ReferenceChildLink3
  } = usePaneRouter();
  const Link = (0, import_react.useCallback)(function LinkComponent(linkProps) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceChildLink3, {
      documentId: value == null ? void 0 : value._id,
      documentType: type == null ? void 0 : type.name,
      parentRefPath: EMPTY_ARRAY,
      ...linkProps
    });
  }, [ReferenceChildLink3, type == null ? void 0 : type.name, value == null ? void 0 : value._id]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewCard$1, {
    __unstable_focusRing: true,
    as: Link,
    "data-as": "a",
    onClick,
    padding: 2,
    radius: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneItemPreview, {
      documentPreviewStore,
      icon: type == null ? void 0 : type.icon,
      layout: "default",
      presence: (documentPresence == null ? void 0 : documentPresence.length) > 0 ? documentPresence : EMPTY_ARRAY,
      schemaType: type,
      value
    })
  });
}
var ChevronWrapper = styled_components_browser_esm_default(Box)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-left: auto;\n"])));
var CrossDatasetReferencesDetails = styled_components_browser_esm_default.details(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  flex: none;\n\n  &[open] ", " {\n    transform: rotate(180deg);\n  }\n"])), ChevronWrapper);
var CrossDatasetReferencesSummary = styled_components_browser_esm_default.summary(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  list-style: none;\n\n  &::-webkit-details-marker {\n    display: none;\n  }\n"])));
var TableContainer = styled_components_browser_esm_default(Box).attrs({
  paddingX: 2,
  paddingBottom: 2
})(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  overflow: auto;\n  max-height: 150px;\n"])));
var Table = styled_components_browser_esm_default.table(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  width: 100%;\n  text-align: left;\n  padding: 0 ", ";\n  border-collapse: collapse;\n\n  th {\n    padding: ", ";\n  }\n\n  thead > tr {\n    position: sticky;\n    top: 0;\n    background: var(--card-bg-color);\n    z-index: 1;\n  }\n\n  td {\n    padding: 0 ", ";\n  }\n\n  tr > *:last-child {\n    text-align: right;\n  }\n"])), (_ref7) => {
  let {
    theme
  } = _ref7;
  return rem(theme.sanity.space[2]);
}, (_ref8) => {
  let {
    theme
  } = _ref8;
  return rem(theme.sanity.space[1]);
}, (_ref9) => {
  let {
    theme
  } = _ref9;
  return rem(theme.sanity.space[1]);
});
var DocumentIdFlex = styled_components_browser_esm_default(Flex)(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  min-height: 35px;\n"])));
var ReferencesCard = styled_components_browser_esm_default(Card).attrs({
  radius: 2,
  shadow: 1,
  marginBottom: 4,
  flex: "auto"
})(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n  overflow: hidden;\n  min-height: 150px;\n"])));
var OtherReferenceCount = (props) => {
  const difference = props.totalCount - props.references.length;
  if (!difference)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Inline, {
    space: 2,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
      size: 1,
      muted: true,
      children: [difference, " other reference", difference === 1 ? "" : "s", " not shown", " "]
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      portal: true,
      placement: "top",
      content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
        width: 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          padding: 2,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            size: 1,
            children: "We can't show metadata about these references because no token with access to the datasets they are in was found."
          })
        })
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        muted: true,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InfoOutlineIcon, {})
      })
    })]
  });
};
function ConfirmDeleteDialogBody(_ref10) {
  let {
    crossDatasetReferences,
    internalReferences,
    documentTitle,
    totalCount,
    action,
    datasetNames,
    hasUnknownDatasetNames,
    onReferenceLinkClick
  } = _ref10;
  const schema = useSchema();
  const toast = useToast();
  const renderPreviewItem = (0, import_react.useCallback)((item) => {
    const type = schema.get(item._type);
    if (type) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferencePreviewLink, {
        type,
        value: item,
        onClick: onReferenceLinkClick
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      padding: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SanityDefaultPreview, {
        icon: UnknownIcon,
        title: "Preview Unavailable",
        subtitle: "ID: ".concat(item._id),
        layout: "default"
      })
    });
  }, [schema, onReferenceLinkClick]);
  if ((internalReferences == null ? void 0 : internalReferences.totalCount) === 0 && (crossDatasetReferences == null ? void 0 : crossDatasetReferences.totalCount) === 0) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
      as: "p",
      children: ["Are you sure you want to ", action, " ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
        children: ["\u201C", documentTitle, "\u201D"]
      }), "?"]
    });
  }
  const documentCount = crossDatasetReferences.totalCount === 1 ? "1 document" : "".concat(crossDatasetReferences.totalCount.toLocaleString(), " documents");
  const normalizedDatasetNames = [...datasetNames, ...hasUnknownDatasetNames ? ["unavailable"] : []];
  const datasetsCount = normalizedDatasetNames.length === 1 ? "another dataset" : "".concat(normalizedDatasetNames.length, " datasets");
  let datasetNameList = "Dataset".concat(normalizedDatasetNames.length === 1 ? "" : "s", ": ").concat(normalizedDatasetNames.join(", "));
  if (hasUnknownDatasetNames && normalizedDatasetNames.length === 1) {
    datasetNameList = "Unavailable dataset";
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
      padding: 3,
      radius: 2,
      tone: "caution",
      marginBottom: 4,
      flex: "none",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          "aria-hidden": "true",
          size: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          flex: 1,
          marginLeft: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            size: 1,
            children: totalCount === 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
              children: ["1 document refers to \u201C", documentTitle, "\u201D"]
            }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
              children: [totalCount.toLocaleString(), " documents refer to \u201C", documentTitle, "\u201D"]
            })
          })
        })]
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      flex: "none",
      marginBottom: 4,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
        children: ["You may not be able to ", action, " \u201C", documentTitle, "\u201D because the following documents refer to it:"]
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferencesCard, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        direction: "column",
        height: "fill",
        children: [internalReferences.totalCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          as: "ul",
          padding: 3,
          space: 3,
          overflow: "auto",
          "data-testid": "internal-references",
          children: [internalReferences == null ? void 0 : internalReferences.references.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            as: "li",
            children: renderPreviewItem(item)
          }, item._id)), internalReferences.totalCount > internalReferences.references.length && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            as: "li",
            padding: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtherReferenceCount, {
              ...internalReferences
            })
          })]
        }), crossDatasetReferences.totalCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CrossDatasetReferencesDetails, {
          "data-testid": "cross-dataset-references",
          style: {
            borderTop: internalReferences.totalCount > 0 ? "1px solid var(--card-shadow-outline-color)" : void 0
          },
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CrossDatasetReferencesSummary, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
              padding: 4,
              align: "center",
              children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
                marginRight: 4,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                  size: 3,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentsIcon, {})
                })
              }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
                marginRight: 4,
                direction: "column",
                children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
                  marginBottom: 2,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
                    children: [documentCount, " in ", datasetsCount]
                  })
                }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                    title: datasetNameList,
                    textOverflow: "ellipsis",
                    size: 1,
                    muted: true,
                    children: datasetNameList
                  })
                })]
              }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronWrapper, {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                  muted: true,
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDownIcon, {})
                })
              })]
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableContainer, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, {
              children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
                  children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                      muted: true,
                      size: 0,
                      children: "Project ID"
                    })
                  }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                      muted: true,
                      size: 0,
                      children: "Dataset"
                    })
                  }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
                    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
                      muted: true,
                      size: 0,
                      children: "Document ID"
                    })
                  })]
                })
              }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
                children: crossDatasetReferences.references.filter((reference) => {
                  return "projectId" in reference;
                }).map((_ref11, index) => {
                  let {
                    projectId,
                    datasetName,
                    documentId
                  } = _ref11;
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
                    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                        size: 1,
                        children: projectId
                      })
                    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                        size: 1,
                        children: datasetName || "unavailable"
                      })
                    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DocumentIdFlex, {
                        align: "center",
                        gap: 2,
                        justify: "flex-end",
                        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                          textOverflow: "ellipsis",
                          size: 1,
                          children: documentId || "unavailable"
                        }), documentId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_copy_to_clipboard.default, {
                          text: documentId,
                          onCopy: () => {
                            toast.push({
                              title: "Copied document ID to clipboard!",
                              status: "success"
                            });
                          },
                          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                            title: "Copy ID to clipboard",
                            mode: "bleed",
                            icon: ClipboardIcon,
                            fontSize: 0
                          })
                        })]
                      })
                    })]
                  }, "".concat(documentId, "-").concat(index));
                })
              })]
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              padding: 2,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OtherReferenceCount, {
                ...crossDatasetReferences
              })
            })]
          })]
        })]
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      flex: "none",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
        children: ["If you ", action, " this document, documents that refer to it will no longer be able to access it."]
      })
    })]
  });
}
var DialogBody = styled_components_browser_esm_default(Flex).attrs({
  padding: 4,
  direction: "column",
  height: "fill"
})(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n  box-sizing: border-box;\n"])));
var LoadingContainer = styled_components_browser_esm_default(Flex).attrs({
  align: "center",
  direction: "column",
  justify: "center"
})(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  height: 300px;\n"])));
function ConfirmDeleteDialog(_ref12) {
  let {
    id,
    type,
    action = "delete",
    onCancel,
    onConfirm
  } = _ref12;
  const dialogId = "deletion-confirmation-".concat((0, import_react.useId)());
  const {
    internalReferences,
    crossDatasetReferences,
    isLoading,
    totalCount,
    projectIds,
    datasetNames,
    hasUnknownDatasetNames
  } = useReferringDocuments(id);
  const capitalizedAction = "".concat(action.substring(0, 1).toUpperCase()).concat(action.substring(1));
  const documentTitle = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocTitle, {
    document: (0, import_react.useMemo)(() => ({
      _id: id,
      _type: type
    }), [id, type])
  });
  const showConfirmButton = !isLoading;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    width: 1,
    id: dialogId,
    header: "".concat(capitalizedAction, " document?"),
    footer: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, {
      columns: showConfirmButton ? 2 : 1,
      gap: 2,
      paddingX: 4,
      paddingY: 3,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        mode: "ghost",
        onClick: onCancel,
        text: "Cancel"
      }), showConfirmButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        "data-testid": "confirm-delete-button",
        text: totalCount > 0 ? "".concat(capitalizedAction, " anyway") : "".concat(capitalizedAction, " now"),
        tone: "critical",
        onClick: onConfirm
      })]
    }),
    onClose: onCancel,
    onClickOutside: onCancel,
    portal: "documentPanelPortalElement",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogBody, {
      children: crossDatasetReferences && internalReferences && !isLoading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialogBody, {
        crossDatasetReferences,
        internalReferences,
        documentTitle,
        isLoading,
        totalCount,
        action,
        projectIds,
        datasetNames,
        hasUnknownDatasetNames,
        onReferenceLinkClick: onCancel
      }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LoadingContainer, {
        "data-testid": "loading-container",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
          muted: true
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            align: "center",
            muted: true,
            size: 1,
            children: "Looking for referring documents\u2026"
          })
        })]
      })
    })
  });
}
function ConfirmDeleteDialogContainer(props) {
  const id = (0, import_react.useId)();
  const [error, setError] = (0, import_react.useState)(null);
  const handleRetry = (0, import_react.useCallback)(() => setError(null), []);
  return error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    id: "dialog-error-".concat(id),
    "data-testid": "confirm-delete-error-dialog",
    header: "Error",
    footer: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      paddingX: 4,
      paddingY: 3,
      direction: "column",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        mode: "ghost",
        text: "Retry",
        onClick: handleRetry
      })
    }),
    onClose: props.onCancel,
    portal: "documentPanelPortalElement",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      padding: 4,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        children: "An error occurred while loading referencing documents."
      })
    })
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, {
    onCatch: setError,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
      ...props
    })
  });
}
var CONTEXT_MENU_POPOVER_PROPS = {
  constrainSize: true,
  placement: "bottom",
  portal: true,
  width: 0
};
function PaneContextMenuButton(props) {
  const {
    items,
    itemGroups,
    onAction
  } = props;
  const id = (0, import_react.useId)();
  const groups = (0, import_react.useMemo)(() => {
    if (!itemGroups || itemGroups.length === 0) {
      return [{
        id: "$default",
        items
      }];
    }
    const defaultGroup = {
      id: "$default",
      items: []
    };
    const groupMap = itemGroups.reduce((acc, group) => {
      acc[group.id] = {
        id: group.id,
        title: group.title,
        items: []
      };
      return acc;
    }, {});
    for (const item of items) {
      const group = groupMap[item.group || "$default"] || defaultGroup;
      group.items.push(item);
    }
    return Object.values(groupMap).concat([defaultGroup]).filter((g) => g.items.length > 0);
  }, [items, itemGroups]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
    button: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      icon: EllipsisVerticalIcon,
      mode: "bleed",
      padding: 3,
      title: "Show menu"
    }),
    id,
    menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
      children: groups.map((group, groupIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, {
        children: [groupIndex > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuDivider, {}), group.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          paddingX: 3,
          paddingTop: 3,
          paddingBottom: 2,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
            muted: true,
            children: group.title
          })
        }), group.items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContextMenuItem, {
          item,
          onAction
        }, "".concat(itemIndex, "-").concat(item.title)))]
      }, groupIndex))
    }),
    popover: CONTEXT_MENU_POPOVER_PROPS
  });
}
function PaneContextMenuItem(props) {
  const {
    item,
    onAction
  } = props;
  const handleClick = (0, import_react.useCallback)(() => {
    onAction(item);
  }, [item, onAction]);
  const hotkeys = (0, import_react.useMemo)(() => {
    if (!item.shortcut)
      return void 0;
    return item.shortcut.split("+");
  }, [item]);
  const IntentButtonOrActionButton = (0, import_react.forwardRef)((linkProps, linkRef) => item.intent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentLink, {
    ...linkProps,
    intent: item.intent.type,
    params: item.intent.params,
    ref: linkRef
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
    type: "button",
    ...linkProps
  }));
  IntentButtonOrActionButton.displayName = "Link";
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
    as: IntentButtonOrActionButton,
    "data-as": item.intent ? "a" : "button",
    hotkeys,
    icon: item.icon,
    onClick: handleClick,
    text: item.title
  });
}
var PANE_DEBUG = false;
var PANE_COLLAPSED_WIDTH = 51;
var PANE_DEFAULT_MIN_WIDTH = PANE_COLLAPSED_WIDTH * 4;
var PaneContext = (0, import_react.createContext)(null);
var PaneLayoutContext = (0, import_react.createContext)(null);
function usePaneLayout() {
  const pane = (0, import_react.useContext)(PaneLayoutContext);
  if (!pane) {
    throw new Error("PaneLayout: missing context value");
  }
  return pane;
}
var Root$5 = styled_components_browser_esm_default(Layer)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  position: relative;\n  width: 1px;\n  min-width: 1px;\n\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    width: 1px;\n    background-color: var(--card-border-color);\n  }\n\n  &:not([data-disabled]) {\n    cursor: ew-resize;\n    width: 9px;\n    min-width: 9px;\n    margin: 0 -4px;\n\n    &:before {\n      left: 4px;\n    }\n\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 9px;\n      bottom: 0;\n      background-color: var(--card-border-color);\n      opacity: 0;\n      transition: opacity 150ms;\n    }\n\n    &[data-dragging]:after,\n    &:hover:after {\n      opacity: 0.2;\n    }\n  }\n"])));
function PaneDivider(_ref13) {
  let {
    disabled,
    element
  } = _ref13;
  const {
    resize
  } = usePaneLayout();
  const [dragging, setDragging] = (0, import_react.useState)(false);
  const handleMouseDown = (0, import_react.useCallback)((event) => {
    if (!element)
      return;
    setDragging(true);
    event.preventDefault();
    const startX = event.pageX;
    resize("start", element, 0);
    const handleMouseMove = (e) => {
      e.preventDefault();
      const deltaX = e.pageX - startX;
      resize("move", element, deltaX);
    };
    const handleMouseUp = (e) => {
      e.preventDefault();
      setDragging(false);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      resize("end", element, 0);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }, [element, resize]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$5, {
    "data-disabled": disabled ? "" : void 0,
    "data-dragging": dragging ? "" : void 0,
    onMouseDown: handleMouseDown
  });
}
var Root$4 = styled_components_browser_esm_default(Card)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  outline: none;\n\n  // NOTE: This will render a border to the right side of each pane\n  // without taking up physical space.\n  box-shadow: 1px 0 0 var(--card-border-color);\n"])));
var Pane = (0, import_react.forwardRef)(function Pane2(props, ref) {
  var _a, _b, _c;
  const {
    children,
    currentMinWidth: currentMinWidthProp,
    currentMaxWidth: currentMaxWidthProp,
    flex: flexProp = 1,
    id,
    minWidth: minWidthProp,
    maxWidth: maxWidthProp,
    selected = false,
    ...restProps
  } = props;
  const [rootElement, setRootElement] = (0, import_react.useState)(null);
  const {
    collapse,
    collapsed: layoutCollapsed,
    expand,
    expandedElement,
    mount,
    panes
  } = usePaneLayout();
  const pane = panes.find((p) => p.element === rootElement);
  const paneIndex = pane && panes.indexOf(pane);
  const nextPane = typeof paneIndex === "number" ? panes[paneIndex + 1] : void 0;
  const isLast = paneIndex === panes.length - 1;
  const collapsed = layoutCollapsed ? false : (pane == null ? void 0 : pane.collapsed) || false;
  const nextCollapsed = (nextPane == null ? void 0 : nextPane.collapsed) || false;
  const forwardedRef = useForwardedRef(ref);
  const flex = (_a = pane == null ? void 0 : pane.flex) != null ? _a : flexProp;
  const currentMinWidth = (_b = pane == null ? void 0 : pane.currentMinWidth) != null ? _b : currentMinWidthProp;
  const currentMaxWidth = (_c = pane == null ? void 0 : pane.currentMaxWidth) != null ? _c : currentMaxWidthProp;
  const setRef = (0, import_react.useCallback)((refValue) => {
    setRootElement(refValue);
    forwardedRef.current = refValue;
  }, [forwardedRef]);
  (0, import_react.useEffect)(() => {
    if (!rootElement)
      return void 0;
    return mount(rootElement, {
      currentMinWidth: currentMinWidthProp,
      currentMaxWidth: currentMaxWidthProp,
      flex: flexProp,
      id,
      minWidth: minWidthProp,
      maxWidth: maxWidthProp
    });
  }, [currentMinWidthProp, currentMaxWidthProp, flexProp, id, minWidthProp, maxWidthProp, mount, rootElement]);
  const handleCollapse = (0, import_react.useCallback)(() => {
    if (!rootElement)
      return;
    collapse(rootElement);
  }, [collapse, rootElement]);
  const handleExpand = (0, import_react.useCallback)(() => {
    if (!rootElement)
      return;
    expand(rootElement);
  }, [expand, rootElement]);
  const contextValue = (0, import_react.useMemo)(() => ({
    collapse: handleCollapse,
    collapsed: layoutCollapsed ? false : collapsed,
    expand: handleExpand,
    index: paneIndex,
    isLast,
    rootElement
  }), [collapsed, handleCollapse, handleExpand, isLast, layoutCollapsed, paneIndex, rootElement]);
  const minWidth = (0, import_react.useMemo)(() => {
    if (layoutCollapsed) {
      return void 0;
    }
    if (collapsed)
      return PANE_COLLAPSED_WIDTH;
    if (currentMinWidth === 0) {
      return minWidthProp || PANE_DEFAULT_MIN_WIDTH;
    }
    if (isLast) {
      return minWidthProp || PANE_DEFAULT_MIN_WIDTH;
    }
    return currentMinWidth || minWidthProp || PANE_DEFAULT_MIN_WIDTH;
  }, [collapsed, currentMinWidth, isLast, layoutCollapsed, minWidthProp]);
  const maxWidth = (0, import_react.useMemo)(() => {
    if (collapsed)
      return PANE_COLLAPSED_WIDTH;
    if (layoutCollapsed && isLast) {
      return void 0;
    }
    if (isLast) {
      if (maxWidthProp) {
        return currentMaxWidth != null ? currentMaxWidth : maxWidthProp;
      }
      return void 0;
    }
    return currentMaxWidth != null ? currentMaxWidth : maxWidthProp;
  }, [collapsed, currentMaxWidth, isLast, layoutCollapsed, maxWidthProp]);
  const hidden = layoutCollapsed && !isLast;
  const divider = (0, import_react.useMemo)(() => !isLast && !layoutCollapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
    zOffset: "paneResizer",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneDivider, {
      disabled: collapsed || nextCollapsed,
      element: rootElement
    })
  }), [collapsed, isLast, layoutCollapsed, nextCollapsed, rootElement]);
  const style = (0, import_react.useMemo)(() => ({
    flex,
    minWidth,
    maxWidth: maxWidth === Infinity ? void 0 : maxWidth
  }), [flex, minWidth, maxWidth]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
      zOffset: "pane",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContext.Provider, {
        value: contextValue,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$4, {
          "data-testid": "pane",
          tone: "inherit",
          hidden,
          id,
          overflow: layoutCollapsed ? void 0 : "hidden",
          ...restProps,
          "data-pane-collapsed": collapsed ? "" : void 0,
          "data-pane-index": paneIndex,
          "data-pane-selected": selected ? "" : void 0,
          ref: setRef,
          style,
          children: [PANE_DEBUG, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoundaryElementProvider, {
            element: rootElement,
            children: !hidden && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
              direction: "column",
              height: "fill",
              children
            })
          })]
        })
      })
    }), divider]
  });
});
function usePane() {
  const pane = (0, import_react.useContext)(PaneContext);
  if (!pane) {
    throw new Error("Pane: missing context value");
  }
  return pane;
}
var Root$3 = styled_components_browser_esm_default(Card)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  position: relative;\n  outline: none;\n"])));
Root$3.displayName = "PaneContent__root";
var PaneContent = (0, import_react.forwardRef)(function PaneContent2(props, ref) {
  const {
    as,
    children,
    overflow,
    padding,
    ...restProps
  } = props;
  const {
    collapsed
  } = usePane();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$3, {
    "data-testid": "pane-content",
    forwardedAs: as,
    ...restProps,
    flex: 1,
    hidden: collapsed,
    overflow: layoutCollapsed ? void 0 : overflow,
    padding,
    ref,
    tone: "inherit",
    children
  });
});
var Root$2 = styled_components_browser_esm_default(Layer)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  position: sticky;\n  bottom: 0;\n\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: -1px;\n    border-bottom: 1px solid var(--card-shadow-outline-color);\n  }\n"])));
var RootCard = styled_components_browser_esm_default(Card)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  padding-bottom: env(safe-area-inset-bottom);\n"])));
var PaneFooter = (0, import_react.forwardRef)(function PaneFooter2(props, ref) {
  const {
    children,
    padding
  } = props;
  const {
    collapsed
  } = usePane();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
    zOffset: "paneFooter",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
      "data-testid": "pane-footer",
      hidden: collapsed,
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RootCard, {
        tone: "inherit",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          padding,
          children
        })
      })
    })
  });
});
var Root$1 = styled_components_browser_esm_default(Layer)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  line-height: 0;\n  position: sticky;\n  top: 0;\n\n  &:not([data-collapsed]):after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 0;\n    right: 0;\n    bottom: -1px;\n    border-bottom: 1px solid var(--card-shadow-outline-color);\n  }\n"])));
var Layout = styled_components_browser_esm_default(Flex)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  transform-origin: calc(51px / 2);\n\n  [data-collapsed] > div > & {\n    transform: rotate(90deg);\n  }\n"])));
var TitleBox = styled_components_browser_esm_default(Box)(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral([""])));
var TitleTextSkeleton = styled_components_browser_esm_default(TextSkeleton)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  width: 66%;\n  max-width: 175px;\n"])));
var TitleText = styled_components_browser_esm_default(Text)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  cursor: default;\n  outline: none;\n"])));
var TABS_SCROLL_PADDING = 100;
var TabsBox = styled_components_browser_esm_default(Box)((_ref14) => {
  let {
    theme
  } = _ref14;
  const {
    color,
    space
  } = theme.sanity;
  return Ce(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n    margin: -", "px 0 -", "px -", "px;\n    overflow: hidden;\n    position: relative;\n\n    & > div {\n      white-space: nowrap;\n      padding: ", "px 0 calc(", "px + ", "px) ", "px;\n      margin-bottom: ", "px;\n      overflow: auto;\n\n      /* right padding */\n      & > div:after {\n        content: '';\n        display: inline-block;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        width: ", "px;\n        height: 1px;\n      }\n    }\n\n    /* Gradient that makes it look like tabs disappear into nothing (looks nicer) */\n    &:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      background: linear-gradient(to right, ", ", var(--card-bg-color));\n      width: ", "px;\n      pointer-events: none;\n    }\n  "])), space[2], space[2], space[3], space[2], TABS_SCROLL_PADDING, space[2], space[3], 0 - TABS_SCROLL_PADDING, space[3], rgba(color.base.bg, 0), space[3]);
});
var PaneHeader = (0, import_react.forwardRef)(function PaneHeader2(props, ref) {
  const {
    actions,
    backButton,
    loading,
    subActions,
    tabs,
    title
  } = props;
  const {
    collapse,
    collapsed,
    expand,
    rootElement: paneElement
  } = usePane();
  const paneRect = useElementRect(paneElement || null);
  const layoutStyle = (0, import_react.useMemo)(() => ({
    width: collapsed ? (paneRect == null ? void 0 : paneRect.height) || window.innerHeight : void 0
  }), [collapsed, paneRect]);
  const handleTitleClick = (0, import_react.useCallback)(() => {
    if (collapsed)
      return;
    collapse();
  }, [collapse, collapsed]);
  const handleLayoutClick = (0, import_react.useCallback)(() => {
    if (!collapsed)
      return;
    expand();
  }, [collapsed, expand]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerProvider, {
    zOffset: 100,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
      "data-collapsed": collapsed ? "" : void 0,
      "data-testid": "pane-header",
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
        zOffset: "paneHeader",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
          "data-collapsed": collapsed ? "" : void 0,
          tone: "inherit",
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, {
            onClick: handleLayoutClick,
            padding: 2,
            paddingBottom: tabs || subActions ? 0 : 2,
            sizing: "border",
            style: layoutStyle,
            children: [backButton, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TitleBox, {
              flex: 1,
              onClick: handleTitleClick,
              paddingY: 3,
              paddingLeft: backButton ? 1 : 3,
              children: [loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleTextSkeleton, {
                animated: true,
                radius: 1
              }), !loading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TitleText, {
                tabIndex: 0,
                textOverflow: "ellipsis",
                weight: "semibold",
                children: title
              })]
            }), actions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              hidden: collapsed,
              paddingLeft: 1,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
                zOffset: "paneHeader",
                children: actions
              })
            })]
          }), (tabs || subActions) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
            align: "center",
            hidden: collapsed,
            paddingTop: 1,
            paddingRight: 2,
            paddingBottom: 2,
            paddingLeft: 3,
            overflow: "auto",
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabsBox, {
              flex: 1,
              marginRight: subActions ? 3 : 0,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                children: tabs
              })
            }), subActions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              children: subActions
            })]
          })]
        })
      })
    })
  });
});
var Root = styled_components_browser_esm_default(Card)(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n  transition: opacity 200ms;\n  position: relative;\n  z-index: 1;\n  padding-left: env(safe-area-inset-left);\n  padding-right: env(safe-area-inset-right);\n  opacity: 0;\n\n  &:not([hidden]) {\n    display: flex;\n  }\n\n  &:not([data-collapsed]) {\n    overflow: auto;\n  }\n\n  &[data-mounted] {\n    opacity: 1;\n  }\n\n  &[data-resizing] {\n    pointer-events: none;\n  }\n"])));
var IntentButton = (0, import_react.forwardRef)(function IntentButton2(props, ref) {
  const {
    intent,
    ...restProps
  } = props;
  const Link = (0, import_react.useMemo)(() => (0, import_react.forwardRef)(function Link2(linkProps, linkRef) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentLink, {
      ...linkProps,
      intent: intent.type,
      params: intent.params,
      ref: linkRef
    });
  }), [intent]);
  return props.disabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
    ...props,
    as: "a",
    role: "link",
    "aria-disabled": "true"
  }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
    ...restProps,
    as: Link,
    "data-as": "a",
    ref
  });
});
function InsufficientPermissionsMessageTooltip(_ref15) {
  let {
    reveal,
    loading,
    children
  } = _ref15;
  const currentUser = useCurrentUser();
  if (!reveal) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
    content: loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      padding: 2,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        children: "Loading\u2026"
      })
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, {
      currentUser
    }),
    portal: true,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      children
    })
  });
}
var POPOVER_PROPS = {
  constrainSize: true,
  placement: "bottom",
  portal: true
};
var getIntent = (schema, templates, item) => {
  var _a;
  const typeName = (_a = templates.find((t) => t.id === item.templateId)) == null ? void 0 : _a.schemaType;
  if (!typeName)
    return null;
  const baseParams = {
    template: item.templateId,
    type: typeName,
    id: item.initialDocumentId
  };
  return {
    type: "create",
    params: item.parameters ? [baseParams, item.parameters] : baseParams
  };
};
function PaneHeaderCreateButton(_ref16) {
  let {
    templateItems
  } = _ref16;
  const schema = useSchema();
  const templates = useTemplates();
  const [templatePermissions, isTemplatePermissionsLoading] = useTemplatePermissions({
    templateItems
  });
  const nothingGranted = (0, import_react.useMemo)(() => {
    return !isTemplatePermissionsLoading && (templatePermissions == null ? void 0 : templatePermissions.every((permission) => !permission.granted));
  }, [isTemplatePermissionsLoading, templatePermissions]);
  const permissionsById = (0, import_react.useMemo)(() => {
    if (!templatePermissions)
      return {};
    return templatePermissions.reduce((acc, permission) => {
      acc[permission.id] = permission;
      return acc;
    }, {});
  }, [templatePermissions]);
  if (nothingGranted) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessageTooltip, {
      reveal: true,
      loading: isTemplatePermissionsLoading,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        "aria-label": "Insufficient permissions",
        icon: ComposeIcon,
        mode: "bleed",
        disabled: true,
        "data-testid": "action-intent-button"
      })
    });
  }
  if (templateItems.length === 1) {
    const firstItem = templateItems[0];
    const permissions = permissionsById[firstItem.id];
    const disabled = !(permissions == null ? void 0 : permissions.granted);
    const intent = getIntent(schema, templates, firstItem);
    if (!intent)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessageTooltip, {
      reveal: disabled,
      loading: isTemplatePermissionsLoading,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentButton, {
        "aria-label": firstItem.title,
        icon: firstItem.icon || ComposeIcon,
        intent,
        mode: "bleed",
        disabled,
        "data-testid": "action-intent-button"
      })
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
    button: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      icon: ComposeIcon,
      mode: "bleed",
      padding: 3,
      "data-testid": "multi-action-intent-button"
    }),
    id: "create-menu",
    menu: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Menu, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        paddingX: 3,
        paddingTop: 3,
        paddingBottom: 2,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
          muted: true,
          children: "Create"
        })
      }), templateItems.map((item, itemIndex) => {
        const permissions = permissionsById[item.id];
        const disabled = !(permissions == null ? void 0 : permissions.granted);
        const intent = getIntent(schema, templates, item);
        const template = templates.find((t) => t.id === item.templateId);
        if (!template || !intent)
          return null;
        const Link = (0, import_react.forwardRef)((linkProps, linkRef) => disabled ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
          type: "button",
          disabled: true,
          ...linkProps,
          ref: linkRef
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentLink, {
          ...linkProps,
          intent: intent.type,
          params: intent.params,
          ref: linkRef
        }));
        Link.displayName = "Link";
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessageTooltip, {
          reveal: disabled,
          loading: isTemplatePermissionsLoading,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
            as: Link,
            "data-as": disabled ? "button" : "a",
            text: item.title || template.title,
            "aria-label": disabled ? "Insufficient permissions" : item.title || template.title,
            disabled,
            "data-testid": "action-intent-button-".concat(itemIndex)
          })
        }, item.id);
      })]
    }),
    popover: POPOVER_PROPS
  });
}
var emptyArray = [];
var emptyObject = {};
function isNonNullable(value) {
  return value !== null && value !== void 0;
}
var hashObject = (value) => {
  const sortObject = (v) => {
    if (typeof v !== "object" || !v)
      return v;
    if (Array.isArray(v))
      return v.map(sortObject);
    return Object.entries(v).sort((_ref17, _ref18) => {
      let [keyA] = _ref17;
      let [keyB] = _ref18;
      return keyA.localeCompare(keyB, "en");
    });
  };
  const normalize = (v) => JSON.parse(JSON.stringify(v));
  return JSON.stringify(sortObject(normalize(value)));
};
var PaneHeaderActions = (0, import_react.memo)((_ref19) => {
  let {
    initialValueTemplateItems: initialValueTemplateItemsFromStructure = emptyArray,
    menuItems = emptyArray,
    menuItemGroups = emptyArray,
    actionHandlers = emptyObject
  } = _ref19;
  const templates = useTemplates();
  const handleAction = (0, import_react.useCallback)((item) => {
    if (typeof item.action === "string" && !(item.action in actionHandlers)) {
      console.warn("No handler for action:", item.action);
      return false;
    }
    const handler = typeof item.action === "function" ? item.action : typeof item.action === "string" ? actionHandlers[item.action] : null;
    if (handler) {
      handler(item.params);
      return true;
    }
    return false;
  }, [actionHandlers]);
  const [actionMenuItems, contextMenuItems] = (0, import_react.useMemo)(() => {
    const nonCreateMenuItem = menuItems.filter((item) => {
      var _a;
      return ((_a = item.intent) == null ? void 0 : _a.type) !== "create";
    });
    return (0, import_partition.default)(nonCreateMenuItem, (item) => item.showAsAction);
  }, [menuItems]);
  const initialValueTemplateItemFromMenuItems = (0, import_react.useMemo)(() => {
    return menuItems.map((item, menuItemIndex) => {
      var _a;
      if (((_a = item.intent) == null ? void 0 : _a.type) !== "create")
        return null;
      const {
        params
      } = item.intent;
      if (!params)
        return null;
      const intentParams = Array.isArray(params) ? params[0] : params;
      const templateParams = Array.isArray(params) ? params[1] : void 0;
      const templateId = intentParams.template || intentParams.type;
      if (!templateId)
        return null;
      const template = templates.find((t) => t.id === templateId);
      if (!template)
        return null;
      const initialDocumentId = intentParams.id;
      return {
        item,
        template,
        templateParams,
        menuItemIndex,
        initialDocumentId
      };
    }).filter(isNonNullable).map((_ref20) => {
      let {
        initialDocumentId,
        item,
        template,
        menuItemIndex,
        templateParams
      } = _ref20;
      const initialValueTemplateItem = {
        id: "menuItem".concat(menuItemIndex),
        initialDocumentId,
        templateId: template.id,
        type: "initialValueTemplateItem",
        title: item.title || template.title,
        icon: item.icon,
        description: template.description,
        parameters: templateParams,
        schemaType: template.schemaType
      };
      return initialValueTemplateItem;
    });
  }, [menuItems, templates]);
  const combinedInitialValueTemplates = (0, import_react.useMemo)(() => {
    return (0, import_uniqBy.default)([...initialValueTemplateItemFromMenuItems, ...initialValueTemplateItemsFromStructure], (item) => hashObject([item.initialDocumentId, item.templateId, item.parameters]));
  }, [initialValueTemplateItemFromMenuItems, initialValueTemplateItemsFromStructure]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inline, {
    space: 1,
    children: [
      Boolean(combinedInitialValueTemplates.length) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeaderCreateButton, {
        templateItems: combinedInitialValueTemplates
      }, "$CreateMenuButton"),
      ...actionMenuItems.map((actionItem, actionIndex) => {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
          content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            padding: 2,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              size: 1,
              children: actionItem.title
            })
          }),
          placement: "bottom",
          children: actionItem.intent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentButton, {
            intent: actionItem.intent,
            "aria-label": actionItem.title,
            icon: actionItem.icon || UnknownIcon,
            mode: "bleed"
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            "aria-label": actionItem.title,
            icon: actionItem.icon || UnknownIcon,
            mode: "bleed",
            onClick: () => handleAction(actionItem)
          })
        }, "".concat(actionIndex, "-").concat(actionItem.title));
      }),
      Boolean(contextMenuItems.length) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContextMenuButton, {
        items: contextMenuItems,
        itemGroups: menuItemGroups,
        onAction: handleAction
      }, "$ContextMenu")
    ]
  });
});
PaneHeaderActions.displayName = "PaneHeaderActions";
var DISABLED_REASON_TITLE$4 = {
  NOTHING_TO_DELETE: "This document doesn\u2019t yet exist or is already deleted"
};
var DeleteAction = (_ref21) => {
  let {
    id,
    type,
    draft,
    onComplete
  } = _ref21;
  const {
    delete: deleteOp
  } = useDocumentOperation(id, type);
  const [isDeleting, setIsDeleting] = (0, import_react.useState)(false);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false);
  const handleCancel = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(false);
    onComplete();
  }, [onComplete]);
  const handleConfirm = (0, import_react.useCallback)(() => {
    setIsDeleting(true);
    setConfirmDialogOpen(false);
    deleteOp.execute();
    onComplete();
  }, [deleteOp, onComplete]);
  const handle = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(true);
  }, []);
  const [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "delete"
  });
  const currentUser = useCurrentUser();
  if (!isPermissionsLoading && !(permissions == null ? void 0 : permissions.granted)) {
    return {
      tone: "critical",
      icon: TrashIcon,
      disabled: true,
      label: "Delete",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, {
        operationLabel: "delete this document",
        currentUser
      })
    };
  }
  return {
    tone: "critical",
    icon: TrashIcon,
    disabled: isDeleting || Boolean(deleteOp.disabled) || isPermissionsLoading,
    title: deleteOp.disabled && DISABLED_REASON_TITLE$4[deleteOp.disabled] || "",
    label: isDeleting ? "Deleting\u2026" : "Delete",
    shortcut: "Ctrl+Alt+D",
    onHandle: handle,
    dialog: isConfirmDialogOpen && {
      type: "dialog",
      onClose: onComplete,
      content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialogContainer, {
        action: "delete",
        id: (draft == null ? void 0 : draft._id) || id,
        type,
        onCancel: handleCancel,
        onConfirm: handleConfirm
      })
    }
  };
};
DeleteAction.action = "delete";
var DISABLED_REASON_TITLE$3 = {
  NO_CHANGES: "This document has no unpublished changes",
  NOT_PUBLISHED: "This document is not published"
};
var DiscardChangesAction = (_ref22) => {
  let {
    id,
    type,
    published,
    liveEdit,
    onComplete
  } = _ref22;
  const {
    discardChanges
  } = useDocumentOperation(id, type);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false);
  const [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "discardDraft"
  });
  const currentUser = useCurrentUser();
  const handleConfirm = (0, import_react.useCallback)(() => {
    discardChanges.execute();
    onComplete();
  }, [discardChanges, onComplete]);
  const handle = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(true);
  }, []);
  const dialog = (0, import_react.useMemo)(() => isConfirmDialogOpen && {
    type: "confirm",
    tone: "critical",
    onCancel: onComplete,
    onConfirm: handleConfirm,
    message: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: "Are you sure you want to discard all changes since last published?"
    })
  }, [handleConfirm, isConfirmDialogOpen, onComplete]);
  if (!published || liveEdit) {
    return null;
  }
  if (!isPermissionsLoading && !(permissions == null ? void 0 : permissions.granted)) {
    return {
      tone: "critical",
      icon: ResetIcon,
      disabled: true,
      label: "Discard changes",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, {
        operationLabel: "discard changes in this document",
        currentUser
      })
    };
  }
  return {
    tone: "critical",
    icon: ResetIcon,
    disabled: Boolean(discardChanges.disabled) || isPermissionsLoading,
    title: discardChanges.disabled && DISABLED_REASON_TITLE$3[discardChanges.disabled] || "",
    label: "Discard changes",
    onHandle: handle,
    dialog
  };
};
DiscardChangesAction.action = "discardChanges";
var DISABLED_REASON_TITLE$2 = {
  NOTHING_TO_DUPLICATE: "This document doesn\u2019t yet exist so there\u2018s nothing to duplicate"
};
var DuplicateAction = (_ref23) => {
  let {
    id,
    type,
    onComplete
  } = _ref23;
  const {
    duplicate
  } = useDocumentOperation(id, type);
  const router2 = useRouter();
  const [isDuplicating, setDuplicating] = (0, import_react.useState)(false);
  const [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "duplicate"
  });
  const currentUser = useCurrentUser();
  const handle = (0, import_react.useCallback)(() => {
    const dupeId = v4_default();
    setDuplicating(true);
    duplicate.execute(dupeId);
    router2.navigateIntent("edit", {
      id: dupeId,
      type
    });
    onComplete();
  }, [duplicate, onComplete, router2, type]);
  if (!isPermissionsLoading && !(permissions == null ? void 0 : permissions.granted)) {
    return {
      icon: CopyIcon,
      disabled: true,
      label: "Duplicate",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, {
        operationLabel: "duplicate this document",
        currentUser
      })
    };
  }
  return {
    icon: CopyIcon,
    disabled: isDuplicating || Boolean(duplicate.disabled) || isPermissionsLoading,
    label: isDuplicating ? "Duplicating\u2026" : "Duplicate",
    title: duplicate.disabled && DISABLED_REASON_TITLE$2[duplicate.disabled] || "",
    onHandle: handle
  };
};
DuplicateAction.action = "duplicate";
var HistoryRestoreAction = (_ref24) => {
  let {
    id,
    type,
    revision,
    onComplete
  } = _ref24;
  const {
    restore
  } = useDocumentOperation(id, type);
  const router2 = useRouter();
  const [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false);
  const handleConfirm = (0, import_react.useCallback)(() => {
    restore.execute(revision);
    router2.navigateIntent("edit", {
      id,
      type
    });
    onComplete();
  }, [revision, restore, router2, onComplete, id, type]);
  const handle = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(true);
  }, []);
  const dialog = (0, import_react.useMemo)(() => {
    if (isConfirmDialogOpen) {
      return {
        type: "confirm",
        tone: "critical",
        onCancel: onComplete,
        onConfirm: handleConfirm,
        message: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: "Are you sure you want to restore this document?"
        })
      };
    }
    return null;
  }, [handleConfirm, isConfirmDialogOpen, onComplete]);
  const isRevisionInitialVersion = revision === "@initial";
  const isRevisionLatestVersion = revision === void 0;
  if (isRevisionLatestVersion) {
    return null;
  }
  return {
    label: "Restore",
    color: "primary",
    onHandle: handle,
    title: isRevisionInitialVersion ? "You can't restore to the initial version" : "Restore to this version",
    icon: RestoreIcon,
    dialog,
    disabled: isRevisionInitialVersion
  };
};
HistoryRestoreAction.action = "restore";
var DocumentPaneContext = (0, import_react.createContext)(null);
function useDocumentPane() {
  const documentPane = (0, import_react.useContext)(DocumentPaneContext);
  if (!documentPane) {
    throw new Error("DocumentPane: missing context value");
  }
  return documentPane;
}
var DISABLED_REASON_TITLE$1 = {
  LIVE_EDIT_ENABLED: "Cannot publish since liveEdit is enabled for this document type",
  ALREADY_PUBLISHED: "Already published",
  NO_CHANGES: "No unpublished changes",
  NOT_READY: "Operation not ready"
};
function getDisabledReason(reason, publishedAt) {
  if (reason === "ALREADY_PUBLISHED" && publishedAt) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
        children: ["Published ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeAgo, {
          time: publishedAt
        })]
      })
    });
  }
  return DISABLED_REASON_TITLE$1[reason];
}
var PublishAction = (props) => {
  var _a;
  const {
    id,
    type,
    liveEdit,
    draft,
    published
  } = props;
  const [publishState, setPublishState] = (0, import_react.useState)(null);
  const {
    publish
  } = useDocumentOperation(id, type);
  const validationStatus = useValidationStatus(id, type);
  const syncState = useSyncState(id, type);
  const {
    changesOpen,
    onHistoryOpen,
    documentId,
    documentType
  } = useDocumentPane();
  const editState = useEditState(documentId, documentType);
  const revision = ((editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || {})._rev;
  const hasValidationErrors = validationStatus.validation.some(isValidationErrorMarker);
  const [publishScheduled, setPublishScheduled] = (0, import_react.useState)(false);
  const isSyncing = syncState.isSyncing;
  const isValidating = validationStatus.isValidating;
  const [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "publish"
  });
  const currentUser = useCurrentUser();
  const title = publish.disabled ? getDisabledReason(publish.disabled, (published || {})._updatedAt) || "" : hasValidationErrors ? "There are validation errors that need to be fixed before this document can be published" : "";
  const hasDraft = Boolean(draft);
  const doPublish = (0, import_react.useCallback)(() => {
    publish.execute();
    setPublishState("publishing");
  }, [publish]);
  (0, import_react.useEffect)(() => {
    const validationComplete = validationStatus.isValidating === false && validationStatus.revision !== revision;
    if (!publishScheduled || isSyncing || !validationComplete) {
      return;
    }
    if (!hasValidationErrors) {
      doPublish();
    }
    setPublishScheduled(false);
  }, [isSyncing, doPublish, hasValidationErrors, publishScheduled, validationStatus.revision, revision, isValidating, validationStatus.isValidating]);
  (0, import_react.useEffect)(() => {
    const didPublish = publishState === "publishing" && !hasDraft;
    if (didPublish) {
      if (changesOpen) {
        onHistoryOpen();
      }
    }
    const nextState = didPublish ? "published" : null;
    const delay = didPublish ? 200 : 4e3;
    const timer2 = setTimeout(() => {
      setPublishState(nextState);
    }, delay);
    return () => clearTimeout(timer2);
  }, [changesOpen, publishState, hasDraft, onHistoryOpen]);
  const handle = (0, import_react.useCallback)(() => {
    if (syncState.isSyncing || validationStatus.isValidating || validationStatus.revision !== revision) {
      setPublishScheduled(true);
    } else {
      doPublish();
    }
  }, [syncState.isSyncing, validationStatus.isValidating, validationStatus.revision, revision, doPublish]);
  if (liveEdit) {
    return {
      tone: "positive",
      label: "Publish",
      title: "Live Edit is enabled for this content type and publishing happens automatically as you make changes",
      disabled: true
    };
  }
  if (!isPermissionsLoading && !(permissions == null ? void 0 : permissions.granted)) {
    return {
      tone: "positive",
      label: "Publish",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, {
        operationLabel: "publish this document",
        currentUser
      }),
      disabled: true
    };
  }
  const disabled = Boolean(publishScheduled || ((_a = editState == null ? void 0 : editState.transactionSyncLock) == null ? void 0 : _a.enabled) || publishState === "publishing" || publishState === "published" || hasValidationErrors || publish.disabled);
  return {
    disabled: disabled || isPermissionsLoading,
    tone: "positive",
    label: publishState === "published" ? "Published" : publishScheduled || publishState === "publishing" ? "Publishing\u2026" : "Publish",
    icon: publishState === "published" ? CheckmarkIcon : PublishIcon,
    title: publishScheduled ? "Waiting for tasks to finish before publishing" : publishState === "published" || publishState === "publishing" ? null : title,
    shortcut: disabled || publishScheduled ? null : "Ctrl+Alt+P",
    onHandle: handle
  };
};
PublishAction.action = "publish";
var DISABLED_REASON_TITLE = {
  NOT_PUBLISHED: "This document is not published"
};
var UnpublishAction = (_ref25) => {
  let {
    id,
    type,
    draft,
    onComplete,
    liveEdit
  } = _ref25;
  const {
    unpublish
  } = useDocumentOperation(id, type);
  const [isConfirmDialogOpen, setConfirmDialogOpen] = (0, import_react.useState)(false);
  const [permissions, isPermissionsLoading] = useDocumentPairPermissions({
    id,
    type,
    permission: "unpublish"
  });
  const currentUser = useCurrentUser();
  const handleCancel = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(false);
    onComplete();
  }, [onComplete]);
  const handleConfirm = (0, import_react.useCallback)(() => {
    setConfirmDialogOpen(false);
    unpublish.execute();
    onComplete();
  }, [onComplete, unpublish]);
  const dialog = (0, import_react.useMemo)(() => {
    if (isConfirmDialogOpen) {
      return {
        type: "dialog",
        onClose: onComplete,
        content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialogContainer, {
          id: (draft == null ? void 0 : draft._id) || id,
          type,
          action: "unpublish",
          onCancel: handleCancel,
          onConfirm: handleConfirm
        })
      };
    }
    return null;
  }, [draft, id, handleCancel, handleConfirm, isConfirmDialogOpen, onComplete, type]);
  if (liveEdit) {
    return null;
  }
  if (!isPermissionsLoading && !(permissions == null ? void 0 : permissions.granted)) {
    return {
      tone: "critical",
      icon: UnpublishIcon,
      label: "Unpublish",
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InsufficientPermissionsMessage, {
        operationLabel: "unpublish this document",
        currentUser
      }),
      disabled: true
    };
  }
  return {
    tone: "critical",
    icon: UnpublishIcon,
    disabled: Boolean(unpublish.disabled) || isPermissionsLoading,
    label: "Unpublish",
    title: unpublish.disabled ? DISABLED_REASON_TITLE[unpublish.disabled] : "",
    onHandle: () => setConfirmDialogOpen(true),
    dialog
  };
};
UnpublishAction.action = "unpublish";
var LiveEditBadge = (props) => {
  const {
    liveEdit
  } = props;
  if (liveEdit) {
    return {
      label: "Live",
      color: "danger"
    };
  }
  return null;
};
var _DEBUG = false;
var EMPTY_PARAMS$1 = {};
var LOADING_PANE = Symbol("LOADING_PANE");
var state = {
  activePanes: []
};
function setActivePanes(panes) {
  state.activePanes = panes;
}
function getIntentState(intent, params, routerState, payload) {
  var _a;
  const panes = (routerState == null ? void 0 : routerState.panes) || [];
  const activePanes = state.activePanes || [];
  const editDocumentId = params.id || v4_default();
  const isTemplate = intent === "create" && params.template;
  for (let i = activePanes.length - 1; i >= 0; i--) {
    const pane = activePanes[i];
    if (typeof pane !== "object")
      continue;
    if (((_a = pane.canHandleIntent) == null ? void 0 : _a.call(pane, intent, params, {
      pane,
      index: i
    })) || pane.type === "documentList" && pane.schemaTypeName === params.type && pane.options.filter === "_type == $type") {
      const paneParams = isTemplate ? {
        template: params.template
      } : EMPTY_PARAMS$1;
      return {
        panes: panes.slice(0, i).concat([[{
          id: editDocumentId,
          params: paneParams,
          payload
        }]])
      };
    }
  }
  return {
    intent,
    params,
    payload
  };
}
var EMPTY_PARAMS = {};
function legacyEditParamsToState(params) {
  try {
    return JSON.parse(decodeURIComponent(params));
  } catch (err) {
    console.warn("Failed to parse JSON parameters");
    return {};
  }
}
function encodePanesSegment(panes) {
  return (panes || []).map((group) => group.map(encodeChunks).join("|")).map(encodeURIComponent).join(";");
}
function legacyEditParamsToPath(params) {
  return JSON.stringify(params);
}
function toState(pathSegment) {
  return parsePanesSegment(decodeURIComponent(pathSegment));
}
function toPath(panes) {
  return encodePanesSegment(panes);
}
var router = route.create("/", [
  route.intents("/intent"),
  route.create("/edit/:type/:editDocumentId", [route.create({
    path: "/:params",
    transform: {
      params: {
        toState: legacyEditParamsToState,
        toPath: legacyEditParamsToPath
      }
    }
  })]),
  route.create({
    path: "/:panes",
    children: [route.create("/:action", route.create("/:legacyEditDocumentId"))],
    transform: {
      panes: {
        toState,
        toPath
      }
    }
  })
]);
var panePattern = /^([.a-z0-9_-]+),?({.*?})?(?:(;|$))/i;
var isParam = (str) => /^[a-z0-9]+=[^=]+/i.test(str);
var isPayload = (str) => /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(str);
var exclusiveParams = ["view", "since", "rev"];
var isTruthy = Boolean;
function parseChunks(chunks, initial) {
  return chunks.reduce((pane, chunk) => {
    if (isParam(chunk)) {
      const key = chunk.slice(0, chunk.indexOf("="));
      const value = chunk.slice(key.length + 1);
      pane.params = {
        ...pane.params,
        [decodeURIComponent(key)]: decodeURIComponent(value)
      };
    } else if (isPayload(chunk)) {
      pane.payload = tryParseBase64Payload(chunk);
    } else {
      console.warn("Unknown pane segment: %s - skipping", chunk);
    }
    return pane;
  }, {
    ...initial,
    params: EMPTY_PARAMS,
    payload: void 0
  });
}
function encodeChunks(pane, index, group) {
  const {
    payload,
    params = {},
    id
  } = pane;
  const [firstSibling] = group;
  const paneIsFirstSibling = pane === firstSibling;
  const sameAsFirst = index !== 0 && id === firstSibling.id;
  const encodedPayload = typeof payload === "undefined" ? void 0 : btoa(JSON.stringify(payload));
  const encodedParams = Object.entries(params).filter((entry) => {
    var _a;
    const [key, value] = entry;
    if (!value)
      return false;
    if (paneIsFirstSibling)
      return true;
    const valueFromFirstSibling = (_a = firstSibling.params) == null ? void 0 : _a[key];
    if (value === valueFromFirstSibling && !exclusiveParams.includes(key))
      return false;
    return true;
  }).map((_ref26) => {
    let [key, value] = _ref26;
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
  });
  return [sameAsFirst ? "" : id].concat([encodedParams.length > 0 && encodedParams, encodedPayload].filter(isTruthy).flat()).join(",") || ",";
}
function parsePanesSegment(str) {
  if (str.indexOf(",{") !== -1) {
    return parseOldPanesSegment(str);
  }
  return str.split(";").map((group) => {
    const [firstSibling, ...restOfSiblings] = group.split("|").map((segment) => {
      const [id, ...chunks] = segment.split(",");
      return parseChunks(chunks, {
        id
      });
    });
    return [firstSibling, ...restOfSiblings.map((sibling) => ({
      ...firstSibling,
      ...sibling,
      id: sibling.id || firstSibling.id,
      params: {
        ...(0, import_omit.default)(firstSibling.params, exclusiveParams),
        ...sibling.params
      },
      payload: sibling.payload || firstSibling.payload
    }))];
  }).filter((group) => group.length > 0);
}
function parseOldPanesSegment(str) {
  const chunks = [];
  let buffer = str;
  while (buffer.length) {
    const [match, id, payloadChunk] = buffer.match(panePattern) || [];
    if (!match) {
      buffer = buffer.slice(1);
      continue;
    }
    const payload = payloadChunk && tryParsePayload(payloadChunk);
    chunks.push({
      id,
      payload
    });
    buffer = buffer.slice(match.length);
  }
  return [chunks];
}
function tryParsePayload(json) {
  try {
    return JSON.parse(json);
  } catch (err) {
    console.warn("Failed to parse parameters: ".concat(err.message));
    return void 0;
  }
}
function tryParseBase64Payload(data) {
  return data ? tryParsePayload(atob(data)) : void 0;
}
var documentActions = [PublishAction, UnpublishAction, DiscardChangesAction, DuplicateAction, DeleteAction, HistoryRestoreAction];
var documentBadges = [LiveEditBadge];
var deskTool = definePlugin((options) => ({
  name: "@sanity/desk-tool",
  document: {
    actions: (prevActions) => {
      const actions = prevActions.slice(0);
      for (const action of documentActions) {
        if (!actions.includes(action))
          actions.push(action);
      }
      return actions;
    },
    badges: (prevBadges) => {
      const badges = prevBadges.slice(0);
      for (const badge of documentBadges) {
        if (!badges.includes(badge))
          badges.push(badge);
      }
      return badges;
    }
  },
  tools: [{
    name: (options == null ? void 0 : options.name) || "desk",
    title: (options == null ? void 0 : options.title) || "Desk",
    icon: (options == null ? void 0 : options.icon) || MasterDetailIcon,
    component: (0, import_react.lazy)(() => import("/build/_shared/index-def00177-Y3YZZ2AJ.js").then(function(n) {
      return n.index;
    })),
    canHandleIntent: (intent, params) => {
      return Boolean(intent === "edit" && params.id || intent === "create" && params.type || intent === "create" && params.template);
    },
    getIntentState,
    options,
    router
  }]
}));
var DeskToolContext = (0, import_react.createContext)(null);
var SerializeError = class extends Error {
  constructor(message, parentPath, pathSegment, hint) {
    super(message);
    const segment = typeof pathSegment === "undefined" ? "<unknown>" : "".concat(pathSegment);
    this.path = (parentPath || []).concat(hint ? "".concat(segment, " (").concat(hint, ")") : segment);
  }
  withHelpUrl(id) {
    this.helpId = id;
    return this;
  }
};
var HELP_URL = /* @__PURE__ */ ((HELP_URL2) => {
  HELP_URL2["ID_REQUIRED"] = "structure-node-id-required";
  HELP_URL2["TITLE_REQUIRED"] = "structure-title-required";
  HELP_URL2["FILTER_REQUIRED"] = "structure-filter-required";
  HELP_URL2["INVALID_LIST_ITEM"] = "structure-invalid-list-item";
  HELP_URL2["COMPONENT_REQUIRED"] = "structure-view-component-required";
  HELP_URL2["DOCUMENT_ID_REQUIRED"] = "structure-document-id-required";
  HELP_URL2["DOCUMENT_TYPE_REQUIRED"] = "structure-document-type-required";
  HELP_URL2["SCHEMA_TYPE_REQUIRED"] = "structure-schema-type-required";
  HELP_URL2["SCHEMA_TYPE_NOT_FOUND"] = "structure-schema-type-not-found";
  HELP_URL2["LIST_ITEMS_MUST_BE_ARRAY"] = "structure-list-items-must-be-array";
  HELP_URL2["QUERY_PROVIDED_FOR_FILTER"] = "structure-query-provided-for-filter";
  HELP_URL2["ACTION_OR_INTENT_REQUIRED"] = "structure-action-or-intent-required";
  HELP_URL2["LIST_ITEM_IDS_MUST_BE_UNIQUE"] = "structure-list-item-ids-must-be-unique";
  HELP_URL2["ACTION_AND_INTENT_MUTUALLY_EXCLUSIVE"] = "structure-action-and-intent-mutually-exclusive";
  return HELP_URL2;
})(HELP_URL || {});
var IMPLICIT_FIELDS = ["_id", "_type", "_createdAt", "_updatedAt", "_rev"];
function joinReferences(schemaType, path) {
  const [head, ...tail] = path;
  if (!("fields" in schemaType)) {
    return "";
  }
  const schemaField = schemaType.fields.find((field) => field.name === head);
  if (!schemaField) {
    if (!IMPLICIT_FIELDS.includes(head)) {
      console.warn('The current ordering config targeted the nonexistent field "%s" on schema type "%s". It should be one of %o', head, schemaType.name, schemaType.fields.map((field) => field.name));
    }
    return "";
  }
  if ("to" in schemaField.type && schemaField.type.name === "reference") {
    const refTypes = schemaField.type.to;
    return "".concat(head, "->{").concat(refTypes.map((refType) => joinReferences(refType, tail)).join(","), "}");
  }
  const tailFields = tail.length > 0 && joinReferences(schemaField.type, tail);
  const tailWrapper = tailFields ? "{".concat(tailFields, "}") : "";
  return tail.length > 0 ? "".concat(head).concat(tailWrapper) : head;
}
function getExtendedProjection(schemaType, orderBy) {
  return orderBy.map((ordering) => joinReferences(schemaType, ordering.field.split("."))).join(", ");
}
var ORDER_BY_UPDATED_AT = {
  title: "Last edited",
  name: "lastEditedDesc",
  by: [{
    field: "_updatedAt",
    direction: "desc"
  }]
};
var ORDER_BY_CREATED_AT = {
  title: "Created",
  name: "lastCreatedDesc",
  by: [{
    field: "_createdAt",
    direction: "desc"
  }]
};
var DEFAULT_SELECTED_ORDERING_OPTION = ORDER_BY_UPDATED_AT;
var DEFAULT_ORDERING_OPTIONS = [
  ORDER_BY_UPDATED_AT,
  ORDER_BY_CREATED_AT
];
function maybeSerializeMenuItem(item, index, path) {
  return item instanceof MenuItemBuilder ? item.serialize({
    path,
    index
  }) : item;
}
var MenuItemBuilder = class {
  constructor(_context, spec) {
    this._context = _context;
    this.spec = spec ? spec : {};
  }
  action(action) {
    return this.clone({
      action
    });
  }
  getAction() {
    return this.spec.action;
  }
  intent(intent) {
    return this.clone({
      intent
    });
  }
  getIntent() {
    return this.spec.intent;
  }
  title(title) {
    return this.clone({
      title
    });
  }
  getTitle() {
    return this.spec.title;
  }
  group(group) {
    return this.clone({
      group
    });
  }
  getGroup() {
    return this.spec.group;
  }
  icon(icon) {
    return this.clone({
      icon
    });
  }
  getIcon() {
    return this.spec.icon;
  }
  params(params) {
    return this.clone({
      params
    });
  }
  getParams() {
    return this.spec.params;
  }
  showAsAction() {
    let showAsAction = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return this.clone({
      showAsAction: Boolean(showAsAction)
    });
  }
  getShowAsAction() {
    return this.spec.showAsAction;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const {
      title,
      action,
      intent
    } = this.spec;
    if (!title) {
      const hint = typeof action === "string" ? 'action: "'.concat(action, '"') : void 0;
      throw new SerializeError("`title` is required for menu item", options.path, options.index, hint).withHelpUrl(HELP_URL.TITLE_REQUIRED);
    }
    if (!action && !intent) {
      throw new SerializeError("`action` or `intent` required for menu item with title ".concat(this.spec.title), options.path, options.index, '"'.concat(title, '"')).withHelpUrl(HELP_URL.ACTION_OR_INTENT_REQUIRED);
    }
    if (intent && action) {
      throw new SerializeError("cannot set both `action` AND `intent`", options.path, options.index, '"'.concat(title, '"')).withHelpUrl(HELP_URL.ACTION_AND_INTENT_MUTUALLY_EXCLUSIVE);
    }
    return {
      ...this.spec,
      title
    };
  }
  clone(withSpec) {
    const builder = new MenuItemBuilder(this._context);
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    return builder;
  }
};
function getOrderingMenuItem(context, ordering, extendedProjection) {
  return new MenuItemBuilder(context).group("sorting").title("Sort by ".concat(ordering.title)).icon(SortIcon).action("setSortOrder").params({
    by: ordering.by,
    extendedProjection
  });
}
function getOrderingMenuItemsForSchemaType(context, typeName) {
  const {
    schema
  } = context;
  const type = typeof typeName === "string" ? schema.get(typeName) : typeName;
  if (!type || !("orderings" in type)) {
    return [];
  }
  return (type.orderings ? type.orderings.concat(DEFAULT_ORDERING_OPTIONS) : DEFAULT_ORDERING_OPTIONS).map((ordering) => getOrderingMenuItem(context, ordering, getExtendedProjection(type, ordering.by)));
}
function maybeSerializeMenuItemGroup(item, index, path) {
  return item instanceof MenuItemGroupBuilder ? item.serialize({
    path,
    index
  }) : item;
}
var MenuItemGroupBuilder = class {
  constructor(_context, spec) {
    this._context = _context;
    this._id = spec ? spec.id : "";
    this._title = spec ? spec.title : "";
  }
  id(id) {
    return new MenuItemGroupBuilder(this._context, {
      id,
      title: this._title
    });
  }
  getId() {
    return this._id;
  }
  title(title) {
    return new MenuItemGroupBuilder(this._context, {
      id: this._id,
      title
    });
  }
  getTitle() {
    return this._title;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const {
      _id,
      _title
    } = this;
    if (!_id) {
      throw new SerializeError("`id` is required for a menu item group", options.path, options.index, _title).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    if (!_title) {
      throw new SerializeError("`title` is required for a menu item group", options.path, _id).withHelpUrl(HELP_URL.TITLE_REQUIRED);
    }
    return {
      id: _id,
      title: _title
    };
  }
};
var disallowedPattern = /([^A-Za-z0-9-_.])/;
function validateId(id, parentPath, pathSegment) {
  if (typeof id !== "string") {
    throw new SerializeError("Structure node id must be of type string, got ".concat(typeof id), parentPath, pathSegment);
  }
  const [disallowedChar] = id.match(disallowedPattern) || [];
  if (disallowedChar) {
    throw new SerializeError('Structure node id cannot contain character "'.concat(disallowedChar, '"'), parentPath, pathSegment);
  }
  if (id.startsWith("__edit__")) {
    throw new SerializeError("Structure node id cannot start with __edit__", parentPath, pathSegment);
  }
  return id;
}
var ComponentBuilder = class {
  constructor(spec) {
    this.spec = {
      options: {},
      ...spec ? spec : {}
    };
  }
  id(id) {
    return this.clone({
      id
    });
  }
  getId() {
    return this.spec.id;
  }
  title(title) {
    return this.clone({
      title,
      id: this.spec.id || (0, import_camelCase.default)(title)
    });
  }
  getTitle() {
    return this.spec.title;
  }
  child(child) {
    return this.clone({
      child
    });
  }
  getChild() {
    return this.spec.child;
  }
  component(component2) {
    return this.clone({
      component: component2
    });
  }
  getComponent() {
    return this.spec.component;
  }
  options(options) {
    return this.clone({
      options
    });
  }
  getOptions() {
    return this.spec.options || {};
  }
  menuItems(menuItems) {
    return this.clone({
      menuItems
    });
  }
  getMenuItems() {
    return this.spec.menuItems;
  }
  menuItemGroups(menuItemGroups) {
    return this.clone({
      menuItemGroups
    });
  }
  getMenuItemGroups() {
    return this.spec.menuItemGroups;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const {
      id,
      title,
      child,
      options: componentOptions,
      component: component2
    } = this.spec;
    if (!id) {
      throw new SerializeError("`id` is required for `component` structure item", options.path, options.index).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    if (!component2) {
      throw new SerializeError("`component` is required for `component` structure item", options.path, options.index).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    return {
      id: validateId(id, options.path, options.index),
      title,
      type: "component",
      child,
      component: component2,
      options: componentOptions || {},
      menuItems: (this.spec.menuItems || []).map((item, i) => maybeSerializeMenuItem(item, i, options.path)),
      menuItemGroups: (this.spec.menuItemGroups || []).map((item, i) => maybeSerializeMenuItemGroup(item, i, options.path))
    };
  }
  clone(withSpec) {
    const builder = new ComponentBuilder();
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    return builder;
  }
};
var GenericViewBuilder = class {
  constructor() {
    this.spec = {};
  }
  id(id) {
    return this.clone({
      id
    });
  }
  getId() {
    return this.spec.id;
  }
  title(title) {
    return this.clone({
      title,
      id: this.spec.id || (0, import_kebabCase.default)(title)
    });
  }
  getTitle() {
    return this.spec.title;
  }
  icon(icon) {
    return this.clone({
      icon
    });
  }
  getIcon() {
    return this.spec.icon;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const {
      id,
      title,
      icon
    } = this.spec;
    if (!id) {
      throw new SerializeError("`id` is required for view item", options.path, options.index).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    if (!title) {
      throw new SerializeError("`title` is required for view item", options.path, options.index).withHelpUrl(HELP_URL.TITLE_REQUIRED);
    }
    return {
      id: validateId(id, options.path, options.index),
      title,
      icon
    };
  }
};
function isSerializable(view) {
  return typeof view.serialize === "function";
}
function maybeSerializeView(item, index, path) {
  return isSerializable(item) ? item.serialize({
    path,
    index
  }) : item;
}
var isComponentSpec = (spec) => isRecord$2(spec) && spec.type === "component";
var ComponentViewBuilder = class extends GenericViewBuilder {
  constructor(componentOrSpec) {
    const spec = isComponentSpec(componentOrSpec) ? {
      ...componentOrSpec
    } : {
      options: {}
    };
    super();
    this.spec = spec;
    const userComponent = typeof componentOrSpec === "function" ? componentOrSpec : this.spec.component;
    if (userComponent) {
      this.spec = this.component(userComponent).spec;
    }
  }
  component(component2) {
    return this.clone({
      component: component2
    });
  }
  getComponent() {
    return this.spec.component;
  }
  options(options) {
    return this.clone({
      options
    });
  }
  getOptions() {
    return this.spec.options || {};
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const base = super.serialize(options);
    const component2 = this.spec.component;
    if (typeof component2 !== "function") {
      throw new SerializeError("`component` is required and must be a function for `component()` view item", options.path, options.index).withHelpUrl(HELP_URL.COMPONENT_REQUIRED);
    }
    return {
      ...base,
      component: component2,
      options: this.spec.options || {},
      type: "component"
    };
  }
  clone(withSpec) {
    const builder = new ComponentViewBuilder();
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    return builder;
  }
};
var FormViewBuilder = class extends GenericViewBuilder {
  constructor(spec) {
    super();
    this.spec = {
      id: "editor",
      title: "Editor",
      ...spec ? spec : {}
    };
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    return {
      ...super.serialize(options),
      type: "form"
    };
  }
  clone(withSpec) {
    const builder = new FormViewBuilder();
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    return builder;
  }
};
var form = (spec) => new FormViewBuilder(spec);
var component = (componentOrSpec) => new ComponentViewBuilder(componentOrSpec);
var views = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ComponentViewBuilder,
  FormViewBuilder,
  GenericViewBuilder,
  component,
  form,
  maybeSerializeView
});
var createDocumentChildResolver = (_ref27) => {
  let {
    resolveDocumentNode
  } = _ref27;
  return (itemId, _ref28) => {
    let {
      params,
      path
    } = _ref28;
    const {
      type
    } = params;
    const parentPath = path.slice(0, path.length - 1);
    const currentSegment = path[path.length - 1];
    if (!type) {
      throw new SerializeError("Invalid link. Your link must contain a `type`.", parentPath, currentSegment);
    }
    return resolveDocumentNode({
      documentId: itemId,
      schemaType: type
    });
  };
};
var DocumentBuilder = class {
  constructor(_context, spec) {
    this._context = _context;
    this.spec = spec ? spec : {};
  }
  id(id) {
    return this.clone({
      id
    });
  }
  getId() {
    return this.spec.id;
  }
  title(title) {
    return this.clone({
      title,
      id: this.spec.id || (0, import_camelCase.default)(title)
    });
  }
  getTitle() {
    return this.spec.title;
  }
  child(child) {
    return this.clone({
      child
    });
  }
  getChild() {
    return this.spec.child;
  }
  documentId(documentId) {
    const paneId = this.spec.id || documentId;
    return this.clone({
      id: paneId,
      options: {
        ...this.spec.options || {},
        id: documentId
      }
    });
  }
  getDocumentId() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.id;
  }
  schemaType(documentType) {
    return this.clone({
      options: {
        ...this.spec.options || {},
        type: typeof documentType === "string" ? documentType : documentType.name
      }
    });
  }
  getSchemaType() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.type;
  }
  initialValueTemplate(templateId, parameters) {
    return this.clone({
      options: {
        ...this.spec.options || {},
        template: templateId,
        templateParameters: parameters
      }
    });
  }
  getInitialValueTemplate() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.template;
  }
  getInitialValueTemplateParameters() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.templateParameters;
  }
  views(views2) {
    return this.clone({
      views: views2
    });
  }
  getViews() {
    return this.spec.views || [];
  }
  serialize() {
    let {
      path = [],
      index,
      hint
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const urlId = path[index || path.length - 1];
    const id = this.spec.id || urlId && "".concat(urlId) || "";
    const options = {
      id,
      type: void 0,
      template: void 0,
      templateParameters: void 0,
      ...this.spec.options
    };
    if (typeof id !== "string" || !id) {
      throw new SerializeError("`id` is required for document nodes", path, index, hint).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    if (!options || !options.id) {
      throw new SerializeError("document id (`id`) is required for document nodes", path, id, hint).withHelpUrl(HELP_URL.DOCUMENT_ID_REQUIRED);
    }
    if (!options || !options.type) {
      throw new SerializeError("document type (`schemaType`) is required for document nodes", path, id, hint);
    }
    const views2 = (this.spec.views && this.spec.views.length > 0 ? this.spec.views : [form()]).map((item, i) => maybeSerializeView(item, i, path));
    const viewIds = views2.map((view) => view.id);
    const dupes = (0, import_uniq.default)(viewIds.filter((viewId, i) => viewIds.includes(viewId, i + 1)));
    if (dupes.length > 0) {
      throw new SerializeError("document node has views with duplicate IDs: ".concat(dupes.join(",  ")), path, id, hint);
    }
    return {
      ...this.spec,
      child: this.spec.child || createDocumentChildResolver(this._context),
      id: validateId(id, path, index),
      type: "document",
      options: getDocumentOptions(options),
      views: views2
    };
  }
  clone() {
    let withSpec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const builder = new DocumentBuilder(this._context);
    const options = {
      ...this.spec.options || {},
      ...withSpec.options || {}
    };
    builder.spec = {
      ...this.spec,
      ...withSpec,
      options
    };
    return builder;
  }
};
function getDocumentOptions(spec) {
  const opts = {
    id: spec.id || "",
    type: spec.type || "*"
  };
  if (spec.template) {
    opts.template = spec.template;
  }
  if (spec.templateParameters) {
    opts.templateParameters = spec.templateParameters;
  }
  return opts;
}
function documentFromEditor(context, spec) {
  let doc = (spec == null ? void 0 : spec.type) ? context.resolveDocumentNode({
    schemaType: spec.type
  }) : new DocumentBuilder(context);
  if (!spec)
    return doc;
  const {
    id,
    type,
    template,
    templateParameters
  } = spec.options;
  doc = doc.id(spec.id).documentId(id);
  if (type) {
    doc = doc.schemaType(type);
  }
  if (template) {
    doc = doc.initialValueTemplate(template, templateParameters);
  }
  if (spec.child) {
    doc = doc.child(spec.child);
  }
  return doc;
}
function documentFromEditorWithInitialValue(_ref29, templateId, parameters) {
  let {
    resolveDocumentNode,
    templates
  } = _ref29;
  const template = templates.find((t) => t.id === templateId);
  if (!template) {
    throw new Error('Template with ID "'.concat(templateId, '" not defined'));
  }
  return resolveDocumentNode({
    schemaType: template.schemaType
  }).initialValueTemplate(templateId, parameters);
}
var layoutOptions = ["default", "card", "media", "detail", "block"];
var DEFAULT_INTENT_HANDLER = Symbol("Document type list canHandleIntent");
var defaultIntentChecker = (intentName, params, _ref30) => {
  let {
    pane
  } = _ref30;
  var _a, _b;
  const isEdit = intentName === "edit";
  const isCreate = intentName === "create";
  const typedSpec = pane;
  const paneFilter = ((_a = typedSpec.options) == null ? void 0 : _a.filter) || "";
  const paneParams = ((_b = typedSpec.options) == null ? void 0 : _b.params) || {};
  const typeNames = typedSpec.schemaTypeName ? [typedSpec.schemaTypeName] : getTypeNamesFromFilter(paneFilter, paneParams);
  const initialValueTemplates = typedSpec.initialValueTemplates || [];
  if (isCreate && params.template) {
    return initialValueTemplates.some((tpl) => tpl.templateId === params.template);
  }
  return isEdit && params.id && typeNames.includes(params.type) || isCreate && typeNames.includes(params.type);
};
defaultIntentChecker.identity = DEFAULT_INTENT_HANDLER;
var InitialValueTemplateItemBuilder = class {
  constructor(_context, spec) {
    this._context = _context;
    this.spec = spec ? spec : {};
  }
  id(id) {
    return this.clone({
      id
    });
  }
  getId() {
    return this.spec.id;
  }
  title(title) {
    return this.clone({
      title
    });
  }
  getTitle() {
    return this.spec.title;
  }
  description(description) {
    return this.clone({
      description
    });
  }
  getDescription() {
    return this.spec.description;
  }
  templateId(templateId) {
    const paneId = this.spec.id || templateId;
    return this.clone({
      id: paneId,
      templateId
    });
  }
  getTemplateId() {
    return this.spec.templateId;
  }
  parameters(parameters) {
    return this.clone({
      parameters
    });
  }
  getParameters() {
    return this.spec.parameters;
  }
  serialize() {
    let {
      path = [],
      index,
      hint
    } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const {
      spec,
      _context
    } = this;
    const {
      templates
    } = _context;
    if (typeof spec.id !== "string" || !spec.id) {
      throw new SerializeError("`id` is required for initial value template item nodes", path, index, hint).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    if (!spec.templateId) {
      throw new SerializeError("template id (`templateId`) is required for initial value template item nodes", path, spec.id, hint).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    const template = templates.find((t) => t.id === spec.templateId);
    if (!template) {
      throw new SerializeError("template id (`templateId`) is required for initial value template item nodes", path, spec.id, hint).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    return {
      id: spec.id,
      templateId: spec.id,
      schemaType: template.schemaType,
      type: "initialValueTemplateItem",
      description: spec.description || template.description,
      title: spec.title || template.title,
      subtitle: spec.subtitle,
      icon: spec.icon || template.icon,
      initialDocumentId: spec.initialDocumentId,
      parameters: spec.parameters
    };
  }
  clone() {
    let withSpec = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const builder = new InitialValueTemplateItemBuilder(this._context);
    builder.spec = {
      ...this.spec,
      ...withSpec
    };
    return builder;
  }
};
function defaultInitialValueTemplateItems(context) {
  const {
    schema,
    getStructureBuilder,
    templates
  } = context;
  const typeNames = schema.getTypeNames();
  const ordered = templates.filter((tpl) => {
    var _a;
    return !((_a = tpl.parameters) == null ? void 0 : _a.length);
  }).sort((a, b) => typeNames.indexOf(a.schemaType) - typeNames.indexOf(b.schemaType));
  return ordered.map((tpl) => getStructureBuilder().initialValueTemplateItem(tpl.id));
}
function maybeSerializeInitialValueTemplateItem(item, index, path) {
  return item instanceof InitialValueTemplateItemBuilder ? item.serialize({
    path,
    index
  }) : item;
}
function menuItemsFromInitialValueTemplateItems(context, templateItems) {
  const {
    schema,
    templates
  } = context;
  return templateItems.map((item) => {
    const template = templates.find((t) => t.id === item.templateId);
    const title = item.title || (template == null ? void 0 : template.title) || "Create new";
    const params = (0, import_pickBy.default)({
      type: template && template.schemaType,
      template: item.templateId
    }, Boolean);
    const intentParams = item.parameters ? [params, item.parameters] : params;
    const schemaType = template && schema.get(template.schemaType);
    return new MenuItemBuilder(context).title(title).icon(template && template.icon || (schemaType == null ? void 0 : schemaType.icon) || ComposeIcon).intent({
      type: "create",
      params: intentParams
    }).serialize();
  });
}
function noChildResolver() {
  return void 0;
}
var shallowIntentChecker = (intentName, params, _ref31) => {
  let {
    pane,
    index
  } = _ref31;
  return index <= 1 && defaultIntentChecker(intentName, params, {
    pane,
    index
  });
};
var GenericListBuilder = class {
  constructor() {
    this.initialValueTemplatesSpecified = false;
    this.spec = {};
  }
  id(id) {
    return this.clone({
      id
    });
  }
  getId() {
    return this.spec.id;
  }
  title(title) {
    return this.clone({
      title,
      id: this.spec.id || (0, import_camelCase.default)(title)
    });
  }
  getTitle() {
    return this.spec.title;
  }
  defaultLayout(defaultLayout) {
    return this.clone({
      defaultLayout
    });
  }
  getDefaultLayout() {
    return this.spec.defaultLayout;
  }
  menuItems(menuItems) {
    return this.clone({
      menuItems
    });
  }
  getMenuItems() {
    return this.spec.menuItems;
  }
  menuItemGroups(menuItemGroups) {
    return this.clone({
      menuItemGroups
    });
  }
  getMenuItemGroups() {
    return this.spec.menuItemGroups;
  }
  child(child) {
    return this.clone({
      child
    });
  }
  getChild() {
    return this.spec.child;
  }
  canHandleIntent(canHandleIntent) {
    return this.clone({
      canHandleIntent
    });
  }
  getCanHandleIntent() {
    return this.spec.canHandleIntent;
  }
  showIcons() {
    let enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return this.clone({
      displayOptions: {
        ...this.spec.displayOptions || {},
        showIcons: enabled
      }
    });
  }
  getShowIcons() {
    return this.spec.displayOptions ? this.spec.displayOptions.showIcons : void 0;
  }
  initialValueTemplates(templates) {
    this.initialValueTemplatesSpecified = true;
    return this.clone({
      initialValueTemplates: Array.isArray(templates) ? templates : [templates]
    });
  }
  getInitialValueTemplates() {
    return this.spec.initialValueTemplates;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const id = this.spec.id || "";
    const path = options.path;
    const defaultLayout = this.spec.defaultLayout;
    if (defaultLayout && !layoutOptions.includes(defaultLayout)) {
      throw new SerializeError("`layout` must be one of ".concat(layoutOptions.map((item) => '"'.concat(item, '"')).join(", ")), path, id || options.index, this.spec.title);
    }
    const initialValueTemplates = (this.spec.initialValueTemplates || []).map((item, i) => maybeSerializeInitialValueTemplateItem(item, i, path));
    return {
      id: validateId(id, options.path, id || options.index),
      title: this.spec.title,
      type: "genericList",
      defaultLayout,
      child: this.spec.child || noChildResolver,
      canHandleIntent: this.spec.canHandleIntent || shallowIntentChecker,
      displayOptions: this.spec.displayOptions,
      initialValueTemplates,
      menuItems: (this.spec.menuItems || []).map((item, i) => maybeSerializeMenuItem(item, i, path)),
      menuItemGroups: (this.spec.menuItemGroups || []).map((item, i) => maybeSerializeMenuItemGroup(item, i, path))
    };
  }
};
var resolveTypeForDocument = async (getClient, id) => {
  const query = "*[_id in [$documentId, $draftId]]._type";
  const documentId = id.replace(/^drafts\./, "");
  const draftId = "drafts.".concat(documentId);
  const types = await getClient(DEFAULT_STUDIO_CLIENT_OPTIONS).fetch(query, {
    documentId,
    draftId
  }, {
    tag: "structure.resolve-type"
  });
  return types[0];
};
var validateFilter = (spec, options) => {
  var _a;
  const filter = ((_a = spec.options) == null ? void 0 : _a.filter.trim()) || "";
  if (["*", "{"].includes(filter[0])) {
    throw new SerializeError("`filter` cannot start with `".concat(filter[0], "` - looks like you are providing a query, not a filter"), options.path, spec.id, spec.title).withHelpUrl(HELP_URL.QUERY_PROVIDED_FOR_FILTER);
  }
  return filter;
};
var createDocumentChildResolverForItem = (context) => (itemId, options) => {
  var _a;
  const parentItem = options.parent;
  const template = ((_a = options.params) == null ? void 0 : _a.template) ? context.templates.find((tpl) => tpl.id === options.params.template) : void 0;
  const type = template ? template.schemaType : parentItem.schemaTypeName || resolveTypeForDocument(context.getClient, itemId);
  return Promise.resolve(type).then((schemaType) => schemaType ? context.resolveDocumentNode({
    schemaType,
    documentId: itemId
  }) : new DocumentBuilder(context).id("editor").documentId(itemId).schemaType(""));
};
var DocumentListBuilder = class extends GenericListBuilder {
  constructor(_context, spec) {
    super();
    this._context = _context;
    this.spec = spec || {};
    this.initialValueTemplatesSpecified = Boolean(spec == null ? void 0 : spec.initialValueTemplates);
  }
  apiVersion(apiVersion) {
    return this.clone({
      options: {
        ...this.spec.options || {
          filter: ""
        },
        apiVersion
      }
    });
  }
  getApiVersion() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.apiVersion;
  }
  filter(filter) {
    return this.clone({
      options: {
        ...this.spec.options || {},
        filter
      }
    });
  }
  getFilter() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.filter;
  }
  schemaType(type) {
    const schemaTypeName = typeof type === "string" ? type : type.name;
    return this.clone({
      schemaTypeName
    });
  }
  getSchemaType() {
    return this.spec.schemaTypeName;
  }
  params(params) {
    return this.clone({
      options: {
        ...this.spec.options || {
          filter: ""
        },
        params
      }
    });
  }
  getParams() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.params;
  }
  defaultOrdering(ordering) {
    if (!Array.isArray(ordering)) {
      throw new Error("`defaultOrdering` must be an array of order clauses");
    }
    return this.clone({
      options: {
        ...this.spec.options || {
          filter: ""
        },
        defaultOrdering: ordering
      }
    });
  }
  getDefaultOrdering() {
    var _a;
    return (_a = this.spec.options) == null ? void 0 : _a.defaultOrdering;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    var _a;
    if (typeof this.spec.id !== "string" || !this.spec.id) {
      throw new SerializeError("`id` is required for document lists", options.path, options.index, this.spec.title).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    if (!this.spec.options || !this.spec.options.filter) {
      throw new SerializeError("`filter` is required for document lists", options.path, this.spec.id, this.spec.title).withHelpUrl(HELP_URL.FILTER_REQUIRED);
    }
    return {
      ...super.serialize(options),
      type: "documentList",
      schemaTypeName: this.spec.schemaTypeName,
      child: this.spec.child || createDocumentChildResolverForItem(this._context),
      options: {
        ...this.spec.options,
        apiVersion: this.spec.options.apiVersion || (((_a = this.spec.options) == null ? void 0 : _a.filter) === "_type == $type" ? "2021-06-07" : "1"),
        filter: validateFilter(this.spec, options)
      }
    };
  }
  clone(withSpec) {
    const builder = new DocumentListBuilder(this._context);
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    if (!this.initialValueTemplatesSpecified) {
      builder.spec.initialValueTemplates = inferInitialValueTemplates(this._context, builder.spec);
    }
    if (!builder.spec.schemaTypeName) {
      builder.spec.schemaTypeName = inferTypeName(builder.spec);
    }
    return builder;
  }
  getSpec() {
    return this.spec;
  }
};
function inferInitialValueTemplates(context, spec) {
  const {
    document: document2
  } = context;
  const {
    schemaTypeName,
    options
  } = spec;
  const {
    filter,
    params
  } = options || {
    filter: "",
    params: {}
  };
  const typeNames = schemaTypeName ? [schemaTypeName] : Array.from(new Set(getTypeNamesFromFilter(filter, params)));
  if (typeNames.length === 0) {
    return void 0;
  }
  return typeNames.flatMap((schemaType) => document2.resolveNewDocumentOptions({
    type: "structure",
    schemaType
  })).map((option) => ({
    ...option,
    icon: ComposeIcon
  }));
}
function inferTypeName(spec) {
  const {
    options
  } = spec;
  const {
    filter,
    params
  } = options || {
    filter: "",
    params: {}
  };
  const typeNames = getTypeNamesFromFilter(filter, params);
  return typeNames.length === 1 ? typeNames[0] : void 0;
}
function getTypeNamesFromFilter(filter) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  let typeNames = getTypeNamesFromEqualityFilter(filter, params);
  if (typeNames.length === 0) {
    typeNames = getTypeNamesFromInTypesFilter(filter, params);
  }
  return typeNames;
}
function getTypeNamesFromEqualityFilter(filter) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const pattern = /\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type/g;
  const matches = [];
  let match;
  while ((match = pattern.exec(filter)) !== null) {
    matches.push(match[1] || match[2]);
  }
  return matches.map((candidate) => {
    const typeName = candidate[0] === "$" ? params[candidate.slice(1)] : candidate;
    const normalized = (typeName || "").trim().replace(/^["']|["']$/g, "");
    return normalized;
  }).filter(Boolean);
}
function getTypeNamesFromInTypesFilter(filter) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const pattern = /\b_type\s+in\s+\[(.*?)\]/;
  const matches = filter.match(pattern);
  if (!matches) {
    return [];
  }
  return matches[1].split(/,\s*/).map((match) => match.trim().replace(/^["']+|["']+$/g, "")).map((item) => item[0] === "$" ? params[item.slice(1)] : item).filter(Boolean);
}
var getArgType = (thing) => {
  if (thing instanceof ListBuilder) {
    return "ListBuilder";
  }
  if (isPromise(thing)) {
    return "Promise";
  }
  return Array.isArray(thing) ? "array" : typeof thing;
};
var isListItem = (item) => {
  return item.type === "listItem";
};
var defaultCanHandleIntent = (intentName, params, context) => {
  const pane = context.pane;
  const items = pane.items || [];
  return items.filter(isDocumentListItem).some((item) => item.schemaType.name === params.type && item._id === params.id) || shallowIntentChecker(intentName, params, context);
};
var resolveChildForItem = (itemId, options) => {
  const parentItem = options.parent;
  const items = parentItem.items.filter(isListItem);
  const target = (items.find((item) => item.id === itemId) || {
    child: void 0
  }).child;
  if (!target || typeof target !== "function") {
    return target;
  }
  return typeof target === "function" ? target(itemId, options) : target;
};
function maybeSerializeListItem(item, index, path) {
  if (item instanceof ListItemBuilder) {
    return item.serialize({
      path,
      index
    });
  }
  const listItem = item;
  if (listItem && listItem.type === "divider") {
    return item;
  }
  if (!listItem || listItem.type !== "listItem") {
    const gotWhat = listItem && listItem.type || getArgType(listItem);
    const helpText = gotWhat === "array" ? " - did you forget to spread (...moreItems)?" : "";
    throw new SerializeError('List items must be of type "listItem", got "'.concat(gotWhat, '"').concat(helpText), path, index).withHelpUrl(HELP_URL.INVALID_LIST_ITEM);
  }
  return item;
}
function isPromise(thing) {
  return isRecord$2(thing) && typeof thing.then === "function";
}
var ListBuilder = class extends GenericListBuilder {
  constructor(_context, spec) {
    super();
    this._context = _context;
    this.spec = spec ? spec : {};
    this.initialValueTemplatesSpecified = Boolean(spec && spec.initialValueTemplates);
  }
  items(items) {
    return this.clone({
      items
    });
  }
  getItems() {
    return this.spec.items;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const id = this.spec.id;
    if (typeof id !== "string" || !id) {
      throw new SerializeError("`id` is required for lists", options.path, options.index).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    const items = typeof this.spec.items === "undefined" ? [] : this.spec.items;
    if (!Array.isArray(items)) {
      throw new SerializeError("`items` must be an array of items", options.path, options.index).withHelpUrl(HELP_URL.LIST_ITEMS_MUST_BE_ARRAY);
    }
    const path = (options.path || []).concat(id);
    const serializedItems = items.map((item, index) => maybeSerializeListItem(item, index, path));
    const dupes = serializedItems.filter((val, i) => (0, import_find.default)(serializedItems, {
      id: val.id
    }, i + 1));
    if (dupes.length > 0) {
      const dupeIds = dupes.map((item) => item.id).slice(0, 5);
      const dupeDesc = dupes.length > 5 ? "".concat(dupeIds.join(", "), "...") : dupeIds.join(", ");
      throw new SerializeError("List items with same ID found (".concat(dupeDesc, ")"), options.path, options.index).withHelpUrl(HELP_URL.LIST_ITEM_IDS_MUST_BE_UNIQUE);
    }
    return {
      ...super.serialize(options),
      type: "list",
      canHandleIntent: this.spec.canHandleIntent || defaultCanHandleIntent,
      child: this.spec.child || resolveChildForItem,
      items: serializedItems
    };
  }
  clone(withSpec) {
    const builder = new ListBuilder(this._context);
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    return builder;
  }
};
var ListItemBuilder = class {
  constructor(_context, spec) {
    this._context = _context;
    this.spec = spec ? spec : {};
  }
  id(id) {
    return this.clone({
      id
    });
  }
  getId() {
    return this.spec.id;
  }
  title(title) {
    return this.clone({
      title,
      id: this.spec.id || (0, import_camelCase.default)(title)
    });
  }
  getTitle() {
    return this.spec.title;
  }
  icon(icon) {
    return this.clone({
      icon
    });
  }
  showIcon() {
    let enabled = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : true;
    return this.clone({
      displayOptions: {
        ...this.spec.displayOptions || {},
        showIcon: enabled
      }
    });
  }
  getShowIcon() {
    return this.spec.displayOptions ? this.spec.displayOptions.showIcon : void 0;
  }
  getIcon() {
    return this.spec.icon;
  }
  child(child) {
    return this.clone({
      child
    });
  }
  getChild() {
    return this.spec.child;
  }
  schemaType(schemaType) {
    return this.clone({
      schemaType
    });
  }
  getSchemaType() {
    const schemaType = this.spec.schemaType;
    if (typeof schemaType === "string") {
      return this._context.schema.get(schemaType);
    }
    return this.spec.schemaType;
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const {
      id,
      title,
      child
    } = this.spec;
    if (typeof id !== "string" || !id) {
      throw new SerializeError("`id` is required for list items", options.path, options.index).withHelpUrl(HELP_URL.ID_REQUIRED);
    }
    if (!options.titleIsOptional && (typeof title !== "string" || !title)) {
      throw new SerializeError("`title` is required for list items", options.path, id).withHelpUrl(HELP_URL.TITLE_REQUIRED);
    }
    let schemaType = this.spec.schemaType;
    if (typeof schemaType === "string") {
      const type = this._context.schema.get(schemaType);
      if (!type) {
        throw new SerializeError('Could not find type "'.concat(schemaType, '" in schema'), options.path, id).withHelpUrl(HELP_URL.SCHEMA_TYPE_NOT_FOUND);
      }
      schemaType = type;
    }
    const serializeOptions = {
      path: options.path.concat(id),
      hint: "child"
    };
    let listChild = child instanceof ComponentBuilder || child instanceof DocumentListBuilder || child instanceof DocumentBuilder || child instanceof ListBuilder ? child.serialize(serializeOptions) : child;
    if (typeof listChild === "function") {
      const originalChild = listChild;
      listChild = (itemId, childOptions) => {
        return originalChild(itemId, {
          ...childOptions,
          serializeOptions
        });
      };
    }
    return {
      ...this.spec,
      id: validateId(id, options.path, options.index),
      schemaType,
      child: listChild,
      title,
      type: "listItem"
    };
  }
  clone(withSpec) {
    const builder = new ListItemBuilder(this._context);
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    return builder;
  }
};
var createDefaultChildResolver = (context, spec) => (documentId) => {
  const schemaType = spec.schemaType && (typeof spec.schemaType === "string" ? spec.schemaType : spec.schemaType.name);
  return schemaType ? context.resolveDocumentNode({
    schemaType,
    documentId
  }) : new DocumentBuilder(context).id("documentEditor").documentId(documentId);
};
var DocumentListItemBuilder = class extends ListItemBuilder {
  constructor(_context, spec) {
    super(_context, spec);
    this._context = _context;
    this.spec = spec ? spec : {};
  }
  serialize() {
    let options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
      path: []
    };
    const spec = super.serialize({
      ...options,
      titleIsOptional: true
    });
    if (!spec.schemaType) {
      throw new SerializeError("`schemaType` is required for document list items", options.path, options.index).withHelpUrl(HELP_URL.SCHEMA_TYPE_REQUIRED);
    }
    const child = spec.child || createDefaultChildResolver(this._context, spec);
    return {
      ...spec,
      child,
      schemaType: spec.schemaType,
      _id: spec.id
    };
  }
  clone(withSpec) {
    const builder = new DocumentListItemBuilder(this._context);
    builder.spec = {
      ...this.spec,
      ...withSpec || {}
    };
    return builder;
  }
};
function isDocumentListItem(item) {
  return isRecord$2(item) && typeof item.schemaType !== "undefined" && typeof item._id === "string";
}
var DocumentTypeListBuilder = class extends DocumentListBuilder {
  constructor(_context, spec) {
    super(_context);
    this._context = _context;
    this.spec = spec ? spec : {};
  }
  child(child) {
    return this.cloneWithoutDefaultIntentHandler({
      child
    });
  }
  clone(withSpec) {
    const parent = super.clone(withSpec);
    const builder = new DocumentTypeListBuilder(this._context);
    builder.spec = {
      ...this.spec,
      ...parent.getSpec(),
      ...withSpec || {}
    };
    return builder;
  }
  cloneWithoutDefaultIntentHandler(withSpec) {
    const parent = super.clone(withSpec);
    const builder = new DocumentTypeListBuilder(this._context);
    const canHandleIntent = this.spec.canHandleIntent;
    const shouldOverride = canHandleIntent && canHandleIntent.identity === DEFAULT_INTENT_HANDLER;
    const override = shouldOverride ? {
      canHandleIntent: void 0
    } : {};
    builder.spec = {
      ...parent.getSpec(),
      ...this.spec,
      ...withSpec || {},
      ...override
    };
    return builder;
  }
};
function shouldShowIcon(schemaType) {
  const preview = schemaType.preview;
  return Boolean(preview && (preview.prepare || preview.select && preview.select.media));
}
var BUNDLED_DOC_TYPES = ["sanity.imageAsset", "sanity.fileAsset"];
function isBundledDocType(typeName) {
  return BUNDLED_DOC_TYPES.includes(typeName);
}
function isDocumentType(schemaType) {
  var _a;
  return ((_a = schemaType.type) == null ? void 0 : _a.name) === "document";
}
function isList(collection) {
  return collection.type === "list";
}
function getDocumentTypes(_ref32) {
  let {
    schema
  } = _ref32;
  return schema.getTypeNames().filter((n) => {
    const schemaType = schema.get(n);
    return schemaType && isDocumentType(schemaType);
  }).filter((n) => !isBundledDocType(n));
}
function getDocumentTypeListItems(context) {
  const types = getDocumentTypes(context);
  return types.map((typeName) => getDocumentTypeListItem(context, typeName));
}
function getDocumentTypeListItem(context, typeName) {
  const {
    schema
  } = context;
  const type = schema.get(typeName);
  if (!type) {
    throw new Error('Schema type with name "'.concat(typeName, '" not found'));
  }
  const title = type.title || (0, import_startCase.default)(typeName);
  return new ListItemBuilder(context).id(typeName).title(title).schemaType(type).child((id, childContext) => {
    const parent = childContext.parent;
    const parentItem = isList(parent) ? parent.items.find((item) => item.id === id) : null;
    let list = getDocumentTypeList(context, typeName);
    if (parentItem && parentItem.title) {
      list = list.title(parentItem.title);
    }
    return list;
  });
}
function getDocumentTypeList(context, typeNameOrSpec) {
  const {
    schema,
    resolveDocumentNode
  } = context;
  const schemaType = typeof typeNameOrSpec === "string" ? typeNameOrSpec : typeNameOrSpec.schemaType;
  const typeName = typeof schemaType === "string" ? schemaType : schemaType.name;
  const spec = typeof typeNameOrSpec === "string" ? {
    schemaType
  } : typeNameOrSpec;
  const type = schema.get(typeName);
  if (!type) {
    throw new Error('Schema type with name "'.concat(typeName, '" not found'));
  }
  const title = type.title || (0, import_startCase.default)(typeName);
  const showIcons = shouldShowIcon(type);
  return new DocumentTypeListBuilder(context).id(spec.id || typeName).title(spec.title || title).filter("_type == $type").params({
    type: typeName
  }).schemaType(type).showIcons(showIcons).defaultOrdering(DEFAULT_SELECTED_ORDERING_OPTION.by).menuItemGroups(spec.menuItemGroups || [{
    id: "sorting",
    title: "Sort"
  }, {
    id: "layout",
    title: "Layout"
  }, {
    id: "actions",
    title: "Actions"
  }]).child(spec.child || ((documentId) => resolveDocumentNode({
    schemaType: typeName,
    documentId
  }))).canHandleIntent(spec.canHandleIntent || defaultIntentChecker).menuItems(spec.menuItems || [
    ...getOrderingMenuItemsForSchemaType(context, type),
    new MenuItemBuilder(context).group("layout").title("Compact view").icon(StackCompactIcon).action("setLayout").params({
      layout: "default"
    }),
    new MenuItemBuilder(context).group("layout").title("Detailed view").icon(StackIcon).action("setLayout").params({
      layout: "detail"
    })
  ]);
}
function hasIcon(schemaType) {
  if (!schemaType || typeof schemaType === "string") {
    return false;
  }
  return Boolean(schemaType.icon);
}
function getDefaultStructure(context) {
  const items = getDocumentTypeListItems(context);
  return new ListBuilder(context).id("__root__").title("Content").items(items).showIcons(items.some((item) => hasIcon(item.getSchemaType())));
}
function createStructureBuilder(_ref33) {
  let {
    defaultDocumentNode,
    source
  } = _ref33;
  const configContext = getConfigContextFromSource(source);
  const context = {
    ...source,
    getStructureBuilder: () => structureBuilder,
    resolveDocumentNode: (options) => {
      let builder = (defaultDocumentNode == null ? void 0 : defaultDocumentNode(structureBuilder, {
        ...options,
        ...configContext
      })) || new DocumentBuilder(context);
      if (!builder.getId()) {
        builder = builder.id("documentEditor");
      }
      if (options.documentId) {
        builder = builder.documentId(getPublishedId(options.documentId));
      }
      return builder.schemaType(options.schemaType);
    }
  };
  const structureBuilder = {
    defaults: () => getDefaultStructure(context),
    documentTypeList: function() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return getDocumentTypeList(context, ...args);
    },
    documentTypeListItem: function() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      return getDocumentTypeListItem(context, ...args);
    },
    documentTypeListItems: function() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      return getDocumentTypeListItems(context, ...args);
    },
    document: function() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return new DocumentBuilder(context, ...args);
    },
    documentWithInitialValueTemplate: function() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      return documentFromEditorWithInitialValue(context, ...args);
    },
    defaultDocument: context.resolveDocumentNode,
    list: function() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
      return new ListBuilder(context, ...args);
    },
    listItem: function() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      return new ListItemBuilder(context, ...args);
    },
    menuItem: function() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      return new MenuItemBuilder(context, ...args);
    },
    menuItemGroup: function() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      return new MenuItemGroupBuilder(context, ...args);
    },
    menuItemsFromInitialValueTemplateItems: function() {
      for (var _len10 = arguments.length, args = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
        args[_key10] = arguments[_key10];
      }
      return menuItemsFromInitialValueTemplateItems(context, ...args);
    },
    documentList: function() {
      for (var _len11 = arguments.length, args = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
        args[_key11] = arguments[_key11];
      }
      return new DocumentListBuilder(context, ...args);
    },
    documentListItem: function() {
      for (var _len12 = arguments.length, args = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
        args[_key12] = arguments[_key12];
      }
      return new DocumentListItemBuilder(context, ...args);
    },
    orderingMenuItem: function() {
      for (var _len13 = arguments.length, args = new Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
        args[_key13] = arguments[_key13];
      }
      return getOrderingMenuItem(context, ...args);
    },
    orderingMenuItemsForType: function() {
      for (var _len14 = arguments.length, args = new Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
        args[_key14] = arguments[_key14];
      }
      return getOrderingMenuItemsForSchemaType(context, ...args);
    },
    editor: function() {
      for (var _len15 = arguments.length, args = new Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
        args[_key15] = arguments[_key15];
      }
      return documentFromEditor(context, ...args);
    },
    defaultInitialValueTemplateItems: function() {
      for (var _len16 = arguments.length, args = new Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
        args[_key16] = arguments[_key16];
      }
      return defaultInitialValueTemplateItems(context, ...args);
    },
    initialValueTemplateItem: (templateId, parameters) => new InitialValueTemplateItemBuilder(context, {
      id: templateId,
      parameters,
      templateId
    }),
    component: (spec) => {
      return (0, import_react_is.isValidElementType)(spec) ? new ComponentBuilder().component(spec) : new ComponentBuilder(spec);
    },
    divider: () => ({
      id: (0, import_uniqueId.default)("__divider__"),
      type: "divider"
    }),
    view: views,
    context
  };
  return structureBuilder;
}
function DeskToolProvider(_ref34) {
  let {
    defaultDocumentNode,
    structure: resolveStructure,
    children
  } = _ref34;
  const [layoutCollapsed, setLayoutCollapsed] = (0, import_react.useState)(false);
  const source = useSource();
  const configContext = useConfigContextFromSource(source);
  const documentStore = useDocumentStore();
  const S = (0, import_react.useMemo)(() => {
    return createStructureBuilder({
      defaultDocumentNode,
      source
    });
  }, [defaultDocumentNode, source]);
  const rootPaneNode = (0, import_react.useMemo)(() => {
    if (resolveStructure)
      return resolveStructure(S, {
        ...configContext,
        documentStore
      });
    return S.defaults();
  }, [S, resolveStructure, configContext, documentStore]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskToolContext.Provider, {
    value: (0, import_react.useMemo)(() => {
      return {
        features: {
          backButton: layoutCollapsed,
          reviewChanges: !layoutCollapsed,
          splitPanes: !layoutCollapsed,
          splitViews: !layoutCollapsed
        },
        layoutCollapsed,
        setLayoutCollapsed,
        rootPaneNode,
        structureContext: S.context
      };
    }, [layoutCollapsed, rootPaneNode, S.context]),
    children
  });
}

export {
  require_isNumber,
  require_camelCase,
  require_kebabCase,
  DocTitle,
  PaneItemPreview,
  PaneRouterContext,
  BackLink,
  ChildLink,
  ReferenceChildLink,
  ParameterizedLink,
  usePaneRouter,
  PaneContextMenuButton,
  PANE_COLLAPSED_WIDTH,
  PANE_DEFAULT_MIN_WIDTH,
  PaneLayoutContext,
  usePaneLayout,
  Pane,
  usePane,
  PaneContent,
  PaneFooter,
  PaneHeader,
  Root,
  PaneHeaderActions,
  HistoryRestoreAction,
  DocumentPaneContext,
  useDocumentPane,
  _DEBUG,
  LOADING_PANE,
  setActivePanes,
  deskTool,
  DeskToolContext,
  SerializeError,
  DeskToolProvider
};
//# sourceMappingURL=/build/_shared/chunk-5WXPSLY2.js.map