const SiteHero = () => {
  return (
    <div className="bg-default 2xl:pl-[6rem] xl:pl-[5rem] lg:pl-[4rem] md:pl-[3rem] sm:pl-[2rem] pl-[1rem] flex flex-wrap xl:flex-nowrap">
      <div className="max-w-[1040px] flex items-end pb-20" id="hero">
        <h2 className="text-[83px] text-wrap font-bold text-white">
          TALABALARIMIZ ISHLAGAN LOYIHALAR
        </h2>
      </div>
      <div className="block">
        <div className="flex">
          <a
            className="p-14 w-1/2 border border-heroBorder hover:translate-x-px"
            href="/"
          >
            <img src="./unired.svg" alt="" />
          </a>
          <a className="p-14 w-1/2 border border-heroBorder" href="/">
            <img src="./epam.svg" alt="" />
          </a>
        </div>
        <div className="w-1/2 float-end border-x border-heroBorder flex flex-wrap">
          <a className="p-14 border-b border-heroBorder w-full" href="/">
            <img src="./mediapark.svg" alt="" />
          </a>

          <a className="p-14 border-b border-heroBorder w-full" href="/">
            <img src="./korzinka.svg" alt="" />
          </a>

          <a className="p-14 border-b border-heroBorder w-full" href="/">
            <img src="./nest.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SiteHero;
