'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e0f01185025df5ae543f19dca72325db",
"index.html": "7babc67ebf92b02b5ff9480be3fe69ee",
"/": "7babc67ebf92b02b5ff9480be3fe69ee",
"main.dart.js": "f5d37309b3b6e2bd5d2c42bd463971ab",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4e81f4281785bf4138c87439195eb8ea",
".git/config": "4413968d29a6d9ea0ea8f14eed12969e",
".git/objects/66/e7cdfaeb2ccd1e2e3a5a3c92edf75b66a8fec1": "0547d1a4bccb93aef24b8cbdd2d95103",
".git/objects/3e/010f399f23ecc6772aae5dcb8af899cdb5875c": "fa8ebb69aec828d6db6416c11cc07b25",
".git/objects/6f/b8a759ae670ddde22f76cba32a2b57a5a294c0": "7d472d6309e6fd930b1bb241c95195ac",
".git/objects/03/5db6c827a3dd99ae8f28a4c80875da7396591b": "a2480c80a7d8b53e5fe2f6936c9084ff",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/32/114b66e094bfb9bd55aea64b172183af384ede": "f3dac631218842e0198cef134f602cf5",
".git/objects/94/2f7f7c75e8d71d6ce486a49869ce75fa189b33": "ae8e8f30beebd85bd30a8bb7b78dab40",
".git/objects/a4/9cbedb8134dfefbea26d24f6c219e7b83d852c": "5be1e7ed31687228856fb1d7fcaaa001",
".git/objects/ad/682bd0f2c7fd4f58dd91b4ee505a4547fe1be0": "517c631601877fb23ea9fb9d15753e91",
".git/objects/b4/a8c707805cccac9c0741936c98841bf6736586": "e452e3c5c33f208c109134f825461e37",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/2f13cd6e404919a0ec4abd86c27f64e7b01fbe": "c888336c03f2d90b9ed960955afde6c5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/3cfd2c8a1402d5e4b820cd89863df6309a0330": "6b80162097255eddeebca38bde7cbbec",
".git/objects/e3/605f29e11ff738a0e90f8c9b1eafc6b405534c": "f4de84c83e243b422e5119576b051ef1",
".git/objects/c8/50f15afb3e6580f69ec543f02f3be591baf227": "7d2cd5509cd4ff172f279faf3d962a97",
".git/objects/4b/4c0887fdc3cbcef8e3e4564eeeeaf850fa041b": "b38f59aa29a8e2d1fdd4b3d3735ee2e5",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7b/2f54da4ab40ec7194a60a270e05f62f4fc40e8": "7e1c1dc56cf96fbf82d9f390d2d560ab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a720af970bc484a1deeaf925aed248f7293e02": "f921ea40939fc239692e318325760e01",
".git/objects/4d/433776b95be7eb599220fabcc9890c190dd22f": "7f6aa85c70192d5c2657f42cddcf60fd",
".git/objects/86/7b4305f982e7b981e3fb11456d215b868d16ab": "32785418a58f0fd0a5151faa08a4035d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/947ba0b9a33e14b6b161d501a1290b5f0bfd80": "38030edae8e54836083719e06037ca1d",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/5d/cf86c55987d780f5a18c7208b01bacd08d5874": "46cda210845eee2f1261f4a484113ce5",
".git/objects/5b/ec0d18a837cc16d1d2ad3b0ce0da9827bcf4b2": "848361239a2663b486522fd61b045772",
".git/objects/5b/d12a11628402c402a1cd88034258b62f89a34b": "553e54f1aba8880c05c9b34f814a024f",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/0f/5a1377cbdcbcbe7d0e2c73c9d485640753312b": "e71df45c3da8a7c661e3407ba5202b22",
".git/objects/d3/3d3893a6dbc05dfcb578648f44ec8667b4ef32": "0b7de027acd9880713d92a3d3f3e4b59",
".git/objects/b8/ce69dfec40e609e67c610af075edb63fcb666c": "507f7ba8f843115e13009018a1b55710",
".git/objects/dd/bfe020152dc65b8188aed4b8082439a7a0fe38": "992495c8c8b31fa37cd9c3461aa19064",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/dc/1f36d7ecdc23d738891abe4fee4116c3445ab7": "401fac8fba4ae426608e36c924473480",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/af/e8869d04dd61d535c610ce3c32dd50334e0d14": "6cf953661af9a61ad993461aa78e83fa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/b66b5560a5da088237899bce064f7182626784": "a5c72c4066552ef6e97136dbe23c5b99",
".git/objects/b0/cfa9ea26cad5d47e28798ba4a5db44468cc67d": "dce2cd7466c9f42b7f3b36532d87540f",
".git/objects/a6/9372531602f136f87339e482d0bd5ede78edbd": "e935cb692851808402aad4d162f604d2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e5211bd289346b38f389ce721d900820669c86": "81ff5535a911dae9dbec47c64b5f136e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/57b6d4c443a137e72da405f4ce3eb4eda06a9b": "ea61767ae1598dffab627441c8b17625",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/d1a40cc463e38f2794b1d4bb652bcd96123407": "7caa3efe2f835841efed701326ddb2a2",
".git/objects/c2/1dca35f63cc9bbe9d773185547337f63e45bb9": "fc475ac3af769d892ae7dbd453fe6d08",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/1b/6cd2d2be3780cc5d7f8a6879bc05ccbcbbcaf2": "613383cddb9a6dd5335cd281cb8ada1d",
".git/objects/24/aaa85401cf2d94c3591ac4192c896f34288cfb": "d8d2d4ef44c40ba53c23103f47f593f5",
".git/objects/12/82b58b4c8f18fc559f0c6745fae71b37dbc51a": "0c3d152167cd57e57392023cf5dbaaab",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/85e83cb1b3727626c712c9df6474ee3f07e03f": "2f7c869a0391fae2d4ef64604a49f4b4",
".git/objects/8c/fbdc0a50655be2ae9da5cbf2b0853ee22a8cdf": "90a531c3930ff3928d31b0aa4c6242e2",
".git/objects/71/2be5f87f643c74145cb5a6a963c418b4324341": "1d6c9da83b1662e3752445de4b61b935",
".git/objects/49/96843457116c555cf113e8e108887e84dc1e19": "39976401fc0a6ab73bcd5f993758a368",
".git/objects/2e/4ab4d97e2f6f1ffa1078f1121b6cbd75d1259c": "79998cf283b03673e2aa476f89b834b2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d4971b1693e3e856883f1f86d7170841",
".git/logs/refs/heads/master": "d4971b1693e3e856883f1f86d7170841",
".git/logs/refs/remotes/origin/master": "9cb586763ae5c652e9b174f0ba784c1f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "5f2ed35ae497b8d4041ec19dec6ccd5d",
".git/refs/remotes/origin/master": "5f2ed35ae497b8d4041ec19dec6ccd5d",
".git/index": "6956c010e013638c84551aaff1520880",
".git/COMMIT_EDITMSG": "0f0a2cddcfec7ad089725824b8b76546",
"assets/asset/images/background.png": "6e8b67c91b1bf0d3b0432714acb5f979",
"assets/asset/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/AssetManifest.json": "d9b178431817b9052d18365959151dd6",
"assets/NOTICES": "259068529bed6e57beac74e9760f7147",
"assets/FontManifest.json": "851c77823b0ef8f37ac8bb8ca48e19be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
