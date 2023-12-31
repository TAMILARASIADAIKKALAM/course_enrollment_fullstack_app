import { Top_Courses } from "./Top_Course";
import { Carousel } from "./Carousel";
import { Heros } from "./Hero";
import { Course_Services } from "./Course_Services";



export const Home_Page=()=>
 {
  return (
    <div>
   <Top_Courses/>
   <Carousel/>
   <Heros/>
   <Course_Services/>
    </div>
  );
}


