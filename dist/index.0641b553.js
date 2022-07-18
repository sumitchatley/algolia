// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7Aums":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _autocomplete = require("./components/autocomplete");
var _autocompleteDefault = parcelHelpers.interopDefault(_autocomplete);
class SpencerAndWilliamsSearch {
    constructor(){
        this._initSearch();
        this._registerEvents();
    }
    _initSearch() {
        this.autocompleteDropdown = new (0, _autocompleteDefault.default)();
    }
    _registerEvents() {
        const autocomplete = document.querySelector(".autocomplete");
        const searchbox = document.querySelector("#searchbox input");
        searchbox.addEventListener("click", ()=>{
            autocomplete.style.display = "block";
        });
        searchbox.addEventListener("blur", ()=>{
            autocomplete.style.display = "none";
        });
    }
}
const app = new SpencerAndWilliamsSearch();

},{"./components/autocomplete":"4QBse","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QBse":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearch = require("algoliasearch");
var _algoliasearchDefault = parcelHelpers.interopDefault(_algoliasearch);
var _instantsearchJs = require("instantsearch.js");
var _instantsearchJsDefault = parcelHelpers.interopDefault(_instantsearchJs);
// Instant Search Widgets
var _widgets = require("instantsearch.js/es/widgets");
// Autocomplete Template
var _autocompleteProduct = require("../templates/autocomplete-product");
var _autocompleteProductDefault = parcelHelpers.interopDefault(_autocompleteProduct);
/**
 * @class Autocomplete
 * @description Instant Search class to display content in the page's autocomplete
 */ class Autocomplete {
    /**
   * @constructor
   */ constructor(){
        this._registerClient();
        this._registerWidgets();
        this._startSearch();
    }
    /**
   * @private
   * Handles creating the search client and creating an instance of instant search
   * @return {void}
   */ _registerClient() {
        this._searchClient = (0, _algoliasearchDefault.default)("B012MM9LMI", "c1b4836f95d7379a3498d891de79a200");
        this._searchInstance = (0, _instantsearchJsDefault.default)({
            indexName: "p_name",
            searchClient: this._searchClient
        });
    }
    /**
   * @private
   * Adds widgets to the Algolia instant search instance
   * @return {void}
   */ _registerWidgets() {
        this._searchInstance.addWidgets([
            (0, _widgets.configure)({
                hitsPerPage: 3
            }),
            (0, _widgets.searchBox)({
                container: "#searchbox"
            }),
            (0, _widgets.hits)({
                container: "#autocomplete-hits",
                templates: {
                    item: (0, _autocompleteProductDefault.default)
                }
            }), 
        ]);
    }
    /**
   * @private
   * Starts instant search after widgets are registered
   * @return {void}
   */ _startSearch() {
        this._searchInstance.start();
    }
}
exports.default = Autocomplete;

},{"algoliasearch":"iyQxX","instantsearch.js":"5B89y","instantsearch.js/es/widgets":"bk5Jd","../templates/autocomplete-product":"cBVy6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyQxX":[function(require,module,exports) {
"use strict";
var AlgoliaSearch = require("../../AlgoliaSearch.js");
var createAlgoliasearch = require("../createAlgoliasearch.js");
module.exports = createAlgoliasearch(AlgoliaSearch, "Browser");

},{"../../AlgoliaSearch.js":"e9qyd","../createAlgoliasearch.js":"eKeLV"}],"e9qyd":[function(require,module,exports) {
module.exports = AlgoliaSearch;
var Index = require("./Index.js");
var deprecate = require("./deprecate.js");
var deprecatedMessage = require("./deprecatedMessage.js");
var AlgoliaSearchCore = require("./AlgoliaSearchCore.js");
var inherits = require("inherits");
var errors = require("./errors");
function AlgoliaSearch() {
    AlgoliaSearchCore.apply(this, arguments);
}
inherits(AlgoliaSearch, AlgoliaSearchCore);
/*
 * Delete an index
 *
 * @param indexName the name of index to delete
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.deleteIndex = function(indexName, callback) {
    return this._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(indexName),
        hostType: "write",
        callback: callback
    });
};
/**
 * Move an existing index.
 * @param srcIndexName the name of index to copy.
 * @param dstIndexName the new index name that will contains a copy of
 * srcIndexName (destination will be overriten if it already exist).
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.moveIndex = function(srcIndexName, dstIndexName, callback) {
    var postObj = {
        operation: "move",
        destination: dstIndexName
    };
    return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(srcIndexName) + "/operation",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * Copy an existing index.
 * @param srcIndexName the name of index to copy.
 * @param dstIndexName the new index name that will contains a copy
 * of srcIndexName (destination will be overriten if it already exist).
 * @param scope an array of scopes to copy: ['settings', 'synonyms', 'rules']
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.copyIndex = function(srcIndexName, dstIndexName, scopeOrCallback, _callback) {
    var postObj = {
        operation: "copy",
        destination: dstIndexName
    };
    var callback = _callback;
    if (typeof scopeOrCallback === "function") // oops, old behaviour of third argument being a function
    callback = scopeOrCallback;
    else if (Array.isArray(scopeOrCallback) && scopeOrCallback.length > 0) postObj.scope = scopeOrCallback;
    else if (typeof scopeOrCallback !== "undefined") throw new Error("the scope given to `copyIndex` was not an array with settings, synonyms or rules");
    return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(srcIndexName) + "/operation",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * Return last log entries.
 * @param offset Specify the first entry to retrieve (0-based, 0 is the most recent log entry).
 * @param length Specify the maximum number of entries to retrieve starting
 * at offset. Maximum allowed value: 1000.
 * @param type Specify the maximum number of entries to retrieve starting
 * at offset. Maximum allowed value: 1000.
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.getLogs = function(offset, length, callback) {
    var clone = require("./clone.js");
    var params = {};
    if (typeof offset === "object") {
        // getLogs(params)
        params = clone(offset);
        callback = length;
    } else if (arguments.length === 0 || typeof offset === "function") // getLogs([cb])
    callback = offset;
    else if (arguments.length === 1 || typeof length === "function") {
        // getLogs(1, [cb)]
        callback = length;
        params.offset = offset;
    } else {
        // getLogs(1, 2, [cb])
        params.offset = offset;
        params.length = length;
    }
    if (params.offset === undefined) params.offset = 0;
    if (params.length === undefined) params.length = 10;
    return this._jsonRequest({
        method: "GET",
        url: "/1/logs?" + this._getSearchParams(params, ""),
        hostType: "read",
        callback: callback
    });
};
/*
 * List all existing indexes (paginated)
 *
 * @param page The page to retrieve, starting at 0.
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with index list
 */ AlgoliaSearch.prototype.listIndexes = function(page, callback) {
    var params = "";
    if (page === undefined || typeof page === "function") callback = page;
    else params = "?page=" + page;
    return this._jsonRequest({
        method: "GET",
        url: "/1/indexes" + params,
        hostType: "read",
        callback: callback
    });
};
/*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */ AlgoliaSearch.prototype.initIndex = function(indexName) {
    return new Index(this, indexName);
};
AlgoliaSearch.prototype.initAnalytics = function(opts) {
    // the actual require must be inside the function, when put outside then you have a cyclic dependency
    // not well resolved that ends up making the main "./index.js" (main module, the agloliasearch function)
    // export an object instead of a function
    // Other workarounds:
    // - rewrite the lib in ES6, cyclic dependencies may be better supported
    // - move initAnalytics to a property on the main module (algoliasearch.initAnalytics),
    // same as places.
    // The current API was made mostly to mimic the one made in PHP
    var createAnalyticsClient = require("./createAnalyticsClient.js");
    return createAnalyticsClient(this.applicationID, this.apiKey, opts);
};
/*
 * @deprecated use client.listApiKeys
 */ AlgoliaSearch.prototype.listUserKeys = deprecate(function(callback) {
    return this.listApiKeys(callback);
}, deprecatedMessage("client.listUserKeys()", "client.listApiKeys()"));
/*
 * List all existing api keys with their associated ACLs
 *
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with api keys list
 */ AlgoliaSearch.prototype.listApiKeys = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/keys",
        hostType: "read",
        callback: callback
    });
};
/*
 * @deprecated see client.getApiKey
 */ AlgoliaSearch.prototype.getUserKeyACL = deprecate(function(key, callback) {
    return this.getApiKey(key, callback);
}, deprecatedMessage("client.getUserKeyACL()", "client.getApiKey()"));
/*
 * Get an API key
 *
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the right API key
 */ AlgoliaSearch.prototype.getApiKey = function(key, callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/keys/" + key,
        hostType: "read",
        callback: callback
    });
};
/*
 * @deprecated see client.deleteApiKey
 */ AlgoliaSearch.prototype.deleteUserKey = deprecate(function(key, callback) {
    return this.deleteApiKey(key, callback);
}, deprecatedMessage("client.deleteUserKey()", "client.deleteApiKey()"));
/*
 * Delete an existing API key
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the date of deletion
 */ AlgoliaSearch.prototype.deleteApiKey = function(key, callback) {
    return this._jsonRequest({
        method: "DELETE",
        url: "/1/keys/" + key,
        hostType: "write",
        callback: callback
    });
};
/**
 * Restore a deleted API key
 *
 * @param {String} key - The key to restore
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the restored API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.restoreApiKey('APIKEY')
 * @see {@link https://www.algolia.com/doc/rest-api/search/#restore-api-key|Algolia REST API Documentation}
 */ AlgoliaSearch.prototype.restoreApiKey = function(key, callback) {
    return this._jsonRequest({
        method: "POST",
        url: "/1/keys/" + key + "/restore",
        hostType: "write",
        callback: callback
    });
};
/*
 @deprecated see client.addApiKey
 */ AlgoliaSearch.prototype.addUserKey = deprecate(function(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("client.addUserKey()", "client.addApiKey()"));
/*
 * Add a new global API key
 *
 * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
 *   can contains the following values:
 *     - search: allow to search (https and http)
 *     - addObject: allows to add/update an object in the index (https only)
 *     - deleteObject : allows to delete an existing object (https only)
 *     - deleteIndex : allows to delete index content (https only)
 *     - settings : allows to get index settings (https only)
 *     - editSettings : allows to change index settings (https only)
 * @param {Object} [params] - Optionnal parameters to set for the key
 * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
 * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
 * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
 * @param {string[]} params.indexes - Allowed targeted indexes for this key
 * @param {string} params.description - A description for your key
 * @param {string[]} params.referers - A list of authorized referers
 * @param {Object} params.queryParameters - Force the key to use specific query parameters
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the added API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.addApiKey(['search'], {
 *   validity: 300,
 *   maxQueriesPerIPPerHour: 2000,
 *   maxHitsPerQuery: 3,
 *   indexes: ['fruits'],
 *   description: 'Eat three fruits',
 *   referers: ['*.algolia.com'],
 *   queryParameters: {
 *     tagFilters: ['public'],
 *   }
 * })
 * @see {@link https://www.algolia.com/doc/rest_api#AddKey|Algolia REST API Documentation}
 */ AlgoliaSearch.prototype.addApiKey = function(acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: client.addApiKey(arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 1 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var postObj = {
        acl: acls
    };
    if (params) {
        postObj.validity = params.validity;
        postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        postObj.maxHitsPerQuery = params.maxHitsPerQuery;
        postObj.indexes = params.indexes;
        postObj.description = params.description;
        if (params.queryParameters) postObj.queryParameters = this._getSearchParams(params.queryParameters, "");
        postObj.referers = params.referers;
    }
    return this._jsonRequest({
        method: "POST",
        url: "/1/keys",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * @deprecated Please use client.addApiKey()
 */ AlgoliaSearch.prototype.addUserKeyWithValidity = deprecate(function(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("client.addUserKeyWithValidity()", "client.addApiKey()"));
/**
 * @deprecated Please use client.updateApiKey()
 */ AlgoliaSearch.prototype.updateUserKey = deprecate(function(key, acls, params, callback) {
    return this.updateApiKey(key, acls, params, callback);
}, deprecatedMessage("client.updateUserKey()", "client.updateApiKey()"));
/**
 * Update an existing API key
 * @param {string} key - The key to update
 * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
 *   can contains the following values:
 *     - search: allow to search (https and http)
 *     - addObject: allows to add/update an object in the index (https only)
 *     - deleteObject : allows to delete an existing object (https only)
 *     - deleteIndex : allows to delete index content (https only)
 *     - settings : allows to get index settings (https only)
 *     - editSettings : allows to change index settings (https only)
 * @param {Object} [params] - Optionnal parameters to set for the key
 * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
 * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
 * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
 * @param {string[]} params.indexes - Allowed targeted indexes for this key
 * @param {string} params.description - A description for your key
 * @param {string[]} params.referers - A list of authorized referers
 * @param {Object} params.queryParameters - Force the key to use specific query parameters
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the modified API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.updateApiKey('APIKEY', ['search'], {
 *   validity: 300,
 *   maxQueriesPerIPPerHour: 2000,
 *   maxHitsPerQuery: 3,
 *   indexes: ['fruits'],
 *   description: 'Eat three fruits',
 *   referers: ['*.algolia.com'],
 *   queryParameters: {
 *     tagFilters: ['public'],
 *   }
 * })
 * @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
 */ AlgoliaSearch.prototype.updateApiKey = function(key, acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 2 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var putObj = {
        acl: acls
    };
    if (params) {
        putObj.validity = params.validity;
        putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        putObj.maxHitsPerQuery = params.maxHitsPerQuery;
        putObj.indexes = params.indexes;
        putObj.description = params.description;
        if (params.queryParameters) putObj.queryParameters = this._getSearchParams(params.queryParameters, "");
        putObj.referers = params.referers;
    }
    return this._jsonRequest({
        method: "PUT",
        url: "/1/keys/" + key,
        body: putObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * Initialize a new batch of search queries
 * @deprecated use client.search()
 */ AlgoliaSearch.prototype.startQueriesBatch = deprecate(function startQueriesBatchDeprecated() {
    this._batch = [];
}, deprecatedMessage("client.startQueriesBatch()", "client.search()"));
/**
 * Add a search query in the batch
 * @deprecated use client.search()
 */ AlgoliaSearch.prototype.addQueryInBatch = deprecate(function addQueryInBatchDeprecated(indexName, query, args) {
    this._batch.push({
        indexName: indexName,
        query: query,
        params: args
    });
}, deprecatedMessage("client.addQueryInBatch()", "client.search()"));
/**
 * Launch the batch of queries using XMLHttpRequest.
 * @deprecated use client.search()
 */ AlgoliaSearch.prototype.sendQueriesBatch = deprecate(function sendQueriesBatchDeprecated(callback) {
    return this.search(this._batch, callback);
}, deprecatedMessage("client.sendQueriesBatch()", "client.search()"));
/**
 * Perform write operations across multiple indexes.
 *
 * To reduce the amount of time spent on network round trips,
 * you can create, update, or delete several objects in one call,
 * using the batch endpoint (all operations are done in the given order).
 *
 * Available actions:
 *   - addObject
 *   - updateObject
 *   - partialUpdateObject
 *   - partialUpdateObjectNoCreate
 *   - deleteObject
 *
 * https://www.algolia.com/doc/rest_api#Indexes
 * @param  {Object[]} operations An array of operations to perform
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.batch([{
 *   action: 'addObject',
 *   indexName: 'clients',
 *   body: {
 *     name: 'Bill'
 *   }
 * }, {
 *   action: 'udpateObject',
 *   indexName: 'fruits',
 *   body: {
 *     objectID: '29138',
 *     name: 'banana'
 *   }
 * }], cb)
 */ AlgoliaSearch.prototype.batch = function(operations, callback) {
    var isArray = require("isarray");
    var usage = "Usage: client.batch(operations[, callback])";
    if (!isArray(operations)) throw new Error(usage);
    return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/*/batch",
        body: {
            requests: operations
        },
        hostType: "write",
        callback: callback
    });
};
/**
 * Assign or Move a userID to a cluster
 *
 * @param {string} data.userID The userID to assign to a new cluster
 * @param {string} data.cluster The cluster to assign the user to
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.assignUserID({ cluster: 'c1-test', userID: 'some-user' });
 */ AlgoliaSearch.prototype.assignUserID = function(data, callback) {
    if (!data.userID || !data.cluster) throw new errors.AlgoliaSearchError("You have to provide both a userID and cluster", data);
    return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping",
        hostType: "write",
        body: {
            cluster: data.cluster
        },
        callback: callback,
        headers: {
            "x-algolia-user-id": data.userID
        }
    });
};
/**
 * Assign a array of userIDs to a cluster.
 *
 * @param {Array} data.userIDs The array of userIDs to assign to a new cluster
 * @param {string} data.cluster The cluster to assign the user to
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.assignUserIDs({ cluster: 'c1-test', userIDs: ['some-user-1', 'some-user-2'] });
 */ AlgoliaSearch.prototype.assignUserIDs = function(data, callback) {
    if (!data.userIDs || !data.cluster) throw new errors.AlgoliaSearchError("You have to provide both an array of userIDs and cluster", data);
    return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping/batch",
        hostType: "write",
        body: {
            cluster: data.cluster,
            users: data.userIDs
        },
        callback: callback
    });
};
/**
 * Get the top userIDs
 *
 * (the callback is the second argument)
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getTopUserID();
 */ AlgoliaSearch.prototype.getTopUserID = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping/top",
        hostType: "read",
        callback: callback
    });
};
/**
 * Get userID
 *
 * @param {string} data.userID The userID to get info about
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getUserID({ userID: 'some-user' });
 */ AlgoliaSearch.prototype.getUserID = function(data, callback) {
    if (!data.userID) throw new errors.AlgoliaSearchError("You have to provide a userID", {
        debugData: data
    });
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping/" + data.userID,
        hostType: "read",
        callback: callback
    });
};
/**
 * List all the clusters
 *
 * (the callback is the second argument)
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.listClusters();
 */ AlgoliaSearch.prototype.listClusters = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters",
        hostType: "read",
        callback: callback
    });
};
/**
 * List the userIDs
 *
 * (the callback is the second argument)
 *
 * @param {string} data.hitsPerPage How many hits on every page
 * @param {string} data.page The page to retrieve
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.listClusters();
 * client.listClusters({ page: 3, hitsPerPage: 30});
 */ AlgoliaSearch.prototype.listUserIDs = function(data, callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping",
        body: data,
        hostType: "read",
        callback: callback
    });
};
/**
 * Remove an userID
 *
 * @param {string} data.userID The userID to assign to a new cluster
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.removeUserID({ userID: 'some-user' });
 */ AlgoliaSearch.prototype.removeUserID = function(data, callback) {
    if (!data.userID) throw new errors.AlgoliaSearchError("You have to provide a userID", {
        debugData: data
    });
    return this._jsonRequest({
        method: "DELETE",
        url: "/1/clusters/mapping",
        hostType: "write",
        callback: callback,
        headers: {
            "x-algolia-user-id": data.userID
        }
    });
};
/**
 * Search for userIDs
 *
 * @param {string} data.cluster The cluster to target
 * @param {string} data.query The query to execute
 * @param {string} data.hitsPerPage How many hits on every page
 * @param {string} data.page The page to retrieve
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.searchUserIDs({ cluster: 'c1-test', query: 'some-user' });
 * client.searchUserIDs({
 *   cluster: "c1-test",
 *   query: "some-user",
 *   page: 3,
 *   hitsPerPage: 2
 * });
 */ AlgoliaSearch.prototype.searchUserIDs = function(data, callback) {
    return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping/search",
        body: data,
        hostType: "read",
        callback: callback
    });
};
/**
 * Set strategy for personalization
 *
 * @param {Object} data
 * @param {Object} data.eventsScoring Associate a score to an event
 * @param {Object} data.eventsScoring.<eventName> The name of the event
 * @param {Number} data.eventsScoring.<eventName>.score The score to associate to <eventName>
 * @param {String} data.eventsScoring.<eventName>.type Either "click", "conversion" or "view"
 * @param {Object} data.facetsScoring Associate a score to a facet
 * @param {Object} data.facetsScoring.<facetName> The name of the facet
 * @param {Number} data.facetsScoring.<facetName>.score The score to associate to <facetName>
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.setPersonalizationStrategy({
 *   eventsScoring: {
 *      "Add to cart": { score: 50, type: "conversion" },
 *      Purchase: { score: 100, type: "conversion" }
 *   },
 *   facetsScoring: {
 *      brand: { score: 100 },
 *      categories: { score: 10 }
 *   }
 * });
 */ AlgoliaSearch.prototype.setPersonalizationStrategy = function(data, callback) {
    return this._jsonRequest({
        method: "POST",
        url: "/1/recommendation/personalization/strategy",
        body: data,
        hostType: "write",
        callback: callback
    });
};
/**
 * Get strategy for personalization
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getPersonalizationStrategy();
 */ AlgoliaSearch.prototype.getPersonalizationStrategy = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/recommendation/personalization/strategy",
        hostType: "read",
        callback: callback
    });
};
// environment specific methods
AlgoliaSearch.prototype.destroy = notImplemented;
AlgoliaSearch.prototype.enableRateLimitForward = notImplemented;
AlgoliaSearch.prototype.disableRateLimitForward = notImplemented;
AlgoliaSearch.prototype.useSecuredAPIKey = notImplemented;
AlgoliaSearch.prototype.disableSecuredAPIKey = notImplemented;
AlgoliaSearch.prototype.generateSecuredApiKey = notImplemented;
AlgoliaSearch.prototype.getSecuredApiKeyRemainingValidity = notImplemented;
function notImplemented() {
    var message = "Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";
    throw new errors.AlgoliaSearchError(message);
}

},{"./Index.js":"fCYhk","./deprecate.js":"5Uvjk","./deprecatedMessage.js":"1AM6r","./AlgoliaSearchCore.js":"53JcR","inherits":"bRL3M","./errors":"6bEkW","./clone.js":"cxc5w","./createAnalyticsClient.js":"a11WD","isarray":"hk7XJ"}],"fCYhk":[function(require,module,exports) {
var inherits = require("inherits");
var IndexCore = require("./IndexCore.js");
var deprecate = require("./deprecate.js");
var deprecatedMessage = require("./deprecatedMessage.js");
var exitPromise = require("./exitPromise.js");
var errors = require("./errors");
var deprecateForwardToSlaves = deprecate(function() {}, deprecatedMessage("forwardToSlaves", "forwardToReplicas"));
module.exports = Index;
function Index() {
    IndexCore.apply(this, arguments);
}
inherits(Index, IndexCore);
/*
* Add an object in this index
*
* @param content contains the javascript object to add inside the index
* @param objectID (optional) an objectID you want to attribute to this object
* (if the attribute already exist the old object will be overwrite)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.addObject = function(content, objectID, callback) {
    var indexObj = this;
    if (arguments.length === 1 || typeof objectID === "function") {
        callback = objectID;
        objectID = undefined;
    }
    return this.as._jsonRequest({
        method: objectID !== undefined ? "PUT" : "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + (objectID !== undefined ? "/" + encodeURIComponent(objectID) : ""),
        body: content,
        hostType: "write",
        callback: callback
    });
};
/*
* Add several objects
*
* @param objects contains an array of objects to add
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.addObjects = function(objects, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.addObjects(arrayOfObjects[, callback])";
    if (!isArray(objects)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: []
    };
    for(var i = 0; i < objects.length; ++i){
        var request = {
            action: "addObject",
            body: objects[i]
        };
        postObj.requests.push(request);
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Update partially an object (only update attributes passed in argument)
*
* @param partialObject contains the javascript attributes to override, the
*  object must contains an objectID attribute
* @param createIfNotExists (optional) if false, avoid an automatic creation of the object
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.partialUpdateObject = function(partialObject, createIfNotExists, callback) {
    if (arguments.length === 1 || typeof createIfNotExists === "function") {
        callback = createIfNotExists;
        createIfNotExists = undefined;
    }
    var indexObj = this;
    var url = "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(partialObject.objectID) + "/partial";
    if (createIfNotExists === false) url += "?createIfNotExists=false";
    return this.as._jsonRequest({
        method: "POST",
        url: url,
        body: partialObject,
        hostType: "write",
        callback: callback
    });
};
/*
* Partially Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.partialUpdateObjects = function(objects, createIfNotExists, callback) {
    if (arguments.length === 1 || typeof createIfNotExists === "function") {
        callback = createIfNotExists;
        createIfNotExists = true;
    }
    var isArray = require("isarray");
    var usage = "Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";
    if (!isArray(objects)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: []
    };
    for(var i = 0; i < objects.length; ++i){
        var request = {
            action: createIfNotExists === true ? "partialUpdateObject" : "partialUpdateObjectNoCreate",
            objectID: objects[i].objectID,
            body: objects[i]
        };
        postObj.requests.push(request);
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Override the content of object
*
* @param object contains the javascript object to save, the object must contains an objectID attribute
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.saveObject = function(object, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(object.objectID),
        body: object,
        hostType: "write",
        callback: callback
    });
};
/*
* Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.saveObjects = function(objects, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.saveObjects(arrayOfObjects[, callback])";
    if (!isArray(objects)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: []
    };
    for(var i = 0; i < objects.length; ++i){
        var request = {
            action: "updateObject",
            objectID: objects[i].objectID,
            body: objects[i]
        };
        postObj.requests.push(request);
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Delete an object from the index
*
* @param objectID the unique identifier of object to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.deleteObject = function(objectID, callback) {
    if (typeof objectID === "function" || typeof objectID !== "string" && typeof objectID !== "number") {
        var err = new errors.AlgoliaSearchError(objectID && typeof objectID !== "function" ? "ObjectID must be a string" : "Cannot delete an object without an objectID");
        callback = objectID;
        if (typeof callback === "function") return callback(err);
        return this.as._promise.reject(err);
    }
    var indexObj = this;
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(objectID),
        hostType: "write",
        callback: callback
    });
};
/*
* Delete several objects from an index
*
* @param objectIDs contains an array of objectID to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.deleteObjects = function(objectIDs, callback) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";
    if (!isArray(objectIDs)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: map(objectIDs, function prepareRequest(objectID) {
            return {
                action: "deleteObject",
                objectID: objectID,
                body: {
                    objectID: objectID
                }
            };
        })
    };
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Delete all objects matching a query
*
* @param query the query string
* @param params the optional query parameters
* @param callback (optional) the result callback called with one argument
*  error: null or Error('message')
* @deprecated see index.deleteBy
*/ Index.prototype.deleteByQuery = deprecate(function(query, params, callback) {
    var clone = require("./clone.js");
    var map = require("./map.js");
    var indexObj = this;
    var client = indexObj.as;
    if (arguments.length === 1 || typeof params === "function") {
        callback = params;
        params = {};
    } else params = clone(params);
    params.attributesToRetrieve = "objectID";
    params.hitsPerPage = 1000;
    params.distinct = false;
    // when deleting, we should never use cache to get the
    // search results
    this.clearCache();
    // there's a problem in how we use the promise chain,
    // see how waitTask is done
    var promise = this.search(query, params).then(stopOrDelete);
    function stopOrDelete(searchContent) {
        // stop here
        if (searchContent.nbHits === 0) // return indexObj.as._request.resolve();
        return searchContent;
        // continue and do a recursive call
        var objectIDs = map(searchContent.hits, function getObjectID(object) {
            return object.objectID;
        });
        return indexObj.deleteObjects(objectIDs).then(waitTask).then(doDeleteByQuery);
    }
    function waitTask(deleteObjectsContent) {
        return indexObj.waitTask(deleteObjectsContent.taskID);
    }
    function doDeleteByQuery() {
        return indexObj.deleteByQuery(query, params);
    }
    if (!callback) return promise;
    promise.then(success, failure);
    function success() {
        exitPromise(function exit() {
            callback(null);
        }, client._setTimeout || setTimeout);
    }
    function failure(err) {
        exitPromise(function exit() {
            callback(err);
        }, client._setTimeout || setTimeout);
    }
}, deprecatedMessage("index.deleteByQuery()", "index.deleteBy()"));
/**
* Delete all objects matching a query
*
* the query parameters that can be used are:
* - filters (numeric, facet, tag)
* - geo
*
* you can not send an empty query or filters
*
* @param params the optional query parameters
* @param callback (optional) the result callback called with one argument
*  error: null or Error('message')
*/ Index.prototype.deleteBy = function(params, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/deleteByQuery",
        body: {
            params: indexObj.as._getSearchParams(params, "")
        },
        hostType: "write",
        callback: callback
    });
};
/*
* Browse all content from an index using events. Basically this will do
* .browse() -> .browseFrom -> .browseFrom -> .. until all the results are returned
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @return {EventEmitter}
* @example
* var browser = index.browseAll('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* });
*
* browser.on('result', function resultCallback(content) {
*   console.log(content.hits);
* });
*
* // if any error occurs, you get it
* browser.on('error', function(err) {
*   throw err;
* });
*
* // when you have browsed the whole index, you get this event
* browser.on('end', function() {
*   console.log('finished');
* });
*
* // at any point if you want to stop the browsing process, you can stop it manually
* // otherwise it will go on and on
* browser.stop();
*
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/ Index.prototype.browseAll = function(query, queryParameters) {
    if (typeof query === "object") {
        queryParameters = query;
        query = undefined;
    }
    var merge = require("./merge.js");
    var IndexBrowser = require("./IndexBrowser");
    var browser = new IndexBrowser();
    var client = this.as;
    var index = this;
    var params = client._getSearchParams(merge({}, queryParameters || {}, {
        query: query
    }), "");
    // start browsing
    browseLoop();
    function browseLoop(cursor) {
        if (browser._stopped) return;
        var body;
        if (cursor !== undefined) body = {
            cursor: cursor
        };
        else body = {
            params: params
        };
        client._jsonRequest({
            method: "POST",
            url: "/1/indexes/" + encodeURIComponent(index.indexName) + "/browse",
            hostType: "read",
            body: body,
            callback: browseCallback
        });
    }
    function browseCallback(err, content) {
        if (browser._stopped) return;
        if (err) {
            browser._error(err);
            return;
        }
        browser._result(content);
        // no cursor means we are finished browsing
        if (content.cursor === undefined) {
            browser._end();
            return;
        }
        browseLoop(content.cursor);
    }
    return browser;
};
/*
* Get a Typeahead.js adapter
* @param searchParams contains an object with query parameters (see search for details)
*/ Index.prototype.ttAdapter = deprecate(function(params) {
    var self = this;
    return function ttAdapter(query, syncCb, asyncCb) {
        var cb;
        if (typeof asyncCb === "function") // typeahead 0.11
        cb = asyncCb;
        else // pre typeahead 0.11
        cb = syncCb;
        self.search(query, params, function searchDone(err, content) {
            if (err) {
                cb(err);
                return;
            }
            cb(content.hits);
        });
    };
}, "ttAdapter is not necessary anymore and will be removed in the next version,\nhave a look at autocomplete.js (https://github.com/algolia/autocomplete.js)");
/*
* Wait the publication of a task on the server.
* All server task are asynchronous and you can check with this method that the task is published.
*
* @param taskID the id of the task returned by server
* @param callback the result callback with with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains the list of results
*/ Index.prototype.waitTask = function(taskID, callback) {
    // wait minimum 100ms before retrying
    var baseDelay = 100;
    // wait maximum 5s before retrying
    var maxDelay = 5000;
    var loop = 0;
    // waitTask() must be handled differently from other methods,
    // it's a recursive method using a timeout
    var indexObj = this;
    var client = indexObj.as;
    var promise = retryLoop();
    function retryLoop() {
        return client._jsonRequest({
            method: "GET",
            hostType: "read",
            url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/task/" + taskID
        }).then(function success(content) {
            loop++;
            var delay = baseDelay * loop * loop;
            if (delay > maxDelay) delay = maxDelay;
            if (content.status !== "published") return client._promise.delay(delay).then(retryLoop);
            return content;
        });
    }
    if (!callback) return promise;
    promise.then(successCb, failureCb);
    function successCb(content) {
        exitPromise(function exit() {
            callback(null, content);
        }, client._setTimeout || setTimeout);
    }
    function failureCb(err) {
        exitPromise(function exit() {
            callback(err);
        }, client._setTimeout || setTimeout);
    }
};
/*
* This function deletes the index content. Settings and index specific API keys are kept untouched.
*
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occurred
*/ Index.prototype.clearIndex = function(callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/clear",
        hostType: "write",
        callback: callback
    });
};
/*
* Get settings of this index
*
* @param opts an object of options to add
* @param opts.advanced get more settings like nbShards (useful for Enterprise)
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occurred
*/ Index.prototype.getSettings = function(opts, callback) {
    if (arguments.length === 1 && typeof opts === "function") {
        callback = opts;
        opts = {};
    }
    opts = opts || {};
    var indexName = encodeURIComponent(this.indexName);
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + indexName + "/settings?getVersion=2" + (opts.advanced ? "&advanced=" + opts.advanced : ""),
        hostType: "read",
        callback: callback
    });
};
Index.prototype.searchSynonyms = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    } else if (params === undefined) params = {};
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/search",
        body: params,
        hostType: "read",
        callback: callback
    });
};
function exportData(method, _hitsPerPage, callback) {
    function search(page, _previous) {
        var options = {
            page: page || 0,
            hitsPerPage: _hitsPerPage || 100
        };
        var previous = _previous || [];
        return method(options).then(function(result) {
            var hits = result.hits;
            var nbHits = result.nbHits;
            var current = hits.map(function(s) {
                delete s._highlightResult;
                return s;
            });
            var synonyms = previous.concat(current);
            if (synonyms.length < nbHits) return search(options.page + 1, synonyms);
            return synonyms;
        });
    }
    return search().then(function(data) {
        if (typeof callback === "function") {
            callback(data);
            return undefined;
        }
        return data;
    });
}
/**
 * Retrieve all the synonyms in an index
 * @param [number=100] hitsPerPage The amount of synonyms to retrieve per batch
 * @param [function] callback will be called after all synonyms are retrieved
 */ Index.prototype.exportSynonyms = function(hitsPerPage, callback) {
    return exportData(this.searchSynonyms.bind(this), hitsPerPage, callback);
};
Index.prototype.saveSynonym = function(synonym, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(synonym.objectID) + "?forwardToReplicas=" + forwardToReplicas,
        body: synonym,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.getSynonym = function(objectID, callback) {
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(objectID),
        hostType: "read",
        callback: callback
    });
};
Index.prototype.deleteSynonym = function(objectID, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(objectID) + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.clearSynonyms = function(opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/clear" + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.batchSynonyms = function(synonyms, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/batch" + "?forwardToReplicas=" + forwardToReplicas + "&replaceExistingSynonyms=" + (opts.replaceExistingSynonyms ? "true" : "false"),
        hostType: "write",
        body: synonyms,
        callback: callback
    });
};
Index.prototype.searchRules = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    } else if (params === undefined) params = {};
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/search",
        body: params,
        hostType: "read",
        callback: callback
    });
};
/**
 * Retrieve all the query rules in an index
 * @param [number=100] hitsPerPage The amount of query rules to retrieve per batch
 * @param [function] callback will be called after all query rules are retrieved
 *  error: null or Error('message')
 */ Index.prototype.exportRules = function(hitsPerPage, callback) {
    return exportData(this.searchRules.bind(this), hitsPerPage, callback);
};
Index.prototype.saveRule = function(rule, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (!rule.objectID) throw new errors.AlgoliaSearchError("Missing or empty objectID field for rule");
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(rule.objectID) + "?forwardToReplicas=" + forwardToReplicas,
        body: rule,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.getRule = function(objectID, callback) {
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(objectID),
        hostType: "read",
        callback: callback
    });
};
Index.prototype.deleteRule = function(objectID, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(objectID) + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.clearRules = function(opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/clear" + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.batchRules = function(rules, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/batch" + "?forwardToReplicas=" + forwardToReplicas + "&clearExistingRules=" + (opts.clearExistingRules === true ? "true" : "false"),
        hostType: "write",
        body: rules,
        callback: callback
    });
};
Index.prototype.exists = function(callback) {
    var result = this.getSettings().then(function() {
        return true;
    }).catch(function(err) {
        if (err instanceof errors.AlgoliaSearchError && err.statusCode === 404) return false;
        throw err;
    });
    if (typeof callback !== "function") return result;
    result.then(function(res) {
        callback(null, res);
    }).catch(function(err) {
        callback(err);
    });
};
Index.prototype.findObject = function(findCallback, requestOptions, callback) {
    requestOptions = requestOptions === undefined ? {} : requestOptions;
    var paginate = requestOptions.paginate !== undefined ? requestOptions.paginate : true;
    var query = requestOptions.query !== undefined ? requestOptions.query : "";
    var that = this;
    var page = 0;
    var paginateLoop = function() {
        requestOptions.page = page;
        return that.search(query, requestOptions).then(function(result) {
            var hits = result.hits;
            for(var position = 0; position < hits.length; position++){
                var hit = hits[position];
                if (findCallback(hit)) return {
                    object: hit,
                    position: position,
                    page: page
                };
            }
            page += 1;
            // paginate if option was set and has next page
            if (!paginate || page >= result.nbPages) throw new errors.ObjectNotFound("Object not found");
            return paginateLoop();
        });
    };
    var promise = paginateLoop(page);
    if (callback === undefined) return promise;
    promise.then(function(res) {
        callback(null, res);
    }).catch(function(err) {
        callback(err);
    });
};
Index.prototype.getObjectPosition = function(result, objectID) {
    var hits = result.hits;
    for(var position = 0; position < hits.length; position++){
        if (hits[position].objectID === objectID) return position;
    }
    return -1;
};
/*
* Set settings for this index
*
* @param settings the settings object that can contains :
* - minWordSizefor1Typo: (integer) the minimum number of characters to accept one typo (default = 3).
* - minWordSizefor2Typos: (integer) the minimum number of characters to accept two typos (default = 7).
* - hitsPerPage: (integer) the number of hits per page (default = 10).
* - attributesToRetrieve: (array of strings) default list of attributes to retrieve in objects.
*   If set to null, all attributes are retrieved.
* - attributesToHighlight: (array of strings) default list of attributes to highlight.
*   If set to null, all indexed attributes are highlighted.
* - attributesToSnippet**: (array of strings) default list of attributes to snippet alongside the number
* of words to return (syntax is attributeName:nbWords).
*   By default no snippet is computed. If set to null, no snippet is computed.
* - attributesToIndex: (array of strings) the list of fields you want to index.
*   If set to null, all textual and numerical attributes of your objects are indexed,
*   but you should update it to get optimal results.
*   This parameter has two important uses:
*     - Limit the attributes to index: For example if you store a binary image in base64,
*     you want to store it and be able to
*       retrieve it but you don't want to search in the base64 string.
*     - Control part of the ranking*: (see the ranking parameter for full explanation)
*     Matches in attributes at the beginning of
*       the list will be considered more important than matches in attributes further down the list.
*       In one attribute, matching text at the beginning of the attribute will be
*       considered more important than text after, you can disable
*       this behavior if you add your attribute inside `unordered(AttributeName)`,
*       for example attributesToIndex: ["title", "unordered(text)"].
* - attributesForFaceting: (array of strings) The list of fields you want to use for faceting.
*   All strings in the attribute selected for faceting are extracted and added as a facet.
*   If set to null, no attribute is used for faceting.
* - attributeForDistinct: (string) The attribute name used for the Distinct feature.
* This feature is similar to the SQL "distinct" keyword: when enabled
*   in query with the distinct=1 parameter, all hits containing a duplicate
*   value for this attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best one is kept and others are removed.
* - ranking: (array of strings) controls the way results are sorted.
*   We have six available criteria:
*    - typo: sort according to number of typos,
*    - geo: sort according to decreassing distance when performing a geo-location based search,
*    - proximity: sort according to the proximity of query words in hits,
*    - attribute: sort according to the order of attributes defined by attributesToIndex,
*    - exact:
*        - if the user query contains one word: sort objects having an attribute
*        that is exactly the query word before others.
*          For example if you search for the "V" TV show, you want to find it
*          with the "V" query and avoid to have all popular TV
*          show starting by the v letter before it.
*        - if the user query contains multiple words: sort according to the
*        number of words that matched exactly (and not as a prefix).
*    - custom: sort according to a user defined formula set in **customRanking** attribute.
*   The standard order is ["typo", "geo", "proximity", "attribute", "exact", "custom"]
* - customRanking: (array of strings) lets you specify part of the ranking.
*   The syntax of this condition is an array of strings containing attributes
*   prefixed by asc (ascending order) or desc (descending order) operator.
*   For example `"customRanking" => ["desc(population)", "asc(name)"]`
* - queryType: Select how the query words are interpreted, it can be one of the following value:
*   - prefixAll: all query words are interpreted as prefixes,
*   - prefixLast: only the last word is interpreted as a prefix (default behavior),
*   - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - highlightPreTag: (string) Specify the string that is inserted before
* the highlighted parts in the query result (default to "<em>").
* - highlightPostTag: (string) Specify the string that is inserted after
* the highlighted parts in the query result (default to "</em>").
* - optionalWords: (array of strings) Specify a list of words that should
* be considered as optional when found in the query.
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer or the error message if a failure occurred
*/ Index.prototype.setSettings = function(settings, opts, callback) {
    if (arguments.length === 1 || typeof opts === "function") {
        callback = opts;
        opts = {};
    }
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    var indexObj = this;
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/settings?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        body: settings,
        callback: callback
    });
};
/*
* @deprecated see client.listApiKeys()
*/ Index.prototype.listUserKeys = deprecate(function(callback) {
    return this.listApiKeys(callback);
}, deprecatedMessage("index.listUserKeys()", "client.listApiKeys()"));
/*
* List all existing API keys to this index
*
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with API keys belonging to the index
*
* @deprecated see client.listApiKeys()
*/ Index.prototype.listApiKeys = deprecate(function(callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/keys",
        hostType: "read",
        callback: callback
    });
}, deprecatedMessage("index.listApiKeys()", "client.listApiKeys()"));
/*
* @deprecated see client.getApiKey()
*/ Index.prototype.getUserKeyACL = deprecate(function(key, callback) {
    return this.getApiKey(key, callback);
}, deprecatedMessage("index.getUserKeyACL()", "client.getApiKey()"));
/*
* Get an API key from this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the right API key
*
* @deprecated see client.getApiKey()
*/ Index.prototype.getApiKey = deprecate(function(key, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/keys/" + key,
        hostType: "read",
        callback: callback
    });
}, deprecatedMessage("index.getApiKey()", "client.getApiKey()"));
/*
* @deprecated see client.deleteApiKey()
*/ Index.prototype.deleteUserKey = deprecate(function(key, callback) {
    return this.deleteApiKey(key, callback);
}, deprecatedMessage("index.deleteUserKey()", "client.deleteApiKey()"));
/*
* Delete an existing API key associated to this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the deletion date
*
* @deprecated see client.deleteApiKey()
*/ Index.prototype.deleteApiKey = deprecate(function(key, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/keys/" + key,
        hostType: "write",
        callback: callback
    });
}, deprecatedMessage("index.deleteApiKey()", "client.deleteApiKey()"));
/*
* @deprecated see client.addApiKey()
*/ Index.prototype.addUserKey = deprecate(function(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("index.addUserKey()", "client.addApiKey()"));
/*
* Add a new API key to this index
*
* @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
*   can contains the following values:
*     - search: allow to search (https and http)
*     - addObject: allows to add/update an object in the index (https only)
*     - deleteObject : allows to delete an existing object (https only)
*     - deleteIndex : allows to delete index content (https only)
*     - settings : allows to get index settings (https only)
*     - editSettings : allows to change index settings (https only)
* @param {Object} [params] - Optionnal parameters to set for the key
* @param {number} params.validity - Number of seconds after which the key will
* be automatically removed (0 means no time limit for this key)
* @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
* @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
* @param {string} params.description - A description for your key
* @param {string[]} params.referers - A list of authorized referers
* @param {Object} params.queryParameters - Force the key to use specific query parameters
* @param {Function} callback - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the added API key
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.addUserKey(['search'], {
*   validity: 300,
*   maxQueriesPerIPPerHour: 2000,
*   maxHitsPerQuery: 3,
*   description: 'Eat three fruits',
*   referers: ['*.algolia.com'],
*   queryParameters: {
*     tagFilters: ['public'],
*   }
* })
* @see {@link https://www.algolia.com/doc/rest_api#AddIndexKey|Algolia REST API Documentation}
*
* @deprecated see client.addApiKey()
*/ Index.prototype.addApiKey = deprecate(function(acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.addApiKey(arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 1 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var postObj = {
        acl: acls
    };
    if (params) {
        postObj.validity = params.validity;
        postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        postObj.maxHitsPerQuery = params.maxHitsPerQuery;
        postObj.description = params.description;
        if (params.queryParameters) postObj.queryParameters = this.as._getSearchParams(params.queryParameters, "");
        postObj.referers = params.referers;
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
        body: postObj,
        hostType: "write",
        callback: callback
    });
}, deprecatedMessage("index.addApiKey()", "client.addApiKey()"));
/**
* @deprecated use client.addApiKey()
*/ Index.prototype.addUserKeyWithValidity = deprecate(function deprecatedAddUserKeyWithValidity(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("index.addUserKeyWithValidity()", "client.addApiKey()"));
/*
* @deprecated see client.updateApiKey()
*/ Index.prototype.updateUserKey = deprecate(function(key, acls, params, callback) {
    return this.updateApiKey(key, acls, params, callback);
}, deprecatedMessage("index.updateUserKey()", "client.updateApiKey()"));
/**
* Update an existing API key of this index
* @param {string} key - The key to update
* @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
*   can contains the following values:
*     - search: allow to search (https and http)
*     - addObject: allows to add/update an object in the index (https only)
*     - deleteObject : allows to delete an existing object (https only)
*     - deleteIndex : allows to delete index content (https only)
*     - settings : allows to get index settings (https only)
*     - editSettings : allows to change index settings (https only)
* @param {Object} [params] - Optionnal parameters to set for the key
* @param {number} params.validity - Number of seconds after which the key will
* be automatically removed (0 means no time limit for this key)
* @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
* @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
* @param {string} params.description - A description for your key
* @param {string[]} params.referers - A list of authorized referers
* @param {Object} params.queryParameters - Force the key to use specific query parameters
* @param {Function} callback - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with user keys list
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.updateApiKey('APIKEY', ['search'], {
*   validity: 300,
*   maxQueriesPerIPPerHour: 2000,
*   maxHitsPerQuery: 3,
*   description: 'Eat three fruits',
*   referers: ['*.algolia.com'],
*   queryParameters: {
*     tagFilters: ['public'],
*   }
* })
* @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
*
* @deprecated see client.updateApiKey()
*/ Index.prototype.updateApiKey = deprecate(function(key, acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 2 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var putObj = {
        acl: acls
    };
    if (params) {
        putObj.validity = params.validity;
        putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        putObj.maxHitsPerQuery = params.maxHitsPerQuery;
        putObj.description = params.description;
        if (params.queryParameters) putObj.queryParameters = this.as._getSearchParams(params.queryParameters, "");
        putObj.referers = params.referers;
    }
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + key,
        body: putObj,
        hostType: "write",
        callback: callback
    });
}, deprecatedMessage("index.updateApiKey()", "client.updateApiKey()"));

},{"inherits":"bRL3M","./IndexCore.js":"5Q5cC","./deprecate.js":"5Uvjk","./deprecatedMessage.js":"1AM6r","./exitPromise.js":"iOCHq","./errors":"6bEkW","isarray":"hk7XJ","./map.js":"c7pKt","./clone.js":"cxc5w","./merge.js":"SSEzJ","./IndexBrowser":"cO7L9"}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"5Q5cC":[function(require,module,exports) {
var buildSearchMethod = require("./buildSearchMethod.js");
var deprecate = require("./deprecate.js");
var deprecatedMessage = require("./deprecatedMessage.js");
module.exports = IndexCore;
/*
* Index class constructor.
* You should not use this method directly but use initIndex() function
*/ function IndexCore(algoliasearch, indexName) {
    this.indexName = indexName;
    this.as = algoliasearch;
    this.typeAheadArgs = null;
    this.typeAheadValueOption = null;
    // make sure every index instance has it's own cache
    this.cache = {};
}
/*
* Clear all queries in cache
*/ IndexCore.prototype.clearCache = function() {
    this.cache = {};
};
/*
* Search inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the full text query
* @param {object} [args] (optional) if set, contains an object with query parameters:
* - page: (integer) Pagination parameter used to select the page to retrieve.
*                   Page is zero-based and defaults to 0. Thus,
*                   to retrieve the 10th page you need to set page=9
* - hitsPerPage: (integer) Pagination parameter used to select the number of hits per page. Defaults to 20.
* - attributesToRetrieve: a string that contains the list of object attributes
* you want to retrieve (let you minimize the answer size).
*   Attributes are separated with a comma (for example "name,address").
*   You can also use an array (for example ["name","address"]).
*   By default, all attributes are retrieved. You can also use '*' to retrieve all
*   values when an attributesToRetrieve setting is specified for your index.
* - attributesToHighlight: a string that contains the list of attributes you
*   want to highlight according to the query.
*   Attributes are separated by a comma. You can also use an array (for example ["name","address"]).
*   If an attribute has no match for the query, the raw value is returned.
*   By default all indexed text attributes are highlighted.
*   You can use `*` if you want to highlight all textual attributes.
*   Numerical attributes are not highlighted.
*   A matchLevel is returned for each highlighted attribute and can contain:
*      - full: if all the query terms were found in the attribute,
*      - partial: if only some of the query terms were found,
*      - none: if none of the query terms were found.
* - attributesToSnippet: a string that contains the list of attributes to snippet alongside
* the number of words to return (syntax is `attributeName:nbWords`).
*    Attributes are separated by a comma (Example: attributesToSnippet=name:10,content:10).
*    You can also use an array (Example: attributesToSnippet: ['name:10','content:10']).
*    By default no snippet is computed.
* - minWordSizefor1Typo: the minimum number of characters in a query word to accept one typo in this word.
* Defaults to 3.
* - minWordSizefor2Typos: the minimum number of characters in a query word
* to accept two typos in this word. Defaults to 7.
* - getRankingInfo: if set to 1, the result hits will contain ranking
* information in _rankingInfo attribute.
* - aroundLatLng: search for entries around a given
* latitude/longitude (specified as two floats separated by a comma).
*   For example aroundLatLng=47.316669,5.016670).
*   You can specify the maximum distance in meters with the aroundRadius parameter (in meters)
*   and the precision for ranking with aroundPrecision
*   (for example if you set aroundPrecision=100, two objects that are distant of
*   less than 100m will be considered as identical for "geo" ranking parameter).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - insideBoundingBox: search entries inside a given area defined by the two extreme points
* of a rectangle (defined by 4 floats: p1Lat,p1Lng,p2Lat,p2Lng).
*   For example insideBoundingBox=47.3165,4.9665,47.3424,5.0201).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - numericFilters: a string that contains the list of numeric filters you want to
* apply separated by a comma.
*   The syntax of one filter is `attributeName` followed by `operand` followed by `value`.
*   Supported operands are `<`, `<=`, `=`, `>` and `>=`.
*   You can have multiple conditions on one attribute like for example numericFilters=price>100,price<1000.
*   You can also use an array (for example numericFilters: ["price>100","price<1000"]).
* - tagFilters: filter the query by a set of tags. You can AND tags by separating them by commas.
*   To OR tags, you must add parentheses. For example, tags=tag1,(tag2,tag3) means tag1 AND (tag2 OR tag3).
*   You can also use an array, for example tagFilters: ["tag1",["tag2","tag3"]]
*   means tag1 AND (tag2 OR tag3).
*   At indexing, tags should be added in the _tags** attribute
*   of objects (for example {"_tags":["tag1","tag2"]}).
* - facetFilters: filter the query by a list of facets.
*   Facets are separated by commas and each facet is encoded as `attributeName:value`.
*   For example: `facetFilters=category:Book,author:John%20Doe`.
*   You can also use an array (for example `["category:Book","author:John%20Doe"]`).
* - facets: List of object attributes that you want to use for faceting.
*   Comma separated list: `"category,author"` or array `['category','author']`
*   Only attributes that have been added in **attributesForFaceting** index setting
*   can be used in this parameter.
*   You can also use `*` to perform faceting on all attributes specified in **attributesForFaceting**.
* - queryType: select how the query words are interpreted, it can be one of the following value:
*    - prefixAll: all query words are interpreted as prefixes,
*    - prefixLast: only the last word is interpreted as a prefix (default behavior),
*    - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - optionalWords: a string that contains the list of words that should
* be considered as optional when found in the query.
*   Comma separated and array are accepted.
* - distinct: If set to 1, enable the distinct feature (disabled by default)
* if the attributeForDistinct index setting is set.
*   This feature is similar to the SQL "distinct" keyword: when enabled
*   in a query with the distinct=1 parameter,
*   all hits containing a duplicate value for the attributeForDistinct attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best
*   one is kept and others are removed.
* - restrictSearchableAttributes: List of attributes you want to use for
* textual search (must be a subset of the attributesToIndex index setting)
* either comma separated or as an array
* @param {function} [callback] the result callback called with two arguments:
*  error: null or Error('message'). If false, the content contains the error.
*  content: the server answer that contains the list of results.
*/ IndexCore.prototype.search = buildSearchMethod("query");
/*
* -- BETA --
* Search a record similar to the query inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the similar query
* @param {object} [args] (optional) if set, contains an object with query parameters.
*   All search parameters are supported (see search function), restrictSearchableAttributes and facetFilters
*   are the two most useful to restrict the similar results and get more relevant content
*/ IndexCore.prototype.similarSearch = deprecate(buildSearchMethod("similarQuery"), deprecatedMessage("index.similarSearch(query[, callback])", "index.search({ similarQuery: query }[, callback])"));
/*
* Browse index content. The response content will have a `cursor` property that you can use
* to browse subsequent pages for this query. Use `index.browseFrom(cursor)` when you want.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browse('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* }, callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/ IndexCore.prototype.browse = function(query, queryParameters, callback) {
    var merge = require("./merge.js");
    var indexObj = this;
    var page;
    var hitsPerPage;
    // we check variadic calls that are not the one defined
    // .browse()/.browse(fn)
    // => page = 0
    if (arguments.length === 0 || arguments.length === 1 && typeof arguments[0] === "function") {
        page = 0;
        callback = arguments[0];
        query = undefined;
    } else if (typeof arguments[0] === "number") {
        // .browse(2)/.browse(2, 10)/.browse(2, fn)/.browse(2, 10, fn)
        page = arguments[0];
        if (typeof arguments[1] === "number") hitsPerPage = arguments[1];
        else if (typeof arguments[1] === "function") {
            callback = arguments[1];
            hitsPerPage = undefined;
        }
        query = undefined;
        queryParameters = undefined;
    } else if (typeof arguments[0] === "object") {
        // .browse(queryParameters)/.browse(queryParameters, cb)
        if (typeof arguments[1] === "function") callback = arguments[1];
        queryParameters = arguments[0];
        query = undefined;
    } else if (typeof arguments[0] === "string" && typeof arguments[1] === "function") {
        // .browse(query, cb)
        callback = arguments[1];
        queryParameters = undefined;
    }
    // otherwise it's a .browse(query)/.browse(query, queryParameters)/.browse(query, queryParameters, cb)
    // get search query parameters combining various possible calls
    // to .browse();
    queryParameters = merge({}, queryParameters || {}, {
        page: page,
        hitsPerPage: hitsPerPage,
        query: query
    });
    var params = this.as._getSearchParams(queryParameters, "");
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/browse",
        body: {
            params: params
        },
        hostType: "read",
        callback: callback
    });
};
/*
* Continue browsing from a previous position (cursor), obtained via a call to `.browse()`.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browseFrom('14lkfsakl32', callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/ IndexCore.prototype.browseFrom = function(cursor, callback) {
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
        body: {
            cursor: cursor
        },
        hostType: "read",
        callback: callback
    });
};
/*
* Search for facet values
* https://www.algolia.com/doc/rest-api/search#search-for-facet-values
*
* @param {string} params.facetName Facet name, name of the attribute to search for values in.
* Must be declared as a facet
* @param {string} params.facetQuery Query for the facet search
* @param {string} [params.*] Any search parameter of Algolia,
* see https://www.algolia.com/doc/api-client/javascript/search#search-parameters
* Pagination is not supported. The page and hitsPerPage parameters will be ignored.
* @param callback (optional)
*/ IndexCore.prototype.searchForFacetValues = function(params, callback) {
    var clone = require("./clone.js");
    var omit = require("./omit.js");
    var usage = "Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])";
    if (params.facetName === undefined || params.facetQuery === undefined) throw new Error(usage);
    var facetName = params.facetName;
    var filteredParams = omit(clone(params), function(keyName) {
        return keyName === "facetName";
    });
    var searchParameters = this.as._getSearchParams(filteredParams, "");
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(facetName) + "/query",
        hostType: "read",
        body: {
            params: searchParameters
        },
        callback: callback
    });
};
IndexCore.prototype.searchFacet = deprecate(function(params, callback) {
    return this.searchForFacetValues(params, callback);
}, deprecatedMessage("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])"));
IndexCore.prototype._search = function(params, url, callback, additionalUA) {
    return this.as._jsonRequest({
        cache: this.cache,
        method: "POST",
        url: url || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
        body: {
            params: params
        },
        hostType: "read",
        fallback: {
            method: "GET",
            url: "/1/indexes/" + encodeURIComponent(this.indexName),
            body: {
                params: params
            }
        },
        callback: callback,
        additionalUA: additionalUA
    });
};
/*
* Get an object from this index
*
* @param objectID the unique identifier of the object to retrieve
* @param attrs (optional) if set, contains the array of attribute names to retrieve
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the object to retrieve or the error message if a failure occurred
*/ IndexCore.prototype.getObject = function(objectID, attrs, callback) {
    var indexObj = this;
    if (arguments.length === 1 || typeof attrs === "function") {
        callback = attrs;
        attrs = undefined;
    }
    var params = "";
    if (attrs !== undefined) {
        params = "?attributes=";
        for(var i = 0; i < attrs.length; ++i){
            if (i !== 0) params += ",";
            params += attrs[i];
        }
    }
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(objectID) + params,
        hostType: "read",
        callback: callback
    });
};
/*
* Get several objects from this index
*
* @param objectIDs the array of unique identifier of objects to retrieve
*/ IndexCore.prototype.getObjects = function(objectIDs, attributesToRetrieve, callback) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: index.getObjects(arrayOfObjectIDs[, callback])";
    if (!isArray(objectIDs)) throw new Error(usage);
    var indexObj = this;
    if (arguments.length === 1 || typeof attributesToRetrieve === "function") {
        callback = attributesToRetrieve;
        attributesToRetrieve = undefined;
    }
    var body = {
        requests: map(objectIDs, function prepareRequest(objectID) {
            var request = {
                indexName: indexObj.indexName,
                objectID: objectID
            };
            if (attributesToRetrieve) request.attributesToRetrieve = attributesToRetrieve.join(",");
            return request;
        })
    };
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/*/objects",
        hostType: "read",
        body: body,
        callback: callback
    });
};
IndexCore.prototype.as = null;
IndexCore.prototype.indexName = null;
IndexCore.prototype.typeAheadArgs = null;
IndexCore.prototype.typeAheadValueOption = null;

},{"./buildSearchMethod.js":"fGbut","./deprecate.js":"5Uvjk","./deprecatedMessage.js":"1AM6r","./merge.js":"SSEzJ","./clone.js":"cxc5w","./omit.js":"8B7BN","isarray":"hk7XJ","./map.js":"c7pKt"}],"fGbut":[function(require,module,exports) {
module.exports = buildSearchMethod;
var errors = require("./errors.js");
/**
 * Creates a search method to be used in clients
 * @param {string} queryParam the name of the attribute used for the query
 * @param {string} url the url
 * @return {function} the search method
 */ function buildSearchMethod(queryParam, url) {
    /**
   * The search method. Prepares the data and send the query to Algolia.
   * @param {string} query the string used for query search
   * @param {object} args additional parameters to send with the search
   * @param {function} [callback] the callback to be called with the client gets the answer
   * @return {undefined|Promise} If the callback is not provided then this methods returns a Promise
   */ return function search(query, args, callback) {
        // warn V2 users on how to search
        if (typeof query === "function" && typeof args === "object" || typeof callback === "object") // .search(query, params, cb)
        // .search(cb, params)
        throw new errors.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
        // Normalizing the function signature
        if (arguments.length === 0 || typeof query === "function") {
            // Usage : .search(), .search(cb)
            callback = query;
            query = "";
        } else if (arguments.length === 1 || typeof args === "function") {
            // Usage : .search(query/args), .search(query, cb)
            callback = args;
            args = undefined;
        }
        // At this point we have 3 arguments with values
        // Usage : .search(args) // careful: typeof null === 'object'
        if (typeof query === "object" && query !== null) {
            args = query;
            query = undefined;
        } else if (query === undefined || query === null) query = "";
        var params = "";
        if (query !== undefined) params += queryParam + "=" + encodeURIComponent(query);
        var additionalUA;
        if (args !== undefined) {
            if (args.additionalUA) {
                additionalUA = args.additionalUA;
                delete args.additionalUA;
            }
            // `_getSearchParams` will augment params, do not be fooled by the = versus += from previous if
            params = this.as._getSearchParams(args, params);
        }
        return this._search(params, url, callback, additionalUA);
    };
}

},{"./errors.js":"6bEkW"}],"6bEkW":[function(require,module,exports) {
"use strict";
// This file hosts our error definitions
// We use custom error "types" so that we can act on them when we need it
// e.g.: if error instanceof errors.UnparsableJSON then..
var inherits = require("inherits");
function AlgoliaSearchError(message, extraProperties) {
    var forEach = require("foreach");
    var error = this;
    // try to get a stacktrace
    if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, this.constructor);
    else error.stack = new Error().stack || "Cannot get a stacktrace, browser is too old";
    this.name = "AlgoliaSearchError";
    this.message = message || "Unknown error";
    if (extraProperties) forEach(extraProperties, function addToErrorObject(value, key) {
        error[key] = value;
    });
}
inherits(AlgoliaSearchError, Error);
function createCustomError(name, message) {
    function AlgoliaSearchCustomError() {
        var args = Array.prototype.slice.call(arguments, 0);
        // custom message not set, use default
        if (typeof args[0] !== "string") args.unshift(message);
        AlgoliaSearchError.apply(this, args);
        this.name = "AlgoliaSearch" + name + "Error";
    }
    inherits(AlgoliaSearchCustomError, AlgoliaSearchError);
    return AlgoliaSearchCustomError;
}
// late exports to let various fn defs and inherits take place
module.exports = {
    AlgoliaSearchError: AlgoliaSearchError,
    UnparsableJSON: createCustomError("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
    RequestTimeout: createCustomError("RequestTimeout", "Request timed out before getting a response"),
    Network: createCustomError("Network", "Network issue, see err.more for details"),
    JSONPScriptFail: createCustomError("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
    ValidUntilNotFound: createCustomError("ValidUntilNotFound", "The SecuredAPIKey does not have a validUntil parameter."),
    JSONPScriptError: createCustomError("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
    ObjectNotFound: createCustomError("ObjectNotFound", "Object not found"),
    Unknown: createCustomError("Unknown", "Unknown error occured")
};

},{"inherits":"bRL3M","foreach":"3ZSmQ"}],"3ZSmQ":[function(require,module,exports) {
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== "[object Function]") throw new TypeError("iterator must be a function");
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if (hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

},{}],"5Uvjk":[function(require,module,exports) {
module.exports = function deprecate(fn, message) {
    var warned = false;
    function deprecated() {
        if (!warned) {
            /* eslint no-console:0 */ console.warn(message);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};

},{}],"1AM6r":[function(require,module,exports) {
module.exports = function deprecatedMessage(previousUsage, newUsage) {
    var githubAnchorLink = previousUsage.toLowerCase().replace(/[\.\(\)]/g, "");
    return "algoliasearch: `" + previousUsage + "` was replaced by `" + newUsage + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + githubAnchorLink;
};

},{}],"SSEzJ":[function(require,module,exports) {
var foreach = require("foreach");
module.exports = function merge(destination /* , sources */ ) {
    var sources = Array.prototype.slice.call(arguments);
    foreach(sources, function(source) {
        for(var keyName in source)if (source.hasOwnProperty(keyName)) {
            if (typeof destination[keyName] === "object" && typeof source[keyName] === "object") destination[keyName] = merge({}, destination[keyName], source[keyName]);
            else if (source[keyName] !== undefined) destination[keyName] = source[keyName];
        }
    });
    return destination;
};

},{"foreach":"3ZSmQ"}],"cxc5w":[function(require,module,exports) {
module.exports = function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
};

},{}],"8B7BN":[function(require,module,exports) {
module.exports = function omit(obj, test) {
    var keys = require("object-keys");
    var foreach = require("foreach");
    var filtered = {};
    foreach(keys(obj), function doFilter(keyName) {
        if (test(keyName) !== true) filtered[keyName] = obj[keyName];
    });
    return filtered;
};

},{"object-keys":"eNyf4","foreach":"3ZSmQ"}],"eNyf4":[function(require,module,exports) {
"use strict";
var slice = Array.prototype.slice;
var isArgs = require("./isArguments");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require("./implementation");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"./isArguments":"1HhOq","./implementation":"aV01q"}],"1HhOq":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

},{}],"aV01q":[function(require,module,exports) {
"use strict";
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require("./isArguments"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
    var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === "undefined" || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"./isArguments":"1HhOq"}],"hk7XJ":[function(require,module,exports) {
var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
};

},{}],"c7pKt":[function(require,module,exports) {
var foreach = require("foreach");
module.exports = function map(arr, fn) {
    var newArr = [];
    foreach(arr, function(item, itemIndex) {
        newArr.push(fn(item, itemIndex, arr));
    });
    return newArr;
};

},{"foreach":"3ZSmQ"}],"iOCHq":[function(require,module,exports) {
// Parse cloud does not supports setTimeout
// We do not store a setTimeout reference in the client everytime
// We only fallback to a fake setTimeout when not available
// setTimeout cannot be override globally sadly
module.exports = function exitPromise(fn, _setTimeout) {
    _setTimeout(fn, 0);
};

},{}],"cO7L9":[function(require,module,exports) {
"use strict";
// This is the object returned by the `index.browseAll()` method
module.exports = IndexBrowser;
var inherits = require("inherits");
var EventEmitter = require("events").EventEmitter;
function IndexBrowser() {}
inherits(IndexBrowser, EventEmitter);
IndexBrowser.prototype.stop = function() {
    this._stopped = true;
    this._clean();
};
IndexBrowser.prototype._end = function() {
    this.emit("end");
    this._clean();
};
IndexBrowser.prototype._error = function(err) {
    this.emit("error", err);
    this._clean();
};
IndexBrowser.prototype._result = function(content) {
    this.emit("result", content);
};
IndexBrowser.prototype._clean = function() {
    this.removeAllListeners("stop");
    this.removeAllListeners("end");
    this.removeAllListeners("error");
    this.removeAllListeners("result");
};

},{"inherits":"bRL3M","events":"1VQLm"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
    this._maxListeners = n;
    return this;
};
EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {};
    // If there is no 'error' event listener then throw.
    if (type === "error") {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) throw er; // Unhandled 'error' event
            else {
                // At least give some kind of context to the user
                var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
                err.context = er;
                throw err;
            }
        }
    }
    handler = this._events[type];
    if (isUndefined(handler)) return false;
    if (isFunction(handler)) switch(arguments.length){
        // fast cases
        case 1:
            handler.call(this);
            break;
        case 2:
            handler.call(this, arguments[1]);
            break;
        case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
        // slower
        default:
            args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
    }
    else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for(i = 0; i < len; i++)listeners[i].apply(this, args);
    }
    return true;
};
EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events) this._events = {};
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
    else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);
    else // Adding the second element, need to change to array.
    this._events[type] = [
        this._events[type],
        listener
    ];
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) m = this._maxListeners;
        else m = EventEmitter.defaultMaxListeners;
        if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
            if (typeof console.trace === "function") // not supported in IE 10
            console.trace();
        }
    }
    return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    var fired = false;
    function g() {
        this.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
};
// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    } else if (isObject(list)) {
        for(i = length; i-- > 0;)if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
        }
        if (position < 0) return this;
        if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
        } else list.splice(position, 1);
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    }
    return this;
};
EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;
    if (!this._events) return this;
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
        if (arguments.length === 0) this._events = {};
        else if (this._events[type]) delete this._events[type];
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        for(key in this._events){
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = {};
        return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) this.removeListener(type, listeners);
    else if (listeners) // LIFO order
    while(listeners.length)this.removeListener(type, listeners[listeners.length - 1]);
    delete this._events[type];
    return this;
};
EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];
    else if (isFunction(this._events[type])) ret = [
        this._events[type]
    ];
    else ret = this._events[type].slice();
    return ret;
};
EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) return 1;
        else if (evlistener) return evlistener.length;
    }
    return 0;
};
EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
};
function isFunction(arg) {
    return typeof arg === "function";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isUndefined(arg) {
    return arg === void 0;
}

},{}],"53JcR":[function(require,module,exports) {
module.exports = AlgoliaSearchCore;
var errors = require("./errors");
var exitPromise = require("./exitPromise.js");
var IndexCore = require("./IndexCore.js");
var store = require("./store.js");
// We will always put the API KEY in the JSON body in case of too long API KEY,
// to avoid query string being too long and failing in various conditions (our server limit, browser limit,
// proxies limit)
var MAX_API_KEY_LENGTH = 500;
var RESET_APP_DATA_TIMER = 120000; // after 2 minutes reset to first host
/*
 * Algolia Search library initialization
 * https://www.algolia.com/
 *
 * @param {string} applicationID - Your applicationID, found in your dashboard
 * @param {string} apiKey - Your API key, found in your dashboard
 * @param {Object} [opts]
 * @param {number} [opts.timeout=2000] - The request timeout set in milliseconds,
 * another request will be issued after this timeout
 * @param {string} [opts.protocol='https:'] - The protocol used to query Algolia Search API.
 *                                        Set to 'http:' to force using http.
 * @param {Object|Array} [opts.hosts={
 *           read: [this.applicationID + '-dsn.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]),
 *           write: [this.applicationID + '.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]) - The hosts to use for Algolia Search API.
 *           If you provide them, you will less benefit from our HA implementation
 */ function AlgoliaSearchCore(applicationID, apiKey, opts) {
    var debug = require("debug")("algoliasearch");
    var clone = require("./clone.js");
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: algoliasearch(applicationID, apiKey, opts)";
    if (opts._allowEmptyCredentials !== true && !applicationID) throw new errors.AlgoliaSearchError("Please provide an application ID. " + usage);
    if (opts._allowEmptyCredentials !== true && !apiKey) throw new errors.AlgoliaSearchError("Please provide an API key. " + usage);
    this.applicationID = applicationID;
    this.apiKey = apiKey;
    this.hosts = {
        read: [],
        write: []
    };
    opts = opts || {};
    this._timeouts = opts.timeouts || {
        connect: 1000,
        read: 2000,
        write: 30000
    };
    // backward compat, if opts.timeout is passed, we use it to configure all timeouts like before
    if (opts.timeout) this._timeouts.connect = this._timeouts.read = this._timeouts.write = opts.timeout;
    var protocol = opts.protocol || "https:";
    // while we advocate for colon-at-the-end values: 'http:' for `opts.protocol`
    // we also accept `http` and `https`. It's a common error.
    if (!/:$/.test(protocol)) protocol = protocol + ":";
    if (protocol !== "http:" && protocol !== "https:") throw new errors.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + opts.protocol + "`)");
    this._checkAppIdData();
    if (!opts.hosts) {
        var defaultHosts = map(this._shuffleResult, function(hostNumber) {
            return applicationID + "-" + hostNumber + ".algolianet.com";
        });
        // no hosts given, compute defaults
        var mainSuffix = (opts.dsn === false ? "" : "-dsn") + ".algolia.net";
        this.hosts.read = [
            this.applicationID + mainSuffix
        ].concat(defaultHosts);
        this.hosts.write = [
            this.applicationID + ".algolia.net"
        ].concat(defaultHosts);
    } else if (isArray(opts.hosts)) {
        // when passing custom hosts, we need to have a different host index if the number
        // of write/read hosts are different.
        this.hosts.read = clone(opts.hosts);
        this.hosts.write = clone(opts.hosts);
    } else {
        this.hosts.read = clone(opts.hosts.read);
        this.hosts.write = clone(opts.hosts.write);
    }
    // add protocol and lowercase hosts
    this.hosts.read = map(this.hosts.read, prepareHost(protocol));
    this.hosts.write = map(this.hosts.write, prepareHost(protocol));
    this.extraHeaders = {};
    // In some situations you might want to warm the cache
    this.cache = opts._cache || {};
    this._ua = opts._ua;
    this._useCache = opts._useCache === undefined || opts._cache ? true : opts._useCache;
    this._useRequestCache = this._useCache && opts._useRequestCache;
    this._useFallback = opts.useFallback === undefined ? true : opts.useFallback;
    this._setTimeout = opts._setTimeout;
    debug("init done, %j", this);
}
/*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */ AlgoliaSearchCore.prototype.initIndex = function(indexName) {
    return new IndexCore(this, indexName);
};
/**
* Add an extra field to the HTTP request
*
* @param name the header field name
* @param value the header field value
*/ AlgoliaSearchCore.prototype.setExtraHeader = function(name, value) {
    this.extraHeaders[name.toLowerCase()] = value;
};
/**
* Get the value of an extra HTTP header
*
* @param name the header field name
*/ AlgoliaSearchCore.prototype.getExtraHeader = function(name) {
    return this.extraHeaders[name.toLowerCase()];
};
/**
* Remove an extra field from the HTTP request
*
* @param name the header field name
*/ AlgoliaSearchCore.prototype.unsetExtraHeader = function(name) {
    delete this.extraHeaders[name.toLowerCase()];
};
/**
* Augment sent x-algolia-agent with more data, each agent part
* is automatically separated from the others by a semicolon;
*
* @param algoliaAgent the agent to add
*/ AlgoliaSearchCore.prototype.addAlgoliaAgent = function(algoliaAgent) {
    var algoliaAgentWithDelimiter = "; " + algoliaAgent;
    if (this._ua.indexOf(algoliaAgentWithDelimiter) === -1) this._ua += algoliaAgentWithDelimiter;
};
/*
 * Wrapper that try all hosts to maximize the quality of service
 */ AlgoliaSearchCore.prototype._jsonRequest = function(initialOpts) {
    this._checkAppIdData();
    var requestDebug = require("debug")("algoliasearch:" + initialOpts.url);
    var body;
    var cacheID;
    var additionalUA = initialOpts.additionalUA || "";
    var cache = initialOpts.cache;
    var client = this;
    var tries = 0;
    var usingFallback = false;
    var hasFallback = client._useFallback && client._request.fallback && initialOpts.fallback;
    var headers;
    if (this.apiKey.length > MAX_API_KEY_LENGTH && initialOpts.body !== undefined && (initialOpts.body.params !== undefined || initialOpts.body.requests !== undefined // client.search()
    )) {
        initialOpts.body.apiKey = this.apiKey;
        headers = this._computeRequestHeaders({
            additionalUA: additionalUA,
            withApiKey: false,
            headers: initialOpts.headers
        });
    } else headers = this._computeRequestHeaders({
        additionalUA: additionalUA,
        headers: initialOpts.headers
    });
    if (initialOpts.body !== undefined) body = safeJSONStringify(initialOpts.body);
    requestDebug("request start");
    var debugData = [];
    function doRequest(requester, reqOpts) {
        client._checkAppIdData();
        var startTime = new Date();
        if (client._useCache && !client._useRequestCache) cacheID = initialOpts.url;
        // as we sometime use POST requests to pass parameters (like query='aa'),
        // the cacheID must also include the body to be different between calls
        if (client._useCache && !client._useRequestCache && body) cacheID += "_body_" + reqOpts.body;
        // handle cache existence
        if (isCacheValidWithCurrentID(!client._useRequestCache, cache, cacheID)) {
            requestDebug("serving response from cache");
            var responseText = cache[cacheID];
            // Cache response must match the type of the original one
            return client._promise.resolve({
                body: JSON.parse(responseText),
                responseText: responseText
            });
        }
        // if we reached max tries
        if (tries >= client.hosts[initialOpts.hostType].length) {
            if (!hasFallback || usingFallback) {
                requestDebug("could not get any response");
                // then stop
                return client._promise.reject(new errors.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + client.applicationID, {
                    debugData: debugData
                }));
            }
            requestDebug("switching to fallback");
            // let's try the fallback starting from here
            tries = 0;
            // method, url and body are fallback dependent
            reqOpts.method = initialOpts.fallback.method;
            reqOpts.url = initialOpts.fallback.url;
            reqOpts.jsonBody = initialOpts.fallback.body;
            if (reqOpts.jsonBody) reqOpts.body = safeJSONStringify(reqOpts.jsonBody);
            // re-compute headers, they could be omitting the API KEY
            headers = client._computeRequestHeaders({
                additionalUA: additionalUA,
                headers: initialOpts.headers
            });
            reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
            client._setHostIndexByType(0, initialOpts.hostType);
            usingFallback = true; // the current request is now using fallback
            return doRequest(client._request.fallback, reqOpts);
        }
        var currentHost = client._getHostByType(initialOpts.hostType);
        var url = currentHost + reqOpts.url;
        var options = {
            body: reqOpts.body,
            jsonBody: reqOpts.jsonBody,
            method: reqOpts.method,
            headers: headers,
            timeouts: reqOpts.timeouts,
            debug: requestDebug,
            forceAuthHeaders: reqOpts.forceAuthHeaders
        };
        requestDebug("method: %s, url: %s, headers: %j, timeouts: %d", options.method, url, options.headers, options.timeouts);
        if (requester === client._request.fallback) requestDebug("using fallback");
        // `requester` is any of this._request or this._request.fallback
        // thus it needs to be called using the client as context
        return requester.call(client, url, options).then(success, tryFallback);
        function success(httpResponse) {
            // compute the status of the response,
            //
            // When in browser mode, using XDR or JSONP, we have no statusCode available
            // So we rely on our API response `status` property.
            // But `waitTask` can set a `status` property which is not the statusCode (it's the task status)
            // So we check if there's a `message` along `status` and it means it's an error
            //
            // That's the only case where we have a response.status that's not the http statusCode
            var status = httpResponse && httpResponse.body && httpResponse.body.message && httpResponse.body.status || // this is important to check the request statusCode AFTER the body eventual
            // statusCode because some implementations (jQuery XDomainRequest transport) may
            // send statusCode 200 while we had an error
            httpResponse.statusCode || // When in browser mode, using XDR or JSONP
            // we default to success when no error (no response.status && response.message)
            // If there was a JSON.parse() error then body is null and it fails
            httpResponse && httpResponse.body && 200;
            requestDebug("received response: statusCode: %s, computed statusCode: %d, headers: %j", httpResponse.statusCode, status, httpResponse.headers);
            var httpResponseOk = Math.floor(status / 100) === 2;
            var endTime = new Date();
            debugData.push({
                currentHost: currentHost,
                headers: removeCredentials(headers),
                content: body || null,
                contentLength: body !== undefined ? body.length : null,
                method: reqOpts.method,
                timeouts: reqOpts.timeouts,
                url: reqOpts.url,
                startTime: startTime,
                endTime: endTime,
                duration: endTime - startTime,
                statusCode: status
            });
            if (httpResponseOk) {
                if (client._useCache && !client._useRequestCache && cache) {
                    cache[cacheID] = httpResponse.responseText;
                }
                return {
                    responseText: httpResponse.responseText,
                    body: httpResponse.body
                };
            }
            var shouldRetry = Math.floor(status / 100) !== 4;
            if (shouldRetry) {
                tries += 1;
                return retryRequest();
            }
            requestDebug("unrecoverable error");
            // no success and no retry => fail
            var unrecoverableError = new errors.AlgoliaSearchError(httpResponse.body && httpResponse.body.message, {
                debugData: debugData,
                statusCode: status
            });
            return client._promise.reject(unrecoverableError);
        }
        function tryFallback(err) {
            // error cases:
            //  While not in fallback mode:
            //    - CORS not supported
            //    - network error
            //  While in fallback mode:
            //    - timeout
            //    - network error
            //    - badly formatted JSONP (script loaded, did not call our callback)
            //  In both cases:
            //    - uncaught exception occurs (TypeError)
            requestDebug("error: %s, stack: %s", err.message, err.stack);
            var endTime = new Date();
            debugData.push({
                currentHost: currentHost,
                headers: removeCredentials(headers),
                content: body || null,
                contentLength: body !== undefined ? body.length : null,
                method: reqOpts.method,
                timeouts: reqOpts.timeouts,
                url: reqOpts.url,
                startTime: startTime,
                endTime: endTime,
                duration: endTime - startTime
            });
            if (!(err instanceof errors.AlgoliaSearchError)) {
                err = new errors.Unknown(err && err.message, err);
            }
            tries += 1;
            // stop the request implementation when:
            if (// we did not generate this error,
            // it comes from a throw in some other piece of code
            err instanceof errors.Unknown || // server sent unparsable JSON
            err instanceof errors.UnparsableJSON || // max tries and already using fallback or no fallback
            tries >= client.hosts[initialOpts.hostType].length && (usingFallback || !hasFallback)) {
                // stop request implementation for this command
                err.debugData = debugData;
                return client._promise.reject(err);
            }
            // When a timeout occurred, retry by raising timeout
            if (err instanceof errors.RequestTimeout) {
                return retryRequestWithHigherTimeout();
            }
            return retryRequest();
        }
        function retryRequest() {
            requestDebug("retrying request");
            client._incrementHostIndex(initialOpts.hostType);
            return doRequest(requester, reqOpts);
        }
        function retryRequestWithHigherTimeout() {
            requestDebug("retrying request with higher timeout");
            client._incrementHostIndex(initialOpts.hostType);
            client._incrementTimeoutMultipler();
            reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
            return doRequest(requester, reqOpts);
        }
    }
    function isCacheValidWithCurrentID(useRequestCache, currentCache, currentCacheID) {
        return client._useCache && useRequestCache && currentCache && currentCache[currentCacheID] !== undefined;
    }
    function interopCallbackReturn(request, callback) {
        if (isCacheValidWithCurrentID(client._useRequestCache, cache, cacheID)) request.catch(function() {
            // Release the cache on error
            delete cache[cacheID];
        });
        if (typeof initialOpts.callback === "function") // either we have a callback
        request.then(function okCb(content) {
            exitPromise(function() {
                initialOpts.callback(null, callback(content));
            }, client._setTimeout || setTimeout);
        }, function nookCb(err) {
            exitPromise(function() {
                initialOpts.callback(err);
            }, client._setTimeout || setTimeout);
        });
        else // either we are using promises
        return request.then(callback);
    }
    if (client._useCache && client._useRequestCache) cacheID = initialOpts.url;
    // as we sometime use POST requests to pass parameters (like query='aa'),
    // the cacheID must also include the body to be different between calls
    if (client._useCache && client._useRequestCache && body) cacheID += "_body_" + body;
    if (isCacheValidWithCurrentID(client._useRequestCache, cache, cacheID)) {
        requestDebug("serving request from cache");
        var maybePromiseForCache = cache[cacheID];
        // In case the cache is warmup with value that is not a promise
        var promiseForCache = typeof maybePromiseForCache.then !== "function" ? client._promise.resolve({
            responseText: maybePromiseForCache
        }) : maybePromiseForCache;
        return interopCallbackReturn(promiseForCache, function(content) {
            // In case of the cache request, return the original value
            return JSON.parse(content.responseText);
        });
    }
    var request1 = doRequest(client._request, {
        url: initialOpts.url,
        method: initialOpts.method,
        body: body,
        jsonBody: initialOpts.body,
        timeouts: client._getTimeoutsForRequest(initialOpts.hostType),
        forceAuthHeaders: initialOpts.forceAuthHeaders
    });
    if (client._useCache && client._useRequestCache && cache) cache[cacheID] = request1;
    return interopCallbackReturn(request1, function(content) {
        // In case of the first request, return the JSON value
        return content.body;
    });
};
/*
* Transform search param object in query string
* @param {object} args arguments to add to the current query string
* @param {string} params current query string
* @return {string} the final query string
*/ AlgoliaSearchCore.prototype._getSearchParams = function(args, params) {
    if (args === undefined || args === null) return params;
    for(var key in args)if (key !== null && args[key] !== undefined && args.hasOwnProperty(key)) {
        params += params === "" ? "" : "&";
        params += key + "=" + encodeURIComponent(Object.prototype.toString.call(args[key]) === "[object Array]" ? safeJSONStringify(args[key]) : args[key]);
    }
    return params;
};
/**
 * Compute the headers for a request
 *
 * @param [string] options.additionalUA semi-colon separated string with other user agents to add
 * @param [boolean=true] options.withApiKey Send the api key as a header
 * @param [Object] options.headers Extra headers to send
 */ AlgoliaSearchCore.prototype._computeRequestHeaders = function(options) {
    var forEach = require("foreach");
    var ua = options.additionalUA ? this._ua + "; " + options.additionalUA : this._ua;
    var requestHeaders = {
        "x-algolia-agent": ua,
        "x-algolia-application-id": this.applicationID
    };
    // browser will inline headers in the url, node.js will use http headers
    // but in some situations, the API KEY will be too long (big secured API keys)
    // so if the request is a POST and the KEY is very long, we will be asked to not put
    // it into headers but in the JSON body
    if (options.withApiKey !== false) requestHeaders["x-algolia-api-key"] = this.apiKey;
    if (this.userToken) requestHeaders["x-algolia-usertoken"] = this.userToken;
    if (this.securityTags) requestHeaders["x-algolia-tagfilters"] = this.securityTags;
    forEach(this.extraHeaders, function addToRequestHeaders(value, key) {
        requestHeaders[key] = value;
    });
    if (options.headers) forEach(options.headers, function addToRequestHeaders(value, key) {
        requestHeaders[key] = value;
    });
    return requestHeaders;
};
/**
 * Search through multiple indices at the same time
 * @param  {Object[]}   queries  An array of queries you want to run.
 * @param {string} queries[].indexName The index name you want to target
 * @param {string} [queries[].query] The query to issue on this index. Can also be passed into `params`
 * @param {Object} queries[].params Any search param like hitsPerPage, ..
 * @param  {Function} callback Callback to be called
 * @return {Promise|undefined} Returns a promise if no callback given
 */ AlgoliaSearchCore.prototype.search = function(queries, opts, callback) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: client.search(arrayOfQueries[, callback])";
    if (!isArray(queries)) throw new Error(usage);
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var client = this;
    var postObj = {
        requests: map(queries, function prepareRequest(query) {
            var params = "";
            // allow query.query
            // so we are mimicing the index.search(query, params) method
            // {indexName:, query:, params:}
            if (query.query !== undefined) params += "query=" + encodeURIComponent(query.query);
            return {
                indexName: query.indexName,
                params: client._getSearchParams(query.params, params)
            };
        })
    };
    var JSONPParams = map(postObj.requests, function prepareJSONPParams(request, requestId) {
        return requestId + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(request.indexName) + "?" + request.params);
    }).join("&");
    var url = "/1/indexes/*/queries";
    if (opts.strategy !== undefined) postObj.strategy = opts.strategy;
    return this._jsonRequest({
        cache: this.cache,
        method: "POST",
        url: url,
        body: postObj,
        hostType: "read",
        fallback: {
            method: "GET",
            url: "/1/indexes/*",
            body: {
                params: JSONPParams
            }
        },
        callback: callback
    });
};
/**
* Search for facet values
* https://www.algolia.com/doc/rest-api/search#search-for-facet-values
* This is the top-level API for SFFV.
*
* @param {object[]} queries An array of queries to run.
* @param {string} queries[].indexName Index name, name of the index to search.
* @param {object} queries[].params Query parameters.
* @param {string} queries[].params.facetName Facet name, name of the attribute to search for values in.
* Must be declared as a facet
* @param {string} queries[].params.facetQuery Query for the facet search
* @param {string} [queries[].params.*] Any search parameter of Algolia,
* see https://www.algolia.com/doc/api-client/javascript/search#search-parameters
* Pagination is not supported. The page and hitsPerPage parameters will be ignored.
*/ AlgoliaSearchCore.prototype.searchForFacetValues = function(queries) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])"; // eslint-disable-line max-len
    if (!isArray(queries)) throw new Error(usage);
    var client = this;
    return client._promise.all(map(queries, function performQuery(query) {
        if (!query || query.indexName === undefined || query.params.facetName === undefined || query.params.facetQuery === undefined) throw new Error(usage);
        var clone = require("./clone.js");
        var omit = require("./omit.js");
        var indexName = query.indexName;
        var params = query.params;
        var facetName = params.facetName;
        var filteredParams = omit(clone(params), function(keyName) {
            return keyName === "facetName";
        });
        var searchParameters = client._getSearchParams(filteredParams, "");
        return client._jsonRequest({
            cache: client.cache,
            method: "POST",
            url: "/1/indexes/" + encodeURIComponent(indexName) + "/facets/" + encodeURIComponent(facetName) + "/query",
            hostType: "read",
            body: {
                params: searchParameters
            }
        });
    }));
};
/**
 * Set the extra security tagFilters header
 * @param {string|array} tags The list of tags defining the current security filters
 */ AlgoliaSearchCore.prototype.setSecurityTags = function(tags) {
    if (Object.prototype.toString.call(tags) === "[object Array]") {
        var strTags = [];
        for(var i = 0; i < tags.length; ++i)if (Object.prototype.toString.call(tags[i]) === "[object Array]") {
            var oredTags = [];
            for(var j = 0; j < tags[i].length; ++j)oredTags.push(tags[i][j]);
            strTags.push("(" + oredTags.join(",") + ")");
        } else strTags.push(tags[i]);
        tags = strTags.join(",");
    }
    this.securityTags = tags;
};
/**
 * Set the extra user token header
 * @param {string} userToken The token identifying a uniq user (used to apply rate limits)
 */ AlgoliaSearchCore.prototype.setUserToken = function(userToken) {
    this.userToken = userToken;
};
/**
 * Clear all queries in client's cache
 * @return undefined
 */ AlgoliaSearchCore.prototype.clearCache = function() {
    this.cache = {};
};
/**
* Set the number of milliseconds a request can take before automatically being terminated.
* @deprecated
* @param {Number} milliseconds
*/ AlgoliaSearchCore.prototype.setRequestTimeout = function(milliseconds) {
    if (milliseconds) this._timeouts.connect = this._timeouts.read = this._timeouts.write = milliseconds;
};
/**
* Set the three different (connect, read, write) timeouts to be used when requesting
* @param {Object} timeouts
*/ AlgoliaSearchCore.prototype.setTimeouts = function(timeouts) {
    this._timeouts = timeouts;
};
/**
* Get the three different (connect, read, write) timeouts to be used when requesting
* @param {Object} timeouts
*/ AlgoliaSearchCore.prototype.getTimeouts = function() {
    return this._timeouts;
};
AlgoliaSearchCore.prototype._getAppIdData = function() {
    var data = store.get(this.applicationID);
    if (data !== null) this._cacheAppIdData(data);
    return data;
};
AlgoliaSearchCore.prototype._setAppIdData = function(data) {
    data.lastChange = new Date().getTime();
    this._cacheAppIdData(data);
    return store.set(this.applicationID, data);
};
AlgoliaSearchCore.prototype._checkAppIdData = function() {
    var data = this._getAppIdData();
    var now = new Date().getTime();
    if (data === null || now - data.lastChange > RESET_APP_DATA_TIMER) return this._resetInitialAppIdData(data);
    return data;
};
AlgoliaSearchCore.prototype._resetInitialAppIdData = function(data) {
    var newData = data || {};
    newData.hostIndexes = {
        read: 0,
        write: 0
    };
    newData.timeoutMultiplier = 1;
    newData.shuffleResult = newData.shuffleResult || shuffle([
        1,
        2,
        3
    ]);
    return this._setAppIdData(newData);
};
AlgoliaSearchCore.prototype._cacheAppIdData = function(data) {
    this._hostIndexes = data.hostIndexes;
    this._timeoutMultiplier = data.timeoutMultiplier;
    this._shuffleResult = data.shuffleResult;
};
AlgoliaSearchCore.prototype._partialAppIdDataUpdate = function(newData) {
    var foreach = require("foreach");
    var currentData = this._getAppIdData();
    foreach(newData, function(value, key) {
        currentData[key] = value;
    });
    return this._setAppIdData(currentData);
};
AlgoliaSearchCore.prototype._getHostByType = function(hostType) {
    return this.hosts[hostType][this._getHostIndexByType(hostType)];
};
AlgoliaSearchCore.prototype._getTimeoutMultiplier = function() {
    return this._timeoutMultiplier;
};
AlgoliaSearchCore.prototype._getHostIndexByType = function(hostType) {
    return this._hostIndexes[hostType];
};
AlgoliaSearchCore.prototype._setHostIndexByType = function(hostIndex, hostType) {
    var clone = require("./clone");
    var newHostIndexes = clone(this._hostIndexes);
    newHostIndexes[hostType] = hostIndex;
    this._partialAppIdDataUpdate({
        hostIndexes: newHostIndexes
    });
    return hostIndex;
};
AlgoliaSearchCore.prototype._incrementHostIndex = function(hostType) {
    return this._setHostIndexByType((this._getHostIndexByType(hostType) + 1) % this.hosts[hostType].length, hostType);
};
AlgoliaSearchCore.prototype._incrementTimeoutMultipler = function() {
    var timeoutMultiplier = Math.max(this._timeoutMultiplier + 1, 4);
    return this._partialAppIdDataUpdate({
        timeoutMultiplier: timeoutMultiplier
    });
};
AlgoliaSearchCore.prototype._getTimeoutsForRequest = function(hostType) {
    return {
        connect: this._timeouts.connect * this._timeoutMultiplier,
        complete: this._timeouts[hostType] * this._timeoutMultiplier
    };
};
function prepareHost(protocol) {
    return function prepare(host) {
        return protocol + "//" + host.toLowerCase();
    };
}
// Prototype.js < 1.7, a widely used library, defines a weird
// Array.prototype.toJSON function that will fail to stringify our content
// appropriately
// refs:
//   - https://groups.google.com/forum/#!topic/prototype-core/E-SAVvV_V9Q
//   - https://github.com/sstephenson/prototype/commit/038a2985a70593c1a86c230fadbdfe2e4898a48c
//   - http://stackoverflow.com/a/3148441/147079
function safeJSONStringify(obj) {
    /* eslint no-extend-native:0 */ if (Array.prototype.toJSON === undefined) return JSON.stringify(obj);
    var toJSON = Array.prototype.toJSON;
    delete Array.prototype.toJSON;
    var out = JSON.stringify(obj);
    Array.prototype.toJSON = toJSON;
    return out;
}
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    // While there remain elements to shuffle...
    while(currentIndex !== 0){
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function removeCredentials(headers) {
    var newHeaders = {};
    for(var headerName in headers)if (Object.prototype.hasOwnProperty.call(headers, headerName)) {
        var value;
        if (headerName === "x-algolia-api-key" || headerName === "x-algolia-application-id") value = "**hidden for security purposes**";
        else value = headers[headerName];
        newHeaders[headerName] = value;
    }
    return newHeaders;
}

},{"./errors":"6bEkW","./exitPromise.js":"iOCHq","./IndexCore.js":"5Q5cC","./store.js":"kC6yK","debug":"l0oUb","./clone.js":"cxc5w","isarray":"hk7XJ","./map.js":"c7pKt","foreach":"3ZSmQ","./omit.js":"8B7BN","./clone":"cxc5w"}],"kC6yK":[function(require,module,exports) {
var global = arguments[3];
var debug = require("debug")("algoliasearch:src/hostIndexState.js");
var localStorageNamespace = "algoliasearch-client-js";
var store;
var moduleStore = {
    state: {},
    set: function(key, data) {
        this.state[key] = data;
        return this.state[key];
    },
    get: function(key) {
        return this.state[key] || null;
    }
};
var localStorageStore = {
    set: function(key, data) {
        moduleStore.set(key, data); // always replicate localStorageStore to moduleStore in case of failure
        try {
            var namespace = JSON.parse(global.localStorage[localStorageNamespace]);
            namespace[key] = data;
            global.localStorage[localStorageNamespace] = JSON.stringify(namespace);
            return namespace[key];
        } catch (e) {
            return localStorageFailure(key, e);
        }
    },
    get: function(key) {
        try {
            return JSON.parse(global.localStorage[localStorageNamespace])[key] || null;
        } catch (e) {
            return localStorageFailure(key, e);
        }
    }
};
function localStorageFailure(key, e) {
    debug("localStorage failed with", e);
    cleanup();
    store = moduleStore;
    return store.get(key);
}
store = supportsLocalStorage() ? localStorageStore : moduleStore;
module.exports = {
    get: getOrSet,
    set: getOrSet,
    supportsLocalStorage: supportsLocalStorage
};
function getOrSet(key, data) {
    if (arguments.length === 1) return store.get(key);
    return store.set(key, data);
}
function supportsLocalStorage() {
    try {
        if ("localStorage" in global && global.localStorage !== null) {
            if (!global.localStorage[localStorageNamespace]) // actual creation of the namespace
            global.localStorage.setItem(localStorageNamespace, JSON.stringify({}));
            return true;
        }
        return false;
    } catch (_) {
        return false;
    }
}
// In case of any error on localStorage, we clean our own namespace, this should handle
// quota errors when a lot of keys + data are used
function cleanup() {
    try {
        global.localStorage.removeItem(localStorageNamespace);
    } catch (_) {
    // nothing to do
    }
}

},{"debug":"l0oUb"}],"l0oUb":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */ exports = module.exports = require("./debug");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */ exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") return true;
    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ exports.formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
    }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    var useColors1 = this.useColors;
    args[0] = (useColors1 ? "%c" : "") + this.namespace + (useColors1 ? " %c" : " ") + args[0] + (useColors1 ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors1) return;
    var c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */ function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (null == namespaces) exports.storage.removeItem("debug");
        else exports.storage.debug = namespaces;
    } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    var r;
    try {
        r = exports.storage.debug;
    } catch (e) {}
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) r = undefined;
    return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */ exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        return window.localStorage;
    } catch (e) {}
}

},{"process":"d5jf4","./debug":"W9ObK"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
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
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
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
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"W9ObK":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */ exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require("ms");
/**
 * The currently active debug mode names, and names to skip.
 */ exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */ exports.formatters = {};
/**
 * Previous log timestamp.
 */ var prevTime;
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */ function selectColor(namespace) {
    var hash = 0, i;
    for(i in namespace){
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */ function createDebug(namespace) {
    function debug() {
        // disabled?
        if (!debug.enabled) return;
        var self = debug;
        // set `diff` timestamp
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        // turn the `arguments` into a proper Array
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) // anything else let's inspect with %O
        args.unshift("%O");
        // apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
            // if we encounter an escaped % then don't increase the array index
            if (match === "%%") return match;
            index++;
            var formatter = exports.formatters[format];
            if ("function" === typeof formatter) {
                var val = args[index];
                match = formatter.call(self, val);
                // now we need to remove `args[index]` since it's inlined in the `format`
                args.splice(index, 1);
                index--;
            }
            return match;
        });
        // apply env-specific formatting (colors, etc.)
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    // env-specific initialization logic for debug instances
    if ("function" === typeof exports.init) exports.init(debug);
    return debug;
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */ function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for(var i = 0; i < len; i++){
        if (!split[i]) continue; // ignore empty strings
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        else exports.names.push(new RegExp("^" + namespaces + "$"));
    }
}
/**
 * Disable debug output.
 *
 * @api public
 */ function disable() {
    exports.enable("");
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */ function enabled(name) {
    var i, len;
    for(i = 0, len = exports.skips.length; i < len; i++){
        if (exports.skips[i].test(name)) return false;
    }
    for(i = 0, len = exports.names.length; i < len; i++){
        if (exports.names[i].test(name)) return true;
    }
    return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */ function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
}

},{"ms":"jauEe"}],"jauEe":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) return parse(val);
    else if (type === "number" && isNaN(val) === false) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    if (ms >= d) return Math.round(ms / d) + "d";
    if (ms >= h) return Math.round(ms / h) + "h";
    if (ms >= m) return Math.round(ms / m) + "m";
    if (ms >= s) return Math.round(ms / s) + "s";
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, n, name) {
    if (ms < n) return;
    if (ms < n * 1.5) return Math.floor(ms / n) + " " + name;
    return Math.ceil(ms / n) + " " + name + "s";
}

},{}],"a11WD":[function(require,module,exports) {
module.exports = createAnalyticsClient;
var algoliasearch = require("../index.js");
function createAnalyticsClient(appId, apiKey, opts) {
    var analytics = {};
    opts = opts || {};
    // there need to be 4 hosts, like on the client, since if requests fail,
    // the counter goes up by 1, so we need to have the same amount of hosts
    // 4 because: -dsn, -1, -2, -3
    // This is done because the APPID used for search will be the same for the analytics client created,
    // and since the state of available hosts is shared by APPID globally for the module, we had issues
    // where the hostIndex would be 1 while the array was only one entry (you got an empty host)
    opts.hosts = opts.hosts || [
        "analytics.algolia.com",
        "analytics.algolia.com",
        "analytics.algolia.com",
        "analytics.algolia.com"
    ];
    opts.protocol = opts.protocol || "https:";
    analytics.as = algoliasearch(appId, apiKey, opts);
    analytics.getABTests = function(_params, callback) {
        var params = params || {};
        var offset = params.offset || 0;
        var limit = params.limit || 10;
        return this.as._jsonRequest({
            method: "GET",
            url: "/2/abtests?offset=" + encodeURIComponent(offset) + "&limit=" + encodeURIComponent(limit),
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.getABTest = function(abTestID, callback) {
        return this.as._jsonRequest({
            method: "GET",
            url: "/2/abtests/" + encodeURIComponent(abTestID),
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.addABTest = function(abTest, callback) {
        return this.as._jsonRequest({
            method: "POST",
            url: "/2/abtests",
            body: abTest,
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.stopABTest = function(abTestID, callback) {
        return this.as._jsonRequest({
            method: "POST",
            url: "/2/abtests/" + encodeURIComponent(abTestID) + "/stop",
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.deleteABTest = function(abTestID, callback) {
        return this.as._jsonRequest({
            method: "DELETE",
            url: "/2/abtests/" + encodeURIComponent(abTestID),
            hostType: "write",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.waitTask = function(indexName, taskID, callback) {
        return this.as.initIndex(indexName).waitTask(taskID, callback);
    };
    return analytics;
}

},{"../index.js":"iyQxX"}],"eKeLV":[function(require,module,exports) {
"use strict";
var global = require("global");
var Promise = global.Promise || require("es6-promise").Promise;
// This is the standalone browser build entry point
// Browser implementation of the Algolia Search JavaScript client,
// using XMLHttpRequest, XDomainRequest and JSONP as fallback
module.exports = function createAlgoliasearch(AlgoliaSearch, uaSuffix) {
    var inherits = require("inherits");
    var errors = require("../errors");
    var inlineHeaders = require("./inline-headers");
    var jsonpRequest = require("./jsonp-request");
    var places = require("../places.js");
    uaSuffix = uaSuffix || "";
    function algoliasearch(applicationID, apiKey, opts) {
        var cloneDeep = require("../clone.js");
        opts = cloneDeep(opts || {});
        opts._ua = opts._ua || algoliasearch.ua;
        return new AlgoliaSearchBrowser(applicationID, apiKey, opts);
    }
    algoliasearch.version = require("../version.js");
    algoliasearch.ua = "Algolia for JavaScript (" + algoliasearch.version + "); " + uaSuffix;
    algoliasearch.initPlaces = places(algoliasearch);
    // we expose into window no matter how we are used, this will allow
    // us to easily debug any website running algolia
    global.__algolia = {
        debug: require("debug"),
        algoliasearch: algoliasearch
    };
    var support = {
        hasXMLHttpRequest: "XMLHttpRequest" in global,
        hasXDomainRequest: "XDomainRequest" in global
    };
    if (support.hasXMLHttpRequest) support.cors = "withCredentials" in new XMLHttpRequest();
    function AlgoliaSearchBrowser() {
        // call AlgoliaSearch constructor
        AlgoliaSearch.apply(this, arguments);
    }
    inherits(AlgoliaSearchBrowser, AlgoliaSearch);
    AlgoliaSearchBrowser.prototype._request = function request(url, opts) {
        return new Promise(function wrapRequest(resolve, reject) {
            // no cors or XDomainRequest, no request
            if (!support.cors && !support.hasXDomainRequest) {
                // very old browser, not supported
                reject(new errors.Network("CORS not supported"));
                return;
            }
            url = inlineHeaders(url, opts.headers);
            var body = opts.body;
            var req = support.cors ? new XMLHttpRequest() : new XDomainRequest();
            var reqTimeout;
            var timedOut;
            var connected = false;
            reqTimeout = setTimeout(onTimeout, opts.timeouts.connect);
            // we set an empty onprogress listener
            // so that XDomainRequest on IE9 is not aborted
            // refs:
            //  - https://github.com/algolia/algoliasearch-client-js/issues/76
            //  - https://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment
            req.onprogress = onProgress;
            if ("onreadystatechange" in req) req.onreadystatechange = onReadyStateChange;
            req.onload = onLoad;
            req.onerror = onError;
            // do not rely on default XHR async flag, as some analytics code like hotjar
            // breaks it and set it to false by default
            if (req instanceof XMLHttpRequest) {
                req.open(opts.method, url, true);
                // The Analytics API never accepts Auth headers as query string
                // this option exists specifically for them.
                if (opts.forceAuthHeaders) {
                    req.setRequestHeader("x-algolia-application-id", opts.headers["x-algolia-application-id"]);
                    req.setRequestHeader("x-algolia-api-key", opts.headers["x-algolia-api-key"]);
                }
            } else req.open(opts.method, url);
            // headers are meant to be sent after open
            if (support.cors) {
                if (body) {
                    if (opts.method === "POST") // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Simple_requests
                    req.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    else req.setRequestHeader("content-type", "application/json");
                }
                req.setRequestHeader("accept", "application/json");
            }
            if (body) req.send(body);
            else req.send();
            // event object not received in IE8, at least
            // but we do not use it, still important to note
            function onLoad() {
                // When browser does not supports req.timeout, we can
                // have both a load and timeout event, since handled by a dumb setTimeout
                if (timedOut) return;
                clearTimeout(reqTimeout);
                var out;
                try {
                    out = {
                        body: JSON.parse(req.responseText),
                        responseText: req.responseText,
                        statusCode: req.status,
                        // XDomainRequest does not have any response headers
                        headers: req.getAllResponseHeaders && req.getAllResponseHeaders() || {}
                    };
                } catch (e) {
                    out = new errors.UnparsableJSON({
                        more: req.responseText
                    });
                }
                if (out instanceof errors.UnparsableJSON) reject(out);
                else resolve(out);
            }
            function onError(event) {
                if (timedOut) return;
                clearTimeout(reqTimeout);
                // error event is trigerred both with XDR/XHR on:
                //   - DNS error
                //   - unallowed cross domain request
                reject(new errors.Network({
                    more: event
                }));
            }
            function onTimeout() {
                timedOut = true;
                req.abort();
                reject(new errors.RequestTimeout());
            }
            function onConnect() {
                connected = true;
                clearTimeout(reqTimeout);
                reqTimeout = setTimeout(onTimeout, opts.timeouts.complete);
            }
            function onProgress() {
                if (!connected) onConnect();
            }
            function onReadyStateChange() {
                if (!connected && req.readyState > 1) onConnect();
            }
        });
    };
    AlgoliaSearchBrowser.prototype._request.fallback = function requestFallback(url, opts) {
        url = inlineHeaders(url, opts.headers);
        return new Promise(function wrapJsonpRequest(resolve, reject) {
            jsonpRequest(url, opts, function jsonpRequestDone(err, content) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(content);
            });
        });
    };
    AlgoliaSearchBrowser.prototype._promise = {
        reject: function rejectPromise(val) {
            return Promise.reject(val);
        },
        resolve: function resolvePromise(val) {
            return Promise.resolve(val);
        },
        delay: function delayPromise(ms) {
            return new Promise(function resolveOnTimeout(resolve /* , reject*/ ) {
                setTimeout(resolve, ms);
            });
        },
        all: function all(promises) {
            return Promise.all(promises);
        }
    };
    return algoliasearch;
};

},{"global":"iU6IE","es6-promise":"kDkOs","inherits":"bRL3M","../errors":"6bEkW","./inline-headers":"b8qTb","./jsonp-request":"8dvCX","../places.js":"04eK8","../clone.js":"cxc5w","../version.js":"35Y2H","debug":"l0oUb"}],"iU6IE":[function(require,module,exports) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {};
module.exports = win;

},{}],"kDkOs":[function(require,module,exports) {
var process = require("process");
var global = arguments[3];
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function objectOrFunction(x) {
        var type = typeof x;
        return x !== null && (type === "object" || type === "function");
    }
    function isFunction(x) {
        return typeof x === "function";
    }
    var _isArray = void 0;
    if (Array.isArray) _isArray = Array.isArray;
    else _isArray = function(x) {
        return Object.prototype.toString.call(x) === "[object Array]";
    };
    var isArray = _isArray;
    var len = 0;
    var vertxNext = void 0;
    var customSchedulerFn = void 0;
    var asap = function asap(callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
            // If len is 2, that means that we need to schedule an async flush.
            // If additional callbacks are queued before the queue is flushed, they
            // will be processed by this flush that we are scheduling.
            if (customSchedulerFn) customSchedulerFn(flush);
            else scheduleFlush();
        }
    };
    function setScheduler(scheduleFn) {
        customSchedulerFn = scheduleFn;
    }
    function setAsap(asapFn) {
        asap = asapFn;
    }
    var browserWindow = typeof window !== "undefined" ? window : undefined;
    var browserGlobal = browserWindow || {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var isNode = typeof self === "undefined" && typeof process !== "undefined" && ({}).toString.call(process) === "[object process]";
    // test for web worker but not in IE10
    var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
    // node
    function useNextTick() {
        // node version 0.10.x displays a deprecation warning when nextTick is used recursively
        // see https://github.com/cujojs/when/issues/410 for details
        return function() {
            return process.nextTick(flush);
        };
    }
    // vertx
    function useVertxTimer() {
        if (typeof vertxNext !== "undefined") return function() {
            vertxNext(flush);
        };
        return useSetTimeout();
    }
    function useMutationObserver() {
        var iterations = 0;
        var observer = new BrowserMutationObserver(flush);
        var node = document.createTextNode("");
        observer.observe(node, {
            characterData: true
        });
        return function() {
            node.data = iterations = ++iterations % 2;
        };
    }
    // web worker
    function useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function() {
            return channel.port2.postMessage(0);
        };
    }
    function useSetTimeout() {
        // Store setTimeout reference so es6-promise will be unaffected by
        // other code modifying setTimeout (like sinon.useFakeTimers())
        var globalSetTimeout = setTimeout;
        return function() {
            return globalSetTimeout(flush, 1);
        };
    }
    var queue = new Array(1000);
    function flush() {
        for(var i = 0; i < len; i += 2){
            var callback = queue[i];
            var arg = queue[i + 1];
            callback(arg);
            queue[i] = undefined;
            queue[i + 1] = undefined;
        }
        len = 0;
    }
    function attemptVertx() {
        try {
            var vertx = Function("return this")().require("vertx");
            vertxNext = vertx.runOnLoop || vertx.runOnContext;
            return useVertxTimer();
        } catch (e) {
            return useSetTimeout();
        }
    }
    var scheduleFlush = void 0;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (isNode) scheduleFlush = useNextTick();
    else if (BrowserMutationObserver) scheduleFlush = useMutationObserver();
    else if (isWorker) scheduleFlush = useMessageChannel();
    else if (browserWindow === undefined && true) scheduleFlush = attemptVertx();
    else scheduleFlush = useSetTimeout();
    function then(onFulfillment, onRejection) {
        var parent = this;
        var child = new this.constructor(noop);
        if (child[PROMISE_ID] === undefined) makePromise(child);
        var _state = parent._state;
        if (_state) {
            var callback = arguments[_state - 1];
            asap(function() {
                return invokeCallback(_state, child, callback, parent._result);
            });
        } else subscribe(parent, child, onFulfillment, onRejection);
        return child;
    }
    /**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/ function resolve$1(object) {
        /*jshint validthis:true */ var Constructor = this;
        if (object && typeof object === "object" && object.constructor === Constructor) return object;
        var promise = new Constructor(noop);
        resolve1(promise, object);
        return promise;
    }
    var PROMISE_ID = Math.random().toString(36).substring(2);
    function noop() {}
    var PENDING = void 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    function selfFulfillment() {
        return new TypeError("You cannot resolve a promise with itself");
    }
    function cannotReturnOwn() {
        return new TypeError("A promises callback cannot return that same promise.");
    }
    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
        try {
            then$$1.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
            return e;
        }
    }
    function handleForeignThenable(promise1, thenable, then$$1) {
        asap(function(promise) {
            var sealed = false;
            var error = tryThen(then$$1, thenable, function(value) {
                if (sealed) return;
                sealed = true;
                if (thenable !== value) resolve1(promise, value);
                else fulfill(promise, value);
            }, function(reason) {
                if (sealed) return;
                sealed = true;
                reject1(promise, reason);
            }, "Settle: " + (promise._label || " unknown promise"));
            if (!sealed && error) {
                sealed = true;
                reject1(promise, error);
            }
        }, promise1);
    }
    function handleOwnThenable(promise, thenable) {
        if (thenable._state === FULFILLED) fulfill(promise, thenable._result);
        else if (thenable._state === REJECTED) reject1(promise, thenable._result);
        else subscribe(thenable, undefined, function(value) {
            return resolve1(promise, value);
        }, function(reason) {
            return reject1(promise, reason);
        });
    }
    function handleMaybeThenable(promise, maybeThenable, then$$1) {
        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) handleOwnThenable(promise, maybeThenable);
        else {
            if (then$$1 === undefined) fulfill(promise, maybeThenable);
            else if (isFunction(then$$1)) handleForeignThenable(promise, maybeThenable, then$$1);
            else fulfill(promise, maybeThenable);
        }
    }
    function resolve1(promise, value) {
        if (promise === value) reject1(promise, selfFulfillment());
        else if (objectOrFunction(value)) {
            var then$$1 = void 0;
            try {
                then$$1 = value.then;
            } catch (error) {
                reject1(promise, error);
                return;
            }
            handleMaybeThenable(promise, value, then$$1);
        } else fulfill(promise, value);
    }
    function publishRejection(promise) {
        if (promise._onerror) promise._onerror(promise._result);
        publish(promise);
    }
    function fulfill(promise, value) {
        if (promise._state !== PENDING) return;
        promise._result = value;
        promise._state = FULFILLED;
        if (promise._subscribers.length !== 0) asap(publish, promise);
    }
    function reject1(promise, reason) {
        if (promise._state !== PENDING) return;
        promise._state = REJECTED;
        promise._result = reason;
        asap(publishRejection, promise);
    }
    function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers;
        var length = _subscribers.length;
        parent._onerror = null;
        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;
        if (length === 0 && parent._state) asap(publish, parent);
    }
    function publish(promise) {
        var subscribers = promise._subscribers;
        var settled = promise._state;
        if (subscribers.length === 0) return;
        var child = void 0, callback = void 0, detail = promise._result;
        for(var i = 0; i < subscribers.length; i += 3){
            child = subscribers[i];
            callback = subscribers[i + settled];
            if (child) invokeCallback(settled, child, callback, detail);
            else callback(detail);
        }
        promise._subscribers.length = 0;
    }
    function invokeCallback(settled, promise, callback, detail) {
        var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
        if (hasCallback) {
            try {
                value = callback(detail);
            } catch (e) {
                succeeded = false;
                error = e;
            }
            if (promise === value) {
                reject1(promise, cannotReturnOwn());
                return;
            }
        } else value = detail;
        if (promise._state !== PENDING) ;
        else if (hasCallback && succeeded) resolve1(promise, value);
        else if (succeeded === false) reject1(promise, error);
        else if (settled === FULFILLED) fulfill(promise, value);
        else if (settled === REJECTED) reject1(promise, value);
    }
    function initializePromise(promise, resolver) {
        try {
            resolver(function resolvePromise(value) {
                resolve1(promise, value);
            }, function rejectPromise(reason) {
                reject1(promise, reason);
            });
        } catch (e) {
            reject1(promise, e);
        }
    }
    var id = 0;
    function nextId() {
        return id++;
    }
    function makePromise(promise) {
        promise[PROMISE_ID] = id++;
        promise._state = undefined;
        promise._result = undefined;
        promise._subscribers = [];
    }
    function validationError() {
        return new Error("Array Methods must be provided an Array");
    }
    var Enumerator1 = function() {
        function Enumerator(Constructor, input) {
            this._instanceConstructor = Constructor;
            this.promise = new Constructor(noop);
            if (!this.promise[PROMISE_ID]) makePromise(this.promise);
            if (isArray(input)) {
                this.length = input.length;
                this._remaining = input.length;
                this._result = new Array(this.length);
                if (this.length === 0) fulfill(this.promise, this._result);
                else {
                    this.length = this.length || 0;
                    this._enumerate(input);
                    if (this._remaining === 0) fulfill(this.promise, this._result);
                }
            } else reject1(this.promise, validationError());
        }
        Enumerator.prototype._enumerate = function _enumerate(input) {
            for(var i = 0; this._state === PENDING && i < input.length; i++)this._eachEntry(input[i], i);
        };
        Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
            var c = this._instanceConstructor;
            var resolve$$11 = c.resolve;
            if (resolve$$11 === resolve$1) {
                var _then = void 0;
                var error = void 0;
                var didError = false;
                try {
                    _then = entry.then;
                } catch (e) {
                    didError = true;
                    error = e;
                }
                if (_then === then && entry._state !== PENDING) this._settledAt(entry._state, i, entry._result);
                else if (typeof _then !== "function") {
                    this._remaining--;
                    this._result[i] = entry;
                } else if (c === Promise$1) {
                    var promise = new c(noop);
                    if (didError) reject1(promise, error);
                    else handleMaybeThenable(promise, entry, _then);
                    this._willSettleAt(promise, i);
                } else this._willSettleAt(new c(function(resolve$$1) {
                    return resolve$$1(entry);
                }), i);
            } else this._willSettleAt(resolve$$11(entry), i);
        };
        Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
            var promise = this.promise;
            if (promise._state === PENDING) {
                this._remaining--;
                if (state === REJECTED) reject1(promise, value);
                else this._result[i] = value;
            }
            if (this._remaining === 0) fulfill(promise, this._result);
        };
        Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
            var enumerator = this;
            subscribe(promise, undefined, function(value) {
                return enumerator._settledAt(FULFILLED, i, value);
            }, function(reason) {
                return enumerator._settledAt(REJECTED, i, reason);
            });
        };
        return Enumerator;
    }();
    /**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/ function all(entries) {
        return new Enumerator1(this, entries).promise;
    }
    /**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/ function race(entries) {
        /*jshint validthis:true */ var Constructor = this;
        if (!isArray(entries)) return new Constructor(function(_, reject) {
            return reject(new TypeError("You must pass an array to race."));
        });
        else return new Constructor(function(resolve, reject) {
            var length = entries.length;
            for(var i = 0; i < length; i++)Constructor.resolve(entries[i]).then(resolve, reject);
        });
    }
    /**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/ function reject$1(reason) {
        /*jshint validthis:true */ var Constructor = this;
        var promise = new Constructor(noop);
        reject1(promise, reason);
        return promise;
    }
    function needsResolver() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }
    function needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    /**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/ var Promise$1 = function() {
        function Promise(resolver) {
            this[PROMISE_ID] = nextId();
            this._result = this._state = undefined;
            this._subscribers = [];
            if (noop !== resolver) {
                typeof resolver !== "function" && needsResolver();
                this instanceof Promise ? initializePromise(this, resolver) : needsNew();
            }
        }
        /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */ /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */ Promise.prototype.catch = function _catch(onRejection) {
            return this.then(null, onRejection);
        };
        /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */ Promise.prototype.finally = function _finally(callback) {
            var promise = this;
            var constructor = promise.constructor;
            if (isFunction(callback)) return promise.then(function(value) {
                return constructor.resolve(callback()).then(function() {
                    return value;
                });
            }, function(reason) {
                return constructor.resolve(callback()).then(function() {
                    throw reason;
                });
            });
            return promise.then(callback, callback);
        };
        return Promise;
    }();
    Promise$1.prototype.then = then;
    Promise$1.all = all;
    Promise$1.race = race;
    Promise$1.resolve = resolve$1;
    Promise$1.reject = reject$1;
    Promise$1._setScheduler = setScheduler;
    Promise$1._setAsap = setAsap;
    Promise$1._asap = asap;
    /*global self*/ function polyfill() {
        var local = void 0;
        if (typeof global !== "undefined") local = global;
        else if (typeof self !== "undefined") local = self;
        else try {
            local = Function("return this")();
        } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var P = local.Promise;
        if (P) {
            var promiseToString = null;
            try {
                promiseToString = Object.prototype.toString.call(P.resolve());
            } catch (e) {
            // silently ignored
            }
            if (promiseToString === "[object Promise]" && !P.cast) return;
        }
        local.Promise = Promise$1;
    }
    // Strange compat..
    Promise$1.polyfill = polyfill;
    Promise$1.Promise = Promise$1;
    return Promise$1;
});

},{"process":"d5jf4"}],"b8qTb":[function(require,module,exports) {
"use strict";
module.exports = inlineHeaders;
var encode = require("querystring-es3/encode");
function inlineHeaders(url, headers) {
    if (/\?/.test(url)) url += "&";
    else url += "?";
    return url + encode(headers);
}

},{"querystring-es3/encode":"i5gNM"}],"i5gNM":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var stringifyPrimitive = function(v) {
    switch(typeof v){
        case "string":
            return v;
        case "boolean":
            return v ? "true" : "false";
        case "number":
            return isFinite(v) ? v : "";
        default:
            return "";
    }
};
module.exports = function(obj, sep, eq, name) {
    sep = sep || "&";
    eq = eq || "=";
    if (obj === null) obj = undefined;
    if (typeof obj === "object") return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
        else return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).join(sep);
    if (!name) return "";
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
};
function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for(var i = 0; i < xs.length; i++)res.push(f(xs[i], i));
    return res;
}
var objectKeys = Object.keys || function(obj) {
    var res = [];
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    return res;
};

},{}],"8dvCX":[function(require,module,exports) {
"use strict";
module.exports = jsonpRequest;
var errors = require("../errors");
var JSONPCounter = 0;
function jsonpRequest(url, opts, cb) {
    if (opts.method !== "GET") {
        cb(new Error("Method " + opts.method + " " + url + " is not supported by JSONP."));
        return;
    }
    opts.debug("JSONP: start");
    var cbCalled = false;
    var timedOut = false;
    JSONPCounter += 1;
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    var cbName = "algoliaJSONP_" + JSONPCounter;
    var done = false;
    window[cbName] = function(data) {
        removeGlobals();
        if (timedOut) {
            opts.debug("JSONP: Late answer, ignoring");
            return;
        }
        cbCalled = true;
        clean();
        cb(null, {
            body: data,
            responseText: JSON.stringify(data)
        });
    };
    // add callback by hand
    url += "&callback=" + cbName;
    // add body params manually
    if (opts.jsonBody && opts.jsonBody.params) url += "&" + opts.jsonBody.params;
    var ontimeout = setTimeout(timeout, opts.timeouts.complete);
    // script onreadystatechange needed only for
    // <= IE8
    // https://github.com/angular/angular.js/issues/4523
    script.onreadystatechange = readystatechange;
    script.onload = success;
    script.onerror = error;
    script.async = true;
    script.defer = true;
    script.src = url;
    head.appendChild(script);
    function success() {
        opts.debug("JSONP: success");
        if (done || timedOut) return;
        done = true;
        // script loaded but did not call the fn => script loading error
        if (!cbCalled) {
            opts.debug("JSONP: Fail. Script loaded but did not call the callback");
            clean();
            cb(new errors.JSONPScriptFail());
        }
    }
    function readystatechange() {
        if (this.readyState === "loaded" || this.readyState === "complete") success();
    }
    function clean() {
        clearTimeout(ontimeout);
        script.onload = null;
        script.onreadystatechange = null;
        script.onerror = null;
        head.removeChild(script);
    }
    function removeGlobals() {
        try {
            delete window[cbName];
            delete window[cbName + "_loaded"];
        } catch (e) {
            window[cbName] = window[cbName + "_loaded"] = undefined;
        }
    }
    function timeout() {
        opts.debug("JSONP: Script timeout");
        timedOut = true;
        clean();
        cb(new errors.RequestTimeout());
    }
    function error() {
        opts.debug("JSONP: Script error");
        if (done || timedOut) return;
        clean();
        cb(new errors.JSONPScriptError());
    }
}

},{"../errors":"6bEkW"}],"04eK8":[function(require,module,exports) {
module.exports = createPlacesClient;
var qs3 = require("querystring-es3");
var buildSearchMethod = require("./buildSearchMethod.js");
function createPlacesClient(algoliasearch) {
    return function places(appID, apiKey, opts) {
        var cloneDeep = require("./clone.js");
        opts = opts && cloneDeep(opts) || {};
        opts.hosts = opts.hosts || [
            "places-dsn.algolia.net",
            "places-1.algolianet.com",
            "places-2.algolianet.com",
            "places-3.algolianet.com"
        ];
        // allow initPlaces() no arguments => community rate limited
        if (arguments.length === 0 || typeof appID === "object" || appID === undefined) {
            appID = "";
            apiKey = "";
            opts._allowEmptyCredentials = true;
        }
        var client = algoliasearch(appID, apiKey, opts);
        var index = client.initIndex("places");
        index.search = buildSearchMethod("query", "/1/places/query");
        index.reverse = function(options, callback) {
            var encoded = qs3.encode(options);
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/places/reverse?" + encoded,
                hostType: "read",
                callback: callback
            });
        };
        index.getObject = function(objectID, callback) {
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/places/" + encodeURIComponent(objectID),
                hostType: "read",
                callback: callback
            });
        };
        return index;
    };
}

},{"querystring-es3":"7oCJH","./buildSearchMethod.js":"fGbut","./clone.js":"cxc5w"}],"7oCJH":[function(require,module,exports) {
"use strict";
exports.decode = exports.parse = require("./decode");
exports.encode = exports.stringify = require("./encode");

},{"./decode":"3WtwQ","./encode":"i5gNM"}],"3WtwQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = function(qs, sep, eq, options) {
    sep = sep || "&";
    eq = eq || "=";
    var obj = {};
    if (typeof qs !== "string" || qs.length === 0) return obj;
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === "number") maxKeys = options.maxKeys;
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) len = maxKeys;
    for(var i = 0; i < len; ++i){
        var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
        } else {
            kstr = x;
            vstr = "";
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) obj[k] = v;
        else if (isArray(obj[k])) obj[k].push(v);
        else obj[k] = [
            obj[k],
            v
        ];
    }
    return obj;
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
};

},{}],"35Y2H":[function(require,module,exports) {
"use strict";
module.exports = "3.35.1";

},{}],"5B89y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _instantSearch = require("./lib/InstantSearch");
var _instantSearchDefault = parcelHelpers.interopDefault(_instantSearch);
var _version = require("./lib/version");
var _versionDefault = parcelHelpers.interopDefault(_version);
var _helpers = require("./helpers");
var _infiniteHitsCache = require("./lib/infiniteHitsCache");
var instantsearch = function instantsearch(options) {
    return new (0, _instantSearchDefault.default)(options);
};
instantsearch.version = (0, _versionDefault.default);
instantsearch.snippet = (0, _helpers.snippet);
instantsearch.highlight = (0, _helpers.highlight);
instantsearch.insights = (0, _helpers.insights);
instantsearch.getInsightsAnonymousUserToken = (0, _helpers.getInsightsAnonymousUserToken);
instantsearch.createInfiniteHitsSessionStorageCache = (0, _infiniteHitsCache.createInfiniteHitsSessionStorageCache);
Object.defineProperty(instantsearch, "widgets", {
    get: function get() {
        throw new ReferenceError("\"instantsearch.widgets\" are not available from the ES build.\n\nTo import the widgets:\n\nimport { searchBox } from 'instantsearch.js/es/widgets'");
    }
});
Object.defineProperty(instantsearch, "connectors", {
    get: function get() {
        throw new ReferenceError("\"instantsearch.connectors\" are not available from the ES build.\n\nTo import the connectors:\n\nimport { connectSearchBox } from 'instantsearch.js/es/connectors'");
    }
});
exports.default = instantsearch;

},{"./lib/InstantSearch":"8mJmb","./lib/version":"hkkLK","./helpers":"8kgzi","./lib/infiniteHitsCache":"co24K","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8mJmb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _events = require("events");
var _eventsDefault = parcelHelpers.interopDefault(_events);
var _index = require("../widgets/index/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _version = require("./version");
var _versionDefault = parcelHelpers.interopDefault(_version);
var _createHelpers = require("./createHelpers");
var _createHelpersDefault = parcelHelpers.interopDefault(_createHelpers);
var _utils = require("./utils");
var _createRouterMiddleware = require("../middlewares/createRouterMiddleware");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: "instantsearch"
});
function defaultCreateURL() {
    return "#";
}
/**
 * Global options for an InstantSearch instance.
 */ /**
 * The actual implementation of the InstantSearch. This is
 * created using the `instantsearch` factory function.
 * It emits the 'render' event every time a search is done
 */ var InstantSearch = /*#__PURE__*/ function(_EventEmitter) {
    _inherits(InstantSearch1, _EventEmitter);
    function InstantSearch1(options) {
        var _this;
        _classCallCheck(this, InstantSearch1);
        _this = _possibleConstructorReturn(this, _getPrototypeOf(InstantSearch1).call(this));
        _defineProperty(_assertThisInitialized(_this), "client", void 0);
        _defineProperty(_assertThisInitialized(_this), "indexName", void 0);
        _defineProperty(_assertThisInitialized(_this), "insightsClient", void 0);
        _defineProperty(_assertThisInitialized(_this), "onStateChange", null);
        _defineProperty(_assertThisInitialized(_this), "helper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainHelper", void 0);
        _defineProperty(_assertThisInitialized(_this), "mainIndex", void 0);
        _defineProperty(_assertThisInitialized(_this), "started", void 0);
        _defineProperty(_assertThisInitialized(_this), "templatesConfig", void 0);
        _defineProperty(_assertThisInitialized(_this), "renderState", {});
        _defineProperty(_assertThisInitialized(_this), "_stalledSearchDelay", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchStalledTimer", void 0);
        _defineProperty(_assertThisInitialized(_this), "_isSearchStalled", void 0);
        _defineProperty(_assertThisInitialized(_this), "_initialUiState", void 0);
        _defineProperty(_assertThisInitialized(_this), "_createURL", void 0);
        _defineProperty(_assertThisInitialized(_this), "_searchFunction", void 0);
        _defineProperty(_assertThisInitialized(_this), "_mainHelperSearch", void 0);
        _defineProperty(_assertThisInitialized(_this), "middleware", []);
        _defineProperty(_assertThisInitialized(_this), "sendEventToInsights", void 0);
        _defineProperty(_assertThisInitialized(_this), "scheduleSearch", (0, _utils.defer)(function() {
            if (_this.started) _this.mainHelper.search();
        }));
        _defineProperty(_assertThisInitialized(_this), "scheduleRender", (0, _utils.defer)(function() {
            if (!_this.mainHelper.hasPendingRequests()) {
                clearTimeout(_this._searchStalledTimer);
                _this._searchStalledTimer = null;
                _this._isSearchStalled = false;
            }
            _this.mainIndex.render({
                instantSearchInstance: _assertThisInitialized(_this)
            });
            _this.emit("render");
        }));
        _defineProperty(_assertThisInitialized(_this), "setUiState", function(uiState) {
            if (!_this.mainHelper) throw new Error(withUsage("The `start` method needs to be called before `setUiState`."));
            (0, _utils.warning)(false, "\n`setUiState` provides a powerful way to manage the UI state. This is considered experimental as the API might change in a next minor version.\n\nFeel free to give us feedback on GitHub: https://github.com/algolia/instantsearch.js/issues/new\n    "); // We refresh the index UI state to update the local UI state that the
            // main index passes to the function form of `setUiState`.
            _this.mainIndex.refreshUiState();
            var nextUiState = typeof uiState === "function" ? uiState(_this.mainIndex.getWidgetUiState({})) : uiState;
            var setIndexHelperState1 = function setIndexHelperState(indexWidget) {
                (0, _utils.checkIndexUiState)({
                    index: indexWidget,
                    indexUiState: nextUiState[indexWidget.getIndexId()]
                });
                indexWidget.getHelper().overrideStateWithoutTriggeringChangeEvent(indexWidget.getWidgetSearchParameters(indexWidget.getHelper().state, {
                    uiState: nextUiState[indexWidget.getIndexId()]
                }));
                indexWidget.getWidgets().filter((0, _index.isIndexWidget)).forEach(setIndexHelperState);
            };
            setIndexHelperState1(_this.mainIndex);
            _this.scheduleSearch();
            _this.onInternalStateChange();
        });
        _defineProperty(_assertThisInitialized(_this), "onInternalStateChange", function() {
            var nextUiState = _this.mainIndex.getWidgetUiState({});
            _this.middleware.forEach(function(m) {
                m.onStateChange({
                    uiState: nextUiState
                });
            });
        });
        var _options$indexName = options.indexName, indexName = _options$indexName === void 0 ? null : _options$indexName, numberLocale = options.numberLocale, _options$initialUiSta = options.initialUiState, initialUiState = _options$initialUiSta === void 0 ? {} : _options$initialUiSta, _options$routing = options.routing, routing = _options$routing === void 0 ? null : _options$routing, searchFunction = options.searchFunction, _options$stalledSearc = options.stalledSearchDelay, stalledSearchDelay = _options$stalledSearc === void 0 ? 200 : _options$stalledSearc, _options$searchClient = options.searchClient, searchClient = _options$searchClient === void 0 ? null : _options$searchClient, _options$insightsClie = options.insightsClient, insightsClient = _options$insightsClie === void 0 ? null : _options$insightsClie, _options$onStateChang = options.onStateChange, onStateChange = _options$onStateChang === void 0 ? null : _options$onStateChang;
        if (indexName === null) throw new Error(withUsage("The `indexName` option is required."));
        if (searchClient === null) throw new Error(withUsage("The `searchClient` option is required."));
        if (typeof searchClient.search !== "function") throw new Error("The `searchClient` must implement a `search` method.\n\nSee: https://www.algolia.com/doc/guides/building-search-ui/going-further/backend-search/in-depth/backend-instantsearch/js/");
        if (typeof searchClient.addAlgoliaAgent === "function") searchClient.addAlgoliaAgent("instantsearch.js (".concat((0, _versionDefault.default), ")"));
        (0, _utils.warning)(insightsClient === null, "`insightsClient` property has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (insightsClient && typeof insightsClient !== "function") throw new Error(withUsage("The `insightsClient` option should be a function."));
        (0, _utils.warning)(!options.searchParameters, "The `searchParameters` option is deprecated and will not be supported in InstantSearch.js 4.x.\n\nYou can replace it with the `configure` widget:\n\n```\nsearch.addWidgets([\n  configure(".concat(JSON.stringify(options.searchParameters, null, 2), ")\n]);\n```\n\nSee ").concat((0, _utils.createDocumentationLink)({
            name: "configure"
        })));
        _this.client = searchClient;
        _this.insightsClient = insightsClient;
        _this.indexName = indexName;
        _this.helper = null;
        _this.mainHelper = null;
        _this.mainIndex = (0, _indexDefault.default)({
            indexName: indexName
        });
        _this.onStateChange = onStateChange;
        _this.started = false;
        _this.templatesConfig = {
            helpers: (0, _createHelpersDefault.default)({
                numberLocale: numberLocale
            }),
            compileOptions: {}
        };
        _this._stalledSearchDelay = stalledSearchDelay;
        _this._searchStalledTimer = null;
        _this._isSearchStalled = false;
        _this._createURL = defaultCreateURL;
        _this._initialUiState = initialUiState;
        if (searchFunction) _this._searchFunction = searchFunction;
        _this.sendEventToInsights = (0, _utils.noop);
        if (routing) {
            var routerOptions = typeof routing === "boolean" ? undefined : routing;
            _this.use((0, _createRouterMiddleware.createRouterMiddleware)(routerOptions));
        }
        return _this;
    }
    /**
   * Hooks a middleware into the InstantSearch lifecycle.
   *
   * This method is considered as experimental and is subject to change in
   * minor versions.
   */ _createClass(InstantSearch1, [
        {
            key: "use",
            value: function use() {
                var _this2 = this;
                for(var _len = arguments.length, middleware = new Array(_len), _key = 0; _key < _len; _key++)middleware[_key] = arguments[_key];
                var newMiddlewareList = middleware.map(function(fn) {
                    var newMiddleware = fn({
                        instantSearchInstance: _this2
                    });
                    _this2.middleware.push(newMiddleware);
                    return newMiddleware;
                }); // If the instance has already started, we directly subscribe the
                // middleware so they're notified of changes.
                if (this.started) newMiddlewareList.forEach(function(m) {
                    m.subscribe();
                });
                return this;
            } // @major we shipped with EXPERIMENTAL_use, but have changed that to just `use` now
        },
        {
            key: "EXPERIMENTAL_use",
            value: function EXPERIMENTAL_use() {
                (0, _utils.warning)(false, "The middleware API is now considered stable, so we recommend replacing `EXPERIMENTAL_use` with `use` before upgrading to the next major version.");
                return this.use.apply(this, arguments);
            }
        },
        {
            key: "addWidget",
            value: function addWidget(widget) {
                (0, _utils.warning)(false, "addWidget will still be supported in 4.x releases, but not further. It is replaced by `addWidgets([widget])`");
                return this.addWidgets([
                    widget
                ]);
            }
        },
        {
            key: "addWidgets",
            value: function addWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage("The `addWidgets` method expects an array of widgets. Please use `addWidget`."));
                if (widgets.some(function(widget) {
                    return typeof widget.init !== "function" && typeof widget.render !== "function";
                })) throw new Error(withUsage("The widget definition expects a `render` and/or an `init` method."));
                this.mainIndex.addWidgets(widgets);
                return this;
            }
        },
        {
            key: "removeWidget",
            value: function removeWidget(widget) {
                (0, _utils.warning)(false, "removeWidget will still be supported in 4.x releases, but not further. It is replaced by `removeWidgets([widget])`");
                return this.removeWidgets([
                    widget
                ]);
            }
        },
        {
            key: "removeWidgets",
            value: function removeWidgets(widgets) {
                if (!Array.isArray(widgets)) throw new Error(withUsage("The `removeWidgets` method expects an array of widgets. Please use `removeWidget`."));
                if (widgets.some(function(widget) {
                    return typeof widget.dispose !== "function";
                })) throw new Error(withUsage("The widget definition expects a `dispose` method."));
                this.mainIndex.removeWidgets(widgets);
                return this;
            }
        },
        {
            key: "start",
            value: function start() {
                var _this3 = this;
                if (this.started) throw new Error(withUsage("The `start` method has already been called once."));
                 // This Helper is used for the queries, we don't care about its state. The
                // states are managed at the `index` level. We use this Helper to create
                // DerivedHelper scoped into the `index` widgets.
                var mainHelper = (0, _algoliasearchHelperDefault.default)(this.client, this.indexName);
                mainHelper.search = function() {
                    // This solution allows us to keep the exact same API for the users but
                    // under the hood, we have a different implementation. It should be
                    // completely transparent for the rest of the codebase. Only this module
                    // is impacted.
                    return mainHelper.searchOnlyWithDerivedHelpers();
                };
                if (this._searchFunction) {
                    // this client isn't used to actually search, but required for the helper
                    // to not throw errors
                    var fakeClient = {
                        search: function search() {
                            return new Promise((0, _utils.noop));
                        }
                    };
                    this._mainHelperSearch = mainHelper.search.bind(mainHelper);
                    mainHelper.search = function() {
                        var mainIndexHelper = _this3.mainIndex.getHelper();
                        var searchFunctionHelper = (0, _algoliasearchHelperDefault.default)(fakeClient, mainIndexHelper.state.index, mainIndexHelper.state);
                        searchFunctionHelper.once("search", function(_ref) {
                            var state = _ref.state;
                            mainIndexHelper.overrideStateWithoutTriggeringChangeEvent(state);
                            _this3._mainHelperSearch();
                        }); // Forward state changes from `searchFunctionHelper` to `mainIndexHelper`
                        searchFunctionHelper.on("change", function(_ref2) {
                            var state = _ref2.state;
                            mainIndexHelper.setState(state);
                        });
                        _this3._searchFunction(searchFunctionHelper);
                        return mainHelper;
                    };
                } // Only the "main" Helper emits the `error` event vs the one for `search`
                // and `results` that are also emitted on the derived one.
                mainHelper.on("error", function(_ref3) {
                    var error = _ref3.error;
                    _this3.emit("error", {
                        error: error
                    });
                });
                this.mainHelper = mainHelper;
                this.mainIndex.init({
                    instantSearchInstance: this,
                    parent: null,
                    uiState: this._initialUiState
                });
                this.middleware.forEach(function(m) {
                    m.subscribe();
                });
                mainHelper.search(); // Keep the previous reference for legacy purpose, some pattern use
                // the direct Helper access `search.helper` (e.g multi-index).
                this.helper = this.mainIndex.getHelper(); // track we started the search if we add more widgets,
                // to init them directly after add
                this.started = true;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this.scheduleSearch.cancel();
                this.scheduleRender.cancel();
                clearTimeout(this._searchStalledTimer);
                this.removeWidgets(this.mainIndex.getWidgets());
                this.mainIndex.dispose(); // You can not start an instance two times, therefore a disposed instance
                // needs to set started as false otherwise this can not be restarted at a
                // later point.
                this.started = false; // The helper needs to be reset to perform the next search from a fresh state.
                // If not reset, it would use the state stored before calling `dispose()`.
                this.removeAllListeners();
                this.mainHelper.removeAllListeners();
                this.mainHelper = null;
                this.helper = null;
                this.middleware.forEach(function(m) {
                    m.unsubscribe();
                });
            }
        },
        {
            key: "scheduleStalledRender",
            value: function scheduleStalledRender() {
                var _this4 = this;
                if (!this._searchStalledTimer) this._searchStalledTimer = setTimeout(function() {
                    _this4._isSearchStalled = true;
                    _this4.scheduleRender();
                }, this._stalledSearchDelay);
            }
        },
        {
            key: "createURL",
            value: function createURL() {
                var nextState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                if (!this.started) throw new Error(withUsage("The `start` method needs to be called before `createURL`."));
                return this._createURL(nextState);
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.mainHelper) throw new Error(withUsage("The `start` method needs to be called before `refresh`."));
                this.mainHelper.clearCache().search();
            }
        }
    ]);
    return InstantSearch1;
}((0, _eventsDefault.default));
exports.default = InstantSearch;

},{"algoliasearch-helper":"jGqjt","events":"1VQLm","../widgets/index/index":"kdZTz","./version":"hkkLK","./createHelpers":"8IHo3","./utils":"etVYs","../middlewares/createRouterMiddleware":"4mKEu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jGqjt":[function(require,module,exports) {
"use strict";
var AlgoliaSearchHelper = require("./src/algoliasearch.helper");
var SearchParameters = require("./src/SearchParameters");
var SearchResults = require("./src/SearchResults");
/**
 * The algoliasearchHelper module is the function that will let its
 * contains everything needed to use the Algoliasearch
 * Helper. It is a also a function that instanciate the helper.
 * To use the helper, you also need the Algolia JS client v3.
 * @example
 * //using the UMD build
 * var client = algoliasearch('latency', '6be0576ff61c053d5f9a3225e2a90f76');
 * var helper = algoliasearchHelper(client, 'bestbuy', {
 *   facets: ['shipping'],
 *   disjunctiveFacets: ['category']
 * });
 * helper.on('result', function(event) {
 *   console.log(event.results);
 * });
 * helper
 *   .toggleFacetRefinement('category', 'Movies & TV Shows')
 *   .toggleFacetRefinement('shipping', 'Free shipping')
 *   .search();
 * @example
 * // The helper is an event emitter using the node API
 * helper.on('result', updateTheResults);
 * helper.once('result', updateTheResults);
 * helper.removeListener('result', updateTheResults);
 * helper.removeAllListeners('result');
 * @module algoliasearchHelper
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the name of the index to query
 * @param  {SearchParameters|object} opts an object defining the initial config of the search. It doesn't have to be a {SearchParameters}, just an object containing the properties you need from it.
 * @return {AlgoliaSearchHelper}
 */ function algoliasearchHelper(client, index, opts) {
    return new AlgoliaSearchHelper(client, index, opts);
}
/**
 * The version currently used
 * @member module:algoliasearchHelper.version
 * @type {number}
 */ algoliasearchHelper.version = require("./src/version.js");
/**
 * Constructor for the Helper.
 * @member module:algoliasearchHelper.AlgoliaSearchHelper
 * @type {AlgoliaSearchHelper}
 */ algoliasearchHelper.AlgoliaSearchHelper = AlgoliaSearchHelper;
/**
 * Constructor for the object containing all the parameters of the search.
 * @member module:algoliasearchHelper.SearchParameters
 * @type {SearchParameters}
 */ algoliasearchHelper.SearchParameters = SearchParameters;
/**
 * Constructor for the object containing the results of the search.
 * @member module:algoliasearchHelper.SearchResults
 * @type {SearchResults}
 */ algoliasearchHelper.SearchResults = SearchResults;
module.exports = algoliasearchHelper;

},{"./src/algoliasearch.helper":"jewxp","./src/SearchParameters":"dQfwH","./src/SearchResults":"lUGU6","./src/version.js":"cs17k"}],"jewxp":[function(require,module,exports) {
"use strict";
var SearchParameters = require("./SearchParameters");
var SearchResults = require("./SearchResults");
var DerivedHelper = require("./DerivedHelper");
var requestBuilder = require("./requestBuilder");
var EventEmitter = require("@algolia/events");
var inherits = require("./functions/inherits");
var objectHasKeys = require("./functions/objectHasKeys");
var omit = require("./functions/omit");
var merge = require("./functions/merge");
var version = require("./version");
var escapeFacetValue = require("./functions/escapeFacetValue").escapeFacetValue;
/**
 * Event triggered when a parameter is set or updated
 * @event AlgoliaSearchHelper#event:change
 * @property {object} event
 * @property {SearchParameters} event.state the current parameters with the latest changes applied
 * @property {SearchResults} event.results the previous results received from Algolia. `null` before the first request
 * @example
 * helper.on('change', function(event) {
 *   console.log('The parameters have changed');
 * });
 */ /**
 * Event triggered when a main search is sent to Algolia
 * @event AlgoliaSearchHelper#event:search
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search
 * @property {SearchResults} event.results the results from the previous search. `null` if it is the first search.
 * @example
 * helper.on('search', function(event) {
 *   console.log('Search sent');
 * });
 */ /**
 * Event triggered when a search using `searchForFacetValues` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchForFacetValues
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @property {string} event.facet the facet searched into
 * @property {string} event.query the query used to search in the facets
 * @example
 * helper.on('searchForFacetValues', function(event) {
 *   console.log('searchForFacetValues sent');
 * });
 */ /**
 * Event triggered when a search using `searchOnce` is sent to Algolia
 * @event AlgoliaSearchHelper#event:searchOnce
 * @property {object} event
 * @property {SearchParameters} event.state the parameters used for this search it is the first search.
 * @example
 * helper.on('searchOnce', function(event) {
 *   console.log('searchOnce sent');
 * });
 */ /**
 * Event triggered when the results are retrieved from Algolia
 * @event AlgoliaSearchHelper#event:result
 * @property {object} event
 * @property {SearchResults} event.results the results received from Algolia
 * @property {SearchParameters} event.state the parameters used to query Algolia. Those might be different from the one in the helper instance (for example if the network is unreliable).
 * @example
 * helper.on('result', function(event) {
 *   console.log('Search results received');
 * });
 */ /**
 * Event triggered when Algolia sends back an error. For example, if an unknown parameter is
 * used, the error can be caught using this event.
 * @event AlgoliaSearchHelper#event:error
 * @property {object} event
 * @property {Error} event.error the error returned by the Algolia.
 * @example
 * helper.on('error', function(event) {
 *   console.log('Houston we got a problem.');
 * });
 */ /**
 * Event triggered when the queue of queries have been depleted (with any result or outdated queries)
 * @event AlgoliaSearchHelper#event:searchQueueEmpty
 * @example
 * helper.on('searchQueueEmpty', function() {
 *   console.log('No more search pending');
 *   // This is received before the result event if we're not expecting new results
 * });
 *
 * helper.search();
 */ /**
 * Initialize a new AlgoliaSearchHelper
 * @class
 * @classdesc The AlgoliaSearchHelper is a class that ease the management of the
 * search. It provides an event based interface for search callbacks:
 *  - change: when the internal search state is changed.
 *    This event contains a {@link SearchParameters} object and the
 *    {@link SearchResults} of the last result if any.
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 *  - error: when the response is an error. This event contains the error returned by the server.
 * @param  {AlgoliaSearch} client an AlgoliaSearch client
 * @param  {string} index the index name to query
 * @param  {SearchParameters | object} options an object defining the initial
 * config of the search. It doesn't have to be a {SearchParameters},
 * just an object containing the properties you need from it.
 */ function AlgoliaSearchHelper(client, index, options) {
    if (typeof client.addAlgoliaAgent === "function") client.addAlgoliaAgent("JS Helper (" + version + ")");
    this.setClient(client);
    var opts = options || {};
    opts.index = index;
    this.state = SearchParameters.make(opts);
    this.lastResults = null;
    this._queryId = 0;
    this._lastQueryIdReceived = -1;
    this.derivedHelpers = [];
    this._currentNbQueries = 0;
}
inherits(AlgoliaSearchHelper, EventEmitter);
/**
 * Start the search with the parameters set in the state. When the
 * method is called, it triggers a `search` event. The results will
 * be available through the `result` event. If an error occurs, an
 * `error` will be fired instead.
 * @return {AlgoliaSearchHelper}
 * @fires search
 * @fires result
 * @fires error
 * @chainable
 */ AlgoliaSearchHelper.prototype.search = function() {
    this._search({
        onlyWithDerivedHelpers: false
    });
    return this;
};
AlgoliaSearchHelper.prototype.searchOnlyWithDerivedHelpers = function() {
    this._search({
        onlyWithDerivedHelpers: true
    });
    return this;
};
/**
 * Gets the search query parameters that would be sent to the Algolia Client
 * for the hits
 * @return {object} Query Parameters
 */ AlgoliaSearchHelper.prototype.getQuery = function() {
    var state = this.state;
    return requestBuilder._getHitsSearchParams(state);
};
/**
 * Start a search using a modified version of the current state. This method does
 * not trigger the helper lifecycle and does not modify the state kept internally
 * by the helper. This second aspect means that the next search call will be the
 * same as a search call before calling searchOnce.
 * @param {object} options can contain all the parameters that can be set to SearchParameters
 * plus the index
 * @param {function} [callback] optional callback executed when the response from the
 * server is back.
 * @return {promise|undefined} if a callback is passed the method returns undefined
 * otherwise it returns a promise containing an object with two keys :
 *  - content with a SearchResults
 *  - state with the state used for the query as a SearchParameters
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the callback API
 * var state = helper.searchOnce({hitsPerPage: 1},
 *   function(error, content, state) {
 *     // if an error occurred it will be passed in error, otherwise its value is null
 *     // content contains the results formatted as a SearchResults
 *     // state is the instance of SearchParameters used for this search
 *   });
 * @example
 * // Changing the number of records returned per page to 1
 * // This example uses the promise API
 * var state1 = helper.searchOnce({hitsPerPage: 1})
 *                 .then(promiseHandler);
 *
 * function promiseHandler(res) {
 *   // res contains
 *   // {
 *   //   content : SearchResults
 *   //   state   : SearchParameters (the one used for this specific search)
 *   // }
 * }
 */ AlgoliaSearchHelper.prototype.searchOnce = function(options, cb) {
    var tempState = !options ? this.state : this.state.setQueryParameters(options);
    var queries = requestBuilder._getQueries(tempState.index, tempState);
    var self = this;
    this._currentNbQueries++;
    this.emit("searchOnce", {
        state: tempState
    });
    if (cb) {
        this.client.search(queries).then(function(content) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
            cb(null, new SearchResults(tempState, content.results), tempState);
        }).catch(function(err) {
            self._currentNbQueries--;
            if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
            cb(err, null, tempState);
        });
        return undefined;
    }
    return this.client.search(queries).then(function(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        return {
            content: new SearchResults(tempState, content.results),
            state: tempState,
            _originalResponse: content
        };
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        throw e;
    });
};
/**
 * Start the search for answers with the parameters set in the state.
 * This method returns a promise.
 * @param {Object} options - the options for answers API call
 * @param {string[]} options.attributesForPrediction - Attributes to use for predictions. If empty, `searchableAttributes` is used instead.
 * @param {string[]} options.queryLanguages - The languages in the query. Currently only supports ['en'].
 * @param {number} options.nbHits - Maximum number of answers to retrieve from the Answers Engine. Cannot be greater than 1000.
 *
 * @return {promise} the answer results
 */ AlgoliaSearchHelper.prototype.findAnswers = function(options) {
    var state = this.state;
    var derivedHelper = this.derivedHelpers[0];
    if (!derivedHelper) return Promise.resolve([]);
    var derivedState = derivedHelper.getModifiedState(state);
    var data = merge({
        attributesForPrediction: options.attributesForPrediction,
        nbHits: options.nbHits
    }, {
        params: omit(requestBuilder._getHitsSearchParams(derivedState), [
            "attributesToSnippet",
            "hitsPerPage",
            "restrictSearchableAttributes",
            "snippetEllipsisText" // FIXME remove this line once the engine is fixed.
        ])
    });
    var errorMessage = "search for answers was called, but this client does not have a function client.initIndex(index).findAnswers";
    if (typeof this.client.initIndex !== "function") throw new Error(errorMessage);
    var index = this.client.initIndex(derivedState.index);
    if (typeof index.findAnswers !== "function") throw new Error(errorMessage);
    return index.findAnswers(derivedState.query, options.queryLanguages, data);
};
/**
 * Structure of each result when using
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * @typedef FacetSearchHit
 * @type {object}
 * @property {string} value the facet value
 * @property {string} highlighted the facet value highlighted with the query string
 * @property {number} count number of occurrence of this facet value
 * @property {boolean} isRefined true if the value is already refined
 */ /**
 * Structure of the data resolved by the
 * [`searchForFacetValues()`](reference.html#AlgoliaSearchHelper#searchForFacetValues)
 * promise.
 * @typedef FacetSearchResult
 * @type {object}
 * @property {FacetSearchHit} facetHits the results for this search for facet values
 * @property {number} processingTimeMS time taken by the query inside the engine
 */ /**
 * Search for facet values based on an query and the name of a faceted attribute. This
 * triggers a search and will return a promise. On top of using the query, it also sends
 * the parameters from the state so that the search is narrowed down to only the possible values.
 *
 * See the description of [FacetSearchResult](reference.html#FacetSearchResult)
 * @param {string} facet the name of the faceted attribute
 * @param {string} query the string query for the search
 * @param {number} [maxFacetHits] the maximum number values returned. Should be > 0 and <= 100
 * @param {object} [userState] the set of custom parameters to use on top of the current state. Setting a property to `undefined` removes
 * it in the generated query.
 * @return {promise.<FacetSearchResult>} the results of the search
 */ AlgoliaSearchHelper.prototype.searchForFacetValues = function(facet, query, maxFacetHits, userState) {
    var clientHasSFFV = typeof this.client.searchForFacetValues === "function";
    var clientHasInitIndex = typeof this.client.initIndex === "function";
    if (!clientHasSFFV && !clientHasInitIndex && typeof this.client.search !== "function") throw new Error("search for facet values (searchable) was called, but this client does not have a function client.searchForFacetValues or client.initIndex(index).searchForFacetValues");
    var state = this.state.setQueryParameters(userState || {});
    var isDisjunctive = state.isDisjunctiveFacet(facet);
    var algoliaQuery = requestBuilder.getSearchForFacetQuery(facet, query, maxFacetHits, state);
    this._currentNbQueries++;
    var self = this;
    var searchForFacetValuesPromise;
    // newer algoliasearch ^3.27.1 - ~4.0.0
    if (clientHasSFFV) searchForFacetValuesPromise = this.client.searchForFacetValues([
        {
            indexName: state.index,
            params: algoliaQuery
        }
    ]);
    else if (clientHasInitIndex) searchForFacetValuesPromise = this.client.initIndex(state.index).searchForFacetValues(algoliaQuery);
    else {
        // @MAJOR only use client.search
        delete algoliaQuery.facetName;
        searchForFacetValuesPromise = this.client.search([
            {
                type: "facet",
                facet: facet,
                indexName: state.index,
                params: algoliaQuery
            }
        ]).then(function processResponse(response) {
            return response.results[0];
        });
    }
    this.emit("searchForFacetValues", {
        state: state,
        facet: facet,
        query: query
    });
    return searchForFacetValuesPromise.then(function addIsRefined(content) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        content = Array.isArray(content) ? content[0] : content;
        content.facetHits.forEach(function(f) {
            f.escapedValue = escapeFacetValue(f.value);
            f.isRefined = isDisjunctive ? state.isDisjunctiveFacetRefined(facet, f.escapedValue) : state.isFacetRefined(facet, f.escapedValue);
        });
        return content;
    }, function(e) {
        self._currentNbQueries--;
        if (self._currentNbQueries === 0) self.emit("searchQueueEmpty");
        throw e;
    });
};
/**
 * Sets the text query used for the search.
 *
 * This method resets the current page to 0.
 * @param  {string} q the user query
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setQuery = function(q) {
    this._change({
        state: this.state.resetPage().setQuery(q),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the types of refinements except tags. A string can be provided to remove
 * only the refinements of a specific attribute. For more advanced use case, you can
 * provide a function instead. This function should follow the
 * [clearCallback definition](#SearchParameters.clearCallback).
 *
 * This method resets the current page to 0.
 * @param {string} [name] optional name of the facet / attribute on which we want to remove all refinements
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * // Removing all the refinements
 * helper.clearRefinements().search();
 * @example
 * // Removing all the filters on a the category attribute.
 * helper.clearRefinements('category').search();
 * @example
 * // Removing only the exclude filters on the category facet.
 * helper.clearRefinements(function(value, attribute, type) {
 *   return type === 'exclude' && attribute === 'category';
 * }).search();
 */ AlgoliaSearchHelper.prototype.clearRefinements = function(name) {
    this._change({
        state: this.state.resetPage().clearRefinements(name),
        isPageReset: true
    });
    return this;
};
/**
 * Remove all the tag filters.
 *
 * This method resets the current page to 0.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.clearTags = function() {
    this._change({
        state: this.state.resetPage().clearTags(),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addDisjunctiveRefine = function() {
    return this.addDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Adds a refinement on a hierarchical facet. It will throw
 * an exception if the facet is not defined or if the facet
 * is already refined.
 *
 * This method resets the current page to 0.
 * @param {string} facet the facet name
 * @param {string} path the hierarchical facet path
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is refined
 * @chainable
 * @fires change
 */ AlgoliaSearchHelper.prototype.addHierarchicalFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addHierarchicalFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} operator the operator of the filter
 * @param  {number} value the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().addNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Adds a filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().addFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetRefinement}
 */ AlgoliaSearchHelper.prototype.addRefine = function() {
    return this.addFacetRefinement.apply(this, arguments);
};
/**
 * Adds a an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value (will be converted to string)
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().addExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#addFacetExclusion}
 */ AlgoliaSearchHelper.prototype.addExclude = function() {
    return this.addFacetExclusion.apply(this, arguments);
};
/**
 * Adds a tag filter with the `tag` provided. If the
 * filter is already set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag the tag to add to the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.addTag = function(tag) {
    this._change({
        state: this.state.resetPage().addTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Removes an numeric filter to an attribute with the `operator` and `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * Some parameters are optional, triggering different behavior:
 *  - if the value is not provided, then all the numeric value will be removed for the
 *  specified attribute/operator couple.
 *  - if the operator is not provided either, then all the numeric filter on this attribute
 *  will be removed.
 *
 * This method resets the current page to 0.
 * @param  {string} attribute the attribute on which the numeric filter applies
 * @param  {string} [operator] the operator of the filter
 * @param  {number} [value] the value of the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeNumericRefinement = function(attribute, operator, value) {
    this._change({
        state: this.state.resetPage().removeNumericRefinement(attribute, operator, value),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a disjunctive filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeDisjunctiveFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeDisjunctiveFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeDisjunctiveRefine = function() {
    return this.removeDisjunctiveFacetRefinement.apply(this, arguments);
};
/**
 * Removes the refinement set on a hierarchical facet.
 * @param {string} facet the facet name
 * @return {AlgoliaSearchHelper}
 * @throws Error if the facet is not defined or if the facet is not refined
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeHierarchicalFacetRefinement = function(facet) {
    this._change({
        state: this.state.resetPage().removeHierarchicalFacetRefinement(facet),
        isPageReset: true
    });
    return this;
};
/**
 * Removes a filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetRefinement}
 */ AlgoliaSearchHelper.prototype.removeRefine = function() {
    return this.removeFacetRefinement.apply(this, arguments);
};
/**
 * Removes an exclusion filter to a faceted attribute with the `value` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * If the value is omitted, then this method will remove all the filters for the
 * attribute.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} [value] the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().removeExcludeRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#removeFacetExclusion}
 */ AlgoliaSearchHelper.prototype.removeExclude = function() {
    return this.removeFacetExclusion.apply(this, arguments);
};
/**
 * Removes a tag filter with the `tag` provided. If the
 * filter is not set, it doesn't change the filters.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove from the filter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.removeTag = function(tag) {
    this._change({
        state: this.state.resetPage().removeTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Adds or removes an exclusion filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetExclusion = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleExcludeFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetExclusion}
 */ AlgoliaSearchHelper.prototype.toggleExclude = function() {
    return this.toggleFacetExclusion.apply(this, arguments);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 * @deprecated since version 2.19.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefinement = function(facet, value) {
    return this.toggleFacetRefinement(facet, value);
};
/**
 * Adds or removes a filter to a faceted attribute with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method can be used for conjunctive, disjunctive and hierarchical filters.
 *
 * This method resets the current page to 0.
 * @param  {string} facet the facet to refine
 * @param  {string} value the associated value
 * @return {AlgoliaSearchHelper}
 * @throws Error will throw an error if the facet is not declared in the settings of the helper
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleFacetRefinement = function(facet, value) {
    this._change({
        state: this.state.resetPage().toggleFacetRefinement(facet, value),
        isPageReset: true
    });
    return this;
};
/**
 * @deprecated since version 2.4.0, see {@link AlgoliaSearchHelper#toggleFacetRefinement}
 */ AlgoliaSearchHelper.prototype.toggleRefine = function() {
    return this.toggleFacetRefinement.apply(this, arguments);
};
/**
 * Adds or removes a tag filter with the `value` provided. If
 * the value is set then it removes it, otherwise it adds the filter.
 *
 * This method resets the current page to 0.
 * @param {string} tag tag to remove or add
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.toggleTag = function(tag) {
    this._change({
        state: this.state.resetPage().toggleTagRefinement(tag),
        isPageReset: true
    });
    return this;
};
/**
 * Increments the page number by one.
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setPage(0).nextPage().getPage();
 * // returns 1
 */ AlgoliaSearchHelper.prototype.nextPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page + 1);
};
/**
 * Decrements the page number by one.
 * @fires change
 * @return {AlgoliaSearchHelper}
 * @chainable
 * @example
 * helper.setPage(1).previousPage().getPage();
 * // returns 0
 */ AlgoliaSearchHelper.prototype.previousPage = function() {
    var page = this.state.page || 0;
    return this.setPage(page - 1);
};
/**
 * @private
 */ function setCurrentPage(page) {
    if (page < 0) throw new Error("Page requested below 0.");
    this._change({
        state: this.state.setPage(page),
        isPageReset: false
    });
    return this;
}
/**
 * Change the current page
 * @deprecated
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setCurrentPage = setCurrentPage;
/**
 * Updates the current page.
 * @function
 * @param  {number} page The page number
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setPage = setCurrentPage;
/**
 * Updates the name of the index that will be targeted by the query.
 *
 * This method resets the current page to 0.
 * @param {string} name the index name
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setIndex = function(name) {
    this._change({
        state: this.state.resetPage().setIndex(name),
        isPageReset: true
    });
    return this;
};
/**
 * Update a parameter of the search. This method reset the page
 *
 * The complete list of parameters is available on the
 * [Algolia website](https://www.algolia.com/doc/rest#query-an-index).
 * The most commonly used parameters have their own [shortcuts](#query-parameters-shortcuts)
 * or benefit from higher-level APIs (all the kind of filters and facets have their own API)
 *
 * This method resets the current page to 0.
 * @param {string} parameter name of the parameter to update
 * @param {any} value new value of the parameter
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 * @example
 * helper.setQueryParameter('hitsPerPage', 20).search();
 */ AlgoliaSearchHelper.prototype.setQueryParameter = function(parameter, value) {
    this._change({
        state: this.state.resetPage().setQueryParameter(parameter, value),
        isPageReset: true
    });
    return this;
};
/**
 * Set the whole state (warning: will erase previous state)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @fires change
 * @chainable
 */ AlgoliaSearchHelper.prototype.setState = function(newState) {
    this._change({
        state: SearchParameters.make(newState),
        isPageReset: false
    });
    return this;
};
/**
 * Override the current state without triggering a change event.
 * Do not use this method unless you know what you are doing. (see the example
 * for a legit use case)
 * @param {SearchParameters} newState the whole new state
 * @return {AlgoliaSearchHelper}
 * @example
 *  helper.on('change', function(state){
 *    // In this function you might want to find a way to store the state in the url/history
 *    updateYourURL(state)
 *  })
 *  window.onpopstate = function(event){
 *    // This is naive though as you should check if the state is really defined etc.
 *    helper.overrideStateWithoutTriggeringChangeEvent(event.state).search()
 *  }
 * @chainable
 */ AlgoliaSearchHelper.prototype.overrideStateWithoutTriggeringChangeEvent = function(newState) {
    this.state = new SearchParameters(newState);
    return this;
};
/**
 * Check if an attribute has any numeric, conjunctive, disjunctive or hierarchical filters.
 * @param {string} attribute the name of the attribute
 * @return {boolean} true if the attribute is filtered by at least one value
 * @example
 * // hasRefinements works with numeric, conjunctive, disjunctive and hierarchical filters
 * helper.hasRefinements('price'); // false
 * helper.addNumericRefinement('price', '>', 100);
 * helper.hasRefinements('price'); // true
 *
 * helper.hasRefinements('color'); // false
 * helper.addFacetRefinement('color', 'blue');
 * helper.hasRefinements('color'); // true
 *
 * helper.hasRefinements('material'); // false
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * helper.hasRefinements('material'); // true
 *
 * helper.hasRefinements('categories'); // false
 * helper.toggleFacetRefinement('categories', 'kitchen > knife');
 * helper.hasRefinements('categories'); // true
 *
 */ AlgoliaSearchHelper.prototype.hasRefinements = function(attribute) {
    if (objectHasKeys(this.state.getNumericRefinements(attribute))) return true;
    else if (this.state.isConjunctiveFacet(attribute)) return this.state.isFacetRefined(attribute);
    else if (this.state.isDisjunctiveFacet(attribute)) return this.state.isDisjunctiveFacetRefined(attribute);
    else if (this.state.isHierarchicalFacet(attribute)) return this.state.isHierarchicalFacetRefined(attribute);
    // there's currently no way to know that the user did call `addNumericRefinement` at some point
    // thus we cannot distinguish if there once was a numeric refinement that was cleared
    // so we will return false in every other situations to be consistent
    // while what we should do here is throw because we did not find the attribute in any type
    // of refinement
    return false;
};
/**
 * Check if a value is excluded for a specific faceted attribute. If the value
 * is omitted then the function checks if there is any excluding refinements.
 *
 * @param  {string}  facet name of the attribute for used for faceting
 * @param  {string}  [value] optional value. If passed will test that this value
   * is filtering the given facet.
 * @return {boolean} true if refined
 * @example
 * helper.isExcludeRefined('color'); // false
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // false
 *
 * helper.addFacetExclusion('color', 'red');
 *
 * helper.isExcludeRefined('color'); // true
 * helper.isExcludeRefined('color', 'blue') // false
 * helper.isExcludeRefined('color', 'red') // true
 */ AlgoliaSearchHelper.prototype.isExcluded = function(facet, value) {
    return this.state.isExcludeRefined(facet, value);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasRefinements}
 */ AlgoliaSearchHelper.prototype.isDisjunctiveRefined = function(facet, value) {
    return this.state.isDisjunctiveFacetRefined(facet, value);
};
/**
 * Check if the string is a currently filtering tag.
 * @param {string} tag tag to check
 * @return {boolean}
 */ AlgoliaSearchHelper.prototype.hasTag = function(tag) {
    return this.state.isTagRefined(tag);
};
/**
 * @deprecated since 2.4.0, see {@link AlgoliaSearchHelper#hasTag}
 */ AlgoliaSearchHelper.prototype.isTagRefined = function() {
    return this.hasTagRefinements.apply(this, arguments);
};
/**
 * Get the name of the currently used index.
 * @return {string}
 * @example
 * helper.setIndex('highestPrice_products').getIndex();
 * // returns 'highestPrice_products'
 */ AlgoliaSearchHelper.prototype.getIndex = function() {
    return this.state.index;
};
function getCurrentPage() {
    return this.state.page;
}
/**
 * Get the currently selected page
 * @deprecated
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getCurrentPage = getCurrentPage;
/**
 * Get the currently selected page
 * @function
 * @return {number} the current page
 */ AlgoliaSearchHelper.prototype.getPage = getCurrentPage;
/**
 * Get all the tags currently set to filters the results.
 *
 * @return {string[]} The list of tags currently set.
 */ AlgoliaSearchHelper.prototype.getTags = function() {
    return this.state.tagRefinements;
};
/**
 * Get the list of refinements for a given attribute. This method works with
 * conjunctive, disjunctive, excluding and numerical filters.
 *
 * See also SearchResults#getRefinements
 *
 * @param {string} facetName attribute name used for faceting
 * @return {Array.<FacetRefinement|NumericRefinement>} All Refinement are objects that contain a value, and
 * a type. Numeric also contains an operator.
 * @example
 * helper.addNumericRefinement('price', '>', 100);
 * helper.getRefinements('price');
 * // [
 * //   {
 * //     "value": [
 * //       100
 * //     ],
 * //     "operator": ">",
 * //     "type": "numeric"
 * //   }
 * // ]
 * @example
 * helper.addFacetRefinement('color', 'blue');
 * helper.addFacetExclusion('color', 'red');
 * helper.getRefinements('color');
 * // [
 * //   {
 * //     "value": "blue",
 * //     "type": "conjunctive"
 * //   },
 * //   {
 * //     "value": "red",
 * //     "type": "exclude"
 * //   }
 * // ]
 * @example
 * helper.addDisjunctiveFacetRefinement('material', 'plastic');
 * // [
 * //   {
 * //     "value": "plastic",
 * //     "type": "disjunctive"
 * //   }
 * // ]
 */ AlgoliaSearchHelper.prototype.getRefinements = function(facetName) {
    var refinements = [];
    if (this.state.isConjunctiveFacet(facetName)) {
        var conjRefinements = this.state.getConjunctiveRefinements(facetName);
        conjRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: "conjunctive"
            });
        });
        var excludeRefinements = this.state.getExcludeRefinements(facetName);
        excludeRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: "exclude"
            });
        });
    } else if (this.state.isDisjunctiveFacet(facetName)) {
        var disjRefinements = this.state.getDisjunctiveRefinements(facetName);
        disjRefinements.forEach(function(r) {
            refinements.push({
                value: r,
                type: "disjunctive"
            });
        });
    }
    var numericRefinements = this.state.getNumericRefinements(facetName);
    Object.keys(numericRefinements).forEach(function(operator) {
        var value = numericRefinements[operator];
        refinements.push({
            value: value,
            operator: operator,
            type: "numeric"
        });
    });
    return refinements;
};
/**
 * Return the current refinement for the (attribute, operator)
 * @param {string} attribute attribute in the record
 * @param {string} operator operator applied on the refined values
 * @return {Array.<number|number[]>} refined values
 */ AlgoliaSearchHelper.prototype.getNumericRefinement = function(attribute, operator) {
    return this.state.getNumericRefinement(attribute, operator);
};
/**
 * Get the current breadcrumb for a hierarchical facet, as an array
 * @param  {string} facetName Hierarchical facet name
 * @return {array.<string>} the path as an array of string
 */ AlgoliaSearchHelper.prototype.getHierarchicalFacetBreadcrumb = function(facetName) {
    return this.state.getHierarchicalFacetBreadcrumb(facetName);
};
// /////////// PRIVATE
/**
 * Perform the underlying queries
 * @private
 * @return {undefined}
 * @fires search
 * @fires result
 * @fires error
 */ AlgoliaSearchHelper.prototype._search = function(options) {
    var state = this.state;
    var states = [];
    var mainQueries = [];
    if (!options.onlyWithDerivedHelpers) {
        mainQueries = requestBuilder._getQueries(state.index, state);
        states.push({
            state: state,
            queriesCount: mainQueries.length,
            helper: this
        });
        this.emit("search", {
            state: state,
            results: this.lastResults
        });
    }
    var derivedQueries = this.derivedHelpers.map(function(derivedHelper) {
        var derivedState = derivedHelper.getModifiedState(state);
        var derivedStateQueries = requestBuilder._getQueries(derivedState.index, derivedState);
        states.push({
            state: derivedState,
            queriesCount: derivedStateQueries.length,
            helper: derivedHelper
        });
        derivedHelper.emit("search", {
            state: derivedState,
            results: derivedHelper.lastResults
        });
        return derivedStateQueries;
    });
    var queries = Array.prototype.concat.apply(mainQueries, derivedQueries);
    var queryId = this._queryId++;
    this._currentNbQueries++;
    try {
        this.client.search(queries).then(this._dispatchAlgoliaResponse.bind(this, states, queryId)).catch(this._dispatchAlgoliaError.bind(this, queryId));
    } catch (error) {
        // If we reach this part, we're in an internal error state
        this.emit("error", {
            error: error
        });
    }
};
/**
 * Transform the responses as sent by the server and transform them into a user
 * usable object that merge the results of all the batch requests. It will dispatch
 * over the different helper + derived helpers (when there are some).
 * @private
 * @param {array.<{SearchParameters, AlgoliaQueries, AlgoliaSearchHelper}>}
 *  state state used for to generate the request
 * @param {number} queryId id of the current request
 * @param {object} content content of the response
 * @return {undefined}
 */ AlgoliaSearchHelper.prototype._dispatchAlgoliaResponse = function(states, queryId, content) {
    // FIXME remove the number of outdated queries discarded instead of just one
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    if (this._currentNbQueries === 0) this.emit("searchQueueEmpty");
    var results = content.results.slice();
    states.forEach(function(s) {
        var state = s.state;
        var queriesCount = s.queriesCount;
        var helper = s.helper;
        var specificResults = results.splice(0, queriesCount);
        var formattedResponse = helper.lastResults = new SearchResults(state, specificResults);
        helper.emit("result", {
            results: formattedResponse,
            state: state
        });
    });
};
AlgoliaSearchHelper.prototype._dispatchAlgoliaError = function(queryId, error) {
    if (queryId < this._lastQueryIdReceived) // Outdated answer
    return;
    this._currentNbQueries -= queryId - this._lastQueryIdReceived;
    this._lastQueryIdReceived = queryId;
    this.emit("error", {
        error: error
    });
    if (this._currentNbQueries === 0) this.emit("searchQueueEmpty");
};
AlgoliaSearchHelper.prototype.containsRefinement = function(query, facetFilters, numericFilters, tagFilters) {
    return query || facetFilters.length !== 0 || numericFilters.length !== 0 || tagFilters.length !== 0;
};
/**
 * Test if there are some disjunctive refinements on the facet
 * @private
 * @param {string} facet the attribute to test
 * @return {boolean}
 */ AlgoliaSearchHelper.prototype._hasDisjunctiveRefinements = function(facet) {
    return this.state.disjunctiveRefinements[facet] && this.state.disjunctiveRefinements[facet].length > 0;
};
AlgoliaSearchHelper.prototype._change = function(event) {
    var state = event.state;
    var isPageReset = event.isPageReset;
    if (state !== this.state) {
        this.state = state;
        this.emit("change", {
            state: this.state,
            results: this.lastResults,
            isPageReset: isPageReset
        });
    }
};
/**
 * Clears the cache of the underlying Algolia client.
 * @return {AlgoliaSearchHelper}
 */ AlgoliaSearchHelper.prototype.clearCache = function() {
    this.client.clearCache && this.client.clearCache();
    return this;
};
/**
 * Updates the internal client instance. If the reference of the clients
 * are equal then no update is actually done.
 * @param  {AlgoliaSearch} newClient an AlgoliaSearch client
 * @return {AlgoliaSearchHelper}
 */ AlgoliaSearchHelper.prototype.setClient = function(newClient) {
    if (this.client === newClient) return this;
    if (typeof newClient.addAlgoliaAgent === "function") newClient.addAlgoliaAgent("JS Helper (" + version + ")");
    this.client = newClient;
    return this;
};
/**
 * Gets the instance of the currently used client.
 * @return {AlgoliaSearch}
 */ AlgoliaSearchHelper.prototype.getClient = function() {
    return this.client;
};
/**
 * Creates an derived instance of the Helper. A derived helper
 * is a way to request other indices synchronised with the lifecycle
 * of the main Helper. This mechanism uses the multiqueries feature
 * of Algolia to aggregate all the requests in a single network call.
 *
 * This method takes a function that is used to create a new SearchParameter
 * that will be used to create requests to Algolia. Those new requests
 * are created just before the `search` event. The signature of the function
 * is `SearchParameters -> SearchParameters`.
 *
 * This method returns a new DerivedHelper which is an EventEmitter
 * that fires the same `search`, `result` and `error` events. Those
 * events, however, will receive data specific to this DerivedHelper
 * and the SearchParameters that is returned by the call of the
 * parameter function.
 * @param {function} fn SearchParameters -> SearchParameters
 * @return {DerivedHelper}
 */ AlgoliaSearchHelper.prototype.derive = function(fn) {
    var derivedHelper = new DerivedHelper(this, fn);
    this.derivedHelpers.push(derivedHelper);
    return derivedHelper;
};
/**
 * This method detaches a derived Helper from the main one. Prefer using the one from the
 * derived helper itself, to remove the event listeners too.
 * @private
 * @return {undefined}
 * @throws Error
 */ AlgoliaSearchHelper.prototype.detachDerivedHelper = function(derivedHelper) {
    var pos = this.derivedHelpers.indexOf(derivedHelper);
    if (pos === -1) throw new Error("Derived helper already detached");
    this.derivedHelpers.splice(pos, 1);
};
/**
 * This method returns true if there is currently at least one on-going search.
 * @return {boolean} true if there is a search pending
 */ AlgoliaSearchHelper.prototype.hasPendingRequests = function() {
    return this._currentNbQueries > 0;
};
/**
 * @typedef AlgoliaSearchHelper.NumericRefinement
 * @type {object}
 * @property {number[]} value the numbers that are used for filtering this attribute with
 * the operator specified.
 * @property {string} operator the faceting data: value, number of entries
 * @property {string} type will be 'numeric'
 */ /**
 * @typedef AlgoliaSearchHelper.FacetRefinement
 * @type {object}
 * @property {string} value the string use to filter the attribute
 * @property {string} type the type of filter: 'conjunctive', 'disjunctive', 'exclude'
 */ module.exports = AlgoliaSearchHelper;

},{"./SearchParameters":"dQfwH","./SearchResults":"lUGU6","./DerivedHelper":"6UDS7","./requestBuilder":"6rfof","@algolia/events":"euNDO","./functions/inherits":"a0E30","./functions/objectHasKeys":"alqSr","./functions/omit":"l3IzD","./functions/merge":"eGyc5","./version":"cs17k","./functions/escapeFacetValue":"3r1Qc"}],"dQfwH":[function(require,module,exports) {
"use strict";
var merge = require("../functions/merge");
var defaultsPure = require("../functions/defaultsPure");
var intersection = require("../functions/intersection");
var find = require("../functions/find");
var valToNumber = require("../functions/valToNumber");
var omit = require("../functions/omit");
var objectHasKeys = require("../functions/objectHasKeys");
var isValidUserToken = require("../utils/isValidUserToken");
var RefinementList = require("./RefinementList");
/**
 * isEqual, but only for numeric refinement values, possible values:
 * - 5
 * - [5]
 * - [[5]]
 * - [[5,5],[4]]
 */ function isEqualNumericRefinement(a, b) {
    if (Array.isArray(a) && Array.isArray(b)) return a.length === b.length && a.every(function(el, i) {
        return isEqualNumericRefinement(b[i], el);
    });
    return a === b;
}
/**
 * like _.find but using deep equality to be able to use it
 * to find arrays.
 * @private
 * @param {any[]} array array to search into (elements are base or array of base)
 * @param {any} searchedValue the value we're looking for (base or array of base)
 * @return {any} the searched value or undefined
 */ function findArray(array, searchedValue) {
    return find(array, function(currentValue) {
        return isEqualNumericRefinement(currentValue, searchedValue);
    });
}
/**
 * The facet list is the structure used to store the list of values used to
 * filter a single attribute.
 * @typedef {string[]} SearchParameters.FacetList
 */ /**
 * Structure to store numeric filters with the operator as the key. The supported operators
 * are `=`, `>`, `<`, `>=`, `<=` and `!=`.
 * @typedef {Object.<string, Array.<number|number[]>>} SearchParameters.OperatorList
 */ /**
 * SearchParameters is the data structure that contains all the information
 * usable for making a search to Algolia API. It doesn't do the search itself,
 * nor does it contains logic about the parameters.
 * It is an immutable object, therefore it has been created in a way that each
 * changes does not change the object itself but returns a copy with the
 * modification.
 * This object should probably not be instantiated outside of the helper. It will
 * be provided when needed. This object is documented for reference as you'll
 * get it from events generated by the {@link AlgoliaSearchHelper}.
 * If need be, instantiate the Helper from the factory function {@link SearchParameters.make}
 * @constructor
 * @classdesc contains all the parameters of a search
 * @param {object|SearchParameters} newParameters existing parameters or partial object
 * for the properties of a new SearchParameters
 * @see SearchParameters.make
 * @example <caption>SearchParameters of the first query in
 *   <a href="http://demos.algolia.com/instant-search-demo/">the instant search demo</a></caption>
{
   "query": "",
   "disjunctiveFacets": [
      "customerReviewCount",
      "category",
      "salePrice_range",
      "manufacturer"
  ],
   "maxValuesPerFacet": 30,
   "page": 0,
   "hitsPerPage": 10,
   "facets": [
      "type",
      "shipping"
  ]
}
 */ function SearchParameters(newParameters) {
    var params = newParameters ? SearchParameters._parseNumbers(newParameters) : {};
    if (params.userToken !== undefined && !isValidUserToken(params.userToken)) console.warn("[algoliasearch-helper] The `userToken` parameter is invalid. This can lead to wrong analytics.\n  - Format: [a-zA-Z0-9_-]{1,64}");
    /**
   * This attribute contains the list of all the conjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.facets = params.facets || [];
    /**
   * This attribute contains the list of all the disjunctive facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * @member {string[]}
   */ this.disjunctiveFacets = params.disjunctiveFacets || [];
    /**
   * This attribute contains the list of all the hierarchical facets
   * used. This list will be added to requested facets in the
   * [facets attribute](https://www.algolia.com/doc/rest-api/search#param-facets) sent to algolia.
   * Hierarchical facets are a sub type of disjunctive facets that
   * let you filter faceted attributes hierarchically.
   * @member {string[]|object[]}
   */ this.hierarchicalFacets = params.hierarchicalFacets || [];
    // Refinements
    /**
   * This attribute contains all the filters that need to be
   * applied on the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsRefinements = params.facetsRefinements || {};
    /**
   * This attribute contains all the filters that need to be
   * excluded from the conjunctive facets. Each facet must be properly
   * defined in the `facets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters excluded for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.facetsExcludes = params.facetsExcludes || {};
    /**
   * This attribute contains all the filters that need to be
   * applied on the disjunctive facets. Each facet must be properly
   * defined in the `disjunctiveFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.disjunctiveFacetsRefinements = params.disjunctiveFacetsRefinements || {};
    /**
   * This attribute contains all the filters that need to be
   * applied on the numeric attributes.
   *
   * The key is the name of the attribute, and the value is the
   * filters to apply to this attribute.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `numericFilters` attribute.
   * @member {Object.<string, SearchParameters.OperatorList>}
   */ this.numericRefinements = params.numericRefinements || {};
    /**
   * This attribute contains all the tags used to refine the query.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `tagFilters` attribute.
   * @member {string[]}
   */ this.tagRefinements = params.tagRefinements || [];
    /**
   * This attribute contains all the filters that need to be
   * applied on the hierarchical facets. Each facet must be properly
   * defined in the `hierarchicalFacets` attribute.
   *
   * The key is the name of the facet, and the `FacetList` contains all
   * filters selected for the associated facet name. The FacetList values
   * are structured as a string that contain the values for each level
   * separated by the configured separator.
   *
   * When querying algolia, the values stored in this attribute will
   * be translated into the `facetFilters` attribute.
   * @member {Object.<string, SearchParameters.FacetList>}
   */ this.hierarchicalFacetsRefinements = params.hierarchicalFacetsRefinements || {};
    var self = this;
    Object.keys(params).forEach(function(paramName) {
        var isKeyKnown = SearchParameters.PARAMETERS.indexOf(paramName) !== -1;
        var isValueDefined = params[paramName] !== undefined;
        if (!isKeyKnown && isValueDefined) self[paramName] = params[paramName];
    });
}
/**
 * List all the properties in SearchParameters and therefore all the known Algolia properties
 * This doesn't contain any beta/hidden features.
 * @private
 */ SearchParameters.PARAMETERS = Object.keys(new SearchParameters());
/**
 * @private
 * @param {object} partialState full or part of a state
 * @return {object} a new object with the number keys as number
 */ SearchParameters._parseNumbers = function(partialState) {
    // Do not reparse numbers in SearchParameters, they ought to be parsed already
    if (partialState instanceof SearchParameters) return partialState;
    var numbers = {};
    var numberKeys = [
        "aroundPrecision",
        "aroundRadius",
        "getRankingInfo",
        "minWordSizefor2Typos",
        "minWordSizefor1Typo",
        "page",
        "maxValuesPerFacet",
        "distinct",
        "minimumAroundRadius",
        "hitsPerPage",
        "minProximity"
    ];
    numberKeys.forEach(function(k) {
        var value = partialState[k];
        if (typeof value === "string") {
            var parsedValue = parseFloat(value);
            // global isNaN is ok to use here, value is only number or NaN
            numbers[k] = isNaN(parsedValue) ? value : parsedValue;
        }
    });
    // there's two formats of insideBoundingBox, we need to parse
    // the one which is an array of float geo rectangles
    if (Array.isArray(partialState.insideBoundingBox)) numbers.insideBoundingBox = partialState.insideBoundingBox.map(function(geoRect) {
        if (Array.isArray(geoRect)) return geoRect.map(function(value) {
            return parseFloat(value);
        });
        return geoRect;
    });
    if (partialState.numericRefinements) {
        var numericRefinements = {};
        Object.keys(partialState.numericRefinements).forEach(function(attribute) {
            var operators = partialState.numericRefinements[attribute] || {};
            numericRefinements[attribute] = {};
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator];
                var parsedValues = values.map(function(v) {
                    if (Array.isArray(v)) return v.map(function(vPrime) {
                        if (typeof vPrime === "string") return parseFloat(vPrime);
                        return vPrime;
                    });
                    else if (typeof v === "string") return parseFloat(v);
                    return v;
                });
                numericRefinements[attribute][operator] = parsedValues;
            });
        });
        numbers.numericRefinements = numericRefinements;
    }
    return merge({}, partialState, numbers);
};
/**
 * Factory for SearchParameters
 * @param {object|SearchParameters} newParameters existing parameters or partial
 * object for the properties of a new SearchParameters
 * @return {SearchParameters} frozen instance of SearchParameters
 */ SearchParameters.make = function makeSearchParameters(newParameters) {
    var instance = new SearchParameters(newParameters);
    var hierarchicalFacets = newParameters.hierarchicalFacets || [];
    hierarchicalFacets.forEach(function(facet) {
        if (facet.rootPath) {
            var currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length > 0 && currentRefinement[0].indexOf(facet.rootPath) !== 0) instance = instance.clearRefinements(facet.name);
            // get it again in case it has been cleared
            currentRefinement = instance.getHierarchicalRefinement(facet.name);
            if (currentRefinement.length === 0) instance = instance.toggleHierarchicalFacetRefinement(facet.name, facet.rootPath);
        }
    });
    return instance;
};
/**
 * Validates the new parameters based on the previous state
 * @param {SearchParameters} currentState the current state
 * @param {object|SearchParameters} parameters the new parameters to set
 * @return {Error|null} Error if the modification is invalid, null otherwise
 */ SearchParameters.validate = function(currentState, parameters) {
    var params = parameters || {};
    if (currentState.tagFilters && params.tagRefinements && params.tagRefinements.length > 0) return new Error("[Tags] Cannot switch from the managed tag API to the advanced API. It is probably an error, if it is really what you want, you should first clear the tags with clearTags method.");
    if (currentState.tagRefinements.length > 0 && params.tagFilters) return new Error("[Tags] Cannot switch from the advanced tag API to the managed API. It is probably an error, if it is not, you should first clear the tags with clearTags method.");
    if (currentState.numericFilters && params.numericRefinements && objectHasKeys(params.numericRefinements)) return new Error("[Numeric filters] Can't switch from the advanced to the managed API. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    if (objectHasKeys(currentState.numericRefinements) && params.numericFilters) return new Error("[Numeric filters] Can't switch from the managed API to the advanced. It is probably an error, if this is really what you want, you have to first clear the numeric filters.");
    return null;
};
SearchParameters.prototype = {
    constructor: SearchParameters,
    /**
   * Remove all refinements (disjunctive + conjunctive + excludes + numeric filters)
   * @method
   * @param {undefined|string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {SearchParameters}
   */ clearRefinements: function clearRefinements(attribute) {
        var patch = {
            numericRefinements: this._clearNumericRefinements(attribute),
            facetsRefinements: RefinementList.clearRefinement(this.facetsRefinements, attribute, "conjunctiveFacet"),
            facetsExcludes: RefinementList.clearRefinement(this.facetsExcludes, attribute, "exclude"),
            disjunctiveFacetsRefinements: RefinementList.clearRefinement(this.disjunctiveFacetsRefinements, attribute, "disjunctiveFacet"),
            hierarchicalFacetsRefinements: RefinementList.clearRefinement(this.hierarchicalFacetsRefinements, attribute, "hierarchicalFacet")
        };
        if (patch.numericRefinements === this.numericRefinements && patch.facetsRefinements === this.facetsRefinements && patch.facetsExcludes === this.facetsExcludes && patch.disjunctiveFacetsRefinements === this.disjunctiveFacetsRefinements && patch.hierarchicalFacetsRefinements === this.hierarchicalFacetsRefinements) return this;
        return this.setQueryParameters(patch);
    },
    /**
   * Remove all the refined tags from the SearchParameters
   * @method
   * @return {SearchParameters}
   */ clearTags: function clearTags() {
        if (this.tagFilters === undefined && this.tagRefinements.length === 0) return this;
        return this.setQueryParameters({
            tagFilters: undefined,
            tagRefinements: []
        });
    },
    /**
   * Set the index.
   * @method
   * @param {string} index the index name
   * @return {SearchParameters}
   */ setIndex: function setIndex(index) {
        if (index === this.index) return this;
        return this.setQueryParameters({
            index: index
        });
    },
    /**
   * Query setter
   * @method
   * @param {string} newQuery value for the new query
   * @return {SearchParameters}
   */ setQuery: function setQuery(newQuery) {
        if (newQuery === this.query) return this;
        return this.setQueryParameters({
            query: newQuery
        });
    },
    /**
   * Page setter
   * @method
   * @param {number} newPage new page number
   * @return {SearchParameters}
   */ setPage: function setPage(newPage) {
        if (newPage === this.page) return this;
        return this.setQueryParameters({
            page: newPage
        });
    },
    /**
   * Facets setter
   * The facets are the simple facets, used for conjunctive (and) faceting.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for conjunctive faceting
   * @return {SearchParameters}
   */ setFacets: function setFacets(facets) {
        return this.setQueryParameters({
            facets: facets
        });
    },
    /**
   * Disjunctive facets setter
   * Change the list of disjunctive (or) facets the helper chan handle.
   * @method
   * @param {string[]} facets all the attributes of the algolia records used for disjunctive faceting
   * @return {SearchParameters}
   */ setDisjunctiveFacets: function setDisjunctiveFacets(facets) {
        return this.setQueryParameters({
            disjunctiveFacets: facets
        });
    },
    /**
   * HitsPerPage setter
   * Hits per page represents the number of hits retrieved for this query
   * @method
   * @param {number} n number of hits retrieved per page of results
   * @return {SearchParameters}
   */ setHitsPerPage: function setHitsPerPage(n) {
        if (this.hitsPerPage === n) return this;
        return this.setQueryParameters({
            hitsPerPage: n
        });
    },
    /**
   * typoTolerance setter
   * Set the value of typoTolerance
   * @method
   * @param {string} typoTolerance new value of typoTolerance ("true", "false", "min" or "strict")
   * @return {SearchParameters}
   */ setTypoTolerance: function setTypoTolerance(typoTolerance) {
        if (this.typoTolerance === typoTolerance) return this;
        return this.setQueryParameters({
            typoTolerance: typoTolerance
        });
    },
    /**
   * Add a numeric filter for a given attribute
   * When value is an array, they are combined with OR
   * When value is a single value, it will combined with AND
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} operator operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number | number[]} value value of the filter
   * @return {SearchParameters}
   * @example
   * // for price = 50 or 40
   * searchparameter.addNumericRefinement('price', '=', [50, 40]);
   * @example
   * // for size = 38 and 40
   * searchparameter.addNumericRefinement('size', '=', 38);
   * searchparameter.addNumericRefinement('size', '=', 40);
   */ addNumericRefinement: function(attribute, operator, v) {
        var value = valToNumber(v);
        if (this.isNumericRefined(attribute, operator, value)) return this;
        var mod = merge({}, this.numericRefinements);
        mod[attribute] = merge({}, mod[attribute]);
        if (mod[attribute][operator]) {
            // Array copy
            mod[attribute][operator] = mod[attribute][operator].slice();
            // Add the element. Concat can't be used here because value can be an array.
            mod[attribute][operator].push(value);
        } else mod[attribute][operator] = [
            value
        ];
        return this.setQueryParameters({
            numericRefinements: mod
        });
    },
    /**
   * Get the list of conjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getConjunctiveRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsRefinements[facetName] || [];
    },
    /**
   * Get the list of disjunctive refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getDisjunctiveRefinements: function(facetName) {
        if (!this.isDisjunctiveFacet(facetName)) return [];
        return this.disjunctiveFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of hierarchical refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getHierarchicalRefinement: function(facetName) {
        // we send an array but we currently do not support multiple
        // hierarchicalRefinements for a hierarchicalFacet
        return this.hierarchicalFacetsRefinements[facetName] || [];
    },
    /**
   * Get the list of exclude refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {string[]} list of refinements
   */ getExcludeRefinements: function(facetName) {
        if (!this.isConjunctiveFacet(facetName)) return [];
        return this.facetsExcludes[facetName] || [];
    },
    /**
   * Remove all the numeric filter for a given (attribute, operator)
   * @method
   * @param {string} attribute attribute to set the filter on
   * @param {string} [operator] operator of the filter (possible values: =, >, >=, <, <=, !=)
   * @param {number} [number] the value to be removed
   * @return {SearchParameters}
   */ removeNumericRefinement: function(attribute, operator, paramValue) {
        if (paramValue !== undefined) {
            if (!this.isNumericRefined(attribute, operator, paramValue)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator && isEqualNumericRefinement(value.val, valToNumber(paramValue));
                })
            });
        } else if (operator !== undefined) {
            if (!this.isNumericRefined(attribute, operator)) return this;
            return this.setQueryParameters({
                numericRefinements: this._clearNumericRefinements(function(value, key) {
                    return key === attribute && value.op === operator;
                })
            });
        }
        if (!this.isNumericRefined(attribute)) return this;
        return this.setQueryParameters({
            numericRefinements: this._clearNumericRefinements(function(value, key) {
                return key === attribute;
            })
        });
    },
    /**
   * Get the list of numeric refinements for a single facet
   * @param {string} facetName name of the attribute used for faceting
   * @return {SearchParameters.OperatorList} list of refinements
   */ getNumericRefinements: function(facetName) {
        return this.numericRefinements[facetName] || {};
    },
    /**
   * Return the current refinement for the (attribute, operator)
   * @param {string} attribute attribute in the record
   * @param {string} operator operator applied on the refined values
   * @return {Array.<number|number[]>} refined values
   */ getNumericRefinement: function(attribute, operator) {
        return this.numericRefinements[attribute] && this.numericRefinements[attribute][operator];
    },
    /**
   * Clear numeric filters.
   * @method
   * @private
   * @param {string|SearchParameters.clearCallback} [attribute] optional string or function
   * - If not given, means to clear all the filters.
   * - If `string`, means to clear all refinements for the `attribute` named filter.
   * - If `function`, means to clear all the refinements that return truthy values.
   * @return {Object.<string, OperatorList>}
   */ _clearNumericRefinements: function _clearNumericRefinements(attribute) {
        if (attribute === undefined) {
            if (!objectHasKeys(this.numericRefinements)) return this.numericRefinements;
            return {};
        } else if (typeof attribute === "string") return omit(this.numericRefinements, [
            attribute
        ]);
        else if (typeof attribute === "function") {
            var hasChanged = false;
            var numericRefinements = this.numericRefinements;
            var newNumericRefinements = Object.keys(numericRefinements).reduce(function(memo, key) {
                var operators = numericRefinements[key];
                var operatorList = {};
                operators = operators || {};
                Object.keys(operators).forEach(function(operator) {
                    var values = operators[operator] || [];
                    var outValues = [];
                    values.forEach(function(value) {
                        var predicateResult = attribute({
                            val: value,
                            op: operator
                        }, key, "numeric");
                        if (!predicateResult) outValues.push(value);
                    });
                    if (outValues.length !== values.length) hasChanged = true;
                    operatorList[operator] = outValues;
                });
                memo[key] = operatorList;
                return memo;
            }, {});
            if (hasChanged) return newNumericRefinements;
            return this.numericRefinements;
        }
    },
    /**
   * Add a facet to the facets attribute of the helper configuration, if it
   * isn't already present.
   * @method
   * @param {string} facet facet name to add
   * @return {SearchParameters}
   */ addFacet: function addFacet(facet) {
        if (this.isConjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            facets: this.facets.concat([
                facet
            ])
        });
    },
    /**
   * Add a disjunctive facet to the disjunctiveFacets attribute of the helper
   * configuration, if it isn't already present.
   * @method
   * @param {string} facet disjunctive facet name to add
   * @return {SearchParameters}
   */ addDisjunctiveFacet: function addDisjunctiveFacet(facet) {
        if (this.isDisjunctiveFacet(facet)) return this;
        return this.setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.concat([
                facet
            ])
        });
    },
    /**
   * Add a hierarchical facet to the hierarchicalFacets attribute of the helper
   * configuration.
   * @method
   * @param {object} hierarchicalFacet hierarchical facet to add
   * @return {SearchParameters}
   * @throws will throw an error if a hierarchical facet with the same name was already declared
   */ addHierarchicalFacet: function addHierarchicalFacet(hierarchicalFacet) {
        if (this.isHierarchicalFacet(hierarchicalFacet.name)) throw new Error("Cannot declare two hierarchical facets with the same name: `" + hierarchicalFacet.name + "`");
        return this.setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.concat([
                hierarchicalFacet
            ])
        });
    },
    /**
   * Add a refinement on a "normal" facet
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addFacetRefinement: function addFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.addRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Exclude a value from a "normal" facet
   * @method
   * @param {string} facet attribute to apply the exclusion on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addExcludeRefinement: function addExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.addRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Adds a refinement on a disjunctive facet.
   * @method
   * @param {string} facet attribute to apply the faceting on
   * @param {string} value value of the attribute (will be converted to string)
   * @return {SearchParameters}
   */ addDisjunctiveFacetRefinement: function addDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        if (RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.addRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * addTagRefinement adds a tag to the list used to filter the results
   * @param {string} tag tag to be added
   * @return {SearchParameters}
   */ addTagRefinement: function addTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.concat(tag)
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Remove a facet from the facets attribute of the helper configuration, if it
   * is present.
   * @method
   * @param {string} facet facet name to remove
   * @return {SearchParameters}
   */ removeFacet: function removeFacet(facet) {
        if (!this.isConjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            facets: this.facets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a disjunctive facet from the disjunctiveFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet disjunctive facet name to remove
   * @return {SearchParameters}
   */ removeDisjunctiveFacet: function removeDisjunctiveFacet(facet) {
        if (!this.isDisjunctiveFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            disjunctiveFacets: this.disjunctiveFacets.filter(function(f) {
                return f !== facet;
            })
        });
    },
    /**
   * Remove a hierarchical facet from the hierarchicalFacets attribute of the
   * helper configuration, if it is present.
   * @method
   * @param {string} facet hierarchical facet name to remove
   * @return {SearchParameters}
   */ removeHierarchicalFacet: function removeHierarchicalFacet(facet) {
        if (!this.isHierarchicalFacet(facet)) return this;
        return this.clearRefinements(facet).setQueryParameters({
            hierarchicalFacets: this.hierarchicalFacets.filter(function(f) {
                return f.name !== facet;
            })
        });
    },
    /**
   * Remove a refinement set on facet. If a value is provided, it will clear the
   * refinement for the given value, otherwise it will clear all the refinement
   * values for the faceted attribute.
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} [value] value used to filter
   * @return {SearchParameters}
   */ removeFacetRefinement: function removeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (!RefinementList.isRefined(this.facetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            facetsRefinements: RefinementList.removeRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Remove a negative refinement on a facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */ removeExcludeRefinement: function removeExcludeRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        if (!RefinementList.isRefined(this.facetsExcludes, facet, value)) return this;
        return this.setQueryParameters({
            facetsExcludes: RefinementList.removeRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Remove a refinement on a disjunctive facet
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {string} value value used to filter
   * @return {SearchParameters}
   */ removeDisjunctiveFacetRefinement: function removeDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        if (!RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value)) return this;
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.removeRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Remove a tag from the list of tag refinements
   * @method
   * @param {string} tag the tag to remove
   * @return {SearchParameters}
   */ removeTagRefinement: function removeTagRefinement(tag) {
        if (!this.isTagRefined(tag)) return this;
        var modification = {
            tagRefinements: this.tagRefinements.filter(function(t) {
                return t !== tag;
            })
        };
        return this.setQueryParameters(modification);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   * @deprecated since version 2.19.0, see {@link SearchParameters#toggleFacetRefinement}
   */ toggleRefinement: function toggleRefinement(facet, value) {
        return this.toggleFacetRefinement(facet, value);
    },
    /**
   * Generic toggle refinement method to use with facet, disjunctive facets
   * and hierarchical facets
   * @param  {string} facet the facet to refine
   * @param  {string} value the associated value
   * @return {SearchParameters}
   * @throws will throw an error if the facet is not declared in the settings of the helper
   */ toggleFacetRefinement: function toggleFacetRefinement(facet, value) {
        if (this.isHierarchicalFacet(facet)) return this.toggleHierarchicalFacetRefinement(facet, value);
        else if (this.isConjunctiveFacet(facet)) return this.toggleConjunctiveFacetRefinement(facet, value);
        else if (this.isDisjunctiveFacet(facet)) return this.toggleDisjunctiveFacetRefinement(facet, value);
        throw new Error("Cannot refine the undeclared facet " + facet + "; it should be added to the helper options facets, disjunctiveFacets or hierarchicalFacets");
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleConjunctiveFacetRefinement: function toggleConjunctiveFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        return this.setQueryParameters({
            facetsRefinements: RefinementList.toggleRefinement(this.facetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleExcludeFacetRefinement: function toggleExcludeFacetRefinement(facet, value) {
        if (!this.isConjunctiveFacet(facet)) throw new Error(facet + " is not defined in the facets attribute of the helper configuration");
        return this.setQueryParameters({
            facetsExcludes: RefinementList.toggleRefinement(this.facetsExcludes, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleDisjunctiveFacetRefinement: function toggleDisjunctiveFacetRefinement(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) throw new Error(facet + " is not defined in the disjunctiveFacets attribute of the helper configuration");
        return this.setQueryParameters({
            disjunctiveFacetsRefinements: RefinementList.toggleRefinement(this.disjunctiveFacetsRefinements, facet, value)
        });
    },
    /**
   * Switch the refinement applied over a facet/value
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {SearchParameters}
   */ toggleHierarchicalFacetRefinement: function toggleHierarchicalFacetRefinement(facet, value) {
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + " is not defined in the hierarchicalFacets attribute of the helper configuration");
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facet));
        var mod = {};
        var upOneOrMultipleLevel = this.hierarchicalFacetsRefinements[facet] !== undefined && this.hierarchicalFacetsRefinements[facet].length > 0 && // remove current refinement:
        // refinement was 'beer > IPA', call is toggleRefine('beer > IPA'), refinement should be `beer`
        (this.hierarchicalFacetsRefinements[facet][0] === value || // remove a parent refinement of the current refinement:
        //  - refinement was 'beer > IPA > Flying dog'
        //  - call is toggleRefine('beer > IPA')
        //  - refinement should be `beer`
        this.hierarchicalFacetsRefinements[facet][0].indexOf(value + separator) === 0);
        if (upOneOrMultipleLevel) {
            if (value.indexOf(separator) === -1) // go back to root level
            mod[facet] = [];
            else mod[facet] = [
                value.slice(0, value.lastIndexOf(separator))
            ];
        } else mod[facet] = [
            value
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Adds a refinement on a hierarchical facet.
   * @param {string} facet the facet name
   * @param {string} path the hierarchical facet path
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is refined
   */ addHierarchicalFacetRefinement: function(facet, path) {
        if (this.isHierarchicalFacetRefined(facet)) throw new Error(facet + " is already refined.");
        if (!this.isHierarchicalFacet(facet)) throw new Error(facet + " is not defined in the hierarchicalFacets attribute of the helper configuration.");
        var mod = {};
        mod[facet] = [
            path
        ];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Removes the refinement set on a hierarchical facet.
   * @param {string} facet the facet name
   * @return {SearchParameter} the new state
   * @throws Error if the facet is not defined or if the facet is not refined
   */ removeHierarchicalFacetRefinement: function(facet) {
        if (!this.isHierarchicalFacetRefined(facet)) return this;
        var mod = {};
        mod[facet] = [];
        return this.setQueryParameters({
            hierarchicalFacetsRefinements: defaultsPure({}, mod, this.hierarchicalFacetsRefinements)
        });
    },
    /**
   * Switch the tag refinement
   * @method
   * @param {string} tag the tag to remove or add
   * @return {SearchParameters}
   */ toggleTagRefinement: function toggleTagRefinement(tag) {
        if (this.isTagRefined(tag)) return this.removeTagRefinement(tag);
        return this.addTagRefinement(tag);
    },
    /**
   * Test if the facet name is from one of the disjunctive facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */ isDisjunctiveFacet: function(facet) {
        return this.disjunctiveFacets.indexOf(facet) > -1;
    },
    /**
   * Test if the facet name is from one of the hierarchical facets
   * @method
   * @param {string} facetName facet name to test
   * @return {boolean}
   */ isHierarchicalFacet: function(facetName) {
        return this.getHierarchicalFacetByName(facetName) !== undefined;
    },
    /**
   * Test if the facet name is from one of the conjunctive/normal facets
   * @method
   * @param {string} facet facet name to test
   * @return {boolean}
   */ isConjunctiveFacet: function(facet) {
        return this.facets.indexOf(facet) > -1;
    },
    /**
   * Returns true if the facet is refined, either for a specific value or in
   * general.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value, optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isFacetRefined: function isFacetRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains exclusions or if a specific value is
   * excluded.
   *
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} [value] optional value. If passed will test that this value
   * is filtering the given facet.
   * @return {boolean} returns true if refined
   */ isExcludeRefined: function isExcludeRefined(facet, value) {
        if (!this.isConjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.facetsExcludes, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */ isDisjunctiveFacetRefined: function isDisjunctiveFacetRefined(facet, value) {
        if (!this.isDisjunctiveFacet(facet)) return false;
        return RefinementList.isRefined(this.disjunctiveFacetsRefinements, facet, value);
    },
    /**
   * Returns true if the facet contains a refinement, or if a value passed is a
   * refinement for the facet.
   * @method
   * @param {string} facet name of the attribute for used for faceting
   * @param {string} value optional, will test if the value is used for refinement
   * if there is one, otherwise will test if the facet contains any refinement
   * @return {boolean}
   */ isHierarchicalFacetRefined: function isHierarchicalFacetRefined(facet, value) {
        if (!this.isHierarchicalFacet(facet)) return false;
        var refinements = this.getHierarchicalRefinement(facet);
        if (!value) return refinements.length > 0;
        return refinements.indexOf(value) !== -1;
    },
    /**
   * Test if the triple (attribute, operator, value) is already refined.
   * If only the attribute and the operator are provided, it tests if the
   * contains any refinement value.
   * @method
   * @param {string} attribute attribute for which the refinement is applied
   * @param {string} [operator] operator of the refinement
   * @param {string} [value] value of the refinement
   * @return {boolean} true if it is refined
   */ isNumericRefined: function isNumericRefined(attribute, operator, value) {
        if (value === undefined && operator === undefined) return !!this.numericRefinements[attribute];
        var isOperatorDefined = this.numericRefinements[attribute] && this.numericRefinements[attribute][operator] !== undefined;
        if (value === undefined || !isOperatorDefined) return isOperatorDefined;
        var parsedValue = valToNumber(value);
        var isAttributeValueDefined = findArray(this.numericRefinements[attribute][operator], parsedValue) !== undefined;
        return isOperatorDefined && isAttributeValueDefined;
    },
    /**
   * Returns true if the tag refined, false otherwise
   * @method
   * @param {string} tag the tag to check
   * @return {boolean}
   */ isTagRefined: function isTagRefined(tag) {
        return this.tagRefinements.indexOf(tag) !== -1;
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */ getRefinedDisjunctiveFacets: function getRefinedDisjunctiveFacets() {
        var self = this;
        // attributes used for numeric filter can also be disjunctive
        var disjunctiveNumericRefinedFacets = intersection(Object.keys(this.numericRefinements).filter(function(facet) {
            return Object.keys(self.numericRefinements[facet]).length > 0;
        }), this.disjunctiveFacets);
        return Object.keys(this.disjunctiveFacetsRefinements).filter(function(facet) {
            return self.disjunctiveFacetsRefinements[facet].length > 0;
        }).concat(disjunctiveNumericRefinedFacets).concat(this.getRefinedHierarchicalFacets());
    },
    /**
   * Returns the list of all disjunctive facets refined
   * @method
   * @param {string} facet name of the attribute used for faceting
   * @param {value} value value used for filtering
   * @return {string[]}
   */ getRefinedHierarchicalFacets: function getRefinedHierarchicalFacets() {
        var self = this;
        return intersection(// enforce the order between the two arrays,
        // so that refinement name index === hierarchical facet index
        this.hierarchicalFacets.map(function(facet) {
            return facet.name;
        }), Object.keys(this.hierarchicalFacetsRefinements).filter(function(facet) {
            return self.hierarchicalFacetsRefinements[facet].length > 0;
        }));
    },
    /**
   * Returned the list of all disjunctive facets not refined
   * @method
   * @return {string[]}
   */ getUnrefinedDisjunctiveFacets: function() {
        var refinedFacets = this.getRefinedDisjunctiveFacets();
        return this.disjunctiveFacets.filter(function(f) {
            return refinedFacets.indexOf(f) === -1;
        });
    },
    managedParameters: [
        "index",
        "facets",
        "disjunctiveFacets",
        "facetsRefinements",
        "hierarchicalFacets",
        "facetsExcludes",
        "disjunctiveFacetsRefinements",
        "numericRefinements",
        "tagRefinements",
        "hierarchicalFacetsRefinements"
    ],
    getQueryParams: function getQueryParams() {
        var managedParameters = this.managedParameters;
        var queryParams = {};
        var self = this;
        Object.keys(this).forEach(function(paramName) {
            var paramValue = self[paramName];
            if (managedParameters.indexOf(paramName) === -1 && paramValue !== undefined) queryParams[paramName] = paramValue;
        });
        return queryParams;
    },
    /**
   * Let the user set a specific value for a given parameter. Will return the
   * same instance if the parameter is invalid or if the value is the same as the
   * previous one.
   * @method
   * @param {string} parameter the parameter name
   * @param {any} value the value to be set, must be compliant with the definition
   * of the attribute on the object
   * @return {SearchParameters} the updated state
   */ setQueryParameter: function setParameter(parameter, value) {
        if (this[parameter] === value) return this;
        var modification = {};
        modification[parameter] = value;
        return this.setQueryParameters(modification);
    },
    /**
   * Let the user set any of the parameters with a plain object.
   * @method
   * @param {object} params all the keys and the values to be updated
   * @return {SearchParameters} a new updated instance
   */ setQueryParameters: function setQueryParameters(params) {
        if (!params) return this;
        var error = SearchParameters.validate(this, params);
        if (error) throw error;
        var self = this;
        var nextWithNumbers = SearchParameters._parseNumbers(params);
        var previousPlainObject = Object.keys(this).reduce(function(acc, key) {
            acc[key] = self[key];
            return acc;
        }, {});
        var nextPlainObject = Object.keys(nextWithNumbers).reduce(function(previous, key) {
            var isPreviousValueDefined = previous[key] !== undefined;
            var isNextValueDefined = nextWithNumbers[key] !== undefined;
            if (isPreviousValueDefined && !isNextValueDefined) return omit(previous, [
                key
            ]);
            if (isNextValueDefined) previous[key] = nextWithNumbers[key];
            return previous;
        }, previousPlainObject);
        return new this.constructor(nextPlainObject);
    },
    /**
   * Returns a new instance with the page reset. Two scenarios possible:
   * the page is omitted -> return the given instance
   * the page is set -> return a new instance with a page of 0
   * @return {SearchParameters} a new updated instance
   */ resetPage: function() {
        if (this.page === undefined) return this;
        return this.setPage(0);
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSortBy: function(hierarchicalFacet) {
        return hierarchicalFacet.sortBy || [
            "isRefined:desc",
            "name:asc"
        ];
    },
    /**
   * Helper function to get the hierarchicalFacet separator or the default one (`>`)
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.separator or `>` as default
   */ _getHierarchicalFacetSeparator: function(hierarchicalFacet) {
        return hierarchicalFacet.separator || " > ";
    },
    /**
   * Helper function to get the hierarchicalFacet prefix path or null
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.rootPath or null as default
   */ _getHierarchicalRootPath: function(hierarchicalFacet) {
        return hierarchicalFacet.rootPath || null;
    },
    /**
   * Helper function to check if we show the parent level of the hierarchicalFacet
   * @private
   * @param  {object} hierarchicalFacet
   * @return {string} returns the hierarchicalFacet.showParentLevel or true as default
   */ _getHierarchicalShowParentLevel: function(hierarchicalFacet) {
        if (typeof hierarchicalFacet.showParentLevel === "boolean") return hierarchicalFacet.showParentLevel;
        return true;
    },
    /**
   * Helper function to get the hierarchicalFacet by it's name
   * @param  {string} hierarchicalFacetName
   * @return {object} a hierarchicalFacet
   */ getHierarchicalFacetByName: function(hierarchicalFacetName) {
        return find(this.hierarchicalFacets, function(f) {
            return f.name === hierarchicalFacetName;
        });
    },
    /**
   * Get the current breadcrumb for a hierarchical facet, as an array
   * @param  {string} facetName Hierarchical facet name
   * @return {array.<string>} the path as an array of string
   */ getHierarchicalFacetBreadcrumb: function(facetName) {
        if (!this.isHierarchicalFacet(facetName)) return [];
        var refinement = this.getHierarchicalRefinement(facetName)[0];
        if (!refinement) return [];
        var separator = this._getHierarchicalFacetSeparator(this.getHierarchicalFacetByName(facetName));
        var path = refinement.split(separator);
        return path.map(function(part) {
            return part.trim();
        });
    },
    toString: function() {
        return JSON.stringify(this, null, 2);
    }
};
/**
 * Callback used for clearRefinement method
 * @callback SearchParameters.clearCallback
 * @param {OperatorList|FacetList} value the value of the filter
 * @param {string} key the current attribute name
 * @param {string} type `numeric`, `disjunctiveFacet`, `conjunctiveFacet`, `hierarchicalFacet` or `exclude`
 * depending on the type of facet
 * @return {boolean} `true` if the element should be removed. `false` otherwise.
 */ module.exports = SearchParameters;

},{"../functions/merge":"eGyc5","../functions/defaultsPure":"2BeUG","../functions/intersection":"iaaF4","../functions/find":"hBcv7","../functions/valToNumber":"jWUZB","../functions/omit":"l3IzD","../functions/objectHasKeys":"alqSr","../utils/isValidUserToken":"eZyse","./RefinementList":"5Zz04"}],"eGyc5":[function(require,module,exports) {
"use strict";
function clone(value) {
    if (typeof value === "object" && value !== null) return _merge(Array.isArray(value) ? [] : {}, value);
    return value;
}
function isObjectOrArrayOrFunction(value) {
    return typeof value === "function" || Array.isArray(value) || Object.prototype.toString.call(value) === "[object Object]";
}
function _merge(target, source) {
    if (target === source) return target;
    for(var key in source){
        if (!Object.prototype.hasOwnProperty.call(source, key) || key === "__proto__") continue;
        var sourceVal = source[key];
        var targetVal = target[key];
        if (typeof targetVal !== "undefined" && typeof sourceVal === "undefined") continue;
        if (isObjectOrArrayOrFunction(targetVal) && isObjectOrArrayOrFunction(sourceVal)) target[key] = _merge(targetVal, sourceVal);
        else target[key] = clone(sourceVal);
    }
    return target;
}
/**
 * This method is like Object.assign, but recursively merges own and inherited
 * enumerable keyed properties of source objects into the destination object.
 *
 * NOTE: this behaves like lodash/merge, but:
 * - does mutate functions if they are a source
 * - treats non-plain objects as plain
 * - does not work for circular objects
 * - treats sparse arrays as sparse
 * - does not convert Array-like objects (Arguments, NodeLists, etc.) to arrays
 *
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 */ function merge(target) {
    if (!isObjectOrArrayOrFunction(target)) target = {};
    for(var i = 1, l = arguments.length; i < l; i++){
        var source = arguments[i];
        if (isObjectOrArrayOrFunction(source)) _merge(target, source);
    }
    return target;
}
module.exports = merge;

},{}],"2BeUG":[function(require,module,exports) {
"use strict";
// NOTE: this behaves like lodash/defaults, but doesn't mutate the target
// it also preserve keys order
module.exports = function defaultsPure() {
    var sources = Array.prototype.slice.call(arguments);
    return sources.reduceRight(function(acc, source) {
        Object.keys(Object(source)).forEach(function(key) {
            if (source[key] === undefined) return;
            if (acc[key] !== undefined) // remove if already added, so that we can add it in correct order
            delete acc[key];
            acc[key] = source[key];
        });
        return acc;
    }, {});
};

},{}],"iaaF4":[function(require,module,exports) {
"use strict";
function intersection(arr1, arr2) {
    return arr1.filter(function(value, index) {
        return arr2.indexOf(value) > -1 && arr1.indexOf(value) === index /* skips duplicates */ ;
    });
}
module.exports = intersection;

},{}],"hBcv7":[function(require,module,exports) {
"use strict";
// @MAJOR can be replaced by native Array#find when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return undefined;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return array[i];
    }
};

},{}],"jWUZB":[function(require,module,exports) {
"use strict";
function valToNumber(v) {
    if (typeof v === "number") return v;
    else if (typeof v === "string") return parseFloat(v);
    else if (Array.isArray(v)) return v.map(valToNumber);
    throw new Error("The value should be a number, a parsable string or an array of those.");
}
module.exports = valToNumber;

},{}],"l3IzD":[function(require,module,exports) {
"use strict";
// https://github.com/babel/babel/blob/3aaafae053fa75febb3aa45d45b6f00646e30ba4/packages/babel-helpers/src/helpers.js#L604-L620
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source === null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key;
    var i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
module.exports = _objectWithoutPropertiesLoose;

},{}],"alqSr":[function(require,module,exports) {
"use strict";
function objectHasKeys(obj) {
    return obj && Object.keys(obj).length > 0;
}
module.exports = objectHasKeys;

},{}],"eZyse":[function(require,module,exports) {
"use strict";
module.exports = function isValidUserToken(userToken) {
    if (userToken === null) return false;
    return /^[a-zA-Z0-9_-]{1,64}$/.test(userToken);
};

},{}],"5Zz04":[function(require,module,exports) {
"use strict";
/**
 * Functions to manipulate refinement lists
 *
 * The RefinementList is not formally defined through a prototype but is based
 * on a specific structure.
 *
 * @module SearchParameters.refinementList
 *
 * @typedef {string[]} SearchParameters.refinementList.Refinements
 * @typedef {Object.<string, SearchParameters.refinementList.Refinements>} SearchParameters.refinementList.RefinementList
 */ var defaultsPure = require("../functions/defaultsPure");
var omit = require("../functions/omit");
var objectHasKeys = require("../functions/objectHasKeys");
var lib = {
    /**
   * Adds a refinement to a RefinementList
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement, if the value is not a string it will be converted
   * @return {RefinementList} a new and updated refinement list
   */ addRefinement: function addRefinement(refinementList, attribute, value) {
        if (lib.isRefined(refinementList, attribute, value)) return refinementList;
        var valueAsString = "" + value;
        var facetRefinement = !refinementList[attribute] ? [
            valueAsString
        ] : refinementList[attribute].concat(valueAsString);
        var mod = {};
        mod[attribute] = facetRefinement;
        return defaultsPure({}, mod, refinementList);
    },
    /**
   * Removes refinement(s) for an attribute:
   *  - if the value is specified removes the refinement for the value on the attribute
   *  - if no value is specified removes all the refinements for this attribute
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} [value] the value of the refinement
   * @return {RefinementList} a new and updated refinement lst
   */ removeRefinement: function removeRefinement(refinementList, attribute, value) {
        if (value === undefined) // we use the "filter" form of clearRefinement, since it leaves empty values as-is
        // the form with a string will remove the attribute completely
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f;
        });
        var valueAsString = "" + value;
        return lib.clearRefinement(refinementList, function(v, f) {
            return attribute === f && valueAsString === v;
        });
    },
    /**
   * Toggles the refinement value for an attribute.
   * @param {RefinementList} refinementList the initial list
   * @param {string} attribute the attribute to refine
   * @param {string} value the value of the refinement
   * @return {RefinementList} a new and updated list
   */ toggleRefinement: function toggleRefinement(refinementList, attribute, value) {
        if (value === undefined) throw new Error("toggleRefinement should be used with a value");
        if (lib.isRefined(refinementList, attribute, value)) return lib.removeRefinement(refinementList, attribute, value);
        return lib.addRefinement(refinementList, attribute, value);
    },
    /**
   * Clear all or parts of a RefinementList. Depending on the arguments, three
   * kinds of behavior can happen:
   *  - if no attribute is provided: clears the whole list
   *  - if an attribute is provided as a string: clears the list for the specific attribute
   *  - if an attribute is provided as a function: discards the elements for which the function returns true
   * @param {RefinementList} refinementList the initial list
   * @param {string} [attribute] the attribute or function to discard
   * @param {string} [refinementType] optional parameter to give more context to the attribute function
   * @return {RefinementList} a new and updated refinement list
   */ clearRefinement: function clearRefinement(refinementList, attribute, refinementType) {
        if (attribute === undefined) {
            if (!objectHasKeys(refinementList)) return refinementList;
            return {};
        } else if (typeof attribute === "string") return omit(refinementList, [
            attribute
        ]);
        else if (typeof attribute === "function") {
            var hasChanged = false;
            var newRefinementList = Object.keys(refinementList).reduce(function(memo, key) {
                var values = refinementList[key] || [];
                var facetList = values.filter(function(value) {
                    return !attribute(value, key, refinementType);
                });
                if (facetList.length !== values.length) hasChanged = true;
                memo[key] = facetList;
                return memo;
            }, {});
            if (hasChanged) return newRefinementList;
            return refinementList;
        }
    },
    /**
   * Test if the refinement value is used for the attribute. If no refinement value
   * is provided, test if the refinementList contains any refinement for the
   * given attribute.
   * @param {RefinementList} refinementList the list of refinement
   * @param {string} attribute name of the attribute
   * @param {string} [refinementValue] value of the filter/refinement
   * @return {boolean}
   */ isRefined: function isRefined(refinementList, attribute, refinementValue) {
        var containsRefinements = !!refinementList[attribute] && refinementList[attribute].length > 0;
        if (refinementValue === undefined || !containsRefinements) return containsRefinements;
        var refinementValueAsString = "" + refinementValue;
        return refinementList[attribute].indexOf(refinementValueAsString) !== -1;
    }
};
module.exports = lib;

},{"../functions/defaultsPure":"2BeUG","../functions/omit":"l3IzD","../functions/objectHasKeys":"alqSr"}],"lUGU6":[function(require,module,exports) {
"use strict";
var merge = require("../functions/merge");
var defaultsPure = require("../functions/defaultsPure");
var orderBy = require("../functions/orderBy");
var compact = require("../functions/compact");
var find = require("../functions/find");
var findIndex = require("../functions/findIndex");
var formatSort = require("../functions/formatSort");
var fv = require("../functions/escapeFacetValue");
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;
var generateHierarchicalTree = require("./generate-hierarchical-tree");
/**
 * @typedef SearchResults.Facet
 * @type {object}
 * @property {string} name name of the attribute in the record
 * @property {object} data the faceting data: value, number of entries
 * @property {object} stats undefined unless facet_stats is retrieved from algolia
 */ /**
 * @typedef SearchResults.HierarchicalFacet
 * @type {object}
 * @property {string} name name of the current value given the hierarchical level, trimmed.
 * If root node, you get the facet name
 * @property {number} count number of objects matching this hierarchical value
 * @property {string} path the current hierarchical value full path
 * @property {boolean} isRefined `true` if the current value was refined, `false` otherwise
 * @property {HierarchicalFacet[]} data sub values for the current level
 */ /**
 * @typedef SearchResults.FacetValue
 * @type {object}
 * @property {string} name the facet value itself
 * @property {number} count times this facet appears in the results
 * @property {boolean} isRefined is the facet currently selected
 * @property {boolean} isExcluded is the facet currently excluded (only for conjunctive facets)
 */ /**
 * @typedef Refinement
 * @type {object}
 * @property {string} type the type of filter used:
 * `numeric`, `facet`, `exclude`, `disjunctive`, `hierarchical`
 * @property {string} attributeName name of the attribute used for filtering
 * @property {string} name the value of the filter
 * @property {number} numericValue the value as a number. Only for numeric filters.
 * @property {string} operator the operator used. Only for numeric filters.
 * @property {number} count the number of computed hits for this filter. Only on facets.
 * @property {boolean} exhaustive if the count is exhaustive
 */ /**
 * @param {string[]} attributes
 */ function getIndices(attributes) {
    var indices = {};
    attributes.forEach(function(val, idx) {
        indices[val] = idx;
    });
    return indices;
}
function assignFacetStats(dest, facetStats, key) {
    if (facetStats && facetStats[key]) dest.stats = facetStats[key];
}
/**
 * @typedef {Object} HierarchicalFacet
 * @property {string} name
 * @property {string[]} attributes
 */ /**
 * @param {HierarchicalFacet[]} hierarchicalFacets
 * @param {string} hierarchicalAttributeName
 */ function findMatchingHierarchicalFacetFromAttributeName(hierarchicalFacets, hierarchicalAttributeName) {
    return find(hierarchicalFacets, function facetKeyMatchesAttribute(hierarchicalFacet) {
        var facetNames = hierarchicalFacet.attributes || [];
        return facetNames.indexOf(hierarchicalAttributeName) > -1;
    });
}
/*eslint-disable */ /**
 * Constructor for SearchResults
 * @class
 * @classdesc SearchResults contains the results of a query to Algolia using the
 * {@link AlgoliaSearchHelper}.
 * @param {SearchParameters} state state that led to the response
 * @param {array.<object>} results the results from algolia client
 * @example <caption>SearchResults of the first query in
 * <a href="http://demos.algolia.com/instant-search-demo">the instant search demo</a></caption>
{
   "hitsPerPage": 10,
   "processingTimeMS": 2,
   "facets": [
      {
         "name": "type",
         "data": {
            "HardGood": 6627,
            "BlackTie": 550,
            "Music": 665,
            "Software": 131,
            "Game": 456,
            "Movie": 1571
         },
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "Free shipping": 5507
         },
         "name": "shipping"
      }
  ],
   "hits": [
      {
         "thumbnailImage": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_54x108_s.gif",
         "_highlightResult": {
            "shortDescription": {
               "matchLevel": "none",
               "value": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
               "matchedWords": []
            },
            "category": {
               "matchLevel": "none",
               "value": "Computer Security Software",
               "matchedWords": []
            },
            "manufacturer": {
               "matchedWords": [],
               "value": "Webroot",
               "matchLevel": "none"
            },
            "name": {
               "value": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
               "matchedWords": [],
               "matchLevel": "none"
            }
         },
         "image": "http://img.bbystatic.com/BestBuy_US/images/products/1688/1688832_105x210_sc.jpg",
         "shipping": "Free shipping",
         "bestSellingRank": 4,
         "shortDescription": "Safeguard your PC, Mac, Android and iOS devices with comprehensive Internet protection",
         "url": "http://www.bestbuy.com/site/webroot-secureanywhere-internet-security-3-devi…d=1219060687969&skuId=1688832&cmp=RMX&ky=2d3GfEmNIzjA0vkzveHdZEBgpPCyMnLTJ",
         "name": "Webroot SecureAnywhere Internet Security (3-Device) (1-Year Subscription) - Mac/Windows",
         "category": "Computer Security Software",
         "salePrice_range": "1 - 50",
         "objectID": "1688832",
         "type": "Software",
         "customerReviewCount": 5980,
         "salePrice": 49.99,
         "manufacturer": "Webroot"
      },
      ....
  ],
   "nbHits": 10000,
   "disjunctiveFacets": [
      {
         "exhaustive": false,
         "data": {
            "5": 183,
            "12": 112,
            "7": 149,
            ...
         },
         "name": "customerReviewCount",
         "stats": {
            "max": 7461,
            "avg": 157.939,
            "min": 1
         }
      },
      {
         "data": {
            "Printer Ink": 142,
            "Wireless Speakers": 60,
            "Point & Shoot Cameras": 48,
            ...
         },
         "name": "category",
         "exhaustive": false
      },
      {
         "exhaustive": false,
         "data": {
            "> 5000": 2,
            "1 - 50": 6524,
            "501 - 2000": 566,
            "201 - 500": 1501,
            "101 - 200": 1360,
            "2001 - 5000": 47
         },
         "name": "salePrice_range"
      },
      {
         "data": {
            "Dynex™": 202,
            "Insignia™": 230,
            "PNY": 72,
            ...
         },
         "name": "manufacturer",
         "exhaustive": false
      }
  ],
   "query": "",
   "nbPages": 100,
   "page": 0,
   "index": "bestbuy"
}
 **/ /*eslint-enable */ function SearchResults(state, results, options) {
    var mainSubResponse = results[0];
    this._rawResults = results;
    var self = this;
    // https://www.algolia.com/doc/api-reference/api-methods/search/#response
    Object.keys(mainSubResponse).forEach(function(key) {
        self[key] = mainSubResponse[key];
    });
    // Make every key of the result options reachable from the instance
    Object.keys(options || {}).forEach(function(key) {
        self[key] = options[key];
    });
    /**
   * query used to generate the results
   * @name query
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * The query as parsed by the engine given all the rules.
   * @name parsedQuery
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * all the records that match the search parameters. Each record is
   * augmented with a new attribute `_highlightResult`
   * which is an object keyed by attribute and with the following properties:
   *  - `value` : the value of the facet highlighted (html)
   *  - `matchLevel`: full, partial or none depending on how the query terms match
   * @name hits
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * index where the results come from
   * @name index
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * number of hits per page requested
   * @name hitsPerPage
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of hits of this query on the index
   * @name nbHits
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * total number of pages with respect to the number of hits per page and the total number of hits
   * @name nbPages
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * current page
   * @name page
   * @member {number}
   * @memberof SearchResults
   * @instance
   */ /**
   * The position if the position was guessed by IP.
   * @name aroundLatLng
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "48.8637,2.3615",
   */ /**
   * The radius computed by Algolia.
   * @name automaticRadius
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "126792922",
   */ /**
   * String identifying the server used to serve this request.
   *
   * getRankingInfo needs to be set to `true` for this to be returned
   *
   * @name serverUsed
   * @member {string}
   * @memberof SearchResults
   * @instance
   * @example "c7-use-2.algolia.net",
   */ /**
   * Boolean that indicates if the computation of the counts did time out.
   * @deprecated
   * @name timeoutCounts
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Boolean that indicates if the computation of the hits did time out.
   * @deprecated
   * @name timeoutHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the counts of the facets is exhaustive
   * @name exhaustiveFacetsCount
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * True if the number of hits is exhaustive
   * @name exhaustiveNbHits
   * @member {boolean}
   * @memberof SearchResults
   * @instance
   */ /**
   * Contains the userData if they are set by a [query rule](https://www.algolia.com/doc/guides/query-rules/query-rules-overview/).
   * @name userData
   * @member {object[]}
   * @memberof SearchResults
   * @instance
   */ /**
   * queryID is the unique identifier of the query used to generate the current search results.
   * This value is only available if the `clickAnalytics` search parameter is set to `true`.
   * @name queryID
   * @member {string}
   * @memberof SearchResults
   * @instance
   */ /**
   * sum of the processing time of all the queries
   * @member {number}
   */ this.processingTimeMS = results.reduce(function(sum, result) {
        return result.processingTimeMS === undefined ? sum : sum + result.processingTimeMS;
    }, 0);
    /**
   * disjunctive facets results
   * @member {SearchResults.Facet[]}
   */ this.disjunctiveFacets = [];
    /**
   * disjunctive facets results
   * @member {SearchResults.HierarchicalFacet[]}
   */ this.hierarchicalFacets = state.hierarchicalFacets.map(function initFutureTree() {
        return [];
    });
    /**
   * other facets results
   * @member {SearchResults.Facet[]}
   */ this.facets = [];
    var disjunctiveFacets = state.getRefinedDisjunctiveFacets();
    var facetsIndices = getIndices(state.facets);
    var disjunctiveFacetsIndices = getIndices(state.disjunctiveFacets);
    var nextDisjunctiveResult = 1;
    // Since we send request only for disjunctive facets that have been refined,
    // we get the facets information from the first, general, response.
    var mainFacets = mainSubResponse.facets || {};
    Object.keys(mainFacets).forEach(function(facetKey) {
        var facetValueObject = mainFacets[facetKey];
        var hierarchicalFacet = findMatchingHierarchicalFacetFromAttributeName(state.hierarchicalFacets, facetKey);
        if (hierarchicalFacet) {
            // Place the hierarchicalFacet data at the correct index depending on
            // the attributes order that was defined at the helper initialization
            var facetIndex = hierarchicalFacet.attributes.indexOf(facetKey);
            var idxAttributeName = findIndex(state.hierarchicalFacets, function(f) {
                return f.name === hierarchicalFacet.name;
            });
            self.hierarchicalFacets[idxAttributeName][facetIndex] = {
                attribute: facetKey,
                data: facetValueObject,
                exhaustive: mainSubResponse.exhaustiveFacetsCount
            };
        } else {
            var isFacetDisjunctive = state.disjunctiveFacets.indexOf(facetKey) !== -1;
            var isFacetConjunctive = state.facets.indexOf(facetKey) !== -1;
            var position;
            if (isFacetDisjunctive) {
                position = disjunctiveFacetsIndices[facetKey];
                self.disjunctiveFacets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], mainSubResponse.facets_stats, facetKey);
            }
            if (isFacetConjunctive) {
                position = facetsIndices[facetKey];
                self.facets[position] = {
                    name: facetKey,
                    data: facetValueObject,
                    exhaustive: mainSubResponse.exhaustiveFacetsCount
                };
                assignFacetStats(self.facets[position], mainSubResponse.facets_stats, facetKey);
            }
        }
    });
    // Make sure we do not keep holes within the hierarchical facets
    this.hierarchicalFacets = compact(this.hierarchicalFacets);
    // aggregate the refined disjunctive facets
    disjunctiveFacets.forEach(function(disjunctiveFacet) {
        var result = results[nextDisjunctiveResult];
        var facets = result && result.facets ? result.facets : {};
        var hierarchicalFacet = state.getHierarchicalFacetByName(disjunctiveFacet);
        // There should be only item in facets.
        Object.keys(facets).forEach(function(dfacet) {
            var facetResults = facets[dfacet];
            var position;
            if (hierarchicalFacet) {
                position = findIndex(state.hierarchicalFacets, function(f) {
                    return f.name === hierarchicalFacet.name;
                });
                var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                    return f.attribute === dfacet;
                });
                // previous refinements and no results so not able to find it
                if (attributeIndex === -1) return;
                self.hierarchicalFacets[position][attributeIndex].data = merge({}, self.hierarchicalFacets[position][attributeIndex].data, facetResults);
            } else {
                position = disjunctiveFacetsIndices[dfacet];
                var dataFromMainRequest = mainSubResponse.facets && mainSubResponse.facets[dfacet] || {};
                self.disjunctiveFacets[position] = {
                    name: dfacet,
                    data: defaultsPure({}, facetResults, dataFromMainRequest),
                    exhaustive: result.exhaustiveFacetsCount
                };
                assignFacetStats(self.disjunctiveFacets[position], result.facets_stats, dfacet);
                if (state.disjunctiveFacetsRefinements[dfacet]) state.disjunctiveFacetsRefinements[dfacet].forEach(function(refinementValue) {
                    // add the disjunctive refinements if it is no more retrieved
                    if (!self.disjunctiveFacets[position].data[refinementValue] && state.disjunctiveFacetsRefinements[dfacet].indexOf(unescapeFacetValue(refinementValue)) > -1) self.disjunctiveFacets[position].data[refinementValue] = 0;
                });
            }
        });
        nextDisjunctiveResult++;
    });
    // if we have some parent level values for hierarchical facets, merge them
    state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
        var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
        // if we are already at a root refinement (or no refinement at all), there is no
        // root level values request
        if (currentRefinement.length === 0 || currentRefinement[0].split(separator).length < 2) return;
        results.slice(nextDisjunctiveResult).forEach(function(result) {
            var facets = result && result.facets ? result.facets : {};
            Object.keys(facets).forEach(function(dfacet) {
                var facetResults = facets[dfacet];
                var position = findIndex(state.hierarchicalFacets, function(f) {
                    return f.name === hierarchicalFacet.name;
                });
                var attributeIndex = findIndex(self.hierarchicalFacets[position], function(f) {
                    return f.attribute === dfacet;
                });
                // previous refinements and no results so not able to find it
                if (attributeIndex === -1) return;
                // when we always get root levels, if the hits refinement is `beers > IPA` (count: 5),
                // then the disjunctive values will be `beers` (count: 100),
                // but we do not want to display
                //   | beers (100)
                //     > IPA (5)
                // We want
                //   | beers (5)
                //     > IPA (5)
                var defaultData = {};
                if (currentRefinement.length > 0) {
                    var root = currentRefinement[0].split(separator)[0];
                    defaultData[root] = self.hierarchicalFacets[position][attributeIndex].data[root];
                }
                self.hierarchicalFacets[position][attributeIndex].data = defaultsPure(defaultData, facetResults, self.hierarchicalFacets[position][attributeIndex].data);
            });
            nextDisjunctiveResult++;
        });
    });
    // add the excludes
    Object.keys(state.facetsExcludes).forEach(function(facetName) {
        var excludes = state.facetsExcludes[facetName];
        var position = facetsIndices[facetName];
        self.facets[position] = {
            name: facetName,
            data: mainSubResponse.facets[facetName],
            exhaustive: mainSubResponse.exhaustiveFacetsCount
        };
        excludes.forEach(function(facetValue) {
            self.facets[position] = self.facets[position] || {
                name: facetName
            };
            self.facets[position].data = self.facets[position].data || {};
            self.facets[position].data[facetValue] = 0;
        });
    });
    /**
   * @type {Array}
   */ this.hierarchicalFacets = this.hierarchicalFacets.map(generateHierarchicalTree(state));
    /**
   * @type {Array}
   */ this.facets = compact(this.facets);
    /**
   * @type {Array}
   */ this.disjunctiveFacets = compact(this.disjunctiveFacets);
    this._state = state;
}
/**
 * Get a facet object with its name
 * @deprecated
 * @param {string} name name of the faceted attribute
 * @return {SearchResults.Facet} the facet object
 */ SearchResults.prototype.getFacetByName = function(name) {
    function predicate(facet) {
        return facet.name === name;
    }
    return find(this.facets, predicate) || find(this.disjunctiveFacets, predicate) || find(this.hierarchicalFacets, predicate);
};
/**
 * Get the facet values of a specified attribute from a SearchResults object.
 * @private
 * @param {SearchResults} results the search results to search in
 * @param {string} attribute name of the faceted attribute to search for
 * @return {array|object} facet values. For the hierarchical facets it is an object.
 */ function extractNormalizedFacetValues(results, attribute) {
    function predicate(facet) {
        return facet.name === attribute;
    }
    if (results._state.isConjunctiveFacet(attribute)) {
        var facet1 = find(results.facets, predicate);
        if (!facet1) return [];
        return Object.keys(facet1.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
                name: name,
                escapedValue: value,
                count: facet1.data[name],
                isRefined: results._state.isFacetRefined(attribute, value),
                isExcluded: results._state.isExcludeRefined(attribute, name)
            };
        });
    } else if (results._state.isDisjunctiveFacet(attribute)) {
        var disjunctiveFacet = find(results.disjunctiveFacets, predicate);
        if (!disjunctiveFacet) return [];
        return Object.keys(disjunctiveFacet.data).map(function(name) {
            var value = escapeFacetValue(name);
            return {
                name: name,
                escapedValue: value,
                count: disjunctiveFacet.data[name],
                isRefined: results._state.isDisjunctiveFacetRefined(attribute, value)
            };
        });
    } else if (results._state.isHierarchicalFacet(attribute)) return find(results.hierarchicalFacets, predicate);
}
/**
 * Sort nodes of a hierarchical or disjunctive facet results
 * @private
 * @param {function} sortFn
 * @param {HierarchicalFacet|Array} node node upon which we want to apply the sort
 * @param {string[]} names attribute names
 * @param {number} [level=0] current index in the names array
 */ function recSort(sortFn, node, names, level) {
    level = level || 0;
    if (Array.isArray(node)) return sortFn(node, names[level]);
    if (!node.data || node.data.length === 0) return node;
    var children = node.data.map(function(childNode) {
        return recSort(sortFn, childNode, names, level + 1);
    });
    var sortedChildren = sortFn(children, names[level]);
    var newNode = defaultsPure({
        data: sortedChildren
    }, node);
    return newNode;
}
SearchResults.DEFAULT_SORT = [
    "isRefined:desc",
    "count:desc",
    "name:asc"
];
function vanillaSortFn(order, data) {
    return data.sort(order);
}
/**
 * @typedef FacetOrdering
 * @type {Object}
 * @property {string[]} [order]
 * @property {'count' | 'alpha' | 'hidden'} [sortRemainingBy]
 */ /**
 * Sorts facet arrays via their facet ordering
 * @param {Array} facetValues the values
 * @param {FacetOrdering} facetOrdering the ordering
 * @returns {Array}
 */ function sortViaFacetOrdering(facetValues, facetOrdering) {
    var orderedFacets = [];
    var remainingFacets = [];
    var order = facetOrdering.order || [];
    /**
   * an object with the keys being the values in order, the values their index:
   * ['one', 'two'] -> { one: 0, two: 1 }
   */ var reverseOrder = order.reduce(function(acc, name, i) {
        acc[name] = i;
        return acc;
    }, {});
    facetValues.forEach(function(item) {
        // hierarchical facets get sorted using their raw name
        var name = item.path || item.name;
        if (reverseOrder[name] !== undefined) orderedFacets[reverseOrder[name]] = item;
        else remainingFacets.push(item);
    });
    orderedFacets = orderedFacets.filter(function(facet) {
        return facet;
    });
    var sortRemainingBy = facetOrdering.sortRemainingBy;
    var ordering;
    if (sortRemainingBy === "hidden") return orderedFacets;
    else if (sortRemainingBy === "alpha") ordering = [
        [
            "path",
            "name"
        ],
        [
            "asc",
            "asc"
        ]
    ];
    else ordering = [
        [
            "count"
        ],
        [
            "desc"
        ]
    ];
    return orderedFacets.concat(orderBy(remainingFacets, ordering[0], ordering[1]));
}
/**
 * @param {SearchResults} results the search results class
 * @param {string} attribute the attribute to retrieve ordering of
 * @returns {FacetOrdering=}
 */ function getFacetOrdering(results, attribute) {
    return results.renderingContent && results.renderingContent.facetOrdering && results.renderingContent.facetOrdering.values && results.renderingContent.facetOrdering.values[attribute];
}
/**
 * Get a the list of values for a given facet attribute. Those values are sorted
 * refinement first, descending count (bigger value on top), and name ascending
 * (alphabetical order). The sort formula can overridden using either string based
 * predicates or a function.
 *
 * This method will return all the values returned by the Algolia engine plus all
 * the values already refined. This means that it can happen that the
 * `maxValuesPerFacet` [configuration](https://www.algolia.com/doc/rest-api/search#param-maxValuesPerFacet)
 * might not be respected if you have facet values that are already refined.
 * @param {string} attribute attribute name
 * @param {object} opts configuration options.
 * @param {boolean} [opts.facetOrdering]
 * Force the use of facetOrdering from the result if a sortBy is present. If
 * sortBy isn't present, facetOrdering will be used automatically.
 * @param {Array.<string> | function} opts.sortBy
 * When using strings, it consists of
 * the name of the [FacetValue](#SearchResults.FacetValue) or the
 * [HierarchicalFacet](#SearchResults.HierarchicalFacet) attributes with the
 * order (`asc` or `desc`). For example to order the value by count, the
 * argument would be `['count:asc']`.
 *
 * If only the attribute name is specified, the ordering defaults to the one
 * specified in the default value for this attribute.
 *
 * When not specified, the order is
 * ascending.  This parameter can also be a function which takes two facet
 * values and should return a number, 0 if equal, 1 if the first argument is
 * bigger or -1 otherwise.
 *
 * The default value for this attribute `['isRefined:desc', 'count:desc', 'name:asc']`
 * @return {FacetValue[]|HierarchicalFacet|undefined} depending on the type of facet of
 * the attribute requested (hierarchical, disjunctive or conjunctive)
 * @example
 * helper.on('result', function(event){
 *   //get values ordered only by name ascending using the string predicate
 *   event.results.getFacetValues('city', {sortBy: ['name:asc']});
 *   //get values  ordered only by count ascending using a function
 *   event.results.getFacetValues('city', {
 *     // this is equivalent to ['count:asc']
 *     sortBy: function(a, b) {
 *       if (a.count === b.count) return 0;
 *       if (a.count > b.count)   return 1;
 *       if (b.count > a.count)   return -1;
 *     }
 *   });
 * });
 */ SearchResults.prototype.getFacetValues = function(attribute, opts) {
    var facetValues = extractNormalizedFacetValues(this, attribute);
    if (!facetValues) return undefined;
    var options = defaultsPure({}, opts, {
        sortBy: SearchResults.DEFAULT_SORT,
        // if no sortBy is given, attempt to sort based on facetOrdering
        // if it is given, we still allow to sort via facet ordering first
        facetOrdering: !(opts && opts.sortBy)
    });
    var results = this;
    var attributes;
    if (Array.isArray(facetValues)) attributes = [
        attribute
    ];
    else {
        var config = results._state.getHierarchicalFacetByName(facetValues.name);
        attributes = config.attributes;
    }
    return recSort(function(data, facetName) {
        if (options.facetOrdering) {
            var facetOrdering = getFacetOrdering(results, facetName);
            if (Boolean(facetOrdering)) return sortViaFacetOrdering(data, facetOrdering);
        }
        if (Array.isArray(options.sortBy)) {
            var order = formatSort(options.sortBy, SearchResults.DEFAULT_SORT);
            return orderBy(data, order[0], order[1]);
        } else if (typeof options.sortBy === "function") return vanillaSortFn(options.sortBy, data);
        throw new Error("options.sortBy is optional but if defined it must be either an array of string (predicates) or a sorting function");
    }, facetValues, attributes);
};
/**
 * Returns the facet stats if attribute is defined and the facet contains some.
 * Otherwise returns undefined.
 * @param {string} attribute name of the faceted attribute
 * @return {object} The stats of the facet
 */ SearchResults.prototype.getFacetStats = function(attribute) {
    if (this._state.isConjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.facets, attribute);
    else if (this._state.isDisjunctiveFacet(attribute)) return getFacetStatsIfAvailable(this.disjunctiveFacets, attribute);
    return undefined;
};
/**
 * @typedef {Object} FacetListItem
 * @property {string} name
 */ /**
 * @param {FacetListItem[]} facetList (has more items, but enough for here)
 * @param {string} facetName
 */ function getFacetStatsIfAvailable(facetList, facetName) {
    var data = find(facetList, function(facet) {
        return facet.name === facetName;
    });
    return data && data.stats;
}
/**
 * Returns all refinements for all filters + tags. It also provides
 * additional information: count and exhaustiveness for each filter.
 *
 * See the [refinement type](#Refinement) for an exhaustive view of the available
 * data.
 *
 * Note that for a numeric refinement, results are grouped per operator, this
 * means that it will return responses for operators which are empty.
 *
 * @return {Array.<Refinement>} all the refinements
 */ SearchResults.prototype.getRefinements = function() {
    var state = this._state;
    var results = this;
    var res = [];
    Object.keys(state.facetsRefinements).forEach(function(attributeName) {
        state.facetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "facet", attributeName, name, results.facets));
        });
    });
    Object.keys(state.facetsExcludes).forEach(function(attributeName) {
        state.facetsExcludes[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "exclude", attributeName, name, results.facets));
        });
    });
    Object.keys(state.disjunctiveFacetsRefinements).forEach(function(attributeName) {
        state.disjunctiveFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getRefinement(state, "disjunctive", attributeName, name, results.disjunctiveFacets));
        });
    });
    Object.keys(state.hierarchicalFacetsRefinements).forEach(function(attributeName) {
        state.hierarchicalFacetsRefinements[attributeName].forEach(function(name) {
            res.push(getHierarchicalRefinement(state, attributeName, name, results.hierarchicalFacets));
        });
    });
    Object.keys(state.numericRefinements).forEach(function(attributeName) {
        var operators = state.numericRefinements[attributeName];
        Object.keys(operators).forEach(function(operator) {
            operators[operator].forEach(function(value) {
                res.push({
                    type: "numeric",
                    attributeName: attributeName,
                    name: value,
                    numericValue: value,
                    operator: operator
                });
            });
        });
    });
    state.tagRefinements.forEach(function(name) {
        res.push({
            type: "tag",
            attributeName: "_tags",
            name: name
        });
    });
    return res;
};
/**
 * @typedef {Object} Facet
 * @property {string} name
 * @property {Object} data
 * @property {boolean} exhaustive
 */ /**
 * @param {*} state
 * @param {*} type
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */ function getRefinement(state, type, attributeName, name, resultsFacets) {
    var facet = find(resultsFacets, function(f) {
        return f.name === attributeName;
    });
    var count = facet && facet.data && facet.data[name] ? facet.data[name] : 0;
    var exhaustive = facet && facet.exhaustive || false;
    return {
        type: type,
        attributeName: attributeName,
        name: name,
        count: count,
        exhaustive: exhaustive
    };
}
/**
 * @param {*} state
 * @param {string} attributeName
 * @param {*} name
 * @param {Facet[]} resultsFacets
 */ function getHierarchicalRefinement(state, attributeName, name, resultsFacets) {
    var facetDeclaration = state.getHierarchicalFacetByName(attributeName);
    var separator = state._getHierarchicalFacetSeparator(facetDeclaration);
    var split = name.split(separator);
    var rootFacet = find(resultsFacets, function(facet) {
        return facet.name === attributeName;
    });
    var facet2 = split.reduce(function(intermediateFacet, part) {
        var newFacet = intermediateFacet && find(intermediateFacet.data, function(f) {
            return f.name === part;
        });
        return newFacet !== undefined ? newFacet : intermediateFacet;
    }, rootFacet);
    var count = facet2 && facet2.count || 0;
    var exhaustive = facet2 && facet2.exhaustive || false;
    var path = facet2 && facet2.path || "";
    return {
        type: "hierarchical",
        attributeName: attributeName,
        name: path,
        count: count,
        exhaustive: exhaustive
    };
}
module.exports = SearchResults;

},{"../functions/merge":"eGyc5","../functions/defaultsPure":"2BeUG","../functions/orderBy":"kd35s","../functions/compact":"dFh0T","../functions/find":"hBcv7","../functions/findIndex":"fzLII","../functions/formatSort":"g3eEb","../functions/escapeFacetValue":"3r1Qc","./generate-hierarchical-tree":"9tLzD"}],"kd35s":[function(require,module,exports) {
"use strict";
function compareAscending(value, other) {
    if (value !== other) {
        var valIsDefined = value !== undefined;
        var valIsNull = value === null;
        var othIsDefined = other !== undefined;
        var othIsNull = other === null;
        if (!othIsNull && value > other || valIsNull && othIsDefined || !valIsDefined) return 1;
        if (!valIsNull && value < other || othIsNull && valIsDefined || !othIsDefined) return -1;
    }
    return 0;
}
/**
 * @param {Array<object>} collection object with keys in attributes
 * @param {Array<string>} iteratees attributes
 * @param {Array<string>} orders asc | desc
 */ function orderBy(collection, iteratees, orders) {
    if (!Array.isArray(collection)) return [];
    if (!Array.isArray(orders)) orders = [];
    var result = collection.map(function(value, index) {
        return {
            criteria: iteratees.map(function(iteratee) {
                return value[iteratee];
            }),
            index: index,
            value: value
        };
    });
    result.sort(function comparer(object, other) {
        var index = -1;
        while(++index < object.criteria.length){
            var res = compareAscending(object.criteria[index], other.criteria[index]);
            if (res) {
                if (index >= orders.length) return res;
                if (orders[index] === "desc") return -res;
                return res;
            }
        }
        // This ensures a stable sort in V8 and other engines.
        // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
        return object.index - other.index;
    });
    return result.map(function(res) {
        return res.value;
    });
}
module.exports = orderBy;

},{}],"dFh0T":[function(require,module,exports) {
"use strict";
module.exports = function compact(array) {
    if (!Array.isArray(array)) return [];
    return array.filter(Boolean);
};

},{}],"fzLII":[function(require,module,exports) {
"use strict";
// @MAJOR can be replaced by native Array#findIndex when we change support
module.exports = function find(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
};

},{}],"g3eEb":[function(require,module,exports) {
"use strict";
var find = require("./find");
/**
 * Transform sort format from user friendly notation to lodash format
 * @param {string[]} sortBy array of predicate of the form "attribute:order"
 * @param {string[]} [defaults] array of predicate of the form "attribute:order"
 * @return {array.<string[]>} array containing 2 elements : attributes, orders
 */ module.exports = function formatSort(sortBy, defaults) {
    var defaultInstructions = (defaults || []).map(function(sort) {
        return sort.split(":");
    });
    return sortBy.reduce(function preparePredicate(out, sort) {
        var sortInstruction = sort.split(":");
        var matchingDefault = find(defaultInstructions, function(defaultInstruction) {
            return defaultInstruction[0] === sortInstruction[0];
        });
        if (sortInstruction.length > 1 || !matchingDefault) {
            out[0].push(sortInstruction[0]);
            out[1].push(sortInstruction[1]);
            return out;
        }
        out[0].push(matchingDefault[0]);
        out[1].push(matchingDefault[1]);
        return out;
    }, [
        [],
        []
    ]);
};

},{"./find":"hBcv7"}],"3r1Qc":[function(require,module,exports) {
"use strict";
/**
 * Replaces a leading - with \-
 * @private
 * @param {any} value the facet value to replace
 * @returns any
 */ function escapeFacetValue(value) {
    if (typeof value !== "string") return value;
    return String(value).replace(/^-/, "\\-");
}
/**
 * Replaces a leading \- with -
 * @private
 * @param {any} value the escaped facet value
 * @returns any
 */ function unescapeFacetValue(value) {
    if (typeof value !== "string") return value;
    return value.replace(/^\\-/, "-");
}
module.exports = {
    escapeFacetValue: escapeFacetValue,
    unescapeFacetValue: unescapeFacetValue
};

},{}],"9tLzD":[function(require,module,exports) {
"use strict";
module.exports = generateTrees;
var orderBy = require("../functions/orderBy");
var find = require("../functions/find");
var prepareHierarchicalFacetSortBy = require("../functions/formatSort");
var fv = require("../functions/escapeFacetValue");
var escapeFacetValue = fv.escapeFacetValue;
var unescapeFacetValue = fv.unescapeFacetValue;
function generateTrees(state) {
    return function generate(hierarchicalFacetResult, hierarchicalFacetIndex) {
        var hierarchicalFacet = state.hierarchicalFacets[hierarchicalFacetIndex];
        var hierarchicalFacetRefinement = state.hierarchicalFacetsRefinements[hierarchicalFacet.name] && state.hierarchicalFacetsRefinements[hierarchicalFacet.name][0] || "";
        var hierarchicalSeparator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        var hierarchicalRootPath = state._getHierarchicalRootPath(hierarchicalFacet);
        var hierarchicalShowParentLevel = state._getHierarchicalShowParentLevel(hierarchicalFacet);
        var sortBy = prepareHierarchicalFacetSortBy(state._getHierarchicalFacetSortBy(hierarchicalFacet));
        var rootExhaustive = hierarchicalFacetResult.every(function(facetResult) {
            return facetResult.exhaustive;
        });
        var generateTreeFn = generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, hierarchicalFacetRefinement);
        var results = hierarchicalFacetResult;
        if (hierarchicalRootPath) results = hierarchicalFacetResult.slice(hierarchicalRootPath.split(hierarchicalSeparator).length);
        return results.reduce(generateTreeFn, {
            name: state.hierarchicalFacets[hierarchicalFacetIndex].name,
            count: null,
            isRefined: true,
            path: null,
            escapedValue: null,
            exhaustive: rootExhaustive,
            data: null
        });
    };
}
function generateHierarchicalTree(sortBy, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel, currentRefinement) {
    return function generateTree(hierarchicalTree, hierarchicalFacetResult, currentHierarchicalLevel) {
        var parent = hierarchicalTree;
        if (currentHierarchicalLevel > 0) {
            var level = 0;
            parent = hierarchicalTree;
            while(level < currentHierarchicalLevel){
                /**
         * @type {object[]]} hierarchical data
         */ var data = parent && Array.isArray(parent.data) ? parent.data : [];
                parent = find(data, function(subtree) {
                    return subtree.isRefined;
                });
                level++;
            }
        }
        // we found a refined parent, let's add current level data under it
        if (parent) {
            // filter values in case an object has multiple categories:
            //   {
            //     categories: {
            //       level0: ['beers', 'bières'],
            //       level1: ['beers > IPA', 'bières > Belges']
            //     }
            //   }
            //
            // If parent refinement is `beers`, then we do not want to have `bières > Belges`
            // showing up
            var picked = Object.keys(hierarchicalFacetResult.data).map(function(facetValue) {
                return [
                    facetValue,
                    hierarchicalFacetResult.data[facetValue]
                ];
            }).filter(function(tuple) {
                var facetValue = tuple[0];
                return onlyMatchingTree(facetValue, parent.path || hierarchicalRootPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel);
            });
            parent.data = orderBy(picked.map(function(tuple) {
                var facetValue = tuple[0];
                var facetCount = tuple[1];
                return format(facetCount, facetValue, hierarchicalSeparator, unescapeFacetValue(currentRefinement), hierarchicalFacetResult.exhaustive);
            }), sortBy[0], sortBy[1]);
        }
        return hierarchicalTree;
    };
}
function onlyMatchingTree(facetValue, parentPath, currentRefinement, hierarchicalSeparator, hierarchicalRootPath, hierarchicalShowParentLevel) {
    // we want the facetValue is a child of hierarchicalRootPath
    if (hierarchicalRootPath && (facetValue.indexOf(hierarchicalRootPath) !== 0 || hierarchicalRootPath === facetValue)) return false;
    // we always want root levels (only when there is no prefix path)
    return !hierarchicalRootPath && facetValue.indexOf(hierarchicalSeparator) === -1 || hierarchicalRootPath && facetValue.split(hierarchicalSeparator).length - hierarchicalRootPath.split(hierarchicalSeparator).length === 1 || facetValue.indexOf(hierarchicalSeparator) === -1 && currentRefinement.indexOf(hierarchicalSeparator) === -1 || // currentRefinement is a child of the facet value
    currentRefinement.indexOf(facetValue) === 0 || facetValue.indexOf(parentPath + hierarchicalSeparator) === 0 && (hierarchicalShowParentLevel || facetValue.indexOf(currentRefinement) === 0);
}
function format(facetCount, facetValue, hierarchicalSeparator, currentRefinement, exhaustive) {
    var parts = facetValue.split(hierarchicalSeparator);
    return {
        name: parts[parts.length - 1].trim(),
        path: facetValue,
        escapedValue: escapeFacetValue(facetValue),
        count: facetCount,
        isRefined: currentRefinement === facetValue || currentRefinement.indexOf(facetValue + hierarchicalSeparator) === 0,
        exhaustive: exhaustive,
        data: null
    };
}

},{"../functions/orderBy":"kd35s","../functions/find":"hBcv7","../functions/formatSort":"g3eEb","../functions/escapeFacetValue":"3r1Qc"}],"6UDS7":[function(require,module,exports) {
"use strict";
var EventEmitter = require("@algolia/events");
var inherits = require("../functions/inherits");
/**
 * A DerivedHelper is a way to create sub requests to
 * Algolia from a main helper.
 * @class
 * @classdesc The DerivedHelper provides an event based interface for search callbacks:
 *  - search: when a search is triggered using the `search()` method.
 *  - result: when the response is retrieved from Algolia and is processed.
 *    This event contains a {@link SearchResults} object and the
 *    {@link SearchParameters} corresponding to this answer.
 */ function DerivedHelper(mainHelper, fn) {
    this.main = mainHelper;
    this.fn = fn;
    this.lastResults = null;
}
inherits(DerivedHelper, EventEmitter);
/**
 * Detach this helper from the main helper
 * @return {undefined}
 * @throws Error if the derived helper is already detached
 */ DerivedHelper.prototype.detach = function() {
    this.removeAllListeners();
    this.main.detachDerivedHelper(this);
};
DerivedHelper.prototype.getModifiedState = function(parameters) {
    return this.fn(parameters);
};
module.exports = DerivedHelper;

},{"@algolia/events":"euNDO","../functions/inherits":"a0E30"}],"euNDO":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;
// Backwards-compat with node 0.10.x
// EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
    this._maxListeners = n;
    return this;
};
EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {};
    // If there is no 'error' event listener then throw.
    if (type === "error") {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) throw er; // Unhandled 'error' event
            else {
                // At least give some kind of context to the user
                var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
                err.context = er;
                throw err;
            }
        }
    }
    handler = this._events[type];
    if (isUndefined(handler)) return false;
    if (isFunction(handler)) switch(arguments.length){
        // fast cases
        case 1:
            handler.call(this);
            break;
        case 2:
            handler.call(this, arguments[1]);
            break;
        case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
        // slower
        default:
            args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
    }
    else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for(i = 0; i < len; i++)listeners[i].apply(this, args);
    }
    return true;
};
EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events) this._events = {};
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
    else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);
    else // Adding the second element, need to change to array.
    this._events[type] = [
        this._events[type],
        listener
    ];
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) m = this._maxListeners;
        else m = EventEmitter.defaultMaxListeners;
        if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
            if (typeof console.trace === "function") // not supported in IE 10
            console.trace();
        }
    }
    return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    var fired = false;
    function g() {
        this.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
};
// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    } else if (isObject(list)) {
        for(i = length; i-- > 0;)if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
        }
        if (position < 0) return this;
        if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
        } else list.splice(position, 1);
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    }
    return this;
};
EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;
    if (!this._events) return this;
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
        if (arguments.length === 0) this._events = {};
        else if (this._events[type]) delete this._events[type];
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        for(key in this._events){
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = {};
        return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) this.removeListener(type, listeners);
    else if (listeners) // LIFO order
    while(listeners.length)this.removeListener(type, listeners[listeners.length - 1]);
    delete this._events[type];
    return this;
};
EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];
    else if (isFunction(this._events[type])) ret = [
        this._events[type]
    ];
    else ret = this._events[type].slice();
    return ret;
};
EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) return 1;
        else if (evlistener) return evlistener.length;
    }
    return 0;
};
EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
};
function isFunction(arg) {
    return typeof arg === "function";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isUndefined(arg) {
    return arg === void 0;
}

},{}],"a0E30":[function(require,module,exports) {
"use strict";
function inherits(ctor, superCtor) {
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}
module.exports = inherits;

},{}],"6rfof":[function(require,module,exports) {
"use strict";
var merge = require("./functions/merge");
function sortObject(obj) {
    return Object.keys(obj).sort(function(a, b) {
        return a.localeCompare(b);
    }).reduce(function(acc, curr) {
        acc[curr] = obj[curr];
        return acc;
    }, {});
}
var requestBuilder = {
    /**
   * Get all the queries to send to the client, those queries can used directly
   * with the Algolia client.
   * @private
   * @return {object[]} The queries
   */ _getQueries: function getQueries(index, state) {
        var queries = [];
        // One query for the hits
        queries.push({
            indexName: index,
            params: requestBuilder._getHitsSearchParams(state)
        });
        // One for each disjunctive facets
        state.getRefinedDisjunctiveFacets().forEach(function(refinedFacet) {
            queries.push({
                indexName: index,
                params: requestBuilder._getDisjunctiveFacetSearchParams(state, refinedFacet)
            });
        });
        // More to get the parent levels of the hierarchical facets when refined
        state.getRefinedHierarchicalFacets().forEach(function(refinedFacet) {
            var hierarchicalFacet = state.getHierarchicalFacetByName(refinedFacet);
            var currentRefinement = state.getHierarchicalRefinement(refinedFacet);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            // If we are deeper than level 0 (starting from `beer > IPA`)
            // we want to get all parent values
            if (currentRefinement.length > 0 && currentRefinement[0].split(separator).length > 1) {
                // We generate a map of the filters we will use for our facet values queries
                var filtersMap = currentRefinement[0].split(separator).slice(0, -1).reduce(function createFiltersMap(map, segment, level) {
                    return map.concat({
                        attribute: hierarchicalFacet.attributes[level],
                        value: level === 0 ? segment : [
                            map[map.length - 1].value,
                            segment
                        ].join(separator)
                    });
                }, []);
                filtersMap.forEach(function(filter, level) {
                    var params = requestBuilder._getDisjunctiveFacetSearchParams(state, filter.attribute, level === 0);
                    var parent = filtersMap[level - 1];
                    params.facetFilters = level > 0 ? [
                        parent.attribute + ":" + parent.value
                    ] : undefined;
                    queries.push({
                        indexName: index,
                        params: params
                    });
                });
            }
        });
        return queries;
    },
    /**
   * Build search parameters used to fetch hits
   * @private
   * @return {object.<string, any>}
   */ _getHitsSearchParams: function(state) {
        var facets = state.facets.concat(state.disjunctiveFacets).concat(requestBuilder._getHitsHierarchicalFacetsAttributes(state));
        var facetFilters = requestBuilder._getFacetFilters(state);
        var numericFilters = requestBuilder._getNumericFilters(state);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            facets: facets.indexOf("*") > -1 ? [
                "*"
            ] : facets,
            tagFilters: tagFilters
        };
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        return sortObject(merge({}, state.getQueryParams(), additionalParams));
    },
    /**
   * Build search parameters used to fetch a disjunctive facet
   * @private
   * @param  {string} facet the associated facet name
   * @param  {boolean} hierarchicalRootLevel ?? FIXME
   * @return {object}
   */ _getDisjunctiveFacetSearchParams: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = requestBuilder._getFacetFilters(state, facet, hierarchicalRootLevel);
        var numericFilters = requestBuilder._getNumericFilters(state, facet);
        var tagFilters = requestBuilder._getTagFilters(state);
        var additionalParams = {
            hitsPerPage: 0,
            page: 0,
            analytics: false,
            clickAnalytics: false
        };
        if (tagFilters.length > 0) additionalParams.tagFilters = tagFilters;
        var hierarchicalFacet = state.getHierarchicalFacetByName(facet);
        if (hierarchicalFacet) additionalParams.facets = requestBuilder._getDisjunctiveHierarchicalFacetAttribute(state, hierarchicalFacet, hierarchicalRootLevel);
        else additionalParams.facets = facet;
        if (numericFilters.length > 0) additionalParams.numericFilters = numericFilters;
        if (facetFilters.length > 0) additionalParams.facetFilters = facetFilters;
        return sortObject(merge({}, state.getQueryParams(), additionalParams));
    },
    /**
   * Return the numeric filters in an algolia request fashion
   * @private
   * @param {string} [facetName] the name of the attribute for which the filters should be excluded
   * @return {string[]} the numeric filters in the algolia format
   */ _getNumericFilters: function(state, facetName) {
        if (state.numericFilters) return state.numericFilters;
        var numericFilters = [];
        Object.keys(state.numericRefinements).forEach(function(attribute) {
            var operators = state.numericRefinements[attribute] || {};
            Object.keys(operators).forEach(function(operator) {
                var values = operators[operator] || [];
                if (facetName !== attribute) values.forEach(function(value) {
                    if (Array.isArray(value)) {
                        var vs = value.map(function(v) {
                            return attribute + operator + v;
                        });
                        numericFilters.push(vs);
                    } else numericFilters.push(attribute + operator + value);
                });
            });
        });
        return numericFilters;
    },
    /**
   * Return the tags filters depending
   * @private
   * @return {string}
   */ _getTagFilters: function(state) {
        if (state.tagFilters) return state.tagFilters;
        return state.tagRefinements.join(",");
    },
    /**
   * Build facetFilters parameter based on current refinements. The array returned
   * contains strings representing the facet filters in the algolia format.
   * @private
   * @param  {string} [facet] if set, the current disjunctive facet
   * @return {array.<string>}
   */ _getFacetFilters: function(state, facet, hierarchicalRootLevel) {
        var facetFilters = [];
        var facetsRefinements = state.facetsRefinements || {};
        Object.keys(facetsRefinements).forEach(function(facetName) {
            var facetValues = facetsRefinements[facetName] || [];
            facetValues.forEach(function(facetValue) {
                facetFilters.push(facetName + ":" + facetValue);
            });
        });
        var facetsExcludes = state.facetsExcludes || {};
        Object.keys(facetsExcludes).forEach(function(facetName) {
            var facetValues = facetsExcludes[facetName] || [];
            facetValues.forEach(function(facetValue) {
                facetFilters.push(facetName + ":-" + facetValue);
            });
        });
        var disjunctiveFacetsRefinements = state.disjunctiveFacetsRefinements || {};
        Object.keys(disjunctiveFacetsRefinements).forEach(function(facetName) {
            var facetValues = disjunctiveFacetsRefinements[facetName] || [];
            if (facetName === facet || !facetValues || facetValues.length === 0) return;
            var orFilters = [];
            facetValues.forEach(function(facetValue) {
                orFilters.push(facetName + ":" + facetValue);
            });
            facetFilters.push(orFilters);
        });
        var hierarchicalFacetsRefinements = state.hierarchicalFacetsRefinements || {};
        Object.keys(hierarchicalFacetsRefinements).forEach(function(facetName) {
            var facetValues = hierarchicalFacetsRefinements[facetName] || [];
            var facetValue = facetValues[0];
            if (facetValue === undefined) return;
            var hierarchicalFacet = state.getHierarchicalFacetByName(facetName);
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeToRefine;
            var attributesIndex;
            // we ask for parent facet values only when the `facet` is the current hierarchical facet
            if (facet === facetName) {
                // if we are at the root level already, no need to ask for facet values, we get them from
                // the hits query
                if (facetValue.indexOf(separator) === -1 || !rootPath && hierarchicalRootLevel === true || rootPath && rootPath.split(separator).length === facetValue.split(separator).length) return;
                if (!rootPath) {
                    attributesIndex = facetValue.split(separator).length - 2;
                    facetValue = facetValue.slice(0, facetValue.lastIndexOf(separator));
                } else {
                    attributesIndex = rootPath.split(separator).length - 1;
                    facetValue = rootPath;
                }
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            } else {
                attributesIndex = facetValue.split(separator).length - 1;
                attributeToRefine = hierarchicalFacet.attributes[attributesIndex];
            }
            if (attributeToRefine) facetFilters.push([
                attributeToRefine + ":" + facetValue
            ]);
        });
        return facetFilters;
    },
    _getHitsHierarchicalFacetsAttributes: function(state) {
        var out = [];
        return state.hierarchicalFacets.reduce(// ask for as much levels as there's hierarchical refinements
        function getHitsAttributesForHierarchicalFacet(allAttributes, hierarchicalFacet) {
            var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0];
            // if no refinement, ask for root level
            if (!hierarchicalRefinement) {
                allAttributes.push(hierarchicalFacet.attributes[0]);
                return allAttributes;
            }
            var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
            var level = hierarchicalRefinement.split(separator).length;
            var newAttributes = hierarchicalFacet.attributes.slice(0, level + 1);
            return allAttributes.concat(newAttributes);
        }, out);
    },
    _getDisjunctiveHierarchicalFacetAttribute: function(state, hierarchicalFacet, rootLevel) {
        var separator = state._getHierarchicalFacetSeparator(hierarchicalFacet);
        if (rootLevel === true) {
            var rootPath = state._getHierarchicalRootPath(hierarchicalFacet);
            var attributeIndex = 0;
            if (rootPath) attributeIndex = rootPath.split(separator).length;
            return [
                hierarchicalFacet.attributes[attributeIndex]
            ];
        }
        var hierarchicalRefinement = state.getHierarchicalRefinement(hierarchicalFacet.name)[0] || "";
        // if refinement is 'beers > IPA > Flying dog',
        // then we want `facets: ['beers > IPA']` as disjunctive facet (parent level values)
        var parentLevel = hierarchicalRefinement.split(separator).length - 1;
        return hierarchicalFacet.attributes.slice(0, parentLevel + 1);
    },
    getSearchForFacetQuery: function(facetName, query, maxFacetHits, state) {
        var stateForSearchForFacetValues = state.isDisjunctiveFacet(facetName) ? state.clearRefinements(facetName) : state;
        var searchForFacetSearchParameters = {
            facetQuery: query,
            facetName: facetName
        };
        if (typeof maxFacetHits === "number") searchForFacetSearchParameters.maxFacetHits = maxFacetHits;
        return sortObject(merge({}, requestBuilder._getHitsSearchParams(stateForSearchForFacetValues), searchForFacetSearchParameters));
    }
};
module.exports = requestBuilder;

},{"./functions/merge":"eGyc5"}],"cs17k":[function(require,module,exports) {
"use strict";
module.exports = "3.10.0";

},{}],"kdZTz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isIndexWidget", ()=>isIndexWidget);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _utils = require("../../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: "index-widget"
});
function isIndexWidget(widget) {
    return widget.$$type === "ais.index";
}
/**
 * This is the same content as helper._change / setState, but allowing for extra
 * UiState to be synchronized.
 * see: https://github.com/algolia/algoliasearch-helper-js/blob/6b835ffd07742f2d6b314022cce6848f5cfecd4a/src/algoliasearch.helper.js#L1311-L1324
 */ function privateHelperSetState(helper, _ref) {
    var state = _ref.state, isPageReset = _ref.isPageReset, _uiState = _ref._uiState;
    if (state !== helper.state) {
        helper.state = state;
        helper.emit("change", {
            state: helper.state,
            results: helper.lastResults,
            isPageReset: isPageReset,
            _uiState: _uiState
        });
    }
}
function getLocalWidgetsState(widgets, widgetStateOptions) {
    var initialUiState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return widgets.filter(function(widget) {
        return !isIndexWidget(widget);
    }).reduce(function(uiState, widget) {
        if (!widget.getWidgetUiState && !widget.getWidgetState) return uiState;
        if (widget.getWidgetUiState) return widget.getWidgetUiState(uiState, widgetStateOptions);
        return widget.getWidgetState(uiState, widgetStateOptions);
    }, initialUiState);
}
function getLocalWidgetsSearchParameters(widgets, widgetSearchParametersOptions) {
    var initialSearchParameters = widgetSearchParametersOptions.initialSearchParameters, rest = _objectWithoutProperties(widgetSearchParametersOptions, [
        "initialSearchParameters"
    ]);
    return widgets.filter(function(widget) {
        return !isIndexWidget(widget);
    }).reduce(function(state, widget) {
        if (!widget.getWidgetSearchParameters) return state;
        return widget.getWidgetSearchParameters(state, rest);
    }, initialSearchParameters);
}
function resetPageFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    if (indexWidgets.length === 0) return;
    indexWidgets.forEach(function(widget) {
        var widgetHelper = widget.getHelper();
        privateHelperSetState(widgetHelper, {
            // @ts-ignore @TODO: remove "ts-ignore" once `resetPage()` is typed in the helper
            state: widgetHelper.state.resetPage(),
            isPageReset: true
        });
        resetPageFromWidgets(widget.getWidgets());
    });
}
function resolveScopedResultsFromWidgets(widgets) {
    var indexWidgets = widgets.filter(isIndexWidget);
    return indexWidgets.reduce(function(scopedResults, current) {
        return scopedResults.concat.apply(scopedResults, [
            {
                indexId: current.getIndexId(),
                results: current.getResults(),
                helper: current.getHelper()
            }
        ].concat(_toConsumableArray(resolveScopedResultsFromWidgets(current.getWidgets()))));
    }, []);
}
function resolveScopedResultsFromIndex(widget) {
    var widgetParent = widget.getParent(); // If the widget is the root, we consider itself as the only sibling.
    var widgetSiblings = widgetParent ? widgetParent.getWidgets() : [
        widget
    ];
    return resolveScopedResultsFromWidgets(widgetSiblings);
}
var index = function index(props) {
    if (props === undefined || props.indexName === undefined) throw new Error(withUsage("The `indexName` option is required."));
    var indexName = props.indexName, _props$indexId = props.indexId, indexId = _props$indexId === void 0 ? indexName : _props$indexId;
    var localWidgets = [];
    var localUiState = {};
    var localInstantSearchInstance = null;
    var localParent = null;
    var helper = null;
    var derivedHelper = null;
    var createURL = function createURL(nextState) {
        return localInstantSearchInstance._createURL(_defineProperty({}, indexId, getLocalWidgetsState(localWidgets, {
            searchParameters: nextState,
            helper: helper
        })));
    };
    return {
        $$type: "ais.index",
        getIndexName: function getIndexName() {
            return indexName;
        },
        getIndexId: function getIndexId() {
            return indexId;
        },
        getHelper: function getHelper() {
            return helper;
        },
        getResults: function getResults() {
            return derivedHelper && derivedHelper.lastResults;
        },
        getParent: function getParent() {
            return localParent;
        },
        getWidgets: function getWidgets() {
            return localWidgets;
        },
        addWidgets: function addWidgets(widgets) {
            var _this = this;
            if (!Array.isArray(widgets)) throw new Error(withUsage("The `addWidgets` method expects an array of widgets."));
            if (widgets.some(function(widget) {
                return typeof widget.init !== "function" && typeof widget.render !== "function";
            })) throw new Error(withUsage("The widget definition expects a `render` and/or an `init` method."));
            localWidgets = localWidgets.concat(widgets);
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                privateHelperSetState(helper, {
                    state: getLocalWidgetsSearchParameters(localWidgets, {
                        uiState: localUiState,
                        initialSearchParameters: helper.state
                    }),
                    _uiState: localUiState
                }); // We compute the render state before calling `init` in a separate loop
                // to construct the whole render state object that is then passed to
                // `init`.
                widgets.forEach(function(widget) {
                    if (widget.getRenderState) {
                        var renderState = widget.getRenderState(localInstantSearchInstance.renderState[_this.getIndexId()] || {}, {
                            uiState: localInstantSearchInstance._initialUiState,
                            helper: _this.getHelper(),
                            parent: _this,
                            instantSearchInstance: localInstantSearchInstance,
                            state: helper.state,
                            renderState: localInstantSearchInstance.renderState,
                            templatesConfig: localInstantSearchInstance.templatesConfig,
                            createURL: createURL,
                            scopedResults: [],
                            searchMetadata: {
                                isSearchStalled: localInstantSearchInstance._isSearchStalled
                            }
                        });
                        storeRenderState({
                            renderState: renderState,
                            instantSearchInstance: localInstantSearchInstance,
                            parent: _this
                        });
                    }
                });
                widgets.forEach(function(widget) {
                    if (widget.init) widget.init({
                        helper: helper,
                        parent: _this,
                        uiState: localInstantSearchInstance._initialUiState,
                        instantSearchInstance: localInstantSearchInstance,
                        state: helper.state,
                        renderState: localInstantSearchInstance.renderState,
                        templatesConfig: localInstantSearchInstance.templatesConfig,
                        createURL: createURL,
                        scopedResults: [],
                        searchMetadata: {
                            isSearchStalled: localInstantSearchInstance._isSearchStalled
                        }
                    });
                });
                localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        removeWidgets: function removeWidgets(widgets) {
            if (!Array.isArray(widgets)) throw new Error(withUsage("The `removeWidgets` method expects an array of widgets."));
            if (widgets.some(function(widget) {
                return typeof widget.dispose !== "function";
            })) throw new Error(withUsage("The widget definition expects a `dispose` method."));
            localWidgets = localWidgets.filter(function(widget) {
                return widgets.indexOf(widget) === -1;
            });
            if (localInstantSearchInstance && Boolean(widgets.length)) {
                var nextState = widgets.reduce(function(state, widget) {
                    // the `dispose` method exists at this point we already assert it
                    var next = widget.dispose({
                        helper: helper,
                        state: state
                    });
                    return next || state;
                }, helper.state);
                localUiState = getLocalWidgetsState(localWidgets, {
                    searchParameters: nextState,
                    helper: helper
                });
                helper.setState(getLocalWidgetsSearchParameters(localWidgets, {
                    uiState: localUiState,
                    initialSearchParameters: nextState
                }));
                if (localWidgets.length) localInstantSearchInstance.scheduleSearch();
            }
            return this;
        },
        init: function init(_ref2) {
            var _this2 = this;
            var instantSearchInstance = _ref2.instantSearchInstance, parent = _ref2.parent, uiState = _ref2.uiState;
            localInstantSearchInstance = instantSearchInstance;
            localParent = parent;
            localUiState = uiState[indexId] || {}; // The `mainHelper` is already defined at this point. The instance is created
            // inside InstantSearch at the `start` method, which occurs before the `init`
            // step.
            var mainHelper = instantSearchInstance.mainHelper;
            var parameters = getLocalWidgetsSearchParameters(localWidgets, {
                uiState: localUiState,
                initialSearchParameters: new (0, _algoliasearchHelperDefault.default).SearchParameters({
                    index: indexName
                })
            }); // This Helper is only used for state management we do not care about the
            // `searchClient`. Only the "main" Helper created at the `InstantSearch`
            // level is aware of the client.
            helper = (0, _algoliasearchHelperDefault.default)({}, parameters.index, parameters); // We forward the call to `search` to the "main" instance of the Helper
            // which is responsible for managing the queries (it's the only one that is
            // aware of the `searchClient`).
            helper.search = function() {
                if (instantSearchInstance.onStateChange) {
                    instantSearchInstance.onStateChange({
                        uiState: instantSearchInstance.mainIndex.getWidgetUiState({}),
                        setUiState: instantSearchInstance.setUiState.bind(instantSearchInstance)
                    }); // We don't trigger a search when controlled because it becomes the
                    // responsibility of `setUiState`.
                    return mainHelper;
                }
                return mainHelper.search();
            };
            helper.searchWithoutTriggeringOnStateChange = function() {
                return mainHelper.search();
            }; // We use the same pattern for the `searchForFacetValues`.
            helper.searchForFacetValues = function(facetName, facetValue, maxFacetHits, userState) {
                var state = helper.state.setQueryParameters(userState);
                return mainHelper.searchForFacetValues(facetName, facetValue, maxFacetHits, state);
            };
            derivedHelper = mainHelper.derive(function() {
                return (0, _utils.mergeSearchParameters).apply(void 0, _toConsumableArray((0, _utils.resolveSearchParameters)(_this2)));
            }); // Subscribe to the Helper state changes for the page before widgets
            // are initialized. This behavior mimics the original one of the Helper.
            // It makes sense to replicate it at the `init` step. We have another
            // listener on `change` below, once `init` is done.
            helper.on("change", function(_ref3) {
                var isPageReset = _ref3.isPageReset;
                if (isPageReset) resetPageFromWidgets(localWidgets);
            });
            derivedHelper.on("search", function() {
                // The index does not manage the "staleness" of the search. This is the
                // responsibility of the main instance. It does not make sense to manage
                // it at the index level because it's either: all of them or none of them
                // that are stalled. The queries are performed into a single network request.
                instantSearchInstance.scheduleStalledRender();
                (0, _utils.checkIndexUiState)({
                    index: _this2,
                    indexUiState: localUiState
                });
            });
            derivedHelper.on("result", function(_ref4) {
                var results = _ref4.results;
                // The index does not render the results it schedules a new render
                // to let all the other indices emit their own results. It allows us to
                // run the render process in one pass.
                instantSearchInstance.scheduleRender(); // the derived helper is the one which actually searches, but the helper
                // which is exposed e.g. via instance.helper, doesn't search, and thus
                // does not have access to lastResults, which it used to in pre-federated
                // search behavior.
                helper.lastResults = results;
            }); // We compute the render state before calling `render` in a separate loop
            // to construct the whole render state object that is then passed to
            // `render`.
            localWidgets.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this2.getIndexId()] || {}, {
                        uiState: uiState,
                        helper: helper,
                        parent: _this2,
                        instantSearchInstance: instantSearchInstance,
                        state: helper.state,
                        renderState: instantSearchInstance.renderState,
                        templatesConfig: instantSearchInstance.templatesConfig,
                        createURL: createURL,
                        scopedResults: [],
                        searchMetadata: {
                            isSearchStalled: instantSearchInstance._isSearchStalled
                        }
                    });
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this2
                    });
                }
            });
            localWidgets.forEach(function(widget) {
                (0, _utils.warning)(!widget.getWidgetState, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.");
                if (widget.init) widget.init({
                    uiState: uiState,
                    helper: helper,
                    parent: _this2,
                    instantSearchInstance: instantSearchInstance,
                    state: helper.state,
                    renderState: instantSearchInstance.renderState,
                    templatesConfig: instantSearchInstance.templatesConfig,
                    createURL: createURL,
                    scopedResults: [],
                    searchMetadata: {
                        isSearchStalled: instantSearchInstance._isSearchStalled
                    }
                });
            }); // Subscribe to the Helper state changes for the `uiState` once widgets
            // are initialized. Until the first render, state changes are part of the
            // configuration step. This is mainly for backward compatibility with custom
            // widgets. When the subscription happens before the `init` step, the (static)
            // configuration of the widget is pushed in the URL. That's what we want to avoid.
            // https://github.com/algolia/instantsearch.js/pull/994/commits/4a672ae3fd78809e213de0368549ef12e9dc9454
            helper.on("change", function(event) {
                var state = event.state; // @ts-ignore _uiState comes from privateHelperSetState and thus isn't typed on the helper event
                var _uiState = event._uiState;
                localUiState = getLocalWidgetsState(localWidgets, {
                    searchParameters: state,
                    helper: helper
                }, _uiState || {}); // We don't trigger an internal change when controlled because it
                // becomes the responsibility of `setUiState`.
                if (!instantSearchInstance.onStateChange) instantSearchInstance.onInternalStateChange();
            });
        },
        render: function render(_ref5) {
            var _this3 = this;
            var instantSearchInstance = _ref5.instantSearchInstance;
            if (!this.getResults()) return;
            localWidgets.forEach(function(widget) {
                if (widget.getRenderState) {
                    var renderState = widget.getRenderState(instantSearchInstance.renderState[_this3.getIndexId()] || {}, {
                        helper: _this3.getHelper(),
                        parent: _this3,
                        instantSearchInstance: instantSearchInstance,
                        results: _this3.getResults(),
                        scopedResults: resolveScopedResultsFromIndex(_this3),
                        state: _this3.getResults()._state,
                        renderState: instantSearchInstance.renderState,
                        templatesConfig: instantSearchInstance.templatesConfig,
                        createURL: createURL,
                        searchMetadata: {
                            isSearchStalled: instantSearchInstance._isSearchStalled
                        }
                    });
                    storeRenderState({
                        renderState: renderState,
                        instantSearchInstance: instantSearchInstance,
                        parent: _this3
                    });
                }
            });
            localWidgets.forEach(function(widget) {
                // At this point, all the variables used below are set. Both `helper`
                // and `derivedHelper` have been created at the `init` step. The attribute
                // `lastResults` might be `null` though. It's possible that a stalled render
                // happens before the result e.g with a dynamically added index the request might
                // be delayed. The render is triggered for the complete tree but some parts do
                // not have results yet.
                if (widget.render) widget.render({
                    helper: helper,
                    parent: _this3,
                    instantSearchInstance: instantSearchInstance,
                    results: _this3.getResults(),
                    scopedResults: resolveScopedResultsFromIndex(_this3),
                    state: _this3.getResults()._state,
                    renderState: instantSearchInstance.renderState,
                    templatesConfig: instantSearchInstance.templatesConfig,
                    createURL: createURL,
                    searchMetadata: {
                        isSearchStalled: instantSearchInstance._isSearchStalled
                    }
                });
            });
        },
        dispose: function dispose() {
            localWidgets.forEach(function(widget) {
                if (widget.dispose) // The dispose function is always called once the instance is started
                // (it's an effect of `removeWidgets`). The index is initialized and
                // the Helper is available. We don't care about the return value of
                // `dispose` because the index is removed. We can't call `removeWidgets`
                // because we want to keep the widgets on the instance, to allow idempotent
                // operations on `add` & `remove`.
                widget.dispose({
                    helper: helper,
                    state: helper.state
                });
            });
            localInstantSearchInstance = null;
            localParent = null;
            helper.removeAllListeners();
            helper = null;
            derivedHelper.detach();
            derivedHelper = null;
        },
        getWidgetUiState: function getWidgetUiState(uiState) {
            return localWidgets.filter(isIndexWidget).reduce(function(previousUiState, innerIndex) {
                return innerIndex.getWidgetUiState(previousUiState);
            }, _objectSpread({}, uiState, _defineProperty({}, this.getIndexId(), localUiState)));
        },
        getWidgetState: function getWidgetState(uiState) {
            (0, _utils.warning)(false, "The `getWidgetState` method is renamed `getWidgetUiState` and will no longer exist under that name in InstantSearch.js 5.x. Please use `getWidgetUiState` instead.");
            return this.getWidgetUiState(uiState);
        },
        getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref6) {
            var uiState = _ref6.uiState;
            return getLocalWidgetsSearchParameters(localWidgets, {
                uiState: uiState,
                initialSearchParameters: searchParameters
            });
        },
        refreshUiState: function refreshUiState() {
            localUiState = getLocalWidgetsState(localWidgets, {
                searchParameters: this.getHelper().state,
                helper: this.getHelper()
            });
        }
    };
};
exports.default = index;
function storeRenderState(_ref7) {
    var renderState = _ref7.renderState, instantSearchInstance = _ref7.instantSearchInstance, parent = _ref7.parent;
    var parentIndexName = parent ? parent.getIndexId() : instantSearchInstance.mainIndex.getIndexId();
    instantSearchInstance.renderState = _objectSpread({}, instantSearchInstance.renderState, _defineProperty({}, parentIndexName, _objectSpread({}, instantSearchInstance.renderState[parentIndexName], {}, renderState)));
}

},{"algoliasearch-helper":"jGqjt","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"etVYs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "capitalize", ()=>(0, _capitalizeDefault.default));
parcelHelpers.export(exports, "defer", ()=>(0, _deferDefault.default));
parcelHelpers.export(exports, "isDomElement", ()=>(0, _isDomElementDefault.default));
parcelHelpers.export(exports, "getContainerNode", ()=>(0, _getContainerNodeDefault.default));
parcelHelpers.export(exports, "isSpecialClick", ()=>(0, _isSpecialClickDefault.default));
parcelHelpers.export(exports, "prepareTemplateProps", ()=>(0, _prepareTemplatePropsDefault.default));
parcelHelpers.export(exports, "renderTemplate", ()=>(0, _renderTemplateDefault.default));
parcelHelpers.export(exports, "getRefinements", ()=>(0, _getRefinementsDefault.default));
parcelHelpers.export(exports, "clearRefinements", ()=>(0, _clearRefinementsDefault.default));
parcelHelpers.export(exports, "escapeRefinement", ()=>(0, _escapeRefinementDefault.default));
parcelHelpers.export(exports, "unescapeRefinement", ()=>(0, _unescapeRefinementDefault.default));
parcelHelpers.export(exports, "checkRendering", ()=>(0, _checkRenderingDefault.default));
parcelHelpers.export(exports, "checkIndexUiState", ()=>(0, _checkIndexUiState.checkIndexUiState));
parcelHelpers.export(exports, "getPropertyByPath", ()=>(0, _getPropertyByPathDefault.default));
parcelHelpers.export(exports, "getObjectType", ()=>(0, _getObjectTypeDefault.default));
parcelHelpers.export(exports, "noop", ()=>(0, _noopDefault.default));
parcelHelpers.export(exports, "isFiniteNumber", ()=>(0, _isFiniteNumberDefault.default));
parcelHelpers.export(exports, "isPlainObject", ()=>(0, _isPlainObjectDefault.default));
parcelHelpers.export(exports, "uniq", ()=>(0, _uniqDefault.default));
parcelHelpers.export(exports, "range", ()=>(0, _rangeDefault.default));
parcelHelpers.export(exports, "isEqual", ()=>(0, _isEqualDefault.default));
parcelHelpers.export(exports, "escape", ()=>(0, _escapeDefault.default));
parcelHelpers.export(exports, "find", ()=>(0, _findDefault.default));
parcelHelpers.export(exports, "findIndex", ()=>(0, _findIndexDefault.default));
parcelHelpers.export(exports, "mergeSearchParameters", ()=>(0, _mergeSearchParametersDefault.default));
parcelHelpers.export(exports, "resolveSearchParameters", ()=>(0, _resolveSearchParametersDefault.default));
parcelHelpers.export(exports, "toArray", ()=>(0, _toArrayDefault.default));
parcelHelpers.export(exports, "warning", ()=>(0, _logger.warning));
parcelHelpers.export(exports, "deprecate", ()=>(0, _logger.deprecate));
parcelHelpers.export(exports, "createDocumentationLink", ()=>(0, _documentation.createDocumentationLink));
parcelHelpers.export(exports, "createDocumentationMessageGenerator", ()=>(0, _documentation.createDocumentationMessageGenerator));
parcelHelpers.export(exports, "aroundLatLngToPosition", ()=>(0, _geoSearch.aroundLatLngToPosition));
parcelHelpers.export(exports, "insideBoundingBoxToBoundingBox", ()=>(0, _geoSearch.insideBoundingBoxToBoundingBox));
parcelHelpers.export(exports, "addAbsolutePosition", ()=>(0, _hitsAbsolutePosition.addAbsolutePosition));
parcelHelpers.export(exports, "addQueryID", ()=>(0, _hitsQueryId.addQueryID));
parcelHelpers.export(exports, "isFacetRefined", ()=>(0, _isFacetRefinedDefault.default));
parcelHelpers.export(exports, "getAppIdAndApiKey", ()=>(0, _getAppIdAndApiKey.getAppIdAndApiKey));
parcelHelpers.export(exports, "convertNumericRefinementsToFilters", ()=>(0, _convertNumericRefinementsToFilters.convertNumericRefinementsToFilters));
var _capitalize = require("./capitalize");
var _capitalizeDefault = parcelHelpers.interopDefault(_capitalize);
var _defer = require("./defer");
var _deferDefault = parcelHelpers.interopDefault(_defer);
var _isDomElement = require("./isDomElement");
var _isDomElementDefault = parcelHelpers.interopDefault(_isDomElement);
var _getContainerNode = require("./getContainerNode");
var _getContainerNodeDefault = parcelHelpers.interopDefault(_getContainerNode);
var _isSpecialClick = require("./isSpecialClick");
var _isSpecialClickDefault = parcelHelpers.interopDefault(_isSpecialClick);
var _prepareTemplateProps = require("./prepareTemplateProps");
var _prepareTemplatePropsDefault = parcelHelpers.interopDefault(_prepareTemplateProps);
var _renderTemplate = require("./renderTemplate");
var _renderTemplateDefault = parcelHelpers.interopDefault(_renderTemplate);
var _getRefinements = require("./getRefinements");
var _getRefinementsDefault = parcelHelpers.interopDefault(_getRefinements);
var _clearRefinements = require("./clearRefinements");
var _clearRefinementsDefault = parcelHelpers.interopDefault(_clearRefinements);
var _escapeRefinement = require("./escapeRefinement");
var _escapeRefinementDefault = parcelHelpers.interopDefault(_escapeRefinement);
var _unescapeRefinement = require("./unescapeRefinement");
var _unescapeRefinementDefault = parcelHelpers.interopDefault(_unescapeRefinement);
var _checkRendering = require("./checkRendering");
var _checkRenderingDefault = parcelHelpers.interopDefault(_checkRendering);
var _checkIndexUiState = require("./checkIndexUiState");
var _getPropertyByPath = require("./getPropertyByPath");
var _getPropertyByPathDefault = parcelHelpers.interopDefault(_getPropertyByPath);
var _getObjectType = require("./getObjectType");
var _getObjectTypeDefault = parcelHelpers.interopDefault(_getObjectType);
var _noop = require("./noop");
var _noopDefault = parcelHelpers.interopDefault(_noop);
var _isFiniteNumber = require("./isFiniteNumber");
var _isFiniteNumberDefault = parcelHelpers.interopDefault(_isFiniteNumber);
var _isPlainObject = require("./isPlainObject");
var _isPlainObjectDefault = parcelHelpers.interopDefault(_isPlainObject);
var _uniq = require("./uniq");
var _uniqDefault = parcelHelpers.interopDefault(_uniq);
var _range = require("./range");
var _rangeDefault = parcelHelpers.interopDefault(_range);
var _isEqual = require("./isEqual");
var _isEqualDefault = parcelHelpers.interopDefault(_isEqual);
var _escape = require("./escape");
var _escapeDefault = parcelHelpers.interopDefault(_escape);
var _find = require("./find");
var _findDefault = parcelHelpers.interopDefault(_find);
var _findIndex = require("./findIndex");
var _findIndexDefault = parcelHelpers.interopDefault(_findIndex);
var _mergeSearchParameters = require("./mergeSearchParameters");
var _mergeSearchParametersDefault = parcelHelpers.interopDefault(_mergeSearchParameters);
var _resolveSearchParameters = require("./resolveSearchParameters");
var _resolveSearchParametersDefault = parcelHelpers.interopDefault(_resolveSearchParameters);
var _toArray = require("./toArray");
var _toArrayDefault = parcelHelpers.interopDefault(_toArray);
var _logger = require("./logger");
var _documentation = require("./documentation");
var _geoSearch = require("./geo-search");
var _hitsAbsolutePosition = require("./hits-absolute-position");
var _hitsQueryId = require("./hits-query-id");
var _isFacetRefined = require("./isFacetRefined");
var _isFacetRefinedDefault = parcelHelpers.interopDefault(_isFacetRefined);
var _createSendEventForFacet = require("./createSendEventForFacet");
parcelHelpers.exportAll(_createSendEventForFacet, exports);
var _createSendEventForHits = require("./createSendEventForHits");
parcelHelpers.exportAll(_createSendEventForHits, exports);
var _getAppIdAndApiKey = require("./getAppIdAndApiKey");
var _convertNumericRefinementsToFilters = require("./convertNumericRefinementsToFilters");

},{"./capitalize":"1J2wi","./defer":"bO5Os","./isDomElement":"3TY64","./getContainerNode":"ayQ3q","./isSpecialClick":false,"./prepareTemplateProps":"3Knzg","./renderTemplate":"cpZ6z","./getRefinements":false,"./clearRefinements":false,"./escapeRefinement":false,"./unescapeRefinement":false,"./checkRendering":"jF2C6","./checkIndexUiState":"bH0Ll","./getPropertyByPath":"2Q0lT","./getObjectType":"3XQ8P","./noop":"6iazv","./isFiniteNumber":false,"./isPlainObject":"cIivc","./uniq":"2Q0ce","./range":false,"./isEqual":"14V8N","./escape":"eLn1u","./find":"6Dhef","./findIndex":"8tlAy","./mergeSearchParameters":"9Li6L","./resolveSearchParameters":"a7lVI","./toArray":false,"./logger":"glTTt","./documentation":"gLqHy","./geo-search":false,"./hits-absolute-position":"dMQpP","./hits-query-id":"iBpEo","./isFacetRefined":"b5SV4","./createSendEventForFacet":"05go2","./createSendEventForHits":"24sIF","./getAppIdAndApiKey":false,"./convertNumericRefinementsToFilters":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1J2wi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function capitalize(text) {
    return text.toString().charAt(0).toUpperCase() + text.toString().slice(1);
}
exports.default = capitalize;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bO5Os":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var nextMicroTask = Promise.resolve();
var defer = function defer(callback) {
    var progress = null;
    var cancelled = false;
    var fn = function fn() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        if (progress !== null) return;
        progress = nextMicroTask.then(function() {
            progress = null;
            if (cancelled) {
                cancelled = false;
                return;
            }
            callback.apply(void 0, args);
        });
    };
    fn.wait = function() {
        if (progress === null) throw new Error("The deferred function should be called before calling `wait()`");
        return progress;
    };
    fn.cancel = function() {
        if (progress === null) return;
        cancelled = true;
    };
    return fn;
};
exports.default = defer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3TY64":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isDomElement(object) {
    return object instanceof HTMLElement || Boolean(object) && object.nodeType > 0;
}
exports.default = isDomElement;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ayQ3q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _isDomElement = require("./isDomElement");
var _isDomElementDefault = parcelHelpers.interopDefault(_isDomElement);
/**
 * Return the container. If it's a string, it is considered a
 * css selector and retrieves the first matching element. Otherwise
 * test if it validates that it's a correct DOMElement.
 *
 * @param {string|HTMLElement} selectorOrHTMLElement CSS Selector or container node.
 * @return {HTMLElement} Container node
 * @throws Error when the type is not correct
 */ function getContainerNode(selectorOrHTMLElement) {
    var isSelectorString = typeof selectorOrHTMLElement === "string";
    var domElement = isSelectorString ? document.querySelector(selectorOrHTMLElement) : selectorOrHTMLElement;
    if (!(0, _isDomElementDefault.default)(domElement)) {
        var errorMessage = "Container must be `string` or `HTMLElement`.";
        if (isSelectorString) errorMessage += " Unable to find ".concat(selectorOrHTMLElement);
        throw new Error(errorMessage);
    }
    return domElement;
}
exports.default = getContainerNode;

},{"./isDomElement":"3TY64","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Knzg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _uniq = require("./uniq");
var _uniqDefault = parcelHelpers.interopDefault(_uniq);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function prepareTemplates() {
    var defaultTemplates = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var templates = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allKeys = (0, _uniqDefault.default)([].concat(_toConsumableArray(Object.keys(defaultTemplates)), _toConsumableArray(Object.keys(templates))));
    return allKeys.reduce(function(config, key) {
        var defaultTemplate = defaultTemplates[key];
        var customTemplate = templates[key];
        var isCustomTemplate = customTemplate !== undefined && customTemplate !== defaultTemplate;
        config.templates[key] = isCustomTemplate ? customTemplate : defaultTemplate;
        config.useCustomCompileOptions[key] = isCustomTemplate;
        return config;
    }, {
        templates: {},
        useCustomCompileOptions: {}
    });
}
/**
 * Prepares an object to be passed to the Template widget
 */ function prepareTemplateProps(_ref) {
    var defaultTemplates = _ref.defaultTemplates, templates = _ref.templates, templatesConfig = _ref.templatesConfig;
    var preparedTemplates = prepareTemplates(defaultTemplates, templates);
    return _objectSpread({
        templatesConfig: templatesConfig
    }, preparedTemplates);
}
exports.default = prepareTemplateProps;

},{"./uniq":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0ce":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function uniq(array) {
    return array.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
}
exports.default = uniq;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cpZ6z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _hoganJs = require("hogan.js"); // We add all our template helper methods to the template as lambdas. Note
var _hoganJsDefault = parcelHelpers.interopDefault(_hoganJs);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
// that lambdas in Mustache are supposed to accept a second argument of
// `render` to get the rendered value, not the literal `{{value}}`. But
// this is currently broken (see https://github.com/twitter/hogan.js/issues/222).
function transformHelpersToHogan() {
    var helpers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var compileOptions = arguments.length > 1 ? arguments[1] : undefined;
    var data = arguments.length > 2 ? arguments[2] : undefined;
    return Object.keys(helpers).reduce(function(acc, helperKey) {
        return _objectSpread({}, acc, _defineProperty({}, helperKey, function() {
            var _this = this;
            return function(text) {
                var render = function render(value) {
                    return (0, _hoganJsDefault.default).compile(value, compileOptions).render(_this);
                };
                return helpers[helperKey].call(data, text, render);
            };
        }));
    }, {});
}
function renderTemplate(_ref) {
    var templates = _ref.templates, templateKey = _ref.templateKey, compileOptions = _ref.compileOptions, helpers = _ref.helpers, data = _ref.data, bindEvent = _ref.bindEvent;
    var template = templates[templateKey];
    var templateType = _typeof(template);
    var isTemplateString = templateType === "string";
    var isTemplateFunction = templateType === "function";
    if (!isTemplateString && !isTemplateFunction) throw new Error("Template must be 'string' or 'function', was '".concat(templateType, "' (key: ").concat(templateKey, ")"));
    if (isTemplateFunction) return template(data, bindEvent);
    var transformedHelpers = transformHelpersToHogan(helpers, compileOptions, data);
    return (0, _hoganJsDefault.default).compile(template, compileOptions).render(_objectSpread({}, data, {
        helpers: transformedHelpers
    })).replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
        return spaces.replace(/(^|\xA0+)[^\xA0]+/g, "$1 ");
    }).trim();
}
exports.default = renderTemplate;

},{"hogan.js":"gkYEi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkYEi":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ // This file is for use with Node.js. See dist/ for browser files.
var Hogan = require("./compiler");
Hogan.Template = require("./template").Template;
Hogan.template = Hogan.Template;
module.exports = Hogan;

},{"./compiler":"ezTiX","./template":"kCFri"}],"ezTiX":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ (function(Hogan) {
    // Setup regex  assignments
    // remove whitespace according to Mustache spec
    var rIsWhitespace = /\S/, rQuot = /\"/g, rNewline = /\n/g, rCr = /\r/g, rSlash = /\\/g, rLineSep = /\u2028/, rParagraphSep = /\u2029/;
    Hogan.tags = {
        "#": 1,
        "^": 2,
        "<": 3,
        "$": 4,
        "/": 5,
        "!": 6,
        ">": 7,
        "=": 8,
        "_v": 9,
        "{": 10,
        "&": 11,
        "_t": 12
    };
    Hogan.scan = function scan(text1, delimiters1) {
        var len = text1.length, IN_TEXT = 0, IN_TAG_TYPE = 1, IN_TAG = 2, state = IN_TEXT, tagType = null, tag = null, buf = "", tokens = [], seenTag = false, i = 0, lineStart = 0, otag = "{{", ctag = "}}";
        function addBuf() {
            if (buf.length > 0) {
                tokens.push({
                    tag: "_t",
                    text: new String(buf)
                });
                buf = "";
            }
        }
        function lineIsWhitespace() {
            var isAllWhitespace = true;
            for(var j = lineStart; j < tokens.length; j++){
                isAllWhitespace = Hogan.tags[tokens[j].tag] < Hogan.tags["_v"] || tokens[j].tag == "_t" && tokens[j].text.match(rIsWhitespace) === null;
                if (!isAllWhitespace) return false;
            }
            return isAllWhitespace;
        }
        function filterLine(haveSeenTag, noNewLine) {
            addBuf();
            if (haveSeenTag && lineIsWhitespace()) {
                for(var j = lineStart, next; j < tokens.length; j++)if (tokens[j].text) {
                    if ((next = tokens[j + 1]) && next.tag == ">") // set indent to token value
                    next.indent = tokens[j].text.toString();
                    tokens.splice(j, 1);
                }
            } else if (!noNewLine) tokens.push({
                tag: "\n"
            });
            seenTag = false;
            lineStart = tokens.length;
        }
        function changeDelimiters(text, index) {
            var close = "=" + ctag, closeIndex = text.indexOf(close, index), delimiters = trim(text.substring(text.indexOf("=", index) + 1, closeIndex)).split(" ");
            otag = delimiters[0];
            ctag = delimiters[delimiters.length - 1];
            return closeIndex + close.length - 1;
        }
        if (delimiters1) {
            delimiters1 = delimiters1.split(" ");
            otag = delimiters1[0];
            ctag = delimiters1[1];
        }
        for(i = 0; i < len; i++){
            if (state == IN_TEXT) {
                if (tagChange(otag, text1, i)) {
                    --i;
                    addBuf();
                    state = IN_TAG_TYPE;
                } else if (text1.charAt(i) == "\n") filterLine(seenTag);
                else buf += text1.charAt(i);
            } else if (state == IN_TAG_TYPE) {
                i += otag.length - 1;
                tag = Hogan.tags[text1.charAt(i + 1)];
                tagType = tag ? text1.charAt(i + 1) : "_v";
                if (tagType == "=") {
                    i = changeDelimiters(text1, i);
                    state = IN_TEXT;
                } else {
                    if (tag) i++;
                    state = IN_TAG;
                }
                seenTag = i;
            } else if (tagChange(ctag, text1, i)) {
                tokens.push({
                    tag: tagType,
                    n: trim(buf),
                    otag: otag,
                    ctag: ctag,
                    i: tagType == "/" ? seenTag - otag.length : i + ctag.length
                });
                buf = "";
                i += ctag.length - 1;
                state = IN_TEXT;
                if (tagType == "{") {
                    if (ctag == "}}") i++;
                    else cleanTripleStache(tokens[tokens.length - 1]);
                }
            } else buf += text1.charAt(i);
        }
        filterLine(seenTag, true);
        return tokens;
    };
    function cleanTripleStache(token) {
        if (token.n.substr(token.n.length - 1) === "}") token.n = token.n.substring(0, token.n.length - 1);
    }
    function trim(s) {
        if (s.trim) return s.trim();
        return s.replace(/^\s*|\s*$/g, "");
    }
    function tagChange(tag, text, index) {
        if (text.charAt(index) != tag.charAt(0)) return false;
        for(var i = 1, l = tag.length; i < l; i++){
            if (text.charAt(index + i) != tag.charAt(i)) return false;
        }
        return true;
    }
    // the tags allowed inside super templates
    var allowedInSuper = {
        "_t": true,
        "\n": true,
        "$": true,
        "/": true
    };
    function buildTree(tokens, kind, stack, customTags) {
        var instructions = [], opener = null, tail = null, token = null;
        tail = stack[stack.length - 1];
        while(tokens.length > 0){
            token = tokens.shift();
            if (tail && tail.tag == "<" && !(token.tag in allowedInSuper)) throw new Error("Illegal content in < super tag.");
            if (Hogan.tags[token.tag] <= Hogan.tags["$"] || isOpener(token, customTags)) {
                stack.push(token);
                token.nodes = buildTree(tokens, token.tag, stack, customTags);
            } else if (token.tag == "/") {
                if (stack.length === 0) throw new Error("Closing tag without opener: /" + token.n);
                opener = stack.pop();
                if (token.n != opener.n && !isCloser(token.n, opener.n, customTags)) throw new Error("Nesting error: " + opener.n + " vs. " + token.n);
                opener.end = token.i;
                return instructions;
            } else if (token.tag == "\n") token.last = tokens.length == 0 || tokens[0].tag == "\n";
            instructions.push(token);
        }
        if (stack.length > 0) throw new Error("missing closing tag: " + stack.pop().n);
        return instructions;
    }
    function isOpener(token, tags) {
        for(var i = 0, l = tags.length; i < l; i++)if (tags[i].o == token.n) {
            token.tag = "#";
            return true;
        }
    }
    function isCloser(close, open, tags) {
        for(var i = 0, l = tags.length; i < l; i++){
            if (tags[i].c == close && tags[i].o == open) return true;
        }
    }
    function stringifySubstitutions(obj) {
        var items = [];
        for(var key in obj)items.push('"' + esc(key) + '": function(c,p,t,i) {' + obj[key] + "}");
        return "{ " + items.join(",") + " }";
    }
    function stringifyPartials(codeObj) {
        var partials = [];
        for(var key in codeObj.partials)partials.push('"' + esc(key) + '":{name:"' + esc(codeObj.partials[key].name) + '", ' + stringifyPartials(codeObj.partials[key]) + "}");
        return "partials: {" + partials.join(",") + "}, subs: " + stringifySubstitutions(codeObj.subs);
    }
    Hogan.stringify = function(codeObj, text, options) {
        return "{code: function (c,p,i) { " + Hogan.wrapMain(codeObj.code) + " }," + stringifyPartials(codeObj) + "}";
    };
    var serialNo = 0;
    Hogan.generate = function(tree, text, options) {
        serialNo = 0;
        var context = {
            code: "",
            subs: {},
            partials: {}
        };
        Hogan.walk(tree, context);
        if (options.asString) return this.stringify(context, text, options);
        return this.makeTemplate(context, text, options);
    };
    Hogan.wrapMain = function(code) {
        return 'var t=this;t.b(i=i||"");' + code + "return t.fl();";
    };
    Hogan.template = Hogan.Template;
    Hogan.makeTemplate = function(codeObj, text, options) {
        var template = this.makePartials(codeObj);
        template.code = new Function("c", "p", "i", this.wrapMain(codeObj.code));
        return new this.template(template, text, this, options);
    };
    Hogan.makePartials = function(codeObj) {
        var key, template = {
            subs: {},
            partials: codeObj.partials,
            name: codeObj.name
        };
        for(key in template.partials)template.partials[key] = this.makePartials(template.partials[key]);
        for(key in codeObj.subs)template.subs[key] = new Function("c", "p", "t", "i", codeObj.subs[key]);
        return template;
    };
    function esc(s) {
        return s.replace(rSlash, "\\\\").replace(rQuot, '\\"').replace(rNewline, "\\n").replace(rCr, "\\r").replace(rLineSep, "\\u2028").replace(rParagraphSep, "\\u2029");
    }
    function chooseMethod(s) {
        return ~s.indexOf(".") ? "d" : "f";
    }
    function createPartial(node, context) {
        var prefix = "<" + (context.prefix || "");
        var sym = prefix + node.n + serialNo++;
        context.partials[sym] = {
            name: node.n,
            partials: {}
        };
        context.code += 't.b(t.rp("' + esc(sym) + '",c,p,"' + (node.indent || "") + '"));';
        return sym;
    }
    Hogan.codegen = {
        "#": function(node, context) {
            context.code += "if(t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),' + "c,p,0," + node.i + "," + node.end + ',"' + node.otag + " " + node.ctag + '")){' + "t.rs(c,p," + "function(c,p,t){";
            Hogan.walk(node.nodes, context);
            context.code += "});c.pop();}";
        },
        "^": function(node, context) {
            context.code += "if(!t.s(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,1),c,p,1,0,0,"")){';
            Hogan.walk(node.nodes, context);
            context.code += "};";
        },
        ">": createPartial,
        "<": function(node, context) {
            var ctx = {
                partials: {},
                code: "",
                subs: {},
                inPartial: true
            };
            Hogan.walk(node.nodes, ctx);
            var template = context.partials[createPartial(node, context)];
            template.subs = ctx.subs;
            template.partials = ctx.partials;
        },
        "$": function(node, context) {
            var ctx = {
                subs: {},
                code: "",
                partials: context.partials,
                prefix: node.n
            };
            Hogan.walk(node.nodes, ctx);
            context.subs[node.n] = ctx.code;
            if (!context.inPartial) context.code += 't.sub("' + esc(node.n) + '",c,p,i);';
        },
        "\n": function(node, context) {
            context.code += write('"\\n"' + (node.last ? "" : " + i"));
        },
        "_v": function(node, context) {
            context.code += "t.b(t.v(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
        },
        "_t": function(node, context) {
            context.code += write('"' + esc(node.text) + '"');
        },
        "{": tripleStache,
        "&": tripleStache
    };
    function tripleStache(node, context) {
        context.code += "t.b(t.t(t." + chooseMethod(node.n) + '("' + esc(node.n) + '",c,p,0)));';
    }
    function write(s) {
        return "t.b(" + s + ");";
    }
    Hogan.walk = function(nodelist, context) {
        var func;
        for(var i = 0, l = nodelist.length; i < l; i++){
            func = Hogan.codegen[nodelist[i].tag];
            func && func(nodelist[i], context);
        }
        return context;
    };
    Hogan.parse = function(tokens, text, options) {
        options = options || {};
        return buildTree(tokens, "", [], options.sectionTags || []);
    };
    Hogan.cache = {};
    Hogan.cacheKey = function(text, options) {
        return [
            text,
            !!options.asString,
            !!options.disableLambda,
            options.delimiters,
            !!options.modelGet
        ].join("||");
    };
    Hogan.compile = function(text, options) {
        options = options || {};
        var key = Hogan.cacheKey(text, options);
        var template = this.cache[key];
        if (template) {
            var partials = template.partials;
            for(var name in partials)delete partials[name].instance;
            return template;
        }
        template = this.generate(this.parse(this.scan(text, options.delimiters), text, options), text, options);
        return this.cache[key] = template;
    };
})(exports);

},{}],"kCFri":[function(require,module,exports) {
/*
 *  Copyright 2011 Twitter, Inc.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */ var Hogan = {};
(function(Hogan1) {
    Hogan1.Template = function(codeObj, text, compiler, options) {
        codeObj = codeObj || {};
        this.r = codeObj.code || this.r;
        this.c = compiler;
        this.options = options || {};
        this.text = text || "";
        this.partials = codeObj.partials || {};
        this.subs = codeObj.subs || {};
        this.buf = "";
    };
    Hogan1.Template.prototype = {
        // render: replaced by generated code.
        r: function(context, partials, indent) {
            return "";
        },
        // variable escaping
        v: hoganEscape,
        // triple stache
        t: coerceToString,
        render: function render(context, partials, indent) {
            return this.ri([
                context
            ], partials || {}, indent);
        },
        // render internal -- a hook for overrides that catches partials too
        ri: function(context, partials, indent) {
            return this.r(context, partials, indent);
        },
        // ensurePartial
        ep: function(symbol, partials) {
            var partial = this.partials[symbol];
            // check to see that if we've instantiated this partial before
            var template = partials[partial.name];
            if (partial.instance && partial.base == template) return partial.instance;
            if (typeof template == "string") {
                if (!this.c) throw new Error("No compiler available.");
                template = this.c.compile(template, this.options);
            }
            if (!template) return null;
            // We use this to check whether the partials dictionary has changed
            this.partials[symbol].base = template;
            if (partial.subs) {
                // Make sure we consider parent template now
                if (!partials.stackText) partials.stackText = {};
                for(key in partial.subs)if (!partials.stackText[key]) partials.stackText[key] = this.activeSub !== undefined && partials.stackText[this.activeSub] ? partials.stackText[this.activeSub] : this.text;
                template = createSpecializedPartial(template, partial.subs, partial.partials, this.stackSubs, this.stackPartials, partials.stackText);
            }
            this.partials[symbol].instance = template;
            return template;
        },
        // tries to find a partial in the current scope and render it
        rp: function(symbol, context, partials, indent) {
            var partial = this.ep(symbol, partials);
            if (!partial) return "";
            return partial.ri(context, partials, indent);
        },
        // render a section
        rs: function(context, partials, section) {
            var tail = context[context.length - 1];
            if (!isArray(tail)) {
                section(context, partials, this);
                return;
            }
            for(var i = 0; i < tail.length; i++){
                context.push(tail[i]);
                section(context, partials, this);
                context.pop();
            }
        },
        // maybe start a section
        s: function(val, ctx, partials, inverted, start, end, tags) {
            var pass;
            if (isArray(val) && val.length === 0) return false;
            if (typeof val == "function") val = this.ms(val, ctx, partials, inverted, start, end, tags);
            pass = !!val;
            if (!inverted && pass && ctx) ctx.push(typeof val == "object" ? val : ctx[ctx.length - 1]);
            return pass;
        },
        // find values with dotted names
        d: function(key, ctx, partials, returnFound) {
            var found, names = key.split("."), val = this.f(names[0], ctx, partials, returnFound), doModelGet = this.options.modelGet, cx = null;
            if (key === "." && isArray(ctx[ctx.length - 2])) val = ctx[ctx.length - 1];
            else for(var i = 1; i < names.length; i++){
                found = findInScope(names[i], val, doModelGet);
                if (found !== undefined) {
                    cx = val;
                    val = found;
                } else val = "";
            }
            if (returnFound && !val) return false;
            if (!returnFound && typeof val == "function") {
                ctx.push(cx);
                val = this.mv(val, ctx, partials);
                ctx.pop();
            }
            return val;
        },
        // find values with normal names
        f: function(key, ctx, partials, returnFound) {
            var val = false, v = null, found = false, doModelGet = this.options.modelGet;
            for(var i = ctx.length - 1; i >= 0; i--){
                v = ctx[i];
                val = findInScope(key, v, doModelGet);
                if (val !== undefined) {
                    found = true;
                    break;
                }
            }
            if (!found) return returnFound ? false : "";
            if (!returnFound && typeof val == "function") val = this.mv(val, ctx, partials);
            return val;
        },
        // higher order templates
        ls: function(func, cx, partials, text, tags) {
            var oldTags = this.options.delimiters;
            this.options.delimiters = tags;
            this.b(this.ct(coerceToString(func.call(cx, text)), cx, partials));
            this.options.delimiters = oldTags;
            return false;
        },
        // compile text
        ct: function(text, cx, partials) {
            if (this.options.disableLambda) throw new Error("Lambda features disabled.");
            return this.c.compile(text, this.options).render(cx, partials);
        },
        // template result buffering
        b: function(s) {
            this.buf += s;
        },
        fl: function() {
            var r = this.buf;
            this.buf = "";
            return r;
        },
        // method replace section
        ms: function(func, ctx, partials, inverted, start, end, tags) {
            var textSource, cx = ctx[ctx.length - 1], result = func.call(cx);
            if (typeof result == "function") {
                if (inverted) return true;
                else {
                    textSource = this.activeSub && this.subsText && this.subsText[this.activeSub] ? this.subsText[this.activeSub] : this.text;
                    return this.ls(result, cx, partials, textSource.substring(start, end), tags);
                }
            }
            return result;
        },
        // method replace variable
        mv: function(func, ctx, partials) {
            var cx = ctx[ctx.length - 1];
            var result = func.call(cx);
            if (typeof result == "function") return this.ct(coerceToString(result.call(cx)), cx, partials);
            return result;
        },
        sub: function(name, context, partials, indent) {
            var f = this.subs[name];
            if (f) {
                this.activeSub = name;
                f(context, partials, this, indent);
                this.activeSub = false;
            }
        }
    };
    //Find a key in an object
    function findInScope(key, scope, doModelGet) {
        var val;
        if (scope && typeof scope == "object") {
            if (scope[key] !== undefined) val = scope[key];
            else if (doModelGet && scope.get && typeof scope.get == "function") val = scope.get(key);
        }
        return val;
    }
    function createSpecializedPartial(instance, subs, partials, stackSubs, stackPartials, stackText) {
        function PartialTemplate() {}
        PartialTemplate.prototype = instance;
        function Substitutions() {}
        Substitutions.prototype = instance.subs;
        var key;
        var partial = new PartialTemplate();
        partial.subs = new Substitutions();
        partial.subsText = {}; //hehe. substext.
        partial.buf = "";
        stackSubs = stackSubs || {};
        partial.stackSubs = stackSubs;
        partial.subsText = stackText;
        for(key in subs)if (!stackSubs[key]) stackSubs[key] = subs[key];
        for(key in stackSubs)partial.subs[key] = stackSubs[key];
        stackPartials = stackPartials || {};
        partial.stackPartials = stackPartials;
        for(key in partials)if (!stackPartials[key]) stackPartials[key] = partials[key];
        for(key in stackPartials)partial.partials[key] = stackPartials[key];
        return partial;
    }
    var rAmp = /&/g, rLt = /</g, rGt = />/g, rApos = /\'/g, rQuot = /\"/g, hChars = /[&<>\"\']/;
    function coerceToString(val) {
        return String(val === null || val === undefined ? "" : val);
    }
    function hoganEscape(str) {
        str = coerceToString(str);
        return hChars.test(str) ? str.replace(rAmp, "&amp;").replace(rLt, "&lt;").replace(rGt, "&gt;").replace(rApos, "&#39;").replace(rQuot, "&quot;") : str;
    }
    var isArray = Array.isArray || function(a) {
        return Object.prototype.toString.call(a) === "[object Array]";
    };
})(exports);

},{}],"jF2C6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _getObjectType = require("./getObjectType");
var _getObjectTypeDefault = parcelHelpers.interopDefault(_getObjectType);
function checkRendering(rendering, usage) {
    if (rendering === undefined || typeof rendering !== "function") throw new Error("The render function is not valid (received type ".concat((0, _getObjectTypeDefault.default)(rendering), ").\n\n").concat(usage));
}
exports.default = checkRendering;

},{"./getObjectType":"3XQ8P","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3XQ8P":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getObjectType(object) {
    return Object.prototype.toString.call(object).slice(8, -1);
}
exports.default = getObjectType;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bH0Ll":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "checkIndexUiState", ()=>checkIndexUiState);
var _capitalize = require("./capitalize");
var _capitalizeDefault = parcelHelpers.interopDefault(_capitalize);
var _logger = require("./logger");
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
}
function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    }
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
// Some connectors are responsible for multiple widgets so we need
// to map them.
function getWidgetNames(connectorName) {
    switch(connectorName){
        case "range":
            return [];
        case "menu":
            return [
                "menu",
                "menuSelect"
            ];
        default:
            return [
                connectorName
            ];
    }
}
var stateToWidgetsMap = {
    query: {
        connectors: [
            "connectSearchBox"
        ],
        widgets: [
            "ais.searchBox",
            "ais.autocomplete",
            "ais.voiceSearch"
        ]
    },
    refinementList: {
        connectors: [
            "connectRefinementList"
        ],
        widgets: [
            "ais.refinementList"
        ]
    },
    menu: {
        connectors: [
            "connectMenu"
        ],
        widgets: [
            "ais.menu"
        ]
    },
    hierarchicalMenu: {
        connectors: [
            "connectHierarchicalMenu"
        ],
        widgets: [
            "ais.hierarchicalMenu"
        ]
    },
    numericMenu: {
        connectors: [
            "connectNumericMenu"
        ],
        widgets: [
            "ais.numericMenu"
        ]
    },
    ratingMenu: {
        connectors: [
            "connectRatingMenu"
        ],
        widgets: [
            "ais.ratingMenu"
        ]
    },
    range: {
        connectors: [
            "connectRange"
        ],
        widgets: [
            "ais.rangeInput",
            "ais.rangeSlider",
            "ais.range"
        ]
    },
    toggle: {
        connectors: [
            "connectToggleRefinement"
        ],
        widgets: [
            "ais.toggleRefinement"
        ]
    },
    geoSearch: {
        connectors: [
            "connectGeoSearch"
        ],
        widgets: [
            "ais.geoSearch"
        ]
    },
    sortBy: {
        connectors: [
            "connectSortBy"
        ],
        widgets: [
            "ais.sortBy"
        ]
    },
    page: {
        connectors: [
            "connectPagination"
        ],
        widgets: [
            "ais.pagination",
            "ais.infiniteHits"
        ]
    },
    hitsPerPage: {
        connectors: [
            "connectHitsPerPage"
        ],
        widgets: [
            "ais.hitsPerPage"
        ]
    },
    configure: {
        connectors: [
            "connectConfigure"
        ],
        widgets: [
            "ais.configure"
        ]
    },
    places: {
        connectors: [],
        widgets: [
            "ais.places"
        ]
    }
};
function checkIndexUiState(_ref) {
    var index = _ref.index, indexUiState = _ref.indexUiState;
    var mountedWidgets = index.getWidgets().map(function(widget) {
        return widget.$$type;
    }).filter(Boolean);
    var missingWidgets = Object.keys(indexUiState).reduce(function(acc, parameter) {
        var requiredWidgets = stateToWidgetsMap[parameter] && stateToWidgetsMap[parameter].widgets;
        if (requiredWidgets && !requiredWidgets.some(function(requiredWidget) {
            return mountedWidgets.includes(requiredWidget);
        })) acc.push([
            parameter,
            {
                connectors: stateToWidgetsMap[parameter].connectors,
                widgets: stateToWidgetsMap[parameter].widgets.map(function(widgetIdentifier) {
                    return widgetIdentifier.split("ais.")[1];
                })
            }
        ]);
        return acc;
    }, []);
    (0, _logger.warning)(missingWidgets.length === 0, 'The UI state for the index "'.concat(index.getIndexId(), '" is not consistent with the widgets mounted.\n\nThis can happen when the UI state is specified via `initialUiState`, `routing` or `setUiState` but that the widgets responsible for this state were not added. This results in those query parameters not being sent to the API.\n\nTo fully reflect the state, some widgets need to be added to the index "').concat(index.getIndexId(), '":\n\n').concat(missingWidgets.map(function(_ref2) {
        var _ref4;
        var _ref3 = _slicedToArray(_ref2, 2), stateParameter = _ref3[0], widgets = _ref3[1].widgets;
        return "- `".concat(stateParameter, "` needs one of these widgets: ").concat((_ref4 = []).concat.apply(_ref4, _toConsumableArray(widgets.map(function(name) {
            return getWidgetNames(name);
        }))).map(function(name) {
            return '"'.concat(name, '"');
        }).join(", "));
    }).join("\n"), '\n\nIf you do not wish to display widgets but still want to support their search parameters, you can mount "virtual widgets" that don\'t render anything:\n\n```\n').concat(missingWidgets.filter(function(_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2), _stateParameter = _ref6[0], connectors = _ref6[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2), _stateParameter = _ref8[0], _ref8$ = _ref8[1], connectors = _ref8$.connectors, widgets = _ref8$.widgets;
        var capitalizedWidget = (0, _capitalizeDefault.default)(widgets[0]);
        var connectorName = connectors[0];
        return "const virtual".concat(capitalizedWidget, " = ").concat(connectorName, "(() => null);");
    }).join("\n"), "\n\nsearch.addWidgets([\n  ").concat(missingWidgets.filter(function(_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2), _stateParameter = _ref10[0], connectors = _ref10[1].connectors;
        return connectors.length > 0;
    }).map(function(_ref11) {
        var _ref12 = _slicedToArray(_ref11, 2), _stateParameter = _ref12[0], widgets = _ref12[1].widgets;
        var capitalizedWidget = (0, _capitalizeDefault.default)(widgets[0]);
        return "virtual".concat(capitalizedWidget, "({ /* ... */ })");
    }).join(",\n  "), "\n]);\n```\n\nIf you're using custom widgets that do set these query parameters, we recommend using connectors instead.\n\nSee https://www.algolia.com/doc/guides/building-search-ui/widgets/customize-an-existing-widget/js/#customize-the-complete-ui-of-the-widgets"));
}

},{"./capitalize":"1J2wi","./logger":"glTTt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"glTTt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warn", ()=>warn);
parcelHelpers.export(exports, "deprecate", ()=>deprecate);
parcelHelpers.export(exports, "warning", ()=>_warning);
var _noop = require("./noop");
var _noopDefault = parcelHelpers.interopDefault(_noop);
/**
 * Logs a warning when this function is called, in development environment only.
 */ var deprecate = function deprecate(fn) {
    return fn;
};
/**
 * Logs a warning
 * This is used to log issues in development environment only.
 */ var warn = (0, _noopDefault.default);
/**
 * Logs a warning if the condition is not met.
 * This is used to log issues in development environment only.
 */ var _warning = (0, _noopDefault.default);
warn = function warn(message) {
    // eslint-disable-next-line no-console
    console.warn("[InstantSearch.js]: ".concat(message.trim()));
};
deprecate = function deprecate(fn, message) {
    var hasAlreadyPrinted = false;
    return function() {
        if (!hasAlreadyPrinted) {
            hasAlreadyPrinted = true;
            warn(message);
        }
        return fn.apply(void 0, arguments);
    };
};
_warning = function warning(condition, message) {
    if (condition) return;
    var hasAlreadyPrinted = _warning.cache[message];
    if (!hasAlreadyPrinted) {
        _warning.cache[message] = true;
        warn(message);
    }
};
_warning.cache = {};

},{"./noop":"6iazv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6iazv":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function noop() {}
exports.default = noop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Q0lT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function getPropertyByPath(object, path) {
    var parts = Array.isArray(path) ? path : path.split(".");
    return parts.reduce(function(current, key) {
        return current && current[key];
    }, object);
}
exports.default = getPropertyByPath;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIivc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/master/isPlainObject.js
 */ function getTag(value) {
    if (value === null) return value === undefined ? "[object Undefined]" : "[object Null]";
    return Object.prototype.toString.call(value);
}
function isObjectLike(value) {
    return _typeof(value) === "object" && value !== null;
}
/**
 * Checks if `value` is a plain object.
 *
 * A plain object is an object created by the `Object`
 * constructor or with a `[[Prototype]]` of `null`.
 */ function isPlainObject(value) {
    if (!isObjectLike(value) || getTag(value) !== "[object Object]") return false;
    if (Object.getPrototypeOf(value) === null) return true;
    var proto = value;
    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
    return Object.getPrototypeOf(value) === proto;
}
exports.default = isPlainObject;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"14V8N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isPrimitive(obj) {
    return obj !== Object(obj);
}
function isEqual(first, second) {
    if (first === second) return true;
    if (isPrimitive(first) || isPrimitive(second) || typeof first === "function" || typeof second === "function") return first === second;
    if (Object.keys(first).length !== Object.keys(second).length) return false;
    for(var _i = 0, _Object$keys = Object.keys(first); _i < _Object$keys.length; _i++){
        var key = _Object$keys[_i];
        if (!(key in second)) return false;
        if (!isEqual(first[key], second[key])) return false;
    }
    return true;
}
exports.default = isEqual;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eLn1u":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This implementation is taken from Lodash implementation.
 * See: https://github.com/lodash/lodash/blob/4.17.11-npm/escape.js
 */ // Used to map characters to HTML entities.
var htmlEscapes = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
}; // Used to match HTML entities and HTML characters.
var regexUnescapedHtml = /[&<>"']/g;
var regexHasUnescapedHtml = RegExp(regexUnescapedHtml.source);
/**
 * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
 * corresponding HTML entities.
 */ function escape(value) {
    return value && regexHasUnescapedHtml.test(value) ? value.replace(regexUnescapedHtml, function(character) {
        return htmlEscapes[character];
    }) : value;
}
exports.default = escape;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Dhef":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// We aren't using the native `Array.prototype.find` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `find` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.find` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
function find(items, predicate) {
    var value;
    for(var i = 0; i < items.length; i++){
        value = items[i]; // inlined for performance: if (Call(predicate, thisArg, [value, i, list])) {
        if (predicate(value, i, items)) return value;
    }
    return undefined;
}
exports.default = find;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8tlAy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// We aren't using the native `Array.prototype.findIndex` because the refactor away from Lodash is not
// published as a major version.
// Relying on the `findIndex` polyfill on user-land, which before was only required for niche use-cases,
// was decided as too risky.
// @MAJOR Replace with the native `Array.prototype.findIndex` method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
function findIndex(array, comparator) {
    if (!Array.isArray(array)) return -1;
    for(var i = 0; i < array.length; i++){
        if (comparator(array[i])) return i;
    }
    return -1;
}
exports.default = findIndex;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Li6L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _findIndex = require("./findIndex");
var _findIndexDefault = parcelHelpers.interopDefault(_findIndex);
var _uniq = require("./uniq");
var _uniqDefault = parcelHelpers.interopDefault(_uniq);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
var mergeWithRest = function mergeWithRest(left, right) {
    var facets = right.facets, disjunctiveFacets = right.disjunctiveFacets, facetsRefinements = right.facetsRefinements, facetsExcludes = right.facetsExcludes, disjunctiveFacetsRefinements = right.disjunctiveFacetsRefinements, numericRefinements = right.numericRefinements, tagRefinements = right.tagRefinements, hierarchicalFacets = right.hierarchicalFacets, hierarchicalFacetsRefinements = right.hierarchicalFacetsRefinements, ruleContexts = right.ruleContexts, rest = _objectWithoutProperties(right, [
        "facets",
        "disjunctiveFacets",
        "facetsRefinements",
        "facetsExcludes",
        "disjunctiveFacetsRefinements",
        "numericRefinements",
        "tagRefinements",
        "hierarchicalFacets",
        "hierarchicalFacetsRefinements",
        "ruleContexts"
    ]);
    return left.setQueryParameters(rest);
}; // Merge facets
var mergeFacets = function mergeFacets(left, right) {
    return right.facets.reduce(function(_, name) {
        return _.addFacet(name);
    }, left);
};
var mergeDisjunctiveFacets = function mergeDisjunctiveFacets(left, right) {
    return right.disjunctiveFacets.reduce(function(_, name) {
        return _.addDisjunctiveFacet(name);
    }, left);
};
var mergeHierarchicalFacets = function mergeHierarchicalFacets(left, right) {
    return left.setQueryParameters({
        hierarchicalFacets: right.hierarchicalFacets.reduce(function(facets, facet) {
            var index = (0, _findIndexDefault.default)(facets, function(_) {
                return _.name === facet.name;
            });
            if (index === -1) return facets.concat(facet);
            var nextFacets = facets.slice();
            nextFacets.splice(index, 1, facet);
            return nextFacets;
        }, left.hierarchicalFacets)
    });
}; // Merge facet refinements
var mergeTagRefinements = function mergeTagRefinements(left, right) {
    return right.tagRefinements.reduce(function(_, value) {
        return _.addTagRefinement(value);
    }, left);
};
var mergeFacetRefinements = function mergeFacetRefinements(left, right) {
    return left.setQueryParameters({
        facetsRefinements: _objectSpread({}, left.facetsRefinements, {}, right.facetsRefinements)
    });
};
var mergeFacetsExcludes = function mergeFacetsExcludes(left, right) {
    return left.setQueryParameters({
        facetsExcludes: _objectSpread({}, left.facetsExcludes, {}, right.facetsExcludes)
    });
};
var mergeDisjunctiveFacetsRefinements = function mergeDisjunctiveFacetsRefinements(left, right) {
    return left.setQueryParameters({
        disjunctiveFacetsRefinements: _objectSpread({}, left.disjunctiveFacetsRefinements, {}, right.disjunctiveFacetsRefinements)
    });
};
var mergeNumericRefinements = function mergeNumericRefinements(left, right) {
    return left.setQueryParameters({
        numericRefinements: _objectSpread({}, left.numericRefinements, {}, right.numericRefinements)
    });
};
var mergeHierarchicalFacetsRefinements = function mergeHierarchicalFacetsRefinements(left, right) {
    return left.setQueryParameters({
        hierarchicalFacetsRefinements: _objectSpread({}, left.hierarchicalFacetsRefinements, {}, right.hierarchicalFacetsRefinements)
    });
};
var mergeRuleContexts = function mergeRuleContexts(left, right) {
    var ruleContexts = (0, _uniqDefault.default)([].concat(left.ruleContexts).concat(right.ruleContexts).filter(Boolean));
    if (ruleContexts.length > 0) return left.setQueryParameters({
        ruleContexts: ruleContexts
    });
    return left;
};
var merge = function merge() {
    for(var _len = arguments.length, parameters = new Array(_len), _key = 0; _key < _len; _key++)parameters[_key] = arguments[_key];
    return parameters.reduce(function(left, right) {
        var hierarchicalFacetsRefinementsMerged = mergeHierarchicalFacetsRefinements(left, right);
        var hierarchicalFacetsMerged = mergeHierarchicalFacets(hierarchicalFacetsRefinementsMerged, right);
        var tagRefinementsMerged = mergeTagRefinements(hierarchicalFacetsMerged, right);
        var numericRefinementsMerged = mergeNumericRefinements(tagRefinementsMerged, right);
        var disjunctiveFacetsRefinementsMerged = mergeDisjunctiveFacetsRefinements(numericRefinementsMerged, right);
        var facetsExcludesMerged = mergeFacetsExcludes(disjunctiveFacetsRefinementsMerged, right);
        var facetRefinementsMerged = mergeFacetRefinements(facetsExcludesMerged, right);
        var disjunctiveFacetsMerged = mergeDisjunctiveFacets(facetRefinementsMerged, right);
        var ruleContextsMerged = mergeRuleContexts(disjunctiveFacetsMerged, right);
        var facetsMerged = mergeFacets(ruleContextsMerged, right);
        return mergeWithRest(facetsMerged, right);
    });
};
exports.default = merge;

},{"./findIndex":"8tlAy","./uniq":"2Q0ce","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a7lVI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var resolveSearchParameters = function resolveSearchParameters(current) {
    var parent = current.getParent();
    var states = [
        current.getHelper().state
    ];
    while(parent !== null){
        states = [
            parent.getHelper().state
        ].concat(states);
        parent = parent.getParent();
    }
    return states;
};
exports.default = resolveSearchParameters;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLqHy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDocumentationLink", ()=>createDocumentationLink);
parcelHelpers.export(exports, "createDocumentationMessageGenerator", ()=>createDocumentationMessageGenerator);
var createDocumentationLink = function createDocumentationLink(_ref) {
    var name = _ref.name, _ref$connector = _ref.connector, connector = _ref$connector === void 0 ? false : _ref$connector;
    return [
        "https://www.algolia.com/doc/api-reference/widgets/",
        name,
        "/js/",
        connector ? "#connector" : ""
    ].join("");
};
var createDocumentationMessageGenerator = function createDocumentationMessageGenerator() {
    for(var _len = arguments.length, widgets = new Array(_len), _key = 0; _key < _len; _key++)widgets[_key] = arguments[_key];
    var links = widgets.map(function(widget) {
        return createDocumentationLink(widget);
    }).join(", ");
    return function(message) {
        return [
            message,
            "See documentation: ".concat(links)
        ].filter(Boolean).join("\n\n");
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMQpP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addAbsolutePosition", ()=>addAbsolutePosition);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var addAbsolutePosition = function addAbsolutePosition(hits, page, hitsPerPage) {
    return hits.map(function(hit, idx) {
        return _objectSpread({}, hit, {
            __position: hitsPerPage * page + idx + 1
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iBpEo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addQueryID", ()=>addQueryID);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var addQueryID = function addQueryID(hits, queryID) {
    if (!queryID) return hits;
    return hits.map(function(hit) {
        return _objectSpread({}, hit, {
            __queryID: queryID
        });
    });
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5SV4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function isFacetRefined(helper, facet, value) {
    if (helper.state.isHierarchicalFacet(facet)) return helper.state.isHierarchicalFacetRefined(facet, value);
    else if (helper.state.isConjunctiveFacet(facet)) return helper.state.isFacetRefined(facet, value);
    else return helper.state.isDisjunctiveFacetRefined(facet, value);
}
exports.default = isFacetRefined;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05go2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSendEventForFacet", ()=>createSendEventForFacet);
var _isFacetRefined = require("./isFacetRefined");
var _isFacetRefinedDefault = parcelHelpers.interopDefault(_isFacetRefined);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function createSendEventForFacet(_ref) {
    var instantSearchInstance = _ref.instantSearchInstance, helper = _ref.helper, attribute = _ref.attribute, widgetType = _ref.widgetType;
    var sendEventForFacet = function sendEventForFacet() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var eventType = args[0], facetValue = args[1], _args$ = args[2], eventName = _args$ === void 0 ? "Filter Applied" : _args$;
        if (args.length === 1 && _typeof(args[0]) === "object") instantSearchInstance.sendEventToInsights(args[0]);
        else if (eventType === "click" && (args.length === 2 || args.length === 3)) {
            if (!(0, _isFacetRefinedDefault.default)(helper, attribute, facetValue)) // send event only when the facet is being checked "ON"
            instantSearchInstance.sendEventToInsights({
                insightsMethod: "clickedFilters",
                widgetType: widgetType,
                eventType: eventType,
                payload: {
                    eventName: eventName,
                    index: helper.getIndex(),
                    filters: [
                        "".concat(attribute, ":").concat(JSON.stringify(facetValue))
                    ]
                }
            });
        } else throw new Error("You need to pass two arguments like:\n  sendEvent('click', facetValue);\n\nIf you want to send a custom payload, you can pass one object: sendEvent(customPayload);\n");
    };
    return sendEventForFacet;
}

},{"./isFacetRefined":"b5SV4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"24sIF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createSendEventForHits", ()=>createSendEventForHits);
parcelHelpers.export(exports, "createBindEventForHits", ()=>createBindEventForHits);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
var buildPayload = function buildPayload(_ref) {
    var index = _ref.index, widgetType = _ref.widgetType, methodName = _ref.methodName, args = _ref.args;
    if (args.length === 1 && _typeof(args[0]) === "object") return args[0];
    var eventType = args[0];
    var hits = args[1];
    var eventName = args[2];
    if (!hits) throw new Error("You need to pass hit or hits as the second argument like:\n  ".concat(methodName, "(eventType, hit);\n  "));
    if ((eventType === "click" || eventType === "conversion") && !eventName) throw new Error("You need to pass eventName as the third argument for 'click' or 'conversion' events like:\n  ".concat(methodName, "('click', hit, 'Product Purchased');\n\n  To learn more about event naming: https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/in-depth/clicks-conversions-best-practices/\n  "));
    var hitsArray = Array.isArray(hits) ? hits : [
        hits
    ];
    if (hitsArray.length === 0) return null;
    var queryID = hitsArray[0].__queryID;
    var objectIDs = hitsArray.map(function(hit) {
        return hit.objectID;
    });
    var positions = hitsArray.map(function(hit) {
        return hit.__position;
    });
    if (eventType === "view") return {
        insightsMethod: "viewedObjectIDs",
        widgetType: widgetType,
        eventType: eventType,
        payload: {
            eventName: eventName || "Hits Viewed",
            index: index,
            objectIDs: objectIDs
        }
    };
    else if (eventType === "click") return {
        insightsMethod: "clickedObjectIDsAfterSearch",
        widgetType: widgetType,
        eventType: eventType,
        payload: {
            eventName: eventName,
            index: index,
            queryID: queryID,
            objectIDs: objectIDs,
            positions: positions
        }
    };
    else if (eventType === "conversion") return {
        insightsMethod: "convertedObjectIDsAfterSearch",
        widgetType: widgetType,
        eventType: eventType,
        payload: {
            eventName: eventName,
            index: index,
            queryID: queryID,
            objectIDs: objectIDs
        }
    };
    else throw new Error('eventType("'.concat(eventType, '") is not supported.\n    If you want to send a custom payload, you can pass one object: ').concat(methodName, "(customPayload);\n    "));
};
function createSendEventForHits(_ref2) {
    var instantSearchInstance = _ref2.instantSearchInstance, index = _ref2.index, widgetType = _ref2.widgetType;
    var sendEventForHits = function sendEventForHits() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        var payload = buildPayload({
            widgetType: widgetType,
            index: index,
            methodName: "sendEvent",
            args: args
        });
        if (payload) instantSearchInstance.sendEventToInsights(payload);
    };
    return sendEventForHits;
}
function createBindEventForHits(_ref3) {
    var index = _ref3.index, widgetType = _ref3.widgetType;
    var bindEventForHits = function bindEventForHits() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        var payload = buildPayload({
            widgetType: widgetType,
            index: index,
            methodName: "bindEvent",
            args: args
        });
        return payload ? "data-insights-event=".concat(btoa(JSON.stringify(payload))) : "";
    };
    return bindEventForHits;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hkkLK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = "4.9.0";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8IHo3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _helpers = require("../helpers");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function hoganHelpers(_ref) {
    var numberLocale = _ref.numberLocale;
    return {
        formatNumber: function formatNumber(value, render) {
            return Number(render(value)).toLocaleString(numberLocale);
        },
        highlight: function highlight(options, render) {
            try {
                var highlightOptions = JSON.parse(options);
                return render((0, _helpers.highlight)(_objectSpread({}, highlightOptions, {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\nThe highlight helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        snippet: function snippet(options, render) {
            try {
                var snippetOptions = JSON.parse(options);
                return render((0, _helpers.snippet)(_objectSpread({}, snippetOptions, {
                    hit: this
                })));
            } catch (error) {
                throw new Error('\nThe snippet helper expects a JSON object of the format:\n{ "attribute": "name", "highlightedTagName": "mark" }');
            }
        },
        insights: function insights(options, render) {
            try {
                var _JSON$parse = JSON.parse(options), method = _JSON$parse.method, payload = _JSON$parse.payload;
                return render((0, _helpers.insights)(method, _objectSpread({
                    objectIDs: [
                        this.objectID
                    ]
                }, payload)));
            } catch (error) {
                throw new Error('\nThe insights helper expects a JSON object of the format:\n{ "method": "method-name", "payload": { "eventName": "name of the event" } }');
            }
        }
    };
}
exports.default = hoganHelpers;

},{"../helpers":"8kgzi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8kgzi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "highlight", ()=>(0, _highlightDefault.default));
parcelHelpers.export(exports, "snippet", ()=>(0, _snippetDefault.default));
parcelHelpers.export(exports, "insights", ()=>(0, _insightsDefault.default));
parcelHelpers.export(exports, "getInsightsAnonymousUserToken", ()=>(0, _getInsightsAnonymousUserTokenDefault.default));
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>(0, _getInsightsAnonymousUserToken.getInsightsAnonymousUserTokenInternal));
var _highlight = require("./highlight");
parcelHelpers.exportAll(_highlight, exports);
var _snippet = require("./snippet");
parcelHelpers.exportAll(_snippet, exports);
var _highlightDefault = parcelHelpers.interopDefault(_highlight);
var _snippetDefault = parcelHelpers.interopDefault(_snippet);
var _insights = require("./insights");
var _insightsDefault = parcelHelpers.interopDefault(_insights);
var _getInsightsAnonymousUserToken = require("./get-insights-anonymous-user-token");
var _getInsightsAnonymousUserTokenDefault = parcelHelpers.interopDefault(_getInsightsAnonymousUserToken);

},{"./highlight":"juTzj","./snippet":"lMCRi","./insights":"2EZr9","./get-insights-anonymous-user-token":"cRBQf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"juTzj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../lib/utils");
var _escapeHighlight = require("../lib/escape-highlight");
var _suit = require("../lib/suit");
var suit = (0, _suit.component)("Highlight");
function highlight(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    var _ref2 = (0, _utils.getPropertyByPath)(hit._highlightResult, attribute) || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    return attributeValue.replace(new RegExp((0, _escapeHighlight.TAG_REPLACEMENT).highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp((0, _escapeHighlight.TAG_REPLACEMENT).highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}
exports.default = highlight;

},{"../lib/utils":"etVYs","../lib/escape-highlight":"eW92d","../lib/suit":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eW92d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TAG_PLACEHOLDER", ()=>TAG_PLACEHOLDER);
parcelHelpers.export(exports, "TAG_REPLACEMENT", ()=>TAG_REPLACEMENT);
parcelHelpers.export(exports, "escapeFacets", ()=>escapeFacets);
var _utils = require("../lib/utils");
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var TAG_PLACEHOLDER = {
    highlightPreTag: "__ais-highlight__",
    highlightPostTag: "__/ais-highlight__"
};
var TAG_REPLACEMENT = {
    highlightPreTag: "<mark>",
    highlightPostTag: "</mark>"
};
function replaceTagsAndEscape(value) {
    return (0, _utils.escape)(value).replace(new RegExp(TAG_PLACEHOLDER.highlightPreTag, "g"), TAG_REPLACEMENT.highlightPreTag).replace(new RegExp(TAG_PLACEHOLDER.highlightPostTag, "g"), TAG_REPLACEMENT.highlightPostTag);
}
function recursiveEscape(input) {
    if ((0, _utils.isPlainObject)(input) && typeof input.value !== "string") return Object.keys(input).reduce(function(acc, key) {
        return _objectSpread({}, acc, _defineProperty({}, key, recursiveEscape(input[key])));
    }, {});
    if (Array.isArray(input)) return input.map(recursiveEscape);
    return _objectSpread({}, input, {
        value: replaceTagsAndEscape(input.value)
    });
}
function escapeHits(hits) {
    if (hits.__escaped === undefined) {
        // We don't override the value on hit because it will mutate the raw results
        // instead we make a shallow copy and we assign the escaped values on it.
        hits = hits.map(function(_ref) {
            var hit = _extends({}, _ref);
            if (hit._highlightResult) hit._highlightResult = recursiveEscape(hit._highlightResult);
            if (hit._snippetResult) hit._snippetResult = recursiveEscape(hit._snippetResult);
            return hit;
        });
        hits.__escaped = true;
    }
    return hits;
}
exports.default = escapeHits;
function escapeFacets(facetHits) {
    return facetHits.map(function(h) {
        return _objectSpread({}, h, {
            highlighted: replaceTagsAndEscape(h.highlighted)
        });
    });
}

},{"../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"du81D":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "component", ()=>component);
var NAMESPACE = "ais";
var component = function component(componentName) {
    return function() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, descendantName = _ref.descendantName, modifierName = _ref.modifierName;
        var descendent = descendantName ? "-".concat(descendantName) : "";
        var modifier = modifierName ? "--".concat(modifierName) : "";
        return "".concat(NAMESPACE, "-").concat(componentName).concat(descendent).concat(modifier);
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lMCRi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../lib/utils");
var _escapeHighlight = require("../lib/escape-highlight");
var _suit = require("../lib/suit");
var suit = (0, _suit.component)("Snippet");
function snippet(_ref) {
    var attribute = _ref.attribute, _ref$highlightedTagNa = _ref.highlightedTagName, highlightedTagName = _ref$highlightedTagNa === void 0 ? "mark" : _ref$highlightedTagNa, hit = _ref.hit, _ref$cssClasses = _ref.cssClasses, cssClasses = _ref$cssClasses === void 0 ? {} : _ref$cssClasses;
    var _ref2 = (0, _utils.getPropertyByPath)(hit._snippetResult, attribute) || {}, _ref2$value = _ref2.value, attributeValue = _ref2$value === void 0 ? "" : _ref2$value; // cx is not used, since it would be bundled as a dependency for Vue & Angular
    var className = suit({
        descendantName: "highlighted"
    }) + (cssClasses.highlighted ? " ".concat(cssClasses.highlighted) : "");
    return attributeValue.replace(new RegExp((0, _escapeHighlight.TAG_REPLACEMENT).highlightPreTag, "g"), "<".concat(highlightedTagName, ' class="').concat(className, '">')).replace(new RegExp((0, _escapeHighlight.TAG_REPLACEMENT).highlightPostTag, "g"), "</".concat(highlightedTagName, ">"));
}
exports.default = snippet;

},{"../lib/utils":"etVYs","../lib/escape-highlight":"eW92d","../lib/suit":"du81D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2EZr9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "readDataAttributes", ()=>readDataAttributes);
parcelHelpers.export(exports, "hasDataAttributes", ()=>hasDataAttributes);
parcelHelpers.export(exports, "writeDataAttributes", ()=>writeDataAttributes);
var _utils = require("../lib/utils");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function readDataAttributes(domElement) {
    var method = domElement.getAttribute("data-insights-method");
    var serializedPayload = domElement.getAttribute("data-insights-payload");
    if (typeof serializedPayload !== "string") throw new Error("The insights helper expects `data-insights-payload` to be a base64-encoded JSON string.");
    try {
        var payload = JSON.parse(atob(serializedPayload));
        return {
            method: method,
            payload: payload
        };
    } catch (error) {
        throw new Error("The insights helper was unable to parse `data-insights-payload`.");
    }
}
function hasDataAttributes(domElement) {
    return domElement.hasAttribute("data-insights-method");
}
function writeDataAttributes(_ref) {
    var method = _ref.method, payload = _ref.payload;
    if (_typeof(payload) !== "object") throw new Error("The insights helper expects the payload to be an object.");
    var serializedPayload;
    try {
        serializedPayload = btoa(JSON.stringify(payload));
    } catch (error) {
        throw new Error("Could not JSON serialize the payload object.");
    }
    return 'data-insights-method="'.concat(method, '" data-insights-payload="').concat(serializedPayload, '"');
}
function insights(method, payload) {
    (0, _utils.warning)(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return writeDataAttributes({
        method: method,
        payload: payload
    });
}
exports.default = insights;

},{"../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cRBQf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ANONYMOUS_TOKEN_COOKIE_KEY", ()=>ANONYMOUS_TOKEN_COOKIE_KEY);
parcelHelpers.export(exports, "getInsightsAnonymousUserTokenInternal", ()=>getInsightsAnonymousUserTokenInternal);
var _utils = require("../lib/utils");
var ANONYMOUS_TOKEN_COOKIE_KEY = "_ALGOLIA";
function getCookie(name) {
    var prefix = "".concat(name, "=");
    var cookies = document.cookie.split(";");
    for(var i = 0; i < cookies.length; i++){
        var cookie = cookies[i];
        while(cookie.charAt(0) === " ")cookie = cookie.substring(1);
        if (cookie.indexOf(prefix) === 0) return cookie.substring(prefix.length, cookie.length);
    }
    return undefined;
}
function getInsightsAnonymousUserTokenInternal() {
    return getCookie(ANONYMOUS_TOKEN_COOKIE_KEY);
}
function getInsightsAnonymousUserToken() {
    (0, _utils.warning)(false, "`getInsightsAnonymousUserToken` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
    return getInsightsAnonymousUserTokenInternal();
}
exports.default = getInsightsAnonymousUserToken;

},{"../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4mKEu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRouterMiddleware", ()=>createRouterMiddleware);
var _simple = require("../lib/stateMappings/simple");
var _simpleDefault = parcelHelpers.interopDefault(_simple);
var _history = require("../lib/routers/history");
var _historyDefault = parcelHelpers.interopDefault(_history);
var _utils = require("../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var walk = function walk1(current, callback) {
    callback(current);
    current.getWidgets().filter(function(widget) {
        return widget.$$type === "ais.index";
    }).forEach(function(innerIndex) {
        walk1(innerIndex, callback);
    });
};
var createRouterMiddleware = function createRouterMiddleware() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _props$router = props.router, router = _props$router === void 0 ? (0, _historyDefault.default)() : _props$router, _props$stateMapping = props.stateMapping, stateMapping = _props$stateMapping === void 0 ? (0, _simpleDefault.default)() : _props$stateMapping;
    return function(_ref) {
        var instantSearchInstance = _ref.instantSearchInstance;
        function topLevelCreateURL(nextState) {
            var uiState = Object.keys(nextState).reduce(function(acc, indexId) {
                return _objectSpread({}, acc, _defineProperty({}, indexId, nextState[indexId]));
            }, instantSearchInstance.mainIndex.getWidgetUiState({}));
            var route = stateMapping.stateToRoute(uiState);
            return router.createURL(route);
        }
        instantSearchInstance._createURL = topLevelCreateURL;
        instantSearchInstance._initialUiState = _objectSpread({}, instantSearchInstance._initialUiState, {}, stateMapping.routeToState(router.read()));
        var lastRouteState = undefined;
        return {
            onStateChange: function onStateChange(_ref2) {
                var uiState = _ref2.uiState;
                var routeState = stateMapping.stateToRoute(uiState);
                if (lastRouteState === undefined || !(0, _utils.isEqual)(lastRouteState, routeState)) {
                    router.write(routeState);
                    lastRouteState = routeState;
                }
            },
            subscribe: function subscribe() {
                router.onUpdate(function(route) {
                    var uiState = stateMapping.routeToState(route);
                    walk(instantSearchInstance.mainIndex, function(current) {
                        var widgets = current.getWidgets();
                        var indexUiState = uiState[current.getIndexId()] || {};
                        var searchParameters = widgets.reduce(function(parameters, widget) {
                            if (!widget.getWidgetSearchParameters) return parameters;
                            return widget.getWidgetSearchParameters(parameters, {
                                uiState: indexUiState
                            });
                        }, current.getHelper().state);
                        current.getHelper().overrideStateWithoutTriggeringChangeEvent(searchParameters);
                        instantSearchInstance.scheduleSearch();
                    });
                });
            },
            unsubscribe: function unsubscribe() {
                router.dispose();
            }
        };
    };
};

},{"../lib/stateMappings/simple":"7Ci0f","../lib/routers/history":"haLSt","../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Ci0f":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getIndexStateWithoutConfigure(uiState) {
    var configure = uiState.configure, trackedUiState = _objectWithoutProperties(uiState, [
        "configure"
    ]);
    return trackedUiState;
} // technically a URL could contain any key, since users provide it,
function simpleStateMapping() {
    return {
        stateToRoute: function stateToRoute(uiState) {
            return Object.keys(uiState).reduce(function(state, indexId) {
                return _objectSpread({}, state, _defineProperty({}, indexId, getIndexStateWithoutConfigure(uiState[indexId])));
            }, {});
        },
        routeToState: function routeToState() {
            var routeState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            return Object.keys(routeState).reduce(function(state, indexId) {
                return _objectSpread({}, state, _defineProperty({}, indexId, getIndexStateWithoutConfigure(routeState[indexId])));
            }, {});
        }
    };
}
exports.default = simpleStateMapping;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"haLSt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _qs = require("qs");
var _qsDefault = parcelHelpers.interopDefault(_qs);
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var defaultCreateURL = function defaultCreateURL(_ref) {
    var qsModule = _ref.qsModule, routeState = _ref.routeState, location = _ref.location;
    var protocol = location.protocol, hostname = location.hostname, _location$port = location.port, port = _location$port === void 0 ? "" : _location$port, pathname = location.pathname, hash = location.hash;
    var queryString = qsModule.stringify(routeState);
    var portWithPrefix = port === "" ? "" : ":".concat(port); // IE <= 11 has no proper `location.origin` so we cannot rely on it.
    if (!queryString) return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname).concat(hash);
    return "".concat(protocol, "//").concat(hostname).concat(portWithPrefix).concat(pathname, "?").concat(queryString).concat(hash);
};
var defaultParseURL = function defaultParseURL(_ref2) {
    var qsModule = _ref2.qsModule, location = _ref2.location;
    // `qs` by default converts arrays with more than 20 items to an object.
    // We want to avoid this because the data structure manipulated can therefore vary.
    // Setting the limit to `100` seems a good number because the engine's default is 100
    // (it can go up to 1000 but it is very unlikely to select more than 100 items in the UI).
    //
    // Using an `arrayLimit` of `n` allows `n + 1` items.
    //
    // See:
    //   - https://github.com/ljharb/qs#parsing-arrays
    //   - https://www.algolia.com/doc/api-reference/api-parameters/maxValuesPerFacet/
    return qsModule.parse(location.search.slice(1), {
        arrayLimit: 99
    });
};
var setWindowTitle = function setWindowTitle(title) {
    if (title) window.document.title = title;
};
var BrowserHistory = /*#__PURE__*/ function() {
    /**
   * Initializes a new storage provider that syncs the search state to the URL
   * using web APIs (`window.location.pushState` and `onpopstate` event).
   */ function BrowserHistory1() {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, windowTitle = _ref3.windowTitle, _ref3$writeDelay = _ref3.writeDelay, writeDelay = _ref3$writeDelay === void 0 ? 400 : _ref3$writeDelay, _ref3$createURL = _ref3.createURL, createURL = _ref3$createURL === void 0 ? defaultCreateURL : _ref3$createURL, _ref3$parseURL = _ref3.parseURL, parseURL = _ref3$parseURL === void 0 ? defaultParseURL : _ref3$parseURL;
        _classCallCheck(this, BrowserHistory1);
        _defineProperty(this, "windowTitle", void 0);
        _defineProperty(this, "writeDelay", void 0);
        _defineProperty(this, "_createURL", void 0);
        _defineProperty(this, "parseURL", void 0);
        _defineProperty(this, "writeTimer", void 0);
        this.windowTitle = windowTitle;
        this.writeTimer = undefined;
        this.writeDelay = writeDelay;
        this._createURL = createURL;
        this.parseURL = parseURL;
        var title = this.windowTitle && this.windowTitle(this.read());
        setWindowTitle(title);
    }
    /**
   * Reads the URL and returns a syncable UI search state.
   */ _createClass(BrowserHistory1, [
        {
            key: "read",
            value: function read() {
                return this.parseURL({
                    qsModule: (0, _qsDefault.default),
                    location: window.location
                });
            }
        },
        {
            key: "write",
            value: function write(routeState) {
                var _this = this;
                var url = this.createURL(routeState);
                var title = this.windowTitle && this.windowTitle(routeState);
                if (this.writeTimer) window.clearTimeout(this.writeTimer);
                this.writeTimer = window.setTimeout(function() {
                    setWindowTitle(title);
                    window.history.pushState(routeState, title || "", url);
                    _this.writeTimer = undefined;
                }, this.writeDelay);
            }
        },
        {
            key: "onUpdate",
            value: function onUpdate(callback) {
                var _this2 = this;
                this._onPopState = function(event) {
                    if (_this2.writeTimer) {
                        window.clearTimeout(_this2.writeTimer);
                        _this2.writeTimer = undefined;
                    }
                    var routeState = event.state; // At initial load, the state is read from the URL without update.
                    // Therefore the state object is not available.
                    // In this case, we fallback and read the URL.
                    if (!routeState) callback(_this2.read());
                    else callback(routeState);
                };
                window.addEventListener("popstate", this._onPopState);
            }
        },
        {
            key: "createURL",
            value: function createURL(routeState) {
                return this._createURL({
                    qsModule: (0, _qsDefault.default),
                    routeState: routeState,
                    location: window.location
                });
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                if (this._onPopState) window.removeEventListener("popstate", this._onPopState);
                if (this.writeTimer) window.clearTimeout(this.writeTimer);
                this.write({});
            }
        }
    ]);
    return BrowserHistory1;
}();
exports.default = function(props) {
    return new BrowserHistory(props);
};

},{"qs":"kW4GH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kW4GH":[function(require,module,exports) {
"use strict";
var stringify = require("./stringify");
var parse = require("./parse");
var formats = require("./formats");
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};

},{"./stringify":"aJuQi","./parse":"fSZqi","./formats":"d7Ogf"}],"aJuQi":[function(require,module,exports) {
"use strict";
var utils = require("./utils");
var formats = require("./formats");
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats["default"];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var stringify = function stringify1(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset) {
    var obj = object;
    if (typeof filter === "function") obj = filter(prefix, obj);
    else if (obj instanceof Date) obj = serializeDate(obj);
    else if (generateArrayPrefix === "comma" && isArray(obj)) obj = utils.maybeMap(obj, function(value) {
        if (value instanceof Date) return serializeDate(value);
        return value;
    }).join(",");
    if (obj === null) {
        if (strictNullHandling) return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key") : prefix;
        obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key");
            return [
                formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value"))
            ];
        }
        return [
            formatter(prefix) + "=" + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === "undefined") return values;
    var objKeys;
    if (isArray(filter)) objKeys = filter;
    else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        var value1 = obj[key];
        if (skipNulls && value1 === null) continue;
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
        pushToArray(values, stringify1(value1, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, formatter, encodeValuesOnly, charset));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) return defaults;
    if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== "function") throw new TypeError("Encoder has to be a function.");
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var format = formats["default"];
    if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) throw new TypeError("Unknown format option provided.");
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) filter = opts.filter;
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) return "";
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) arrayFormat = opts.arrayFormat;
    else if (opts && "indices" in opts) arrayFormat = opts.indices ? "indices" : "repeat";
    else arrayFormat = "indices";
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (!objKeys) objKeys = Object.keys(obj);
    if (options.sort) objKeys.sort(options.sort);
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) continue;
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.formatter, options.encodeValuesOnly, options.charset));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
        prefix += "utf8=%26%2310003%3B&";
        else // encodeURIComponent('✓')
        prefix += "utf8=%E2%9C%93&";
    }
    return joined.length > 0 ? prefix + joined : "";
};

},{"./utils":"chmkc","./formats":"d7Ogf"}],"chmkc":[function(require,module,exports) {
"use strict";
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i)array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j)if (typeof obj[j] !== "undefined") compacted.push(obj[j]);
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i)if (typeof source[i] !== "undefined") obj[i] = source[i];
    return obj;
};
var merge = function merge1(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) return target;
    if (typeof source !== "object") {
        if (isArray(target)) target.push(source);
        else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) target[source] = true;
        } else return [
            target,
            source
        ];
        return target;
    }
    if (!target || typeof target !== "object") return [
        target
    ].concat(source);
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) mergeTarget = arrayToObject(target, options);
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") target[i] = merge1(targetItem, item, options);
                else target.push(item);
            } else target[i] = item;
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) acc[key] = merge1(acc[key], value, options);
        else acc[key] = value;
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") // unescape never throws, no try...catch needed:
    return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) return str;
    var string = str;
    if (typeof str === "symbol") string = Symbol.prototype.toString.call(str);
    else if (typeof str !== "string") string = String(str);
    if (charset === "iso-8859-1") return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
        return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
    });
    var out = "";
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 0x2D // -
         || c === 0x2E // .
         || c === 0x5F // _
         || c === 0x7E // ~
         || c >= 0x30 && c <= 0x39 // 0-9
         || c >= 0x41 && c <= 0x5A // a-z
         || c >= 0x61 && c <= 0x7A // A-Z
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: "o"
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== "object") return false;
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1)mapped.push(fn(val[i]));
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};

},{}],"d7Ogf":[function(require,module,exports) {
"use strict";
var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var util = require("./utils");
var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
module.exports = util.assign({
    "default": Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
            return String(value);
        }
    }
}, Format);

},{"./utils":"chmkc"}],"fSZqi":[function(require,module,exports) {
"use strict";
var utils = require("./utils");
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) return val.split(",");
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = "utf8=%26%2310003%3B"; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = "utf8=%E2%9C%93"; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i)if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) charset = "utf-8";
            else if (parts[i] === isoSentinel) charset = "iso-8859-1";
            skipIndex = i;
            i = parts.length; // The eslint settings do not allow break;
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) continue;
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") val = interpretNumericEntities(val);
        if (part.indexOf("[]=") > -1) val = isArray(val) ? [
            val
        ] : val;
        if (has.call(obj, key)) obj[key] = utils.combine(obj[key], val);
        else obj[key] = val;
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) obj = [].concat(leaf);
        else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") obj = {
                0: leaf
            };
            else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else obj[cleanRoot] = leaf;
        }
        leaf = obj; // eslint-disable-line no-param-reassign
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) return;
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) return;
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) return;
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) keys.push("[" + key.slice(segment.index) + "]");
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) return defaults;
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== "function") throw new TypeError("Decoder has to be a function.");
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") return options.plainObjects ? Object.create(null) : {};
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
    }
    return utils.compact(obj);
};

},{"./utils":"chmkc"}],"co24K":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createInfiniteHitsSessionStorageCache", ()=>(0, _sessionStorageDefault.default));
var _sessionStorage = require("./sessionStorage");
var _sessionStorageDefault = parcelHelpers.interopDefault(_sessionStorage);

},{"./sessionStorage":"gzyTs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzyTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../utils");
function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
function getStateWithoutPage(state) {
    var _ref = state || {}, page = _ref.page, rest = _objectWithoutProperties(_ref, [
        "page"
    ]);
    return rest;
}
var KEY = "ais.infiniteHits";
function hasSessionStorage() {
    return typeof window !== "undefined" && typeof window.sessionStorage !== "undefined";
}
function createInfiniteHitsSessionStorageCache() {
    return {
        read: function read(_ref2) {
            var state = _ref2.state;
            if (!hasSessionStorage()) return null;
            try {
                var cache = JSON.parse(window.sessionStorage.getItem(KEY));
                return cache && (0, _utils.isEqual)(cache.state, getStateWithoutPage(state)) ? cache.hits : null;
            } catch (error) {
                if (error instanceof SyntaxError) try {
                    window.sessionStorage.removeItem(KEY);
                } catch (err) {}
                return null;
            }
        },
        write: function write(_ref3) {
            var state = _ref3.state, hits = _ref3.hits;
            if (!hasSessionStorage()) return;
            try {
                window.sessionStorage.setItem(KEY, JSON.stringify({
                    state: getStateWithoutPage(state),
                    hits: hits
                }));
            } catch (error) {}
        }
    };
}
exports.default = createInfiniteHitsSessionStorageCache;

},{"../utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bk5Jd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clearRefinements", ()=>(0, _clearRefinementsDefault.default));
parcelHelpers.export(exports, "configure", ()=>(0, _configureDefault.default));
parcelHelpers.export(exports, "EXPERIMENTAL_configureRelatedItems", ()=>(0, _configureRelatedItemsDefault.default));
parcelHelpers.export(exports, "currentRefinements", ()=>(0, _currentRefinementsDefault.default));
parcelHelpers.export(exports, "geoSearch", ()=>(0, _geoSearchDefault.default));
parcelHelpers.export(exports, "hierarchicalMenu", ()=>(0, _hierarchicalMenuDefault.default));
parcelHelpers.export(exports, "hits", ()=>(0, _hitsDefault.default));
parcelHelpers.export(exports, "hitsPerPage", ()=>(0, _hitsPerPageDefault.default));
parcelHelpers.export(exports, "infiniteHits", ()=>(0, _infiniteHitsDefault.default));
parcelHelpers.export(exports, "menu", ()=>(0, _menuDefault.default));
parcelHelpers.export(exports, "refinementList", ()=>(0, _refinementListDefault.default));
parcelHelpers.export(exports, "numericMenu", ()=>(0, _numericMenuDefault.default));
parcelHelpers.export(exports, "pagination", ()=>(0, _paginationDefault.default));
parcelHelpers.export(exports, "rangeInput", ()=>(0, _rangeInputDefault.default));
parcelHelpers.export(exports, "searchBox", ()=>(0, _searchBoxDefault.default));
parcelHelpers.export(exports, "rangeSlider", ()=>(0, _rangeSliderDefault.default));
parcelHelpers.export(exports, "sortBy", ()=>(0, _sortByDefault.default));
parcelHelpers.export(exports, "ratingMenu", ()=>(0, _ratingMenuDefault.default));
parcelHelpers.export(exports, "stats", ()=>(0, _statsDefault.default));
parcelHelpers.export(exports, "toggleRefinement", ()=>(0, _toggleRefinementDefault.default));
parcelHelpers.export(exports, "analytics", ()=>(0, _analyticsDefault.default));
parcelHelpers.export(exports, "breadcrumb", ()=>(0, _breadcrumbDefault.default));
parcelHelpers.export(exports, "menuSelect", ()=>(0, _menuSelectDefault.default));
parcelHelpers.export(exports, "poweredBy", ()=>(0, _poweredByDefault.default));
parcelHelpers.export(exports, "panel", ()=>(0, _panelDefault.default));
parcelHelpers.export(exports, "voiceSearch", ()=>(0, _voiceSearchDefault.default));
parcelHelpers.export(exports, "queryRuleCustomData", ()=>(0, _queryRuleCustomDataDefault.default));
parcelHelpers.export(exports, "queryRuleContext", ()=>(0, _queryRuleContextDefault.default));
parcelHelpers.export(exports, "index", ()=>(0, _indexDefault.default));
parcelHelpers.export(exports, "places", ()=>(0, _placesDefault.default));
var _clearRefinements = require("./clear-refinements/clear-refinements");
var _clearRefinementsDefault = parcelHelpers.interopDefault(_clearRefinements);
var _configure = require("./configure/configure");
var _configureDefault = parcelHelpers.interopDefault(_configure);
var _configureRelatedItems = require("./configure-related-items/configure-related-items");
var _configureRelatedItemsDefault = parcelHelpers.interopDefault(_configureRelatedItems);
var _currentRefinements = require("./current-refinements/current-refinements");
var _currentRefinementsDefault = parcelHelpers.interopDefault(_currentRefinements);
var _geoSearch = require("./geo-search/geo-search");
var _geoSearchDefault = parcelHelpers.interopDefault(_geoSearch);
var _hierarchicalMenu = require("./hierarchical-menu/hierarchical-menu");
var _hierarchicalMenuDefault = parcelHelpers.interopDefault(_hierarchicalMenu);
var _hits = require("./hits/hits");
var _hitsDefault = parcelHelpers.interopDefault(_hits);
var _hitsPerPage = require("./hits-per-page/hits-per-page");
var _hitsPerPageDefault = parcelHelpers.interopDefault(_hitsPerPage);
var _infiniteHits = require("./infinite-hits/infinite-hits");
var _infiniteHitsDefault = parcelHelpers.interopDefault(_infiniteHits);
var _menu = require("./menu/menu");
var _menuDefault = parcelHelpers.interopDefault(_menu);
var _refinementList = require("./refinement-list/refinement-list");
var _refinementListDefault = parcelHelpers.interopDefault(_refinementList);
var _numericMenu = require("./numeric-menu/numeric-menu");
var _numericMenuDefault = parcelHelpers.interopDefault(_numericMenu);
var _pagination = require("./pagination/pagination");
var _paginationDefault = parcelHelpers.interopDefault(_pagination);
var _rangeInput = require("./range-input/range-input");
var _rangeInputDefault = parcelHelpers.interopDefault(_rangeInput);
var _searchBox = require("./search-box/search-box");
var _searchBoxDefault = parcelHelpers.interopDefault(_searchBox);
var _rangeSlider = require("./range-slider/range-slider");
var _rangeSliderDefault = parcelHelpers.interopDefault(_rangeSlider);
var _sortBy = require("./sort-by/sort-by");
var _sortByDefault = parcelHelpers.interopDefault(_sortBy);
var _ratingMenu = require("./rating-menu/rating-menu");
var _ratingMenuDefault = parcelHelpers.interopDefault(_ratingMenu);
var _stats = require("./stats/stats");
var _statsDefault = parcelHelpers.interopDefault(_stats);
var _toggleRefinement = require("./toggle-refinement/toggle-refinement");
var _toggleRefinementDefault = parcelHelpers.interopDefault(_toggleRefinement);
var _analytics = require("./analytics/analytics");
var _analyticsDefault = parcelHelpers.interopDefault(_analytics);
var _breadcrumb = require("./breadcrumb/breadcrumb");
var _breadcrumbDefault = parcelHelpers.interopDefault(_breadcrumb);
var _menuSelect = require("./menu-select/menu-select");
var _menuSelectDefault = parcelHelpers.interopDefault(_menuSelect);
var _poweredBy = require("./powered-by/powered-by");
var _poweredByDefault = parcelHelpers.interopDefault(_poweredBy);
var _panel = require("./panel/panel");
var _panelDefault = parcelHelpers.interopDefault(_panel);
var _voiceSearch = require("./voice-search/voice-search");
var _voiceSearchDefault = parcelHelpers.interopDefault(_voiceSearch);
var _queryRuleCustomData = require("./query-rule-custom-data/query-rule-custom-data");
var _queryRuleCustomDataDefault = parcelHelpers.interopDefault(_queryRuleCustomData);
var _queryRuleContext = require("./query-rule-context/query-rule-context");
var _queryRuleContextDefault = parcelHelpers.interopDefault(_queryRuleContext);
var _index = require("./index/index");
var _indexDefault = parcelHelpers.interopDefault(_index);
var _places = require("./places/places");
var _placesDefault = parcelHelpers.interopDefault(_places);

},{"./clear-refinements/clear-refinements":false,"./configure/configure":"gLYAR","./configure-related-items/configure-related-items":false,"./current-refinements/current-refinements":false,"./geo-search/geo-search":false,"./hierarchical-menu/hierarchical-menu":false,"./hits/hits":"bPDYG","./hits-per-page/hits-per-page":false,"./infinite-hits/infinite-hits":false,"./menu/menu":false,"./refinement-list/refinement-list":false,"./numeric-menu/numeric-menu":false,"./pagination/pagination":false,"./range-input/range-input":false,"./search-box/search-box":"jSd18","./range-slider/range-slider":false,"./sort-by/sort-by":false,"./rating-menu/rating-menu":false,"./stats/stats":false,"./toggle-refinement/toggle-refinement":false,"./analytics/analytics":false,"./breadcrumb/breadcrumb":false,"./menu-select/menu-select":false,"./powered-by/powered-by":false,"./panel/panel":false,"./voice-search/voice-search":false,"./query-rule-custom-data/query-rule-custom-data":false,"./query-rule-context/query-rule-context":false,"./index/index":"kdZTz","./places/places":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gLYAR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _connectConfigure = require("../../connectors/configure/connectConfigure");
var _connectConfigureDefault = parcelHelpers.interopDefault(_connectConfigure);
var _utils = require("../../lib/utils");
/**
 * A list of [search parameters](https://www.algolia.com/doc/api-reference/search-api-parameters/)
 * to enable when the widget mounts.
 */ var configure = function configure(widgetParams) {
    // This is a renderless widget that falls back to the connector's
    // noop render and unmount functions.
    var makeWidget = (0, _connectConfigureDefault.default)((0, _utils.noop));
    return makeWidget({
        searchParameters: widgetParams
    });
};
exports.default = configure;

},{"../../connectors/configure/connectConfigure":"lvgHS","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lvgHS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _algoliasearchHelper = require("algoliasearch-helper");
var _algoliasearchHelperDefault = parcelHelpers.interopDefault(_algoliasearchHelper);
var _utils = require("../../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
/**
 * Refine the given search parameters.
 */ var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: "configure",
    connector: true
});
function getInitialSearchParameters(state, widgetParams) {
    // We leverage the helper internals to remove the `widgetParams` from
    // the state. The function `setQueryParameters` omits the values that
    // are `undefined` on the next state.
    return state.setQueryParameters(Object.keys(widgetParams.searchParameters).reduce(function(acc, key) {
        return _objectSpread({}, acc, _defineProperty({}, key, undefined));
    }, {}));
}
var connectConfigure = function connectConfigure() {
    var renderFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _utils.noop);
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utils.noop);
    return function(widgetParams) {
        if (!widgetParams || !(0, _utils.isPlainObject)(widgetParams.searchParameters)) throw new Error(withUsage("The `searchParameters` option expects an object."));
        var connectorState = {};
        function refine(helper) {
            return function(searchParameters) {
                // Merge new `searchParameters` with the ones set from other widgets
                var actualState = getInitialSearchParameters(helper.state, widgetParams);
                var nextSearchParameters = (0, _utils.mergeSearchParameters)(actualState, new (0, _algoliasearchHelperDefault.default).SearchParameters(searchParameters)); // Update original `widgetParams.searchParameters` to the new refined one
                widgetParams.searchParameters = searchParameters; // Trigger a search with the resolved search parameters
                helper.setState(nextSearchParameters).search();
            };
        }
        return {
            $$type: "ais.configure",
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_objectSpread({}, this.getWidgetRenderState(initOptions), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_objectSpread({}, this.getWidgetRenderState(renderOptions), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref) {
                var state = _ref.state;
                unmountFn();
                return getInitialSearchParameters(state, widgetParams);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                var _renderState$configur;
                var widgetRenderState = this.getWidgetRenderState(renderOptions);
                return _objectSpread({}, renderState, {
                    configure: _objectSpread({}, widgetRenderState, {
                        widgetParams: _objectSpread({}, widgetRenderState.widgetParams, {
                            searchParameters: (0, _utils.mergeSearchParameters)(new (0, _algoliasearchHelperDefault.default).SearchParameters((_renderState$configur = renderState.configure) === null || _renderState$configur === void 0 ? void 0 : _renderState$configur.widgetParams.searchParameters), new (0, _algoliasearchHelperDefault.default).SearchParameters(widgetRenderState.widgetParams.searchParameters)).getQueryParams()
                        })
                    })
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref2) {
                var helper = _ref2.helper;
                if (!connectorState.refine) connectorState.refine = refine(helper);
                return {
                    refine: connectorState.refine,
                    widgetParams: widgetParams
                };
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state, _ref3) {
                var uiState = _ref3.uiState;
                return (0, _utils.mergeSearchParameters)(state, new (0, _algoliasearchHelperDefault.default).SearchParameters(_objectSpread({}, uiState.configure, {}, widgetParams.searchParameters)));
            },
            getWidgetUiState: function getWidgetUiState(uiState) {
                return _objectSpread({}, uiState, {
                    configure: _objectSpread({}, uiState.configure, {}, widgetParams.searchParameters)
                });
            }
        };
    };
};
exports.default = connectConfigure;

},{"algoliasearch-helper":"jGqjt","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPDYG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _connectHits = require("../../connectors/hits/connectHits");
var _connectHitsDefault = parcelHelpers.interopDefault(_connectHits);
var _hits = require("../../components/Hits/Hits");
var _hitsDefault = parcelHelpers.interopDefault(_hits);
var _defaultTemplates = require("./defaultTemplates");
var _defaultTemplatesDefault = parcelHelpers.interopDefault(_defaultTemplates);
var _utils = require("../../lib/utils");
var _suit = require("../../lib/suit");
var _insights = require("../../lib/insights");
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: "hits"
});
var suit = (0, _suit.component)("Hits");
var HitsWithInsightsListener = (0, _insights.withInsightsListener)((0, _hitsDefault.default));
var renderer = function renderer(_ref) {
    var renderState = _ref.renderState, cssClasses = _ref.cssClasses, containerNode = _ref.containerNode, templates = _ref.templates;
    return function(_ref2, isFirstRendering) {
        var receivedHits = _ref2.hits, results = _ref2.results, instantSearchInstance = _ref2.instantSearchInstance, insights = _ref2.insights, bindEvent = _ref2.bindEvent;
        if (isFirstRendering) {
            renderState.templateProps = (0, _utils.prepareTemplateProps)({
                defaultTemplates: (0, _defaultTemplatesDefault.default),
                templatesConfig: instantSearchInstance.templatesConfig,
                templates: templates
            });
            return;
        }
        (0, _preact.render)((0, _preact.h)(HitsWithInsightsListener, {
            cssClasses: cssClasses,
            hits: receivedHits,
            results: results,
            templateProps: renderState.templateProps,
            insights: insights,
            sendEvent: function sendEvent(event) {
                instantSearchInstance.sendEventToInsights(event);
            },
            bindEvent: bindEvent
        }), containerNode);
    };
};
var hits = function hits(widgetOptions) {
    var _ref3 = widgetOptions || {}, container = _ref3.container, escapeHTML = _ref3.escapeHTML, transformItems = _ref3.transformItems, _ref3$templates = _ref3.templates, templates = _ref3$templates === void 0 ? (0, _defaultTemplatesDefault.default) : _ref3$templates, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses;
    if (!container) throw new Error(withUsage("The `container` option is required."));
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _classnamesDefault.default)(suit(), userCssClasses.root),
        emptyRoot: (0, _classnamesDefault.default)(suit({
            modifierName: "empty"
        }), userCssClasses.emptyRoot),
        list: (0, _classnamesDefault.default)(suit({
            descendantName: "list"
        }), userCssClasses.list),
        item: (0, _classnamesDefault.default)(suit({
            descendantName: "item"
        }), userCssClasses.item)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        renderState: {},
        templates: templates
    });
    var makeHits = (0, _insights.withInsights)((0, _connectHitsDefault.default))(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return makeHits({
        escapeHTML: escapeHTML,
        transformItems: transformItems
    });
};
exports.default = hits;

},{"preact":"26zcy","classnames":"jocGM","../../connectors/hits/connectHits":"b5DNx","../../components/Hits/Hits":"as3BB","./defaultTemplates":"fxjDh","../../lib/utils":"etVYs","../../lib/suit":"du81D","../../lib/insights":"hnOzt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26zcy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "render", ()=>O);
parcelHelpers.export(exports, "hydrate", ()=>S);
parcelHelpers.export(exports, "createElement", ()=>v);
parcelHelpers.export(exports, "h", ()=>v);
parcelHelpers.export(exports, "Fragment", ()=>p);
parcelHelpers.export(exports, "createRef", ()=>y);
parcelHelpers.export(exports, "isValidElement", ()=>l);
parcelHelpers.export(exports, "Component", ()=>d);
parcelHelpers.export(exports, "cloneElement", ()=>q);
parcelHelpers.export(exports, "createContext", ()=>B);
parcelHelpers.export(exports, "toChildArray", ()=>b);
parcelHelpers.export(exports, "__u", ()=>L);
parcelHelpers.export(exports, "options", ()=>n);
var n, l, u, i, t, o, r, f = {}, e = [], c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function s(n1, l1) {
    for(var u1 in l1)n1[u1] = l1[u1];
    return n1;
}
function a(n2) {
    var l2 = n2.parentNode;
    l2 && l2.removeChild(n2);
}
function v(n3, l3, u2) {
    var i1, t1, o1, r1 = arguments, f1 = {};
    for(o1 in l3)"key" == o1 ? i1 = l3[o1] : "ref" == o1 ? t1 = l3[o1] : f1[o1] = l3[o1];
    if (arguments.length > 3) for(u2 = [
        u2
    ], o1 = 3; o1 < arguments.length; o1++)u2.push(r1[o1]);
    if (null != u2 && (f1.children = u2), "function" == typeof n3 && null != n3.defaultProps) for(o1 in n3.defaultProps)void 0 === f1[o1] && (f1[o1] = n3.defaultProps[o1]);
    return h(n3, f1, i1, t1, null);
}
function h(l4, u3, i2, t2, o2) {
    var r2 = {
        type: l4,
        props: u3,
        key: i2,
        ref: t2,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == o2 ? ++n.__v : o2
    };
    return null != n.vnode && n.vnode(r2), r2;
}
function y() {
    return {
        current: null
    };
}
function p(n4) {
    return n4.children;
}
function d(n5, l5) {
    this.props = n5, this.context = l5;
}
function _(n6, l6) {
    if (null == l6) return n6.__ ? _(n6.__, n6.__.__k.indexOf(n6) + 1) : null;
    for(var u4; l6 < n6.__k.length; l6++)if (null != (u4 = n6.__k[l6]) && null != u4.__e) return u4.__e;
    return "function" == typeof n6.type ? _(n6) : null;
}
function w(n7) {
    var l7, u5;
    if (null != (n7 = n7.__) && null != n7.__c) {
        for(n7.__e = n7.__c.base = null, l7 = 0; l7 < n7.__k.length; l7++)if (null != (u5 = n7.__k[l7]) && null != u5.__e) {
            n7.__e = n7.__c.base = u5.__e;
            break;
        }
        return w(n7);
    }
}
function k(l8) {
    (!l8.__d && (l8.__d = !0) && u.push(l8) && !g.__r++ || t !== n.debounceRendering) && ((t = n.debounceRendering) || i)(g);
}
function g() {
    for(var n8; g.__r = u.length;)n8 = u.sort(function(n9, l9) {
        return n9.__v.__b - l9.__v.__b;
    }), u = [], n8.some(function(n10) {
        var l10, u6, i3, t3, o3, r3, f2;
        n10.__d && (r3 = (o3 = (l10 = n10).__v).__e, (f2 = l10.__P) && (u6 = [], (i3 = s({}, o3)).__v = o3.__v + 1, t3 = $(f2, o3, i3, l10.__n, void 0 !== f2.ownerSVGElement, null != o3.__h ? [
            r3
        ] : null, u6, null == r3 ? _(o3) : r3, o3.__h), j(u6, o3), t3 != r3 && w(o3)));
    });
}
function m(n11, l11, u7, i4, t4, o4, r4, c1, s1, v1) {
    var y1, d1, w1, k1, g1, m1, b1, A1 = i4 && i4.__k || e, P1 = A1.length;
    for(s1 == f && (s1 = null != r4 ? r4[0] : P1 ? _(i4, 0) : null), u7.__k = [], y1 = 0; y1 < l11.length; y1++)if (null != (k1 = u7.__k[y1] = null == (k1 = l11[y1]) || "boolean" == typeof k1 ? null : "string" == typeof k1 || "number" == typeof k1 ? h(null, k1, null, null, k1) : Array.isArray(k1) ? h(p, {
        children: k1
    }, null, null, null) : null != k1.__e || null != k1.__c ? h(k1.type, k1.props, k1.key, null, k1.__v) : k1)) {
        if (k1.__ = u7, k1.__b = u7.__b + 1, null === (w1 = A1[y1]) || w1 && k1.key == w1.key && k1.type === w1.type) A1[y1] = void 0;
        else for(d1 = 0; d1 < P1; d1++){
            if ((w1 = A1[d1]) && k1.key == w1.key && k1.type === w1.type) {
                A1[d1] = void 0;
                break;
            }
            w1 = null;
        }
        g1 = $(n11, k1, w1 = w1 || f, t4, o4, r4, c1, s1, v1), (d1 = k1.ref) && w1.ref != d1 && (b1 || (b1 = []), w1.ref && b1.push(w1.ref, null, k1), b1.push(d1, k1.__c || g1, k1)), null != g1 ? (null == m1 && (m1 = g1), s1 = x(n11, k1, w1, A1, r4, g1, s1), v1 || "option" != u7.type ? "function" == typeof u7.type && (u7.__d = s1) : n11.value = "") : s1 && w1.__e == s1 && s1.parentNode != n11 && (s1 = _(w1));
    }
    if (u7.__e = m1, null != r4 && "function" != typeof u7.type) for(y1 = r4.length; y1--;)null != r4[y1] && a(r4[y1]);
    for(y1 = P1; y1--;)null != A1[y1] && L(A1[y1], A1[y1]);
    if (b1) for(y1 = 0; y1 < b1.length; y1++)I(b1[y1], b1[++y1], b1[++y1]);
}
function b(n12, l12) {
    return l12 = l12 || [], null == n12 || "boolean" == typeof n12 || (Array.isArray(n12) ? n12.some(function(n13) {
        b(n13, l12);
    }) : l12.push(n12)), l12;
}
function x(n14, l13, u8, i5, t5, o5, r5) {
    var f3, e1, c2;
    if (void 0 !== l13.__d) f3 = l13.__d, l13.__d = void 0;
    else if (t5 == u8 || o5 != r5 || null == o5.parentNode) n: if (null == r5 || r5.parentNode !== n14) n14.appendChild(o5), f3 = null;
    else {
        for(e1 = r5, c2 = 0; (e1 = e1.nextSibling) && c2 < i5.length; c2 += 2)if (e1 == o5) break n;
        n14.insertBefore(o5, r5), f3 = r5;
    }
    return void 0 !== f3 ? f3 : o5.nextSibling;
}
function A(n15, l14, u9, i6, t6) {
    var o6;
    for(o6 in u9)"children" === o6 || "key" === o6 || o6 in l14 || C(n15, o6, null, u9[o6], i6);
    for(o6 in l14)t6 && "function" != typeof l14[o6] || "children" === o6 || "key" === o6 || "value" === o6 || "checked" === o6 || u9[o6] === l14[o6] || C(n15, o6, l14[o6], u9[o6], i6);
}
function P(n16, l15, u10) {
    "-" === l15[0] ? n16.setProperty(l15, u10) : n16[l15] = null == u10 ? "" : "number" != typeof u10 || c.test(l15) ? u10 : u10 + "px";
}
function C(n17, l16, u11, i7, t7) {
    var o7, r6, f4;
    if (t7 && "className" == l16 && (l16 = "class"), "style" === l16) {
        if ("string" == typeof u11) n17.style.cssText = u11;
        else {
            if ("string" == typeof i7 && (n17.style.cssText = i7 = ""), i7) for(l16 in i7)u11 && l16 in u11 || P(n17.style, l16, "");
            if (u11) for(l16 in u11)i7 && u11[l16] === i7[l16] || P(n17.style, l16, u11[l16]);
        }
    } else "o" === l16[0] && "n" === l16[1] ? (o7 = l16 !== (l16 = l16.replace(/Capture$/, "")), (r6 = l16.toLowerCase()) in n17 && (l16 = r6), l16 = l16.slice(2), n17.l || (n17.l = {}), n17.l[l16 + o7] = u11, f4 = o7 ? N : z, u11 ? i7 || n17.addEventListener(l16, f4, o7) : n17.removeEventListener(l16, f4, o7)) : "list" !== l16 && "tagName" !== l16 && "form" !== l16 && "type" !== l16 && "size" !== l16 && "download" !== l16 && "href" !== l16 && !t7 && l16 in n17 ? n17[l16] = null == u11 ? "" : u11 : "function" != typeof u11 && "dangerouslySetInnerHTML" !== l16 && (l16 !== (l16 = l16.replace(/xlink:?/, "")) ? null == u11 || !1 === u11 ? n17.removeAttributeNS("http://www.w3.org/1999/xlink", l16.toLowerCase()) : n17.setAttributeNS("http://www.w3.org/1999/xlink", l16.toLowerCase(), u11) : null == u11 || !1 === u11 && !/^ar/.test(l16) ? n17.removeAttribute(l16) : n17.setAttribute(l16, u11));
}
function z(l17) {
    this.l[l17.type + !1](n.event ? n.event(l17) : l17);
}
function N(l18) {
    this.l[l18.type + !0](n.event ? n.event(l18) : l18);
}
function T(n18, l19, u12) {
    var i8, t8;
    for(i8 = 0; i8 < n18.__k.length; i8++)(t8 = n18.__k[i8]) && (t8.__ = n18, t8.__e && ("function" == typeof t8.type && t8.__k.length > 1 && T(t8, l19, u12), l19 = x(u12, t8, t8, n18.__k, null, t8.__e, l19), "function" == typeof n18.type && (n18.__d = l19)));
}
function $(l20, u13, i9, t9, o8, r7, f5, e2, c3) {
    var a1, v2, h1, y2, _1, w2, k2, g2, b2, x1, A2, P2 = u13.type;
    if (void 0 !== u13.constructor) return null;
    null != i9.__h && (c3 = i9.__h, e2 = u13.__e = i9.__e, u13.__h = null, r7 = [
        e2
    ]), (a1 = n.__b) && a1(u13);
    try {
        n: if ("function" == typeof P2) {
            if (g2 = u13.props, b2 = (a1 = P2.contextType) && t9[a1.__c], x1 = a1 ? b2 ? b2.props.value : a1.__ : t9, i9.__c ? k2 = (v2 = u13.__c = i9.__c).__ = v2.__E : ("prototype" in P2 && P2.prototype.render ? u13.__c = v2 = new P2(g2, x1) : (u13.__c = v2 = new d(g2, x1), v2.constructor = P2, v2.render = M), b2 && b2.sub(v2), v2.props = g2, v2.state || (v2.state = {}), v2.context = x1, v2.__n = t9, h1 = v2.__d = !0, v2.__h = []), null == v2.__s && (v2.__s = v2.state), null != P2.getDerivedStateFromProps && (v2.__s == v2.state && (v2.__s = s({}, v2.__s)), s(v2.__s, P2.getDerivedStateFromProps(g2, v2.__s))), y2 = v2.props, _1 = v2.state, h1) null == P2.getDerivedStateFromProps && null != v2.componentWillMount && v2.componentWillMount(), null != v2.componentDidMount && v2.__h.push(v2.componentDidMount);
            else {
                if (null == P2.getDerivedStateFromProps && g2 !== y2 && null != v2.componentWillReceiveProps && v2.componentWillReceiveProps(g2, x1), !v2.__e && null != v2.shouldComponentUpdate && !1 === v2.shouldComponentUpdate(g2, v2.__s, x1) || u13.__v === i9.__v) {
                    v2.props = g2, v2.state = v2.__s, u13.__v !== i9.__v && (v2.__d = !1), v2.__v = u13, u13.__e = i9.__e, u13.__k = i9.__k, v2.__h.length && f5.push(v2), T(u13, e2, l20);
                    break n;
                }
                null != v2.componentWillUpdate && v2.componentWillUpdate(g2, v2.__s, x1), null != v2.componentDidUpdate && v2.__h.push(function() {
                    v2.componentDidUpdate(y2, _1, w2);
                });
            }
            v2.context = x1, v2.props = g2, v2.state = v2.__s, (a1 = n.__r) && a1(u13), v2.__d = !1, v2.__v = u13, v2.__P = l20, a1 = v2.render(v2.props, v2.state, v2.context), v2.state = v2.__s, null != v2.getChildContext && (t9 = s(s({}, t9), v2.getChildContext())), h1 || null == v2.getSnapshotBeforeUpdate || (w2 = v2.getSnapshotBeforeUpdate(y2, _1)), A2 = null != a1 && a1.type == p && null == a1.key ? a1.props.children : a1, m(l20, Array.isArray(A2) ? A2 : [
                A2
            ], u13, i9, t9, o8, r7, f5, e2, c3), v2.base = u13.__e, u13.__h = null, v2.__h.length && f5.push(v2), k2 && (v2.__E = v2.__ = null), v2.__e = !1;
        } else null == r7 && u13.__v === i9.__v ? (u13.__k = i9.__k, u13.__e = i9.__e) : u13.__e = H(i9.__e, u13, i9, t9, o8, r7, f5, c3);
        (a1 = n.diffed) && a1(u13);
    } catch (l21) {
        u13.__v = null, (c3 || null != r7) && (u13.__e = e2, u13.__h = !!c3, r7[r7.indexOf(e2)] = null), n.__e(l21, u13, i9);
    }
    return u13.__e;
}
function j(l22, u14) {
    n.__c && n.__c(u14, l22), l22.some(function(u15) {
        try {
            l22 = u15.__h, u15.__h = [], l22.some(function(n19) {
                n19.call(u15);
            });
        } catch (l23) {
            n.__e(l23, u15.__v);
        }
    });
}
function H(n20, l24, u16, i10, t10, o9, r8, c4) {
    var s2, a2, v3, h2, y3, p1 = u16.props, d2 = l24.props;
    if (t10 = "svg" === l24.type || t10, null != o9) {
        for(s2 = 0; s2 < o9.length; s2++)if (null != (a2 = o9[s2]) && ((null === l24.type ? 3 === a2.nodeType : a2.localName === l24.type) || n20 == a2)) {
            n20 = a2, o9[s2] = null;
            break;
        }
    }
    if (null == n20) {
        if (null === l24.type) return document.createTextNode(d2);
        n20 = t10 ? document.createElementNS("http://www.w3.org/2000/svg", l24.type) : document.createElement(l24.type, d2.is && {
            is: d2.is
        }), o9 = null, c4 = !1;
    }
    if (null === l24.type) p1 === d2 || c4 && n20.data === d2 || (n20.data = d2);
    else {
        if (null != o9 && (o9 = e.slice.call(n20.childNodes)), v3 = (p1 = u16.props || f).dangerouslySetInnerHTML, h2 = d2.dangerouslySetInnerHTML, !c4) {
            if (null != o9) for(p1 = {}, y3 = 0; y3 < n20.attributes.length; y3++)p1[n20.attributes[y3].name] = n20.attributes[y3].value;
            (h2 || v3) && (h2 && (v3 && h2.__html == v3.__html || h2.__html === n20.innerHTML) || (n20.innerHTML = h2 && h2.__html || ""));
        }
        A(n20, d2, p1, t10, c4), h2 ? l24.__k = [] : (s2 = l24.props.children, m(n20, Array.isArray(s2) ? s2 : [
            s2
        ], l24, u16, i10, "foreignObject" !== l24.type && t10, o9, r8, f, c4)), c4 || ("value" in d2 && void 0 !== (s2 = d2.value) && (s2 !== n20.value || "progress" === l24.type && !s2) && C(n20, "value", s2, p1.value, !1), "checked" in d2 && void 0 !== (s2 = d2.checked) && s2 !== n20.checked && C(n20, "checked", s2, p1.checked, !1));
    }
    return n20;
}
function I(l25, u17, i11) {
    try {
        "function" == typeof l25 ? l25(u17) : l25.current = u17;
    } catch (l26) {
        n.__e(l26, i11);
    }
}
function L(l27, u18, i12) {
    var t11, o10, r9;
    if (n.unmount && n.unmount(l27), (t11 = l27.ref) && (t11.current && t11.current !== l27.__e || I(t11, null, u18)), i12 || "function" == typeof l27.type || (i12 = null != (o10 = l27.__e)), l27.__e = l27.__d = void 0, null != (t11 = l27.__c)) {
        if (t11.componentWillUnmount) try {
            t11.componentWillUnmount();
        } catch (l28) {
            n.__e(l28, u18);
        }
        t11.base = t11.__P = null;
    }
    if (t11 = l27.__k) for(r9 = 0; r9 < t11.length; r9++)t11[r9] && L(t11[r9], u18, i12);
    null != o10 && a(o10);
}
function M(n21, l, u19) {
    return this.constructor(n21, u19);
}
function O(l29, u20, i13) {
    var t12, r10, c5;
    n.__ && n.__(l29, u20), r10 = (t12 = i13 === o) ? null : i13 && i13.__k || u20.__k, l29 = v(p, null, [
        l29
    ]), c5 = [], $(u20, (t12 ? u20 : i13 || u20).__k = l29, r10 || f, f, void 0 !== u20.ownerSVGElement, i13 && !t12 ? [
        i13
    ] : r10 ? null : u20.childNodes.length ? e.slice.call(u20.childNodes) : null, c5, i13 || f, t12), j(c5, l29);
}
function S(n22, l30) {
    O(n22, l30, o);
}
function q(n23, l31, u21) {
    var i14, t13, o11, r11 = arguments, f6 = s({}, n23.props);
    for(o11 in l31)"key" == o11 ? i14 = l31[o11] : "ref" == o11 ? t13 = l31[o11] : f6[o11] = l31[o11];
    if (arguments.length > 3) for(u21 = [
        u21
    ], o11 = 3; o11 < arguments.length; o11++)u21.push(r11[o11]);
    return null != u21 && (f6.children = u21), h(n23.type, f6, i14 || n23.key, t13 || n23.ref, null);
}
function B(n24, l32) {
    var u22 = {
        __c: l32 = "__cC" + r++,
        __: n24,
        Consumer: function(n25, l33) {
            return n25.children(l33);
        },
        Provider: function(n26, u23, i15) {
            return this.getChildContext || (u23 = [], (i15 = {})[l32] = this, this.getChildContext = function() {
                return i15;
            }, this.shouldComponentUpdate = function(n27) {
                this.props.value !== n27.value && u23.some(k);
            }, this.sub = function(n28) {
                u23.push(n28);
                var l34 = n28.componentWillUnmount;
                n28.componentWillUnmount = function() {
                    u23.splice(u23.indexOf(n28), 1), l34 && l34.call(n28);
                };
            }), n26.children;
        }
    };
    return u22.Provider.__ = u22.Consumer.contextType = u22;
}
n = {
    __e: function(n29, l35) {
        for(var u24, i16, t14, o12 = l35.__h; l35 = l35.__;)if ((u24 = l35.__c) && !u24.__) try {
            if ((i16 = u24.constructor) && null != i16.getDerivedStateFromError && (u24.setState(i16.getDerivedStateFromError(n29)), t14 = u24.__d), null != u24.componentDidCatch && (u24.componentDidCatch(n29), t14 = u24.__d), t14) return l35.__h = o12, u24.__E = u24;
        } catch (l36) {
            n29 = l36;
        }
        throw n29;
    },
    __v: 0
}, l = function(n30) {
    return null != n30 && void 0 === n30.constructor;
}, d.prototype.setState = function(n31, l37) {
    var u25;
    u25 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = s({}, this.state), "function" == typeof n31 && (n31 = n31(s({}, u25), this.props)), n31 && s(u25, n31), null != n31 && this.__v && (l37 && this.__h.push(l37), k(this));
}, d.prototype.forceUpdate = function(n32) {
    this.__v && (this.__e = !0, n32 && this.__h.push(n32), k(this));
}, d.prototype.render = p, u = [], i = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, g.__r = 0, o = f, r = 0;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jocGM":[function(require,module,exports) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = [];
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (!arg) continue;
            var argType = typeof arg;
            if (argType === "string" || argType === "number") classes.push(arg);
            else if (Array.isArray(arg) && arg.length) {
                var inner = classNames.apply(null, arg);
                if (inner) classes.push(inner);
            } else if (argType === "object") {
                for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes.push(key);
            }
        }
        return classes.join(" ");
    }
    if (module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"b5DNx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _escapeHighlight = require("../../lib/escape-highlight");
var _escapeHighlightDefault = parcelHelpers.interopDefault(_escapeHighlight);
var _utils = require("../../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: "hits",
    connector: true
});
var connectHits = function connectHits(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utils.noop);
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function(widgetParams) {
        var _ref = widgetParams || {}, _ref$escapeHTML = _ref.escapeHTML, escapeHTML = _ref$escapeHTML === void 0 ? true : _ref$escapeHTML, _ref$transformItems = _ref.transformItems, transformItems = _ref$transformItems === void 0 ? function(items) {
            return items;
        } : _ref$transformItems;
        var sendEvent;
        var bindEvent;
        return {
            $$type: "ais.hits",
            init: function init(initOptions) {
                renderFn(_objectSpread({}, this.getWidgetRenderState(initOptions), {
                    instantSearchInstance: initOptions.instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var renderState = this.getWidgetRenderState(renderOptions);
                renderState.sendEvent("view", renderState.hits);
                renderFn(_objectSpread({}, renderState, {
                    instantSearchInstance: renderOptions.instantSearchInstance
                }), false);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread({}, renderState, {
                    hits: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref2) {
                var results = _ref2.results, helper = _ref2.helper, instantSearchInstance = _ref2.instantSearchInstance;
                if (!sendEvent) sendEvent = (0, _utils.createSendEventForHits)({
                    instantSearchInstance: instantSearchInstance,
                    index: helper.getIndex(),
                    widgetType: this.$$type
                });
                if (!bindEvent) bindEvent = (0, _utils.createBindEventForHits)({
                    index: helper.getIndex(),
                    widgetType: this.$$type
                });
                if (!results) return {
                    hits: [],
                    results: undefined,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    widgetParams: widgetParams
                };
                if (escapeHTML && results.hits.length > 0) results.hits = (0, _escapeHighlightDefault.default)(results.hits);
                var initialEscaped = results.hits.__escaped;
                results.hits = (0, _utils.addAbsolutePosition)(results.hits, results.page, results.hitsPerPage);
                results.hits = (0, _utils.addQueryID)(results.hits, results.queryID);
                results.hits = transformItems(results.hits); // Make sure the escaped tag stays, even after mapping over the hits.
                // This prevents the hits from being double-escaped if there are multiple
                // hits widgets mounted on the page.
                results.hits.__escaped = initialEscaped;
                return {
                    hits: results.hits,
                    results: results,
                    sendEvent: sendEvent,
                    bindEvent: bindEvent,
                    widgetParams: widgetParams
                };
            },
            dispose: function dispose(_ref3) {
                var state = _ref3.state;
                unmountFn();
                if (!escapeHTML) return state;
                return state.setQueryParameters(Object.keys((0, _escapeHighlight.TAG_PLACEHOLDER)).reduce(function(acc, key) {
                    return _objectSpread({}, acc, _defineProperty({}, key, undefined));
                }, {}));
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(state) {
                if (!escapeHTML) return state;
                return state.setQueryParameters((0, _escapeHighlight.TAG_PLACEHOLDER));
            }
        };
    };
};
exports.default = connectHits;

},{"../../lib/escape-highlight":"eW92d","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"as3BB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _template = require("../Template/Template");
var _templateDefault = parcelHelpers.interopDefault(_template);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
var Hits = function Hits(_ref) {
    var results = _ref.results, hits = _ref.hits, bindEvent = _ref.bindEvent, cssClasses = _ref.cssClasses, templateProps = _ref.templateProps;
    if (results.hits.length === 0) return (0, _preact.h)((0, _templateDefault.default), _extends({}, templateProps, {
        templateKey: "empty",
        rootProps: {
            className: (0, _classnamesDefault.default)(cssClasses.root, cssClasses.emptyRoot)
        },
        data: results
    }));
    return (0, _preact.h)("div", {
        className: cssClasses.root
    }, (0, _preact.h)("ol", {
        className: cssClasses.list
    }, hits.map(function(hit, position) {
        return (0, _preact.h)((0, _templateDefault.default), _extends({}, templateProps, {
            templateKey: "item",
            rootTagName: "li",
            rootProps: {
                className: cssClasses.item
            },
            key: hit.objectID,
            data: _objectSpread({}, hit, {
                __hitIndex: position
            }),
            bindEvent: bindEvent
        }));
    })));
};
Hits.defaultProps = {
    results: {
        hits: []
    },
    hits: []
};
exports.default = Hits;

},{"preact":"26zcy","classnames":"jocGM","../Template/Template":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVPg5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _utils = require("../../lib/utils");
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _extends() {
    _extends = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
var Template = /*#__PURE__*/ function(_Component) {
    _inherits(Template1, _Component);
    function Template1() {
        _classCallCheck(this, Template1);
        return _possibleConstructorReturn(this, _getPrototypeOf(Template1).apply(this, arguments));
    }
    _createClass(Template1, [
        {
            key: "shouldComponentUpdate",
            value: function shouldComponentUpdate(nextProps) {
                return !(0, _utils.isEqual)(this.props.data, nextProps.data) || this.props.templateKey !== nextProps.templateKey || !(0, _utils.isEqual)(this.props.rootProps, nextProps.rootProps);
            }
        },
        {
            key: "render",
            value: function render() {
                var RootTagName = this.props.rootTagName;
                var useCustomCompileOptions = this.props.useCustomCompileOptions[this.props.templateKey];
                var compileOptions = useCustomCompileOptions ? this.props.templatesConfig.compileOptions : {};
                var content = (0, _utils.renderTemplate)({
                    templates: this.props.templates,
                    templateKey: this.props.templateKey,
                    compileOptions: compileOptions,
                    helpers: this.props.templatesConfig.helpers,
                    data: this.props.data,
                    bindEvent: this.props.bindEvent
                });
                if (content === null) // Adds a noscript to the DOM but virtual DOM is null
                // See http://facebook.github.io/react/docs/component-specs.html#render
                return null;
                return (0, _preact.h)(RootTagName, _extends({}, this.props.rootProps, {
                    dangerouslySetInnerHTML: {
                        __html: content
                    }
                }));
            }
        }
    ]);
    return Template1;
}((0, _preact.Component));
Template.defaultProps = {
    data: {},
    rootTagName: "div",
    useCustomCompileOptions: {},
    templates: {},
    templatesConfig: {}
};
exports.default = Template;

},{"preact":"26zcy","../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxjDh":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = {
    empty: "No results",
    item: function item(data) {
        return JSON.stringify(data, null, 2);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hnOzt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withInsights", ()=>(0, _clientDefault.default));
parcelHelpers.export(exports, "inferInsightsPayload", ()=>(0, _client.inferPayload));
parcelHelpers.export(exports, "withInsightsListener", ()=>(0, _listenerDefault.default));
var _client = require("./client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _listener = require("./listener");
var _listenerDefault = parcelHelpers.interopDefault(_listener);

},{"./client":"1CWch","./listener":"hhB68","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1CWch":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inferPayload", ()=>inferPayload);
var _utils = require("../utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var getSelectedHits = function getSelectedHits(hits, selectedObjectIDs) {
    return selectedObjectIDs.map(function(objectID) {
        var hit = (0, _utils.find)(hits, function(h) {
            return h.objectID === objectID;
        });
        if (typeof hit === "undefined") throw new Error('Could not find objectID "'.concat(objectID, '" passed to `clickedObjectIDsAfterSearch` in the returned hits. This is necessary to infer the absolute position and the query ID.'));
        return hit;
    });
};
var getQueryID = function getQueryID(selectedHits) {
    var queryIDs = (0, _utils.uniq)(selectedHits.map(function(hit) {
        return hit.__queryID;
    }));
    if (queryIDs.length > 1) throw new Error("Insights currently allows a single `queryID`. The `objectIDs` provided map to multiple `queryID`s.");
    var queryID = queryIDs[0];
    if (typeof queryID !== "string") throw new Error("Could not infer `queryID`. Ensure InstantSearch `clickAnalytics: true` was added with the Configure widget.\n\nSee: https://alg.li/lNiZZ7");
    return queryID;
};
var getPositions = function getPositions(selectedHits) {
    return selectedHits.map(function(hit) {
        return hit.__position;
    });
};
var inferPayload = function inferPayload(_ref) {
    var method = _ref.method, results = _ref.results, hits = _ref.hits, objectIDs = _ref.objectIDs;
    var index = results.index;
    var selectedHits = getSelectedHits(hits, objectIDs);
    var queryID = getQueryID(selectedHits);
    switch(method){
        case "clickedObjectIDsAfterSearch":
            var positions = getPositions(selectedHits);
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs,
                positions: positions
            };
        case "convertedObjectIDsAfterSearch":
            return {
                index: index,
                queryID: queryID,
                objectIDs: objectIDs
            };
        default:
            throw new Error('Unsupported method passed to insights: "'.concat(method, '".'));
    }
};
var wrapInsightsClient = function wrapInsightsClient(aa, results, hits) {
    return function(method, payload) {
        (0, _utils.warning)(false, "`insights` function has been deprecated. It is still supported in 4.x releases, but not further. It is replaced by the `insights` middleware.\n\nFor more information, visit https://www.algolia.com/doc/guides/getting-insights-and-analytics/search-analytics/click-through-and-conversions/how-to/send-click-and-conversion-events-with-instantsearch/js/");
        if (!aa) {
            var withInstantSearchUsage = (0, _utils.createDocumentationMessageGenerator)({
                name: "instantsearch"
            });
            throw new Error(withInstantSearchUsage("The `insightsClient` option has not been provided to `instantsearch`."));
        }
        if (!Array.isArray(payload.objectIDs)) throw new TypeError("Expected `objectIDs` to be an array.");
        var inferredPayload = inferPayload({
            method: method,
            results: results,
            hits: hits,
            objectIDs: payload.objectIDs
        });
        aa(method, _objectSpread({}, inferredPayload, {}, payload));
    };
};
function withInsights(connector) {
    var wrapRenderFn = function wrapRenderFn(renderFn) {
        return function(renderOptions, isFirstRender) {
            var results = renderOptions.results, hits = renderOptions.hits, instantSearchInstance = renderOptions.instantSearchInstance;
            if (results && hits && instantSearchInstance) {
                var insights = wrapInsightsClient(instantSearchInstance.insightsClient, results, hits);
                return renderFn(_objectSpread({}, renderOptions, {
                    insights: insights
                }), isFirstRender);
            }
            return renderFn(renderOptions, isFirstRender);
        };
    };
    return function(renderFn, unmountFn) {
        return connector(wrapRenderFn(renderFn), unmountFn);
    };
}
exports.default = withInsights;

},{"../utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhB68":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _insights = require("../../helpers/insights");
var findInsightsTarget = function findInsightsTarget(startElement, endElement, validator) {
    var element = startElement;
    while(element && !validator(element)){
        if (element === endElement) return null;
        element = element.parentElement;
    }
    return element;
};
var parseInsightsEvent = function parseInsightsEvent(element) {
    var serializedPayload = element.getAttribute("data-insights-event");
    if (typeof serializedPayload !== "string") throw new Error("The insights middleware expects `data-insights-event` to be a base64-encoded JSON string.");
    try {
        return JSON.parse(atob(serializedPayload));
    } catch (error) {
        throw new Error("The insights middleware was unable to parse `data-insights-event`.");
    }
};
var insightsListener = function insightsListener(BaseComponent) {
    function WithInsightsListener(props) {
        var handleClick = function handleClick(event) {
            if (props.sendEvent) {
                // new way with insights middleware
                var targetWithEvent = findInsightsTarget(event.target, event.currentTarget, function(element) {
                    return element.hasAttribute("data-insights-event");
                });
                if (targetWithEvent) {
                    var payload = parseInsightsEvent(targetWithEvent);
                    props.sendEvent(payload);
                }
            } // old way, e.g. instantsearch.insights("clickedObjectIDsAfterSearch", { .. })
            var insightsTarget = findInsightsTarget(event.target, event.currentTarget, function(element) {
                return (0, _insights.hasDataAttributes)(element);
            });
            if (insightsTarget) {
                var _readDataAttributes = (0, _insights.readDataAttributes)(insightsTarget), method = _readDataAttributes.method, _payload = _readDataAttributes.payload;
                props.insights(method, _payload);
            }
        };
        return (0, _preact.h)("div", {
            onClick: handleClick
        }, (0, _preact.h)(BaseComponent, props));
    }
    return WithInsightsListener;
};
exports.default = insightsListener;

},{"preact":"26zcy","../../helpers/insights":"2EZr9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jSd18":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
var _utils = require("../../lib/utils");
var _suit = require("../../lib/suit");
var _connectSearchBox = require("../../connectors/search-box/connectSearchBox");
var _connectSearchBoxDefault = parcelHelpers.interopDefault(_connectSearchBox);
var _searchBox = require("../../components/SearchBox/SearchBox");
var _searchBoxDefault = parcelHelpers.interopDefault(_searchBox);
var _defaultTemplates = require("./defaultTemplates");
var _defaultTemplatesDefault = parcelHelpers.interopDefault(_defaultTemplates);
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: "search-box"
});
var suit = (0, _suit.component)("SearchBox");
var renderer = function renderer(_ref) {
    var containerNode = _ref.containerNode, cssClasses = _ref.cssClasses, placeholder = _ref.placeholder, templates = _ref.templates, autofocus = _ref.autofocus, searchAsYouType = _ref.searchAsYouType, showReset = _ref.showReset, showSubmit = _ref.showSubmit, showLoadingIndicator = _ref.showLoadingIndicator;
    return function(_ref2) {
        var refine = _ref2.refine, query = _ref2.query, isSearchStalled = _ref2.isSearchStalled;
        (0, _preact.render)((0, _preact.h)((0, _searchBoxDefault.default), {
            query: query,
            placeholder: placeholder,
            autofocus: autofocus,
            refine: refine,
            searchAsYouType: searchAsYouType,
            templates: templates,
            showSubmit: showSubmit,
            showReset: showReset,
            showLoadingIndicator: showLoadingIndicator,
            isSearchStalled: isSearchStalled,
            cssClasses: cssClasses
        }), containerNode);
    };
};
function searchBox() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, container = _ref3.container, _ref3$placeholder = _ref3.placeholder, placeholder = _ref3$placeholder === void 0 ? "" : _ref3$placeholder, _ref3$cssClasses = _ref3.cssClasses, userCssClasses = _ref3$cssClasses === void 0 ? {} : _ref3$cssClasses, _ref3$autofocus = _ref3.autofocus, autofocus = _ref3$autofocus === void 0 ? false : _ref3$autofocus, _ref3$searchAsYouType = _ref3.searchAsYouType, searchAsYouType = _ref3$searchAsYouType === void 0 ? true : _ref3$searchAsYouType, _ref3$showReset = _ref3.showReset, showReset = _ref3$showReset === void 0 ? true : _ref3$showReset, _ref3$showSubmit = _ref3.showSubmit, showSubmit = _ref3$showSubmit === void 0 ? true : _ref3$showSubmit, _ref3$showLoadingIndi = _ref3.showLoadingIndicator, showLoadingIndicator = _ref3$showLoadingIndi === void 0 ? true : _ref3$showLoadingIndi, queryHook = _ref3.queryHook, templates = _ref3.templates;
    if (!container) throw new Error(withUsage("The `container` option is required."));
    var containerNode = (0, _utils.getContainerNode)(container);
    var cssClasses = {
        root: (0, _classnamesDefault.default)(suit(), userCssClasses.root),
        form: (0, _classnamesDefault.default)(suit({
            descendantName: "form"
        }), userCssClasses.form),
        input: (0, _classnamesDefault.default)(suit({
            descendantName: "input"
        }), userCssClasses.input),
        submit: (0, _classnamesDefault.default)(suit({
            descendantName: "submit"
        }), userCssClasses.submit),
        submitIcon: (0, _classnamesDefault.default)(suit({
            descendantName: "submitIcon"
        }), userCssClasses.submitIcon),
        reset: (0, _classnamesDefault.default)(suit({
            descendantName: "reset"
        }), userCssClasses.reset),
        resetIcon: (0, _classnamesDefault.default)(suit({
            descendantName: "resetIcon"
        }), userCssClasses.resetIcon),
        loadingIndicator: (0, _classnamesDefault.default)(suit({
            descendantName: "loadingIndicator"
        }), userCssClasses.loadingIndicator),
        loadingIcon: (0, _classnamesDefault.default)(suit({
            descendantName: "loadingIcon"
        }), userCssClasses.loadingIcon)
    };
    var specializedRenderer = renderer({
        containerNode: containerNode,
        cssClasses: cssClasses,
        placeholder: placeholder,
        templates: _objectSpread({}, (0, _defaultTemplatesDefault.default), {}, templates),
        autofocus: autofocus,
        searchAsYouType: searchAsYouType,
        showReset: showReset,
        showSubmit: showSubmit,
        showLoadingIndicator: showLoadingIndicator
    });
    var makeWidget = (0, _connectSearchBoxDefault.default)(specializedRenderer, function() {
        return (0, _preact.render)(null, containerNode);
    });
    return makeWidget({
        queryHook: queryHook
    });
}
exports.default = searchBox;

},{"preact":"26zcy","classnames":"jocGM","../../lib/utils":"etVYs","../../lib/suit":"du81D","../../connectors/search-box/connectSearchBox":"kqCmi","../../components/SearchBox/SearchBox":"acfnu","./defaultTemplates":"aAfNi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kqCmi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("../../lib/utils");
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var withUsage = (0, _utils.createDocumentationMessageGenerator)({
    name: "search-box",
    connector: true
});
function connectSearchBox(renderFn) {
    var unmountFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _utils.noop);
    (0, _utils.checkRendering)(renderFn, withUsage());
    return function() {
        var widgetParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var queryHook = widgetParams.queryHook;
        function clear(helper) {
            return function() {
                helper.setQuery("").search();
            };
        }
        var _clear = function _clear() {};
        function _cachedClear() {
            _clear();
        }
        return {
            $$type: "ais.searchBox",
            init: function init(initOptions) {
                var instantSearchInstance = initOptions.instantSearchInstance;
                renderFn(_objectSpread({}, this.getWidgetRenderState(initOptions), {
                    instantSearchInstance: instantSearchInstance
                }), true);
            },
            render: function render(renderOptions) {
                var instantSearchInstance = renderOptions.instantSearchInstance;
                renderFn(_objectSpread({}, this.getWidgetRenderState(renderOptions), {
                    instantSearchInstance: instantSearchInstance
                }), false);
            },
            dispose: function dispose(_ref) {
                var state = _ref.state;
                unmountFn();
                return state.setQueryParameter("query", undefined);
            },
            getRenderState: function getRenderState(renderState, renderOptions) {
                return _objectSpread({}, renderState, {
                    searchBox: this.getWidgetRenderState(renderOptions)
                });
            },
            getWidgetRenderState: function getWidgetRenderState(_ref2) {
                var helper = _ref2.helper, searchMetadata = _ref2.searchMetadata;
                if (!this._refine) {
                    var setQueryAndSearch = function setQueryAndSearch(query) {
                        if (query !== helper.state.query) helper.setQuery(query).search();
                    };
                    this._refine = function(query) {
                        if (queryHook) {
                            queryHook(query, setQueryAndSearch);
                            return;
                        }
                        setQueryAndSearch(query);
                    };
                }
                _clear = clear(helper);
                return {
                    query: helper.state.query || "",
                    refine: this._refine,
                    clear: _cachedClear,
                    widgetParams: widgetParams,
                    isSearchStalled: searchMetadata.isSearchStalled
                };
            },
            getWidgetUiState: function getWidgetUiState(uiState, _ref3) {
                var searchParameters = _ref3.searchParameters;
                var query = searchParameters.query || "";
                if (query === "" || uiState && uiState.query === query) return uiState;
                return _objectSpread({}, uiState, {
                    query: query
                });
            },
            getWidgetSearchParameters: function getWidgetSearchParameters(searchParameters, _ref4) {
                var uiState = _ref4.uiState;
                return searchParameters.setQueryParameter("query", uiState.query || "");
            }
        };
    };
}
exports.default = connectSearchBox;

},{"../../lib/utils":"etVYs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acfnu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/** @jsx h */ var _preact = require("preact");
var _utils = require("../../lib/utils");
var _template = require("../Template/Template");
var _templateDefault = parcelHelpers.interopDefault(_template);
function _typeof(obj1) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") _typeof = function _typeof(obj) {
        return typeof obj;
    };
    else _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    return _typeof(obj1);
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SearchBox = /*#__PURE__*/ function(_Component) {
    _inherits(SearchBox1, _Component);
    function SearchBox1() {
        var _getPrototypeOf2;
        var _this;
        _classCallCheck(this, SearchBox1);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SearchBox1)).call.apply(_getPrototypeOf2, [
            this
        ].concat(args)));
        _defineProperty(_assertThisInitialized(_this), "state", {
            query: _this.props.query,
            focused: false
        });
        _defineProperty(_assertThisInitialized(_this), "onInput", function(event) {
            var _this$props = _this.props, searchAsYouType = _this$props.searchAsYouType, refine = _this$props.refine, onChange = _this$props.onChange;
            var query = event.target.value;
            if (searchAsYouType) refine(query);
            _this.setState({
                query: query
            });
            onChange(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onSubmit", function(event) {
            var _this$props2 = _this.props, searchAsYouType = _this$props2.searchAsYouType, refine = _this$props2.refine, onSubmit = _this$props2.onSubmit;
            event.preventDefault();
            event.stopPropagation();
            _this.input.blur();
            if (!searchAsYouType) refine(_this.state.query);
            onSubmit(event);
            return false;
        });
        _defineProperty(_assertThisInitialized(_this), "onReset", function(event) {
            var _this$props3 = _this.props, refine = _this$props3.refine, onReset = _this$props3.onReset;
            var query = "";
            _this.input.focus();
            refine(query);
            _this.setState({
                query: query
            });
            onReset(event);
        });
        _defineProperty(_assertThisInitialized(_this), "onBlur", function() {
            _this.setState({
                focused: false
            });
        });
        _defineProperty(_assertThisInitialized(_this), "onFocus", function() {
            _this.setState({
                focused: true
            });
        });
        return _this;
    }
    _createClass(SearchBox1, [
        {
            key: "resetInput",
            /**
     * This public method is used in the RefinementList SFFV search box
     * to reset the input state when an item is selected.
     *
     * @see RefinementList#componentWillReceiveProps
     * @return {undefined}
     */ value: function resetInput() {
                this.setState({
                    query: ""
                });
            }
        },
        {
            key: "componentWillReceiveProps",
            value: function componentWillReceiveProps(nextProps) {
                /**
       * when the user is typing, we don't want to replace the query typed
       * by the user (state.query) with the query exposed by the connector (props.query)
       * see: https://github.com/algolia/instantsearch.js/issues/4141
       */ if (!this.state.focused && nextProps.query !== this.state.query) this.setState({
                    query: nextProps.query
                });
            }
        },
        {
            key: "render",
            value: function render() {
                var _this2 = this;
                var _this$props4 = this.props, cssClasses = _this$props4.cssClasses, placeholder = _this$props4.placeholder, autofocus = _this$props4.autofocus, showSubmit = _this$props4.showSubmit, showReset = _this$props4.showReset, showLoadingIndicator = _this$props4.showLoadingIndicator, templates = _this$props4.templates, isSearchStalled = _this$props4.isSearchStalled;
                return (0, _preact.h)("div", {
                    className: cssClasses.root
                }, (0, _preact.h)("form", {
                    action: "",
                    role: "search",
                    className: cssClasses.form,
                    noValidate: true,
                    onSubmit: this.onSubmit,
                    onReset: this.onReset
                }, (0, _preact.h)("input", {
                    ref: function ref(inputRef) {
                        return _this2.input = inputRef;
                    },
                    value: this.state.query,
                    disabled: this.props.disabled,
                    className: cssClasses.input,
                    type: "search",
                    placeholder: placeholder,
                    autoFocus: autofocus,
                    autoComplete: "off",
                    autoCorrect: "off",
                    autoCapitalize: "off",
                    spellCheck: "false",
                    maxLength: 512,
                    onInput: this.onInput,
                    onBlur: this.onBlur,
                    onFocus: this.onFocus
                }), (0, _preact.h)((0, _templateDefault.default), {
                    templateKey: "submit",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.submit,
                        type: "submit",
                        title: "Submit the search query.",
                        hidden: !showSubmit
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), (0, _preact.h)((0, _templateDefault.default), {
                    templateKey: "reset",
                    rootTagName: "button",
                    rootProps: {
                        className: cssClasses.reset,
                        type: "reset",
                        title: "Clear the search query.",
                        hidden: !(showReset && this.state.query.trim() && !isSearchStalled)
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                }), showLoadingIndicator && (0, _preact.h)((0, _templateDefault.default), {
                    templateKey: "loadingIndicator",
                    rootTagName: "span",
                    rootProps: {
                        className: cssClasses.loadingIndicator,
                        hidden: !isSearchStalled
                    },
                    templates: templates,
                    data: {
                        cssClasses: cssClasses
                    }
                })));
            }
        }
    ]);
    return SearchBox1;
}((0, _preact.Component));
_defineProperty(SearchBox, "defaultProps", {
    query: "",
    showSubmit: true,
    showReset: true,
    showLoadingIndicator: true,
    autofocus: false,
    searchAsYouType: true,
    isSearchStalled: false,
    disabled: false,
    onChange: (0, _utils.noop),
    onSubmit: (0, _utils.noop),
    onReset: (0, _utils.noop),
    refine: (0, _utils.noop)
});
exports.default = SearchBox;

},{"preact":"26zcy","../../lib/utils":"etVYs","../Template/Template":"aVPg5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAfNi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* eslint max-len: 0 */ exports.default = {
    reset: '\n<svg class="{{cssClasses.resetIcon}}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="10" height="10">\n  <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"></path>\n</svg>\n  ',
    submit: '\n<svg class="{{cssClasses.submitIcon}}" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 40 40">\n  <path d="M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"></path>\n</svg>\n  ',
    loadingIndicator: '\n<svg class="{{cssClasses.loadingIcon}}" width="16" height="16" viewBox="0 0 38 38" xmlns="http://www.w3.org/2000/svg" stroke="#444">\n  <g fill="none" fillRule="evenodd">\n    <g transform="translate(1 1)" strokeWidth="2">\n      <circle strokeOpacity=".5" cx="18" cy="18" r="18" />\n      <path d="M36 18c0-9.94-8.06-18-18-18">\n        <animateTransform\n          attributeName="transform"\n          type="rotate"\n          from="0 18 18"\n          to="360 18 18"\n          dur="1s"\n          repeatCount="indefinite"\n        />\n      </path>\n    </g>\n  </g>\n</svg>\n  '
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBVy6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const autocompleteProduct = (hit)=>`<div class="autocomplete-product">
  <div class="autocomplete-product__image-container">
    <img class="autocomplete-product__image" src="${hit.image}" />
  </div>
  <div class="autocomplete-product__details">
    <h3 class="autocomplete-product__name">${hit._highlightResult.name.value}</h3>
    <p class="autocomplete-product__price">$${hit.price}</p>
  </div>
</div>`;
exports.default = autocompleteProduct;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["7Aums","bNKaB"], "bNKaB", "parcelRequire95ae")

//# sourceMappingURL=index.0641b553.js.map
