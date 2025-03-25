// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
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

  var importMap = previousRequire.i || {};
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
        globalObject
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
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

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
    }
  }
})({"5Tryi":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "06b291ed9d368ec5";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5b176210a7577ccc";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
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
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
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
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
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
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"ayLph":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$0b51 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$0b51.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$0b51.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _client = require("react-dom/client");
var _clientDefault = parcelHelpers.interopDefault(_client);
var _home = require("./Components/Home");
var _homeDefault = parcelHelpers.interopDefault(_home);
var _restaurant = require("./Components/Restaurant");
var _restaurantDefault = parcelHelpers.interopDefault(_restaurant);
var _reactRouter = require("react-router");
var _restaurantMenu = require("./Components/RestaurantMenu");
var _restaurantMenuDefault = parcelHelpers.interopDefault(_restaurantMenu);
var _searchFood = require("./Components/SearchFood");
var _searchFoodDefault = parcelHelpers.interopDefault(_searchFood);
var _secondaryHome = require("./Components/SecondaryHome");
var _secondaryHomeDefault = parcelHelpers.interopDefault(_secondaryHome);
var _stores = require("./Stored/stores");
var _reactRedux = require("react-redux");
var _checkout = require("./Components/Checkout");
var _checkoutDefault = parcelHelpers.interopDefault(_checkout);
// Header section: Let's build it
function App() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRedux.Provider), {
            store: (0, _stores.store),
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.BrowserRouter), {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Routes), {
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                            path: "/",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _homeDefault.default), {}, void 0, false, {
                                fileName: "src/App.js",
                                lineNumber: 25,
                                columnNumber: 34
                            }, void 0)
                        }, void 0, false, {
                            fileName: "src/App.js",
                            lineNumber: 25,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _secondaryHomeDefault.default), {}, void 0, false, {
                                fileName: "src/App.js",
                                lineNumber: 26,
                                columnNumber: 25
                            }, void 0),
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                                    path: "/restaurant",
                                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantDefault.default), {}, void 0, false, {
                                        fileName: "src/App.js",
                                        lineNumber: 27,
                                        columnNumber: 44
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/App.js",
                                    lineNumber: 27,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                                    path: "/city/delhi/:id",
                                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restaurantMenuDefault.default), {}, void 0, false, {
                                        fileName: "src/App.js",
                                        lineNumber: 28,
                                        columnNumber: 48
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/App.js",
                                    lineNumber: 28,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                                    path: "/city/delhi/:id/search",
                                    element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _searchFoodDefault.default), {}, void 0, false, {
                                        fileName: "src/App.js",
                                        lineNumber: 29,
                                        columnNumber: 55
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "src/App.js",
                                    lineNumber: 29,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/App.js",
                            lineNumber: 26,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Route), {
                            path: "/Checkout",
                            element: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _checkoutDefault.default), {}, void 0, false, {
                                fileName: "src/App.js",
                                lineNumber: 31,
                                columnNumber: 42
                            }, void 0)
                        }, void 0, false, {
                            fileName: "src/App.js",
                            lineNumber: 31,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/App.js",
                    lineNumber: 24,
                    columnNumber: 8
                }, this)
            }, void 0, false, {
                fileName: "src/App.js",
                lineNumber: 23,
                columnNumber: 8
            }, this)
        }, void 0, false, {
            fileName: "src/App.js",
            lineNumber: 22,
            columnNumber: 8
        }, this)
    }, void 0, false);
}
_c = App;
(0, _clientDefault.default).createRoot(document.getElementById('root')).render(/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(App, {}, void 0, false, {
    fileName: "src/App.js",
    lineNumber: 39,
    columnNumber: 61
}, undefined)); // Proxy server "https://cors-anywhere.herokuapp.com/"; 
var _c;
$RefreshReg$(_c, "App");

  $parcel$ReactRefreshHelpers$0b51.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-dom/client":"react-dom/client","./Components/Home":"97cZs","./Components/Restaurant":"knfnm","react-router":"react-router","./Components/RestaurantMenu":"orllh","./Components/SearchFood":"cHHcL","./Components/SecondaryHome":"e6coP","./Stored/stores":"gcWqX","react-redux":"react-redux","./Components/Checkout":"gnnXy","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"97cZs":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$4ae3 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$4ae3.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$4ae3.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Home);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _header = require("./Header");
var _headerDefault = parcelHelpers.interopDefault(_header);
var _foodOption = require("./FoodOption");
var _foodOptionDefault = parcelHelpers.interopDefault(_foodOption);
var _groceryOption = require("./GroceryOption");
var _groceryOptionDefault = parcelHelpers.interopDefault(_groceryOption);
var _dineOption = require("./DineOption");
var _dineOptionDefault = parcelHelpers.interopDefault(_dineOption);
function Home() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _headerDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 11,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _foodOptionDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 12,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _groceryOptionDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 13,
                columnNumber: 10
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _dineOptionDefault.default), {}, void 0, false, {
                fileName: "src/Components/Home.js",
                lineNumber: 14,
                columnNumber: 10
            }, this)
        ]
    }, void 0, true);
}
_c = Home;
var _c;
$RefreshReg$(_c, "Home");

  $parcel$ReactRefreshHelpers$4ae3.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","./Header":"iEKP9","./FoodOption":"jd1gk","./GroceryOption":"j1XRZ","./DineOption":"9IBTm","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"iEKP9":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$1208 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$1208.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$1208.prelude(module);

try {
// first div: swiggy ka logo
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Header);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouter = require("react-router");
function Header() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("header", {
        className: "bg-[#ff5200] font-serif",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between container mx-auto py-8",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "w-40 h-12",
                        src: "https://res.cloudinary.com/dutdah0l9/image/upload/v1720058694/Swiggy_logo_bml6he.png"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 11,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: " text-white text-base font-bold flex gap-15 items-center",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                target: "_blank",
                                href: "https://www.swiggy.com/corporate/",
                                children: "Swiggy Corporate"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 13,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                target: "_blank",
                                href: "https://partner.swiggy.com/login#/swiggy",
                                children: "Partner with Us"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 14,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                className: "border border-white py-3 px-4 rounded-2xl",
                                target: "_blank",
                                href: "https://www.swiggy.com/corporate/",
                                children: "Get The App"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 15,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                                className: "border border-black bg-black py-3 px-4 rounded-2xl",
                                target: "_blank",
                                href: "https://www.swiggy.com/corporate/",
                                children: "Sign in"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 16,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 12,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Header.js",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "pt-16 pb-8 relative",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "h-110 w-60 absolute top-0 left-0",
                        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 21,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "h-110 w-60 absolute top-0 right-0",
                        src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 22,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "max-w-[60%] text-5xl text-white font-bold container mx-auto text-center",
                        children: "Order Food and groceries. Discover best restaurants. Swiggy it!"
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 23,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "max-w-[70%] container mx-auto flex gap-5 mt-10",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                className: "bg-white w-[40%] text-xl px-6 py-4 rounded-2xl",
                                placeholder: "Delhi, India"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 27,
                                columnNumber: 18
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
                                className: "bg-white w-[55%] text-xl px-6 py-4 rounded-2xl",
                                placeholder: "Search for restaurant and items for more"
                            }, void 0, false, {
                                fileName: "src/Components/Header.js",
                                lineNumber: 28,
                                columnNumber: 18
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Header.js",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "max-w-[80%] container mx-auto flex",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                        to: "/restaurant",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/fa01e85b-3057-482d-9523-5289722b1df2_Food4BU.png"
                        }, void 0, false, {
                            fileName: "src/Components/Header.js",
                            lineNumber: 34,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 33,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        href: "https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/16/ca34e375-f1bd-4a2e-a3e7-0a20833be83b_IM4BU1.png"
                        }, void 0, false, {
                            fileName: "src/Components/Header.js",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 36,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        href: "https://www.swiggy.com/dineout",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/8/1/76c30e5a-8adb-4795-bf5b-fa64e9e9e1d3_DO4BU.png"
                        }, void 0, false, {
                            fileName: "src/Components/Header.js",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                        href: "https://www.swiggy.com/genie",
                        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                            src: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/31/14033c0b-8907-420b-b72a-d26cfa68dc7b_Genie4BU.png"
                        }, void 0, false, {
                            fileName: "src/Components/Header.js",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "src/Components/Header.js",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/Header.js",
                lineNumber: 32,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/Header.js",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Header;
var _c;
$RefreshReg$(_c, "Header");

  $parcel$ReactRefreshHelpers$1208.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
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

},{}],"jd1gk":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$40a8 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$40a8.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$40a8.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FoodOption);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _foodData = require("../Utils/foodData");
var _foodCard = require("./FoodCard");
var _foodCardDefault = parcelHelpers.interopDefault(_foodCard);
function FoodOption() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "w-[80%] container mx-auto flex flex-wrap mt-20 gap-3",
            children: (0, _foodData.imageGridCards).map((foodData)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _foodCardDefault.default), {
                    foodData: foodData
                }, foodData.id, false, {
                    fileName: "src/Components/FoodOption.js",
                    lineNumber: 10,
                    columnNumber: 48
                }, this))
        }, void 0, false, {
            fileName: "src/Components/FoodOption.js",
            lineNumber: 8,
            columnNumber: 11
        }, this)
    }, void 0, false);
}
_c = FoodOption;
var _c;
$RefreshReg$(_c, "FoodOption");

  $parcel$ReactRefreshHelpers$40a8.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","../Utils/foodData":"eyGR4","./FoodCard":"lvgIo","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"eyGR4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "imageGridCards", ()=>imageGridCards);
const imageGridCards = [
    {
        "id": "2568016",
        "imageId": "PC_Mweb/Pizza.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
            "text": "Pizzas",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for pizza",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83631?collection_id=83631&search_context=pizza&tags=layout_CCS_Pizza&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568358",
        "imageId": "PC_Mweb/North%20Indian.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
            "text": "North Indian",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for north indian",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83633?collection_id=83633&search_context=northindian&tags=layout_CCS_NorthIndian&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568574",
        "imageId": "PC_Mweb/Burger.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
            "text": "Burgers",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for burger",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83637?collection_id=83637&search_context=burger&tags=layout_CCS_Burger&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568339",
        "imageId": "PC_Mweb/Biryani.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
            "text": "Biryani",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for biryani",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83639?collection_id=83639&search_context=biryani&tags=layout_CCS_Biryani&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568034",
        "imageId": "PC_Mweb/Rolls.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
            "text": "Rolls",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for roll",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83669?collection_id=83669&tags=layout_CCS_Rolls&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568312",
        "imageId": "PC_Mweb/Cake.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
            "text": "Cakes",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for cake",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83655?collection_id=83655&tags=layout_CCS_Cake&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568353",
        "imageId": "PC_Mweb/Momo.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
            "text": "Momos",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for momos",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80461?collection_id=80461&tags=layout_CCS_Momos&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568142",
        "imageId": "PC_Mweb/Dosa.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
            "text": "Dosa",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for dosa",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80424?collection_id=80424&tags=layout_CCS_Dosa&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568009",
        "imageId": "PC_Mweb/Chinese.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
            "text": "Chinese",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for chinese",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83636?collection_id=83636&tags=layout_CCS_Chinese&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568041",
        "imageId": "PC_Mweb/Pasta.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80479?collection_id=80479&type=rcv2",
            "text": "Pasta",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pasta",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80479?collection_id=80479&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568033",
        "imageId": "PC_Mweb/Kebab.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80451?collection_id=80451&type=rcv2",
            "text": "Kebabs",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for kebabs",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80451?collection_id=80451&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568031",
        "imageId": "PC_Mweb/Rasmalai.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80390?collection_id=80390&type=rcv2",
            "text": "Rasmalai",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for rasmalai",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80390?collection_id=80390&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568326",
        "imageId": "PC_Mweb/Ice%20Cream.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
            "text": "Ice Cream",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for icecream",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83640?collection_id=83640&tags=layout_CCS_IceCreams&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568346",
        "imageId": "PC_Mweb/Noodles.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80463?collection_id=80463&type=rcv2",
            "text": "Noodles",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for noodles",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80463?collection_id=80463&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568337",
        "imageId": "PC_Mweb/Pav%20Bhaji.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
            "text": "Pav Bhaji",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for pav bhaji",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80362?collection_id=80362&tags=layout_PavBhaji_Contextual&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568348",
        "imageId": "PC_Mweb/South%20Indian.png",
        "action": {
            "link": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
            "text": "South Indian",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for south indian",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/83634?collection_id=83634&search_context=southindian&tags=layout_CCS_SouthIndian&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568360",
        "imageId": "PC_Mweb/Pure%20Veg.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
            "text": "Pure Veg",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for veg",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80435?collection_id=80435&tags=layout_CCS_PureVeg&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568359",
        "imageId": "PC_Mweb/Paratha.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80475?collection_id=80475&type=rcv2",
            "text": "Paratha",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurants curated for paratha",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80475?collection_id=80475&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568330",
        "imageId": "PC_Mweb/Shawarma.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
            "text": "Shawarma",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for shawarma",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80402?collection_id=80402&tags=layout_Shawarma_Contextual&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    },
    {
        "id": "2568573",
        "imageId": "PC_Mweb/Gulab%20Jamun.png",
        "action": {
            "link": "https://www.swiggy.com/collections/80430?collection_id=80430&type=rcv2",
            "text": "Gulab Jamun",
            "type": "DEEPLINK"
        },
        "entityType": "BANNER",
        "accessibility": {
            "altText": "restaurant curated for gulab jamun",
            "altTextCta": "open"
        },
        "entityId": "https://www.swiggy.com/collections/80430?collection_id=80430&type=rcv2",
        "frequencyCapping": {},
        "externalMarketing": {}
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lvgIo":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$99f0 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$99f0.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$99f0.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Foodcard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function Foodcard({ foodData }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
            href: foodData?.action?.link,
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                className: "w-40 h-50 object-cover",
                src: "https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId
            }, void 0, false, {
                fileName: "src/Components/FoodCard.js",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/Components/FoodCard.js",
            lineNumber: 9,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_c = Foodcard;
var _c;
$RefreshReg$(_c, "Foodcard");

  $parcel$ReactRefreshHelpers$99f0.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"j1XRZ":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$1f38 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$1f38.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$1f38.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>GroceryOption);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _grocery = require("../Utils/Grocery");
var _groceryCard = require("./GroceryCard");
var _groceryCardDefault = parcelHelpers.interopDefault(_groceryCard);
function GroceryOption() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: " w-[80%] container mx-auto mt-20",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "text-2xl font-bold",
                children: "Shop Groceries on Instamart"
            }, void 0, false, {
                fileName: "src/Components/GroceryOption.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "container mx-auto flex flex-nowrap overflow-x-auto mt-5 gap-3",
                children: (0, _grocery.GrocerGridCard).map((foodData)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _groceryCardDefault.default), {
                        foodData: foodData
                    }, foodData.id, false, {
                        fileName: "src/Components/GroceryOption.js",
                        lineNumber: 12,
                        columnNumber: 56
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/GroceryOption.js",
                lineNumber: 10,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/GroceryOption.js",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
_c = GroceryOption;
var _c;
$RefreshReg$(_c, "GroceryOption");

  $parcel$ReactRefreshHelpers$1f38.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","../Utils/Grocery":"jTLra","./GroceryCard":"4c8MK","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"jTLra":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GrocerGridCard", ()=>GrocerGridCard);
const GrocerGridCard = [
    {
        "id": "64a7a4ef02878f0001e7e0be",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/0a688af1-1bb4-4a55-8128-31fc79cc9ad0_6d0abb9a-daff-4fbe-a1c9-2dddb6ae6717",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh Vegetables",
            "text": "Fresh Vegetables",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "64a7a4ef02878f0001e7e0be",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Fresh Vegetables"
    },
    {
        "id": "5f2c18a68ac42c7d7c3efee2",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/85df9d8f-175f-4e3a-8945-468bf6317eee_eb9bf247-f2d1-413d-9cf5-48bc870b222f",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Fresh Fruits",
            "text": "Fresh Fruits",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5f2c18a68ac42c7d7c3efee2",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Fresh Fruits"
    },
    {
        "id": "5f2c18a68ac42c7d7c3efeeb",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/a3b15dce-c4b5-4533-89d6-b1c1fb566dbe_4f9ede4c-dc43-4db6-a124-2dd34b7476eb",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Dairy, Bread and Eggs",
            "text": "Dairy, Bread and Eggs",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5f2c18a68ac42c7d7c3efeeb",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Dairy, Bread and Eggs"
    },
    {
        "id": "618926e2b6244b11ebb4efd0",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/77735db8-b5cd-4382-91d6-dfbd46b08a6f_6b8a53d6-677f-48aa-9c9e-ae8e4adfb2eb",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Atta, Rice and Dals",
            "text": "Atta, Rice and Dals",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "618926e2b6244b11ebb4efd0",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Atta, Rice and Dals"
    },
    {
        "id": "61892f82b6244b11ebb4efd9",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/5d8c440a-39a5-4cd8-ba0d-980934aa6cca_87c90adc-244f-41fe-9bf3-80c8be9d59ee",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Masalas and Dry Fruits",
            "text": "Masalas and Dry Fruits",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "61892f82b6244b11ebb4efd9",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Masalas and Dry Fruits"
    },
    {
        "id": "64a7c4e45e365e0001d10d54",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/f53f0a27-22a2-435a-9a65-aa1203340923_61b91ee1-a63b-40c6-b802-8f143474b098",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Oils and Ghee",
            "text": "Oils and Ghee",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "64a7c4e45e365e0001d10d54",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Oils and Ghee"
    },
    {
        "id": "5f2c18a68ac42c7d7c3eff13",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/2ead57e4-00b3-4525-91b2-9eb37a4be375_eee95c8a-e736-42ed-ab86-46add6ffe374",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Munchies",
            "text": "Munchies",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5f2c18a68ac42c7d7c3eff13",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Munchies"
    },
    {
        "id": "5f2c18a68ac42c7d7c3eff19",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/9314636d-dcb2-468b-bdad-9170f4133e14_00e24371-61a6-4ab5-98e9-552bb94d2557",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Sweet Tooth",
            "text": "Sweet Tooth",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5f2c18a68ac42c7d7c3eff19",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Sweet Tooth"
    },
    {
        "id": "627381b740a2340975ce565d",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/8344b7d1-c41a-4225-8b1d-8a2de011780a_0b366fdd-d4ab-467e-9349-c8ec57f65cda",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Cold Drinks and Juices",
            "text": "Cold Drinks and Juices",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "627381b740a2340975ce565d",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Cold Drinks and Juices"
    },
    {
        "id": "6166723cf909db209da87988",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/c1d3779d-9b01-4853-8cad-99185e39c933_a0e15a76-ea59-47e6-a98e-0bb4dfc40600",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Biscuits and Cakes",
            "text": "Biscuits and Cakes",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "6166723cf909db209da87988",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Biscuits and Cakes"
    },
    {
        "id": "5f2c18a68ac42c7d7c3eff21",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/67be61b3-99b4-4037-823c-a2cf0155b0af_00bd4c81-9099-4868-be16-0fdeb382a8dc",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Instant and Frozen Food",
            "text": "Instant and Frozen Food",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5f2c18a68ac42c7d7c3eff21",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Instant and Frozen Food"
    },
    {
        "id": "639c29f84a232c09b5746701",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/9/4e5eec2b-4797-4a93-989a-71b0f5958a3f_cae7e951-fc56-4886-86dd-f583e2373c52",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Hygiene and Wellness",
            "text": "Hygiene and Wellness",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c29f84a232c09b5746701",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Hygiene and Wellness"
    },
    {
        "id": "5fa649c88ac42c7d7c3fa537",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/e33d8321-cb8c-4732-9149-beb834eb24e4_8cee91b0-a380-43bb-90cf-9346a322ebeb",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Meat and Seafood",
            "text": "Meat and Seafood",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5fa649c88ac42c7d7c3fa537",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Meat and Seafood"
    },
    {
        "id": "618a0138b6244b11ebb4efe7",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/7c574228-ae92-4199-a45b-dfc3229c09e7_69a4ac73-d9f5-498b-a5cc-40afd90ee4b0",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Cleaning Essentials",
            "text": "Cleaning Essentials",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "618a0138b6244b11ebb4efe7",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Cleaning Essentials"
    },
    {
        "id": "639c4c0dbab88e09e85bebac",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/e50a580b-4bd7-449a-af9e-fbf01ea18843_e5e21b56-781f-4ccd-b431-a343a23fecb3",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Bath, Body and Hair",
            "text": "Bath, Body and Hair",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c4c0dbab88e09e85bebac",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Bath, Body and Hair"
    },
    {
        "id": "639c65291555a809f1267d10",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/ed1b860f-4fc6-421e-ace8-3c2bde3fc676_3404cf52-d2ad-43db-a349-0846871ddcfa",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Cereals and Breakfast",
            "text": "Cereals and Breakfast",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c65291555a809f1267d10",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Cereals and Breakfast"
    },
    {
        "id": "639c68fe4a232c09b5746758",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/977de398-06fe-4d77-bc77-55158c438dad_9aa7f78a-9590-4625-88e7-520cc29ae3f7",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Sauces and Spreads",
            "text": "Sauces and Spreads",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c68fe4a232c09b5746758",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Sauces and Spreads"
    },
    {
        "id": "5f2c18a68ac42c7d7c3eff08",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/5eee5690-8002-4e28-95df-cc73280a11ed_dec84cd0-4e9d-4c2b-a41f-5aee59fb9ca8",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Tea, Coffee and More",
            "text": "Tea, Coffee and More",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5f2c18a68ac42c7d7c3eff08",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Tea, Coffee and More"
    },
    {
        "id": "5fe4539179e93b591ec721bc",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/5/9/61933ca1-f2fa-443a-910d-feb2ab6ecf79_c849fce4-cdab-4317-8fb5-b6dff377dba9",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Paan Corner",
            "text": "Paan Corner",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "5fe4539179e93b591ec721bc",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Paan Corner"
    },
    {
        "id": "639c51e24a232c09b5746727",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/0798c1d0-34e0-4f87-a7eb-38183c69d743_7cb04bf5-5a28-49dd-b2cc-672650059671",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Home and Kitchen",
            "text": "Home and Kitchen",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c51e24a232c09b5746727",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Home and Kitchen"
    },
    {
        "id": "639c6085bab88e09e85bebd5",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/e2f8a4f3-aad4-446d-994e-8e2481661937_7552c2b7-78bf-42c6-b988-b94b3e1015dc",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Office and Electricals",
            "text": "Office and Electricals",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c6085bab88e09e85bebd5",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Office and Electricals"
    },
    {
        "id": "639c5b774a232c09b5746739",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/2/84be94e2-53ad-451b-aeda-58538d5e3cc4_8c0cc6f4-9722-49ad-9ebe-6cc41d4b8d87",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Baby Care",
            "text": "Baby Care",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c5b774a232c09b5746739",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Baby Care"
    },
    {
        "id": "639c5d0f1555a809f1267d00",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/18/d2a2bb44-cbc0-47f5-80b0-4bfb6d328783_9f37b5c9-5f58-4491-808c-6a42c816d047",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Pet Supplies",
            "text": "Pet Supplies",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c5d0f1555a809f1267d00",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Pet Supplies"
    },
    {
        "id": "639c5ee31555a809f1267d05",
        "imageId": "NI_CATALOG/IMAGES/CIW/2024/4/22/145553bd-115f-4010-9ac3-74682811cca4_ba1e6bf6-d66f-4d19-8f3a-4cc208b6d679",
        "action": {
            "link": "https://www.swiggy.com/instamart/category-listing?categoryName=Beauty and Grooming",
            "text": "Beauty and Grooming",
            "type": "DEEPLINK"
        },
        "accessibility": {},
        "entityId": "639c5ee31555a809f1267d05",
        "frequencyCapping": {},
        "externalMarketing": {},
        "description": "Beauty and Grooming"
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"4c8MK":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$2adc = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$2adc.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$2adc.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Grocerycard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function Grocerycard({ foodData }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex-none",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
                href: foodData?.action?.link,
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    className: "w-40 h-50 object-cover",
                    src: "https://media-assets.swiggy.com/swiggy/image/upload/" + foodData?.imageId
                }, void 0, false, {
                    fileName: "src/Components/GroceryCard.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "src/Components/GroceryCard.js",
                lineNumber: 8,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("h1", {
                className: "text-center font-bold",
                children: foodData?.action?.text
            }, void 0, false, {
                fileName: "src/Components/GroceryCard.js",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/GroceryCard.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = Grocerycard;
var _c;
$RefreshReg$(_c, "Grocerycard");

  $parcel$ReactRefreshHelpers$2adc.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"9IBTm":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$6967 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$6967.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$6967.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DineOption);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _dineData = require("../Utils/DineData");
var _dineCard = require("./DineCard");
var _dineCardDefault = parcelHelpers.interopDefault(_dineCard);
function DineOption() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-[80%] mx-auto mt-20 mb-20",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "text-3xl font-bold",
                children: "Discover best restaurants on Dineout"
            }, void 0, false, {
                fileName: "src/Components/DineOption.js",
                lineNumber: 9,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex flex-nowrap overflow-x-auto mt-5 gap-4 ",
                children: (0, _dineData.dineoutRestaurants).map((RestData)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _dineCardDefault.default), {
                        RestData: RestData
                    }, RestData?.info?.id, false, {
                        fileName: "src/Components/DineOption.js",
                        lineNumber: 12,
                        columnNumber: 52
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/DineOption.js",
                lineNumber: 10,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/DineOption.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = DineOption;
var _c;
$RefreshReg$(_c, "DineOption");

  $parcel$ReactRefreshHelpers$6967.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","../Utils/DineData":"g1VVF","./DineCard":"ckGnl","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"g1VVF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dineoutRestaurants", ()=>dineoutRestaurants);
const dineoutRestaurants = [
    {
        "info": {
            "id": "816534",
            "name": "Kohu",
            "rating": {
                "value": "4.1",
                "count": 162,
                "countDescription": "162 Google ratings"
            },
            "costForTwo": "\u20B92000 for two",
            "cuisines": [
                "Chinese",
                "North Indian"
            ],
            "locality": "Punjabi Bagh",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2024-01-20T08:51:07.838",
                    "url": "v1705740669/68d48b76bc6220fcb6a15a0fdad46be8.jpg"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Reservation available",
                "Parking available",
                "Free wifi",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "7.2 km",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "Punjabi Bagh, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 40% OFF",
                            "offerLogo": {},
                            "type": "GIRF",
                            "subType": "Total bill",
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "GIRF",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "15% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 15% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "40% OFF",
                        "subtitle": "on total bill",
                        "description": "FLAT 40% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_GIRF",
                        "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "GIRF",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 40
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 4,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    },
                    {
                        "logoCtx": {
                            "text": "Free Dessert",
                            "logo": "dineout/free_desert.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "promoted": true,
            "adTrackingId": "cid=0dfb35d1-0d98-4daa-b546-97afe47bf369~~adtrid=a785eb24-0a68-482e-b2f8-68163a362eec~~adgrpid=0dfb35d1-0d98-4daa-b546-97afe47bf369#ag1~~cndid=816534~~bp=nHpWTAqGNtK+GkC2+cxHKv6TUGm/K9XImqcIox+d+twsKH36WDYQIXgBAkdD3Jb2hbcj62QULwUWSoLY0T9mWmJNy/+8~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740069333962~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=4563.545~~collid=116084",
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 40% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 4 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "ribbon": [
                {
                    "text": "GIRF SPECIAL",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "gradientStyle": {
                            "colours": [
                                "#FF2647",
                                "#F6AF0E"
                            ]
                        }
                    }
                }
            ],
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                },
                {
                    "logo": {
                        "logo": "dineout/free_desert.png"
                    },
                    "title": "Free Dessert",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/816534/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "1000254",
            "name": "Food Lover",
            "rating": {
                "value": "4.8",
                "count": 5,
                "countDescription": "5 Google ratings"
            },
            "costForTwo": "\u20B9500 for two",
            "cuisines": [
                "Chinese",
                "Biryani"
            ],
            "locality": " Rohini",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2024-11-30T11:20:54.157",
                    "name": "Food",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/11/30/c5294a70-57ae-471d-b90c-b4b22728c81b_image06f04af40ff734890bc4400955e72d3e5.JPG"
                }
            ],
            "highlights": [
                "Smoking area",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "1 km",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": " Rohini, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 20% OFF",
                            "offerLogo": {},
                            "type": "GIRF",
                            "subType": "Total bill",
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "GIRF",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "20% OFF",
                        "subtitle": "on total bill",
                        "description": "FLAT 20% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_GIRF",
                        "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "GIRF",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 20
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 20% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "ribbon": [
                {
                    "text": "GIRF SPECIAL",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "gradientStyle": {
                            "colours": [
                                "#FF2647",
                                "#F6AF0E"
                            ]
                        }
                    }
                }
            ],
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/1000254/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "137204",
            "name": "CUE- Culinary Urban Experience",
            "rating": {
                "value": "4.1",
                "count": 643,
                "countDescription": "643 Google ratings"
            },
            "costForTwo": "\u20B91300 for two",
            "cuisines": [
                "Chinese",
                "North Indian"
            ],
            "locality": "Rohini",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2022-08-23T03:51:15.689",
                    "name": "ambience",
                    "url": "v1661226678/vw0zrmp9gfallu8eklfo.jpg"
                }
            ],
            "highlights": [
                "Parking available",
                "Smoking area",
                "SwiggyPay accepted",
                "Pure veg"
            ],
            "locationInfo": {
                "distanceString": "1.9 km",
                "landmarkName": "Manglam Paradise Mall",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "Manglam Paradise Mall, Rohini, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 40% OFF",
                            "offerLogo": {},
                            "type": "GIRF",
                            "subType": "Total bill",
                            "availability": "STACKED_WIDGET_AVAILABILITY_FILLING_FAST",
                            "dealCategory": "GIRF",
                            "availabilityDescription": "Filling Fast"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "30% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 30% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 30
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "40% OFF",
                        "subtitle": "on total bill",
                        "description": "FLAT 40% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_GIRF",
                        "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                        "availability": "OFFER_AVAILABILITY_FILLING_FAST",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "GIRF",
                        "availabilityDescription": "Filling Fast",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 40
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 40% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "vegClassifier": "VEG_CLASSIFIER_VEG",
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "ribbon": [
                {
                    "text": "GIRF SPECIAL",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "gradientStyle": {
                            "colours": [
                                "#FF2647",
                                "#F6AF0E"
                            ]
                        }
                    }
                }
            ],
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/137204/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "7859",
            "name": "Wok In The Clouds",
            "rating": {
                "value": "4.1",
                "count": 741,
                "countDescription": "741 Google ratings"
            },
            "costForTwo": "\u20B92200 for two",
            "cuisines": [
                "Chinese",
                "Thai"
            ],
            "locality": "Punjabi Bagh",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2022-08-18T20:30:54.923",
                    "name": "ambience",
                    "url": "v1660854657/qbujbg0bttygdargxgvp.jpg"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Parking available",
                "Valet parking",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "7.7 km",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "Punjabi Bagh, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 30% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "15% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 15% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "30% OFF",
                        "description": "FLAT 30% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 30
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 4,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "promoted": true,
            "adTrackingId": "cid=1111d021-cfb6-452b-a9f4-e1f3a90849d5~~adtrid=0352ac80-9298-4898-a3ff-a96c8f997aa6~~adgrpid=1111d021-cfb6-452b-a9f4-e1f3a90849d5#ag1~~cndid=7859~~bp=d7wzf/l+NjbFUFaJEPunRCo4QySJYkeHa4TdCt8a2kkKbGu+4uzF2hvy2GFvjEzzXtlMVVt74Gv7GjKqOqymYI+Y9sib~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740069333962~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=4783.0938~~collid=116084",
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 30% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 4 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/7859/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "371850",
            "name": "Roslyn Coffee",
            "rating": {
                "value": "3.9",
                "count": 254,
                "countDescription": "254 Google ratings"
            },
            "costForTwo": "\u20B9800 for two",
            "cuisines": [
                "Continental",
                "Fast Food"
            ],
            "locality": "Rohini",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2022-12-21T08:10:32.927",
                    "url": "v1671610234/4257960e5156489346b1442c2ab66d94.webp"
                }
            ],
            "highlights": [
                "Parking available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "2.2 km",
                "landmarkName": "Unity One Mall",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "Unity One Mall, Rohini, Delhi"
            },
            "offerInfoV2": {
                "vendorOffer": {
                    "header": "FLAT 10% OFF",
                    "offerLogo": {}
                },
                "customerOffer": {
                    "header": "+Up to 10% off with HDFC Bank Credit Card",
                    "offerLogo": {}
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "10% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 10% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 10
                    }
                },
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 10% off",
                    "subtitle": "on walk-in",
                    "subtext": "+ 1 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/371850/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "821686",
            "name": "Zoca Diner",
            "rating": {
                "value": "4.4",
                "count": 247,
                "countDescription": "247 Google ratings"
            },
            "costForTwo": "\u20B91400 for two",
            "cuisines": [
                "Chinese",
                "North Indian"
            ],
            "locality": "Rohini",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2024-09-02T13:40:19.996",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/9/2/4b63b414-156c-43e0-8944-2cc912a60813_Screenshot20240902190650ca4e5ef38da24f66b119513d35ca5658.PNG"
                }
            ],
            "highlights": [
                "Reservation available",
                "Parking available",
                "Free wifi",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "2.2 km",
                "landmarkName": "Unity One Mall",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "Unity One Mall, Rohini, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 50% OFF",
                            "offerLogo": {},
                            "type": "GIRF",
                            "subType": "Total bill",
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "GIRF",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "20% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 20% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 20
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "50% OFF",
                        "subtitle": "on total bill",
                        "description": "FLAT 50% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_GIRF",
                        "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "GIRF",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 50
                        }
                    }
                ],
                "infos": [
                    {
                        "header": "Get extra 10% off using GIRFSPECIALS",
                        "description": " 10% off with GIRFSPECIALS + Up to 10% bank offers",
                        "coupon": {
                            "code": "GIRFSPECIALS"
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "offerCount": 4,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 50% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 4 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                },
                "couponOffer": {
                    "title": "Get extra 10% off using GIRFSPECIALS",
                    "style": {
                        "textColour": "primary_accent"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "ribbon": [
                {
                    "text": "GIRF SPECIAL",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "gradientStyle": {
                            "colours": [
                                "#FF2647",
                                "#F6AF0E"
                            ]
                        }
                    }
                }
            ],
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/821686/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "68283",
            "name": "Pind Balluchi",
            "rating": {
                "value": "3.9",
                "count": 3169,
                "countDescription": "3K+ Google ratings"
            },
            "costForTwo": "\u20B91400 for two",
            "cuisines": [
                "Mughlai",
                "North Indian"
            ],
            "locality": "Netaji Subhash Place",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2024-06-04T09:59:28.929",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2024/6/4/be4e1110-c97a-4d9b-be1a-35598593695d_180b1f8274cf6472ab7845ddbf2b37fbc.JPG"
                }
            ],
            "highlights": [
                "Parking available",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "6.4 km",
                "landmarkName": "PP Tower",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "PP Tower, Netaji Subhash Place, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 30% OFF",
                            "offerLogo": {},
                            "type": "GIRF",
                            "subType": "Total bill",
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_LATER",
                            "dealCategory": "GIRF",
                            "availabilityDescription": "Available 21 Feb"
                        },
                        {
                            "header": "FLAT 20% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "30% OFF",
                        "subtitle": "on total bill",
                        "description": "FLAT 30% OFF",
                        "offerType": "OFFER_TYPE_V2_GIRF",
                        "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_LATER",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "GIRF",
                        "availabilityDescription": "Available 21 Feb",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 30
                        }
                    },
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "20% OFF",
                        "description": "FLAT 20% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 20
                        }
                    }
                ],
                "infos": [
                    {
                        "header": "Get extra 10% off using GIRFSPECIALS",
                        "description": " 10% off with GIRFSPECIALS + Up to 10% bank offers",
                        "coupon": {
                            "code": "GIRFSPECIALS"
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "promoted": true,
            "adTrackingId": "cid=a0de63a7-ca51-4ed6-804d-47d75e2e490c~~adtrid=aafb438f-6345-41ae-9178-81a57a3e0bd5~~adgrpid=a0de63a7-ca51-4ed6-804d-47d75e2e490c#ag1~~cndid=68283~~bp=1IZNlX8VoYY2Cktg2iP+nIlmV5nzdHlA22fHSK4e0wiDLauNn8ig9xFv80Jx5wwd7REeTkjOmLN6dKVtdLGT5wihQDNK~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740069333962~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=4878.7783~~collid=116084",
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 30% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                },
                "couponOffer": {
                    "title": "Get extra 10% off using GIRFSPECIALS",
                    "style": {
                        "textColour": "primary_accent"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "ribbon": [
                {
                    "text": "GIRF SPECIAL",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "gradientStyle": {
                            "colours": [
                                "#FF2647",
                                "#F6AF0E"
                            ]
                        }
                    }
                }
            ],
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/68283/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "307466",
            "name": "Mosaic - Crowne Plaza Rohini",
            "rating": {
                "value": "4.4",
                "count": 1237,
                "countDescription": "1K+ Google ratings"
            },
            "costForTwo": "\u20B93000 for two",
            "cuisines": [
                "Chinese",
                "Continental"
            ],
            "locality": "Rohini",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2023-01-15T21:00:14.125",
                    "name": "ambience",
                    "url": "v1673816415/c107452669db828a6a32b97383de4804.jpg"
                }
            ],
            "highlights": [
                "Parking available",
                "Valet parking",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "2.3 km",
                "landmarkName": "Crown Plaza",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "Crown Plaza, Rohini, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 25% OFF",
                            "offerLogo": {},
                            "availability": "STACKED_WIDGET_AVAILABILITY_FILLING_FAST",
                            "dealCategory": "Pre-Book",
                            "availabilityDescription": "Filling Fast"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "15% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 15% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "25% OFF",
                        "description": "FLAT 25% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_PRE_BOOK",
                        "availability": "OFFER_AVAILABILITY_FILLING_FAST",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "Pre-Book",
                        "availabilityDescription": "Filling Fast",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 25
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 25% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/307466/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "21552",
            "name": "Metro Grill",
            "rating": {
                "value": "4.1",
                "count": 1728,
                "countDescription": "1K+ Google ratings"
            },
            "costForTwo": "\u20B91500 for two",
            "cuisines": [
                "North Indian",
                "Chinese"
            ],
            "locality": "Rohini",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2025-02-20T07:33:21.335",
                    "url": "DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/2/20/dda2874d-be1a-42d9-86c1-9ea7a83afa8c_image287e6180abf6a45029e8c3cfabe3c58f2.JPG"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Parking available",
                "Free wifi",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "2.2 km",
                "landmarkName": "City Centre Mall",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "City Centre Mall, Rohini, Delhi"
            },
            "offerInfoV2": {
                "vendorOffer": {
                    "header": "FLAT 25% OFF",
                    "offerLogo": {}
                },
                "customerOffer": {
                    "header": "+Up to 10% off with HDFC Bank Credit Card",
                    "offerLogo": {}
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "25% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 25% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 25
                    }
                },
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Table booking",
                            "logo": "dineout/rx-card/highlights/book.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 25% off",
                    "subtitle": "on walk-in",
                    "subtext": "+ 1 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/rx-card/highlights/book.png"
                    },
                    "title": "Table booking",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/21552/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    },
    {
        "info": {
            "id": "30858",
            "name": "Raftaar - The High Speed Bar and Lounge",
            "rating": {
                "value": "3.9",
                "count": 5575,
                "countDescription": "5K+ Google ratings"
            },
            "costForTwo": "\u20B92000 for two",
            "cuisines": [
                "Continental",
                "North Indian"
            ],
            "locality": "Punjabi Bagh",
            "mediaFiles": [
                {
                    "type": "IMAGE",
                    "id": "2022-08-18T02:37:12.672",
                    "name": "ambience",
                    "url": "v1660790235/obpym9s880ru7hevqpz2.jpg"
                }
            ],
            "highlights": [
                "Alcohol served",
                "Parking available",
                "Valet parking",
                "Smoking area",
                "SwiggyPay accepted"
            ],
            "locationInfo": {
                "distanceString": "7.7 km",
                "city": {
                    "name": "Delhi"
                },
                "formattedAddress": "Punjabi Bagh, Delhi"
            },
            "offerInfoV2": {
                "otherOffers": {
                    "logo": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                    },
                    "offers": [
                        {
                            "header": "FLAT 30% OFF",
                            "offerLogo": {},
                            "type": "GIRF",
                            "subType": "Total bill",
                            "availability": "STACKED_WIDGET_AVAILABILITY_AVAILABLE_TODAY",
                            "dealCategory": "GIRF",
                            "availabilityDescription": "Available today"
                        }
                    ]
                }
            },
            "vendorOffer": {
                "info": {
                    "header": "TODAY\u2019S \nDISCOUNT",
                    "type": "FLAT",
                    "title": "30% Off",
                    "subtitle": "on total bill",
                    "description": "FLAT 30% OFF",
                    "isOfferApplicableNow": true,
                    "tnc": [
                        "Discount on this restaurant is applicable throughout the day for you.",
                        "You can claim this discount on any bill amount. You can pay up to Rs. 3,00,000 per transaction via Swiggy Dineout at a restaurant.",
                        "You get a flat discount on your bill amount with no upper limit.",
                        "This offer cannot be clubbed with an in-house offer or offers from other platforms",
                        "The offer's availability on National/Public Holidays is as per the restaurant's discretion",
                        "The restaurant may levy Service charge/Entry fees as per its discretion",
                        "The discount may not be applicable on Combos, Meal, Beverages, MRP Products, Beer Buckets, Bottled Drinks, Hookah/Seesha, Discounted platters/Thalis, Buffets, as per Catch items and special menus' as per the restaurant's discretion.",
                        "Any items ordered that are not included in the offer will be billed separately.",
                        "Menu prices and items may change without prior notice.",
                        "Weekend and weekdays offer might differ as per restaurant\u2019s discretion."
                    ],
                    "offerType": "OFFER_TYPE_V2_REGULAR",
                    "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                    "offersLogoV2": [
                        {
                            "logo": "dineout/rx-card/OFFER.png",
                            "type": "LOGO_TYPE_RX_TILE"
                        },
                        {
                            "logo": "dineout/search/as/Offers.png",
                            "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                        },
                        {
                            "type": "LOGO_TYPE_PAY_BILL"
                        }
                    ],
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 30
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "TODAY\u2019S \nDISCOUNT",
                        "type": "FLAT",
                        "title": "30% OFF",
                        "subtitle": "on total bill",
                        "description": "FLAT 30% OFF",
                        "isOfferApplicableNow": true,
                        "offerType": "OFFER_TYPE_V2_GIRF",
                        "offerSubType": "OFFER_SUB_TYPE_TOTAL_BILL",
                        "availability": "OFFER_AVAILABILITY_AVAILABLE_TODAY",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/dineout/preOffer.png"
                        },
                        "dealCategory": "GIRF",
                        "availabilityDescription": "Available today",
                        "offersLogoV2": [
                            {
                                "logo": "dineout/rx-card/OFFER.png",
                                "type": "LOGO_TYPE_RX_TILE"
                            },
                            {
                                "logo": "dineout/search/as/Offers.png",
                                "type": "LOGO_TYPE_SEARCH_SUGGESTION"
                            },
                            {
                                "type": "LOGO_TYPE_PAY_BILL"
                            }
                        ],
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 30
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with HDFC Bank Credit Card",
                        "otherLogoContext": {
                            "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 2,
                "offerHighlights": [
                    {
                        "logoCtx": {
                            "text": "Free Dessert",
                            "logo": "dineout/free_desert.png"
                        }
                    }
                ]
            },
            "customerOffer": {
                "info": {
                    "description": "+ Up to 10% bank offers",
                    "otherLogoContext": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1679057464/portal/m/dineout/offer_icon_1.png"
                    },
                    "discountInfo": {
                        "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                        "discountValue": 15
                    }
                },
                "loyaltyInfo": {
                    "cta": {},
                    "offerDetail": {
                        "type": "FLAT",
                        "title": "\u20B9150 Off",
                        "subtitle": "above \u20B91500",
                        "description": " \u20B9150 off",
                        "logoContext": {
                            "text": "with",
                            "logo": "ONE"
                        },
                        "coupon": {
                            "availableCouponCount": 2
                        },
                        "otherLogoContext": {
                            "logo": "OFFER_LOGO"
                        },
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_FLAT",
                            "discountValue": 150
                        }
                    },
                    "oneBenefit": {
                        "logo": "https://dineout-media-assets.swiggy.com/swiggy/image/upload/v1669906275/dineout/one_benefits.png"
                    }
                },
                "otherOffersInfo": [
                    {
                        "header": "ADDITIONAL OFFERS",
                        "type": "CASHBACK",
                        "title": "10%*",
                        "description": "10% cashback",
                        "logoContext": {},
                        "tnc": [
                            "Valid only on Swiggy HDFC Bank Credit Card",
                            "Applicable on a minimum net transaction value of \u20B9100",
                            "Monthly cashback limit of \u20B91500 on Swiggy spends",
                            "Cashback will be processed in the next statement cycle",
                            "Other T&Cs may apply"
                        ],
                        "coupon": {},
                        "adjoiningSubtext": "Above \u20B9100",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 10
                        }
                    }
                ],
                "infos": [
                    {
                        "description": "Up to 10% off with bank offers",
                        "discountInfo": {
                            "discountType": "DISCOUNT_TYPE_PERCENTAGE",
                            "discountValue": 15
                        }
                    }
                ],
                "offerCount": 1
            },
            "isPaymentAccepted": true,
            "promoted": true,
            "adTrackingId": "cid=61458cee-a7f6-4b3d-9705-264893809e61~~adtrid=062f6b96-6ee2-4b75-b837-a3a86c678b51~~adgrpid=61458cee-a7f6-4b3d-9705-264893809e61#ag1~~cndid=30858~~bp=7xX01px9aDmkA8iIqSNH9H1knhxKNO2hdvxPTyBJ7ylgXmX7NrsA40P7mDixfzu1//plM5IppCdHU8pqAm+hqPomDVvB~~mp=SWIGGY_IN~~bl=DINEOUT~~st=~~srvts=1740069333962~~plid=6063bb22-c5fd-4da9-ad5a-97d86b61ddf4~~zoneid=218~~kw=~~lmd=4765.729~~collid=116084",
            "offerInfoV3": {
                "offerLogo": {
                    "logo": "dineout/rx-card/OFFER.png"
                },
                "vendorOffer": {
                    "title": "Flat 30% off",
                    "subtitle": "on pre-booking",
                    "subtext": "+ 2 more",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "bgColour": "positive"
                    },
                    "subtextStyle": {}
                }
            },
            "mediaStyle": {
                "aspectRatio": 1.7778
            },
            "ribbon": [
                {
                    "text": "GIRF SPECIAL",
                    "style": {
                        "textColour": "text_color_highest_emphasis_inverse",
                        "gradientStyle": {
                            "colours": [
                                "#FF2647",
                                "#F6AF0E"
                            ]
                        }
                    }
                }
            ],
            "vendorHighlights": [
                {
                    "logo": {
                        "logo": "dineout/free_desert.png"
                    },
                    "title": "Free Dessert",
                    "style": {
                        "textColour": "text_color_med_emphasis",
                        "bgColour": "background_button_tertiary_low"
                    }
                }
            ]
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/30858/dineout",
            "text": "DINERSONE_REST_DETAIL",
            "type": "DEEPLINK"
        }
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ckGnl":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$165c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$165c.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$165c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>DineCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function DineCard({ RestData }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "max-w-sm flex-none",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("a", {
            target: "_blank",
            href: RestData.cta.link,
            children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                        className: "w-80 h-50 object-cover",
                        src: "https://media-assets.swiggy.com/swiggy/image/upload/" + RestData?.info?.mediaFiles[0]?.url,
                        alt: "Restaurant"
                    }, void 0, false, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"
                    }, void 0, false, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "absolute bottom-2 left-2 text-xl text-white z-10",
                        children: RestData.info.name
                    }, void 0, false, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "absolute bottom-2 right-2 text-xl text-white z-10",
                        children: RestData?.info?.rating?.value
                    }, void 0, false, {
                        fileName: "src/Components/DineCard.js",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/DineCard.js",
                lineNumber: 8,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "src/Components/DineCard.js",
            lineNumber: 7,
            columnNumber: 8
        }, this)
    }, void 0, false, {
        fileName: "src/Components/DineCard.js",
        lineNumber: 6,
        columnNumber: 9
    }, this);
}
_c = DineCard;
var _c;
$RefreshReg$(_c, "DineCard");

  $parcel$ReactRefreshHelpers$165c.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"knfnm":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$049e = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$049e.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$049e.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Restaurant);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _restCard = require("./RestCard");
var _restCardDefault = parcelHelpers.interopDefault(_restCard);
var _shimmer = require("./Shimmer");
var _shimmerDefault = parcelHelpers.interopDefault(_shimmer);
var _s = $RefreshSig$();
function Restaurant() {
    _s();
    const [RestData, setRestData] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true";
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            setRestData(data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        fetchData();
    }, []);
    // console.log(RestData);
    // Shimmer Effect 
    if (RestData.length == 0) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _shimmerDefault.default), {}, void 0, false, {
        fileName: "src/Components/Restaurant.js",
        lineNumber: 27,
        columnNumber: 16
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "flex flex-wrap w-[80%] mx-auto mt-20 gap-5",
        children: RestData.map((restInfo)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restCardDefault.default), {
                restInfo: restInfo
            }, restInfo?.info?.id, false, {
                fileName: "src/Components/Restaurant.js",
                lineNumber: 33,
                columnNumber: 42
            }, this))
    }, void 0, false, {
        fileName: "src/Components/Restaurant.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(Restaurant, "62E5OE30ytQ1jTVnbMCQj0bzFNk=");
_c = Restaurant;
var _c;
$RefreshReg$(_c, "Restaurant");

  $parcel$ReactRefreshHelpers$049e.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./RestCard":"emutz","./Shimmer":"5ZtAp","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"emutz":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$e4ea = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$e4ea.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$e4ea.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRouter = require("react-router");
function RestCard({ restInfo }) {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
        to: "/city/delhi/" + restInfo?.info?.id,
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "max-w-[280px] mb-2 transform transition duration-200 hover:scale-95",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                    className: "w-70 h-45 object-cover rounded-xl",
                    src: "https://media-assets.swiggy.com/swiggy/image/upload/" + restInfo?.info?.cloudinaryImageId
                }, void 0, false, {
                    fileName: "src/Components/RestCard.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[95%] mx-auto mt-3",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "font-bold text-xl ",
                            children: restInfo?.info?.name
                        }, void 0, false, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 11,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("svg", {
                                    className: "w-6 h-6 fill-green-600",
                                    viewBox: "0 0 20 20",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("path", {
                                        d: "M9.049 2.927c.3-.645 1.605-.645 1.905 0l1.525 3.78 4.173.605c.738.107 1.035 1.012.5 1.534l-3.016 2.942.712 4.15c.127.74-.651 1.299-1.305.95l-3.726-1.962-3.726 1.962c-.654.35-1.432-.21-1.305-.95l.712-4.15-3.016-2.942c-.535-.522-.238-1.427.5-1.534l4.173-.605L9.049 2.927z"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestCard.js",
                                        lineNumber: 18,
                                        columnNumber: 8
                                    }, this)
                                }, void 0, false, {
                                    fileName: "src/Components/RestCard.js",
                                    lineNumber: 13,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-lg",
                                    children: restInfo?.info?.avgRating
                                }, void 0, false, {
                                    fileName: "src/Components/RestCard.js",
                                    lineNumber: 20,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                    className: "text-lg font-semibold",
                                    children: restInfo?.info?.sla?.slaString
                                }, void 0, false, {
                                    fileName: "src/Components/RestCard.js",
                                    lineNumber: 21,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 12,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "text-gray-600 text-xl mt-1 h-7 overflow-hidden",
                            children: restInfo?.info?.cuisines.join(" ")
                        }, void 0, false, {
                            fileName: "src/Components/RestCard.js",
                            lineNumber: 24,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/RestCard.js",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Components/RestCard.js",
            lineNumber: 8,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "src/Components/RestCard.js",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = RestCard;
var _c;
$RefreshReg$(_c, "RestCard");

  $parcel$ReactRefreshHelpers$e4ea.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"5ZtAp":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$067d = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$067d.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$067d.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Shimmer);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
function Shimmer() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
            className: "flex flex-wrap w-[80%] mx-auto mt-20 gap-5",
            children: [
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 8,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 10,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 11,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 12,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 9,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 7,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 17,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 19,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 20,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 21,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 18,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 16,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 26,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 28,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 29,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 30,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 27,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 25,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 35,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 37,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 38,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 39,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 36,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 34,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 44,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 46,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 47,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 48,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 45,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 43,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 55,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 57,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 54,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 52,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 62,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 64,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 65,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 63,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 61,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 71,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 74,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 75,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 72,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 70,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 83,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 84,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 79,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 93,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 88,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 98,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 100,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 101,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 99,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 97,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                    className: "w-[280px] mb-2",
                    children: [
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-70 h-45 rounded-xl bg-gray-300"
                        }, void 0, false, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 107,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                            className: "w-[95%] mx-auto mt-3",
                            children: [
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 109,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 110,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                    className: "w-full h-6 bg-gray-300 mt-2"
                                }, void 0, false, {
                                    fileName: "src/Components/Shimmer.js",
                                    lineNumber: 111,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "src/Components/Shimmer.js",
                            lineNumber: 108,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "src/Components/Shimmer.js",
                    lineNumber: 106,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "src/Components/Shimmer.js",
            lineNumber: 6,
            columnNumber: 10
        }, this)
    }, void 0, false);
}
_c = Shimmer;
var _c;
$RefreshReg$(_c, "Shimmer");

  $parcel$ReactRefreshHelpers$067d.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"orllh":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$5d6c = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$5d6c.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$5d6c.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestaurantMenu);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouter = require("react-router");
var _menuCard = require("./MenuCard");
var _menuCardDefault = parcelHelpers.interopDefault(_menuCard);
var _s = $RefreshSig$();
function RestaurantMenu() {
    _s();
    let { id } = (0, _reactRouter.useParams)();
    const [selected, setSelected] = (0, _react.useState)(null);
    console.log(id);
    const [RestData, setRestData] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items)=>'title' in items?.card?.card);
            setRestData(filterData);
        }
        fetchData();
    }, []);
    console.log(RestData);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[80%] mx-auto mt-20 mb-20",
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                    to: `/city/delhi/${id}/search`,
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl",
                        children: "Search for Dishes"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 38,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "src/Components/RestaurantMenu.js",
                    lineNumber: 37,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[80%] mx-auto mt-20 mb-20",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: `text-2xl py-2 px-8 mr-4 border rounded-2xl ${selected === "veg" ? "bg-green-600" : "bg-gray-300"} `,
                        onClick: ()=>setSelected(selected === 'veg' ? null : 'veg'),
                        children: "Veg"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: `text-2xl py-2 px-4 border rounded-2xl ${selected === "nonveg" ? "bg-red-500" : "bg-gray-300"}`,
                        onClick: ()=>setSelected(selected === 'nonveg' ? null : 'nonveg'),
                        children: "Non veg"
                    }, void 0, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 42,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "w-[80%] mx-auto mt-20",
                children: RestData.map((menuItems)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _menuCardDefault.default), {
                        menuItems: menuItems?.card?.card,
                        foodselected: selected
                    }, menuItems?.card?.card?.title, false, {
                        fileName: "src/Components/RestaurantMenu.js",
                        lineNumber: 49,
                        columnNumber: 39
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/RestaurantMenu.js",
                lineNumber: 47,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/RestaurantMenu.js",
        lineNumber: 34,
        columnNumber: 9
    }, this);
}
_s(RestaurantMenu, "avpajrG9AorInBsP10639vfNJQE=", false, function() {
    return [
        (0, _reactRouter.useParams)
    ];
});
_c = RestaurantMenu;
var _c;
$RefreshReg$(_c, "RestaurantMenu");

  $parcel$ReactRefreshHelpers$5d6c.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-router":"react-router","./MenuCard":"kea3j","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"kea3j":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$1a4a = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$1a4a.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$1a4a.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>MenuCard);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _restInfo = require("./RestInfo");
var _restInfoDefault = parcelHelpers.interopDefault(_restInfo);
var _s = $RefreshSig$();
function MenuCard({ menuItems, foodselected }) {
    _s();
    const [isOpen, setIsOpen] = (0, _react.useState)(true);
    if ("categories" in menuItems) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "text-2xl font-bold",
                children: menuItems.title
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuItems?.categories?.map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)(MenuCard, {
                        menuItems: items,
                        foodselected: foodselected
                    }, items?.title, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 16,
                        columnNumber: 58
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 12,
        columnNumber: 13
    }, this);
    if (!isOpen) return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-3xl font-bold mb-4",
                        children: menuItems.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-5xl font-bold mr-20",
                        onClick: ()=>setIsOpen(!isOpen),
                        children: isOpen ? '^' : "\u2304"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "h-5 bg-gray-200 mt-2 mb-2"
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 26,
        columnNumber: 9
    }, this);
    if (foodselected === 'veg') return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-3xl font-bold mb-4",
                        children: menuItems.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 41,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-5xl font-bold mr-20",
                        onClick: ()=>setIsOpen(!isOpen),
                        children: isOpen ? '^' : "\u02EF"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuItems?.itemCards?.filter((food)=>"isVeg" in food?.card?.info).map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoDefault.default), {
                        restData: items?.card?.info
                    }, items?.card?.info?.id, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 46,
                        columnNumber: 101
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "h-5 bg-gray-200 mt-2 mb-2"
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 39,
        columnNumber: 13
    }, this);
    if (foodselected === 'nonveg') return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-3xl font-bold mb-4",
                        children: menuItems.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 58,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-5xl font-bold mr-20",
                        onClick: ()=>setIsOpen(!isOpen),
                        children: isOpen ? '^' : "\u02EF"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 59,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 57,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuItems?.itemCards?.filter((food)=>!("isVeg" in food?.card?.info)).map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoDefault.default), {
                        restData: items?.card?.info
                    }, items?.card?.info?.id, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 63,
                        columnNumber: 104
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "h-5 bg-gray-200 mt-2 mb-2"
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 66,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 56,
        columnNumber: 13
    }, this);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex justify-between w-full",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        className: "text-3xl font-bold mb-4",
                        children: menuItems.title
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 78,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                        className: "text-5xl font-bold mr-20",
                        onClick: ()=>setIsOpen(!isOpen),
                        children: isOpen ? '^' : "\u02EF"
                    }, void 0, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 77,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: menuItems?.itemCards?.map((items)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restInfoDefault.default), {
                        restData: items?.card?.info
                    }, items?.card?.info?.id, false, {
                        fileName: "src/Components/MenuCard.js",
                        lineNumber: 83,
                        columnNumber: 56
                    }, this))
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "h-5 bg-gray-200 mt-2 mb-2"
            }, void 0, false, {
                fileName: "src/Components/MenuCard.js",
                lineNumber: 86,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/MenuCard.js",
        lineNumber: 76,
        columnNumber: 9
    }, this);
}
_s(MenuCard, "mEi83NlPXQzy/XIDfTYWzOSvaHw=");
_c = MenuCard;
var _c;
$RefreshReg$(_c, "MenuCard");

  $parcel$ReactRefreshHelpers$1a4a.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","./RestInfo":"k2QDW","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"k2QDW":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$a8b6 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$a8b6.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$a8b6.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestInfo);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _cartSlicer = require("../Stored/CartSlicer");
var _reactRedux = require("react-redux");
var _s = $RefreshSig$();
function RestInfo({ restData }) {
    _s();
    const dispatch = (0, _reactRedux.useDispatch)();
    const items = (0, _reactRedux.useSelector)((state)=>state.cartslice.items);
    const element = items.find((item)=>item.id === restData.id);
    const count = element ? element.quantity : 0;
    function handleAdditems() {
        dispatch((0, _cartSlicer.addItems)(restData));
    }
    function handleIncrementItems() {
        dispatch((0, _cartSlicer.IncrementItems)(restData));
    }
    function handleDecrementItems() {
        dispatch((0, _cartSlicer.DecrementItems)(restData));
    }
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "flex w-full justify-between mb-2 pb-2",
                children: [
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[70%]",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-2xl text-gray-700 font-semibold mb-1",
                                children: restData?.name
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                className: "text-xl",
                                children: "\u20B9" + ("defaultPrice" in restData ? restData?.defaultPrice / 100 : restData?.price / 100)
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                className: "text-green-700",
                                children: restData?.ratings?.aggregatedRating?.rating
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                children: "(" + restData?.ratings?.aggregatedRating?.ratingCountV2 + ")"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                                children: restData?.description
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestInfo.js",
                        lineNumber: 30,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                        className: "w-[20%] relative h-42",
                        children: [
                            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("img", {
                                className: "w-60 h-36 object-cover rounded-3xl",
                                src: "https://media-assets.swiggy.com/swiggy/image/upload/" + restData.imageId
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            count == 0 ? /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                className: "absolute bottom-1 left-20 rounded-xl text-2xl text-green-600 px-6 py-2 shadow-md border border-white bg-white",
                                onClick: ()=>handleAdditems(),
                                children: "ADD"
                            }, void 0, false, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 42,
                                columnNumber: 25
                            }, this) : /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                                className: "absolute bottom-1 left-20 flex gap-3 text-2xl  text-green-600 px-6 py-2 shadow-md border border-white bg-white rounded-2xl",
                                children: [
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: ()=>handleDecrementItems(),
                                        children: "-"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 44,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("span", {
                                        children: count
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 45,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("button", {
                                        onClick: ()=>handleIncrementItems(),
                                        children: "+"
                                    }, void 0, false, {
                                        fileName: "src/Components/RestInfo.js",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "src/Components/RestInfo.js",
                                lineNumber: 43,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestInfo.js",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "src/Components/RestInfo.js",
                lineNumber: 29,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("hr", {
                className: "mb-6 mt-2"
            }, void 0, false, {
                fileName: "src/Components/RestInfo.js",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_s(RestInfo, "HX/EjTF0AkF4qSmVd/bcOkNE8Fo=", false, function() {
    return [
        (0, _reactRedux.useDispatch),
        (0, _reactRedux.useSelector)
    ];
});
_c = RestInfo;
var _c;
$RefreshReg$(_c, "RestInfo");

  $parcel$ReactRefreshHelpers$a8b6.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","../Stored/CartSlicer":"d3m5I","react-redux":"react-redux","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"d3m5I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addItems", ()=>addItems);
parcelHelpers.export(exports, "IncrementItems", ()=>IncrementItems);
parcelHelpers.export(exports, "DecrementItems", ()=>DecrementItems);
var _toolkit = require("@reduxjs/toolkit");
// example:
// {
//     id: 124,
//     name: "Wednesday Chicken Bucket",
//     
//    quantity: 2
// }
// [{id:123,name:"Tandoori paneer", quanity:3},{id:124,name:"Tandoori chicken", quanity:2},{id:125,name:"pizza", quanity:3}]
const cart = (0, _toolkit.createSlice)({
    name: 'cartslice',
    initialState: {
        items: [],
        count: 0
    },
    reducers: {
        addItems: (state, action)=>{
            state.items.push({
                ...action.payload,
                quantity: 1
            });
            state.count++;
        },
        IncrementItems: (state, action)=>{
            const element = state.items.find((item)=>item.id === action.payload.id);
            element.quantity += 1;
            state.count++;
        },
        DecrementItems: (state, action)=>{
            const element = state.items.find((item)=>item.id === action.payload.id);
            if (element.quantity > 1) element.quantity -= 1;
            else state.items = state.items.filter((item)=>item.id != action.payload.id);
            state.count--;
        }
    }
});
const { addItems, IncrementItems, DecrementItems } = cart.actions;
exports.default = cart.reducer;

},{"@reduxjs/toolkit":"@reduxjs/toolkit","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cHHcL":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$3b81 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$3b81.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$3b81.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SearchFood);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _reactRouter = require("react-router");
var _s = $RefreshSig$();
function SearchFood() {
    _s();
    const { id } = (0, _reactRouter.useParams)();
    const [food, setFood] = (0, _react.useState)("");
    const [RestData, setRestData] = (0, _react.useState)([]);
    (0, _react.useEffect)(()=>{
        async function fetchData() {
            const proxyServer = "https://cors-anywhere.herokuapp.com/";
            const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
            const response = await fetch(proxyServer + swiggyAPI);
            const data = await response.json();
            const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
            const filterData = tempData.filter((items)=>'title' in items?.card?.card);
            console.log(filterData);
            setRestData(filterData);
        }
        fetchData();
    }, []);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "w-[80%] mx-auto mt-20",
        children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("input", {
            className: "w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border",
            placeholder: "Search here",
            onChange: (e)=>setFood(e.target.value)
        }, void 0, false, {
            fileName: "src/Components/SearchFood.js",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "src/Components/SearchFood.js",
        lineNumber: 37,
        columnNumber: 9
    }, this);
}
_s(SearchFood, "H98AT/svxmFOt9GAB2qbDQEtIn4=", false, function() {
    return [
        (0, _reactRouter.useParams)
    ];
});
_c = SearchFood;
var _c;
$RefreshReg$(_c, "SearchFood");

  $parcel$ReactRefreshHelpers$3b81.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react":"react","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"e6coP":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$7178 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$7178.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$7178.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>SecondaryHome);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _restHeader = require("./RestHeader");
var _restHeaderDefault = parcelHelpers.interopDefault(_restHeader);
var _reactRouter = require("react-router");
function SecondaryHome() {
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _jsxDevRuntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _restHeaderDefault.default), {}, void 0, false, {
                fileName: "src/Components/SecondaryHome.js",
                lineNumber: 8,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Outlet), {}, void 0, false, {
                fileName: "src/Components/SecondaryHome.js",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
_c = SecondaryHome;
var _c;
$RefreshReg$(_c, "SecondaryHome");

  $parcel$ReactRefreshHelpers$7178.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","./RestHeader":"ltk8Z","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"ltk8Z":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$ee50 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$ee50.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$ee50.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>RestHeader);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _reactRouter = require("react-router");
var _s = $RefreshSig$();
function RestHeader() {
    _s();
    const counter = (0, _reactRedux.useSelector)((state)=>state.cartslice.count);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "container w-[80%] mx-auto py-4 px-8 bg-gray-200 text-5xl flex justify-between items-center",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                    className: "text-orange-600 font-bold",
                    children: "Swiggy"
                }, void 0, false, {
                    fileName: "src/Components/RestHeader.js",
                    lineNumber: 12,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/Components/RestHeader.js",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _reactRouter.Link), {
                    to: "/Checkout",
                    children: /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                        children: [
                            "Cart ",
                            `(${counter})`
                        ]
                    }, void 0, true, {
                        fileName: "src/Components/RestHeader.js",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "src/Components/RestHeader.js",
                    lineNumber: 15,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "src/Components/RestHeader.js",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "src/Components/RestHeader.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_s(RestHeader, "Y7vguJnByGXeD5U4dCX/IxJPE/A=", false, function() {
    return [
        (0, _reactRedux.useSelector)
    ];
});
_c = RestHeader;
var _c;
$RefreshReg$(_c, "RestHeader");

  $parcel$ReactRefreshHelpers$ee50.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","react-router":"react-router","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}],"gcWqX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "store", ()=>store);
var _toolkit = require("@reduxjs/toolkit");
var _cartSlicer = require("./CartSlicer");
var _cartSlicerDefault = parcelHelpers.interopDefault(_cartSlicer);
const store = (0, _toolkit.configureStore)({
    reducer: {
        cartslice: (0, _cartSlicerDefault.default)
    }
});

},{"@reduxjs/toolkit":"@reduxjs/toolkit","./CartSlicer":"d3m5I","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gnnXy":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$edcb = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
$parcel$ReactRefreshHelpers$edcb.init();
var prevRefreshReg = globalThis.$RefreshReg$;
var prevRefreshSig = globalThis.$RefreshSig$;
$parcel$ReactRefreshHelpers$edcb.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Checkout);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _reactRedux = require("react-redux");
var _s = $RefreshSig$();
function Checkout() {
    _s();
    const items = (0, _reactRedux.useSelector)((state)=>state.cartslice.items);
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        children: items.map((value)=>/*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
                className: "text-5xl",
                children: value.name
            }, void 0, false, {
                fileName: "src/Components/Checkout.js",
                lineNumber: 10,
                columnNumber: 31
            }, this))
    }, void 0, false, {
        fileName: "src/Components/Checkout.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_s(Checkout, "tY2Gvv5VcC5OmHFNMSHq17tjIN8=", false, function() {
    return [
        (0, _reactRedux.useSelector)
    ];
});
_c = Checkout;
var _c;
$RefreshReg$(_c, "Checkout");

  $parcel$ReactRefreshHelpers$edcb.postlude(module);
} finally {
  globalThis.$RefreshReg$ = prevRefreshReg;
  globalThis.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"react/jsx-dev-runtime","react-redux":"react-redux","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js"}]},["5Tryi","ayLph"], "ayLph", "parcelRequired458")

//# sourceMappingURL=Day20.a7577ccc.js.map
