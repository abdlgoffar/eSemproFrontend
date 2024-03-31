import { Box, Button, FormHelperText, IconButton, Input, InputAdornment, MenuItem, Modal, Popper, Select, Stack, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Typography } from "@mui/material";
import { academicAdministrationNavigationConstant, academicAdministrationSidebarConstant } from "../utils/constants";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { StyledBtnFile, StyledForm, StyledTableSkin, StyledTabsSkin } from "../utils/styled";

import PropTypes from 'prop-types';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from "react";




import { Visibility, VisibilityOff } from "@mui/icons-material";

function createData(no, name, address, phone) {
    return { no, name, address, phone };
}

const rows = [
    createData(1, "Abd. goffar", "jl. jaksa agung suprapto", "082131876127"),
    createData(2, "Abd. goffar", "jl. jaksa agung suprapto", "082131876127"),
    createData(3, "Abd. goffar", "jl. jaksa agung suprapto", "082131876127"),
    createData(4, "Abd. goffar", "jl. jaksa agung suprapto", "082131876127"),
    createData(5, "Abd. goffar", "jl. jaksa agung suprapto", "082131876127"),
    createData(6, "Abd. goffar", "jl. jaksa agung suprapto", "082131876127"),
    createData(7, "Abd. goffar", "jl. jaksa agung suprapto", "082131876127"),
];

// tabs component method required
function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
            style={{ background: "" }}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Content = () => {
    // css
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    // popper component variable 
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    // tabs component variable
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // password input variable

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    // modal variable

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);


    return (
        <Box>
            <StyledTableSkin sx={{ margin: "auto" }}>
                <TableContainer component={"div"}>
                    <Table aria-label="simple table">
                        <TableHead sx={{ backgroundColor: "#cfd8dc" }}>
                            <TableRow>
                                <TableCell>NO.</TableCell>
                                <TableCell width={100} align="center">Name</TableCell>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Phone</TableCell>
                                <TableCell align="center">Setting</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ backgroundColor: "#eceff1" }}>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.no}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell sx={{ fontSize: "0.8rem" }} component="th" scope="row">
                                        {row.no}
                                    </TableCell>
                                    <TableCell width={100} sx={{ fontSize: "0.8rem" }} align="left">{row.name}</TableCell>
                                    <TableCell sx={{ fontSize: "0.8rem" }} align="left">{row.address}</TableCell>
                                    <TableCell sx={{ fontSize: "0.8rem" }} align="left">{row.phone}</TableCell>
                                    <TableCell sx={{ fontSize: "0.8rem" }} align="left">
                                        <IconButton aria-describedby={id} size="small" type="button" onClick={handleClick}>
                                            <SettingsIcon fontSize="inherit" />
                                        </IconButton>
                                        <Popper id={id} open={open} anchorEl={anchorEl}>
                                            <Box sx={{ border: "0.5px solid #CFD8DC", p: 1, bgcolor: 'background.paper' }}>
                                                <Typography sx={{ cursor: "pointer" }} color={"green"} fontSize={"0.7rem"} onClick={handleOpen2}>Update</Typography>
                                                <Typography sx={{ cursor: "pointer" }} color={"red"} fontSize={"0.7rem"}>Delete</Typography>
                                            </Box>
                                        </Popper>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledTableSkin>


            <StyledTabsSkin sx={{ marginTop: 2 }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons>
                    <Tab sx={{ fontSize: "0.8rem" }} label="Student" {...a11yProps(0)} />
                    <Tab sx={{ fontSize: "0.8rem" }} label="Supervisor" {...a11yProps(1)} />
                    <Tab sx={{ fontSize: "0.8rem" }} label="Coordinator" {...a11yProps(2)} />
                    <Tab sx={{ fontSize: "0.8rem" }} label="Examiner" {...a11yProps(3)} />
                    <Tab sx={{ fontSize: "0.8rem" }} label="Head Study Program" {...a11yProps(4)} />
                </Tabs>
            </StyledTabsSkin>
            <CustomTabPanel value={value} index={0} >
                <StyledForm>
                    <Input aria-describedby="username-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="username-helper-text">Please type username</FormHelperText>

                    <Input
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

                    <Input aria-describedby="address-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="address-helper-text">Please type address</FormHelperText>

                    <Input aria-describedby="name-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="name-helper-text">Please type name</FormHelperText>

                    <Input aria-describedby="phone-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="phone-helper-text">Please type phone</FormHelperText>

                    <Input aria-describedby="nrp-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="nrp-helper-text">Please type nrp</FormHelperText>

                    <Typography marginTop={3} marginLeft={2} sx={{ fontSize: "0.8rem" }} variant="body2">Prodi</Typography>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"
                        sx={{ height: "45px", minWidth: "100%" }}
                    >
                        <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                        <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                        <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                    </Select>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{ minWidth: "100%", marginTop: 1 }}
                    >
                        CONFIRMATION
                        <StyledBtnFile type="submit" />
                    </Button>
                </StyledForm>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <StyledForm>
                    <Input aria-describedby="username-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="username-helper-text">Please type username</FormHelperText>

                    <Input
                        sx={{ minWidth: "100%" }}
                        aria-describedby="username-helper-text"
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
                    <FormHelperText id="username-helper-text">Please type password</FormHelperText>

                    <Input aria-describedby="address-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="address-helper-text">Please type address</FormHelperText>

                    <Input aria-describedby="name-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="name-helper-text">Please type name</FormHelperText>

                    <Input aria-describedby="phone-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="phone-helper-text">Please type phone</FormHelperText>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{ minWidth: "100%", marginTop: 1 }}
                    >
                        CONFIRMATION
                        <StyledBtnFile type="submit" />
                    </Button>
                </StyledForm>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <StyledForm>
                    <Input aria-describedby="username-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="username-helper-text">Please type username</FormHelperText>

                    <Input
                        sx={{ minWidth: "100%" }}
                        aria-describedby="username-helper-text"
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
                    <FormHelperText id="username-helper-text">Please type password</FormHelperText>

                    <Input aria-describedby="address-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="address-helper-text">Please type address</FormHelperText>

                    <Input aria-describedby="name-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="name-helper-text">Please type name</FormHelperText>

                    <Input aria-describedby="phone-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="phone-helper-text">Please type phone</FormHelperText>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{ minWidth: "100%", marginTop: 1 }}
                    >
                        CONFIRMATION
                        <StyledBtnFile type="submit" />
                    </Button>
                </StyledForm>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <fStyledFormorm>
                    <Input aria-describedby="username-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="username-helper-text">Please type username</FormHelperText>

                    <Input
                        sx={{ minWidth: "100%" }}
                        aria-describedby="username-helper-text"
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
                    <FormHelperText id="username-helper-text">Please type password</FormHelperText>

                    <Input aria-describedby="address-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="address-helper-text">Please type address</FormHelperText>

                    <Input aria-describedby="name-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="name-helper-text">Please type name</FormHelperText>

                    <Input aria-describedby="phone-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="phone-helper-text">Please type phone</FormHelperText>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{ minWidth: "100%", marginTop: 1 }}
                    >
                        CONFIRMATION
                        <StyledBtnFile type="submit" />
                    </Button>
                </fStyledFormorm>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <StyledForm>
                    <Input aria-describedby="username-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="username-helper-text">Please type username</FormHelperText>

                    <Input
                        sx={{ minWidth: "100%" }}
                        aria-describedby="username-helper-text"
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
                    <FormHelperText id="username-helper-text">Please type password</FormHelperText>

                    <Input aria-describedby="address-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="address-helper-text">Please type address</FormHelperText>

                    <Input aria-describedby="name-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="name-helper-text">Please type name</FormHelperText>

                    <Input aria-describedby="phone-helper-text" sx={{ minWidth: "100%" }} />
                    <FormHelperText id="phone-helper-text">Please type phone</FormHelperText>

                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        sx={{ minWidth: "100%", marginTop: 1 }}
                    >
                        CONFIRMATION
                        <StyledBtnFile type="submit" />
                    </Button>
                </StyledForm>
            </CustomTabPanel>

            <Modal
                open={open2}
                onClose={handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Box>


    );
}







const AcademicAdministrationUserManagerSetting = () => {
    return (
        <Box>
            <Navigation data={academicAdministrationNavigationConstant()} />
            <Stack direction="row" justifyContent="space-between">
                <Sidebar data={academicAdministrationSidebarConstant()} />
                <Feed>
                    <Content />
                </Feed>
            </Stack>
        </Box>
    );

}

export default AcademicAdministrationUserManagerSetting;