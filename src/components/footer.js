import Logofooter from "./images/footerlogo.png";
import Footerhouse from "./images/footerhouse.png";

export default function Footer() {
  return (
    <div className=" bg-[#322C4E] pt-8 pb-4 flex justify-center">
      <div className="container">
        <div className="grid mx-auto justify-center">
          <img src={Logofooter} alt="Footer-Logo" className="" />
        </div>
        <div className="text-center font-[AirBnB-Light] text-base leading-normal text-white">
          <h1 className="pt-5">contact@freshbuilds.com</h1>
          <h1 className="pt-1">1-844-769-6377</h1>
        </div>
        <div className="grid sm:flex justify-center sm:justify-between px-10 mt-10">
          <div className="grid sm:flex gap-x-8 font-[AirBnB-Light] text-sm leading-normal text-white">
            <div className="grid text-center sm:flex gap-x-8 gap-y-2 pb-5 sm:pb-0">
              <p className="cursor-pointer">Privacy Policy</p>
              <p className="cursor-pointer">Terms of Service</p>
            </div>
            <div className="border-solid border-gray-400 border-t-[1px]"></div>
            <div className="pt-5 sm:pt-0">
              <p className="cursor-pointer">
                Copyright © 2022. All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="grid justify-center mt-0 sm:-mt-4 pt-4 sm:pt-0">
            <img src={Footerhouse} alt="footer-house" />
          </div>
        </div>
      </div>
    </div>
  );
}
