<template>
  <section class="container">
    <div>
      malo
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  middleware: 'noindex',
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


</style>
