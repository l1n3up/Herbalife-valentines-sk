import { Sticker } from "@/models/sticker";
import { Valentinka } from "@/models/valentinka";

export type Props = {
  selectedPhoto: Valentinka;
  selectedSticker: Sticker;
  isStickerSelected: boolean;
  handleSelectCurrentSticker: (value: boolean) => void;
  renderStickersList: () => JSX.Element[];
  handleSelectCurrentPhoto: (value: boolean) => void;
};
