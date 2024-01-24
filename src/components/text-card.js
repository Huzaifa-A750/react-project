import "./text-card.css";
import House2 from "./images/House-2.png";

export default function TextCard() {
  return (
    <div className="xl:justify-center justify-evenly grid lg:flex xl:gap-x-32 pt-0 md:pt-10 lg:pt-28 px-8 sm:px-0">
      <div className="lg:justify-start justify-center grid">
        <div className="w-auto sm:w-[454px] pt-16 md:pt-0 text-center px-4 lg:text-start">
          <h1 className="text-[#0E1532] text-[26px] font-medium leading-[39px] font-[AirBnB-Medium]">
            Find your new home on <span className="text-[#3E8180] font-bold font-[Montserrat]">
            fresh<span className="font-normal">builds</span>
            </span>.
          </h1>
          <p className="text-[#0E1532] pt-3 text-base leading-6 tracking-[0.066px] font-[AirBnB-Normal]">
            freshbuilds has the largest inventory of new construction homes that
            you won't find on other websites. Our proprietary technology and
            network of local real estate agents mean you'll be the first to hear
            about new construction projects.
          </p>
          <div className="pt-10 grid lg:justify-start justify-center">
            <button className="text-base rounded-md h-[55px] w-[205px] border-solid border-transparent border-2 bg-[#E87F3F] text-white font-[AirBnB-Medium] hover:tracking-wide hover:drop-shadow-2xl tracking-[0.5px]">
              Search freshbuilds
            </button>
          </div>
        </div>
        <div className="hover:drop-shadow-2xl grid justify-center lg:justify-normal cursor-pointer">
          <img src={House2} alt="House" className="relative xl:-left-32" />
        </div>
      </div>
      <div className="justify-center flex">
        <div className="w-[329px] h-[466px] justify-center flex">
          <div className="w-[455px] h-[455px] bg-[#5CCAAB] rounded-full absolute hidden sm:grid"></div>
          <div className="rounded-xl bg-white relative hover:drop-shadow-2xl cursor-pointer hover:border-white border-inherit border-2 border-solid">
            <div className="bg-img h-[249px] w-[329px] rounded-t-md pb-4">
              <button className="ml-5 mt-5 text-xs font-light rounded-md py-2 px-2 border-solid border-transparent border-2 bg-[#E87F3F] text-white font-[AirBnB-Normal] tracking-[0.5px]">
                Listed 2 Hours Ago
              </button>
            </div>
            <div className="p-5 pt-3">
              <p className="text-base font-[AirBnB-Bold] leading-normal text-[#322C4E]">
                1294 Westleigh Drive
              </p>
              <div className="flex py-2 gap-x-3">
                <p className="text-[#686868] text-sm font-[AirBnB-Normal] leading-normal">
                  3 Bd
                </p>
                <p className="text-[#686868] text-sm font-[AirBnB-Normal] leading-normal">
                  2 Bth
                </p>
                <p className="text-[#686868] text-sm font-[AirBnB-Normal] leading-normal">
                  1,524 Sq. ft
                </p>
              </div>
              <p className="text-[#322C4E] pb-3 text-[18px] font-[AirBnB-Bold] leading-normal">
                $445,000
              </p>
              <div className="flex flex-row justify-between">
                <div className="gap-y-3 grid">
                  <p className="text-[#9B9B9B] text-sm font-[AirBnB-Normal] leading-normal">
                    Completion Date
                  </p>
                  <p className="text-[#9B9B9B] text-sm font-[AirBnB-Normal] leading-normal">
                    Neighborhood
                  </p>
                  <p className="text-[#9B9B9B] text-sm font-[AirBnB-Normal] leading-normal">
                    Schools
                  </p>
                </div>
                <div className="text-end flex flex-col items-end gap-y-2">
                  <p className="text-[#322C4E] font-[AirBnB-Bold] leading-normal text-sm">
                    09/27/2023
                  </p>
                  <p className="w-[28px] h-[28px] bg-[#5CCAAB] rounded-full text-center">A-</p>
                  <p className="w-[28px] h-[28px] bg-[#5CCAAB] rounded-full text-center">B+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
