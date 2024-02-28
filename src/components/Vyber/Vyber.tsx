import { Sticker } from "@/models/sticker";
import { Valentinka } from "@/models/valentinka";
import clsx from "clsx";
import { useState } from "react";

import { Photo } from "../Photo";
import { SelectedSticker } from "../SelectedSticker";
import { MockDataNamespace } from "./utils";

export const Vyber = ({
  setIsHomePage,
}: {
  setIsHomePage: (value: boolean) => void;
}) => {
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<Valentinka>(
    MockDataNamespace.valentinkysList[0]
  );
  const [selectedSticker, setSelectedSticker] = useState<Sticker>(
    MockDataNamespace.stickersList[0]
  );

  const [isStickerSelected, setIsStickerSelected] = useState(false);

  function renderValentynkyList() {
    return MockDataNamespace.valentinkysList.map((valentynky) => (
      <div
        key={valentynky.id}
        className={clsx(
          "cursor-pointer p-[12px] max-w-[20%]",
          selectedPhoto?.id === valentynky.id && "bg-white"
        )}
        onClick={() => setSelectedPhoto(valentynky)}
      >
        <img src={valentynky.img} alt="valentynky" />
      </div>
    ));
  }

  function renderStickersList() {
    return MockDataNamespace.stickersList.map((sticker) => (
      <div
        key={sticker.id}
        className={clsx(
          "flex items-center justify-center cursor-pointer p-[12px] place-self-center min-w-[135px] min-h-[135px]",
          selectedSticker?.id === sticker.id && "bg-white"
        )}
        onClick={() => setSelectedSticker(sticker)}
      >
        <img src={sticker.img} alt="valentynky" />
      </div>
    ));
  }

  const handleSelectCurrentPhoto = (value: boolean) => {
    setIsPhotoSelected(value);
  };

  const handleSelectCurrentSticker = (value: boolean) => {
    setIsStickerSelected(value);
  };

  return (
    <main className="max-w-[1052px] mx-auto min-h-[100vh]  pt-[108px]">
      {!isStickerSelected ? (
        <Photo
          {...{
            isStickerSelected,
            selectedPhoto,
            selectedSticker,
            isPhotoSelected,
            handleSelectCurrentPhoto,
            renderValentynkyList,
            renderStickersList,
            handleSelectCurrentSticker,
            setIsHomePage,
          }}
        />
      ) : (
        <SelectedSticker
          {...{
            selectedPhoto,
            selectedSticker,
            handleSelectCurrentPhoto,
            renderStickersList,
            isStickerSelected,
            handleSelectCurrentSticker,
          }}
        />
      )}
    </main>
  );
};
