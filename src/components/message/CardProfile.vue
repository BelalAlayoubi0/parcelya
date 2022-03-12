<template>
  <div class="col-lg-4 col-xxl-3 mb-4 mb-lg-0 border-end">
    <div class="main-chat_sidebar">
      <div class="main-chat_header d-flex-align-items-center pt-3">
        <div class="chat-search px-3 mb-2">
          <form action="">
            <div class="form-group mb-0">
              <div class="input-icon left">
                <input class="form-control rounded-10" type="text" placeholder="Search by parcel ID, sender, recipient..." />
                <div class="icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.3327 13.1667L18.0827 16.9167C18.416 17.2501 18.416 17.7501 18.0827 18.0834C17.916 18.2501 17.666 18.3334 17.4993 18.3334C17.3327 18.3334 17.0827 18.2501 16.916 18.0834L13.166 14.3334C11.916 15.2501 10.416 15.8334 8.74935 15.8334C4.83268 15.8334 1.66602 12.6667 1.66602 8.75008C1.66602 4.83342 4.83268 1.66675 8.74935 1.66675C12.666 1.66675 15.8327 4.83342 15.8327 8.75008C15.8327 10.4167 15.2493 12.0001 14.3327 13.1667ZM8.74935 3.33341C5.74935 3.33341 3.33268 5.75008 3.33268 8.75008C3.33268 11.7501 5.74935 14.1667 8.74935 14.1667C10.2493 14.1667 11.5827 13.5834 12.5827 12.5834C13.5827 11.5834 14.166 10.2501 14.166 8.75008C14.166 5.75008 11.7493 3.33341 8.74935 3.33341Z"
                      fill="#AEB6D1"
                    ></path>
                    <mask id="mask0_488_4300" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="18">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14.3327 13.1667L18.0827 16.9167C18.416 17.2501 18.416 17.7501 18.0827 18.0834C17.916 18.2501 17.666 18.3334 17.4993 18.3334C17.3327 18.3334 17.0827 18.2501 16.916 18.0834L13.166 14.3334C11.916 15.2501 10.416 15.8334 8.74935 15.8334C4.83268 15.8334 1.66602 12.6667 1.66602 8.75008C1.66602 4.83342 4.83268 1.66675 8.74935 1.66675C12.666 1.66675 15.8327 4.83342 15.8327 8.75008C15.8327 10.4167 15.2493 12.0001 14.3327 13.1667ZM8.74935 3.33341C5.74935 3.33341 3.33268 5.75008 3.33268 8.75008C3.33268 11.7501 5.74935 14.1667 8.74935 14.1667C10.2493 14.1667 11.5827 13.5834 12.5827 12.5834C13.5827 11.5834 14.166 10.2501 14.166 8.75008C14.166 5.75008 11.7493 3.33341 8.74935 3.33341Z"
                        fill="white"
                      ></path>
                    </mask>
                    <g mask="url(#mask0_488_4300)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H20V20H0V0Z" fill="#AEB6D1"></path>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="main-widget--users">
        <PerfectScrollbar class="scroll chat_sidebar_height">
          <div class="widget__items">
            <h5 class="text-gray mb-2 px-3 pt-2">Opened chat</h5>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-01.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-02.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">
                  <svg class="me-2" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.12415 6.23085L8.84945 9.74781L18.8731 0.184373C19.1396 -0.0697951 19.5615 -0.0599743 19.8156 0.206396C20.0698 0.472915 20.06 0.894778 19.7936 1.14895L9.31207 11.149C9.05537 11.3939 8.65211 11.3949 8.3942 11.1515L4.20906 7.20025C3.9412 6.94757 3.92914 6.52554 4.18182 6.25785C4.43465 5.99014 4.85653 5.97793 5.12422 6.23076L5.12415 6.23085ZM0.209095 7.20034C-0.0587606 6.94766 -0.0708176 6.52564 0.181863 6.25794C0.43469 5.99023 0.856568 5.97803 1.12426 6.23086L5.30979 10.1821C5.5775 10.4349 5.58956 10.8568 5.33687 11.1245C5.08405 11.3924 4.66217 11.4044 4.39447 11.1517L0.209095 7.20034ZM9.63844 7.02162C9.37192 7.27579 8.95006 7.26582 8.69588 6.99945C8.44172 6.73308 8.45154 6.31107 8.71806 6.0569L14.8731 0.184509C15.1396 -0.0696591 15.5615 -0.0598382 15.8157 0.206532C16.0698 0.473051 16.06 0.894914 15.7936 1.14909L9.63844 7.02162Z"
                      fill="#28A745"
                    ></path>
                  </svg>
                  10 min ago
                </p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat active">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-03.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">
                  <svg class="me-2" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.12415 6.23085L8.84945 9.74781L18.8731 0.184373C19.1396 -0.0697951 19.5615 -0.0599743 19.8156 0.206396C20.0698 0.472915 20.06 0.894778 19.7936 1.14895L9.31207 11.149C9.05537 11.3939 8.65211 11.3949 8.3942 11.1515L4.20906 7.20025C3.9412 6.94757 3.92914 6.52554 4.18182 6.25785C4.43465 5.99014 4.85653 5.97793 5.12422 6.23076L5.12415 6.23085ZM0.209095 7.20034C-0.0587606 6.94766 -0.0708176 6.52564 0.181863 6.25794C0.43469 5.99023 0.856568 5.97803 1.12426 6.23086L5.30979 10.1821C5.5775 10.4349 5.58956 10.8568 5.33687 11.1245C5.08405 11.3924 4.66217 11.4044 4.39447 11.1517L0.209095 7.20034ZM9.63844 7.02162C9.37192 7.27579 8.95006 7.26582 8.69588 6.99945C8.44172 6.73308 8.45154 6.31107 8.71806 6.0569L14.8731 0.184509C15.1396 -0.0696591 15.5615 -0.0598382 15.8157 0.206532C16.0698 0.473051 16.06 0.894914 15.7936 1.14909L9.63844 7.02162Z"
                      fill="#28A745"
                    ></path>
                  </svg>
                  30 min ago
                </p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-04.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-01.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-01.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-02.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-03.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-04.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
            <router-link to="/messages" class="widget_item-chat">
              <div class="widget_item-image"><img src="@/assets/images/avatar/img-01.png" alt="image" /></div>
              <div class="widget_item-content ms-3">
                <h5 class="widget_item-username font-medium mb-lg-2">#EE12F28</h5>
                <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
                <p class="widget_item-date text-gray-2 text-end font-medium">2 min ago</p>
              </div>
            </router-link>
          </div>
        </PerfectScrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
export default {
  components: {
    PerfectScrollbar
  }
}
</script>
