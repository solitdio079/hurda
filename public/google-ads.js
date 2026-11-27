// Google Ads Contact conversion: track phone link clicks on every route.
window.dataLayer = window.dataLayer || [];
window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
window.gtag('js', new Date());
window.gtag('config', 'AW-18582855965');

window.gtag_report_conversion = function (url) {
  var navigated = false;
  var callback = function () {
    if (!navigated && typeof url !== 'undefined') {
      navigated = true;
      window.location.href = url;
    }
  };
  // Keep the dialer working even if tracking is blocked or never calls back.
  var fallback = window.setTimeout(callback, 1000);
  try {
    window.gtag('event', 'conversion', {
      send_to: 'AW-18582855965/X8GdCO2W4cAdEJ3C_5xF',
      event_callback: function () {
        window.clearTimeout(fallback);
        callback();
      },
      event_timeout: 1000
    });
  } catch (error) {
    window.clearTimeout(fallback);
    callback();
  }
  return false;
};

// Delegation covers pre-rendered links and links added by React navigation.
document.addEventListener('click', function (event) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  var link = event.target instanceof Element ? event.target.closest('a[href^="tel:"]') : null;
  if (!link) return;
  event.preventDefault();
  window.gtag_report_conversion(link.href);
});
