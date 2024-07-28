const SiteHeader = () => {
  return (
    <header>
      <div className="2xl:px-[6rem] xl:px-[5rem] lg:px-[4rem] md:px-[3rem] sm:px-[2rem] px-[1rem] border-b">
        <div className="flex justify-between items-center">
          <a className="text-[32px] font-light" href="/">
            KURSLAR
          </a>
          <button className="border-x p-5">
            <img
              className="w-20 h-20"
              width={"80px"}
              src="./searchIcon.svg"
              alt="search button icon"
            />
          </button>

          <a href="/">
            <img
              className="w-[255.83px] h-[32.16px]"
              src="./tramplinLogo.svg"
              alt=""
            />
          </a>
          <button className="border-x p-5">
            <img
              className="w-20 h-20"
              width={"80px"}
              src="./userIcon.svg"
              alt="logo button icon"
            />
          </button>
          <a className="text-[32px] font-light" href="/">
            MENU
          </a>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
