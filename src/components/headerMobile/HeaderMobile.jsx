"use client";

import React, { useState } from "react";
import { Grid, Toolbar, IconButton, Typography, Box } from "@mui/material";

import { RiMenu2Fill } from "react-icons/ri";

import Logo from "../../assets/logo.png";
import { SvgCart } from "@/assets/iconsSvg";
import CloseIcon from "@mui/icons-material/Close";

import {
  BoxCart,
  ButtonCart,
  ButtonClose,
  CartHeader,
  Container,
  OpenCart,
} from "./styled";
import Image from "next/image";

const HeaderMobile = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);

  return (
    <Container position="fixed" elevation={0}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item xs={4}>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <RiMenu2Fill />
            </IconButton>
          </Grid>
          <Grid item xs={4} container justifyContent="center">
            <a href="/">
              <Image
                src={Logo}
                alt="Casa Mobiliada"
                width={144}
                height={46}
                priority
              />
            </a>
          </Grid>
          <Grid item xs={4} container justifyContent="flex-end">
            <BoxCart>
              <ButtonCart onClick={() => setIsOpenCart(true)}>
                <SvgCart />
              </ButtonCart>

              <OpenCart open={isOpenCart}>
                <CartHeader>
                  <Box></Box>
                  <Typography variant="subtitle1" sx={{ color: "#fff" }}>
                    Carrinho de Compras
                  </Typography>
                  <ButtonClose
                    onClick={(event) => {
                      event.stopPropagation();
                      setIsOpenCart(false);
                    }}
                  >
                    <CloseIcon />
                  </ButtonClose>
                </CartHeader>
              </OpenCart>
            </BoxCart>
          </Grid>
        </Grid>
      </Toolbar>
    </Container>
  );
};

export default HeaderMobile;
