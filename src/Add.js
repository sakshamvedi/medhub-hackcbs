import React from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {db} from './firebase';
import { Hint } from 'react-autocomplete-hint';

import axios from 'axios';
import { setConsent } from 'firebase/analytics';
function Add() {
    const [med,setmeds]  = React.useState([]);
  const [medname,setmedname] = React.useState([]);
  const[nam,setname] = React.useState("");
  const [pric, setprice] = React.useState("");
  const [quantit,setquantity] = React.useState("");
  const[number,setnumber] = React.useState("");
  const [data,setsdata] = React.useState([]);
function add(idx)
{
    console.log(medname[idx])
}


const usersCollectionRef = collection(db,localStorage.length>0 ? localStorage.getItem("mail"):"users"); 
async function submit()
{
  await addDoc(usersCollectionRef, {name:nam, price: pric ,quantity:quantit ,number:number})
  alert("data submitted");
}






  return (
<>

<section className="text-gray-600 body-font relative">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       Add Meds
      </h1>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Medicine Name
            </label>
            <input
            onChange={(event)=>{setname(event.target.value)}}
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="price" class="leading-7 text-sm text-gray-600">Price</label>
            <input type="number"   onChange={(event)=>{setprice(event.target.value)}}  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="price" class="leading-7 text-sm text-gray-600">Seller Contact Info</label>
            <input type="number"   onChange={(event)=>{setnumber(event.target.value)}}  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
       
       
       
       
<div class="p-2 w-1/2">
          <div class="relative">
          </div>
        </div>

        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="price" class="leading-7 text-sm text-gray-600">Quantity [Boxes]</label>
            <input type="number"  onChange={(event)=>{setquantity(event.target.value)}}  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>





     {/* <option><input type="checkbox" /> Paracetamol</option>
     <option><input type="checkbox"/> Combiflame</option> */}


      

        <div className="p-2 w-full">
          <button  onClick={submit} className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
           Add Medicine
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

</>
  )
}

export default Add