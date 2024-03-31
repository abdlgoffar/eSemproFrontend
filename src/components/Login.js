import { Visibility, VisibilityOff } from "@mui/icons-material";
import { StyledBtnFile, StyledForm } from "../utils/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
const { Stack, Box, Typography, Input, FormHelperText, Button, InputAdornment, IconButton, Alert } = require("@mui/material")

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    useEffect(() => {
        if (errors === true) {
            setTimeout(() => {
                setErrors(false);
            }, 5000);
        }
    }, [errors]);

    const loginSubmition = (event) => {
        event.preventDefault();

        const data = {
            "username": username,
            "password": password
        }

        axios.post("http://127.0.0.1:8000/api/users/login", data, { headers: { "Content-Type": "application/json" } })
            .then((response) => {
                localStorage.setItem("Authentication-token", response.data.data.token)
                window.location.href = `/${response.data.data.role}/main`;
            })
            .catch((error) => {
                if (error.response) {
                    //server responded but there error in request
                    setErrors(true);
                    setErrorMessages(error.response.data.errors.messages);
                } else if (error.request) {
                    //network or server error
                } else {
                    console.log(error);
                }
            });

    }


    // handle show password text
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    }
    return (
        <>
            {errors === true &&
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="error" sx={{ justifyContent: "center", alignItems: "center", position: "absolute", top: 5, left: "50%", transform: "translateX(-50%)" }}>
                    {errorMessages.map((v, i) => (
                        <Typography variant="body1" key={i}>{v}</Typography>
                    ))}
                </Alert>
            }
            <Box padding={5} sx={{ boxSizing: "border-box" }} minHeight={"100vh"} >
                <Stack flexDirection={"row"}>
                    <Stack flex={7} minHeight={"85vh"} sx={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundImage: `url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1920&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dW5pdmVyc2l0eXxlbnwwfHwwfHx8MA%3D%3D)`, display: { xs: "none", sm: "block" } }} >
                    </Stack>
                    <Stack flex={5} sx={{ background: "#eeeeee" }} padding={4}>
                        <Typography variant="h5">Selamat Datang</Typography>
                        <Typography variant="subtitle1" marginBottom={4}>Selamat datang di aplikasi pengelolaan seminar proposal Sekolah Tinggi Informatika Malang, STIKI Malang.</Typography>
                        <StyledForm onSubmit={loginSubmition} method="POST">
                            <Input onChange={(e) => setUsername(e.target.value)} value={username} type="email" aria-describedby="username-helper-text" sx={{ minWidth: "100%" }} />
                            <FormHelperText id="username-helper-text">Please type your username</FormHelperText>
                            <Input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                sx={{ minWidth: "100%" }}
                                aria-describedby="password-helper-text"
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <FormHelperText id="password-helper-text">Please type password</FormHelperText>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                sx={{ minWidth: "100%", marginTop: 6 }}
                            >
                                Login
                                <StyledBtnFile type="submit" />
                            </Button>
                        </StyledForm>
                    </Stack>
                </Stack>
            </Box>
        </>

    )
}

export default Login;