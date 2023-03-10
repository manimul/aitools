import {
  __commonJS
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/@sanity/image-url/lib/browser/image-url.umd.js
var require_image_url_umd = __commonJS({
  "node_modules/@sanity/image-url/lib/browser/image-url.umd.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() : typeof define === "function" && define.amd ? define(factory) : (global = global || self, global.SanityImageUrlBuilder = factory());
    })(exports, function() {
      function _extends() {
        _extends = Object.assign || function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }
          return target;
        };
        return _extends.apply(this, arguments);
      }
      function _unsupportedIterableToArray(o, minLen) {
        if (!o)
          return;
        if (typeof o === "string")
          return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor)
          n = o.constructor.name;
        if (n === "Map" || n === "Set")
          return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
          return _arrayLikeToArray(o, minLen);
      }
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length)
          len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++)
          arr2[i] = arr[i];
        return arr2;
      }
      function _createForOfIteratorHelperLoose(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
        if (it)
          return (it = it.call(o)).next.bind(it);
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
          if (it)
            o = it;
          var i = 0;
          return function() {
            if (i >= o.length)
              return {
                done: true
              };
            return {
              done: false,
              value: o[i++]
            };
          };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      var example = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
      function parseAssetId(ref) {
        var _ref$split = ref.split("-"), id = _ref$split[1], dimensionString = _ref$split[2], format = _ref$split[3];
        if (!id || !dimensionString || !format) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        var _dimensionString$spli = dimensionString.split("x"), imgWidthStr = _dimensionString$spli[0], imgHeightStr = _dimensionString$spli[1];
        var width = +imgWidthStr;
        var height = +imgHeightStr;
        var isValidAssetId = isFinite(width) && isFinite(height);
        if (!isValidAssetId) {
          throw new Error("Malformed asset _ref '" + ref + `'. Expected an id like "` + example + '".');
        }
        return {
          id,
          width,
          height,
          format
        };
      }
      var isRef = function isRef2(src) {
        var source = src;
        return source ? typeof source._ref === "string" : false;
      };
      var isAsset = function isAsset2(src) {
        var source = src;
        return source ? typeof source._id === "string" : false;
      };
      var isAssetStub = function isAssetStub2(src) {
        var source = src;
        return source && source.asset ? typeof source.asset.url === "string" : false;
      };
      function parseSource(source) {
        if (!source) {
          return null;
        }
        var image;
        if (typeof source === "string" && isUrl(source)) {
          image = {
            asset: {
              _ref: urlToId(source)
            }
          };
        } else if (typeof source === "string") {
          image = {
            asset: {
              _ref: source
            }
          };
        } else if (isRef(source)) {
          image = {
            asset: source
          };
        } else if (isAsset(source)) {
          image = {
            asset: {
              _ref: source._id || ""
            }
          };
        } else if (isAssetStub(source)) {
          image = {
            asset: {
              _ref: urlToId(source.asset.url)
            }
          };
        } else if (typeof source.asset === "object") {
          image = _extends({}, source);
        } else {
          return null;
        }
        var img = source;
        if (img.crop) {
          image.crop = img.crop;
        }
        if (img.hotspot) {
          image.hotspot = img.hotspot;
        }
        return applyDefaults(image);
      }
      function isUrl(url) {
        return /^https?:\/\//.test("" + url);
      }
      function urlToId(url) {
        var parts = url.split("/").slice(-1);
        return ("image-" + parts[0]).replace(/\.([a-z]+)$/, "-$1");
      }
      function applyDefaults(image) {
        if (image.crop && image.hotspot) {
          return image;
        }
        var result = _extends({}, image);
        if (!result.crop) {
          result.crop = {
            left: 0,
            top: 0,
            bottom: 0,
            right: 0
          };
        }
        if (!result.hotspot) {
          result.hotspot = {
            x: 0.5,
            y: 0.5,
            height: 1,
            width: 1
          };
        }
        return result;
      }
      var SPEC_NAME_TO_URL_NAME_MAPPINGS = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
      function urlForImage(options) {
        var spec = _extends({}, options || {});
        var source = spec.source;
        delete spec.source;
        var image = parseSource(source);
        if (!image) {
          throw new Error("Unable to resolve image URL from source (" + JSON.stringify(source) + ")");
        }
        var id = image.asset._ref || image.asset._id || "";
        var asset = parseAssetId(id);
        var cropLeft = Math.round(image.crop.left * asset.width);
        var cropTop = Math.round(image.crop.top * asset.height);
        var crop = {
          left: cropLeft,
          top: cropTop,
          width: Math.round(asset.width - image.crop.right * asset.width - cropLeft),
          height: Math.round(asset.height - image.crop.bottom * asset.height - cropTop)
        };
        var hotSpotVerticalRadius = image.hotspot.height * asset.height / 2;
        var hotSpotHorizontalRadius = image.hotspot.width * asset.width / 2;
        var hotSpotCenterX = image.hotspot.x * asset.width;
        var hotSpotCenterY = image.hotspot.y * asset.height;
        var hotspot = {
          left: hotSpotCenterX - hotSpotHorizontalRadius,
          top: hotSpotCenterY - hotSpotVerticalRadius,
          right: hotSpotCenterX + hotSpotHorizontalRadius,
          bottom: hotSpotCenterY + hotSpotVerticalRadius
        };
        if (!(spec.rect || spec.focalPoint || spec.ignoreImageParams || spec.crop)) {
          spec = _extends({}, spec, fit({
            crop,
            hotspot
          }, spec));
        }
        return specToImageUrl(_extends({}, spec, {
          asset
        }));
      }
      function specToImageUrl(spec) {
        var cdnUrl = (spec.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, "");
        var filename = spec.asset.id + "-" + spec.asset.width + "x" + spec.asset.height + "." + spec.asset.format;
        var baseUrl = cdnUrl + "/images/" + spec.projectId + "/" + spec.dataset + "/" + filename;
        var params = [];
        if (spec.rect) {
          var _spec$rect = spec.rect, left = _spec$rect.left, top = _spec$rect.top, width = _spec$rect.width, height = _spec$rect.height;
          var isEffectiveCrop = left !== 0 || top !== 0 || height !== spec.asset.height || width !== spec.asset.width;
          if (isEffectiveCrop) {
            params.push("rect=" + left + "," + top + "," + width + "," + height);
          }
        }
        if (spec.bg) {
          params.push("bg=" + spec.bg);
        }
        if (spec.focalPoint) {
          params.push("fp-x=" + spec.focalPoint.x);
          params.push("fp-y=" + spec.focalPoint.y);
        }
        var flip = [spec.flipHorizontal && "h", spec.flipVertical && "v"].filter(Boolean).join("");
        if (flip) {
          params.push("flip=" + flip);
        }
        SPEC_NAME_TO_URL_NAME_MAPPINGS.forEach(function(mapping) {
          var specName = mapping[0], param = mapping[1];
          if (typeof spec[specName] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[specName]));
          } else if (typeof spec[param] !== "undefined") {
            params.push(param + "=" + encodeURIComponent(spec[param]));
          }
        });
        if (params.length === 0) {
          return baseUrl;
        }
        return baseUrl + "?" + params.join("&");
      }
      function fit(source, spec) {
        var cropRect;
        var imgWidth = spec.width;
        var imgHeight = spec.height;
        if (!(imgWidth && imgHeight)) {
          return {
            width: imgWidth,
            height: imgHeight,
            rect: source.crop
          };
        }
        var crop = source.crop;
        var hotspot = source.hotspot;
        var desiredAspectRatio = imgWidth / imgHeight;
        var cropAspectRatio = crop.width / crop.height;
        if (cropAspectRatio > desiredAspectRatio) {
          var height = Math.round(crop.height);
          var width = Math.round(height * desiredAspectRatio);
          var top = Math.max(0, Math.round(crop.top));
          var hotspotXCenter = Math.round((hotspot.right - hotspot.left) / 2 + hotspot.left);
          var left = Math.max(0, Math.round(hotspotXCenter - width / 2));
          if (left < crop.left) {
            left = crop.left;
          } else if (left + width > crop.left + crop.width) {
            left = crop.left + crop.width - width;
          }
          cropRect = {
            left,
            top,
            width,
            height
          };
        } else {
          var _width = crop.width;
          var _height = Math.round(_width / desiredAspectRatio);
          var _left = Math.max(0, Math.round(crop.left));
          var hotspotYCenter = Math.round((hotspot.bottom - hotspot.top) / 2 + hotspot.top);
          var _top = Math.max(0, Math.round(hotspotYCenter - _height / 2));
          if (_top < crop.top) {
            _top = crop.top;
          } else if (_top + _height > crop.top + crop.height) {
            _top = crop.top + crop.height - _height;
          }
          cropRect = {
            left: _left,
            top: _top,
            width: _width,
            height: _height
          };
        }
        return {
          width: imgWidth,
          height: imgHeight,
          rect: cropRect
        };
      }
      var validFits = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"];
      var validCrops = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"];
      var validAutoModes = ["format"];
      function isSanityModernClientLike(client) {
        return client && "config" in client ? typeof client.config === "function" : false;
      }
      function isSanityClientLike(client) {
        return client && "clientConfig" in client ? typeof client.clientConfig === "object" : false;
      }
      function rewriteSpecName(key) {
        var specs = SPEC_NAME_TO_URL_NAME_MAPPINGS;
        for (var _iterator = _createForOfIteratorHelperLoose(specs), _step; !(_step = _iterator()).done; ) {
          var entry = _step.value;
          var specName = entry[0], param = entry[1];
          if (key === specName || key === param) {
            return specName;
          }
        }
        return key;
      }
      function urlBuilder(options) {
        if (isSanityModernClientLike(options)) {
          var _options$config = options.config(), apiUrl = _options$config.apiHost, projectId = _options$config.projectId, dataset = _options$config.dataset;
          var apiHost = apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId,
            dataset
          });
        }
        var client = options;
        if (isSanityClientLike(client)) {
          var _client$clientConfig = client.clientConfig, _apiUrl = _client$clientConfig.apiHost, _projectId = _client$clientConfig.projectId, _dataset = _client$clientConfig.dataset;
          var _apiHost = _apiUrl || "https://api.sanity.io";
          return new ImageUrlBuilder(null, {
            baseUrl: _apiHost.replace(/^https:\/\/api\./, "https://cdn."),
            projectId: _projectId,
            dataset: _dataset
          });
        }
        return new ImageUrlBuilder(null, options);
      }
      var ImageUrlBuilder = /* @__PURE__ */ function() {
        function ImageUrlBuilder2(parent, options) {
          this.options = void 0;
          this.options = parent ? _extends({}, parent.options || {}, options || {}) : _extends({}, options || {});
        }
        var _proto = ImageUrlBuilder2.prototype;
        _proto.withOptions = function withOptions(options) {
          var baseUrl = options.baseUrl || this.options.baseUrl;
          var newOptions = {
            baseUrl
          };
          for (var key in options) {
            if (options.hasOwnProperty(key)) {
              var specKey = rewriteSpecName(key);
              newOptions[specKey] = options[key];
            }
          }
          return new ImageUrlBuilder2(this, _extends({
            baseUrl
          }, newOptions));
        };
        _proto.image = function image(source) {
          return this.withOptions({
            source
          });
        };
        _proto.dataset = function dataset(_dataset2) {
          return this.withOptions({
            dataset: _dataset2
          });
        };
        _proto.projectId = function projectId(_projectId2) {
          return this.withOptions({
            projectId: _projectId2
          });
        };
        _proto.bg = function bg(_bg) {
          return this.withOptions({
            bg: _bg
          });
        };
        _proto.dpr = function dpr(_dpr) {
          return this.withOptions(_dpr && _dpr !== 1 ? {
            dpr: _dpr
          } : {});
        };
        _proto.width = function width(_width) {
          return this.withOptions({
            width: _width
          });
        };
        _proto.height = function height(_height) {
          return this.withOptions({
            height: _height
          });
        };
        _proto.focalPoint = function focalPoint(x, y) {
          return this.withOptions({
            focalPoint: {
              x,
              y
            }
          });
        };
        _proto.maxWidth = function maxWidth(_maxWidth) {
          return this.withOptions({
            maxWidth: _maxWidth
          });
        };
        _proto.minWidth = function minWidth(_minWidth) {
          return this.withOptions({
            minWidth: _minWidth
          });
        };
        _proto.maxHeight = function maxHeight(_maxHeight) {
          return this.withOptions({
            maxHeight: _maxHeight
          });
        };
        _proto.minHeight = function minHeight(_minHeight) {
          return this.withOptions({
            minHeight: _minHeight
          });
        };
        _proto.size = function size(width, height) {
          return this.withOptions({
            width,
            height
          });
        };
        _proto.blur = function blur(_blur) {
          return this.withOptions({
            blur: _blur
          });
        };
        _proto.sharpen = function sharpen(_sharpen) {
          return this.withOptions({
            sharpen: _sharpen
          });
        };
        _proto.rect = function rect(left, top, width, height) {
          return this.withOptions({
            rect: {
              left,
              top,
              width,
              height
            }
          });
        };
        _proto.format = function format(_format) {
          return this.withOptions({
            format: _format
          });
        };
        _proto.invert = function invert(_invert) {
          return this.withOptions({
            invert: _invert
          });
        };
        _proto.orientation = function orientation(_orientation) {
          return this.withOptions({
            orientation: _orientation
          });
        };
        _proto.quality = function quality(_quality) {
          return this.withOptions({
            quality: _quality
          });
        };
        _proto.forceDownload = function forceDownload(download) {
          return this.withOptions({
            download
          });
        };
        _proto.flipHorizontal = function flipHorizontal() {
          return this.withOptions({
            flipHorizontal: true
          });
        };
        _proto.flipVertical = function flipVertical() {
          return this.withOptions({
            flipVertical: true
          });
        };
        _proto.ignoreImageParams = function ignoreImageParams() {
          return this.withOptions({
            ignoreImageParams: true
          });
        };
        _proto.fit = function fit2(value) {
          if (validFits.indexOf(value) === -1) {
            throw new Error('Invalid fit mode "' + value + '"');
          }
          return this.withOptions({
            fit: value
          });
        };
        _proto.crop = function crop(value) {
          if (validCrops.indexOf(value) === -1) {
            throw new Error('Invalid crop mode "' + value + '"');
          }
          return this.withOptions({
            crop: value
          });
        };
        _proto.saturation = function saturation(_saturation) {
          return this.withOptions({
            saturation: _saturation
          });
        };
        _proto.auto = function auto(value) {
          if (validAutoModes.indexOf(value) === -1) {
            throw new Error('Invalid auto mode "' + value + '"');
          }
          return this.withOptions({
            auto: value
          });
        };
        _proto.pad = function pad(_pad) {
          return this.withOptions({
            pad: _pad
          });
        };
        _proto.url = function url() {
          return urlForImage(this.options);
        };
        _proto.toString = function toString() {
          return this.url();
        };
        return ImageUrlBuilder2;
      }();
      return urlBuilder;
    });
  }
});

// node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/prop-types/node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/prop-types/node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/prop-types/node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

export {
  require_object_assign,
  require_prop_types,
  require_image_url_umd
};
//# sourceMappingURL=/build/_shared/chunk-RZ47BF3R.js.map
