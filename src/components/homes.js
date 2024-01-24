import home1 from "./images/home-1.png";
import home2 from "./images/home-2.png";
import home3 from "./images/home-3.png";
import home4 from "./images/home-4.png";
import home5 from "./images/home-5.png";
import home6 from "./images/home-6.png";
import home7 from "./images/home-7.png";
import home8 from "./images/home-8.png";

export default function homes() {
  return (
    <div className="px-8 sm:px-0">
      <h1 className="text-[#0E1532] text-[26px] py-8 text-center font-medium leading-[39px] font-[AirBnB-Medium]">
        Whatever kind of new home you're looking for, <br />
        you'll find it on{" "}
        <span className="text-[#3E8180] font-bold font-[Montserrat]">
          fresh<span className="font-normal">builds</span>
        </span>
        .
      </h1>
      <div className="block sm:grid xl:flex justify-center gap-x-6 gap-y-6">
        <div className="grid sm:flex gap-x-6 gap-y-6 pb-6 sm:pb-0">
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home1} alt="Home-1" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              Condos
            </p>
          </div>
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home2} alt="Home-2" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              Townhomes
            </p>
          </div>
        </div>
        <div className="grid sm:flex gap-x-6 gap-y-6">
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home3} alt="Home-3" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              Luxury Homes
            </p>
          </div>
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home4} alt="Home-4" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              Single Family Homes
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}

      <div className="block sm:grid xl:flex justify-center gap-x-6 pt-6 gap-y-6">
        <div className="grid sm:flex gap-x-6 gap-y-6 pb-6 sm:pb-0">
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home5} alt="Home-5" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              55+ Community Homes
            </p>
          </div>
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home6} alt="Home-6" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              Quick Move-In Homes
            </p>
          </div>
        </div>
        <div className="grid sm:flex gap-x-6 gap-y-6">
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home7} alt="Home-7" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              Ready To Build Land
            </p>
          </div>
          <div className="w-auto sm:w-[279px] h-[100px] bg-white rounded-lg flex justify-center items-center hover:drop-shadow-2xl drop-shadow-md cursor-pointer">
            <img src={home8} alt="Home-8" className="pr-2" />
            <p className="text-base font-[AirBnB-Medium] leading-normal text-[#322C4E]">
              Rennovated Homes
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 grid justify-center pb-16">
        <button className="text-base rounded-md h-[55px] w-[205px] border-solid border-transparent border-2 bg-[#E87F3F] text-white font-[AirBnB-Medium] hover:drop-shadow-2xl tracking-[0.5px]">
          Search freshbuilds
        </button>
      </div>
    </div>
  );
}
