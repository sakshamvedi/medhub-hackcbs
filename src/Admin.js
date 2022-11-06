import React from 'react'
import Add from './Add';
import Dashboard from './Dashboard';
import Bills from './Bills';
import Phone from './Phone';
function Admin() {
function signout()
{
    localStorage.clear();
    window.location.reload();
}


const [dash , setdash] = React.useState(true);
const [stock , setstock]  = React.useState(false);
const [order , setorder] = React.useState(false);
const [bills , setbills ] = React.useState(false);

function funa()
{
    setdash(true);
    setstock(false);
    setorder(false);
    setbills(false);

}

function funb()
{
    setdash(false);
    setstock(true);
    setorder(false);
    setbills(false);

}
function func()
{
    setdash(false);
    setstock(false);
    setorder(true);
    setbills(false);

}
function fund()
{
    setdash(false);
    setstock(false);
    setorder(false);
    setbills(true);

}






  return (
    <div>
<header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto ">
      <a className="mr-5  hover:text-gray-900 cursor-pointer hover:bg-green-100" onClick={funa}>DashBoard</a>
      <a className="mr-5 hover:text-gray-900 cursor-pointer " onClick={funb}>Add Stock </a>
      <a className="mr-5 hover:text-gray-900 cursor-pointer " onClick={func}>Order Meds</a>
      <a className="mr-5 hover:text-gray-900 cursor-pointer " onClick={fund}>Bills </a>
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <img src='https://cdn.dribbble.com/users/25980/screenshots/2350916/empatika_logo_still_2x.gif?compress=1&resize=400x300' height={"100px"} width = {"100px"} ></img>
      <span className="ml-3 text-xl">MedHub</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <button onClick={signout} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0">
        Log-Out
      </button>
    </div>
  </div>
</header>

{
  
  dash&&<Dashboard/>

}



{
  
  stock&&<Add/>

}


{
  
  bills&&<Bills/>

}

{
  order&&<Phone/>

}





    </div>
  )
}

export default Admin