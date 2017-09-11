webpackJsonp([0],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(7)(
  /* script */
  __webpack_require__(35),
  /* template */
  __webpack_require__(44),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

exports.__esModule = true;
exports["default"] = Component.exports


/***/ }),

/***/ 26:
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, setImmediate) {// vim:ts=4:sts=4:sw=4:
/*!
 *
 * Copyright 2009-2017 Kris Kowal under the terms of the MIT
 * license found at https://github.com/kriskowal/q/blob/v1/LICENSE
 *
 * With parts by Tyler Close
 * Copyright 2007-2009 Tyler Close under the terms of the MIT X license found
 * at http://www.opensource.org/licenses/mit-license.html
 * Forked at ref_send.js version: 2009-05-11
 *
 * With parts by Mark Miller
 * Copyright (C) 2011 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

(function (definition) {
    "use strict";

    // This file will function properly as a <script> tag, or a module
    // using CommonJS and NodeJS or RequireJS module formats.  In
    // Common/Node/RequireJS, the module exports the Q API and when
    // executed as a simple <script>, it creates a Q global instead.

    // Montage Require
    if (typeof bootstrap === "function") {
        bootstrap("promise", definition);

    // CommonJS
    } else if (true) {
        module.exports = definition();

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
        define(definition);

    // SES (Secure EcmaScript)
    } else if (typeof ses !== "undefined") {
        if (!ses.ok()) {
            return;
        } else {
            ses.makeQ = definition;
        }

    // <script>
    } else if (typeof window !== "undefined" || typeof self !== "undefined") {
        // Prefer window over self for add-on scripts. Use self for
        // non-windowed contexts.
        var global = typeof window !== "undefined" ? window : self;

        // Get the `window` object, save the previous Q global
        // and initialize Q as a global.
        var previousQ = global.Q;
        global.Q = definition();

        // Add a noConflict function so Q can be removed from the
        // global namespace.
        global.Q.noConflict = function () {
            global.Q = previousQ;
            return this;
        };

    } else {
        throw new Error("This environment was not anticipated by Q. Please file a bug.");
    }

})(function () {
"use strict";

var hasStacks = false;
try {
    throw new Error();
} catch (e) {
    hasStacks = !!e.stack;
}

// All code after this point will be filtered from stack traces reported
// by Q.
var qStartingLine = captureLine();
var qFileName;

// shims

// used for fallback in "allResolved"
var noop = function () {};

// Use the fastest possible means to execute a task in a future turn
// of the event loop.
var nextTick =(function () {
    // linked list of tasks (single, with head node)
    var head = {task: void 0, next: null};
    var tail = head;
    var flushing = false;
    var requestTick = void 0;
    var isNodeJS = false;
    // queue for late tasks, used by unhandled rejection tracking
    var laterQueue = [];

    function flush() {
        /* jshint loopfunc: true */
        var task, domain;

        while (head.next) {
            head = head.next;
            task = head.task;
            head.task = void 0;
            domain = head.domain;

            if (domain) {
                head.domain = void 0;
                domain.enter();
            }
            runSingle(task, domain);

        }
        while (laterQueue.length) {
            task = laterQueue.pop();
            runSingle(task);
        }
        flushing = false;
    }
    // runs a single function in the async queue
    function runSingle(task, domain) {
        try {
            task();

        } catch (e) {
            if (isNodeJS) {
                // In node, uncaught exceptions are considered fatal errors.
                // Re-throw them synchronously to interrupt flushing!

                // Ensure continuation if the uncaught exception is suppressed
                // listening "uncaughtException" events (as domains does).
                // Continue in next event to avoid tick recursion.
                if (domain) {
                    domain.exit();
                }
                setTimeout(flush, 0);
                if (domain) {
                    domain.enter();
                }

                throw e;

            } else {
                // In browsers, uncaught exceptions are not fatal.
                // Re-throw them asynchronously to avoid slow-downs.
                setTimeout(function () {
                    throw e;
                }, 0);
            }
        }

        if (domain) {
            domain.exit();
        }
    }

    nextTick = function (task) {
        tail = tail.next = {
            task: task,
            domain: isNodeJS && process.domain,
            next: null
        };

        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };

    if (typeof process === "object" &&
        process.toString() === "[object process]" && process.nextTick) {
        // Ensure Q is in a real Node environment, with a `process.nextTick`.
        // To see through fake Node environments:
        // * Mocha test runner - exposes a `process` global without a `nextTick`
        // * Browserify - exposes a `process.nexTick` function that uses
        //   `setTimeout`. In this case `setImmediate` is preferred because
        //    it is faster. Browserify's `process.toString()` yields
        //   "[object Object]", while in a real Node environment
        //   `process.toString()` yields "[object process]".
        isNodeJS = true;

        requestTick = function () {
            process.nextTick(flush);
        };

    } else if (typeof setImmediate === "function") {
        // In IE10, Node.js 0.9+, or https://github.com/NobleJS/setImmediate
        if (typeof window !== "undefined") {
            requestTick = setImmediate.bind(window, flush);
        } else {
            requestTick = function () {
                setImmediate(flush);
            };
        }

    } else if (typeof MessageChannel !== "undefined") {
        // modern browsers
        // http://www.nonblocking.io/2011/06/windownexttick.html
        var channel = new MessageChannel();
        // At least Safari Version 6.0.5 (8536.30.1) intermittently cannot create
        // working message ports the first time a page loads.
        channel.port1.onmessage = function () {
            requestTick = requestPortTick;
            channel.port1.onmessage = flush;
            flush();
        };
        var requestPortTick = function () {
            // Opera requires us to provide a message payload, regardless of
            // whether we use it.
            channel.port2.postMessage(0);
        };
        requestTick = function () {
            setTimeout(flush, 0);
            requestPortTick();
        };

    } else {
        // old browsers
        requestTick = function () {
            setTimeout(flush, 0);
        };
    }
    // runs a task after all other tasks have been run
    // this is useful for unhandled rejection tracking that needs to happen
    // after all `then`d tasks have been run.
    nextTick.runAfter = function (task) {
        laterQueue.push(task);
        if (!flushing) {
            flushing = true;
            requestTick();
        }
    };
    return nextTick;
})();

// Attempt to make generics safe in the face of downstream
// modifications.
// There is no situation where this is necessary.
// If you need a security guarantee, these primordials need to be
// deeply frozen anyway, and if you don’t need a security guarantee,
// this is just plain paranoid.
// However, this **might** have the nice side-effect of reducing the size of
// the minified code by reducing x.call() to merely x()
// See Mark Miller’s explanation of what this does.
// http://wiki.ecmascript.org/doku.php?id=conventions:safe_meta_programming
var call = Function.call;
function uncurryThis(f) {
    return function () {
        return call.apply(f, arguments);
    };
}
// This is equivalent, but slower:
// uncurryThis = Function_bind.bind(Function_bind.call);
// http://jsperf.com/uncurrythis

var array_slice = uncurryThis(Array.prototype.slice);

var array_reduce = uncurryThis(
    Array.prototype.reduce || function (callback, basis) {
        var index = 0,
            length = this.length;
        // concerning the initial value, if one is not provided
        if (arguments.length === 1) {
            // seek to the first value in the array, accounting
            // for the possibility that is is a sparse array
            do {
                if (index in this) {
                    basis = this[index++];
                    break;
                }
                if (++index >= length) {
                    throw new TypeError();
                }
            } while (1);
        }
        // reduce
        for (; index < length; index++) {
            // account for the possibility that the array is sparse
            if (index in this) {
                basis = callback(basis, this[index], index);
            }
        }
        return basis;
    }
);

var array_indexOf = uncurryThis(
    Array.prototype.indexOf || function (value) {
        // not a very good shim, but good enough for our one use of it
        for (var i = 0; i < this.length; i++) {
            if (this[i] === value) {
                return i;
            }
        }
        return -1;
    }
);

var array_map = uncurryThis(
    Array.prototype.map || function (callback, thisp) {
        var self = this;
        var collect = [];
        array_reduce(self, function (undefined, value, index) {
            collect.push(callback.call(thisp, value, index, self));
        }, void 0);
        return collect;
    }
);

var object_create = Object.create || function (prototype) {
    function Type() { }
    Type.prototype = prototype;
    return new Type();
};

var object_defineProperty = Object.defineProperty || function (obj, prop, descriptor) {
    obj[prop] = descriptor.value;
    return obj;
};

var object_hasOwnProperty = uncurryThis(Object.prototype.hasOwnProperty);

var object_keys = Object.keys || function (object) {
    var keys = [];
    for (var key in object) {
        if (object_hasOwnProperty(object, key)) {
            keys.push(key);
        }
    }
    return keys;
};

var object_toString = uncurryThis(Object.prototype.toString);

function isObject(value) {
    return value === Object(value);
}

// generator related shims

// FIXME: Remove this function once ES6 generators are in SpiderMonkey.
function isStopIteration(exception) {
    return (
        object_toString(exception) === "[object StopIteration]" ||
        exception instanceof QReturnValue
    );
}

// FIXME: Remove this helper and Q.return once ES6 generators are in
// SpiderMonkey.
var QReturnValue;
if (typeof ReturnValue !== "undefined") {
    QReturnValue = ReturnValue;
} else {
    QReturnValue = function (value) {
        this.value = value;
    };
}

// long stack traces

var STACK_JUMP_SEPARATOR = "From previous event:";

function makeStackTraceLong(error, promise) {
    // If possible, transform the error stack trace by removing Node and Q
    // cruft, then concatenating with the stack trace of `promise`. See #57.
    if (hasStacks &&
        promise.stack &&
        typeof error === "object" &&
        error !== null &&
        error.stack
    ) {
        var stacks = [];
        for (var p = promise; !!p; p = p.source) {
            if (p.stack && (!error.__minimumStackCounter__ || error.__minimumStackCounter__ > p.stackCounter)) {
                object_defineProperty(error, "__minimumStackCounter__", {value: p.stackCounter, configurable: true});
                stacks.unshift(p.stack);
            }
        }
        stacks.unshift(error.stack);

        var concatedStacks = stacks.join("\n" + STACK_JUMP_SEPARATOR + "\n");
        var stack = filterStackString(concatedStacks);
        object_defineProperty(error, "stack", {value: stack, configurable: true});
    }
}

function filterStackString(stackString) {
    var lines = stackString.split("\n");
    var desiredLines = [];
    for (var i = 0; i < lines.length; ++i) {
        var line = lines[i];

        if (!isInternalFrame(line) && !isNodeFrame(line) && line) {
            desiredLines.push(line);
        }
    }
    return desiredLines.join("\n");
}

function isNodeFrame(stackLine) {
    return stackLine.indexOf("(module.js:") !== -1 ||
           stackLine.indexOf("(node.js:") !== -1;
}

function getFileNameAndLineNumber(stackLine) {
    // Named functions: "at functionName (filename:lineNumber:columnNumber)"
    // In IE10 function name can have spaces ("Anonymous function") O_o
    var attempt1 = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(stackLine);
    if (attempt1) {
        return [attempt1[1], Number(attempt1[2])];
    }

    // Anonymous functions: "at filename:lineNumber:columnNumber"
    var attempt2 = /at ([^ ]+):(\d+):(?:\d+)$/.exec(stackLine);
    if (attempt2) {
        return [attempt2[1], Number(attempt2[2])];
    }

    // Firefox style: "function@filename:lineNumber or @filename:lineNumber"
    var attempt3 = /.*@(.+):(\d+)$/.exec(stackLine);
    if (attempt3) {
        return [attempt3[1], Number(attempt3[2])];
    }
}

function isInternalFrame(stackLine) {
    var fileNameAndLineNumber = getFileNameAndLineNumber(stackLine);

    if (!fileNameAndLineNumber) {
        return false;
    }

    var fileName = fileNameAndLineNumber[0];
    var lineNumber = fileNameAndLineNumber[1];

    return fileName === qFileName &&
        lineNumber >= qStartingLine &&
        lineNumber <= qEndingLine;
}

// discover own file name and line number range for filtering stack
// traces
function captureLine() {
    if (!hasStacks) {
        return;
    }

    try {
        throw new Error();
    } catch (e) {
        var lines = e.stack.split("\n");
        var firstLine = lines[0].indexOf("@") > 0 ? lines[1] : lines[2];
        var fileNameAndLineNumber = getFileNameAndLineNumber(firstLine);
        if (!fileNameAndLineNumber) {
            return;
        }

        qFileName = fileNameAndLineNumber[0];
        return fileNameAndLineNumber[1];
    }
}

function deprecate(callback, name, alternative) {
    return function () {
        if (typeof console !== "undefined" &&
            typeof console.warn === "function") {
            console.warn(name + " is deprecated, use " + alternative +
                         " instead.", new Error("").stack);
        }
        return callback.apply(callback, arguments);
    };
}

// end of shims
// beginning of real work

/**
 * Constructs a promise for an immediate reference, passes promises through, or
 * coerces promises from different systems.
 * @param value immediate reference or promise
 */
function Q(value) {
    // If the object is already a Promise, return it directly.  This enables
    // the resolve function to both be used to created references from objects,
    // but to tolerably coerce non-promises to promises.
    if (value instanceof Promise) {
        return value;
    }

    // assimilate thenables
    if (isPromiseAlike(value)) {
        return coerce(value);
    } else {
        return fulfill(value);
    }
}
Q.resolve = Q;

/**
 * Performs a task in a future turn of the event loop.
 * @param {Function} task
 */
Q.nextTick = nextTick;

/**
 * Controls whether or not long stack traces will be on
 */
Q.longStackSupport = false;

/**
 * The counter is used to determine the stopping point for building
 * long stack traces. In makeStackTraceLong we walk backwards through
 * the linked list of promises, only stacks which were created before
 * the rejection are concatenated.
 */
var longStackCounter = 1;

// enable long stacks if Q_DEBUG is set
if (typeof process === "object" && process && __webpack_require__.i({"NODE_ENV":"production"}) && __webpack_require__.i({"NODE_ENV":"production"}).Q_DEBUG) {
    Q.longStackSupport = true;
}

/**
 * Constructs a {promise, resolve, reject} object.
 *
 * `resolve` is a callback to invoke with a more resolved value for the
 * promise. To fulfill the promise, invoke `resolve` with any value that is
 * not a thenable. To reject the promise, invoke `resolve` with a rejected
 * thenable, or invoke `reject` with the reason directly. To resolve the
 * promise to another thenable, thus putting it in the same state, invoke
 * `resolve` with that other thenable.
 */
Q.defer = defer;
function defer() {
    // if "messages" is an "Array", that indicates that the promise has not yet
    // been resolved.  If it is "undefined", it has been resolved.  Each
    // element of the messages array is itself an array of complete arguments to
    // forward to the resolved promise.  We coerce the resolution value to a
    // promise using the `resolve` function because it handles both fully
    // non-thenable values and other thenables gracefully.
    var messages = [], progressListeners = [], resolvedPromise;

    var deferred = object_create(defer.prototype);
    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, operands) {
        var args = array_slice(arguments);
        if (messages) {
            messages.push(args);
            if (op === "when" && operands[1]) { // progress operand
                progressListeners.push(operands[1]);
            }
        } else {
            Q.nextTick(function () {
                resolvedPromise.promiseDispatch.apply(resolvedPromise, args);
            });
        }
    };

    // XXX deprecated
    promise.valueOf = function () {
        if (messages) {
            return promise;
        }
        var nearerValue = nearer(resolvedPromise);
        if (isPromise(nearerValue)) {
            resolvedPromise = nearerValue; // shorten chain
        }
        return nearerValue;
    };

    promise.inspect = function () {
        if (!resolvedPromise) {
            return { state: "pending" };
        }
        return resolvedPromise.inspect();
    };

    if (Q.longStackSupport && hasStacks) {
        try {
            throw new Error();
        } catch (e) {
            // NOTE: don't try to use `Error.captureStackTrace` or transfer the
            // accessor around; that causes memory leaks as per GH-111. Just
            // reify the stack trace as a string ASAP.
            //
            // At the same time, cut off the first line; it's always just
            // "[object Promise]\n", as per the `toString`.
            promise.stack = e.stack.substring(e.stack.indexOf("\n") + 1);
            promise.stackCounter = longStackCounter++;
        }
    }

    // NOTE: we do the checks for `resolvedPromise` in each method, instead of
    // consolidating them into `become`, since otherwise we'd create new
    // promises with the lines `become(whatever(value))`. See e.g. GH-252.

    function become(newPromise) {
        resolvedPromise = newPromise;

        if (Q.longStackSupport && hasStacks) {
            // Only hold a reference to the new promise if long stacks
            // are enabled to reduce memory usage
            promise.source = newPromise;
        }

        array_reduce(messages, function (undefined, message) {
            Q.nextTick(function () {
                newPromise.promiseDispatch.apply(newPromise, message);
            });
        }, void 0);

        messages = void 0;
        progressListeners = void 0;
    }

    deferred.promise = promise;
    deferred.resolve = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(Q(value));
    };

    deferred.fulfill = function (value) {
        if (resolvedPromise) {
            return;
        }

        become(fulfill(value));
    };
    deferred.reject = function (reason) {
        if (resolvedPromise) {
            return;
        }

        become(reject(reason));
    };
    deferred.notify = function (progress) {
        if (resolvedPromise) {
            return;
        }

        array_reduce(progressListeners, function (undefined, progressListener) {
            Q.nextTick(function () {
                progressListener(progress);
            });
        }, void 0);
    };

    return deferred;
}

/**
 * Creates a Node-style callback that will resolve or reject the deferred
 * promise.
 * @returns a nodeback
 */
defer.prototype.makeNodeResolver = function () {
    var self = this;
    return function (error, value) {
        if (error) {
            self.reject(error);
        } else if (arguments.length > 2) {
            self.resolve(array_slice(arguments, 1));
        } else {
            self.resolve(value);
        }
    };
};

/**
 * @param resolver {Function} a function that returns nothing and accepts
 * the resolve, reject, and notify functions for a deferred.
 * @returns a promise that may be resolved with the given resolve and reject
 * functions, or rejected by a thrown exception in resolver
 */
Q.Promise = promise; // ES6
Q.promise = promise;
function promise(resolver) {
    if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function.");
    }
    var deferred = defer();
    try {
        resolver(deferred.resolve, deferred.reject, deferred.notify);
    } catch (reason) {
        deferred.reject(reason);
    }
    return deferred.promise;
}

promise.race = race; // ES6
promise.all = all; // ES6
promise.reject = reject; // ES6
promise.resolve = Q; // ES6

// XXX experimental.  This method is a way to denote that a local value is
// serializable and should be immediately dispatched to a remote upon request,
// instead of passing a reference.
Q.passByCopy = function (object) {
    //freeze(object);
    //passByCopies.set(object, true);
    return object;
};

Promise.prototype.passByCopy = function () {
    //freeze(object);
    //passByCopies.set(object, true);
    return this;
};

/**
 * If two promises eventually fulfill to the same value, promises that value,
 * but otherwise rejects.
 * @param x {Any*}
 * @param y {Any*}
 * @returns {Any*} a promise for x and y if they are the same, but a rejection
 * otherwise.
 *
 */
Q.join = function (x, y) {
    return Q(x).join(y);
};

Promise.prototype.join = function (that) {
    return Q([this, that]).spread(function (x, y) {
        if (x === y) {
            // TODO: "===" should be Object.is or equiv
            return x;
        } else {
            throw new Error("Q can't join: not the same: " + x + " " + y);
        }
    });
};

/**
 * Returns a promise for the first of an array of promises to become settled.
 * @param answers {Array[Any*]} promises to race
 * @returns {Any*} the first promise to be settled
 */
Q.race = race;
function race(answerPs) {
    return promise(function (resolve, reject) {
        // Switch to this once we can assume at least ES5
        // answerPs.forEach(function (answerP) {
        //     Q(answerP).then(resolve, reject);
        // });
        // Use this in the meantime
        for (var i = 0, len = answerPs.length; i < len; i++) {
            Q(answerPs[i]).then(resolve, reject);
        }
    });
}

Promise.prototype.race = function () {
    return this.then(Q.race);
};

/**
 * Constructs a Promise with a promise descriptor object and optional fallback
 * function.  The descriptor contains methods like when(rejected), get(name),
 * set(name, value), post(name, args), and delete(name), which all
 * return either a value, a promise for a value, or a rejection.  The fallback
 * accepts the operation name, a resolver, and any further arguments that would
 * have been forwarded to the appropriate method above had a method been
 * provided with the proper name.  The API makes no guarantees about the nature
 * of the returned object, apart from that it is usable whereever promises are
 * bought and sold.
 */
Q.makePromise = Promise;
function Promise(descriptor, fallback, inspect) {
    if (fallback === void 0) {
        fallback = function (op) {
            return reject(new Error(
                "Promise does not support operation: " + op
            ));
        };
    }
    if (inspect === void 0) {
        inspect = function () {
            return {state: "unknown"};
        };
    }

    var promise = object_create(Promise.prototype);

    promise.promiseDispatch = function (resolve, op, args) {
        var result;
        try {
            if (descriptor[op]) {
                result = descriptor[op].apply(promise, args);
            } else {
                result = fallback.call(promise, op, args);
            }
        } catch (exception) {
            result = reject(exception);
        }
        if (resolve) {
            resolve(result);
        }
    };

    promise.inspect = inspect;

    // XXX deprecated `valueOf` and `exception` support
    if (inspect) {
        var inspected = inspect();
        if (inspected.state === "rejected") {
            promise.exception = inspected.reason;
        }

        promise.valueOf = function () {
            var inspected = inspect();
            if (inspected.state === "pending" ||
                inspected.state === "rejected") {
                return promise;
            }
            return inspected.value;
        };
    }

    return promise;
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.then = function (fulfilled, rejected, progressed) {
    var self = this;
    var deferred = defer();
    var done = false;   // ensure the untrusted promise makes at most a
                        // single call to one of the callbacks

    function _fulfilled(value) {
        try {
            return typeof fulfilled === "function" ? fulfilled(value) : value;
        } catch (exception) {
            return reject(exception);
        }
    }

    function _rejected(exception) {
        if (typeof rejected === "function") {
            makeStackTraceLong(exception, self);
            try {
                return rejected(exception);
            } catch (newException) {
                return reject(newException);
            }
        }
        return reject(exception);
    }

    function _progressed(value) {
        return typeof progressed === "function" ? progressed(value) : value;
    }

    Q.nextTick(function () {
        self.promiseDispatch(function (value) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_fulfilled(value));
        }, "when", [function (exception) {
            if (done) {
                return;
            }
            done = true;

            deferred.resolve(_rejected(exception));
        }]);
    });

    // Progress propagator need to be attached in the current tick.
    self.promiseDispatch(void 0, "when", [void 0, function (value) {
        var newValue;
        var threw = false;
        try {
            newValue = _progressed(value);
        } catch (e) {
            threw = true;
            if (Q.onerror) {
                Q.onerror(e);
            } else {
                throw e;
            }
        }

        if (!threw) {
            deferred.notify(newValue);
        }
    }]);

    return deferred.promise;
};

Q.tap = function (promise, callback) {
    return Q(promise).tap(callback);
};

/**
 * Works almost like "finally", but not called for rejections.
 * Original resolution value is passed through callback unaffected.
 * Callback may return a promise that will be awaited for.
 * @param {Function} callback
 * @returns {Q.Promise}
 * @example
 * doSomething()
 *   .then(...)
 *   .tap(console.log)
 *   .then(...);
 */
Promise.prototype.tap = function (callback) {
    callback = Q(callback);

    return this.then(function (value) {
        return callback.fcall(value).thenResolve(value);
    });
};

/**
 * Registers an observer on a promise.
 *
 * Guarantees:
 *
 * 1. that fulfilled and rejected will be called only once.
 * 2. that either the fulfilled callback or the rejected callback will be
 *    called, but not both.
 * 3. that fulfilled and rejected will not be called in this turn.
 *
 * @param value      promise or immediate reference to observe
 * @param fulfilled  function to be called with the fulfilled value
 * @param rejected   function to be called with the rejection exception
 * @param progressed function to be called on any progress notifications
 * @return promise for the return value from the invoked callback
 */
Q.when = when;
function when(value, fulfilled, rejected, progressed) {
    return Q(value).then(fulfilled, rejected, progressed);
}

Promise.prototype.thenResolve = function (value) {
    return this.then(function () { return value; });
};

Q.thenResolve = function (promise, value) {
    return Q(promise).thenResolve(value);
};

Promise.prototype.thenReject = function (reason) {
    return this.then(function () { throw reason; });
};

Q.thenReject = function (promise, reason) {
    return Q(promise).thenReject(reason);
};

/**
 * If an object is not a promise, it is as "near" as possible.
 * If a promise is rejected, it is as "near" as possible too.
 * If it’s a fulfilled promise, the fulfillment value is nearer.
 * If it’s a deferred promise and the deferred has been resolved, the
 * resolution is "nearer".
 * @param object
 * @returns most resolved (nearest) form of the object
 */

// XXX should we re-do this?
Q.nearer = nearer;
function nearer(value) {
    if (isPromise(value)) {
        var inspected = value.inspect();
        if (inspected.state === "fulfilled") {
            return inspected.value;
        }
    }
    return value;
}

/**
 * @returns whether the given object is a promise.
 * Otherwise it is a fulfilled value.
 */
Q.isPromise = isPromise;
function isPromise(object) {
    return object instanceof Promise;
}

Q.isPromiseAlike = isPromiseAlike;
function isPromiseAlike(object) {
    return isObject(object) && typeof object.then === "function";
}

/**
 * @returns whether the given object is a pending promise, meaning not
 * fulfilled or rejected.
 */
Q.isPending = isPending;
function isPending(object) {
    return isPromise(object) && object.inspect().state === "pending";
}

Promise.prototype.isPending = function () {
    return this.inspect().state === "pending";
};

/**
 * @returns whether the given object is a value or fulfilled
 * promise.
 */
Q.isFulfilled = isFulfilled;
function isFulfilled(object) {
    return !isPromise(object) || object.inspect().state === "fulfilled";
}

Promise.prototype.isFulfilled = function () {
    return this.inspect().state === "fulfilled";
};

/**
 * @returns whether the given object is a rejected promise.
 */
Q.isRejected = isRejected;
function isRejected(object) {
    return isPromise(object) && object.inspect().state === "rejected";
}

Promise.prototype.isRejected = function () {
    return this.inspect().state === "rejected";
};

//// BEGIN UNHANDLED REJECTION TRACKING

// This promise library consumes exceptions thrown in handlers so they can be
// handled by a subsequent promise.  The exceptions get added to this array when
// they are created, and removed when they are handled.  Note that in ES6 or
// shimmed environments, this would naturally be a `Set`.
var unhandledReasons = [];
var unhandledRejections = [];
var reportedUnhandledRejections = [];
var trackUnhandledRejections = true;

function resetUnhandledRejections() {
    unhandledReasons.length = 0;
    unhandledRejections.length = 0;

    if (!trackUnhandledRejections) {
        trackUnhandledRejections = true;
    }
}

function trackRejection(promise, reason) {
    if (!trackUnhandledRejections) {
        return;
    }
    if (typeof process === "object" && typeof process.emit === "function") {
        Q.nextTick.runAfter(function () {
            if (array_indexOf(unhandledRejections, promise) !== -1) {
                process.emit("unhandledRejection", reason, promise);
                reportedUnhandledRejections.push(promise);
            }
        });
    }

    unhandledRejections.push(promise);
    if (reason && typeof reason.stack !== "undefined") {
        unhandledReasons.push(reason.stack);
    } else {
        unhandledReasons.push("(no stack) " + reason);
    }
}

function untrackRejection(promise) {
    if (!trackUnhandledRejections) {
        return;
    }

    var at = array_indexOf(unhandledRejections, promise);
    if (at !== -1) {
        if (typeof process === "object" && typeof process.emit === "function") {
            Q.nextTick.runAfter(function () {
                var atReport = array_indexOf(reportedUnhandledRejections, promise);
                if (atReport !== -1) {
                    process.emit("rejectionHandled", unhandledReasons[at], promise);
                    reportedUnhandledRejections.splice(atReport, 1);
                }
            });
        }
        unhandledRejections.splice(at, 1);
        unhandledReasons.splice(at, 1);
    }
}

Q.resetUnhandledRejections = resetUnhandledRejections;

Q.getUnhandledReasons = function () {
    // Make a copy so that consumers can't interfere with our internal state.
    return unhandledReasons.slice();
};

Q.stopUnhandledRejectionTracking = function () {
    resetUnhandledRejections();
    trackUnhandledRejections = false;
};

resetUnhandledRejections();

//// END UNHANDLED REJECTION TRACKING

/**
 * Constructs a rejected promise.
 * @param reason value describing the failure
 */
Q.reject = reject;
function reject(reason) {
    var rejection = Promise({
        "when": function (rejected) {
            // note that the error has been handled
            if (rejected) {
                untrackRejection(this);
            }
            return rejected ? rejected(reason) : this;
        }
    }, function fallback() {
        return this;
    }, function inspect() {
        return { state: "rejected", reason: reason };
    });

    // Note that the reason has not been handled.
    trackRejection(rejection, reason);

    return rejection;
}

/**
 * Constructs a fulfilled promise for an immediate reference.
 * @param value immediate reference
 */
Q.fulfill = fulfill;
function fulfill(value) {
    return Promise({
        "when": function () {
            return value;
        },
        "get": function (name) {
            return value[name];
        },
        "set": function (name, rhs) {
            value[name] = rhs;
        },
        "delete": function (name) {
            delete value[name];
        },
        "post": function (name, args) {
            // Mark Miller proposes that post with no name should apply a
            // promised function.
            if (name === null || name === void 0) {
                return value.apply(void 0, args);
            } else {
                return value[name].apply(value, args);
            }
        },
        "apply": function (thisp, args) {
            return value.apply(thisp, args);
        },
        "keys": function () {
            return object_keys(value);
        }
    }, void 0, function inspect() {
        return { state: "fulfilled", value: value };
    });
}

/**
 * Converts thenables to Q promises.
 * @param promise thenable promise
 * @returns a Q promise
 */
function coerce(promise) {
    var deferred = defer();
    Q.nextTick(function () {
        try {
            promise.then(deferred.resolve, deferred.reject, deferred.notify);
        } catch (exception) {
            deferred.reject(exception);
        }
    });
    return deferred.promise;
}

/**
 * Annotates an object such that it will never be
 * transferred away from this process over any promise
 * communication channel.
 * @param object
 * @returns promise a wrapping of that object that
 * additionally responds to the "isDef" message
 * without a rejection.
 */
Q.master = master;
function master(object) {
    return Promise({
        "isDef": function () {}
    }, function fallback(op, args) {
        return dispatch(object, op, args);
    }, function () {
        return Q(object).inspect();
    });
}

/**
 * Spreads the values of a promised array of arguments into the
 * fulfillment callback.
 * @param fulfilled callback that receives variadic arguments from the
 * promised array
 * @param rejected callback that receives the exception if the promise
 * is rejected.
 * @returns a promise for the return value or thrown exception of
 * either callback.
 */
Q.spread = spread;
function spread(value, fulfilled, rejected) {
    return Q(value).spread(fulfilled, rejected);
}

Promise.prototype.spread = function (fulfilled, rejected) {
    return this.all().then(function (array) {
        return fulfilled.apply(void 0, array);
    }, rejected);
};

/**
 * The async function is a decorator for generator functions, turning
 * them into asynchronous generators.  Although generators are only part
 * of the newest ECMAScript 6 drafts, this code does not cause syntax
 * errors in older engines.  This code should continue to work and will
 * in fact improve over time as the language improves.
 *
 * ES6 generators are currently part of V8 version 3.19 with the
 * --harmony-generators runtime flag enabled.  SpiderMonkey has had them
 * for longer, but under an older Python-inspired form.  This function
 * works on both kinds of generators.
 *
 * Decorates a generator function such that:
 *  - it may yield promises
 *  - execution will continue when that promise is fulfilled
 *  - the value of the yield expression will be the fulfilled value
 *  - it returns a promise for the return value (when the generator
 *    stops iterating)
 *  - the decorated function returns a promise for the return value
 *    of the generator or the first rejected promise among those
 *    yielded.
 *  - if an error is thrown in the generator, it propagates through
 *    every following yield until it is caught, or until it escapes
 *    the generator function altogether, and is translated into a
 *    rejection for the promise returned by the decorated generator.
 */
Q.async = async;
function async(makeGenerator) {
    return function () {
        // when verb is "send", arg is a value
        // when verb is "throw", arg is an exception
        function continuer(verb, arg) {
            var result;

            // Until V8 3.19 / Chromium 29 is released, SpiderMonkey is the only
            // engine that has a deployed base of browsers that support generators.
            // However, SM's generators use the Python-inspired semantics of
            // outdated ES6 drafts.  We would like to support ES6, but we'd also
            // like to make it possible to use generators in deployed browsers, so
            // we also support Python-style generators.  At some point we can remove
            // this block.

            if (typeof StopIteration === "undefined") {
                // ES6 Generators
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    return reject(exception);
                }
                if (result.done) {
                    return Q(result.value);
                } else {
                    return when(result.value, callback, errback);
                }
            } else {
                // SpiderMonkey Generators
                // FIXME: Remove this case when SM does ES6 generators.
                try {
                    result = generator[verb](arg);
                } catch (exception) {
                    if (isStopIteration(exception)) {
                        return Q(exception.value);
                    } else {
                        return reject(exception);
                    }
                }
                return when(result, callback, errback);
            }
        }
        var generator = makeGenerator.apply(this, arguments);
        var callback = continuer.bind(continuer, "next");
        var errback = continuer.bind(continuer, "throw");
        return callback();
    };
}

/**
 * The spawn function is a small wrapper around async that immediately
 * calls the generator and also ends the promise chain, so that any
 * unhandled errors are thrown instead of forwarded to the error
 * handler. This is useful because it's extremely common to run
 * generators at the top-level to work with libraries.
 */
Q.spawn = spawn;
function spawn(makeGenerator) {
    Q.done(Q.async(makeGenerator)());
}

// FIXME: Remove this interface once ES6 generators are in SpiderMonkey.
/**
 * Throws a ReturnValue exception to stop an asynchronous generator.
 *
 * This interface is a stop-gap measure to support generator return
 * values in older Firefox/SpiderMonkey.  In browsers that support ES6
 * generators like Chromium 29, just use "return" in your generator
 * functions.
 *
 * @param value the return value for the surrounding generator
 * @throws ReturnValue exception with the value.
 * @example
 * // ES6 style
 * Q.async(function* () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      return foo + bar;
 * })
 * // Older SpiderMonkey style
 * Q.async(function () {
 *      var foo = yield getFooPromise();
 *      var bar = yield getBarPromise();
 *      Q.return(foo + bar);
 * })
 */
Q["return"] = _return;
function _return(value) {
    throw new QReturnValue(value);
}

/**
 * The promised function decorator ensures that any promise arguments
 * are settled and passed as values (`this` is also settled and passed
 * as a value).  It will also ensure that the result of a function is
 * always a promise.
 *
 * @example
 * var add = Q.promised(function (a, b) {
 *     return a + b;
 * });
 * add(Q(a), Q(B));
 *
 * @param {function} callback The function to decorate
 * @returns {function} a function that has been decorated.
 */
Q.promised = promised;
function promised(callback) {
    return function () {
        return spread([this, all(arguments)], function (self, args) {
            return callback.apply(self, args);
        });
    };
}

/**
 * sends a message to a value in a future turn
 * @param object* the recipient
 * @param op the name of the message operation, e.g., "when",
 * @param args further arguments to be forwarded to the operation
 * @returns result {Promise} a promise for the result of the operation
 */
Q.dispatch = dispatch;
function dispatch(object, op, args) {
    return Q(object).dispatch(op, args);
}

Promise.prototype.dispatch = function (op, args) {
    var self = this;
    var deferred = defer();
    Q.nextTick(function () {
        self.promiseDispatch(deferred.resolve, op, args);
    });
    return deferred.promise;
};

/**
 * Gets the value of a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to get
 * @return promise for the property value
 */
Q.get = function (object, key) {
    return Q(object).dispatch("get", [key]);
};

Promise.prototype.get = function (key) {
    return this.dispatch("get", [key]);
};

/**
 * Sets the value of a property in a future turn.
 * @param object    promise or immediate reference for object object
 * @param name      name of property to set
 * @param value     new value of property
 * @return promise for the return value
 */
Q.set = function (object, key, value) {
    return Q(object).dispatch("set", [key, value]);
};

Promise.prototype.set = function (key, value) {
    return this.dispatch("set", [key, value]);
};

/**
 * Deletes a property in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of property to delete
 * @return promise for the return value
 */
Q.del = // XXX legacy
Q["delete"] = function (object, key) {
    return Q(object).dispatch("delete", [key]);
};

Promise.prototype.del = // XXX legacy
Promise.prototype["delete"] = function (key) {
    return this.dispatch("delete", [key]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param value     a value to post, typically an array of
 *                  invocation arguments for promises that
 *                  are ultimately backed with `resolve` values,
 *                  as opposed to those backed with URLs
 *                  wherein the posted value can be any
 *                  JSON serializable object.
 * @return promise for the return value
 */
// bound locally because it is used by other methods
Q.mapply = // XXX As proposed by "Redsandro"
Q.post = function (object, name, args) {
    return Q(object).dispatch("post", [name, args]);
};

Promise.prototype.mapply = // XXX As proposed by "Redsandro"
Promise.prototype.post = function (name, args) {
    return this.dispatch("post", [name, args]);
};

/**
 * Invokes a method in a future turn.
 * @param object    promise or immediate reference for target object
 * @param name      name of method to invoke
 * @param ...args   array of invocation arguments
 * @return promise for the return value
 */
Q.send = // XXX Mark Miller's proposed parlance
Q.mcall = // XXX As proposed by "Redsandro"
Q.invoke = function (object, name /*...args*/) {
    return Q(object).dispatch("post", [name, array_slice(arguments, 2)]);
};

Promise.prototype.send = // XXX Mark Miller's proposed parlance
Promise.prototype.mcall = // XXX As proposed by "Redsandro"
Promise.prototype.invoke = function (name /*...args*/) {
    return this.dispatch("post", [name, array_slice(arguments, 1)]);
};

/**
 * Applies the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param args      array of application arguments
 */
Q.fapply = function (object, args) {
    return Q(object).dispatch("apply", [void 0, args]);
};

Promise.prototype.fapply = function (args) {
    return this.dispatch("apply", [void 0, args]);
};

/**
 * Calls the promised function in a future turn.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q["try"] =
Q.fcall = function (object /* ...args*/) {
    return Q(object).dispatch("apply", [void 0, array_slice(arguments, 1)]);
};

Promise.prototype.fcall = function (/*...args*/) {
    return this.dispatch("apply", [void 0, array_slice(arguments)]);
};

/**
 * Binds the promised function, transforming return values into a fulfilled
 * promise and thrown errors into a rejected one.
 * @param object    promise or immediate reference for target function
 * @param ...args   array of application arguments
 */
Q.fbind = function (object /*...args*/) {
    var promise = Q(object);
    var args = array_slice(arguments, 1);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};
Promise.prototype.fbind = function (/*...args*/) {
    var promise = this;
    var args = array_slice(arguments);
    return function fbound() {
        return promise.dispatch("apply", [
            this,
            args.concat(array_slice(arguments))
        ]);
    };
};

/**
 * Requests the names of the owned properties of a promised
 * object in a future turn.
 * @param object    promise or immediate reference for target object
 * @return promise for the keys of the eventually settled object
 */
Q.keys = function (object) {
    return Q(object).dispatch("keys", []);
};

Promise.prototype.keys = function () {
    return this.dispatch("keys", []);
};

/**
 * Turns an array of promises into a promise for an array.  If any of
 * the promises gets rejected, the whole array is rejected immediately.
 * @param {Array*} an array (or promise for an array) of values (or
 * promises for values)
 * @returns a promise for an array of the corresponding values
 */
// By Mark Miller
// http://wiki.ecmascript.org/doku.php?id=strawman:concurrency&rev=1308776521#allfulfilled
Q.all = all;
function all(promises) {
    return when(promises, function (promises) {
        var pendingCount = 0;
        var deferred = defer();
        array_reduce(promises, function (undefined, promise, index) {
            var snapshot;
            if (
                isPromise(promise) &&
                (snapshot = promise.inspect()).state === "fulfilled"
            ) {
                promises[index] = snapshot.value;
            } else {
                ++pendingCount;
                when(
                    promise,
                    function (value) {
                        promises[index] = value;
                        if (--pendingCount === 0) {
                            deferred.resolve(promises);
                        }
                    },
                    deferred.reject,
                    function (progress) {
                        deferred.notify({ index: index, value: progress });
                    }
                );
            }
        }, void 0);
        if (pendingCount === 0) {
            deferred.resolve(promises);
        }
        return deferred.promise;
    });
}

Promise.prototype.all = function () {
    return all(this);
};

/**
 * Returns the first resolved promise of an array. Prior rejected promises are
 * ignored.  Rejects only if all promises are rejected.
 * @param {Array*} an array containing values or promises for values
 * @returns a promise fulfilled with the value of the first resolved promise,
 * or a rejected promise if all promises are rejected.
 */
Q.any = any;

function any(promises) {
    if (promises.length === 0) {
        return Q.resolve();
    }

    var deferred = Q.defer();
    var pendingCount = 0;
    array_reduce(promises, function (prev, current, index) {
        var promise = promises[index];

        pendingCount++;

        when(promise, onFulfilled, onRejected, onProgress);
        function onFulfilled(result) {
            deferred.resolve(result);
        }
        function onRejected(err) {
            pendingCount--;
            if (pendingCount === 0) {
                err.message = ("Q can't get fulfillment value from any promise, all " +
                    "promises were rejected. Last error message: " + err.message);
                deferred.reject(err);
            }
        }
        function onProgress(progress) {
            deferred.notify({
                index: index,
                value: progress
            });
        }
    }, undefined);

    return deferred.promise;
}

Promise.prototype.any = function () {
    return any(this);
};

/**
 * Waits for all promises to be settled, either fulfilled or
 * rejected.  This is distinct from `all` since that would stop
 * waiting at the first rejection.  The promise returned by
 * `allResolved` will never be rejected.
 * @param promises a promise for an array (or an array) of promises
 * (or values)
 * @return a promise for an array of promises
 */
Q.allResolved = deprecate(allResolved, "allResolved", "allSettled");
function allResolved(promises) {
    return when(promises, function (promises) {
        promises = array_map(promises, Q);
        return when(all(array_map(promises, function (promise) {
            return when(promise, noop, noop);
        })), function () {
            return promises;
        });
    });
}

Promise.prototype.allResolved = function () {
    return allResolved(this);
};

/**
 * @see Promise#allSettled
 */
Q.allSettled = allSettled;
function allSettled(promises) {
    return Q(promises).allSettled();
}

/**
 * Turns an array of promises into a promise for an array of their states (as
 * returned by `inspect`) when they have all settled.
 * @param {Array[Any*]} values an array (or promise for an array) of values (or
 * promises for values)
 * @returns {Array[State]} an array of states for the respective values.
 */
Promise.prototype.allSettled = function () {
    return this.then(function (promises) {
        return all(array_map(promises, function (promise) {
            promise = Q(promise);
            function regardless() {
                return promise.inspect();
            }
            return promise.then(regardless, regardless);
        }));
    });
};

/**
 * Captures the failure of a promise, giving an oportunity to recover
 * with a callback.  If the given promise is fulfilled, the returned
 * promise is fulfilled.
 * @param {Any*} promise for something
 * @param {Function} callback to fulfill the returned promise if the
 * given promise is rejected
 * @returns a promise for the return value of the callback
 */
Q.fail = // XXX legacy
Q["catch"] = function (object, rejected) {
    return Q(object).then(void 0, rejected);
};

Promise.prototype.fail = // XXX legacy
Promise.prototype["catch"] = function (rejected) {
    return this.then(void 0, rejected);
};

/**
 * Attaches a listener that can respond to progress notifications from a
 * promise's originating deferred. This listener receives the exact arguments
 * passed to ``deferred.notify``.
 * @param {Any*} promise for something
 * @param {Function} callback to receive any progress notifications
 * @returns the given promise, unchanged
 */
Q.progress = progress;
function progress(object, progressed) {
    return Q(object).then(void 0, void 0, progressed);
}

Promise.prototype.progress = function (progressed) {
    return this.then(void 0, void 0, progressed);
};

/**
 * Provides an opportunity to observe the settling of a promise,
 * regardless of whether the promise is fulfilled or rejected.  Forwards
 * the resolution to the returned promise when the callback is done.
 * The callback can return a promise to defer completion.
 * @param {Any*} promise
 * @param {Function} callback to observe the resolution of the given
 * promise, takes no arguments.
 * @returns a promise for the resolution of the given promise when
 * ``fin`` is done.
 */
Q.fin = // XXX legacy
Q["finally"] = function (object, callback) {
    return Q(object)["finally"](callback);
};

Promise.prototype.fin = // XXX legacy
Promise.prototype["finally"] = function (callback) {
    if (!callback || typeof callback.apply !== "function") {
        throw new Error("Q can't apply finally callback");
    }
    callback = Q(callback);
    return this.then(function (value) {
        return callback.fcall().then(function () {
            return value;
        });
    }, function (reason) {
        // TODO attempt to recycle the rejection with "this".
        return callback.fcall().then(function () {
            throw reason;
        });
    });
};

/**
 * Terminates a chain of promises, forcing rejections to be
 * thrown as exceptions.
 * @param {Any*} promise at the end of a chain of promises
 * @returns nothing
 */
Q.done = function (object, fulfilled, rejected, progress) {
    return Q(object).done(fulfilled, rejected, progress);
};

Promise.prototype.done = function (fulfilled, rejected, progress) {
    var onUnhandledError = function (error) {
        // forward to a future turn so that ``when``
        // does not catch it and turn it into a rejection.
        Q.nextTick(function () {
            makeStackTraceLong(error, promise);
            if (Q.onerror) {
                Q.onerror(error);
            } else {
                throw error;
            }
        });
    };

    // Avoid unnecessary `nextTick`ing via an unnecessary `when`.
    var promise = fulfilled || rejected || progress ?
        this.then(fulfilled, rejected, progress) :
        this;

    if (typeof process === "object" && process && process.domain) {
        onUnhandledError = process.domain.bind(onUnhandledError);
    }

    promise.then(void 0, onUnhandledError);
};

/**
 * Causes a promise to be rejected if it does not get fulfilled before
 * some milliseconds time out.
 * @param {Any*} promise
 * @param {Number} milliseconds timeout
 * @param {Any*} custom error message or Error object (optional)
 * @returns a promise for the resolution of the given promise if it is
 * fulfilled before the timeout, otherwise rejected.
 */
Q.timeout = function (object, ms, error) {
    return Q(object).timeout(ms, error);
};

Promise.prototype.timeout = function (ms, error) {
    var deferred = defer();
    var timeoutId = setTimeout(function () {
        if (!error || "string" === typeof error) {
            error = new Error(error || "Timed out after " + ms + " ms");
            error.code = "ETIMEDOUT";
        }
        deferred.reject(error);
    }, ms);

    this.then(function (value) {
        clearTimeout(timeoutId);
        deferred.resolve(value);
    }, function (exception) {
        clearTimeout(timeoutId);
        deferred.reject(exception);
    }, deferred.notify);

    return deferred.promise;
};

/**
 * Returns a promise for the given value (or promised value), some
 * milliseconds after it resolved. Passes rejections immediately.
 * @param {Any*} promise
 * @param {Number} milliseconds
 * @returns a promise for the resolution of the given promise after milliseconds
 * time has elapsed since the resolution of the given promise.
 * If the given promise rejects, that is passed immediately.
 */
Q.delay = function (object, timeout) {
    if (timeout === void 0) {
        timeout = object;
        object = void 0;
    }
    return Q(object).delay(timeout);
};

Promise.prototype.delay = function (timeout) {
    return this.then(function (value) {
        var deferred = defer();
        setTimeout(function () {
            deferred.resolve(value);
        }, timeout);
        return deferred.promise;
    });
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided as an array, and returns a promise.
 *
 *      Q.nfapply(FS.readFile, [__filename])
 *      .then(function (content) {
 *      })
 *
 */
Q.nfapply = function (callback, args) {
    return Q(callback).nfapply(args);
};

Promise.prototype.nfapply = function (args) {
    var deferred = defer();
    var nodeArgs = array_slice(args);
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Passes a continuation to a Node function, which is called with the given
 * arguments provided individually, and returns a promise.
 * @example
 * Q.nfcall(FS.readFile, __filename)
 * .then(function (content) {
 * })
 *
 */
Q.nfcall = function (callback /*...args*/) {
    var args = array_slice(arguments, 1);
    return Q(callback).nfapply(args);
};

Promise.prototype.nfcall = function (/*...args*/) {
    var nodeArgs = array_slice(arguments);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.fapply(nodeArgs).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Wraps a NodeJS continuation passing function and returns an equivalent
 * version that returns a promise.
 * @example
 * Q.nfbind(FS.readFile, __filename)("utf-8")
 * .then(console.log)
 * .done()
 */
Q.nfbind =
Q.denodeify = function (callback /*...args*/) {
    if (callback === undefined) {
        throw new Error("Q can't wrap an undefined function");
    }
    var baseArgs = array_slice(arguments, 1);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        Q(callback).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nfbind =
Promise.prototype.denodeify = function (/*...args*/) {
    var args = array_slice(arguments);
    args.unshift(this);
    return Q.denodeify.apply(void 0, args);
};

Q.nbind = function (callback, thisp /*...args*/) {
    var baseArgs = array_slice(arguments, 2);
    return function () {
        var nodeArgs = baseArgs.concat(array_slice(arguments));
        var deferred = defer();
        nodeArgs.push(deferred.makeNodeResolver());
        function bound() {
            return callback.apply(thisp, arguments);
        }
        Q(bound).fapply(nodeArgs).fail(deferred.reject);
        return deferred.promise;
    };
};

Promise.prototype.nbind = function (/*thisp, ...args*/) {
    var args = array_slice(arguments, 0);
    args.unshift(this);
    return Q.nbind.apply(void 0, args);
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback with a given array of arguments, plus a provided callback.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param {Array} args arguments to pass to the method; the callback
 * will be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nmapply = // XXX As proposed by "Redsandro"
Q.npost = function (object, name, args) {
    return Q(object).npost(name, args);
};

Promise.prototype.nmapply = // XXX As proposed by "Redsandro"
Promise.prototype.npost = function (name, args) {
    var nodeArgs = array_slice(args || []);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * Calls a method of a Node-style object that accepts a Node-style
 * callback, forwarding the given variadic arguments, plus a provided
 * callback argument.
 * @param object an object that has the named method
 * @param {String} name name of the method of object
 * @param ...args arguments to pass to the method; the callback will
 * be provided by Q and appended to these arguments.
 * @returns a promise for the value or error
 */
Q.nsend = // XXX Based on Mark Miller's proposed "send"
Q.nmcall = // XXX Based on "Redsandro's" proposal
Q.ninvoke = function (object, name /*...args*/) {
    var nodeArgs = array_slice(arguments, 2);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    Q(object).dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

Promise.prototype.nsend = // XXX Based on Mark Miller's proposed "send"
Promise.prototype.nmcall = // XXX Based on "Redsandro's" proposal
Promise.prototype.ninvoke = function (name /*...args*/) {
    var nodeArgs = array_slice(arguments, 1);
    var deferred = defer();
    nodeArgs.push(deferred.makeNodeResolver());
    this.dispatch("post", [name, nodeArgs]).fail(deferred.reject);
    return deferred.promise;
};

/**
 * If a function would like to support both Node continuation-passing-style and
 * promise-returning-style, it can end its internal promise chain with
 * `nodeify(nodeback)`, forwarding the optional nodeback argument.  If the user
 * elects to use a nodeback, the result will be sent there.  If they do not
 * pass a nodeback, they will receive the result promise.
 * @param object a result (or a promise for a result)
 * @param {Function} nodeback a Node.js-style callback
 * @returns either the promise or nothing
 */
Q.nodeify = nodeify;
function nodeify(object, nodeback) {
    return Q(object).nodeify(nodeback);
}

Promise.prototype.nodeify = function (nodeback) {
    if (nodeback) {
        this.then(function (value) {
            Q.nextTick(function () {
                nodeback(null, value);
            });
        }, function (error) {
            Q.nextTick(function () {
                nodeback(error);
            });
        });
    } else {
        return this;
    }
};

Q.noConflict = function() {
    throw new Error("Q.noConflict only works when Q is used as a global");
};

// All code before this point will be filtered from stack traces.
var qEndingLine = captureLine();

return Q;

});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(26), __webpack_require__(34).setImmediate))

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// +++
// o.js  v0.3.3
//
// o.js is a simple oData wrapper for JavaScript.
// Currently supporting the following operations:
// .get() / .post() / .put() / .delete() / .first()  / .take() / .skip() / .filter() / .orderBy() / .orderByDesc() / .count() /.search() / .select() / .any() / .ref() / .deleteRef()
//
// By Jan Hommes
// Date: 06/07/2017
// Contributors: Matteo Antony Mistretta (https://github.com/IceOnFire)
//
// --------------------
// The MIT License (MIT)
//
// Copyright (c) 2017 Jan Hommes
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// +++
; (function (root, factory) {
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(27)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory(require('q'));
    } else {
        root.o = factory(root.Q);
    }
}(this, function (Q) {
    function o(res) {
        var base = this;

        //base config object
        base.oConfig = base.oConfig || {
            endpoint: null,
            format: 'json', 	// The media format. Default is JSON.
            autoFormat: true,   // Will always append a $format=json to each query if set to true.
            version: 4, 		// currently only tested for Version 4. Most will work in version 3 as well.
            strictMode: true, 	// strict mode throws exception, non strict mode only logs them
            start: null, 		// a function which is executed on loading
            ready: null,		// a function which is executed on ready
            error: null,		// a function which is executed on error
            headers: [],		// an array of additional headers [{name:'headername',value:'headervalue'}]
            username: null, 	// the basic auth username
            password: null,		// the basic auth password
            isAsync: true,		// set this to false to enable sync requests. Only usable without basic auth
            isCors: true,       // set this to false to disable CORS
            openAjaxRequests: 0,// a counter for all open ajax request to determine that are all ready TODO: Move this out of the config
            isHashRoute: true,  // set this var to false to disable automatic #-hash setting on routes
            appending: ''		// set this value to append something to a any request. eg.: [{name:'apikey', value:'xyz'}]
        };

        // +++
        // Configuration of the oData endpoint
        //
        // endpoint: Name of the endpoint e.g. http(s)://MyDomain/ServiceName.svc
        // json: Use json, true or false (currently only json supported)
        // version: Define the oData Version. (currently only Version 3 and 4 are supported)
        // strictMode: In strict mode exceptions are thrown, else they are logged
        // start: A function which is executed on loading
        // ready: A function which is executed on finished loading
        // headers: An array of additional headers [{name:'headername',value:'headervalue'}]
        // username: The basic auth username
        // password: The basic auth password
        // isAsync: If set to false, the request are done sync. Default is true.
        // IsCors: set this to false to disable CORS
        // +++
        base.config = function (config) {
            base.oConfig = merge(base.oConfig, config);
        }

        // +++
        // indicates if a endpoint is configured
        // +++
        base.isEndpoint = function () {
            return (base.oConfig.endpoint !== null);
        }

        // +++
        // To merge x object together
        // +++
        function merge() {
            var obj = {},
                i = 0,
                il = arguments.length,
                key;
            for (; i < il; i++) {
                for (key in arguments[i]) {
                    if (arguments[i].hasOwnProperty(key)) {
                        obj[key] = arguments[i][key];
                    }
                }
            }
            return obj;
        }

        if (typeof res === 'undefined') {
            return (base);
        }
        else {
            return (new oData(res, base.oConfig));
        }
    }


    function oData(res, config) {
        var base = this;

        // --------------------+++ VARIABLES +++---------------------------

        //base internal variables
        var resource = null; 					// the main resource string
        var resourceList = []; 		    		// an array list of all resource used
        var routeList = []; 					// an array list of all routes used
        var isEndpoint = true;		    		// true if an endpoint is configured
        var currentPromise = null;	    		// if promise (Q.js) is used, we hold it here
        var overideLoading = null;      		// if set, this resource call don't use the global loading function
        var isXDomainRequest = false;   		// this is set to true in IE 9 and IE 8 to support CORS operations. No basic auth support :(
        var beforeRoutingFunc = function () { };	// A function which is called before routing.
        var internalParam = {}; 				// like base.param this object holds all parameter for a route but with the leading : for easier using in regexes
        var opertionMapping = {
            '==': 'eq',
            '===': 'eq',
            '!=': 'ne',
            '!==': 'ne',
            '>': 'gt',
            '>=': 'ge',
            '<': 'lt',
            '<=': 'le',
            '&&': 'and',
            '||': 'or',
            '!': 'not',
            //'+': 'add',
            //'-': 'sub',
            '*': 'mul',
            //'.': '/',
            '%': 'mod'
        };


        //base external variables
        base.data = [];					//holds the data after an callback
        base.inlinecount = null; 		//if inlinecount is set, here the counting is gold
        base.param = {};				//this object holds all parameter for a route
        base.oConfig = config;			//the internal config, passed over from the o function


        // ---------------------+++ PUBLICS +++----------------------------

        // +++
        // route is a little extra function to enable rest-like routing on the client side
        // +++
        base.routes = base.route = function (routes, callback) {

            //if not a array, make it one
            if (!isArray(routes)) {
                routes = [routes];
            }

            // check support
            if (typeof window === 'undefined') {
                throwEx('Routes are only supported in a browser env.');
            }

            var prevHash = window.location.hash;

            //literate over every rout and add a interval to check if the route is triggered
            for (var i = 0; i < routes.length; i++) {
                if (typeof callback !== 'undefined') {

                    //Push the routes in the routeList
                    //TODO: Is there any way to use the build an on hash update function?! Onhaschange can't be bound multiple times. Also a problem: if the hash is called a second time the route is not triggered
                    routeList.push({
                        name: routes[i],
                        route: buildRouteRegex(routes[i]),
                        callback: callback,
                        param: {},
                        interval: setInterval(function () {
                            if (window.location.hash != prevHash) {
                                prevHash = window.location.hash;
                                checkRoute(window.location.hash);
                            }
                        }, 100)
                    });
                }
                else {
                    throwEx('Routes without a callback are not supported. Please define a function like .route("YourRoute", function() { }).');
                }
            }

            //trigger on init if the hash is the same like current
            base.triggerRoute(window.location.hash);

            return (base);
        }

        // +++
        // get called beforerounting
        // +++
        base.beforeRouting = function (beforeFunc) {
            beforeRoutingFunc = beforeFunc;
            return (base);
        }

        // +++
        // indicates if a endpoint is configured
        // +++
        base.isEndpoint = function () {
            return (isEndpoint);
        }

        // +++
        // triggers a route
        // +++
        base.triggerRoute = function (hash) {
            checkRoute(hash);
            return (base);
        }

        // +++
        // returns the object with the given id
        // +++
        base.find = function (getId) {
            resource.path[resource.path.length - 1].get = getId;
            return (base);
        }

        // +++
        // returns the top x objects
        // +++
        base.top = base.take = function (takeAmount) {
            if (!isQueryThrowEx(['$top'])) {
                addQuery('$top', takeAmount, takeAmount);
            }
            return (base);
        }

        // +++
        // returns the x objects skipped by the property value
        // +++
        base.skip = function (skipAmount) {
            if (!isQueryThrowEx('$skip')) {
                addQuery('$skip', skipAmount, skipAmount);
            }
            return (base);
        }

        // +++
        // returns the first object which is found
        // +++
        base.first = function () {
            if (!isQueryThrowEx(['$top', '$first'])) {
                addQuery('$top', 1, null, '$first');
            }
            return (base);
        }

        // +++
        // add a filter
        // +++
        base.filter = base.where = function (filterStr) {
            var filterVal = checkEmpty(jsToOdata(filterStr));
            if (isQuery('$filter')) {
                appendQuery('$filter', filterVal, filterVal);
            }
            else {
                addQuery('$filter', filterVal, filterVal);
            }
            return (base);
        }

        // +++
        // Applies a any filter
        // +++
        base.any = function (res, filter) {
            var filterVal = res + '/any(x:x/' + jsToOdata(checkEmpty(filter)) + ')'
            if (isQuery('$filter')) {
                appendQuery('$filter', filterVal, filterVal);
            }
            else {
                addQuery('$filter', filterVal, filterVal);
            }
            return (base);
        }

        // +++
        // orders the result asc
        // +++
        base.orderBy = function (orderStr, direction) {
            if (typeof direction === 'undefined') {
                direction = 'asc';
            }
            if (!isQueryThrowEx('$orderby')) {
                addQuery('$orderby', checkEmpty(orderStr) + ' ' + direction);
            }
            return (base);
        }

        // +++
        // orders the result desc
        // +++
        base.orderByDesc = function (orderStr) {
            return base.orderBy(orderStr, 'desc');
        }

        // +++
        // enables select
        // +++
        base.select = function (selectStr) {
            addQuery('$select', checkEmpty(selectStr));
            return (base);
        }

        // +++
        // returns the first object which is found
        // +++
        base.count = function () {
            removeQuery('$format');
            resource.appending = '$count';
            //addQuery('$count', 'count');
            return (base);
        }

        // +++
        // adds a inline count
        // +++
        base.inlineCount = function (countOption) {
            if (base.oConfig.version == 4) {
                countOption = countOption || 'true';
                if (!isQueryThrowEx('$count')) {
                    addQuery('$count', countOption);
                }
            }
            else {
                countOption = countOption || 'allpages';
                if (!isQueryThrowEx('$inlinecount')) {
                    addQuery('$inlinecount', countOption);
                }
            }
            return (base);
        }

        // +++
        // adds a second resource to the request list to batch it
        // +++
        base.batch = function (res) {
            //add a new resource
            addNewResource(res);
            return (base);
        }

        // +++
        // returns the top x objects
        // +++
        base.expand = function (expandStr) {
            expandResource(expandStr);
            return (base);
        }

        // +++
        // set to false to disabel loading, set two functions to overide loading
        // +++
        base.loading = function (func1, func2) {
            func2 = func2 || func1;
            if (!func1)
                overideLoading = [function () { }, function () { }];
            else {
                overideLoading = [func1, func2];
            }

            return (base);
        }

        // +++
        // appends a navigation property to an existing resource
        // +++
        base.ref = base.link = function (navPath, id) {
            removeQuery('$format');
            if (resource == null || resource.get) {
                throwEx('You need to define a resource with the find() method to append an navigation property');
            }
            if (base.oConfig.version < 4) {
                resource.method = 'POST';
                resource.path.push('$link');
                resource.path.push({ resource: navPath, get: null });
            }
            else {
                resource.method = 'POST';
                resource.path.push({ resource: navPath, get: null });
                resource.appending = '$ref';
            }
            var newResource = parseUri(navPath);
            newResource.path[newResource.path.length - 1].get = id;
            var baseRes = buildQuery(newResource);
            resource.data = { '@odata.id': baseRes.substring(0, baseRes.length - 1) };
            return (base);
        }

        // +++
        // deletes a referenced entity relation
        // +++
        base.removeRef = base.deleteRef = function (navPath, id) {
            removeQuery('$format');
            if (resource == null || resource.get) {
                throwEx('You need to define a resource with the find() method to append an navigation property');
            }
            if (base.oConfig.version < 4) {
                resource.method = 'POST';
                resource.path.push('$link');
                resource.path.push({ resource: navPath, get: null });
            }
            else {
                resource.method = 'POST';
                resource.path.push({ resource: navPath, get: null });
                resource.appending = '$ref';
            }
            if (id) {
                var newResource = parseUri(navPath);
                newResource.path[newResource.path.length - 1].get = id;
                var baseRes = buildQuery(newResource);
                addQuery('$id', baseRes.substring(0, baseRes.length - 1));
            }
            //set the method
            resource.method = 'DELETE';

            return (base);
        }


        // +++
        // This function actually queries the oData service with a GET request
        // +++
        base.get = function (callback, errorCallback) {
            // init the q -> if node require a node promise -> if ES6, try ES6 promise
            var promise = initPromise();
            currentPromise = promise.defer();

            //start the request
            startRequest(callback, errorCallback, false);
            if (typeof promise !== 'undefined')
                return (currentPromise.promise);
            else
                return (base);
        }

        // +++
        // adds a dataset to the current selected resource
        // if o("Product/ProductGroup").post(...) will post a dataset to the Product resource
        // +++
        base.save = function (callback, errorCallback) {
            //if base.data is set and the user saves, we copying this resource as a Patch
            //this allows a fast edit mode after a get request
            if (resource.method === 'GET' && resource.data !== null) {
                var newResource = deepCopy(resource);
                //set the method and data
                newResource.method = 'PATCH';
                newResource.data = resource.data;
                addNewResource(newResource);
            }

            var promise = initPromise();

            //start the request with promise
            if (promise && typeof callback === 'undefined') {
                currentPromise = promise.defer();
                startRequest(callback, errorCallback, true);
                return (currentPromise.promise);
            }
            //start the request without promise
            else {
                startRequest(callback, errorCallback, true);
                return (base);
            }
        }

        // +++
        // adds a dataset to the current selected resource
        // o("Product/ProductGroup").post(...) will post a dataset to the Product resource
        // alternative you can define a new resource by using .post({data},'OtherResource');
        // +++
        base.post = function (data, res) {
            //test: remove the $format attribute
            removeQuery('$format');

            //add the resource
            if (res) {
                addNewResource(res);
            }

            //if (!resource.path[0] || !resource.path[0].get)
            //    throwEx('Bulk inserts are not supported. You need to query a unique resource with find() to post it.');

            //set the method and data
            resource.method = 'POST';
            resource.data = data;

            return (base);
        }

        // +++
        // does a update with the given Data to the current dataset with PATCH.
        // +++
        base.patch = function (data, res) {

            //add the resource
            if (res) {
                addNewResource(res);
            }

            if (!resource.path[resource.path.length - 1] || !resource.path[resource.path.length - 1].get)
                throwEx('Bulk updates are not supported. You need to query a unique resource with find() to patch/put it.');

            //set the method and data
            resource.method = 'PATCH';
            resource.data = data;

            return (base);
        }

        // +++
        // does a update with the given Data to the current dataset with PUT.
        // +++
        base.put = function (data, res) {

            //add the resource
            if (res) {
                addNewResource(res);
            }

            if (!resource.path[resource.path.length - 1] || !resource.path[resource.path.length - 1].get)
                throwEx('Bulk updates are not supported. You need to query a unique resource with find() to patch/put it.');

            //set the method and data
            resource.method = 'PUT';
            resource.data = data;

            return (base);
        }

        // +++
        // does a delete with the given Data to the current dataset
        // +++
        base.remove = base['delete'] = function (res) {

            //add the resource
            if (res)
                addNewResource(res);

            if (!resource.path[resource.path.length - 1] || !resource.path[resource.path.length - 1].get)
                throwEx('Bulk deletes are not supported. You need to query a unique resource with find() to delete it.');

            //set the method
            resource.method = 'DELETE';

            return (base);
        }

        // +++
        // Returns the current query
        // +++
        base.query = function (overrideRes) {
            return (buildQuery(overrideRes));
        }

        // +++
        // search for the degined columns
        // +++
        base.search = function (searchColumns, searchWord, searchFunc, isSupported) {

            var searchStr = buildSearchFilter(searchColumns, searchWord, searchFunc);

            if (base.oConfig.version == 4 && isSupported) {
                if (!isQueryThrowEx('$search')) {
                    addQuery('$search', searchStr, searchStr);
                }
            }
            else {
                if (!isQueryThrowEx('$filter')) {
                    addQuery('$filter', searchStr, searchStr, '$search');
                }
            }
            return (base);
        }

        // +++
        // Adds a filter to exclude data from a existing data-result
        // +++
        base.filterByList = base.exclude = function (column, data) {
            if (!isQueryThrowEx('$filter')) {
                var filterStr = buildFilterByData(column, data, opertionMapping['!='], opertionMapping['&&']);
                addQuery('$filter', checkEmpty(filterStr), filterStr);
            }
            return (base);
        }

        // +++
        // Adds a filter to include data from a existing data-result
        // +++
        base.include = function (column, data) {
            if (!isQueryThrowEx('$filter')) {
                var filterStr = buildFilterByData(column, data, opertionMapping['=='], opertionMapping['||']);
                addQuery('$filter', checkEmpty(filterStr), filterStr);
            }
            return (base);
        }

        // +++
        // Set this value to add a progress handler to the current resource
        // +++
        base.progress = function (progressFunc) {
            if (resource != null) {
                resource.progress = progressFunc;
            }
            return (base);
        }

        // ---------------------+++ INTERNALS +++----------------------------

        // +++
        // initialize a promise callback
        // +++
        function initPromise() {
            if (typeof Q !== 'undefined') {
                var p = Q;
                return (p);
            }
            else if (typeof window === 'undefined') {
                var p = __webpack_require__(27);
                return (p);
            }
            else {
                return (null);
            }
        }

        // +++
        // builds a filter by a given data object to include or exclude values on a query
        // +++
        function buildFilterByData(column, filterList, operation, combine) {
            if (isArray(filterList)) {
                var filterStr = "", arr = [];
                for (i = 0; i < filterList.length; ++i) {
                    arr[i] = '(' + column + ' ' + operation + ' ' + filterList[i][column] + ')';
                }
                filterStr = arr.join(' ' + combine + ' ');
                return (filterStr);
            }
            return ("");
        }

        // +++
        // builds a search filter
        // ++++
        function buildSearchFilter(searchColumns, searchWord, searchFunc) {
            searchFunc = searchFunc || (base.oConfig.version == 4 ? 'contains' : 'substringof');
            var searchWordSplit = searchWord.split(' ');
            var isNotExactSearch = (searchFunc === 'contains' || searchFunc === 'substringof');

            var columnArr = [];
            for (var i = 0; i < searchColumns.length; i++) {
                var wordArr = [];
                if (isNotExactSearch) {
                    for (var m = 0; m < searchWordSplit.length; m++) {
                        if (base.oConfig.version == 4) {
                            wordArr.push(searchFunc + '(' + searchColumns[i] + ',\'' + searchWordSplit[m] + '\')');
                        }
                        else {
                            wordArr.push(searchFunc + '(\'' + searchWordSplit[m] + '\',' + searchColumns[i] + ')');
                        }
                    }
                }
                else {
                    wordArr.push(searchColumns[i] + ' ' + searchFunc + ' \'' + searchWord + '\'');
                }
                columnArr.push('(' + wordArr.join(' and ') + ')');
            }
            return (columnArr.join('or'));
        }

        // +++
        // builds the URI for this query
        // +++
        function buildQuery(overrideRes) {
            var res = overrideRes || resource;

            //check if there is a resource defined
            if (!res || res.path.length === 0)
                throwEx('No resource defined. Define a resource first with o("YourResourcePath").');

            //get the full query
            var queryStr = '';
            //var isEndpoint=false;

            //add the configured endpoint
            if (isEndpoint) {
                queryStr = base.oConfig.endpoint + (endsWith(base.oConfig.endpoint, '/') ? '' : '/');
            }

            //combine the uri
            for (var i = 0; i < res.path.length; i++) {
                queryStr += res.path[i].resource;

                if (res.path[i].get) {
                    queryStr += '(' + (internalParam[res.path[i].get] || res.path[i].get) + ')';
                }

                queryStr += '/';
            }

            queryStr = queryStr.slice(0, -1);

            return (queryStr + res.appending + getQuery());
        }

        // +++
        // internal function which builds the url get parameter
        // +++
        function getQuery() {
            var tempStr = '';

            for (queryName in resource.query) {
                if (resource.query.hasOwnProperty(queryName) && resource.query[queryName] != null) {
                    tempStr += '&' + resource.queryList[resource.query[queryName]].name + '=' + strFormat(resource.queryList[resource.query[queryName]].value, internalParam);
                }
            }
            if (tempStr.length > 0)
                return ('?' + tempStr.substring(1));
            return ("");
        }

        // +++
        // checks if a route exist and starts the request and adds the parameters
        // +++
        function checkRoute(hash) {
            //literate over the complete routeList
            for (var r = 0; r < routeList.length; r++) {
                //check regex with hash
                if (routeList[r].route.regex.test(hash)) {

                    //reset the param
                    internalParam = {};
                    var param = {};

                    //get the matching data
                    var matches = routeList[r].route.regex.exec(hash);

                    //combine the propArr with the matches
                    if (typeof routeList[r].route.param !== 'undefined') {
                        var i = 1;
                        for (prop in routeList[r].route.param) {
                            internalParam[prop] = matches[i];
                            param[prop.substring(1)] = matches[i];
                            i++;
                        }
                    }
                    else {
                        for (var i = 1; i < matches.length; i++) {
                            internalParam[':' + (i - 1)] = matches[i];
                            param[(i - 1)] = matches[i];

                        }
                    }

                    //trigger the before routing func1
                    if (!beforeRoutingFunc(param)) {
                        //start the request if there is a resource defined
                        startRouteRequest(routeList[r].callback, param);
                    }

                    base.param = param;
                }
            }
        }

        // +++
        // builds a route regex function based on a given string
        // +++
        function buildRouteRegex(routeStr) {
            //build regex TODO: Can be done before and not on every iteration
            var routeRegex = routeStr;
            if (!(routeStr instanceof RegExp)) {
                //set the hash if needed
                if (base.oConfig.isHashRoute && !startsWith(routeStr, '#')) {
                    routeStr = '#' + routeStr;
                }
                //build up a regex
                var routeArr = routeStr.split('/');
                var param = {};
                for (var i = 0; i < routeArr.length; i++) {
                    if (startsWith(routeArr[i], ':')) {
                        param[routeArr[i]] = true;
                        routeArr[i] = '([\\w| |-]+|\\[\W| |-]+)';
                    }
                }
                routeRegex = new RegExp('^' + routeArr.join('/') + '$');
            }
            return ({ regex: routeRegex, param: param });
        }

        // +++
        // performs a deep copy on an object with JSON
        // +++
        function deepCopy(obj) {
            if (JSON) {
                return (JSON.parse(JSON.stringify(obj)));
            }
            else {
                throwEx('No JSON Support.');
            }
        }

        // +++
        // takes a script with javascript operations and translates it to odata
        // +++
        function jsToOdata(str) {
            //stripe out the vars
            var regexp = new RegExp("'.*?'", '');

            var matches = regexp.exec(str);
            str = str.replace(regexp, '{0}');

            for (key in opertionMapping) {
                str = str.split(key).join(' ' + opertionMapping[key] + ' ');
            }

            if (matches != null) {
                for (var i = 0; i < matches.length; i++) {
                    str = str.replace('{0}', matches[i])
                }
            }

            return (str);
        }


        // +++
        // adds an new resource to the resouce list
        // +++
        function addNewResource(res) {
            //add the predefined resource to the history resource list
            if (resource)
                resourceList.push(resource);

            //build the resource array
            if (typeof res === 'string')
                resource = parseUri(res);
            else
                resource = res;

            //add the default format
            if (!isQuery('$format') && base.oConfig.autoFormat) {
                addQuery('$format', base.oConfig.format);
            }

            //appendings
            for (var i = 0; i < base.oConfig.appending.length; i++) {
                addQuery(base.oConfig.appending[i].name, base.oConfig.appending[i].value);
            }
        }

        // +++
        // starts a request to the service
        // +++
        function startRequest(callback, errorCallback, isSave, param) {

            //check if resource is defined
            if (resource === null) {
                throwEx('You must define a resource to perform a get(), post(), put() or delete() function. Define a resource with o("YourODataResource").');
            }

            //create a CORS ajax Request
            if (resourceList.length === 0 && !isSave) {
                startAjaxReq(createCORSRequest('GET', buildQuery()), null, callback, errorCallback, false, null, param, resource.progress);
            }
            //else check if we need to make a $batch request
            else {
                //add the last resource to the history
                resourceList.push(resource);

                //build a ajax request
                var ajaxReq = createCORSRequest(resource.method, buildQuery());
                //check if we only have one request or we need to force batch because of isXDomainRequest
                if ((countMethod(['POST', 'PATCH', 'DELETE', 'PUT']) <= 1 && isSave) && !isXDomainRequest) {
                    startAjaxReq(ajaxReq, stringify(resource.data), callback, errorCallback, false,
                        [
                            { name: 'Accept', value: 'application/json' },
                            { name: 'Content-Type', value: 'application/json' }
                        ],
                        param, resourceList[resourceList.length - 1].progress);
                    // because the post/put/delete is done, we remove the resource to assume that it will not be posted again
                    removeResource(['POST', 'PATCH', 'DELETE', 'PUT']);
                }
                // do a $batch request
                else {
                    // generate a uui for this batch
                    var guid = generateUUID();

                    // build the endpoint
                    var endpoint = base.oConfig.endpoint + (endsWith(base.oConfig.endpoint, '/') ? '' : '/') + '$batch';

                    // appendings
                    for (var i = 0; i < base.oConfig.appending.length; i++) {
                        endpoint += (i === 0 ? '?' : '&') + base.oConfig.appending[i].name + '=' + base.oConfig.appending[i].value;
                    }

                    // start the request
                    startAjaxReq(createCORSRequest('POST', endpoint), buildBatchBody(guid, isSave), callback, errorCallback, true,
                        // add the necessary headers
                        [{ name: 'Content-Type', value: 'multipart/mixed; boundary=batch_' + guid }],
                        param, resourceList[resourceList.length - 1].progress);
                    if (isSave) {
                        // because the post/put/delete is done, we remove the resource to assume that it will not be posted again
                        removeResource(['POST', 'PUT', 'DELETE']);
                    }
                }
            }
        }

        // +++
        // starts a request triggered by a route
        // +++
        function startRouteRequest(callback, param) {
            if (resource.path[0].resource !== "")
                startRequest(callback, null, false, param);
            else {
                callback.call(base, param);
            }
        }

        // +++
        // This functions interprets the given resource and returns the base object. It is called by the o-return.
        // +++
        function init(res) {
            //if no resource defined, just return the base object
            if (typeof res === 'undefined')
                return (base);

            //Check if we have a endpoint and save it to the var
            if ((res.toUpperCase().indexOf('HTTP://') > -1 || res.toUpperCase().indexOf('HTTPS://') > -1)) {
                isEndpoint = false;
            }
            else {
                //check if endpoint is defined
                if (!base.oConfig.endpoint) {
                    throwEx('You can not use resource query without defining your oData endpoint. Use o().config({endpoint:yourEndpoint}) to define your oData endpoint.');
                }
            }

            //set the route name
            routeName = res;

            //add the basic resource
            addNewResource(res);

            return (base);
        }

        // +++
        // expands a resource by the given resource string (separated by ,)
        // +++
        function expandResource(expandStr) {
            if (isQuery('$expand')) {
                resource.queryList[resource.query.$expand].value += ',' + expandStr;
                resource.queryList[resource.query.$expand].original = resource.queryList[resource.query.$expand].value;
            }
            else {
                addQuery('$expand', expandStr, expandStr);
            }
        }

        // +++
        // internal function to parse the Uri and extrude the resource
        // +++
        function parseUri(resource) {
            var resSplit = resource.split('?');
            var uri = resource;
            var query = '';
            var reqObj = {
                path: [], //array of all without the base
                appending: '', // e.g. $count or $batch
                query: {}, //the query Array --> use base.queryArray
                queryList: [],
                method: 'GET',
                data: null,
                progress: null,
            };

            //query
            if (resSplit.length === 2) {
                uri = resSplit[0];
                query = resSplit[1];
                var querySplit = query.split('&');
                for (var i = 0; i < querySplit.length; i++) {
                    var pair = querySplit[i].split('=');
                    reqObj.queryList.push({ name: pair[0], value: pair[1] });
                    reqObj.query[pair[0]] = reqObj.queryList.length - 1;
                }
            }

            //uri
            var uriSplit = uri.split('/');
            for (var i = 0; i < uriSplit.length; i++) {
                if (startsWith(uriSplit[i], '$') && uriSplit[i] !== '$link') {
                    reqObj.appending = uriSplit[i];
                }
                else {
                    var index = uriSplit[i].split('(');
                    if (index.length === 1 || startsWith(uriSplit[i], '(')) {
                        reqObj.path.push({ 'resource': uriSplit[i], 'get': null });
                    }
                    else {
                        reqObj.path.push({ 'resource': index[0], 'get': index[1].substring(0, index[1].length - 1) });
                    }
                }
            }


            return (reqObj);
        }

        // +++
        // internal function to add a query parameter
        // +++
        function addQuery(queryName, queryValue, queryOriginal, queryPseudonym) {
            queryOriginal = queryOriginal || null;
            resource.queryList.push({ name: queryName, value: queryValue, original: queryOriginal });
            resource.query[queryPseudonym || queryName] = resource.queryList.length - 1;
        }

        // +++
        // internal function to append a query parameter
        // +++
        function appendQuery(queryName, queryValue, queryOriginal, appendType, queryPseudonym) {
            queryOriginal = queryOriginal || null;
            appendType = appendType || ' or ';
            queryName = queryPseudonym || queryName;
            resource.queryList[resource.query[queryName]].value = '(' + resource.queryList[resource.query[queryName]].value + ')' + appendType + '(' + queryValue + ')';
            if (queryOriginal)
                resource.queryList[resource.query[queryName]].original = resource.queryList[resource.query[queryName]].value;
        }

        // +++
        // internal function to remove a query parameter
        // +++
        function removeQuery(queryName) {
            resource.query[queryName] = null;
        }

        // +++
        // internal function to check if a query exist. Otherwith throwEx a exception
        // queries: Could be an array or an string
        // returns true if
        // +++
        function isQueryThrowEx(queries) {
            if (isQuery(queries)) {
                var queryName = queries;
                if (isArray(queryName)) {
                    queryName = queryName.join(",");
                }
                throwEx('There is already a depending query. You can not use them together/twice: ' + queryName)
                return (true);
            }
            return (false);
        }

        // +++
        // internal function to check if a query exist
        // queries:  Could be an array or an string
        // returns true if the query is already in the query array
        // +++
        function isQuery(queries) {
            var queryNames = (isArray(queries) ? queries : [queries]);
            var isIn = false;
            for (var i = 0; i < queryNames.length; i++) {
                if (resource.query.hasOwnProperty(queryNames[i])) {
                    isIn = true;
                }
            }
            return (isIn);
        }

        // +++
        // returns a  RFC4122 version 4 compliant  UUID
        // http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        // +++
        function generateUUID() {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x7 | 0x8)).toString(16);
            });
            return uuid;
        }

        // +++
        // Checks if a value is positiv and a integer
        // +++
        function checkEmpty(str, throwName) {
            if (typeof str !== 'undefined' && str !== null && str.length > 0)
                return (str);
            else
                throwEx(throwName + ': Parameter must be set.');
        }

        // +++
        // Helper function for trying to parse from this page: http://pietschsoft.com/post/2008/01/14/JavaScript-intTryParse-Equivalent
        // +++
        function tryParseInt(str, defaultValue) {
            if (typeof str === 'number')
                return (str);
            var retValue = defaultValue;
            if (str) {
                if (str.length > 0) {
                    if (!isNaN(str)) {
                        retValue = parseInt(str);
                    }
                }
            }
            return (retValue);
        }

        // +++
        // helper to count the current length of all methods in the resourceList
        // +++
        function countMethod(methodNames) {
            var count = 0;
            for (var i = 0; i < resourceList.length; i++) {
                if (methodNames.indexOf(resourceList[i].method) > -1)
                    count++;
            }
            return (count);
        }

        // +++
        // removes resources out of the resourceList by it's method name
        // +++
        function removeResource(methodNames) {
            //TODO:  Add a future detection here for .filter() can help to increase performance. This is a overall function to work in all common browsers. A better way is to use .filter(), but it is not supported by all browsers.
            var spliceArr = [];
            //search for them
            for (var i = 0; i < resourceList.length; i++) {
                if (methodNames.indexOf(resourceList[i].method) > -1)
                    spliceArr.push(i);
            }
            //and after that, remove them by reverse looping
            for (var i = spliceArr.length - 1; i >= 0; i--) {
                resourceList.splice(spliceArr[i], 1);
            }
            //pack the last resource in the current resource
            if (resourceList[0])
                resource = resourceList[0];
        }


        // +++
        // helper that stringify data. Checks for JSON support
        // +++
        function stringify(data) {
            if (JSON)
                return (JSON.stringify(data));
            else {
                //Throw exception
                //TODO: Is there any other solution for non JSON? caniuse say there is a 96.58% coverage for JSON parsing...
                throwEx('No JSON support.');
                return (data);
            }
        }

        // +++
        // Helper function to check if a given object is an array
        // +++
        function isArray(obj) {
            //fall back for older browsers
            if (typeof Array.isArray === 'undefined') {
                return (obj.toString() === '[object Array]');
            }
            //the checking
            return (Array.isArray(obj));
        }

        // +++
        // helper function to check if a string ends with something
        // +++
        function endsWith(str, suffix) {
            return (str ? str.indexOf(suffix, str.length - suffix.length) !== -1 : false);
        }

        // +++
        // helper function to check if a string starts with something
        // +++
        function startsWith(s, str) {
            return (s.indexOf(str) === 0);
        }

        // +++
        // Throws an exception
        // +++
        function throwEx(msg) {
            function oException(msg) {
                this.message = msg;
                this.name = 'o.js exception';
            }
            oException.prototype = new Error();
            if (base.oConfig.strictMode === true)
                throw new oException(msg);
            else
                console.log('o.js exception: ' + msg);
        }

        // +++
        // builds a oData $batch http body
        // +++
        function buildBatchBody(batchGuid, isSave) {
            var body = '';
            var changsetGuid = generateUUID();
            var isChangeset = false;
            if (isSave) {
                body += '--batch_' + batchGuid + '\n';
                body += 'Content-Type: multipart/mixed; boundary=changeset_' + changsetGuid + '\n\n';
            }
            //loop over the resourceList
            for (var i = 0; i < resourceList.length; i++) {
                var res = resourceList[i];
                //set the current resource to the resouceList-Element resource to enable addQuery and expand functions
                resource = res;
                //only do get if not saving is choosen
                if (res.method === 'GET' && !isSave) {
                    body += '--batch_' + batchGuid + '\n';
                    body += 'Content-Type: application/http\n';
                    body += 'Content-Transfer-Encoding: binary\n\n';
                    body += res.method + ' ' + buildQuery(res) + ' HTTP/1.1\n';
                    body += 'Host: ' + base.oConfig.endpoint + '\n\n';
                }
                //do POST if the base.save() function was called
                //TODO:  || res.method==='PUT' || res.method==='DELETE'
                else if ((res.method === 'POST' || res.method === 'PUT' || res.method === 'PATCH' || res.method === 'DELETE') && isSave) {
                    //var stringData = stringify(res.data);
                    body += '--changeset_' + changsetGuid + '\n';
                    body += 'Content-Type: application/http\n';
                    body += 'Content-Transfer-Encoding: binary\n';
                    body += 'Content-ID:' + i + 1 + '\n\n';         //This ID can be referenced $1/Customer
                    body += res.method + ' ' + buildQuery(res) + ' HTTP/1.1\n';
                    body += 'Host: ' + base.oConfig.endpoint + '\n';
                    body += 'Content-Type: application/json\n';
                    //body += 'Content-Length:' + stringData.length + '\n';
                    body += '\n' + stringify(resource.data) + '\n\n\n';
                    isChangeset = true;
                }
            }
            if (isChangeset)
                body += '--changeset_' + changsetGuid + '--\n\n';
            body += '--batch_' + batchGuid + '--';

            return (body);
        }

        // +++
        // start a ajax request. data should be null if nothing to send
        // +++
        function startAjaxReq(ajaxRequest, data, callback, errorCallback, isBatch, headers, param, progress) {

            //if start loading function is set call it
            if (base.oConfig.start && overideLoading == null) {
                base.oConfig.openAjaxRequests++;
                base.oConfig.start();
            }
            if (overideLoading && overideLoading[0]) {
                overideLoading[0](true);
            }

            //save the base element into a temp base element
            var tempBase = base;

            // for ie 9 and 8
            if (isXDomainRequest) {
                ajaxRequest.onload = function (e) {
                    ajaxRequest.readyState = 4;
                    ajaxRequest.status = 200;
                    ajaxRequest.onreadystatechange();
                };
                ajaxRequest.onerror = function (e) {
                    ajaxRequest.readyState = 0;
                    ajaxRequest.status = 400;
                    ajaxRequest.onreadystatechange();
                };
            }
            else if (typeof progress === 'function') {
                ajaxRequest.onprogress = progress;
            }

            ajaxRequest.onreadystatechange = function () {
                //check the http status
                if (ajaxRequest.readyState === 4) {
                    if (ajaxRequest.status >= 200 && ajaxRequest.status < 300) {

                        //dealing with the response
                        if (ajaxRequest.status !== 204) {
                            if (!isBatch) {
                                parseResponse(ajaxRequest.responseText, tempBase);
                                //callback.call(tempBase,tempBase.data);
                            }
                            //else, handling a $batch response
                            else {
                                var dataArray = [];
                                var regex = /({[\s\S]*?--batchresponse_)/g;
                                var result;
                                do {
                                    result = regex.exec(ajaxRequest.responseText);
                                    if (result) {
                                        parseResponse(result[0].substring(0, result[0].length - 16), tempBase);
                                        dataArray.push(tempBase.data);
                                    }

                                } while (result);

                                tempBase.data = dataArray;
                            }
                        }

                        //call the Callback (check for Q-promise)
                        if (currentPromise) {
                            currentPromise.resolve(tempBase);
                        }
                        if (typeof callback === 'function') {
                            callback.call(tempBase, tempBase.data, param);
                        }
                    }
                    else {
                        try {
                            var errResponse = ajaxRequest.responseText;

                            if (JSON && ajaxRequest.responseText != "")
                                errResponse = JSON.parse(ajaxRequest.responseText);

                            if (errResponse !== '' && errResponse['odata.error']) {
                                var errorMsg = errResponse['odata.error'].message.value + ' | HTTP Status: ' + ajaxRequest.status + ' | oData Code: ' + errResponse['odata.error'].code;
                                throwEx(errorMsg);
                            }
                            else {
                                throwEx('Request to ' + buildQuery() + ' failed with HTTP status ' + (ajaxRequest.status || 404) + '.');
                            }
                        } catch (ex) {
                            endLoading(tempBase, true, ajaxRequest.status || 404, ajaxRequest.responseText);
                            if (typeof errorCallback === 'function') {
                                errorCallback(ajaxRequest.status || 404, ex)
                            }
                            else if (currentPromise) {
                                ex.status = (ajaxRequest.status || 404);
                                currentPromise.reject(ex);
                            }
                            else {
                                throw ex;
                            }
                        }
                    }
                    //end the loading when everything is okay
                    endLoading(tempBase, false);
                }
            }

            //check if we need to preflight the request (only if basic auth and isAsync)
            if (base.oConfig.username && base.oConfig.password) {
                //ajaxRequest.withCredentials=true;
                if (isXDomainRequest) {
                    throwEx('CORS and Basic Auth is not supported for IE <= 9. Try to set isCors:false in the OData config if you do not need CORS support.');
                }
                ajaxRequest.setRequestHeader('Authorization', 'Basic ' + encodeBase64(base.oConfig.username + ':' + base.oConfig.password));
            }

            //check if not IE 9 or 8
            if (!isXDomainRequest) {
                //set headers
                if (headers) {
                    //normal headers
                    for (var i = 0; i < headers.length; i++) {
                        ajaxRequest.setRequestHeader(headers[i].name, headers[i].value);
                    }
                }

                //additional headers
                if (base.oConfig.headers.length > 0) {
                    //TODO: merge both normal and additional headers?!
                    for (var i = 0; i < base.oConfig.headers.length; i++) {
                        ajaxRequest.setRequestHeader(base.oConfig.headers[i].name, base.oConfig.headers[i].value);
                    }
                }
            }
            ajaxRequest.send(data);
        }

        //+++
        // Cancels the loading state
        //+++
        function endLoading(base, isError, status, msg) {
            if (base.oConfig.ready && overideLoading == null) {
                base.oConfig.openAjaxRequests--;
                if (base.oConfig.openAjaxRequests <= 0) {
                    base.oConfig.ready();
                }
            }

            if (overideLoading && overideLoading[1]) {
                overideLoading[1](false);
            }

            if (base.oConfig.error && isError) {
                base.oConfig.error(status, msg);
            }
        }


        // +++
        // this function parses a normal response to a JSON response
        // +++
        function parseResponse(response, tempBase) {
            var count = tryParseInt(response, -1);
            if (count !== -1) {
                tempBase.data = count;
            }
            else {
                if (JSON && response !== '') {
                    var data = JSON.parse(response);
                    if (data.hasOwnProperty('value')) {
                        if (isQuery(['$first']) && data.value.length && data.value.length <= 1) {
                            tempBase.data = data.value[0];
                        }
                        else {
                            tempBase.data = data.value;
                        }
                        if (data.hasOwnProperty('odata.count') || data.hasOwnProperty('@odata.count')) {
                            tempBase.inlinecount = data['odata.count'] || data['@odata.count'];
                        }
                    }
                    else {
                        tempBase.data = data;
                    }
                    resource.data = tempBase.data;
                }
                else {
                    tempBase.data = response;
                }
            }

        }

        // +++
        // Create the XHR object with CORS support
        // +++
        function createCORSRequest(method, url) {
            var xhr = null;

            //if no window assume node.js
            if (typeof window === 'undefined') {
                var Xhr2 = __webpack_require__(45);
                xhr = new Xhr2();
            }
            else {
                xhr = new XMLHttpRequest();
            }

            if (base.oConfig.isCors && 'withCredentials' in xhr) {
                // XHR for Chrome/Firefox/Opera/Safari.
                xhr.open(method, url, base.oConfig.isAsync);
            }
            else if (base.oConfig.isCors && typeof XDomainRequest !== 'undefined') {
                // XDomainRequest for IE.
                xhr = new XDomainRequest();
                // does not support PUT PATCH operations -> Switch to batch
                isXDomainRequest = true;
                if (method == 'GET')
                    xhr.open(method, url);
                else
                    xhr.open('POST', url);
            }
            else {
                // CORS not supported or forced
                xhr.open(method, url, base.oConfig.isAsync);
            }
            return xhr;
        }

        // +++
        // helper function to format a string with :vars
        // +++
        function strFormat() {
            var str = arguments[0];
            var para = arguments[1];
            for (var p in para) {
                var regex = new RegExp(p, 'g');
                if (typeof str === 'string')
                    str = str.replace(regex, para[p]);
            }

            return str;
        }

        //+++
        // encode a string to base64
        // +++
        function encodeBase64(str) {
            var Base64 = {

                // private property
                _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',

                // private method for encoding
                encode: function (input) {
                    var output = '';
                    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
                    var i = 0;

                    input = Base64._utf8_encode(input);

                    while (i < input.length) {

                        chr1 = input.charCodeAt(i++);
                        chr2 = input.charCodeAt(i++);
                        chr3 = input.charCodeAt(i++);

                        enc1 = chr1 >> 2;
                        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                        enc4 = chr3 & 63;

                        if (isNaN(chr2)) {
                            enc3 = enc4 = 64;
                        } else if (isNaN(chr3)) {
                            enc4 = 64;
                        }

                        output = output +
                            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

                    }

                    return output;
                },


                // private method for UTF-8 encoding
                _utf8_encode: function (string) {
                    string = string.replace(/\r\n/g, '\n');
                    var utftext = '';

                    for (var n = 0; n < string.length; n++) {

                        var c = string.charCodeAt(n);

                        if (c < 128) {
                            utftext += String.fromCharCode(c);
                        }
                        else if ((c > 127) && (c < 2048)) {
                            utftext += String.fromCharCode((c >> 6) | 192);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }
                        else {
                            utftext += String.fromCharCode((c >> 12) | 224);
                            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                            utftext += String.fromCharCode((c & 63) | 128);
                        }

                    }

                    return utftext;
                }
            }

            return (Base64.encode(str));
        }

        return (init(res));
    }

    return o;
}));


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(26)))

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(33);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_odata__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_odata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_odata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quasar__ = __webpack_require__(2);




/* harmony default export */ __webpack_exports__["default"] = (__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].extend({
    data() {
        return {
            oData: []
        };
    },
    methods: {
        getoData() {
            var _this = this;
            console.log('oData angefordert');
            // o().config({  // The default endpoint to use.
            // 	username: 'DRIL001', 	// the basic auth username
            // 	password: 'aI$G#w|Dkd',		// the basic auth password
            // });
            __WEBPACK_IMPORTED_MODULE_1_odata___default()('http://services.odata.org/V4/OData/OData.svc/Products').get(function (data) {
                __WEBPACK_IMPORTED_MODULE_2_quasar__["Toast"].create({
                    html: 'Data received',
                    icon: 'done',
                    timeout: 2500,
                    bgColor: '#1589FF'
                });
                console.log(data); //returns an array of Product data
                _this.oData = data;
                console.log(_this.oData);
            });
        }
    }
}));


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('q-layout', [_c('div', {
    staticClass: "layout-padding"
  }, [_vm._v("\n\t\tCHATTTT\n\t\t"), _c('p'), _vm._v("\n\t\tOdata test\n\t\t"), _c('p'), _vm._v(" "), _c('q-btn', {
    attrs: {
      "color": "primary"
    },
    on: {
      "click": _vm.getoData
    }
  }, [_vm._v("Get Odata")]), _vm._v(" "), _c('p'), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.oData))])], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 45:
/***/ (function(module, exports) {

module.exports = XMLHttpRequest;


/***/ })

});