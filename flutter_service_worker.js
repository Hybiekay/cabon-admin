'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"manifest.json": "f46bb7fb5b9882bc06fbdafb75a1be3f",
"flutter_bootstrap.js": "819522105e53b415159db01578f88a7a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/iconsax_plus/fonts/IconsaxPlusBroken.ttf": "71d12baa6ddbb770fb8f6d92021403e4",
"assets/packages/iconsax_plus/fonts/IconsaxPlusBold.ttf": "805a1bab0f9865af92fcec87325e104c",
"assets/packages/iconsax_plus/fonts/IconsaxPlusLinear.ttf": "08f8e5eef32e66caa70d237eea7e3edb",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/assets/images/smalllogo.png": "7de04a99e9b47101a6e55b5a0bd0bbad",
"assets/assets/images/like.svg": "97a2cee8c08cd3c7ffe775229157a6b8",
"assets/assets/images/home.svg": "8cbf0b3511a8b5e65617ac0abb14461f",
"assets/assets/images/first.png": "fd373f9de6179b36872b0c2099489d56",
"assets/assets/images/logo.png": "5bd8793cc329c8ece85776aa7c576424",
"assets/assets/images/comment.svg": "3a57a6a6b4a5e8e03b347141069f4503",
"assets/assets/images/notify.svg": "2932cfb6af7771fe803769ff06db934d",
"assets/assets/images/share.png": "65e9c3f3a1da4e994353bdb6a8779a0e",
"assets/assets/images/analytic.svg": "8c4c13e4fcb15aa981e0c80339b5b8c5",
"assets/assets/images/homelogo.png": "b3117e1b73c420cbf3eb91a9a8398fa4",
"assets/assets/images/third.png": "2f5f067880ff1f6339de9302b762d2df",
"assets/assets/images/tony.png": "294acb1e327b030a34f25e64f9f8335e",
"assets/assets/images/liveimage.png": "0f22e29ca787d161aa38b731d984d0cf",
"assets/assets/images/smallpicture2.png": "1195dc7c78e7dcb7c5a87cf48be67f94",
"assets/assets/images/smallpicture1.png": "cb21429fc5173d526bac41f0eec3ba08",
"assets/assets/images/mic.png": "38bdda7c90ec80319e6396c8496d20be",
"assets/assets/images/person.svg": "d4e5f9204298f5388002062ef8253c29",
"assets/assets/images/delete.svg": "ef8c9fa1ba9cdb02a1ef54211d74708d",
"assets/assets/images/redcircle.png": "d9d7a7503c365626c9d70c77cfabe6f8",
"assets/assets/images/picture.png": "9a4a122250be43ca35c208830c307260",
"assets/assets/images/activity.svg": "c34ba2867e41fc95e051e56e45cf468c",
"assets/assets/images/message.png": "945cc22c160c4b12f6f7cbcb0cc35315",
"assets/assets/images/second.png": "d40285da140737eb60744fff19bd6af5",
"assets/assets/images/save.png": "1bd4ea8e00e4a6e5aab616a237c2dbef",
"assets/assets/images/report.png": "57bb860b3d3bb081817de2e1be4ea278",
"assets/assets/images/share.svg": "98bfc32036ba882900f5754f805b9547",
"assets/assets/images/nofile.png": "275149e55f5a4395cc95525312378b4d",
"assets/assets/images/send.svg": "2174c8617a28acf5909e185f6f14805c",
"assets/assets/images/thompson.png": "294acb1e327b030a34f25e64f9f8335e",
"assets/assets/images/tasha.png": "729f57e7e1cdf9dd2954264af38c185c",
"assets/assets/images/create-event.svg": "04463d0096ff39d5b518c435b2ce5d0d",
"assets/AssetManifest.bin.json": "8812a633b84513174d52afdf3283bf64",
"assets/AssetManifest.bin": "c29e0ee16d2791680582000a9cf5679a",
"assets/NOTICES": "001c161464c79a325a7e09842ec62788",
"assets/AssetManifest.json": "2af42b6a15c7e92271bcc17bc5a491aa",
"assets/FontManifest.json": "d137efeba4b258e01b47131116ec9ca6",
"assets/fonts/MaterialIcons-Regular.otf": "3be699fbabf78c7b391cc3ba7abac522",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "9ebdf37e7471234906a573a3719ff10a",
"/": "9ebdf37e7471234906a573a3719ff10a",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"version.json": "d7f12165e0e4b9a14b67500213b49eef",
"main.dart.js": "226c85ad03af6f2b3b320a154b4821e3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
