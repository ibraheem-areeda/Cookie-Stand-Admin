'use client';
import Head from "next/head"
import { useState } from "react"
// import {replies} from '@/data'





export default function Home() {

  const [locations, setLocations] = useState([])

  function newLocationHandler(event) {
    event.preventDefault();
    const location = {
      name: event.target.location.value,
      minCustomers: event.target.min_cus.value,
      maxCustomers: event.target.max_cus.value,
      avgCookies: event.target.avg_co.value,
      id: locations.length
    };
    setLocations([...locations, location])
  }


  return (
    <>
      <Head>
        <title>Cookie Stand Admin</title>
      </Head>
      <body className=" flex flex-col min-h-screen">
        <Header />
        <Main handler={newLocationHandler} locations={locations}/>
      </body >
        <Footer />

    </>
  )


}

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-blue-300 text-gray-50">
      <h1 className="text-4xl">Cookie Stand Admin</h1>
    </header>

  )
}

function Main(props) {
  return (
    <>
    <form className="m-auto  rounded-2xl mt-8 bg-blue-500 w-3/5 p-4" onSubmit={props.handler}>
    <h1 className="text-center text-4xl ">Create Cookie Stand</h1>
    <label className="pr-1">Location</label>
    <input name="location" className=" mt-8 pr-1 rounded-2xl  w-10/12"></input>

    <section className="flex flex-justfy flex-wrap ">
      <section className="flex flex-col mr-2" >
        <label className="mt-6">minimum customers per hour</label>
        <input name="min_cus" className="  rounded-2xl  "></input>
      </section>
      <section className="flex flex-col mr-2">
        <label className="mt-6">maximum customers per hour</label>
        <input name="max_cus" className="  rounded-2xl  "></input>
      </section>
      <section className="flex flex-col mr-2">
        <label className="mt-6">average cookies per sale</label>
        <input name="avg_co" className="  rounded-2xl  "></input>
      </section>
      <section className="flex mt-8">

        <button type="submit" className="bg-blue-100 hover:bg-blue-600   px-4 rounded shadow">
          Submit
        </button>
      </section>
    </section>
  </form>
  <Data locations={props.locations}/>
  </>
  )
}

function Footer (){
  return(

    <footer className="p-4 mt-8 bg-blue-300 text-gray-50" >
    &copy; ASAC 2023 and Ibraheem Areeda
  </footer>
  )
}

function Data({locations}) {

  if (locations[0] == null){
    return <h2 className="text-center " >report table coming soon ...</h2>
  }
  else{

    return(
      <> <table className="w-1/2 mx-auto my-4">
      <thead>
          <tr>
              <th className="border border-gray-700">No.</th>
              <th className="border border-gray-700">Location</th>
              <th className="border border-gray-700">Minimum Customer/Hour</th>
              <th className="border border-gray-700">Maximum Customer/Hour</th>
              <th className="border border-gray-700">Average Cookies/Sale</th>
          </tr>
              </thead>
              <tbody>
                  {
                   locations.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          <td className="pl-2 border border-gray-700">{item.id}</td>
                          <td className="pl-2 border border-gray-700">{item.name}</td>
                          <td className="pl-2 border border-gray-700">{item.minCustomers}</td>
                          <td className="pl-2 border border-gray-700">{item.maxCustomers}</td>
                          <td className="pl-2 border border-gray-700">{item.avgCookies}</td>
                      </tr>
                      )
                    })
                  }
              </tbody>
          </table>
  </>
  )
}
  
}