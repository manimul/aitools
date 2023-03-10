import {
  PaneItem
} from "/build/_shared/chunk-V2LSQX66.js";
import {
  Delay,
  useDeskTool,
  useDeskToolSetting
} from "/build/_shared/chunk-EXDAUJVG.js";
import {
  ArrowLeftIcon,
  BackLink,
  Box,
  Button,
  Card,
  Container,
  DEFAULT_STUDIO_CLIENT_OPTIONS,
  Flex,
  Heading,
  Pane,
  PaneContent,
  PaneHeader,
  PaneHeaderActions,
  SourceProvider,
  Spinner,
  Stack,
  Subject,
  SyncIcon,
  Text,
  VirtualList,
  _DEBUG,
  catchError,
  collate,
  concat,
  delay,
  distinctUntilChanged,
  filter,
  fromEvent,
  fromString,
  getPublishedId,
  isIndexSegment,
  isKeySegment,
  isReferenceSchemaType,
  listenQuery,
  map,
  merge,
  mergeMapTo,
  of,
  publishReplay,
  refCount,
  require_isNumber,
  require_isString,
  require_omit,
  require_react_fast_compare,
  require_shallow_equals,
  scan,
  share,
  startWith,
  switchMap,
  take,
  takeUntil,
  useClient,
  usePane,
  usePaneLayout,
  useSchema,
  useSource,
  useUnique
} from "/build/_shared/chunk-3PXH2B7D.js";
import "/build/_shared/chunk-BPU3GXCB.js";
import "/build/_shared/chunk-WA32A3L3.js";
import {
  require_jsx_runtime
} from "/build/_shared/chunk-PBYB3QU6.js";
import "/build/_shared/chunk-RZ47BF3R.js";
import {
  require_react
} from "/build/_shared/chunk-247AAKB7.js";
import {
  __toESM
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/sanity/lib/_chunks/index-4a7ca57d.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var import_react = __toESM(require_react());
var import_shallow_equals = __toESM(require_shallow_equals());
var import_omit = __toESM(require_omit());
var import_isNumber = __toESM(require_isNumber());
var import_isString = __toESM(require_isString());
var import_react_fast_compare = __toESM(require_react_fast_compare());
var PARTIAL_PAGE_LIMIT = 100;
var FULL_LIST_LIMIT = 2e3;
var DEFAULT_ORDERING = {
  by: [{
    field: "_updatedAt",
    direction: "desc"
  }]
};
var EMPTY_RECORD = {};
function getDocumentKey(value, index) {
  return value._id ? getPublishedId(value._id) : "item-".concat(index);
}
function removePublishedWithDrafts(documents) {
  return collate(documents).map((entry) => {
    const doc = entry.draft || entry.published;
    return {
      ...doc,
      hasPublished: !!entry.published,
      hasDraft: !!entry.draft
    };
  });
}
var RE_TYPE_NAME_IN_FILTER = /\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;
function getTypeNameFromSingleTypeFilter(filter2) {
  let params = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const matches = filter2.match(RE_TYPE_NAME_IN_FILTER);
  if (!matches) {
    return null;
  }
  const match = (matches[1] || matches[2]).trim().replace(/^["']|["']$/g, "");
  if (match[0] === "$") {
    const k = match.slice(1);
    const v = params[k];
    return typeof v === "string" ? v : null;
  }
  return match;
}
function isSimpleTypeFilter(filter2) {
  return /^_type\s*==\s*['"$]\w+['"]?\s*$/.test(filter2.trim());
}
function toOrderClause(orderBy) {
  return orderBy.map((ordering) => [wrapFieldWithFn(ordering), (ordering.direction || "").toLowerCase()].map((str) => str.trim()).filter(Boolean).join(" ")).join(",");
}
function wrapFieldWithFn(ordering) {
  return ordering.mapWith ? "".concat(ordering.mapWith, "(").concat(ordering.field, ")") : ordering.field;
}
function applyOrderingFunctions(order, schemaType) {
  const orderBy = order.by.map((by) => {
    if (by.mapWith) {
      return by;
    }
    const fieldType = tryResolveSchemaTypeForPath(schemaType, by.field);
    if (!fieldType) {
      return by;
    }
    if (fieldExtendsType(fieldType, "datetime")) {
      return {
        ...by,
        mapWith: "dateTime"
      };
    }
    if (fieldType.jsonType === "string") {
      return {
        ...by,
        mapWith: "lower"
      };
    }
    return by;
  });
  return orderBy.every((item, index) => item === order.by[index]) ? order : {
    ...order,
    by: orderBy
  };
}
function tryResolveSchemaTypeForPath(baseType, path) {
  const pathSegments = fromString(path);
  let current = baseType;
  for (const segment of pathSegments) {
    if (!current) {
      return void 0;
    }
    if (typeof segment === "string") {
      current = getFieldTypeByName(current, segment);
      continue;
    }
    const isArrayAccessor = isKeySegment(segment) || isIndexSegment(segment);
    if (!isArrayAccessor || current.jsonType !== "array") {
      return void 0;
    }
    const [memberType, otherType] = current.of || [];
    if (otherType || !memberType) {
      return void 0;
    }
    if (!isReferenceSchemaType(memberType)) {
      current = memberType;
      continue;
    }
    const [refType, otherRefType] = memberType.to || [];
    if (otherRefType || !refType) {
      return void 0;
    }
    current = refType;
  }
  return current;
}
function getFieldTypeByName(type, fieldName) {
  if (!("fields" in type)) {
    return void 0;
  }
  const fieldType = type.fields.find((field) => field.name === fieldName);
  return fieldType ? fieldType.type : void 0;
}
function fieldExtendsType(field, ofType) {
  let current = field.type;
  while (current) {
    if (current.name === ofType) {
      return true;
    }
    if (!current.type && current.jsonType === ofType) {
      return true;
    }
    current = current.type;
  }
  return false;
}
function DocumentListPaneContent(props) {
  const {
    childItemId,
    error,
    filterIsSimpleTypeContraint,
    fullList,
    isActive,
    isLoading,
    items,
    layout,
    onListChange,
    onRetry,
    showIcons
  } = props;
  const schema = useSchema();
  const {
    collapsed: layoutCollapsed
  } = usePaneLayout();
  const {
    collapsed,
    index
  } = usePane();
  const [shouldRender, setShouldRender] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    if (collapsed)
      return void 0;
    const timer = setTimeout(() => {
      setShouldRender(true);
    }, 0);
    return () => {
      clearTimeout(timer);
    };
  }, [collapsed]);
  const renderItem = (0, import_react.useCallback)((item) => {
    const publishedId = getPublishedId(item._id);
    const isSelected = childItemId === publishedId;
    const pressed = !isActive && isSelected;
    const selected = isActive && isSelected;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneItem, {
      icon: showIcons === false ? false : void 0,
      id: publishedId,
      pressed,
      selected,
      layout,
      schemaType: schema.get(item._type),
      value: item
    });
  }, [childItemId, isActive, layout, schema, showIcons]);
  const content = (0, import_react.useMemo)(() => {
    if (!shouldRender) {
      return null;
    }
    if (error) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
        align: "center",
        direction: "column",
        height: "fill",
        justify: "center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
          width: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
            paddingX: 4,
            paddingY: 5,
            space: 4,
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
              as: "h3",
              children: "Could not fetch list items"
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
              as: "p",
              children: ["Error: ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
                children: error.message
              })]
            }), onRetry && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
                icon: SyncIcon,
                onClick: onRetry,
                text: "Retry",
                tone: "primary"
              })
            })]
          })
        })
      });
    }
    if (items === null) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
        align: "center",
        direction: "column",
        height: "fill",
        justify: "center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delay, {
          ms: 300,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
            children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
              muted: true
            }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
              marginTop: 3,
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
                align: "center",
                muted: true,
                size: 1,
                children: "Loading documents\u2026"
              })
            })]
          })
        })
      });
    }
    if (!isLoading && items.length === 0) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
        align: "center",
        direction: "column",
        height: "fill",
        justify: "center",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
          width: 1,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            paddingX: 4,
            paddingY: 5,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
              align: "center",
              muted: true,
              size: 2,
              children: filterIsSimpleTypeContraint ? "No documents of this type" : "No matching documents"
            })
          })
        })
      });
    }
    const hasMoreItems = fullList && items.length === FULL_LIST_LIMIT;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
      padding: 2,
      children: [items.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VirtualList, {
        gap: 1,
        getItemKey: getDocumentKey,
        items,
        renderItem,
        onChange: onListChange
      }, "".concat(index, "-").concat(collapsed)), isLoading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
        borderTop: true,
        marginTop: 1,
        paddingX: 3,
        paddingY: 4,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
          align: "center",
          muted: true,
          size: 1,
          children: "Loading\u2026"
        })
      }), hasMoreItems && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, {
        marginTop: 1,
        paddingX: 3,
        paddingY: 4,
        radius: 2,
        tone: "transparent",
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
          align: "center",
          muted: true,
          size: 1,
          children: ["Displaying a maximum of ", FULL_LIST_LIMIT, " documents"]
        })
      })]
    });
  }, [error, filterIsSimpleTypeContraint, fullList, onListChange, isLoading, items, onRetry, renderItem, shouldRender, collapsed, index]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneContent, {
    overflow: layoutCollapsed ? void 0 : "auto",
    children: content
  });
}
var DocumentListPaneHeader = (0, import_react.memo)((_ref) => {
  let {
    index,
    initialValueTemplates = [],
    menuItems = [],
    menuItemGroups = [],
    setLayout,
    setSortOrder,
    title
  } = _ref;
  const {
    features
  } = useDeskTool();
  const actionHandlers = (0, import_react.useMemo)(() => {
    return {
      setLayout: (_ref2) => {
        let {
          layout: value
        } = _ref2;
        setLayout(value);
      },
      setSortOrder: (sort) => {
        setSortOrder(sort);
      }
    };
  }, [setLayout, setSortOrder]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeader, {
    backButton: features.backButton && index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      as: BackLink,
      "data-as": "a",
      icon: ArrowLeftIcon,
      mode: "bleed"
    }),
    title,
    actions: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PaneHeaderActions, {
      initialValueTemplateItems: initialValueTemplates,
      actionHandlers,
      menuItemGroups,
      menuItems
    })
  });
});
DocumentListPaneHeader.displayName = "DocumentListPaneHeader";
var INITIAL_CHILD_PROPS = {
  result: null,
  error: false
};
var createResultChildProps = (documents) => ({
  result: {
    documents
  },
  loading: false,
  error: false
});
var createErrorChildProps = (error) => ({
  result: null,
  loading: false,
  error
});
var getQueryResults = function(receivedProps$) {
  let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const onRetry$ = new Subject();
  const onRetry = onRetry$.next.bind(onRetry$);
  const queryProps$ = receivedProps$.pipe(map((props) => ({
    client: props.client,
    query: props.query,
    params: props.params
  })), distinctUntilChanged(import_react_fast_compare.default), publishReplay(1), refCount());
  const queryResults$ = queryProps$.pipe(switchMap((queryProps) => {
    const query$ = listenQuery(queryProps.client, queryProps.query, queryProps.params, options).pipe(map(createResultChildProps), share());
    return merge(of({
      loading: true
    }).pipe(delay(400), takeUntil(query$)), query$);
  }));
  return queryResults$.pipe(startWith(INITIAL_CHILD_PROPS), catchError((err, caught$) => concat(of(createErrorChildProps(err)), merge(fromEvent(window, "online"), onRetry$).pipe(take(1), mergeMapTo(caught$)))), scan((prev, next) => ({
    ...prev,
    ...next,
    onRetry
  })));
};
function useDocumentList(opts) {
  var _a;
  const {
    apiVersion,
    filter: filter$1,
    params,
    sortOrder
  } = opts;
  const client = useClient(DEFAULT_STUDIO_CLIENT_OPTIONS);
  const [fullList, setFullList] = (0, import_react.useState)(false);
  const fullListRef = (0, import_react.useRef)(fullList);
  const [result, setResult] = (0, import_react.useState)(null);
  const error = (result == null ? void 0 : result.error) || null;
  const isLoading = (result == null ? void 0 : result.loading) || result === null;
  const onRetry = result == null ? void 0 : result.onRetry;
  const documents = (_a = result == null ? void 0 : result.result) == null ? void 0 : _a.documents;
  const items = (0, import_react.useMemo)(() => documents ? removePublishedWithDrafts(documents) : null, [documents]);
  const query = (0, import_react.useMemo)(() => {
    const extendedProjection = sortOrder == null ? void 0 : sortOrder.extendedProjection;
    const projectionFields = ["_id", "_type"];
    const finalProjection = projectionFields.join(",");
    const sortBy = (sortOrder == null ? void 0 : sortOrder.by) || [];
    const limit = fullList ? FULL_LIST_LIMIT : PARTIAL_PAGE_LIMIT;
    const sort = sortBy.length > 0 ? sortBy : DEFAULT_ORDERING.by;
    const order = toOrderClause(sort);
    if (extendedProjection) {
      const firstProjection = projectionFields.concat(extendedProjection).join(",");
      return ["*[".concat(filter$1, "] {").concat(firstProjection, "}"), "order(".concat(order, ") [0...").concat(limit, "]"), "{".concat(finalProjection, "}")].join("|");
    }
    return "*[".concat(filter$1, "]|order(").concat(order, ")[0...").concat(limit, "]{").concat(finalProjection, "}");
  }, [filter$1, fullList, sortOrder]);
  const handleListChange = (0, import_react.useCallback)((_ref3) => {
    let {
      toIndex
    } = _ref3;
    if (isLoading || fullListRef.current) {
      return;
    }
    if (toIndex >= PARTIAL_PAGE_LIMIT / 2) {
      setFullList(true);
      fullListRef.current = true;
    }
  }, [isLoading]);
  (0, import_react.useEffect)(() => {
    const filterFn = fullList ? (queryResult) => Boolean(queryResult.result) : () => true;
    setResult((r) => r ? {
      ...r,
      loading: true
    } : null);
    const queryResults$ = getQueryResults(of({
      client,
      query,
      params
    }), {
      apiVersion,
      tag: "desk.document-list"
    }).pipe(filter(filterFn));
    const sub = queryResults$.subscribe(setResult);
    return () => sub.unsubscribe();
  }, [apiVersion, client, fullList, query, params]);
  (0, import_react.useEffect)(() => {
    setResult(null);
    setFullList(false);
    fullListRef.current = false;
  }, [filter$1, params, sortOrder, apiVersion]);
  return {
    error,
    fullList,
    handleListChange,
    isLoading,
    items,
    onRetry
  };
}
var emptyArray = [];
function useShallowUnique(value) {
  const valueRef = (0, import_react.useRef)(value);
  if (!(0, import_shallow_equals.default)(valueRef.current, value)) {
    valueRef.current = value;
  }
  return valueRef.current;
}
var DocumentListPane = (0, import_react.memo)(function DocumentListPane2(props) {
  const {
    childItemId,
    index,
    isActive,
    isSelected,
    pane,
    paneKey
  } = props;
  const schema = useSchema();
  const {
    name: parentSourceName
  } = useSource();
  const {
    defaultLayout = "default",
    displayOptions,
    initialValueTemplates = emptyArray,
    menuItems,
    menuItemGroups,
    options,
    title
  } = pane;
  const {
    apiVersion,
    defaultOrdering = emptyArray,
    filter: filter2
  } = options;
  const params = useShallowUnique(options.params || EMPTY_RECORD);
  const sourceName = pane.source;
  const typeName = (0, import_react.useMemo)(() => getTypeNameFromSingleTypeFilter(filter2, params), [filter2, params]);
  const showIcons = (displayOptions == null ? void 0 : displayOptions.showIcons) !== false;
  const [layout, setLayout] = useDeskToolSetting(typeName, "layout", defaultLayout);
  const defaultSortOrder = (0, import_react.useMemo)(() => {
    return (defaultOrdering == null ? void 0 : defaultOrdering.length) > 0 ? {
      by: defaultOrdering
    } : DEFAULT_ORDERING;
  }, [defaultOrdering]);
  const [sortOrderRaw, setSortOrder] = useDeskToolSetting(typeName, "sortOrder", defaultSortOrder);
  const sortWithOrderingFn = typeName && sortOrderRaw ? applyOrderingFunctions(sortOrderRaw, schema.get(typeName)) : sortOrderRaw;
  const sortOrder = useUnique(sortWithOrderingFn);
  const filterIsSimpleTypeContraint = isSimpleTypeFilter(filter2);
  const {
    error,
    fullList,
    handleListChange,
    isLoading,
    items,
    onRetry
  } = useDocumentList({
    filter: filter2,
    params,
    sortOrder,
    apiVersion
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SourceProvider, {
    name: sourceName || parentSourceName,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pane, {
      currentMaxWidth: 350,
      id: paneKey,
      maxWidth: 640,
      minWidth: 320,
      selected: isSelected,
      children: [_DEBUG, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentListPaneHeader, {
        index,
        initialValueTemplates,
        menuItems,
        menuItemGroups,
        setLayout,
        setSortOrder,
        title
      }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DocumentListPaneContent, {
        childItemId,
        error,
        filterIsSimpleTypeContraint,
        fullList,
        isActive,
        isLoading,
        items,
        layout,
        onListChange: handleListChange,
        onRetry,
        showIcons
      })]
    })
  });
});
export {
  DocumentListPane as default
};
//# sourceMappingURL=/build/_shared/index-4a7ca57d-QRLE4SIN.js.map
