<template>
<div class="row">
  <div class="col-12">
    <div class="border-gray bg-gray-2 p-3 p-lg-4 rounded-10 d-lg-flex align-items-center justify-content-between mb-3" v-for="item in items" :key="item.id">
      <div class="d-flex flex-column">
        <div class="d-flex align-items-center mb-2">
          <h4 class="text-dark font-semi-bold">{{item.title}}</h4>
          <h5 class="text-blue">
            <svg class="mx-2" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="4" r="4" fill="#35498E"></circle>
            </svg>
            Default
          </h5>
        </div>
        <h5 class="text-gray font-size-14 font-size-lg-16">{{item.desc}}</h5>
      </div>
      <div class="d-flex align-items-center col-auto">
        <router-link to="/address-add" class="btn btn-link-blue px-2 py-1">
          <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2071 4.20733C18.4174 3.99705 18.7026 3.87891 19 3.87891C19.1473 3.87891 19.2931 3.90791 19.4291 3.96426C19.5652 4.02061 19.6888 4.10321 19.7929 4.20733C19.897 4.31146 19.9796 4.43507 20.036 4.57112C20.0923 4.70716 20.1213 4.85297 20.1213 5.00023C20.1213 5.14748 20.0923 5.29329 20.036 5.42934C19.9796 5.56538 19.897 5.689 19.7929 5.79312L7.48877 18.0973L5.37439 18.6259L5.90299 16.5115L18.2071 4.20733ZM19 1.87891C18.1722 1.87891 17.3783 2.20776 16.7929 2.79312L4.29291 15.2931C4.16476 15.4213 4.07384 15.5819 4.02988 15.7577L3.02988 19.7577C2.94468 20.0985 3.04453 20.459 3.29291 20.7073C3.54129 20.9557 3.90178 21.0556 4.24256 20.9704L8.24256 19.9704C8.41839 19.9264 8.57897 19.8355 8.70713 19.7073L21.2071 7.20733C21.497 6.91749 21.7269 6.5734 21.8837 6.1947C22.0406 5.81601 22.1213 5.41012 22.1213 5.00023C22.1213 4.59033 22.0406 4.18444 21.8837 3.80575C21.7269 3.42705 21.497 3.08296 21.2071 2.79312C20.9173 2.50328 20.5732 2.27336 20.1945 2.1165C19.8158 1.95964 19.4099 1.87891 19 1.87891ZM13 19.0002C12.4477 19.0002 12 19.448 12 20.0002C12 20.5525 12.4477 21.0002 13 21.0002H22C22.5523 21.0002 23 20.5525 23 20.0002C23 19.448 22.5523 19.0002 22 19.0002H13Z" fill="#35498E"></path>
          </svg>
          Edit
        </router-link>
        <button class="bg-transparent p-2">
          <i class="fa-regular fa-xmark"></i>
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'My home',
          desc: 'Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine'
        },
        {
          title: 'My home',
          desc: 'Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine'
        },
        {
          title: 'My home',
          desc: 'Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine'
        }
      ]
    }
  }
}
</script>
