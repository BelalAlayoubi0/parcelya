<template>
<div class="col-lg-8 col-xxl-9">
  <div class="main-chat_content">
    <div class="main-chat_header d-flex align-items-center justify-content-between">
      <div class="widget_item-chat bg-white p-0">
        <div class="widget_item-image"><img src="@/assets/images/avatar/img-04.png" alt="image" /></div>
        <div class="widget_item-content ms-3">
          <h5 class="widget_item-username font-medium">#EE12F28</h5>
          <h6 class="widget_item-desc mb-lg-1">Dear Adnan, would you send us...</h6>
        </div>
      </div>
      <button class="bg-white" @click="show = !show">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.9993 29.3334C23.3327 29.3334 29.3327 23.3334 29.3327 16.0001C29.3327 8.66675 23.3327 2.66675 15.9993 2.66675C8.66602 2.66675 2.66602 8.66675 2.66602 16.0001C2.66602 23.3334 8.66602 29.3334 15.9993 29.3334Z"
            stroke="#707070"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path d="M16 10.6667V17.3334" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path d="M15.9922 21.3333H16.0042" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </button>
    </div>
    <div class="main-chat_body p-0">
      <PerfectScrollbar class="scroll chat_content_height p-3">
        <div class="messages">
          <div class="messages-content">
            <div class="message">
              <figure class="avatar"><img src="@/assets/images/avatar/img-04.png" /></figure>
              <div class="message-text ms-2">Hello Adnan,here is Mohammed from FedEx,Would you send the parcels barcode</div>
            </div>
            <div class="message new ms-auto">Hello there!</div>
            <div class="message new ms-auto">Thank you for your reply! Sure just give me a min</div>
            <div class="message">
              <figure class="avatar"><img src="@/assets/images/avatar/img-04.png" /></figure>
              <div class="message-text ms-2">Hello Adnan,here is Mohammed from FedEx,Would you send the parcels barcode</div>
            </div>
            <div class="message">
              <figure class="avatar"><img src="@/assets/images/avatar/img-04.png" /></figure>
              <div class="message-text ms-2">Hello Adnan,here is Mohammed from FedEx,Would you send the parcels barcode</div>
            </div>
            <div class="message new ms-auto">Thank you for your reply! Sure just give me a min</div>
            <div class="message">
              <figure class="avatar"><img src="@/assets/images/avatar/img-04.png" /></figure>
              <div class="message-text ms-2">Hello Adnan,here is Mohammed from FedEx,Would you send the parcels barcode</div>
            </div>
            <div class="message">
              <figure class="avatar"><img src="@/assets/images/avatar/img-04.png" /></figure>
              <div class="message-text ms-2">Hello Adnan,here is Mohammed from FedEx,Would you send the parcels barcode</div>
            </div>
          </div>
        </div>
      </PerfectScrollbar>
    </div>
    <div class="main-chat_footer py-4">
      <div class="row d-flex align-items-center g-2">
        <div class="col">
          <div class="form-group mb-0">
            <div class="input-icon left">
              <input class="form-control rounded-15 bg-white" type="text" placeholder="Write your message here..." />
              <label class="icon pointer" for="upload">
                <input class="d-none" type="file" id="upload" />
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19 2H5C3.3 2 2 3.3 2 5V19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V5C22 3.3 20.7 2 19 2ZM4 5C4 4.4 4.4 4 5 4H19C19.6 4 20 4.4 20 5V12.6L16.7 9.3C16.3 8.9 15.7 8.9 15.3 9.3L4.7 19.9C4.3 19.8 4 19.4 4 19V5ZM7.4 20H19C19.6 20 20 19.6 20 19V15.4L16 11.4L7.4 20ZM8.5 11C9.9 11 11 9.9 11 8.5C11 7.1 9.9 6 8.5 6C7.1 6 6 7.1 6 8.5C6 9.9 7.1 11 8.5 11ZM9 8.5C9 8.2 8.8 8 8.5 8C8.2 8 8 8.2 8 8.5C8 8.8 8.2 9 8.5 9C8.8 9 9 8.8 9 8.5Z"
                    fill="#707070"
                  ></path>
                  <mask id="mask0_553_4227" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 2H5C3.3 2 2 3.3 2 5V19C2 20.7 3.3 22 5 22H19C20.7 22 22 20.7 22 19V5C22 3.3 20.7 2 19 2ZM4 5C4 4.4 4.4 4 5 4H19C19.6 4 20 4.4 20 5V12.6L16.7 9.3C16.3 8.9 15.7 8.9 15.3 9.3L4.7 19.9C4.3 19.8 4 19.4 4 19V5ZM7.4 20H19C19.6 20 20 19.6 20 19V15.4L16 11.4L7.4 20ZM8.5 11C9.9 11 11 9.9 11 8.5C11 7.1 9.9 6 8.5 6C7.1 6 6 7.1 6 8.5C6 9.9 7.1 11 8.5 11ZM9 8.5C9 8.2 8.8 8 8.5 8C8.2 8 8 8.2 8 8.5C8 8.8 8.2 9 8.5 9C8.8 9 9 8.8 9 8.5Z"
                      fill="white"
                    ></path>
                  </mask>
                  <g mask="url(#mask0_553_4227)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="#707070"></path>
                  </g>
                </svg>
              </label>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <button class="btn px-2 bg-white py-2 border rounded-15" type="button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 16C14.2 16 16 14.2 16 12V4C16 1.8 14.2 0 12 0C9.8 0 8 1.8 8 4V12C8 14.2 9.8 16 12 16ZM10 4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4ZM20 12V10C20 9.4 19.6 9 19 9C18.4 9 18 9.4 18 10V12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12V10C6 9.4 5.6 9 5 9C4.4 9 4 9.4 4 10V12C4 16 7.1 19.4 11 19.9V22H8C7.4 22 7 22.4 7 23C7 23.6 7.4 24 8 24H16C16.6 24 17 23.6 17 23C17 22.4 16.6 22 16 22H13V19.9C16.9 19.4 20 16.1 20 12Z"
                fill="#35498E"
              ></path>
              <mask id="mask0_553_4243" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="4" y="0" width="16" height="24">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 16C14.2 16 16 14.2 16 12V4C16 1.8 14.2 0 12 0C9.8 0 8 1.8 8 4V12C8 14.2 9.8 16 12 16ZM10 4C10 2.9 10.9 2 12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4ZM20 12V10C20 9.4 19.6 9 19 9C18.4 9 18 9.4 18 10V12C18 15.3 15.3 18 12 18C8.7 18 6 15.3 6 12V10C6 9.4 5.6 9 5 9C4.4 9 4 9.4 4 10V12C4 16 7.1 19.4 11 19.9V22H8C7.4 22 7 22.4 7 23C7 23.6 7.4 24 8 24H16C16.6 24 17 23.6 17 23C17 22.4 16.6 22 16 22H13V19.9C16.9 19.4 20 16.1 20 12Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0_553_4243)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="#35498E"></path>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <transition name="slide-fade">
      <div v-if="show" class="chat-modal">
        <PerfectScrollbar class="scroll chat-modal-scroll">
          <div class="modal-close" @click="show = !show">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                fill="#212529"
              ></path>
              <mask id="mask0_678_5154" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="5" y="5" width="14" height="14">
                <path
                  d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                  fill="white"
                ></path>
              </mask>
              <g mask="url(#mask0_678_5154)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="#212529"></path>
              </g>
            </svg>
          </div>
          <div class="chat-modal-header">
            <div class="d-flex align-items-center mb-1">
              <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" stroke="#0A0E1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                <path
                  d="M22 6.9V11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9Z"
                  stroke="#0A0E1C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
              <h6 class="text-gray">#22YX515</h6>
            </div>
            <h5 class="font-semi-bold">Delivery cost: 250 AED</h5>
          </div>
          <hr class="mb-0" />
          <div class="chat-modal-body">
            <div class="widget__item-accordion accordion-arrow">
              <div class="widget__item-head px-1" v-b-toggle.collapse-1>
                <h5 class="widget__item-title font-medium">Standard Delivery</h5>
              </div>
              <b-collapse id="collapse-1" visible accordion="my-accordion">
                <div class="widget__item-body px-0 accordion-collapse ">
                  <div class="timeline-wrapper">
                    <div class="timeline-wrapper-inner">
                      <div class="timeline-container">
                        <div class="timeline-item is-unread">
                          <div class="date text-gray">Mon, 22 Jan 2021</div>
                          <div class="dot">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z"
                                fill="#28A745"
                              ></path>
                              <mask id="mask0_417_5772" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="1" y="1" width="23" height="22">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z"
                                  fill="white"
                                ></path>
                              </mask>
                              <g mask="url(#mask0_417_5772)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="#28A745"></path>
                              </g>
                            </svg>
                          </div>
                          <div class="content-wrap">
                            <div class="content-box">
                              <div class="box-text">
                                <div class="meta-text">Subited parcel</div>
                                <div class="meta-date text-gray">2 days estimeated</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item is-unread">
                          <div class="date"><span>Sep 23, 2020</span></div>
                          <div class="dot">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z"
                                fill="#28A745"
                              ></path>
                              <mask id="mask0_417_5772" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="1" y="1" width="23" height="22">
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M23 12V11.1C23 10.5 22.6 10.1 22 10.1C21.4 10.1 21 10.5 21 11.1V12C21 17 17 21 12 21C7 21 3 17 3 12C3 7 7 3 12 3C13.3 3 14.5 3.3 15.7 3.8C16.2 4 16.8 3.8 17 3.3C17.2 2.8 17 2.2 16.5 2C15.1 1.3 13.5 1 12 1C5.9 1 1 5.9 1 12C1 18.1 5.9 23 12 23C18.1 23 23 18.1 23 12ZM22.3 2.3C22.7 1.9 23.3 1.9 23.7 2.3C24.1 2.7 24.1 3.3 23.7 3.7L12.7 14.7C12.5 14.9 12.2 15 12 15C11.8 15 11.5 14.9 11.3 14.7L8.3 11.7C7.9 11.3 7.9 10.7 8.3 10.3C8.7 9.9 9.3 9.9 9.7 10.3L12 12.6L22.3 2.3Z"
                                  fill="white"
                                ></path>
                              </mask>
                              <g mask="url(#mask0_417_5772)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H24V24H0V0Z" fill="#28A745"></path>
                              </g>
                            </svg>
                          </div>
                          <div class="content-wrap">
                            <div class="content-box">
                              <div class="box-text">
                                <div class="meta-text">Packaging</div>
                                <div class="meta-date text-gray">2 days estimeated</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item is-unread">
                          <div class="date"><span>Sep 23, 2020</span></div>
                          <div class="dot">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="10" r="6" fill="white" stroke="#FECB33" stroke-width="8"></circle>
                            </svg>
                          </div>
                          <div class="content-wrap">
                            <div class="content-box">
                              <div class="box-text">
                                <div class="meta-text">Delivered</div>
                                <div class="meta-date text-gray">2 days estimeated</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="timeline-item">
                          <div class="date"><span>Sep 22, 2020</span></div>
                          <div class="dot">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="10" cy="10" r="6" fill="white" stroke="#AEB6D1" stroke-width="8"></circle>
                            </svg>
                          </div>
                          <div class="content-wrap">
                            <div class="content-box">
                              <div class="box-text">
                                <div class="meta-text">Order in Delivery</div>
                                <div class="meta-date text-gray">Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-collapse>
            </div>
            <div class="widget__item-accordion accordion-arrow">
              <div class="widget__item-head px-1 collapsed" v-b-toggle.collapse-2>
                <h5 class="widget__item-title font-medium">Deilvery company</h5>
              </div>
              <b-collapse id="collapse-2" accordion="my-accordion">
                <div class="widget__item-body accordion-collapse ">
                  <div class="d-flex align-items-center py-4">
                    <div class="icon icon-30 me-2"><img src="@/assets/images/ups.png" alt="" /></div>
                    <h6 class="text-gray">United Parcel Service</h6>
                  </div>
                </div>
              </b-collapse>
            </div>
            <div class="widget__item-accordion accordion-arrow">
              <div class="widget__item-head px-1 collapsed" v-b-toggle.collapse-3>
                <h5 class="widget__item-title font-medium">Shipment info.</h5>
              </div>
              <b-collapse id="collapse-3" accordion="my-accordion">
                <div class="widget__item-body px-2 accordion-collapse ">
                  <div class="d-lg-flex pt-3">
                    <div class="col-lg-5">
                      <h6 class="font-size-12 text-gray mb-1 font-medium">Drop-off date</h6>
                      <h6 class="mb-1 font-medium">15 April, 2021</h6>
                    </div>
                    <div class="col-lg-5 mt-3 mt-lg-0">
                      <h6 class="font-size-12 text-gray mb-1 font-medium">Hand-off date`</h6>
                      <h6 class="mb-1 font-medium">15 April, 2021</h6>
                    </div>
                  </div>
                  <hr />
                  <div class="d-flex mb-2">
                    <svg class="me-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.0009 13.4299C13.724 13.4299 15.1209 12.0331 15.1209 10.3099C15.1209 8.58681 13.724 7.18994 12.0009 7.18994C10.2777 7.18994 8.88086 8.58681 8.88086 10.3099C8.88086 12.0331 10.2777 13.4299 12.0009 13.4299Z"
                        stroke="#707070"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M3.61971 8.49C5.58971 -0.169998 18.4197 -0.159997 20.3797 8.5C21.5297 13.58 18.3697 17.88 15.5997 20.54C13.5897 22.48 10.4097 22.48 8.38971 20.54C5.62971 17.88 2.46971 13.57 3.61971 8.49Z"
                        stroke="#707070"
                        stroke-width="1.5"
                      ></path>
                    </svg>
                    <h6 class="text-gray">Location:</h6>
                  </div>
                  <h6 class="mb-1 font-medium">Afana Bldg., Awni Doher st., Gaza, Rafah, Palestine</h6>
                  <h6 class="text-gray">Sender: Adnan Mohammed Afana</h6>
                  <hr />
                  <div class="d-flex mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.07006 4.59988C2.87006 1.13988 8.08006 1.13988 8.87006 4.59988C9.34006 6.62988 8.05006 8.34988 6.93006 9.41988C6.11006 10.1999 4.82006 10.1899 4.00006 9.41988C2.89006 8.34988 1.60006 6.62988 2.07006 4.59988Z"
                        stroke="#707070"
                        stroke-width="1.5"
                      ></path>
                      <path
                        d="M15.07 16.5999C15.87 13.1399 21.11 13.1399 21.91 16.5999C22.38 18.6299 21.09 20.3499 19.96 21.4199C19.14 22.1999 17.84 22.1899 17.02 21.4199C15.89 20.3499 14.6 18.6299 15.07 16.5999Z"
                        stroke="#707070"
                        stroke-width="1.5"
                      ></path>
                      <path d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997" stroke="#707070" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5.48573 5.5H5.49728" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M18.4857 17.5H18.4973" stroke="#707070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <h6 class="text-gray">Destination:</h6>
                  </div>
                  <h6 class="mb-1 font-medium">Amaera Bldg., shoadaa st., Dora, Hebron, Palestine</h6>
                  <h6 class="text-gray">Recipient: Azhaar Khaled Amaera</h6>
                  <hr />
                  <h6 class="mb-1 font-medium">Payment method:</h6>
                  <div class="mt-2 d-flex align-items-center">
                    <div class="icon icon-20 me-2"><img src="@/assets/images/visa.png" alt="" /></div>
                    <div class="text-gray pe-2">....</div>
                    <h6 class="text-gray">2100</h6>
                  </div>
                </div>
              </b-collapse>
            </div>
          </div>
        </PerfectScrollbar>
      </div>
    </transition>
  </div>
</div>
</template>

<script>
import { PerfectScrollbar } from 'vue2-perfect-scrollbar'
import 'vue2-perfect-scrollbar/dist/vue2-perfect-scrollbar.css'
export default {
  components: {
    PerfectScrollbar
  },
  data () {
    return {
      show: false
    }
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
