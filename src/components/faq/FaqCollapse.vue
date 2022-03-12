<template>
  <div>
    <ul class="nav nav-pills mb-4 tab-custom tab-faq">
      <li class="nav-item"><router-link to="/faq" class="nav-link active">All questions</router-link></li>
      <li class="nav-item"><router-link to="/faq" class="nav-link">Payment</router-link></li>
      <li class="nav-item"><router-link to="/faq" class="nav-link">Sending Prcels</router-link></li>
      <li class="nav-item"><router-link to="/faq" class="nav-link">Sending Prcels</router-link></li>
    </ul>
    <div class="border rounded-5">
      <div class="widget__item-accordion">
        <div class="widget__item-head" v-b-toggle.collapse-1>
          <h5 class="widget__item-title font-medium">Here is the scond Questions</h5>
        </div>
        <b-collapse id="collapse-1" accordion="my-accordion">
          <div class="widget__item-body accordion-collapse">
            <div class="widget__item-text text-gray pb-4">
              Description of what a Standard delivery means, and why should the user select standard delivery, what a Standard delivery means, and why should the user select standard delivery
            </div>
          </div>
        </b-collapse>
      </div>
      <div class="widget__item-accordion">
        <div class="widget__item-head" v-b-toggle.collapse-2>
          <h5 class="widget__item-title font-medium">Standard Delivery</h5>
        </div>
        <b-collapse id="collapse-2" accordion="my-accordion">
          <div class="widget__item-body accordion-collapse">
            <div class="widget__item-text text-gray pb-4">
              Description of what a Standard delivery means, and why should the user select standard delivery, what a Standard delivery means, and why should the user select standard delivery
            </div>
          </div>
        </b-collapse>
      </div>
      <div class="widget__item-accordion">
        <div class="widget__item-head" v-b-toggle.collapse-3>
          <h5 class="widget__item-title font-medium">Fourth Questions</h5>
        </div>
        <b-collapse id="collapse-3" accordion="my-accordion">
          <div class="widget__item-body accordion-collapse">
            <div class="widget__item-text text-gray pb-4">
              Description of what a Standard delivery means, and why should the user select standard delivery, what a Standard delivery means, and why should the user select standard delivery
            </div>
          </div>
        </b-collapse>
      </div>
    </div>
  </div>
</template>
