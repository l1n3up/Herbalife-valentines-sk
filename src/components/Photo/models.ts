import { Sticker } from "@/models/sticker";
import { Valentinka } from "@/models/valentinka";

export type Props = {
  selectedPhoto: Valentinka;
  isPhotoSelected: boolean;
  selectedSticker: Sticker;
  handleSelectCurrentPhoto: (value: boolean) => void;
  renderValentynkyList: () => JSX.Element[];
  renderStickersList: () => JSX.Element[];
  handleSelectCurrentSticker: (value: boolean) => void;
  setIsHomePage: (value: boolean) => void;
};
