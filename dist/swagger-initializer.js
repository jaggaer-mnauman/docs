window.onload = function() {
  //<editor-fold desc="Changeable Configuration Block">

  // the following lines will be replaced by docker/configurator, when it runs in a docker-container
  window.ui = SwaggerUIBundle({
    urls: [
      {
        url: "ches-internal-openapi.yaml",
        name: "Customer Host Entity Service (CHES)"
      },
      {
        url: "ees-internal-openapi.yaml",
        name: "Event Entity Service (EES)"
      },
      {
        url: "auth-internal-openapi.yaml",
        name: "Authorization Service (Auth)"
      }
    ],
    supportedSubmitMethods: [],
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  });


  //</editor-fold>
};
