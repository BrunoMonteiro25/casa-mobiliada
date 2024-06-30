"use client";

import styled from "styled-components";
import { Box } from "@mui/material";

import { SvgSearch } from "@/assets/iconsSvg";

export const Container = styled.div`
  width: 100%;
  background-color: #fff;
`;

export const Menu = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  background-color: #fff;
  padding: 0px 140px;
  border-bottom: 1px solid #ccc;

  ul {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  li {
    list-style: none;
    display: flex;
    align-items: center;
    position: relative;
    padding: 30px 0px;
  }

  a {
    color: #04292a;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #22a6ad;
    }
  }

  svg {
    cursor: pointer;
  }

  @media (max-width: 1440px) {
    padding: 0px 100px;
  }
`;

export const NavLink = styled.a`
  color: #04292a;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #22a6ad;
  }
`;

export const DropdownMenu = styled.ul`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")} !important;
  /* display: flex; */
  position: absolute;
  top: 65px;
  left: -20px;
  list-style: none;
  border-radius: 0.25rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  flex-direction: column;
  gap: 0px !important;
  width: max-content;
  align-items: flex-start !important;
  border: 1px solid #e0e0e0;
  background-color: #fff;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    top: -6px;
    left: calc(67%);
    transform: rotate(45deg);
    z-index: -1;
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
  }

  a {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  svg {
    font-size: 15px;
  }
`;

export const DropdownItem = styled.li`
  padding: 1rem !important;
  cursor: pointer;

  &:hover {
  }

  a {
    text-decoration: none;
  }
`;

export const ContentSvg = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const ButtonSvg = styled.button`
  border: none;
  background-color: #fff;
`;

export const Search = styled(Box)`
  display: ${(props) => (props.open ? "flex" : "none")} !important;
  /* display: flex; */
  width: 400px;
  height: max-content;
  background-color: #fff;
  position: absolute;
  right: 195px;
  top: 40px;
  border-radius: 0.25rem;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border: 1px solid #e0e0e0;
  z-index: 1;

  &::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: #fff;
    position: absolute;
    top: -6px;
    right: 10px;
    transform: rotate(45deg);
    z-index: -1;
    border-top: 1px solid #e0e0e0;
    border-left: 1px solid #e0e0e0;
  }
`;

export const ContentSearchBar = styled(Box)`
  width: 100%;
  padding: 15px;
`;

export const Icon = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  border: none;
  background-color: #fff;
`;

export const Question = styled(Box)`
  text-align: left;
  margin-top: 10px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  background-color: #22a6ad;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  cursor: pointer;
  border: none;
  border-radius: 8px;
  letter-spacing: 0.4px;
  font-size: 16px;

  &:hover {
    background-color: #01696e;
  }
`;
