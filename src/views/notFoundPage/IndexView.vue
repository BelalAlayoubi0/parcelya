<template>
  <section class="section-content">
    <div class="container">
      <div class="text-center my-5 wow fadeInUp" data-wow-delay="0.2s">
        <div class="image mb-3"> <img src="@/assets/images/404.png" alt=""/></div>
        <h4 class="mb-3 text-blue font-medium">Oops page is not found</h4>
        <h6 class="mb-2">It seems you are trying to reach an unexisted URL</h6>
        <h6 class="mb-4">For more inforamtion go to<router-link to="/" class="text-underline px-1">Help center</router-link></h6>
        <router-link to="/" class="btn btn-primary font-semi-bold">Go to home page </router-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexView'
}
</script>
