import styled from "@emotion/styled";
import { IThemeAware } from "../context/ThemeContext";

export const Header = styled.header<IThemeAware>(({ theme }) => ({
  display: "flex",
  minHeight: "100vh",
  width: "100vw",
  position: "relative",
  backgroundColor: theme.DARKER,
  justifyContent: "center",
  alignItems: "center",
  color: theme.TEXT_MAIN,
  textShadow: `3px 3px 2px ${theme.DARKER}`,
  "*": {
    zIndex: 2,
  },
  canvas: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
}));