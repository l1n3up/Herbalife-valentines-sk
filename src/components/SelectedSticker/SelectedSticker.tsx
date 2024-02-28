import ArrowDown from "@p/Download/Arrow-down.svg";
import Arrow from "@p/welcome-page/Arrow.svg";

import { Props } from "./models";

export function SelectedSticker({
  selectedSticker,
  isStickerSelected,
  selectedPhoto,
  handleSelectCurrentPhoto,
  renderStickersList,
  handleSelectCurrentSticker,
}: Props) {
  if (isStickerSelected) {
    return (
      <div className="flex flex-col justify-center pb-[180px]">
        <h1 className="text-center text-[#256230] font-bold text-[26px] my-[20px] mb-[55px]">
          Vaša valentínka
        </h1>
        <img
          className="p-[24px] bg-white"
          src={selectedSticker?.variations[selectedPhoto.id]}
          alt="Selected photo"
        />
        <div className="flex mx-auto gap-[20px]">
          <div
            className="flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
            onClick={() => handleSelectCurrentSticker(false)}
          >
            <p>Späť</p>
          </div>
          <div
            className=" flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
            // onClick={() => handleSelectCurrentPhoto(true)}
          >
            <a
              href={selectedSticker?.variations[selectedPhoto.id]}
              download="Valentynka"
              target="_blank"
              rel="noreferrer"
            >
              Stiahnuť
            </a>
            <img className="ml-[10px] " src={ArrowDown} alt="Arrow" />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center">
      <img
        className="p-[24px] bg-white"
        src={selectedSticker?.variations[selectedPhoto.id]}
        alt="Selected photo"
      />
      <h1 className="text-center text-[#256230] font-bold text-[26px] my-[55px]">
        Vyberte si Vaši samolepku
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))]">
        {renderStickersList()}
      </div>
      <div className="flex mx-auto gap-[20px]">
        <div
          className="flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
          onClick={() => handleSelectCurrentPhoto(true)}
        >
          <p>Zpět</p>
        </div>
        <div
          className=" flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
          onClick={() => handleSelectCurrentSticker(true)}
        >
          <p>Pokračovat</p>
          <img className="ml-[10px] " src={Arrow} alt="Arrow" />
        </div>
      </div>
    </div>
  );
}
