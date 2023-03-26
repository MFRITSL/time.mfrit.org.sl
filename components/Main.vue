<template>
    <section id="value-proposition">
        <div class="container">
                <div>
                    <h1 class="strapline mt-6 p-1">Public Network Time Service.</h1>
                    <p class="intro-text mt-2 mb-2 p-1">As Sierra Leone increasingly connects time-critical and time-sensitive devices to the internet, it becomes very important for us to have a method to update their clocks 
                        accurately, automatically and securely over a network.</p>
                    <p class="intro-text mt-2 mb-2 p-1">At MFRIT, we've established a free and publicly available time service that enables you to synchronise your devices using the Network Time Protocol (NTP) over the internet.</p>
                    <p class="intro-text mt-2 mb-2 p-1">Try it out by configuring the network settings on your device to use <code>ntp.mfrit.org.sl</code> as the NTP server. See below for an example of the time object that is 
                    returned when you query the service.</p>
                    <div class="bg-black text-white" style="font-family: 'Courier New', Courier, monospace;">
                            <pre style="text-align: left; white-space: pre-line;">
                              $ sudo ntpdate ntp.mfrit.org.sl
                              <code>
                                {
                                "time":"2023-03-26T14:15:48.449375+0100",
                                "offset":0.199949,"precision":0.008227,
                                "host":"ntp.mfrit.org.sl","ip":"88.208.242.113",
                                "stratum":3,
                                "leap":"no-leap",
                                "adjusted":false
                            }
                              </code>
                            </pre>
                    </div>
                </div>
              </div>
    </section>
</template>

<style>
/* #value-proposition {
  height: 85vh;
}

#value-proposition .container {
    height: 85vh;
} */
 
.strapline {
  font-size: 2.5rem;
  line-height: normal;
}

.intro-text {
  font-size: 1.02rem;
  line-height: 1.5rem;
}
/* Small devices (landscape phones, 576px and up)*/
@media (min-width: 576px) {  

}

/* Small devices (PORTRAIT phones, 668px and up)*/
@media (min-height: 668px ) and (max-height: 845px) {
  /* #value-proposition {
  height: 74vh;
} */

/* #value-proposition .container {
    height: 74vh;
} */

.strapline {
  font-size: 3.0rem;
} 

.intro-text {
  font-size: 1.05rem;
  line-height: 1.9rem;
}
}

/* Medium devices (tablets, 768px and up)*/
@media (min-width: 768px) {

  #value-proposition {
  height: 67vh;
}

#value-proposition .container {
    height: 67vh;
}
  .strapline {
  font-size: 2.9rem;
}
.intro-text {
  font-size: 1.05rem;
}

}

/* Large devices (desktops, 992px and up)*/
@media (min-width: 992px) {
}

/* X-Large devices (large desktops, 1200px and up)*/
@media (min-width: 1200px) {


  .strapline {
    font-size: 3.5rem;
  }
  .intro-text {
    font-size: 1.30rem;
  }
}

/* XX-Large devices (larger desktops, 1400px and up)*/
@media (min-width: 1400px) {

  .strapline {
    font-size: 4.0rem;
  }
  .intro {
    font-size: 1.35rem;
  }
}

@media (min-width: 2560px) {

}
</style>
