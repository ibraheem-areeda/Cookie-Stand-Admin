'use client';
import Head from "next/head"
import { useState } from "react"
import Header from "@/components/Header";
import Main from "@/components/Main";
import Footer from "@/components/Footer";






export default function CookieStandAdmin() {

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
      <div className=" flex flex-col min-h-screen">
        <Header />
        <Main handler={newLocationHandler} locations={locations}/>
        <Footer locations={locations} />
      </div >

    </>
  )


}



function ReportTable () {
    return(
        <>
        
        </>
    )
}