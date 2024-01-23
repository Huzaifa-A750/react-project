import "./content.css";
import houses from "./images/hero_houses.png";

export default function content() {
  return (
    <div className="bg-gradient mb-[60px]">
      <div className="absolute pt-24 hidden w-auto lg:flex">
        <img src={houses} alt="houses" />
      </div>
      <div className="justify-center grid text-center pt-20 pb-10 shadow-slate-400 shadow-md">
        <p className="font-[AirBnB-ExtraBold] text-[#3E8180] text-2xl md:text-[42px] font-extrabold leading-9 md:leading-[50px]">
          Discover New Construction Homes <br /> Before They Hit The Market
        </p>
        <p className="text-[#322C4E] pt-10 font-[AirBnB-Medium] text-md md:text-xl leading-normal">
          From move-in-ready to custom homes, fresh
          <span className="font-[AirBnB-ExtraBold]">Builds</span> is the <br />{" "}
          modern way to find + buy a new construction house.
        </p>
        <div className="pt-8">
          <button className=" rounded-md h-[55px] w-[205px] border-solid border-transparent border-2 bg-[#E87F3F] text-white font-[AirBnB-Bold] hover:tracking-wide hover:drop-shadow-2xl">
            Search freshbuilds
          </button>
        </div>
      </div>
    </div>
  );
}
