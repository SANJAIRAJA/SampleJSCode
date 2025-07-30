(function(global) {
  const MySDK = {
    version: "1.0.0",

    greet(name) {
      return `Hello, ${name}! Welcome to MySDK`;
    },

    sum(a, b) {
      return a + b;
    }
  };

  // Export for Browser
  if (typeof window !== "undefined") {
    window.MySDK = MySDK;
  }

  // Export for Node.js / React
  if (typeof module !== "undefined" && module.exports) {
    module.exports = MySDK;
  }

})(this);
