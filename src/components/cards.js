import "./cards.css";
import Watch from "./images/clock.png";
import Diamond from "./images/Diamond.png";
import CardHouses from "./images/Card-Houses.png";
import Idea from "./images/Idea.png";
import Hall from "./images/Hall.png";

export default function cards() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-[#0E1532] text-[26px] leading-[39px] font-[AirBnB-Medium]">
          Buying a new home is daunting. <br />{" "}
          <span className="text-[#3E8180] font-bold font-[Montserrat]">
            fresh<span className="font-normal">builds</span>
          </span>{" "}
          makes it oh-so easy.
        </h1>
      </div>

      {/* Cards */}

      <div className="container justify-center mx-auto grid gap-y-14 lg:gap-y-0 px-8 lg:flex mt-14 gap-x-10">
        {/* Card-1 */}

        <div className="bg-white px-5 py-6 w-[365px] cursor-pointer rounded-xl border-[3px] border-[#5CCAAB] border-solid hover:drop-shadow-2xl grid text-center md:text-start">
          <div className="grid justify-center md:justify-start">
            <img src={Watch} alt="time-watch" className="py-10 pl-2" />
          </div>
          <p className="text-[22px] text-[#3E8180] font-[AirBnB-ExtraBold] leading-[26px] pb-2">
            Get your time back
          </p>
          <p className="text-[#0E1532] text-base leading-6 tracking-[0.066px] font-[AirBnB-Normal]">
            Spend time with family, not searching dozens of listing sites.
            freshbuilds has all the new construction homes in one place.
          </p>
        </div>

        {/* Card-2 */}

        <div className="bg-white px-5 py-6 w-[365px] cursor-pointer rounded-xl border-[3px] border-transparent hover:border-[#69f1cb] border-solid hover:drop-shadow-2xl grid text-center md:text-start">
          <div className="grid justify-center md:justify-start">
            <img src={Diamond} alt="diamond" className="py-10 pl-2" />
          </div>
          <p className="text-[22px] text-[#3E8180] font-[AirBnB-ExtraBold] leading-[26px] pb-2">
            Be a know-it-all
          </p>
          <p className="text-[#0E1532] text-base leading-6 tracking-[0.066px] font-[AirBnB-Normal]">
            We monitor local construction activity and send you alerts when a
            new home with your criteria is ready for its new owners.
          </p>
        </div>

        {/* Card-3 */}

        <div className="bg-shade hover:drop-shadow-2xl cursor-pointer">
          <img src={CardHouses} alt="Houses" />
        </div>
      </div>

      {/* Card-2nd-Row */}

      <div className="container justify-center mx-auto grid gap-y-14 lg:gap-y-0 px-8 lg:flex mt-10 gap-x-10">
        {/* Card-1 */}

        <div className="bg-white px-5 py-6 w-[365px] cursor-pointer rounded-xl border-[3px] border-transparent border-solid hover:drop-shadow-2xl hover:border-[#69f1cb] grid text-center md:text-start">
          <div className="grid justify-center md:justify-start">
            <img src={Idea} alt="time-watch" className="py-10 pl-2" />
          </div>
          <p className="text-[22px] text-[#3E8180] font-[AirBnB-ExtraBold] leading-[26px] pb-2">
            Rely on experts
          </p>
          <p className="text-[#0E1532] text-base leading-6 tracking-[0.066px] font-[AirBnB-Normal]">
            Spend time with family, not searching dozens of listing sites.
            freshbuilds has all the new construction homes in one place.
          </p>
        </div>

        {/* Card-2 */}

        <div className="bg-white px-5 py-6 w-[365px] cursor-pointer rounded-xl border-[3px] border-transparent border-solid hover:drop-shadow-2xl hover:border-[#69f1cb] grid text-center md:text-start">
          <div className="grid justify-center md:justify-start">
            <img src={Hall} alt="time-watch" className="py-10 pl-2" />
          </div>
          <p className="text-[22px] text-[#3E8180] font-[AirBnB-ExtraBold] leading-[26px] pb-2">
            Rest assured
          </p>
          <p className="text-[#0E1532] text-base leading-6 tracking-[0.066px] font-[AirBnB-Normal]">
            Every freshbuild purchase comes with a complimentary home warranty
            giving you one less thing to worry about.
          </p>
        </div>
      </div>
    </div>
  );
}
