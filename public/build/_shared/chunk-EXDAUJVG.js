import {
  AddCircleIcon,
  ArrowLeftIcon,
  AvatarStack,
  BackLink,
  Badge,
  BinaryDocumentIcon,
  BoundaryElementProvider,
  Box,
  Button,
  Card,
  Ce,
  ChangeConnectorRoot,
  ChangeFieldWrapper,
  ChangeList,
  ChevronDownIcon,
  ChildLink,
  CloseIcon,
  Code,
  Container,
  DEFAULT_STUDIO_CLIENT_OPTIONS,
  DeskToolContext,
  DeskToolProvider,
  Dialog,
  DialogProvider,
  DiffTooltip,
  DocTitle,
  DocumentChangeContext,
  DocumentPaneContext,
  EarthAmericasIcon,
  EditIcon,
  ErrorBoundary,
  ErrorOutlineIcon,
  Flex,
  FormBuilder,
  GetHookCollectionState,
  Grid,
  Heading,
  HistoryRestoreAction,
  Hotkeys,
  InfoOutlineIcon,
  Inline,
  LOADING_PANE,
  Label,
  LayerProvider,
  LegacyLayerProvider,
  Menu,
  MenuButton,
  MenuItem,
  NEVER,
  NoChanges,
  PANE_COLLAPSED_WIDTH,
  PANE_DEFAULT_MIN_WIDTH,
  Pane,
  PaneContent,
  PaneContextMenuButton,
  PaneFooter,
  PaneHeader,
  PaneLayoutContext,
  PaneRouterContext,
  ParameterizedLink,
  PlayIcon,
  Popover,
  PortalProvider,
  PresenceOverlay,
  PublishIcon,
  ReadOnlyIcon,
  ReferenceChildLink,
  ReferenceInputOptionsProvider,
  ReplaySubject,
  RestoreIcon,
  Root,
  ScrollContainer,
  SearchIcon,
  SelectIcon,
  SerializeError,
  SourceProvider,
  Spinner,
  SplitVerticalIcon,
  Stack,
  SyncIcon,
  Tab,
  TabList,
  TabPanel,
  Text,
  TextInput,
  Tooltip,
  TrashIcon,
  Ue,
  UnpublishIcon,
  UserAvatar,
  ValidationList,
  WarningOutlineIcon,
  __assign,
  __extends,
  __read,
  __rest,
  __spreadArray,
  _isCustomDocumentTypeDefinition,
  _raf2,
  catchError,
  concat,
  createPatchChannel,
  debounceTime,
  delay,
  distinctUntilChanged,
  firstValueFrom,
  format,
  from,
  fromMutationPatches,
  fromString,
  generateHelpUrl,
  get,
  getDraftId,
  getExpandOperations,
  getPublishedId,
  init_is_prop_valid_browser_esm,
  invariant,
  isActionEnabled,
  isDev,
  isObservable,
  isRecord$2,
  isString,
  isValidationErrorMarker,
  isValidationInfoMarker,
  isValidationWarningMarker,
  is_prop_valid_browser_esm_exports,
  map,
  mapTo,
  merge,
  nanoid,
  of,
  pairwise,
  publishReplay,
  refCount,
  rem,
  require_camelCase,
  require_find,
  require_isEqual,
  require_isNumber,
  require_isString,
  require_kebabCase,
  require_lib,
  require_negate,
  require_omit,
  require_pickBy,
  require_react_is,
  require_startCase,
  require_uniq,
  require_uniqueId,
  require_upperFirst,
  scan,
  setActivePanes,
  setAtPath,
  startWith,
  styled_components_browser_esm_default,
  switchMap,
  tap,
  toMutationPatches,
  toString,
  useAsObservable,
  useClickOutside,
  useClient,
  useConnectionState,
  useCurrentUser,
  useDocumentOperation,
  useDocumentOperationEvent,
  useDocumentPane,
  useDocumentPresence,
  useDocumentPreview,
  useDocumentPreviewStore,
  useDocumentStore,
  useDocumentType,
  useDocumentValuePermissions,
  useEditState,
  useElementRect,
  useFormState,
  useGlobalKeyDown,
  useHistoryStore,
  useInitialValue,
  useLayer,
  useMediaIndex,
  useMemoObservable,
  usePane,
  usePaneLayout,
  usePaneRouter,
  usePortal,
  usePresenceStore,
  useRouter,
  useRouterState,
  useSchema,
  useSettingsStore,
  useSource,
  useSyncState,
  useTemplatePermissions,
  useTemplates,
  useTimeAgo,
  useToast,
  useUnique,
  useValidationStatus,
  useWorkspace,
  useZIndex,
  v4_default,
  visitDiff,
  warning
} from "/build/_shared/chunk-3PXH2B7D.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import {
  require_object_assign
} from "/build/_shared/chunk-RZ47BF3R.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __commonJS,
  __toCommonJS,
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/create-react-class/factory.js
var require_factory = __commonJS({
  "node_modules/create-react-class/factory.js"(exports, module) {
    "use strict";
    var _assign = require_object_assign();
    var emptyObject2 = {};
    if (true) {
      Object.freeze(emptyObject2);
    }
    var validateFormat = function validateFormat2(format2) {
    };
    if (true) {
      validateFormat = function validateFormat2(format2) {
        if (format2 === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      };
    }
    function _invariant(condition, format2, a2, b2, c2, d, e, f) {
      validateFormat(format2);
      if (!condition) {
        var error;
        if (format2 === void 0) {
          error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var args = [a2, b2, c2, d, e, f];
          var argIndex = 0;
          error = new Error(format2.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    }
    var warning2 = function() {
    };
    if (true) {
      printWarning = function printWarning2(format2) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = "Warning: " + format2.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning2 = function warning3(condition, format2) {
        if (format2 === void 0) {
          throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        }
        if (format2.indexOf("Failed Composite propType: ") === 0) {
          return;
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          printWarning.apply(void 0, [format2].concat(args));
        }
      };
    }
    var printWarning;
    var MIXINS_KEY = "mixins";
    function identity(fn) {
      return fn;
    }
    var ReactPropTypeLocationNames;
    if (true) {
      ReactPropTypeLocationNames = {
        prop: "prop",
        context: "context",
        childContext: "child context"
      };
    } else {
      ReactPropTypeLocationNames = {};
    }
    function factory(ReactComponent, isValidElement2, ReactNoopUpdateQueue) {
      var injectedMixins = [];
      var ReactClassInterface = {
        mixins: "DEFINE_MANY",
        statics: "DEFINE_MANY",
        propTypes: "DEFINE_MANY",
        contextTypes: "DEFINE_MANY",
        childContextTypes: "DEFINE_MANY",
        getDefaultProps: "DEFINE_MANY_MERGED",
        getInitialState: "DEFINE_MANY_MERGED",
        getChildContext: "DEFINE_MANY_MERGED",
        render: "DEFINE_ONCE",
        componentWillMount: "DEFINE_MANY",
        componentDidMount: "DEFINE_MANY",
        componentWillReceiveProps: "DEFINE_MANY",
        shouldComponentUpdate: "DEFINE_ONCE",
        componentWillUpdate: "DEFINE_MANY",
        componentDidUpdate: "DEFINE_MANY",
        componentWillUnmount: "DEFINE_MANY",
        UNSAFE_componentWillMount: "DEFINE_MANY",
        UNSAFE_componentWillReceiveProps: "DEFINE_MANY",
        UNSAFE_componentWillUpdate: "DEFINE_MANY",
        updateComponent: "OVERRIDE_BASE"
      };
      var ReactClassStaticInterface = {
        getDerivedStateFromProps: "DEFINE_MANY_MERGED"
      };
      var RESERVED_SPEC_KEYS = {
        displayName: function(Constructor, displayName) {
          Constructor.displayName = displayName;
        },
        mixins: function(Constructor, mixins) {
          if (mixins) {
            for (var i = 0; i < mixins.length; i++) {
              mixSpecIntoComponent(Constructor, mixins[i]);
            }
          }
        },
        childContextTypes: function(Constructor, childContextTypes) {
          if (true) {
            validateTypeDef(Constructor, childContextTypes, "childContext");
          }
          Constructor.childContextTypes = _assign(
            {},
            Constructor.childContextTypes,
            childContextTypes
          );
        },
        contextTypes: function(Constructor, contextTypes) {
          if (true) {
            validateTypeDef(Constructor, contextTypes, "context");
          }
          Constructor.contextTypes = _assign(
            {},
            Constructor.contextTypes,
            contextTypes
          );
        },
        getDefaultProps: function(Constructor, getDefaultProps) {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps = createMergedResultFunction(
              Constructor.getDefaultProps,
              getDefaultProps
            );
          } else {
            Constructor.getDefaultProps = getDefaultProps;
          }
        },
        propTypes: function(Constructor, propTypes) {
          if (true) {
            validateTypeDef(Constructor, propTypes, "prop");
          }
          Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
        },
        statics: function(Constructor, statics) {
          mixStaticSpecIntoComponent(Constructor, statics);
        },
        autobind: function() {
        }
      };
      function validateTypeDef(Constructor, typeDef, location) {
        for (var propName in typeDef) {
          if (typeDef.hasOwnProperty(propName)) {
            if (true) {
              warning2(
                typeof typeDef[propName] === "function",
                "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",
                Constructor.displayName || "ReactClass",
                ReactPropTypeLocationNames[location],
                propName
              );
            }
          }
        }
      }
      function validateMethodOverride(isAlreadyDefined, name) {
        var specPolicy = ReactClassInterface.hasOwnProperty(name) ? ReactClassInterface[name] : null;
        if (ReactClassMixin.hasOwnProperty(name)) {
          _invariant(
            specPolicy === "OVERRIDE_BASE",
            "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",
            name
          );
        }
        if (isAlreadyDefined) {
          _invariant(
            specPolicy === "DEFINE_MANY" || specPolicy === "DEFINE_MANY_MERGED",
            "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
            name
          );
        }
      }
      function mixSpecIntoComponent(Constructor, spec) {
        if (!spec) {
          if (true) {
            var typeofSpec = typeof spec;
            var isMixinValid = typeofSpec === "object" && spec !== null;
            if (true) {
              warning2(
                isMixinValid,
                "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.",
                Constructor.displayName || "ReactClass",
                spec === null ? null : typeofSpec
              );
            }
          }
          return;
        }
        _invariant(
          typeof spec !== "function",
          "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."
        );
        _invariant(
          !isValidElement2(spec),
          "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object."
        );
        var proto = Constructor.prototype;
        var autoBindPairs = proto.__reactAutoBindPairs;
        if (spec.hasOwnProperty(MIXINS_KEY)) {
          RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
        }
        for (var name in spec) {
          if (!spec.hasOwnProperty(name)) {
            continue;
          }
          if (name === MIXINS_KEY) {
            continue;
          }
          var property = spec[name];
          var isAlreadyDefined = proto.hasOwnProperty(name);
          validateMethodOverride(isAlreadyDefined, name);
          if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
            RESERVED_SPEC_KEYS[name](Constructor, property);
          } else {
            var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
            var isFunction = typeof property === "function";
            var shouldAutoBind = isFunction && !isReactClassMethod && !isAlreadyDefined && spec.autobind !== false;
            if (shouldAutoBind) {
              autoBindPairs.push(name, property);
              proto[name] = property;
            } else {
              if (isAlreadyDefined) {
                var specPolicy = ReactClassInterface[name];
                _invariant(
                  isReactClassMethod && (specPolicy === "DEFINE_MANY_MERGED" || specPolicy === "DEFINE_MANY"),
                  "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",
                  specPolicy,
                  name
                );
                if (specPolicy === "DEFINE_MANY_MERGED") {
                  proto[name] = createMergedResultFunction(proto[name], property);
                } else if (specPolicy === "DEFINE_MANY") {
                  proto[name] = createChainedFunction(proto[name], property);
                }
              } else {
                proto[name] = property;
                if (true) {
                  if (typeof property === "function" && spec.displayName) {
                    proto[name].displayName = spec.displayName + "_" + name;
                  }
                }
              }
            }
          }
        }
      }
      function mixStaticSpecIntoComponent(Constructor, statics) {
        if (!statics) {
          return;
        }
        for (var name in statics) {
          var property = statics[name];
          if (!statics.hasOwnProperty(name)) {
            continue;
          }
          var isReserved = name in RESERVED_SPEC_KEYS;
          _invariant(
            !isReserved,
            'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',
            name
          );
          var isAlreadyDefined = name in Constructor;
          if (isAlreadyDefined) {
            var specPolicy = ReactClassStaticInterface.hasOwnProperty(name) ? ReactClassStaticInterface[name] : null;
            _invariant(
              specPolicy === "DEFINE_MANY_MERGED",
              "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",
              name
            );
            Constructor[name] = createMergedResultFunction(Constructor[name], property);
            return;
          }
          Constructor[name] = property;
        }
      }
      function mergeIntoWithNoDuplicateKeys(one, two) {
        _invariant(
          one && two && typeof one === "object" && typeof two === "object",
          "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."
        );
        for (var key in two) {
          if (two.hasOwnProperty(key)) {
            _invariant(
              one[key] === void 0,
              "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",
              key
            );
            one[key] = two[key];
          }
        }
        return one;
      }
      function createMergedResultFunction(one, two) {
        return function mergedResult() {
          var a2 = one.apply(this, arguments);
          var b2 = two.apply(this, arguments);
          if (a2 == null) {
            return b2;
          } else if (b2 == null) {
            return a2;
          }
          var c2 = {};
          mergeIntoWithNoDuplicateKeys(c2, a2);
          mergeIntoWithNoDuplicateKeys(c2, b2);
          return c2;
        };
      }
      function createChainedFunction(one, two) {
        return function chainedFunction() {
          one.apply(this, arguments);
          two.apply(this, arguments);
        };
      }
      function bindAutoBindMethod(component, method) {
        var boundMethod = method.bind(component);
        if (true) {
          boundMethod.__reactBoundContext = component;
          boundMethod.__reactBoundMethod = method;
          boundMethod.__reactBoundArguments = null;
          var componentName = component.constructor.displayName;
          var _bind = boundMethod.bind;
          boundMethod.bind = function(newThis) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            if (newThis !== component && newThis !== null) {
              if (true) {
                warning2(
                  false,
                  "bind(): React component methods may only be bound to the component instance. See %s",
                  componentName
                );
              }
            } else if (!args.length) {
              if (true) {
                warning2(
                  false,
                  "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",
                  componentName
                );
              }
              return boundMethod;
            }
            var reboundMethod = _bind.apply(boundMethod, arguments);
            reboundMethod.__reactBoundContext = component;
            reboundMethod.__reactBoundMethod = method;
            reboundMethod.__reactBoundArguments = args;
            return reboundMethod;
          };
        }
        return boundMethod;
      }
      function bindAutoBindMethods(component) {
        var pairs = component.__reactAutoBindPairs;
        for (var i = 0; i < pairs.length; i += 2) {
          var autoBindKey = pairs[i];
          var method = pairs[i + 1];
          component[autoBindKey] = bindAutoBindMethod(component, method);
        }
      }
      var IsMountedPreMixin = {
        componentDidMount: function() {
          this.__isMounted = true;
        }
      };
      var IsMountedPostMixin = {
        componentWillUnmount: function() {
          this.__isMounted = false;
        }
      };
      var ReactClassMixin = {
        replaceState: function(newState, callback) {
          this.updater.enqueueReplaceState(this, newState, callback);
        },
        isMounted: function() {
          if (true) {
            warning2(
              this.__didWarnIsMounted,
              "%s: isMounted is deprecated. Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.",
              this.constructor && this.constructor.displayName || this.name || "Component"
            );
            this.__didWarnIsMounted = true;
          }
          return !!this.__isMounted;
        }
      };
      var ReactClassComponent = function() {
      };
      _assign(
        ReactClassComponent.prototype,
        ReactComponent.prototype,
        ReactClassMixin
      );
      function createClass(spec) {
        var Constructor = identity(function(props, context, updater) {
          if (true) {
            warning2(
              this instanceof Constructor,
              "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"
            );
          }
          if (this.__reactAutoBindPairs.length) {
            bindAutoBindMethods(this);
          }
          this.props = props;
          this.context = context;
          this.refs = emptyObject2;
          this.updater = updater || ReactNoopUpdateQueue;
          this.state = null;
          var initialState = this.getInitialState ? this.getInitialState() : null;
          if (true) {
            if (initialState === void 0 && this.getInitialState._isMockFunction) {
              initialState = null;
            }
          }
          _invariant(
            typeof initialState === "object" && !Array.isArray(initialState),
            "%s.getInitialState(): must return an object or null",
            Constructor.displayName || "ReactCompositeComponent"
          );
          this.state = initialState;
        });
        Constructor.prototype = new ReactClassComponent();
        Constructor.prototype.constructor = Constructor;
        Constructor.prototype.__reactAutoBindPairs = [];
        injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));
        mixSpecIntoComponent(Constructor, IsMountedPreMixin);
        mixSpecIntoComponent(Constructor, spec);
        mixSpecIntoComponent(Constructor, IsMountedPostMixin);
        if (Constructor.getDefaultProps) {
          Constructor.defaultProps = Constructor.getDefaultProps();
        }
        if (true) {
          if (Constructor.getDefaultProps) {
            Constructor.getDefaultProps.isReactClassApproved = {};
          }
          if (Constructor.prototype.getInitialState) {
            Constructor.prototype.getInitialState.isReactClassApproved = {};
          }
        }
        _invariant(
          Constructor.prototype.render,
          "createClass(...): Class specification must implement a `render` method."
        );
        if (true) {
          warning2(
            !Constructor.prototype.componentShouldUpdate,
            "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",
            spec.displayName || "A component"
          );
          warning2(
            !Constructor.prototype.componentWillRecieveProps,
            "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?",
            spec.displayName || "A component"
          );
          warning2(
            !Constructor.prototype.UNSAFE_componentWillRecieveProps,
            "%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?",
            spec.displayName || "A component"
          );
        }
        for (var methodName in ReactClassInterface) {
          if (!Constructor.prototype[methodName]) {
            Constructor.prototype[methodName] = null;
          }
        }
        return Constructor;
      }
      return createClass;
    }
    module.exports = factory;
  }
});

// node_modules/create-react-class/index.js
var require_create_react_class = __commonJS({
  "node_modules/create-react-class/index.js"(exports, module) {
    "use strict";
    var React4 = require_react();
    var factory = require_factory();
    if (typeof React4 === "undefined") {
      throw Error(
        "create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class."
      );
    }
    var ReactNoopUpdateQueue = new React4.Component().updater;
    module.exports = factory(
      React4.Component,
      React4.isValidElement,
      ReactNoopUpdateQueue
    );
  }
});

// node_modules/date-now/index.js
var require_date_now = __commonJS({
  "node_modules/date-now/index.js"(exports, module) {
    module.exports = Date.now || now;
    function now() {
      return new Date().getTime();
    }
  }
});

// node_modules/debounce/index.js
var require_debounce = __commonJS({
  "node_modules/debounce/index.js"(exports, module) {
    var now = require_date_now();
    module.exports = function debounce(func, wait, immediate) {
      var timeout, args, context, timestamp, result;
      if (null == wait)
        wait = 100;
      function later() {
        var last = now() - timestamp;
        if (last < wait && last > 0) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate) {
            result = func.apply(context, args);
            if (!timeout)
              context = args = null;
          }
        }
      }
      ;
      return function debounced() {
        context = this;
        args = arguments;
        timestamp = now();
        var callNow = immediate && !timeout;
        if (!timeout)
          timeout = setTimeout(later, wait);
        if (callNow) {
          result = func.apply(context, args);
          context = args = null;
        }
        return result;
      };
    };
  }
});

// node_modules/md5-o-matic/lib/md5omatic.js
var require_md5omatic = __commonJS({
  "node_modules/md5-o-matic/lib/md5omatic.js"(exports, module) {
    "use strict";
    module.exports = md5omatic;
    function md5omatic(str) {
      var x = str2blks_MD5(str);
      var a2 = 1732584193;
      var b2 = -271733879;
      var c2 = -1732584194;
      var d = 271733878;
      for (var i = 0; i < x.length; i += 16) {
        var olda = a2;
        var oldb = b2;
        var oldc = c2;
        var oldd = d;
        a2 = ff(a2, b2, c2, d, x[i + 0], 7, -680876936);
        d = ff(d, a2, b2, c2, x[i + 1], 12, -389564586);
        c2 = ff(c2, d, a2, b2, x[i + 2], 17, 606105819);
        b2 = ff(b2, c2, d, a2, x[i + 3], 22, -1044525330);
        a2 = ff(a2, b2, c2, d, x[i + 4], 7, -176418897);
        d = ff(d, a2, b2, c2, x[i + 5], 12, 1200080426);
        c2 = ff(c2, d, a2, b2, x[i + 6], 17, -1473231341);
        b2 = ff(b2, c2, d, a2, x[i + 7], 22, -45705983);
        a2 = ff(a2, b2, c2, d, x[i + 8], 7, 1770035416);
        d = ff(d, a2, b2, c2, x[i + 9], 12, -1958414417);
        c2 = ff(c2, d, a2, b2, x[i + 10], 17, -42063);
        b2 = ff(b2, c2, d, a2, x[i + 11], 22, -1990404162);
        a2 = ff(a2, b2, c2, d, x[i + 12], 7, 1804603682);
        d = ff(d, a2, b2, c2, x[i + 13], 12, -40341101);
        c2 = ff(c2, d, a2, b2, x[i + 14], 17, -1502002290);
        b2 = ff(b2, c2, d, a2, x[i + 15], 22, 1236535329);
        a2 = gg(a2, b2, c2, d, x[i + 1], 5, -165796510);
        d = gg(d, a2, b2, c2, x[i + 6], 9, -1069501632);
        c2 = gg(c2, d, a2, b2, x[i + 11], 14, 643717713);
        b2 = gg(b2, c2, d, a2, x[i + 0], 20, -373897302);
        a2 = gg(a2, b2, c2, d, x[i + 5], 5, -701558691);
        d = gg(d, a2, b2, c2, x[i + 10], 9, 38016083);
        c2 = gg(c2, d, a2, b2, x[i + 15], 14, -660478335);
        b2 = gg(b2, c2, d, a2, x[i + 4], 20, -405537848);
        a2 = gg(a2, b2, c2, d, x[i + 9], 5, 568446438);
        d = gg(d, a2, b2, c2, x[i + 14], 9, -1019803690);
        c2 = gg(c2, d, a2, b2, x[i + 3], 14, -187363961);
        b2 = gg(b2, c2, d, a2, x[i + 8], 20, 1163531501);
        a2 = gg(a2, b2, c2, d, x[i + 13], 5, -1444681467);
        d = gg(d, a2, b2, c2, x[i + 2], 9, -51403784);
        c2 = gg(c2, d, a2, b2, x[i + 7], 14, 1735328473);
        b2 = gg(b2, c2, d, a2, x[i + 12], 20, -1926607734);
        a2 = hh(a2, b2, c2, d, x[i + 5], 4, -378558);
        d = hh(d, a2, b2, c2, x[i + 8], 11, -2022574463);
        c2 = hh(c2, d, a2, b2, x[i + 11], 16, 1839030562);
        b2 = hh(b2, c2, d, a2, x[i + 14], 23, -35309556);
        a2 = hh(a2, b2, c2, d, x[i + 1], 4, -1530992060);
        d = hh(d, a2, b2, c2, x[i + 4], 11, 1272893353);
        c2 = hh(c2, d, a2, b2, x[i + 7], 16, -155497632);
        b2 = hh(b2, c2, d, a2, x[i + 10], 23, -1094730640);
        a2 = hh(a2, b2, c2, d, x[i + 13], 4, 681279174);
        d = hh(d, a2, b2, c2, x[i + 0], 11, -358537222);
        c2 = hh(c2, d, a2, b2, x[i + 3], 16, -722521979);
        b2 = hh(b2, c2, d, a2, x[i + 6], 23, 76029189);
        a2 = hh(a2, b2, c2, d, x[i + 9], 4, -640364487);
        d = hh(d, a2, b2, c2, x[i + 12], 11, -421815835);
        c2 = hh(c2, d, a2, b2, x[i + 15], 16, 530742520);
        b2 = hh(b2, c2, d, a2, x[i + 2], 23, -995338651);
        a2 = ii(a2, b2, c2, d, x[i + 0], 6, -198630844);
        d = ii(d, a2, b2, c2, x[i + 7], 10, 1126891415);
        c2 = ii(c2, d, a2, b2, x[i + 14], 15, -1416354905);
        b2 = ii(b2, c2, d, a2, x[i + 5], 21, -57434055);
        a2 = ii(a2, b2, c2, d, x[i + 12], 6, 1700485571);
        d = ii(d, a2, b2, c2, x[i + 3], 10, -1894986606);
        c2 = ii(c2, d, a2, b2, x[i + 10], 15, -1051523);
        b2 = ii(b2, c2, d, a2, x[i + 1], 21, -2054922799);
        a2 = ii(a2, b2, c2, d, x[i + 8], 6, 1873313359);
        d = ii(d, a2, b2, c2, x[i + 15], 10, -30611744);
        c2 = ii(c2, d, a2, b2, x[i + 6], 15, -1560198380);
        b2 = ii(b2, c2, d, a2, x[i + 13], 21, 1309151649);
        a2 = ii(a2, b2, c2, d, x[i + 4], 6, -145523070);
        d = ii(d, a2, b2, c2, x[i + 11], 10, -1120210379);
        c2 = ii(c2, d, a2, b2, x[i + 2], 15, 718787259);
        b2 = ii(b2, c2, d, a2, x[i + 9], 21, -343485551);
        a2 = addme(a2, olda);
        b2 = addme(b2, oldb);
        c2 = addme(c2, oldc);
        d = addme(d, oldd);
      }
      return rhex(a2) + rhex(b2) + rhex(c2) + rhex(d);
    }
    var hex_chr = "0123456789abcdef";
    function bitOR(a2, b2) {
      var lsb = a2 & 1 | b2 & 1;
      var msb31 = a2 >>> 1 | b2 >>> 1;
      return msb31 << 1 | lsb;
    }
    function bitXOR(a2, b2) {
      var lsb = a2 & 1 ^ b2 & 1;
      var msb31 = a2 >>> 1 ^ b2 >>> 1;
      return msb31 << 1 | lsb;
    }
    function bitAND(a2, b2) {
      var lsb = a2 & 1 & (b2 & 1);
      var msb31 = a2 >>> 1 & b2 >>> 1;
      return msb31 << 1 | lsb;
    }
    function addme(x, y) {
      var lsw = (x & 65535) + (y & 65535);
      var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return msw << 16 | lsw & 65535;
    }
    function rhex(num) {
      var str = "";
      var j;
      for (j = 0; j <= 3; j++)
        str += hex_chr.charAt(num >> j * 8 + 4 & 15) + hex_chr.charAt(num >> j * 8 & 15);
      return str;
    }
    function str2blks_MD5(str) {
      var nblk = (str.length + 8 >> 6) + 1;
      var blks = new Array(nblk * 16);
      var i;
      for (i = 0; i < nblk * 16; i++)
        blks[i] = 0;
      for (i = 0; i < str.length; i++)
        blks[i >> 2] |= str.charCodeAt(i) << (str.length * 8 + i) % 4 * 8;
      blks[i >> 2] |= 128 << (str.length * 8 + i) % 4 * 8;
      var l = str.length * 8;
      blks[nblk * 16 - 2] = l & 255;
      blks[nblk * 16 - 2] |= (l >>> 8 & 255) << 8;
      blks[nblk * 16 - 2] |= (l >>> 16 & 255) << 16;
      blks[nblk * 16 - 2] |= (l >>> 24 & 255) << 24;
      return blks;
    }
    function rol(num, cnt) {
      return num << cnt | num >>> 32 - cnt;
    }
    function cmn(q, a2, b2, x, s, t) {
      return addme(rol(addme(addme(a2, q), addme(x, t)), s), b2);
    }
    function ff(a2, b2, c2, d, x, s, t) {
      return cmn(bitOR(bitAND(b2, c2), bitAND(~b2, d)), a2, b2, x, s, t);
    }
    function gg(a2, b2, c2, d, x, s, t) {
      return cmn(bitOR(bitAND(b2, d), bitAND(c2, ~d)), a2, b2, x, s, t);
    }
    function hh(a2, b2, c2, d, x, s, t) {
      return cmn(bitXOR(bitXOR(b2, c2), d), a2, b2, x, s, t);
    }
    function ii(a2, b2, c2, d, x, s, t) {
      return cmn(bitXOR(c2, bitOR(b2, ~d)), a2, b2, x, s, t);
    }
  }
});

// node_modules/@rexxars/react-json-inspector/lib/uid.js
var require_uid = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/uid.js"(exports, module) {
    var id2 = Math.ceil(Math.random() * 10);
    module.exports = function() {
      return ++id2;
    };
  }
});

// node_modules/@rexxars/react-json-inspector/lib/type.js
var require_type = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/type.js"(exports, module) {
    module.exports = function(value) {
      return Object.prototype.toString.call(value).slice(8, -1);
    };
  }
});

// node_modules/@rexxars/react-json-inspector/lib/is-primitive.js
var require_is_primitive = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/is-primitive.js"(exports, module) {
    var type = require_type();
    function isPrimitive(value) {
      var t = type(value);
      return t !== "Object" && t !== "Array";
    }
    module.exports = isPrimitive;
  }
});

// node_modules/@rexxars/react-json-inspector/lib/highlighter.js
var require_highlighter = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/highlighter.js"(exports, module) {
    var React4 = require_react();
    var createReactClass = require_create_react_class();
    var h = React4.createElement;
    module.exports = createReactClass({
      getDefaultProps: function() {
        return {
          string: "",
          highlight: ""
        };
      },
      shouldComponentUpdate: function(p) {
        return p.highlight !== this.props.highlight;
      },
      render: function() {
        var p = this.props, highlightStart = p.string.search(p.highlight);
        if (!p.highlight || highlightStart === -1) {
          return h("span", null, p.string);
        }
        var highlightLength = p.highlight.source.length, highlightString = p.string.substr(highlightStart, highlightLength);
        return h(
          "span",
          null,
          p.string.split(p.highlight).map(function(part, index2) {
            return h(
              "span",
              { key: index2 },
              index2 > 0 ? h("span", { className: "json-inspector__hl" }, highlightString) : null,
              part
            );
          })
        );
      }
    });
  }
});

// node_modules/@rexxars/react-json-inspector/lib/leaf.js
var require_leaf = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/leaf.js"(exports, module) {
    var React4 = require_react();
    var createReactClass = require_create_react_class();
    var md5omatic = require_md5omatic();
    var uid = require_uid();
    var type = require_type();
    var isPrimitive = require_is_primitive();
    var Highlighter = require_highlighter();
    var h = React4.createElement;
    var PATH_PREFIX = ".root.";
    var Leaf = createReactClass({
      getInitialState: function() {
        return {
          expanded: this._isInitiallyExpanded(this.props)
        };
      },
      getDefaultProps: function() {
        return {
          root: false,
          prefix: ""
        };
      },
      render: function() {
        var id2 = "id_" + uid();
        var p = this.props;
        var d = {
          path: this.keypath(),
          key: p.label.toString(),
          value: p.data
        };
        var onLabelClick = this._onClick.bind(this, d);
        return h(
          "div",
          { className: this.getClassName(), id: "leaf-" + this._rootPath() },
          h("input", { className: "json-inspector__radio", type: "radio", name: p.id, id: id2, tabIndex: -1 }),
          h(
            "label",
            { className: "json-inspector__line", htmlFor: id2, onClick: onLabelClick },
            h(
              "div",
              { className: "json-inspector__flatpath" },
              d.path
            ),
            h(
              "span",
              { className: "json-inspector__key" },
              this.format(d.key),
              ":",
              this.renderInteractiveLabel(d.key, true)
            ),
            this.renderTitle(),
            this.renderShowOriginalButton()
          ),
          this.renderChildren()
        );
      },
      renderTitle: function() {
        var data = this.data();
        var t = type(data);
        switch (t) {
          case "Array":
            var length = data.length;
            return h(
              "span",
              { className: "json-inspector__value json-inspector__value_helper" },
              (length > 0 ? "[\u2026] " : "[] ") + items(length)
            );
          case "Object":
            var keys = Object.keys(data).length;
            return h(
              "span",
              { className: "json-inspector__value json-inspector__value_helper" },
              (keys > 0 ? "{\u2026} " : "{} ") + properties(keys)
            );
          default:
            return h(
              "span",
              { className: "json-inspector__value json-inspector__value_" + t.toLowerCase() },
              this.format(String(data)),
              this.renderInteractiveLabel(data, false)
            );
        }
      },
      renderChildren: function() {
        var p = this.props;
        var childPrefix = this._rootPath();
        var data = this.data();
        if (this.state.expanded && !isPrimitive(data)) {
          return Object.keys(data).map(function(key) {
            var value = data[key];
            var shouldGetOriginal = !this.state.original || (p.verboseShowOriginal ? p.query : false);
            return h(Leaf, {
              data: value,
              label: key,
              prefix: childPrefix,
              onClick: p.onClick,
              id: p.id,
              query: p.query,
              getOriginal: shouldGetOriginal ? p.getOriginal : null,
              key: getLeafKey(key, value),
              isExpanded: p.isExpanded,
              interactiveLabel: p.interactiveLabel,
              verboseShowOriginal: p.verboseShowOriginal
            });
          }, this);
        }
        return null;
      },
      renderShowOriginalButton: function() {
        var p = this.props;
        if (isPrimitive(p.data) || this.state.original || !p.getOriginal || !p.query || contains(this.keypath(), p.query)) {
          return null;
        }
        return h("span", {
          className: "json-inspector__show-original",
          onClick: this._onShowOriginalClick
        });
      },
      renderInteractiveLabel: function(originalValue, isKey) {
        if (typeof this.props.interactiveLabel === "function") {
          return h(this.props.interactiveLabel, {
            value: String(originalValue),
            originalValue,
            isKey,
            keypath: this.keypath()
          });
        }
        return null;
      },
      componentWillReceiveProps: function(p) {
        if (p.query) {
          this.setState({
            expanded: !contains(p.label, p.query)
          });
        }
        if (this.props.query && !p.query) {
          this.setState({
            expanded: this._isInitiallyExpanded(p)
          });
        }
      },
      _rootPath: function() {
        return this.props.prefix + "." + this.props.label;
      },
      keypath: function() {
        return this._rootPath().substr(PATH_PREFIX.length);
      },
      data: function() {
        return this.state.original || this.props.data;
      },
      format: function(string) {
        return h(Highlighter, {
          string,
          highlight: this.props.query
        });
      },
      getClassName: function() {
        var cn = "json-inspector__leaf";
        if (this.props.root) {
          cn += " json-inspector__leaf_root";
        }
        if (this.state.expanded) {
          cn += " json-inspector__leaf_expanded";
        }
        if (!isPrimitive(this.props.data)) {
          cn += " json-inspector__leaf_composite";
        }
        return cn;
      },
      toggle: function() {
        this.setState({
          expanded: !this.state.expanded
        });
      },
      _onClick: function(data, e) {
        this.toggle();
        this.props.onClick(data);
        e.stopPropagation();
      },
      _onShowOriginalClick: function(e) {
        this.setState({
          original: this.props.getOriginal(this.keypath())
        });
        e.stopPropagation();
      },
      _isInitiallyExpanded: function(p) {
        var keypath = this.keypath();
        if (p.root) {
          return true;
        }
        if (!p.query) {
          return p.isExpanded(keypath, p.data);
        } else {
          return !contains(keypath, p.query) && typeof p.getOriginal === "function";
        }
      }
    });
    function items(count) {
      return count + (count === 1 ? " item" : " items");
    }
    function properties(count) {
      return count + (count === 1 ? " property" : " properties");
    }
    function getLeafKey(key, value) {
      if (isPrimitive(value)) {
        var hash = md5omatic(String(value));
        return key + ":" + hash;
      } else {
        return key + "[" + type(value) + "]";
      }
    }
    function contains(string, substring) {
      return string.indexOf(substring) !== -1;
    }
    module.exports = Leaf;
  }
});

// node_modules/@rexxars/react-json-inspector/lib/noop.js
var require_noop = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/noop.js"(exports, module) {
    module.exports = function() {
    };
  }
});

// node_modules/@rexxars/react-json-inspector/lib/search-bar.js
var require_search_bar = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/search-bar.js"(exports, module) {
    var React4 = require_react();
    var createReactClass = require_create_react_class();
    var h = React4.createElement;
    var noop = require_noop();
    module.exports = createReactClass({
      getDefaultProps: function() {
        return {
          onChange: noop
        };
      },
      render: function() {
        return h("input", {
          className: "json-inspector__search",
          type: "search",
          placeholder: "Search",
          onChange: this.onChange
        });
      },
      onChange: function(e) {
        this.props.onChange(e.target.value);
      }
    });
  }
});

// node_modules/@rexxars/react-json-inspector/lib/is-empty.js
var require_is_empty = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/is-empty.js"(exports, module) {
    module.exports = function(object) {
      return Object.keys(object).length === 0;
    };
  }
});

// node_modules/@rexxars/react-json-inspector/lib/filterer.js
var require_filterer = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/filterer.js"(exports, module) {
    var keys = Object.keys;
    var isPrimitive = require_is_primitive();
    var isEmpty = require_is_empty();
    module.exports = function(data, options) {
      options || (options = { cacheResults: true });
      var cache = {};
      return function(query) {
        if (!options.cacheResults) {
          return find(data, query, options);
        }
        var subquery;
        if (!cache[query]) {
          for (var i = query.length - 1; i > 0; i -= 1) {
            subquery = query.substr(0, i);
            if (cache[subquery]) {
              cache[query] = find(cache[subquery], query, options);
              break;
            }
          }
        }
        if (!cache[query]) {
          cache[query] = find(data, query, options);
        }
        return cache[query];
      };
    };
    function find(data, query, options) {
      return keys(data).reduce(function(acc, key) {
        var value = data[key];
        var matches;
        if (isPrimitive(value)) {
          if (contains(query, key, options) || contains(query, value, options)) {
            acc[key] = value;
          }
        } else {
          if (contains(query, key, options)) {
            acc[key] = value;
          } else {
            matches = find(value, query, options);
            if (!isEmpty(matches)) {
              Object.assign(acc, pair(key, matches));
            }
          }
        }
        return acc;
      }, {});
    }
    function contains(query, string, options) {
      if (string) {
        var haystack = String(string);
        var needle = query;
        if (options.ignoreCase) {
          haystack = haystack.toLowerCase();
          needle = needle.toLowerCase();
        }
        return haystack.indexOf(needle) !== -1;
      }
    }
    function pair(key, value) {
      var p = {};
      p[key] = value;
      return p;
    }
  }
});

// node_modules/@rexxars/react-json-inspector/lib/lens.js
var require_lens = __commonJS({
  "node_modules/@rexxars/react-json-inspector/lib/lens.js"(exports, module) {
    var type = require_type();
    var PATH_DELIMITER = ".";
    function lens(data, path) {
      var p = path.split(PATH_DELIMITER);
      var segment = p.shift();
      if (!segment) {
        return data;
      }
      var t = type(data);
      if (t === "Array" && data[integer(segment)]) {
        return lens(data[integer(segment)], p.join(PATH_DELIMITER));
      } else if (t === "Object" && data[segment]) {
        return lens(data[segment], p.join(PATH_DELIMITER));
      }
    }
    function integer(string) {
      return parseInt(string, 10);
    }
    module.exports = lens;
  }
});

// node_modules/@rexxars/react-json-inspector/json-inspector.js
var require_json_inspector = __commonJS({
  "node_modules/@rexxars/react-json-inspector/json-inspector.js"(exports, module) {
    var React4 = require_react();
    var createReactClass = require_create_react_class();
    var debounce = require_debounce();
    var h = React4.createElement;
    var Leaf = require_leaf();
    var SearchBar = require_search_bar();
    var filterer = require_filterer();
    var isEmpty = require_is_empty();
    var lens = require_lens();
    var noop = require_noop();
    module.exports = createReactClass({
      getDefaultProps: function() {
        return {
          data: null,
          search: SearchBar,
          searchOptions: {
            debounceTime: 0
          },
          className: "",
          id: "json-" + Date.now(),
          onClick: noop,
          filterOptions: {
            cacheResults: true,
            ignoreCase: false
          },
          validateQuery: function(query) {
            return query.length >= 2;
          },
          isExpanded: function(keypath, value) {
            return false;
          },
          verboseShowOriginal: false
        };
      },
      getInitialState: function() {
        return {
          query: this.props.query || ""
        };
      },
      render: function() {
        var p = this.props;
        var s = this.state;
        var isQueryValid = s.query !== "" && p.validateQuery(s.query);
        var data = isQueryValid ? s.filterer(s.query) : p.data;
        var isNotFound = isQueryValid && isEmpty(data);
        return h(
          "div",
          { className: "json-inspector " + p.className },
          this.renderToolbar(),
          isNotFound ? h("div", { className: "json-inspector__not-found" }, "Nothing found") : h(Leaf, {
            data,
            onClick: p.onClick,
            id: p.id,
            getOriginal: this.getOriginal,
            query: isQueryValid ? new RegExp(
              s.query,
              p.filterOptions.ignoreCase ? "i" : ""
            ) : null,
            label: "root",
            root: true,
            isExpanded: p.isExpanded,
            interactiveLabel: p.interactiveLabel,
            verboseShowOriginal: p.verboseShowOriginal
          })
        );
      },
      renderToolbar: function() {
        var search = this.props.search;
        if (search) {
          return h(
            "div",
            { className: "json-inspector__toolbar" },
            h(search, {
              onChange: debounce(this.search, this.props.searchOptions.debounceTime),
              data: this.props.data,
              query: this.state.query
            })
          );
        }
      },
      search: function(query) {
        this.setState({
          query
        });
      },
      componentWillMount: function() {
        this.createFilterer(this.props.data, this.props.filterOptions);
      },
      componentWillReceiveProps: function(p) {
        this.createFilterer(p.data, p.filterOptions);
        var isReceivingNewQuery = typeof p.query === "string" && p.query !== this.state.query;
        if (isReceivingNewQuery) {
          this.setState({
            query: p.query
          });
        }
      },
      shouldComponentUpdate: function(p, s) {
        return p.query !== this.props.query || s.query !== this.state.query || p.data !== this.props.data || p.onClick !== this.props.onClick;
      },
      createFilterer: function(data, options) {
        this.setState({
          filterer: filterer(data, options)
        });
      },
      getOriginal: function(path) {
        return lens(this.props.data, path);
      }
    });
  }
});

// node_modules/hashlru/index.js
var require_hashlru = __commonJS({
  "node_modules/hashlru/index.js"(exports, module) {
    module.exports = function(max) {
      if (!max)
        throw Error("hashlru must have a max value, of type number, greater than 0");
      var size = 0, cache = /* @__PURE__ */ Object.create(null), _cache = /* @__PURE__ */ Object.create(null);
      function update(key, value) {
        cache[key] = value;
        size++;
        if (size >= max) {
          size = 0;
          _cache = cache;
          cache = /* @__PURE__ */ Object.create(null);
        }
      }
      return {
        has: function(key) {
          return cache[key] !== void 0 || _cache[key] !== void 0;
        },
        remove: function(key) {
          if (cache[key] !== void 0)
            cache[key] = void 0;
          if (_cache[key] !== void 0)
            _cache[key] = void 0;
        },
        get: function(key) {
          var v = cache[key];
          if (v !== void 0)
            return v;
          if ((v = _cache[key]) !== void 0) {
            update(key, v);
            return v;
          }
        },
        set: function(key, value) {
          if (cache[key] !== void 0)
            cache[key] = value;
          else
            update(key, value);
        },
        clear: function() {
          cache = /* @__PURE__ */ Object.create(null);
          _cache = /* @__PURE__ */ Object.create(null);
        }
      };
    };
  }
});

// node_modules/sanity/lib/_chunks/index-def00177.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react30 = __toESM(require_react());
var import_omit = __toESM(require_omit());
var import_isEqual = __toESM(require_isEqual());
var import_camelCase = __toESM(require_camelCase());
var import_uniq = __toESM(require_uniq());
var import_kebabCase = __toESM(require_kebabCase());
var import_pickBy = __toESM(require_pickBy());
var import_find2 = __toESM(require_find());
var import_uniqueId = __toESM(require_uniqueId());
var import_react_is = __toESM(require_react_is());
var import_startCase = __toESM(require_startCase());
var import_is_hotkey = __toESM(require_lib());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());
var import_upperFirst = __toESM(require_upperFirst());
var import_react_json_inspector = __toESM(require_json_inspector());
var import_hashlru = __toESM(require_hashlru());
var import_negate = __toESM(require_negate());

// node_modules/framer-motion/dist/es/motion/index.mjs
var React2 = __toESM(require_react(), 1);
var import_react16 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/motion/features/use-features.mjs
var React = __toESM(require_react(), 1);
var import_react2 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/process.mjs
var defaultEnvironment = "production";
var env = typeof process === "undefined" || process.env === void 0 ? defaultEnvironment : "development";

// node_modules/framer-motion/dist/es/motion/features/definitions.mjs
var createDefinition = function(propNames) {
  return {
    isEnabled: function(props) {
      return propNames.some(function(name) {
        return !!props[name];
      });
    }
  };
};
var featureDefinitions = {
  measureLayout: createDefinition(["layout", "layoutId", "drag"]),
  animation: createDefinition([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: createDefinition(["exit"]),
  drag: createDefinition(["drag", "dragControls"]),
  focus: createDefinition(["whileFocus"]),
  hover: createDefinition(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: createDefinition(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: createDefinition([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: createDefinition([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function loadFeatures(features) {
  for (var key in features) {
    if (features[key] === null)
      continue;
    if (key === "projectionNodeConstructor") {
      featureDefinitions.projectionNodeConstructor = features[key];
    } else {
      featureDefinitions[key].Component = features[key];
    }
  }
}

// node_modules/framer-motion/dist/es/context/LazyContext.mjs
var import_react = __toESM(require_react(), 1);
var LazyContext = (0, import_react.createContext)({ strict: false });

// node_modules/framer-motion/dist/es/motion/features/use-features.mjs
var featureNames = Object.keys(featureDefinitions);
var numFeatures = featureNames.length;
function useFeatures(props, visualElement2, preloadedFeatures) {
  var features = [];
  var lazyContext = (0, import_react2.useContext)(LazyContext);
  if (!visualElement2)
    return null;
  if (env !== "production" && preloadedFeatures && lazyContext.strict) {
    invariant(false, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  }
  for (var i = 0; i < numFeatures; i++) {
    var name_1 = featureNames[i];
    var _a = featureDefinitions[name_1], isEnabled = _a.isEnabled, Component = _a.Component;
    if (isEnabled(props) && Component) {
      features.push(React.createElement(Component, __assign({ key: name_1 }, props, { visualElement: visualElement2 })));
    }
  }
  return features;
}

// node_modules/framer-motion/dist/es/context/MotionConfigContext.mjs
var import_react3 = __toESM(require_react(), 1);
var MotionConfigContext = (0, import_react3.createContext)({
  transformPagePoint: function(p) {
    return p;
  },
  isStatic: false,
  reducedMotion: "never"
});

// node_modules/framer-motion/dist/es/context/MotionContext/index.mjs
var import_react4 = __toESM(require_react(), 1);
var MotionContext = (0, import_react4.createContext)({});
function useVisualElementContext() {
  return (0, import_react4.useContext)(MotionContext).visualElement;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
var import_react8 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/PresenceContext.mjs
var import_react5 = __toESM(require_react(), 1);
var PresenceContext = (0, import_react5.createContext)(null);

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var import_react6 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-browser.mjs
var isBrowser = typeof document !== "undefined";

// node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.mjs
var useIsomorphicLayoutEffect = isBrowser ? import_react6.useLayoutEffect : import_react6.useEffect;

// node_modules/framer-motion/dist/es/utils/use-reduced-motion.mjs
var import_react7 = __toESM(require_react(), 1);
var prefersReducedMotion = { current: null };
var hasDetected = false;
function initPrefersReducedMotion() {
  hasDetected = true;
  if (!isBrowser)
    return;
  if (window.matchMedia) {
    var motionMediaQuery_1 = window.matchMedia("(prefers-reduced-motion)");
    var setReducedMotionPreferences = function() {
      return prefersReducedMotion.current = motionMediaQuery_1.matches;
    };
    motionMediaQuery_1.addListener(setReducedMotionPreferences);
    setReducedMotionPreferences();
  } else {
    prefersReducedMotion.current = false;
  }
}
function useReducedMotion() {
  !hasDetected && initPrefersReducedMotion();
  var _a = __read((0, import_react7.useState)(prefersReducedMotion.current), 1), shouldReduceMotion = _a[0];
  return shouldReduceMotion;
}
function useReducedMotionConfig() {
  var reducedMotionPreference = useReducedMotion();
  var reducedMotion = (0, import_react7.useContext)(MotionConfigContext).reducedMotion;
  if (reducedMotion === "never") {
    return false;
  } else if (reducedMotion === "always") {
    return true;
  } else {
    return reducedMotionPreference;
  }
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-element.mjs
function useVisualElement(Component, visualState, props, createVisualElement) {
  var lazyContext = (0, import_react8.useContext)(LazyContext);
  var parent2 = useVisualElementContext();
  var presenceContext = (0, import_react8.useContext)(PresenceContext);
  var shouldReduceMotion = useReducedMotionConfig();
  var visualElementRef = (0, import_react8.useRef)(void 0);
  if (!createVisualElement)
    createVisualElement = lazyContext.renderer;
  if (!visualElementRef.current && createVisualElement) {
    visualElementRef.current = createVisualElement(Component, {
      visualState,
      parent: parent2,
      props,
      presenceId: presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.id,
      blockInitialAnimation: (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false,
      shouldReduceMotion
    });
  }
  var visualElement2 = visualElementRef.current;
  useIsomorphicLayoutEffect(function() {
    visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
  });
  (0, import_react8.useEffect)(function() {
    var _a;
    (_a = visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.animateChanges();
  });
  useIsomorphicLayoutEffect(function() {
    return function() {
      return visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.notifyUnmount();
    };
  }, []);
  return visualElement2;
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
var import_react9 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/is-ref-object.mjs
function isRefObject(ref) {
  return typeof ref === "object" && Object.prototype.hasOwnProperty.call(ref, "current");
}

// node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.mjs
function useMotionRef(visualState, visualElement2, externalRef) {
  return (0, import_react9.useCallback)(
    function(instance) {
      var _a;
      instance && ((_a = visualState.mount) === null || _a === void 0 ? void 0 : _a.call(visualState, instance));
      if (visualElement2) {
        instance ? visualElement2.mount(instance) : visualElement2.unmount();
      }
      if (externalRef) {
        if (typeof externalRef === "function") {
          externalRef(instance);
        } else if (isRefObject(externalRef)) {
          externalRef.current = instance;
        }
      }
    },
    [visualElement2]
  );
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
var import_react10 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/utils/variants.mjs
function isVariantLabels(v) {
  return Array.isArray(v);
}
function isVariantLabel(v) {
  return typeof v === "string" || isVariantLabels(v);
}
function getCurrent(visualElement2) {
  var current = {};
  visualElement2.forEachValue(function(value, key) {
    return current[key] = value.get();
  });
  return current;
}
function getVelocity(visualElement2) {
  var velocity = {};
  visualElement2.forEachValue(function(value, key) {
    return velocity[key] = value.getVelocity();
  });
  return velocity;
}
function resolveVariantFromProps(props, definition, custom, currentValues, currentVelocity) {
  var _a;
  if (currentValues === void 0) {
    currentValues = {};
  }
  if (currentVelocity === void 0) {
    currentVelocity = {};
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  if (typeof definition === "string") {
    definition = (_a = props.variants) === null || _a === void 0 ? void 0 : _a[definition];
  }
  if (typeof definition === "function") {
    definition = definition(custom !== null && custom !== void 0 ? custom : props.custom, currentValues, currentVelocity);
  }
  return definition;
}
function resolveVariant(visualElement2, definition, custom) {
  var props = visualElement2.getProps();
  return resolveVariantFromProps(props, definition, custom !== null && custom !== void 0 ? custom : props.custom, getCurrent(visualElement2), getVelocity(visualElement2));
}
function checkIfControllingVariants(props) {
  var _a;
  return typeof ((_a = props.animate) === null || _a === void 0 ? void 0 : _a.start) === "function" || isVariantLabel(props.initial) || isVariantLabel(props.animate) || isVariantLabel(props.whileHover) || isVariantLabel(props.whileDrag) || isVariantLabel(props.whileTap) || isVariantLabel(props.whileFocus) || isVariantLabel(props.exit);
}
function checkIfVariantNode(props) {
  return Boolean(checkIfControllingVariants(props) || props.variants);
}

// node_modules/framer-motion/dist/es/context/MotionContext/utils.mjs
function getCurrentTreeVariants(props, context) {
  if (checkIfControllingVariants(props)) {
    var initial = props.initial, animate3 = props.animate;
    return {
      initial: initial === false || isVariantLabel(initial) ? initial : void 0,
      animate: isVariantLabel(animate3) ? animate3 : void 0
    };
  }
  return props.inherit !== false ? context : {};
}

// node_modules/framer-motion/dist/es/context/MotionContext/create.mjs
function useCreateMotionContext(props) {
  var _a = getCurrentTreeVariants(props, (0, import_react10.useContext)(MotionContext)), initial = _a.initial, animate3 = _a.animate;
  return (0, import_react10.useMemo)(function() {
    return { initial, animate: animate3 };
  }, [variantLabelsAsDependency(initial), variantLabelsAsDependency(animate3)]);
}
function variantLabelsAsDependency(prop) {
  return Array.isArray(prop) ? prop.join(" ") : prop;
}

// node_modules/framer-motion/dist/es/utils/use-constant.mjs
var import_react11 = __toESM(require_react(), 1);
function useConstant(init) {
  var ref = (0, import_react11.useRef)(null);
  if (ref.current === null) {
    ref.current = init();
  }
  return ref.current;
}

// node_modules/framer-motion/dist/es/projection/node/state.mjs
var globalProjectionState = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};

// node_modules/framer-motion/dist/es/projection/node/id.mjs
var id = 1;
function useProjectionId() {
  return useConstant(function() {
    if (globalProjectionState.hasEverUpdated) {
      return id++;
    }
  });
}

// node_modules/framer-motion/dist/es/context/LayoutGroupContext.mjs
var import_react12 = __toESM(require_react(), 1);
var LayoutGroupContext = (0, import_react12.createContext)({});

// node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
var import_react14 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/context/SwitchLayoutGroupContext.mjs
var import_react13 = __toESM(require_react(), 1);
var SwitchLayoutGroupContext = (0, import_react13.createContext)({});

// node_modules/framer-motion/dist/es/motion/features/use-projection.mjs
function useProjection(projectionId, _a, visualElement2, ProjectionNodeConstructor) {
  var _b;
  var layoutId = _a.layoutId, layout = _a.layout, drag2 = _a.drag, dragConstraints = _a.dragConstraints, layoutScroll = _a.layoutScroll;
  var initialPromotionConfig = (0, import_react14.useContext)(SwitchLayoutGroupContext);
  if (!ProjectionNodeConstructor || !visualElement2 || (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.projection)) {
    return;
  }
  visualElement2.projection = new ProjectionNodeConstructor(projectionId, visualElement2.getLatestValues(), (_b = visualElement2.parent) === null || _b === void 0 ? void 0 : _b.projection);
  visualElement2.projection.setOptions({
    layoutId,
    layout,
    alwaysMeasureLayout: Boolean(drag2) || dragConstraints && isRefObject(dragConstraints),
    visualElement: visualElement2,
    scheduleRender: function() {
      return visualElement2.scheduleRender();
    },
    animationType: typeof layout === "string" ? layout : "both",
    initialPromotionConfig,
    layoutScroll
  });
}

// node_modules/framer-motion/dist/es/motion/utils/VisualElementHandler.mjs
var import_react15 = __toESM(require_react(), 1);
var VisualElementHandler = function(_super) {
  __extends(VisualElementHandler2, _super);
  function VisualElementHandler2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  VisualElementHandler2.prototype.getSnapshotBeforeUpdate = function() {
    this.updateProps();
    return null;
  };
  VisualElementHandler2.prototype.componentDidUpdate = function() {
  };
  VisualElementHandler2.prototype.updateProps = function() {
    var _a = this.props, visualElement2 = _a.visualElement, props = _a.props;
    if (visualElement2)
      visualElement2.setProps(props);
  };
  VisualElementHandler2.prototype.render = function() {
    return this.props.children;
  };
  return VisualElementHandler2;
}(import_react15.default.Component);

// node_modules/framer-motion/dist/es/motion/index.mjs
function createMotionComponent(_a) {
  var preloadedFeatures = _a.preloadedFeatures, createVisualElement = _a.createVisualElement, projectionNodeConstructor = _a.projectionNodeConstructor, useRender = _a.useRender, useVisualState = _a.useVisualState, Component = _a.Component;
  preloadedFeatures && loadFeatures(preloadedFeatures);
  function MotionComponent(props, externalRef) {
    var layoutId = useLayoutId(props);
    props = __assign(__assign({}, props), { layoutId });
    var config = (0, import_react16.useContext)(MotionConfigContext);
    var features = null;
    var context = useCreateMotionContext(props);
    var projectionId = config.isStatic ? void 0 : useProjectionId();
    var visualState = useVisualState(props, config.isStatic);
    if (!config.isStatic && isBrowser) {
      context.visualElement = useVisualElement(Component, visualState, __assign(__assign({}, config), props), createVisualElement);
      useProjection(projectionId, props, context.visualElement, projectionNodeConstructor || featureDefinitions.projectionNodeConstructor);
      features = useFeatures(props, context.visualElement, preloadedFeatures);
    }
    return React2.createElement(
      VisualElementHandler,
      { visualElement: context.visualElement, props: __assign(__assign({}, config), props) },
      features,
      React2.createElement(MotionContext.Provider, { value: context }, useRender(Component, props, projectionId, useMotionRef(visualState, context.visualElement, externalRef), visualState, config.isStatic, context.visualElement))
    );
  }
  return (0, import_react16.forwardRef)(MotionComponent);
}
function useLayoutId(_a) {
  var _b;
  var layoutId = _a.layoutId;
  var layoutGroupId = (_b = (0, import_react16.useContext)(LayoutGroupContext)) === null || _b === void 0 ? void 0 : _b.id;
  return layoutGroupId && layoutId !== void 0 ? layoutGroupId + "-" + layoutId : layoutId;
}

// node_modules/framer-motion/dist/es/render/dom/motion-proxy.mjs
function createMotionProxy(createConfig) {
  function custom(Component, customMotionComponentConfig) {
    if (customMotionComponentConfig === void 0) {
      customMotionComponentConfig = {};
    }
    return createMotionComponent(createConfig(Component, customMotionComponentConfig));
  }
  if (typeof Proxy === "undefined") {
    return custom;
  }
  var componentCache = /* @__PURE__ */ new Map();
  return new Proxy(custom, {
    get: function(_target, key) {
      if (!componentCache.has(key)) {
        componentCache.set(key, custom(key));
      }
      return componentCache.get(key);
    }
  });
}

// node_modules/framer-motion/dist/es/render/svg/lowercase-elements.mjs
var lowercaseSVGElements = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];

// node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.mjs
function isSVGComponent(Component) {
  if (typeof Component !== "string" || Component.includes("-")) {
    return false;
  } else if (lowercaseSVGElements.indexOf(Component) > -1 || /[A-Z]/.test(Component)) {
    return true;
  }
  return false;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
var import_react19 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
var import_react17 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/styles/scale-correction.mjs
var scaleCorrectors = {};
function addScaleCorrector(correctors) {
  Object.assign(scaleCorrectors, correctors);
}

// node_modules/framer-motion/dist/es/render/html/utils/transform.mjs
var transformAxes = ["", "X", "Y", "Z"];
var order = ["translate", "scale", "rotate", "skew"];
var transformProps = ["transformPerspective", "x", "y", "z"];
order.forEach(function(operationKey) {
  return transformAxes.forEach(function(axesKey) {
    return transformProps.push(operationKey + axesKey);
  });
});
function sortTransformProps(a2, b2) {
  return transformProps.indexOf(a2) - transformProps.indexOf(b2);
}
var transformPropSet = new Set(transformProps);
function isTransformProp(key) {
  return transformPropSet.has(key);
}
var transformOriginProps = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function isTransformOriginProp(key) {
  return transformOriginProps.has(key);
}

// node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.mjs
function isForcedMotionValue(key, _a) {
  var layout = _a.layout, layoutId = _a.layoutId;
  return isTransformProp(key) || isTransformOriginProp(key) || (layout || layoutId !== void 0) && (!!scaleCorrectors[key] || key === "opacity");
}

// node_modules/framer-motion/dist/es/value/utils/is-motion-value.mjs
var isMotionValue = function(value) {
  return Boolean(value !== null && typeof value === "object" && value.getVelocity);
};

// node_modules/framer-motion/dist/es/render/html/utils/build-transform.mjs
var translateAlias = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function buildTransform(_a, _b, transformIsDefault, transformTemplate) {
  var transform = _a.transform, transformKeys2 = _a.transformKeys;
  var _c = _b.enableHardwareAcceleration, enableHardwareAcceleration = _c === void 0 ? true : _c, _d = _b.allowTransformNone, allowTransformNone = _d === void 0 ? true : _d;
  var transformString = "";
  transformKeys2.sort(sortTransformProps);
  var transformHasZ = false;
  var numTransformKeys = transformKeys2.length;
  for (var i = 0; i < numTransformKeys; i++) {
    var key = transformKeys2[i];
    transformString += "".concat(translateAlias[key] || key, "(").concat(transform[key], ") ");
    if (key === "z")
      transformHasZ = true;
  }
  if (!transformHasZ && enableHardwareAcceleration) {
    transformString += "translateZ(0)";
  } else {
    transformString = transformString.trim();
  }
  if (transformTemplate) {
    transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
  } else if (allowTransformNone && transformIsDefault) {
    transformString = "none";
  }
  return transformString;
}
function buildTransformOrigin(_a) {
  var _b = _a.originX, originX = _b === void 0 ? "50%" : _b, _c = _a.originY, originY = _c === void 0 ? "50%" : _c, _d = _a.originZ, originZ = _d === void 0 ? 0 : _d;
  return "".concat(originX, " ").concat(originY, " ").concat(originZ);
}

// node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.mjs
function isCSSVariable(key) {
  return key.startsWith("--");
}

// node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.mjs
var getValueAsType = function(value, type) {
  return type && typeof value === "number" ? type.transform(value) : value;
};

// node_modules/style-value-types/dist/es/utils.mjs
var clamp = (min, max) => (v) => Math.max(Math.min(v, max), min);
var sanitize = (v) => v % 1 ? Number(v.toFixed(5)) : v;
var floatRegex = /(-)?([\d]*\.?[\d])+/g;
var colorRegex = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi;
var singleColorRegex = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function isString2(v) {
  return typeof v === "string";
}

// node_modules/style-value-types/dist/es/numbers/index.mjs
var number = {
  test: (v) => typeof v === "number",
  parse: parseFloat,
  transform: (v) => v
};
var alpha = Object.assign(Object.assign({}, number), { transform: clamp(0, 1) });
var scale = Object.assign(Object.assign({}, number), { default: 1 });

// node_modules/style-value-types/dist/es/numbers/units.mjs
var createUnitType = (unit) => ({
  test: (v) => isString2(v) && v.endsWith(unit) && v.split(" ").length === 1,
  parse: parseFloat,
  transform: (v) => `${v}${unit}`
});
var degrees = createUnitType("deg");
var percent = createUnitType("%");
var px = createUnitType("px");
var vh = createUnitType("vh");
var vw = createUnitType("vw");
var progressPercentage = Object.assign(Object.assign({}, percent), { parse: (v) => percent.parse(v) / 100, transform: (v) => percent.transform(v * 100) });

// node_modules/style-value-types/dist/es/color/utils.mjs
var isColorString = (type, testProp) => (v) => {
  return Boolean(isString2(v) && singleColorRegex.test(v) && v.startsWith(type) || testProp && Object.prototype.hasOwnProperty.call(v, testProp));
};
var splitColor = (aName, bName, cName) => (v) => {
  if (!isString2(v))
    return v;
  const [a2, b2, c2, alpha2] = v.match(floatRegex);
  return {
    [aName]: parseFloat(a2),
    [bName]: parseFloat(b2),
    [cName]: parseFloat(c2),
    alpha: alpha2 !== void 0 ? parseFloat(alpha2) : 1
  };
};

// node_modules/style-value-types/dist/es/color/hsla.mjs
var hsla = {
  test: isColorString("hsl", "hue"),
  parse: splitColor("hue", "saturation", "lightness"),
  transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 }) => {
    return "hsla(" + Math.round(hue) + ", " + percent.transform(sanitize(saturation)) + ", " + percent.transform(sanitize(lightness)) + ", " + sanitize(alpha.transform(alpha$1)) + ")";
  }
};

// node_modules/style-value-types/dist/es/color/rgba.mjs
var clampRgbUnit = clamp(0, 255);
var rgbUnit = Object.assign(Object.assign({}, number), { transform: (v) => Math.round(clampRgbUnit(v)) });
var rgba = {
  test: isColorString("rgb", "red"),
  parse: splitColor("red", "green", "blue"),
  transform: ({ red, green, blue, alpha: alpha$1 = 1 }) => "rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + sanitize(alpha.transform(alpha$1)) + ")"
};

// node_modules/style-value-types/dist/es/color/hex.mjs
function parseHex(v) {
  let r = "";
  let g = "";
  let b2 = "";
  let a2 = "";
  if (v.length > 5) {
    r = v.substr(1, 2);
    g = v.substr(3, 2);
    b2 = v.substr(5, 2);
    a2 = v.substr(7, 2);
  } else {
    r = v.substr(1, 1);
    g = v.substr(2, 1);
    b2 = v.substr(3, 1);
    a2 = v.substr(4, 1);
    r += r;
    g += g;
    b2 += b2;
    a2 += a2;
  }
  return {
    red: parseInt(r, 16),
    green: parseInt(g, 16),
    blue: parseInt(b2, 16),
    alpha: a2 ? parseInt(a2, 16) / 255 : 1
  };
}
var hex = {
  test: isColorString("#"),
  parse: parseHex,
  transform: rgba.transform
};

// node_modules/style-value-types/dist/es/color/index.mjs
var color = {
  test: (v) => rgba.test(v) || hex.test(v) || hsla.test(v),
  parse: (v) => {
    if (rgba.test(v)) {
      return rgba.parse(v);
    } else if (hsla.test(v)) {
      return hsla.parse(v);
    } else {
      return hex.parse(v);
    }
  },
  transform: (v) => {
    return isString2(v) ? v : v.hasOwnProperty("red") ? rgba.transform(v) : hsla.transform(v);
  }
};

// node_modules/style-value-types/dist/es/complex/index.mjs
var colorToken = "${c}";
var numberToken = "${n}";
function test(v) {
  var _a, _b, _c, _d;
  return isNaN(v) && isString2(v) && ((_b = (_a = v.match(floatRegex)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) + ((_d = (_c = v.match(colorRegex)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : 0) > 0;
}
function analyse(v) {
  if (typeof v === "number")
    v = `${v}`;
  const values = [];
  let numColors = 0;
  const colors = v.match(colorRegex);
  if (colors) {
    numColors = colors.length;
    v = v.replace(colorRegex, colorToken);
    values.push(...colors.map(color.parse));
  }
  const numbers = v.match(floatRegex);
  if (numbers) {
    v = v.replace(floatRegex, numberToken);
    values.push(...numbers.map(number.parse));
  }
  return { values, numColors, tokenised: v };
}
function parse(v) {
  return analyse(v).values;
}
function createTransformer(v) {
  const { values, numColors, tokenised } = analyse(v);
  const numValues = values.length;
  return (v2) => {
    let output = tokenised;
    for (let i = 0; i < numValues; i++) {
      output = output.replace(i < numColors ? colorToken : numberToken, i < numColors ? color.transform(v2[i]) : sanitize(v2[i]));
    }
    return output;
  };
}
var convertNumbersToZero = (v) => typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
  const parsed = parse(v);
  const transformer = createTransformer(v);
  return transformer(parsed.map(convertNumbersToZero));
}
var complex = { test, parse, createTransformer, getAnimatableNone };

// node_modules/style-value-types/dist/es/complex/filter.mjs
var maxDefaults = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function applyDefaultFilter(v) {
  let [name, value] = v.slice(0, -1).split("(");
  if (name === "drop-shadow")
    return v;
  const [number2] = value.match(floatRegex) || [];
  if (!number2)
    return v;
  const unit = value.replace(number2, "");
  let defaultValue = maxDefaults.has(name) ? 1 : 0;
  if (number2 !== value)
    defaultValue *= 100;
  return name + "(" + defaultValue + unit + ")";
}
var functionRegex = /([a-z-]*)\(.*?\)/g;
var filter = Object.assign(Object.assign({}, complex), { getAnimatableNone: (v) => {
  const functions = v.match(functionRegex);
  return functions ? functions.map(applyDefaultFilter).join(" ") : v;
} });

// node_modules/framer-motion/dist/es/render/dom/value-types/type-int.mjs
var int = __assign(__assign({}, number), { transform: Math.round });

// node_modules/framer-motion/dist/es/render/dom/value-types/number.mjs
var numberValueTypes = {
  borderWidth: px,
  borderTopWidth: px,
  borderRightWidth: px,
  borderBottomWidth: px,
  borderLeftWidth: px,
  borderRadius: px,
  radius: px,
  borderTopLeftRadius: px,
  borderTopRightRadius: px,
  borderBottomRightRadius: px,
  borderBottomLeftRadius: px,
  width: px,
  maxWidth: px,
  height: px,
  maxHeight: px,
  size: px,
  top: px,
  right: px,
  bottom: px,
  left: px,
  padding: px,
  paddingTop: px,
  paddingRight: px,
  paddingBottom: px,
  paddingLeft: px,
  margin: px,
  marginTop: px,
  marginRight: px,
  marginBottom: px,
  marginLeft: px,
  rotate: degrees,
  rotateX: degrees,
  rotateY: degrees,
  rotateZ: degrees,
  scale,
  scaleX: scale,
  scaleY: scale,
  scaleZ: scale,
  skew: degrees,
  skewX: degrees,
  skewY: degrees,
  distance: px,
  translateX: px,
  translateY: px,
  translateZ: px,
  x: px,
  y: px,
  z: px,
  perspective: px,
  transformPerspective: px,
  opacity: alpha,
  originX: progressPercentage,
  originY: progressPercentage,
  originZ: px,
  zIndex: int,
  fillOpacity: alpha,
  strokeOpacity: alpha,
  numOctaves: int
};

// node_modules/framer-motion/dist/es/render/html/utils/build-styles.mjs
function buildHTMLStyles(state, latestValues, options, transformTemplate) {
  var _a;
  var style = state.style, vars = state.vars, transform = state.transform, transformKeys2 = state.transformKeys, transformOrigin = state.transformOrigin;
  transformKeys2.length = 0;
  var hasTransform2 = false;
  var hasTransformOrigin = false;
  var transformIsNone = true;
  for (var key in latestValues) {
    var value = latestValues[key];
    if (isCSSVariable(key)) {
      vars[key] = value;
      continue;
    }
    var valueType = numberValueTypes[key];
    var valueAsType = getValueAsType(value, valueType);
    if (isTransformProp(key)) {
      hasTransform2 = true;
      transform[key] = valueAsType;
      transformKeys2.push(key);
      if (!transformIsNone)
        continue;
      if (value !== ((_a = valueType.default) !== null && _a !== void 0 ? _a : 0))
        transformIsNone = false;
    } else if (isTransformOriginProp(key)) {
      transformOrigin[key] = valueAsType;
      hasTransformOrigin = true;
    } else {
      style[key] = valueAsType;
    }
  }
  if (hasTransform2) {
    style.transform = buildTransform(state, options, transformIsNone, transformTemplate);
  } else if (transformTemplate) {
    style.transform = transformTemplate({}, "");
  } else if (!latestValues.transform && style.transform) {
    style.transform = "none";
  }
  if (hasTransformOrigin) {
    style.transformOrigin = buildTransformOrigin(transformOrigin);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/create-render-state.mjs
var createHtmlRenderState = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};

// node_modules/framer-motion/dist/es/render/html/use-props.mjs
function copyRawValuesOnly(target, source, props) {
  for (var key in source) {
    if (!isMotionValue(source[key]) && !isForcedMotionValue(key, props)) {
      target[key] = source[key];
    }
  }
}
function useInitialMotionValues(_a, visualState, isStatic) {
  var transformTemplate = _a.transformTemplate;
  return (0, import_react17.useMemo)(function() {
    var state = createHtmlRenderState();
    buildHTMLStyles(state, visualState, { enableHardwareAcceleration: !isStatic }, transformTemplate);
    var vars = state.vars, style = state.style;
    return __assign(__assign({}, vars), style);
  }, [visualState]);
}
function useStyle(props, visualState, isStatic) {
  var styleProp = props.style || {};
  var style = {};
  copyRawValuesOnly(style, styleProp, props);
  Object.assign(style, useInitialMotionValues(props, visualState, isStatic));
  if (props.transformValues) {
    style = props.transformValues(style);
  }
  return style;
}
function useHTMLProps(props, visualState, isStatic) {
  var htmlProps = {};
  var style = useStyle(props, visualState, isStatic);
  if (Boolean(props.drag) && props.dragListener !== false) {
    htmlProps.draggable = false;
    style.userSelect = style.WebkitUserSelect = style.WebkitTouchCallout = "none";
    style.touchAction = props.drag === true ? "none" : "pan-".concat(props.drag === "x" ? "y" : "x");
  }
  htmlProps.style = style;
  return htmlProps;
}

// node_modules/framer-motion/dist/es/motion/utils/valid-prop.mjs
var validMotionProps = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function isValidMotionProp(key) {
  return validMotionProps.has(key);
}

// node_modules/framer-motion/dist/es/render/dom/utils/filter-props.mjs
var shouldForward = function(key) {
  return !isValidMotionProp(key);
};
function loadExternalIsValidProp(isValidProp) {
  if (!isValidProp)
    return;
  shouldForward = function(key) {
    return key.startsWith("on") ? !isValidMotionProp(key) : isValidProp(key);
  };
}
try {
  loadExternalIsValidProp((init_is_prop_valid_browser_esm(), __toCommonJS(is_prop_valid_browser_esm_exports)).default);
} catch (_a) {
}
function filterProps(props, isDom, forwardMotionProps) {
  var filteredProps = {};
  for (var key in props) {
    if (shouldForward(key) || forwardMotionProps === true && isValidMotionProp(key) || !isDom && !isValidMotionProp(key) || props["draggable"] && key.startsWith("onDrag")) {
      filteredProps[key] = props[key];
    }
  }
  return filteredProps;
}

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
var import_react18 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.mjs
function calcOrigin(origin, offset, size) {
  return typeof origin === "string" ? origin : px.transform(offset + size * origin);
}
function calcSVGTransformOrigin(dimensions, originX, originY) {
  var pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
  var pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
  return "".concat(pxOriginX, " ").concat(pxOriginY);
}

// node_modules/framer-motion/dist/es/render/svg/utils/path.mjs
var dashKeys = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
};
var camelKeys = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function buildSVGPath(attrs, length, spacing, offset, useDashCase) {
  if (spacing === void 0) {
    spacing = 1;
  }
  if (offset === void 0) {
    offset = 0;
  }
  if (useDashCase === void 0) {
    useDashCase = true;
  }
  attrs.pathLength = 1;
  var keys = useDashCase ? dashKeys : camelKeys;
  attrs[keys.offset] = px.transform(-offset);
  var pathLength = px.transform(length);
  var pathSpacing = px.transform(spacing);
  attrs[keys.array] = "".concat(pathLength, " ").concat(pathSpacing);
}

// node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.mjs
function buildSVGAttrs(state, _a, options, transformTemplate) {
  var attrX = _a.attrX, attrY = _a.attrY, originX = _a.originX, originY = _a.originY, pathLength = _a.pathLength, _b = _a.pathSpacing, pathSpacing = _b === void 0 ? 1 : _b, _c = _a.pathOffset, pathOffset = _c === void 0 ? 0 : _c, latest = __rest(_a, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  buildHTMLStyles(state, latest, options, transformTemplate);
  state.attrs = state.style;
  state.style = {};
  var attrs = state.attrs, style = state.style, dimensions = state.dimensions;
  if (attrs.transform) {
    if (dimensions)
      style.transform = attrs.transform;
    delete attrs.transform;
  }
  if (dimensions && (originX !== void 0 || originY !== void 0 || style.transform)) {
    style.transformOrigin = calcSVGTransformOrigin(dimensions, originX !== void 0 ? originX : 0.5, originY !== void 0 ? originY : 0.5);
  }
  if (attrX !== void 0)
    attrs.x = attrX;
  if (attrY !== void 0)
    attrs.y = attrY;
  if (pathLength !== void 0) {
    buildSVGPath(attrs, pathLength, pathSpacing, pathOffset, false);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.mjs
var createSvgRenderState = function() {
  return __assign(__assign({}, createHtmlRenderState()), { attrs: {} });
};

// node_modules/framer-motion/dist/es/render/svg/use-props.mjs
function useSVGProps(props, visualState) {
  var visualProps = (0, import_react18.useMemo)(function() {
    var state = createSvgRenderState();
    buildSVGAttrs(state, visualState, { enableHardwareAcceleration: false }, props.transformTemplate);
    return __assign(__assign({}, state.attrs), { style: __assign({}, state.style) });
  }, [visualState]);
  if (props.style) {
    var rawStyles = {};
    copyRawValuesOnly(rawStyles, props.style, props);
    visualProps.style = __assign(__assign({}, rawStyles), visualProps.style);
  }
  return visualProps;
}

// node_modules/framer-motion/dist/es/render/dom/use-render.mjs
function createUseRender(forwardMotionProps) {
  if (forwardMotionProps === void 0) {
    forwardMotionProps = false;
  }
  var useRender = function(Component, props, projectionId, ref, _a, isStatic) {
    var latestValues = _a.latestValues;
    var useVisualProps = isSVGComponent(Component) ? useSVGProps : useHTMLProps;
    var visualProps = useVisualProps(props, latestValues, isStatic);
    var filteredProps = filterProps(props, typeof Component === "string", forwardMotionProps);
    var elementProps = __assign(__assign(__assign({}, filteredProps), visualProps), { ref });
    if (projectionId) {
      elementProps["data-projection-id"] = projectionId;
    }
    return (0, import_react19.createElement)(Component, elementProps);
  };
  return useRender;
}

// node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.mjs
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = "$1-$2";
var camelToDash = function(str) {
  return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};

// node_modules/framer-motion/dist/es/render/html/utils/render.mjs
function renderHTML(element, _a, styleProp, projection) {
  var style = _a.style, vars = _a.vars;
  Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
  for (var key in vars) {
    element.style.setProperty(key, vars[key]);
  }
}

// node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.mjs
var camelCaseAttributes = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);

// node_modules/framer-motion/dist/es/render/svg/utils/render.mjs
function renderSVG(element, renderState, _styleProp, projection) {
  renderHTML(element, renderState, void 0, projection);
  for (var key in renderState.attrs) {
    element.setAttribute(!camelCaseAttributes.has(key) ? camelToDash(key) : key, renderState.attrs[key]);
  }
}

// node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps(props) {
  var style = props.style;
  var newValues = {};
  for (var key in style) {
    if (isMotionValue(style[key]) || isForcedMotionValue(key, props)) {
      newValues[key] = style[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.mjs
function scrapeMotionValuesFromProps2(props) {
  var newValues = scrapeMotionValuesFromProps(props);
  for (var key in props) {
    if (isMotionValue(props[key])) {
      var targetKey = key === "x" || key === "y" ? "attr" + key.toUpperCase() : key;
      newValues[targetKey] = props[key];
    }
  }
  return newValues;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
var import_react20 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.mjs
function isAnimationControls(v) {
  return typeof v === "object" && typeof v.start === "function";
}

// node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.mjs
var isKeyframesTarget = function(v) {
  return Array.isArray(v);
};

// node_modules/framer-motion/dist/es/utils/resolve-value.mjs
var isCustomValue = function(v) {
  return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
var resolveFinalValueInKeyframes = function(v) {
  return isKeyframesTarget(v) ? v[v.length - 1] || 0 : v;
};

// node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.mjs
function resolveMotionValue(value) {
  var unwrappedValue = isMotionValue(value) ? value.get() : value;
  return isCustomValue(unwrappedValue) ? unwrappedValue.toValue() : unwrappedValue;
}

// node_modules/framer-motion/dist/es/motion/utils/use-visual-state.mjs
function makeState(_a, props, context, presenceContext) {
  var scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps, createRenderState = _a.createRenderState, onMount = _a.onMount;
  var state = {
    latestValues: makeLatestValues(props, context, presenceContext, scrapeMotionValuesFromProps3),
    renderState: createRenderState()
  };
  if (onMount) {
    state.mount = function(instance) {
      return onMount(props, instance, state);
    };
  }
  return state;
}
var makeUseVisualState = function(config) {
  return function(props, isStatic) {
    var context = (0, import_react20.useContext)(MotionContext);
    var presenceContext = (0, import_react20.useContext)(PresenceContext);
    return isStatic ? makeState(config, props, context, presenceContext) : useConstant(function() {
      return makeState(config, props, context, presenceContext);
    });
  };
};
function makeLatestValues(props, context, presenceContext, scrapeMotionValues) {
  var values = {};
  var blockInitialAnimation = (presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.initial) === false;
  var motionValues = scrapeMotionValues(props);
  for (var key in motionValues) {
    values[key] = resolveMotionValue(motionValues[key]);
  }
  var initial = props.initial, animate3 = props.animate;
  var isControllingVariants = checkIfControllingVariants(props);
  var isVariantNode = checkIfVariantNode(props);
  if (context && isVariantNode && !isControllingVariants && props.inherit !== false) {
    initial !== null && initial !== void 0 ? initial : initial = context.initial;
    animate3 !== null && animate3 !== void 0 ? animate3 : animate3 = context.animate;
  }
  var initialAnimationIsBlocked = blockInitialAnimation || initial === false;
  var variantToSet = initialAnimationIsBlocked ? animate3 : initial;
  if (variantToSet && typeof variantToSet !== "boolean" && !isAnimationControls(variantToSet)) {
    var list = Array.isArray(variantToSet) ? variantToSet : [variantToSet];
    list.forEach(function(definition) {
      var resolved = resolveVariantFromProps(props, definition);
      if (!resolved)
        return;
      var transitionEnd = resolved.transitionEnd;
      resolved.transition;
      var target = __rest(resolved, ["transitionEnd", "transition"]);
      for (var key2 in target) {
        var valueTarget = target[key2];
        if (Array.isArray(valueTarget)) {
          var index2 = initialAnimationIsBlocked ? valueTarget.length - 1 : 0;
          valueTarget = valueTarget[index2];
        }
        if (valueTarget !== null) {
          values[key2] = valueTarget;
        }
      }
      for (var key2 in transitionEnd)
        values[key2] = transitionEnd[key2];
    });
  }
  return values;
}

// node_modules/framer-motion/dist/es/render/svg/config-motion.mjs
var svgMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2,
    createRenderState: createSvgRenderState,
    onMount: function(props, instance, _a) {
      var renderState = _a.renderState, latestValues = _a.latestValues;
      try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
      } catch (e) {
        renderState.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      buildSVGAttrs(renderState, latestValues, { enableHardwareAcceleration: false }, props.transformTemplate);
      renderSVG(instance, renderState);
    }
  })
};

// node_modules/framer-motion/dist/es/render/html/config-motion.mjs
var htmlMotionConfig = {
  useVisualState: makeUseVisualState({
    scrapeMotionValuesFromProps,
    createRenderState: createHtmlRenderState
  })
};

// node_modules/framer-motion/dist/es/render/dom/utils/create-config.mjs
function createDomMotionConfig(Component, _a, preloadedFeatures, createVisualElement, projectionNodeConstructor) {
  var _b = _a.forwardMotionProps, forwardMotionProps = _b === void 0 ? false : _b;
  var baseConfig = isSVGComponent(Component) ? svgMotionConfig : htmlMotionConfig;
  return __assign(__assign({}, baseConfig), { preloadedFeatures, useRender: createUseRender(forwardMotionProps), createVisualElement, projectionNodeConstructor, Component });
}

// node_modules/framer-motion/dist/es/render/utils/types.mjs
var AnimationType;
(function(AnimationType2) {
  AnimationType2["Animate"] = "animate";
  AnimationType2["Hover"] = "whileHover";
  AnimationType2["Tap"] = "whileTap";
  AnimationType2["Drag"] = "whileDrag";
  AnimationType2["Focus"] = "whileFocus";
  AnimationType2["InView"] = "whileInView";
  AnimationType2["Exit"] = "exit";
})(AnimationType || (AnimationType = {}));

// node_modules/framer-motion/dist/es/events/use-dom-event.mjs
var import_react21 = __toESM(require_react(), 1);
function addDomEvent(target, eventName, handler, options) {
  if (options === void 0) {
    options = { passive: true };
  }
  target.addEventListener(eventName, handler, options);
  return function() {
    return target.removeEventListener(eventName, handler);
  };
}
function useDomEvent(ref, eventName, handler, options) {
  (0, import_react21.useEffect)(function() {
    var element = ref.current;
    if (handler && element) {
      return addDomEvent(element, eventName, handler, options);
    }
  }, [ref, eventName, handler, options]);
}

// node_modules/framer-motion/dist/es/gestures/use-focus-gesture.mjs
function useFocusGesture(_a) {
  var whileFocus = _a.whileFocus, visualElement2 = _a.visualElement;
  var onFocus = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, true);
  };
  var onBlur = function() {
    var _a2;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Focus, false);
  };
  useDomEvent(visualElement2, "focus", whileFocus ? onFocus : void 0);
  useDomEvent(visualElement2, "blur", whileFocus ? onBlur : void 0);
}

// node_modules/framer-motion/dist/es/gestures/utils/event-type.mjs
function isMouseEvent(event) {
  if (typeof PointerEvent !== "undefined" && event instanceof PointerEvent) {
    return !!(event.pointerType === "mouse");
  }
  return event instanceof MouseEvent;
}
function isTouchEvent(event) {
  var hasTouches = !!event.touches;
  return hasTouches;
}

// node_modules/framer-motion/dist/es/events/event-info.mjs
function filterPrimaryPointer(eventHandler) {
  return function(event) {
    var isMouseEvent2 = event instanceof MouseEvent;
    var isPrimaryPointer = !isMouseEvent2 || isMouseEvent2 && event.button === 0;
    if (isPrimaryPointer) {
      eventHandler(event);
    }
  };
}
var defaultPagePoint = { pageX: 0, pageY: 0 };
function pointFromTouch(e, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  var primaryTouch = e.touches[0] || e.changedTouches[0];
  var point = primaryTouch || defaultPagePoint;
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function pointFromMouse(point, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    x: point[pointType + "X"],
    y: point[pointType + "Y"]
  };
}
function extractEventInfo(event, pointType) {
  if (pointType === void 0) {
    pointType = "page";
  }
  return {
    point: isTouchEvent(event) ? pointFromTouch(event, pointType) : pointFromMouse(event, pointType)
  };
}
var wrapHandler = function(handler, shouldFilterPrimaryPointer) {
  if (shouldFilterPrimaryPointer === void 0) {
    shouldFilterPrimaryPointer = false;
  }
  var listener = function(event) {
    return handler(event, extractEventInfo(event));
  };
  return shouldFilterPrimaryPointer ? filterPrimaryPointer(listener) : listener;
};

// node_modules/framer-motion/dist/es/events/utils.mjs
var supportsPointerEvents = function() {
  return isBrowser && window.onpointerdown === null;
};
var supportsTouchEvents = function() {
  return isBrowser && window.ontouchstart === null;
};
var supportsMouseEvents = function() {
  return isBrowser && window.onmousedown === null;
};

// node_modules/framer-motion/dist/es/events/use-pointer-event.mjs
var mouseEventNames = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
};
var touchEventNames = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function getPointerEventName(name) {
  if (supportsPointerEvents()) {
    return name;
  } else if (supportsTouchEvents()) {
    return touchEventNames[name];
  } else if (supportsMouseEvents()) {
    return mouseEventNames[name];
  }
  return name;
}
function addPointerEvent(target, eventName, handler, options) {
  return addDomEvent(target, getPointerEventName(eventName), wrapHandler(handler, eventName === "pointerdown"), options);
}
function usePointerEvent(ref, eventName, handler, options) {
  return useDomEvent(ref, getPointerEventName(eventName), handler && wrapHandler(handler, eventName === "pointerdown"), options);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/lock.mjs
function createLock(name) {
  var lock = null;
  return function() {
    var openLock = function() {
      lock = null;
    };
    if (lock === null) {
      lock = name;
      return openLock;
    }
    return false;
  };
}
var globalHorizontalLock = createLock("dragHorizontal");
var globalVerticalLock = createLock("dragVertical");
function getGlobalLock(drag2) {
  var lock = false;
  if (drag2 === "y") {
    lock = globalVerticalLock();
  } else if (drag2 === "x") {
    lock = globalHorizontalLock();
  } else {
    var openHorizontal_1 = globalHorizontalLock();
    var openVertical_1 = globalVerticalLock();
    if (openHorizontal_1 && openVertical_1) {
      lock = function() {
        openHorizontal_1();
        openVertical_1();
      };
    } else {
      if (openHorizontal_1)
        openHorizontal_1();
      if (openVertical_1)
        openVertical_1();
    }
  }
  return lock;
}
function isDragActive() {
  var openGestureLock = getGlobalLock(true);
  if (!openGestureLock)
    return true;
  openGestureLock();
  return false;
}

// node_modules/framer-motion/dist/es/gestures/use-hover-gesture.mjs
function createHoverEvent(visualElement2, isActive, callback) {
  return function(event, info) {
    var _a;
    if (!isMouseEvent(event) || isDragActive())
      return;
    (_a = visualElement2.animationState) === null || _a === void 0 ? void 0 : _a.setActive(AnimationType.Hover, isActive);
    callback === null || callback === void 0 ? void 0 : callback(event, info);
  };
}
function useHoverGesture(_a) {
  var onHoverStart = _a.onHoverStart, onHoverEnd = _a.onHoverEnd, whileHover = _a.whileHover, visualElement2 = _a.visualElement;
  usePointerEvent(visualElement2, "pointerenter", onHoverStart || whileHover ? createHoverEvent(visualElement2, true, onHoverStart) : void 0, { passive: !onHoverStart });
  usePointerEvent(visualElement2, "pointerleave", onHoverEnd || whileHover ? createHoverEvent(visualElement2, false, onHoverEnd) : void 0, { passive: !onHoverEnd });
}

// node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
var import_react23 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.mjs
var isNodeOrChild = function(parent2, child) {
  if (!child) {
    return false;
  } else if (parent2 === child) {
    return true;
  } else {
    return isNodeOrChild(parent2, child.parentElement);
  }
};

// node_modules/framer-motion/dist/es/utils/use-unmount-effect.mjs
var import_react22 = __toESM(require_react(), 1);
function useUnmountEffect(callback) {
  return (0, import_react22.useEffect)(function() {
    return function() {
      return callback();
    };
  }, []);
}

// node_modules/popmotion/dist/es/utils/clamp.mjs
var clamp2 = (min, max, v) => Math.min(Math.max(v, min), max);

// node_modules/popmotion/dist/es/animations/utils/find-spring.mjs
var safeMin = 1e-3;
var minDuration = 0.01;
var maxDuration = 10;
var minDamping = 0.05;
var maxDamping = 1;
function findSpring({ duration = 800, bounce = 0.25, velocity = 0, mass = 1 }) {
  let envelope;
  let derivative;
  warning(duration <= maxDuration * 1e3, "Spring duration must be 10 seconds or less");
  let dampingRatio = 1 - bounce;
  dampingRatio = clamp2(minDamping, maxDamping, dampingRatio);
  duration = clamp2(minDuration, maxDuration, duration / 1e3);
  if (dampingRatio < 1) {
    envelope = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const a2 = exponentialDecay - velocity;
      const b2 = calcAngularFreq(undampedFreq2, dampingRatio);
      const c2 = Math.exp(-delta);
      return safeMin - a2 / b2 * c2;
    };
    derivative = (undampedFreq2) => {
      const exponentialDecay = undampedFreq2 * dampingRatio;
      const delta = exponentialDecay * duration;
      const d = delta * velocity + velocity;
      const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq2, 2) * duration;
      const f = Math.exp(-delta);
      const g = calcAngularFreq(Math.pow(undampedFreq2, 2), dampingRatio);
      const factor = -envelope(undampedFreq2) + safeMin > 0 ? -1 : 1;
      return factor * ((d - e) * f) / g;
    };
  } else {
    envelope = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (undampedFreq2 - velocity) * duration + 1;
      return -safeMin + a2 * b2;
    };
    derivative = (undampedFreq2) => {
      const a2 = Math.exp(-undampedFreq2 * duration);
      const b2 = (velocity - undampedFreq2) * (duration * duration);
      return a2 * b2;
    };
  }
  const initialGuess = 5 / duration;
  const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
  duration = duration * 1e3;
  if (isNaN(undampedFreq)) {
    return {
      stiffness: 100,
      damping: 10,
      duration
    };
  } else {
    const stiffness = Math.pow(undampedFreq, 2) * mass;
    return {
      stiffness,
      damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
      duration
    };
  }
}
var rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
  let result = initialGuess;
  for (let i = 1; i < rootIterations; i++) {
    result = result - envelope(result) / derivative(result);
  }
  return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
  return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

// node_modules/popmotion/dist/es/animations/generators/spring.mjs
var durationKeys = ["duration", "bounce"];
var physicsKeys = ["stiffness", "damping", "mass"];
function isSpringType(options, keys) {
  return keys.some((key) => options[key] !== void 0);
}
function getSpringOptions(options) {
  let springOptions = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: false }, options);
  if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
    const derived = findSpring(options);
    springOptions = Object.assign(Object.assign(Object.assign({}, springOptions), derived), { velocity: 0, mass: 1 });
    springOptions.isResolvedFromDuration = true;
  }
  return springOptions;
}
function spring(_a) {
  var { from: from2 = 0, to = 1, restSpeed = 2, restDelta } = _a, options = __rest(_a, ["from", "to", "restSpeed", "restDelta"]);
  const state = { done: false, value: from2 };
  let { stiffness, damping, mass, velocity, duration, isResolvedFromDuration } = getSpringOptions(options);
  let resolveSpring = zero;
  let resolveVelocity = zero;
  function createSpring() {
    const initialVelocity = velocity ? -(velocity / 1e3) : 0;
    const initialDelta = to - from2;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const undampedAngularFreq = Math.sqrt(stiffness / mass) / 1e3;
    if (restDelta === void 0) {
      restDelta = Math.min(Math.abs(to - from2) / 100, 0.4);
    }
    if (dampingRatio < 1) {
      const angularFreq = calcAngularFreq(undampedAngularFreq, dampingRatio);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
      };
      resolveVelocity = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        return dampingRatio * undampedAngularFreq * envelope * (Math.sin(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq + initialDelta * Math.cos(angularFreq * t)) - envelope * (Math.cos(angularFreq * t) * (initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) - angularFreq * initialDelta * Math.sin(angularFreq * t));
      };
    } else if (dampingRatio === 1) {
      resolveSpring = (t) => to - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    } else {
      const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
      resolveSpring = (t) => {
        const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
        const freqForT = Math.min(dampedAngularFreq * t, 300);
        return to - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
      };
    }
  }
  createSpring();
  return {
    next: (t) => {
      const current = resolveSpring(t);
      if (!isResolvedFromDuration) {
        const currentVelocity = resolveVelocity(t) * 1e3;
        const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
        const isBelowDisplacementThreshold = Math.abs(to - current) <= restDelta;
        state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
      } else {
        state.done = t >= duration;
      }
      state.value = state.done ? to : current;
      return state;
    },
    flipTarget: () => {
      velocity = -velocity;
      [from2, to] = [to, from2];
      createSpring();
    }
  };
}
spring.needsInterpolation = (a2, b2) => typeof a2 === "string" || typeof b2 === "string";
var zero = (_t) => 0;

// node_modules/popmotion/dist/es/utils/progress.mjs
var progress = (from2, to, value) => {
  const toFromDifference = to - from2;
  return toFromDifference === 0 ? 1 : (value - from2) / toFromDifference;
};

// node_modules/popmotion/dist/es/utils/mix.mjs
var mix = (from2, to, progress2) => -progress2 * from2 + progress2 * to + from2;

// node_modules/popmotion/dist/es/utils/hsla-to-rgba.mjs
function hueToRgb(p, q, t) {
  if (t < 0)
    t += 1;
  if (t > 1)
    t -= 1;
  if (t < 1 / 6)
    return p + (q - p) * 6 * t;
  if (t < 1 / 2)
    return q;
  if (t < 2 / 3)
    return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha: alpha2 }) {
  hue /= 360;
  saturation /= 100;
  lightness /= 100;
  let red = 0;
  let green = 0;
  let blue = 0;
  if (!saturation) {
    red = green = blue = lightness;
  } else {
    const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
    const p = 2 * lightness - q;
    red = hueToRgb(p, q, hue + 1 / 3);
    green = hueToRgb(p, q, hue);
    blue = hueToRgb(p, q, hue - 1 / 3);
  }
  return {
    red: Math.round(red * 255),
    green: Math.round(green * 255),
    blue: Math.round(blue * 255),
    alpha: alpha2
  };
}

// node_modules/popmotion/dist/es/utils/mix-color.mjs
var mixLinearColor = (from2, to, v) => {
  const fromExpo = from2 * from2;
  const toExpo = to * to;
  return Math.sqrt(Math.max(0, v * (toExpo - fromExpo) + fromExpo));
};
var colorTypes = [hex, rgba, hsla];
var getColorType = (v) => colorTypes.find((type) => type.test(v));
var notAnimatable = (color2) => `'${color2}' is not an animatable color. Use the equivalent color code instead.`;
var mixColor = (from2, to) => {
  let fromColorType = getColorType(from2);
  let toColorType = getColorType(to);
  invariant(!!fromColorType, notAnimatable(from2));
  invariant(!!toColorType, notAnimatable(to));
  let fromColor = fromColorType.parse(from2);
  let toColor = toColorType.parse(to);
  if (fromColorType === hsla) {
    fromColor = hslaToRgba(fromColor);
    fromColorType = rgba;
  }
  if (toColorType === hsla) {
    toColor = hslaToRgba(toColor);
    toColorType = rgba;
  }
  const blended = Object.assign({}, fromColor);
  return (v) => {
    for (const key in blended) {
      if (key !== "alpha") {
        blended[key] = mixLinearColor(fromColor[key], toColor[key], v);
      }
    }
    blended.alpha = mix(fromColor.alpha, toColor.alpha, v);
    return fromColorType.transform(blended);
  };
};

// node_modules/popmotion/dist/es/utils/inc.mjs
var isNum = (v) => typeof v === "number";

// node_modules/popmotion/dist/es/utils/pipe.mjs
var combineFunctions = (a2, b2) => (v) => b2(a2(v));
var pipe = (...transformers) => transformers.reduce(combineFunctions);

// node_modules/popmotion/dist/es/utils/mix-complex.mjs
function getMixer(origin, target) {
  if (isNum(origin)) {
    return (v) => mix(origin, target, v);
  } else if (color.test(origin)) {
    return mixColor(origin, target);
  } else {
    return mixComplex(origin, target);
  }
}
var mixArray = (from2, to) => {
  const output = [...from2];
  const numValues = output.length;
  const blendValue = from2.map((fromThis, i) => getMixer(fromThis, to[i]));
  return (v) => {
    for (let i = 0; i < numValues; i++) {
      output[i] = blendValue[i](v);
    }
    return output;
  };
};
var mixObject = (origin, target) => {
  const output = Object.assign(Object.assign({}, origin), target);
  const blendValue = {};
  for (const key in output) {
    if (origin[key] !== void 0 && target[key] !== void 0) {
      blendValue[key] = getMixer(origin[key], target[key]);
    }
  }
  return (v) => {
    for (const key in blendValue) {
      output[key] = blendValue[key](v);
    }
    return output;
  };
};
function analyse2(value) {
  const parsed = complex.parse(value);
  const numValues = parsed.length;
  let numNumbers = 0;
  let numRGB = 0;
  let numHSL = 0;
  for (let i = 0; i < numValues; i++) {
    if (numNumbers || typeof parsed[i] === "number") {
      numNumbers++;
    } else {
      if (parsed[i].hue !== void 0) {
        numHSL++;
      } else {
        numRGB++;
      }
    }
  }
  return { parsed, numNumbers, numRGB, numHSL };
}
var mixComplex = (origin, target) => {
  const template = complex.createTransformer(target);
  const originStats = analyse2(origin);
  const targetStats = analyse2(target);
  const canInterpolate = originStats.numHSL === targetStats.numHSL && originStats.numRGB === targetStats.numRGB && originStats.numNumbers >= targetStats.numNumbers;
  if (canInterpolate) {
    return pipe(mixArray(originStats.parsed, targetStats.parsed), template);
  } else {
    warning(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
    return (p) => `${p > 0 ? target : origin}`;
  }
};

// node_modules/popmotion/dist/es/utils/interpolate.mjs
var mixNumber = (from2, to) => (p) => mix(from2, to, p);
function detectMixerFactory(v) {
  if (typeof v === "number") {
    return mixNumber;
  } else if (typeof v === "string") {
    if (color.test(v)) {
      return mixColor;
    } else {
      return mixComplex;
    }
  } else if (Array.isArray(v)) {
    return mixArray;
  } else if (typeof v === "object") {
    return mixObject;
  }
}
function createMixers(output, ease, customMixer) {
  const mixers = [];
  const mixerFactory = customMixer || detectMixerFactory(output[0]);
  const numMixers = output.length - 1;
  for (let i = 0; i < numMixers; i++) {
    let mixer = mixerFactory(output[i], output[i + 1]);
    if (ease) {
      const easingFunction = Array.isArray(ease) ? ease[i] : ease;
      mixer = pipe(easingFunction, mixer);
    }
    mixers.push(mixer);
  }
  return mixers;
}
function fastInterpolate([from2, to], [mixer]) {
  return (v) => mixer(progress(from2, to, v));
}
function slowInterpolate(input, mixers) {
  const inputLength = input.length;
  const lastInputIndex = inputLength - 1;
  return (v) => {
    let mixerIndex = 0;
    let foundMixerIndex = false;
    if (v <= input[0]) {
      foundMixerIndex = true;
    } else if (v >= input[lastInputIndex]) {
      mixerIndex = lastInputIndex - 1;
      foundMixerIndex = true;
    }
    if (!foundMixerIndex) {
      let i = 1;
      for (; i < inputLength; i++) {
        if (input[i] > v || i === lastInputIndex) {
          break;
        }
      }
      mixerIndex = i - 1;
    }
    const progressInRange = progress(input[mixerIndex], input[mixerIndex + 1], v);
    return mixers[mixerIndex](progressInRange);
  };
}
function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
  const inputLength = input.length;
  invariant(inputLength === output.length, "Both input and output ranges must be the same length");
  invariant(!ease || !Array.isArray(ease) || ease.length === inputLength - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values.");
  if (input[0] > input[inputLength - 1]) {
    input = [].concat(input);
    output = [].concat(output);
    input.reverse();
    output.reverse();
  }
  const mixers = createMixers(output, ease, mixer);
  const interpolator = inputLength === 2 ? fastInterpolate(input, mixers) : slowInterpolate(input, mixers);
  return isClamp ? (v) => interpolator(clamp2(input[0], input[inputLength - 1], v)) : interpolator;
}

// node_modules/popmotion/dist/es/easing/utils.mjs
var reverseEasing = (easing) => (p) => 1 - easing(1 - p);
var mirrorEasing = (easing) => (p) => p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
var createExpoIn = (power) => (p) => Math.pow(p, power);
var createBackIn = (power) => (p) => p * p * ((power + 1) * p - power);
var createAnticipate = (power) => {
  const backEasing = createBackIn(power);
  return (p) => (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
};

// node_modules/popmotion/dist/es/easing/index.mjs
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
var BOUNCE_FIRST_THRESHOLD = 4 / 11;
var BOUNCE_SECOND_THRESHOLD = 8 / 11;
var BOUNCE_THIRD_THRESHOLD = 9 / 10;
var linear = (p) => p;
var easeIn = createExpoIn(2);
var easeOut = reverseEasing(easeIn);
var easeInOut = mirrorEasing(easeIn);
var circIn = (p) => 1 - Math.sin(Math.acos(p));
var circOut = reverseEasing(circIn);
var circInOut = mirrorEasing(circOut);
var backIn = createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
var backOut = reverseEasing(backIn);
var backInOut = mirrorEasing(backIn);
var anticipate = createAnticipate(DEFAULT_OVERSHOOT_STRENGTH);
var ca = 4356 / 361;
var cb = 35442 / 1805;
var cc = 16061 / 1805;
var bounceOut = (p) => {
  if (p === 1 || p === 0)
    return p;
  const p2 = p * p;
  return p < BOUNCE_FIRST_THRESHOLD ? 7.5625 * p2 : p < BOUNCE_SECOND_THRESHOLD ? 9.075 * p2 - 9.9 * p + 3.4 : p < BOUNCE_THIRD_THRESHOLD ? ca * p2 - cb * p + cc : 10.8 * p * p - 20.52 * p + 10.72;
};
var bounceIn = reverseEasing(bounceOut);
var bounceInOut = (p) => p < 0.5 ? 0.5 * (1 - bounceOut(1 - p * 2)) : 0.5 * bounceOut(p * 2 - 1) + 0.5;

// node_modules/popmotion/dist/es/animations/generators/keyframes.mjs
function defaultEasing(values, easing) {
  return values.map(() => easing || easeInOut).splice(0, values.length - 1);
}
function defaultOffset(values) {
  const numValues = values.length;
  return values.map((_value, i) => i !== 0 ? i / (numValues - 1) : 0);
}
function convertOffsetToTimes(offset, duration) {
  return offset.map((o) => o * duration);
}
function keyframes({ from: from2 = 0, to = 1, ease, offset, duration = 300 }) {
  const state = { done: false, value: from2 };
  const values = Array.isArray(to) ? to : [from2, to];
  const times = convertOffsetToTimes(offset && offset.length === values.length ? offset : defaultOffset(values), duration);
  function createInterpolator() {
    return interpolate(times, values, {
      ease: Array.isArray(ease) ? ease : defaultEasing(values, ease)
    });
  }
  let interpolator = createInterpolator();
  return {
    next: (t) => {
      state.value = interpolator(t);
      state.done = t >= duration;
      return state;
    },
    flipTarget: () => {
      values.reverse();
      interpolator = createInterpolator();
    }
  };
}

// node_modules/popmotion/dist/es/animations/generators/decay.mjs
function decay({ velocity = 0, from: from2 = 0, power = 0.8, timeConstant = 350, restDelta = 0.5, modifyTarget }) {
  const state = { done: false, value: from2 };
  let amplitude = power * velocity;
  const ideal = from2 + amplitude;
  const target = modifyTarget === void 0 ? ideal : modifyTarget(ideal);
  if (target !== ideal)
    amplitude = target - from2;
  return {
    next: (t) => {
      const delta = -amplitude * Math.exp(-t / timeConstant);
      state.done = !(delta > restDelta || delta < -restDelta);
      state.value = state.done ? target : target + delta;
      return state;
    },
    flipTarget: () => {
    }
  };
}

// node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.mjs
var types = { keyframes, spring, decay };
function detectAnimationFromOptions(config) {
  if (Array.isArray(config.to)) {
    return keyframes;
  } else if (types[config.type]) {
    return types[config.type];
  }
  const keys = new Set(Object.keys(config));
  if (keys.has("ease") || keys.has("duration") && !keys.has("dampingRatio")) {
    return keyframes;
  } else if (keys.has("dampingRatio") || keys.has("stiffness") || keys.has("mass") || keys.has("damping") || keys.has("restSpeed") || keys.has("restDelta")) {
    return spring;
  }
  return keyframes;
}

// node_modules/framesync/dist/es/on-next-frame.mjs
var defaultTimestep = 1 / 60 * 1e3;
var getCurrentTime = typeof performance !== "undefined" ? () => performance.now() : () => Date.now();
var onNextFrame = typeof window !== "undefined" ? (callback) => window.requestAnimationFrame(callback) : (callback) => setTimeout(() => callback(getCurrentTime()), defaultTimestep);

// node_modules/framesync/dist/es/create-render-step.mjs
function createRenderStep(runNextFrame2) {
  let toRun = [];
  let toRunNextFrame = [];
  let numToRun = 0;
  let isProcessing2 = false;
  let flushNextFrame = false;
  const toKeepAlive = /* @__PURE__ */ new WeakSet();
  const step = {
    schedule: (callback, keepAlive = false, immediate = false) => {
      const addToCurrentFrame = immediate && isProcessing2;
      const buffer = addToCurrentFrame ? toRun : toRunNextFrame;
      if (keepAlive)
        toKeepAlive.add(callback);
      if (buffer.indexOf(callback) === -1) {
        buffer.push(callback);
        if (addToCurrentFrame && isProcessing2)
          numToRun = toRun.length;
      }
      return callback;
    },
    cancel: (callback) => {
      const index2 = toRunNextFrame.indexOf(callback);
      if (index2 !== -1)
        toRunNextFrame.splice(index2, 1);
      toKeepAlive.delete(callback);
    },
    process: (frameData) => {
      if (isProcessing2) {
        flushNextFrame = true;
        return;
      }
      isProcessing2 = true;
      [toRun, toRunNextFrame] = [toRunNextFrame, toRun];
      toRunNextFrame.length = 0;
      numToRun = toRun.length;
      if (numToRun) {
        for (let i = 0; i < numToRun; i++) {
          const callback = toRun[i];
          callback(frameData);
          if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame2();
          }
        }
      }
      isProcessing2 = false;
      if (flushNextFrame) {
        flushNextFrame = false;
        step.process(frameData);
      }
    }
  };
  return step;
}

// node_modules/framesync/dist/es/index.mjs
var maxElapsed = 40;
var useDefaultElapsed = true;
var runNextFrame = false;
var isProcessing = false;
var frame = {
  delta: 0,
  timestamp: 0
};
var stepsOrder = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
];
var steps = stepsOrder.reduce((acc, key) => {
  acc[key] = createRenderStep(() => runNextFrame = true);
  return acc;
}, {});
var sync = stepsOrder.reduce((acc, key) => {
  const step = steps[key];
  acc[key] = (process2, keepAlive = false, immediate = false) => {
    if (!runNextFrame)
      startLoop();
    return step.schedule(process2, keepAlive, immediate);
  };
  return acc;
}, {});
var cancelSync = stepsOrder.reduce((acc, key) => {
  acc[key] = steps[key].cancel;
  return acc;
}, {});
var flushSync = stepsOrder.reduce((acc, key) => {
  acc[key] = () => steps[key].process(frame);
  return acc;
}, {});
var processStep = (stepId) => steps[stepId].process(frame);
var processFrame = (timestamp) => {
  runNextFrame = false;
  frame.delta = useDefaultElapsed ? defaultTimestep : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);
  frame.timestamp = timestamp;
  isProcessing = true;
  stepsOrder.forEach(processStep);
  isProcessing = false;
  if (runNextFrame) {
    useDefaultElapsed = false;
    onNextFrame(processFrame);
  }
};
var startLoop = () => {
  runNextFrame = true;
  useDefaultElapsed = true;
  if (!isProcessing)
    onNextFrame(processFrame);
};
var getFrameData = () => frame;
var es_default = sync;

// node_modules/popmotion/dist/es/animations/utils/elapsed.mjs
function loopElapsed(elapsed, duration, delay2 = 0) {
  return elapsed - duration - delay2;
}
function reverseElapsed(elapsed, duration, delay2 = 0, isForwardPlayback = true) {
  return isForwardPlayback ? loopElapsed(duration + -elapsed, duration, delay2) : duration - (elapsed - duration) + delay2;
}
function hasRepeatDelayElapsed(elapsed, duration, delay2, isForwardPlayback) {
  return isForwardPlayback ? elapsed >= duration + delay2 : elapsed <= -delay2;
}

// node_modules/popmotion/dist/es/animations/index.mjs
var framesync = (update) => {
  const passTimestamp = ({ delta }) => update(delta);
  return {
    start: () => es_default.update(passTimestamp, true),
    stop: () => cancelSync.update(passTimestamp)
  };
};
function animate(_a) {
  var _b, _c;
  var { from: from2, autoplay = true, driver = framesync, elapsed = 0, repeat: repeatMax = 0, repeatType = "loop", repeatDelay = 0, onPlay, onStop, onComplete, onRepeat, onUpdate } = _a, options = __rest(_a, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to } = options;
  let driverControls;
  let repeatCount = 0;
  let computedDuration = options.duration;
  let latest;
  let isComplete = false;
  let isForwardPlayback = true;
  let interpolateFromNumber;
  const animator = detectAnimationFromOptions(options);
  if ((_c = (_b = animator).needsInterpolation) === null || _c === void 0 ? void 0 : _c.call(_b, from2, to)) {
    interpolateFromNumber = interpolate([0, 100], [from2, to], {
      clamp: false
    });
    from2 = 0;
    to = 100;
  }
  const animation = animator(Object.assign(Object.assign({}, options), { from: from2, to }));
  function repeat() {
    repeatCount++;
    if (repeatType === "reverse") {
      isForwardPlayback = repeatCount % 2 === 0;
      elapsed = reverseElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback);
    } else {
      elapsed = loopElapsed(elapsed, computedDuration, repeatDelay);
      if (repeatType === "mirror")
        animation.flipTarget();
    }
    isComplete = false;
    onRepeat && onRepeat();
  }
  function complete() {
    driverControls.stop();
    onComplete && onComplete();
  }
  function update(delta) {
    if (!isForwardPlayback)
      delta = -delta;
    elapsed += delta;
    if (!isComplete) {
      const state = animation.next(Math.max(0, elapsed));
      latest = state.value;
      if (interpolateFromNumber)
        latest = interpolateFromNumber(latest);
      isComplete = isForwardPlayback ? state.done : elapsed <= 0;
    }
    onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(latest);
    if (isComplete) {
      if (repeatCount === 0)
        computedDuration !== null && computedDuration !== void 0 ? computedDuration : computedDuration = elapsed;
      if (repeatCount < repeatMax) {
        hasRepeatDelayElapsed(elapsed, computedDuration, repeatDelay, isForwardPlayback) && repeat();
      } else {
        complete();
      }
    }
  }
  function play() {
    onPlay === null || onPlay === void 0 ? void 0 : onPlay();
    driverControls = driver(update);
    driverControls.start();
  }
  autoplay && play();
  return {
    stop: () => {
      onStop === null || onStop === void 0 ? void 0 : onStop();
      driverControls.stop();
    }
  };
}

// node_modules/popmotion/dist/es/utils/velocity-per-second.mjs
function velocityPerSecond(velocity, frameDuration) {
  return frameDuration ? velocity * (1e3 / frameDuration) : 0;
}

// node_modules/popmotion/dist/es/animations/inertia.mjs
function inertia({ from: from2 = 0, velocity = 0, min, max, power = 0.8, timeConstant = 750, bounceStiffness = 500, bounceDamping = 10, restDelta = 1, modifyTarget, driver, onUpdate, onComplete, onStop }) {
  let currentAnimation;
  function isOutOfBounds(v) {
    return min !== void 0 && v < min || max !== void 0 && v > max;
  }
  function boundaryNearest(v) {
    if (min === void 0)
      return max;
    if (max === void 0)
      return min;
    return Math.abs(min - v) < Math.abs(max - v) ? min : max;
  }
  function startAnimation2(options) {
    currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop();
    currentAnimation = animate(Object.assign(Object.assign({}, options), {
      driver,
      onUpdate: (v) => {
        var _a;
        onUpdate === null || onUpdate === void 0 ? void 0 : onUpdate(v);
        (_a = options.onUpdate) === null || _a === void 0 ? void 0 : _a.call(options, v);
      },
      onComplete,
      onStop
    }));
  }
  function startSpring(options) {
    startAnimation2(Object.assign({ type: "spring", stiffness: bounceStiffness, damping: bounceDamping, restDelta }, options));
  }
  if (isOutOfBounds(from2)) {
    startSpring({ from: from2, velocity, to: boundaryNearest(from2) });
  } else {
    let target = power * velocity + from2;
    if (typeof modifyTarget !== "undefined")
      target = modifyTarget(target);
    const boundary = boundaryNearest(target);
    const heading = boundary === min ? -1 : 1;
    let prev;
    let current;
    const checkBoundary = (v) => {
      prev = current;
      current = v;
      velocity = velocityPerSecond(v - prev, getFrameData().delta);
      if (heading === 1 && v > boundary || heading === -1 && v < boundary) {
        startSpring({ from: v, to: boundary, velocity });
      }
    };
    startAnimation2({
      type: "decay",
      from: from2,
      velocity,
      timeConstant,
      power,
      restDelta,
      modifyTarget,
      onUpdate: isOutOfBounds(target) ? checkBoundary : void 0
    });
  }
  return {
    stop: () => currentAnimation === null || currentAnimation === void 0 ? void 0 : currentAnimation.stop()
  };
}

// node_modules/popmotion/dist/es/utils/is-point.mjs
var isPoint = (point) => point.hasOwnProperty("x") && point.hasOwnProperty("y");

// node_modules/popmotion/dist/es/utils/is-point-3d.mjs
var isPoint3D = (point) => isPoint(point) && point.hasOwnProperty("z");

// node_modules/popmotion/dist/es/utils/distance.mjs
var distance1D = (a2, b2) => Math.abs(a2 - b2);
function distance(a2, b2) {
  if (isNum(a2) && isNum(b2)) {
    return distance1D(a2, b2);
  } else if (isPoint(a2) && isPoint(b2)) {
    const xDelta = distance1D(a2.x, b2.x);
    const yDelta = distance1D(a2.y, b2.y);
    const zDelta = isPoint3D(a2) && isPoint3D(b2) ? distance1D(a2.z, b2.z) : 0;
    return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
  }
}

// node_modules/popmotion/dist/es/easing/cubic-bezier.mjs
var a = (a1, a2) => 1 - 3 * a2 + 3 * a1;
var b = (a1, a2) => 3 * a2 - 6 * a1;
var c = (a1) => 3 * a1;
var calcBezier = (t, a1, a2) => ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
var getSlope = (t, a1, a2) => 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
var subdivisionPrecision = 1e-7;
var subdivisionMaxIterations = 10;
function binarySubdivide(aX, aA, aB, mX1, mX2) {
  let currentX;
  let currentT;
  let i = 0;
  do {
    currentT = aA + (aB - aA) / 2;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
  return currentT;
}
var newtonIterations = 8;
var newtonMinSlope = 1e-3;
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
  for (let i = 0; i < newtonIterations; ++i) {
    const currentSlope = getSlope(aGuessT, mX1, mX2);
    if (currentSlope === 0) {
      return aGuessT;
    }
    const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
    aGuessT -= currentX / currentSlope;
  }
  return aGuessT;
}
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
function cubicBezier(mX1, mY1, mX2, mY2) {
  if (mX1 === mY1 && mX2 === mY2)
    return linear;
  const sampleValues = new Float32Array(kSplineTableSize);
  for (let i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }
  function getTForX(aX) {
    let intervalStart = 0;
    let currentSample = 1;
    const lastSample = kSplineTableSize - 1;
    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;
    const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    const guessForT = intervalStart + dist * kSampleStepSize;
    const initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= newtonMinSlope) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }
  return (t) => t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

// node_modules/framer-motion/dist/es/gestures/use-tap-gesture.mjs
function useTapGesture(_a) {
  var onTap = _a.onTap, onTapStart = _a.onTapStart, onTapCancel = _a.onTapCancel, whileTap = _a.whileTap, visualElement2 = _a.visualElement;
  var hasPressListeners = onTap || onTapStart || onTapCancel || whileTap;
  var isPressing = (0, import_react23.useRef)(false);
  var cancelPointerEndListeners = (0, import_react23.useRef)(null);
  var eventOptions = {
    passive: !(onTapStart || onTap || onTapCancel || onPointerDown)
  };
  function removePointerEndListener() {
    var _a2;
    (_a2 = cancelPointerEndListeners.current) === null || _a2 === void 0 ? void 0 : _a2.call(cancelPointerEndListeners);
    cancelPointerEndListeners.current = null;
  }
  function checkPointerEnd() {
    var _a2;
    removePointerEndListener();
    isPressing.current = false;
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, false);
    return !isDragActive();
  }
  function onPointerUp(event, info) {
    if (!checkPointerEnd())
      return;
    !isNodeOrChild(visualElement2.getInstance(), event.target) ? onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info) : onTap === null || onTap === void 0 ? void 0 : onTap(event, info);
  }
  function onPointerCancel(event, info) {
    if (!checkPointerEnd())
      return;
    onTapCancel === null || onTapCancel === void 0 ? void 0 : onTapCancel(event, info);
  }
  function onPointerDown(event, info) {
    var _a2;
    removePointerEndListener();
    if (isPressing.current)
      return;
    isPressing.current = true;
    cancelPointerEndListeners.current = pipe(addPointerEvent(window, "pointerup", onPointerUp, eventOptions), addPointerEvent(window, "pointercancel", onPointerCancel, eventOptions));
    (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Tap, true);
    onTapStart === null || onTapStart === void 0 ? void 0 : onTapStart(event, info);
  }
  usePointerEvent(visualElement2, "pointerdown", hasPressListeners ? onPointerDown : void 0, eventOptions);
  useUnmountEffect(removePointerEndListener);
}

// node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
var import_react24 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/warn-once.mjs
var warned = /* @__PURE__ */ new Set();
function warnOnce(condition, message, element) {
  if (condition || warned.has(message))
    return;
  console.warn(message);
  if (element)
    console.warn(element);
  warned.add(message);
}

// node_modules/framer-motion/dist/es/motion/features/viewport/observers.mjs
var observerCallbacks = /* @__PURE__ */ new WeakMap();
var observers = /* @__PURE__ */ new WeakMap();
var fireObserverCallback = function(entry) {
  var _a;
  (_a = observerCallbacks.get(entry.target)) === null || _a === void 0 ? void 0 : _a(entry);
};
var fireAllObserverCallbacks = function(entries) {
  entries.forEach(fireObserverCallback);
};
function initIntersectionObserver(_a) {
  var root2 = _a.root, options = __rest(_a, ["root"]);
  var lookupRoot = root2 || document;
  if (!observers.has(lookupRoot)) {
    observers.set(lookupRoot, {});
  }
  var rootObservers = observers.get(lookupRoot);
  var key = JSON.stringify(options);
  if (!rootObservers[key]) {
    rootObservers[key] = new IntersectionObserver(fireAllObserverCallbacks, __assign({ root: root2 }, options));
  }
  return rootObservers[key];
}
function observeIntersection(element, options, callback) {
  var rootInteresectionObserver = initIntersectionObserver(options);
  observerCallbacks.set(element, callback);
  rootInteresectionObserver.observe(element);
  return function() {
    observerCallbacks.delete(element);
    rootInteresectionObserver.unobserve(element);
  };
}

// node_modules/framer-motion/dist/es/motion/features/viewport/use-viewport.mjs
function useViewport(_a) {
  var visualElement2 = _a.visualElement, whileInView = _a.whileInView, onViewportEnter = _a.onViewportEnter, onViewportLeave = _a.onViewportLeave, _b = _a.viewport, viewport = _b === void 0 ? {} : _b;
  var state = (0, import_react24.useRef)({
    hasEnteredView: false,
    isInView: false
  });
  var shouldObserve = Boolean(whileInView || onViewportEnter || onViewportLeave);
  if (viewport.once && state.current.hasEnteredView)
    shouldObserve = false;
  var useObserver = typeof IntersectionObserver === "undefined" ? useMissingIntersectionObserver : useIntersectionObserver;
  useObserver(shouldObserve, state.current, visualElement2, viewport);
}
var thresholdNames = {
  some: 0,
  all: 1
};
function useIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var root2 = _a.root, rootMargin = _a.margin, _b = _a.amount, amount = _b === void 0 ? "some" : _b, once = _a.once;
  (0, import_react24.useEffect)(function() {
    if (!shouldObserve)
      return;
    var options = {
      root: root2 === null || root2 === void 0 ? void 0 : root2.current,
      rootMargin,
      threshold: typeof amount === "number" ? amount : thresholdNames[amount]
    };
    var intersectionCallback = function(entry) {
      var _a2;
      var isIntersecting = entry.isIntersecting;
      if (state.isInView === isIntersecting)
        return;
      state.isInView = isIntersecting;
      if (once && !isIntersecting && state.hasEnteredView) {
        return;
      } else if (isIntersecting) {
        state.hasEnteredView = true;
      }
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, isIntersecting);
      var props = visualElement2.getProps();
      var callback = isIntersecting ? props.onViewportEnter : props.onViewportLeave;
      callback === null || callback === void 0 ? void 0 : callback(entry);
    };
    return observeIntersection(visualElement2.getInstance(), options, intersectionCallback);
  }, [shouldObserve, root2, rootMargin, amount]);
}
function useMissingIntersectionObserver(shouldObserve, state, visualElement2, _a) {
  var _b = _a.fallback, fallback = _b === void 0 ? true : _b;
  (0, import_react24.useEffect)(function() {
    if (!shouldObserve || !fallback)
      return;
    if (env !== "production") {
      warnOnce(false, "IntersectionObserver not available on this device. whileInView animations will trigger on mount.");
    }
    requestAnimationFrame(function() {
      var _a2;
      state.hasEnteredView = true;
      var onViewportEnter = visualElement2.getProps().onViewportEnter;
      onViewportEnter === null || onViewportEnter === void 0 ? void 0 : onViewportEnter(null);
      (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.InView, true);
    });
  }, [shouldObserve]);
}

// node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.mjs
var makeRenderlessComponent = function(hook) {
  return function(props) {
    hook(props);
    return null;
  };
};

// node_modules/framer-motion/dist/es/motion/features/gestures.mjs
var gestureAnimations = {
  inView: makeRenderlessComponent(useViewport),
  tap: makeRenderlessComponent(useTapGesture),
  focus: makeRenderlessComponent(useFocusGesture),
  hover: makeRenderlessComponent(useHoverGesture)
};

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var import_react26 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
var import_react25 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/utils/use-id.mjs
var counter = 0;
var incrementId = function() {
  return counter++;
};
var useId = function() {
  return useConstant(incrementId);
};

// node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.mjs
function usePresence() {
  var context = (0, import_react25.useContext)(PresenceContext);
  if (context === null)
    return [true, null];
  var isPresent = context.isPresent, onExitComplete = context.onExitComplete, register = context.register;
  var id2 = useId();
  (0, import_react25.useEffect)(function() {
    return register(id2);
  }, []);
  var safeToRemove = function() {
    return onExitComplete === null || onExitComplete === void 0 ? void 0 : onExitComplete(id2);
  };
  return !isPresent && onExitComplete ? [false, safeToRemove] : [true];
}

// node_modules/framer-motion/dist/es/utils/shallow-compare.mjs
function shallowCompare(next, prev) {
  if (!Array.isArray(prev))
    return false;
  var prevLength = prev.length;
  if (prevLength !== next.length)
    return false;
  for (var i = 0; i < prevLength; i++) {
    if (prev[i] !== next[i])
      return false;
  }
  return true;
}

// node_modules/framer-motion/dist/es/utils/time-conversion.mjs
var secondsToMilliseconds = function(seconds) {
  return seconds * 1e3;
};

// node_modules/framer-motion/dist/es/animation/utils/easing.mjs
var easingLookup = {
  linear,
  easeIn,
  easeInOut,
  easeOut,
  circIn,
  circInOut,
  circOut,
  backIn,
  backInOut,
  backOut,
  anticipate,
  bounceIn,
  bounceInOut,
  bounceOut
};
var easingDefinitionToFunction = function(definition) {
  if (Array.isArray(definition)) {
    invariant(definition.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var _a = __read(definition, 4), x1 = _a[0], y1 = _a[1], x2 = _a[2], y2 = _a[3];
    return cubicBezier(x1, y1, x2, y2);
  } else if (typeof definition === "string") {
    invariant(easingLookup[definition] !== void 0, "Invalid easing type '".concat(definition, "'"));
    return easingLookup[definition];
  }
  return definition;
};
var isEasingArray = function(ease) {
  return Array.isArray(ease) && typeof ease[0] !== "number";
};

// node_modules/framer-motion/dist/es/animation/utils/is-animatable.mjs
var isAnimatable = function(key, value) {
  if (key === "zIndex")
    return false;
  if (typeof value === "number" || Array.isArray(value))
    return true;
  if (typeof value === "string" && complex.test(value) && !value.startsWith("url(")) {
    return true;
  }
  return false;
};

// node_modules/framer-motion/dist/es/animation/utils/default-transitions.mjs
var underDampedSpring = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
};
var criticallyDampedSpring = function(to) {
  return {
    type: "spring",
    stiffness: 550,
    damping: to === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
};
var linearTween = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
};
var keyframes2 = function(values) {
  return {
    type: "keyframes",
    duration: 0.8,
    values
  };
};
var defaultTransitions = {
  x: underDampedSpring,
  y: underDampedSpring,
  z: underDampedSpring,
  rotate: underDampedSpring,
  rotateX: underDampedSpring,
  rotateY: underDampedSpring,
  rotateZ: underDampedSpring,
  scaleX: criticallyDampedSpring,
  scaleY: criticallyDampedSpring,
  scale: criticallyDampedSpring,
  opacity: linearTween,
  backgroundColor: linearTween,
  color: linearTween,
  default: criticallyDampedSpring
};
var getDefaultTransition = function(valueKey, to) {
  var transitionFactory;
  if (isKeyframesTarget(to)) {
    transitionFactory = keyframes2;
  } else {
    transitionFactory = defaultTransitions[valueKey] || defaultTransitions.default;
  }
  return __assign({ to }, transitionFactory(to));
};

// node_modules/framer-motion/dist/es/render/dom/value-types/defaults.mjs
var defaultValueTypes = __assign(__assign({}, numberValueTypes), {
  color,
  backgroundColor: color,
  outlineColor: color,
  fill: color,
  stroke: color,
  borderColor: color,
  borderTopColor: color,
  borderRightColor: color,
  borderBottomColor: color,
  borderLeftColor: color,
  filter,
  WebkitFilter: filter
});
var getDefaultValueType = function(key) {
  return defaultValueTypes[key];
};

// node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.mjs
function getAnimatableNone2(key, value) {
  var _a;
  var defaultValueType = getDefaultValueType(key);
  if (defaultValueType !== filter)
    defaultValueType = complex;
  return (_a = defaultValueType.getAnimatableNone) === null || _a === void 0 ? void 0 : _a.call(defaultValueType, value);
}

// node_modules/framer-motion/dist/es/utils/use-instant-transition-state.mjs
var instantAnimationState = {
  current: false
};

// node_modules/framer-motion/dist/es/animation/utils/transitions.mjs
function isTransitionDefined(_a) {
  _a.when;
  _a.delay;
  _a.delayChildren;
  _a.staggerChildren;
  _a.staggerDirection;
  _a.repeat;
  _a.repeatType;
  _a.repeatDelay;
  _a.from;
  var transition = __rest(_a, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(transition).length;
}
var legacyRepeatWarning = false;
function convertTransitionToAnimationOptions(_a) {
  var ease = _a.ease, times = _a.times, yoyo = _a.yoyo, flip = _a.flip, loop = _a.loop, transition = __rest(_a, ["ease", "times", "yoyo", "flip", "loop"]);
  var options = __assign({}, transition);
  if (times)
    options["offset"] = times;
  if (transition.duration)
    options["duration"] = secondsToMilliseconds(transition.duration);
  if (transition.repeatDelay)
    options.repeatDelay = secondsToMilliseconds(transition.repeatDelay);
  if (ease) {
    options["ease"] = isEasingArray(ease) ? ease.map(easingDefinitionToFunction) : easingDefinitionToFunction(ease);
  }
  if (transition.type === "tween")
    options.type = "keyframes";
  if (yoyo || loop || flip) {
    warning(!legacyRepeatWarning, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options.");
    legacyRepeatWarning = true;
    if (yoyo) {
      options.repeatType = "reverse";
    } else if (loop) {
      options.repeatType = "loop";
    } else if (flip) {
      options.repeatType = "mirror";
    }
    options.repeat = loop || yoyo || flip || transition.repeat;
  }
  if (transition.type !== "spring")
    options.type = "keyframes";
  return options;
}
function getDelayFromTransition(transition, key) {
  var _a, _b;
  var valueTransition = getValueTransition(transition, key) || {};
  return (_b = (_a = valueTransition.delay) !== null && _a !== void 0 ? _a : transition.delay) !== null && _b !== void 0 ? _b : 0;
}
function hydrateKeyframes(options) {
  if (Array.isArray(options.to) && options.to[0] === null) {
    options.to = __spreadArray([], __read(options.to), false);
    options.to[0] = options.from;
  }
  return options;
}
function getPopmotionAnimationOptions(transition, options, key) {
  var _a;
  if (Array.isArray(options.to)) {
    (_a = transition.duration) !== null && _a !== void 0 ? _a : transition.duration = 0.8;
  }
  hydrateKeyframes(options);
  if (!isTransitionDefined(transition)) {
    transition = __assign(__assign({}, transition), getDefaultTransition(key, options.to));
  }
  return __assign(__assign({}, options), convertTransitionToAnimationOptions(transition));
}
function getAnimation(key, value, target, transition, onComplete) {
  var _a;
  var valueTransition = getValueTransition(transition, key);
  var origin = (_a = valueTransition.from) !== null && _a !== void 0 ? _a : value.get();
  var isTargetAnimatable = isAnimatable(key, target);
  if (origin === "none" && isTargetAnimatable && typeof target === "string") {
    origin = getAnimatableNone2(key, target);
  } else if (isZero(origin) && typeof target === "string") {
    origin = getZeroUnit(target);
  } else if (!Array.isArray(target) && isZero(target) && typeof origin === "string") {
    target = getZeroUnit(origin);
  }
  var isOriginAnimatable = isAnimatable(key, origin);
  warning(isOriginAnimatable === isTargetAnimatable, "You are trying to animate ".concat(key, ' from "').concat(origin, '" to "').concat(target, '". ').concat(origin, " is not an animatable value - to enable this animation set ").concat(origin, " to a value animatable to ").concat(target, " via the `style` property."));
  function start() {
    var options = {
      from: origin,
      to: target,
      velocity: value.getVelocity(),
      onComplete,
      onUpdate: function(v) {
        return value.set(v);
      }
    };
    return valueTransition.type === "inertia" || valueTransition.type === "decay" ? inertia(__assign(__assign({}, options), valueTransition)) : animate(__assign(__assign({}, getPopmotionAnimationOptions(valueTransition, options, key)), { onUpdate: function(v) {
      var _a2;
      options.onUpdate(v);
      (_a2 = valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, v);
    }, onComplete: function() {
      var _a2;
      options.onComplete();
      (_a2 = valueTransition.onComplete) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition);
    } }));
  }
  function set() {
    var _a2, _b;
    var finalTarget = resolveFinalValueInKeyframes(target);
    value.set(finalTarget);
    onComplete();
    (_a2 = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onUpdate) === null || _a2 === void 0 ? void 0 : _a2.call(valueTransition, finalTarget);
    (_b = valueTransition === null || valueTransition === void 0 ? void 0 : valueTransition.onComplete) === null || _b === void 0 ? void 0 : _b.call(valueTransition);
    return { stop: function() {
    } };
  }
  return !isOriginAnimatable || !isTargetAnimatable || valueTransition.type === false ? set : start;
}
function isZero(value) {
  return value === 0 || typeof value === "string" && parseFloat(value) === 0 && value.indexOf(" ") === -1;
}
function getZeroUnit(potentialUnitType) {
  return typeof potentialUnitType === "number" ? 0 : getAnimatableNone2("", potentialUnitType);
}
function getValueTransition(transition, key) {
  return transition[key] || transition["default"] || transition;
}
function startAnimation(key, value, target, transition) {
  if (transition === void 0) {
    transition = {};
  }
  if (instantAnimationState.current) {
    transition = { type: false };
  }
  return value.start(function(onComplete) {
    var delayTimer;
    var controls;
    var animation = getAnimation(key, value, target, transition, onComplete);
    var delay2 = getDelayFromTransition(transition, key);
    var start = function() {
      return controls = animation();
    };
    if (delay2) {
      delayTimer = window.setTimeout(start, secondsToMilliseconds(delay2));
    } else {
      start();
    }
    return function() {
      clearTimeout(delayTimer);
      controls === null || controls === void 0 ? void 0 : controls.stop();
    };
  });
}

// node_modules/framer-motion/dist/es/utils/is-numerical-string.mjs
var isNumericalString = function(v) {
  return /^\-?\d*\.?\d+$/.test(v);
};

// node_modules/framer-motion/dist/es/utils/is-zero-value-string.mjs
var isZeroValueString = function(v) {
  return /^0[^.\s]+$/.test(v);
};

// node_modules/framer-motion/dist/es/utils/array.mjs
function addUniqueItem(arr, item) {
  arr.indexOf(item) === -1 && arr.push(item);
}
function removeItem(arr, item) {
  var index2 = arr.indexOf(item);
  index2 > -1 && arr.splice(index2, 1);
}

// node_modules/framer-motion/dist/es/utils/subscription-manager.mjs
var SubscriptionManager = function() {
  function SubscriptionManager2() {
    this.subscriptions = [];
  }
  SubscriptionManager2.prototype.add = function(handler) {
    var _this = this;
    addUniqueItem(this.subscriptions, handler);
    return function() {
      return removeItem(_this.subscriptions, handler);
    };
  };
  SubscriptionManager2.prototype.notify = function(a2, b2, c2) {
    var numSubscriptions = this.subscriptions.length;
    if (!numSubscriptions)
      return;
    if (numSubscriptions === 1) {
      this.subscriptions[0](a2, b2, c2);
    } else {
      for (var i = 0; i < numSubscriptions; i++) {
        var handler = this.subscriptions[i];
        handler && handler(a2, b2, c2);
      }
    }
  };
  SubscriptionManager2.prototype.getSize = function() {
    return this.subscriptions.length;
  };
  SubscriptionManager2.prototype.clear = function() {
    this.subscriptions.length = 0;
  };
  return SubscriptionManager2;
}();

// node_modules/framer-motion/dist/es/value/index.mjs
var isFloat = function(value) {
  return !isNaN(parseFloat(value));
};
var MotionValue = function() {
  function MotionValue2(init) {
    var _this = this;
    this.version = "6.5.1";
    this.timeDelta = 0;
    this.lastUpdated = 0;
    this.updateSubscribers = new SubscriptionManager();
    this.velocityUpdateSubscribers = new SubscriptionManager();
    this.renderSubscribers = new SubscriptionManager();
    this.canTrackVelocity = false;
    this.updateAndNotify = function(v, render) {
      if (render === void 0) {
        render = true;
      }
      _this.prev = _this.current;
      _this.current = v;
      var _a = getFrameData(), delta = _a.delta, timestamp = _a.timestamp;
      if (_this.lastUpdated !== timestamp) {
        _this.timeDelta = delta;
        _this.lastUpdated = timestamp;
        es_default.postRender(_this.scheduleVelocityCheck);
      }
      if (_this.prev !== _this.current) {
        _this.updateSubscribers.notify(_this.current);
      }
      if (_this.velocityUpdateSubscribers.getSize()) {
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
      if (render) {
        _this.renderSubscribers.notify(_this.current);
      }
    };
    this.scheduleVelocityCheck = function() {
      return es_default.postRender(_this.velocityCheck);
    };
    this.velocityCheck = function(_a) {
      var timestamp = _a.timestamp;
      if (timestamp !== _this.lastUpdated) {
        _this.prev = _this.current;
        _this.velocityUpdateSubscribers.notify(_this.getVelocity());
      }
    };
    this.hasAnimated = false;
    this.prev = this.current = init;
    this.canTrackVelocity = isFloat(this.current);
  }
  MotionValue2.prototype.onChange = function(subscription) {
    return this.updateSubscribers.add(subscription);
  };
  MotionValue2.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  };
  MotionValue2.prototype.onRenderRequest = function(subscription) {
    subscription(this.get());
    return this.renderSubscribers.add(subscription);
  };
  MotionValue2.prototype.attach = function(passiveEffect) {
    this.passiveEffect = passiveEffect;
  };
  MotionValue2.prototype.set = function(v, render) {
    if (render === void 0) {
      render = true;
    }
    if (!render || !this.passiveEffect) {
      this.updateAndNotify(v, render);
    } else {
      this.passiveEffect(v, this.updateAndNotify);
    }
  };
  MotionValue2.prototype.get = function() {
    return this.current;
  };
  MotionValue2.prototype.getPrevious = function() {
    return this.prev;
  };
  MotionValue2.prototype.getVelocity = function() {
    return this.canTrackVelocity ? velocityPerSecond(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  };
  MotionValue2.prototype.start = function(animation) {
    var _this = this;
    this.stop();
    return new Promise(function(resolve) {
      _this.hasAnimated = true;
      _this.stopAnimation = animation(resolve);
    }).then(function() {
      return _this.clearAnimation();
    });
  };
  MotionValue2.prototype.stop = function() {
    if (this.stopAnimation)
      this.stopAnimation();
    this.clearAnimation();
  };
  MotionValue2.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  };
  MotionValue2.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  };
  MotionValue2.prototype.destroy = function() {
    this.updateSubscribers.clear();
    this.renderSubscribers.clear();
    this.stop();
  };
  return MotionValue2;
}();
function motionValue(init) {
  return new MotionValue(init);
}

// node_modules/framer-motion/dist/es/render/dom/value-types/test.mjs
var testValueType = function(v) {
  return function(type) {
    return type.test(v);
  };
};

// node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.mjs
var auto = {
  test: function(v) {
    return v === "auto";
  },
  parse: function(v) {
    return v;
  }
};

// node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.mjs
var dimensionValueTypes = [number, px, percent, degrees, vw, vh, auto];
var findDimensionValueType = function(v) {
  return dimensionValueTypes.find(testValueType(v));
};

// node_modules/framer-motion/dist/es/render/dom/value-types/find.mjs
var valueTypes = __spreadArray(__spreadArray([], __read(dimensionValueTypes), false), [color, complex], false);
var findValueType = function(v) {
  return valueTypes.find(testValueType(v));
};

// node_modules/framer-motion/dist/es/render/utils/setters.mjs
function setMotionValue(visualElement2, key, value) {
  if (visualElement2.hasValue(key)) {
    visualElement2.getValue(key).set(value);
  } else {
    visualElement2.addValue(key, motionValue(value));
  }
}
function setTarget(visualElement2, definition) {
  var resolved = resolveVariant(visualElement2, definition);
  var _a = resolved ? visualElement2.makeTargetAnimatable(resolved, false) : {}, _b = _a.transitionEnd, transitionEnd = _b === void 0 ? {} : _b;
  _a.transition;
  var target = __rest(_a, ["transitionEnd", "transition"]);
  target = __assign(__assign({}, target), transitionEnd);
  for (var key in target) {
    var value = resolveFinalValueInKeyframes(target[key]);
    setMotionValue(visualElement2, key, value);
  }
}
function checkTargetForNewValues(visualElement2, target, origin) {
  var _a, _b, _c;
  var _d;
  var newValueKeys = Object.keys(target).filter(function(key2) {
    return !visualElement2.hasValue(key2);
  });
  var numNewValues = newValueKeys.length;
  if (!numNewValues)
    return;
  for (var i = 0; i < numNewValues; i++) {
    var key = newValueKeys[i];
    var targetValue = target[key];
    var value = null;
    if (Array.isArray(targetValue)) {
      value = targetValue[0];
    }
    if (value === null) {
      value = (_b = (_a = origin[key]) !== null && _a !== void 0 ? _a : visualElement2.readValue(key)) !== null && _b !== void 0 ? _b : target[key];
    }
    if (value === void 0 || value === null)
      continue;
    if (typeof value === "string" && (isNumericalString(value) || isZeroValueString(value))) {
      value = parseFloat(value);
    } else if (!findValueType(value) && complex.test(targetValue)) {
      value = getAnimatableNone2(key, targetValue);
    }
    visualElement2.addValue(key, motionValue(value));
    (_c = (_d = origin)[key]) !== null && _c !== void 0 ? _c : _d[key] = value;
    visualElement2.setBaseTarget(key, value);
  }
}
function getOriginFromTransition(key, transition) {
  if (!transition)
    return;
  var valueTransition = transition[key] || transition["default"] || transition;
  return valueTransition.from;
}
function getOrigin(target, transition, visualElement2) {
  var _a, _b;
  var origin = {};
  for (var key in target) {
    origin[key] = (_a = getOriginFromTransition(key, transition)) !== null && _a !== void 0 ? _a : (_b = visualElement2.getValue(key)) === null || _b === void 0 ? void 0 : _b.get();
  }
  return origin;
}

// node_modules/framer-motion/dist/es/render/utils/animation.mjs
function animateVisualElement(visualElement2, definition, options) {
  if (options === void 0) {
    options = {};
  }
  visualElement2.notifyAnimationStart(definition);
  var animation;
  if (Array.isArray(definition)) {
    var animations2 = definition.map(function(variant) {
      return animateVariant(visualElement2, variant, options);
    });
    animation = Promise.all(animations2);
  } else if (typeof definition === "string") {
    animation = animateVariant(visualElement2, definition, options);
  } else {
    var resolvedDefinition = typeof definition === "function" ? resolveVariant(visualElement2, definition, options.custom) : definition;
    animation = animateTarget(visualElement2, resolvedDefinition, options);
  }
  return animation.then(function() {
    return visualElement2.notifyAnimationComplete(definition);
  });
}
function animateVariant(visualElement2, variant, options) {
  var _a;
  if (options === void 0) {
    options = {};
  }
  var resolved = resolveVariant(visualElement2, variant, options.custom);
  var _b = (resolved || {}).transition, transition = _b === void 0 ? visualElement2.getDefaultTransition() || {} : _b;
  if (options.transitionOverride) {
    transition = options.transitionOverride;
  }
  var getAnimation2 = resolved ? function() {
    return animateTarget(visualElement2, resolved, options);
  } : function() {
    return Promise.resolve();
  };
  var getChildAnimations = ((_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.size) ? function(forwardDelay) {
    if (forwardDelay === void 0) {
      forwardDelay = 0;
    }
    var _a2 = transition.delayChildren, delayChildren = _a2 === void 0 ? 0 : _a2, staggerChildren = transition.staggerChildren, staggerDirection = transition.staggerDirection;
    return animateChildren(visualElement2, variant, delayChildren + forwardDelay, staggerChildren, staggerDirection, options);
  } : function() {
    return Promise.resolve();
  };
  var when = transition.when;
  if (when) {
    var _c = __read(when === "beforeChildren" ? [getAnimation2, getChildAnimations] : [getChildAnimations, getAnimation2], 2), first = _c[0], last = _c[1];
    return first().then(last);
  } else {
    return Promise.all([getAnimation2(), getChildAnimations(options.delay)]);
  }
}
function animateTarget(visualElement2, definition, _a) {
  var _b;
  var _c = _a === void 0 ? {} : _a, _d = _c.delay, delay2 = _d === void 0 ? 0 : _d, transitionOverride = _c.transitionOverride, type = _c.type;
  var _e = visualElement2.makeTargetAnimatable(definition), _f = _e.transition, transition = _f === void 0 ? visualElement2.getDefaultTransition() : _f, transitionEnd = _e.transitionEnd, target = __rest(_e, ["transition", "transitionEnd"]);
  if (transitionOverride)
    transition = transitionOverride;
  var animations2 = [];
  var animationTypeState = type && ((_b = visualElement2.animationState) === null || _b === void 0 ? void 0 : _b.getState()[type]);
  for (var key in target) {
    var value = visualElement2.getValue(key);
    var valueTarget = target[key];
    if (!value || valueTarget === void 0 || animationTypeState && shouldBlockAnimation(animationTypeState, key)) {
      continue;
    }
    var valueTransition = __assign({ delay: delay2 }, transition);
    if (visualElement2.shouldReduceMotion && isTransformProp(key)) {
      valueTransition = __assign(__assign({}, valueTransition), { type: false, delay: 0 });
    }
    var animation = startAnimation(key, value, valueTarget, valueTransition);
    animations2.push(animation);
  }
  return Promise.all(animations2).then(function() {
    transitionEnd && setTarget(visualElement2, transitionEnd);
  });
}
function animateChildren(visualElement2, variant, delayChildren, staggerChildren, staggerDirection, options) {
  if (delayChildren === void 0) {
    delayChildren = 0;
  }
  if (staggerChildren === void 0) {
    staggerChildren = 0;
  }
  if (staggerDirection === void 0) {
    staggerDirection = 1;
  }
  var animations2 = [];
  var maxStaggerDuration = (visualElement2.variantChildren.size - 1) * staggerChildren;
  var generateStaggerDuration = staggerDirection === 1 ? function(i) {
    if (i === void 0) {
      i = 0;
    }
    return i * staggerChildren;
  } : function(i) {
    if (i === void 0) {
      i = 0;
    }
    return maxStaggerDuration - i * staggerChildren;
  };
  Array.from(visualElement2.variantChildren).sort(sortByTreeOrder).forEach(function(child, i) {
    animations2.push(animateVariant(child, variant, __assign(__assign({}, options), { delay: delayChildren + generateStaggerDuration(i) })).then(function() {
      return child.notifyAnimationComplete(variant);
    }));
  });
  return Promise.all(animations2);
}
function sortByTreeOrder(a2, b2) {
  return a2.sortNodePosition(b2);
}
function shouldBlockAnimation(_a, key) {
  var protectedKeys = _a.protectedKeys, needsAnimating = _a.needsAnimating;
  var shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
  needsAnimating[key] = false;
  return shouldBlock;
}

// node_modules/framer-motion/dist/es/render/utils/animation-state.mjs
var variantPriorityOrder = [
  AnimationType.Animate,
  AnimationType.InView,
  AnimationType.Focus,
  AnimationType.Hover,
  AnimationType.Tap,
  AnimationType.Drag,
  AnimationType.Exit
];
var reversePriorityOrder = __spreadArray([], __read(variantPriorityOrder), false).reverse();
var numAnimationTypes = variantPriorityOrder.length;
function animateList(visualElement2) {
  return function(animations2) {
    return Promise.all(animations2.map(function(_a) {
      var animation = _a.animation, options = _a.options;
      return animateVisualElement(visualElement2, animation, options);
    }));
  };
}
function createAnimationState(visualElement2) {
  var animate3 = animateList(visualElement2);
  var state = createState();
  var allAnimatedKeys = {};
  var isInitialRender = true;
  var buildResolvedTypeValues = function(acc, definition) {
    var resolved = resolveVariant(visualElement2, definition);
    if (resolved) {
      resolved.transition;
      var transitionEnd = resolved.transitionEnd, target = __rest(resolved, ["transition", "transitionEnd"]);
      acc = __assign(__assign(__assign({}, acc), target), transitionEnd);
    }
    return acc;
  };
  function isAnimated(key) {
    return allAnimatedKeys[key] !== void 0;
  }
  function setAnimateFunction(makeAnimator) {
    animate3 = makeAnimator(visualElement2);
  }
  function animateChanges(options, changedActiveType) {
    var _a;
    var props = visualElement2.getProps();
    var context = visualElement2.getVariantContext(true) || {};
    var animations2 = [];
    var removedKeys = /* @__PURE__ */ new Set();
    var encounteredKeys = {};
    var removedVariantIndex = Infinity;
    var _loop_1 = function(i2) {
      var type = reversePriorityOrder[i2];
      var typeState = state[type];
      var prop = (_a = props[type]) !== null && _a !== void 0 ? _a : context[type];
      var propIsVariant = isVariantLabel(prop);
      var activeDelta = type === changedActiveType ? typeState.isActive : null;
      if (activeDelta === false)
        removedVariantIndex = i2;
      var isInherited = prop === context[type] && prop !== props[type] && propIsVariant;
      if (isInherited && isInitialRender && visualElement2.manuallyAnimateOnMount) {
        isInherited = false;
      }
      typeState.protectedKeys = __assign({}, encounteredKeys);
      if (!typeState.isActive && activeDelta === null || !prop && !typeState.prevProp || isAnimationControls(prop) || typeof prop === "boolean") {
        return "continue";
      }
      var variantDidChange = checkVariantsDidChange(typeState.prevProp, prop);
      var shouldAnimateType = variantDidChange || type === changedActiveType && typeState.isActive && !isInherited && propIsVariant || i2 > removedVariantIndex && propIsVariant;
      var definitionList = Array.isArray(prop) ? prop : [prop];
      var resolvedValues = definitionList.reduce(buildResolvedTypeValues, {});
      if (activeDelta === false)
        resolvedValues = {};
      var _b = typeState.prevResolvedValues, prevResolvedValues = _b === void 0 ? {} : _b;
      var allKeys = __assign(__assign({}, prevResolvedValues), resolvedValues);
      var markToAnimate = function(key2) {
        shouldAnimateType = true;
        removedKeys.delete(key2);
        typeState.needsAnimating[key2] = true;
      };
      for (var key in allKeys) {
        var next = resolvedValues[key];
        var prev = prevResolvedValues[key];
        if (encounteredKeys.hasOwnProperty(key))
          continue;
        if (next !== prev) {
          if (isKeyframesTarget(next) && isKeyframesTarget(prev)) {
            if (!shallowCompare(next, prev) || variantDidChange) {
              markToAnimate(key);
            } else {
              typeState.protectedKeys[key] = true;
            }
          } else if (next !== void 0) {
            markToAnimate(key);
          } else {
            removedKeys.add(key);
          }
        } else if (next !== void 0 && removedKeys.has(key)) {
          markToAnimate(key);
        } else {
          typeState.protectedKeys[key] = true;
        }
      }
      typeState.prevProp = prop;
      typeState.prevResolvedValues = resolvedValues;
      if (typeState.isActive) {
        encounteredKeys = __assign(__assign({}, encounteredKeys), resolvedValues);
      }
      if (isInitialRender && visualElement2.blockInitialAnimation) {
        shouldAnimateType = false;
      }
      if (shouldAnimateType && !isInherited) {
        animations2.push.apply(animations2, __spreadArray([], __read(definitionList.map(function(animation) {
          return {
            animation,
            options: __assign({ type }, options)
          };
        })), false));
      }
    };
    for (var i = 0; i < numAnimationTypes; i++) {
      _loop_1(i);
    }
    allAnimatedKeys = __assign({}, encounteredKeys);
    if (removedKeys.size) {
      var fallbackAnimation_1 = {};
      removedKeys.forEach(function(key) {
        var fallbackTarget = visualElement2.getBaseTarget(key);
        if (fallbackTarget !== void 0) {
          fallbackAnimation_1[key] = fallbackTarget;
        }
      });
      animations2.push({ animation: fallbackAnimation_1 });
    }
    var shouldAnimate = Boolean(animations2.length);
    if (isInitialRender && props.initial === false && !visualElement2.manuallyAnimateOnMount) {
      shouldAnimate = false;
    }
    isInitialRender = false;
    return shouldAnimate ? animate3(animations2) : Promise.resolve();
  }
  function setActive(type, isActive, options) {
    var _a;
    if (state[type].isActive === isActive)
      return Promise.resolve();
    (_a = visualElement2.variantChildren) === null || _a === void 0 ? void 0 : _a.forEach(function(child) {
      var _a2;
      return (_a2 = child.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(type, isActive);
    });
    state[type].isActive = isActive;
    var animations2 = animateChanges(options, type);
    for (var key in state) {
      state[key].protectedKeys = {};
    }
    return animations2;
  }
  return {
    isAnimated,
    animateChanges,
    setActive,
    setAnimateFunction,
    getState: function() {
      return state;
    }
  };
}
function checkVariantsDidChange(prev, next) {
  if (typeof next === "string") {
    return next !== prev;
  } else if (isVariantLabels(next)) {
    return !shallowCompare(next, prev);
  }
  return false;
}
function createTypeState(isActive) {
  if (isActive === void 0) {
    isActive = false;
  }
  return {
    isActive,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function createState() {
  var _a;
  return _a = {}, _a[AnimationType.Animate] = createTypeState(true), _a[AnimationType.InView] = createTypeState(), _a[AnimationType.Hover] = createTypeState(), _a[AnimationType.Tap] = createTypeState(), _a[AnimationType.Drag] = createTypeState(), _a[AnimationType.Focus] = createTypeState(), _a[AnimationType.Exit] = createTypeState(), _a;
}

// node_modules/framer-motion/dist/es/motion/features/animations.mjs
var animations = {
  animation: makeRenderlessComponent(function(_a) {
    var visualElement2 = _a.visualElement, animate3 = _a.animate;
    visualElement2.animationState || (visualElement2.animationState = createAnimationState(visualElement2));
    if (isAnimationControls(animate3)) {
      (0, import_react26.useEffect)(function() {
        return animate3.subscribe(visualElement2);
      }, [animate3]);
    }
  }),
  exit: makeRenderlessComponent(function(props) {
    var custom = props.custom, visualElement2 = props.visualElement;
    var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
    var presenceContext = (0, import_react26.useContext)(PresenceContext);
    (0, import_react26.useEffect)(function() {
      var _a2, _b;
      visualElement2.isPresent = isPresent;
      var animation = (_a2 = visualElement2.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Exit, !isPresent, { custom: (_b = presenceContext === null || presenceContext === void 0 ? void 0 : presenceContext.custom) !== null && _b !== void 0 ? _b : custom });
      !isPresent && (animation === null || animation === void 0 ? void 0 : animation.then(safeToRemove));
    }, [isPresent]);
  })
};

// node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
var import_react27 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/gestures/PanSession.mjs
var PanSession = function() {
  function PanSession2(event, handlers, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, transformPagePoint = _b.transformPagePoint;
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.handlers = {};
    this.updatePoint = function() {
      if (!(_this.lastMoveEvent && _this.lastMoveEventInfo))
        return;
      var info2 = getPanInfo(_this.lastMoveEventInfo, _this.history);
      var isPanStarted = _this.startEvent !== null;
      var isDistancePastThreshold = distance(info2.offset, { x: 0, y: 0 }) >= 3;
      if (!isPanStarted && !isDistancePastThreshold)
        return;
      var point2 = info2.point;
      var timestamp2 = getFrameData().timestamp;
      _this.history.push(__assign(__assign({}, point2), { timestamp: timestamp2 }));
      var _a2 = _this.handlers, onStart = _a2.onStart, onMove = _a2.onMove;
      if (!isPanStarted) {
        onStart && onStart(_this.lastMoveEvent, info2);
        _this.startEvent = _this.lastMoveEvent;
      }
      onMove && onMove(_this.lastMoveEvent, info2);
    };
    this.handlePointerMove = function(event2, info2) {
      _this.lastMoveEvent = event2;
      _this.lastMoveEventInfo = transformPoint(info2, _this.transformPagePoint);
      if (isMouseEvent(event2) && event2.buttons === 0) {
        _this.handlePointerUp(event2, info2);
        return;
      }
      es_default.update(_this.updatePoint, true);
    };
    this.handlePointerUp = function(event2, info2) {
      _this.end();
      var _a2 = _this.handlers, onEnd = _a2.onEnd, onSessionEnd = _a2.onSessionEnd;
      var panInfo = getPanInfo(transformPoint(info2, _this.transformPagePoint), _this.history);
      if (_this.startEvent && onEnd) {
        onEnd(event2, panInfo);
      }
      onSessionEnd && onSessionEnd(event2, panInfo);
    };
    if (isTouchEvent(event) && event.touches.length > 1)
      return;
    this.handlers = handlers;
    this.transformPagePoint = transformPagePoint;
    var info = extractEventInfo(event);
    var initialInfo = transformPoint(info, this.transformPagePoint);
    var point = initialInfo.point;
    var timestamp = getFrameData().timestamp;
    this.history = [__assign(__assign({}, point), { timestamp })];
    var onSessionStart = handlers.onSessionStart;
    onSessionStart && onSessionStart(event, getPanInfo(initialInfo, this.history));
    this.removeListeners = pipe(addPointerEvent(window, "pointermove", this.handlePointerMove), addPointerEvent(window, "pointerup", this.handlePointerUp), addPointerEvent(window, "pointercancel", this.handlePointerUp));
  }
  PanSession2.prototype.updateHandlers = function(handlers) {
    this.handlers = handlers;
  };
  PanSession2.prototype.end = function() {
    this.removeListeners && this.removeListeners();
    cancelSync.update(this.updatePoint);
  };
  return PanSession2;
}();
function transformPoint(info, transformPagePoint) {
  return transformPagePoint ? { point: transformPagePoint(info.point) } : info;
}
function subtractPoint(a2, b2) {
  return { x: a2.x - b2.x, y: a2.y - b2.y };
}
function getPanInfo(_a, history) {
  var point = _a.point;
  return {
    point,
    delta: subtractPoint(point, lastDevicePoint(history)),
    offset: subtractPoint(point, startDevicePoint(history)),
    velocity: getVelocity2(history, 0.1)
  };
}
function startDevicePoint(history) {
  return history[0];
}
function lastDevicePoint(history) {
  return history[history.length - 1];
}
function getVelocity2(history, timeDelta) {
  if (history.length < 2) {
    return { x: 0, y: 0 };
  }
  var i = history.length - 1;
  var timestampedPoint = null;
  var lastPoint = lastDevicePoint(history);
  while (i >= 0) {
    timestampedPoint = history[i];
    if (lastPoint.timestamp - timestampedPoint.timestamp > secondsToMilliseconds(timeDelta)) {
      break;
    }
    i--;
  }
  if (!timestampedPoint) {
    return { x: 0, y: 0 };
  }
  var time = (lastPoint.timestamp - timestampedPoint.timestamp) / 1e3;
  if (time === 0) {
    return { x: 0, y: 0 };
  }
  var currentVelocity = {
    x: (lastPoint.x - timestampedPoint.x) / time,
    y: (lastPoint.y - timestampedPoint.y) / time
  };
  if (currentVelocity.x === Infinity) {
    currentVelocity.x = 0;
  }
  if (currentVelocity.y === Infinity) {
    currentVelocity.y = 0;
  }
  return currentVelocity;
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-calc.mjs
function calcLength(axis) {
  return axis.max - axis.min;
}
function isNear(value, target, maxDistance) {
  if (target === void 0) {
    target = 0;
  }
  if (maxDistance === void 0) {
    maxDistance = 0.01;
  }
  return distance(value, target) < maxDistance;
}
function calcAxisDelta(delta, source, target, origin) {
  if (origin === void 0) {
    origin = 0.5;
  }
  delta.origin = origin;
  delta.originPoint = mix(source.min, source.max, delta.origin);
  delta.scale = calcLength(target) / calcLength(source);
  if (isNear(delta.scale, 1, 1e-4) || isNaN(delta.scale))
    delta.scale = 1;
  delta.translate = mix(target.min, target.max, delta.origin) - delta.originPoint;
  if (isNear(delta.translate) || isNaN(delta.translate))
    delta.translate = 0;
}
function calcBoxDelta(delta, source, target, origin) {
  calcAxisDelta(delta.x, source.x, target.x, origin === null || origin === void 0 ? void 0 : origin.originX);
  calcAxisDelta(delta.y, source.y, target.y, origin === null || origin === void 0 ? void 0 : origin.originY);
}
function calcRelativeAxis(target, relative, parent2) {
  target.min = parent2.min + relative.min;
  target.max = target.min + calcLength(relative);
}
function calcRelativeBox(target, relative, parent2) {
  calcRelativeAxis(target.x, relative.x, parent2.x);
  calcRelativeAxis(target.y, relative.y, parent2.y);
}
function calcRelativeAxisPosition(target, layout, parent2) {
  target.min = layout.min - parent2.min;
  target.max = target.min + calcLength(layout);
}
function calcRelativePosition(target, layout, parent2) {
  calcRelativeAxisPosition(target.x, layout.x, parent2.x);
  calcRelativeAxisPosition(target.y, layout.y, parent2.y);
}

// node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.mjs
function applyConstraints(point, _a, elastic) {
  var min = _a.min, max = _a.max;
  if (min !== void 0 && point < min) {
    point = elastic ? mix(min, point, elastic.min) : Math.max(point, min);
  } else if (max !== void 0 && point > max) {
    point = elastic ? mix(max, point, elastic.max) : Math.min(point, max);
  }
  return point;
}
function calcRelativeAxisConstraints(axis, min, max) {
  return {
    min: min !== void 0 ? axis.min + min : void 0,
    max: max !== void 0 ? axis.max + max - (axis.max - axis.min) : void 0
  };
}
function calcRelativeConstraints(layoutBox, _a) {
  var top = _a.top, left = _a.left, bottom = _a.bottom, right = _a.right;
  return {
    x: calcRelativeAxisConstraints(layoutBox.x, left, right),
    y: calcRelativeAxisConstraints(layoutBox.y, top, bottom)
  };
}
function calcViewportAxisConstraints(layoutAxis, constraintsAxis) {
  var _a;
  var min = constraintsAxis.min - layoutAxis.min;
  var max = constraintsAxis.max - layoutAxis.max;
  if (constraintsAxis.max - constraintsAxis.min < layoutAxis.max - layoutAxis.min) {
    _a = __read([max, min], 2), min = _a[0], max = _a[1];
  }
  return { min, max };
}
function calcViewportConstraints(layoutBox, constraintsBox) {
  return {
    x: calcViewportAxisConstraints(layoutBox.x, constraintsBox.x),
    y: calcViewportAxisConstraints(layoutBox.y, constraintsBox.y)
  };
}
function calcOrigin2(source, target) {
  var origin = 0.5;
  var sourceLength = calcLength(source);
  var targetLength = calcLength(target);
  if (targetLength > sourceLength) {
    origin = progress(target.min, target.max - sourceLength, source.min);
  } else if (sourceLength > targetLength) {
    origin = progress(source.min, source.max - targetLength, target.min);
  }
  return clamp2(0, 1, origin);
}
function rebaseAxisConstraints(layout, constraints) {
  var relativeConstraints = {};
  if (constraints.min !== void 0) {
    relativeConstraints.min = constraints.min - layout.min;
  }
  if (constraints.max !== void 0) {
    relativeConstraints.max = constraints.max - layout.min;
  }
  return relativeConstraints;
}
var defaultElastic = 0.35;
function resolveDragElastic(dragElastic) {
  if (dragElastic === void 0) {
    dragElastic = defaultElastic;
  }
  if (dragElastic === false) {
    dragElastic = 0;
  } else if (dragElastic === true) {
    dragElastic = defaultElastic;
  }
  return {
    x: resolveAxisElastic(dragElastic, "left", "right"),
    y: resolveAxisElastic(dragElastic, "top", "bottom")
  };
}
function resolveAxisElastic(dragElastic, minLabel, maxLabel) {
  return {
    min: resolvePointElastic(dragElastic, minLabel),
    max: resolvePointElastic(dragElastic, maxLabel)
  };
}
function resolvePointElastic(dragElastic, label) {
  var _a;
  return typeof dragElastic === "number" ? dragElastic : (_a = dragElastic[label]) !== null && _a !== void 0 ? _a : 0;
}

// node_modules/framer-motion/dist/es/projection/geometry/models.mjs
var createAxisDelta = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
};
var createDelta = function() {
  return {
    x: createAxisDelta(),
    y: createAxisDelta()
  };
};
var createAxis = function() {
  return { min: 0, max: 0 };
};
var createBox = function() {
  return {
    x: createAxis(),
    y: createAxis()
  };
};

// node_modules/framer-motion/dist/es/projection/utils/each-axis.mjs
function eachAxis(callback) {
  return [callback("x"), callback("y")];
}

// node_modules/framer-motion/dist/es/projection/geometry/conversion.mjs
function convertBoundingBoxToBox(_a) {
  var top = _a.top, left = _a.left, right = _a.right, bottom = _a.bottom;
  return {
    x: { min: left, max: right },
    y: { min: top, max: bottom }
  };
}
function convertBoxToBoundingBox(_a) {
  var x = _a.x, y = _a.y;
  return { top: y.min, right: x.max, bottom: y.max, left: x.min };
}
function transformBoxPoints(point, transformPoint2) {
  if (!transformPoint2)
    return point;
  var topLeft = transformPoint2({ x: point.left, y: point.top });
  var bottomRight = transformPoint2({ x: point.right, y: point.bottom });
  return {
    top: topLeft.y,
    left: topLeft.x,
    bottom: bottomRight.y,
    right: bottomRight.x
  };
}

// node_modules/framer-motion/dist/es/projection/utils/has-transform.mjs
function isIdentityScale(scale2) {
  return scale2 === void 0 || scale2 === 1;
}
function hasScale(_a) {
  var scale2 = _a.scale, scaleX = _a.scaleX, scaleY = _a.scaleY;
  return !isIdentityScale(scale2) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
  return hasScale(values) || hasTranslate(values.x) || hasTranslate(values.y) || values.z || values.rotate || values.rotateX || values.rotateY;
}
function hasTranslate(value) {
  return value && value !== "0%";
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-apply.mjs
function scalePoint(point, scale2, originPoint) {
  var distanceFromOrigin = point - originPoint;
  var scaled = scale2 * distanceFromOrigin;
  return originPoint + scaled;
}
function applyPointDelta(point, translate, scale2, originPoint, boxScale) {
  if (boxScale !== void 0) {
    point = scalePoint(point, boxScale, originPoint);
  }
  return scalePoint(point, scale2, originPoint) + translate;
}
function applyAxisDelta(axis, translate, scale2, originPoint, boxScale) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  axis.min = applyPointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = applyPointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function applyBoxDelta(box, _a) {
  var x = _a.x, y = _a.y;
  applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
  applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
function applyTreeDeltas(box, treeScale, treePath, isSharedTransition) {
  var _a, _b;
  if (isSharedTransition === void 0) {
    isSharedTransition = false;
  }
  var treeLength = treePath.length;
  if (!treeLength)
    return;
  treeScale.x = treeScale.y = 1;
  var node;
  var delta;
  for (var i = 0; i < treeLength; i++) {
    node = treePath[i];
    delta = node.projectionDelta;
    if (((_b = (_a = node.instance) === null || _a === void 0 ? void 0 : _a.style) === null || _b === void 0 ? void 0 : _b.display) === "contents")
      continue;
    if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) {
      transformBox(box, { x: -node.scroll.x, y: -node.scroll.y });
    }
    if (delta) {
      treeScale.x *= delta.x.scale;
      treeScale.y *= delta.y.scale;
      applyBoxDelta(box, delta);
    }
    if (isSharedTransition && hasTransform(node.latestValues)) {
      transformBox(box, node.latestValues);
    }
  }
}
function translateAxis(axis, distance2) {
  axis.min = axis.min + distance2;
  axis.max = axis.max + distance2;
}
function transformAxis(axis, transforms, _a) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  var axisOrigin = transforms[originKey] !== void 0 ? transforms[originKey] : 0.5;
  var originPoint = mix(axis.min, axis.max, axisOrigin);
  applyAxisDelta(axis, transforms[key], transforms[scaleKey], originPoint, transforms.scale);
}
var xKeys = ["x", "scaleX", "originX"];
var yKeys = ["y", "scaleY", "originY"];
function transformBox(box, transform) {
  transformAxis(box.x, transform, xKeys);
  transformAxis(box.y, transform, yKeys);
}

// node_modules/framer-motion/dist/es/projection/utils/measure.mjs
function measureViewportBox(instance, transformPoint2) {
  return convertBoundingBoxToBox(transformBoxPoints(instance.getBoundingClientRect(), transformPoint2));
}
function measurePageBox(element, rootProjectionNode2, transformPagePoint) {
  var viewportBox = measureViewportBox(element, transformPagePoint);
  var scroll = rootProjectionNode2.scroll;
  if (scroll) {
    translateAxis(viewportBox.x, scroll.x);
    translateAxis(viewportBox.y, scroll.y);
  }
  return viewportBox;
}

// node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.mjs
var elementDragControls = /* @__PURE__ */ new WeakMap();
var VisualElementDragControls = function() {
  function VisualElementDragControls2(visualElement2) {
    this.openGlobalLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = { x: 0, y: 0 };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = createBox();
    this.visualElement = visualElement2;
  }
  VisualElementDragControls2.prototype.start = function(originEvent, _a) {
    var _this = this;
    var _b = _a === void 0 ? {} : _a, _c = _b.snapToCursor, snapToCursor = _c === void 0 ? false : _c;
    if (this.visualElement.isPresent === false)
      return;
    var onSessionStart = function(event) {
      _this.stopAnimation();
      if (snapToCursor) {
        _this.snapToCursor(extractEventInfo(event, "page").point);
      }
    };
    var onStart = function(event, info) {
      var _a2;
      var _b2 = _this.getProps(), drag2 = _b2.drag, dragPropagation = _b2.dragPropagation, onDragStart = _b2.onDragStart;
      if (drag2 && !dragPropagation) {
        if (_this.openGlobalLock)
          _this.openGlobalLock();
        _this.openGlobalLock = getGlobalLock(drag2);
        if (!_this.openGlobalLock)
          return;
      }
      _this.isDragging = true;
      _this.currentDirection = null;
      _this.resolveConstraints();
      if (_this.visualElement.projection) {
        _this.visualElement.projection.isAnimationBlocked = true;
        _this.visualElement.projection.target = void 0;
      }
      eachAxis(function(axis) {
        var _a3, _b3;
        var current = _this.getAxisMotionValue(axis).get() || 0;
        if (percent.test(current)) {
          var measuredAxis = (_b3 = (_a3 = _this.visualElement.projection) === null || _a3 === void 0 ? void 0 : _a3.layout) === null || _b3 === void 0 ? void 0 : _b3.actual[axis];
          if (measuredAxis) {
            var length_1 = calcLength(measuredAxis);
            current = length_1 * (parseFloat(current) / 100);
          }
        }
        _this.originPoint[axis] = current;
      });
      onDragStart === null || onDragStart === void 0 ? void 0 : onDragStart(event, info);
      (_a2 = _this.visualElement.animationState) === null || _a2 === void 0 ? void 0 : _a2.setActive(AnimationType.Drag, true);
    };
    var onMove = function(event, info) {
      var _a2 = _this.getProps(), dragPropagation = _a2.dragPropagation, dragDirectionLock = _a2.dragDirectionLock, onDirectionLock = _a2.onDirectionLock, onDrag = _a2.onDrag;
      if (!dragPropagation && !_this.openGlobalLock)
        return;
      var offset = info.offset;
      if (dragDirectionLock && _this.currentDirection === null) {
        _this.currentDirection = getCurrentDirection(offset);
        if (_this.currentDirection !== null) {
          onDirectionLock === null || onDirectionLock === void 0 ? void 0 : onDirectionLock(_this.currentDirection);
        }
        return;
      }
      _this.updateAxis("x", info.point, offset);
      _this.updateAxis("y", info.point, offset);
      _this.visualElement.syncRender();
      onDrag === null || onDrag === void 0 ? void 0 : onDrag(event, info);
    };
    var onSessionEnd = function(event, info) {
      return _this.stop(event, info);
    };
    this.panSession = new PanSession(originEvent, {
      onSessionStart,
      onStart,
      onMove,
      onSessionEnd
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  };
  VisualElementDragControls2.prototype.stop = function(event, info) {
    var isDragging = this.isDragging;
    this.cancel();
    if (!isDragging)
      return;
    var velocity = info.velocity;
    this.startAnimation(velocity);
    var onDragEnd = this.getProps().onDragEnd;
    onDragEnd === null || onDragEnd === void 0 ? void 0 : onDragEnd(event, info);
  };
  VisualElementDragControls2.prototype.cancel = function() {
    var _a, _b;
    this.isDragging = false;
    if (this.visualElement.projection) {
      this.visualElement.projection.isAnimationBlocked = false;
    }
    (_a = this.panSession) === null || _a === void 0 ? void 0 : _a.end();
    this.panSession = void 0;
    var dragPropagation = this.getProps().dragPropagation;
    if (!dragPropagation && this.openGlobalLock) {
      this.openGlobalLock();
      this.openGlobalLock = null;
    }
    (_b = this.visualElement.animationState) === null || _b === void 0 ? void 0 : _b.setActive(AnimationType.Drag, false);
  };
  VisualElementDragControls2.prototype.updateAxis = function(axis, _point, offset) {
    var drag2 = this.getProps().drag;
    if (!offset || !shouldDrag(axis, drag2, this.currentDirection))
      return;
    var axisValue = this.getAxisMotionValue(axis);
    var next = this.originPoint[axis] + offset[axis];
    if (this.constraints && this.constraints[axis]) {
      next = applyConstraints(next, this.constraints[axis], this.elastic[axis]);
    }
    axisValue.set(next);
  };
  VisualElementDragControls2.prototype.resolveConstraints = function() {
    var _this = this;
    var _a = this.getProps(), dragConstraints = _a.dragConstraints, dragElastic = _a.dragElastic;
    var layout = (this.visualElement.projection || {}).layout;
    var prevConstraints = this.constraints;
    if (dragConstraints && isRefObject(dragConstraints)) {
      if (!this.constraints) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      if (dragConstraints && layout) {
        this.constraints = calcRelativeConstraints(layout.actual, dragConstraints);
      } else {
        this.constraints = false;
      }
    }
    this.elastic = resolveDragElastic(dragElastic);
    if (prevConstraints !== this.constraints && layout && this.constraints && !this.hasMutatedConstraints) {
      eachAxis(function(axis) {
        if (_this.getAxisMotionValue(axis)) {
          _this.constraints[axis] = rebaseAxisConstraints(layout.actual[axis], _this.constraints[axis]);
        }
      });
    }
  };
  VisualElementDragControls2.prototype.resolveRefConstraints = function() {
    var _a = this.getProps(), constraints = _a.dragConstraints, onMeasureDragConstraints = _a.onMeasureDragConstraints;
    if (!constraints || !isRefObject(constraints))
      return false;
    var constraintsElement = constraints.current;
    invariant(constraintsElement !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var projection = this.visualElement.projection;
    if (!projection || !projection.layout)
      return false;
    var constraintsBox = measurePageBox(constraintsElement, projection.root, this.visualElement.getTransformPagePoint());
    var measuredConstraints = calcViewportConstraints(projection.layout.actual, constraintsBox);
    if (onMeasureDragConstraints) {
      var userConstraints = onMeasureDragConstraints(convertBoxToBoundingBox(measuredConstraints));
      this.hasMutatedConstraints = !!userConstraints;
      if (userConstraints) {
        measuredConstraints = convertBoundingBoxToBox(userConstraints);
      }
    }
    return measuredConstraints;
  };
  VisualElementDragControls2.prototype.startAnimation = function(velocity) {
    var _this = this;
    var _a = this.getProps(), drag2 = _a.drag, dragMomentum = _a.dragMomentum, dragElastic = _a.dragElastic, dragTransition = _a.dragTransition, dragSnapToOrigin = _a.dragSnapToOrigin, onDragTransitionEnd = _a.onDragTransitionEnd;
    var constraints = this.constraints || {};
    var momentumAnimations = eachAxis(function(axis) {
      var _a2;
      if (!shouldDrag(axis, drag2, _this.currentDirection)) {
        return;
      }
      var transition = (_a2 = constraints === null || constraints === void 0 ? void 0 : constraints[axis]) !== null && _a2 !== void 0 ? _a2 : {};
      if (dragSnapToOrigin)
        transition = { min: 0, max: 0 };
      var bounceStiffness = dragElastic ? 200 : 1e6;
      var bounceDamping = dragElastic ? 40 : 1e7;
      var inertia2 = __assign(__assign({ type: "inertia", velocity: dragMomentum ? velocity[axis] : 0, bounceStiffness, bounceDamping, timeConstant: 750, restDelta: 1, restSpeed: 10 }, dragTransition), transition);
      return _this.startAxisValueAnimation(axis, inertia2);
    });
    return Promise.all(momentumAnimations).then(onDragTransitionEnd);
  };
  VisualElementDragControls2.prototype.startAxisValueAnimation = function(axis, transition) {
    var axisValue = this.getAxisMotionValue(axis);
    return startAnimation(axis, axisValue, 0, transition);
  };
  VisualElementDragControls2.prototype.stopAnimation = function() {
    var _this = this;
    eachAxis(function(axis) {
      return _this.getAxisMotionValue(axis).stop();
    });
  };
  VisualElementDragControls2.prototype.getAxisMotionValue = function(axis) {
    var _a, _b;
    var dragKey = "_drag" + axis.toUpperCase();
    var externalMotionValue = this.visualElement.getProps()[dragKey];
    return externalMotionValue ? externalMotionValue : this.visualElement.getValue(axis, (_b = (_a = this.visualElement.getProps().initial) === null || _a === void 0 ? void 0 : _a[axis]) !== null && _b !== void 0 ? _b : 0);
  };
  VisualElementDragControls2.prototype.snapToCursor = function(point) {
    var _this = this;
    eachAxis(function(axis) {
      var drag2 = _this.getProps().drag;
      if (!shouldDrag(axis, drag2, _this.currentDirection))
        return;
      var projection = _this.visualElement.projection;
      var axisValue = _this.getAxisMotionValue(axis);
      if (projection && projection.layout) {
        var _a = projection.layout.actual[axis], min = _a.min, max = _a.max;
        axisValue.set(point[axis] - mix(min, max, 0.5));
      }
    });
  };
  VisualElementDragControls2.prototype.scalePositionWithinConstraints = function() {
    var _this = this;
    var _a;
    var _b = this.getProps(), drag2 = _b.drag, dragConstraints = _b.dragConstraints;
    var projection = this.visualElement.projection;
    if (!isRefObject(dragConstraints) || !projection || !this.constraints)
      return;
    this.stopAnimation();
    var boxProgress = { x: 0, y: 0 };
    eachAxis(function(axis) {
      var axisValue = _this.getAxisMotionValue(axis);
      if (axisValue) {
        var latest = axisValue.get();
        boxProgress[axis] = calcOrigin2({ min: latest, max: latest }, _this.constraints[axis]);
      }
    });
    var transformTemplate = this.visualElement.getProps().transformTemplate;
    this.visualElement.getInstance().style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
    projection.updateLayout();
    this.resolveConstraints();
    eachAxis(function(axis) {
      if (!shouldDrag(axis, drag2, null))
        return;
      var axisValue = _this.getAxisMotionValue(axis);
      var _a2 = _this.constraints[axis], min = _a2.min, max = _a2.max;
      axisValue.set(mix(min, max, boxProgress[axis]));
    });
  };
  VisualElementDragControls2.prototype.addListeners = function() {
    var _this = this;
    var _a;
    elementDragControls.set(this.visualElement, this);
    var element = this.visualElement.getInstance();
    var stopPointerListener = addPointerEvent(element, "pointerdown", function(event) {
      var _a2 = _this.getProps(), drag2 = _a2.drag, _b = _a2.dragListener, dragListener = _b === void 0 ? true : _b;
      drag2 && dragListener && _this.start(event);
    });
    var measureDragConstraints = function() {
      var dragConstraints = _this.getProps().dragConstraints;
      if (isRefObject(dragConstraints)) {
        _this.constraints = _this.resolveRefConstraints();
      }
    };
    var projection = this.visualElement.projection;
    var stopMeasureLayoutListener = projection.addEventListener("measure", measureDragConstraints);
    if (projection && !projection.layout) {
      (_a = projection.root) === null || _a === void 0 ? void 0 : _a.updateScroll();
      projection.updateLayout();
    }
    measureDragConstraints();
    var stopResizeListener = addDomEvent(window, "resize", function() {
      return _this.scalePositionWithinConstraints();
    });
    projection.addEventListener("didUpdate", function(_a2) {
      var delta = _a2.delta, hasLayoutChanged = _a2.hasLayoutChanged;
      if (_this.isDragging && hasLayoutChanged) {
        eachAxis(function(axis) {
          var motionValue2 = _this.getAxisMotionValue(axis);
          if (!motionValue2)
            return;
          _this.originPoint[axis] += delta[axis].translate;
          motionValue2.set(motionValue2.get() + delta[axis].translate);
        });
        _this.visualElement.syncRender();
      }
    });
    return function() {
      stopResizeListener();
      stopPointerListener();
      stopMeasureLayoutListener();
    };
  };
  VisualElementDragControls2.prototype.getProps = function() {
    var props = this.visualElement.getProps();
    var _a = props.drag, drag2 = _a === void 0 ? false : _a, _b = props.dragDirectionLock, dragDirectionLock = _b === void 0 ? false : _b, _c = props.dragPropagation, dragPropagation = _c === void 0 ? false : _c, _d = props.dragConstraints, dragConstraints = _d === void 0 ? false : _d, _e = props.dragElastic, dragElastic = _e === void 0 ? defaultElastic : _e, _f = props.dragMomentum, dragMomentum = _f === void 0 ? true : _f;
    return __assign(__assign({}, props), { drag: drag2, dragDirectionLock, dragPropagation, dragConstraints, dragElastic, dragMomentum });
  };
  return VisualElementDragControls2;
}();
function shouldDrag(direction, drag2, currentDirection) {
  return (drag2 === true || drag2 === direction) && (currentDirection === null || currentDirection === direction);
}
function getCurrentDirection(offset, lockThreshold) {
  if (lockThreshold === void 0) {
    lockThreshold = 10;
  }
  var direction = null;
  if (Math.abs(offset.y) > lockThreshold) {
    direction = "y";
  } else if (Math.abs(offset.x) > lockThreshold) {
    direction = "x";
  }
  return direction;
}

// node_modules/framer-motion/dist/es/gestures/drag/use-drag.mjs
function useDrag(props) {
  var groupDragControls = props.dragControls, visualElement2 = props.visualElement;
  var dragControls = useConstant(function() {
    return new VisualElementDragControls(visualElement2);
  });
  (0, import_react27.useEffect)(function() {
    return groupDragControls && groupDragControls.subscribe(dragControls);
  }, [dragControls, groupDragControls]);
  (0, import_react27.useEffect)(function() {
    return dragControls.addListeners();
  }, [dragControls]);
}

// node_modules/framer-motion/dist/es/gestures/use-pan-gesture.mjs
var import_react28 = __toESM(require_react(), 1);
function usePanGesture(_a) {
  var onPan = _a.onPan, onPanStart = _a.onPanStart, onPanEnd = _a.onPanEnd, onPanSessionStart = _a.onPanSessionStart, visualElement2 = _a.visualElement;
  var hasPanEvents = onPan || onPanStart || onPanEnd || onPanSessionStart;
  var panSession = (0, import_react28.useRef)(null);
  var transformPagePoint = (0, import_react28.useContext)(MotionConfigContext).transformPagePoint;
  var handlers = {
    onSessionStart: onPanSessionStart,
    onStart: onPanStart,
    onMove: onPan,
    onEnd: function(event, info) {
      panSession.current = null;
      onPanEnd && onPanEnd(event, info);
    }
  };
  (0, import_react28.useEffect)(function() {
    if (panSession.current !== null) {
      panSession.current.updateHandlers(handlers);
    }
  });
  function onPointerDown(event) {
    panSession.current = new PanSession(event, handlers, {
      transformPagePoint
    });
  }
  usePointerEvent(visualElement2, "pointerdown", hasPanEvents && onPointerDown);
  useUnmountEffect(function() {
    return panSession.current && panSession.current.end();
  });
}

// node_modules/framer-motion/dist/es/motion/features/drag.mjs
var drag = {
  pan: makeRenderlessComponent(usePanGesture),
  drag: makeRenderlessComponent(useDrag)
};

// node_modules/framer-motion/dist/es/render/utils/lifecycles.mjs
var names = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function createLifecycles() {
  var managers = names.map(function() {
    return new SubscriptionManager();
  });
  var propSubscriptions = {};
  var lifecycles = {
    clearAllListeners: function() {
      return managers.forEach(function(manager) {
        return manager.clear();
      });
    },
    updatePropListeners: function(props) {
      names.forEach(function(name) {
        var _a;
        var on = "on" + name;
        var propListener = props[on];
        (_a = propSubscriptions[name]) === null || _a === void 0 ? void 0 : _a.call(propSubscriptions);
        if (propListener) {
          propSubscriptions[name] = lifecycles[on](propListener);
        }
      });
    }
  };
  managers.forEach(function(manager, i) {
    lifecycles["on" + names[i]] = function(handler) {
      return manager.add(handler);
    };
    lifecycles["notify" + names[i]] = function() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return manager.notify.apply(manager, __spreadArray([], __read(args), false));
    };
  });
  return lifecycles;
}

// node_modules/framer-motion/dist/es/render/utils/motion-values.mjs
function updateMotionValuesFromProps(element, next, prev) {
  var _a;
  for (var key in next) {
    var nextValue = next[key];
    var prevValue = prev[key];
    if (isMotionValue(nextValue)) {
      element.addValue(key, nextValue);
      if (true) {
        warnOnce(nextValue.version === "6.5.1", "Attempting to mix Framer Motion versions ".concat(nextValue.version, " with 6.5.1 may not work as expected."));
      }
    } else if (isMotionValue(prevValue)) {
      element.addValue(key, motionValue(nextValue));
    } else if (prevValue !== nextValue) {
      if (element.hasValue(key)) {
        var existingValue = element.getValue(key);
        !existingValue.hasAnimated && existingValue.set(nextValue);
      } else {
        element.addValue(key, motionValue((_a = element.getStaticValue(key)) !== null && _a !== void 0 ? _a : nextValue));
      }
    }
  }
  for (var key in prev) {
    if (next[key] === void 0)
      element.removeValue(key);
  }
  return next;
}

// node_modules/framer-motion/dist/es/render/index.mjs
var visualElement = function(_a) {
  var _b = _a.treeType, treeType = _b === void 0 ? "" : _b, build = _a.build, getBaseTarget = _a.getBaseTarget, makeTargetAnimatable = _a.makeTargetAnimatable, measureViewportBox2 = _a.measureViewportBox, renderInstance = _a.render, readValueFromInstance = _a.readValueFromInstance, removeValueFromRenderState = _a.removeValueFromRenderState, sortNodePosition = _a.sortNodePosition, scrapeMotionValuesFromProps3 = _a.scrapeMotionValuesFromProps;
  return function(_a2, options) {
    var parent2 = _a2.parent, props = _a2.props, presenceId = _a2.presenceId, blockInitialAnimation = _a2.blockInitialAnimation, visualState = _a2.visualState, shouldReduceMotion = _a2.shouldReduceMotion;
    if (options === void 0) {
      options = {};
    }
    var isMounted = false;
    var latestValues = visualState.latestValues, renderState = visualState.renderState;
    var instance;
    var lifecycles = createLifecycles();
    var values = /* @__PURE__ */ new Map();
    var valueSubscriptions = /* @__PURE__ */ new Map();
    var prevMotionValues = {};
    var baseTarget = __assign({}, latestValues);
    var removeFromVariantTree;
    function render() {
      if (!instance || !isMounted)
        return;
      triggerBuild();
      renderInstance(instance, renderState, props.style, element.projection);
    }
    function triggerBuild() {
      build(element, renderState, latestValues, options, props);
    }
    function update() {
      lifecycles.notifyUpdate(latestValues);
    }
    function bindToMotionValue(key2, value2) {
      var removeOnChange = value2.onChange(function(latestValue) {
        latestValues[key2] = latestValue;
        props.onUpdate && es_default.update(update, false, true);
      });
      var removeOnRenderRequest = value2.onRenderRequest(element.scheduleRender);
      valueSubscriptions.set(key2, function() {
        removeOnChange();
        removeOnRenderRequest();
      });
    }
    var initialMotionValues = scrapeMotionValuesFromProps3(props);
    for (var key in initialMotionValues) {
      var value = initialMotionValues[key];
      if (latestValues[key] !== void 0 && isMotionValue(value)) {
        value.set(latestValues[key], false);
      }
    }
    var isControllingVariants = checkIfControllingVariants(props);
    var isVariantNode = checkIfVariantNode(props);
    var element = __assign(__assign({
      treeType,
      current: null,
      depth: parent2 ? parent2.depth + 1 : 0,
      parent: parent2,
      children: /* @__PURE__ */ new Set(),
      presenceId,
      shouldReduceMotion,
      variantChildren: isVariantNode ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(parent2 === null || parent2 === void 0 ? void 0 : parent2.isMounted()),
      blockInitialAnimation,
      isMounted: function() {
        return Boolean(instance);
      },
      mount: function(newInstance) {
        isMounted = true;
        instance = element.current = newInstance;
        if (element.projection) {
          element.projection.mount(newInstance);
        }
        if (isVariantNode && parent2 && !isControllingVariants) {
          removeFromVariantTree = parent2 === null || parent2 === void 0 ? void 0 : parent2.addVariantChild(element);
        }
        values.forEach(function(value2, key2) {
          return bindToMotionValue(key2, value2);
        });
        parent2 === null || parent2 === void 0 ? void 0 : parent2.children.add(element);
        element.setProps(props);
      },
      unmount: function() {
        var _a3;
        (_a3 = element.projection) === null || _a3 === void 0 ? void 0 : _a3.unmount();
        cancelSync.update(update);
        cancelSync.render(render);
        valueSubscriptions.forEach(function(remove) {
          return remove();
        });
        removeFromVariantTree === null || removeFromVariantTree === void 0 ? void 0 : removeFromVariantTree();
        parent2 === null || parent2 === void 0 ? void 0 : parent2.children.delete(element);
        lifecycles.clearAllListeners();
        instance = void 0;
        isMounted = false;
      },
      addVariantChild: function(child) {
        var _a3;
        var closestVariantNode = element.getClosestVariantNode();
        if (closestVariantNode) {
          (_a3 = closestVariantNode.variantChildren) === null || _a3 === void 0 ? void 0 : _a3.add(child);
          return function() {
            return closestVariantNode.variantChildren.delete(child);
          };
        }
      },
      sortNodePosition: function(other) {
        if (!sortNodePosition || treeType !== other.treeType)
          return 0;
        return sortNodePosition(element.getInstance(), other.getInstance());
      },
      getClosestVariantNode: function() {
        return isVariantNode ? element : parent2 === null || parent2 === void 0 ? void 0 : parent2.getClosestVariantNode();
      },
      getLayoutId: function() {
        return props.layoutId;
      },
      getInstance: function() {
        return instance;
      },
      getStaticValue: function(key2) {
        return latestValues[key2];
      },
      setStaticValue: function(key2, value2) {
        return latestValues[key2] = value2;
      },
      getLatestValues: function() {
        return latestValues;
      },
      setVisibility: function(visibility) {
        if (element.isVisible === visibility)
          return;
        element.isVisible = visibility;
        element.scheduleRender();
      },
      makeTargetAnimatable: function(target, canMutate) {
        if (canMutate === void 0) {
          canMutate = true;
        }
        return makeTargetAnimatable(element, target, props, canMutate);
      },
      measureViewportBox: function() {
        return measureViewportBox2(instance, props);
      },
      addValue: function(key2, value2) {
        if (element.hasValue(key2))
          element.removeValue(key2);
        values.set(key2, value2);
        latestValues[key2] = value2.get();
        bindToMotionValue(key2, value2);
      },
      removeValue: function(key2) {
        var _a3;
        values.delete(key2);
        (_a3 = valueSubscriptions.get(key2)) === null || _a3 === void 0 ? void 0 : _a3();
        valueSubscriptions.delete(key2);
        delete latestValues[key2];
        removeValueFromRenderState(key2, renderState);
      },
      hasValue: function(key2) {
        return values.has(key2);
      },
      getValue: function(key2, defaultValue) {
        var value2 = values.get(key2);
        if (value2 === void 0 && defaultValue !== void 0) {
          value2 = motionValue(defaultValue);
          element.addValue(key2, value2);
        }
        return value2;
      },
      forEachValue: function(callback) {
        return values.forEach(callback);
      },
      readValue: function(key2) {
        var _a3;
        return (_a3 = latestValues[key2]) !== null && _a3 !== void 0 ? _a3 : readValueFromInstance(instance, key2, options);
      },
      setBaseTarget: function(key2, value2) {
        baseTarget[key2] = value2;
      },
      getBaseTarget: function(key2) {
        if (getBaseTarget) {
          var target = getBaseTarget(props, key2);
          if (target !== void 0 && !isMotionValue(target))
            return target;
        }
        return baseTarget[key2];
      }
    }, lifecycles), {
      build: function() {
        triggerBuild();
        return renderState;
      },
      scheduleRender: function() {
        es_default.render(render, false, true);
      },
      syncRender: render,
      setProps: function(newProps) {
        if (newProps.transformTemplate || props.transformTemplate) {
          element.scheduleRender();
        }
        props = newProps;
        lifecycles.updatePropListeners(newProps);
        prevMotionValues = updateMotionValuesFromProps(element, scrapeMotionValuesFromProps3(props), prevMotionValues);
      },
      getProps: function() {
        return props;
      },
      getVariant: function(name) {
        var _a3;
        return (_a3 = props.variants) === null || _a3 === void 0 ? void 0 : _a3[name];
      },
      getDefaultTransition: function() {
        return props.transition;
      },
      getTransformPagePoint: function() {
        return props.transformPagePoint;
      },
      getVariantContext: function(startAtParent) {
        if (startAtParent === void 0) {
          startAtParent = false;
        }
        if (startAtParent)
          return parent2 === null || parent2 === void 0 ? void 0 : parent2.getVariantContext();
        if (!isControllingVariants) {
          var context_1 = (parent2 === null || parent2 === void 0 ? void 0 : parent2.getVariantContext()) || {};
          if (props.initial !== void 0) {
            context_1.initial = props.initial;
          }
          return context_1;
        }
        var context = {};
        for (var i = 0; i < numVariantProps; i++) {
          var name_1 = variantProps[i];
          var prop = props[name_1];
          if (isVariantLabel(prop) || prop === false) {
            context[name_1] = prop;
          }
        }
        return context;
      }
    });
    return element;
  };
};
var variantProps = __spreadArray(["initial"], __read(variantPriorityOrder), false);
var numVariantProps = variantProps.length;

// node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.mjs
function isCSSVariable2(value) {
  return typeof value === "string" && value.startsWith("var(--");
}
var cssVariableRegex = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function parseCSSVariable(current) {
  var match = cssVariableRegex.exec(current);
  if (!match)
    return [,];
  var _a = __read(match, 3), token = _a[1], fallback = _a[2];
  return [token, fallback];
}
var maxDepth = 4;
function getVariableValue(current, element, depth) {
  if (depth === void 0) {
    depth = 1;
  }
  invariant(depth <= maxDepth, 'Max CSS variable fallback depth detected in property "'.concat(current, '". This may indicate a circular fallback dependency.'));
  var _a = __read(parseCSSVariable(current), 2), token = _a[0], fallback = _a[1];
  if (!token)
    return;
  var resolved = window.getComputedStyle(element).getPropertyValue(token);
  if (resolved) {
    return resolved.trim();
  } else if (isCSSVariable2(fallback)) {
    return getVariableValue(fallback, element, depth + 1);
  } else {
    return fallback;
  }
}
function resolveCSSVariables(visualElement2, _a, transitionEnd) {
  var _b;
  var target = __rest(_a, []);
  var element = visualElement2.getInstance();
  if (!(element instanceof Element))
    return { target, transitionEnd };
  if (transitionEnd) {
    transitionEnd = __assign({}, transitionEnd);
  }
  visualElement2.forEachValue(function(value) {
    var current2 = value.get();
    if (!isCSSVariable2(current2))
      return;
    var resolved2 = getVariableValue(current2, element);
    if (resolved2)
      value.set(resolved2);
  });
  for (var key in target) {
    var current = target[key];
    if (!isCSSVariable2(current))
      continue;
    var resolved = getVariableValue(current, element);
    if (!resolved)
      continue;
    target[key] = resolved;
    if (transitionEnd)
      (_b = transitionEnd[key]) !== null && _b !== void 0 ? _b : transitionEnd[key] = current;
  }
  return { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.mjs
var positionalKeys = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]);
var isPositionalKey = function(key) {
  return positionalKeys.has(key);
};
var hasPositionalKey = function(target) {
  return Object.keys(target).some(isPositionalKey);
};
var setAndResetVelocity = function(value, to) {
  value.set(to, false);
  value.set(to);
};
var isNumOrPxType = function(v) {
  return v === number || v === px;
};
var BoundingBoxDimension;
(function(BoundingBoxDimension2) {
  BoundingBoxDimension2["width"] = "width";
  BoundingBoxDimension2["height"] = "height";
  BoundingBoxDimension2["left"] = "left";
  BoundingBoxDimension2["right"] = "right";
  BoundingBoxDimension2["top"] = "top";
  BoundingBoxDimension2["bottom"] = "bottom";
})(BoundingBoxDimension || (BoundingBoxDimension = {}));
var getPosFromMatrix = function(matrix, pos) {
  return parseFloat(matrix.split(", ")[pos]);
};
var getTranslateFromMatrix = function(pos2, pos3) {
  return function(_bbox, _a) {
    var transform = _a.transform;
    if (transform === "none" || !transform)
      return 0;
    var matrix3d = transform.match(/^matrix3d\((.+)\)$/);
    if (matrix3d) {
      return getPosFromMatrix(matrix3d[1], pos3);
    } else {
      var matrix = transform.match(/^matrix\((.+)\)$/);
      if (matrix) {
        return getPosFromMatrix(matrix[1], pos2);
      } else {
        return 0;
      }
    }
  };
};
var transformKeys = /* @__PURE__ */ new Set(["x", "y", "z"]);
var nonTranslationalTransformKeys = transformProps.filter(function(key) {
  return !transformKeys.has(key);
});
function removeNonTranslationalTransform(visualElement2) {
  var removedTransforms = [];
  nonTranslationalTransformKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (value !== void 0) {
      removedTransforms.push([key, value.get()]);
      value.set(key.startsWith("scale") ? 1 : 0);
    }
  });
  if (removedTransforms.length)
    visualElement2.syncRender();
  return removedTransforms;
}
var positionalValues = {
  width: function(_a, _b) {
    var x = _a.x;
    var _c = _b.paddingLeft, paddingLeft = _c === void 0 ? "0" : _c, _d = _b.paddingRight, paddingRight = _d === void 0 ? "0" : _d;
    return x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight);
  },
  height: function(_a, _b) {
    var y = _a.y;
    var _c = _b.paddingTop, paddingTop = _c === void 0 ? "0" : _c, _d = _b.paddingBottom, paddingBottom = _d === void 0 ? "0" : _d;
    return y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom);
  },
  top: function(_bbox, _a) {
    var top = _a.top;
    return parseFloat(top);
  },
  left: function(_bbox, _a) {
    var left = _a.left;
    return parseFloat(left);
  },
  bottom: function(_a, _b) {
    var y = _a.y;
    var top = _b.top;
    return parseFloat(top) + (y.max - y.min);
  },
  right: function(_a, _b) {
    var x = _a.x;
    var left = _b.left;
    return parseFloat(left) + (x.max - x.min);
  },
  x: getTranslateFromMatrix(4, 13),
  y: getTranslateFromMatrix(5, 14)
};
var convertChangedValueTypes = function(target, visualElement2, changedKeys) {
  var originBbox = visualElement2.measureViewportBox();
  var element = visualElement2.getInstance();
  var elementComputedStyle = getComputedStyle(element);
  var display = elementComputedStyle.display;
  var origin = {};
  if (display === "none") {
    visualElement2.setStaticValue("display", target.display || "block");
  }
  changedKeys.forEach(function(key) {
    origin[key] = positionalValues[key](originBbox, elementComputedStyle);
  });
  visualElement2.syncRender();
  var targetBbox = visualElement2.measureViewportBox();
  changedKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    setAndResetVelocity(value, origin[key]);
    target[key] = positionalValues[key](targetBbox, elementComputedStyle);
  });
  return target;
};
var checkAndConvertChangedValueTypes = function(visualElement2, target, origin, transitionEnd) {
  if (origin === void 0) {
    origin = {};
  }
  if (transitionEnd === void 0) {
    transitionEnd = {};
  }
  target = __assign({}, target);
  transitionEnd = __assign({}, transitionEnd);
  var targetPositionalKeys = Object.keys(target).filter(isPositionalKey);
  var removedTransformValues = [];
  var hasAttemptedToRemoveTransformValues = false;
  var changedValueTypeKeys = [];
  targetPositionalKeys.forEach(function(key) {
    var value = visualElement2.getValue(key);
    if (!visualElement2.hasValue(key))
      return;
    var from2 = origin[key];
    var fromType = findDimensionValueType(from2);
    var to = target[key];
    var toType;
    if (isKeyframesTarget(to)) {
      var numKeyframes = to.length;
      var fromIndex = to[0] === null ? 1 : 0;
      from2 = to[fromIndex];
      fromType = findDimensionValueType(from2);
      for (var i = fromIndex; i < numKeyframes; i++) {
        if (!toType) {
          toType = findDimensionValueType(to[i]);
          invariant(toType === fromType || isNumOrPxType(fromType) && isNumOrPxType(toType), "Keyframes must be of the same dimension as the current value");
        } else {
          invariant(findDimensionValueType(to[i]) === toType, "All keyframes must be of the same type");
        }
      }
    } else {
      toType = findDimensionValueType(to);
    }
    if (fromType !== toType) {
      if (isNumOrPxType(fromType) && isNumOrPxType(toType)) {
        var current = value.get();
        if (typeof current === "string") {
          value.set(parseFloat(current));
        }
        if (typeof to === "string") {
          target[key] = parseFloat(to);
        } else if (Array.isArray(to) && toType === px) {
          target[key] = to.map(parseFloat);
        }
      } else if ((fromType === null || fromType === void 0 ? void 0 : fromType.transform) && (toType === null || toType === void 0 ? void 0 : toType.transform) && (from2 === 0 || to === 0)) {
        if (from2 === 0) {
          value.set(toType.transform(from2));
        } else {
          target[key] = fromType.transform(to);
        }
      } else {
        if (!hasAttemptedToRemoveTransformValues) {
          removedTransformValues = removeNonTranslationalTransform(visualElement2);
          hasAttemptedToRemoveTransformValues = true;
        }
        changedValueTypeKeys.push(key);
        transitionEnd[key] = transitionEnd[key] !== void 0 ? transitionEnd[key] : target[key];
        setAndResetVelocity(value, to);
      }
    }
  });
  if (changedValueTypeKeys.length) {
    var scrollY_1 = changedValueTypeKeys.indexOf("height") >= 0 ? window.pageYOffset : null;
    var convertedTarget = convertChangedValueTypes(target, visualElement2, changedValueTypeKeys);
    if (removedTransformValues.length) {
      removedTransformValues.forEach(function(_a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        visualElement2.getValue(key).set(value);
      });
    }
    visualElement2.syncRender();
    if (scrollY_1 !== null)
      window.scrollTo({ top: scrollY_1 });
    return { target: convertedTarget, transitionEnd };
  } else {
    return { target, transitionEnd };
  }
};
function unitConversion(visualElement2, target, origin, transitionEnd) {
  return hasPositionalKey(target) ? checkAndConvertChangedValueTypes(visualElement2, target, origin, transitionEnd) : { target, transitionEnd };
}

// node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.mjs
var parseDomVariant = function(visualElement2, target, origin, transitionEnd) {
  var resolved = resolveCSSVariables(visualElement2, target, transitionEnd);
  target = resolved.target;
  transitionEnd = resolved.transitionEnd;
  return unitConversion(visualElement2, target, origin, transitionEnd);
};

// node_modules/framer-motion/dist/es/render/html/visual-element.mjs
function getComputedStyle2(element) {
  return window.getComputedStyle(element);
}
var htmlConfig = {
  treeType: "dom",
  readValueFromInstance: function(domElement, key) {
    if (isTransformProp(key)) {
      var defaultType = getDefaultValueType(key);
      return defaultType ? defaultType.default || 0 : 0;
    } else {
      var computedStyle = getComputedStyle2(domElement);
      return (isCSSVariable(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
    }
  },
  sortNodePosition: function(a2, b2) {
    return a2.compareDocumentPosition(b2) & 2 ? 1 : -1;
  },
  getBaseTarget: function(props, key) {
    var _a;
    return (_a = props.style) === null || _a === void 0 ? void 0 : _a[key];
  },
  measureViewportBox: function(element, _a) {
    var transformPagePoint = _a.transformPagePoint;
    return measureViewportBox(element, transformPagePoint);
  },
  resetTransform: function(element, domElement, props) {
    var transformTemplate = props.transformTemplate;
    domElement.style.transform = transformTemplate ? transformTemplate({}, "") : "none";
    element.scheduleRender();
  },
  restoreTransform: function(instance, mutableState) {
    instance.style.transform = mutableState.style.transform;
  },
  removeValueFromRenderState: function(key, _a) {
    var vars = _a.vars, style = _a.style;
    delete vars[key];
    delete style[key];
  },
  makeTargetAnimatable: function(element, _a, _b, isMounted) {
    var transformValues = _b.transformValues;
    if (isMounted === void 0) {
      isMounted = true;
    }
    var transition = _a.transition, transitionEnd = _a.transitionEnd, target = __rest(_a, ["transition", "transitionEnd"]);
    var origin = getOrigin(target, transition || {}, element);
    if (transformValues) {
      if (transitionEnd)
        transitionEnd = transformValues(transitionEnd);
      if (target)
        target = transformValues(target);
      if (origin)
        origin = transformValues(origin);
    }
    if (isMounted) {
      checkTargetForNewValues(element, target, origin);
      var parsed = parseDomVariant(element, target, origin, transitionEnd);
      transitionEnd = parsed.transitionEnd;
      target = parsed.target;
    }
    return __assign({ transition, transitionEnd }, target);
  },
  scrapeMotionValuesFromProps,
  build: function(element, renderState, latestValues, options, props) {
    if (element.isVisible !== void 0) {
      renderState.style.visibility = element.isVisible ? "visible" : "hidden";
    }
    buildHTMLStyles(renderState, latestValues, options, props.transformTemplate);
  },
  render: renderHTML
};
var htmlVisualElement = visualElement(htmlConfig);

// node_modules/framer-motion/dist/es/render/svg/visual-element.mjs
var svgVisualElement = visualElement(__assign(__assign({}, htmlConfig), { getBaseTarget: function(props, key) {
  return props[key];
}, readValueFromInstance: function(domElement, key) {
  var _a;
  if (isTransformProp(key)) {
    return ((_a = getDefaultValueType(key)) === null || _a === void 0 ? void 0 : _a.default) || 0;
  }
  key = !camelCaseAttributes.has(key) ? camelToDash(key) : key;
  return domElement.getAttribute(key);
}, scrapeMotionValuesFromProps: scrapeMotionValuesFromProps2, build: function(_element, renderState, latestValues, options, props) {
  buildSVGAttrs(renderState, latestValues, options, props.transformTemplate);
}, render: renderSVG }));

// node_modules/framer-motion/dist/es/render/dom/create-visual-element.mjs
var createDomVisualElement = function(Component, options) {
  return isSVGComponent(Component) ? svgVisualElement(options, { enableHardwareAcceleration: false }) : htmlVisualElement(options, { enableHardwareAcceleration: true });
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var import_react29 = __toESM(require_react(), 1);

// node_modules/framer-motion/dist/es/projection/styles/scale-border-radius.mjs
function pixelsToPercent(pixels, axis) {
  if (axis.max === axis.min)
    return 0;
  return pixels / (axis.max - axis.min) * 100;
}
var correctBorderRadius = {
  correct: function(latest, node) {
    if (!node.target)
      return latest;
    if (typeof latest === "string") {
      if (px.test(latest)) {
        latest = parseFloat(latest);
      } else {
        return latest;
      }
    }
    var x = pixelsToPercent(latest, node.target.x);
    var y = pixelsToPercent(latest, node.target.y);
    return "".concat(x, "% ").concat(y, "%");
  }
};

// node_modules/framer-motion/dist/es/projection/styles/scale-box-shadow.mjs
var varToken = "_$css";
var correctBoxShadow = {
  correct: function(latest, _a) {
    var treeScale = _a.treeScale, projectionDelta = _a.projectionDelta;
    var original = latest;
    var containsCSSVariables = latest.includes("var(");
    var cssVariables = [];
    if (containsCSSVariables) {
      latest = latest.replace(cssVariableRegex, function(match) {
        cssVariables.push(match);
        return varToken;
      });
    }
    var shadow = complex.parse(latest);
    if (shadow.length > 5)
      return original;
    var template = complex.createTransformer(latest);
    var offset = typeof shadow[0] !== "number" ? 1 : 0;
    var xScale = projectionDelta.x.scale * treeScale.x;
    var yScale = projectionDelta.y.scale * treeScale.y;
    shadow[0 + offset] /= xScale;
    shadow[1 + offset] /= yScale;
    var averageScale = mix(xScale, yScale, 0.5);
    if (typeof shadow[2 + offset] === "number")
      shadow[2 + offset] /= averageScale;
    if (typeof shadow[3 + offset] === "number")
      shadow[3 + offset] /= averageScale;
    var output = template(shadow);
    if (containsCSSVariables) {
      var i_1 = 0;
      output = output.replace(varToken, function() {
        var cssVariable = cssVariables[i_1];
        i_1++;
        return cssVariable;
      });
    }
    return output;
  }
};

// node_modules/framer-motion/dist/es/motion/features/layout/MeasureLayout.mjs
var MeasureLayoutWithContext = function(_super) {
  __extends(MeasureLayoutWithContext2, _super);
  function MeasureLayoutWithContext2() {
    return _super !== null && _super.apply(this, arguments) || this;
  }
  MeasureLayoutWithContext2.prototype.componentDidMount = function() {
    var _this = this;
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, switchLayoutGroup = _a.switchLayoutGroup, layoutId = _a.layoutId;
    var projection = visualElement2.projection;
    addScaleCorrector(defaultScaleCorrectors);
    if (projection) {
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.add(projection);
      if ((switchLayoutGroup === null || switchLayoutGroup === void 0 ? void 0 : switchLayoutGroup.register) && layoutId) {
        switchLayoutGroup.register(projection);
      }
      projection.root.didUpdate();
      projection.addEventListener("animationComplete", function() {
        _this.safeToRemove();
      });
      projection.setOptions(__assign(__assign({}, projection.options), { onExitComplete: function() {
        return _this.safeToRemove();
      } }));
    }
    globalProjectionState.hasEverUpdated = true;
  };
  MeasureLayoutWithContext2.prototype.getSnapshotBeforeUpdate = function(prevProps) {
    var _this = this;
    var _a = this.props, layoutDependency = _a.layoutDependency, visualElement2 = _a.visualElement, drag2 = _a.drag, isPresent = _a.isPresent;
    var projection = visualElement2.projection;
    if (!projection)
      return null;
    projection.isPresent = isPresent;
    if (drag2 || prevProps.layoutDependency !== layoutDependency || layoutDependency === void 0) {
      projection.willUpdate();
    } else {
      this.safeToRemove();
    }
    if (prevProps.isPresent !== isPresent) {
      if (isPresent) {
        projection.promote();
      } else if (!projection.relegate()) {
        es_default.postRender(function() {
          var _a2;
          if (!((_a2 = projection.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length)) {
            _this.safeToRemove();
          }
        });
      }
    }
    return null;
  };
  MeasureLayoutWithContext2.prototype.componentDidUpdate = function() {
    var projection = this.props.visualElement.projection;
    if (projection) {
      projection.root.didUpdate();
      if (!projection.currentAnimation && projection.isLead()) {
        this.safeToRemove();
      }
    }
  };
  MeasureLayoutWithContext2.prototype.componentWillUnmount = function() {
    var _a = this.props, visualElement2 = _a.visualElement, layoutGroup = _a.layoutGroup, promoteContext = _a.switchLayoutGroup;
    var projection = visualElement2.projection;
    if (projection) {
      projection.scheduleCheckAfterUnmount();
      if (layoutGroup === null || layoutGroup === void 0 ? void 0 : layoutGroup.group)
        layoutGroup.group.remove(projection);
      if (promoteContext === null || promoteContext === void 0 ? void 0 : promoteContext.deregister)
        promoteContext.deregister(projection);
    }
  };
  MeasureLayoutWithContext2.prototype.safeToRemove = function() {
    var safeToRemove = this.props.safeToRemove;
    safeToRemove === null || safeToRemove === void 0 ? void 0 : safeToRemove();
  };
  MeasureLayoutWithContext2.prototype.render = function() {
    return null;
  };
  return MeasureLayoutWithContext2;
}(import_react29.default.Component);
function MeasureLayout(props) {
  var _a = __read(usePresence(), 2), isPresent = _a[0], safeToRemove = _a[1];
  var layoutGroup = (0, import_react29.useContext)(LayoutGroupContext);
  return import_react29.default.createElement(MeasureLayoutWithContext, __assign({}, props, { layoutGroup, switchLayoutGroup: (0, import_react29.useContext)(SwitchLayoutGroupContext), isPresent, safeToRemove }));
}
var defaultScaleCorrectors = {
  borderRadius: __assign(__assign({}, correctBorderRadius), { applyTo: [
    "borderTopLeftRadius",
    "borderTopRightRadius",
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ] }),
  borderTopLeftRadius: correctBorderRadius,
  borderTopRightRadius: correctBorderRadius,
  borderBottomLeftRadius: correctBorderRadius,
  borderBottomRightRadius: correctBorderRadius,
  boxShadow: correctBoxShadow
};

// node_modules/framer-motion/dist/es/motion/features/layout/index.mjs
var layoutFeatures = {
  measureLayout: MeasureLayout
};

// node_modules/framer-motion/dist/es/animation/animate.mjs
function animate2(from2, to, transition) {
  if (transition === void 0) {
    transition = {};
  }
  var value = isMotionValue(from2) ? from2 : motionValue(from2);
  startAnimation("", value, to, transition);
  return {
    stop: function() {
      return value.stop();
    },
    isAnimating: function() {
      return value.isAnimating();
    }
  };
}

// node_modules/framer-motion/dist/es/projection/animation/mix-values.mjs
var borders = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"];
var numBorders = borders.length;
var asNumber = function(value) {
  return typeof value === "string" ? parseFloat(value) : value;
};
var isPx = function(value) {
  return typeof value === "number" || px.test(value);
};
function mixValues(target, follow, lead, progress2, shouldCrossfadeOpacity, isOnlyMember) {
  var _a, _b, _c, _d;
  if (shouldCrossfadeOpacity) {
    target.opacity = mix(
      0,
      (_a = lead.opacity) !== null && _a !== void 0 ? _a : 1,
      easeCrossfadeIn(progress2)
    );
    target.opacityExit = mix((_b = follow.opacity) !== null && _b !== void 0 ? _b : 1, 0, easeCrossfadeOut(progress2));
  } else if (isOnlyMember) {
    target.opacity = mix((_c = follow.opacity) !== null && _c !== void 0 ? _c : 1, (_d = lead.opacity) !== null && _d !== void 0 ? _d : 1, progress2);
  }
  for (var i = 0; i < numBorders; i++) {
    var borderLabel = "border".concat(borders[i], "Radius");
    var followRadius = getRadius(follow, borderLabel);
    var leadRadius = getRadius(lead, borderLabel);
    if (followRadius === void 0 && leadRadius === void 0)
      continue;
    followRadius || (followRadius = 0);
    leadRadius || (leadRadius = 0);
    var canMix = followRadius === 0 || leadRadius === 0 || isPx(followRadius) === isPx(leadRadius);
    if (canMix) {
      target[borderLabel] = Math.max(mix(asNumber(followRadius), asNumber(leadRadius), progress2), 0);
      if (percent.test(leadRadius) || percent.test(followRadius)) {
        target[borderLabel] += "%";
      }
    } else {
      target[borderLabel] = leadRadius;
    }
  }
  if (follow.rotate || lead.rotate) {
    target.rotate = mix(follow.rotate || 0, lead.rotate || 0, progress2);
  }
}
function getRadius(values, radiusName) {
  var _a;
  return (_a = values[radiusName]) !== null && _a !== void 0 ? _a : values.borderRadius;
}
var easeCrossfadeIn = compress(0, 0.5, circOut);
var easeCrossfadeOut = compress(0.5, 0.95, linear);
function compress(min, max, easing) {
  return function(p) {
    if (p < min)
      return 0;
    if (p > max)
      return 1;
    return easing(progress(min, max, p));
  };
}

// node_modules/framer-motion/dist/es/projection/geometry/copy.mjs
function copyAxisInto(axis, originAxis) {
  axis.min = originAxis.min;
  axis.max = originAxis.max;
}
function copyBoxInto(box, originBox) {
  copyAxisInto(box.x, originBox.x);
  copyAxisInto(box.y, originBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/delta-remove.mjs
function removePointDelta(point, translate, scale2, originPoint, boxScale) {
  point -= translate;
  point = scalePoint(point, 1 / scale2, originPoint);
  if (boxScale !== void 0) {
    point = scalePoint(point, 1 / boxScale, originPoint);
  }
  return point;
}
function removeAxisDelta(axis, translate, scale2, origin, boxScale, originAxis, sourceAxis) {
  if (translate === void 0) {
    translate = 0;
  }
  if (scale2 === void 0) {
    scale2 = 1;
  }
  if (origin === void 0) {
    origin = 0.5;
  }
  if (originAxis === void 0) {
    originAxis = axis;
  }
  if (sourceAxis === void 0) {
    sourceAxis = axis;
  }
  if (percent.test(translate)) {
    translate = parseFloat(translate);
    var relativeProgress = mix(sourceAxis.min, sourceAxis.max, translate / 100);
    translate = relativeProgress - sourceAxis.min;
  }
  if (typeof translate !== "number")
    return;
  var originPoint = mix(originAxis.min, originAxis.max, origin);
  if (axis === originAxis)
    originPoint -= translate;
  axis.min = removePointDelta(axis.min, translate, scale2, originPoint, boxScale);
  axis.max = removePointDelta(axis.max, translate, scale2, originPoint, boxScale);
}
function removeAxisTransforms(axis, transforms, _a, origin, sourceAxis) {
  var _b = __read(_a, 3), key = _b[0], scaleKey = _b[1], originKey = _b[2];
  removeAxisDelta(axis, transforms[key], transforms[scaleKey], transforms[originKey], transforms.scale, origin, sourceAxis);
}
var xKeys2 = ["x", "scaleX", "originX"];
var yKeys2 = ["y", "scaleY", "originY"];
function removeBoxTransforms(box, transforms, originBox, sourceBox) {
  removeAxisTransforms(box.x, transforms, xKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.x, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.x);
  removeAxisTransforms(box.y, transforms, yKeys2, originBox === null || originBox === void 0 ? void 0 : originBox.y, sourceBox === null || sourceBox === void 0 ? void 0 : sourceBox.y);
}

// node_modules/framer-motion/dist/es/projection/geometry/utils.mjs
function isAxisDeltaZero(delta) {
  return delta.translate === 0 && delta.scale === 1;
}
function isDeltaZero(delta) {
  return isAxisDeltaZero(delta.x) && isAxisDeltaZero(delta.y);
}
function boxEquals(a2, b2) {
  return a2.x.min === b2.x.min && a2.x.max === b2.x.max && a2.y.min === b2.y.min && a2.y.max === b2.y.max;
}

// node_modules/framer-motion/dist/es/projection/shared/stack.mjs
var NodeStack = function() {
  function NodeStack2() {
    this.members = [];
  }
  NodeStack2.prototype.add = function(node) {
    addUniqueItem(this.members, node);
    node.scheduleRender();
  };
  NodeStack2.prototype.remove = function(node) {
    removeItem(this.members, node);
    if (node === this.prevLead) {
      this.prevLead = void 0;
    }
    if (node === this.lead) {
      var prevLead = this.members[this.members.length - 1];
      if (prevLead) {
        this.promote(prevLead);
      }
    }
  };
  NodeStack2.prototype.relegate = function(node) {
    var indexOfNode = this.members.findIndex(function(member2) {
      return node === member2;
    });
    if (indexOfNode === 0)
      return false;
    var prevLead;
    for (var i = indexOfNode; i >= 0; i--) {
      var member = this.members[i];
      if (member.isPresent !== false) {
        prevLead = member;
        break;
      }
    }
    if (prevLead) {
      this.promote(prevLead);
      return true;
    } else {
      return false;
    }
  };
  NodeStack2.prototype.promote = function(node, preserveFollowOpacity) {
    var _a;
    var prevLead = this.lead;
    if (node === prevLead)
      return;
    this.prevLead = prevLead;
    this.lead = node;
    node.show();
    if (prevLead) {
      prevLead.instance && prevLead.scheduleRender();
      node.scheduleRender();
      node.resumeFrom = prevLead;
      if (preserveFollowOpacity) {
        node.resumeFrom.preserveOpacity = true;
      }
      if (prevLead.snapshot) {
        node.snapshot = prevLead.snapshot;
        node.snapshot.latestValues = prevLead.animationValues || prevLead.latestValues;
        node.snapshot.isShared = true;
      }
      if ((_a = node.root) === null || _a === void 0 ? void 0 : _a.isUpdating) {
        node.isLayoutDirty = true;
      }
      var crossfade = node.options.crossfade;
      if (crossfade === false) {
        prevLead.hide();
      }
    }
  };
  NodeStack2.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(node) {
      var _a, _b, _c, _d, _e;
      (_b = (_a = node.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a);
      (_e = (_c = node.resumingFrom) === null || _c === void 0 ? void 0 : (_d = _c.options).onExitComplete) === null || _e === void 0 ? void 0 : _e.call(_d);
    });
  };
  NodeStack2.prototype.scheduleRender = function() {
    this.members.forEach(function(node) {
      node.instance && node.scheduleRender(false);
    });
  };
  NodeStack2.prototype.removeLeadSnapshot = function() {
    if (this.lead && this.lead.snapshot) {
      this.lead.snapshot = void 0;
    }
  };
  return NodeStack2;
}();

// node_modules/framer-motion/dist/es/projection/styles/transform.mjs
var identityProjection = "translate3d(0px, 0px, 0) scale(1, 1) scale(1, 1)";
function buildProjectionTransform(delta, treeScale, latestTransform) {
  var xTranslate = delta.x.translate / treeScale.x;
  var yTranslate = delta.y.translate / treeScale.y;
  var transform = "translate3d(".concat(xTranslate, "px, ").concat(yTranslate, "px, 0) ");
  transform += "scale(".concat(1 / treeScale.x, ", ").concat(1 / treeScale.y, ") ");
  if (latestTransform) {
    var rotate = latestTransform.rotate, rotateX = latestTransform.rotateX, rotateY = latestTransform.rotateY;
    if (rotate)
      transform += "rotate(".concat(rotate, "deg) ");
    if (rotateX)
      transform += "rotateX(".concat(rotateX, "deg) ");
    if (rotateY)
      transform += "rotateY(".concat(rotateY, "deg) ");
  }
  var elementScaleX = delta.x.scale * treeScale.x;
  var elementScaleY = delta.y.scale * treeScale.y;
  transform += "scale(".concat(elementScaleX, ", ").concat(elementScaleY, ")");
  return transform === identityProjection ? "none" : transform;
}

// node_modules/framer-motion/dist/es/render/utils/compare-by-depth.mjs
var compareByDepth = function(a2, b2) {
  return a2.depth - b2.depth;
};

// node_modules/framer-motion/dist/es/render/utils/flat-tree.mjs
var FlatTree = function() {
  function FlatTree2() {
    this.children = [];
    this.isDirty = false;
  }
  FlatTree2.prototype.add = function(child) {
    addUniqueItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.remove = function(child) {
    removeItem(this.children, child);
    this.isDirty = true;
  };
  FlatTree2.prototype.forEach = function(callback) {
    this.isDirty && this.children.sort(compareByDepth);
    this.isDirty = false;
    this.children.forEach(callback);
  };
  return FlatTree2;
}();

// node_modules/framer-motion/dist/es/projection/node/create-projection-node.mjs
var animationTarget = 1e3;
function createProjectionNode(_a) {
  var attachResizeListener = _a.attachResizeListener, defaultParent = _a.defaultParent, measureScroll = _a.measureScroll, checkIsScrollRoot = _a.checkIsScrollRoot, resetTransform = _a.resetTransform;
  return function() {
    function ProjectionNode(id2, latestValues, parent2) {
      var _this = this;
      if (latestValues === void 0) {
        latestValues = {};
      }
      if (parent2 === void 0) {
        parent2 = defaultParent === null || defaultParent === void 0 ? void 0 : defaultParent();
      }
      this.children = /* @__PURE__ */ new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.treeScale = { x: 1, y: 1 };
      this.eventHandlers = /* @__PURE__ */ new Map();
      this.potentialNodes = /* @__PURE__ */ new Map();
      this.checkUpdateFailed = function() {
        if (_this.isUpdating) {
          _this.isUpdating = false;
          _this.clearAllSnapshots();
        }
      };
      this.updateProjection = function() {
        _this.nodes.forEach(resolveTargetDelta);
        _this.nodes.forEach(calcProjection);
      };
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = /* @__PURE__ */ new Map();
      this.id = id2;
      this.latestValues = latestValues;
      this.root = parent2 ? parent2.root || parent2 : this;
      this.path = parent2 ? __spreadArray(__spreadArray([], __read(parent2.path), false), [parent2], false) : [];
      this.parent = parent2;
      this.depth = parent2 ? parent2.depth + 1 : 0;
      id2 && this.root.registerPotentialNode(id2, this);
      for (var i = 0; i < this.path.length; i++) {
        this.path[i].shouldResetTransform = true;
      }
      if (this.root === this)
        this.nodes = new FlatTree();
    }
    ProjectionNode.prototype.addEventListener = function(name, handler) {
      if (!this.eventHandlers.has(name)) {
        this.eventHandlers.set(name, new SubscriptionManager());
      }
      return this.eventHandlers.get(name).add(handler);
    };
    ProjectionNode.prototype.notifyListeners = function(name) {
      var args = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
      }
      var subscriptionManager = this.eventHandlers.get(name);
      subscriptionManager === null || subscriptionManager === void 0 ? void 0 : subscriptionManager.notify.apply(subscriptionManager, __spreadArray([], __read(args), false));
    };
    ProjectionNode.prototype.hasListeners = function(name) {
      return this.eventHandlers.has(name);
    };
    ProjectionNode.prototype.registerPotentialNode = function(id2, node) {
      this.potentialNodes.set(id2, node);
    };
    ProjectionNode.prototype.mount = function(instance, isLayoutDirty) {
      var _this = this;
      var _a2;
      if (isLayoutDirty === void 0) {
        isLayoutDirty = false;
      }
      if (this.instance)
        return;
      this.isSVG = instance instanceof SVGElement && instance.tagName !== "svg";
      this.instance = instance;
      var _b = this.options, layoutId = _b.layoutId, layout = _b.layout, visualElement2 = _b.visualElement;
      if (visualElement2 && !visualElement2.getInstance()) {
        visualElement2.mount(instance);
      }
      this.root.nodes.add(this);
      (_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.children.add(this);
      this.id && this.root.potentialNodes.delete(this.id);
      if (isLayoutDirty && (layout || layoutId)) {
        this.isLayoutDirty = true;
      }
      if (attachResizeListener) {
        var unblockTimeout_1;
        var resizeUnblockUpdate_1 = function() {
          return _this.root.updateBlockedByResize = false;
        };
        attachResizeListener(instance, function() {
          _this.root.updateBlockedByResize = true;
          clearTimeout(unblockTimeout_1);
          unblockTimeout_1 = window.setTimeout(resizeUnblockUpdate_1, 250);
          if (globalProjectionState.hasAnimatedSinceResize) {
            globalProjectionState.hasAnimatedSinceResize = false;
            _this.nodes.forEach(finishAnimation);
          }
        });
      }
      if (layoutId) {
        this.root.registerSharedNode(layoutId, this);
      }
      if (this.options.animate !== false && visualElement2 && (layoutId || layout)) {
        this.addEventListener("didUpdate", function(_a3) {
          var _b2, _c, _d, _e, _f;
          var delta = _a3.delta, hasLayoutChanged = _a3.hasLayoutChanged, hasRelativeTargetChanged = _a3.hasRelativeTargetChanged, newLayout = _a3.layout;
          if (_this.isTreeAnimationBlocked()) {
            _this.target = void 0;
            _this.relativeTarget = void 0;
            return;
          }
          var layoutTransition = (_c = (_b2 = _this.options.transition) !== null && _b2 !== void 0 ? _b2 : visualElement2.getDefaultTransition()) !== null && _c !== void 0 ? _c : defaultLayoutTransition;
          var _g = visualElement2.getProps(), onLayoutAnimationStart = _g.onLayoutAnimationStart, onLayoutAnimationComplete = _g.onLayoutAnimationComplete;
          var targetChanged = !_this.targetLayout || !boxEquals(_this.targetLayout, newLayout) || hasRelativeTargetChanged;
          var hasOnlyRelativeTargetChanged = !hasLayoutChanged && hasRelativeTargetChanged;
          if (((_d = _this.resumeFrom) === null || _d === void 0 ? void 0 : _d.instance) || hasOnlyRelativeTargetChanged || hasLayoutChanged && (targetChanged || !_this.currentAnimation)) {
            if (_this.resumeFrom) {
              _this.resumingFrom = _this.resumeFrom;
              _this.resumingFrom.resumingFrom = void 0;
            }
            _this.setAnimationOrigin(delta, hasOnlyRelativeTargetChanged);
            var animationOptions = __assign(__assign({}, getValueTransition(layoutTransition, "layout")), { onPlay: onLayoutAnimationStart, onComplete: onLayoutAnimationComplete });
            if (visualElement2.shouldReduceMotion) {
              animationOptions.delay = 0;
              animationOptions.type = false;
            }
            _this.startAnimation(animationOptions);
          } else {
            if (!hasLayoutChanged && _this.animationProgress === 0) {
              _this.finishAnimation();
            }
            _this.isLead() && ((_f = (_e = _this.options).onExitComplete) === null || _f === void 0 ? void 0 : _f.call(_e));
          }
          _this.targetLayout = newLayout;
        });
      }
    };
    ProjectionNode.prototype.unmount = function() {
      var _a2, _b;
      this.options.layoutId && this.willUpdate();
      this.root.nodes.remove(this);
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.remove(this);
      (_b = this.parent) === null || _b === void 0 ? void 0 : _b.children.delete(this);
      this.instance = void 0;
      cancelSync.preRender(this.updateProjection);
    };
    ProjectionNode.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = true;
    };
    ProjectionNode.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = false;
    };
    ProjectionNode.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    };
    ProjectionNode.prototype.isTreeAnimationBlocked = function() {
      var _a2;
      return this.isAnimationBlocked || ((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimationBlocked()) || false;
    };
    ProjectionNode.prototype.startUpdate = function() {
      var _a2;
      if (this.isUpdateBlocked())
        return;
      this.isUpdating = true;
      (_a2 = this.nodes) === null || _a2 === void 0 ? void 0 : _a2.forEach(resetRotation);
    };
    ProjectionNode.prototype.willUpdate = function(shouldNotifyListeners) {
      var _a2, _b, _c;
      if (shouldNotifyListeners === void 0) {
        shouldNotifyListeners = true;
      }
      if (this.root.isUpdateBlocked()) {
        (_b = (_a2 = this.options).onExitComplete) === null || _b === void 0 ? void 0 : _b.call(_a2);
        return;
      }
      !this.root.isUpdating && this.root.startUpdate();
      if (this.isLayoutDirty)
        return;
      this.isLayoutDirty = true;
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        node.shouldResetTransform = true;
        node.updateScroll();
      }
      var _d = this.options, layoutId = _d.layoutId, layout = _d.layout;
      if (layoutId === void 0 && !layout)
        return;
      var transformTemplate = (_c = this.options.visualElement) === null || _c === void 0 ? void 0 : _c.getProps().transformTemplate;
      this.prevTransformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      this.updateSnapshot();
      shouldNotifyListeners && this.notifyListeners("willUpdate");
    };
    ProjectionNode.prototype.didUpdate = function() {
      var updateWasBlocked = this.isUpdateBlocked();
      if (updateWasBlocked) {
        this.unblockUpdate();
        this.clearAllSnapshots();
        this.nodes.forEach(clearMeasurements);
        return;
      }
      if (!this.isUpdating)
        return;
      this.isUpdating = false;
      if (this.potentialNodes.size) {
        this.potentialNodes.forEach(mountNodeEarly);
        this.potentialNodes.clear();
      }
      this.nodes.forEach(resetTransformStyle);
      this.nodes.forEach(updateLayout);
      this.nodes.forEach(notifyLayoutUpdate);
      this.clearAllSnapshots();
      flushSync.update();
      flushSync.preRender();
      flushSync.render();
    };
    ProjectionNode.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(clearSnapshot);
      this.sharedNodes.forEach(removeLeadSnapshots);
    };
    ProjectionNode.prototype.scheduleUpdateProjection = function() {
      es_default.preRender(this.updateProjection, false, true);
    };
    ProjectionNode.prototype.scheduleCheckAfterUnmount = function() {
      var _this = this;
      es_default.postRender(function() {
        if (_this.isLayoutDirty) {
          _this.root.didUpdate();
        } else {
          _this.root.checkUpdateFailed();
        }
      });
    };
    ProjectionNode.prototype.updateSnapshot = function() {
      if (this.snapshot || !this.instance)
        return;
      var measured = this.measure();
      var layout = this.removeTransform(this.removeElementScroll(measured));
      roundBox(layout);
      this.snapshot = {
        measured,
        layout,
        latestValues: {}
      };
    };
    ProjectionNode.prototype.updateLayout = function() {
      var _a2;
      if (!this.instance)
        return;
      this.updateScroll();
      if (!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (var i = 0; i < this.path.length; i++) {
          var node = this.path[i];
          node.updateScroll();
        }
      }
      var measured = this.measure();
      roundBox(measured);
      var prevLayout = this.layout;
      this.layout = {
        measured,
        actual: this.removeElementScroll(measured)
      };
      this.layoutCorrected = createBox();
      this.isLayoutDirty = false;
      this.projectionDelta = void 0;
      this.notifyListeners("measure", this.layout.actual);
      (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.notifyLayoutMeasure(this.layout.actual, prevLayout === null || prevLayout === void 0 ? void 0 : prevLayout.actual);
    };
    ProjectionNode.prototype.updateScroll = function() {
      if (this.options.layoutScroll && this.instance) {
        this.isScrollRoot = checkIsScrollRoot(this.instance);
        this.scroll = measureScroll(this.instance);
      }
    };
    ProjectionNode.prototype.resetTransform = function() {
      var _a2;
      if (!resetTransform)
        return;
      var isResetRequested = this.isLayoutDirty || this.shouldResetTransform;
      var hasProjection = this.projectionDelta && !isDeltaZero(this.projectionDelta);
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      var transformTemplateValue = transformTemplate === null || transformTemplate === void 0 ? void 0 : transformTemplate(this.latestValues, "");
      var transformTemplateHasChanged = transformTemplateValue !== this.prevTransformTemplateValue;
      if (isResetRequested && (hasProjection || hasTransform(this.latestValues) || transformTemplateHasChanged)) {
        resetTransform(this.instance, transformTemplateValue);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    };
    ProjectionNode.prototype.measure = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return createBox();
      var box = visualElement2.measureViewportBox();
      var scroll = this.root.scroll;
      if (scroll) {
        translateAxis(box.x, scroll.x);
        translateAxis(box.y, scroll.y);
      }
      return box;
    };
    ProjectionNode.prototype.removeElementScroll = function(box) {
      var boxWithoutScroll = createBox();
      copyBoxInto(boxWithoutScroll, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        var scroll_1 = node.scroll, options = node.options, isScrollRoot = node.isScrollRoot;
        if (node !== this.root && scroll_1 && options.layoutScroll) {
          if (isScrollRoot) {
            copyBoxInto(boxWithoutScroll, box);
            var rootScroll = this.root.scroll;
            if (rootScroll) {
              translateAxis(boxWithoutScroll.x, -rootScroll.x);
              translateAxis(boxWithoutScroll.y, -rootScroll.y);
            }
          }
          translateAxis(boxWithoutScroll.x, scroll_1.x);
          translateAxis(boxWithoutScroll.y, scroll_1.y);
        }
      }
      return boxWithoutScroll;
    };
    ProjectionNode.prototype.applyTransform = function(box, transformOnly) {
      if (transformOnly === void 0) {
        transformOnly = false;
      }
      var withTransforms = createBox();
      copyBoxInto(withTransforms, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!transformOnly && node.options.layoutScroll && node.scroll && node !== node.root) {
          transformBox(withTransforms, {
            x: -node.scroll.x,
            y: -node.scroll.y
          });
        }
        if (!hasTransform(node.latestValues))
          continue;
        transformBox(withTransforms, node.latestValues);
      }
      if (hasTransform(this.latestValues)) {
        transformBox(withTransforms, this.latestValues);
      }
      return withTransforms;
    };
    ProjectionNode.prototype.removeTransform = function(box) {
      var _a2;
      var boxWithoutTransform = createBox();
      copyBoxInto(boxWithoutTransform, box);
      for (var i = 0; i < this.path.length; i++) {
        var node = this.path[i];
        if (!node.instance)
          continue;
        if (!hasTransform(node.latestValues))
          continue;
        hasScale(node.latestValues) && node.updateSnapshot();
        var sourceBox = createBox();
        var nodeBox = node.measure();
        copyBoxInto(sourceBox, nodeBox);
        removeBoxTransforms(boxWithoutTransform, node.latestValues, (_a2 = node.snapshot) === null || _a2 === void 0 ? void 0 : _a2.layout, sourceBox);
      }
      if (hasTransform(this.latestValues)) {
        removeBoxTransforms(boxWithoutTransform, this.latestValues);
      }
      return boxWithoutTransform;
    };
    ProjectionNode.prototype.setTargetDelta = function(delta) {
      this.targetDelta = delta;
      this.root.scheduleUpdateProjection();
    };
    ProjectionNode.prototype.setOptions = function(options) {
      var _a2;
      this.options = __assign(__assign(__assign({}, this.options), options), { crossfade: (_a2 = options.crossfade) !== null && _a2 !== void 0 ? _a2 : true });
    };
    ProjectionNode.prototype.clearMeasurements = function() {
      this.scroll = void 0;
      this.layout = void 0;
      this.snapshot = void 0;
      this.prevTransformTemplateValue = void 0;
      this.targetDelta = void 0;
      this.target = void 0;
      this.isLayoutDirty = false;
    };
    ProjectionNode.prototype.resolveTargetDelta = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      if (!this.layout || !(layout || layoutId))
        return;
      if (!this.targetDelta && !this.relativeTarget) {
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && this.relativeParent.layout) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
      if (!this.relativeTarget && !this.targetDelta)
        return;
      if (!this.target) {
        this.target = createBox();
        this.targetWithTransforms = createBox();
      }
      if (this.relativeTarget && this.relativeTargetOrigin && ((_a2 = this.relativeParent) === null || _a2 === void 0 ? void 0 : _a2.target)) {
        calcRelativeBox(this.target, this.relativeTarget, this.relativeParent.target);
      } else if (this.targetDelta) {
        if (Boolean(this.resumingFrom)) {
          this.target = this.applyTransform(this.layout.actual);
        } else {
          copyBoxInto(this.target, this.layout.actual);
        }
        applyBoxDelta(this.target, this.targetDelta);
      } else {
        copyBoxInto(this.target, this.layout.actual);
      }
      if (this.attemptToResolveRelativeTarget) {
        this.attemptToResolveRelativeTarget = false;
        this.relativeParent = this.getClosestProjectingParent();
        if (this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target) {
          this.relativeTarget = createBox();
          this.relativeTargetOrigin = createBox();
          calcRelativePosition(this.relativeTargetOrigin, this.target, this.relativeParent.target);
          copyBoxInto(this.relativeTarget, this.relativeTargetOrigin);
        }
      }
    };
    ProjectionNode.prototype.getClosestProjectingParent = function() {
      if (!this.parent || hasTransform(this.parent.latestValues))
        return void 0;
      if ((this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout) {
        return this.parent;
      } else {
        return this.parent.getClosestProjectingParent();
      }
    };
    ProjectionNode.prototype.calcProjection = function() {
      var _a2;
      var _b = this.options, layout = _b.layout, layoutId = _b.layoutId;
      this.isTreeAnimating = Boolean(((_a2 = this.parent) === null || _a2 === void 0 ? void 0 : _a2.isTreeAnimating) || this.currentAnimation || this.pendingAnimation);
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = void 0;
      }
      if (!this.layout || !(layout || layoutId))
        return;
      var lead = this.getLead();
      copyBoxInto(this.layoutCorrected, this.layout.actual);
      applyTreeDeltas(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== lead);
      var target = lead.target;
      if (!target)
        return;
      if (!this.projectionDelta) {
        this.projectionDelta = createDelta();
        this.projectionDeltaWithTransform = createDelta();
      }
      var prevTreeScaleX = this.treeScale.x;
      var prevTreeScaleY = this.treeScale.y;
      var prevProjectionTransform = this.projectionTransform;
      calcBoxDelta(this.projectionDelta, this.layoutCorrected, target, this.latestValues);
      this.projectionTransform = buildProjectionTransform(this.projectionDelta, this.treeScale);
      if (this.projectionTransform !== prevProjectionTransform || this.treeScale.x !== prevTreeScaleX || this.treeScale.y !== prevTreeScaleY) {
        this.hasProjected = true;
        this.scheduleRender();
        this.notifyListeners("projectionUpdate", target);
      }
    };
    ProjectionNode.prototype.hide = function() {
      this.isVisible = false;
    };
    ProjectionNode.prototype.show = function() {
      this.isVisible = true;
    };
    ProjectionNode.prototype.scheduleRender = function(notifyAll) {
      var _a2, _b, _c;
      if (notifyAll === void 0) {
        notifyAll = true;
      }
      (_b = (_a2 = this.options).scheduleRender) === null || _b === void 0 ? void 0 : _b.call(_a2);
      notifyAll && ((_c = this.getStack()) === null || _c === void 0 ? void 0 : _c.scheduleRender());
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = void 0;
      }
    };
    ProjectionNode.prototype.setAnimationOrigin = function(delta, hasOnlyRelativeTargetChanged) {
      var _this = this;
      var _a2;
      if (hasOnlyRelativeTargetChanged === void 0) {
        hasOnlyRelativeTargetChanged = false;
      }
      var snapshot = this.snapshot;
      var snapshotLatestValues = (snapshot === null || snapshot === void 0 ? void 0 : snapshot.latestValues) || {};
      var mixedValues = __assign({}, this.latestValues);
      var targetDelta = createDelta();
      this.relativeTarget = this.relativeTargetOrigin = void 0;
      this.attemptToResolveRelativeTarget = !hasOnlyRelativeTargetChanged;
      var relativeLayout = createBox();
      var isSharedLayoutAnimation = snapshot === null || snapshot === void 0 ? void 0 : snapshot.isShared;
      var isOnlyMember = (((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.members.length) || 0) <= 1;
      var shouldCrossfadeOpacity = Boolean(isSharedLayoutAnimation && !isOnlyMember && this.options.crossfade === true && !this.path.some(hasOpacityCrossfade));
      this.animationProgress = 0;
      this.mixTargetDelta = function(latest) {
        var _a3;
        var progress2 = latest / 1e3;
        mixAxisDelta(targetDelta.x, delta.x, progress2);
        mixAxisDelta(targetDelta.y, delta.y, progress2);
        _this.setTargetDelta(targetDelta);
        if (_this.relativeTarget && _this.relativeTargetOrigin && _this.layout && ((_a3 = _this.relativeParent) === null || _a3 === void 0 ? void 0 : _a3.layout)) {
          calcRelativePosition(relativeLayout, _this.layout.actual, _this.relativeParent.layout.actual);
          mixBox(_this.relativeTarget, _this.relativeTargetOrigin, relativeLayout, progress2);
        }
        if (isSharedLayoutAnimation) {
          _this.animationValues = mixedValues;
          mixValues(mixedValues, snapshotLatestValues, _this.latestValues, progress2, shouldCrossfadeOpacity, isOnlyMember);
        }
        _this.root.scheduleUpdateProjection();
        _this.scheduleRender();
        _this.animationProgress = progress2;
      };
      this.mixTargetDelta(0);
    };
    ProjectionNode.prototype.startAnimation = function(options) {
      var _this = this;
      var _a2, _b;
      this.notifyListeners("animationStart");
      (_a2 = this.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      if (this.resumingFrom) {
        (_b = this.resumingFrom.currentAnimation) === null || _b === void 0 ? void 0 : _b.stop();
      }
      if (this.pendingAnimation) {
        cancelSync.update(this.pendingAnimation);
        this.pendingAnimation = void 0;
      }
      this.pendingAnimation = es_default.update(function() {
        globalProjectionState.hasAnimatedSinceResize = true;
        _this.currentAnimation = animate2(0, animationTarget, __assign(__assign({}, options), { onUpdate: function(latest) {
          var _a3;
          _this.mixTargetDelta(latest);
          (_a3 = options.onUpdate) === null || _a3 === void 0 ? void 0 : _a3.call(options, latest);
        }, onComplete: function() {
          var _a3;
          (_a3 = options.onComplete) === null || _a3 === void 0 ? void 0 : _a3.call(options);
          _this.completeAnimation();
        } }));
        if (_this.resumingFrom) {
          _this.resumingFrom.currentAnimation = _this.currentAnimation;
        }
        _this.pendingAnimation = void 0;
      });
    };
    ProjectionNode.prototype.completeAnimation = function() {
      var _a2;
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = void 0;
        this.resumingFrom.preserveOpacity = void 0;
      }
      (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.exitAnimationComplete();
      this.resumingFrom = this.currentAnimation = this.animationValues = void 0;
      this.notifyListeners("animationComplete");
    };
    ProjectionNode.prototype.finishAnimation = function() {
      var _a2;
      if (this.currentAnimation) {
        (_a2 = this.mixTargetDelta) === null || _a2 === void 0 ? void 0 : _a2.call(this, animationTarget);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    };
    ProjectionNode.prototype.applyTransformsToTarget = function() {
      var _a2 = this.getLead(), targetWithTransforms = _a2.targetWithTransforms, target = _a2.target, layout = _a2.layout, latestValues = _a2.latestValues;
      if (!targetWithTransforms || !target || !layout)
        return;
      copyBoxInto(targetWithTransforms, target);
      transformBox(targetWithTransforms, latestValues);
      calcBoxDelta(this.projectionDeltaWithTransform, this.layoutCorrected, targetWithTransforms, latestValues);
    };
    ProjectionNode.prototype.registerSharedNode = function(layoutId, node) {
      var _a2, _b, _c;
      if (!this.sharedNodes.has(layoutId)) {
        this.sharedNodes.set(layoutId, new NodeStack());
      }
      var stack = this.sharedNodes.get(layoutId);
      stack.add(node);
      node.promote({
        transition: (_a2 = node.options.initialPromotionConfig) === null || _a2 === void 0 ? void 0 : _a2.transition,
        preserveFollowOpacity: (_c = (_b = node.options.initialPromotionConfig) === null || _b === void 0 ? void 0 : _b.shouldPreserveFollowOpacity) === null || _c === void 0 ? void 0 : _c.call(_b, node)
      });
    };
    ProjectionNode.prototype.isLead = function() {
      var stack = this.getStack();
      return stack ? stack.lead === this : true;
    };
    ProjectionNode.prototype.getLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? ((_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.lead) || this : this;
    };
    ProjectionNode.prototype.getPrevLead = function() {
      var _a2;
      var layoutId = this.options.layoutId;
      return layoutId ? (_a2 = this.getStack()) === null || _a2 === void 0 ? void 0 : _a2.prevLead : void 0;
    };
    ProjectionNode.prototype.getStack = function() {
      var layoutId = this.options.layoutId;
      if (layoutId)
        return this.root.sharedNodes.get(layoutId);
    };
    ProjectionNode.prototype.promote = function(_a2) {
      var _b = _a2 === void 0 ? {} : _a2, needsReset = _b.needsReset, transition = _b.transition, preserveFollowOpacity = _b.preserveFollowOpacity;
      var stack = this.getStack();
      if (stack)
        stack.promote(this, preserveFollowOpacity);
      if (needsReset) {
        this.projectionDelta = void 0;
        this.needsReset = true;
      }
      if (transition)
        this.setOptions({ transition });
    };
    ProjectionNode.prototype.relegate = function() {
      var stack = this.getStack();
      if (stack) {
        return stack.relegate(this);
      } else {
        return false;
      }
    };
    ProjectionNode.prototype.resetRotation = function() {
      var visualElement2 = this.options.visualElement;
      if (!visualElement2)
        return;
      var hasRotate = false;
      var resetValues = {};
      for (var i = 0; i < transformAxes.length; i++) {
        var axis = transformAxes[i];
        var key = "rotate" + axis;
        if (!visualElement2.getStaticValue(key)) {
          continue;
        }
        hasRotate = true;
        resetValues[key] = visualElement2.getStaticValue(key);
        visualElement2.setStaticValue(key, 0);
      }
      if (!hasRotate)
        return;
      visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.syncRender();
      for (var key in resetValues) {
        visualElement2.setStaticValue(key, resetValues[key]);
      }
      visualElement2.scheduleRender();
    };
    ProjectionNode.prototype.getProjectionStyles = function(styleProp) {
      var _a2, _b, _c, _d, _e, _f;
      if (styleProp === void 0) {
        styleProp = {};
      }
      var styles = {};
      if (!this.instance || this.isSVG)
        return styles;
      if (!this.isVisible) {
        return { visibility: "hidden" };
      } else {
        styles.visibility = "";
      }
      var transformTemplate = (_a2 = this.options.visualElement) === null || _a2 === void 0 ? void 0 : _a2.getProps().transformTemplate;
      if (this.needsReset) {
        this.needsReset = false;
        styles.opacity = "";
        styles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        styles.transform = transformTemplate ? transformTemplate(this.latestValues, "") : "none";
        return styles;
      }
      var lead = this.getLead();
      if (!this.projectionDelta || !this.layout || !lead.target) {
        var emptyStyles = {};
        if (this.options.layoutId) {
          emptyStyles.opacity = (_b = this.latestValues.opacity) !== null && _b !== void 0 ? _b : 1;
          emptyStyles.pointerEvents = resolveMotionValue(styleProp.pointerEvents) || "";
        }
        if (this.hasProjected && !hasTransform(this.latestValues)) {
          emptyStyles.transform = transformTemplate ? transformTemplate({}, "") : "none";
          this.hasProjected = false;
        }
        return emptyStyles;
      }
      var valuesToRender = lead.animationValues || lead.latestValues;
      this.applyTransformsToTarget();
      styles.transform = buildProjectionTransform(this.projectionDeltaWithTransform, this.treeScale, valuesToRender);
      if (transformTemplate) {
        styles.transform = transformTemplate(valuesToRender, styles.transform);
      }
      var _g = this.projectionDelta, x = _g.x, y = _g.y;
      styles.transformOrigin = "".concat(x.origin * 100, "% ").concat(y.origin * 100, "% 0");
      if (lead.animationValues) {
        styles.opacity = lead === this ? (_d = (_c = valuesToRender.opacity) !== null && _c !== void 0 ? _c : this.latestValues.opacity) !== null && _d !== void 0 ? _d : 1 : this.preserveOpacity ? this.latestValues.opacity : valuesToRender.opacityExit;
      } else {
        styles.opacity = lead === this ? (_e = valuesToRender.opacity) !== null && _e !== void 0 ? _e : "" : (_f = valuesToRender.opacityExit) !== null && _f !== void 0 ? _f : 0;
      }
      for (var key in scaleCorrectors) {
        if (valuesToRender[key] === void 0)
          continue;
        var _h = scaleCorrectors[key], correct = _h.correct, applyTo = _h.applyTo;
        var corrected = correct(valuesToRender[key], lead);
        if (applyTo) {
          var num = applyTo.length;
          for (var i = 0; i < num; i++) {
            styles[applyTo[i]] = corrected;
          }
        } else {
          styles[key] = corrected;
        }
      }
      if (this.options.layoutId) {
        styles.pointerEvents = lead === this ? resolveMotionValue(styleProp.pointerEvents) || "" : "none";
      }
      return styles;
    };
    ProjectionNode.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    };
    ProjectionNode.prototype.resetTree = function() {
      this.root.nodes.forEach(function(node) {
        var _a2;
        return (_a2 = node.currentAnimation) === null || _a2 === void 0 ? void 0 : _a2.stop();
      });
      this.root.nodes.forEach(clearMeasurements);
      this.root.sharedNodes.clear();
    };
    return ProjectionNode;
  }();
}
function updateLayout(node) {
  node.updateLayout();
}
function notifyLayoutUpdate(node) {
  var _a, _b, _c, _d;
  var snapshot = (_b = (_a = node.resumeFrom) === null || _a === void 0 ? void 0 : _a.snapshot) !== null && _b !== void 0 ? _b : node.snapshot;
  if (node.isLead() && node.layout && snapshot && node.hasListeners("didUpdate")) {
    var _e = node.layout, layout_1 = _e.actual, measuredLayout = _e.measured;
    if (node.options.animationType === "size") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(axisSnapshot);
        axisSnapshot.min = layout_1[axis].min;
        axisSnapshot.max = axisSnapshot.min + length;
      });
    } else if (node.options.animationType === "position") {
      eachAxis(function(axis) {
        var axisSnapshot = snapshot.isShared ? snapshot.measured[axis] : snapshot.layout[axis];
        var length = calcLength(layout_1[axis]);
        axisSnapshot.max = axisSnapshot.min + length;
      });
    }
    var layoutDelta = createDelta();
    calcBoxDelta(layoutDelta, layout_1, snapshot.layout);
    var visualDelta = createDelta();
    if (snapshot.isShared) {
      calcBoxDelta(visualDelta, node.applyTransform(measuredLayout, true), snapshot.measured);
    } else {
      calcBoxDelta(visualDelta, layout_1, snapshot.layout);
    }
    var hasLayoutChanged = !isDeltaZero(layoutDelta);
    var hasRelativeTargetChanged = false;
    if (!node.resumeFrom) {
      node.relativeParent = node.getClosestProjectingParent();
      if (node.relativeParent && !node.relativeParent.resumeFrom) {
        var _f = node.relativeParent, parentSnapshot = _f.snapshot, parentLayout = _f.layout;
        if (parentSnapshot && parentLayout) {
          var relativeSnapshot = createBox();
          calcRelativePosition(relativeSnapshot, snapshot.layout, parentSnapshot.layout);
          var relativeLayout = createBox();
          calcRelativePosition(relativeLayout, layout_1, parentLayout.actual);
          if (!boxEquals(relativeSnapshot, relativeLayout)) {
            hasRelativeTargetChanged = true;
          }
        }
      }
    }
    node.notifyListeners("didUpdate", {
      layout: layout_1,
      snapshot,
      delta: visualDelta,
      layoutDelta,
      hasLayoutChanged,
      hasRelativeTargetChanged
    });
  } else if (node.isLead()) {
    (_d = (_c = node.options).onExitComplete) === null || _d === void 0 ? void 0 : _d.call(_c);
  }
  node.options.transition = void 0;
}
function clearSnapshot(node) {
  node.clearSnapshot();
}
function clearMeasurements(node) {
  node.clearMeasurements();
}
function resetTransformStyle(node) {
  var visualElement2 = node.options.visualElement;
  if (visualElement2 === null || visualElement2 === void 0 ? void 0 : visualElement2.getProps().onBeforeLayoutMeasure) {
    visualElement2.notifyBeforeLayoutMeasure();
  }
  node.resetTransform();
}
function finishAnimation(node) {
  node.finishAnimation();
  node.targetDelta = node.relativeTarget = node.target = void 0;
}
function resolveTargetDelta(node) {
  node.resolveTargetDelta();
}
function calcProjection(node) {
  node.calcProjection();
}
function resetRotation(node) {
  node.resetRotation();
}
function removeLeadSnapshots(stack) {
  stack.removeLeadSnapshot();
}
function mixAxisDelta(output, delta, p) {
  output.translate = mix(delta.translate, 0, p);
  output.scale = mix(delta.scale, 1, p);
  output.origin = delta.origin;
  output.originPoint = delta.originPoint;
}
function mixAxis(output, from2, to, p) {
  output.min = mix(from2.min, to.min, p);
  output.max = mix(from2.max, to.max, p);
}
function mixBox(output, from2, to, p) {
  mixAxis(output.x, from2.x, to.x, p);
  mixAxis(output.y, from2.y, to.y, p);
}
function hasOpacityCrossfade(node) {
  return node.animationValues && node.animationValues.opacityExit !== void 0;
}
var defaultLayoutTransition = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function mountNodeEarly(node, id2) {
  var searchNode = node.root;
  for (var i = node.path.length - 1; i >= 0; i--) {
    if (Boolean(node.path[i].instance)) {
      searchNode = node.path[i];
      break;
    }
  }
  var searchElement = searchNode && searchNode !== node.root ? searchNode.instance : document;
  var element = searchElement.querySelector('[data-projection-id="'.concat(id2, '"]'));
  if (element)
    node.mount(element, true);
}
function roundAxis(axis) {
  axis.min = Math.round(axis.min);
  axis.max = Math.round(axis.max);
}
function roundBox(box) {
  roundAxis(box.x);
  roundAxis(box.y);
}

// node_modules/framer-motion/dist/es/projection/node/DocumentProjectionNode.mjs
var DocumentProjectionNode = createProjectionNode({
  attachResizeListener: function(ref, notify) {
    return addDomEvent(ref, "resize", notify);
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  },
  checkIsScrollRoot: function() {
    return true;
  }
});

// node_modules/framer-motion/dist/es/projection/node/HTMLProjectionNode.mjs
var rootProjectionNode = {
  current: void 0
};
var HTMLProjectionNode = createProjectionNode({
  measureScroll: function(instance) {
    return {
      x: instance.scrollLeft,
      y: instance.scrollTop
    };
  },
  defaultParent: function() {
    if (!rootProjectionNode.current) {
      var documentNode = new DocumentProjectionNode(0, {});
      documentNode.mount(window);
      documentNode.setOptions({ layoutScroll: true });
      rootProjectionNode.current = documentNode;
    }
    return rootProjectionNode.current;
  },
  resetTransform: function(instance, value) {
    instance.style.transform = value !== null && value !== void 0 ? value : "none";
  },
  checkIsScrollRoot: function(instance) {
    return Boolean(window.getComputedStyle(instance).position === "fixed");
  }
});

// node_modules/framer-motion/dist/es/render/dom/motion.mjs
var featureBundle = __assign(__assign(__assign(__assign({}, animations), gestureAnimations), drag), layoutFeatures);
var motion = /* @__PURE__ */ createMotionProxy(function(Component, config) {
  return createDomMotionConfig(Component, config, featureBundle, createDomVisualElement, HTMLProjectionNode);
});

// node_modules/sanity/lib/_chunks/index-def00177.js
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
var _templateObject22;
var _templateObject23;
var _templateObject24;
var _templateObject25;
var _templateObject26;
var _templateObject27;
var _templateObject28;
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}
function Delay(_ref) {
  let {
    children,
    ms = 0
  } = _ref;
  const [ready, setReady] = (0, import_react30.useState)(ms <= 0);
  (0, import_react30.useEffect)(() => {
    if (ms <= 0) {
      return void 0;
    }
    const timeoutId = setTimeout(() => setReady(true), ms);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [ms]);
  if (!ready || !children) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  }
  return typeof children === "function" ? children() : children;
}
var RenderActionCollectionState = (props) => {
  const {
    actions,
    children,
    actionProps,
    onActionComplete
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GetHookCollectionState, {
    onReset: onActionComplete,
    hooks: actions,
    args: actionProps,
    children
  });
};
var RenderBadgeCollectionState = (props) => {
  const {
    badges,
    children,
    badgeProps,
    ...rest
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GetHookCollectionState, {
    ...rest,
    hooks: badges,
    args: badgeProps,
    children
  });
};
var emptyArray = [];
function PaneRouterProvider(props) {
  const {
    children,
    flatIndex,
    index: index2,
    params,
    payload,
    siblingIndex
  } = props;
  const {
    navigate,
    navigateIntent
  } = useRouter();
  const routerState = useRouterState();
  const routerPaneGroups = (0, import_react30.useMemo)(() => (routerState == null ? void 0 : routerState.panes) || emptyArray, [routerState == null ? void 0 : routerState.panes]);
  const groupIndex = index2 - 1;
  const modifyCurrentGroup = (0, import_react30.useCallback)((modifier) => {
    const currentGroup = routerPaneGroups[groupIndex] || [];
    const currentItem = currentGroup[siblingIndex];
    const nextGroup = modifier(currentGroup, currentItem);
    const nextPanes = [...routerPaneGroups.slice(0, groupIndex), nextGroup, ...routerPaneGroups.slice(groupIndex + 1)];
    const nextRouterState = {
      ...routerState || {},
      panes: nextPanes
    };
    setTimeout(() => navigate(nextRouterState), 0);
    return nextRouterState;
  }, [groupIndex, navigate, routerPaneGroups, routerState, siblingIndex]);
  const setPayload = (0, import_react30.useCallback)((nextPayload) => {
    modifyCurrentGroup((siblings, item) => [...siblings.slice(0, siblingIndex), {
      ...item,
      payload: nextPayload
    }, ...siblings.slice(siblingIndex + 1)]);
  }, [modifyCurrentGroup, siblingIndex]);
  const setParams = (0, import_react30.useCallback)((nextParams) => {
    modifyCurrentGroup((siblings, item) => [...siblings.slice(0, siblingIndex), {
      ...item,
      params: nextParams
    }, ...siblings.slice(siblingIndex + 1)]);
  }, [modifyCurrentGroup, siblingIndex]);
  const handleEditReference = (0, import_react30.useCallback)((_ref2) => {
    let {
      id: id2,
      parentRefPath,
      type,
      template
    } = _ref2;
    navigate({
      panes: [...routerPaneGroups.slice(0, groupIndex + 1), [{
        id: id2,
        params: {
          template: template.id,
          parentRefPath: toString(parentRefPath),
          type
        },
        payload: template.params
      }]]
    });
  }, [groupIndex, navigate, routerPaneGroups]);
  const ctx = (0, import_react30.useMemo)(() => ({
    index: flatIndex,
    groupIndex,
    siblingIndex,
    payload,
    params,
    hasGroupSiblings: routerPaneGroups[groupIndex] ? routerPaneGroups[groupIndex].length > 1 : false,
    groupLength: routerPaneGroups[groupIndex] ? routerPaneGroups[groupIndex].length : 0,
    routerPanesState: routerPaneGroups,
    ChildLink,
    BackLink,
    ReferenceChildLink,
    handleEditReference,
    ParameterizedLink,
    replaceCurrent: function() {
      let opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      modifyCurrentGroup(() => [{
        id: opts.id || "",
        payload: opts.payload,
        params: opts.params || {}
      }]);
    },
    closeCurrent: () => {
      modifyCurrentGroup((siblings, item) => siblings.length > 1 ? siblings.filter((sibling) => sibling !== item) : siblings);
    },
    duplicateCurrent: (options) => {
      modifyCurrentGroup((siblings, item) => {
        const duplicatedItem = {
          ...item,
          payload: (options == null ? void 0 : options.payload) || item.payload,
          params: (options == null ? void 0 : options.params) || item.params
        };
        return [...siblings.slice(0, siblingIndex), duplicatedItem, ...siblings.slice(siblingIndex)];
      });
    },
    setView: (viewId) => {
      const restParams = (0, import_omit.default)(params, "view");
      return setParams(viewId ? {
        ...restParams,
        view: viewId
      } : restParams);
    },
    setParams,
    setPayload,
    navigateIntent
  }), [flatIndex, groupIndex, handleEditReference, modifyCurrentGroup, navigateIntent, params, payload, routerPaneGroups, setParams, setPayload, siblingIndex]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneRouterContext.Provider, {
    value: ctx,
    children
  });
}
function _calcPaneResize(cache, left, right, deltaX) {
  var _a, _b;
  const sum = {
    flex: cache.left.flex + cache.right.flex,
    width: cache.left.width + cache.right.width
  };
  const leftMinWidth = (_a = left.minWidth) != null ? _a : PANE_DEFAULT_MIN_WIDTH;
  const rightMinWidth = (_b = right.minWidth) != null ? _b : PANE_DEFAULT_MIN_WIDTH;
  const leftMaxWidth = Math.min(left.maxWidth || Infinity, sum.width - rightMinWidth);
  const rightMaxWidth = Math.min(right.maxWidth || Infinity, sum.width - leftMinWidth);
  let minDeltaX = leftMinWidth - cache.left.width;
  const rightMinDeltaX = cache.right.width - rightMaxWidth;
  if (minDeltaX < rightMinDeltaX) {
    minDeltaX = rightMinDeltaX;
  }
  let maxDeltaX = cache.right.width - rightMinWidth;
  const leftMaxDeltaX = leftMaxWidth - cache.left.width;
  if (maxDeltaX > leftMaxDeltaX) {
    maxDeltaX = leftMaxDeltaX;
  }
  const _deltaX = Math.min(Math.max(deltaX, minDeltaX), maxDeltaX);
  const leftW = cache.left.width + _deltaX;
  const rightW = cache.right.width - _deltaX;
  const leftFlex = leftW / sum.width * sum.flex;
  const rightFlex = rightW / sum.width * sum.flex;
  return {
    leftFlex,
    leftW,
    rightFlex,
    rightW
  };
}
function _getDOMPath(rootElement, el) {
  const path = [];
  let e = el;
  while (e !== rootElement) {
    const parentElement = e.parentElement;
    if (!parentElement)
      return path;
    const children = Array.from(parentElement.childNodes);
    const index2 = children.indexOf(e);
    path.unshift(index2);
    if (parentElement === rootElement) {
      return path;
    }
    e = parentElement;
  }
  return path;
}
var EMPTY_PATH = [];
function _sortElements(rootElement, elements) {
  const map2 = /* @__PURE__ */ new WeakMap();
  for (const element of elements) {
    map2.set(element, _getDOMPath(rootElement, element));
  }
  const _sortByElementPath = (a2, b2) => {
    const _a = map2.get(a2) || EMPTY_PATH;
    const _b = map2.get(b2) || EMPTY_PATH;
    const len = Math.max(_a.length, _b.length);
    for (let i = 0; i < len; i += 1) {
      const aIndex = _a[i] || -1;
      const bIndex = _b[i] || -1;
      if (aIndex !== bIndex) {
        return aIndex - bIndex;
      }
    }
    return 0;
  };
  elements.sort(_sortByElementPath);
}
function createPaneLayoutController() {
  const observers2 = [];
  const elements = [];
  const optionsMap = /* @__PURE__ */ new WeakMap();
  const userCollapsedElementSet = /* @__PURE__ */ new Set();
  const cache = {};
  let rootElement = null;
  let rootWidth = 0;
  let expandedElement = null;
  let resizeDataMap = /* @__PURE__ */ new Map();
  let resizing = false;
  function collapse(element) {
    userCollapsedElementSet.add(element);
    if (expandedElement === element) {
      expandedElement = null;
    }
    _notifyObservers();
  }
  function expand(element) {
    userCollapsedElementSet.delete(element);
    expandedElement = element;
    _notifyObservers();
  }
  function mount(element, options) {
    optionsMap.set(element, {
      ...options,
      original: options
    });
    elements.push(element);
    if (rootElement) {
      _sortElements(rootElement, elements);
    }
    expand(element);
    return () => {
      const idx = elements.indexOf(element);
      if (idx > -1) {
        elements.splice(idx, 1);
      }
      optionsMap.delete(element);
      _notifyObservers();
    };
  }
  function resize(type, leftElement, deltaX) {
    var _a, _b, _c, _d;
    const leftIndex = elements.indexOf(leftElement);
    const leftOptions = optionsMap.get(leftElement);
    if (!leftOptions)
      return;
    const rightElement = elements[leftIndex + 1];
    const rightOptions = optionsMap.get(rightElement);
    if (!rightOptions)
      return;
    if (type === "start") {
      resizing = true;
      cache.left = {
        element: leftElement,
        flex: leftOptions.flex || 1,
        width: leftElement.offsetWidth
      };
      cache.right = {
        element: rightElement,
        flex: rightOptions.flex || 1,
        width: rightElement.offsetWidth
      };
      _notifyObservers();
    }
    if (type === "move" && cache.left && cache.right) {
      resizeDataMap = /* @__PURE__ */ new Map();
      const {
        leftW,
        rightW,
        leftFlex,
        rightFlex
      } = _calcPaneResize(cache, leftOptions, rightOptions, deltaX);
      resizeDataMap.set(leftElement, {
        flex: leftFlex,
        width: leftW
      });
      resizeDataMap.set(rightElement, {
        flex: rightFlex,
        width: rightW
      });
      _notifyObservers();
    }
    if (type === "end") {
      resizing = false;
      const leftResizeData = resizeDataMap.get(leftElement);
      const rightResizeData = resizeDataMap.get(rightElement);
      optionsMap.set(leftElement, {
        ...leftOptions,
        currentMinWidth: 0,
        currentMaxWidth: (_a = leftOptions.maxWidth) != null ? _a : Infinity,
        flex: (_b = leftResizeData == null ? void 0 : leftResizeData.flex) != null ? _b : leftOptions.flex
      });
      optionsMap.set(rightElement, {
        ...rightOptions,
        currentMinWidth: 0,
        currentMaxWidth: (_c = leftOptions.maxWidth) != null ? _c : Infinity,
        flex: (_d = rightResizeData == null ? void 0 : rightResizeData.flex) != null ? _d : rightOptions.flex
      });
      resizeDataMap = /* @__PURE__ */ new Map();
      delete cache.left;
      delete cache.right;
      _notifyObservers();
    }
  }
  function setRootElement(nextRootElement) {
    rootElement = nextRootElement;
  }
  function setRootWidth(nextRootWidth) {
    rootWidth = nextRootWidth;
    _notifyObservers();
  }
  function subscribe(observer) {
    observers2.push(observer);
    return () => {
      const idx = observers2.push(observer);
      if (idx > -1) {
        observers2.splice(idx, 1);
      }
    };
  }
  return {
    collapse,
    expand,
    mount,
    resize,
    setRootElement,
    setRootWidth,
    subscribe
  };
  function _notifyObservers() {
    var _a, _b, _c, _d;
    if (!rootWidth)
      return;
    const _elements = [];
    for (const element of elements) {
      if (element !== expandedElement) {
        _elements.unshift(element);
      }
    }
    if (expandedElement) {
      _elements.unshift(expandedElement);
    }
    const dataMap = /* @__PURE__ */ new WeakMap();
    const len = _elements.length;
    const lastElement = _elements[0];
    const collapsedWidth = (len - 1) * PANE_COLLAPSED_WIDTH;
    let remaingWidth = rootWidth - collapsedWidth;
    for (const element of _elements) {
      const options = optionsMap.get(element);
      if (!options) {
        continue;
      }
      const minWidth = options.currentMinWidth || options.minWidth || PANE_DEFAULT_MIN_WIDTH;
      const isLast = element === lastElement;
      const userCollapsed = userCollapsedElementSet.has(element);
      const sizeCollapsed = minWidth > remaingWidth;
      const collapsed = isLast ? false : userCollapsed || sizeCollapsed;
      const resizeData = resizeDataMap.get(element);
      dataMap.set(element, {
        element,
        collapsed,
        currentMinWidth: (_a = resizeData == null ? void 0 : resizeData.width) != null ? _a : options.currentMinWidth,
        currentMaxWidth: (_b = resizeData == null ? void 0 : resizeData.width) != null ? _b : options.currentMaxWidth,
        flex: (_d = (_c = resizeData == null ? void 0 : resizeData.flex) != null ? _c : options.flex) != null ? _d : 1
      });
      if (collapsed) {
        remaingWidth -= PANE_COLLAPSED_WIDTH;
      } else {
        remaingWidth -= minWidth - PANE_COLLAPSED_WIDTH;
      }
    }
    const panes = [];
    for (const element of elements) {
      const data = dataMap.get(element);
      if (data)
        panes.push(data);
    }
    for (const observer of observers2) {
      observer({
        expandedElement: expandedElement || elements[elements.length - 1] || null,
        panes,
        resizing
      });
    }
  }
}
function PaneLayout(props) {
  const {
    children,
    minWidth,
    onCollapse,
    onExpand,
    ...restProps
  } = props;
  const controller = (0, import_react30.useMemo)(() => createPaneLayoutController(), []);
  const [rootElement, setRootElement] = (0, import_react30.useState)(null);
  const rootRect = useElementRect(rootElement);
  const width = (rootRect == null ? void 0 : rootRect.width) || 0;
  const collapsed = width === void 0 || !minWidth ? void 0 : width < minWidth;
  const [state, setState] = (0, import_react30.useState)({
    expandedElement: null,
    panes: [],
    resizing: false
  });
  (0, import_react30.useEffect)(() => controller.setRootElement(rootElement), [controller, rootElement]);
  (0, import_react30.useEffect)(() => controller.setRootWidth(width), [controller, width]);
  (0, import_react30.useEffect)(() => controller.subscribe(setState), [controller]);
  (0, import_react30.useEffect)(() => {
    if (collapsed === void 0)
      return;
    if (collapsed && onCollapse)
      onCollapse();
    if (!collapsed && onExpand)
      onExpand();
  }, [collapsed, onCollapse, onExpand]);
  const paneLayout = (0, import_react30.useMemo)(() => ({
    collapse: controller.collapse,
    collapsed,
    expand: controller.expand,
    expandedElement: state.expandedElement,
    mount: controller.mount,
    panes: state.panes,
    resize: controller.resize,
    resizing: state.resizing
  }), [collapsed, controller, state.expandedElement, state.panes, state.resizing]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneLayoutContext.Provider, {
    value: paneLayout,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
      "data-ui": "PaneLayout",
      ...restProps,
      "data-collapsed": collapsed ? "" : void 0,
      "data-resizing": state.resizing ? "" : void 0,
      "data-mounted": width ? "" : void 0,
      ref: setRootElement,
      children
    })
  });
}
var PaneResolutionError = class extends Error {
  constructor(_ref3) {
    let {
      message,
      context,
      helpId,
      cause
    } = _ref3;
    super(message);
    this.context = context;
    this.helpId = helpId;
    this.cause = cause;
  }
};
var randomIdCache = /* @__PURE__ */ new WeakMap();
function assignId(obj) {
  const cachedValue = randomIdCache.get(obj);
  if (cachedValue)
    return cachedValue;
  const id2 = nanoid();
  randomIdCache.set(obj, id2);
  return id2;
}
var bindCache = /* @__PURE__ */ new WeakMap();
function memoBind(obj, methodKey) {
  const boundMethods = bindCache.get(obj) || /* @__PURE__ */ new Map();
  if (boundMethods) {
    const bound2 = boundMethods.get(methodKey);
    if (bound2)
      return bound2;
  }
  const method = obj[methodKey];
  if (typeof method !== "function") {
    throw new Error("Expected property `".concat(methodKey, "` to be a function but got ").concat(typeof method, " instead."));
  }
  const bound = method.bind(obj);
  boundMethods.set(methodKey, bound);
  bindCache.set(obj, boundMethods);
  return bound;
}
var isPromise = (thing) => {
  return !!thing && typeof (thing == null ? void 0 : thing.then) === "function";
};
var isSerializable = (thing) => {
  if (!isRecord$2(thing))
    return false;
  return typeof thing.serialize === "function";
};
var rethrowWithPaneResolutionErrors = (next) => (unresolvedPane, context, flatIndex) => {
  try {
    return next(unresolvedPane, context, flatIndex);
  } catch (e) {
    if (e instanceof PaneResolutionError) {
      throw e;
    }
    throw new PaneResolutionError({
      message: typeof (e == null ? void 0 : e.message) === "string" ? e.message : "",
      context,
      cause: e
    });
  }
};
var wrapWithPublishReplay = (next) => function() {
  return next(...arguments).pipe(
    publishReplay(1),
    refCount()
  );
};
function createPaneResolver(middleware) {
  const resolvePane = rethrowWithPaneResolutionErrors(wrapWithPublishReplay(middleware((unresolvedPane, context, flatIndex) => {
    if (!unresolvedPane) {
      throw new PaneResolutionError({
        message: "Pane returned no child",
        context,
        helpId: "structure-item-returned-no-child"
      });
    }
    if (isPromise(unresolvedPane) || isObservable(unresolvedPane)) {
      return from(unresolvedPane).pipe(switchMap((result) => resolvePane(result, context, flatIndex)));
    }
    if (isSerializable(unresolvedPane)) {
      return resolvePane(unresolvedPane.serialize(context), context, flatIndex);
    }
    if (typeof unresolvedPane === "function") {
      return resolvePane(unresolvedPane(context.id, context), context, flatIndex);
    }
    return of(unresolvedPane);
  })));
  return resolvePane;
}
async function resolveIntent(options) {
  const resolvedPaneCache = /* @__PURE__ */ new Map();
  const memoize = (nextFn) => (unresolvedPane, context, flatIndex) => {
    const key = unresolvedPane && "".concat(assignId(unresolvedPane), "-").concat(context.path.join("__"));
    const cachedResolvedPane = key && resolvedPaneCache.get(key);
    if (cachedResolvedPane)
      return cachedResolvedPane;
    const result = nextFn(unresolvedPane, context, flatIndex);
    if (key)
      resolvedPaneCache.set(key, result);
    return result;
  };
  const resolvePane = createPaneResolver(memoize);
  const fallbackEditorPanes = [[{
    id: "__edit__".concat(options.params.id),
    params: {
      ...(0, import_omit.default)(options.params, ["id"]),
      type: options.params.type
    },
    payload: options.payload
  }]];
  async function traverse(_ref4) {
    let {
      currentId,
      flatIndex,
      intent,
      params,
      parent: parent2,
      path,
      payload,
      unresolvedPane,
      levelIndex,
      structureContext
    } = _ref4;
    var _a;
    if (!unresolvedPane)
      return [];
    const {
      id: targetId,
      type: schemaTypeName,
      ...otherParams
    } = params;
    const context = {
      id: currentId,
      splitIndex: 0,
      parent: parent2,
      path,
      index: flatIndex,
      params: {},
      payload: void 0,
      structureContext
    };
    const resolvedPane = await firstValueFrom(resolvePane(unresolvedPane, context, flatIndex));
    if (resolvedPane.type === "document" && resolvedPane.id === targetId) {
      return [{
        panes: [...path.slice(0, path.length - 1).map((i) => [{
          id: i
        }]), [{
          id: targetId,
          params: otherParams,
          payload
        }]],
        depthIndex: path.length,
        levelIndex
      }];
    }
    if (((_a = resolvedPane.canHandleIntent) == null ? void 0 : _a.call(resolvedPane, intent, params, {
      pane: resolvedPane,
      index: flatIndex
    })) || resolvedPane.type === "documentList" && resolvedPane.schemaTypeName === schemaTypeName && resolvedPane.options.filter === "_type == $type") {
      return [{
        panes: [
          ...path.map((id2) => [{
            id: id2
          }]),
          [{
            id: params.id,
            params: otherParams,
            payload
          }]
        ],
        depthIndex: path.length,
        levelIndex
      }];
    }
    if (resolvedPane.type === "list" && resolvedPane.child && resolvedPane.items) {
      return (await Promise.all(resolvedPane.items.map((item, nextLevelIndex) => {
        if (item.type === "divider")
          return Promise.resolve([]);
        return traverse({
          currentId: item._id || item.id,
          flatIndex: flatIndex + 1,
          intent,
          params,
          parent: resolvedPane,
          path: [...path, item.id],
          payload,
          unresolvedPane: typeof resolvedPane.child === "function" ? memoBind(resolvedPane, "child") : resolvedPane.child,
          levelIndex: nextLevelIndex,
          structureContext
        });
      }))).flat();
    }
    return [];
  }
  const matchingPanes = await traverse({
    currentId: "root",
    flatIndex: 0,
    levelIndex: 0,
    intent: options.intent,
    params: options.params,
    parent: null,
    path: [],
    payload: options.payload,
    unresolvedPane: options.rootPaneNode,
    structureContext: options.structureContext
  });
  const closestPaneToRoot = matchingPanes.sort((a2, b2) => {
    if (a2.depthIndex === b2.depthIndex)
      return a2.levelIndex - b2.levelIndex;
    return a2.depthIndex - b2.depthIndex;
  })[0];
  if (closestPaneToRoot) {
    return closestPaneToRoot.panes;
  }
  return fallbackEditorPanes;
}
function useDeskTool() {
  const deskTool = (0, import_react30.useContext)(DeskToolContext);
  if (!deskTool)
    throw new Error("DeskTool: missing context value");
  return deskTool;
}
var fallbackEditorChild = (nodeId, context) => {
  const id2 = nodeId.replace(/^__edit__/, "");
  const {
    params,
    payload,
    structureContext: {
      resolveDocumentNode
    }
  } = context;
  const {
    type,
    template
  } = params;
  if (!type) {
    throw new Error("Document type for document with ID ".concat(id2, " was not provided in the router params."));
  }
  let defaultDocumentBuilder = resolveDocumentNode({
    schemaType: type,
    documentId: id2
  });
  defaultDocumentBuilder = defaultDocumentBuilder.id("editor").title("Editor");
  if (template) {
    defaultDocumentBuilder = defaultDocumentBuilder.initialValueTemplate(template, payload);
  }
  return defaultDocumentBuilder.serialize();
};
function hashContext(context) {
  var _a, _b;
  return "contextHash(".concat(JSON.stringify({
    id: context.id,
    parentId: parent && assignId(parent),
    path: context.path,
    index: context.index,
    splitIndex: context.splitIndex,
    serializeOptionsIndex: (_a = context.serializeOptions) == null ? void 0 : _a.index,
    serializeOptionsPath: (_b = context.serializeOptions) == null ? void 0 : _b.path
  }), ")");
}
var hashResolvedPaneMeta = (meta) => {
  const normalized = {
    type: meta.type,
    id: meta.routerPaneSibling.id,
    params: meta.routerPaneSibling.params || {},
    payload: meta.routerPaneSibling.payload || null,
    flatIndex: meta.flatIndex,
    groupIndex: meta.groupIndex,
    siblingIndex: meta.siblingIndex,
    path: meta.path,
    paneNode: meta.type === "resolvedMeta" ? assignId(meta.paneNode) : null
  };
  return "metaHash(".concat(JSON.stringify(normalized), ")");
};
function resolvePaneTree(_ref5) {
  let {
    unresolvedPane,
    flattenedRouterPanes,
    parent: parent2,
    path,
    resolvePane,
    structureContext
  } = _ref5;
  const [current, ...rest] = flattenedRouterPanes;
  const next = rest[0];
  const context = {
    id: current.routerPaneSibling.id,
    splitIndex: current.siblingIndex,
    parent: parent2,
    path: [...path, current.routerPaneSibling.id],
    index: current.flatIndex,
    params: current.routerPaneSibling.params || {},
    payload: current.routerPaneSibling.payload,
    structureContext
  };
  try {
    return resolvePane(unresolvedPane, context, current.flatIndex).pipe(
      switchMap((paneNode) => {
        const resolvedPaneMeta = {
          type: "resolvedMeta",
          ...current,
          paneNode,
          path: context.path
        };
        const loadingPanes = rest.map((i, restIndex) => {
          const loadingPanePath = [...context.path, ...rest.slice(restIndex).map((_, currentIndex) => "[".concat(i.flatIndex + currentIndex, "]"))];
          const loadingPane = {
            type: "loading",
            path: loadingPanePath,
            paneNode: null,
            ...i
          };
          return loadingPane;
        });
        if (!rest.length) {
          return of([resolvedPaneMeta]);
        }
        let nextStream;
        if (next == null ? void 0 : next.routerPaneSibling.id.startsWith("__edit__")) {
          nextStream = resolvePaneTree({
            unresolvedPane: fallbackEditorChild,
            flattenedRouterPanes: rest,
            parent: parent2,
            path: context.path,
            resolvePane,
            structureContext
          });
        } else if (current.groupIndex === (next == null ? void 0 : next.groupIndex)) {
          nextStream = resolvePaneTree({
            unresolvedPane,
            flattenedRouterPanes: rest,
            parent: parent2,
            path,
            resolvePane,
            structureContext
          });
        } else {
          nextStream = resolvePaneTree({
            unresolvedPane: typeof paneNode.child === "function" ? memoBind(paneNode, "child") : paneNode.child,
            flattenedRouterPanes: rest,
            parent: paneNode,
            path: context.path,
            resolvePane,
            structureContext
          });
        }
        return concat(
          of([resolvedPaneMeta, ...loadingPanes]),
          nextStream.pipe(map((nextResolvedPanes) => [resolvedPaneMeta, ...nextResolvedPanes]))
        );
      })
    );
  } catch (e) {
    if (e instanceof PaneResolutionError) {
      if (e.context) {
        console.warn("Pane resolution error at index ".concat(e.context.index).concat(e.context.splitIndex > 0 ? " for split pane index ".concat(e.context.splitIndex) : "", ": ").concat(e.message).concat(e.helpId ? " - see ".concat(generateHelpUrl(e.helpId)) : ""), e);
      }
      if (e.helpId === "structure-item-returned-no-child") {
        return of([]);
      }
    }
    throw e;
  }
}
function createResolvedPaneNodeStream(_ref6) {
  let {
    routerPanesStream,
    rootPaneNode,
    initialCacheState = {
      cacheKeysByFlatIndex: [],
      flattenedRouterPanes: [],
      resolvedPaneCache: /* @__PURE__ */ new Map(),
      resolvePane: () => NEVER
    },
    structureContext
  } = _ref6;
  const resolvedPanes$ = routerPanesStream.pipe(
    map((rawRouterPanes) => [[{
      id: "root"
    }], ...rawRouterPanes]),
    map((routerPanes) => {
      const flattenedRouterPanes = routerPanes.flatMap((routerPaneGroup, groupIndex) => routerPaneGroup.map((routerPaneSibling, siblingIndex) => ({
        routerPaneSibling,
        groupIndex,
        siblingIndex
      }))).map((i, index2) => ({
        ...i,
        flatIndex: index2
      }));
      return flattenedRouterPanes;
    }),
    startWith([]),
    pairwise(),
    map((_ref7) => {
      let [prev, curr] = _ref7;
      for (let i = 0; i < curr.length; i++) {
        const prevValue = prev[i];
        const currValue = curr[i];
        if (!(0, import_isEqual.default)(prevValue, currValue)) {
          return {
            flattenedRouterPanes: curr,
            diffIndex: i
          };
        }
      }
      return {
        flattenedRouterPanes: curr,
        diffIndex: curr.length
      };
    }),
    scan((acc, next) => {
      const {
        cacheKeysByFlatIndex,
        resolvedPaneCache
      } = acc;
      const {
        flattenedRouterPanes,
        diffIndex
      } = next;
      const beforeDiffIndex = cacheKeysByFlatIndex.slice(0, diffIndex + 1);
      const afterDiffIndex = cacheKeysByFlatIndex.slice(diffIndex + 1);
      const keysToKeep = new Set(beforeDiffIndex.flatMap((keySet) => Array.from(keySet)));
      const keysToDelete = afterDiffIndex.flatMap((keySet) => Array.from(keySet)).filter((key) => !keysToKeep.has(key));
      for (const key of keysToDelete) {
        resolvedPaneCache.delete(key);
      }
      const memoize = (nextFn) => (unresolvedPane, context, flatIndex) => {
        const key = unresolvedPane && "".concat(assignId(unresolvedPane), "-").concat(hashContext(context));
        const cachedResolvedPane = key && resolvedPaneCache.get(key);
        if (cachedResolvedPane)
          return cachedResolvedPane;
        const result = nextFn(unresolvedPane, context, flatIndex);
        if (!key)
          return result;
        const cacheKeySet = cacheKeysByFlatIndex[flatIndex] || /* @__PURE__ */ new Set();
        cacheKeySet.add(key);
        cacheKeysByFlatIndex[flatIndex] = cacheKeySet;
        resolvedPaneCache.set(key, result);
        return result;
      };
      return {
        flattenedRouterPanes,
        cacheKeysByFlatIndex,
        resolvedPaneCache,
        resolvePane: createPaneResolver(memoize)
      };
    }, initialCacheState),
    switchMap((_ref8) => {
      let {
        flattenedRouterPanes,
        resolvePane
      } = _ref8;
      return resolvePaneTree({
        unresolvedPane: rootPaneNode,
        flattenedRouterPanes,
        parent: null,
        path: [],
        resolvePane,
        structureContext
      });
    })
  );
  return resolvedPanes$.pipe(
    scan((prev, next) => next.map((nextPane, index2) => {
      const prevPane = prev[index2];
      if (!prevPane)
        return nextPane;
      if (nextPane.type !== "loading")
        return nextPane;
      if (prevPane.routerPaneSibling.id === nextPane.routerPaneSibling.id) {
        return prevPane;
      }
      return nextPane;
    }), []),
    distinctUntilChanged((prev, next) => {
      if (prev.length !== next.length)
        return false;
      for (let i = 0; i < next.length; i++) {
        const prevValue = prev[i];
        const nextValue = next[i];
        if (hashResolvedPaneMeta(prevValue) !== hashResolvedPaneMeta(nextValue)) {
          return false;
        }
      }
      return true;
    })
  );
}
function useRouterPanesStream() {
  const routerStateSubject = (0, import_react30.useMemo)(() => new ReplaySubject(1), []);
  const routerPanes$ = (0, import_react30.useMemo)(() => routerStateSubject.asObservable().pipe(map((_routerState) => (_routerState == null ? void 0 : _routerState.panes) || [])), [routerStateSubject]);
  const {
    state: routerState
  } = useRouter();
  (0, import_react30.useEffect)(() => {
    routerStateSubject.next(routerState);
  }, [routerState, routerStateSubject]);
  return routerPanes$;
}
function useResolvedPanes() {
  const [error, setError] = (0, import_react30.useState)();
  if (error)
    throw error;
  const {
    structureContext,
    rootPaneNode
  } = useDeskTool();
  const [data, setData] = (0, import_react30.useState)({
    paneDataItems: [],
    resolvedPanes: [],
    routerPanes: []
  });
  const routerPanesStream = useRouterPanesStream();
  (0, import_react30.useEffect)(() => {
    const resolvedPanes$ = createResolvedPaneNodeStream({
      rootPaneNode,
      routerPanesStream,
      structureContext
    }).pipe(map((resolvedPanes) => {
      const routerPanes = resolvedPanes.reduce((acc, next) => {
        const currentGroup = acc[next.groupIndex] || [];
        currentGroup[next.siblingIndex] = next.routerPaneSibling;
        acc[next.groupIndex] = currentGroup;
        return acc;
      }, []);
      const groupsLen = routerPanes.length;
      const paneDataItems = resolvedPanes.map((pane) => {
        var _a;
        const {
          groupIndex,
          flatIndex,
          siblingIndex,
          routerPaneSibling,
          path
        } = pane;
        const itemId = routerPaneSibling.id;
        const nextGroup = routerPanes[groupIndex + 1];
        const paneDataItem = {
          active: groupIndex === groupsLen - 2,
          childItemId: (_a = nextGroup == null ? void 0 : nextGroup[0].id) != null ? _a : null,
          index: flatIndex,
          itemId: routerPaneSibling.id,
          groupIndex,
          key: "".concat(pane.type === "loading" ? "unknown" : pane.paneNode.id, "-").concat(itemId, "-").concat(siblingIndex),
          pane: pane.type === "loading" ? LOADING_PANE : pane.paneNode,
          params: routerPaneSibling.params || {},
          path: path.join(";"),
          payload: routerPaneSibling.payload,
          selected: flatIndex === resolvedPanes.length - 1,
          siblingIndex
        };
        return paneDataItem;
      });
      return {
        paneDataItems,
        routerPanes,
        resolvedPanes: paneDataItems.map((pane) => pane.pane)
      };
    }));
    const subscription = resolvedPanes$.subscribe({
      next: (result) => setData(result),
      error: (e) => setError(e)
    });
    return () => subscription.unsubscribe();
  }, [rootPaneNode, routerPanesStream, structureContext]);
  return data;
}
function Redirect(_ref9) {
  let {
    panes
  } = _ref9;
  const {
    navigate
  } = useRouter();
  (0, import_react30.useEffect)(() => {
    navigate({
      panes
    }, {
      replace: true
    });
  }, [navigate, panes]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    height: "fill",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delay, {
      ms: 300,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        direction: "column",
        height: "fill",
        justify: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
          muted: true
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            muted: true,
            size: 1,
            children: "Redirecting\u2026"
          })
        })]
      })
    })
  });
}
async function ensureDocumentIdAndType(documentStore, id2, type) {
  if (id2 && type)
    return {
      id: id2,
      type
    };
  if (!id2 && type)
    return {
      id: v4_default(),
      type
    };
  if (id2 && !type) {
    const resolvedType = await firstValueFrom(documentStore.resolveTypeForDocument(id2));
    return {
      id: id2,
      type: resolvedType
    };
  }
  throw new PaneResolutionError({
    message: "Neither document `id` or `type` was provided when trying to resolve intent."
  });
}
function IntentResolver(_ref10) {
  let {
    intent,
    params: paramsProp = {},
    payload: payloadProp
  } = _ref10;
  const {
    rootPaneNode,
    structureContext
  } = useDeskTool();
  const documentStore = useDocumentStore();
  const params = useUnique(paramsProp);
  const payload = useUnique(payloadProp);
  const [nextRouterPanes, setNextRouterPanes] = (0, import_react30.useState)(null);
  const [error, setError] = (0, import_react30.useState)(null);
  const idParam = typeof params.id === "string" ? params.id : void 0;
  const typeParam = typeof params.type === "string" ? params.type : void 0;
  (0, import_react30.useEffect)(() => {
    const cancelledRef = {
      current: false
    };
    async function getNextRouterPanes() {
      const {
        id: id2,
        type
      } = await ensureDocumentIdAndType(documentStore, idParam, typeParam);
      return resolveIntent({
        intent,
        params: {
          ...params,
          id: id2,
          type
        },
        payload,
        rootPaneNode,
        structureContext
      });
    }
    getNextRouterPanes().then((result) => {
      if (!cancelledRef.current) {
        setNextRouterPanes(result);
      }
    }).catch(setError);
    return () => {
      cancelledRef.current = true;
    };
  }, [documentStore, idParam, intent, params, payload, rootPaneNode, structureContext, typeParam]);
  if (error)
    throw error;
  if (nextRouterPanes)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Redirect, {
      panes: nextRouterPanes
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    height: "fill",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delay, {
      ms: 300,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        direction: "column",
        height: "fill",
        justify: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
          muted: true
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            align: "center",
            muted: true,
            size: 1,
            children: "Loading\u2026"
          })
        })]
      })
    })
  });
}
var PathSegment = styled_components_browser_esm_default.span(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  &:not(:last-child)::after {\n    content: ' \u279D ';\n    opacity: 0.5;\n  }\n"])));
function formatStack(stack) {
  return stack.replace(/\(\.\.\.\)\./g, "(...)\n  .").replace(/__WEBPACK_IMPORTED_MODULE_\d+_+/g, "").replace(/___default\./g, ".").replace(new RegExp(" \\(https?:\\/\\/".concat(window.location.host), "g"), " (");
}
function StructureError(_ref11) {
  let {
    error
  } = _ref11;
  if (!(error instanceof PaneResolutionError)) {
    throw error;
  }
  const {
    cause
  } = error;
  const stack = (cause == null ? void 0 : cause.stack) || error.stack;
  const showStack = stack && !(cause instanceof SerializeError) && !error.message.includes("Module build failed:");
  const path = cause instanceof SerializeError ? cause.path : [];
  const helpId = cause instanceof SerializeError && cause.helpId || error.helpId;
  const handleReload = (0, import_react30.useCallback)(() => {
    window.location.reload();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    height: "fill",
    overflow: "auto",
    padding: 4,
    sizing: "border",
    tone: "critical",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
        as: "h2",
        children: "Encountered an error while reading structure"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
        marginTop: 4,
        padding: 4,
        radius: 2,
        overflow: "auto",
        shadow: 1,
        tone: "inherit",
        children: [path.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          space: 2,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
            children: "Structure path"
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
            children: path.slice(1).map((segment, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PathSegment, {
              children: segment
            }, "".concat(segment, "-").concat(i)))
          })]
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          marginTop: 4,
          space: 2,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
            children: "Error"
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
            children: showStack ? formatStack(stack) : error.message
          })]
        }), helpId && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
              href: generateHelpUrl(helpId),
              rel: "noopener noreferrer",
              target: "_blank",
              children: "View documentation"
            })
          })
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginTop: 4,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            text: "Reload",
            icon: SyncIcon,
            tone: "primary",
            onClick: handleReload
          })
        })]
      })]
    })
  });
}
function UnknownPane(props) {
  const {
    isSelected,
    pane,
    paneKey
  } = props;
  const type = isRecord$2(pane) && pane.type || null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    id: paneKey,
    selected: isSelected,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
      title: "Unknown pane type"
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        padding: 4,
        children: typeof type === "string" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          as: "p",
          muted: true,
          children: ["Structure item of type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: type
          }), " is not a known entity."]
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          as: "p",
          muted: true,
          children: ["Structure item is missing required ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: "type"
          }), " property."]
        })
      })
    })]
  });
}
function getWaitMessages(path) {
  const thresholds = [{
    ms: 300,
    message: "Loading\u2026"
  }, {
    ms: 5e3,
    message: "Still loading\u2026"
  }];
  if (isDev) {
    const message = ["Check console for errors?", "Is your observable/promise resolving?", path.length > 0 ? "Structure path: ".concat(path.join(" \u279D ")) : ""];
    thresholds.push({
      ms: 1e4,
      message: message.join("\n")
    });
  }
  const src = of(null);
  return merge(...thresholds.map((_ref12) => {
    let {
      ms,
      message
    } = _ref12;
    return src.pipe(mapTo(message), delay(ms));
  }));
}
var DEFAULT_MESSAGE = "Loading\u2026";
var Content$1 = styled_components_browser_esm_default(Flex)(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  opacity: 0;\n  transition: opacity 200ms;\n\n  &[data-mounted] {\n    opacity: 1;\n  }\n"])));
var LoadingPane = (0, import_react30.memo)((props) => {
  const {
    delay: delay2 = 300,
    flex,
    message: messageProp = getWaitMessages,
    minWidth,
    paneKey,
    path,
    selected,
    title,
    tone
  } = props;
  const resolvedMessage = (0, import_react30.useMemo)(() => {
    if (typeof messageProp === "function") {
      return messageProp(path ? path.split(";") : []);
    }
    return messageProp;
  }, [messageProp, path]);
  const [currentMessage, setCurrentMessage] = (0, import_react30.useState)(() => {
    if (typeof resolvedMessage === "string")
      return resolvedMessage;
    return DEFAULT_MESSAGE;
  });
  (0, import_react30.useEffect)(() => {
    if (typeof resolvedMessage !== "object")
      return void 0;
    if (typeof resolvedMessage.subscribe === "function")
      return void 0;
    const sub = resolvedMessage.subscribe(setCurrentMessage);
    return () => sub.unsubscribe();
  }, [resolvedMessage]);
  const [contentElement, setContentElement] = (0, import_react30.useState)(null);
  const [mounted, setMounted] = (0, import_react30.useState)(false);
  (0, import_react30.useEffect)(() => {
    if (!contentElement)
      return void 0;
    return _raf2(() => setMounted(true));
  }, [contentElement]);
  const content = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content$1, {
    align: "center",
    "data-mounted": mounted ? "" : void 0,
    direction: "column",
    height: "fill",
    justify: "center",
    ref: setContentElement,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
      muted: true
    }), (title || currentMessage) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      marginTop: 3,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        align: "center",
        muted: true,
        size: 1,
        children: title || currentMessage
      })
    })]
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pane, {
    flex,
    id: paneKey,
    minWidth,
    selected,
    tone,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: content
    })
  });
});
LoadingPane.displayName = "LoadingPane";
var paneMap = {
  component: (0, import_react30.lazy)(() => import("/build/_shared/index-ce5f5126-P6F7SKO6.js")),
  document: (0, import_react30.lazy)(() => import("/build/_shared/index-ee3bfb2b-N43X33JM.js")),
  documentList: (0, import_react30.lazy)(() => import("/build/_shared/index-4a7ca57d-QRLE4SIN.js")),
  list: (0, import_react30.lazy)(() => import("/build/_shared/index-1ad21cb1-UHB4JJDX.js"))
};
var DeskToolPane = (0, import_react30.memo)(function DeskToolPane2(props) {
  const {
    active,
    childItemId,
    groupIndex,
    index: index2,
    itemId,
    pane,
    paneKey,
    params,
    payload,
    selected,
    siblingIndex
  } = props;
  const PaneComponent = paneMap[pane.type] || UnknownPane;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneRouterProvider, {
    flatIndex: index2,
    index: groupIndex,
    params,
    payload,
    siblingIndex,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react30.Suspense, {
      fallback: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPane, {
        paneKey
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneComponent, {
        childItemId: childItemId || "",
        index: index2,
        itemId,
        isActive: active,
        isSelected: selected,
        paneKey,
        pane
      })
    })
  });
}, (_ref13, _ref14) => {
  let {
    params: prevParams = {},
    payload: prevPayload = null,
    ...prev
  } = _ref13;
  let {
    params: nextParams = {},
    payload: nextPayload = null,
    ...next
  } = _ref14;
  if (!(0, import_isEqual.default)(prevParams, nextParams))
    return false;
  if (!(0, import_isEqual.default)(prevPayload, nextPayload))
    return false;
  const keys = /* @__PURE__ */ new Set([...Object.keys(prev), ...Object.keys(next)]);
  for (const key of keys) {
    if (prev[key] !== next[key])
      return false;
  }
  return true;
});
function ErrorPane(props) {
  const {
    children,
    flex,
    minWidth,
    paneKey,
    title = "Error",
    tone = "critical"
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    flex,
    id: paneKey,
    minWidth,
    tone,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
      title
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      overflow: "auto",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        paddingX: 4,
        paddingY: 5,
        children
      })
    })]
  });
}
function getOpErrorTitle(op) {
  if (op === "delete") {
    return "An error occurred while attempting to delete this document.\n      This usually means that there are other documents that refers to it.";
  }
  if (op === "unpublish") {
    return "An error occurred while attempting to unpublish this document.\n      This usually means that there are other documents that refers to it.";
  }
  return "An error occurred during ".concat(op);
}
function getOpSuccessTitle(op) {
  if (op === "publish") {
    return "The document was published";
  }
  if (op === "unpublish") {
    return "The document was unpublished. A draft has been created from the latest published version.";
  }
  if (op === "discardChanges") {
    return "All changes since last publish has now been discarded. The discarded draft can still be recovered from history";
  }
  if (op === "delete") {
    return "This document was deleted. It can still be recovered from history and if you continue editing it will be recreated.";
  }
  return "Successfully performed ".concat(op, " on document");
}
var IGNORE_OPS = ["patch", "commit"];
var DocumentOperationResults = (0, import_react30.memo)(function DocumentOperationResults2() {
  const {
    push: pushToast
  } = useToast();
  const {
    documentId,
    documentType
  } = useDocumentPane();
  const event = useDocumentOperationEvent(documentId, documentType);
  const prevEvent = (0, import_react30.useRef)(event);
  (0, import_react30.useEffect)(() => {
    if (!event || event === prevEvent.current)
      return;
    if (event.type === "error") {
      pushToast({
        closable: true,
        duration: 3e4,
        status: "error",
        title: getOpErrorTitle(event.op),
        description: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
            children: "Details"
          }), event.error.message]
        })
      });
    }
    if (event.type === "success" && !IGNORE_OPS.includes(event.op)) {
      pushToast({
        closable: true,
        status: "success",
        title: getOpSuccessTitle(event.op)
      });
    }
    prevEvent.current = event;
  }, [event, pushToast]);
  return null;
});
var getHistoryMenuItem = (params) => {
  const {
    features,
    hasValue,
    changesOpen
  } = params;
  if (!features.reviewChanges)
    return null;
  return {
    action: "reviewChanges",
    title: "Review changes",
    icon: RestoreIcon,
    isDisabled: changesOpen || !hasValue
  };
};
var getInspectItem = (_ref15) => {
  let {
    hasValue
  } = _ref15;
  return {
    action: "inspect",
    title: "Inspect",
    icon: BinaryDocumentIcon,
    isDisabled: !hasValue,
    shortcut: "Ctrl+Alt+I"
  };
};
var getProductionPreviewItem = (_ref16) => {
  let {
    previewUrl
  } = _ref16;
  if (!previewUrl)
    return null;
  return {
    action: "production-preview",
    title: "Open preview",
    icon: EarthAmericasIcon,
    shortcut: "Ctrl+Alt+O"
  };
};
var getMenuItems = (params) => {
  const items = [getProductionPreviewItem, getHistoryMenuItem, getInspectItem].filter(Boolean).map((fn) => fn(params));
  return items.filter((i) => i !== null);
};
var isSanityDocument = (value) => isRecord$2(value) && typeof value._id === "string" && typeof value._type === "string";
function usePreviewUrl(value) {
  const [previewUrl, setPreviewUrl] = (0, import_react30.useState)(void 0);
  const [error, setError] = (0, import_react30.useState)(null);
  const {
    resolveProductionUrl
  } = useSource().document;
  const value$ = useAsObservable(value);
  if (error)
    throw error;
  (0, import_react30.useEffect)(() => {
    value$.pipe(
      debounceTime(500),
      switchMap((document2) => isSanityDocument(document2) ? from(resolveProductionUrl({
        document: document2
      })) : of(void 0)),
      catchError((e) => {
        const message = isRecord$2(e) && typeof e.message === "string" ? e.message : "Unknown error";
        throw new Error("An error was thrown while trying to get your preview url: ".concat(message));
      })
    ).subscribe({
      next: setPreviewUrl,
      error: setError
    });
  }, [resolveProductionUrl, value$]);
  return previewUrl;
}
function getInitialValueTemplateOpts(templates, opts) {
  const payload = opts.panePayload || {};
  const structureNodeTemplate = opts.templateName;
  if (opts.urlTemplate && structureNodeTemplate && structureNodeTemplate !== opts.urlTemplate) {
    console.warn('Conflicting templates: URL says "'.concat(opts.urlTemplate, '", structure node says "').concat(structureNodeTemplate, '". Using "').concat(structureNodeTemplate, '".'));
  }
  const template = structureNodeTemplate || opts.urlTemplate;
  const typeTemplates = templates.filter((t) => t.schemaType === opts.documentType);
  const templateParams = {
    ...opts.templateParams,
    ...typeof payload === "object" ? payload || {} : {}
  };
  let templateName = template;
  if (!template && typeTemplates.length === 1) {
    templateName = typeTemplates[0].id;
  }
  return {
    templateName,
    templateParams
  };
}
var emptyObject = {};
var DocumentPaneProvider = (0, import_react30.memo)((props) => {
  const {
    children,
    index: index2,
    pane,
    paneKey
  } = props;
  const client = useClient(DEFAULT_STUDIO_CLIENT_OPTIONS);
  const schema = useSchema();
  const templates = useTemplates();
  const {
    actions: documentActions,
    badges: documentBadges,
    unstable_languageFilter: languageFilterResolver
  } = useSource().document;
  const historyStore = useHistoryStore();
  const presenceStore = usePresenceStore();
  const paneRouter = usePaneRouter();
  const {
    features
  } = useDeskTool();
  const {
    push: pushToast
  } = useToast();
  const {
    options,
    menuItemGroups,
    title = null,
    views: viewsProp = []
  } = pane;
  const paneOptions = useUnique(options);
  const documentIdRaw = paneOptions.id;
  const documentId = getPublishedId(documentIdRaw);
  const documentType = options.type;
  const paneParams = useUnique(paneRouter.params);
  const panePayload = useUnique(paneRouter.payload);
  const {
    templateName,
    templateParams
  } = (0, import_react30.useMemo)(() => getInitialValueTemplateOpts(templates, {
    documentType,
    templateName: paneOptions.template,
    templateParams: paneOptions.templateParameters,
    panePayload,
    urlTemplate: paneParams == null ? void 0 : paneParams.template
  }), [documentType, paneOptions, paneParams, panePayload, templates]);
  const initialValueRaw = useInitialValue({
    documentId,
    documentType,
    templateName,
    templateParams
  });
  const initialValue = useUnique(initialValueRaw);
  const {
    patch
  } = useDocumentOperation(documentId, documentType);
  const editState = useEditState(documentId, documentType);
  const {
    validation: validationRaw
  } = useValidationStatus(documentId, documentType);
  const connectionState = useConnectionState(documentId, documentType);
  const schemaType = schema.get(documentType);
  const value = (editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || initialValue.value;
  const actions = (0, import_react30.useMemo)(() => documentActions({
    schemaType: documentType,
    documentId
  }), [documentActions, documentId, documentType]);
  const badges = (0, import_react30.useMemo)(() => documentBadges({
    schemaType: documentType,
    documentId
  }), [documentBadges, documentId, documentType]);
  const languageFilter = (0, import_react30.useMemo)(() => languageFilterResolver({
    schemaType: documentType,
    documentId
  }), [documentId, documentType, languageFilterResolver]);
  const validation = useUnique(validationRaw);
  const views = useUnique(viewsProp);
  const params = paneRouter.params || emptyObject;
  const [focusPath, setFocusPath] = (0, import_react30.useState)(() => params.path ? fromString(params.path) : []);
  const activeViewId = params.view || views[0] && views[0].id || null;
  const timeline = (0, import_react30.useMemo)(() => historyStore.getTimeline({
    publishedId: documentId,
    enableTrace: isDev
  }), [documentId, historyStore]);
  const [timelineMode, setTimelineMode] = (0, import_react30.useState)("closed");
  const {
    historyController
  } = useMemoObservable(() => historyStore.getTimelineController({
    client,
    documentId,
    documentType,
    timeline
  }), [client, documentId, documentType, timeline]);
  historyController.setRange(params.since || null, params.rev || null);
  const changesOpen = historyController.changesPanelActive();
  const previewUrl = usePreviewUrl(value);
  const [presence, setPresence] = (0, import_react30.useState)([]);
  (0, import_react30.useEffect)(() => {
    const subscription = presenceStore.documentPresence(documentId).subscribe((nextPresence) => {
      setPresence(nextPresence);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [documentId, presenceStore]);
  const hasValue = Boolean(value);
  const menuItems = (0, import_react30.useMemo)(() => getMenuItems({
    features,
    hasValue,
    changesOpen,
    previewUrl
  }), [features, hasValue, changesOpen, previewUrl]);
  const inspectOpen = params.inspect === "on";
  const compareValue = changesOpen ? historyController.sinceAttributes() : (editState == null ? void 0 : editState.published) || null;
  const ready = connectionState === "connected" && editState.ready;
  const viewOlderVersion = historyController.onOlderRevision();
  const displayed = (0, import_react30.useMemo)(
    () => viewOlderVersion ? historyController.displayed() || {
      _id: value._id,
      _type: value._type
    } : value,
    [historyController, params.rev, params.since, value, viewOlderVersion]
  );
  const setTimelineRange = (0, import_react30.useCallback)((newSince, newRev) => {
    paneRouter.setParams({
      ...paneRouter.params,
      since: newSince,
      rev: newRev || void 0
    });
  }, [paneRouter]);
  const handleFocus = (0, import_react30.useCallback)((nextFocusPath) => {
    setFocusPath(nextFocusPath);
    presenceStore.setLocation([{
      type: "document",
      documentId,
      path: nextFocusPath,
      lastActiveAt: /* @__PURE__ */ new Date().toISOString()
    }]);
  }, [documentId, presenceStore, setFocusPath]);
  const handleBlur = (0, import_react30.useCallback)((blurredPath) => {
    setFocusPath([]);
  }, [setFocusPath]);
  const patchRef = (0, import_react30.useRef)(() => {
    throw new Error("Nope");
  });
  patchRef.current = (event) => {
    patch.execute(toMutationPatches(event.patches), initialValue.value);
  };
  const handleChange = (0, import_react30.useCallback)((event) => patchRef.current(event), []);
  const handleHistoryClose = (0, import_react30.useCallback)(() => {
    paneRouter.setParams({
      ...params,
      since: void 0
    });
  }, [paneRouter, params]);
  const handleHistoryOpen = (0, import_react30.useCallback)(() => {
    paneRouter.setParams({
      ...params,
      since: "@lastPublished"
    });
  }, [paneRouter, params]);
  const handlePaneClose = (0, import_react30.useCallback)(() => paneRouter.closeCurrent(), [paneRouter]);
  const handlePaneSplit = (0, import_react30.useCallback)(() => paneRouter.duplicateCurrent(), [paneRouter]);
  const toggleInspect = (0, import_react30.useCallback)(function() {
    let toggle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !inspectOpen;
    if (toggle) {
      paneRouter.setParams({
        ...params,
        inspect: "on"
      });
    } else {
      paneRouter.setParams((0, import_omit.default)(params, "inspect"));
    }
  }, [inspectOpen, paneRouter, params]);
  const handleMenuAction = (0, import_react30.useCallback)((item) => {
    if (item.action === "production-preview" && previewUrl) {
      window.open(previewUrl);
      return true;
    }
    if (item.action === "inspect") {
      toggleInspect(true);
      return true;
    }
    if (item.action === "reviewChanges") {
      handleHistoryOpen();
      return true;
    }
    return false;
  }, [handleHistoryOpen, previewUrl, toggleInspect]);
  const handleKeyUp = (0, import_react30.useCallback)((event) => {
    for (const item of menuItems) {
      if (item.shortcut) {
        if ((0, import_is_hotkey.default)(item.shortcut, event)) {
          event.preventDefault();
          event.stopPropagation();
          handleMenuAction(item);
          return;
        }
      }
    }
  }, [handleMenuAction, menuItems]);
  const handleInspectClose = (0, import_react30.useCallback)(() => toggleInspect(false), [toggleInspect]);
  const [openPath, onSetOpenPath] = (0, import_react30.useState)([]);
  const [fieldGroupState, onSetFieldGroupState] = (0, import_react30.useState)();
  const [collapsedPaths, onSetCollapsedPath] = (0, import_react30.useState)();
  const [collapsedFieldSets, onSetCollapsedFieldSets] = (0, import_react30.useState)();
  const handleOnSetCollapsedPath = (0, import_react30.useCallback)((path, collapsed) => {
    onSetCollapsedPath((prevState) => setAtPath(prevState, path, collapsed));
  }, []);
  const handleOnSetCollapsedFieldSet = (0, import_react30.useCallback)((path, collapsed) => {
    onSetCollapsedFieldSets((prevState) => setAtPath(prevState, path, collapsed));
  }, []);
  const handleSetActiveFieldGroup = (0, import_react30.useCallback)((path, groupName) => onSetFieldGroupState((prevState) => setAtPath(prevState, path, groupName)), []);
  const requiredPermission = value._createdAt ? "update" : "create";
  const liveEdit = (0, import_react30.useMemo)(() => Boolean(schemaType == null ? void 0 : schemaType.liveEdit), [documentType, schema]);
  const docId = value._id ? value._id : "dummy-id";
  const docPermissionsInput = (0, import_react30.useMemo)(() => {
    return {
      ...value,
      _id: liveEdit ? getPublishedId(docId) : getDraftId(docId)
    };
  }, [liveEdit, value, docId]);
  const [permissions, isPermissionsLoading] = useDocumentValuePermissions({
    document: docPermissionsInput,
    permission: requiredPermission
  });
  const {
    revTime: rev
  } = historyController;
  const isNonExistent = !(value == null ? void 0 : value._id);
  const readOnly = (0, import_react30.useMemo)(() => {
    const hasNoPermission = !isPermissionsLoading && !(permissions == null ? void 0 : permissions.granted);
    const updateActionDisabled = !isActionEnabled(schemaType, "update");
    const createActionDisabled = isNonExistent && !isActionEnabled(schemaType, "create");
    const reconnecting = connectionState === "reconnecting";
    return !ready || rev !== null || hasNoPermission || updateActionDisabled || createActionDisabled || reconnecting;
  }, [connectionState, isNonExistent, isPermissionsLoading, permissions == null ? void 0 : permissions.granted, ready, rev, schemaType]);
  const formState = useFormState(schemaType, {
    value: displayed,
    readOnly,
    comparisonValue: compareValue,
    focusPath,
    openPath,
    collapsedPaths,
    presence,
    validation,
    collapsedFieldSets,
    fieldGroupState,
    changesOpen
  });
  const formStateRef = (0, import_react30.useRef)(formState);
  formStateRef.current = formState;
  const handleOpenPath = (0, import_react30.useCallback)((path) => {
    const ops = getExpandOperations(formStateRef.current, path);
    ops.forEach((op) => {
      if (op.type === "expandPath") {
        onSetCollapsedPath((prevState) => setAtPath(prevState, op.path, false));
      }
      if (op.type === "expandFieldSet") {
        onSetCollapsedFieldSets((prevState) => setAtPath(prevState, op.path, false));
      }
      if (op.type === "setSelectedGroup") {
        onSetFieldGroupState((prevState) => setAtPath(prevState, op.path, op.groupName));
      }
    });
    onSetOpenPath(path);
  }, [formStateRef]);
  const documentPane = {
    actions,
    activeViewId,
    badges,
    changesOpen,
    collapsedFieldSets,
    collapsedPaths,
    compareValue,
    connectionState,
    displayed,
    documentId,
    documentIdRaw,
    documentType,
    editState,
    focusPath,
    menuItems,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    onPathOpen: handleOpenPath,
    onHistoryClose: handleHistoryClose,
    onHistoryOpen: handleHistoryOpen,
    onInspectClose: handleInspectClose,
    onKeyUp: handleKeyUp,
    onMenuAction: handleMenuAction,
    onPaneClose: handlePaneClose,
    onPaneSplit: handlePaneSplit,
    onSetActiveFieldGroup: handleSetActiveFieldGroup,
    onSetCollapsedPath: handleOnSetCollapsedPath,
    onSetCollapsedFieldSet: handleOnSetCollapsedFieldSet,
    historyController,
    index: index2,
    inspectOpen,
    validation,
    menuItemGroups: menuItemGroups || [],
    paneKey,
    previewUrl,
    ready,
    schemaType,
    isPermissionsLoading,
    permissions,
    setTimelineMode,
    setTimelineRange,
    timeline,
    timelineMode,
    title,
    value,
    views,
    formState,
    unstable_languageFilter: languageFilter
  };
  (0, import_react30.useEffect)(() => {
    if (connectionState === "reconnecting") {
      pushToast({
        id: "sanity/desk/reconnecting",
        status: "warning",
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: "Connection lost. Reconnecting\u2026"
        })
      });
    }
  }, [connectionState, pushToast]);
  (0, import_react30.useEffect)(() => {
    setFocusPath(params.path ? fromString(params.path) : []);
  }, [documentId, params.path]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPaneContext.Provider, {
    value: documentPane,
    children
  });
});
DocumentPaneProvider.displayName = "DocumentPaneProvider";
var TIMELINE_LABELS = {
  create: "created",
  delete: "deleted",
  discardDraft: "discarded draft",
  initial: "created",
  editDraft: "edited",
  editLive: "live edited",
  publish: "published",
  unpublish: "unpublished"
};
var TIMELINE_ICON_COMPONENTS = {
  create: AddCircleIcon,
  delete: TrashIcon,
  discardDraft: CloseIcon,
  initial: AddCircleIcon,
  editDraft: EditIcon,
  editLive: EditIcon,
  publish: PublishIcon,
  unpublish: UnpublishIcon
};
function formatTimelineEventLabel(type) {
  return TIMELINE_LABELS[type];
}
function getTimelineEventIconComponent(type) {
  return TIMELINE_ICON_COMPONENTS[type];
}
function sinceTimelineProps(since, rev) {
  return {
    topSelection: rev,
    bottomSelection: since,
    disabledBeforeSelection: true
  };
}
function revTimelineProps(rev) {
  return {
    topSelection: rev,
    bottomSelection: rev
  };
}
function UserAvatarStack(_ref17) {
  let {
    maxLength,
    userIds
  } = _ref17;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarStack, {
    maxLength,
    children: userIds.map((userId) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatar, {
      user: userId,
      withTooltip: true
    }, userId))
  });
}
var IconWrapper = styled_components_browser_esm_default(Flex)((_ref18) => {
  let {
    theme
  } = _ref18;
  var _a;
  const borderColor = (_a = theme.sanity.color.base.skeleton) == null ? void 0 : _a.from;
  return Ce(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    --timeline-hairline-width: 1px;\n    position: relative;\n    z-index: 2;\n    margin: 0;\n    padding: 0;\n\n    &::before {\n      position: absolute;\n      content: '';\n      height: 100%;\n      width: var(--timeline-hairline-width);\n      background: ", ";\n      top: 0;\n      left: calc((100% - var(--timeline-hairline-width)) / 2);\n      z-index: 1;\n    }\n  "])), borderColor);
});
var Root$5 = styled_components_browser_esm_default(MenuItem)((_ref19) => {
  let {
    state = "enabled",
    isHovered,
    theme
  } = _ref19;
  const {
    color: color2
  } = theme.sanity;
  const selectedState = color2.button.default.primary.enabled;
  return Ce(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n    position: relative;\n    min-width: 244px;\n\n    ", "\n\n    ", "\n\n      ", "\n\n    // line styling \u{1F447}\n      &:first-child ", "::before {\n      height: 50%;\n      top: unset;\n      bottom: 0;\n    }\n\n    &:last-child ", "::before {\n      height: 50%;\n    }\n\n    ", "\n\n    // Remove timeline lines when using the keyboard to navigate timeline items\n    &:focus ", "::before {\n      background: transparent;\n    }\n  "])), state === "selected" && Ce(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n      --card-bg-color: ", ";\n      --card-fg-color: ", ";\n      --card-muted-fg-color: ", ";\n      --card-border-color: ", ";\n      &:not([data-selection-bottom='true']) {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n      }\n    "])), selectedState.bg, selectedState.fg, selectedState.muted, selectedState.bg), state === "withinSelection" && Ce(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n      border-bottom-left-radius: 0;\n      border-bottom-right-radius: 0;\n      box-shadow: 0px 3px 0px 0px var(--card-bg-color);\n      &:not([data-selection-top='true']) {\n        border-radius: 0;\n      }\n\n      ", " {\n        &::before {\n          background: var(--card-hairline-soft-color);\n        }\n      }\n    "])), IconWrapper), state === "disabled" && Ce(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["\n      [data-ui='Avatar'] {\n        opacity: 0.2;\n      }\n    "]))), IconWrapper, IconWrapper, (isHovered || state === "selected") && Ce(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["\n      ", "::before {\n        background: transparent;\n      }\n    "])), IconWrapper), IconWrapper);
});
var IconBox = styled_components_browser_esm_default(Box)(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["\n  background: var(--card-bg-color);\n  border-radius: 50px;\n  position: relative;\n  z-index: 2;\n"])));
var EventLabel = styled_components_browser_esm_default(Text)(_templateObject10 || (_templateObject10 = _taggedTemplateLiteral(["\n  text-transform: capitalize;\n"])));
var TimestampBox = styled_components_browser_esm_default(Box)(_templateObject11 || (_templateObject11 = _taggedTemplateLiteral(["\n  min-width: 1rem;\n  margin-left: ", ";\n"])), (_ref20) => {
  let {
    theme
  } = _ref20;
  return "-".concat(rem(theme.sanity.space[1]));
});
var TIMELINE_ITEM_EVENT_TONE = {
  initial: "primary",
  create: "primary",
  publish: "positive",
  editLive: "caution",
  editDraft: "caution",
  unpublish: "critical",
  discardDraft: "critical",
  delete: "critical",
  withinSelection: "primary"
};
function TimelineItem(props) {
  const {
    isSelectionBottom,
    isSelectionTop,
    state,
    onSelect,
    timestamp,
    chunk,
    type
  } = props;
  const iconComponent = getTimelineEventIconComponent(type);
  const authorUserIds = Array.from(chunk.authors);
  const timeAgo = useTimeAgo(timestamp, {
    minimal: true
  });
  const formattedTimestamp = (0, import_react30.useMemo)(() => {
    const parsedDate = new Date(timestamp);
    const formattedDate = format(parsedDate, "MMM d, yyyy, hh:mm a");
    return formattedDate;
  }, [timestamp]);
  const isSelected = state === "selected";
  const isWithinSelection = state === "withinSelection";
  const [isHovered, setHovered] = (0, import_react30.useState)(false);
  const handleClick = (0, import_react30.useCallback)((evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    onSelect(chunk);
  }, [onSelect, chunk]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$5, {
    "data-ui": "timelineItem",
    radius: 2,
    "data-chunk-id": chunk.id,
    padding: 0,
    tone: isHovered || isSelected || isWithinSelection ? "default" : TIMELINE_ITEM_EVENT_TONE[type],
    pressed: isWithinSelection,
    state,
    selected: isSelected,
    isHovered,
    disabled: state === "disabled",
    "data-selection-bottom": isSelectionBottom,
    "data-selection-top": isSelectionTop,
    onClick: handleClick,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      portal: true,
      placement: "left",
      fallbackPlacements: ["bottom"],
      content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
        padding: 3,
        space: 3,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          children: formattedTimestamp
        })
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        paddingX: 2,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
          align: "stretch",
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconWrapper, {
            align: "center",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBox, {
              padding: 2,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                size: 2,
                children: iconComponent && (0, import_react30.createElement)(iconComponent)
              })
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
            space: 2,
            margin: 2,
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventLabel, {
                size: 1,
                weight: "medium",
                children: formatTimelineEventLabel(type) || /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
                  children: type
                })
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimestampBox, {
              paddingX: 1,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                size: 0,
                muted: true,
                children: timeAgo
              })
            })]
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
            flex: 1,
            justify: "flex-end",
            align: "center",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatarStack, {
              maxLength: 3,
              userIds: authorUserIds
            })
          })]
        })
      })
    })
  });
}
var Root$4 = styled_components_browser_esm_default(Box)(_templateObject12 || (_templateObject12 = _taggedTemplateLiteral(["\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n"])));
var StackWrapper = styled_components_browser_esm_default(Stack)(_templateObject13 || (_templateObject13 = _taggedTemplateLiteral(["\n  max-width: 200px;\n"])));
var MenuWrapper = styled_components_browser_esm_default(Menu)(_templateObject14 || (_templateObject14 = _taggedTemplateLiteral(["\n  overflow: auto;\n  box-sizing: border-box;\n  max-height: calc(100vh - 198px);\n"])));
var LOAD_MORE_OFFSET = 20;
var Timeline = (_ref21) => {
  let {
    timeline,
    disabledBeforeSelection,
    topSelection,
    bottomSelection,
    onSelect,
    onLoadMore
  } = _ref21;
  const rootRef = (0, import_react30.useRef)(null);
  const listRef = (0, import_react30.useRef)(null);
  const [loadingElement, setLoadingElement] = (0, import_react30.useState)(null);
  let state = disabledBeforeSelection ? "disabled" : "enabled";
  const checkIfLoadIsNeeded = (0, import_react30.useCallback)(() => {
    const rootEl = rootRef.current;
    if (loadingElement && rootEl) {
      const {
        offsetHeight,
        scrollTop
      } = rootEl;
      const bottomPosition = offsetHeight + scrollTop + LOAD_MORE_OFFSET;
      const isVisible = loadingElement.offsetTop < bottomPosition;
      if (isVisible) {
        requestAnimationFrame(() => onLoadMore(isVisible));
      }
    }
  }, [onLoadMore, loadingElement]);
  (0, import_react30.useEffect)(checkIfLoadIsNeeded, [checkIfLoadIsNeeded]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$4, {
    ref: rootRef,
    onScroll: checkIfLoadIsNeeded,
    "data-ui": "timeline",
    children: [timeline.chunkCount === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StackWrapper, {
      padding: 3,
      space: 3,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        weight: "semibold",
        children: "No document history"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        muted: true,
        size: 1,
        children: "When changing the content of the document, the document versions will appear in this menu."
      })]
    }), timeline.chunkCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuWrapper, {
      ref: listRef,
      padding: 1,
      space: 0,
      children: timeline.mapChunks((chunk) => {
        const isSelectionTop = topSelection === chunk;
        const isSelectionBottom = bottomSelection === chunk;
        if (isSelectionTop) {
          state = "withinSelection";
        }
        if (isSelectionBottom) {
          state = "selected";
        }
        const item = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineItem, {
          chunk,
          isSelectionBottom,
          isSelectionTop,
          state,
          onSelect,
          type: chunk.type,
          timestamp: chunk.endTimestamp
        }, chunk.id);
        if (state === "selected") {
          state = "enabled";
        }
        return item;
      })
    }), !timeline.reachedEarliestEntry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      align: "center",
      justify: "center",
      padding: 4,
      ref: setLoadingElement,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
        muted: true
      })
    })]
  });
};
Timeline.displayName = "Timeline";
var Root$3 = styled_components_browser_esm_default(Popover)(_templateObject15 || (_templateObject15 = _taggedTemplateLiteral(["\n  & > div {\n    display: flex;\n    flex-direction: column;\n\n    & > [data-ui='Card'] {\n      flex: 1;\n      min-height: 0;\n      display: flex;\n      flex-direction: column;\n\n      /* This is the scrollable container rendered by <Timeline /> */\n      & > div {\n        flex: 1;\n        min-height: 0;\n      }\n    }\n  }\n"])));
function TimelineMenu(_ref22) {
  let {
    chunk,
    mode,
    placement
  } = _ref22;
  const {
    historyController,
    setTimelineRange,
    setTimelineMode,
    timeline,
    ready
  } = useDocumentPane();
  const [open, setOpen] = (0, import_react30.useState)(false);
  const [button, setButton] = (0, import_react30.useState)(null);
  const [menuContent, setMenuContent] = (0, import_react30.useState)(null);
  const handleOpen = (0, import_react30.useCallback)(() => {
    setTimelineMode(mode);
    setOpen(true);
  }, [mode, setTimelineMode]);
  const handleClose = (0, import_react30.useCallback)(() => {
    setTimelineMode("closed");
    setOpen(false);
  }, [setTimelineMode]);
  const handleClickOutside = (0, import_react30.useCallback)(() => {
    handleClose();
  }, [handleClose]);
  const handleGlobalKeyDown = (0, import_react30.useCallback)((event) => {
    if (open && (event.key === "Escape" || event.key === "Tab")) {
      handleClose();
      button == null ? void 0 : button.focus();
    }
  }, [button, handleClose, open]);
  useClickOutside(handleClickOutside, [menuContent, button]);
  useGlobalKeyDown(handleGlobalKeyDown);
  const selectRev = (0, import_react30.useCallback)((revChunk) => {
    const [sinceId, revId] = historyController.findRangeForNewRev(revChunk);
    setTimelineMode("closed");
    setOpen(false);
    setTimelineRange(sinceId, revId);
  }, [historyController, setTimelineMode, setTimelineRange]);
  const selectSince = (0, import_react30.useCallback)((sinceChunk) => {
    const [sinceId, revId] = historyController.findRangeForNewSince(sinceChunk);
    setTimelineMode("closed");
    setOpen(false);
    setTimelineRange(sinceId, revId);
  }, [historyController, setTimelineMode, setTimelineRange]);
  const loadMoreHistory = (0, import_react30.useCallback)((state) => {
    historyController.setLoadMore(state);
  }, [historyController]);
  const content = open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref: setMenuContent,
    children: mode === "rev" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
      onSelect: selectRev,
      onLoadMore: loadMoreHistory,
      timeline,
      ...revTimelineProps(historyController.realRevChunk)
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timeline, {
      onSelect: selectSince,
      onLoadMore: loadMoreHistory,
      timeline,
      ...sinceTimelineProps(historyController.sinceTime, historyController.realRevChunk)
    })
  });
  const timeAgo = useTimeAgo((chunk == null ? void 0 : chunk.endTimestamp) || "", {
    agoSuffix: true
  });
  const revLabel = chunk ? "".concat((0, import_upperFirst.default)(formatTimelineEventLabel(chunk.type)), " ").concat(timeAgo) : "Current version";
  const sinceLabel = chunk ? "Since ".concat(formatTimelineEventLabel(chunk.type), " ").concat(timeAgo) : "Since unknown version";
  const openLabel = mode === "rev" ? "Select version" : "Review changes since";
  const buttonLabel = mode === "rev" ? revLabel : sinceLabel;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$3, {
    constrainSize: true,
    content,
    "data-ui": "versionMenu",
    open,
    placement,
    portal: true,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      disabled: !ready,
      mode: "bleed",
      fontSize: 1,
      padding: 2,
      iconRight: SelectIcon,
      onClick: open ? handleClose : handleOpen,
      ref: setButton,
      selected: open,
      text: open ? openLabel : buttonLabel
    })
  });
}
function LoadingContent() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    align: "center",
    justify: "center",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
      muted: true
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      marginTop: 3,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        align: "center",
        children: "Loading changes\u2026"
      })
    })]
  });
}
function collectLatestAuthorAnnotations(diff) {
  const authorMap = /* @__PURE__ */ new Map();
  visitDiff(diff, (child) => {
    if (child.action === "unchanged" || !("annotation" in child) || !child.annotation) {
      return true;
    }
    const {
      author,
      timestamp
    } = child.annotation;
    const previous = authorMap.get(author);
    if (!previous || previous.timestamp < timestamp) {
      authorMap.set(author, child.annotation);
    }
    return true;
  });
  return Array.from(authorMap.values()).sort((a2, b2) => a2.timestamp < b2.timestamp ? 1 : -1);
}
var Scroller$1 = styled_components_browser_esm_default(ScrollContainer)(_templateObject16 || (_templateObject16 = _taggedTemplateLiteral(["\n  height: 100%;\n  overflow: auto;\n  position: relative;\n  scroll-behavior: smooth;\n"])));
function ChangesPanel() {
  const {
    documentId,
    onHistoryClose,
    historyController,
    schemaType,
    value
  } = useDocumentPane();
  const {
    collapsed
  } = usePane();
  const scrollRef = (0, import_react30.useRef)(null);
  const historyState = historyController.selectionState;
  const loading = historyState === "loading";
  const since = historyController.sinceTime;
  const diff = historyController.currentObjectDiff();
  const isComparingCurrent = !historyController.onOlderRevision();
  const documentContext = import_react30.default.useMemo(() => ({
    documentId,
    schemaType,
    FieldWrapper: ChangeFieldWrapper,
    rootDiff: diff,
    isComparingCurrent,
    value
  }), [documentId, diff, isComparingCurrent, schemaType, value]);
  const changeAnnotations = import_react30.default.useMemo(() => diff ? collectLatestAuthorAnnotations(diff) : [], [diff]);
  if (collapsed) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    direction: "column",
    flex: 1,
    style: {
      borderLeft: "1px dashed var(--card-border-color)",
      overflow: "hidden",
      minWidth: 320
    },
    "data-testid": "review-changes-pane",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
      actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: CloseIcon,
        mode: "bleed",
        onClick: onHistoryClose,
        padding: 3,
        title: "Hide changes panel"
      }),
      subActions: changeAnnotations.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        paddingRight: 1,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DiffTooltip, {
          annotations: changeAnnotations,
          description: "Changes by",
          placement: "bottom-end",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarStack, {
            maxLength: 4,
            children: changeAnnotations.map((_ref23) => {
              let {
                author
              } = _ref23;
              return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatar, {
                user: author
              }, author);
            })
          })
        })
      }),
      tabs: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineMenu, {
        mode: "since",
        chunk: since,
        placement: "bottom-start"
      }),
      title: "Changes"
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoundaryElementProvider, {
        element: scrollRef.current,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scroller$1, {
          "data-ui": "Scroller",
          ref: scrollRef,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            flex: 1,
            padding: 4,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content, {
              diff,
              documentContext,
              loading
            })
          })
        })
      })
    })]
  });
}
function Content(_ref24) {
  let {
    diff,
    documentContext,
    loading
  } = _ref24;
  const {
    schemaType
  } = useDocumentPane();
  if (loading) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingContent, {});
  }
  if (!diff) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoChanges, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentChangeContext.Provider, {
    value: documentContext,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangeList, {
      diff,
      schemaType
    })
  });
}
function useDeskToolSetting(namespace, key, defaultValue) {
  const settingsStore = useSettingsStore();
  const [value, setValue] = (0, import_react30.useState)(defaultValue);
  const deskToolSettings = (0, import_react30.useMemo)(() => settingsStore.forNamespace("desk-tool"), [settingsStore]);
  const settings = (0, import_react30.useMemo)(() => {
    if (namespace) {
      return deskToolSettings.forNamespace(namespace).forKey(key);
    }
    return deskToolSettings.forKey(key);
  }, [deskToolSettings, namespace, key]);
  (0, import_react30.useEffect)(() => {
    const sub = settings.listen(defaultValue).subscribe({
      next: setValue
    });
    return () => sub == null ? void 0 : sub.unsubscribe();
  }, [defaultValue, key, namespace, settings]);
  const set = (0, import_react30.useCallback)((newValue) => {
    setValue(newValue);
    settings.set(newValue);
  }, [settings]);
  return (0, import_react30.useMemo)(() => [value, set], [set, value]);
}
var VIEW_MODE_PARSED = {
  id: "parsed",
  title: "Parsed"
};
var VIEW_MODE_RAW = {
  id: "raw",
  title: "Raw JSON"
};
var VIEW_MODES = [VIEW_MODE_PARSED, VIEW_MODE_RAW];
var lru = (0, import_hashlru.default)(1e3);
function isExpanded(keyPath, value) {
  const cached = lru.get(keyPath);
  if (cached === void 0) {
    lru.set(keyPath, Array.isArray(value) || isRecord$2(value));
    return isExpanded(keyPath, value);
  }
  return cached;
}
function toggleExpanded(event) {
  const {
    path
  } = event;
  const current = lru.get(path);
  if (current === void 0) {
    return;
  }
  lru.set(path, !current);
}
function selectElement(element) {
  const sel = window.getSelection();
  if (sel) {
    const range = document.createRange();
    sel.removeAllRanges();
    range.selectNodeContents(element);
    sel.addRange(range);
  }
}
function select(event) {
  selectElement(event.currentTarget);
}
function maybeSelectAll(event) {
  const selectAll = event.keyCode === 65 && (event.metaKey || event.ctrlKey);
  if (!selectAll) {
    return;
  }
  event.preventDefault();
  selectElement(event.currentTarget);
}
function isDocumentLike(value) {
  return isRecord$2(value) && isString(value._id) && isString(value._type);
}
var JSONInspectorWrapper = styled_components_browser_esm_default.div((_ref25) => {
  let {
    theme
  } = _ref25;
  const {
    color: color2,
    fonts,
    space
  } = theme.sanity;
  return Ce(_templateObject17 || (_templateObject17 = _taggedTemplateLiteral(["\n    & .json-inspector,\n    & .json-inspector .json-inspector__selection {\n      font-family: ", ";\n      font-size: ", "px;\n      line-height: ", "px;\n      color: var(--card-code-fg-color);\n    }\n\n    & .json-inspector .json-inspector__leaf {\n      padding-left: ", ";\n    }\n\n    & .json-inspector .json-inspector__leaf.json-inspector__leaf_root {\n      padding-top: ", ";\n      padding-left: 0;\n    }\n\n    & .json-inspector > .json-inspector__leaf_root > .json-inspector__line > .json-inspector__key {\n      display: none;\n    }\n\n    & .json-inspector .json-inspector__line {\n      display: block;\n      position: relative;\n      cursor: default;\n    }\n\n    & .json-inspector .json-inspector__line::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: -200px;\n      right: -50px;\n      bottom: 0;\n      z-index: -1;\n      pointer-events: none;\n    }\n\n    & .json-inspector .json-inspector__line:hover::after {\n      background: var(--card-code-bg-color);\n    }\n\n    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line {\n      cursor: pointer;\n    }\n\n    & .json-inspector .json-inspector__leaf_composite > .json-inspector__line::before {\n      content: '\u25B8 ';\n      margin-left: calc(0 - ", " + 3px);\n      font-size: ", "px;\n      line-height: ", "px;\n    }\n\n    &\n      .json-inspector\n      .json-inspector__leaf_expanded.json-inspector__leaf_composite\n      > .json-inspector__line::before {\n      content: '\u25BE ';\n      font-size: ", "px;\n      line-height: ", "px;\n    }\n\n    & .json-inspector .json-inspector__radio,\n    & .json-inspector .json-inspector__flatpath {\n      display: none;\n    }\n\n    & .json-inspector .json-inspector__value {\n      margin-left: ", ";\n    }\n\n    &\n      .json-inspector\n      > .json-inspector__leaf_root\n      > .json-inspector__line\n      > .json-inspector__key\n      + .json-inspector__value {\n      margin: 0;\n    }\n\n    & .json-inspector .json-inspector__key {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_helper,\n    & .json-inspector .json-inspector__value_null {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__not-found {\n      padding-top: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_string {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_boolean {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__value_number {\n      color: ", ";\n    }\n\n    & .json-inspector .json-inspector__show-original {\n      display: inline-block;\n      padding: 0 6px;\n      cursor: pointer;\n    }\n\n    & .json-inspector .json-inspector__show-original:hover {\n      color: inherit;\n    }\n\n    & .json-inspector .json-inspector__show-original::before {\n      content: '\u2194';\n    }\n\n    & .json-inspector .json-inspector__show-original:hover::after {\n      content: ' expand';\n    }\n  "])), fonts.code.family, fonts.code.sizes[2].fontSize, fonts.code.sizes[2].lineHeight, rem(space[4]), rem(space[3]), rem(space[4]), fonts.code.sizes[2].fontSize, fonts.code.sizes[2].lineHeight, fonts.code.sizes[2].fontSize, fonts.code.sizes[2].lineHeight, rem(space[4] / 2), color2.syntax.property, color2.syntax.constant, rem(space[3]), color2.syntax.string, color2.syntax.boolean, color2.syntax.number);
});
function Search(props) {
  const {
    onChange,
    query
  } = props;
  const handleChange = (0, import_react30.useCallback)((event) => onChange(event.target.value), [onChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
    icon: SearchIcon,
    onChange: handleChange,
    placeholder: "Search",
    radius: 2,
    value: query || ""
  });
}
function InspectDialog(props) {
  const {
    value
  } = props;
  const {
    onInspectClose,
    paneKey
  } = useDocumentPane();
  const dialogIdPrefix = "".concat(paneKey, "_inspect_");
  const [viewModeId, onViewModeChange] = useDeskToolSetting("desk-tool", "inspect-view-preferred-view-mode-".concat(paneKey), "parsed");
  const viewMode = VIEW_MODES.find((mode) => mode.id === viewModeId);
  const setParsedViewMode = (0, import_react30.useCallback)(() => {
    onViewModeChange(VIEW_MODE_PARSED.id);
  }, [onViewModeChange]);
  const setRawViewMode = (0, import_react30.useCallback)(() => {
    onViewModeChange(VIEW_MODE_RAW.id);
  }, [onViewModeChange]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    id: "".concat(dialogIdPrefix, "dialog"),
    header: isDocumentLike(value) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: ["Inspecting", " ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocTitle, {
          document: value
        })
      })]
    }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", {
      children: "No value"
    }),
    onClose: onInspectClose,
    width: 3,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      direction: "column",
      height: "fill",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
        padding: 3,
        shadow: 1,
        style: {
          position: "sticky",
          bottom: 0,
          zIndex: 3
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabList, {
          space: 1,
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
            "aria-controls": "".concat(dialogIdPrefix, "tabpanel"),
            fontSize: 1,
            id: "".concat(dialogIdPrefix, "tab-").concat(VIEW_MODE_PARSED.id),
            label: VIEW_MODE_PARSED.title,
            onClick: setParsedViewMode,
            selected: viewMode === VIEW_MODE_PARSED
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
            "aria-controls": "".concat(dialogIdPrefix, "tabpanel"),
            fontSize: 1,
            id: "".concat(dialogIdPrefix, "tab-").concat(VIEW_MODE_RAW.id),
            label: VIEW_MODE_RAW.title,
            onClick: setRawViewMode,
            selected: viewMode === VIEW_MODE_RAW
          })]
        })
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TabPanel, {
        "aria-labelledby": "".concat(dialogIdPrefix, "tab-").concat(viewModeId),
        flex: 1,
        id: "".concat(dialogIdPrefix, "tabpanel"),
        overflow: "auto",
        padding: 4,
        style: {
          outline: "none"
        },
        children: [viewMode === VIEW_MODE_PARSED && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JSONInspectorWrapper, {
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_json_inspector.default, {
            data: value,
            isExpanded,
            onClick: toggleExpanded,
            search: Search
          })
        }), viewMode === VIEW_MODE_RAW && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
          language: "json",
          tabIndex: 0,
          onKeyDown: maybeSelectAll,
          onDoubleClick: select,
          onFocus: select,
          children: JSON.stringify(value, null, 2)
        })]
      })]
    })
  });
}
var Root$2 = styled_components_browser_esm_default(Card)(_templateObject18 || (_templateObject18 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 50;\n"])));
var TextOneLine = styled_components_browser_esm_default(Text)(_templateObject19 || (_templateObject19 = _taggedTemplateLiteral(["\n  & > * {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n"])));
var ReferenceChangedBanner = (0, import_react30.memo)(() => {
  var _a, _b, _c, _d, _e, _f;
  const documentPreviewStore = useDocumentPreviewStore();
  const {
    params,
    groupIndex,
    routerPanesState,
    replaceCurrent,
    BackLink: BackLink2
  } = usePaneRouter();
  const routerReferenceId = (_a = routerPanesState[groupIndex]) == null ? void 0 : _a[0].id;
  const parentGroup = routerPanesState[groupIndex - 1];
  const parentSibling = parentGroup == null ? void 0 : parentGroup[0];
  const parentId = parentSibling == null ? void 0 : parentSibling.id;
  const hasHistoryOpen = Boolean((_b = parentSibling == null ? void 0 : parentSibling.params) == null ? void 0 : _b.rev);
  const parentRefPath = (0, import_react30.useMemo)(() => {
    return (params == null ? void 0 : params.parentRefPath) && fromString(params.parentRefPath) || null;
  }, [params == null ? void 0 : params.parentRefPath]);
  const referenceInfo = useMemoObservable(() => {
    const parentRefPathSegment = parentRefPath == null ? void 0 : parentRefPath[0];
    if (!parentId || !parentRefPathSegment || !parentRefPath) {
      return of({
        loading: false
      });
    }
    const publishedId = getPublishedId(parentId);
    const path = fromString(parentRefPathSegment);
    const keyedSegmentIndex = path.findIndex((p) => typeof p == "object" && "_key" in p);
    return concat(
      of({
        loading: true
      }),
      documentPreviewStore.unstable_observePathsDocumentPair(publishedId, keyedSegmentIndex === -1 ? path : path.slice(0, keyedSegmentIndex)).pipe(
        debounceTime(750),
        map((_ref26) => {
          let {
            draft,
            published
          } = _ref26;
          var _a2;
          return {
            loading: false,
            result: {
              availability: {
                draft: draft.availability,
                published: published.availability
              },
              refValue: (_a2 = get(draft.snapshot || published.snapshot, parentRefPath)) == null ? void 0 : _a2._ref
            }
          };
        })
      )
    );
  }, [parentId, parentRefPath], {
    loading: true
  });
  const handleReloadReference = (0, import_react30.useCallback)(() => {
    var _a2;
    if (referenceInfo.loading)
      return;
    if ((_a2 = referenceInfo.result) == null ? void 0 : _a2.refValue) {
      replaceCurrent({
        id: referenceInfo.result.refValue,
        params
      });
    }
  }, [referenceInfo.loading, referenceInfo.result, replaceCurrent, params]);
  const shouldHide = !parentId || !parentRefPath || hasHistoryOpen || referenceInfo.loading || !((_c = referenceInfo.result) == null ? void 0 : _c.availability.draft.available) && !((_d = referenceInfo.result) == null ? void 0 : _d.availability.published.available) || ((_e = referenceInfo.result) == null ? void 0 : _e.refValue) === routerReferenceId;
  if (shouldHide)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
    shadow: 1,
    tone: "caution",
    "data-testid": "reference-changed-banner",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
      paddingX: 4,
      paddingY: 2,
      sizing: "border",
      width: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
        }), ((_f = referenceInfo.result) == null ? void 0 : _f.refValue) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            flex: 1,
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
              title: "This reference has changed since you opened it.",
              size: 1,
              children: "This reference has changed since you opened it."
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              onClick: handleReloadReference,
              icon: SyncIcon,
              fontSize: 1,
              mode: "ghost",
              padding: 2,
              space: 2,
              text: "Reload reference"
            })
          })]
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            flex: 1,
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextOneLine, {
              title: "This reference has been removed since you opened it.",
              size: 1,
              children: "This reference has been removed since you opened it."
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginLeft: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
              as: BackLink2,
              icon: CloseIcon,
              fontSize: 1,
              mode: "ghost",
              padding: 2,
              space: 2,
              text: "Close reference"
            })
          })]
        })]
      })
    })
  });
});
ReferenceChangedBanner.displayName = "ReferenceChangedBanner";
var Root$1 = styled_components_browser_esm_default(Card)(_templateObject20 || (_templateObject20 = _taggedTemplateLiteral(["\n  position: relative;\n  z-index: 50;\n"])));
function PermissionCheckBanner(_ref27) {
  let {
    granted,
    requiredPermission
  } = _ref27;
  var _a, _b;
  const currentUser = useCurrentUser();
  const plural = ((_a = currentUser == null ? void 0 : currentUser.roles) == null ? void 0 : _a.length) !== 1;
  const roles = join(((_b = currentUser == null ? void 0 : currentUser.roles) == null ? void 0 : _b.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
    children: r.title
  }, r.name))) || [], ", ");
  if (granted)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
    "data-testid": "permission-check-banner",
    shadow: 1,
    tone: "transparent",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
      paddingX: 4,
      paddingY: 3,
      sizing: "border",
      width: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "flex-start",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadOnlyIcon, {})
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          flex: 1,
          marginLeft: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
            size: 1,
            children: ["Your role", plural && "s", " ", roles, " ", plural ? "do" : "does", " not have permissions to", " ", requiredPermission, " this document."]
          })
        })]
      })
    })
  });
}
function join(array, sep) {
  return array.reduce((result, item) => {
    if (result === null) {
      return [item];
    }
    return result.concat([sep, item]);
  }, null);
}
function usePrevious(value) {
  const ref = (0, import_react30.useRef)();
  (0, import_react30.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
var LONG_ENOUGH_BUT_NOT_TOO_LONG = 1e3 * 60 * 60 * 24 * 24;
function useConditionalToast(params) {
  const toast = useToast();
  const wasEnabled = usePrevious(params.enabled);
  (0, import_react30.useEffect)(() => {
    if (!wasEnabled && params.enabled) {
      toast.push({
        ...params,
        duration: LONG_ENOUGH_BUT_NOT_TOO_LONG
      });
    }
    if (wasEnabled && !params.enabled) {
      toast.push({
        ...params,
        duration: 0.01
      });
    }
  }, [params, toast, wasEnabled]);
}
var preventDefault = (ev) => ev.preventDefault();
function FormView(props) {
  var _a;
  const {
    hidden,
    margins
  } = props;
  const {
    collapsedFieldSets,
    collapsedPaths,
    displayed: value,
    editState,
    documentId,
    documentType,
    onChange,
    validation,
    ready,
    formState,
    onFocus,
    onBlur,
    onSetCollapsedPath,
    onPathOpen,
    onSetCollapsedFieldSet,
    onSetActiveFieldGroup
  } = useDocumentPane();
  const documentStore = useDocumentStore();
  const presence = useDocumentPresence(documentId);
  const patchChannel = (0, import_react30.useMemo)(() => createPatchChannel(), []);
  const isLocked = (_a = editState == null ? void 0 : editState.transactionSyncLock) == null ? void 0 : _a.enabled;
  useConditionalToast({
    id: "sync-lock-".concat(documentId),
    status: "warning",
    enabled: isLocked,
    title: "Syncing document\u2026",
    description: "Please hold tight while the document is synced. This usually happens right after the document has been published, and it shouldn't take more than a few seconds"
  });
  (0, import_react30.useEffect)(() => {
    const sub = documentStore.pair.documentEvents(documentId, documentType).pipe(tap((event) => {
      if (event.type === "mutation") {
        patchChannel.publish(prepareMutationEvent(event));
      }
      if (event.type === "rebase") {
        patchChannel.publish(prepareRebaseEvent(event));
      }
    })).subscribe();
    return () => {
      sub.unsubscribe();
    };
  }, [documentId, documentStore, documentType, patchChannel]);
  const hasRev = Boolean(value == null ? void 0 : value._rev);
  (0, import_react30.useEffect)(() => {
    if (hasRev) {
      patchChannel.publish({
        type: "mutation",
        patches: [],
        snapshot: value
      });
    }
  }, [hasRev]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
    hidden,
    paddingX: 4,
    paddingTop: 5,
    paddingBottom: 9,
    sizing: "border",
    width: 1,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresenceOverlay, {
      margins,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        as: "form",
        onSubmit: preventDefault,
        children: ready ? formState === null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          padding: 2,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: "This form is hidden"
          })
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormBuilder, {
          __internal_patchChannel: patchChannel,
          collapsedFieldSets,
          collapsedPaths,
          focusPath: formState.focusPath,
          changed: formState.changed,
          focused: formState.focused,
          groups: formState.groups,
          id: "root",
          members: formState.members,
          onChange,
          onFieldGroupSelect: onSetActiveFieldGroup,
          onPathBlur: onBlur,
          onPathFocus: onFocus,
          onPathOpen,
          onSetFieldSetCollapsed: onSetCollapsedFieldSet,
          onSetPathCollapsed: onSetCollapsedPath,
          presence,
          readOnly: formState.readOnly,
          schemaType: formState.schemaType,
          validation,
          value: formState.value
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delay, {
          ms: 300,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
            align: "center",
            direction: "column",
            height: "fill",
            justify: "center",
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
              muted: true
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              marginTop: 3,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                align: "center",
                muted: true,
                size: 1,
                children: "Loading document"
              })
            })]
          })
        })
      })
    })
  });
}
function prepareMutationEvent(event) {
  const patches = event.mutations.map((mut) => mut.patch).filter(Boolean);
  return {
    type: "mutation",
    snapshot: event.document,
    patches: fromMutationPatches(event.origin, patches)
  };
}
function prepareRebaseEvent(event) {
  const remotePatches = event.remoteMutations.map((mut) => mut.patch).filter(Boolean);
  const localPatches = event.localMutations.map((mut) => mut.patch).filter(Boolean);
  return {
    type: "rebase",
    snapshot: event.document,
    patches: fromMutationPatches("remote", remotePatches).concat(fromMutationPatches("local", localPatches))
  };
}
function DocumentHeaderTabs() {
  const {
    activeViewId,
    paneKey,
    views
  } = useDocumentPane();
  const tabPanelId = "".concat(paneKey, "tabpanel");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabList, {
    space: 1,
    children: views.map((view, index2) => {
      var _a;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentHeaderTab, {
        icon: view.icon,
        id: "".concat(paneKey, "tab-").concat(view.id),
        isActive: activeViewId === view.id,
        label: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
          children: view.title
        }),
        tabPanelId,
        viewId: index2 === 0 ? null : (_a = view.id) != null ? _a : null
      }, view.id);
    })
  });
}
function DocumentHeaderTab(props) {
  const {
    icon,
    id: id2,
    isActive,
    label,
    tabPanelId,
    viewId
  } = props;
  const {
    ready
  } = useDocumentPane();
  const {
    setView
  } = usePaneRouter();
  const handleClick = (0, import_react30.useCallback)(() => setView(viewId), [setView, viewId]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tab, {
    "aria-controls": tabPanelId,
    disabled: !ready,
    fontSize: 1,
    icon,
    id: id2,
    selected: isActive,
    label,
    onClick: handleClick
  });
}
var BUTTON_PROPS = {
  error: {
    tone: "critical",
    icon: ErrorOutlineIcon
  },
  warning: {
    tone: "caution",
    icon: WarningOutlineIcon
  },
  info: {
    tone: "primary",
    icon: InfoOutlineIcon
  }
};
function ValidationMenu(props) {
  const {
    boundaryElement,
    isOpen,
    setOpen
  } = props;
  const {
    onFocus,
    onPathOpen,
    schemaType,
    validation
  } = useDocumentPane();
  const id2 = (0, import_react30.useId)();
  const hasValidationMarkers = validation.length > 0;
  const hasErrorMarkers = validation.some(isValidationErrorMarker);
  const hasWarningMarkers = validation.some(isValidationWarningMarker);
  const hasInfoMarkers = validation.some(isValidationInfoMarker);
  const buttonProps = (0, import_react30.useMemo)(() => {
    if (hasErrorMarkers)
      return BUTTON_PROPS.error;
    if (hasWarningMarkers)
      return BUTTON_PROPS.warning;
    if (hasInfoMarkers)
      return BUTTON_PROPS.info;
    return void 0;
  }, [hasErrorMarkers, hasInfoMarkers, hasWarningMarkers]);
  const handleOpen = (0, import_react30.useCallback)((path) => {
    onPathOpen(path);
    onFocus(path);
  }, [onFocus, onPathOpen]);
  const handleClose = (0, import_react30.useCallback)(() => setOpen(false), [setOpen]);
  if (!hasValidationMarkers)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
    id: id2 || "",
    button: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      ...buttonProps,
      title: "Show validation issues",
      mode: "bleed",
      "data-testid": "validation-list-button"
    }),
    menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
      open: isOpen,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValidationList, {
        documentType: schemaType,
        validation,
        onClose: handleClose,
        onFocus: handleOpen
      })
    }),
    popover: {
      portal: true,
      boundaryElement,
      constrainSize: true,
      preventOverflow: true,
      width: 0
    },
    placement: "bottom"
  });
}
function DocumentHeaderTitle() {
  const {
    connectionState,
    schemaType,
    title,
    value: documentValue
  } = useDocumentPane();
  const subscribed = Boolean(documentValue) && connectionState === "connected";
  const {
    error,
    value
  } = useDocumentPreview({
    enabled: subscribed,
    schemaType,
    value: documentValue
  });
  if (connectionState !== "connected") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {});
  }
  if (!documentValue) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: ["New ", (schemaType == null ? void 0 : schemaType.title) || (schemaType == null ? void 0 : schemaType.name)]
    });
  }
  if (subscribed) {
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
    children: title
  });
}
var isActionButton = (item) => Boolean(item.showAsAction);
var isMenuButton = (0, import_negate.default)(isActionButton);
var DocumentPanelHeader = (0, import_react30.memo)((0, import_react30.forwardRef)((_ref28, ref) => {
  let {
    rootElement
  } = _ref28;
  const {
    onMenuAction,
    onPaneClose,
    onPaneSplit,
    historyController,
    validation,
    menuItems,
    menuItemGroups,
    schemaType,
    ready,
    views,
    unstable_languageFilter
  } = useDocumentPane();
  const {
    revTime: rev
  } = historyController;
  const {
    features
  } = useDeskTool();
  const {
    index: index2,
    BackLink: BackLink2,
    hasGroupSiblings
  } = usePaneRouter();
  const contextMenuItems = (0, import_react30.useMemo)(() => menuItems.filter(isMenuButton), [menuItems]);
  const [isValidationOpen, setValidationOpen] = import_react30.default.useState(false);
  const showTabs = views.length > 1;
  const showVersionMenu = features.reviewChanges;
  const showSplitPaneButton = features.splitViews && onPaneSplit && views.length > 1;
  const showSplitPaneCloseButton = showSplitPaneButton && hasGroupSiblings;
  const showPaneGroupCloseButton = !showSplitPaneCloseButton && !features.backButton;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
    ref,
    loading: !ready,
    title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentHeaderTitle, {}),
    tabs: showTabs && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentHeaderTabs, {}),
    backButton: features.backButton && index2 > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      as: BackLink2,
      "data-as": "a",
      icon: ArrowLeftIcon,
      mode: "bleed"
    }),
    subActions: showVersionMenu && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineMenu, {
      chunk: rev,
      mode: "rev",
      placement: "bottom-end"
    }),
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Inline, {
      space: 1,
      children: [unstable_languageFilter.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: unstable_languageFilter.map((languageFilterComponent, idx) => {
          return (0, import_react30.createElement)(languageFilterComponent, {
            key: "language-filter-".concat(idx),
            schemaType
          });
        })
      }), validation.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ValidationMenu, {
        boundaryElement: rootElement,
        isOpen: isValidationOpen,
        setOpen: setValidationOpen
      }, "validation-menu"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContextMenuButton, {
        itemGroups: menuItemGroups,
        items: contextMenuItems,
        onAction: onMenuAction
      }, "context-menu"), showSplitPaneButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: SplitVerticalIcon,
        mode: "bleed",
        onClick: onPaneSplit,
        title: "Split pane right"
      }, "split-pane-button"), showSplitPaneCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: CloseIcon,
        mode: "bleed",
        onClick: onPaneClose,
        title: "Close split pane"
      }, "close-view-button"), showPaneGroupCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        icon: CloseIcon,
        mode: "bleed",
        title: "Close pane group",
        as: BackLink2
      }, "close-view-button")]
    })
  });
}));
DocumentPanelHeader.displayName = "DocumentPanelHeader";
var Scroller = styled_components_browser_esm_default(ScrollContainer)((_ref29) => {
  let {
    $disabled
  } = _ref29;
  if ($disabled) {
    return {
      height: "100%"
    };
  }
  return Ce(_templateObject21 || (_templateObject21 = _taggedTemplateLiteral(["\n    height: 100%;\n    overflow: auto;\n    position: relative;\n    scroll-behavior: smooth;\n    outline: none;\n  "])));
});
var DocumentPanel = function DocumentPanel2(props) {
  const {
    footerHeight,
    isInspectOpen,
    rootElement,
    setDocumentPanelPortalElement
  } = props;
  const {
    activeViewId,
    displayed,
    documentId,
    editState,
    value,
    views,
    ready,
    schemaType,
    permissions,
    isPermissionsLoading
  } = useDocumentPane();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const parentPortal = usePortal();
  const {
    features
  } = useDeskTool();
  const [headerElement, setHeaderElement] = (0, import_react30.useState)(null);
  const headerRect = useElementRect(headerElement);
  const portalRef = (0, import_react30.useRef)(null);
  const [documentScrollElement, setDocumentScrollElement] = (0, import_react30.useState)(null);
  const requiredPermission = value._createdAt ? "update" : "create";
  const activeView = (0, import_react30.useMemo)(() => views.find((view) => view.id === activeViewId) || views[0] || {
    type: "form"
  }, [activeViewId, views]);
  const portalElement = features.splitPanes ? portalRef.current || parentPortal.element : parentPortal.element;
  const margins = (0, import_react30.useMemo)(() => {
    if (layoutCollapsed) {
      return [(headerRect == null ? void 0 : headerRect.height) || 0, 0, footerHeight ? footerHeight + 2 : 2, 0];
    }
    return [0, 0, 2, 0];
  }, [layoutCollapsed, footerHeight, headerRect]);
  const formViewHidden = activeView.type !== "form";
  const activeViewNode = (0, import_react30.useMemo)(() => activeView.type === "component" && activeView.component && (0, import_react30.createElement)(activeView.component, {
    document: {
      draft: (editState == null ? void 0 : editState.draft) || null,
      displayed: displayed || value,
      historical: displayed,
      published: (editState == null ? void 0 : editState.published) || null
    },
    documentId,
    options: activeView.options,
    schemaType
  }), [activeView, displayed, documentId, editState == null ? void 0 : editState.draft, editState == null ? void 0 : editState.published, schemaType, value]);
  (0, import_react30.useEffect)(() => {
    if (!(documentScrollElement == null ? void 0 : documentScrollElement.scrollTo))
      return;
    documentScrollElement.scrollTo(0, 0);
  }, [documentId, documentScrollElement]);
  (0, import_react30.useEffect)(() => {
    if (portalElement) {
      setDocumentPanelPortalElement(portalElement);
    }
  }, [portalElement, setDocumentPanelPortalElement]);
  const inspectDialog = (0, import_react30.useMemo)(() => {
    return isInspectOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InspectDialog, {
      value: displayed || value
    }) : null;
  }, [isInspectOpen, displayed, value]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    direction: "column",
    flex: 2,
    overflow: layoutCollapsed ? void 0 : "hidden",
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPanelHeader, {
      rootElement,
      ref: setHeaderElement
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
        element: portalElement,
        __unstable_elements: {
          documentScrollElement
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BoundaryElementProvider, {
          element: documentScrollElement,
          children: [activeView.type === "form" && !isPermissionsLoading && ready && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PermissionCheckBanner, {
              granted: Boolean(permissions == null ? void 0 : permissions.granted),
              requiredPermission
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceChangedBanner, {})]
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Scroller, {
            $disabled: layoutCollapsed || false,
            "data-testid": "document-panel-scroller",
            ref: setDocumentScrollElement,
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormView, {
              hidden: formViewHidden,
              margins
            }, documentId + (ready ? "_ready" : "_pending")), activeViewNode]
          }), inspectDialog, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
            "data-testid": "document-panel-portal",
            ref: portalRef
          })]
        })
      })
    })]
  });
};
var POPOVER_FALLBACK_PLACEMENTS = ["left", "bottom"];
var DIALOG_WIDTH_TO_UI_WIDTH = {
  small: 0,
  medium: 1,
  large: 2,
  full: "auto"
};
function ConfirmDialog(props) {
  const {
    dialog,
    referenceElement
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialogContent, {
      dialog
    }),
    fallbackPlacements: POPOVER_FALLBACK_PLACEMENTS,
    open: true,
    placement: "top",
    portal: true,
    preventOverflow: true,
    referenceElement
  });
}
function ConfirmDialogContent(props) {
  const {
    dialog
  } = props;
  const {
    cancelButtonIcon,
    cancelButtonText,
    confirmButtonIcon,
    confirmButtonText,
    message,
    onCancel,
    onConfirm,
    tone
  } = dialog;
  const {
    isTopLayer
  } = useLayer();
  const [element, setElement] = (0, import_react30.useState)(null);
  const handleClickOutside = (0, import_react30.useCallback)(() => {
    if (isTopLayer)
      onCancel();
  }, [isTopLayer, onCancel]);
  const handleGlobalKeyDown = (0, import_react30.useCallback)((event) => {
    if (event.key === "Escape" && isTopLayer)
      onCancel();
  }, [isTopLayer, onCancel]);
  useClickOutside(handleClickOutside, [element]);
  useGlobalKeyDown(handleGlobalKeyDown);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    direction: "column",
    ref: setElement,
    style: {
      minWidth: 320 - 16,
      maxWidth: 400
    },
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      flex: 1,
      overflow: "auto",
      padding: 4,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        children: message
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      paddingX: 4,
      paddingY: 3,
      style: {
        borderTop: "1px solid var(--card-border-color)"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, {
        columns: 2,
        gap: 2,
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          icon: cancelButtonIcon,
          onClick: onCancel,
          mode: "ghost",
          text: cancelButtonText || "Cancel"
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
          icon: confirmButtonIcon,
          onClick: onConfirm,
          text: confirmButtonText || "Confirm",
          tone
        })]
      })
    })]
  });
}
function ModalDialog(props) {
  const {
    dialog
  } = props;
  const dialogId = (0, import_react30.useId)();
  const footer = dialog.footer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    paddingX: 4,
    paddingY: 3,
    children: dialog.footer
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
    zOffset: "fullscreen",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
      __unstable_hideCloseButton: dialog.showCloseButton === false,
      footer,
      header: dialog.header,
      id: dialogId,
      onClose: dialog.onClose,
      onClickOutside: dialog.onClose,
      width: dialog.width === void 0 ? 1 : DIALOG_WIDTH_TO_UI_WIDTH[dialog.width],
      portal: "documentPanelPortalElement",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        padding: 4,
        children: dialog.content
      })
    })
  });
}
function PopoverDialog(props) {
  const {
    dialog,
    referenceElement
  } = props;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverDialogContent, {
      dialog
    }),
    fallbackPlacements: POPOVER_FALLBACK_PLACEMENTS,
    open: true,
    placement: "top",
    portal: true,
    preventOverflow: true,
    referenceElement
  });
}
function PopoverDialogContent(props) {
  const {
    dialog
  } = props;
  const {
    content,
    onClose
  } = dialog;
  const {
    isTopLayer
  } = useLayer();
  const [element, setElement] = (0, import_react30.useState)(null);
  const handleClickOutside = (0, import_react30.useCallback)(() => {
    if (isTopLayer)
      onClose();
  }, [isTopLayer, onClose]);
  const handleGlobalKeyDown = (0, import_react30.useCallback)((event) => {
    if (event.key === "Escape" && isTopLayer)
      onClose();
  }, [isTopLayer, onClose]);
  useClickOutside(handleClickOutside, [element]);
  useGlobalKeyDown(handleGlobalKeyDown);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    ref: setElement,
    children: content
  });
}
function ActionStateDialog(props) {
  const {
    dialog,
    referenceElement = null
  } = props;
  const modalId = (0, import_react30.useId)();
  if (dialog.type === "confirm") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
      dialog,
      referenceElement
    });
  }
  if (dialog.type === "popover") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverDialog, {
      dialog,
      referenceElement
    });
  }
  if (dialog.type === "dialog" || !dialog.type) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalDialog, {
      dialog
    });
  }
  const unknownModal = dialog;
  console.warn("Unsupported modal type ".concat(unknownModal.type));
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
    id: modalId,
    onClose: unknownModal.onClose,
    onClickOutside: unknownModal.onClose,
    width: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      padding: 4,
      children: unknownModal.content || /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: ["Unexpected modal type (", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
          children: unknownModal.type
        }), ")"]
      })
    })
  });
}
function ActionMenuButton(props) {
  const {
    actionStates,
    disabled
  } = props;
  const idPrefix = (0, import_react30.useId)();
  const buttonRef = (0, import_react30.useRef)(null);
  const [actionIndex, setActionIndex] = (0, import_react30.useState)(-1);
  const [referenceElement, setReferenceElement] = (0, import_react30.useState)(null);
  const handleAction = (0, import_react30.useCallback)((idx) => {
    setActionIndex(idx);
  }, []);
  const popoverProps = (0, import_react30.useMemo)(() => ({
    placement: "top-end",
    portal: true,
    preventOverflow: true
  }), []);
  const currentAction = actionStates[actionIndex];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuButton, {
      id: "".concat(idPrefix, "-action-menu"),
      button: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        "data-testid": "action-menu-button",
        "aria-label": "Open document actions",
        disabled,
        icon: ChevronDownIcon,
        mode: "ghost",
        ref: buttonRef
      }),
      menu: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
        padding: 1,
        children: actionStates.map((actionState, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionMenuListItem, {
          actionState,
          disabled,
          index: idx,
          onAction: handleAction
        }, idx))
      }),
      popover: popoverProps,
      ref: setReferenceElement
    }), currentAction && currentAction.dialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
      zOffset: "paneFooter",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionStateDialog, {
        dialog: currentAction.dialog,
        referenceElement
      })
    })]
  });
}
function ActionMenuListItem(props) {
  const {
    actionState,
    disabled,
    index: index2,
    onAction
  } = props;
  const {
    onHandle
  } = actionState;
  const handleClick = (0, import_react30.useCallback)(() => {
    onAction(index2);
    if (onHandle)
      onHandle();
  }, [index2, onAction, onHandle]);
  const tooltipContent = actionState.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    padding: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
      size: 1,
      children: actionState.title
    })
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuItem, {
    "data-testid": "action-".concat(actionState.label.replace(" ", "")),
    disabled: disabled || Boolean(actionState.disabled),
    onClick: handleClick,
    padding: 0,
    tone: actionState.tone,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      content: tooltipContent,
      disabled: !tooltipContent,
      fallbackPlacements: ["left", "bottom"],
      placement: "top",
      portal: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        paddingX: 3,
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
          flex: 1,
          paddingY: 3,
          children: [actionState.icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginRight: 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
              children: [(0, import_react30.isValidElement)(actionState.icon) && actionState.icon, (0, import_react_is.isValidElementType)(actionState.icon) && (0, import_react30.createElement)(actionState.icon)]
            })
          }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: actionState.label
          })]
        }), actionState.shortcut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginLeft: 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotkeys, {
            keys: String(actionState.shortcut).split("+").map((s) => s.slice(0, 1).toUpperCase() + s.slice(1))
          })
        })]
      })
    })
  });
}
function DocumentStatusBarActionsInner(props) {
  const {
    disabled,
    showMenu,
    states
  } = props;
  const [firstActionState, ...menuActionStates] = states;
  const [buttonElement, setButtonElement] = (0, import_react30.useState)(null);
  const tooltipContent = (0, import_react30.useMemo)(() => {
    if (!firstActionState || !firstActionState.title && !firstActionState.shortcut)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      padding: 2,
      style: {
        maxWidth: 300
      },
      align: "center",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        children: firstActionState.title
      }), firstActionState.shortcut && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        marginLeft: firstActionState.title ? 2 : 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hotkeys, {
          keys: String(firstActionState.shortcut).split("+").map((s) => s.slice(0, 1).toUpperCase() + s.slice(1).toLowerCase())
        })
      })]
    });
  }, [firstActionState]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    children: [firstActionState && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LayerProvider, {
      zOffset: 200,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
        disabled: !tooltipContent,
        content: tooltipContent,
        portal: true,
        placement: "top",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
          flex: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
            "data-testid": "action-".concat(firstActionState.label),
            disabled: disabled || Boolean(firstActionState.disabled),
            icon: firstActionState.icon,
            onClick: firstActionState.onHandle,
            ref: setButtonElement,
            text: firstActionState.label,
            tone: firstActionState.tone || "primary"
          })
        })
      })
    }), showMenu && menuActionStates.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      marginLeft: 1,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionMenuButton, {
        actionStates: menuActionStates,
        disabled
      })
    }), firstActionState && firstActionState.dialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionStateDialog, {
      dialog: firstActionState.dialog,
      referenceElement: buttonElement
    })]
  });
}
var DocumentStatusBarActions = (0, import_react30.memo)(function DocumentStatusBarActions2() {
  const {
    actions,
    connectionState,
    documentId,
    editState
  } = useDocumentPane();
  if (!actions || !editState) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderActionCollectionState, {
    actions,
    actionProps: editState,
    children: (_ref30) => {
      let {
        states
      } = _ref30;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBarActionsInner, {
        disabled: connectionState !== "connected",
        showMenu: actions.length > 1,
        states
      }, documentId);
    }
  });
});
var HistoryStatusBarActions = (0, import_react30.memo)(function HistoryStatusBarActions2() {
  var _a;
  const {
    connectionState,
    editState,
    historyController
  } = useDocumentPane();
  const revision = ((_a = historyController.revTime) == null ? void 0 : _a.id) || "";
  const disabled = ((editState == null ? void 0 : editState.draft) || (editState == null ? void 0 : editState.published) || {})._rev === revision;
  const actionProps = (0, import_react30.useMemo)(() => ({
    ...editState || {},
    revision
  }), [editState, revision]);
  const historyActions = (0, import_react30.useMemo)(() => [HistoryRestoreAction], []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderActionCollectionState, {
    actions: historyActions,
    actionProps,
    children: (_ref31) => {
      let {
        states
      } = _ref31;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBarActionsInner, {
        disabled: connectionState !== "connected" || Boolean(disabled),
        showMenu: false,
        states
      });
    }
  });
});
var BADGE_TONES = {
  primary: "primary",
  success: "positive",
  warning: "caution",
  danger: "critical"
};
function DocumentBadgesInner(_ref32) {
  let {
    states
  } = _ref32;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Inline, {
    space: 1,
    children: states.map((badge, index2) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      content: badge.title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        padding: 2,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          children: badge.title
        })
      }),
      disabled: !badge.title,
      placement: "top",
      portal: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
        fontSize: 1,
        mode: "outline",
        paddingX: 2,
        paddingY: 1,
        radius: 4,
        tone: badge.color ? BADGE_TONES[badge.color] : void 0,
        style: {
          whiteSpace: "nowrap"
        },
        children: badge.label
      })
    }, String(index2)))
  });
}
function DocumentBadges() {
  const {
    badges,
    editState
  } = useDocumentPane();
  if (!editState || !badges)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderBadgeCollectionState, {
    badges,
    badgeProps: editState,
    children: (_ref33) => {
      let {
        states
      } = _ref33;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentBadgesInner, {
        states
      });
    }
  });
}
var Root2 = styled_components_browser_esm_default(Flex)(_templateObject22 || (_templateObject22 = _taggedTemplateLiteral(["\n  cursor: default;\n"])));
function PublishStatus(props) {
  const {
    collapsed,
    disabled,
    lastPublished,
    lastUpdated,
    liveEdit
  } = props;
  const lastPublishedTimeAgo = useTimeAgo(lastPublished || "", {
    minimal: true,
    agoSuffix: true
  });
  const lastPublishedTime = useTimeAgo(lastPublished || "", {
    minimal: true
  });
  const lastUpdatedTimeAgo = useTimeAgo(lastUpdated || "", {
    minimal: true,
    agoSuffix: true
  });
  const lastUpdatedTime = useTimeAgo(lastUpdated || "", {
    minimal: true
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root2, {
    align: "center",
    "data-ui": "SessionLayout",
    sizing: "border",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      placement: "top",
      portal: true,
      content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
        padding: 3,
        space: 3,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          muted: true,
          children: liveEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: ["Last updated ", lastUpdated ? lastUpdatedTimeAgo : lastPublishedTimeAgo]
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: ["Last published ", lastPublishedTimeAgo]
          })
        })
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
        mode: "bleed",
        tone: liveEdit ? "critical" : "positive",
        tabIndex: -1,
        disabled,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
          align: "center",
          children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            marginRight: collapsed ? 0 : 3,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              size: 2,
              children: liveEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlayIcon, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishIcon, {})
            })
          }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            size: 1,
            weight: "medium",
            children: liveEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
              children: lastUpdated ? lastUpdatedTime : lastPublishedTime
            }) : lastPublishedTime
          })]
        })
      })
    })
  });
}
var StyledMotionPath = styled_components_browser_esm_default(motion.path)(_templateObject23 || (_templateObject23 = _taggedTemplateLiteral(["\n  transform-origin: center;\n"])));
var Circle = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.circle, {
  fill: "none",
  r: "8",
  cx: "12.5",
  cy: "12.5",
  strokeWidth: "1.2",
  ...props
});
var Arrows = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledMotionPath, {
  fill: "none",
  d: "M14 17.5619L11.5 20.5L14.5 23.0619M11 7.43811L13.5 4.50001L10.5 1.93811",
  ...props
});
var Checkmark = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
  d: "M9.5 12.1316L11.7414 14.5L16 10",
  ...props
});
var Edit = (props) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.path, {
  d: "M15 7L18 10M6 19L7 15L17 5L20 8L10 18L6 19Z",
  ...props
});
var rotateAnimation = Ue(_templateObject24 || (_templateObject24 = _taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"])));
var RotateGroup = styled_components_browser_esm_default.g(_templateObject25 || (_templateObject25 = _taggedTemplateLiteral(["\n  transform-origin: center;\n\n  &[data-rotate] {\n    animation: ", " 1s ease-in-out infinite;\n  }\n"])), rotateAnimation);
var root = {
  syncing: {
    scale: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    scale: [1, 0.8, 1.2, 0.9, 1.1, 0.95, 1.05, 0.99, 1],
    transition: {
      duration: 0.5,
      delay: 0.2
    }
  },
  changes: {
    transition: {
      duration: 0
    }
  }
};
var circle = {
  syncing: {
    strokeDasharray: "0, 0, 23, 3, 23, 3",
    strokeDashoffset: 10,
    opacity: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    strokeDasharray: "0, 0, 23, 0, 23, 0",
    strokeDashoffset: 10,
    opacity: 1,
    transition: {
      duration: 0.2
    }
  },
  changes: {
    strokeDasharray: "0, 60, 23, 0, 23, 0",
    strokeDashoffset: 0,
    opacity: 0,
    transition: {
      duration: 0.5
    }
  }
};
var arrows = {
  syncing: {
    opacity: 1,
    transition: {
      duration: 0
    }
  },
  saved: {
    opacity: 0,
    transition: {
      duration: 0.2
    }
  },
  changes: {
    opacity: 0
  }
};
var checkmark = {
  syncing: {
    pathLength: 0,
    transition: {
      duration: 0
    }
  },
  saved: {
    pathLength: 1,
    transition: {
      delay: 0.4,
      duration: 0.3
    }
  },
  changes: {
    pathLength: 0,
    transition: {
      duration: 0.2
    }
  }
};
var edit = {
  syncing: {
    pathLength: 0,
    transition: {
      duration: 0
    }
  },
  saved: {
    pathLength: 0,
    transition: {
      duration: 0
    }
  },
  changes: {
    pathLength: 1,
    transition: {
      duration: 0.4,
      delay: 0.5
    }
  }
};
function AnimatedStatusIcon(props) {
  const {
    status
  } = props;
  if (!status) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 25 25",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.2",
    "data-sanity-icon": "",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.g, {
      variants: root,
      initial: status,
      animate: status,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RotateGroup, {
        "data-rotate": status === "changes" ? void 0 : "",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Arrows, {
          variants: arrows,
          initial: status,
          animate: status
        }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, {
          variants: circle,
          initial: status,
          animate: status
        })]
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkmark, {
        variants: checkmark,
        initial: status,
        animate: status
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Edit, {
        variants: edit,
        initial: status,
        animate: status
      })]
    })
  });
}
var ReviewButton = import_react30.default.forwardRef(function ReviewButton2(props, ref) {
  const {
    collapsed,
    status,
    lastUpdated,
    ...rest
  } = props;
  const lastUpdatedTime = useTimeAgo(lastUpdated || "", {
    minimal: true
  });
  const lastUpdatedTimeAgo = useTimeAgo(lastUpdated || "", {
    minimal: true,
    agoSuffix: true
  });
  const buttonProps = (0, import_react30.useMemo)(() => {
    if (status === "syncing") {
      return {
        text: "Saving...",
        tone: void 0
      };
    }
    if (status === "changes") {
      return {
        text: lastUpdatedTime,
        tone: "caution"
      };
    }
    if (status === "saved") {
      return {
        text: "Saved!",
        tone: "positive"
      };
    }
    return {};
  }, [status, lastUpdatedTime]);
  if (!status) {
    return null;
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
    placement: "top",
    portal: true,
    disabled: status !== "changes",
    content: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
      padding: 3,
      space: 3,
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
        size: 1,
        weight: "semibold",
        children: "Review changes"
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
        size: 1,
        muted: true,
        children: ["Changes saved ", lastUpdatedTimeAgo]
      })]
    }),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      mode: "bleed",
      justify: "flex-start",
      tone: buttonProps == null ? void 0 : buttonProps.tone,
      ...rest,
      "data-testid": "review-changes-button",
      ref,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
        align: "center",
        children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          marginRight: collapsed ? 0 : 3,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedStatusIcon, {
              status
            })
          })
        }), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          size: 1,
          weight: "medium",
          children: buttonProps == null ? void 0 : buttonProps.text
        })]
      })
    })
  });
});
var ReviewChangesButton = import_react30.default.memo(ReviewButton);
var SYNCING_TIMEOUT = 1e3;
var SAVED_TIMEOUT = 3e3;
var DocumentSparkline = (0, import_react30.memo)(function DocumentSparkline2() {
  var _a;
  const {
    changesOpen,
    documentId,
    documentType,
    editState,
    onHistoryClose,
    onHistoryOpen,
    historyController,
    value
  } = useDocumentPane();
  const syncState = useSyncState(documentId, documentType);
  const lastUpdated = value == null ? void 0 : value._updatedAt;
  const lastPublished = (_a = editState == null ? void 0 : editState.published) == null ? void 0 : _a._updatedAt;
  const showingRevision = historyController.onOlderRevision();
  const liveEdit = Boolean(editState == null ? void 0 : editState.liveEdit);
  const published = Boolean(editState == null ? void 0 : editState.published);
  const changed = Boolean(editState == null ? void 0 : editState.draft);
  const [rootFlexElement, setRootFlexElement] = (0, import_react30.useState)(null);
  const rootFlexRect = useElementRect(rootFlexElement);
  const collapsed = !rootFlexRect || (rootFlexRect == null ? void 0 : rootFlexRect.width) < 300;
  const [status, setStatus] = (0, import_react30.useState)(null);
  (0, import_react30.useEffect)(() => {
    if (status === "syncing" && !syncState.isSyncing) {
      const timerId = setTimeout(() => setStatus("saved"), SYNCING_TIMEOUT);
      return () => clearTimeout(timerId);
    }
    if (status === "saved") {
      const timerId = setTimeout(() => setStatus(null), SAVED_TIMEOUT);
      return () => clearTimeout(timerId);
    }
  }, [status, lastUpdated, syncState.isSyncing]);
  (0, import_react30.useLayoutEffect)(() => {
    setStatus(null);
  }, [documentId]);
  (0, import_react30.useLayoutEffect)(() => {
    if (syncState.isSyncing) {
      setStatus("syncing");
    }
  }, [syncState.isSyncing, lastUpdated]);
  const reviewButton = (0, import_react30.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReviewChangesButton, {
    lastUpdated,
    status: status || (changed ? "changes" : void 0),
    onClick: changesOpen ? onHistoryClose : onHistoryOpen,
    disabled: showingRevision,
    selected: changesOpen,
    collapsed
  }), [changed, changesOpen, onHistoryClose, onHistoryOpen, lastUpdated, showingRevision, status, collapsed]);
  const publishStatus = (0, import_react30.useMemo)(() => (liveEdit || published) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    marginRight: 1,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PublishStatus, {
      disabled: showingRevision,
      lastPublished,
      lastUpdated,
      liveEdit,
      collapsed
    })
  }), [collapsed, lastPublished, lastUpdated, liveEdit, published, showingRevision]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
    align: "center",
    "data-ui": "DocumentSparkline",
    ref: setRootFlexElement,
    children: [publishStatus, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      align: "center",
      flex: 1,
      children: [reviewButton, !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        marginLeft: 3,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentBadges, {})
      })]
    })]
  });
});
var DocumentActionsBox = styled_components_browser_esm_default(Box)(_templateObject26 || (_templateObject26 = _taggedTemplateLiteral(["\n  min-width: 10em;\n  max-width: 16em;\n"])));
function DocumentStatusBar(props) {
  const {
    actionsBoxRef
  } = props;
  const {
    badges,
    historyController
  } = useDocumentPane();
  const showingRevision = historyController.onOlderRevision();
  return (0, import_react30.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    paddingLeft: 2,
    paddingRight: [2, 3],
    paddingY: 2,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      align: "center",
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        flex: [1, 2],
        children: badges && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentSparkline, {})
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentActionsBox, {
        flex: 1,
        marginLeft: [1, 3],
        ref: actionsBoxRef,
        children: showingRevision ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistoryStatusBarActions, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBarActions, {})
      })]
    })
  }), [actionsBoxRef, badges, showingRevision]);
}
function KeyboardShortcutResponder(props) {
  const {
    actionsBoxElement,
    activeIndex,
    children,
    id: id2,
    onActionStart,
    onKeyDown,
    rootRef,
    states,
    ...rest
  } = props;
  const activeAction = states[activeIndex];
  const handleKeyDown = (0, import_react30.useCallback)((event) => {
    const matchingStates = states.filter((state) => state.shortcut && (0, import_is_hotkey.default)(state.shortcut, event));
    const matchingState = matchingStates[0];
    if (matchingStates.length > 1) {
      console.warn('Keyboard shortcut conflict: More than one document action matches the shortcut "'.concat(matchingState.shortcut, '"'));
    }
    if (matchingState && !matchingState.disabled && matchingState.onHandle) {
      event.preventDefault();
      matchingState.onHandle();
      onActionStart(states.indexOf(matchingState));
      return;
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [onActionStart, onKeyDown, states]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
    id: id2,
    onKeyDown: handleKeyDown,
    tabIndex: -1,
    ...rest,
    ref: rootRef,
    children: [children, activeAction && activeAction.dialog && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LegacyLayerProvider, {
      zOffset: "paneFooter",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionStateDialog, {
        dialog: activeAction.dialog,
        referenceElement: actionsBoxElement
      })
    })]
  });
}
var DocumentActionShortcuts = import_react30.default.memo((props) => {
  const {
    actionsBoxElement,
    children,
    ...rest
  } = props;
  const {
    actions,
    editState
  } = useDocumentPane();
  const [activeIndex, setActiveIndex] = (0, import_react30.useState)(-1);
  const onActionStart = (0, import_react30.useCallback)((idx) => {
    setActiveIndex(idx);
  }, []);
  const actionProps = (0, import_react30.useMemo)(() => editState && {
    ...editState,
    onComplete: () => void 0,
    revision: void 0
  }, [editState]);
  if (!actionProps || !actions)
    return null;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenderActionCollectionState, {
    actionProps,
    actions,
    children: (_ref34) => {
      let {
        states
      } = _ref34;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyboardShortcutResponder, {
        ...rest,
        activeIndex,
        actionsBoxElement,
        onActionStart,
        states,
        children
      });
    }
  });
});
DocumentActionShortcuts.displayName = "DocumentActionShortcuts";
var DOCUMENT_PANEL_MIN_WIDTH = 320;
var DOCUMENT_PANEL_INITIAL_MIN_WIDTH = 600;
var CHANGES_PANEL_MIN_WIDTH = 320;
var DIALOG_PROVIDER_POSITION = [
  "fixed",
  "absolute"
];
var StyledChangeConnectorRoot = styled_components_browser_esm_default(ChangeConnectorRoot)(_templateObject27 || (_templateObject27 = _taggedTemplateLiteral(["\n  flex: 1;\n  display: flex;\n  min-height: 0;\n  min-width: 0;\n"])));
var DocumentPane = (0, import_react30.memo)(function DocumentPane2(props) {
  const {
    name: parentSourceName
  } = useSource();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceProvider, {
    name: props.pane.source || parentSourceName,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPaneInner, {
      ...props
    })
  });
});
function DocumentPaneInner(props) {
  var _a;
  const {
    pane,
    paneKey
  } = props;
  const {
    resolveNewDocumentOptions
  } = useSource().document;
  const paneRouter = usePaneRouter();
  const options = usePaneOptions(pane.options, paneRouter.params);
  const {
    documentType,
    isLoaded: isDocumentLoaded
  } = useDocumentType(options.id, options.type);
  const templateItems = (0, import_react30.useMemo)(() => {
    return resolveNewDocumentOptions({
      type: "global"
    });
  }, [resolveNewDocumentOptions]);
  const [templatePermissions, isTemplatePermissionsLoading] = useTemplatePermissions({
    templateItems
  });
  const isLoaded = isDocumentLoaded && !isTemplatePermissionsLoading;
  const providerProps = (0, import_react30.useMemo)(() => {
    return isLoaded && documentType && options.type !== documentType ? mergeDocumentType(props, options, documentType) : props;
  }, [props, documentType, isLoaded, options]);
  const {
    ReferenceChildLink: ReferenceChildLink2,
    handleEditReference,
    groupIndex,
    routerPanesState
  } = paneRouter;
  const childParams = ((_a = routerPanesState[groupIndex + 1]) == null ? void 0 : _a[0].params) || {};
  const routerPanesStateLength = routerPanesState.length;
  const {
    parentRefPath
  } = childParams;
  const activePath = (0, import_react30.useMemo)(() => {
    return parentRefPath ? {
      path: fromString(parentRefPath),
      state: groupIndex >= routerPanesStateLength - 1 ? "none" : groupIndex >= routerPanesStateLength - 2 ? "selected" : "pressed"
    } : {
      path: [],
      state: "none"
    };
  }, [parentRefPath, groupIndex, routerPanesStateLength]);
  if (options.type === "*" && !isLoaded) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPane, {
      flex: 2.5,
      minWidth: 320,
      paneKey,
      title: "Loading document\u2026"
    });
  }
  if (!documentType) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorPane, {
      flex: 2.5,
      minWidth: 320,
      paneKey,
      title: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
        children: "The document was not found"
      }),
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
        space: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          as: "p",
          children: ["The document type is not defined, and a document with the ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: options.id
          }), " ", "identifier could not be found."]
        })
      })
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPaneProvider, {
    ...providerProps,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceInputOptionsProvider, {
      EditReferenceLinkComponent: ReferenceChildLink2,
      onEditReference: handleEditReference,
      initialValueTemplateItems: templatePermissions,
      activePath,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InnerDocumentPane, {})
    })
  }, documentType);
}
function usePaneOptions(options) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const templates = useTemplates();
  return (0, import_react30.useMemo)(() => {
    if (options.type && options.type !== "*") {
      return options;
    }
    const templateName = options.template || params.template;
    const template = templateName ? templates.find((t) => t.id === templateName) : void 0;
    const documentType = template == null ? void 0 : template.schemaType;
    if (!documentType) {
      return options;
    }
    return {
      ...options,
      type: documentType
    };
  }, [options, params.template, templates]);
}
function mergeDocumentType(props, options, documentType) {
  return {
    ...props,
    pane: {
      ...props.pane,
      options: {
        ...options,
        type: documentType
      }
    }
  };
}
function InnerDocumentPane() {
  const {
    changesOpen,
    documentType,
    onFocus,
    onPathOpen,
    onHistoryOpen,
    onKeyUp,
    inspectOpen,
    paneKey,
    schemaType,
    value
  } = useDocumentPane();
  const {
    features
  } = useDeskTool();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const zOffsets = useZIndex();
  const [rootElement, setRootElement] = (0, import_react30.useState)(null);
  const [footerElement, setFooterElement] = (0, import_react30.useState)(null);
  const [actionsBoxElement, setActionsBoxElement] = (0, import_react30.useState)(null);
  const [documentPanelPortalElement, setDocumentPanelPortalElement] = (0, import_react30.useState)(null);
  const footerRect = useElementRect(footerElement);
  const footerH = footerRect == null ? void 0 : footerRect.height;
  const documentPanel = (0, import_react30.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentPanel, {
    footerHeight: footerH || null,
    isInspectOpen: inspectOpen,
    rootElement,
    setDocumentPanelPortalElement
  }), [footerH, rootElement, inspectOpen]);
  const footer = (0, import_react30.useMemo)(() => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalProvider, {
    __unstable_elements: {
      documentPanelPortalElement
    },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
      position: DIALOG_PROVIDER_POSITION,
      zOffset: zOffsets.portal,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneFooter, {
        ref: setFooterElement,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentStatusBar, {
          actionsBoxRef: setActionsBoxElement
        })
      })
    })
  }), [documentPanelPortalElement, zOffsets.portal]);
  const changesPanel = (0, import_react30.useMemo)(() => {
    if (!features.reviewChanges)
      return null;
    if (!changesOpen)
      return null;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BoundaryElementProvider, {
      element: rootElement,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChangesPanel, {})
    });
  }, [changesOpen, features.reviewChanges, rootElement]);
  const onConnectorSetFocus = (0, import_react30.useCallback)((path) => {
    onPathOpen(path);
    onFocus(path);
  }, [onPathOpen, onFocus]);
  const children = (0, import_react30.useMemo)(() => {
    if (!schemaType) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorPane, {
        flex: 2.5,
        minWidth: 320,
        paneKey,
        title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
          children: ["Unknown document type: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
            children: documentType
          })]
        }),
        tone: "caution",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
          space: 4,
          children: [documentType && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
            as: "p",
            children: ["This document has the schema type ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
              children: documentType
            }), ", which is not defined as a type in the local content studio schema."]
          }), !documentType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
            as: "p",
            children: "This document does not exist, and no schema type was specified for it."
          }), isDev && value && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              as: "p",
              children: "Here is the JSON representation of the document:"
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
              padding: 3,
              overflow: "auto",
              radius: 2,
              shadow: 1,
              tone: "inherit",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Code, {
                language: "json",
                size: [1, 1, 2],
                children: JSON.stringify(value, null, 2)
              })
            })]
          })]
        })
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogProvider, {
        position: DIALOG_PROVIDER_POSITION,
        zOffset: zOffsets.portal,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
          direction: "column",
          flex: 1,
          height: layoutCollapsed ? void 0 : "fill",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StyledChangeConnectorRoot, {
            "data-testid": "change-connector-root",
            isReviewChangesOpen: changesOpen,
            onOpenReviewChanges: onHistoryOpen,
            onSetFocus: onConnectorSetFocus,
            children: [documentPanel, changesPanel]
          })
        })
      }), footer, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentOperationResults, {})]
    });
  }, [schemaType, zOffsets.portal, layoutCollapsed, changesOpen, onHistoryOpen, onConnectorSetFocus, documentPanel, changesPanel, footer, paneKey, documentType, value]);
  const currentMinWidth = changesOpen ? DOCUMENT_PANEL_INITIAL_MIN_WIDTH + CHANGES_PANEL_MIN_WIDTH : DOCUMENT_PANEL_INITIAL_MIN_WIDTH;
  const minWidth = changesOpen ? DOCUMENT_PANEL_MIN_WIDTH + CHANGES_PANEL_MIN_WIDTH : DOCUMENT_PANEL_MIN_WIDTH;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentActionShortcuts, {
    actionsBoxElement,
    currentMinWidth,
    "data-testid": "document-pane",
    flex: 2.5,
    id: paneKey,
    minWidth,
    onKeyUp,
    rootRef: setRootElement,
    children
  });
}
function NoDocumentTypesScreen() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
    height: "fill",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      align: "center",
      height: "fill",
      justify: "center",
      padding: 4,
      sizing: "border",
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
        width: 0,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
          padding: 4,
          radius: 2,
          shadow: 1,
          tone: "caution",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                size: 1,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WarningOutlineIcon, {})
              })
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
              flex: 1,
              marginLeft: 3,
              space: 3,
              children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                as: "h1",
                size: 1,
                weight: "bold",
                children: "No document types"
              }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                as: "p",
                muted: true,
                size: 1,
                children: "Please define at least one document type in your schema."
              }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                as: "p",
                muted: true,
                size: 1,
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                  href: "https://beta.sanity.io/docs/platform/studio/config",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "Learn how to add a document type \u2192"
                })
              })]
            })]
          })
        })
      })
    })
  });
}
var StyledPaneLayout = styled_components_browser_esm_default(PaneLayout)(_templateObject28 || (_templateObject28 = _taggedTemplateLiteral(["\n  min-height: 100%;\n  min-width: 320px;\n"])));
var isSaveHotkey = (0, import_is_hotkey.default)("mod+s");
var DeskTool = (0, import_react30.memo)(function DeskTool2(_ref35) {
  let {
    onPaneChange
  } = _ref35;
  var _a;
  const {
    navigate
  } = useRouter();
  const {
    push: pushToast
  } = useToast();
  const schema = useSchema();
  const mediaIndex = useMediaIndex();
  const {
    layoutCollapsed,
    setLayoutCollapsed
  } = useDeskTool();
  const {
    paneDataItems,
    resolvedPanes,
    routerPanes
  } = useResolvedPanes();
  const [portalElement, setPortalElement] = (0, import_react30.useState)(null);
  const handleRootCollapse = (0, import_react30.useCallback)(() => setLayoutCollapsed(true), [setLayoutCollapsed]);
  const handleRootExpand = (0, import_react30.useCallback)(() => setLayoutCollapsed(false), [setLayoutCollapsed]);
  (0, import_react30.useEffect)(() => {
    if (resolvedPanes.length) {
      onPaneChange(resolvedPanes);
    }
  }, [onPaneChange, resolvedPanes]);
  (0, import_react30.useEffect)(() => {
    if (mediaIndex > 1 || !layoutCollapsed)
      return;
    const hasSiblings = routerPanes.some((group) => group.length > 1);
    if (!hasSiblings)
      return;
    const withoutSiblings = routerPanes.map((group) => [group[0]]);
    navigate({
      panes: withoutSiblings
    }, {
      replace: true
    });
  }, [mediaIndex, navigate, layoutCollapsed, routerPanes]);
  (0, import_react30.useEffect)(() => {
    const handleGlobalKeyDown = (event) => {
      if (isSaveHotkey(event)) {
        event.preventDefault();
        pushToast({
          closable: true,
          id: "auto-save-message",
          status: "info",
          title: "Your work is automatically saved!",
          duration: 4e3
        });
      }
    };
    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [pushToast]);
  const hasDefinedDocumentTypes = (_a = schema._original) == null ? void 0 : _a.types.some(_isCustomDocumentTypeDefinition);
  if (!hasDefinedDocumentTypes) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoDocumentTypesScreen, {});
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PortalProvider, {
    element: portalElement || null,
    children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StyledPaneLayout, {
      flex: 1,
      height: layoutCollapsed ? void 0 : "fill",
      minWidth: 512,
      onCollapse: handleRootCollapse,
      onExpand: handleRootExpand,
      children: paneDataItems.map((_ref36) => {
        let {
          active,
          childItemId,
          groupIndex,
          itemId,
          key: paneKey,
          pane,
          index: paneIndex,
          params: paneParams,
          path,
          payload,
          siblingIndex,
          selected
        } = _ref36;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react30.Fragment, {
          children: pane === LOADING_PANE ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoadingPane, {
            paneKey,
            path,
            selected
          }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskToolPane, {
            active,
            groupIndex,
            index: paneIndex,
            pane,
            childItemId,
            itemId,
            paneKey,
            params: paneParams,
            payload,
            selected,
            siblingIndex
          })
        }, "".concat(pane === LOADING_PANE ? "loading" : pane.type, "-").concat(paneIndex));
      })
    }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
      "data-portal": "",
      ref: setPortalElement
    })]
  });
});
var EMPTY_RECORD = {};
function DeskToolBoundary(_ref37) {
  let {
    tool: {
      options
    }
  } = _ref37;
  const {
    unstable_sources: sources
  } = useWorkspace();
  const [firstSource] = sources;
  const {
    source,
    defaultDocumentNode,
    structure
  } = options || {};
  const {
    state: routerState
  } = useRouter();
  const intent = (0, import_react30.useMemo)(() => {
    const intentName = typeof routerState.intent === "string" ? routerState.intent : void 0;
    const params = isRecord$2(routerState.params) ? routerState.params : EMPTY_RECORD;
    const payload = routerState.payload;
    return intentName ? {
      intent: intentName,
      params,
      payload
    } : void 0;
  }, [routerState]);
  (0, import_react30.useEffect)(() => {
    setActivePanes([]);
    return () => setActivePanes([]);
  }, []);
  const [{
    error
  }, setError] = (0, import_react30.useState)({
    error: null
  });
  if (error)
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StructureError, {
      error
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ErrorBoundary, {
    onCatch: setError,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceProvider, {
      name: source || firstSource.name,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskToolProvider, {
        defaultDocumentNode,
        structure,
        children: intent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IntentResolver, {
          ...intent
        }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeskTool, {
          onPaneChange: setActivePanes
        })
      })
    })
  });
}
var index = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  default: DeskToolBoundary
});

export {
  Delay,
  useDeskTool,
  DocumentPaneProvider,
  useDeskToolSetting,
  DocumentPane,
  index
};
//# sourceMappingURL=/build/_shared/chunk-EXDAUJVG.js.map
