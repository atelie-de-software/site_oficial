<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ $t('ourValues.message') }}</h1>
      </div>
    </div>
    <div class="row">
      <div v-for="(value, index) in values" :key="index" class="col-md-6">
        <h3
          :data-aos="index % 2 !== 0 ? 'fade-left' : 'fade-right'"
          data-aos-once="true"
          :data-aos-delay="100 * index"
        >
          {{ value.title }}
        </h3>
        <p
          :data-aos="index % 2 !== 0 ? 'fade-left' : 'fade-right'"
          data-aos-once="true"
          :data-aos-delay="110 * index"
        >
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
h1 {
  color: #444140;
  font-size: 65px;
  font-weight: 800;
  line-height: 73.01px;
  text-transform: uppercase;
  letter-spacing: 2.1px;
  margin-bottom: 60px;
}
h3 {
  color: #444140;
  font-size: 38px;
  font-weight: 800;
  line-height: 41.02px;
  letter-spacing: -0.9px;
  margin-top: 45px;
}
p {
  color: #000000;
  font-size: 16px;
  font-weight: 300;
  line-height: 27px;
  letter-spacing: 2.08px;
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
