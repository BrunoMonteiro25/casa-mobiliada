"use client";

import styled from "styled-components";
import { Box, AppBar } from "@mui/material";

export const Container = styled(AppBar)`
  display: none;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  color: #222;
  padding: 10px 0px;
  position: relative;

  svg {
    height: 25px;
    width: 25px;
    color: #333;
  }

  @media (max-width: 633px) {
    display: flex;
  }
`;

export const BoxCart = styled(Box)`
  margin: 0;
  padding: 0;
  position: relative;

  &::before {
    content: "0";
    width: 16px;
    height: 16px;
    background-color: #22a6ad;
    position: absolute;
    border-radius: 50%;
    bottom: -2px;
    left: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
  }
`;

export const ButtonCart = styled.button`
  border: none;
  background-color: #fff;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const OpenCart = styled(Box)`
  display: ${(props) => (props.open ? "flex" : "none")} !important;
  width: 342px;
  height: 538px;
  border: 1px solid #ccc;
  position: absolute;
  top: 60px;
  right: 0px;
  background-color: #fff;
  border-radius: 8px;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 30px;

  svg {
    color: #fff;
    margin-right: 10px;
    margin-top: 5px;
  }
`;

export const CartHeader = styled(Box)`
  width: 342px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #22a6ad;
  border-radius: 8px 8px 0px 0px;
`;
