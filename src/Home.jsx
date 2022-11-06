import React from 'react'
import { signInWithGoogle } from './firebase';
function Home() {

    const [state, setstate] = React.useState("");


function alert()
{
    console.log("alery");
}


  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5  flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
   <img src='https://cdn.dribbble.com/users/25980/screenshots/2350916/empatika_logo_still_2x.gif?compress=1&resize=400x300' height={"100px"} width = {"100px"} ></img>
      <span className="ml-3 text-xl">MedHub</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <button onClick={signInWithGoogle} className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
   Register
  </button>


    </nav>

    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
   MedHub Welcomes You 
      </h1>
      <p className="mb-8 leading-relaxed">
     A Place to Assist your Medical Storage and help  you to take care the needs and requirement of your customers 
      </p>

      <div className="flex w-full md:justify-start justify-center items-end">
  <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
    <label htmlFor="hero-field" className="leading-7 text-sm text-gray-600">
   MedHub Id
    </label>
    <input
    onChange={(event)=>setstate(event.target.value)}
      type="text"
      id="hero-field"
      name="hero-field"
      className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  </div>
{state.length == 13  &&  <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg" disabled>
   
  </button>

}

</div>



      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
       Download our Android Application for more convienence
      </p>
    


      <div className="flex lg:flex-row md:flex-col">
        <button className="bg-green-400  text-white  inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="w-6 h-6"
            viewBox="0 0 512 512"
          >
            <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
          </svg>
          <span className="ml-4 flex items-start flex-col leading-none">
            <span className="text-xs text-white-600 mb-1">GET IT ON</span>
            <span className="title-font font-medium">Google Play</span>
          </span>
        </button>
      </div>
    </div>


    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded"
        src="pills-bottle.png"
      />
    </div>
  </div>
</section>




  
  </div>
</header>





  )
}

export default Home