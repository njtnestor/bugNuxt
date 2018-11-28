<template>
  <section class="container">
    <div>
      false!
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  //middleware: 'noindex',
  components: {
    Logo
  },
  validate ({ params, query, store}) {
    return false;
   // return cuchillosCategoria.some((x) => x.subCategorias.some((category) => category.route === params.cuchillos))
    //return cuchillosCategoria.some((x) => x.subCategorias.some((category) => category.route === params.cuchillos))
    //return true;
  }
}
</script>

<style>