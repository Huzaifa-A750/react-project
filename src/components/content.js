import './content.css';

export default function content() {
  return <div className='bg-gradient'>
    <div></div>
    <div className='justify-center grid text-center'>
      <p className='font-[AirBnB-ExtraBold] pt-20 text-[#3E8180] text-2xl md:text-[42px] font-extrabold leading-9 md:leading-[50px]'>Discover New Construction Homes <br /> Before They Hit The Market</p>
      <p className='text-[#322C4E] pt-10 font-[AirBnB-Medium] text-md md:text-xl leading-normal'>From move-in-ready to custom homes, fresh<span className='font-[AirBnB-ExtraBold]'>Builds</span> is the <br />  modern way to find + buy a new construction house.</p>
    <div className='pt-8'>
      <button className='h-[55px] w-[205px] bg-[#E87F3F] text-white font-[AirBnB-Bold]'>Search freshbuilds</button>
    </div>
    </div>
    
  </div>;
}

