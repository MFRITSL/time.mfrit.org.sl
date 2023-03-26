<template>
    <section id="copyright">
      <div class="container">
        <div class="mx-auto text-center">
          <p class="copyright-text">&copy;2023 <strong>Mickey Freeman Research institute for Technology</strong>. All rights reserved.</p>
        </div>
      </div>
    </section>
  </template>
  
  <style>
  #copyright {
    width: 100%;
    height: 20vh;
    position: absolute;
    color: #f59211;
  }
  #copyright .container {
    
      height: 20vh;
  }
  .copyright-text {
    font-size: 0.8rem;
  }
  /* Small devices (PORTRAIT phones, 668px and up)*/
  @media (min-height: 668px ) and (max-height: 845px) {
    #copyright {
    height: 10vh;
  }
  #copyright .container {
      height: 10vh;
  }
  .copyright-text {
    font-size: 0.9rem;
  }
  }
  
  @media (min-width: 992px) { 
  
  }
  
  
  @media (min-width: 1200px) { 
    .copyright-text {
    font-size: 0.9rem;
  }
  }
  
  @media (min-width: 1400) { 
    .copyright-text {
    font-size: 1.0rem;
  }
  }
  </style>
  
  