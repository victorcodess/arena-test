import gift from "../assets/gift.svg";
import arrow from "../assets/arrow.svg";
import whatsapp from "../assets/whatsapp.svg";
import brandMobile from "../assets/brand-mobile.svg";
import { useState } from "react";

const SignUp = () => {
  const [accept, setAccept] = useState(false);
  return (
    <main className="bg-[#EEF8FF] w-full relative h-[100vh] flex items-center flex-col">
      {!accept ? (
        <div className="w-full h-full absolute bg-black/0 z-20 backdrop-blur-sm flex items-center justify-end flex-col">
          <div className="bg-[#EEF8FF] w-full flex flex-col items-center justify-center">
            <div className="flex flex-col gap-[11px] pt-[8.46px] pb-[18px]">
              <img
                src={brandMobile}
                alt=""
                className="mx-auto w-[92px] h-[70px]"
              />
              <h3 className="text-[#262261] paragraph text-[20px] font-semibold">
                We value your privacy
              </h3>
            </div>

            <div className="flex items-center justify-center w-full bg-white py-[18px] px-[24px] mb-[38px]">
              <p className="text-sm font-medium leading-5 w-[366px] text-[#262261] text-center">
                The quality content and information we provide to you depends on
                the revenue we generate from advertising. We and our partnersuse
                your personal data, such as IP addresses and cookie
                identifiers.Click below to consent to the use of cookies and the
                processing of your data.
              </p>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center mb-[70px]">
              <button
                className="w-[323px] h-[55px] text-white font-medium rounded-[6px] bg-[#2741D7]"
                onClick={() => setAccept(true)}
              >
                I Accept
              </button>
              <h4 className="underline underline-offset-2 text-[#2741D7] italic font-medium text-sm">
                Read More
              </h4>
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-full px-6 pt-10">
        <div
          className="w-10 h-10 drop-shadow-[0_3px_3px_rgba(0,0,0,0.161)] bg-white rounded-full flex items-center justify-center cursor-pointer"
          onClick={() => setAccept(false)}
        >
          <img src={arrow} alt="" className="mx-auto w-[18.5px]" />
        </div>
      </div>

      <div className="flex flex-col gap-[14px]">
        <h1 className="heading uppercase text-center font-bold text-[#2741D7] text-[60px] max-w-[317px] leading-[70px]">
          <span className="carnival">Carnival</span> Games
        </h1>

        <p className="font-medium text-sm text-center w-[320px] paragraph">
          Play exciting games for a chance to win some exciting prizes from your
          favourite brands.
        </p>
      </div>

      <div className="flex flex-col gap-2.5 mt-[54px]">
        <p className="paragraph font-medium text-[#050505]/60 text-sm">
          Insert phone number to begin
        </p>

        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <img src={whatsapp} alt="" className="mx-auto w-[18.5px]" />
          </div>
          <input
            type="text"
            id="input-group-1"
            className="bg-white border border-[#2741D7] text-[#050505]/50 text-[15px] font-semibold rounded-[6px] focus:ring-blue-500 focus:border-blue-500 block w-[323px] ps-10 py-[14px]"
            placeholder="+234"
          />
        </div>

        <a href="/home"><button className="w-[323px] h-[55px] text-white font-medium rounded-[6px] bg-[#2741D7]">
          Get Started
        </button></a>
      </div>

      <div className="absolute bottom-0 right-0 left-0">
        <img src={gift} alt="" className="mx-auto w-full max-w-[500px]" />
      </div>
    </main>
  );
};

export default SignUp;
