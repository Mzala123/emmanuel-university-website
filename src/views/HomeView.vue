<template>

  <div class="w-full">
    <div class="relative flex flex-col-reverse md:flex-row items center space-y-0 md:space-y-0 h-96 bg-slate-500">
      <img src="../assets/img/20230406_074609.png" class="w-full h-full object-cover filter blur-5 brightness-75"
           alt="">
      <div class="absolute inset-0 flex flex-col items-center space-y-6 justify-center text-center">
        <div class="text-slate-50 text-6xl font-bold mb-4">Welcome!</div>

        <div class="text-slate-100 text-lg md:text-lg lg:text-lg w-full md:w-1/2 lg:w-1/3 font-medium mx-auto">
          Emmanuel University (EMUNI) is a fully registered and recognized by the National Council of Higher Education
          NCHE.
        </div>
      </div>
    </div>
    <!---->
    <div
        class="container py-10 lg:pt-0 lg:-mt-20  relative z-20  mx-auto px-6 flex flex-col gap-4  lg:flex-row flex-1 justify-center lg:px-3">
      <!--      -->
      <div
          class="h-auto bg-sky-950 rounded-lg px-2 shadow-sm flex flex-col items-center justify-around py-14 gap-8 lg:flex-row lg:gap-4 lg:py-4">
        <div class=""><img src="../assets/img/20230406_081630.jpg" class="object-cover rounded-full h-56 w-56 shrink-0"
                           alt=""></div>
        <div class="flex flex-col items-center justify-center gap-4 lg:w-1/2">
          <p class="text-center text-xl font-bold text-white tracking-wider">Want to enrol to EMUNI?</p>
          <p class="text-center text-sm text-white font-light tracking-wide leading-7">Eligible candidates are invited
            to apply for training in the programs</p>
          <button class="border-white border-2 text-white text-sm w-auto px-4 py-3 rounded-md">View Admissions Section
          </button>
        </div>
      </div>
      <!---->
      <div
          class="h-auto bg-slate-200 rounded-lg px-2 shadow-sm flex flex-col items-center justify-around py-14 gap-8 lg:flex-row lg:gap-4 lg:py-4">
        <div class=""><img src="../assets/img/20230406_081630.jpg" class="object-cover rounded-full h-56 w-56 shrink-0"
                           alt=""></div>
        <div class="flex flex-col items-center justify-center gap-4 lg:w-1/2">
          <p class="text-center text-xl font-bold text-gray-700 tracking-wider">Receiving Applications</p>
          <p class="text-center text-sm text-gray-700 font-light tracking-wide leading-7">
            Applicants are invited to apply for training in the programs
          </p>
          <button
              class="border-black border-2 text-sm w-auto px-4 py-3 rounded-md bg-emerald-500 text-white font-semibold">
            Apply Now
          </button>
        </div>
      </div>
      <!--      -->
    </div>
    <!--    -->
    <div class="container mx-auto px-3">
      <div class="grid lg:grid-cols-2 gap-10 py-10">
        <div class="flex order-2 lg:order-1 justify-center">
          <div class="space-y-6">
            <h1 class="font-bold text-4xl">Academic Programs</h1>
            <p class="max-w-md text-center lg:text-left">
              Discover a wide range of academic programs designed to meet the needs of today's ever-changing global
              landscape. From undergraduate to graduate programs, Emmanuel University offers a comprehensive selection
              of disciplines, ensuring that students have the opportunity to pursue their passions and achieve their
              career goals.
            </p>
            <div class="flex flex-col lg:flex-row gap-4">
              <button class="border-sky-950 border-2 text-white text-sm w-auto px-4 py-3 rounded-md bg-sky-950">
                View Offered programs
              </button>
              <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 rounded-md">
                Admissions
              </button>
            </div>
          </div>
        </div>
        <div class="flex justify-center order-1 lg:order-2">
          <img src="../assets/img/20230406_080523.jpg"
               class="object-cover rounded-full lg:h-96 lg:w-auto h-72 aspect-square shrink-0"
               alt="">
        </div>
      </div>
    </div>
    <!---->
    <div class="container mx-auto px-3 py-10 space-y-10">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-center">Catch our latest news and events</h1>
      </div>
      <div>
        <ul class="grid lg:grid-cols-4 gap-3">

          <!--          -->
          <li class="shadow-lg rounded-md overflow-clip bg-slate-100">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-full aspect-[6/3]"/>
            <div class="p-4 space-y-2">
              <h2 class="uppercase text-sm">Education</h2>
              <h1 class="font-semibold text-xl">Educational Reform: New Initiatives Aim to Enhance Learning in
                Schools</h1>
              <div class="pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 rounded-md">
                  Read more
                </button>
              </div>
            </div>
          </li>
          <!--          -->
          <!--          -->
          <li class="shadow-lg rounded-md overflow-clip bg-slate-100">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-full aspect-[6/3]"/>
            <div class="p-4 space-y-2">
              <h2 class="uppercase text-sm">Sports</h2>
              <h1 class="font-semibold text-xl">
                Sportsmanship Triumphs: Underdog Team Clinches Victory in Championship Game
              </h1>
              <div class="pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 rounded-md">
                  Read more
                </button>
              </div>
            </div>
          </li>
          <!--          -->
          <!--          -->
          <li class="shadow-lg rounded-md overflow-clip bg-slate-100">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-full aspect-[6/3]"/>
            <div class="p-4 space-y-2">
              <h2 class="uppercase text-sm">Business and Finance</h2>
              <h1 class="font-semibold text-xl">Economic Outlook 2023: Experts Predict Growth Despite Challenges</h1>
              <div class="pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 rounded-md">
                  Read more
                </button>
              </div>
            </div>
          </li>
          <!--          -->
          <!--          -->
          <li class="shadow-lg rounded-md overflow-clip bg-slate-100">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-full aspect-[6/3]"/>
            <div class="p-4 space-y-2">
              <h2 class="uppercase text-sm">Community and Culture</h2>
              <h1 class="font-semibold text-xl">Celebrating Diversity: Local Community Hosts Cultural Festival</h1>
              <div class="pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 rounded-md">
                  Read more
                </button>
              </div>
            </div>
          </li>
          <!--          -->
        </ul>
      </div>
    </div>


    <!---->
    <div class="container mx-auto px-3 py-10 space-y-20">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-center">Announcements</h1>
      </div>
      <div>
        <ul class="grid lg:grid-cols-2 gap-16  lg:gap-10">

          <!--          -->
          <li class="shadow-lg relative rounded-md bg-sky-950 text-white p-10 px-6 lg:px-10 pt-0">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover relative -top-10 h-32 w-full rounded-lg"/>
            <div class="space-y-6">
              <h1 class="font-semibold text-2xl text-emerald-500">
                New Scholarship Opportunities Available for Incoming Students
              </h1>
              <p>
                Discover exciting scholarship opportunities to support your academic journey.
              </p>
              <div class="pt-6">
                <button class="border-white border-2 text-white text-sm w-full lg:w-auto px-4 py-3 rounded-md">
                  Read more
                </button>
              </div>
            </div>
          </li>
          <!--          -->
          <!--          -->
          <li class="shadow-lg relative rounded-md bg-sky-950 text-white p-10 px-6 lg:px-10 pt-0">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover relative -top-10 h-32 w-full rounded-lg"/>
            <div class="space-y-6">
              <h1 class="font-semibold text-2xl text-emerald-500">
                Important Update: Changes to Academic Calendar for the upcoming Semester
              </h1>
              <p>
                Stay informed about updates to the academic calendar. Check out the revised schedule for the upcoming
                semester, including registration dates, exam periods, and holidays.
              </p>
              <div class="pt-6">
                <button class="border-white border-2 text-white text-sm w-full lg:w-auto px-4 py-3 rounded-md">
                  Read more
                </button>
              </div>
            </div>
          </li>
          <!--          -->
        </ul>
      </div>
    </div>
    <!--    -->

    <!---->
    <div class="container mx-auto px-3 py-10 space-y-10">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-center">University Leadership</h1>
      </div>
      <div>
        <ul class="grid lg:grid-cols-4 gap-3">

          <!--          -->
          <li class="flex flex-col justify-center items-center border py-4 rounded-lg bg-slate-50 lg:border-0 lg:bg-white ">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-60 aspect-[6/6] rounded-full"/>
            <div class="p-4 space-y-2">
              <h1 class="text-2xl text-center">Brown Odala</h1>
              <h2 class="font-semibold text-lg text-center">Chancellor</h2>
              <div class="flex justify-center pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 shadow rounded-md">
                  View Profile
                </button>
              </div>
            </div>
          </li>
          <!--          -->
          <!--          -->
          <li class="flex flex-col justify-center items-center  border py-4 rounded-lg bg-slate-50 lg:border-0 lg:bg-white ">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-60 aspect-[6/6] rounded-full"/>
            <div class="p-4 space-y-2">
              <h1 class="text-2xl text-center">Chimwemwe Banda</h1>
              <h2 class="font-semibold text-lg text-center">Vice Chancellor</h2>
              <div class="flex justify-center pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 shadow rounded-md">
                  View Profile
                </button>
              </div>
            </div>
          </li>
          <!--          -->
          <!--          -->
          <li class="flex flex-col justify-center items-center  border py-4 rounded-lg bg-slate-50 lg:border-0 lg:bg-white ">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-60 aspect-[6/6] rounded-full"/>
            <div class="p-4 space-y-2">
              <h1 class="text-2xl text-center">Mtende Mwanza</h1>
              <h2 class="font-semibold text-lg text-center">Registrar</h2>
              <div class="flex justify-center pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 shadow rounded-md">
                  View Profile
                </button>
              </div>
            </div>
          </li>
          <!--          -->
          <!--          -->
          <li class="flex flex-col justify-center items-center  border py-4 rounded-lg bg-slate-50 lg:border-0 lg:bg-white ">
            <img src="../assets/img/20230406_080523.jpg" class="object-cover w-60 aspect-[6/6] rounded-full"/>
            <div class="p-4 space-y-2">
              <h1 class="text-2xl text-center">Yassin Nedie</h1>
              <h2 class="font-semibold text-lg text-center">Executive Dean</h2>
              <div class="flex justify-center pt-6">
                <button class="border-black border-2 text-gray-700 text-sm w-auto px-4 py-3 shadow rounded-md">
                  View Profile
                </button>
              </div>
            </div>
          </li>
          <!--          -->
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  setup() {

  }
}
</script>


<style>

</style>