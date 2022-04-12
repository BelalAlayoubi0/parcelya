<template>
  <section class="section-content">
    <div class="container px-0 px-lg-4">
      <div class="row">
        <div class="col-lg-10 col-xxl-9 mx-auto">
          <form-wizard @hook:mounted="onfunction">
            <tab-content title="Parcel details" :on-change="onComplete">
              <div class="border rounded-10 p-4">
                <div class="row mb-4">
                  <div class="col-12">
                    <h4 class="text-gray">Shipment Details</h4>
                  </div>
                </div>
                <div class="row mb-4 mb-lg-5">
                  <div class="col-12">
                    <h5 class="font-semi-bold mb-3">Package size</h5>
                    <swiper ref="mySwiper" :key="key" class="slider-file-2" :options="swiperOption">
                      <swiper-slide v-for="(item, index) in items" :key="index">
                        <label class="d-block pointer widget__package" :for="'package-' + index">
                          <input class="d-none" type="radio" :id="'package-' + index" name="package">
                          <div class="widget__item-file text-center border rounded-10 py-3">
                            <div class="widget__item-image mb-3"><img :src="item.img" alt=""></div>
                            <h5 class="widget__item-title mb-1">{{item.title}}</h5>
                            <h6 class="widget__item-size text-gray font-medium">{{item.size}}</h6>
                          </div>
                        </label>
                      </swiper-slide>
                      <div class="swiper-button-prev" slot="button-prev">
                        <i class="fas fa-chevron-left"></i>
                      </div>
                      <div class="swiper-button-next" slot="button-next">
                        <i class="fas fa-chevron-right"></i>
                      </div>
                    </swiper>
                  </div>
                </div>
                <div class="row mb-5">
                  <div class="col-12">
                    <h5 class="font-semi-bold mb-3">Weight and sizes</h5>
                    <div class="row row-cols-lg-5 row-cols-sm-2 row-cols-md-3 row-cols-1">
                      <div class="col">
                        <div class="form-group">
                          <label>Parcel weight</label>
                          <div class="border rounded-10 d-flex overflow-hidden">
                            <input class="form-control h-auto border-0" type="text" placeholder="00.0" />
                            <div class="bg-gray font-medium px-2 d-flex align-items-center">Kg</div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>Est. weight</label>
                          <div class="border rounded-10 d-flex overflow-hidden">
                            <input class="form-control h-auto border-0 rounded-0" type="text" disabled="disabled" value="5.00" />
                            <div class="bg-gray font-medium px-2 d-flex align-items-center border-start">Kg</div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>Length</label>
                          <div class="border rounded-10 d-flex overflow-hidden">
                            <input class="form-control h-auto border-0 rounded-0" type="text" disabled="disabled" value="1.5" />
                            <div class="bg-gray font-medium px-2 d-flex align-items-center border-start">cm</div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>Width</label>
                          <div class="border rounded-10 d-flex overflow-hidden">
                            <input class="form-control h-auto border-0 rounded-0" type="text" disabled="disabled" value="2.0" />
                            <div class="bg-gray font-medium px-2 d-flex align-items-center border-start">cm</div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="form-group">
                          <label>Height</label>
                          <div class="border rounded-10 d-flex overflow-hidden">
                            <input class="form-control h-auto border-0 rounded-0" type="text" disabled="disabled" value="00.0" />
                            <div class="bg-gray font-medium px-2 d-flex align-items-center border-start">cm</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <h5 class="font-semi-bold mb-3">Weight and sizes</h5>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label>Parcel Value </label>
                          <div class="border rounded-10 d-flex overflow-hidden">
                            <input class="form-control h-auto border-0" type="text" placeholder="00.0" />
                            <div class="bg-gray font-medium px-2 d-flex align-items-center">Kg</div>
                          </div>
                        </div>
                        <div class="form-group">
                          <textarea class="form-control p-3 rounded-10" rows="3" placeholder="describe your Parcel..."></textarea>
                        </div>
                      </div>
                      <div class="col-lg-6">
                        <vue-dropzone ref="myVueDropzone" class="myDropzone dropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content title="Shipment Details">
              <div class="border rounded-10 p-4">
                <div class="row mb-4">
                  <div class="col-12">
                    <h4 class="text-gray">Shipment Details</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 mb-3">
                    <div class="d-flex align-items-center justify-content-between">
                      <h5 class="mb-1 font-semi-bold">
                        Sender info.
                        <svg class="ms-2" width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.9895 1.4427C23.9831 1.41247 23.9717 1.38405 23.9601 1.35485C23.9484 1.32566 23.9373 1.29749 23.9211 1.27088C23.9156 1.2621 23.9143 1.25228 23.9084 1.24375C23.897 1.22747 23.8807 1.21714 23.8681 1.20241C23.8474 1.17838 23.827 1.15539 23.8022 1.13523C23.7787 1.11611 23.7539 1.10139 23.7278 1.0864C23.7017 1.07142 23.6764 1.05746 23.6477 1.04687C23.618 1.03602 23.588 1.03007 23.557 1.02439C23.5376 1.02077 23.5203 1.01173 23.5004 1.01044L9.83687 0.00146415C9.60795 -0.0153307 9.39143 0.1136 9.29842 0.324436C9.2054 0.535273 9.25475 0.781768 9.42218 0.940152L13.4536 4.75896H11.7804C11.4796 4.75896 11.2357 5.00287 11.2357 5.30362C11.2357 5.60438 11.4796 5.84829 11.7804 5.84829H13.796C13.8702 5.84829 13.9404 5.83278 14.0048 5.80617L13.6849 11.6476C13.6725 11.8775 13.8056 12.0907 14.0182 12.1798C14.0864 12.2082 14.1577 12.2222 14.2285 12.2222C14.3789 12.2222 14.5259 12.1602 14.6313 12.0444L23.8632 1.92096C23.8764 1.90649 23.8826 1.8884 23.8939 1.8729C23.913 1.84706 23.9311 1.82148 23.9453 1.7928C23.9588 1.76593 23.9676 1.73828 23.9761 1.70986C23.9849 1.68118 23.9926 1.65328 23.9965 1.62331C24.0006 1.59153 23.9996 1.56078 23.9981 1.52874C23.9973 1.50936 24.0019 1.49076 23.9991 1.47138C23.9975 1.46104 23.9916 1.45278 23.9895 1.44296V1.4427Z" fill="#707070"></path>
                          <path d="M3.71895 5.86258C3.73988 5.86258 3.76106 5.86155 3.78225 5.85923C3.84478 5.85173 3.90808 5.84812 3.97267 5.84812H5.73484C6.03559 5.84812 6.2795 5.60421 6.2795 5.30345C6.2795 5.0027 6.03559 4.75879 5.73484 4.75879H3.97267C3.86596 4.75879 3.76081 4.76525 3.6572 4.77688C3.35851 4.8115 3.14406 5.08176 3.17842 5.38071C3.21072 5.6582 3.4461 5.86258 3.71895 5.86258L3.71895 5.86258Z" fill="#707070"></path>
                          <path d="M7.40314 15.7693H8.0974C8.62475 15.769 9.15003 15.6432 9.61721 15.4057C9.88541 15.2696 9.99186 14.9417 9.85544 14.6733C9.71927 14.4056 9.39217 14.2981 9.12295 14.435C8.80385 14.5973 8.45866 14.6797 8.09718 14.68H7.40318C7.10243 14.68 6.85852 14.9239 6.85852 15.2246C6.85852 15.5254 7.10243 15.7693 7.40318 15.7693L7.40314 15.7693Z" fill="#707070"></path>
                          <path d="M7.74925 5.84935H9.76488C10.0656 5.84935 10.3095 5.60544 10.3095 5.30469C10.3095 5.00393 10.0656 4.76002 9.76488 4.76002L7.74925 4.75977C7.4485 4.75977 7.20459 5.00368 7.20459 5.30443C7.20459 5.60544 7.4485 5.84935 7.74925 5.84935Z" fill="#707070"></path>
                          <path d="M10.4994 13.9728C10.5663 13.9999 10.6356 14.0128 10.7038 14.0128C10.9193 14.0128 11.1231 13.8841 11.2089 13.6723C11.3712 13.2718 11.4534 12.848 11.4534 12.4132C11.4534 12.038 11.3919 11.6696 11.2707 11.3182C11.1725 11.0342 10.8632 10.8831 10.5779 10.981C10.2937 11.0792 10.1426 11.3892 10.2408 11.6737C10.3224 11.9104 10.364 12.1595 10.364 12.4135C10.364 12.7078 10.3087 12.9936 10.1994 13.2636C10.086 13.5424 10.2206 13.8602 10.4994 13.9729L10.4994 13.9728Z" fill="#707070"></path>
                          <path d="M7.54908 10.1469H8.09684C8.49449 10.1469 8.88489 10.2511 9.2262 10.4477C9.31172 10.497 9.40551 10.5206 9.49776 10.5206C9.68612 10.5206 9.86931 10.4229 9.97007 10.248C10.1204 9.98726 10.031 9.6542 9.77035 9.50409C9.26393 9.21212 8.68517 9.05762 8.09682 9.05762H7.54906C7.2483 9.05762 7.00439 9.30153 7.00439 9.60228C7.00439 9.90303 7.2483 10.1469 7.54906 10.1469L7.54908 10.1469Z" fill="#707070"></path>
                          <path d="M2.01137 8.87848C2.08604 8.87848 2.162 8.86298 2.23435 8.83043C2.50875 8.70718 2.63148 8.38498 2.50797 8.11031C2.41496 7.90309 2.36793 7.68217 2.36793 7.45325C2.36819 7.17524 2.44002 6.90187 2.57592 6.66209C2.72423 6.40061 2.63251 6.06808 2.37077 5.91975C2.10852 5.77118 1.77675 5.8629 1.62842 6.1249C1.39976 6.52798 1.27858 6.98684 1.27832 7.45322C1.27832 7.83692 1.35764 8.20847 1.51422 8.55678C1.60491 8.75832 1.80335 8.87847 2.01134 8.87847L2.01137 8.87848Z" fill="#707070"></path>
                          <path d="M0.363877 18.5175C0.423821 18.5384 0.484538 18.5485 0.544743 18.5485C0.76953 18.5485 0.979851 18.4084 1.05866 18.1844C1.25192 17.6346 1.58135 17.1333 2.01081 16.7346C2.23121 16.5297 2.24438 16.1853 2.03949 15.9649C1.83408 15.744 1.48966 15.7313 1.26976 15.9362C0.71115 16.4545 0.282749 17.1069 0.0308698 17.8229C-0.0686055 18.1063 0.0802199 18.4174 0.363922 18.5174L0.363877 18.5175Z" fill="#707070"></path>
                          <path d="M3.4078 10.0866C3.59124 10.1256 3.78089 10.146 3.97262 10.1463H5.53377C5.83452 10.1463 6.07843 9.90238 6.07843 9.60163C6.07843 9.30088 5.83452 9.05697 5.53377 9.05697H3.97394C3.8587 9.05671 3.74528 9.04482 3.63572 9.02131C3.34323 8.95878 3.05204 9.14611 2.98926 9.44014C2.92622 9.73417 3.11354 10.0236 3.40783 10.0866L3.4078 10.0866Z" fill="#707070"></path>
                          <path d="M3.38392 15.9129C3.43069 15.9129 3.47849 15.9064 3.52603 15.8938C3.83195 15.8114 4.14924 15.7695 4.46965 15.7695H5.38661C5.68737 15.7695 5.93128 15.5256 5.93128 15.2248C5.93128 14.9241 5.68737 14.6802 5.38661 14.6802H4.46965C4.0534 14.6802 3.64052 14.7347 3.24233 14.8422C2.95166 14.9205 2.77983 15.2194 2.85838 15.5098C2.92401 15.7527 3.14389 15.9129 3.38392 15.9129V15.9129Z" fill="#707070"></path>
                        </svg>
                      </h5>
                      <h5 class="text-green d-flex align-items-center">
                        <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="12" fill="#28A745"></circle>
                          <path d="M17.2199 9.4199L10.6199 16.0199C10.4999 16.1399 10.3799 16.1999 10.1999 16.1999C10.0199 16.1999 9.89985 16.1399 9.77985 16.0199L6.77985 13.0199C6.53985 12.7799 6.53985 12.4199 6.77985 12.1799C7.01985 11.9399 7.37985 11.9399 7.61985 12.1799L10.1999 14.7599L16.3799 8.5799C16.6199 8.3399 16.9799 8.3399 17.2199 8.5799C17.4599 8.8199 17.4599 9.1799 17.2199 9.4199Z" fill="white"></path>
                          <mask id="mask0_300_4179" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="6" y="8" width="12" height="9">
                            <path d="M17.2199 9.4199L10.6199 16.0199C10.4999 16.1399 10.3799 16.1999 10.1999 16.1999C10.0199 16.1999 9.89985 16.1399 9.77985 16.0199L6.77985 13.0199C6.53985 12.7799 6.53985 12.4199 6.77985 12.1799C7.01985 11.9399 7.37985 11.9399 7.61985 12.1799L10.1999 14.7599L16.3799 8.5799C16.6199 8.3399 16.9799 8.3399 17.2199 8.5799C17.4599 8.8199 17.4599 9.1799 17.2199 9.4199Z" fill="white"></path>
                          </mask>
                          <g mask="url(#mask0_300_4179)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.7998 4.7998H19.1998V19.1998H4.7998V4.7998Z" fill="white"></path>
                          </g>
                        </svg>
                        Completed
                      </h5>
                    </div>
                  </div>
                  <div class="col-12">
                    <label class="m-checkbox"> <input type="checkbox" name="checkbox"><span class="checkmark"></span><span class="text-blue">I'm the sender, Autofill with my information.</span> </label>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>First Name</label>
                      <input class="form-control font-medium" type="text" value="Adnan">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Second Name </label>
                      <input class="form-control font-medium" type="text" value="Adnan">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Last Name </label>
                      <input class="form-control font-medium" type="text" value="Adnan">
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
                      <label>Email address</label>
                      <input class="form-control font-medium" type="text" value="adnanafana0@gmail.com">
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-12 mb-3">
                    <h5 class="mb-1 font-semi-bold">Recipient info.</h5>
                    <h6 class="text-gray">Make sure to enter correct information, to let the Recipient know the parcel.</h6>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>First Name</label>
                      <input class="form-control font-medium" type="text" value="Adnan">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Second Name </label>
                      <input class="form-control font-medium" type="text" value="Adnan">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label>Last Name </label>
                      <input class="form-control font-medium" type="text" value="Adnan">
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
                      <label>Email address</label>
                      <input class="form-control font-medium" type="text" value="adnanafana0@gmail.com">
                    </div>
                  </div>
                </div>
                <hr>
                <div class="content-loaction-map" v-if="showLocationManually">
                  <div class="row">
                    <div class="col-12 mb-4">
                      <h5 class="mb-2 font-semi-bold">Locations</h5>
                      <button class="bg-white text-blue button--trigger-location-manually" type="button" @click="locationManually">
                        <i class="fa-light fa-location-dot me-2"></i>
                        Enter location manually
                      </button>
                    </div>
                    <div class="col-12">
                      <GmapMap :center='center' :zoom='12' style='width:100%;  height: 300px;' />
                    </div>
                  </div>
                </div>
                <div class="content-loaction-manually" v-if="showLocationMap">
                  <div class="row">
                    <div class="col-12 mb-4">
                      <h5 class="mb-2 font-semi-bold">Locations</h5>
                      <button class="bg-white text-blue button--trigger-location-map" type="button" @click="locationMap">
                        <i class="fa-light fa-map me-2"></i>
                        Back to map locations
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <div class="d-flex align-items-center justify-content-between">
                        <h5 class="text-gray">Parcel Location</h5>
                        <button class="bg-white" type="button">
                          <svg class="me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25Z" stroke="#35498E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#35498E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10 3.33317V1.6665" stroke="#35498E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M3.33317 10H1.6665" stroke="#35498E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M10 16.6665V18.3332" stroke="#35498E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M16.6665 10H18.3332" stroke="#35498E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                          </svg>
                          Pick from map
                        </button>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Country</label>
                        <div class="input-icon left">
                          <input class="form-control font-medium" type="text" value="United Arab Emirates">
                          <div class="icon">
                            <div class="symbol symbol-25"><img src="@/assets/images/flag.png" alt=""></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>City</label>
                        <v-select :options="options2" placeholder="Select a Street"></v-select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Region</label>
                        <v-select :options="options2" placeholder="Select a Street"></v-select>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label>Street</label>
                        <v-select :options="options2" placeholder="Select a Street"></v-select>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label>Address</label>
                        <input class="form-control font-medium" type="text" placeholder="Address">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Building Num.</label>
                        <input class="form-control font-medium" type="text" placeholder="ex: G-2500">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Floor num. </label>
                        <input class="form-control font-medium" type="text" placeholder="ex: G-2500">
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <div class="form-group">
                        <label>Flat num.</label>
                        <input class="form-control font-medium" type="text" placeholder="ex: G-2500">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label>Address Label</label>
                        <input class="form-control font-medium" type="text" placeholder="Work, home, store,..etc"><small>You will acess this address using this label</small>
                      </div>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="row">
                  <div class="col-12 mb-3">
                    <h5 class="font-semi-bold">Delivery company</h5>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <h5 class="mb-2 text-gray">Sort By:</h5>
                  </div>
                  <div class="col-lg-9">
                    <b-tabs class="nav nav-pills mb-0 tab-custom flex-column border-0">
                      <b-tab title="All" active>
                        <div>
                          <div class="row mt-3">
                            <div class="col-sm-6 col-lg-4 col-xxl-4">
                              <div class="widget__item-company border rounded-10 mb-4">
                                <div class="widget__item-image border-bottom"><img src="@/assets/images/partners/tnt.png" alt=""></div>
                                <div class="widget__item-content p-3">
                                  <h4 class="mb-2 text-blue">00min:00hr:00d</h4>
                                  <div class="data-rating d-flex align-items-center data-rating-lg mb-4">
                                    <span class="d-flex" data-rating="3"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                                  </div>
                                  <h6 class="text-gray">$ pick address to get price</h6>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xxl-4">
                              <div class="widget__item-company border rounded-10 mb-4">
                                <div class="widget__item-image border-bottom"><img src="@/assets/images/partners/tnt.png" alt=""></div>
                                <div class="widget__item-content p-3">
                                  <h4 class="mb-2 text-blue">00min:00hr:00d</h4>
                                  <div class="data-rating d-flex align-items-center data-rating-lg mb-4">
                                    <span class="d-flex" data-rating="3"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                                  </div>
                                  <h6 class="text-gray">$ pick address to get price</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-tab>
                      <b-tab title="Time">
                        <div>
                          <div class="row mt-3">
                            <div class="col-sm-6 col-lg-4 col-xxl-4">
                              <div class="widget__item-company border rounded-10 mb-4">
                                <div class="widget__item-image border-bottom"><img src="@/assets/images/partners/tnt.png" alt=""></div>
                                <div class="widget__item-content p-3">
                                  <h4 class="mb-2 text-blue">00min:00hr:00d</h4>
                                  <div class="data-rating d-flex align-items-center data-rating-lg mb-4">
                                    <span class="d-flex" data-rating="3"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                                  </div>
                                  <h6 class="text-gray">$ pick address to get price</h6>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xxl-4">
                              <div class="widget__item-company border rounded-10 mb-4">
                                <div class="widget__item-image border-bottom"><img src="@/assets/images/partners/tnt.png" alt=""></div>
                                <div class="widget__item-content p-3">
                                  <h4 class="mb-2 text-blue">00min:00hr:00d</h4>
                                  <div class="data-rating d-flex align-items-center data-rating-lg mb-4">
                                    <span class="d-flex" data-rating="3"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                                  </div>
                                  <h6 class="text-gray">$ pick address to get price</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-tab>
                      <b-tab title="Rate">
                        <div>
                          <div class="row mt-3">
                            <div class="col-sm-6 col-lg-4 col-xxl-4">
                              <div class="widget__item-company border rounded-10 mb-4">
                                <div class="widget__item-image border-bottom"><img src="@/assets/images/partners/tnt.png" alt=""></div>
                                <div class="widget__item-content p-3">
                                  <h4 class="mb-2 text-blue">00min:00hr:00d</h4>
                                  <div class="data-rating d-flex align-items-center data-rating-lg mb-4">
                                    <span class="d-flex" data-rating="3"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                                  </div>
                                  <h6 class="text-gray">$ pick address to get price</h6>
                                </div>
                              </div>
                            </div>
                            <div class="col-sm-6 col-lg-4 col-xxl-4">
                              <div class="widget__item-company border rounded-10 mb-4">
                                <div class="widget__item-image border-bottom"><img src="@/assets/images/partners/tnt.png" alt=""></div>
                                <div class="widget__item-content p-3">
                                  <h4 class="mb-2 text-blue">00min:00hr:00d</h4>
                                  <div class="data-rating d-flex align-items-center data-rating-lg mb-4">
                                    <span class="d-flex" data-rating="3"><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i><i class="far fa-star"></i></span>
                                  </div>
                                  <h6 class="text-gray">$ pick address to get price</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-tab>
                    </b-tabs>
                  </div>
                  <div class="col-lg-3">
                    <v-select :options="options2" placeholder="Select a Street"></v-select>
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content title="Order preview">
              <div class="border rounded-10 p-4">
                <div class="row mb-4 align-items-center">
                  <div class="col-lg-3 col-xxl-2">
                    <h4 class="text-gray mb-2">Total Cost</h4>
                    <h3 class="text-blue font-medium">25.00 AED</h3>
                  </div>
                  <div class="col-lg-3 col-xxl-2"><img src="@/assets/images/logo-light.png" alt=""></div>
                </div>
                <div class="row">
                  <div class="col-12">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                      <h4 class="text-gray mb-2">Total parcel (1)</h4>
                      <button class="btn btn-link-blue p-2">
                        <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <mask id="mask0_72_3749" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="14">
                            <path d="M19 12C19 12.525 18.65 12.875 18.125 12.875H12.875V18.125C12.875 18.65 12.525 19 12 19C11.475 19 11.125 18.65 11.125 18.125V12.875H5.875C5.35 12.875 5 12.525 5 12C5 11.475 5.35 11.125 5.875 11.125H11.125V5.875C11.125 5.35 11.475 5 12 5C12.525 5 12.875 5.35 12.875 5.875V11.125H18.125C18.65 11.125 19 11.475 19 12Z" fill="white"></path>
                          </mask>
                          <g mask="url(#mask0_72_3749)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="#35498E"></path>
                          </g>
                        </svg>
                        Add new Parcel
                      </button>
                    </div>
                    <div class="border rounded-10 overflow-hidden">
                      <div class="bg-gray d-flex align-items-center justify-content-between py-1 px-3 flex-wrap">
                        <div class="text-blue font-medium">Delivery Cost: 25.00AED</div>
                        <div class="d-flex align-items-cetner flex-wrap">
                          <div class="d-flex align-items-cetner">
                            <div class="text-gray-2 font-medium">Size:</div>
                            <div class="text-blue font-medium">Document Size</div>
                          </div>
                          <div class="d-flex align-items-cetner">
                            <div class="text-gray-2 font-medium">, weight:</div>
                            <div class="text-blue font-medium">5 Kg</div>
                          </div>
                          <div class="d-flex align-items-cetner">
                            <div class="text-gray-2 font-medium">, value:</div>
                            <div class="text-blue font-medium">20 AED</div>
                          </div>
                        </div>
                        <button class="btn btn-link-blue p-2">
                          <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2071 4.20733C18.4174 3.99705 18.7026 3.87891 19 3.87891C19.1473 3.87891 19.2931 3.90791 19.4291 3.96426C19.5652 4.02061 19.6888 4.10321 19.7929 4.20733C19.897 4.31146 19.9796 4.43507 20.036 4.57112C20.0923 4.70716 20.1213 4.85297 20.1213 5.00023C20.1213 5.14748 20.0923 5.29329 20.036 5.42934C19.9796 5.56538 19.897 5.689 19.7929 5.79312L7.48877 18.0973L5.37439 18.6259L5.90299 16.5115L18.2071 4.20733ZM19 1.87891C18.1722 1.87891 17.3783 2.20776 16.7929 2.79312L4.29291 15.2931C4.16476 15.4213 4.07384 15.5819 4.02988 15.7577L3.02988 19.7577C2.94468 20.0985 3.04453 20.459 3.29291 20.7073C3.54129 20.9557 3.90178 21.0556 4.24256 20.9704L8.24256 19.9704C8.41839 19.9264 8.57897 19.8355 8.70713 19.7073L21.2071 7.20733C21.497 6.91749 21.7269 6.5734 21.8837 6.1947C22.0406 5.81601 22.1213 5.41012 22.1213 5.00023C22.1213 4.59033 22.0406 4.18444 21.8837 3.80575C21.7269 3.42705 21.497 3.08296 21.2071 2.79312C20.9173 2.50328 20.5732 2.27336 20.1945 2.1165C19.8158 1.95964 19.4099 1.87891 19 1.87891ZM13 19.0002C12.4477 19.0002 12 19.448 12 20.0002C12 20.5525 12.4477 21.0002 13 21.0002H22C22.5523 21.0002 23 20.5525 23 20.0002C23 19.448 22.5523 19.0002 22 19.0002H13Z" fill="#35498E"></path>
                          </svg>
                          Edit
                        </button>
                      </div>
                      <div class="row p-4">
                        <div class="col-lg-3">
                          <div class="border-end border-none-mobile">
                            <div class="mb-3">
                              <div class="symbol symbol-50 col-auto"><img class="rounded-circle border p-1 border-2" src="@/assets/images/partners/tnt.png" alt=""></div>
                            </div>
                            <div class="mb-3">
                              <h5 class="font-medium mb-1">Hand-Off</h5>
                              <h5 class="font-medium text-gray mb-1">22-02-2022</h5>
                            </div>
                            <div class="mb-3">
                              <h5 class="font-medium mb-1">Hand-Off</h5>
                              <h5 class="font-medium text-gray mb-1">22-02-2022</h5>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-5">
                          <div class="border-end border-none-mobile">
                            <div class="mb-3">
                              <h5 class="font-medium mb-1">Sender</h5>
                              <h5 class="font-medium text-gray mb-1">Adnan Mohammed Afana</h5>
                              <h5 class="font-medium text-gray mb-1">+972597768124</h5>
                            </div>
                            <div class="mb-3">
                              <h5 class="font-medium mb-1">Recipient</h5>
                              <h5 class="font-medium text-gray mb-1">Hani Mortaja</h5>
                              <h5 class="font-medium text-gray mb-1">+715991356854</h5>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-4">
                          <div class="mb-3">
                            <h5 class="font-medium mb-1">Sender</h5>
                            <h5 class="font-medium text-gray mb-1">Adnan Mohammed Afana</h5>
                            <h5 class="font-medium text-gray mb-1">+972597768124</h5>
                          </div>
                          <div class="mb-3">
                            <h5 class="font-medium mb-1">Recipient</h5>
                            <h5 class="font-medium text-gray mb-1">Hani Mortaja</h5>
                            <h5 class="font-medium text-gray mb-1">+715991356854</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-content>
            <tab-content title="Checkout">
              <div class="border rounded-10 p-4">
                <div class="row mb-4">
                  <div class="col-12">
                    <h4 class="text-gray">Select Payment Method</h4>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-8">
                    <div class="border rounded-5 d-none d-lg-block accordion-paymend" id="accordion">
                      <div class="widget__item-accordion">
                        <div class="widget__item-head" >
                          <label class="m-radio mb-0 d-block">
                            <input type="radio" name="radio"><span class="checkmark"></span>
                            <div class="widget__item-title font-medium" v-b-toggle.accordion-1>Cridet card</div>
                          </label>
                        </div>
                         <b-collapse id="accordion-1" visible accordion="my-accordion" >
                          <div class="widget__item-body accordion-collapse">
                            <div class="row p-4">
                              <div class="col-lg-12">
                                <div class="form-group">
                                  <label> Card Number</label>
                                  <input class="form-control" type="text" placeholder="0000 - 0000 - 0000 - 0000">
                                </div>
                              </div>
                              <div class="col-lg-12">
                                <div class="form-group">
                                  <label>Name on card</label>
                                  <input class="form-control" type="text" placeholder="Name as written in card">
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label>Exp. date</label>
                                  <input class="form-control" type="text" placeholder="Name as written in card">
                                </div>
                              </div>
                              <div class="col-lg-6">
                                <div class="form-group">
                                  <label> Cvv</label>
                                  <input class="form-control" type="text" placeholder="***">
                                </div>
                              </div>
                            </div>
                          </div>
                        </b-collapse>
                      </div>
                      <div class="widget__item-accordion">
                        <div class="widget__item-head" >
                          <label class="m-radio mb-0 d-block">
                            <input type="radio" name="radio"><span class="checkmark"></span>
                            <div class="widget__item-title font-medium" v-b-toggle.accordion-2>PayPall</div>
                          </label>
                        </div>
                        <b-collapse id="accordion-2" accordion="my-accordion" >
                          <div class="widget__item-body accordion-collapse">
                          </div>
                        </b-collapse>
                      </div>
                      <div class="widget__item-accordion">
                        <div class="widget__item-head" >
                          <label class="m-radio mb-0 d-block">
                            <input type="radio" name="radio"><span class="checkmark"></span>
                            <div class="widget__item-title font-medium" v-b-toggle.accordion-3>Cash On Delivery</div>
                          </label>
                        </div>
                        <b-collapse id="accordion-3" accordion="my-accordion" >
                          <div class="widget__item-body accordion-collapse">
                          </div>
                        </b-collapse>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="border rounded-10 p-3 mb-4">
                      <h6 class="text-gray mb-2">Have a coupon code?</h6>
                      <input class="form-control rounded-10" type="text" placeholder="ex: EFE212">
                    </div>
                    <div class="border rounded-10 p-3 mb-4">
                      <div class="mb-3">
                        <h6 class="text-gray mb-1">No. of Parcel</h6>
                        <h4 class="font-semi-bold text-blue">1 Parcel</h4>
                      </div>
                      <div class="mb-3">
                        <h6 class="text-gray mb-1">Hand-off Date</h6>
                        <h4 class="font-semi-bold text-blue">22-12-2022</h4>
                      </div>
                      <div class="mb-0">
                        <h6 class="text-gray mb-1">Total Cost</h6>
                        <h2 class="font-semi-bold text-blue">25.00 AED</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </tab-content>
          </form-wizard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import vue2Dropzone from 'vue2-dropzone'

export default {
  name: 'IndexView',
  components: {
    vueDropzone: vue2Dropzone
  },
  data () {
    return {
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        dictDefaultMessage: "<i class='icon mt-3 fa-thin fa-image fa-xl'></i> <span class='title'>Upload Parcel Image.</span> <span class='text'>max. 3 images can be uploaded</span> "
      },
      showLocationManually: true,
      showLocationMap: false,
      center: { lat: 45.508, lng: -73.587 },
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
      ],
      options2: [
        'foo',
        'bar',
        'baz'
      ],
      key: 'string',
      items: [
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        },
        {
          img: require('@/assets/images/file.png'),
          title: 'Document size',
          size: '0 to .5 m3'
        }
      ],
      swiperOption: {
        slidesPerView: 7.5,
        spaceBetween: 15,
        speed: 1200,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        breakpoints: {
          0: {
            slidesPerView: 1.2
          },
          576: {
            slidesPerView: 1.8
          },
          992: {
            slidesPerView: 4.2
          },
          1200: {
            slidesPerView: 5.2
          },
          1500: {
            slidesPerView: 7.5
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    onComplete () {
      alert('Yay. Done!')
    },
    onfunction () {
      this.key = Math.random()
    },
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    locationManually () {
      this.showLocationManually = !this.showLocationManually
      this.showLocationMap = !this.showLocationMap
    },
    locationMap () {
      this.showLocationMap = !this.showLocationMap
      this.showLocationManually = !this.showLocationManually
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.geolocate()
  }
}

</script>
