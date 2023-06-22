import {
  __export
} from "/build/_shared/chunk-CUPSZOF3.js";

// node_modules/mendoza/lib/esm/internal-patcher.js
var OPS = [
  "Value",
  "Copy",
  "Blank",
  "ReturnIntoArray",
  "ReturnIntoObject",
  "ReturnIntoObjectSameKey",
  "PushField",
  "PushElement",
  "PushParent",
  "Pop",
  "PushFieldCopy",
  "PushFieldBlank",
  "PushElementCopy",
  "PushElementBlank",
  "ReturnIntoObjectPop",
  "ReturnIntoObjectSameKeyPop",
  "ReturnIntoArrayPop",
  "ObjectSetFieldValue",
  "ObjectCopyField",
  "ObjectDeleteField",
  "ArrayAppendValue",
  "ArrayAppendSlice",
  "StringAppendString",
  "StringAppendSlice"
];
var Patcher = function() {
  function Patcher2(model, root, patch) {
    this.i = 0;
    this.inputStack = [];
    this.outputStack = [];
    this.model = model;
    this.root = root;
    this.patch = patch;
  }
  Patcher2.prototype.read = function() {
    return this.patch[this.i++];
  };
  Patcher2.prototype.process = function() {
    this.inputStack.push({ value: this.root });
    this.outputStack.push({ value: this.root });
    for (; this.i < this.patch.length; ) {
      var opcode = this.read();
      var op = OPS[opcode];
      if (!op)
        throw new Error("Unknown opcode: " + opcode);
      var processor = "process" + op;
      this[processor].apply(this);
    }
    var entry = this.outputStack.pop();
    return this.finalizeOutput(entry);
  };
  Patcher2.prototype.inputEntry = function() {
    return this.inputStack[this.inputStack.length - 1];
  };
  Patcher2.prototype.inputKey = function(entry, idx) {
    if (!entry.keys) {
      entry.keys = this.model.objectGetKeys(entry.value).sort();
    }
    return entry.keys[idx];
  };
  Patcher2.prototype.outputEntry = function() {
    return this.outputStack[this.outputStack.length - 1];
  };
  Patcher2.prototype.outputArray = function() {
    var entry = this.outputEntry();
    if (!entry.writeValue) {
      entry.writeValue = this.model.copyArray(entry.value);
    }
    return entry.writeValue;
  };
  Patcher2.prototype.outputObject = function() {
    var entry = this.outputEntry();
    if (!entry.writeValue) {
      entry.writeValue = this.model.copyObject(entry.value);
    }
    return entry.writeValue;
  };
  Patcher2.prototype.outputString = function() {
    var entry = this.outputEntry();
    if (!entry.writeValue) {
      entry.writeValue = this.model.copyString(entry.value);
    }
    return entry.writeValue;
  };
  Patcher2.prototype.finalizeOutput = function(entry) {
    if (entry.writeValue) {
      return this.model.finalize(entry.writeValue);
    } else {
      return entry.value;
    }
  };
  Patcher2.prototype.processValue = function() {
    var value = this.model.wrap(this.read());
    this.outputStack.push({ value });
  };
  Patcher2.prototype.processCopy = function() {
    var input = this.inputEntry();
    this.outputStack.push({ value: input.value });
  };
  Patcher2.prototype.processBlank = function() {
    this.outputStack.push({ value: null });
  };
  Patcher2.prototype.processReturnIntoArray = function() {
    var entry = this.outputStack.pop();
    var result = this.finalizeOutput(entry);
    var arr = this.outputArray();
    this.model.arrayAppendValue(arr, result);
  };
  Patcher2.prototype.processReturnIntoObject = function() {
    var key = this.read();
    var entry = this.outputStack.pop();
    var result = this.finalizeOutput(entry);
    result = this.model.markChanged(result);
    var obj = this.outputObject();
    this.model.objectSetField(obj, key, result);
  };
  Patcher2.prototype.processReturnIntoObjectSameKey = function() {
    var input = this.inputEntry();
    var entry = this.outputStack.pop();
    var result = this.finalizeOutput(entry);
    var obj = this.outputObject();
    this.model.objectSetField(obj, input.key, result);
  };
  Patcher2.prototype.processPushField = function() {
    var idx = this.read();
    var entry = this.inputEntry();
    var key = this.inputKey(entry, idx);
    var value = this.model.objectGetField(entry.value, key);
    this.inputStack.push({ value, key });
  };
  Patcher2.prototype.processPushElement = function() {
    var idx = this.read();
    var entry = this.inputEntry();
    var value = this.model.arrayGetElement(entry.value, idx);
    this.inputStack.push({ value });
  };
  Patcher2.prototype.processPop = function() {
    this.inputStack.pop();
  };
  Patcher2.prototype.processPushFieldCopy = function() {
    this.processPushField();
    this.processCopy();
  };
  Patcher2.prototype.processPushFieldBlank = function() {
    this.processPushField();
    this.processBlank();
  };
  Patcher2.prototype.processPushElementCopy = function() {
    this.processPushElement();
    this.processCopy();
  };
  Patcher2.prototype.processPushElementBlank = function() {
    this.processPushElement();
    this.processBlank();
  };
  Patcher2.prototype.processReturnIntoObjectPop = function() {
    this.processReturnIntoObject();
    this.processPop();
  };
  Patcher2.prototype.processReturnIntoObjectSameKeyPop = function() {
    this.processReturnIntoObjectSameKey();
    this.processPop();
  };
  Patcher2.prototype.processReturnIntoArrayPop = function() {
    this.processReturnIntoArray();
    this.processPop();
  };
  Patcher2.prototype.processObjectSetFieldValue = function() {
    this.processValue();
    this.processReturnIntoObject();
  };
  Patcher2.prototype.processObjectCopyField = function() {
    this.processPushField();
    this.processCopy();
    this.processReturnIntoObjectSameKey();
    this.processPop();
  };
  Patcher2.prototype.processObjectDeleteField = function() {
    var idx = this.read();
    var entry = this.inputEntry();
    var key = this.inputKey(entry, idx);
    var obj = this.outputObject();
    this.model.objectDeleteField(obj, key);
  };
  Patcher2.prototype.processArrayAppendValue = function() {
    var value = this.model.wrap(this.read());
    var arr = this.outputArray();
    this.model.arrayAppendValue(arr, value);
  };
  Patcher2.prototype.processArrayAppendSlice = function() {
    var left = this.read();
    var right = this.read();
    var str = this.outputArray();
    var val = this.inputEntry().value;
    this.model.arrayAppendSlice(str, val, left, right);
  };
  Patcher2.prototype.processStringAppendString = function() {
    var value = this.model.wrap(this.read());
    var str = this.outputString();
    this.model.stringAppendValue(str, value);
  };
  Patcher2.prototype.processStringAppendSlice = function() {
    var left = this.read();
    var right = this.read();
    var str = this.outputString();
    var val = this.inputEntry().value;
    this.model.stringAppendSlice(str, val, left, right);
  };
  return Patcher2;
}();

// node_modules/mendoza/lib/esm/utf8.js
function utf8charSize(code) {
  if (code >> 16) {
    return 4;
  } else if (code >> 11) {
    return 3;
  } else if (code >> 7) {
    return 2;
  } else {
    return 1;
  }
}
function utf8stringSize(str) {
  var b = 0;
  for (var i = 0; i < str.length; i++) {
    var code = str.codePointAt(i);
    var size = utf8charSize(code);
    if (size == 4)
      i++;
    b += size;
  }
  return b;
}
function utf8resolveIndex(str, idx, start) {
  if (start === void 0) {
    start = 0;
  }
  var byteCount = start;
  var ucsIdx = 0;
  for (ucsIdx = start; byteCount < idx; ucsIdx++) {
    var code = str.codePointAt(ucsIdx);
    var size = utf8charSize(code);
    if (size === 4)
      ucsIdx++;
    byteCount += size;
  }
  return ucsIdx;
}
function commonPrefix(str, str2) {
  var len = Math.min(str.length, str2.length);
  var b = 0;
  for (var i = 0; i < len; ) {
    var aPoint = str.codePointAt(i);
    var bPoint = str2.codePointAt(i);
    if (aPoint !== bPoint)
      return b;
    var size = utf8charSize(aPoint);
    b += size;
    i += size === 4 ? 2 : 1;
  }
  return b;
}
function commonSuffix(str, str2, prefix) {
  if (prefix === void 0) {
    prefix = 0;
  }
  var len = Math.min(str.length, str2.length) - prefix;
  var b = 0;
  for (var i = 0; i < len; ) {
    var aPoint = str.codePointAt(str.length - 1 - i);
    var bPoint = str2.codePointAt(str2.length - 1 - i);
    if (aPoint !== bPoint)
      return b;
    var size = utf8charSize(aPoint);
    b += size;
    i += size === 4 ? 2 : 1;
  }
  return b;
}

// node_modules/mendoza/lib/esm/simple-patcher.js
var Model = {
  wrap: function(data) {
    return data;
  },
  finalize: function(b) {
    if (Array.isArray(b)) {
      return b;
    } else {
      return b.data;
    }
  },
  markChanged: function(value) {
    return value;
  },
  objectGetKeys: function(value) {
    return Object.keys(value);
  },
  objectGetField: function(value, key) {
    return value[key];
  },
  arrayGetElement: function(value, idx) {
    return value[idx];
  },
  copyObject: function(value) {
    var res = {
      type: "object",
      data: {}
    };
    if (value !== null) {
      for (var _i = 0, _a = Object.entries(value); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], val = _b[1];
        res.data[key] = val;
      }
    }
    return res;
  },
  copyArray: function(value) {
    if (value === null)
      return [];
    return value.slice();
  },
  copyString: function(value) {
    return {
      type: "string",
      data: value === null ? "" : value
    };
  },
  objectSetField: function(target, key, value) {
    target.data[key] = value;
  },
  objectDeleteField: function(target, key) {
    delete target.data[key];
  },
  arrayAppendValue: function(target, value) {
    target.push(value);
  },
  arrayAppendSlice: function(target, source, left, right) {
    target.push.apply(target, source.slice(left, right));
  },
  stringAppendSlice: function(target, source, left, right) {
    var sourceString = source;
    var leftPos = utf8resolveIndex(sourceString, left);
    var rightPos = utf8resolveIndex(sourceString, right, leftPos);
    target.data += sourceString.slice(leftPos, rightPos);
  },
  stringAppendValue: function(target, value) {
    target.data += value;
  }
};
function applyPatch(left, patch) {
  var root = left;
  var patcher = new Patcher(Model, root, patch);
  return patcher.process();
}

// node_modules/mendoza/lib/esm/incremental-patcher.js
var incremental_patcher_exports = {};
__export(incremental_patcher_exports, {
  applyPatch: () => applyPatch2,
  getType: () => getType,
  rebaseValue: () => rebaseValue,
  unwrap: () => unwrap,
  wrap: () => wrap
});
var Model2 = function() {
  function Model3(meta) {
    this.meta = meta;
  }
  Model3.prototype.wrap = function(data) {
    return this.wrapWithMeta(data, this.meta, this.meta);
  };
  Model3.prototype.wrapWithMeta = function(data, startMeta, endMeta) {
    if (endMeta === void 0) {
      endMeta = this.meta;
    }
    return { data, startMeta, endMeta };
  };
  Model3.prototype.asObject = function(value) {
    if (!value.content) {
      var fields = {};
      for (var _i = 0, _a = Object.entries(value.data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], val = _b[1];
        fields[key] = this.wrapWithMeta(val, value.startMeta);
      }
      value.content = { type: "object", fields };
    }
    return value.content;
  };
  Model3.prototype.asArray = function(value) {
    var _this = this;
    if (!value.content) {
      var elements = value.data.map(function(item) {
        return _this.wrapWithMeta(item, value.startMeta);
      });
      var metas = elements.map(function() {
        return _this.meta;
      });
      value.content = { type: "array", elements, metas };
    }
    return value.content;
  };
  Model3.prototype.asString = function(value) {
    if (!value.content) {
      var str = value.data;
      var part = {
        value: str,
        utf8size: utf8stringSize(str),
        uses: [],
        startMeta: value.startMeta,
        endMeta: value.endMeta
      };
      value.content = this.stringFromParts([part]);
    }
    return value.content;
  };
  Model3.prototype.stringFromParts = function(parts) {
    var str = {
      type: "string",
      parts
    };
    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
      var part = parts_1[_i];
      part.uses.push(str);
    }
    return str;
  };
  Model3.prototype.objectGetKeys = function(value) {
    if (value.content) {
      return Object.keys(value.content.fields);
    } else {
      return Object.keys(value.data);
    }
  };
  Model3.prototype.objectGetField = function(value, key) {
    var obj = this.asObject(value);
    return obj.fields[key];
  };
  Model3.prototype.arrayGetElement = function(value, idx) {
    var arr = this.asArray(value);
    return arr.elements[idx];
  };
  Model3.prototype.finalize = function(content) {
    this.updateEndMeta(content);
    return { content, startMeta: this.meta, endMeta: this.meta };
  };
  Model3.prototype.markChanged = function(value) {
    return this.wrap(unwrap(value));
  };
  Model3.prototype.updateEndMeta = function(content) {
    if (content.type == "string") {
      for (var _i = 0, _a = content.parts; _i < _a.length; _i++) {
        var part = _a[_i];
        part.endMeta = this.meta;
      }
    } else {
      if (content.type === "array") {
        for (var _b = 0, _c = content.elements; _b < _c.length; _b++) {
          var val = _c[_b];
          if (val.content && val.endMeta !== this.meta) {
            this.updateEndMeta(val.content);
          }
          val.endMeta = this.meta;
        }
      } else {
        for (var _d = 0, _e = Object.values(content.fields); _d < _e.length; _d++) {
          var val = _e[_d];
          if (val.content && val.endMeta !== this.meta) {
            this.updateEndMeta(val.content);
          }
          val.endMeta = this.meta;
        }
      }
    }
  };
  Model3.prototype.copyString = function(value) {
    if (value) {
      var other = this.asString(value);
      return this.stringFromParts(other.parts.slice());
    } else {
      return {
        type: "string",
        parts: []
      };
    }
  };
  Model3.prototype.copyObject = function(value) {
    var obj = {
      type: "object",
      fields: {}
    };
    if (value) {
      var other = this.asObject(value);
      Object.assign(obj.fields, other.fields);
    }
    return obj;
  };
  Model3.prototype.copyArray = function(value) {
    var arr = value ? this.asArray(value) : null;
    var elements = arr ? arr.elements : [];
    var metas = arr ? arr.metas : [];
    return {
      type: "array",
      elements,
      metas
    };
  };
  Model3.prototype.objectSetField = function(target, key, value) {
    target.fields[key] = value;
  };
  Model3.prototype.objectDeleteField = function(target, key) {
    delete target.fields[key];
  };
  Model3.prototype.arrayAppendValue = function(target, value) {
    target.elements.push(value);
    target.metas.push(this.meta);
  };
  Model3.prototype.arrayAppendSlice = function(target, source, left, right) {
    var _a, _b;
    var arr = this.asArray(source);
    var samePosition = arr.elements.length === left;
    (_a = target.elements).push.apply(_a, arr.elements.slice(left, right));
    if (samePosition) {
      (_b = target.metas).push.apply(_b, arr.metas.slice(left, right));
    } else {
      for (var i = left; i < right; i++) {
        target.metas.push(this.meta);
      }
    }
  };
  Model3.prototype.stringAppendValue = function(target, value) {
    var str = this.asString(value);
    for (var _i = 0, _a = str.parts; _i < _a.length; _i++) {
      var part = _a[_i];
      this.stringAppendPart(target, part);
    }
  };
  Model3.prototype.stringAppendPart = function(target, part) {
    target.parts.push(part);
    part.uses.push(target);
  };
  Model3.prototype.resolveStringPart = function(str, from, len) {
    if (len === 0)
      return from;
    for (var i = from; i < str.parts.length; i++) {
      var part = str.parts[i];
      if (len === part.utf8size) {
        return i + 1;
      }
      if (len < part.utf8size) {
        this.splitString(part, len);
        return i + 1;
      }
      len -= part.utf8size;
    }
    throw new Error("splitting string out of bounds");
  };
  Model3.prototype.splitString = function(part, idx) {
    var leftValue;
    var rightValue;
    var leftSize = idx;
    var rightSize = part.utf8size - leftSize;
    if (part.utf8size !== part.value.length) {
      var byteCount = 0;
      for (idx = 0; byteCount < leftSize; idx++) {
        var code = part.value.codePointAt(idx);
        var size = utf8charSize(code);
        if (size === 4)
          idx++;
        byteCount += size;
      }
    }
    leftValue = part.value.slice(0, idx);
    rightValue = part.value.slice(idx);
    var newPart = {
      value: rightValue,
      utf8size: rightSize,
      uses: part.uses.slice(),
      startMeta: part.startMeta,
      endMeta: part.endMeta
    };
    part.value = leftValue;
    part.utf8size = leftSize;
    for (var _i = 0, _a = part.uses; _i < _a.length; _i++) {
      var use = _a[_i];
      var idx_1 = use.parts.indexOf(part);
      if (idx_1 === -1)
        throw new Error("bug: mismatch between string parts and use.");
      use.parts.splice(idx_1 + 1, 0, newPart);
    }
  };
  Model3.prototype.stringAppendSlice = function(target, source, left, right) {
    var str = this.asString(source);
    var firstPart = this.resolveStringPart(str, 0, left);
    var lastPart = this.resolveStringPart(str, firstPart, right - left);
    for (var i = firstPart; i < lastPart; i++) {
      var part = str.parts[i];
      this.stringAppendPart(target, part);
    }
  };
  return Model3;
}();
function wrap(data, meta) {
  return { data, startMeta: meta, endMeta: meta };
}
function unwrap(value) {
  if (typeof value.data !== "undefined")
    return value.data;
  var result;
  var content = value.content;
  switch (content.type) {
    case "string":
      result = content.parts.map(function(part) {
        return part.value;
      }).join("");
      break;
    case "array":
      result = content.elements.map(function(val2) {
        return unwrap(val2);
      });
      break;
    case "object": {
      result = {};
      for (var _i = 0, _a = Object.entries(content.fields); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], val = _b[1];
        result[key] = unwrap(val);
      }
    }
  }
  value.data = result;
  return result;
}
function getType(value) {
  if (value.content)
    return value.content.type;
  if (Array.isArray(value.data))
    return "array";
  if (value.data === null)
    return "null";
  return typeof value.data;
}
function rebaseValue(left, right) {
  var leftType = getType(left);
  var rightType = getType(right);
  if (leftType !== rightType)
    return right;
  var leftModel = new Model2(left.endMeta);
  var rightModel = new Model2(right.endMeta);
  switch (leftType) {
    case "object": {
      var leftObj = leftModel.asObject(left);
      var rightObj = rightModel.asObject(right);
      var identicalFieldCount = 0;
      var leftFieldCount = Object.keys(leftObj.fields).length;
      var rightFieldCount = Object.keys(rightObj.fields).length;
      for (var _i = 0, _a = Object.entries(rightObj.fields); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], rightVal = _b[1];
        var leftVal = leftObj.fields[key];
        if (leftVal) {
          rightObj.fields[key] = rebaseValue(leftVal, rightVal);
          if (rightObj.fields[key] === leftVal) {
            identicalFieldCount++;
          }
        }
      }
      var isIdentical = leftFieldCount === rightFieldCount && leftFieldCount === identicalFieldCount;
      return isIdentical ? left : right;
    }
    case "array": {
      var leftArr = leftModel.asArray(left);
      var rightArr = rightModel.asArray(right);
      if (leftArr.elements.length !== rightArr.elements.length) {
        break;
      }
      var numRebased = 0;
      for (var i = 0; i < rightArr.elements.length; i++) {
        rightArr.elements[i] = rebaseValue(leftArr.elements[i], rightArr.elements[i]);
        if (rightArr.elements[i] !== leftArr.elements[i]) {
          numRebased++;
        }
      }
      return numRebased === 0 ? left : right;
    }
    case "null":
    case "boolean":
    case "number": {
      if (unwrap(left) === unwrap(right))
        return left;
      break;
    }
    case "string": {
      var leftRaw = unwrap(left);
      var rightRaw = unwrap(right);
      if (leftRaw === rightRaw)
        return left;
      var result = rightModel.copyString(null);
      var prefix = commonPrefix(leftRaw, rightRaw);
      var suffix = commonSuffix(leftRaw, rightRaw, prefix);
      var rightLen = utf8stringSize(rightRaw);
      var leftLen = utf8stringSize(leftRaw);
      if (0 < prefix) {
        rightModel.stringAppendSlice(result, left, 0, prefix);
      }
      if (prefix < rightLen - suffix) {
        rightModel.stringAppendSlice(result, right, prefix, rightLen - suffix);
      }
      if (leftLen - suffix < leftLen) {
        rightModel.stringAppendSlice(result, left, leftLen - suffix, leftLen);
      }
      var value = rightModel.finalize(result);
      if (unwrap(value) !== rightRaw)
        throw new Error("incorrect string rebase");
      return value;
    }
  }
  return right;
}
function applyPatch2(left, patch, startMeta) {
  var model = new Model2(startMeta);
  var patcher = new Patcher(model, left, patch);
  return patcher.process();
}

export {
  incremental_patcher_exports,
  applyPatch
};
//# sourceMappingURL=/build/_shared/chunk-BPU3GXCB.js.map
