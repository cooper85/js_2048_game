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
  externals,
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
        if (externals[name]) {
          return externals[name];
        }
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
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
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
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

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
})({"huHYX":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "1d23b73e4841ef46";
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
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
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

},{}],"3Aj1C":[function(require,module,exports,__globalThis) {
var _gameClassJs = require("../modules/Game.class.js");
'use strict';
// eslint-disable-next-line no-unused-vars
const game = new (0, _gameClassJs.Game)(); /* const game = new Game([
  [0, 4, 8, 16],
  [32, 64, 128, 256],
  [512, 1024, 2048, 4096],
  [8192, 16384, 32768, 0],
]); */ 

},{"../modules/Game.class.js":"dhlFI"}],"dhlFI":[function(require,module,exports,__globalThis) {
// noinspection JSNonASCIINames,NonAsciiCharacters
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This class represents the game.
 * Now it has a basic structure needed for testing.
 * Feel free to add more props and methods if needed.
 */ parcelHelpers.export(exports, "Game", ()=>Game);
var _controlClassJs = require("./Control.class.js");
var _effectClassJs = require("./Effect.class.js");
var _paletteClassJs = require("./Palette.class.js");
var _aboutClassJs = require("./About.class.js");
var _scoreClassJs = require("./Score.class.js");
var _doomguyClassJs = require("./Doomguy.class.js");
var _bounceEffectClassJs = require("./BounceEffect.class.js");
var _initialsPromptClassJs = require("./InitialsPrompt.class.js");
var _soundClass = require("./Sound.class");
'use strict';
class Game {
    /**
   * Control key up
   * @type {string}
   * @private
   */ static #ctrUp = 'ArrowUp';
    /**
   * Control key down
   * @type {string}
   * @private
   */ static #ctrDown = 'ArrowDown';
    /**
   * Control key left
   * @type {string}
   * @private
   */ static #ctrLeft = 'ArrowLeft';
    /**
   * Control key right
   * @type {string}
   * @private
   */ static #ctrRight = 'ArrowRight';
    /**
   * Game statuses
   * @type {Object}
   * @private
   */ static #statuses = Object.freeze({
        IDLE: 'idle',
        PLAYING: 'playing',
        WIN: 'win',
        LOSE: 'lose'
    });
    /**
   * Current game status
   * @type {string}
   * @private
   */ #status = Game.#statuses.IDLE;
    /**
   * Current board state
   * @type {number[][]}
   * @private
   */ #state;
    /**
   * Initial score
   * @type {number}
   * @private
   */ #score;
    /**
   * Board width
   * @type {number}
   * @private
   */ #width;
    /**
   * Board height
   * @type {number}
   * @private
   */ #height;
    /**
   * Width of game board
   * @type {number}
   * @protected
   */ static #defaultWidth = 4;
    /**
   * Height of game board
   * @type {number}
   * @protected
   */ static #defaultHeight = 4;
    /**
   * Cell value generator
   * @return {number}
   */ static #cellValueGenerator = ()=>Math.random() > 0.9 ? 4 : 2;
    /**
   * Initial not empty cell count
   * @type {number}
   */ static #initialNonEmptyCellCount = 2;
    /**
   * Win score limit
   * @type {number}
   * @private
   */ static #winScore = 2048;
    /**
   * Valid direction vectors
   * @type {{'1,0': boolean, '0,1': boolean}}
   */ static #validDirectionVectors = {
        '1,0': true,
        '0,1': true,
        '-1,0': true,
        '0,-1': true
    };
    /**
   * Selector for container of messages
   * @type {string}
   */ static #messageContainerSelector = '.message-container';
    /**
   * Selector for a message
   * @type {string}
   */ static #messageSelector = '.message';
    /**
   * Class used to hide messages
   * @type {string}
   */ static #hiddenClass = 'hidden';
    /**
   * Selector for the start button
   * @type {string}
   */ static #startButtonSelector = '.button.start';
    /**
   * Selector for the restart button
   * @type {string}
   */ static #restartButtonSelector = '.button.restart';
    /**
   * Selector for the game board
   * @type {string}
   */ static #boardSelector = '.game-field tbody';
    /**
   * Control manager that supports touchpad and mouse swipes
   * @type {Control}
   * @private
   */ #control;
    /**
   * Logo element selector
   * @type {string}
   */ static #logoSelector = '#logo';
    /**
   * Effect manager for app
   * @type {Effect}
   * @private
   */ #logoEffect;
    /**
   * About element selector
   * @type {string}
   */ static #aboutSelector = '#about';
    /**
   * Window about wrapper element selector
   * @type {string}
   */ static #windowAboutWrapperSelector = '.window-about-wrapper';
    /**
   * About flow controller
   * @type {About}
   * @private
   */ #aboutController;
    /**
   * Score element selector
   * @type {string}
   */ static #scoreSelector = '#score';
    /**
   * Score flow controller
   * @type {Score}
   * @private
   */ #scoreController;
    /**
   * Selector for game board and related elements
   * @type {string}
   */ static #gameContentSelector = '.game-wrapper, .shift-mobile-container, .bottom-container';
    /**
   * Generic selector for all modal windows
   * @type {string}
   */ static #genericModalWindowSelector = '.window-wrapper';
    /**
   * Domguy elements selector
   * @type {string}
   */ static #doomGuySelector = '.doomguy';
    /**
   * Doom guy animation helper
   *
   * @type {Doomguy}
   * @private
   */ #doomguy;
    /**
   * Custom animation helper for the restart button
   *
   * @type {BounceEffect}
   * @private
   */ #bounceEffect;
    /**
   * Creates a new game instance.
   *
   * @param {number[][]} initialState
   * The initial state of the board.
   * @default
   * [[0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0],
   *  [0, 0, 0, 0]]
   *
   * If passed, the board will be initialised with the provided
   * initial state.
   */ constructor(initialState){
        this._initInteractiveElements();
        this._initControls();
        // if there is some initial state - start the game automatically
        if (initialState) this.restart(initialState);
    }
    /**
   * Init game effects
   * @private
   */ _initInteractiveElements() {
        /**
     * Game content HTML elements
     * @type {NodeListOf<Element>}
     */ const gameContentElements = document.querySelectorAll(Game.#gameContentSelector);
        /**
     * List of HTML elements for modal windows
     * @type {NodeListOf<Element>}
     */ const modalWindowElements = document.querySelectorAll(Game.#genericModalWindowSelector);
        /**
     * Logo element - hide all modal windows
     * @type {Element}
     */ const logoElement = document.querySelector(Game.#logoSelector);
        // hide all modals, show the main board
        logoElement.addEventListener('click', ()=>{
            gameContentElements.forEach((el)=>el.classList.remove('hidden'));
            modalWindowElements.forEach((el)=>el.classList.add('hidden'));
        });
        /**
     * Effect manager for app
     * @type {Effect}
     * @private
     */ this.#logoEffect = new (0, _effectClassJs.Effect)(logoElement);
        this.#logoEffect.apply();
        /**
     * About CTA HTML element
     * @type {Element}
     */ const aboutElement = document.querySelector(Game.#aboutSelector);
        /**
     * About window HTML element
     * @type {Element}
     */ const windowAboutElement = document.querySelector(Game.#windowAboutWrapperSelector);
        /**
     * About controller
     * @type {About}
     */ this.#aboutController = new (0, _aboutClassJs.About)(aboutElement, windowAboutElement, modalWindowElements, gameContentElements);
        /**
     * Score CTA HTML element
     * @type {Element}
     */ const scoreElement = document.querySelector(Game.#scoreSelector);
        /**
     * Score window HTML element
     * @type {Score}
     */ const windowScoreElement = document.querySelector('.window-score-wrapper');
        /**
     * Score controller
     * @type {Score}
     */ this.#scoreController = new (0, _scoreClassJs.Score)(scoreElement, windowScoreElement, modalWindowElements, gameContentElements);
        /**
     * All doomguy elements on the page
     * @type {NodeList}
     */ const doomguyElements = document.querySelectorAll(Game.#doomGuySelector);
        /**
     * Doomguy manager
     * @type {Doomguy}
     * @private
     */ this.#doomguy = new (0, _doomguyClassJs.Doomguy)(doomguyElements);
        /**
     * Restart button element
     * @type {HTMLElement}
     */ const restartButtonElement = document.querySelector(Game.#restartButtonSelector);
        /**
     * Restart button inner part
     * @type {HTMLElement}
     */ const restartButtonInnerElement = restartButtonElement.querySelector('div:nth-child(1)');
        // fancy animation for the restart button
        this.#bounceEffect = new (0, _bounceEffectClassJs.BounceEffect)(restartButtonElement, restartButtonInnerElement);
    }
    /**
   * Initialise control keyboard control for the game
   * @private
   */ _initControls() {
        const controls = new (0, _controlClassJs.CbContainer)({
            left: this.moveLeft.bind(this),
            right: this.moveRight.bind(this),
            down: this.moveDown.bind(this),
            up: this.moveUp.bind(this)
        });
        document.addEventListener('keydown', (e)=>{
            switch(e.key){
                case Game.#ctrUp:
                    if (this.#status === Game.#statuses.PLAYING) // eslint-disable-next-line no-unused-expressions
                    controls.up && controls.up();
                    break;
                case Game.#ctrDown:
                    if (this.#status === Game.#statuses.PLAYING) // eslint-disable-next-line no-unused-expressions
                    controls.down && controls.down();
                    break;
                case Game.#ctrLeft:
                    if (this.#status === Game.#statuses.PLAYING) // eslint-disable-next-line no-unused-expressions
                    controls.left && controls.left();
                    break;
                case Game.#ctrRight:
                    if (this.#status === Game.#statuses.PLAYING) // eslint-disable-next-line no-unused-expressions
                    controls.right && controls.right();
                    break;
            }
        });
        /**
     * Helper to assign click handlers
     * @param selector
     * @param handler
     */ const addClickHandlers = (selector, handler)=>{
            if (typeof handler !== 'function') return;
            document.querySelectorAll(selector).forEach((el)=>{
                el.addEventListener('click', handler);
            });
        };
        addClickHandlers('.shift-left', controls.left);
        addClickHandlers('.shift-right', controls.right);
        addClickHandlers('.shift-up', controls.up);
        addClickHandlers('.shift-down', controls.down);
        const onStart = this.start.bind(this);
        document.querySelector(Game.#startButtonSelector)?.addEventListener('click', onStart);
        const onRestart = this.restart.bind(this);
        document.querySelector(Game.#restartButtonSelector)?.addEventListener('click', onRestart);
        // add support of mouse and touchpad / screen for swipe actions
        this._control = new (0, _controlClassJs.Control)(document.querySelector(Game.#boardSelector), controls);
    }
    /**
   * Game inner loop actions
   * @private
   */ _gameCycle() {
        // set all elements on the page as up-to-date
        this._recalculateScore();
        // check if game status changed
        this._\u0441heckWinLose();
        // update board
        this._updateBoard();
        // update score indicator
        this._updateScore();
        // update message
        this._updateMessage();
        // update doomguy fancy icon
        this._updateDoomguy();
        // update start / restart buttons visibility
        this._updatePlayButtons();
        // update score table
        if ([
            Game.#statuses.WIN,
            Game.#statuses.LOSE
        ].includes(this.#status)) this._updateHighScore();
    }
    /**
   * Shift board by vector
   *
   * @param {number} dx
   * @param {number} dy
   * @return {boolean} if something moved
   * @private
   */ _shift(dx, dy) {
        if (this.#status !== Game.#statuses.PLAYING) throw new Error('Game is not started or it is finished');
        if (typeof dx !== 'number' || typeof dy !== 'number') throw new TypeError('dx and dy must be numbers');
        const key = `${dx},${dy}`;
        if (!Game.#validDirectionVectors[key]) throw new RangeError("Invalid shift: only single shift allowed (dx,dy) = (+-1,0) or (0,+-1), " + `got (${dx},${dy})`);
        let moved = false;
        // check if movement is horizontal
        const horizontal = dx !== 0;
        /**
     * Get vertical or horizontal line
     * @param i - index
     * @return {number[]}
     */ const getLine = (i)=>{
            const state = this.getState();
            if (horizontal) // extract i-th row to array
            return state[i].slice();
            // get i-th element of each row and create an array
            return state.map((row)=>row[i]);
        };
        /**
     * Set vertical or horizontal line
     *
     * @param i - index
     * @param {number[]} newLine - new line
     */ const setLine = (i, newLine)=>{
            const state = this.getState();
            if (horizontal) state[i] = newLine;
            else for(let j = 0; j < this.#height; j++)state[j][i] = newLine[j];
        };
        /**
     * Merges line per 2048 rules
     * @param {number[]} inputLine - line
     * @param {boolean} reverse - reverse flag
     *   (for left to right and bottom to top)
     * @return {*}
     */ const mergeLine = (inputLine, reverse = false)=>{
            /**
       * For reverse shift - we reverse the array
       * and proceed with the default logic
       */ const line = reverse ? inputLine.reverse() : inputLine;
            // filter out empty cells
            let nonZero = line.filter((v)=>v !== 0);
            for(let i = 0; i < nonZero.length - 1; i++)// if the current cell and next cell have the same value
            if (nonZero[i] === nonZero[i + 1]) {
                // multiple value of current cell by 2
                nonZero[i] *= 2;
                // set empty value to next cell
                nonZero[i + 1] = 0;
                // increment, skip the next cell, so we have no recursive merges
                // (merge 1 time)
                i++;
            }
            // filter empty cells - so there is an effect of cell combine
            nonZero = nonZero.filter((v)=>v !== 0);
            // fill line with empty cells to have the initial length
            const currentLength = nonZero.length;
            nonZero.length = line.length;
            nonZero.fill(0, currentLength, nonZero.length);
            /**
       * For reverse shift we restore the original order of elements
       * upon finish processing
       */ if (reverse) nonZero.reverse();
            return nonZero;
        };
        /**
     * Detect if the shift is reversed,
     * so we will use this for merge line as a flag
     */ const isReverse = horizontal && dx > 0 || !horizontal && dy > 0;
        for(let i = 0; i < (horizontal ? this.#width : this.#height); i++){
            const line = getLine(i);
            const merged = mergeLine(line, isReverse);
            // check if after shift state for the line is changed
            if (!moved && merged.some((val, idx)=>val !== line[idx])) moved = true;
            // set new merged line to current board state
            setLine(i, merged);
        }
        // return if something changed on board
        return moved;
    }
    /**
   * Check board state and change game status
   * @private
   */ _\u0441heckWinLose() {
        // no actions
        if ([
            Game.#statuses.WIN,
            Game.#statuses.LOSE
        ].includes(this.#status)) return;
        // some 2048 cells in any row - change status to win
        if (this.#state.some((row)=>row.includes(2048))) {
            this.#status = Game.#statuses.WIN;
            return;
        }
        // there are empty cells - so can continue
        for(let x = 0; x < this.#width; x++)for(let y = 0; y < this.#height; y++){
            if (this.#state[x][y] === 0) return;
        }
        // check merging possibility
        for(let x = 0; x < this.#width; x++)for(let y = 0; y < this.#height; y++){
            // are there same values in neighbouring cells?
            if (x < this.#width - 1 && this.#state[x][y] === this.#state[x + 1][y] || y < this.#height - 1 && this.#state[x][y] === this.#state[x][y + 1]) // so merging is still possible
            return;
        }
        // otherwise it is a defeat
        this.#status = Game.#statuses.LOSE;
    }
    /**
   * Recalculate current score on board
   * @private
   */ _recalculateScore() {
        let score = 0;
        for(let i = 0; i < this.#width; i++){
            for(let j = 0; j < this.#height; j++)if (this.#state[i][j] !== 0) score += this.#state[i][j];
        }
        this.#score = score;
    }
    /**
   * Colors generator using a predefined palette
   *
   * @param {number|null} inputValue
   * @return {TileColor}
   * @private
   */ _getColors(inputValue = null) {
        // for empty cell used 0
        const value = inputValue || 0;
        // the level will be 1 for 2, 2 for 4, etc.
        const paletteIndex = Math.log2(value);
        /**
     * Return the color from the palette
     * or last color from the palette for inappropriate indexes
     */ return (0, _paletteClassJs.Palette).tilePalette[paletteIndex] || (0, _paletteClassJs.Palette).tilePalette[(0, _paletteClassJs.Palette).tilePalette.length - 1];
    }
    /**
   * Update board with current game state
   * @private
   */ _updateBoard() {
        for(let i = 0; i < this.#width; i++)for(let j = 0; j < this.#height; j++){
            const cell = document.querySelector(`${Game.#boardSelector} tr:nth-child(${i + 1}) td:nth-child(${j + 1})`);
            const colorConfig = this._getColors(this.#state[i][j] > 0 ? this.#state[i][j] : 1);
            cell.style.color = colorConfig.text;
            cell.style.backgroundColor = colorConfig.background;
            cell.innerHTML = this.#state[i][j] > 0 ? this.#state[i][j] : '';
        }
    }
    /**
   * Update current board score
   * @private
   */ _updateScore() {
        const scoreElement = document.querySelector(Game.#scoreSelector);
        if (scoreElement) scoreElement.innerText = this.#score;
    }
    /**
   * Show an actual message
   * @private
   */ _updateMessage() {
        const messagesSelector = Game.#messageContainerSelector + ' > ' + Game.#messageSelector;
        const targetMessageSelector = messagesSelector + '-' + this.#status;
        const messageElements = document.querySelectorAll(messagesSelector);
        const targetMessage = document.querySelector(targetMessageSelector);
        messageElements.forEach((messageElement)=>{
            messageElement.classList.add(Game.#hiddenClass);
        });
        if (targetMessage) targetMessage.classList.remove(Game.#hiddenClass);
    }
    /**
   * Move the board left
   */ moveLeft() {
        this._shift(-1, 0);
        (0, _soundClass.Sound).beep(500);
        this._addRandomCell();
        this._gameCycle();
    }
    /**
   * Move the board right
   */ moveRight() {
        this._shift(1, 0);
        (0, _soundClass.Sound).beep(600);
        this._addRandomCell();
        this._gameCycle();
    }
    /**
   * Move the board up
   */ moveUp() {
        this._shift(0, -1);
        (0, _soundClass.Sound).beep(700);
        this._addRandomCell();
        this._gameCycle();
    }
    /**
   * Move the board down
   */ moveDown() {
        this._shift(0, 1);
        (0, _soundClass.Sound).beep(400);
        this._addRandomCell();
        this._gameCycle();
    }
    /**
   * Returns current score
   *
   * @returns {number}
   */ getScore() {
        return this.#score;
    }
    /**
   * Returns current board state
   * @returns {number[][]}
   */ getState() {
        return this.#state;
    }
    /**
   * Returns the current game status.
   *
   * @returns {string} One of: 'idle', 'playing', 'win', 'lose'
   *
   * `idle` - the game has not started yet (the initial state);
   * `playing` - the game is in progress;
   * `win` - the game is won;
   * `lose` - the game is lost
   */ getStatus() {
        return this.#status;
    }
    /**
   * Starts the game.
   */ start() {
        this.restart();
    }
    /**
   * Resets the game.
   * @param {Array|Event} initialState
   */ restart(initialState = false) {
        // status playing
        this.#status = Game.#statuses.PLAYING;
        this._updatePlayButtons();
        // score 0
        this.#score = 0;
        try {
            /**
       * Initialize the board with empty cells or some initial state
       */ this._initializeBoard(initialState);
            /**
       * Draw board
       */ this._drawBoard();
            /**
       * Add some initial cell
       */ this._addRandomCell(Game.#initialNonEmptyCellCount);
            /**
       * Update current state of health (doom guy)
       */ this._updateDoomguy();
            // inner cycle of the game
            this._gameCycle();
        } catch (error) {
        // no-op, production mode, "something goes wrong"?
        }
    }
    /**
   * Initialize the board with empty cells or some initial state
   *
   * @param initialState
   * @private
   */ _initializeBoard(initialState) {
        // check against a passed array for initialState defined
        if (!Array.isArray(initialState)) {
            // initialize board dimensions
            this.#width = Game.#defaultWidth;
            this.#height = Game.#defaultHeight;
            // create a new clear board
            this.#state = this._create2DArray(Game.#defaultWidth, Game.#defaultHeight, 0);
        } else {
            // initiate board with not empty cells
            if (!this._isValidRectangleMatrix(initialState)) throw new TypeError('Invalid initial state');
            // initialize board dimensions
            this.#width = initialState[0].length;
            this.#height = initialState.length;
            this.#state = initialState;
        }
    }
    static gameFieldRowClass = 'field-row';
    static gameFieldCellClass = 'field-cell';
    /**
   * Draw board
   * @private
   */ _drawBoard() {
        const board = document.querySelector(Game.#boardSelector);
        board.innerHTML = '';
        for(let i = 0; i < this.#height; i++){
            const tr = document.createElement('tr');
            tr.classList.add(Game.gameFieldRowClass);
            for(let j = 0; j < this.#width; j++){
                const td = document.createElement('td');
                td.classList.add(Game.gameFieldCellClass);
                tr.appendChild(td);
            }
            board.appendChild(tr);
        }
    }
    /**
   * Update actual start/restart buttons visibility
   * @private
   */ _updatePlayButtons() {
        const startButton = document.querySelector(Game.#startButtonSelector);
        const reStartButton = document.querySelector(Game.#restartButtonSelector);
        const startBtnVisible = this.#status !== Game.#statuses.PLAYING;
        if (startBtnVisible) {
            startButton.classList.remove(Game.#hiddenClass);
            reStartButton.classList.add(Game.#hiddenClass);
        } else {
            startButton.classList.add(Game.#hiddenClass);
            reStartButton.classList.remove(Game.#hiddenClass);
        }
    }
    /**
   * Initial state validator
   * @param {number[][]} initialState - matrix of number
   * @returns {boolean} validity
   */ _isValidRectangleMatrix(initialState) {
        if (!Array.isArray(initialState) || initialState.length === 0) return false;
        const firstRowLength = initialState[0].length;
        for(let i = 0; i < initialState.length; i++){
            const row = initialState[i];
            // check for the same row length
            if (!Array.isArray(row) || row.length !== firstRowLength) return false;
            // check for spaces and integer > 0 for each cell
            for(let j = 0; j < row.length; j++){
                if (!Number.isInteger(row[j]) || row[j] < 0 || row[j] >= Game._WIN_SCORE) return false;
            }
        }
        return true;
    }
    /**
   * Add value to random cell of board
   * @param {number} count - number of prefilled cells on board
   * @private
   */ _addRandomCell(count = 1) {
        for(let i = 0; i < count; i++){
            // get random empty cell
            const result = this._getRandomEmptyCell();
            /**
       * If there are no free cells for previous concrete action by user,
       * but state is still playable - just skip
       */ if (result === null) break;
            const [r, c] = result;
            // get current board
            const state = this.getState();
            // initiate value to cell
            state[r][c] = Game.#cellValueGenerator();
        }
    }
    /**
   * Get random empty cell from the board
   * @return {[row: number, column: number]|null}
   * @private
   */ _getRandomEmptyCell() {
        let result = null;
        let count = 0;
        const state = this.getState();
        /**
     * Reservoir sampling
     */ for(let r = 0; r < state.length; r++){
            for(let c = 0; c < state[r].length; c++)if (state[r][c] === 0) {
                count++;
                if (Math.random() < 1 / count) result = [
                    r,
                    c
                ];
            }
        }
        result;
        return result;
    }
    /**
   * Create 2 dimensions array and fill with value
   * @param rows
   * @param cols
   * @param initialValue
   * @return {any[]}
   * @private
   */ _create2DArray(rows, cols, initialValue = 0) {
        const result = new Array(rows);
        for(let i = 0; i < rows; i++)result[i] = new Array(cols).fill(initialValue);
        return result;
    }
    /**
   * Get fancy health status (number of free cells' percentage)
   *
   * @return {number} - integer percentage
   */ _getHealthStatus() {
        const state = this.getState();
        const freeCellNumber = state.flat().filter((val)=>parseInt(val) === 0 ? 1 : 0).length;
        return Math.round(freeCellNumber / (this.#width * this.#height) * 100);
    }
    /**
   * Update doomguy fancy icon
   * @return void
   * @private
   */ _updateDoomguy() {
        /**
     * Custom doom guy event
     * @type {CustomEvent}
     */ const doomguyEvent = new CustomEvent((0, _doomguyClassJs.Doomguy).event, {
            detail: {
                health: this._getHealthStatus()
            }
        });
        // Dispatching on the window object
        window.dispatchEvent(doomguyEvent);
    }
    /**
   * Update high-score table
   * @return void
   * @private
   */ _updateHighScore() {
        // eslint-disable-next-line no-new
        new (0, _initialsPromptClassJs.InitialsPrompt)({
            onSubmit: (initials)=>{
                this.#scoreController.addScore(initials, this.getScore());
                this.restart();
            }
        });
    }
}

},{"./Control.class.js":"jmloY","./Effect.class.js":"7CU03","./Palette.class.js":"9uSsT","./About.class.js":"1D57w","./Score.class.js":"iP3Qh","./Doomguy.class.js":"fgUco","./BounceEffect.class.js":"eSzFg","./InitialsPrompt.class.js":"gWrW5","./Sound.class":"7lR9F","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jmloY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Container for callback actions
 */ parcelHelpers.export(exports, "CbContainer", ()=>CbContainer);
/**
 * This class supports simple control actions:
 * - mouse/touch/pointer swipe on board
 */ parcelHelpers.export(exports, "Control", ()=>Control);
'use strict';
class CbContainer {
    /**
   * Control callback for the left action
   * @type {function}
   * @private
   */ left;
    /**
   * Control callback for the right action
   * @type {function}
   * @private
   */ right;
    /**
   * Control callback for the up action
   * @type {function}
   * @private
   */ up;
    /**
   * Control callback for the down action
   * @type {function}
   * @private
   */ down;
    /**
   * Constructor
   * @param callbacks
   */ constructor(callbacks = {}){
        this.left = callbacks.left ?? null;
        this.right = callbacks.right ?? null;
        this.up = callbacks.up ?? null;
        this.down = callbacks.down ?? null;
    }
}
class Control {
    /**
   * Minimal distance in px to activate swipe
   * @type {number}
   * @private
   */ static #minDistance = 30;
    /** @type {number} */ #startX = 0;
    /** @type {number} */ #startY = 0;
    /** @type {boolean} */ #isPointerDown = false;
    /** @type {boolean} */ #swipeFired = false;
    /** @type {HTMLElement} */ #board;
    /** @type {CbContainer} */ #callbacks;
    /**
   * Constructor
   *
   * @param boardContainer
   * @param callbackContainer
   */ constructor(boardContainer, callbackContainer = new CbContainer()){
        if (!(boardContainer instanceof HTMLElement)) throw new Error('Control: boardContainer must be an HTMLElement');
        this.#board = boardContainer;
        this.#callbacks = callbackContainer;
        // Use Pointer Events for unified handling
        this.#board.addEventListener('pointerdown', this.#onPointerDown);
    }
    /**
   * Process action on pointer down
   * @param {PointerEvent} e
   * @private
   */ #onPointerDown(e) {
        // Ignore non-left mouse button
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        this.#isPointerDown = true;
        this.#swipeFired = false;
        this.#startX = e.clientX;
        this.#startY = e.clientY;
        // Capture the pointer to keep receiving events outside the element
        if (this.#board.setPointerCapture) try {
            this.#board.setPointerCapture(e.pointerId);
        } catch  {
        // no-op if capture isn't available,
        // production mode, "something goes wrong"?
        }
        // Attach move/up handlers for the duration of the gesture
        this.#board.addEventListener('pointermove', this.#onPointerMove);
        this.#board.addEventListener('pointerup', this.#onPointerUpOrCancel);
        this.#board.addEventListener('pointercancel', this.#onPointerUpOrCancel);
    }
    /**
   * Process action on pointer move
   * @param {PointerEvent} e
   * @private
   */ #onPointerMove(e) {
        if (!this.#isPointerDown || this.#swipeFired) return;
        const dx = e.clientX - this.#startX;
        const dy = e.clientY - this.#startY;
        const adx = Math.abs(dx);
        const ady = Math.abs(dy);
        // Wait until the threshold is exceeded
        if (Math.max(adx, ady) < Control.#minDistance) return;
        // Decide axis by the larger delta and fire exactly one callback
        if (adx > ady) {
            if (dx > 0) {
                if (this.#callbacks.right) this.#callbacks.right();
            } else if (this.#callbacks.left) this.#callbacks.left();
        } else {
            if (dy > 0) {
                if (this.#callbacks.down) this.#callbacks.down();
            } else if (this.#callbacks.up) this.#callbacks.up();
        }
        this.#swipeFired = true;
    }
    /**
   * Process action on pointer up or cancel
   * @param {PointerEvent} e
   * @private
   */ #onPointerUpOrCancel(e) {
        this.#isPointerDown = false;
        this.#swipeFired = false;
        if (this.#board.releasePointerCapture) try {
            this.#board.releasePointerCapture(e.pointerId);
        } catch  {
        // no-op, production mode, "something goes wrong"?
        }
        this.#board.removeEventListener('pointermove', this.#onPointerMove);
        this.#board.removeEventListener('pointerup', this.#onPointerUpOrCancel);
        this.#board.removeEventListener('pointercancel', this.#onPointerUpOrCancel);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
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

},{}],"7CU03":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Effect for a number container:
 * - frame-by-frame "shaking" for each character (translate X/Y and rotate)
 * - smooth color transitions across the palette: container background and text
 *
 * Important: the palette must be in the following format:
 * palette = [
 * { background: '#rrggbb' | 'colorName', text: '#rrggbb' | 'colorName' },
 * ...
 * ]
 * Support for any other formats is intentional.
 */ parcelHelpers.export(exports, "Effect", ()=>Effect);
var _paletteClassJs = require("./Palette.class.js");
'use strict';
class Effect {
    /**
   * All modal windows
   * @type {TileColor[]}
   * @private
   */ #palette;
    /**
   * Palette index
   * @type {number}
   * @private
   */ #palIdx;
    /**
   * Configuration
   * @type {Object}
   * @private
   */ #cfg;
    /**
   * Span children of container
   * @type {HTMLSpanElement[]}
   * @private
   */ #spans;
    /**
   * Timer uuid
   * @type {number}
   * @private
   */ #timerId;
    /**
   * Last color switch timestamp
   * @type {DOMHighResTimeStamp}
   * @private
   */ #lastColorSwitchTs;
    /**
   * Jitter states
   * @type {WeakMap}
   */ #jitterStates;
    /**
   * Jitter request animation fream handler
   * @type {number}
   */ #jitterRaf;
    /**
   * Root container
   * @private {HTMLElement}
   */ _root;
    /**
   * Constructor
   * @param {HTMLElement} root container for animation with some text
   * @result Effect
   */ constructor(root){
        if (!(root instanceof HTMLElement)) return;
        this._root = root;
        return this;
    }
    /**
   * Apply effect
   *
   * @param {Object} [options]
   * @param {number} [options.strengthJitter] shaking amplitude for O(x) (px)
   * @param {number} [options.strengthJitterY] shaking amplitude for O(y) (px)
   *  by default - options.strengthJitter - the same as for O(x)
   * @param {number} [options.strengthRotate] rotation amplitude (deg)
   * @param {number} [options.interval] general refresh interval
   * @param {number} [options.colorDuration] timing for smooth color change
   * @param {TileColor[]} - color palette for tiles
   */ apply({ strengthJitter = 7, strengthJitterY = 14, strengthRotate = 5, interval = 2000, colorDuration = 5000, palette = (0, _paletteClassJs.Palette).tilePalette } = {}) {
        this.#cfg = {
            strengthJitter,
            strengthJitterY: strengthJitterY ?? strengthJitter,
            strengthRotate,
            interval,
            colorDuration
        };
        // validate and apply palette
        this.#palette = this._validatePalette(palette) ? palette.slice() : [];
        this.#palIdx = 0;
        // Define the state of elements and timer
        this.#spans = [];
        this.#timerId = null;
        this.#lastColorSwitchTs = 0;
        // Prepare DOM: wrap symbols for individual effects
        this._wrapTextNodes();
        this.#jitterStates = new WeakMap();
        this.#jitterRaf = null;
        // Prepare initial state
        this._initJitterState();
        // Start with smooth twining
        this._rafJitter();
        // Set up the CSS transition for a smooth color change
        this._setupColorTransitions();
        // Set up the initial color if we have a palette without animation
        if (this.#palette.length > 0) {
            this._applyNextPaletteColor(true);
            this.#lastColorSwitchTs = performance.now();
        }
        // Start a global timer
        this.start();
    }
    /**
   * Change palette on the fly
   * Strict format: Array<{ background: string, text: string }>
   * Start animation from start to new color
   * @param {Array<{background: string, text: string}>} palette
   */ setPalette(palette) {
        if (!this._validatePalette(palette)) return;
        this.#palette = palette.slice();
        this.#palIdx = 0;
        // Set new palette color for animation
        // Got smooth change because of transition
        this._applyNextPaletteColor(false);
        this.#lastColorSwitchTs = performance.now();
    }
    /**
   * Start refresh is it is not in progress yet
   */ start() {
        if (this.#timerId) return;
        const { interval, colorDuration } = this.#cfg;
        this.#timerId = setInterval(()=>{
            const now = performance.now();
            // 1) jitter effect for each symbol
            this._tickJitter();
            // 2) change color by palette
            if (this.#palette.length > 0 && now - this.#lastColorSwitchTs >= colorDuration) {
                this._applyNextPaletteColor(false);
                this.#lastColorSwitchTs = now;
            }
        }, interval);
    }
    /**
   * Stop refresh
   */ stop() {
        if (this.#jitterRaf !== 0) {
            cancelAnimationFrame(this.#jitterRaf);
            this.#jitterRaf = 0;
        }
        if (this.#timerId) {
            clearInterval(this.#timerId);
            this.#timerId = 0;
        }
    }
    /**
   * Destroy and full clean-up
   */ destroy() {
        this.stop();
    }
    /**
   * Validate the palette
   * @param palette
   * @return {false|*}
   * @private
   */ _validatePalette(palette) {
        return Array.isArray(palette) && palette.length > 0 && palette.every((paletteElm)=>paletteElm && typeof paletteElm === 'object' && typeof paletteElm.background === 'string' && typeof paletteElm.text === 'string');
    }
    /**
   * Set up smooth color transitions
   * @private
   */ _setupColorTransitions() {
        const { colorDuration } = this.#cfg;
        // Smooth color transition for background and text
        const transitionRoot = [
            `background-color ${colorDuration}ms linear`,
            `color ${colorDuration}ms linear`
        ].join(', ');
        this._root.style.transition = transitionRoot;
        // Smooth color transition for each symbol
        for (const span of this.#spans)span.style.transition = `color ${colorDuration}ms linear`;
    }
    /**
   * Apply the next palette color
   * @param initial
   * @private
   */ _applyNextPaletteColor(initial = false) {
        if (this.#palette.length === 0) return;
        const idx = this.#palIdx % this.#palette.length;
        const { background, text } = this.#palette[idx];
        if (initial) {
            const prevRootTransition = this._root.style.transition;
            const prevSpanTransitions = this.#spans.map((s)=>s.style.transition);
            this._root.style.transition = 'none';
            for (const s of this.#spans)s.style.transition = 'none';
            this._root.style.backgroundColor = background;
            this._root.style.color = text;
            // Define span color instead of container - in relation to extendability
            for (const s of this.#spans)s.style.color = text;
            // Force reflow, trigger the browser to apply changes
            // and recalculate the layout
            this._root.offsetHeight;
            // restore transitions
            this._root.style.transition = prevRootTransition;
            this.#spans.forEach((s, i)=>s.style.transition = prevSpanTransitions[i]);
        } else {
            // Smoothly to the next color
            this._root.style.backgroundColor = background;
            this._root.style.color = text;
            for (const s of this.#spans)s.style.color = text;
        }
        this.#palIdx += 1;
    }
    /**
   * Wrap symbols to span
   * @return {1|2}
   * @private
   */ _wrapTextNodes() {
        const walker = document.createTreeWalker(this._root, NodeFilter.SHOW_TEXT, {
            acceptNode (node) {
                // skip empty/space nodes
                return /\S/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
            }
        });
        const textNodes = [];
        while(walker.nextNode())textNodes.push(walker.currentNode);
        for (const textNode of textNodes){
            const parentEl = textNode.parentElement;
            if (!parentEl) continue;
            const text = textNode.nodeValue;
            const frag = document.createDocumentFragment();
            for(let i = 0; i < text.length; i += 1){
                const ch = text[i];
                if (/\s/.test(ch)) // Save spaces/etc without a wrapper
                frag.appendChild(document.createTextNode(ch));
                else {
                    const span = document.createElement('span');
                    span.className = 'digit-distorted';
                    span.textContent = ch;
                    frag.appendChild(span);
                    this.#spans.push(span);
                }
            }
            parentEl.replaceChild(frag, textNode);
        }
    }
    /**
   * Animation
   * @private
   */ _tickJitter() {
        const now = performance.now();
        // prettier-ignore
        const { strengthJitter, strengthJitterY, strengthRotate, interval } = this.#cfg;
        for (const span of this.#spans){
            const st = this.#jitterStates.get(span);
            if (!st) continue;
            // Calculate the current position at the moment of target recalculation
            const t = Math.min(1, (now - st.startedAt) / st.duration);
            const ease = t * t * (3 - 2 * t); // smoothstep
            const cur = {
                tx: st.from.tx + (st.to.tx - st.from.tx) * ease,
                ty: st.from.ty + (st.to.ty - st.from.ty) * ease,
                rot: st.from.rot + (st.to.rot - st.from.rot) * ease
            };
            // Shift "from" to current value and define new "to"
            st.from = cur;
            st.to = {
                tx: (Math.random() * 2 - 1) * strengthJitter,
                ty: (Math.random() * 2 - 1) * strengthJitterY,
                rot: (Math.random() * 2 - 1) * strengthRotate
            };
            st.startedAt = now;
            st.duration = interval;
        }
    }
    // Initialise the states for drift for every span
    _initJitterState() {
        const now = performance.now();
        // prettier-ignore
        const { strengthJitter, strengthJitterY, strengthRotate, interval } = this.#cfg;
        for (const span of this.#spans){
            const state = {
                from: {
                    tx: 0,
                    ty: 0,
                    rot: 0
                },
                to: {
                    tx: (Math.random() * 2 - 1) * strengthJitter,
                    ty: (Math.random() * 2 - 1) * strengthJitterY,
                    rot: (Math.random() * 2 - 1) * strengthRotate
                },
                startedAt: now,
                duration: interval
            };
            this.#jitterStates.set(span, state);
        }
    }
    // Render of smooth shift
    _rafJitter() {
        const now = performance.now();
        for (const span of this.#spans){
            const st = this.#jitterStates.get(span);
            if (!st) continue;
            const t = Math.min(1, (now - st.startedAt) / st.duration);
            const ease = t * t * (3 - 2 * t); // smoothstep
            const tx = st.from.tx + (st.to.tx - st.from.tx) * ease;
            const ty = st.from.ty + (st.to.ty - st.from.ty) * ease;
            const rot = st.from.rot + (st.to.rot - st.from.rot) * ease;
            span.style.setProperty('--jitter-translate', `${tx.toFixed(2)}px, ${ty.toFixed(2)}px`);
            span.style.setProperty('--jitter-rot', `${rot.toFixed(2)}deg`);
        }
        this.#jitterRaf = requestAnimationFrame(this._rafJitter.bind(this));
    }
}

},{"./Palette.class.js":"9uSsT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9uSsT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Base palette container
 */ parcelHelpers.export(exports, "Palette", ()=>Palette);
'use strict';
class Palette {
    /**
   * @typedef {Object} TileColor
   * @property {string} background - The tile's background color in CSS format.
   * @property {string} text - The color of the text on the tile.
   */ /**
   * Tile palette
   * @type {TileColor[]}
   */ static tilePalette = [
        {
            background: '#fffbe6',
            text: 'black'
        },
        {
            background: '#fff2cc',
            text: 'black'
        },
        {
            background: '#ffd699',
            text: 'black'
        },
        {
            background: '#ffbb66',
            text: 'black'
        },
        {
            background: '#ffaa52',
            text: 'white'
        },
        {
            background: '#ff9933',
            text: 'white'
        },
        {
            background: '#f26a5a',
            text: 'white'
        },
        {
            background: '#ec5d82',
            text: 'white'
        },
        {
            background: '#d95cad',
            text: 'white'
        },
        {
            background: '#9966cc',
            text: 'white'
        },
        {
            background: '#3366cc',
            text: 'white'
        },
        {
            background: '#008c8c',
            text: 'black'
        },
        {
            background: '#006633',
            text: 'white'
        },
        {
            background: '#ffd700',
            text: 'black'
        },
        {
            background: '#ffffff',
            text: 'black'
        },
        {
            background: '#262633',
            text: 'white'
        }
    ];
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"1D57w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "About", ()=>About);
var _modalClass = require("./Modal.class");
'use strict';
class About extends (0, _modalClass.Modal) {
    /**
   * About effect
   * @type {string}
   * @private
   */ static #rippleEasing = 'cubic-bezier(0.1, 0.7, 1, 0.1)';
    /**
   * About effect delay step
   * @type {number}
   * @private
   */ static #rippleDelayStep = 0.2;
    /**
   * About effects waves count
   * @type {number}
   * @private
   */ static #wavesCount = 5;
    /**
   * Initializes CTA
   *
   * @private
   */ _init() {
        // Apply effects
        const fragment = document.createDocumentFragment();
        for(let i = 0; i < About.#wavesCount; i++)fragment.appendChild(this._createRipple(i));
        this._ctaElement.appendChild(fragment);
        super._init();
    }
    /**
   * Creates a single ripple element
   * @param {number} index
   * @returns {HTMLSpanElement}
   * @private
   */ _createRipple(index) {
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.transitionTimingFunction = About.#rippleEasing;
        ripple.style.animationDelay = `${index * About.#rippleDelayStep}s`;
        return ripple;
    }
}

},{"./Modal.class":"9tnVV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9tnVV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modal", ()=>Modal);
var _soundClass = require("./Sound.class");
'use strict';
class Modal {
    /**
   * CTA element to control the modal window
   * @type {HTMLElement}
   * @protected
   */ _ctaElement;
    /**
   * Modal window
   * @type {HTMLElement | null}
   * @private
   */ _modalWindowElement;
    /**
   * All modal windows
   * @type {HTMLElement[]}
   * @private
   */ _modalWindowElements;
    /**
   * Game content
   * @type {HTMLElement[]}
   * @private
   */ _gameContent;
    /**
   * Constructor
   *
   * @param {HTMLElement} ctaElement - current CTA to show/hide modal
   * @param {HTMLElement} modalWindowElement - modal itself
   * @param {NodeListOf<HTMLElement>} modalWindowElements - list all modals
   * @param {NodeListOf<HTMLElement>} gameContentElements - list game elements
   */ constructor(ctaElement, modalWindowElement, modalWindowElements, gameContentElements){
        if (!(ctaElement instanceof HTMLElement)) throw new Error('ctaElement must be an HTMLElement');
        // menu
        this._ctaElement = ctaElement;
        if (!(modalWindowElement instanceof HTMLElement)) throw new Error('modalWindowElement must be an HTMLElement');
        // pop-up window
        this._modalWindowElement = modalWindowElement;
        // all pop-ups
        this._modalWindowElements = modalWindowElements instanceof HTMLElement ? [
            modalWindowElements
        ] : Array.from(modalWindowElements || []);
        // Normalize to array, for use with forEach
        this._gameContent = gameContentElements instanceof HTMLElement ? [
            gameContentElements
        ] : Array.from(gameContentElements || []);
        this._init();
    }
    /**
   * Initializes CTA
   *
   * @private
   */ _init() {
        // Init popup window show CTA
        this._ctaElement.addEventListener('click', (e)=>this._show(e));
    }
    /**
   * Show a modal window and hide other modals + game content
   * @private
   */ _show(e) {
        this._gameContent.forEach((el)=>el.classList.add('hidden'));
        (0, _soundClass.Sound).stop();
        this._modalWindowElements.forEach((el)=>{
            if (el === this._modalWindowElement) el.classList.remove('hidden');
            else el.classList.add('hidden');
        });
    }
}

},{"./Sound.class":"7lR9F","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7lR9F":[function(require,module,exports,__globalThis) {
/**
 * Sound class for play the mp3 files, used Web Audio API
 * Singleton
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Sound", ()=>Sound);
class Sound {
    /**
   * Instance of Sound class
   * @type {Sound}
   */ static #instance = null;
    /**
   * Browser audio context
   * @type {AudioContext||webkitAudioContext}
   */ static #context = null;
    /**
   * Audio buffer source node
   * @type {AudioBufferSourceNode}
   */ static #currentSourceNode = null;
    /**
   * Array buffer
   * @type {ArrayBuffer}
   */ static #audioBuffer = null;
    constructor(){
        if (Sound.#instance) return Sound.#instance;
        Sound.#context = new (window.AudioContext || window.webkitAudioContext)();
        Sound.#instance = this;
    }
    /**
   * Get singleton of class
   *
   * @return {null}
   */ static getInstance() {
        if (!Sound.#instance) Sound.#instance = new Sound();
        return Sound.#instance;
    }
    /**
   * Open audio file and play it
   * @param {string} url - URL of audio file
   * @param {boolean} [loop=false] - loop on/off
   */ static async play(url, loop = false) {
        // be sure that we intialized the context of singleton
        Sound.getInstance();
        // check context and resume
        if (Sound.#context.state === 'suspended') await Sound.#context.resume();
        // stop previous sound if it is playing
        Sound.stop();
        // load and decode audio
        if (Sound.#audioBuffer === null || url !== Sound.#audioBuffer.url) {
            /**
       * await to get the music file
       * @type {Response}
       */ const resp = await fetch(url);
            /**
       * await to get it as an array buffer
       * @type {ArrayBuffer}
       */ const arrayBuffer = await resp.arrayBuffer();
            /**
       * await to decode audio data
       * @type {AudioBuffer}
       */ const decodedBuffer = await Sound.#context.decodeAudioData(arrayBuffer);
            // initialize class audio buffer
            Sound.#audioBuffer = decodedBuffer;
            // preserve url for reuse data
            Sound.#audioBuffer.url = url;
        }
        // Create audio source from buffer and start playing
        /**
     * audio source
     * @type {AudioBufferSourceNode}
     */ const source = Sound.#context.createBufferSource();
        source.buffer = Sound.#audioBuffer;
        source.loop = loop;
        source.connect(Sound.#context.destination);
        // keep link to current source node
        Sound.#currentSourceNode = source;
        // start play
        source.start(0);
    }
    /**
   * Stop current play
   */ static stop() {
        if (Sound.#currentSourceNode) {
            try {
                Sound.#currentSourceNode.stop();
            } catch (e) {
            // just for skip error if audio is already stopped
            }
            Sound.#currentSourceNode = null;
        }
    }
    /**
   * Beep sound
   * @param freq
   * @param duration
   */ static beep(freq = 600, duration = 0.08) {
        // be sure that we intialized the context of singleton
        Sound.getInstance();
        try {
            const ctx = Sound.#context;
            const o = ctx.createOscillator();
            const g = ctx.createGain();
            o.type = 'sine';
            o.frequency.value = freq;
            o.connect(g);
            g.connect(ctx.destination);
            const now = ctx.currentTime;
            g.gain.setValueAtTime(0.0001, now);
            g.gain.exponentialRampToValueAtTime(0.2, now + 0.01);
            g.gain.exponentialRampToValueAtTime(0.0001, now + duration);
            o.start(now);
            o.stop(now + duration + 0.02);
        } catch  {
        // noop
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"iP3Qh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class for score record
 */ parcelHelpers.export(exports, "ScoreRecord", ()=>ScoreRecord);
/**
 * Class for score window
 */ parcelHelpers.export(exports, "Score", ()=>Score);
var _modalClass = require("./Modal.class");
var _soundClass = require("./Sound.class");
var _stranglersGoldenBrownMp3 = require("url:../audio/Stranglers-GoldenBrown.mp3");
var _stranglersGoldenBrownMp3Default = parcelHelpers.interopDefault(_stranglersGoldenBrownMp3);
'use strict';
class ScoreRecord {
    /**
   * Name
   * @type {String}
   * @public
   */ nickname;
    /**
   * Score
   * @type {number}
   * @public
   */ score;
    /**
   * Constructor
   *
   * @param nickname
   * @param score
   */ constructor(nickname, score){
        this.nickname = nickname;
        this.score = score;
    }
}
class Score extends (0, _modalClass.Modal) {
    /**
   * High-score local storage key
   * @type {String}
   * @private
   */ static #highScoreLocalStorage = 'highScore';
    /**
   * High-score container selector
   * @type {string}
   */ static #highScoreContainerSelector = '.window-score-body';
    /**
   * Score record selector
   * @type {string}
   */ static #scoreRecordSelector = '.score-record';
    /**
   * High-score container
   * @private
   */ #highScoreContainer;
    /**
   * Score board
   * @type {[ScoreRecord]} score board
   * @private
   */ static #scoreBoardFallback = [
        {
            nickname: 'OOO',
            score: 1024
        },
        {
            nickname: 'OOO',
            score: 512
        },
        {
            nickname: 'PPP',
            score: 256
        },
        {
            nickname: 'SSS',
            score: 128
        },
        {
            nickname: 'III',
            score: 64
        },
        {
            nickname: 'DDD',
            score: 32
        },
        {
            nickname: 'III',
            score: 16
        },
        {
            nickname: 'DDD',
            score: 8
        },
        {
            nickname: 'III',
            score: 4
        },
        {
            nickname: 'TTT',
            score: 2
        }
    ];
    /**
   * Actual scoreboard
   * @type {[ScoreRecord]}
   */ #scoreBoard = [];
    /**
   * Score board records limit
   * @type {number}
   */ static #scoreBoardLimit = 10;
    /**
   * Main sound theme path
   * @type {string}
   */ static #mainThemePath = (0, _stranglersGoldenBrownMp3Default.default);
    /**
   * Constructor
   *
   * @param args
   */ constructor(...args){
        super(...args);
        this._postInit();
    }
    /**
   * Initializes high-score table and animation
   *
   * @private
   */ _postInit() {
        // define this scope for _show
        this._show = this._show.bind(this);
        if (this.#scoreBoard = localStorage.getItem(Score.#highScoreLocalStorage)) try {
            this.#scoreBoard = JSON.parse(this.#scoreBoard);
        } catch (e) {
        // suppress non-epic issues
        }
        // fallback to constant scores
        if (!Array.isArray(this.#scoreBoard) || this.#scoreBoard.length === 0) this.#scoreBoard = Score.#scoreBoardFallback;
        this.#highScoreContainer = document.querySelector(Score.#highScoreContainerSelector);
        if (!this.#highScoreContainer) throw new Error('highScoreContainer is not defined');
        // Init visuals
        for (const record of this.#scoreBoard){
            const recordElement = document.createElement('div');
            recordElement.className = 'score-record';
            recordElement.innerHTML = `
        <div class="score-record-nickname">${record.nickname}</div>
        <div class="score-record-score">${record.score}</div>
      `;
            this.#highScoreContainer.appendChild(recordElement);
        }
        // CTA to hide high-score table
        this.#highScoreContainer.addEventListener('click', ()=>{
            this.#highScoreContainer.querySelectorAll(Score.#scoreRecordSelector).forEach((el)=>el.classList.add('hidden'));
        });
    }
    _show() {
        super._show();
        (0, _soundClass.Sound).play(Score.#mainThemePath, true);
        this.#highScoreContainer.querySelectorAll(Score.#scoreRecordSelector).forEach((el)=>el.classList.remove('hidden'));
    }
    addScore(nickname, score) {
        if (typeof nickname !== 'string' || nickname.length !== 3 || !Number.isInteger(score) || score < 0) throw new Error('Invalid nickname or score');
        this.#scoreBoard.push(new ScoreRecord(nickname, score));
        this.#scoreBoard.sort((a, b)=>b.score - a.score);
        this.#scoreBoard.splice(Score.#scoreBoardLimit);
        localStorage.setItem(Score.#highScoreLocalStorage, JSON.stringify(this.#scoreBoard));
    }
}

},{"./Modal.class":"9tnVV","./Sound.class":"7lR9F","url:../audio/Stranglers-GoldenBrown.mp3":"9N961","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9N961":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Stranglers-GoldenBrown.cd23d8e2.mp3") + "?" + Date.now();

},{}],"fgUco":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * This class supports doomguy fancy animation to freshen up the game
 */ parcelHelpers.export(exports, "Doomguy", ()=>Doomguy);
'use strict';
class Doomguy {
    static event = 'DOOM_GUY_UPDATE_EVENT';
    static #minHealth = 0;
    static #maxHealth = 100;
    /**
   * Doomguy DOM elements
   * @type {NodeListOf<Element>}
   * @private
   */ #elements;
    /**
   * @param {NodeListOf<Element>} doomguyElements
   */ constructor(doomguyElements){
        if (!(doomguyElements instanceof NodeList)) throw new Error('Doomguy elements must be a NodeList');
        this.#elements = doomguyElements;
        // initialize health
        this.#elements.forEach((el)=>{
            /**
       * @var el.dataset
       * @type {DOMStringMap}
       */ el.dataset.health = Doomguy.#maxHealth.toString();
        });
        // listen for window event and update all elements in the listener
        window.addEventListener(Doomguy.event, (e)=>{
            const health = e?.detail?.health;
            if (!Number.isInteger(health)) return;
            const normalizeHealth = Math.max(Doomguy.#minHealth, Math.min(Doomguy.#maxHealth, health));
            this.#elements.forEach((el)=>{
                el.dataset.health = String(normalizeHealth);
            });
        });
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"eSzFg":[function(require,module,exports,__globalThis) {
/**
 * Bounce effect applier on inner element
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BounceEffect", ()=>BounceEffect);
class BounceEffect {
    /**
   * Container for animation
   * @type {HTMLElement}
   */ #container;
    /**
   * Inner animation element
   * @type {HTMLElement}
   */ #innerElement;
    /**
   * Number of bounces for effect
   * @type {number}
   */ #bounces;
    /**
   * Duration of effect in ms
   * @type {number}
   */ #duration;
    /**
   * Animation frame
   * @type {number|null}
   */ #animationFrame = null;
    /**
   * Start time
   * @type {DOMHighResTimeStamp|null}
   */ #startTime = null;
    // Extracted constants for readability and reuse
    static #MAX_AMPLITUDE = 20;
    static #RESET_TRANSFORM = 'translateX(0)';
    /**
   * Constructor
   *
   * @param {HTMLElement} element - container element
   * @param {HTMLElement} innerElement - target element of animation
   * @param {number} bounces - number of bounces
   * @param {number} duration - total duration of animation
   */ constructor(element, innerElement, bounces = 10, duration = 2000){
        if (!element || !innerElement) throw new Error('Animation elements are not defined properly');
        this.#container = element;
        this.#innerElement = innerElement;
        this.#bounces = bounces;
        this.#duration = duration;
        this.#container.addEventListener('mouseenter', this.#handleMouseEnter);
        this.#container.addEventListener('click', this.#handleClick);
    }
    /**
   * Handle mouse enter event (arrow to keep lexical this)
   * NB:
   * Arrow functions in JavaScript do not bind their own this value.
   * Instead, they lexically capture this value
   * from their surrounding scope at the time of their creation.
   */ #handleMouseEnter = ()=>{
        this.#cancelAnimation();
        this.#startTime = performance.now();
        this.#animationFrame = requestAnimationFrame(this.#animate);
    };
    /**
   * Animate method
   * @param {DOMHighResTimeStamp} now
   */ #animate = (now)=>{
        if (this.#startTime == null) return;
        const elapsed = now - this.#startTime;
        const progress = Math.min(elapsed / this.#duration, 1);
        const amplitude = (1 - progress) * BounceEffect.#MAX_AMPLITUDE;
        const angle = progress * this.#bounces * Math.PI * 2;
        const x = Math.sin(angle) * amplitude;
        this.#innerElement.style.transform = `translateX(${x}px)`;
        if (progress < 1) this.#animationFrame = requestAnimationFrame(this.#animate);
        else {
            this.#innerElement.style.transform = BounceEffect.#RESET_TRANSFORM;
            this.#animationFrame = null;
        }
    };
    /**
   * Handle mouse click event (arrow to keep lexical this)
   */ #handleClick = ()=>{
        this.#cancelAnimation();
        this.#innerElement.style.transform = BounceEffect.#RESET_TRANSFORM;
    };
    #cancelAnimation() {
        if (this.#animationFrame != null) {
            cancelAnimationFrame(this.#animationFrame);
            this.#animationFrame = null;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"gWrW5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Class for enter initials for high score
 */ parcelHelpers.export(exports, "InitialsPrompt", ()=>InitialsPrompt);
var _soundClass = require("./Sound.class");
'use strict';
class InitialsPrompt {
    /**
   * Constructor
   * @param onSubmit - cb when prompts are entered
   */ constructor({ onSubmit }){
        this.letters = [
            'A',
            'A',
            'A'
        ];
        this.currentIndex = 0;
        this.onSubmit = onSubmit;
        this.#render();
        this.#bindEvents();
    }
    /**
   * Renders the popup for the hiscore name
   */ #render() {
        // One-time style injection for triangles and weak blink
        if (!document.getElementById('initials-prompt-style')) {
            const style = document.createElement('style');
            style.id = 'initials-prompt-style';
            style.textContent = `

      `;
            document.head.appendChild(style);
        }
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'initials-backdrop';
        // prettier-ignore
        this.backdrop.innerHTML = String.raw`
      <div class="initials-popup">
        <div class="initials-popup-container">
          <div>ENTER YOUR NAME</div>
          <div class="initials-controls">
            <button class="tri-btn tri-left tri-side" type="button"
            data-action="prev" aria-label="Previous position"></button>
            <div class="initials-letters" role="group"
            aria-label="Initials editor">
              ${this.letters.map((l, i)=>`
                <div class="letter-wrap" data-index="${i}">
                  <button class="tri-btn tri-up" type="button"
                    data-action="inc" data-index="${i}"
                    aria-label="Next letter">
                  </button>
                  <div class="letter ${i === 0 ? 'is-active' : ''}"
                    role="button" aria-pressed="${i === 0}"
                    aria-label="Letter ${i + 1}">
                    ${l}
                  </div>
                  <button class="tri-btn tri-down" type="button"
                    data-action="dec" data-index="${i}"
                    aria-label="Previous letter">
                  </button>
                </div>
              `).join('')}
            </div>
            <button class="tri-btn tri-right tri-side" type="button"
              data-action="next" aria-label="Next position">
            </button>
          </div>
          <button class="enter-btn" type="button" data-action="submit">
            ✔ ENTER
          </button>
        </div>
      </div>`;
        this.container = document.createElement('div');
        this.container.className = 'initials-container';
        this.container.appendChild(this.backdrop);
        document.body.appendChild(this.container);
        // Cache elements
        this.letterEls = Array.from(this.backdrop.querySelectorAll('.initials-letters .letter'));
        // Autofocus on the first letter
        this.letterEls[0].tabIndex = 0;
        this.letterEls[0].focus();
        this.enterBtn = this.backdrop.querySelector('.enter-btn');
        this.enterBtn.addEventListener('click', ()=>{
            this.handleSubmit();
        });
    }
    /**
   * Binds events for change letters
   */ #bindEvents() {
        // Keyboard controls
        this.keyHandler = (e)=>{
            if (e.key === 'ArrowRight') {
                this.currentIndex = (this.currentIndex + 1) % this.letters.length;
                this.#updateActive();
                (0, _soundClass.Sound).beep(600);
            }
            if (e.key === 'ArrowLeft') {
                this.currentIndex = (this.currentIndex + this.letters.length - 1) % this.letters.length;
                this.#updateActive();
                (0, _soundClass.Sound).beep(500);
            }
            if (e.key === 'ArrowUp') {
                this.#changeLetterAt(this.currentIndex, 1);
                (0, _soundClass.Sound).beep(700);
            }
            if (e.key === 'ArrowDown') {
                this.#changeLetterAt(this.currentIndex, -1);
                (0, _soundClass.Sound).beep(400);
            }
            if (e.key === 'Enter') this.#submit();
            if (e.key === 'Escape') this.#cancel();
        };
        window.addEventListener('keydown', this.keyHandler, {
            passive: true
        });
        // Click/tap controls via event delegation on a backdrop
        this.clickHandler = (e)=>{
            const btn = e.target.closest('[data-action]');
            if (!btn) return;
            const action = btn.getAttribute('data-action');
            // init letter only in case when a button is close to a letter
            let letter = null;
            // Set currentIndex only for buttons that modify letter
            // For prev and next button - just change the current index
            if (action === 'inc' || action === 'dec') {
                this.currentIndex = Number(btn.getAttribute('data-index'));
                letter = btn.parentElement.querySelector('.letter');
                // set focus on a letter that we're changing
                letter.focus();
            }
            switch(action){
                case 'prev':
                    // just change the current index
                    this.currentIndex = (this.currentIndex + this.letters.length - 1) % this.letters.length;
                    this.#updateActive();
                    (0, _soundClass.Sound).beep(500);
                    // focus on the new active letter
                    this.letterEls[this.currentIndex].focus();
                    break;
                case 'next':
                    // just change the current index
                    this.currentIndex = (this.currentIndex + 1) % this.letters.length;
                    this.#updateActive();
                    (0, _soundClass.Sound).beep(600);
                    // focus on the new active letter
                    this.letterEls[this.currentIndex].focus();
                    break;
                case 'inc':
                    this.#changeLetterAt(this.currentIndex, 1);
                    this.#updateActive();
                    (0, _soundClass.Sound).beep(700);
                    // focus on the new active letter
                    this.letterEls[this.currentIndex].focus();
                    break;
                case 'dec':
                    this.#changeLetterAt(this.currentIndex, -1);
                    this.#updateActive();
                    (0, _soundClass.Sound).beep(400);
                    // focus on the new active letter
                    this.letterEls[this.currentIndex].focus();
                    break;
                default:
                    break;
            }
        };
        this.backdrop.addEventListener('click', this.clickHandler);
    }
    /**
   * Change a letter at a specific index by delta (+1/-1), update DOM
   * @param index
   * @param delta
   */ #changeLetterAt(index, delta) {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const current = this.letters[index] || 'A';
        const pos = alphabet.indexOf(current.toUpperCase());
        const nextPos = (pos + delta + alphabet.length) % alphabet.length;
        const nextChar = alphabet[nextPos];
        this.letters[index] = nextChar;
        const el = this.letterEls[index];
        if (el) el.textContent = nextChar;
    }
    /**
   * Visually update active letter and blinking state
   */ #updateActive() {
        this.letterEls.forEach((el, i)=>{
            el.classList.toggle('is-active', i === this.currentIndex);
            el.setAttribute('aria-pressed', String(i === this.currentIndex));
        });
    }
    /**
   * Submit name and clean up
   */ #submit() {
        const value = this.letters.join('');
        if (typeof this.onSubmit === 'function') this.onSubmit(value);
        this.#dispose();
    }
    /**
   * close popup
   */ #cancel() {
        this.#dispose();
    }
    /**
   * removes event handlers
   */ #dispose() {
        window.removeEventListener('keydown', this.keyHandler);
        this.backdrop.removeEventListener('click', this.clickHandler);
        if (this.container && this.container.parentNode) this.container.parentNode.removeChild(this.container);
    }
    /**
   * Handle submission of entered name
   */ handleSubmit() {
        const passedName = this.letterEls.map((el)=>el.textContent.trim()).join('');
        this.#dispose();
        this.onSubmit(passedName);
    }
}

},{"./Sound.class":"7lR9F","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["huHYX","3Aj1C"], "3Aj1C", "parcelRequire7b01", {}, "./", "/")

//# sourceMappingURL=js_2048_game.4841ef46.js.map
