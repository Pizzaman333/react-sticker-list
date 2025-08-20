import { Sticker } from "./Sticker";
import stickerList from "../data/stickers.json"
import { handleClick } from "./Choice";

export const StickerList = () => 
  <ul>
     {stickerList.map((sticker, index) => (
      <li key={index} onClick={() => handleClick(sticker)}><Sticker sticker={sticker}/></li>
    ))}
  </ul>

