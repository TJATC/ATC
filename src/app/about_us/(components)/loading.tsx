import "./loading.css"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({subsets: ["latin"], weight:['200', '400', '500','600', '700']});
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className="loading">
        <h1 className={montserrat.className}>Loading . . .</h1>
    </div>
  }