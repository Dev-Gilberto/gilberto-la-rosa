<template>
  <button
    id="btnSubir"
    class="cursor-pointer px-4 py-2 rounded-lg uppercase bg-white font-bold border-b-4 border-[#f79533] active:border-none duration-300"
  >
    Subir &#11014;
  </button>
</template>

<style scoped>
#btnSubir {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
  cursor: pointer;
}
</style>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("btnSubir").style.display = "block";
      } else {
        document.getElementById("btnSubir").style.display = "none";
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
