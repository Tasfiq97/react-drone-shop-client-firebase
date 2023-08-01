import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Payment from "../Payment/Payment";
import MyOrders from "../MyOrders/MyOrders";
import Reviews from "../Reviews/Reviews";
import DashboardMain from "../DashboardMain/DashboardMain";
import useAuth from "../../../Hooks/useAuth";
import { Button, ListItemButton } from "@mui/material";
import MakeAdmin from "../DashboardMain/MakeAdmin/MakeAdmin";
import AddProduct from "../DashboardMain/AddProduct/AddProduct";
import ManageOrder from "../DashboardMain/manageOrders/ManageOrder";
import ManageProducts from "../ManageProducts/ManageProducts";

const drawerWidth = 240;

function DashboardHome(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isAdmin } = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const { user, logout } = useAuth();
  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Box sx={{ padding: "0px", lineHeight: "50px", textAlign: "center" }}>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Link
                to="/moreDrones"
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                  fontWeight: "700",
                }}
              >
                Drones
              </Link>{" "}
            </ListItemIcon>
            <ListItemText />
          </ListItemButton>
        </ListItem>
        {!isAdmin ? (
          <Box>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ textAlign: "center" }}>
                  <Link
                    to={`${url}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    dashboard
                  </Link>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ textAlign: "center" }}>
                  <Link
                    to={`${url}/myOrders`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    My orders
                  </Link>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>

            {/* <Link
              to={`${url}/reviews`}
              style={{
                textDecoration: "none",
                color: "white",
                backgroundColor: "black",
                padding: "10px",
              }}
            >
              Review
            </Link> */}
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ textAlign: "center" }}>
                  <Link
                    to={`${url}/reviews`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    Review
                  </Link>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Box>
        ) : (
          <Box>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ textAlign: "center" }}>
                  <Link
                    to={`${url}/admin`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    Make admin
                  </Link>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ textAlign: "center" }}>
                  <Link
                    to={`${url}/manageOrder`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    Manage orders
                  </Link>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ textAlign: "center" }}>
                  <Link
                    to={`${url}/manageProducts`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    Manage products
                  </Link>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon style={{ textAlign: "center" }}>
                  <Link
                    to={`${url}/addProducts`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "700",
                    }}
                  >
                    Add a product
                  </Link>
                </ListItemIcon>
                <ListItemText />
              </ListItemButton>
            </ListItem>
          </Box>
        )}
        {user?.email && (
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "black",
              padding: "10px",
            }}
          >
            <Button onClick={logout} variant="text" sx={{ color: "white" }}>
              Logout
            </Button>
          </Link>
        )}
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Your Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />

        <Switch>
          <Route exact path={path}>
            {!isAdmin ? (
              <DashboardMain></DashboardMain>
            ) : (
              <MakeAdmin></MakeAdmin>
            )}
          </Route>
          <Route path={`${path}/pay`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews></Reviews>
          </Route>
          <Route path={`${path}/admin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/addProducts`}>
            <AddProduct></AddProduct>
          </Route>
          <Route path={`${path}/manageOrder`}>
            <ManageOrder></ManageOrder>
          </Route>
          <Route path={`${path}/manageProducts`}>
            <ManageProducts></ManageProducts>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

export default DashboardHome;
