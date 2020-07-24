import { configure } from '@storybook/vue';

function loadStories() {
  const req = require.context('../components', true, /\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
