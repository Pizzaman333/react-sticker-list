import { Component } from "react";
import { Sticker } from "./Sticker";
import { StickerList } from "./StickerList";
import styled from "styled-components";

const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const CurrentSticker = styled.div`
  background-color: #f5f5f5;
  border: 2px solid #ddd;
  border-radius: 8px;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;
`;

const ExitBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #ff1a1a;
  }
`;

const Placeholder = styled.p`
  color: #666;
  font-size: 1rem;
  font-style: italic;
`;

export class Choice extends Component {
  state = {
    selectedSticker: null,
  };

  handleStickerClick = (sticker) => {
    this.setState({ selectedSticker: sticker });
  };

  render() {
    const { selectedSticker } = this.state;
    return (
      <ChoiceContainer>
        <CurrentSticker>
          {/* {selectedSticker ? <ExitBtn onClick={() => this.setState({ selectedSticker: null })}>  X </ExitBtn> : null} */}

          {selectedSticker ? (
            <>
              <ExitBtn onClick={() => this.setState({ selectedSticker: null })}>
                X
              </ExitBtn>
              <Sticker sticker={selectedSticker} labelNeeded={true} />
            </>
          ) : (
            <Placeholder>Choose a sticker first</Placeholder>
          )}
        </CurrentSticker>
        <StickerList onStickerClick={this.handleStickerClick} />
      </ChoiceContainer>
    );
  }
}

// If using hoooks:

// export const Choice = () => {
//   const [selectedSticker, setSelectedSticker] = useState(null);

//   const handleStickerClick = (sticker) => {
//     setSelectedSticker(sticker);
//   };

//   return (
//     <ChoiceContainer>
//       <CurrentSticker>
//         {selectedSticker ? (
//           <Sticker sticker={selectedSticker} labelNeeded={true} />
//         ) : (
//           <Placeholder>Choose a sticker first</Placeholder>
//         )}
//       </CurrentSticker>
//       <StickerList onStickerClick={handleStickerClick} />
//     </ChoiceContainer>
//   );
// };
