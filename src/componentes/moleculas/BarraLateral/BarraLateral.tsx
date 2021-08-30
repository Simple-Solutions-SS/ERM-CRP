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
  AccountBox,
  CreditCard,
  EmojiPeople,
  Home,
  HomeWork,
  LocalShipping,
  Money,
  Receipt,
  ShoppingCart,
  TrackChanges,
  Work,
  Event,
  Notes,
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
              <Event />
            </ListItemIcon>
            <StyledListItemText primary="Catálogo de Cuentas" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/asientos">
          <ListItem button>
            <ListItemIcon>
              <Notes />
            </ListItemIcon>
            <StyledListItemText primary="Asientos" />
          </ListItem>
        </StyledLink>
        <StyledLink to="/calendario-gastos">
          <ListItem button>
            <ListItemIcon>
              <CreditCard />
            </ListItemIcon>
            <StyledListItemText primary="Calendario Gastos" />
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
        <StyledLink to="/estados-financieros">
          <ListItem button>
            <ListItemIcon>
              <Money />
            </ListItemIcon>
            <StyledListItemText primary="Estados Financieros " />
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
