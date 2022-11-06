import React from 'react'
import axios from 'axios'
import { addDoc, collection, getDocs } from 'firebase/firestore';
import {db} from './firebase';


function Dashboard() {
    const [meddata, setmeddata] = React.useState([]);
    const [left,setleft] = React.useState();
    const[search,setsearch] = React.useState([]);
      const [data,setdata] = React.useState(false);
      const [arr,setarr] = React.useState([]);
    const [arr2,setarr2] = React.useState([]);

    const [founded,setfounded] = React.useState([]);
      const usersCollectionRef = collection(db,localStorage.length>0 ? localStorage.getItem("mail"):"users"); 
      React.useEffect(()=>{
        const getUser = async() =>  
        {
         const data = await getDocs(usersCollectionRef);
           setmeddata(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
           console.log(meddata);
        }
        getUser() 
        getleft()
        },[])




        function getleft()
        {
        
           var qtyarr = meddata.filter(data=>data.quantity==0);
             setarr2(qtyarr);
             console.log(qtyarr)
        }


        function handles(){

          var qtyarr = meddata.filter(data=>data.name.toUpperCase()==search.toUpperCase());
          setfounded(qtyarr);
          console.log(qtyarr);
        }

        



  return (
    <div>
<button  className='mx-7 text-green-700' onClick={getleft}>Refresh</button>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-5 mx-auto contains ">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
       Welcome {localStorage.getItem("names")}
      </h1> 
    </div>

    <div className="flex flex-wrap -m-4 text-center">
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="text-green-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>





          <h2 className="title-font font-medium text-3xl text-gray-900">
          {meddata.length}
          </h2>

          <p className="leading-relaxed">Boxes In Stock</p>

        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="text-gray-900 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
  <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>




          <h2 className="title-font font-medium text-3xl text-gray-900">
            {arr2.length}
          </h2>
          <p className="leading-relaxed">Boxes Finished</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">

          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="text-green-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
  <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
</svg>





          <h2 className="title-font font-medium text-3xl text-gray-900">74</h2>
          <p className="leading-relaxed">User Needed</p>
        </div>
      </div>
      <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
        <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">

          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="text-red-500 w-12 h-12 mb-3 inline-block"
            viewBox="0 0 24 24"
          >
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
</svg>




          <h2 className="title-font font-medium text-3xl text-gray-900">46</h2>
          <p className="leading-relaxed">Pending Medicine</p>
        </div>
      </div>
    </div>
    </div>

</section>



  <label
    htmlFor="default-search"
    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
  >
    Search
  </label>
  <div className="relative">
    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-500 dark:text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      onChange={(e)=>setsearch(e.target.value)}
      className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Medicines"
      required=""
    />
    <button
      type="submit"
      onClick={handles}
      className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Search
    </button>
  </div>





<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
        Medicine-List
      </h1>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
             Medicine Name
            </th>
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Quantity(P/Box)
            </th>
           
            <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
              Price
            </th>
            <th className="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br" />
          </tr>
        </thead>
        <tbody>



         
          
{
search.length>0? founded.map(data =>{
  return <>
   
   <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
             {data.name}
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              {data.quantity}
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
            ₹ {data.price} 
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
             
            </td>
          </tr>
  </>
})


 :

meddata.map((data)=>{
    return <>
    
    
    <tr>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
             {data.name}
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
              {data.quantity}
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 px-4 py-3">
            ₹ {data.price} 
            </td>
            <td className="border-t-2 border-b-2 border-gray-200 w-10 text-center">
             
            </td>
          </tr>
    </>
})


}
           
         
        </tbody>
      </table>
    </div>
  </div>
</section>



    

    </div>
  )
}

export default Dashboard
