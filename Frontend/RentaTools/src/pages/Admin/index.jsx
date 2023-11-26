import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminTable from "../../components/Tables/AdminTable";
import "./styles.css";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import UsersTable from "../../components/Tables/UsersTable";
import {
  faBoxesStacked,
  faHammer,
  faList,
  faPlus,
  faToolbox,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "react-device-detect";

const Admin = () => {
  const [isShowInitialToolbox, setIsShowInitialToolbox] = useState(true);
  const [isShowProductsList, setIsShowProductsList] = useState(false);
  const [isShowUserList, setIsShowUserList] = useState(false);

  const navigate = useNavigate();

  const handleListProducts = () => {
    setIsShowUserList(false);
    setIsShowInitialToolbox(false);
    setIsShowProductsList(!isShowProductsList);
  };

  const handleListUsers = () => {
    setIsShowProductsList(false);
    setIsShowInitialToolbox(false);
    setIsShowUserList(!isShowUserList);
  };

  const adminButtons = [
    {
      name: "Agregar producto",
      function: () => navigate("/admin/register"),
      icon: <FontAwesomeIcon icon={faPlus} />,
    },
    {
      name: "Administrar categorías",
      function: () => navigate("/admin/categories"),
      icon: <FontAwesomeIcon icon={faBoxesStacked} />,
    },
    {
      name: "Administrar características",
      function: () => navigate("/admin/features"),
      icon: <FontAwesomeIcon icon={faList} />,
    },
    {
      name: "Listar productos",
      function: handleListProducts,
      icon: <FontAwesomeIcon icon={faHammer} />,
    },
    {
      name: "Listar usuarios",
      function: handleListUsers,
      icon: <FontAwesomeIcon icon={faUser} />,
    },
  ];

  const drawerWidth = 240;

  if (isMobile) {
    return (
      <div className="body admin-container">
        <div>
        <button className="buttonBack" onClick={() => window.history.back()}>
          Volver Atras
        </button>{" "}
        </div>
        
        <h1>por favor conectese desde una pc</h1>
      </div>
    );
  } else {
    return (
      <div className="body admin-container">
        <Box className="admin-box">
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{
              width: `calc(100% - ${drawerWidth}px)`,
              ml: `${drawerWidth}px`,
            }}
          ></AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
            variant="permanent"
            anchor="left"
            className="admin-toolbar"
          >
            <Toolbar />
            <Divider />
            <List className="admin-buttons">
              {adminButtons.map((button, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={button.function}>
                    <ListItemIcon className="admin-icon">
                      {button.icon}
                    </ListItemIcon>
                    <ListItemText primary={button.name} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider />
          </Drawer>
          <Box
            component="main"
            className="admin-table-show"
            sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
          >
            {isShowProductsList ? (
              <div className="admin-table-container">
                <AdminTable />
              </div>
            ) : (
              ""
            )}
            {isShowUserList ? (
              <div className="admin-table-container">
                <UsersTable />
              </div>
            ) : (
              ""
            )}
            {isShowInitialToolbox ? (
              <div className="admin-toolbox">
                <FontAwesomeIcon icon={faToolbox} size="2xl" />
                <h2>Bienvenido, admin!</h2>
                <h3>Para iniciar, por favor elegí una opción del menú</h3>
              </div>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </div>
    );
  }
};

export default Admin;