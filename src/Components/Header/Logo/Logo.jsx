import React from "react";
import logoProyectoCoder from "../../../Images/logoProyectoCoder_Dark.png";
import s from "./Logo.module.css";
import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className={s.LogoContainer}>
      <NavLink to="/">Deco Hogar</NavLink>
    </div>
  );
}
