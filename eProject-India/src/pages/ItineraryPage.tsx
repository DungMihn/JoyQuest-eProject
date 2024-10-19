import { Parallax } from "react-parallax";
import Itinerary from "../components/Itinerary";
import PromoVideo from "../components/PromoVideo";


const ItineraryPage = () => {
  return (
    <div>
<Parallax
        bgImage="https://duruthemes.com/demo/html/bycamp/img/slider/08.jpg"
        bgImageStyle={{ objectFit: "cover", objectPosition: "center" }}
        strength={500} // Điều chỉnh cường độ hiệu ứng
      >
        
          <div className=" h-[480px] flex justify-center items-center  text-white  ">
            <h1 className=" text-4xl font-bold">
              Itineraries 
            </h1>
          </div>
      
        
      </Parallax>

    {/*-------------------------------- Itinerary  -----------------------------------*/}
    <Itinerary/>
    {/*--------------------------------- Promo Video ------------------------------------------*/}
    <PromoVideo />
    </div>
  );
};

export default ItineraryPage;
