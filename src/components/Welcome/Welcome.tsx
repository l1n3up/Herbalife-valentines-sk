import Heart from "@p/Entry/heart.svg";
import Entry from "@p/Entry/valentynky_poletujici_full 1.png";
import Logo from "@p/welcome-page/logo.png";

export const Welcome = ({
  setIsHomePage,
}: {
  setIsHomePage: (value: boolean) => void;
}) => {
  return (
    <>
      <img
        className="absolute -z-1  top-0 right-0 hidden xl:block"
        src={Entry}
        alt=""
      />
      <div className="flex items-center flex-col max-w-[567px] mx-auto">
        <img className=" mt-[32px]" src={Logo} alt="" />
        <h1 className=" text-[#256230] font-bold text-[60px] text-center mt-[70px] max-w-[550px] leading-[82px]">
          Darujte lásku s Herbalife!
        </h1>
        <p className="text-center text-[#256230] leading-7 mt-[30px]">
          Dnes oslavujeme deň lásky a my v Herbalife sme pre Vás pripravili
          niečo špeciálne, aby ste sa o túto lásku mohli podeliť so svojimi
          zákazníkmi a tímom.
        </p>
        <p className="text-center text-[#256230] leading-7 mt-[30px]">
          Stiahnite si naše exkluzívne elektronické valentínky, ktoré sú
          dokonalým spôsobom, ako vyjadriť svoju vďačnosť a posilniť vzťahy so
          svojim tímom a zákazníkmi!
        </p>
        <div className="flex flex-col items-center font-bold text-[#256230] text-[20px] leading-[27px] text-center mt-6">
          <img className="mt-4" src={Heart} alt="" />
          <p className="mt-1">
            Vyberte si jeden zo vzorov a kliknite na tlačidlo "Pokračovať".
          </p>
        </div>
        <div className="flex flex-col items-center font-bold text-[#256230] text-[20px] leading-[27px] text-center">
          <img className="mt-4" src={Heart} alt="" />
          <p className="mt-1">
            Vyberte si jednu zo samolepiek, ktoré chcete pridať na svoje
            prianie, a kliknite na tlačidlo "Pokračovať".
          </p>
        </div>
        <div className="flex flex-col items-center font-bold text-[#256230] text-[20px] leading-[27px] text-center">
          <img className="mt-4" src={Heart} alt="" />
          <p className="mt-1">
            Pomocou tlačidla "Stiahnuť" si stiahnite svoju valentínku!
          </p>
        </div>
        <div
          className=" flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
          onClick={() => setIsHomePage(false)}
        >
          <p>Začnite s výberom valentínky</p>
        </div>
        <p className="leading-[27px] text-center text-[20px] text-[#256230] mb-24">
          Svoju valentínku môžete poslať elektronicky alebo ju vytlačiť a
          odovzdať osobne.
        </p>
      </div>
    </>
  );
};
