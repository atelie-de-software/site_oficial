<template>
  <span v-if="selectedPerson !== undefined">
    <img
      v-for="(person, index) in persons"
      v-show="selectedPerson === index"
      :key="index"
      v-lazy="person"
      aria-hidden="true"
    />
  </span>
</template>

<script>
export default {
  name: 'Person',
  data() {
    return {
      persons: ['/person1.png', '/person2.png'],
      selectedPerson: undefined
    }
  },
  created() {
    this.selectedPerson = Math.floor(Math.random() * 3)
  }
}
</script>
