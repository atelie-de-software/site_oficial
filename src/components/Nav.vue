<template>
  <div class="nav-container">
    <button class="menu" @click="toggleMenu">
      <span></span>
      <span></span>
      <span></span>
    </button>
    <nav :class="menuClass" @click="closeMenu">
      <g-link to="/cultura" href="/#cultura">Cultura</g-link>
      <g-link to="/cases">Cases</g-link>
      <g-link to="/#mundo" href="/#mundo" v-scroll-to="'#mundo'">No Mundo</g-link>
      <g-link to="/#share" href="/#share" v-scroll-to="'#share'">share!</g-link>
      <g-link to="/#contato" href="/#contato" v-scroll-to="'#contato'">Fale Conosco</g-link>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  max-width: 655px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  transition: all 50ms cubic-bezier(0, 1, 0, 1);
  a {
    font-size: 14px;
    font-weight: 300;
    line-height: 17.88px;
    letter-spacing: 3.26px;
  }
  @media screen and (max-width: 768px) {
    max-height: 0px;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 100%;
    background: #fff;
    width: 100vw;
    z-index: 10;
    a {
      margin: 5px 0;
    }
    &.open {
      transition: all 50ms ease-in-out;
      max-height: 99999px;
    }
  }
}
.nav-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.menu {
  width: 27px;
  height: 23px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: transparent;
  border: 0;
  padding: 0;
  display: none;

  span {
    display: block;
    width: 30px;
    height: 3px;
    background-color: #444140;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
}
</style>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      menuOpened: false
    }
  },
  computed: {
    menuClass: function() {
      return this.menuOpened ? 'open' : ''
    }
  },
  methods: {
    toggleMenu: function() {
      this.menuOpened = !this.menuOpened
    },
    closeMenu: function() {
      console.log('close')
      this.menuOpened = false
    }
  }
}
</script>