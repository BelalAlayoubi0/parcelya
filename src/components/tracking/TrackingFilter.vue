<template>
  <div>
    <h4 class="text-gray font-size-lg-20 mb-3">Filters</h4>
    <div id="accordion">
      <div class="widget__item-filter">
        <div class="widget__item-head" v-b-toggle.collapse-1>
          <h5 class="widget__item-title font-medium">Package size</h5>
        </div>
        <b-collapse id="collapse-1" accordion="my-accordion">
          <div class="widget__item-body accordion-collapse">
            <div class="ps-2 pt-4 d-flex flex-column">
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Document</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Phone size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Tube size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
            </div>
            <div class="ps-2"><a class="text-blue font-medium" href=""> All sizes...</a></div>
          </div>
        </b-collapse>
      </div>
      <div class="widget__item-filter">
        <div class="widget__item-head" v-b-toggle.collapse-2>
          <h5 class="widget__item-title font-medium">Delivery company</h5>
        </div>
        <b-collapse id="collapse-2" accordion="my-accordion">
          <div class="widget__item-body accordion-collapse">
            <div class="ps-2 pt-4 d-flex flex-column">
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Document</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Phone size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Tube size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
            </div>
            <div class="ps-2"><a class="text-blue font-medium" href=""> All sizes...</a></div>
          </div>
        </b-collapse>
      </div>
      <div class="widget__item-filter">
        <div class="widget__item-head" v-b-toggle.collapse-3>
          <h5 class="widget__item-title font-medium">Weight range</h5>
        </div>
        <b-collapse id="collapse-3" accordion="my-accordion">
          <div class="widget__item-body accordion-collapse">
            <div class="ps-2 pt-4 d-flex flex-column">
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Document</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Phone size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Tube size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
            </div>
            <div class="ps-2"><a class="text-blue font-medium" href=""> All sizes...</a></div>
          </div>
        </b-collapse>
      </div>
      <div class="widget__item-filter">
        <div class="widget__item-head" v-b-toggle.collapse-4>
          <h5 class="widget__item-title font-medium">Location/Destination</h5>
        </div>
        <b-collapse id="collapse-4" accordion="my-accordion">
          <div class="widget__item-body accordion-collapse">
            <div class="ps-2 pt-4 d-flex flex-column">
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Document</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Phone size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
              <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span>Tube size</span><span class="text-gray d-block">0 to .5 m3</span> </label>
            </div>
            <div class="ps-2"><a class="text-blue font-medium" href=""> All sizes...</a></div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
