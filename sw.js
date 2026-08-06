/* Service Worker — surya-v61
   Forces immediate activation so new files are served right away.
   Cache-busted by version string in cache name. */
const C = "surya-v61";
const A = [
  "./", "./index.html", "./app.js", "./manifest.json",
  "./icon-192.png", "./icon-512.png",
  "./icon-maskable-192.png", "./icon-maskable-512.png"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(C)
      .then(cache => cache.addAll(A))
      .then(() => self.skipWaiting())   // ← force activate immediately, don't wait
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== C).map(k => {
          console.log("[SW] Deleting old cache:", k);
          return caches.delete(k);
        })
      ))
      .then(() => self.clients.claim())  // ← take control of all open tabs immediately
  );
});

self.addEventListener("fetch", e => {
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(cached => {
      // Network-first for HTML (ensures fresh app on update)
      // Cache-first for assets (fast load offline)
      const isHTML = e.request.destination === "document";
      if(isHTML) {
        return fetch(e.request)
          .then(res => {
            if(res && res.status === 200) {
              caches.open(C).then(c => c.put(e.request, res.clone()));
            }
            return res;
          })
          .catch(() => cached || caches.match("./index.html"));
      }
      return cached || fetch(e.request).then(res => {
        if(res && res.status === 200 && res.type === "basic") {
          caches.open(C).then(c => c.put(e.request, res.clone()));
        }
        return res;
      });
    })
  );
});

// Tell all open clients to reload when new SW activates
self.addEventListener("message", e => {
  if(e.data === "skipWaiting") self.skipWaiting();
});

// Lockscreen System Notification Click & Action Handler
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const action = e.action;
  const data = e.notification.data || {};

  e.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then(clientList => {
      for (let client of clientList) {
        if ("focus" in client) {
          client.focus();
          client.postMessage({ type: "NOTIFICATION_CLICK", action: action, data: data });
          return;
        }
      }
      if (clients.openWindow) {
        return clients.openWindow("./?notif_action=" + (action || data.type || "water"));
      }
    })
  );
});
