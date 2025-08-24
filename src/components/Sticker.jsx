import styled from "styled-components";

const StickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const StickerImage = styled.img`
  max-width: 100px;
  height: auto;
`;

const Label = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #333;
`;

export const Sticker = ({ sticker, labelNeeded = false }) => {
  return (
    <StickerContainer>
      {labelNeeded && <Label>{sticker.label}</Label>}
      <StickerImage src={sticker.img} alt={sticker.label} />
    </StickerContainer>
  );
};