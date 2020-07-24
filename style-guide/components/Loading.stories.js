import { storiesOf } from '@storybook/vue'
import Loading from '@/components/Loading.vue'

storiesOf('Loading', module).add('default', () => ({
  components: { Loading },
  template: '<loading />',
}))

storiesOf('Loading', module).add('test', () => ({
  components: { Loading },
  template: '<loading />',
}))
