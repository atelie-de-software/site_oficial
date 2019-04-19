<template>
  <div class="culture container" id="cultura">
    <div class="row">
      <div class="col-md-6 content">
        <h3 tabindex="0">Nossa Cultura</h3>
        <div class="blockquote">
          <p tabindex="0">Somos uma empresa com estilo de Gestão Horizontal. Cultura é o resultado de tudo que fazemos aqui dentro. Valorizamos a autonomia e a colaboração entre as pessoas e gostamos de compartilhar conhecimentos com todos os integrantes do nosso time e também da comunidade ao nosso redor.</p>
        </div>
      </div>
      <div class="col-md-6">
        <Person/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.culture {
  margin-top: -100px;
  margin-bottom: 50px;
  @media screen and (max-width: 640px) {
    margin-top: 50px;
  }
}
.content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
}
.blockquote {
  max-width: 420px;
  border-left: 4px solid rgba($color: #000000, $alpha: 0.5);
  padding-left: 30px;
  letter-spacing: 2.72px;
  margin-bottom: 50px;
  line-height: 27px;
}
</style>

<script>
import Person from '~/components/Person'

export default {
  name: 'Culture',
  components: {
    Person
  }
}
</script>
