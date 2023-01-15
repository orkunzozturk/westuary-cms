"use strict";
const readingTime = require("reading-time");
/**
 * Read the documentation (https://docs.strapi.io/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */
module.exports = {
    async beforeCreate(event) {
      const { data } = event.params;
      if (event.params.data.content && event.params.data.content?.length > 0) {
        event.params.data.readingTime = readingTime(event.params.data.content)?.text && event.params.data.url == `http://localhost:3000/${event.params.data.content}`|| null;
      }
    },
    async beforeCreate(event) {
      const { data } = event.params;
      if (event.params.data.content && event.params.data.content?.length > 0) {
        event.params.data.url = `http://localhost:3000/${event.params.data.slug}`|| null;
      }
    },
    async beforeUpdate(event) {
      const { data } = event.params;
      if (event.params.data.content && event.params.data.content?.length > 0) {
        event.params.data.readingTime = readingTime(event.params.data.content)?.text || null;
      }
    },
    async beforeUpdate(event) {
      const { data } = event.params;
      if (event.params.data.content && event.params.data.content?.length > 0) {
        event.params.data.url = `http://localhost:3000/${event.params.data.slug}`|| null;
      }
    },
};
