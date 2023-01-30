import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CellFormModalButton from "../Cell/CellFormModalButton/CellFormModalButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const pages = [<CellFormModalButton />];
const settings = ["Профиль", "Мои списки", "Настройки", "Выход"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const companyName = "Шмелло";
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* LOGO */}
        <Typography flexGrow={1} variant="h4">
          {companyName}
        </Typography>
        {/* Desktop menu */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Box key={page}>{page}</Box>
          ))}
        </Box>
        {/* User panel */}
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu}>
            <Avatar
              alt="Remy Sharp"
              src="https://sun9-80.userapi.com/s/v1/ig2/p5rxj4wWBO8pbC8xVOnETctryU-ybfjCCCqMaJ_-SZkXEQ7TZGeHOlpe_qNwYnTZaDUAr-HozgWZDa8q2ny9Zsuj.jpg?size=271x271&quality=96&crop=34,34,271,271&ava=1"
            />
          </IconButton>
        </Tooltip>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>{" "}
        {/* Mobile menu */}
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <Box key={page} onClick={handleCloseNavMenu}>
                {page}
              </Box>
            ))}
          </Menu>
        </Box>{" "}
      </Toolbar>
    </AppBar>
  );
}
export default Header;
