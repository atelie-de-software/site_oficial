<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>{{ $t('ourValues.message') }}</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h3>{{ $t('ourValues.Autonomy') }}</h3>
        <p>{{ $t('ourValues.AutonomyDescription') }}</p>
      </div>
      <div class="col-md-6">
        <h3>{{ $t('ourValues.Collaboration') }}</h3>
        <p>{{ $t('ourValues.CollaborationDescription') }}</p>
      </div>
      <div class="col-md-6">
        <h3>{{ $t('ourValues.Learning') }}</h3>
        <p>{{ $t('ourValues.LearningDescription') }}</p>
      </div>
      <div class="col-md-6">
        <h3>{{ $t('ourValues.SelfOrganization') }}</h3>
        <p>{{ $t('ourValues.SelfOrganizationDescription') }}</p>
      </div>
      <div class="col-md-6">
        <h3>{{ $t('ourValues.Transparency') }}</h3>
        <p>{{ $t('ourValues.TransparencyDescription') }}</p>
      </div>
      <div class="col-md-6">
        <h3>{{ $t('ourValues.Excellency') }}</h3>
        <p>{{ $t('ourValues.ExcellencyDescription') }}</p>
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
  }
}
</script>
