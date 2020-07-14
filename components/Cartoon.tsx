import React from "react";
import { useTypedSelector } from "../lib/reducers";
import {
  Backpack,
  Browser,
  Cat,
  Chocolate,
  CreditCard,
  File,
  Ghost,
  IceCream,
  Mug,
  Planet,
  SpeechBubble,
} from "react-kawaii";

export default () => {
  let [value, setValue] = React.useState(5)
  const currentQuestion = useTypedSelector(
    (state) => state.user.currentQuestion
  );
  const message = useTypedSelector(state => state.user.message);
  const [params, setParams] = React.useState({
    mood: "excited",
    size: 150,
  });

  React.useEffect(() => {
    setValue(Math.floor(Math.random() * 11));
    if (params.mood == "sad") setParams({ ...params, mood: "excited" });
  }, [currentQuestion]);

  React.useEffect(() => {
    if(!message) return;
    if(message.type == "error") setParams({...params, mood: "sad"})
  }, [message])

  switch (value) {
    case 0:
      return <Backpack {...params} />;
    case 1:
      return <Browser {...params} />;
    case 2:
      return <Cat {...params} />;
    case 3:
      return <Chocolate {...params} />;
    case 4:
      return <CreditCard {...params} />;
    case 5:
      return <File {...params} />;
    case 6:
      return <Ghost {...params} />;
    case 7:
      return <IceCream {...params} />;
    case 8:
      return <Mug {...params} />;
    case 9:
      return <Planet {...params} />;
    case 10:
      return <SpeechBubble {...params} />;
    default:
      return <Ghost {...params} />;
  }
};
