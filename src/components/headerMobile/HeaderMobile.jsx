"use client";

import React, { useState } from "react";
import Image from "next/image";

// STYLES
import {
  Grid,
  Toolbar,
  IconButton,
  Typography,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
} from "@mui/material";
import {
  BoxCart,
  ButtonCart,
  ButtonClose,
  CartHeader,
  Container,
  OpenCart,
} from "./styled";

// ASSETS
import Logo from "../../assets/logo.png";
import { RiMenu2Fill } from "react-icons/ri";
import { SvgCart } from "@/assets/iconsSvg";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const HeaderMobile = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
    setOpenDropdown(false);
  };

  const dropDownCategory = [
    "Sala de estar",
    "Sala de jantar",
    "Banheiro",
    "Quarto",
  ];

  const dataUser = ["Minha conta"];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding onClick={toggleDrawer(false)}>
          <ListItemButton>
            <ListItemText primary="Home" sx={{ color: "#22a6ad" }} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <Box>
            <ListItemButton onClick={() => setOpenDropdown(!openDropdown)}>
              <ListItemText primary="Categorias" sx={{ color: "#04292a" }} />
              {openDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </Box>
        </ListItem>
        {openDropdown &&
          dropDownCategory.map((text) => (
            <ListItem key={text} onClick={toggleDrawer(false)}>
              <ListItemButton>
                <ListItemText primary={text} sx={{ color: "#04292a" }} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />
      <List>
        {dataUser.map((text, index) => (
          <ListItem key={text} disablePadding onClick={toggleDrawer(false)}>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} sx={{ color: "#04292a" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* barra do menu */}
      <Container position="fixed" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={4}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
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

      {/* drawer menu */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ margin: "15px" }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(false)}
          >
            <CloseIcon style={{ color: "#555" }} />
          </IconButton>
        </Box>

        {DrawerList}
      </Drawer>
    </>
  );
};

export default HeaderMobile;
