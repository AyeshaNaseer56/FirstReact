import Header from "./components/Header";
import Subheading from "./components/Subheading";
import Oredered from "./components/Ordered";
import Htmlhead from "./components/Htmlhead";
import Unordered from "./components/Unordered";
import Nextlist from "./components/Nextlist";
import Olsecond from "./components/Olsecond";
import Olthird from "./components/Olthird"
import Olsecondpart from "./components/Olsecondpart"
import Secondol from "./components/Secondol"


export default function App() {
    return (
        <>
            <Header />
            <Subheading />
            <ol><Oredered /></ol>
            <Htmlhead />
            <ul><Unordered />
              <ul><Nextlist />
              <ol><Olsecond />
              <ol><Olsecondpart/></ol>
               <Secondol/>
               
                </ol>
             
            </ul>
               <ul><Olthird/></ul>
            </ul>
    {/* SECOND */}
             
          
        </>
    )
}