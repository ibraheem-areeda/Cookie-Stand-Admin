
export default function Form (props){
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
  
    </>
    )
  }
  