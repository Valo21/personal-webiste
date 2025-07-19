import { useContext } from "react";
import { ErrorContext } from "../context/ErrorProvider";

export function useErrors() {
  return useContext(ErrorContext);
}