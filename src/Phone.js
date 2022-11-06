import React from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {db} from './firebase';
function Phone() {
    const [arr,setarr] = React.useState([]);
    const [arr2,setarr2] = React.useState([]);
    const usersCollectionRef = collection(db,localStorage.length>0 ? localStorage.getItem("mail"):"users"); 
    React.useEffect(()=>{
        const getUser = async() =>  
        {
         const data = await getDocs(usersCollectionRef);
           setarr(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
           console.log(arr);
        }
        getUser()
       getleft()
        },[])


function getleft()
{

   var qtyarr = arr.filter(data=>data.quantity==0);
     setarr2(qtyarr);
     console.log(qtyarr)
     
}



return(
    <>

<marquee className = "text-red-700">These Medicine are Finished Buy before they Vanished</marquee>

<button  className='mx-7 text-green-700' onClick={getleft}>Refresh</button>
    <div className="overflow-x-auto relative mt-7">
  <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
         Medicine Name
        </th>
        <th scope="col" className="py-3 px-6">
         Priority
        </th>
        <th scope="col" className="py-3 px-6">
          Price
        </th>
        <th scope="col" className="py-3 px-6">
          Action
        </th>
      </tr>
    </thead>
    <tbody>
{
    arr2.map((data)=>{
       return<>
       <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {data.name}
        </th>
        <td className="py-4 px-6">{data.importance == "high"? <span>&#128994;</span>:<span>&#128308;</span>}</td>
        <td className="py-4 px-6">{data.price}$</td>
        <td>
            <a href='sms:+919161094827'>
            <button >Order Meds</button>
            </a>
            </td>
      </tr>
       
       </>
    })
}


     
    </tbody>
  </table>
</div>

    </>
   
)
}

export default Phone