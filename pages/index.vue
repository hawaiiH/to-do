<template>
  <div class="container">
    <div class="input">
      <Input />
    </div>
    <div class="messages">
      <Message />
    </div>
    <div class="tasks">
      <Tasks />
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
.container {
  min-height: 100vh;
  display: grid;
}
/* portrait phones */
@media (max-width: 575.98px) {
  .container {
    grid-template-rows: 4em 1fr 4em;
  }
  .input {
    grid-row-start: 3;
  }
  .messages {
    grid-row-start: 1;
  }
  .tasks {
    grid-row-start: 2;
  }
}

/* tablets, landscape phones */
@media (min-width: 576px) {
  .container {
    grid-template-columns: 4fr 1fr;
    grid-template-rows: 1fr 3em;
  }
  .input {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
  }
  .messages {
    grid-column-start: 2;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .tasks {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
  }
}
/* desktops */
@media (min-width: 992px) {
  .container {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 3em 1fr;
  }
  .input {
    grid-column-start: 2;
    grid-row-start: 1;
  }
  .messages {
    grid-column-start: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .tasks {
    grid-column-start: 2;
    grid-row-start: 2;
  }
}
</style>
