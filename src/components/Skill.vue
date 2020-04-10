<template>
  <div id="skillSection">
    <div id="skillTitle">
      Skill Set
    </div>
    <div id="skillExplain" />
    <label for="gitHubLabel">GitHub</label>
    <a
      id="gitHubLink"
      href="https://github.com/TakezakiYamato"
      target="_brank"
    >https://github.com/TakezakiYamato</a>
    <a>Front-end</a>
  </div>
</template>

<script>

</script>

<style scoped>
#skillSection {
  text-align: center;
  background-color: #fff;
  width: 100%;
  height: auto;
}

#skillTitle {
  color: #20879f;
  font-size: 18px;
  text-shadow: 1px 1px 3px #e8eaf6;
}

#skillExplain {
  color: #707070;
  font-size: 12px;
  word-wrap: break-word;
  line-height: 0.25 em;
}

label[for="gitHubLabel"] {
  color: #20879f;
  font-size: 12px;
}

#gitHubLink {
  color: #20879f;
  font-size: 12px;
}

</style>
