const Main = () => {
  return (
    <div className="mt-18 flex flex-col justify-center rounded-t-xl border border-white/20 bg-blue-300/20 shadow-xl backdrop-blur-md">
      <div className="mr-10 flex h-[64px] items-center justify-end">
        <i className="fa-brands fa-linkedin m-4 p-2 text-4xl text-white hover:rounded-xl hover:bg-gradient-to-t hover:from-purple-400/70 hover:via-cyan-500/70 hover:to-blue-700/70"></i>
        <i className="fa-brands fa-github p-2 text-4xl text-white hover:rounded-xl hover:bg-gradient-to-t hover:from-purple-400/70 hover:via-cyan-500/70 hover:to-blue-700/70"></i>
      </div>

      <div className="h-[1000px] bg-white">
        <div className="mx-24 border-b border-b-slate-400">
          <h1 className="font-manropeMed hover: mt-14 text-center text-6xl text-neutral-700">
            Beyond the Code
          </h1>
          <p className="font-raleway mt-4 px-24 text-center">
            Hi I&apos;m Celeste
          </p>

          <p className="font-raleway mb-8 px-24 text-center"></p>
        </div>
        <div>
          <video></video>
          <video></video>
        </div>
      </div>
    </div>
  );
};

export default Main;
