import React from "react";
import card from "../assets/img/card_placeholder.svg";
import group from "../assets/img/group.svg";
import logo from "../../src/assets/img/spires2.svg";

function Body() {
  return (
    <React.Fragment>
      {/* Landing Section */}
      <section className="bg-security bg-auto h-screen">
        <div className="grid grid-cols-2 h-full">
          <div className="col-span-1"></div>
          <div className="col-span-1 grid grid-rows-4 gap-10">
            <div className="flex flex-col p-10 row-start-3 pl-40">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
                Title
              </h1>
              <p className="mb-6 text-lg font-normal text-white lg:text-xl">
                Sub heading
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services & Why Choose Us */}
      <section className="flex flex-col justify-around gap-60 bg-cctv bg-contain bg-no-repeat h-[1600px]">
        <div className="grid grid-cols-8 gap-8 p-20">
          <div className="col-start-4 flex flex-col col-span-4 gap-8 justify-start">
            <div className="text-[40px] font-bold">Our Services</div>
            <div>
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry`s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </div>
            <button className="flex border w-[240px] h-14 items-center justify-center text-[20px] rounded">Get Started</button>
          </div>

        </div>

        <div className="flex flex-col ">
          <h1 className="text-[50px] flex justify-center font-bold">Why you should choose us!</h1>
          <div className="flex flex-row justify-between m-10 p-10">
            <div className="max-w-sm rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)] bg-black/5 backdrop-blur shadow-stone-600">
                <img className="rounded-t-lg p-5" src={card} alt="" />
              <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Title
                  </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since
                </p>
              </div>
            </div>
            <div className="max-w-sm rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)] bg-black/5 backdrop-blur shadow-stone-600">
              <img className="rounded-t-lg p-5" src={card} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title
                </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since
              </p>
            </div>
          </div>
          <div className="max-w-sm rounded-xl shadow-[0_0px_60px_-10px_rgba(0,0,0,0.3)] bg-black/5 backdrop-blur shadow-stone-600">
              <img className="rounded-t-lg p-5" src={card} alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title
                </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since
              </p>
            </div>
          </div>
        </div>
        </div>

      </section>

      {/* About Us */}
      <section className="flex justify-center items-center h-[800px]">
        <div className="grid grid-cols-2">
          <div className="flex flex-col p-10 m-10">
            <h1 className="text-[56px] font-bold">About Us</h1>
            <p className="text-[20px] font-[poppins]">
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry`s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Ipsum is
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry`s standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book.
            </p>
          </div>

          <img src={group}></img>
        </div>
      </section>

      {/* Get in Touch & Footer */}
      <section className="bg-cctv2 bg-auto h-[1600px]">
        <div className="grid grid-rows-4 h-full justify-between gap-4">
          <div className="flex row-span-2 m-20">
            <div className="grid grid-cols-2 bg-white/10 backdrop-blur-md p-10 gap-10 h-fit rounded-xl">
              <div className="flex flex-col gap-4 justify-center">
                <div>
                <h4 className="text-[14px] font-light">contact</h4>
                <h2 className="text-[50px] font-bold">Get in Touch</h2>
                </div>
                <p className="text-[20px] font-extralight pl-6">
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry`s standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                  Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry`s standard dummy
                  text ever since the 1500s, when an unknown printer took a
                  galley of type and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="flex flex-col justify-around items-center gap-10">
                <div className="w-[700px] h-[75px] relative">
                  <input className="w-[700px] h-[75px] bg-stone-400 bg-opacity-0 rounded-[20px] border border-white p-8"></input>
                  <div className="left-[20px] top-[-30px] absolute bg-clip-padding text-center text-neutral-400 text-xl font-light px-2">
                    Name
                  </div>
                </div>
                <div className="w-[700px] h-[75px] relative">
                <input className="w-[700px] h-[75px] bg-stone-400 bg-opacity-0 rounded-[20px] border border-white p-8"></input>
                <div className="left-[20px] top-[-30px] absolute bg-clip-padding text-center text-neutral-400 text-xl font-light px-2">
                  Contact
                </div>
              </div>
              <div className="w-[700px] h-[75px] relative">
                <input className="w-[700px] h-[75px] bg-stone-400 bg-opacity-0 rounded-[20px] border border-white p-8"></input>
                <div className="left-[20px] top-[-30px] absolute bg-clip-padding text-center text-neutral-400 text-xl font-light px-2">
                  Email
                </div>
              </div>
              <div className="w-[700px] h-[75px] relative">
                <input className="w-[700px] h-[75px] bg-stone-400 bg-opacity-0 rounded-[20px] border border-white p-8"></input>
                <div className="left-[20px] top-[-30px] absolute bg-clip-padding text-center text-neutral-400 text-xl font-light px-2">
                  Message
                </div>
              </div>
              <button className="flex border w-[240px] h-14 items-center justify-center text-[20px] rounded">Submit</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-8 grid-rows-3 row-span-2 m-10 gap-10">
            <div className="row-start-2 col-start-2 col-span-4">
              <div className="flex flex-col items-center m-4 gap-4">
                <div className="flex flex-col items-center">
                <img className="aspect-auto" src={logo} alt="Spire Logo" />
              <h1 className="text-[36px] font-bold">Spires Intelligence Services (India) Pvt. Ltd.</h1>
                </div>
                <p className="text-center">Regd. Off. : F-2/257, Near Parmeshwar Mandir, Sangam Vihar, New Delhi-110080 <br></br>
              Branch Off. : Varunapuri Colony, Saraiya, Varanasi, Uttar Pradesh-221106 <br></br>
              Tel. : 011-41637558, 9140303656, 9990261779, 7011212848 <br></br>
              Email : sisiplgroup@gmail.com Website : www.sisipl.in <br></br>
              </p>
              </div>
            </div>
          </div>
        </div>


        <div className="bg-black/30 flex justify-center">
          Copyright © 2024 SPIRES. All rights reserved.
        </div>
      </section>
    </React.Fragment>
  );
}
export default Body;
