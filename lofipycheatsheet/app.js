// Python Cheat Sheet PWA JavaScript

$(document).ready(function() {
    // Initialize Semantic UI components
    $('.ui.dropdown').dropdown();
    $('.ui.modal').modal();
    
    // Search functionality
    $('#searchInput').on('keyup', function() {
        const searchTerm = $(this).val().toLowerCase();
        searchContent(searchTerm);
    });
    
    // Install PWA functionality
    let deferredPrompt;
    let installButton = $('#install-button');
    
    // PWA install prompt
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        showInstallPrompt();
    });
    
    // Install button click handler
    installButton.on('click', async () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            const { outcome } = await deferredPrompt.userChoice;
            console.log(`User response to the install prompt: ${outcome}`);
            deferredPrompt = null;
            $('#install-modal').modal('hide');
        }
    });
    
    // Check if app is already installed
    window.addEventListener('appinstalled', (evt) => {
        console.log('PWA was installed');
        $('#install-modal').modal('hide');
    });
    
    // Service Worker registration
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(registration => {
                console.log('ServiceWorker registered: ', registration);
            })
            .catch(registrationError => {
                console.log('ServiceWorker registration failed: ', registrationError);
            });
    }
    
    // Smooth scrolling for anchor links
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 100
            }, 1000);
        }
    });
    
    // Copy code to clipboard functionality
    addCopyButtons();
    
    // Keyboard shortcuts
    $(document).keydown(function(e) {
        // Ctrl/Cmd + K for search
        if ((e.ctrlKey || e.metaKey) && e.keyCode === 75) {
            e.preventDefault();
            $('#searchInput').focus();
        }
        
        // Escape to clear search
        if (e.keyCode === 27) {
            $('#searchInput').val('').trigger('keyup');
            $('#searchInput').blur();
        }
    });
    
    // Add search hint
    $('#searchInput').attr('placeholder', 'Search Python concepts... (Ctrl+K)');
    
    // Initialize tooltips
    $('[data-tooltip]').popup();
    
    // Add animations on scroll
    $(window).scroll(function() {
        $('.ui.raised.segment').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            
            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate__animated animate__fadeInUp');
            }
        });
    });
});

// Search functionality
function searchContent(searchTerm) {
    if (searchTerm === '') {
        // Show all content
        $('.ui.raised.segment').show();
        $('.ui.segment').show();
        return;
    }
    
    let foundResults = false;
    
    // Search through all segments
    $('.ui.segment').each(function() {
        let sectionHasResults = false;
        
        // Search in each raised segment within the section
        $(this).find('.ui.raised.segment').each(function() {
            const content = $(this).text().toLowerCase();
            if (content.includes(searchTerm)) {
                $(this).show();
                sectionHasResults = true;
                foundResults = true;
            } else {
                $(this).hide();
            }
        });
        
        // Also check the section header
        const headerContent = $(this).find('h2').text().toLowerCase();
        if (headerContent.includes(searchTerm)) {
            $(this).find('.ui.raised.segment').show();
            sectionHasResults = true;
            foundResults = true;
        }
        
        // Show/hide entire section based on results
        if (sectionHasResults) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
    
    // If no results found, show a message
    if (!foundResults) {
        showNoResultsMessage(searchTerm);
    } else {
        hideNoResultsMessage();
    }
}

// Show install prompt
function showInstallPrompt() {
    // Show install button or modal after a delay
    setTimeout(() => {
        if (deferredPrompt && !localStorage.getItem('installPromptShown')) {
            $('#install-modal').modal('show');
            localStorage.setItem('installPromptShown', 'true');
        }
    }, 5000); // Show after 5 seconds
}

// Add copy buttons to code blocks
function addCopyButtons() {
    $('pre code').each(function() {
        const code = $(this);
        const pre = code.parent();
        
        // Create copy button
        const copyButton = $('<button class="ui mini icon button copy-btn" data-tooltip="Copy code" data-position="top right">' +
            '<i class="copy icon"></i>' +
            '</button>');
        
        // Position button
        pre.css('position', 'relative');
        copyButton.css({
            'position': 'absolute',
            'top': '10px',
            'right': '10px',
            'z-index': '10'
        });
        
        // Add click handler
        copyButton.on('click', function() {
            const textToCopy = code.text();
            
            if (navigator.clipboard) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showCopySuccess(copyButton);
                });
            } else {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = textToCopy;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showCopySuccess(copyButton);
            }
        });
        
        pre.append(copyButton);
    });
}

// Show copy success feedback
function showCopySuccess(button) {
    const originalContent = button.html();
    button.html('<i class="check green icon"></i>')
          .attr('data-tooltip', 'Copied!')
          .popup('destroy')
          .popup();
    
    setTimeout(() => {
        button.html(originalContent)
              .attr('data-tooltip', 'Copy code')
              .popup('destroy')
              .popup();
    }, 2000);
}

// Show no results message
function showNoResultsMessage(searchTerm) {
    if ($('.no-results-message').length === 0) {
        const message = $(`
            <div class="ui message no-results-message">
                <div class="header">No results found</div>
                <p>No content found for "${searchTerm}". Try a different search term.</p>
            </div>
        `);
        $('.ui.container').append(message);
    }
}

// Hide no results message
function hideNoResultsMessage() {
    $('.no-results-message').remove();
}

// Theme toggle functionality
function toggleTheme() {
    const body = $('body');
    const isDark = body.hasClass('dark-theme');
    
    if (isDark) {
        body.removeClass('dark-theme');
        localStorage.setItem('theme', 'light');
    } else {
        body.addClass('dark-theme');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        $('body').addClass('dark-theme');
    }
}

// Initialize theme on page load
$(document).ready(function() {
    loadTheme();
});

// Offline functionality
window.addEventListener('online', function() {
    showConnectionStatus('Connected', 'green');
});

window.addEventListener('offline', function() {
    showConnectionStatus('Offline - Using cached content', 'orange');
});

function showConnectionStatus(message, color) {
    const toast = $(`
        <div class="ui ${color} message connection-status" style="position: fixed; top: 20px; right: 20px; z-index: 1000; max-width: 300px;">
            <i class="wifi icon"></i>
            ${message}
        </div>
    `);
    
    $('body').append(toast);
    
    setTimeout(() => {
        toast.fadeOut(() => toast.remove());
    }, 3000);
}

// Analytics (if needed)
function trackEvent(category, action, label) {
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
}

// Track search usage
$('#searchInput').on('keyup', function() {
    const searchTerm = $(this).val();
    if (searchTerm.length > 2) {
        trackEvent('Search', 'search_query', searchTerm);
    }
});

// Accessibility improvements
$(document).ready(function() {
    // Add ARIA labels
    $('#searchInput').attr('aria-label', 'Search Python concepts');
    
    // Focus management for accessibility
    $('.ui.segment h2').attr('tabindex', '-1');
    
    // Skip to content link
    const skipLink = $('<a href="#main-content" class="skip-link">Skip to main content</a>');
    skipLink.css({
        'position': 'absolute',
        'top': '-40px',
        'left': '6px',
        'background': '#2185d0',
        'color': 'white',
        'padding': '8px',
        'text-decoration': 'none',
        'border-radius': '4px',
        'z-index': '1001'
    });
    
    skipLink.on('focus', function() {
        $(this).css('top', '6px');
    }).on('blur', function() {
        $(this).css('top', '-40px');
    });
    
    $('body').prepend(skipLink);
    $('.ui.container').attr('id', 'main-content');
});

// Performance optimization
$(document).ready(function() {
    // Lazy load images (if any are added later)
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // Prefetch critical resources
    const prefetchLinks = [
        'https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.css',
        'https://cdn.jsdelivr.net/npm/semantic-ui@2.5.0/dist/semantic.min.js'
    ];
    
    prefetchLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
    });
});
