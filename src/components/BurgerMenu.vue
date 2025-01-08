<script setup>
const props = defineProps(['active'])
const emits = defineEmits(['toggle-menu'])

function toggleActive() {
  emits('toggle-menu', props.active)
}
</script>
<template>
  <div id="burger" :class="{ active: props.active }" @click="toggleActive">
    <button type="button" class="burger-button" title="Menu">
      <span class="burger-bar bar--1"></span>
      <span class="burger-bar bar--2"></span>
      <span class="burger-bar bar--3"></span>
    </button>
  </div>
  <nav class="navbar" :class="{ active: props.active }">
    <RouterLink to="/" class="link">Logg</RouterLink>
    <RouterLink to="/showlog" class="link">Loggbok</RouterLink>
    <RouterLink to="/activities" class="link">Aktiviteter</RouterLink>
    <RouterLink to="/statistics" class="link">Statistik</RouterLink>
    <RouterLink to="/about" class="link">Om Sida</RouterLink>
  </nav>
</template>
<style scoped>
#burger {
  display: block;
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  z-index: 100;
}
#burger.active .burger-button {
  transform: rotate(-180deg);
}
#burger.active .bar--1 {
  transform: rotate(45deg);
  top: 50%;
}
#burger.active .bar--2 {
  opacity: 0;
}
#burger.active .bar--3 {
  transform: rotate(-45deg);
  top: 50%;
}
.burger-button {
  position: relative;
  height: 90px;
  width: 120px;
  display: block;
  z-index: 99;
  border: 0;
  border-radius: 0;
  background-color: transparent;
  pointer-events: all;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-bar {
  background-color: #ed1313;
  position: absolute;
  top: 50%;
  right: 18px;
  left: 18px;
  height: 9px;
  margin-top: -3px;
}

.bar--1 {
  transform: translateY(-18px);
  top: 40%;
}

.bar--2 {
  transform-origin: 100% 50%;
  transform: scaleX(1);
}

.bar--3 {
  transform: translateY(18px);
  top: 60%;
}
button {
  cursor: pointer;
}
header {
  position: relative;
}
.navbar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 120px; /* Justera så att den hamnar under burger menyn */
  left: 0;   /* Placera mot vänster vägg */
  width: 50%; /* Gör så att de sträcker sig över hela bredden */
  z-index: 50; /* Se till att den ligger över andra element */
}

.link {
  display: block;
  width: 90%;
  height: 130px;
  background-color: #ed1313;
  color: white;
  text-align: center;
  line-height: 125px; /* Behålls för vertikal centrering */
  margin-bottom: 10px;
  border-radius: 5px;
  transition: opacity 0.3s ease;
  font-size: 30px; /* Justera textstorleken här */
  font-weight: bold; /* Gör texten fet om önskas */
  transition: opacity 0.3s ease; /* Lägga till en övergångseffekt */
}

.navbar {
  opacity: 0; /* Döljer navbar initialt */
  transition: opacity 0.3s ease;
}

.navbar.active {
  opacity: 1; /* Visar navbar när aktiv */
}
</style>
