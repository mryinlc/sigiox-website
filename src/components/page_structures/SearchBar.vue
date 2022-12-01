<template>
  <div class="search-bar">
    <input type="text"
           :placeholder="searchContent">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['searchContent']
}
</script>

<style scoped>
.search-bar {
  width: 100%;
  display: flex;
  justify-content: end;
}
.search-bar > input {
  border: 1px solid gainsboro;
  border-radius: 5px;
  outline: none;
  padding: 8px 11px;
  width: 20%;
}
.search-bar > input:focus {
  border: 1px solid #1a7fe4;
  border-radius: 5px;
  outline: none;
  padding: 8px 11px;
}
.search-bar > input::placeholder {
  color: gainsboro;
}
</style>