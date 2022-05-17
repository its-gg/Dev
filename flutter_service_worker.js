'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "879fbe298c0e68b8ce42f66d54a4e09f",
".git/config": "09965c182757fe3de23daeb7a4ec1a60",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "db9d22bff8b0c737a1c2b4d25d1ccf4a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f4151ee4e73b8f9e3e3590552db0c91",
".git/logs/refs/heads/master": "5f4151ee4e73b8f9e3e3590552db0c91",
".git/logs/refs/remotes/origin/master": "6e02c0ad62c439efad5ac3a97599dc1c",
".git/objects/03/7ad47f870a001b44b4477cab3525ef08cc5cb3": "e24921a042544fdcf3d9f373db0130b8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/16/03feb344ca810ff7dc2073cbca65d5f128c40d": "de28bfe89696b8f59566cf78c3140b37",
".git/objects/1a/adbeef309176b3937dc17e62c4a0e2c6cc450d": "efd6f24bac0cbd16d985b309e65a640c",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/627361c837b736d1d35669ebd52deb58731edc": "e336acc9d9f7fbd0d01163b36369ce29",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/50442eb606bc54b29b34cf9898d3e9992c0aa3": "ab927b031f4169a3fb2e0b91e242bef7",
".git/objects/33/ddc5808bf178b6d87ef4534a498fdd5659766e": "454c6b90027ae8df7f9079126790dd8a",
".git/objects/3b/eb7890b45ca2875195243c4d7b8090b4f2549e": "7ad1148a6be26d6dc597bf1d110c6ccb",
".git/objects/43/3e09879da2f670b90b8f78aad2df92b584f2c9": "aa71817878117b8c742f018f05ef4ec7",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/48/6572b4320ca24e675f1819bbae0b53f9fc680e": "9e373bca546b2ba1afd53cae15040772",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/51/0a010a0b6d456938de9072529ac5c1a4e31f16": "db605a3a5e3eba0460b109f4bb34db67",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/a2ed64579bcf02346ec5a068494643dd3783d3": "54e3c35cfe05cc752b7a2d909b17dc5f",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5e/ca6d1927f35c35337f7528f05123db52a045b5": "6b043e4105d75d585a346403df5fa166",
".git/objects/61/b8a9c71f2f34f45bd7d935d95989ef1e7e38a9": "1364cee002e37cde0e5421ff2a778015",
".git/objects/62/389b61e6f35457ebe4b19af16d99414fd92259": "889920e42655e2cb8d20622b4bec2010",
".git/objects/63/d4c87d501eb84e4be2facd2edf521209a9483e": "b6f63839e827427bc04f18a50e7db94c",
".git/objects/67/f6d3f63d056a48a4c087e778e618730ca137a6": "ed23d8c8f7f4ab671ccef6a1a17ee163",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/70/6b89226856a184964d4ef26acca4690f34feb3": "b47861a6de6336cfde49244ec049778b",
".git/objects/72/ada6baac9193047a04d1ef7fc6c08c19a0aad4": "515cf0496f523efb00e1cdbca48aebe4",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/84/4bdcad899559741d9e70abe07f815a8a9f7da9": "69c067e3bbbab3f53e5196b57bf66574",
".git/objects/87/cd99e46a2d2d903331b75c962ea858766dd5a7": "5aeb71b619309e7199680f33248d3630",
".git/objects/88/53a509e8644d8679a6a1beee2da98b768be3e2": "40bd8a96424175ae51345fbd45efbecb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/a366d54d3ca4c2f4c7c4a663632b6dd7ec754c": "675721fa35cef86eb9d14f994c25a5b0",
".git/objects/8c/6b3d92ad5b8f1aefc12694da5ca3bd914483a8": "36b0a06f3a9937393732359998f20a18",
".git/objects/90/b506e778c82e241884423c309a5b0408869424": "0eabdc61bf9c8a36e7e072772c865239",
".git/objects/91/3d799537c0186569f4ea12f8daec8bac56147c": "9a2a226a199a1e50669bea28de7deb4f",
".git/objects/93/81f052165a7d6214cae6a0dd75b3b61cb20539": "88b5e991b5cbb6a2b1bc14fa7d2b2e7b",
".git/objects/9c/8bb26ae891321321c95eafe7cd26fc902eb1b6": "e5df57640bd364adccbeb463894eab25",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/b0/fe488c377d39f7de19f1c737de52634d2454b2": "b87e4091b207a6cea9a26df5fd86ce46",
".git/objects/b5/560db43356d3623c74fde58a45bdd3d592c558": "fb3fd0232bb1d446d9c074a7e600ed81",
".git/objects/b5/c511d363484621d46f1db8d892e1aaaf10e810": "e14eba756c2cef3500ed4c0dfae5b73b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bf/c002aa02e68a4000e2f46330bed5998d6cb674": "6067cb274a399396f898d6b86b686f2f",
".git/objects/c1/288310a4d45b5394f97cdd9fcf2c9df4381d36": "5faab0a27eb11f9a3229f1494e90a43e",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/cd/de4f3f32e4865fd1c6d3b3f2c209fa3b1d4bae": "7153d8451fb3a866be8bde90877f1375",
".git/objects/cf/aba16d6c0b2f9d6af69cf635cb72c960196653": "43ed9eb4522b295cb8fa94154d4b5fdb",
".git/objects/cf/e29c38f7d75ac9c33d402d202235dc08ea32c7": "6785dc954551d13f136af6d85b7b1021",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/b3576740f1fe09fdc135bf8643df09bd5b964a": "fcb15e6d07a101b779c4820b3eb3eacf",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/2481a1eaa966e38eae9f2138b623fd80b28905": "32b2e63c41100deb97f9fc9ad26cdeab",
".git/refs/heads/master": "ed4cd26cfbb9eab136c3c27da8eaa13c",
".git/refs/remotes/origin/master": "ed4cd26cfbb9eab136c3c27da8eaa13c",
"assets/AssetManifest.json": "d7a5ce646df273314565bdcbf04f7f92",
"assets/assets/bf.webp": "e3ce614c5efd600f495e31d27c2fb456",
"assets/assets/calm.png": "7535f759734c206098d8b1f2c37d6dd1",
"assets/assets/carousel/1.jpg": "9e092ebcaa1abac6b687e369479caabf",
"assets/assets/carousel/1.png": "d80cd09b6ceaf771baae422d108c2808",
"assets/assets/carousel/2.jpg": "46b62d785eeb7a8aea150586538e04b3",
"assets/assets/carousel/2.png": "a8fa06e9c3552b3020ea87c5c02b16be",
"assets/assets/carousel/3.jpg": "acd8ecf79ea58295e504f44df6057bd6",
"assets/assets/carousel/3.png": "6eb46568672223ea7a86b8e0b8d96429",
"assets/assets/contact.png": "e89021cce06749f834034f1d29cc7fd9",
"assets/assets/login.png": "7c5ea990c7abe4cbee5cb2f4fafce5e7",
"assets/assets/logo.png": "963d58759ffdc1c33d8ad2fc9308bca7",
"assets/assets/logo_navbar.png": "470b87cc343d2e2e072a392ebacbbfcd",
"assets/assets/our.png": "b80a6262d960aa6b2fa1c89c04d289da",
"assets/assets/welcome.png": "308b0140ca26938b7afc79b2c07c6179",
"assets/FontManifest.json": "756bc9b1f93783d43ad611db0a43e5b0",
"assets/fonts/Comfortaa/Comfortaa-Bold.ttf": "9f81d628ecf6c80f7ebf80e1ed455d92",
"assets/fonts/Comfortaa/Comfortaa-Light.ttf": "7fc83210bd61acc3ec2d6b92e320dde7",
"assets/fonts/Comfortaa/Comfortaa-Medium.ttf": "d2b08213f0984c9ef60eb52794e78794",
"assets/fonts/Comfortaa/Comfortaa-Regular.ttf": "31aefe19554b85e0e5c1232daebc158e",
"assets/fonts/Comfortaa/Comfortaa-SemiBold.ttf": "2111f43a3fa184866e7033c66683056c",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "f9f4d1c98c2950fa70052a47dc9e523e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "b25ba86fa70165109c48aa31d3f47bf7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ae3789ea1978dc4db865c4e81ee0092f",
"/": "ae3789ea1978dc4db865c4e81ee0092f",
"main.dart.js": "24608540974cb18837bfd8b8b2eee777",
"manifest.json": "a8831a0b879f13987ae5151bf3b3fad7",
"version.json": "0f0225cc1cd1ac59c90d38aec586606c"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
