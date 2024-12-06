<template>
  <k-field v-bind="$attrs">
    <div class="hello-world">
      {{ message }}
    </div>
  </k-field>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
.hello-world {
  font-size: 16px;
  color: #555;
}
</style>
