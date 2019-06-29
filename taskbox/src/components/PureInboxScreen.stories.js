import { storiesOf } from '@storybook/vue'
import PureInboxScreen from './PureInboxScreen'

storiesOf('PureInboxScreen', module)
  .add('default', () => {
    return {
      components: { PureInboxScreen },
      template: '<pure-inbox-screen />',
    }
  })
  .add('error', () => {
    return {
      components: { PureInboxScreen },
      template: '<pure-inbox-screen :error="true" />',
    }
  })
