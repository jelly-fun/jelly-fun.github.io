'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "3a69a39d6f3b77c0c211d945b4e78058",
"assets/AssetManifest.bin.json": "ac5c09cb0f53abb2d1ede7638b34ac99",
"assets/AssetManifest.json": "069cca7de2fff8bcdbc06d15e3bdcf73",
"assets/assets/audio/Background_Music.mp3": "47251ebb387a749f169a5520b0a35333",
"assets/assets/audio/losing_music.mp3": "6783d86e383e3359c5895c27e4d465e0",
"assets/assets/audio/winning_music.mp3": "de7c0cf36488e8bae779a91a49d5d0cd",
"assets/assets/icons/android-chrome-512x512.png": "804902361a3dfaef9882feeacf531036",
"assets/assets/images/background/background_new.png": "aec8b96e08795e2884f58eb69720dc39",
"assets/assets/images/background/background_new2.png": "9cfd7af4bcc161f809aed516ac52aa2e",
"assets/assets/images/bombs/jelly_bunt.png": "6f221c59ecb73d152ac2c907e13fdac9",
"assets/assets/images/bombs/jelly_gelb.png": "4f2d7ab55419441310524459f2eff81f",
"assets/assets/images/bombs/jelly_gelb_horizontal.png": "747b846a47b61942b91fc858a560d50b",
"assets/assets/images/bombs/jelly_gelb_vertical.png": "8fecacb0483ebe1f61ff5f73dbed8cc6",
"assets/assets/images/login/login-page.png": "f45c95902f8a94a7d0d768041671142b",
"assets/assets/instructions/ak_logo.jpg": "86a7fdfb08678f7cc751767327328ceb",
"assets/assets/instructions/InstallAndroid.png": "a46e612f4645d6b54331a3edcc69c0e5",
"assets/assets/instructions/InstallAndroid_alt1.png": "f8bee7d186c1b92818b97cc00c03236b",
"assets/assets/instructions/InstallAndroid_alt2.png": "29b38862caec931e5b4b975c069d22a3",
"assets/assets/instructions/installios.png": "cf8263a93f18c6e1f9f9024609daf25e",
"assets/assets/instructions/ins_1.png": "bc612bd2b7fd49d0d754b61267e9b030",
"assets/assets/instructions/ins_2.png": "4e9726f83e0d0a9f2d53ea5070346f62",
"assets/assets/instructions/ins_3.png": "9d08068f11dc3bcb6465ad418ddbb3b3",
"assets/assets/instructions/ins_4.png": "87f6384672d167f926cd6529a6856679",
"assets/assets/instructions/ins_6_1_activated.png": "87aa5f6442fc10d8e3e23e1572962e98",
"assets/assets/instructions/ins_6_1_competition.png": "d2e2cc8aaf448333987fdf486d558b44",
"assets/assets/instructions/ins_6_1_deactivated.png": "74a86c3a5b55b24efc245fcd02efc7f4",
"assets/assets/instructions/ins_6_1_FoMo.png": "41a9c0bbf087b01c5e9f513755d29deb",
"assets/assets/instructions/ins_6_activated.png": "9d32240549326648c92314064c844f33",
"assets/assets/instructions/ins_6_competition.png": "9100766934d700b279212af368e786b3",
"assets/assets/instructions/ins_6_deactivated.png": "1fe6ed3762ff691f4a9d010b5c825aae",
"assets/assets/instructions/ins_6_FoMo.png": "1fe6ed3762ff691f4a9d010b5c825aae",
"assets/assets/instructions/sba_logo.png": "6ce58f5ff5324d3adf37b2661f046a59",
"assets/assets/instructions/welcome_1.png": "d338c4c12188acafe75737d9ec1d9933",
"assets/assets/instructions/welcome_2.png": "3c7831caf310dec29f56ee6f2c1e6bbc",
"assets/assets/unityLevels.json": "17e3ab9e355154008292f504678824ce",
"assets/assets/videos/werbung_ak.mp4": "a3f8032aa790151b09e00e27c8cdfa7f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f53b0eb9c1f163b56ed9337c6214f477",
"assets/NOTICES": "29d9f6f900a051034b0bf775d5540d03",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/survey_kit/assets/fancy_checkmark.json": "ba198bdf17f5a9a97e89d74c61921edb",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"auth.html": "a5c3bbb6fb398b8842553d026c91c335",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "804902361a3dfaef9882feeacf531036",
"firebase-messaging-custom.js": "c3e2ec9673ba16e85d26b595b2a77065",
"firebase-messaging-sw.js": "ff9a7de782a352f01966ac8e4225218e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "bfee067c8773b4e7ba7651421819ea26",
"icons/Icon-192.png": "1b053054a6b03d313d113f8608135878",
"icons/Icon-512.png": "804902361a3dfaef9882feeacf531036",
"index.html": "aba4076cfddb463103f10d99d9c14a09",
"/": "aba4076cfddb463103f10d99d9c14a09",
"main.dart.js": "fe64ec41126b55954950a9ab7f748895",
"manifest.json": "8a30a71d689a5fe636d33599e3f6a741",
"splash/img/dark-1x.png": "babbb8ce9d0bca90ac67e16347413653",
"splash/img/dark-2x.png": "fd3abc944375ac52383241945b159b27",
"splash/img/dark-3x.png": "ef6b3223dc0527637a2cae34166c2943",
"splash/img/dark-4x.png": "f51177002122442d889d8f1b98bf2016",
"splash/img/light-1x.png": "babbb8ce9d0bca90ac67e16347413653",
"splash/img/light-2x.png": "fd3abc944375ac52383241945b159b27",
"splash/img/light-3x.png": "ef6b3223dc0527637a2cae34166c2943",
"splash/img/light-4x.png": "f51177002122442d889d8f1b98bf2016",
"UnityLibrary/Build/cdf24d9018e82dca4ecea9a3bfeebf80.data": "cdf24d9018e82dca4ecea9a3bfeebf80",
"UnityLibrary/Build/dfc748bf00fd54c32d182ecdb38c36b5.wasm": "dfc748bf00fd54c32d182ecdb38c36b5",
"UnityLibrary/Build/e7be268633dd4e61214478a1c145ab9c.js": "e7be268633dd4e61214478a1c145ab9c",
"UnityLibrary/Build/UnityLibrary.loader.js": "994b982bded056bd905895cd517202da",
"UnityLibrary/index.html": "a8fdf4cfb5121872eebc03a41c956246",
"UnityLibrary/StreamingAssets/UnityServicesProjectConfiguration.json": "317a5bcee0617d1b38bbde499b2d27d5",
"UnityLibrary/TemplateData/favicon.ico": "f04ae07ad1b634a4152d2c8175134c56",
"UnityLibrary/TemplateData/fullscreen-button.png": "489a5a9723567d8368c9810cde3dc098",
"UnityLibrary/TemplateData/MemoryProfiler.png": "90178b1c01bd4c66a21b9f2866091783",
"UnityLibrary/TemplateData/progress-bar-empty-dark.png": "781ae0583f8c2398925ecedfa04b62df",
"UnityLibrary/TemplateData/progress-bar-empty-light.png": "4412cb4b67a2ae33b3e99cccf8da54c9",
"UnityLibrary/TemplateData/progress-bar-full-dark.png": "99949a10dbeffcdf39821336aa11b3e0",
"UnityLibrary/TemplateData/progress-bar-full-light.png": "9524d4bf7c6e05b2aa33d1a330491b24",
"UnityLibrary/TemplateData/style.css": "1981b5d803ea85e3a43d1adcb046b0ad",
"UnityLibrary/TemplateData/unity-logo-dark.png": "5f00fa907e7c80061485fc64b62ca192",
"UnityLibrary/TemplateData/unity-logo-light.png": "daf8545f18a102b4fa8f693681c2ffe0",
"UnityLibrary/TemplateData/webgl-logo.png": "0c09503c39e9a26675e5f56d82f061b3",
"UnityLibrary/TemplateData/webmemd-icon.png": "e409a6f1c955c2babb36cd2153d418b5",
"version.json": "00deb62699f84b44348922cb3f84cbcd"};
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
