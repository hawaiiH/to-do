<template>
  <div class="msg-block">
    <div
      v-for="msg in messages"
      :key="msg.id"
      class="msg"
    >
      {{ msg.msg }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['messages'])
}
</script>

<style lang="scss" scoped>
$yellow: #F7941D;
$red: #ED1B24;
.msg-block {
  margin: 10px 10px 0 0;
}
.msg {
  height: max-content;
  border: 3px solid $yellow;
  text-align: center;
  margin: 0 0 1em 0;
  padding: auto 1px;
  box-shadow: 3px 3px 10px $red;
  animation-name: message-appear;
  animation-duration: 5s;
}
@keyframes message-appear {
  0% {
    margin-top: 50px;
    opacity: 0;
  }
  60% {
    opacity: 1;
    margin-top: 0;
  }
  80% {
    opacity: 1;
    margin-top: 0;
  }
  100% {
    opacity: 0;
    display: none ;
  }
}
</style>
