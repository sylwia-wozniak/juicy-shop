const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:3000/#/',
        experimentalSessionAndOrigin: true,
    },
    env: {
        email: faker.internet.email(),
        password: 'Testtest1!',
    },
    viewportWidth: 1920,
    viewportHeight: 1080,
    watchForFileChanges: false,
});
