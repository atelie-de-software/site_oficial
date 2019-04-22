<template>
  <div class="nav-container">
    <button
      class="menu"
      @click="toggleMenu"
    >
      <span />
      <span />
      <span />
    </button>
    <nav
      :class="menuClass"
      @click="closeMenu"
    >
      <g-link
        to="/cultura"
        href="/#cultura"
      >
        Cultura
      </g-link>
      <g-link to="/cases">
        Cases
      </g-link>
      <ClientOnly>
        <g-link :to="{ path: '/', hash: '#mundo'}">
          No Mundo
        </g-link>
        <g-link :to="{ path: '/', hash: '#share'}">
          share!
        </g-link>
        <g-link :to="{ path: '/', hash: '#contato'}">
          Fale Conosco
        </g-link>
      </ClientOnly>
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
    line-height: 30px;
    letter-spacing: 3.26px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      height: 1px;
      margin: 0 auto;
      border-bottom: 1px solid #000;
      transition: width 100ms ease-in-out;
    }
    &.active--exact,
    &:hover {
      &:after {
        width: 80%;
        transition: width 100ms ease-in;
      }
    }
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
  name: 'Navbar',
  data () {
    return {
      menuOpened: false
    }
  },
  computed: {
    menuClass: function () {
      return this.menuOpened ? 'open' : ''
    }
  },
  mounted () {
    if (this.$route.hash) {
      console.log('narf')
      this.scrollToHash()
    }
  },
  methods: {
    toggleMenu: function () {
      this.menuOpened = !this.menuOpened
    },
    closeMenu: function () {
      this.menuOpened = false
    },
    scrollToHash () {
      const toHash = this.$route.hash
      this.$nextTick(() => {
        setTimeout(() => {
          this.$scrollTo(toHash, 0, { offset: 0 })
        }, 500)
      })
    }
  }
}
</script>
