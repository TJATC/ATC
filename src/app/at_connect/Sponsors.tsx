import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ['200', '400', '500', '600', '700'] });
import Gold from "@/(assets)/(sponsors)/Gold.json"
import Silver from "@/(assets)/(sponsors)/Silver.json"
import Bronze from "@/(assets)/(sponsors)/Bronze.json"
import Booth from "@/(assets)/(sponsors)/Booth.json"
import TierSection from "./TierSection"

export default function SponsorsPage() {
    return (
        <div className={['', montserrat.className].join(' ')}>
            {Gold.length>0 ?  <TierSection array={Gold} backgroundColor="#E1CE7A" title="Gold" />: <></>}
            {Silver.length>0 ?  <TierSection array={Silver} backgroundColor="#9B9FB5" title="Silver" />: <></>}
            {Bronze.length>0 ?  <TierSection array={Bronze} backgroundColor="#36311F" title="Bronze" />: <></>}
            {Booth.length>0 ?  <TierSection array={Booth} backgroundColor="#453643" title="Booth Holders" />: <></>}

        </div>
    );
}