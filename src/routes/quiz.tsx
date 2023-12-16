import close from "../assets/close.svg";
import countdown from "../assets/countdown.svg";
import questionBg from "../assets/question-bg.png";
import check from "../assets/check.svg";
import cancel from "../assets/cancel.svg";
import arrowForward from "../assets/arrow-forward.svg";
import { useState } from "react";

const Quiz = () => {
  const [selected, setSelected] = useState(false);
  const [correct, setCorrect] = useState(false);

  const handleClick = (number: number) => {
    setSelected(true);

    if (number === 3) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  };

  return (
    <main className="relative max-w-[550px] mx-auto  sm:my-3 sm:pb-5 sm:rounded-2xl sm:border-4 border-black/50">
      <div className="bg-gradient flex items-center justify-between p-[14px] max-w-[550px] mx-auto sm:rounded-t-xl">
        <h3 className="text-white font-bold manrope tracking-[0.8px]">Carnival Games</h3>
        <a href="/home">
          <div className="flex gap-2 items-center justify-center cursor-pointer">
            <img src={close} alt="" className="w-[16px] h-full" />
            <h3 className="font-semibold manrope text-sm">Close</h3>
          </div>
        </a>
      </div>

      <div className="flex max-w-[550px] mx-auto items-center justify-between my-[16px] px-4 sm:px-4">
        <img src={countdown} alt="" className="w-[40px] h-full" />

        <h2 className="text-[20px] font-bold text-[#707070] manrope">1/20</h2>

        <h3 className="text-sm text-[#FE971A] font-bold inter">100 Pts</h3>
      </div>

      <div className="w-[274px] flex items-center justify-center mx-auto mt-[15px]">
        <h2 className="text-center font-semibold leading-[28px] text-[#333] archivo">
          <span className="text-[#FE971A]">Q1.</span> Which movie won the best
          cinematography in 2022
        </h2>
      </div>

      <img
        src={questionBg}
        alt=""
        className="w-[338px] h-full mx-auto mt-[15px]"
      />

      <div className="flex flex-col items-center justify-center gap-4 mt-[27px] inter">
        <div
          className="flex cursor-pointer w-[326px] h-12 border border-[#2741D7]"
          onClick={() => handleClick(1)}
        >
          <div className="bg-[#2741D7] p-[18px] flex items-center justify-center">
            <h2 className="text-[20px] font-semibold text-white">A</h2>
          </div>
          <div className="flex items-center justify-center pl-10">
            <h2 className="text-base font-medium text-[#0272BB]">
              King of Thieves
            </h2>
          </div>
        </div>

        <div
          className="flex cursor-pointer w-[326px] h-12 border border-[#2741D7]"
          onClick={() => handleClick(2)}
        >
          <div className="bg-[#2741D7] p-[18px] flex items-center justify-center">
            <h2 className="text-[20px] font-semibold text-white">B</h2>
          </div>
          <div className="flex items-center justify-center pl-10">
            <h2 className="text-base font-medium text-[#0272BB]">
              King of Lions
            </h2>
          </div>
        </div>

        <div
          className="flex cursor-pointer w-[326px] h-12 border border-[#2741D7]"
          onClick={() => handleClick(3)}
        >
          <div className="bg-[#2741D7] p-[18px] flex items-center justify-center">
            <h2 className="text-[20px] font-semibold text-white">C</h2>
          </div>
          <div className="flex items-center justify-center pl-10">
            <h2 className="text-base font-medium text-[#0272BB]">
              King of Boys
            </h2>
          </div>
        </div>

        <div
          className="flex cursor-pointer w-[326px] h-12 border border-[#2741D7]"
          onClick={() => handleClick(4)}
        >
          <div className="bg-[#2741D7] p-[18px] flex items-center justify-center">
            <h2 className="text-[20px] font-semibold text-white">D</h2>
          </div>
          <div className="flex items-center justify-center pl-10">
            <h2 className="text-base font-medium text-[#0272BB]">
              King of Lagos
            </h2>
          </div>
        </div>
      </div>

      <h1 className="mt-[23px] drop-shadow-[0_1px_0.5px_rgba(0,0,0,0.25)] mx-auto heading uppercase text-center font-bold text-[#2741D7] text-[20px] max-w-[91px] leading-[20px]">
        <span className="carnival">Carnival</span> Games
      </h1>

      {selected && correct && (
        <div
          className="absolute z-20 top-0 bottom-0 bg-black/30 w-full h-[100vh] sm:h-full sm:rounded-xl right-0 left-0 flex items-center justify-center"
          onClick={() => setSelected(false)}
        >
          <div className="bg-white flex flex-col gap-4 rounded-lg py-6 px-[78px] items-center justify-center">
            <img src={check} alt="" className="w-[64px] h-full" />

            <p className="w-[203px] text-center leading-[24px]">
              Correct! <br></br> You have won 100 points
            </p>

            <a href="/">
              <button className="w-[88px] h-[40px] text-white font-medium rounded-[6px] bg-[#2741D7] flex items-center justify-center gap-2">
                Next{" "}
                <img src={arrowForward} alt="" className="w-[16px] h-full" />
              </button>
            </a>
          </div>
        </div>
      )}

      {selected && !correct && (
        <div
          className="absolute z-20 top-0 bottom-0 bg-black/30 w-full h-[100vh] sm:h-full sm:rounded-xl right-0 left-0 flex items-center justify-center"
          onClick={() => setSelected(false)}
        >
          <div className="bg-white flex flex-col gap-4 rounded-lg py-6 px-[78px] items-center justify-center">
            <img src={cancel} alt="" className="w-[64px] h-full" />

            <p className="w-[203px] text-center leading-[24px]">
              Incorrect! <br></br> You have lost 100 points
            </p>

            <a href="/">
              <button className="w-[88px] h-[40px] text-white font-medium rounded-[6px] bg-[#2741D7] flex items-center justify-center gap-2">
                Next{" "}
                <img src={arrowForward} alt="" className="w-[16px] h-full" />
              </button>
            </a>
          </div>
        </div>
      )}
    </main>
  );
};

export default Quiz;
