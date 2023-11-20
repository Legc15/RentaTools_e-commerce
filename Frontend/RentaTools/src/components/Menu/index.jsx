import * as React from 'react';
import { Link } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import EngineeringIcon from '@mui/icons-material/Engineering';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { isAdmin } from '../../utils/localStorageHandler';



const StyledMenu = styled((props) => (
    <Menu
        elevation={0}

        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 10,
        marginTop: theme.spacing(0.5),
        minWidth: 180,
        color:
            theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 16,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(
                    theme.palette.primary.main,
                    theme.palette.action.selectedOpacity,
                ),
            },
        },
    },
}));

// eslint-disable-next-line react/prop-types
export default function CustomizedMenus({ handleLogOut }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                size="small"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
                style={{
                    backgroundColor: 'black',
                    borderRadius: '15px',
                    fontWeight: 'bold',
                    fontSize: '0.8rem',
                    padding: '0.3rem 0.8rem',
                }}
            >
                MENU
            </Button>
            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                    <Link to="/favorites" style={{ color: 'rgb(55, 65, 81)', fontFamily: '', fontSize: '1rem' }}>
                        <FavoriteIcon />
                        Mis Favoritos
                    </Link>
                </MenuItem>

                { isAdmin()? 
                <MenuItem onClick={handleClose} disableRipple>
                    <Link to="/admin" style={{ color: 'rgb(55, 65, 81)', fontFamily: '', fontSize: '1rem' }}>
                        <EngineeringIcon />
                        Panel de Administración
                    </Link>
                </MenuItem> 
                : ""
                }
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleLogOut} disableRipple>
                    <LogoutIcon />
                    Cerrar Sesión
                </MenuItem>                
            </StyledMenu>
        </div>
    );
}

