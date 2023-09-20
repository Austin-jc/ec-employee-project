"use client";
import MyButton from "./MyButton";
import { useState } from "react";
import { useDarkSide } from "@/utils/useDarkSide";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function DarkmodeButton() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkSide(!darkSide);
  };
  return (
    <MyButton variant={"icon"} onClick={toggleDarkMode}>
      {darkSide ? (
        <Brightness7Icon sx={{ color: "white" }} />
      ) : (
        <Brightness4Icon sx={{ color: "gray" }} />
      )}
    </MyButton>
  );
}
