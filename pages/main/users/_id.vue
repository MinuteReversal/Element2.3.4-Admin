<template>
  <span>
    users detial {{id}}
  </span>
</template>
<script>
export default {
  props: ['id'],
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
  }
}
</script>
