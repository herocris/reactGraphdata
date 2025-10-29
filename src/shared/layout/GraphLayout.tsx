import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ReactNode, useState } from 'react';
import { IconButton, styled } from '@mui/material';
import { AccountCircle, Logout, Person, RecentActors, Map, ContactEmergency, SignalCellularAlt, Inventory2, FormatListBulleted, HomeRepairServiceOutlined, Vaccines, AllInbox, Category } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { RootState } from '../../store';
import { startLogout } from '../../modules/auth/thunks';
import { useNavigate, useLocation } from 'react-router';
import { useThemeContext } from '../../theme/ThemeContext';
import { Brightness4, Brightness7 } from "@mui/icons-material";




const drawerWidth = 240;

interface GrapLayoutProps {
    children: ReactNode;
    title?: string;
    window?: () => Window;
}

export const GrapLayout = ({ children, title = '', window }: GrapLayoutProps) => {
    const { pathname } = useLocation();
    const { user } = useAppSelector((state: RootState) => state.auth);
    const dispatch = useAppDispatch();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const { mode, toggleMode } = useThemeContext();//para modo oscuro

    const onLogout = () => {
        dispatch(startLogout());
    }
    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const navigate = useNavigate();
    const authMenuOptions = [
        { name: 'Users', url: '/user', icon: <Person /> },
        { name: 'Roles', url: '/rol', icon: <RecentActors /> },
        { name: 'Permission', url: '/permiso', icon: <ContactEmergency /> },
        { name: 'Activities', url: '/actividad', icon: <FormatListBulleted /> }
    ]
    const menuOptions = [
        { name: 'Ammunitions', url: '/ammunition', icon: <HomeRepairServiceOutlined /> },
        { name: 'Drug', url: '/drug', icon: <Vaccines /> },
        { name: 'Weapon', url: '/weapon', icon: <AllInbox /> },
        { name: 'DrugPresentations', url: '/drugPresentation', icon: <Category /> },
        { name: 'Confiscations', url: '/confiscation', icon: <Inventory2 /> },

    ]
    const displayMenuOptions = [
        { name: 'Graphs', url: '/graph', icon: <SignalCellularAlt /> },
        { name: 'Map', url: '/map', icon: <Map /> },


    ]

    const drawer = (
        <div>


            <Toolbar><AccountCircle sx={{ marginRight: '10px' }} fontSize="large" />{user.name}</Toolbar>
            <Divider />
            <List>
                {authMenuOptions.map((opt, index) => (
                    <ListItem key={index} disablePadding >
                        <ListItemButton onClick={() => navigate(opt.url)} selected={pathname == opt.url}>
                            <ListItemIcon>
                                {opt.icon}
                            </ListItemIcon>
                            <ListItemText primary={opt.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {menuOptions.map((opt, index) => (
                    <ListItem key={index} disablePadding >
                        <ListItemButton onClick={() => navigate(opt.url)} selected={pathname == opt.url}>
                            <ListItemIcon>
                                {opt.icon}
                            </ListItemIcon>
                            <ListItemText primary={opt.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {displayMenuOptions.map((opt, index) => (
                    <ListItem key={index} disablePadding >
                        <ListItemButton onClick={() => navigate(opt.url)} selected={pathname == opt.url}>
                            <ListItemIcon>
                                {opt.icon}
                            </ListItemIcon>
                            <ListItemText primary={opt.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Responsive drawer
                    </Typography>
                    <IconButton
                        sx={{ ml: 1 }}
                        onClick={toggleMode}
                        color="inherit"
                    >
                        {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={onLogout}
                    >
                        <Logout />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    slotProps={{
                        root: {
                            keepMounted: true, // Better open performance on mobile.
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                //sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                sx={{ flexGrow: 1, p: 3, width: '100%' }}
            >
                <DrawerHeader />
                {children}
                {title}
            </Box>
        </Box>
    );
}
