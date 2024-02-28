import Arrow from '@p/welcome-page/Arrow.svg';

import { Props } from './models';

export function Photo({
  selectedPhoto,
  selectedSticker,
  isPhotoSelected,
  handleSelectCurrentPhoto,
  renderStickersList,
  renderValentynkyList,
  handleSelectCurrentSticker,
  setIsHomePage,
}: Props) {
  if (isPhotoSelected) {
    return (
      <div className="flex flex-col justify-center">
        <img
          className="p-[24px] bg-white"
          src={selectedSticker?.variations[selectedPhoto.id]}
          alt="Selected photo"
        />
        <h1 className="text-center text-[#256230] font-bold text-[26px] my-[55px]">
          Výber nálepky
        </h1>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(130px,1fr))]">
          {renderStickersList()}
        </div>
        <div className="flex mx-auto gap-[20px]">
          <div
            className="flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
            onClick={() => handleSelectCurrentPhoto(false)}
          >
            <p>Späť</p>
          </div>
          <div
            className=" flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
            onClick={() => handleSelectCurrentSticker(true)}
          >
            <p>Pokračovať</p>
            <img className="ml-[10px] " src={Arrow} alt="Arrow" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <img
        className="p-[24px] bg-white"
        src={selectedPhoto?.img}
        alt="Selected photo"
      />
      <h1 className="text-center text-[#256230] font-bold text-[26px] my-[55px]">
        Vyberte si valentínku
      </h1>

      <div className="flex mx-[44px] flex-wrap justify-center">
        {renderValentynkyList()}
      </div>
      <div className="flex mx-auto gap-[20px]">
        <div
          className="flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
          onClick={() => setIsHomePage(true)}
        >
          <p>Späť</p>
        </div>
        <div
          className=" flex bg-[#256230] text-white p-[10px] my-[48px] rounded-[6px] cursor-pointer "
          onClick={() => handleSelectCurrentPhoto(true)}
        >
          <p>Pokračovať</p>
          <img className="ml-[10px] " src={Arrow} alt="Arrow" />
        </div>
      </div>
    </div>
  );
}
