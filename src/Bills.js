import React from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {db} from './firebase';
import hashmap from 'hashmap';

function Bills() {
    const [meddata, setmeddata] = React.useState([]);
    const [patient,setpatient] = React.useState("");
    const [arr,setarr] = React.useState([]);
    const [button,setbutton] = React.useState("");
    const [money,setmoney] = React.useState("");
    const[list,setList]=React.useState([]);
    const[moneylist,setmoneyList]=React.useState([]);
 const[stateid,setstateid] = React.useState([]);
 
 function adds(data)
 {
    
 }



    const [quantiy,setquantiy] = React.useState("");
    const [qty,setqty] = React.useState([]);
    var HashMap = require('hashmap');
    var map = new HashMap();
    const usersCollectionRef = collection(db,localStorage.length>0 ? localStorage.getItem("mail"):"users"); 
    React.useEffect(()=>{
      const getUser = async() =>  
      {
       const data = await getDocs(usersCollectionRef);
         setmeddata(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
         console.log(meddata);
      }
      getUser() 
      },[])



     function add(){
        setList((list)=> {
            return[...list,button]
        });

     setqty((list)=>{
        return[...list,quantiy]
     });

     setmoneyList((list)=>{
      return[...list,money]
   });


         console.warn(moneylist);
    }


      console.log(meddata);
      console.log(map)

function handle1(value,price)
{
   setbutton(value);
   setmoney(price);
}


function handle2(value)
{
  setmoney(value);
 
}

  return (
    <div>
       
    <section className="text-gray-600 body-font">
    <div className='container px-28'>Name : {patient}</div>
       <div className="container px-28 flex">
       
<div class="">

    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-white uppercase bg-green-800 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="py-3 px-6">
                    Medicine name
                </th>
                <th scope="col" class="py-3 px-6">
                    Quantity
                </th>
                <th scope="col" class="py-3 px-6">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>

{

  list&&list.map((val,index)=>{
    const data = qty[index]; 
    const info = moneylist[index];
    return(
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
         {val}
      </th>
      <td class="py-4 px-6">
         {data}
      </td>
      
      <td class="py-4 px-6">
          {info}
      </td>
  </tr>
    )
  })
}



          
           
        </tbody>
    </table>
</div>





    <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
       Bill
      </h2>
      <div className="relative mb-4">
        <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
          Full Name
        </label>
        <input
          type="text"
          id="full-name"
          name="full-name"
          onChange={(event)=>setpatient(event.target.value)}
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <div className="relative mb-4">
        <input
          type="text"
          id="full-name"
          placeholder='Quantity'
          onChange={(event)=>setquantiy(event.target.value)}
          name="full-name"
          className="w-1/4 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
        <label htmlFor="full-name" className="leading-7 mr-7 text-sm text-gray-600">
        
        </label>
        <input
          type="text"
          value={button}
          id="full-name"
          name="full-name"
          className="w-1/2 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      {
    meddata.map((data,index)=>{
        return(
<>



    <div
                className="list"
                onClick={() => {
                handle1(data.name,data.price);
              
                }}
              >
                {data.name} 
              </div>


</>

        )
    }
    )

    
}

     
      <button onClick={add}  className="text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">
       Add
      </button>
    </div>
  </div>
</section>



    </div>






  )
}

export default Bills