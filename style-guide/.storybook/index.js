import Vue from 'vue';
import { storiesOf } from '@storybook/vue';
import Loading from '@/components/Loading.vue';

Vue.component('loading', Loading);

storiesOf('Loading', module)
  .add('default', () => '<loading />')
