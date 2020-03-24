'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/assets\AssetManifest.json": "f069cefe0955a15b6461d59c712eb990",
"/assets\assets\about.html": "cca535e84bb3f1ad20cd1423638d0253",
"/assets\assets\anim.json": "9cad20b149b677369e1f9c1e008bd6a9",
"/assets\assets\animations\emoji_shock.json": "46cfab6f39130106d8d19adcd690266f",
"/assets\assets\animations\star.json": "c6d66d75e66a191491b6219c7e415dd5",
"/assets\assets\avata1r.jpg": "9508f1765906f6a11dc84dee43446c6a",
"/assets\assets\avatar.jpg": "9e1b57971c417c288ae58a1672d7315a",
"/assets\assets\avatar.png": "7b81029b73ecfe27ce4aaabe4378c131",
"/assets\assets\behance.png": "d390a0235c4676fe33cad0f1d44883aa",
"/assets\assets\behance_light.png": "b601724eced7e0b4b161d0f0d896e9cc",
"/assets\assets\bg.jpg": "e49ca596a8d9384a4d4525c65b4d257d",
"/assets\assets\design.png": "ea6e531a442911aba660d316261f7cf5",
"/assets\assets\design.svg": "e1c0033ca6e04704f03f9e334b8088ef",
"/assets\assets\facebook.png": "eace5f433c83a220accf60619acea06e",
"/assets\assets\FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"/assets\assets\github.png": "2a18945dedb2903d0400ae697ccca17f",
"/assets\assets\github_light.png": "24025d29e31c1e82fe6a79cfc0ba33b3",
"/assets\assets\GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"/assets\assets\instagram.png": "f5b618f230b6403d5e72f7da6be85d3c",
"/assets\assets\instagram_light.png": "ad313a5c53ffb348a217504f333537c4",
"/assets\assets\linkedin.png": "7681d7201145f8691df5a5c1dcc2698b",
"/assets\assets\linkedin_light.png": "404e3c100743e6375e47dcfa744b547a",
"/assets\assets\medium.png": "29c85bc8b8655cb8927d0875a7c34297",
"/assets\assets\medium_light.png": "8a2b5f5529f94c3fb602c265c1d15f2e",
"/assets\assets\moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"/assets\assets\resume.pdf": "a11ddc69fdbf1f81e52b4e7d8177bd1c",
"/assets\assets\stackoverflow.png": "81c74d1ea923c2e623109df30d8ad480",
"/assets\assets\stackoverflow_light.png": "2db8c4ceda8b753383c794f5400211f9",
"/assets\assets\title.png": "3bde36c190b145f43996d727d35a45ba",
"/assets\assets\title1.png": "62509743f3547e7e6fa9faa0fbbb36c7",
"/assets\assets\twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets\assets\works\creditcard.png": "a6ee2e46d3a422cd0e24320d21c29155",
"/assets\assets\works\hi.png": "046b7be392c260170e57e27544e71278",
"/assets\assets\works\nationals.png": "53ab25dc46ecb61c6eab7d50cf9eb7dc",
"/assets\assets\works\totalrecall.png": "acd6043c786c02f96ed39bfe040bef7b",
"/assets\FontManifest.json": "592290621294619b16740a9d89232ba6",
"/assets\fonts\MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets\images\design.png": "12f26b4143f1784d22dfb2e90c5b05f9",
"/assets\images\design1.png": "c86ebe346d20d0fe6cfc5d77d03ff4ce",
"/assets\LICENSE": "cdfa331125a8dd7e9f14690b0519204c",
"/index.html": "f181025f1ed3eb10c2a853266fa61a46",
"/main.dart.js": "9f5cf4a6bb2dc70884ea2d69dd62603e"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
