import {
  makeStyles,
  Theme,
  createStyles,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import {
  AccountBalance,
  AccountBalanceWallet,
  AccountBox,
  CreditCard,
  EmojiPeople,
  Home,
  HomeWork,
  LocalShipping,
  Receipt,
  ShoppingCart,
  SupervisorAccount,
  TrackChanges,
  Work,
} from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
  })
);

const BarraLateral = () => {
  const classes = useStyles();
  return (
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
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <StyledListItemText primary="Inicio" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/administracion">
          <ListItem button>
            <ListItemIcon>
              <Work />
            </ListItemIcon>
            <StyledListItemText primary="Administracion" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/monitoreo">
          <ListItem button>
            <ListItemIcon>
              <TrackChanges />
            </ListItemIcon>
            <StyledListItemText primary="Monitoreo" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/planillas">
          <ListItem button>
            <ListItemIcon>
              <EmojiPeople />
            </ListItemIcon>
            <StyledListItemText primary="Planillas" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/compras">
          <ListItem button>
            <ListItemIcon>
              <ShoppingCart />
            </ListItemIcon>
            <StyledListItemText primary="Compras" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/cuentas">
          <ListItem button>
            <ListItemIcon>
              <CreditCard />
            </ListItemIcon>
            <StyledListItemText primary="Cuentas" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/clientes">
          <ListItem button>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <StyledListItemText primary="Clientes" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/operaciones">
          <ListItem button>
            <ListItemIcon>
              <LocalShipping />
            </ListItemIcon>
            <StyledListItemText primary="Operaciones" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/financiamiento">
          <ListItem button>
            <ListItemIcon>
              <AccountBalance />
            </ListItemIcon>
            <StyledListItemText primary="Financiamiento" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/facturacion">
          <ListItem button>
            <ListItemIcon>
              <Receipt />
            </ListItemIcon>
            <StyledListItemText primary="Facturacion" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/inventario">
          <ListItem button>
            <ListItemIcon>
              <HomeWork />
            </ListItemIcon>
            <StyledListItemText primary="Inventario " />
          </ListItem>
        </StyledLink>
      </List>
      <Divider />
    </Drawer>
  );
};

export default BarraLateral;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledListItemText = styled(ListItemText)`
  color: #001744;
`;
