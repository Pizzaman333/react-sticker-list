export const Sticker = ({sticker, labelNeeded = false}) => 
   <>
    {labelNeeded ? <p>{sticker.label}</p> : ""}
    <img src={sticker.img} alt="sticker.label" />
   </>
