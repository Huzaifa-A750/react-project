import Stars from "./images/Stars.png";

export default function reviews() {
  return (
    <div className="justify-center pt-8 lg:pt-0 grid lg:flex gap-x-10 gap-y-10 pb-0 lg:pb-8 px-8 sm:px-0">
      <div className="p-5 rounded-lg w-auto mx-0 sm:w-[468px] bg-white drop-shadow-md hover:drop-shadow-2xl cursor-pointer">
        <img src={Stars} alt="stars" />
        <p className="py-3 text-[#322C4E] text-sm font-[AirBnB-Normal] leading-[22px]">
          We bought our new home while we were still living in another state and
          needed to find a reputable builder. freshbuilds allowed us to find new
          homes that weren't on other website and once we found one we liked,
          they managed the entire process for us.
        </p>
        <p className="text-base text-[#3E8180] font-[AirBnB-Bold] leading-normal">
          Steve & Julie S.
        </p>
        <p className="text-[#322C4E] text-xs leading-normal font-[AirBnB-Normal]">
          New Homeowners
        </p>
      </div>
      <div className="p-5 rounded-lg w-auto mx-0 sm:w-[468px] bg-white drop-shadow-md cursor-pointer hover:drop-shadow-2xl">
        <img src={Stars} alt="stars" />
        <p className="py-3 text-[#322C4E] text-sm font-[AirBnB-Normal] leading-[22px]">
          I was looking for a new construction home but all of the new homes on
          other websites were sold before I could make an offer. freshbuilds
          sent me an alert for a new home that was under construction and helped
          me write an offer on it!
        </p>
        <p className="text-base text-[#3E8180] font-[AirBnB-Bold] leading-normal">
          Tod W.
        </p>
        <p className="text-[#322C4E] text-xs leading-normal font-[AirBnB-Normal]">
          New Homeowners
        </p>
      </div>
    </div>
  );
}
