requirejs.config({
    "baseUrl": "scripts",
    "paths": {
      "script": "../scripts",
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"
    }
});

// Load the main app module to start the app
requirejs(["scripts/pong"]);