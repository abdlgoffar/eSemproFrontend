import { Box, Grid, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

import { academicAdministrationNavigationConstant, academicAdministrationSidebarConstant } from "../utils/constants";
import { StyledSkinUserManagerList } from "../utils/styled";
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Content = () => {
    return (
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <StyledSkinUserManagerList >
                        <ManageAccountsIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant="caption">Student</Typography>
                        <Typography variant="caption" marginRight={1} fontSize={"0.8rem"}>120</Typography>
                    </StyledSkinUserManagerList>
                </Grid>
                <Grid item xs={6}>
                    <StyledSkinUserManagerList>
                        <ManageAccountsIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant="caption">Academic Administration</Typography>
                        <Typography variant="caption" marginRight={1} fontSize={"0.8rem"}>4</Typography>
                    </StyledSkinUserManagerList>
                </Grid>
                <Grid item xs={6}>
                    <StyledSkinUserManagerList>
                        <ManageAccountsIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant="caption">Coordinator</Typography>
                        <Typography variant="caption" marginRight={1} fontSize={"0.8rem"}>6</Typography>
                    </StyledSkinUserManagerList>
                </Grid>
                <Grid item xs={6}>
                    <StyledSkinUserManagerList>
                        <ManageAccountsIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant="caption">Examiner</Typography>
                        <Typography variant="caption" marginRight={1} fontSize={"0.8rem"}>15</Typography>
                    </StyledSkinUserManagerList>
                </Grid>
                <Grid item xs={6}>
                    <StyledSkinUserManagerList>
                        <ManageAccountsIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant="caption">Head Study</Typography>
                        <Typography variant="caption" marginRight={1} fontSize={"0.8rem"}>4</Typography>
                    </StyledSkinUserManagerList>
                </Grid>
                <Grid item xs={6}>
                    <StyledSkinUserManagerList>
                        <ManageAccountsIcon sx={{ fontSize: "2.5rem" }} />
                        <Typography variant="caption">Supervisor</Typography>
                        <Typography variant="caption" marginRight={1} fontSize={"0.8rem"}>23</Typography>
                    </StyledSkinUserManagerList>
                </Grid>
            </Grid>
        </Box>
    )
};


const AcademicAdministrationUserManager = () => {
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
};

export default AcademicAdministrationUserManager;