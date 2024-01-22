import { useState } from "react";
import arrowdown from "./images/dropdown.png";
import faqhouses from "./images/faqhouses.png";

export default function Dropdown() {
  const faq = [
    {
      question: "What kind of new construction homes does freshbuilds have on its platform?",
      image: <img src={arrowdown} alt="arrow-down" className="down" />,
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      question: "How do I find new construction homes that match my criteria?",
      image: <img src={arrowdown} alt="arrow-down" className="down" />,
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      question: "Can I work with freshbuilds if I'm already working with a real estate agent?",
      image: <img src={arrowdown} alt="arrow-down" className="down" />,
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      question: "Why should I work with a licensed new construction specialist?",
      image: <img src={arrowdown} alt="arrow-down" className="down" />,
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
    {
      question: "What factors does freshbuilds consider when evaluating home builders?",
      image: <img src={arrowdown} alt="arrow-down" className="down" />,
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cumque est expedita voluptatem porro accusantium, alias iusto delectus amet iure voluptas culpa nobis necessitatibus beatae inventore sapiente quis tempora deleniti.",
    },
  ];

  const [faqData, setFaqData] = useState(Array(faq.length).fill(false));

  const handleDropdownClick = (index) => {
    const updatedFaqData = [...faqData];
    updatedFaqData[index] = !updatedFaqData[index];
    setFaqData(updatedFaqData);
  };  
  

  return (
    <div className="grid justify-center md:flex md:justify-evenly bg-white py-16">
      <div className="">
        <div className="md:w-[454px] text-center lg:text-start">
          <h1 className="text-[#0E1532] text-[26px] font-medium leading-[39px] font-[AirBnB-Medium]">
            Find your new home on{" "}
            <span className="text-[#3E8180] font-bold">
              fresh<span className="font-normal">builds</span>
            </span>
            ?
          </h1>
        </div>

        {/* Mapping */}

        <div className="p-4 md:p-0">
        {faq.map((el, index) => (
          <div className="w-[100%] md:w-[636px] py-4 border-b-[1px] border-solid border-[#D6D6D6] cursor-pointer">
            <div key={index} className="content justify-between text-sm md:text-base font-[AirBnB-Medium] leading-normal text-[#322C4E] flex" onClick={() => handleDropdownClick(index)}>
              <div>{el.question}</div>
              <div>{el.image} </div>
            </div>
            {faqData[index] && <div className="text-gray-600 bg-slate-300 mt-1 p-2 font-[AirBnB-Light]">{el.answer}</div>}
          </div>
        ))}
      </div>
      </div>
      <div className="md:-mt-20 grid justify-center">
        <img src={faqhouses} alt="Houses" className="h-[350px] md:h-[400px]" />
      </div>
    </div>
  );
}
