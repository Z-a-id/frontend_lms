import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    Tooltip,
    MenuItem,
    Paper,
} from "@mui/material";
import { useUser } from "../../context/user-context";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import AdbIcon from "@mui/icons-material/Adb";
import { BooksList } from "../books-list/books-list";
import { LoginDialog } from "../login/login-dialog";
import { BookForm } from "../book-form/book-form";
import { Book } from "../book/book";
import { WithLoginProtector } from "../access-control/login-protector";
import { WithAdminProtector } from "../access-control/admin-protector";

export const AppLayout = () => {
    const [openLoginDialog, setOpenLoginDialog] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const { user, loginUser, logoutUser, isAdmin } = useUser();
    const navigate = useNavigate();

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleLoginSubmit = (username, password) => {
        loginUser(username, password);
        setOpenLoginDialog(false);
    };

    const handleLoginClose = () => {
        setOpenLoginDialog(false);
    };

    const handleLogout = () => {
        logoutUser();
        handleCloseUserMenu();
    };

    useEffect(() => {
        if (!user) {
            navigate("/");
        } else if (isAdmin) {
            navigate("/admin/books/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isAdmin]);

    const backgroundStyles = {
        backgroundImage: `url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        borderRadius: "12px",
    };

    return (
        <Box sx={{ ...backgroundStyles, display: "flex", flexDirection: "column" }}>
            {/* AppBar */}
            <AppBar
                position="static"
                sx={{
                    backgroundColor: "#635147", // Umber
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                    borderRadius: "12px",
                    margin: "0px",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* <AdbIcon sx={{ display: "flex", mr: 2, fontSize: "2rem" }} /> */
                        <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 24 24" width="40" ><path d="M0 0h24v24H0z" fill="none"/><path d="M12 11.55C9.64 9.35 6.48 8 3 8v11c3.48 0 6.64 1.35 9 3.55 2.36-2.19 5.52-3.55 9-3.55V8c-3.48 0-6.64 1.35-9 3.55zM12 8c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3z"/></svg>}
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                flexGrow: 1,
                            }}
                        >
                            <Typography
                                variant="h5"
                                noWrap
                                sx={{
                                    fontFamily: "monospace",
                                    fontWeight: 700,
                                    letterSpacing: ".3rem",
                                    color: "#F5F5F5",
                                    textTransform: "uppercase",
                                }}
                            >
                                Library Management
                            </Typography>
                        </Link>
                        <Box sx={{ flexGrow: 0 }}>
                            {user ? (
                                <>
                                    <Tooltip title="Open settings">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{
                                                p: 0,
                                                border: "2px solid #F5F5F5",
                                                transition: "all 0.3s ease",
                                                "&:hover": { borderColor: "#FF7043" },
                                            }}
                                        >
                                            <Avatar
                                                sx={{
                                                    bgcolor: "#FF7043",
                                                    color: "white",
                                                }}
                                            >
                                                {user.username.charAt(0).toUpperCase()}
                                            </Avatar>
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: "45px" }}
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
                                        <MenuItem onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">Dashboard</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleLogout}>
                                            <Typography textAlign="center">Logout</Typography>
                                        </MenuItem>
                                    </Menu>
                                </>
                            ) : (
                                <Button
                                    onClick={() => setOpenLoginDialog(true)}
                                    sx={{
                                        color: "white",
                                        bgcolor: "#D1B78C", // Khaki
                                        "&:hover": { bgcolor: "#BBA57A" },
                                    }}
                                >
                                    Login
                                </Button>
                            )}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Main Content */}
            <Container
                maxWidth="lg"
                sx={{
                    mt: 4,
                    mb: 4,
                    p: 3,
                    background: "rgba(255, 255, 255, 0.85)",
                    borderRadius: "16px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
                }}
            >
                <Routes>
                    <Route path="/books" exact element={<BooksList />} />
                    <Route
                        path="/books/:bookIsbn"
                        element={
                            <WithLoginProtector>
                                <Book />
                            </WithLoginProtector>
                        }
                    />
                    <Route
                        path="/admin/books/add"
                        element={
                            <WithLoginProtector>
                                <WithAdminProtector>
                                    <BookForm />
                                </WithAdminProtector>
                            </WithLoginProtector>
                        }
                        exact
                    />
                    <Route
                        path="/admin/books/:bookIsbn/edit"
                        element={
                            <WithLoginProtector>
                                <WithAdminProtector>
                                    <BookForm />
                                </WithAdminProtector>
                            </WithLoginProtector>
                        }
                    />
                    <Route path="*" element={<Navigate to="/books" replace />} />
                </Routes>
            </Container>

            {/* Footer */}
            <Paper
                elevation={3}
                sx={{
                    textAlign: "center",
                    py: 2,
                    backgroundColor: "#635147", // Umber
                    color: "#F5F5F5",
                    borderRadius: "12px",
                    margin: "0px",
                }}
            >
                <Typography variant="body1">@Made by Zaid</Typography>
            </Paper>

            <LoginDialog
                open={openLoginDialog}
                handleSubmit={handleLoginSubmit}
                handleClose={handleLoginClose}
            />
        </Box>
    );
};
