import "./App.css";
import { useTranslation } from "react-i18next";
import "./i18n";
import {
  RefObject,
  useState,
  useEffect,
  FC,
  useRef,
  PropsWithChildren,
  CSSProperties,
  StrictMode,
} from "react";

function App() {
  const { t } = useTranslation("home");
  return <>test</>;
}

export default App;
