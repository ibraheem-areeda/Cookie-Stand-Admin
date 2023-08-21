export default function Footer ({locations}){
    return(
  
      <footer className=" p-4 mt-8 bg-blue-300 text-gray-50 static " >
      &copy; ASAC 2023 and Ibraheem Areeda
      <p>locations world wide{locations.length}</p>
    </footer>

    )
  }