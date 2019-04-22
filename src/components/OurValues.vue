<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h1>Valores</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <h3>Autonomia</h3>
        <p>Ter autonomia significa fazer o trabalho que precisa ser feito da maneira que você acredita ser a melhor, considerando o impacto e as consequências dessa escolha na atuação das pessoas que trabalham com você, no nosso negócio e no negócio do cliente.</p>
      </div>
      <div class="col-md-6">
        <h3>Colaboração</h3>
        <p>Colaborar significa fazer o trabalho junto com outras pessoas para criar novos aprendizados, aumentar a resiliência da equipe e ter qualidade no resultado final. A colaboração estimula a troca de conhecimentos e é a base do trabalho em equipe.</p>
      </div>
      <div class="col-md-6">
        <h3>Aprendizado</h3>
        <p>Aprender novos conceitos, técnicas e ferramentas aumenta a eficácia e a eficiência do trabalho criativo, que é realizado por profissionais do conhecimento. A melhor forma de aprender é fazendo e compartilhando conhecimentos e experiências com outros integrantes da equipe e com os nossos clientes.</p>
      </div>
      <div class="col-md-6">
        <h3>Auto-organização</h3>
        <p>É a capacidade que uma equipe tem de encontrar a melhor forma de trabalhar coletivamente, respeitando as restrições do ambiente e a capacidade do seus integrantes para alcançar resultados que sozinhos não conseguiríamos.</p>
      </div>
      <div class="col-md-6">
        <h3>Transparência</h3>
        <p>É a correspondência entre o que realmente queremos e o que demonstramos, entre o que desejamos e o que manifestamos no mundo real. Significa revelar com maior ou menor clareza as intenções, os sentimentos e os pensamentos ocultos por trás de uma ação. A transparência diminui a frustração, facilita a convivência com o outro, favorece a autonomia, a colaboração e a auto-organização.</p>
      </div>
      <div class="col-md-6">
        <h3>Excelência</h3>
        <p>Ter excelência é a realização de uma virtude, é o resultado de se ter o domínio pleno do que fazemos e das competências necessárias para executar o nosso trabalho. A busca pela excelência é o que nos afasta da mediocridade, proporcionando serviços e produtos de primeira linha e a melhor experiência de consumo para os clientes. É a realização profissional que torna as pessoas mais felizes no trabalho.</p>
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
