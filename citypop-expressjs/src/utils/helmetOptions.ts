const helmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "https://www.youtube.com"],
      baseUri: ["'self'"],
      blockAllMixedContent: [],
      fontSrc: ["'self'", "https:", "data:"],
      frameAncestors: ["'self'"],
      imgSrc: ["'self'", "data:"],
      objectSrc: ["'none'"],
      scriptSrc: [
        "'self'",
        "https://www.youtube.com/iframe_api",
        "'unsafe-eval'",
        "https://s.ytimg.com/yts/jsbin/www-widgetapi-vflIcJli4/www-widgetapi.js"
      ],
      scriptSrcAttr: ["'none'"],
      styleSrc: ["'self'", "https:", "'unsafe-inline'"],
      upgradeInsecureRequests: []
    }
  }
};
export default helmetOptions;
