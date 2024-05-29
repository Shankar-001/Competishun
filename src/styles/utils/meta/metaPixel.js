import React, { useEffect } from 'react';

const MetaPixel = () => {
  useEffect(() => {
    // Facebook Pixel Code
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      'script',
      'https://connect.facebook.net/en_US/fbevents.js'
    );
    fbq('init', '821660793207359');
    fbq('track', 'PageView');

    // NoScript Image for noscript users
    const noscript = document.createElement('noscript');
    noscript.innerHTML = `<img height="1" width="1" style="display:none"
    src="https://www.facebook.com/tr?id=821660793207359&ev=PageView&noscript=1" />`;
    document.body.appendChild(noscript);

    // Cleanup function to remove the added elements on component unmount
    return () => {
      const script = document.querySelector(
        `script[src="https://connect.facebook.net/en_US/fbevents.js"]`
      );
      if (script) {
        script.parentNode.removeChild(script);
      }
      if (noscript) {
        document.body.removeChild(noscript);
      }
      delete window.fbq;
    };
  }, []);

  return null;
};

export default MetaPixel;
