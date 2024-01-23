import Logofooter from "./images/footerlogo.png";
import Footerhouse from "./images/footerhouse.png";

export default function Footer() {
  return (
    <div className="bg-[#322C4E] pt-8 pb-2">
      <div className="grid mx-auto justify-center">
        <img src={Logofooter} alt="Footer-Logo" className="" />
      </div>
      <div className="text-center font-[AirBnB-Light] text-base leading-normal text-white">
        <h1 className="pt-5">contact@freshbuilds.com</h1>
        <h1 className="pt-1">1-844-769-6377</h1>
      </div>
      <div className="flex justify-between px-10 mt-10">
        <div className="flex gap-x-8 font-[AirBnB-Light] text-sm leading-normal text-white">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Copyright © 2022. All Rights Reserved.</a>
        </div>
        <div className="">
          <img src={Footerhouse} alt="footer-house" />
        </div>
      </div>
    </div>
  );
}
