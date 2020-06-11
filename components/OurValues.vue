<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h2>{{ $t('ourValues.message') }}</h2>
      </div>
    </div>
    <div class="row">
      <div v-for="(value, index) in values" :key="index" class="col-md-6">
        <h3>
          {{ value.title }}
        </h3>
        <p>
          {{ value.content }}
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 center">
        <Person />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h3 {
  color: #444140;
  margin-top: 45px;
}
p {
  color: #000000;
  font-size: 16px;
  font-weight: 300;
  line-height: 27px;
}
.center {
  display: flex;
  justify-content: center;
}
</style>

<script>
import Person from '@/components/Person'

export default {
  name: 'OurValue',
  components: {
    Person
  },
  data() {
    return {
      values: [
        {
          title: this.$t('ourValues.Autonomy'),
          content: this.$t('ourValues.AutonomyDescription')
        },
        {
          title: this.$t('ourValues.Collaboration'),
          content: this.$t('ourValues.CollaborationDescription')
        },
        {
          title: this.$t('ourValues.Learning'),
          content: this.$t('ourValues.LearningDescription')
        },
        {
          title: this.$t('ourValues.SelfOrganization'),
          content: this.$t('ourValues.SelfOrganizationDescription')
        },
        {
          title: this.$t('ourValues.Transparency'),
          content: this.$t('ourValues.TransparencyDescription')
        },
        {
          title: this.$t('ourValues.Excellency'),
          content: this.$t('ourValues.ExcellencyDescription')
        }
      ]
    }
  }
}
</script>
