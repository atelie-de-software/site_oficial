<template>
  <span v-if="selectedPerson !== undefined">
    <g-image
      v-for="(person, index) in persons"
      v-show="selectedPerson === index"
      :src="person"
      aria-hidden="true"
      :key="index"
    />
  </span>
</template>

<script>
export default {
  name: 'Person',
  data() {
    return {
      persons: ['/person1.png', '/person2.png', '/person3.png'],
      selectedPerson: undefined
    }
  },
  created() {
    this.selectedPerson = Math.floor(Math.random() * 3)
  }
}
</script>
