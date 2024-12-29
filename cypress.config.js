const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    video: true,                  //habilita gravação de videos. 
    setupNodeEvents(on, config) {
    // implement node event listeners here
    }
  }
});
