import { Sticker } from "./Sticker";
import { StickerList } from "./StickerList";

export const handleClick = (sticker) => {
  console.log(document.querySelector(".current__sticker"));
  document.querySelector(".current__sticker").innerHTML = (
    <Sticker sticker={sticker} />
  );
};

export const Choice = () => (
  <div>
    <div className="current__sticker">
      <p>Choose a sticker first</p>
    </div>
    <StickerList />
  </div>
);
