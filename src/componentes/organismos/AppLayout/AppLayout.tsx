import React from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

import { ContactsOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import styled from "@emotion/styled";
import LogoSelca from "../../../assets/LogoSelca.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  })
);

export const AppLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={LogoSelca} style={{ width: "136px", height: "68px" }} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <StyledLink to="/">
            <ListItem button>
              <StyledListItemText primary="Inicio" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/administracion">
            <ListItem button>
              <StyledListItemText primary="Administracion" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/monitoreo">
            <ListItem button>
              <StyledListItemText primary="Monitoreo" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/planillas">
            <ListItem button>
              <StyledListItemText primary="Planillas" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/compras">
            <ListItem button>
              <StyledListItemText primary="Compras" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/cuentas">
            <ListItem button>
              <StyledListItemText primary="Cuentas" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/clientes">
            <ListItem button>
              {/* <ListItemIcon>
                <ContactsOutlined />
              </ListItemIcon> */}
              <StyledListItemText primary="Clientes" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/operaciones">
            <ListItem button>
              <StyledListItemText primary="Operaciones" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/financiamiento">
            <ListItem button>
              <StyledListItemText primary="Financiamiento" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/facturacion">
            <ListItem button>
              <StyledListItemText primary="Facturacion" />
            </ListItem>
          </StyledLink>
          <StyledLink to="/inventario">
            <ListItem button>
              <StyledListItemText primary="Inventario " />
            </ListItem>
          </StyledLink>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledListItemText = styled(ListItemText)`
  color: #001744;
`;
