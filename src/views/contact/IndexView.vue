<template>
  <section class="section-content">
    <div class="container py-lg-4">
      <div class="row">
        <div class="col-lg-5 me-auto">
          <h3 class="mb-4 font-size-xxl-40 font-size-lg-30 text-blue font-bold">Thank you for your interest with Parcelya</h3>
          <h5 class="mb-4 text-gray">Feel free to send what makes you happy, private feedback, suggestion, or even if you want to collaborate</h5>
          <div class="text-center"><img class="image-contact" src="@/assets/images/image-contact.png" alt=""></div>
        </div>
        <div class="col-lg-6">
          <div class="rounded-10 p-4 box-shadow">
            <form action="" class="form-contact" novalidate="novalidate">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First Name </label>
                    <input class="form-control" name="firstName" type="text" placeholder="First Name">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Last Name </label>
                    <input class="form-control" name="lastName" type="text" placeholder="Last Name">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Phone No. </label>
                    <div class="input-group">
                      <div class="input-group-text p-0 border-0 bg-white">
                        <v-select :options="options" label="title" class="select-country" placeholder="Phone">
                          <template slot="option" slot-scope="option">
                              <img :src="option.flag" />
                              {{ option.title }}
                          </template>
                        </v-select>
                      </div>
                      <input class="form-control" type="text" placeholder="59-0000000" />
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Email </label>
                    <input class="form-control" name="email" type="text" placeholder="example@example.com">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Your message </label>
                    <textarea class="form-control" name="message" rows="5" placeholder="What is in your mind?"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group text-end mt-3">
                    <button class="btn btn-primary font-semi-bold" type="submit">Send connection</button>
                  </div>
                </div>
                <div class="col-12">
                  <div class="text-center mt-4">According to our We will contact you if it’s necessary to follow up.</div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'IndexView',
  data () {
    return {
      fieldType: 'password',
      fieldType_2: 'password',
      options: [
        {
          title: '+972',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/512px-Palestine_Flag.svg.png'
        },
        {
          title: '+973',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/512px-Palestine_Flag.svg.png'
        },
        {
          title: '+971',
          flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/512px-Palestine_Flag.svg.png'
        }
      ]
    }
  }
}
</script>
