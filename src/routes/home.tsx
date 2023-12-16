import homeBg from "../assets/home-bg.png";

const Home = () => {
  return (
    <main className="flex items-center justify-center">
      <img
        src={homeBg}
        alt=""
        className="w-[1500px] justify-center object-cover bg-cover bg-center h-[100vh]"
      />
      <div className="bg-black/50 w-full h-[100vh] z-10 absolute"></div>

      <div className="absolute z-20 flex flex-col gap-11 items-center justify-center">
        <h1 className="heading uppercase text-center font-bold text-white text-[60px] max-w-[317px] leading-[70px]">
          Carnival Games
        </h1>

        <p className="text-white font-medium leading-[26px] w-[320px] text-center">Cash prizes up for grabs every week. Start playing, Start winning!</p>

        <a href="/tips"><button className="w-[323px] h-[55px] text-white font-medium rounded-[6px] bg-gradient">
          Get Started
        </button></a>
      </div>
    </main>
  );
};

export default Home;
