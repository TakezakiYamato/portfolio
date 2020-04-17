<template>
  <div id="drawerSection">
    <a
      class="header__link"
      href="#"
    >
      <transition name="slide-fade">
        <button
          v-if="show"
          key="on"
          class="header--button"
          @click="show = false"
        >
          <v-icon large>mdi-close</v-icon>
        </button>
        <button
          v-else
          key="off"
          class="header--button"
          @click="show = true"
        >
          <v-icon large>mdi-menu</v-icon>
        </button>
      </transition>
    </a>
    <transition name="dropdown">
      <div
        v-if="show"
        class="dropdown__menu"
        :class="{ active: show }"
      >
        <ul
          @click="show = false"
        >
          <li class="dropdown__menu-item">
            <a
              href="#mainSection"
              class="dropdown__menu-link"
            >
              Home
            </a>
          </li>
          <li class="dropdown__menu-item">
            <a
              href="#aboutSection"
              class="dropdown__menu-link"
            >
              About Me
            </a>
          </li>
          <li class="dropdown__menu-item">
            <a
              href="#skillSection"
              class="dropdown__menu-link"
            >
              Skill Set
            </a>
          </li>
          <li class="dropdown__menu-item">
            <a
              href="#visionSection"
              class="dropdown__menu-link"
            >
              Vision
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
  export default ({
    name: "DrawerSection",
    data(){
      return{
        show: false
      }
    }
  })
</script>

<style lang="scss" scoped>
#drawerSection {
  background-color: #f3f3f3;
  width: 100%;
  padding: 8px;
}

.header--botton {
  margin: 5px;
}

.dropdown__menu-item {
  padding: 10px;
  border-bottom: 2px solid #fff;
  position: relative; /* 文字を移動できるように */
  top: 10px; /* 上から10px移動する */
}

ul {
  list-style: none;
}

.dropdown__menu-link {
  text-decoration: none; /* リンクの下線消す */
  display: block;
  color: #707070;
  font-size: 14px;
  font-weight: bold;
  font-family: "Noto Sans Japanese", sans-serif;
}

</style>


