// Service Worker for Python Cheat Sheet PWA
const CACHE_NAME = 'python-cheat-sheet-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './app.js',
    './manifest.json',
    'https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css',
    'https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.js',
    'https://code.jquery.com/jquery-3.6.0.min.js',
    // Icons (will be created later)
    './icon-192x192.png',
    './icon-512x512.png',
    './favicon.ico'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
    console.log('Service Worker installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache.map(url => {
                    return new Request(url, { cache: 'no-cache' });
                }));
            })
            .catch(function(error) {
                console.log('Cache addAll failed:', error);
                // Continue installation even if some resources fail to cache
                return Promise.resolve();
            })
    );
    self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
    console.log('Service Worker activating...');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            return self.clients.claim();
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                if (response) {
                    console.log('Found in cache:', event.request.url);
                    return response;
                }
                
                console.log('Fetching from network:', event.request.url);
                return fetch(event.request).then(function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Clone the response as it can only be consumed once
                    var responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                }).catch(function(error) {
                    console.log('Fetch failed:', error);
                    
                    // If this is a navigation request, return the offline page
                    if (event.request.destination === 'document') {
                        return caches.match('./index.html');
                    }
                    
                    throw error;
                });
            })
    );
});

// Background sync for future features
self.addEventListener('sync', function(event) {
    if (event.tag === 'background-sync') {
        console.log('Background sync triggered');
        event.waitUntil(doBackgroundSync());
    }
});

function doBackgroundSync() {
    // Placeholder for background sync functionality
    return Promise.resolve();
}

// Push notifications (for future features)
self.addEventListener('push', function(event) {
    console.log('Push message received', event);
    
    const options = {
        body: event.data ? event.data.text() : 'New Python tip available!',
        icon: './icon-192x192.png',
        badge: './icon-72x72.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: '1'
        },
        actions: [
            {
                action: 'explore',
                title: 'Explore',
                icon: './icon-96x96.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: './icon-96x96.png'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('Python Cheat Sheet', options)
    );
});

// Notification click handling
self.addEventListener('notificationclick', function(event) {
    console.log('Notification clicked', event);
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('./')
        );
    } else if (event.action === 'close') {
        event.notification.close();
    } else {
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});

// Message handling for communication with main app
self.addEventListener('message', function(event) {
    console.log('Service Worker received message:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'GET_VERSION') {
        event.ports[0].postMessage({ version: CACHE_NAME });
    }
    
    if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.delete(CACHE_NAME).then(() => {
                event.ports[0].postMessage({ success: true });
            })
        );
    }
});

// Periodic background sync (for future features)
self.addEventListener('periodicsync', function(event) {
    if (event.tag === 'update-content') {
        event.waitUntil(updateContent());
    }
});

function updateContent() {
    // Placeholder for periodic content updates
    return Promise.resolve();
}

// Error handling
self.addEventListener('error', function(event) {
    console.error('Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', function(event) {
    console.error('Service Worker unhandled promise rejection:', event.reason);
});

// Cache management utilities
function clearCache() {
    return caches.delete(CACHE_NAME);
}

function updateCache() {
    return caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache.map(url => {
                return new Request(url, { cache: 'no-cache' });
            }));
        });
}

// Network-first strategy for API calls (if any in the future)
function networkFirstStrategy(request) {
    return fetch(request).then(response => {
        if (response.ok) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then(cache => {
                cache.put(request, responseClone);
            });
        }
        return response;
    }).catch(() => {
        return caches.match(request);
    });
}

// Cache-first strategy for static assets
function cacheFirstStrategy(request) {
    return caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
            if (fetchResponse.ok) {
                const responseClone = fetchResponse.clone();
                caches.open(CACHE_NAME).then(cache => {
                    cache.put(request, responseClone);
                });
            }
            return fetchResponse;
        });
    });
}
