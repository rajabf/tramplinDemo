const SiteMain = () => {
  return (
    <div className="my-20 2xl:px-2xl xl:px-xl lg:px-lg md:px-md sm:px-sm flex flex-wrap justify-center">
      <section className="w-full flex">
        <img className="w-1/2" src="./silkroad.svg" alt="" />

        <h2 className="pt-[100px] pl-5 text-3xl font-bold w-[259px]">
          SILKROAD LOGISTIKA CRM SISTEMASI
        </h2>
      </section>
      <section className="w-full flex">
        <div className="py-[164px] pl-5 w-1/2">
          <h2 className="text-3xl font-bold">
            SIZ TENGI <br /> BOLALAR <br /> QILGAN <br /> SHU ISHLARNI
          </h2>

          <button className="mt-24 px-6 pt-3 w-[120px] h-[120px] text-center rounded-full bg-default text-white">
            O’QIYMAN SHEKIL
          </button>
        </div>
        <div className="w-1/2 flex">
          <img className="h-fit" src="./uniredApp.svg" alt="" />
          <h2 className="pt-[100px] pl-5 text-3xl font-bold">
            UNIRED MOBILE <br /> FINTECH ILOVA
          </h2>
        </div>
      </section>
      <section className="w-full flex">
        <div className="w-1/2">
          <img className="w-2/3 float-right" src="./eduon.svg" alt="" />
        </div>

        <h2 className="pt-[100px] pl-5 text-3xl font-bold">
          EDUON ONLINE <br />
          TA’LIM PLATFORMASI
        </h2>
      </section>
      <section className="w-full flex">
        <h2 className="pt-[100px] pr-5 text-3xl text-right font-bold w-1/2">
          WEAR ME <br /> E-COMMERCE <br /> MOBIL ILOVA
        </h2>

        <div className="w-1/2">
          <img className="w-full float-right" src="./wearme.svg" alt="" />
        </div>
      </section>
      <section className="w-full flex">
        <div className="w-1/2">
          <img
            className="w-full float-right rounded-lg"
            src="./mastercard.svg"
            alt=""
          />
        </div>

        <h2 className="pt-[100px] pl-5 text-3xl text-left font-bold w-1/2">
          YANA QANAQADIR <br /> ULTRA SUPER LOYIHA
        </h2>
      </section>

      <a
        className="mt-24 gap-6 border px-8 pt-6 pb-4 rounded-full border-black flex justify-between"
        href="/"
      >
        <p className="inline">
          KO’PROQ <br /> KO’RISH
        </p>
        <p className="inline">⇩</p>
      </a>
    </div>
  );
};

export default SiteMain;
