<template>
  <section class="section-content">
    <div class="container">
      <div class="row">
        <ProfileAccount />
        <div class="col-lg-8 col-xxl-9">
          <div class="border rounded-10 p-3 p-lg-4">
            <div class="d-flex align-items-center justify-content-between mb-4">
              <h4 class="text-gray font-size-14 font-size-lg-18">Edit Account setting</h4>
            </div>
            <form action="">
              <div class="row">
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>First Name </label>
                    <input class="form-control font-medium" name="firstName" type="text" value="Adnan">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Second Name</label>
                    <input class="form-control font-medium" name="secondName" type="text" value="Mohammed">
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="form-group">
                    <label>Last Name</label>
                    <input class="form-control font-medium" name="lastName" type="text" value="Afana">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input class="form-control font-medium" name="email" type="text" value="adnanaafana0@companyname.com">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Country</label>
                    <div class="input-icon left">
                      <input class="form-control font-medium" name="country" type="text" value="United Arab Emirates">
                      <div class="icon">
                        <div class="symbol symbol-25"><img src="@/assets/images/flag.png" alt=""></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>City</label>
                    <v-select :options="options" placeholder="Select a Country"></v-select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Building Num.</label>
                    <input class="form-control font-medium" name="building" type="text" value="G-50220">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Flat num.</label>
                    <v-select :options="options" placeholder="Select a Country"></v-select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group">
                    <label>Address</label>
                    <input class="form-control font-medium" type="text" value="Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine">
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group text-end mt-lg-5">
                    <button class="btn btn-primary" type="submit">Save changes</button>
                  </div>
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
import ProfileAccount from '@/components/account/ProfileAccount.vue'

export default {
  name: 'AddView',
  components: {
    ProfileAccount
  },
  data () {
    return {
      options: [
        'foo',
        'bar',
        'baz'
      ]
    }
  }
}
</script>
