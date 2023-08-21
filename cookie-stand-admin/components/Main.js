import ReportTable from "@/components/ReportTable";
import Form from "./Form";


export default function Main(props) {
    return (
      <>
    <Form handler={props.handler}/>
    <ReportTable locations={props.locations}/>
    </>
    )
  }