import { useContext } from "react";
import { Context } from ".";

export const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
