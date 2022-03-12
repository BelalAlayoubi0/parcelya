<template>
  <div>
    <div class="bg-gray text-center py-4 py-lg-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-xxl-4 mx-auto">
            <h2 class="text-blue font-bold mb-4 mt-2">Frequently Asked Questions</h2>
            <form action="">
              <div class="form-group">
                <div class="bg-white rounded-10 p-lg-1 d-flex align-items-center border">
                  <input class="form-control border-0" type="text" placeholder="What is your question?">
                  <button class="btn btn-primary">
                    <svg class="rotate-icon" width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.6 10.9334L15.6 18.9334C15.3333 19.2001 15.0667 19.3334 14.6667 19.3334C14.2667 19.3334 14 19.2001 13.7333 18.9334C13.2 18.4001 13.2 17.6001 13.7333 17.0667L19.4667 11.3334H1.33333C0.533333 11.3334 0 10.8001 0 10.0001C0 9.20008 0.533333 8.66675 1.33333 8.66675H19.4667L13.7333 2.93341C13.2 2.40008 13.2 1.60008 13.7333 1.06675C14.2667 0.533415 15.0667 0.533415 15.6 1.06675L23.6 9.06675C23.7333 9.20008 23.8667 9.33342 23.8667 9.46675C24 9.73341 24 10.1334 23.8667 10.5334C23.8667 10.6667 23.7333 10.8001 23.6 10.9334Z" fill="white"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <section class="section-content py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xxl-6 mx-auto">
            <div class="border p-3 p-lg-4 rounded-5">
              <FaqCollapse />
              <div class="mt-4">
                <h4 class="font-semi-bold text-blue mb-3">Did you find your target?</h4>
                <div class="d-flex flex-column align-items-start">
                  <button class="text-underline text-blue bg-white mb-1">Yes, Thank you!</button>
                  <button class="text-underline text-blue bg-white">No, I would send my own question</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import FaqCollapse from '@/components/faq/FaqCollapse'

export default {
  name: 'IndexView',
  components: {
    FaqCollapse
  }
}
</script>
