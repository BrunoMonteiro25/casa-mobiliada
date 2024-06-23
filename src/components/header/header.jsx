"use client";

import React, { useState } from "react";
import Image from "next/image";

// STYLES
import {
  Box,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

import {
  Container,
  Menu,
  Button,
  DropdownMenu,
  DropdownItem,
  NavLink,
  ContentSvg,
  Search,
  ButtonSvg,
  ContentSearchBar,
  Icon,
  Question,
} from "./styled";

// ASSETS
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Logo from "../../assets/logo.png";
import { SvgCart, SvgSearch } from "@/assets/iconsSvg";
import CloseIcon from "@mui/icons-material/Close";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope",
  },
});

export default function Header() {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [isOpenSearch, setIsOpenSearch] = useState(false);

  const dropDownCategory = [
    {
      name: "Sala de estar",
      icon: <ArrowForwardIosIcon />,
    },
    {
      name: "Sala de jantar",
      icon: <ArrowForwardIosIcon />,
    },
    {
      name: "Banheiro",
      icon: <ArrowForwardIosIcon />,
    },
    {
      name: "Quarto",
      icon: <ArrowForwardIosIcon />,
    },
  ];

  const handleOpenAndCloseSearch = (e) => {
    e.preventDefault();
    setIsOpenSearch(!isOpenSearch);
  };

  console.log("open", isOpenSearch);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Menu>
          <ul>
            <li>
              <NavLink href="#" style={{ color: "#22a6ad" }}>
                Home
              </NavLink>
            </li>
            <li
              onMouseEnter={() => setIsOpenDropdown(true)}
              onMouseLeave={() => setIsOpenDropdown(false)}
            >
              <a href="#">Categorias</a>
              <ExpandMoreIcon />

              <DropdownMenu isOpen={isOpenDropdown}>
                {dropDownCategory.map((item) => (
                  <DropdownItem key={item.name}>
                    <a href="#">
                      {item.name} {item.icon}
                    </a>
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </li>
          </ul>

          <a href="/">
            <Image src={Logo} alt="Casa Mobiliada" />
          </a>

          <ContentSvg>
            <ButtonSvg onClick={handleOpenAndCloseSearch}>
              <SvgSearch />
              <Search open={isOpenSearch}>
                <ContentSearchBar>
                  <Icon>
                    <CloseIcon />
                  </Icon>
                  <Question>
                    <Typography variant="subtitle2">
                      O que você está procurando?
                    </Typography>
                    <TextField
                      fullWidth
                      id="standard-basic"
                      placeholder="Digite aqui..."
                      variant="standard"
                      sx={{
                        marginTop: "20px",

                        "& ::placeholder": {
                          fontSize: "0.9rem",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottomColor: "#01696E",
                        },
                      }}
                    />
                  </Question>
                </ContentSearchBar>
              </Search>
            </ButtonSvg>

            <ButtonSvg>
              <SvgCart />
            </ButtonSvg>

            <Button>Entrar</Button>
          </ContentSvg>
        </Menu>
      </Container>
    </ThemeProvider>
  );
}
