import { GlobalContext } from "./context";
import { useContext } from "react";

export default function useGlobal() {
  return useContext(GlobalContext);
}
