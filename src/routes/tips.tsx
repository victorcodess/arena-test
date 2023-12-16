import tipsBg from "../assets/tips-bg.png";
import tipOne from "../assets/tip-one.svg";
import tipTwo from "../assets/tip-two.svg";
import tipThree from "../assets/tip-three.svg";

const Tips = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="relative flex items-center justify-center w-full h-[238px]">
        <img src={tipsBg} alt="" className="w-full h-full" />
        <div className="bg-black/50 w-full h-full z-20 absolute"></div>
        <h1 className="absolute heading uppercase text-center font-bold text-white text-[60px] max-w-[317px] leading-[70px] z-30">
          <span className="carnival">Carnival</span> Games
        </h1>
      </div>

      <div className="w-full flex flex-col items-center justify-center">
        <div className="pt-[21.68px] pb-[116px]">
          <div className="flex gap-2.5 items-center justify-center py-[11px] px-6 border-b border-black/10">
            <img src={tipOne} alt="" className="w-[56px] h-full" />

            <p className="text-sm leading-[22px] text-[#050505]">
              Earn the highest points by being the{" "}
              <span className="font-semibold">quickest</span> to answer 16
              questions <span className="font-semibold">correctly.</span>
            </p>
          </div>
          <div className="flex gap-2.5 items-center justify-center py-[11px] px-6 border-b border-black/10">
            <img src={tipTwo} alt="" className="w-[56px] h-full" />

            <p className="text-sm leading-[22px] text-[#050505]">
              Each game costs <span className="font-semibold">N50.</span> You
              are allowed to play a maximum of{" "}
              <span className="font-semibold">3 games</span> per day.
            </p>
          </div>
          <div className="flex gap-2.5 items-center justify-center py-[11px] px-6 border-b border-black/10">
            <img src={tipThree} alt="" className="w-[56px] h-full" />

            <p className="text-sm leading-[22px] text-[#050505]">
              <span className="font-semibold">Top 5</span> players on the
              leaderboard at the end of the day, will earn a share from{" "}
              <span className="font-semibold">5% of the total pot</span> for
              that day.
            </p>
          </div>
        </div>

        <a href="/quiz">
          <button className="w-[366px] h-[55px] text-white font-medium rounded-[6px] bg-[#2741D7]">
            Start Quiz
          </button>
        </a>
      </div>
    </main>
  );
};

export default Tips;
