var Vue = require('vue');
var App = require('features/App.vue');
var VRouter = require('vue-router');
var VResource = require('vue-resource');

Vue.use(VRouter);
Vue.use(VResource);

module.exports = {
  router: new VRouter()
};

router.start(App, '#app');
