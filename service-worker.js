const cacheName = ["app"]
const filesToCache = ["somefile", "anotherfile"]

self.addEventListener("install", (e) => {
    e.waitUntil(
        (async () => {
            const cache = await caches.open(cacheName)
            await cache.addAll(filesToCache)
            console.log("files cached")
        })()
    )
})
self.addEventListener("fetch", (e) => {
    e.respondWith((async () => {
        // check if it's already cached
        const cachedFile = await caches.match(e.request)
        console.log("requesting resource:", e.request.url)
        if (cachedFile) return cachedFile

        // if not, fetch then cache
        const response = await fetch(e.request)
        const cache = await caches.open(cacheName)
        console.log("caching resource:", e.request.url)
        cache.put(e.request, response.clone())
        return response
    })())
})