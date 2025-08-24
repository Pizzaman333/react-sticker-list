import { Sticker } from "./Sticker";
import stickerList from "../data/stickers.json";
import styled from "styled-components";

const StickerListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const StickerItem = styled.li`
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const StickerList = ({ onStickerClick }) => {
  return (
    <StickerListContainer>
      {stickerList.map((sticker, index) => (
        <StickerItem
          key={index}
          onClick={() => onStickerClick(sticker)}
        >
          <Sticker sticker={sticker} labelNeeded={false} />
        </StickerItem>
      ))}
    </StickerListContainer>
  );
};