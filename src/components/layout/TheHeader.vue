<template>
  <div>
    <header class="main-header">
      <div class="container">
        <div class="d-flex align-items-center">
          <div class="logo">
            <router-link to="/"><img src="@/assets/images/logo.png" alt="" /></router-link>
          </div>
          <div class="menu--mobile mx-lg-auto" :class="{'menu-mobile-active': isActive}">
            <div class="menu-container d-flex align-items-center justify-content-between d-lg-none px-3 border-bottom py-2 mb-3">
              <div class="logo">
                <router-link to="/"><img src="@/assets/images/logo.png" alt="" /></router-link>
              </div>
              <div class="btn-close-header-mobile justify-content-end" @click="toogleMenu">
                <i class="fa-solid fa-xmark fa-xl"></i>
              </div>
            </div>
            <div class="menu-container mx-auto menu-nav">
              <ul class="main-menu">
                <li class="menu_item"><router-link to="/" class="menu_link">Home</router-link></li>
                <li class="menu_item"><router-link to="/parcel-details" class="menu_link">New Parcel</router-link></li>
                <li class="menu_item"><router-link to="/tracking" class="menu_link">Tracking</router-link></li>
              </ul>
            </div>
            <div class="menu-container col-auto">
              <ul class="main-menu d-lg-flex align-items-lg-center">
                <li class="menu_item dropdown dropdown-lang">
                  <b-dropdown right variant="link p-0" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                      <span class="menu_link">
                        En
                        <i class="fa-solid fa-chevron-down ms-1"></i>
                      </span>
                    </template>
                    <b-dropdown-item href="/" active>English</b-dropdown-item>
                    <b-dropdown-item href="/">العربية</b-dropdown-item>
                  </b-dropdown>
                </li>
                <li class="menu_item">
                  <a class="menu_link text-dark" @click="$bvModal.show('bv-modal-login')">Login</a>
                </li>
                <li class="menu_item mx-lg-3"><a class="btn btn-blue" @click="$bvModal.show('bv-modal-register')">Create account</a></li>
              </ul>
            </div>
          </div>
          <div class="header-mobile__toolbar ms-auto d-lg-none fa-lg" @click="toogleMenu">
            <i class="fa-solid fa-bars"></i>
          </div>
        </div>
      </div>
    </header>
    <b-modal content-class="border rounded-20 overflow-hidden" body-class="p-0" id="bv-modal-login" centered hide-header hide-footer>
      <div class="modal-inner py-4">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h3 class="mb-2 font-medium modal-title">Welcome to Parcelya</h3>
            <h6 class="mb-3 text-gray">Login and check your updates</h6>
            <button class="btn-close" type="button" @click="$bvModal.hide('bv-modal-login')"></button>
            <form action="">
              <div class="form-group">
                <label>Phone / Email</label>
                <input class="form-control" type="text" placeholder="Phone number or email" />
              </div>
              <div class="form-group">
                <label>Password </label>
                <div class="input-icon right">
                  <input :type="fieldType" class="form-control" placeholder="******" />
                  <div class="icon toggle-show-pass pointer" @click="obfuscateToggle">
                    <i class="fa-light fa-eye"></i>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <h6><router-link to="/" class="text-dark text-underline pointer">Forget password?</router-link></h6>
              </div>
              <div class="form-group">
                <!-- <button class="btn btn-primary w-100">Login</button> -->
                <router-link to="/account" class="btn btn-primary w-100">Login</router-link>
              </div>
              <hr class="hr-text" data-content="OR" />
              <div class="form-group">
                <div class="row">
                  <div class="col-lg-4">
                    <button class="btn btn-linkedIn w-100"><i class="fab fa-linkedin-in me-2"></i>LinkedIn</button>
                  </div>
                  <div class="col-lg-4">
                    <button class="btn btn-google w-100"><i class="fab fa-google me-2"> </i>Google</button>
                  </div>
                  <div class="col-lg-4">
                    <button class="btn btn-twitter w-100"><i class="fab fa-twitter me-2"></i>Twitter</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-gray text-center p-3">
        <h5>Don't have an account? <a class="text-blue pointer" @click="$bvModal.show('bv-modal-register') & $bvModal.hide('bv-modal-login')">Create new account </a></h5>
      </div>
    </b-modal>
    <b-modal content-class="border rounded-20 overflow-hidden" body-class="p-0" id="bv-modal-register" centered hide-header hide-footer>
      <div class="modal-inner py-4">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h3 class="mb-2 font-medium modal-title">Create new account</h3>
            <h6 class="mb-3 text-gray">Let start sending parcels</h6>
            <button class="btn-close" type="button" @click="$bvModal.hide('bv-modal-register')"></button>
            <form action="">
              <div class="row">
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>First name</label>
                    <input class="form-control" type="text" placeholder="First name" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label>Last name</label>
                    <input class="form-control" type="text" placeholder="Last name" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group">
                    <label>Phone No. </label>
                    <div class="input-group">
                      <div class="input-group-text p-0 border-0 bg-white">
                        <v-select :options="options" label="title" class="select-country" placeholder="select..">
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
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Email address</label>
                  <input class="form-control" type="text" placeholder="Email address" />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <label>Password </label>
                  <div class="input-icon right">
                    <input :type="fieldType_2" class="form-control" placeholder="******" />
                    <div class="icon toggle-show-pass pointer" @click="obfuscateToggle_2">
                      <i class="fa-light fa-eye"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <h6 class="text-gray">Agree to Term of use and Privacy policy</h6>
              </div>
              <div class="form-group">
                <!-- <button class="btn btn-primary w-100">Create account</button> -->
                <router-link to="/account" class="btn btn-primary w-100">Create account</router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="bg-gray text-center p-3">
        <h5>Already have account?  <a class="text-blue pointer" @click="$bvModal.hide('bv-modal-register') & $bvModal.show('bv-modal-login')"> Login </a></h5>
      </div>
    </b-modal>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isActive: false,
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
  },
  methods: {
    obfuscateToggle () {
      this.fieldType = this.fieldType === 'password' ? 'text' : 'password'
    },
    obfuscateToggle_2 () {
      this.fieldType_2 = this.fieldType_2 === 'password' ? 'text' : 'password'
    },
    toogleMenu () {
      this.isActive = !this.isActive
    }
  }
}
</script>
