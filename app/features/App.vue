<template>
  <div id="test">
    Hello {{ name }}!
  </div>
</template>

<script>
var exampleData = {
  name: 'World'
}

var exampleVM = new Vue({
  el: '#app',
  data: exampleData
});
</script>
