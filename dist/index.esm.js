var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.3.1";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component2.prototype.isReactComponent = {};
        Component2.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component2.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component2.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component2.prototype;
        function PureComponent2(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent2.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent2;
        assign(pureComponentPrototype, Component2.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef2() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement2(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement2(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self, source, owner, props);
        }
        function isValidElement2(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement2(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement2(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext2(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy2(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef2(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo2(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext2(Context2) {
          var dispatcher = resolveDispatcher();
          {
            if (Context2._context !== void 0) {
              var realContext = Context2._context;
              if (realContext.Consumer === Context2) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context2) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context2);
        }
        function useState3(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer2(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef2(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback2(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo2(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle2(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue2(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition2() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue2(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId2() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component3) {
          var prototype = Component3.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement2(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement2(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement2(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement2.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement2.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition2(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i = 0;
              try {
                for (; i < queue.length; i++) {
                  var callback = queue[i];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children2 = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children2;
        exports.Component = Component2;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent2;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.act = act;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext2;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef2;
        exports.forwardRef = forwardRef2;
        exports.isValidElement = isValidElement2;
        exports.lazy = lazy2;
        exports.memo = memo2;
        exports.startTransition = startTransition2;
        exports.unstable_act = act;
        exports.useCallback = useCallback2;
        exports.useContext = useContext2;
        exports.useDebugValue = useDebugValue2;
        exports.useDeferredValue = useDeferredValue2;
        exports.useEffect = useEffect2;
        exports.useId = useId2;
        exports.useImperativeHandle = useImperativeHandle2;
        exports.useInsertionEffect = useInsertionEffect2;
        exports.useLayoutEffect = useLayoutEffect2;
        exports.useMemo = useMemo2;
        exports.useReducer = useReducer2;
        exports.useRef = useRef2;
        exports.useState = useState3;
        exports.useSyncExternalStore = useSyncExternalStore2;
        exports.useTransition = useTransition2;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-dev-runtime.development.js
var require_react_jsx_dev_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-dev-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV20(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement2(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV20(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        var jsxDEV$1 = jsxWithValidation;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsxDEV = jsxDEV$1;
      })();
    }
  }
});

// node_modules/react/jsx-dev-runtime.js
var require_jsx_dev_runtime = __commonJS({
  "node_modules/react/jsx-dev-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_dev_runtime_development();
    }
  }
});

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var React = require_react();
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var assign = Object.assign;
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var isArrayImpl = Array.isArray;
        function isArray(a) {
          return isArrayImpl(a);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config, self) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV20(type, config, maybeKey, source, self) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              {
                checkKeyStringCoercion(maybeKey);
              }
              key = "" + maybeKey;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            if (hasValidRef(config)) {
              ref = config.ref;
              warnIfStringRefCannotBeAutoConverted(config, self);
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement2(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement2(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement2(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement2(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        var didWarnAboutKeySpread = {};
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV20(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                      validateChildKeys(children[i], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            {
              if (hasOwnProperty.call(props, "key")) {
                var componentName = getComponentNameFromType(type);
                var keys = Object.keys(props).filter(function(k) {
                  return k !== "key";
                });
                var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
                if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                  var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                  error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                  didWarnAboutKeySpread[componentName + beforeExample] = true;
                }
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// src/Tools/Context.ts
var Context = class _Context {
  static _instance;
  value;
  attributes = {};
  attributesSetter = null;
  registredAttributes;
  groups = [];
  constructor() {
    if (!_Context._instance) {
      _Context._instance = this;
    }
    return _Context._instance;
  }
  set(value) {
    this.value = value;
    return this;
  }
  get() {
    return this.value;
  }
  setAttributes(attributes) {
    this.attributes = attributes;
    return this;
  }
  getAttributes() {
    return this.attributes;
  }
  setRegistredAttributes(attributes) {
    this.registredAttributes = attributes;
    return this;
  }
  getRegistredAttributes() {
    return this.registredAttributes;
  }
  setAttributesSetter(setter) {
    this.attributesSetter = setter;
    return this;
  }
  getAttributesSetter() {
    return this.attributesSetter;
  }
  getGroups() {
    return this.groups;
  }
  setGroups(groups) {
    this.groups = groups;
    return this;
  }
};

// src/Components/Text.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
var { RichText } = window?.wp.blockEditor || {};
var Text = ({ children, ...props }) => {
  const context = new Context().get();
  if (context === "save") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: children.value } }, void 0, false, {
      fileName: "src/Components/Text.tsx",
      lineNumber: 13,
      columnNumber: 12
    });
  }
  if (context === "edit") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
      RichText,
      {
        ...props,
        value: children.value,
        onChange: (value) => {
          children.value = value;
        }
      },
      void 0,
      false,
      {
        fileName: "src/Components/Text.tsx",
        lineNumber: 17,
        columnNumber: 7
      }
    );
  }
  return children.value;
};

// src/Components/Link.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
var { __ } = window?.wp.i18n || {};
var { URLInput, __experimentalLinkControl: LinkControl, InspectorControls, BlockControls } = window?.wp.blockEditor || {};
var Link = ({ href, children, ...props }) => {
  const context = new Context().get();
  if (typeof href.value === "string") {
    href.value = { url: href.value, rel: "noopener" };
  }
  if (context === "edit") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: href.value?.url ? /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        href: "#",
        ...props,
        children
      },
      void 0,
      false,
      {
        fileName: "src/Components/Link.tsx",
        lineNumber: 25,
        columnNumber: 11
      }
    ) : /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { ...props, children }, void 0, false, {
      fileName: "src/Components/Link.tsx",
      lineNumber: 31,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "src/Components/Link.tsx",
      lineNumber: 23,
      columnNumber: 7
    });
  }
  if (context === "save") {
    if (href.value && href.value?.url) {
      if (!href.value.rel) href.value.rel = "noopener";
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "a",
        {
          href: href.value?.url,
          target: href.value.target,
          rel: href.value.rel,
          ...props,
          children
        },
        void 0,
        false,
        {
          fileName: "src/Components/Link.tsx",
          lineNumber: 40,
          columnNumber: 9
        }
      );
    } else {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { ...props, children }, void 0, false, {
        fileName: "src/Components/Link.tsx",
        lineNumber: 49,
        columnNumber: 14
      });
    }
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { children }, void 0, false, {
    fileName: "src/Components/Link.tsx",
    lineNumber: 52,
    columnNumber: 10
  });
};

// src/Components/Image.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
var Image = ({ src, ...props }) => {
  const context = new Context().get();
  if (typeof src.value === "string") {
    src.value = { url: src.value };
  }
  if (typeof src.value === "object") {
    src.value.y = src.value?.y === void 0 ? 0.5 : src.value?.y;
    src.value.x = src.value?.x === void 0 ? 0.5 : src.value?.x;
  }
  if (context === "edit" && src.value?.url) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        style: { objectPosition: `${src.value?.x * 100}% ${src.value?.y * 100}%` },
        src: src.value?.url,
        ...props
      },
      void 0,
      false,
      {
        fileName: "src/Components/Image.tsx",
        lineNumber: 23,
        columnNumber: 7
      }
    );
  }
  if (context === "save" && src.value?.url) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
      "img",
      {
        style: { objectPosition: `${src.value?.x * 100}% ${src.value?.y * 100}%` },
        src: src.value?.url,
        ...props
      },
      void 0,
      false,
      {
        fileName: "src/Components/Image.tsx",
        lineNumber: 33,
        columnNumber: 7
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", {}, void 0, false, {
    fileName: "src/Components/Image.tsx",
    lineNumber: 41,
    columnNumber: 10
  });
};

// src/Components/Video.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
var Video = ({ src, loop, autoplay, ...props }) => {
  const context = new Context().get();
  if (typeof src.value === "string") {
    src.value = { url: src.value };
  }
  if (context === "edit" && src.value?.url) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "video",
      {
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("source", { src: src.value?.url }, void 0, false, {
          fileName: "src/Components/Video.tsx",
          lineNumber: 24,
          columnNumber: 9
        })
      },
      void 0,
      false,
      {
        fileName: "src/Components/Video.tsx",
        lineNumber: 21,
        columnNumber: 7
      }
    );
  }
  if (context === "save" && src.value?.url) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "video",
      {
        autoPlay: autoplay,
        muted: autoplay,
        loop,
        ...props,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("source", { src: src.value?.url }, void 0, false, {
          fileName: "src/Components/Video.tsx",
          lineNumber: 37,
          columnNumber: 9
        })
      },
      void 0,
      false,
      {
        fileName: "src/Components/Video.tsx",
        lineNumber: 31,
        columnNumber: 7
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", {}, void 0, false, {
    fileName: "src/Components/Video.tsx",
    lineNumber: 42,
    columnNumber: 10
  });
};

// src/Components/Childs.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
var { InnerBlocks } = window?.wp.blockEditor || {};
var Childs = ({ ...props }) => {
  const context = new Context().get();
  if (context === "edit") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InnerBlocks, { ...props }, void 0, false, {
      fileName: "src/Components/Childs.tsx",
      lineNumber: 8,
      columnNumber: 12
    });
  }
  if (context === "save") {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(InnerBlocks.Content, { ...props }, void 0, false, {
      fileName: "src/Components/Childs.tsx",
      lineNumber: 11,
      columnNumber: 12
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", {}, void 0, false, {
    fileName: "src/Components/Childs.tsx",
    lineNumber: 13,
    columnNumber: 10
  });
};

// node_modules/@wordpress/element/build-module/react.js
var import_react = __toESM(require_react());

// node_modules/clsx/dist/clsx.mjs
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
var clsx_default = clsx;

// node_modules/@wordpress/primitives/build-module/svg/index.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Path = (props) => (0, import_react.createElement)("path", props);
var SVG = (0, import_react.forwardRef)(
  /**
   * @param {SVGProps}                                    props isPressed indicates whether the SVG should appear as pressed.
   *                                                            Other props will be passed through to svg component.
   * @param {import('react').ForwardedRef<SVGSVGElement>} ref   The forwarded ref to the SVG element.
   *
   * @return {JSX.Element} Stop component
   */
  ({
    className,
    isPressed,
    ...props
  }, ref) => {
    const appliedProps = {
      ...props,
      className: clsx_default(className, {
        "is-pressed": isPressed
      }) || void 0,
      "aria-hidden": true,
      focusable: false
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
      ...appliedProps,
      ref
    });
  }
);
SVG.displayName = "SVG";

// node_modules/@wordpress/icons/build-module/library/align-none.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var alignNone = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Path, {
    d: "M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM5 9h14v6H5V9Z"
  })
});
var align_none_default = alignNone;

// node_modules/@wordpress/icons/build-module/library/link.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var link = /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Path, {
    d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
  })
});
var link_default = link;

// node_modules/@wordpress/icons/build-module/library/position-center.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var positionCenter = /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Path, {
    d: "M19 5.5H5V4h14v1.5ZM19 20H5v-1.5h14V20ZM7 9h10v6H7V9Z"
  })
});
var position_center_default = positionCenter;

// node_modules/@wordpress/icons/build-module/library/position-left.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var positionLeft = /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Path, {
    d: "M5 5.5h8V4H5v1.5ZM5 20h8v-1.5H5V20ZM19 9H5v6h14V9Z"
  })
});
var position_left_default = positionLeft;

// node_modules/@wordpress/icons/build-module/library/position-right.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var positionRight = /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Path, {
    d: "M19 5.5h-8V4h8v1.5ZM19 20h-8v-1.5h8V20ZM5 9h14v6H5V9Z"
  })
});
var position_right_default = positionRight;

// node_modules/@wordpress/icons/build-module/library/stretch-full-width.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime());
var stretchFullWidth = /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Path, {
    d: "M5 4h14v11H5V4Zm11 16H8v-1.5h8V20Z"
  })
});
var stretch_full_width_default = stretchFullWidth;

// node_modules/@wordpress/icons/build-module/library/stretch-wide.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime());
var stretchWide = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Path, {
    d: "M16 5.5H8V4h8v1.5ZM16 20H8v-1.5h8V20ZM5 9h14v6H5V9Z"
  })
});
var stretch_wide_default = stretchWide;

// src/AttrEdits/EditLinkAttr.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
var { PanelBody, Panel, ToolbarButton, Popover } = window?.wp.components || {};
var { __: __2 } = window?.wp.i18n || {};
var { useState: useState2 } = window?.wp.element || {};
var { URLInput: URLInput2, __experimentalLinkControl: LinkControl2, InspectorControls: InspectorControls2, BlockControls: BlockControls2 } = window?.wp.blockEditor || {};
var EditLinkAttr = ({ options, attributes, setAttributes, groupRender }) => {
  if (typeof attributes[options.key] == "string") {
    attributes[options.key] = { url: attributes[options.key] };
    setAttributes({ [options.key]: { url: attributes[options.key] } });
  }
  const [isEditingURL, setIsEditingURL] = useState2(false);
  const [popoverAnchor, setPopoverAnchor] = useState2(null);
  const startEditing = () => setIsEditingURL(true);
  const url = attributes[options.key]?.url || "";
  function setUrl(url2) {
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...url2
      }
    });
  }
  if (groupRender)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      URLInput2,
      {
        isFullWidth: true,
        value: url,
        onChange: (url2) => setUrl({ url: url2 })
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditLinkAttr.tsx",
        lineNumber: 34,
        columnNumber: 7
      }
    );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(InspectorControls2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      PanelBody,
      {
        title: options.label,
        initialOpen: false,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Panel, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          URLInput2,
          {
            isFullWidth: true,
            value: url,
            onChange: (url2) => setUrl({ url: url2 })
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditLinkAttr.tsx",
            lineNumber: 47,
            columnNumber: 13
          }
        ) }, void 0, false, {
          fileName: "src/AttrEdits/EditLinkAttr.tsx",
          lineNumber: 46,
          columnNumber: 11
        })
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditLinkAttr.tsx",
        lineNumber: 43,
        columnNumber: 9
      }
    ) }, void 0, false, {
      fileName: "src/AttrEdits/EditLinkAttr.tsx",
      lineNumber: 42,
      columnNumber: 7
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(BlockControls2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        ToolbarButton,
        {
          icon: link_default,
          label: options.label,
          onClick: startEditing,
          ref: setPopoverAnchor
        },
        void 0,
        false,
        {
          fileName: "src/AttrEdits/EditLinkAttr.tsx",
          lineNumber: 57,
          columnNumber: 9
        }
      ),
      isEditingURL && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        Popover,
        {
          placement: "top-start",
          onClose: () => {
            setIsEditingURL(false);
          },
          anchor: popoverAnchor,
          focusOnMount: isEditingURL ? "firstElement" : false,
          __unstableSlotName: "__unstable-block-tools-after",
          shift: true,
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            LinkControl2,
            {
              value: attributes[options.key],
              onChange: (url2) => {
                setUrl(url2);
                setIsEditingURL(false);
              },
              onRemove: () => {
              },
              forceIsEditingLink: isEditingURL
            },
            void 0,
            false,
            {
              fileName: "src/AttrEdits/EditLinkAttr.tsx",
              lineNumber: 73,
              columnNumber: 13
            }
          )
        },
        void 0,
        false,
        {
          fileName: "src/AttrEdits/EditLinkAttr.tsx",
          lineNumber: 64,
          columnNumber: 11
        }
      )
    ] }, void 0, true, {
      fileName: "src/AttrEdits/EditLinkAttr.tsx",
      lineNumber: 56,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "src/AttrEdits/EditLinkAttr.tsx",
    lineNumber: 41,
    columnNumber: 5
  });
};

// src/AttrEdits/EditImageAttr.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
var { PanelBody: PanelBody2, Panel: Panel2, Button, ButtonGroup, FocalPointPicker } = window?.wp.components || {};
var { __: __3 } = window?.wp.i18n || {};
var { MediaUpload, MediaUploadCheck } = window?.wp.blockEditor || {};
var { URLInput: URLInput3, __experimentalLinkControl: LinkControl3, InspectorControls: InspectorControls3, BlockControls: BlockControls3 } = window?.wp.blockEditor || {};
var { dispatch } = window?.wp.data || {};
var EditImageAttr = ({ options, attributes, setAttributes, groupRender }) => {
  if (typeof attributes[options.key] == "string") {
    attributes[options.key] = { url: attributes[options.key], x: 0.5, y: 0.5 };
    setAttributes({ [options.key]: { url: attributes[options.key], x: 0.5, y: 0.5 } });
  }
  function onFileSelect(file2) {
    if (options.asFeaturedImage) {
      const { editPost } = dispatch("core/editor");
      editPost({ featured_media: file2.id });
    }
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...file2
      }
    });
  }
  function setFocalPoint(focalPoint) {
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...focalPoint
      }
    });
  }
  function removeImage() {
    setAttributes({
      [options.key]: {}
    });
  }
  const internalValue = attributes[options.key] || {};
  if (groupRender)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
      !!internalValue.id && options?.withFocalPoint && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        FocalPointPicker,
        {
          __nextHasNoMarginBottom: true,
          __next40pxDefaultSize: true,
          label: __3("Focal point"),
          url: internalValue.url,
          value: internalValue ? { x: internalValue.x, y: internalValue.y } : { x: 0.5, y: 0.5 },
          onChange: (value) => setFocalPoint(value),
          onDragStart: (value) => setFocalPoint(value),
          onDrag: (value) => setFocalPoint(value)
        },
        void 0,
        false,
        {
          fileName: "src/AttrEdits/EditImageAttr.tsx",
          lineNumber: 56,
          columnNumber: 11
        }
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ButtonGroup, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          MediaUpload,
          {
            onSelect: onFileSelect,
            value: internalValue.id,
            render: ({ open }) => {
              const label = internalValue.id ? __3("Replace image") : __3("Select");
              return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                Button,
                {
                  onClick: open,
                  variant: "primary",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: label } }, void 0, false, {
                    fileName: "src/AttrEdits/EditImageAttr.tsx",
                    lineNumber: 79,
                    columnNumber: 21
                  })
                },
                void 0,
                false,
                {
                  fileName: "src/AttrEdits/EditImageAttr.tsx",
                  lineNumber: 76,
                  columnNumber: 19
                }
              );
            }
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditImageAttr.tsx",
            lineNumber: 70,
            columnNumber: 13
          }
        ),
        internalValue.id && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          Button,
          {
            onClick: removeImage,
            variant: "secondary",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: __3("Remove image") } }, void 0, false, {
              fileName: "src/AttrEdits/EditImageAttr.tsx",
              lineNumber: 88,
              columnNumber: 17
            })
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditImageAttr.tsx",
            lineNumber: 85,
            columnNumber: 15
          }
        )
      ] }, void 0, true, {
        fileName: "src/AttrEdits/EditImageAttr.tsx",
        lineNumber: 69,
        columnNumber: 11
      }) }, void 0, false, {
        fileName: "src/AttrEdits/EditImageAttr.tsx",
        lineNumber: 68,
        columnNumber: 9
      })
    ] }, void 0, true, {
      fileName: "src/AttrEdits/EditImageAttr.tsx",
      lineNumber: 54,
      columnNumber: 7
    });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: !options.group && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(InspectorControls3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    PanelBody2,
    {
      title: options.label,
      initialOpen: false,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Panel2, { children: [
        !!internalValue.id && options?.withFocalPoint && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          FocalPointPicker,
          {
            __nextHasNoMarginBottom: true,
            __next40pxDefaultSize: true,
            label: __3("Focal point"),
            url: internalValue.url,
            value: internalValue ? { x: internalValue.x, y: internalValue.y } : { x: 0.5, y: 0.5 },
            onChange: (value) => setFocalPoint(value),
            onDragStart: (value) => setFocalPoint(value),
            onDrag: (value) => setFocalPoint(value)
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditImageAttr.tsx",
            lineNumber: 105,
            columnNumber: 17
          }
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(MediaUploadCheck, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ButtonGroup, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            MediaUpload,
            {
              onSelect: onFileSelect,
              value: internalValue.id,
              render: ({ open }) => {
                const label = internalValue.id ? __3("Replace image") : __3("Select");
                return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  Button,
                  {
                    onClick: open,
                    variant: "primary",
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: label } }, void 0, false, {
                      fileName: "src/AttrEdits/EditImageAttr.tsx",
                      lineNumber: 127,
                      columnNumber: 27
                    })
                  },
                  void 0,
                  false,
                  {
                    fileName: "src/AttrEdits/EditImageAttr.tsx",
                    lineNumber: 124,
                    columnNumber: 25
                  }
                );
              }
            },
            void 0,
            false,
            {
              fileName: "src/AttrEdits/EditImageAttr.tsx",
              lineNumber: 118,
              columnNumber: 19
            }
          ),
          internalValue.id && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            Button,
            {
              onClick: removeImage,
              variant: "secondary",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: __3("Remove image") } }, void 0, false, {
                fileName: "src/AttrEdits/EditImageAttr.tsx",
                lineNumber: 136,
                columnNumber: 23
              })
            },
            void 0,
            false,
            {
              fileName: "src/AttrEdits/EditImageAttr.tsx",
              lineNumber: 133,
              columnNumber: 21
            }
          )
        ] }, void 0, true, {
          fileName: "src/AttrEdits/EditImageAttr.tsx",
          lineNumber: 117,
          columnNumber: 17
        }) }, void 0, false, {
          fileName: "src/AttrEdits/EditImageAttr.tsx",
          lineNumber: 116,
          columnNumber: 15
        })
      ] }, void 0, true, {
        fileName: "src/AttrEdits/EditImageAttr.tsx",
        lineNumber: 103,
        columnNumber: 13
      })
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditImageAttr.tsx",
      lineNumber: 100,
      columnNumber: 11
    }
  ) }, void 0, false, {
    fileName: "src/AttrEdits/EditImageAttr.tsx",
    lineNumber: 99,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "src/AttrEdits/EditImageAttr.tsx",
    lineNumber: 97,
    columnNumber: 5
  });
};

// src/AttrEdits/ui/Icons.tsx
var import_jsx_dev_runtime8 = __toESM(require_jsx_dev_runtime(), 1);
var alignBottom = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M15 4H9v11h6V4zM4 18.5V20h16v-1.5H4z" }, void 0, false, {
      fileName: "src/AttrEdits/ui/Icons.tsx",
      lineNumber: 5,
      columnNumber: 5
    })
  },
  void 0,
  false,
  {
    fileName: "src/AttrEdits/ui/Icons.tsx",
    lineNumber: 2,
    columnNumber: 3
  }
);
var alignCenter = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M20 11h-5V4H9v7H4v1.5h5V20h6v-7.5h5z" }, void 0, false, {
      fileName: "src/AttrEdits/ui/Icons.tsx",
      lineNumber: 13,
      columnNumber: 5
    })
  },
  void 0,
  false,
  {
    fileName: "src/AttrEdits/ui/Icons.tsx",
    lineNumber: 10,
    columnNumber: 3
  }
);
var alignTop = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M9 20h6V9H9v11zM4 4v1.5h16V4H4z" }, void 0, false, {
      fileName: "src/AttrEdits/ui/Icons.tsx",
      lineNumber: 21,
      columnNumber: 5
    })
  },
  void 0,
  false,
  {
    fileName: "src/AttrEdits/ui/Icons.tsx",
    lineNumber: 18,
    columnNumber: 3
  }
);
var alignStretch = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M4 4L20 4L20 5.5L4 5.5L4 4ZM10 7L14 7L14 17L10 17L10 7ZM20 18.5L4 18.5L4 20L20 20L20 18.5Z" }, void 0, false, {
      fileName: "src/AttrEdits/ui/Icons.tsx",
      lineNumber: 29,
      columnNumber: 5
    })
  },
  void 0,
  false,
  {
    fileName: "src/AttrEdits/ui/Icons.tsx",
    lineNumber: 26,
    columnNumber: 3
  }
);
var spaceBetween = /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("path", { d: "M7 4H17V8L7 8V4ZM7 16L17 16V20L7 20V16ZM20 11.25H4V12.75H20V11.25Z" }, void 0, false, {
      fileName: "src/AttrEdits/ui/Icons.tsx",
      lineNumber: 37,
      columnNumber: 5
    })
  },
  void 0,
  false,
  {
    fileName: "src/AttrEdits/ui/Icons.tsx",
    lineNumber: 34,
    columnNumber: 3
  }
);

// src/AttrEdits/EditVerticalAlign.tsx
var import_jsx_dev_runtime9 = __toESM(require_jsx_dev_runtime(), 1);
var { PanelBody: PanelBody3, Panel: Panel3 } = window?.wp.components || {};
var { __: __4, _x } = window?.wp.i18n || {};
var { InspectorControls: InspectorControls4, BlockControls: BlockControls4, BlockVerticalAlignmentControl } = window?.wp.blockEditor || {};
var { __experimentalToggleGroupControl: ToggleGroupControl, __experimentalToggleGroupControlOptionIcon: ToggleGroupControlOptionIcon } = window?.wp.components || {};
var choices = {
  top: {
    icon: alignTop,
    label: _x("Align top", "Block vertical alignment setting"),
    value: "top"
  },
  center: {
    icon: alignCenter,
    label: _x("Align center", "Block vertical alignment setting"),
    value: "center"
  },
  bottom: {
    icon: alignBottom,
    label: _x("Align bottom", "Block vertical alignment setting"),
    value: "bottom"
  },
  stretch: {
    icon: alignStretch,
    label: _x("Stretch", "Block vertical alignment setting"),
    value: "stretch"
  },
  "space-between": {
    icon: spaceBetween,
    label: _x("Space between", "Block vertical alignment setting"),
    value: "space-between"
  }
};
var EditVerticalAlign = ({ options, attributes, setAttributes, groupRender }) => {
  const onChange = (alignment) => {
    setAttributes({ [options.key]: alignment });
  };
  const controls = options.controls || ["top", "center", "bottom"];
  const alignement = attributes[options.key] || controls[0];
  if (groupRender)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      ToggleGroupControl,
      {
        __nextHasNoMarginBottom: true,
        isBlock: true,
        label: options.label,
        value: alignement,
        onChange,
        children: controls.map((control) => {
          const { icon, label, value } = choices[control];
          return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            ToggleGroupControlOptionIcon,
            {
              icon,
              label,
              value
            },
            value,
            false,
            {
              fileName: "src/AttrEdits/EditVerticalAlign.tsx",
              lineNumber: 57,
              columnNumber: 13
            }
          );
        })
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditVerticalAlign.tsx",
        lineNumber: 48,
        columnNumber: 7
      }
    );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: [
    !options.group && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(InspectorControls4, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      PanelBody3,
      {
        title: options.label,
        initialOpen: false,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(Panel3, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
          ToggleGroupControl,
          {
            __nextHasNoMarginBottom: true,
            isBlock: true,
            label: "",
            value: alignement,
            onChange,
            children: controls.map((control) => {
              const { icon, label, value } = choices[control];
              return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
                ToggleGroupControlOptionIcon,
                {
                  icon,
                  label,
                  value
                },
                value,
                false,
                {
                  fileName: "src/AttrEdits/EditVerticalAlign.tsx",
                  lineNumber: 84,
                  columnNumber: 21
                }
              );
            })
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditVerticalAlign.tsx",
            lineNumber: 75,
            columnNumber: 15
          }
        ) }, void 0, false, {
          fileName: "src/AttrEdits/EditVerticalAlign.tsx",
          lineNumber: 74,
          columnNumber: 13
        })
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditVerticalAlign.tsx",
        lineNumber: 71,
        columnNumber: 11
      }
    ) }, void 0, false, {
      fileName: "src/AttrEdits/EditVerticalAlign.tsx",
      lineNumber: 70,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(BlockControls4, { group: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
      BlockVerticalAlignmentControl,
      {
        value: alignement,
        onChange,
        controls
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditVerticalAlign.tsx",
        lineNumber: 100,
        columnNumber: 11
      }
    ) }, void 0, false, {
      fileName: "src/AttrEdits/EditVerticalAlign.tsx",
      lineNumber: 99,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "src/AttrEdits/EditVerticalAlign.tsx",
      lineNumber: 98,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "src/AttrEdits/EditVerticalAlign.tsx",
    lineNumber: 68,
    columnNumber: 5
  });
};

// src/AttrEdits/EditHorizontalAlign.tsx
var import_jsx_dev_runtime10 = __toESM(require_jsx_dev_runtime(), 1);
var { PanelBody: PanelBody4, Panel: Panel4 } = window?.wp.components || {};
var { __: __5, _x: _x2 } = window?.wp.i18n || {};
var { InspectorControls: InspectorControls5, BlockControls: BlockControls5, BlockAlignmentControl } = window?.wp.blockEditor || {};
var { __experimentalToggleGroupControl: ToggleGroupControl2, __experimentalToggleGroupControlOptionIcon: ToggleGroupControlOptionIcon2 } = window?.wp.components || {};
var choices2 = {
  none: {
    Icon: align_none_default,
    title: _x2("None", "Alignment option")
  },
  left: {
    Icon: position_left_default,
    title: __5("Align left")
  },
  center: {
    Icon: position_center_default,
    title: __5("Align center")
  },
  right: {
    Icon: position_right_default,
    title: __5("Align right")
  },
  wide: {
    Icon: stretch_wide_default,
    title: __5("Wide width")
  },
  full: {
    Icon: stretch_full_width_default,
    title: __5("Full width")
  }
};
var EditHorizontalAlign = ({ options, attributes, setAttributes, groupRender }) => {
  const onChange = (alignment) => {
    setAttributes({ [options.key]: alignment });
  };
  const controls = options.controls || ["left", "center", "right"];
  const alignement = attributes[options.key] || controls[0];
  if (groupRender)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      ToggleGroupControl2,
      {
        __nextHasNoMarginBottom: true,
        isBlock: true,
        label: options.label,
        value: alignement,
        onChange,
        children: controls.map((control) => {
          const { Icon, title } = choices2[control];
          return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
            ToggleGroupControlOptionIcon2,
            {
              icon: Icon,
              label: title,
              value: control
            },
            control,
            false,
            {
              fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
              lineNumber: 56,
              columnNumber: 13
            }
          );
        })
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
        lineNumber: 47,
        columnNumber: 7
      }
    );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: [
    !options.group && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(InspectorControls5, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      PanelBody4,
      {
        title: options.label,
        initialOpen: false,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(Panel4, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
          ToggleGroupControl2,
          {
            __nextHasNoMarginBottom: true,
            isBlock: true,
            label: "",
            value: alignement,
            onChange,
            children: controls.map((control) => {
              const { Icon, title } = choices2[control];
              return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
                ToggleGroupControlOptionIcon2,
                {
                  icon: Icon,
                  label: title,
                  value: control
                },
                control,
                false,
                {
                  fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
                  lineNumber: 83,
                  columnNumber: 21
                }
              );
            })
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
            lineNumber: 74,
            columnNumber: 15
          }
        ) }, void 0, false, {
          fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
          lineNumber: 73,
          columnNumber: 13
        })
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
        lineNumber: 70,
        columnNumber: 11
      }
    ) }, void 0, false, {
      fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
      lineNumber: 69,
      columnNumber: 9
    }),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(BlockControls5, { group: "block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
      BlockAlignmentControl,
      {
        value: alignement,
        onChange,
        controls
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
        lineNumber: 99,
        columnNumber: 11
      }
    ) }, void 0, false, {
      fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
      lineNumber: 98,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
      lineNumber: 97,
      columnNumber: 7
    })
  ] }, void 0, true, {
    fileName: "src/AttrEdits/EditHorizontalAlign.tsx",
    lineNumber: 67,
    columnNumber: 5
  });
};

// src/AttrEdits/EditColorAttr.tsx
var import_jsx_dev_runtime11 = __toESM(require_jsx_dev_runtime(), 1);
var { __: __6 } = window?.wp.i18n || {};
var { PanelBody: PanelBody5, Panel: Panel5, Dropdown, Button: Button2, FlexItem, ColorIndicator, __experimentalDropdownContentWrapper: DropdownContentWrapper, __experimentalHStack: HStack } = window?.wp.components || {};
var { URLInput: URLInput4, __experimentalLinkControl: LinkControl4, InspectorControls: InspectorControls6, BlockControls: BlockControls6, __experimentalColorGradientSettingsDropdown: ColorGradientSettingsDropdown, __experimentalColorGradientControl: ColorGradientControl } = window?.wp.blockEditor || {};
var { useSelect } = window?.wp.data || {};
var renderToggle = (settings) => ({ onToggle, isOpen }) => {
  const { colorValue, label } = settings;
  const toggleProps = {
    onClick: onToggle,
    className: `block-editor-panel-color-gradient-settings__dropdown ${isOpen ? "is-open" : ""}`,
    "aria-expanded": isOpen
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Button2, { __next40pxDefaultSize: true, ...toggleProps, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    LabeledColorIndicator,
    {
      colorValue,
      label
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditColorAttr.tsx",
      lineNumber: 24,
      columnNumber: 11
    }
  ) }, void 0, false, {
    fileName: "src/AttrEdits/EditColorAttr.tsx",
    lineNumber: 23,
    columnNumber: 9
  });
};
var LabeledColorIndicator = ({ colorValue, label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(HStack, { justify: "flex-start", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    ColorIndicator,
    {
      className: "block-editor-panel-color-gradient-settings__color-indicator",
      colorValue
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditColorAttr.tsx",
      lineNumber: 33,
      columnNumber: 5
    }
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    FlexItem,
    {
      className: "block-editor-panel-color-gradient-settings__color-name",
      title: label,
      children: label
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditColorAttr.tsx",
      lineNumber: 37,
      columnNumber: 5
    }
  )
] }, void 0, true, {
  fileName: "src/AttrEdits/EditColorAttr.tsx",
  lineNumber: 32,
  columnNumber: 3
});
var EditColorAttr = ({ options, attributes, setAttributes, groupRender }) => {
  const themeColors = useSelect((select) => {
    const { getSettings } = select("core/block-editor");
    ;
    const baseColors = getSettings("color.palette")?.colors;
    return Array.isArray(baseColors) ? baseColors : [];
  }, []);
  let color2 = attributes[options.key] || "";
  if (options.returnAsPalette) {
    const foundColor = themeColors.find((c) => c.slug === color2);
    color2 = foundColor ? foundColor.color : "";
  }
  function setColor(color3) {
    if (options.returnAsPalette) {
      const foundColor = themeColors.find((c) => c.color === color3);
      setAttributes({
        [options.key]: foundColor ? foundColor.slug : null
      });
      return;
    }
    setAttributes({
      [options.key]: color3
    });
  }
  function EditorField() {
    const controlProps = {
      clearable: true,
      colorValue: color2,
      label: __6(options.label),
      onColorChange: setColor,
      showTitle: false
    };
    const toggleSettings = {
      label: __6(options.label),
      colorValue: color2
    };
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      Dropdown,
      {
        popoverProps: {
          placement: "left-start",
          offset: 36,
          shift: true
        },
        className: "block-editor-tools-panel-color-gradient-settings__dropdown block-editor-tools-panel-color-gradient-settings__item",
        style: { marginTop: "0px" },
        renderToggle: renderToggle(toggleSettings),
        renderContent: () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DropdownContentWrapper, { paddingSize: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "block-editor-panel-color-gradient-settings__dropdown-content components-dropdown block-editor-tools-panel-color-gradient-settings__dropdown", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
          ColorGradientControl,
          {
            colorValue: color2,
            onColorChange: setColor,
            settings: {},
            ...controlProps
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditColorAttr.tsx",
            lineNumber: 101,
            columnNumber: 13
          },
          this
        ) }, void 0, false, {
          fileName: "src/AttrEdits/EditColorAttr.tsx",
          lineNumber: 100,
          columnNumber: 11
        }, this) }, void 0, false, {
          fileName: "src/AttrEdits/EditColorAttr.tsx",
          lineNumber: 99,
          columnNumber: 9
        }, this)
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditColorAttr.tsx",
        lineNumber: 89,
        columnNumber: 12
      },
      this
    );
  }
  if (groupRender) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(EditorField, {}, void 0, false, {
      fileName: "src/AttrEdits/EditColorAttr.tsx",
      lineNumber: 118,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "src/AttrEdits/EditColorAttr.tsx",
      lineNumber: 116,
      columnNumber: 7
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: !options.group && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(InspectorControls6, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
    PanelBody5,
    {
      title: options.label,
      initialOpen: false,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(Panel5, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(EditorField, {}, void 0, false, {
        fileName: "src/AttrEdits/EditColorAttr.tsx",
        lineNumber: 130,
        columnNumber: 15
      }) }, void 0, false, {
        fileName: "src/AttrEdits/EditColorAttr.tsx",
        lineNumber: 129,
        columnNumber: 13
      })
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditColorAttr.tsx",
      lineNumber: 126,
      columnNumber: 11
    }
  ) }, void 0, false, {
    fileName: "src/AttrEdits/EditColorAttr.tsx",
    lineNumber: 125,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "src/AttrEdits/EditColorAttr.tsx",
    lineNumber: 123,
    columnNumber: 5
  });
};

// src/AttrEdits/EditBoolean.tsx
var import_jsx_dev_runtime12 = __toESM(require_jsx_dev_runtime(), 1);
var { __: __7 } = window?.wp.i18n || {};
var { ToggleControl } = window?.wp.components || {};
var { PanelBody: PanelBody6, Panel: Panel6, Dropdown: Dropdown2, Button: Button3, FlexItem: FlexItem2, __experimentalDropdownContentWrapper: DropdownContentWrapper2, __experimentalHStack: HStack2 } = window?.wp.components || {};
var { URLInput: URLInput5, __experimentalLinkControl: LinkControl5, InspectorControls: InspectorControls7, BlockControls: BlockControls7 } = window?.wp.blockEditor || {};
var EditBoolean = ({ options, attributes, setAttributes, groupRender }) => {
  const value = attributes[options.key] || false;
  function setValue(value2) {
    setAttributes({
      [options.key]: value2
    });
  }
  if (groupRender) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      ToggleControl,
      {
        __nextHasNoMarginBottom: true,
        checked: value,
        label: options.label,
        onChange: (value2) => setValue(value2)
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditBoolean.tsx",
        lineNumber: 24,
        columnNumber: 9
      }
    ) }, void 0, false, {
      fileName: "src/AttrEdits/EditBoolean.tsx",
      lineNumber: 23,
      columnNumber: 7
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: !options.group && /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(InspectorControls7, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    PanelBody6,
    {
      title: options.label,
      initialOpen: false,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(Panel6, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
        ToggleControl,
        {
          __nextHasNoMarginBottom: true,
          checked: value,
          label: options.label,
          onChange: (value2) => setValue(value2)
        },
        void 0,
        false,
        {
          fileName: "src/AttrEdits/EditBoolean.tsx",
          lineNumber: 41,
          columnNumber: 15
        }
      ) }, void 0, false, {
        fileName: "src/AttrEdits/EditBoolean.tsx",
        lineNumber: 40,
        columnNumber: 13
      })
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditBoolean.tsx",
      lineNumber: 37,
      columnNumber: 11
    }
  ) }, void 0, false, {
    fileName: "src/AttrEdits/EditBoolean.tsx",
    lineNumber: 36,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "src/AttrEdits/EditBoolean.tsx",
    lineNumber: 34,
    columnNumber: 5
  });
};

// src/AttrEdits/EditList.tsx
var import_jsx_dev_runtime13 = __toESM(require_jsx_dev_runtime(), 1);
var { __: __8 } = window?.wp.i18n || {};
var { SelectControl } = window?.wp.components || {};
var { PanelBody: PanelBody7, Panel: Panel7, Dropdown: Dropdown3, Button: Button4, FlexItem: FlexItem3, __experimentalDropdownContentWrapper: DropdownContentWrapper3, __experimentalHStack: HStack3 } = window?.wp.components || {};
var { URLInput: URLInput6, __experimentalLinkControl: LinkControl6, InspectorControls: InspectorControls8, BlockControls: BlockControls8 } = window?.wp.blockEditor || {};
var EditList = ({ options, attributes, setAttributes, groupRender }) => {
  const value = attributes[options.key] || false;
  function setValue(value2) {
    setAttributes({
      [options.key]: value2
    });
  }
  const optionsChoices = [];
  Object.keys(options.options).forEach((key) => {
    optionsChoices.push({
      label: options.options[key],
      value: key
    });
  });
  console.log(optionsChoices);
  if (groupRender) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      SelectControl,
      {
        __nextHasNoMarginBottom: true,
        label: "Label",
        value,
        onChange: (value2) => setValue(value2),
        options: [
          {
            disabled: true,
            label: "",
            value: ""
          },
          ...optionsChoices
        ]
      },
      void 0,
      false,
      {
        fileName: "src/AttrEdits/EditList.tsx",
        lineNumber: 40,
        columnNumber: 9
      }
    ) }, void 0, false, {
      fileName: "src/AttrEdits/EditList.tsx",
      lineNumber: 39,
      columnNumber: 7
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: !options.group && /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(InspectorControls8, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    PanelBody7,
    {
      title: options.label,
      initialOpen: false,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Panel7, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        SelectControl,
        {
          __nextHasNoMarginBottom: true,
          label: "Label",
          value,
          onChange: (value2) => setValue(value2),
          options: optionsChoices
        },
        void 0,
        false,
        {
          fileName: "src/AttrEdits/EditList.tsx",
          lineNumber: 65,
          columnNumber: 15
        }
      ) }, void 0, false, {
        fileName: "src/AttrEdits/EditList.tsx",
        lineNumber: 64,
        columnNumber: 13
      })
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditList.tsx",
      lineNumber: 61,
      columnNumber: 11
    }
  ) }, void 0, false, {
    fileName: "src/AttrEdits/EditList.tsx",
    lineNumber: 60,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "src/AttrEdits/EditList.tsx",
    lineNumber: 58,
    columnNumber: 5
  });
};

// src/AttrEdits/EditFileAttr.tsx
var import_jsx_dev_runtime14 = __toESM(require_jsx_dev_runtime(), 1);
var { PanelBody: PanelBody8, Panel: Panel8, Button: Button5, ButtonGroup: ButtonGroup2, FocalPointPicker: FocalPointPicker2 } = window?.wp.components || {};
var { __: __9 } = window?.wp.i18n || {};
var { MediaUpload: MediaUpload2, MediaUploadCheck: MediaUploadCheck2 } = window?.wp.blockEditor || {};
var { URLInput: URLInput7, __experimentalLinkControl: LinkControl7, InspectorControls: InspectorControls9, BlockControls: BlockControls9 } = window?.wp.blockEditor || {};
var EditFileAttr = ({ options, attributes, setAttributes, groupRender }) => {
  if (typeof attributes[options.key] == "string") {
    attributes[options.key] = { url: attributes[options.key], x: 0.5, y: 0.5 };
    setAttributes({ [options.key]: { url: attributes[options.key], x: 0.5, y: 0.5 } });
  }
  function onFileSelect(file2) {
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...file2
      }
    });
  }
  function setFocalPoint(focalPoint) {
    setAttributes({
      [options.key]: {
        ...attributes[options.key],
        ...focalPoint
      }
    });
  }
  function removeImage() {
    setAttributes({
      [options.key]: {}
    });
  }
  const internalValue = attributes[options.key] || {};
  if (groupRender)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MediaUploadCheck2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ButtonGroup2, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        MediaUpload2,
        {
          onSelect: onFileSelect,
          value: internalValue.id,
          render: ({ open }) => {
            const label = internalValue.id ? __9("Replace file") : __9("Select");
            return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
              Button5,
              {
                onClick: open,
                variant: "primary",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: label } }, void 0, false, {
                  fileName: "src/AttrEdits/EditFileAttr.tsx",
                  lineNumber: 50,
                  columnNumber: 21
                })
              },
              void 0,
              false,
              {
                fileName: "src/AttrEdits/EditFileAttr.tsx",
                lineNumber: 47,
                columnNumber: 19
              }
            );
          }
        },
        void 0,
        false,
        {
          fileName: "src/AttrEdits/EditFileAttr.tsx",
          lineNumber: 41,
          columnNumber: 13
        }
      ),
      internalValue.id && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        Button5,
        {
          onClick: removeImage,
          variant: "secondary",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: __9("Remove file") } }, void 0, false, {
            fileName: "src/AttrEdits/EditFileAttr.tsx",
            lineNumber: 59,
            columnNumber: 17
          })
        },
        void 0,
        false,
        {
          fileName: "src/AttrEdits/EditFileAttr.tsx",
          lineNumber: 56,
          columnNumber: 15
        }
      )
    ] }, void 0, true, {
      fileName: "src/AttrEdits/EditFileAttr.tsx",
      lineNumber: 40,
      columnNumber: 11
    }) }, void 0, false, {
      fileName: "src/AttrEdits/EditFileAttr.tsx",
      lineNumber: 39,
      columnNumber: 9
    }) }, void 0, false, {
      fileName: "src/AttrEdits/EditFileAttr.tsx",
      lineNumber: 38,
      columnNumber: 7
    });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: !options.group && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(InspectorControls9, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    PanelBody8,
    {
      title: options.label,
      initialOpen: false,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Panel8, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(MediaUploadCheck2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ButtonGroup2, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          MediaUpload2,
          {
            onSelect: onFileSelect,
            value: internalValue.id,
            render: ({ open }) => {
              const label = internalValue.id ? __9("Replace file") : __9("Select");
              return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
                Button5,
                {
                  onClick: open,
                  variant: "primary",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: label } }, void 0, false, {
                    fileName: "src/AttrEdits/EditFileAttr.tsx",
                    lineNumber: 85,
                    columnNumber: 27
                  })
                },
                void 0,
                false,
                {
                  fileName: "src/AttrEdits/EditFileAttr.tsx",
                  lineNumber: 82,
                  columnNumber: 25
                }
              );
            }
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditFileAttr.tsx",
            lineNumber: 76,
            columnNumber: 19
          }
        ),
        internalValue.id && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
          Button5,
          {
            onClick: removeImage,
            variant: "secondary",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("span", { dangerouslySetInnerHTML: { __html: __9("Remove file") } }, void 0, false, {
              fileName: "src/AttrEdits/EditFileAttr.tsx",
              lineNumber: 94,
              columnNumber: 23
            })
          },
          void 0,
          false,
          {
            fileName: "src/AttrEdits/EditFileAttr.tsx",
            lineNumber: 91,
            columnNumber: 21
          }
        )
      ] }, void 0, true, {
        fileName: "src/AttrEdits/EditFileAttr.tsx",
        lineNumber: 75,
        columnNumber: 17
      }) }, void 0, false, {
        fileName: "src/AttrEdits/EditFileAttr.tsx",
        lineNumber: 74,
        columnNumber: 15
      }) }, void 0, false, {
        fileName: "src/AttrEdits/EditFileAttr.tsx",
        lineNumber: 73,
        columnNumber: 13
      })
    },
    void 0,
    false,
    {
      fileName: "src/AttrEdits/EditFileAttr.tsx",
      lineNumber: 70,
      columnNumber: 11
    }
  ) }, void 0, false, {
    fileName: "src/AttrEdits/EditFileAttr.tsx",
    lineNumber: 69,
    columnNumber: 9
  }) }, void 0, false, {
    fileName: "src/AttrEdits/EditFileAttr.tsx",
    lineNumber: 67,
    columnNumber: 5
  });
};

// src/Setup/RegisterBlock.tsx
var import_jsx_dev_runtime15 = __toESM(require_jsx_dev_runtime(), 1);
var { registerBlockType } = window?.wp.blocks || {};
var { Panel: Panel9, PanelBody: PanelBody9 } = window?.wp.components || {};
var { InspectorControls: InspectorControls10 } = window?.wp.blockEditor || {};
function getRenderer(options) {
  switch (options.type) {
    case "image":
      return [EditImageAttr, options];
    case "file":
      return [EditFileAttr, options];
    case "link":
      return [EditLinkAttr, options];
    case "valign":
      return [EditVerticalAlign, options];
    case "halign":
      return [EditHorizontalAlign, options];
    case "color":
      return [EditColorAttr, options];
    case "boolean":
      return [EditBoolean, options];
    case "list":
      return [EditList, options];
    case "string":
    case "number":
    default:
      return [() => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", {}, void 0, false, {
        fileName: "src/Setup/RegisterBlock.tsx",
        lineNumber: 45,
        columnNumber: 21
      }, this), options];
  }
}
function checkForEditor() {
  return window?.wp?.element && window?.wp?.blockEditor;
}
function RegisterBlock(options) {
  if (!checkForEditor()) return;
  const attributes = {};
  const groups = [];
  const registredAttrs = [];
  console.log(groups);
  new Context().set("prepare").setAttributes(attributes).setRegistredAttributes(registredAttrs).setAttributesSetter(null).setGroups(groups);
  const { name, render, ...otherOptions } = options;
  const Render = render;
  Render({});
  const formattedArguments = {};
  registredAttrs.forEach((attr2) => {
    formattedArguments[attr2.key] = {
      type: attr2.type,
      default: attr2.default,
      hideControls: attr2.hideControls
    };
  });
  registerBlockType(name, {
    ...otherOptions,
    attributes: formattedArguments,
    edit: (props) => {
      new Context().set("edit").setAttributes(props.attributes).setAttributesSetter(props.setAttributes).setGroups(groups);
      const { attributes: attributes2, setAttributes } = props;
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(InspectorControls10, { children: groups.map((group2) => {
          return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            PanelBody9,
            {
              title: group2.label,
              initialOpen: false,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Panel9, { children: registredAttrs.filter((a) => a.hideControls !== true).filter((attr2) => attr2.group === group2).map((attr2) => {
                const [RenderAttrFunction, options2] = getRenderer(attr2);
                return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
                  RenderAttrFunction,
                  {
                    groupRender: true,
                    options: options2,
                    setAttributes,
                    attributes: attributes2
                  },
                  options2.key,
                  false,
                  {
                    fileName: "src/Setup/RegisterBlock.tsx",
                    lineNumber: 112,
                    columnNumber: 27
                  },
                  this
                );
              }) }, void 0, false, {
                fileName: "src/Setup/RegisterBlock.tsx",
                lineNumber: 105,
                columnNumber: 19
              }, this)
            },
            group2.label,
            false,
            {
              fileName: "src/Setup/RegisterBlock.tsx",
              lineNumber: 101,
              columnNumber: 17
            },
            this
          );
        }) }, void 0, false, {
          fileName: "src/Setup/RegisterBlock.tsx",
          lineNumber: 98,
          columnNumber: 11
        }, this),
        registredAttrs.filter((a) => a.hideControls !== true).map((attr2) => {
          const [RenderAttrFunction, options2] = getRenderer(attr2);
          return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
            RenderAttrFunction,
            {
              groupRender: false,
              options: options2,
              setAttributes,
              attributes: attributes2
            },
            options2.key,
            false,
            {
              fileName: "src/Setup/RegisterBlock.tsx",
              lineNumber: 130,
              columnNumber: 15
            },
            this
          );
        }),
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Render, { ...props }, void 0, false, {
          fileName: "src/Setup/RegisterBlock.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, this)
      ] }, void 0, true, {
        fileName: "src/Setup/RegisterBlock.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this);
    },
    save: (props) => {
      new Context().set("save").setAttributes(props.attributes).setAttributesSetter(null);
      return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Render, { ...props }, void 0, false, {
        fileName: "src/Setup/RegisterBlock.tsx",
        lineNumber: 147,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "src/Setup/RegisterBlock.tsx",
        lineNumber: 146,
        columnNumber: 9
      }, this);
    }
  });
}

// src/Components/EditOnly.tsx
var import_jsx_dev_runtime16 = __toESM(require_jsx_dev_runtime(), 1);
var EditOnly = ({ children }) => {
  const context = new Context().get();
  return context === "edit" ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children }, void 0, false, {
    fileName: "src/Components/EditOnly.tsx",
    lineNumber: 4,
    columnNumber: 31
  }) : null;
};

// src/Components/SaveOnly.tsx
var import_jsx_dev_runtime17 = __toESM(require_jsx_dev_runtime(), 1);
var SaveOnly = ({ children }) => {
  const context = new Context().get();
  return context === "save" ? /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_jsx_dev_runtime17.Fragment, { children }, void 0, false, {
    fileName: "src/Components/SaveOnly.tsx",
    lineNumber: 4,
    columnNumber: 31
  }) : null;
};

// src/Components/PageTitle.tsx
var import_jsx_dev_runtime18 = __toESM(require_jsx_dev_runtime(), 1);
var { RichText: RichText2 } = window?.wp.blockEditor || {};
var { useSelect: useSelect2, useDispatch } = window?.wp.data || {};
var PageTitle = () => {
  const context = new Context().get();
  if (context === "save") {
    return "[page-title]";
  }
  if (context === "edit") {
    const [title, setTitle] = useSelect2((select) => {
      const { getEditedPostAttribute } = select("core/editor");
      const { editPost } = useDispatch("core/editor");
      return [
        getEditedPostAttribute("title"),
        function(value) {
          editPost({ title: value });
        }
      ];
    }, []);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      RichText2,
      {
        placeholder: "Titre de la page",
        value: title,
        onChange: setTitle
      },
      void 0,
      false,
      {
        fileName: "src/Components/PageTitle.tsx",
        lineNumber: 22,
        columnNumber: 7
      }
    );
  }
};

// src/Components/PageMeta.tsx
var import_jsx_dev_runtime19 = __toESM(require_jsx_dev_runtime(), 1);
var { RichText: RichText3 } = window?.wp.blockEditor || {};
var { useSelect: useSelect3, useDispatch: useDispatch2 } = window?.wp.data || {};
var PageMeta = ({ meta, placeholder }) => {
  const context = new Context().get();
  if (context === "save") {
    return `[page-meta key="${meta}"]`;
  }
  if (context === "edit") {
    const [title, setTitle, hasMetas] = useSelect3((select) => {
      const { getEditedPostAttribute } = select("core/editor");
      const { editPost } = useDispatch2("core/editor");
      const metas = getEditedPostAttribute("meta");
      const value = metas ? metas[meta] : null;
      return [
        value,
        function(value2) {
          editPost({ meta: { ...metas, [meta]: value2 } });
        },
        !!metas
      ];
    }, []);
    if (!hasMetas) return null;
    return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      RichText3,
      {
        placeholder: placeholder || "Page Meta",
        value: title,
        onChange: setTitle
      },
      void 0,
      false,
      {
        fileName: "src/Components/PageMeta.tsx",
        lineNumber: 32,
        columnNumber: 7
      }
    );
  }
};

// src/Attr/attrs.ts
var { useSelect: useSelect4, dispatch: dispatch2 } = window?.wp.data || {};
function file(option) {
  return attr({ ...option, type: "file" });
}
function image(option) {
  return attr({ ...option, type: "image" });
}
function link2(option) {
  return attr({ ...option, type: "link" });
}
function color(option) {
  return attr({ ...option, type: "color" });
}
function number(option) {
  return attr({ ...option, type: "number" });
}
function string(option) {
  return attr({ ...option, type: "string" });
}
function list(option) {
  return attr({ ...option, type: "list" });
}
function valign(option) {
  return attr({ ...option, type: "valign" });
}
function halign(option) {
  return attr({ ...option, type: "halign" });
}
function boolean(option) {
  return attr({ ...option, type: "boolean" });
}
function group(label) {
  const ctx = new Context();
  if (ctx.get() == "prepare") {
    const groups = ctx.getGroups();
    if (groups.find((group2) => group2.label === label)) {
      return groups.find((group2) => group2.label === label);
    }
    const obj = { label };
    groups.push(obj);
    return obj;
  }
  return null;
}
function attr(options) {
  const ctx = new Context();
  if (ctx.get() == "prepare") {
    const registredAttributes = ctx.getRegistredAttributes();
    if (options.type === "array") {
      if (!options.default) {
        options.default = [];
      }
    }
    registredAttributes.push(options);
  }
  if (options.asFeaturedImage && ctx.get() === "edit") {
    const { imgUrl, thumbnail } = useSelect4((select) => {
      const { getEditedPostAttribute } = select("core/editor");
      const thumbnail2 = getEditedPostAttribute("featured_media");
      const media = thumbnail2 ? select("core").getMedia(thumbnail2) : null;
      return {
        thumbnail: thumbnail2,
        imgUrl: media?.source_url || null
      };
    }, []);
    const setThumbnail = (mediaId) => {
      const { editPost } = dispatch2("core/editor");
      editPost({ featured_media: mediaId });
    };
    return {
      get value() {
        const attributes = new Context().getAttributes();
        const value = attributes[options.key] || options.default;
        return { ...value, url: imgUrl, id: thumbnail };
      },
      set value(newValue) {
        const setAttributes = new Context().getAttributesSetter();
        if (setAttributes) {
          setAttributes({ [options.key]: newValue });
        }
        setThumbnail(newValue.id);
      },
      toString() {
        return imgUrl || "";
      }
    };
  }
  return {
    get value() {
      const attributes = new Context().getAttributes();
      const value = attributes[options.key] || options.default;
      return value;
    },
    set value(newValue) {
      const setAttributes = new Context().getAttributesSetter();
      if (setAttributes) {
        setAttributes({ [options.key]: newValue });
      }
    },
    toString() {
      const attributes = new Context().getAttributes();
      const value = attributes[options.key] || options.default;
      if (options.type === "link" && value) {
        return value?.url || "";
      }
      return value || "";
    }
  };
}
export {
  Childs,
  Context,
  EditOnly,
  Image,
  Link,
  PageMeta,
  PageTitle,
  RegisterBlock,
  SaveOnly,
  Text,
  Video,
  attr,
  boolean,
  color,
  file,
  group,
  halign,
  image,
  link2 as link,
  list,
  number,
  string,
  valign
};
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-dev-runtime.development.js:
  (**
   * @license React
   * react-jsx-dev-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.development.js:
  (**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
