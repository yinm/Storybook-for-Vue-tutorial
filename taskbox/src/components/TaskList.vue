<template>
  <div>
    <pure-task-list :tasks="tasks" />
  </div>
</template>

<script>
import PureTaskList from './PureTaskList'
import { mapState } from 'vuex'

export default {
  name: 'task-list',
  components: {
    PureTaskList
  },
  computed: {
    ...mapState(['tasks'])
  }
}
</script>
