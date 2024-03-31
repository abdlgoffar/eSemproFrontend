




import { examinerNavigationConstant, examinerSidebarConstant } from "../utils/constants";
import { Box, Button, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Item, ItemChild, StyledSkin } from "../utils/styled";
import InvitedIcon from '@mui/icons-material/ContactMail';


const Content = () => {
    return (
        <Box>
            <Typography marginBottom={2}>Daftar Seminar Dosen Penguji:</Typography>
            <StyledSkin>
                <Stack direction={"row"} alignItems={"normal"} justifyContent={"start"}>
                    <Item sx={{ marginRight: 2 }} elevation={0}>
                        <InvitedIcon sx={{ fontSize: "6rem" }} />
                    </Item>
                    <Item sx={{ textAlign: "start" }} elevation={0}>
                        <Typography variant="subtitle1" fontSize={"2rem"}>Undangan Seminar</Typography>
                        <Typography variant="h6" fontSize={"0.9rem"}>Anita.Skom</Typography>
                        <Stack direction={"row"} alignItems={"normal"} justifyContent={"space-between"}>
                            <ItemChild sx={{ textAlign: "start" }} elevation={0}>
                                <Typography variant="subtitle1" fontSize={"0.6rem"}>Date: 01-12-2024</Typography>
                                <Typography variant="subtitle1" fontSize={"0.6rem"}>Jam: 08-selesai</Typography>
                                <Typography variant="subtitle1" fontSize={"0.6rem"}>Kelas: B.2.1</Typography>
                            </ItemChild>
                            <ItemChild sx={{ display: "flex", alignItems: "center" }}>
                                <Button variant="outlined">PRESENSI</Button>
                            </ItemChild>
                        </Stack>
                    </Item>
                </Stack>
            </StyledSkin>
        </Box>
    )
};


const ExaminerSeminar = () => {
    return (
        <Box>
            <Navigation data={examinerNavigationConstant()} />
            <Stack direction="row" justifyContent="space-between">
                <Sidebar data={examinerSidebarConstant()} />
                <Feed>
                    <Content />
                </Feed>
            </Stack>
        </Box>
    );
};

export default ExaminerSeminar;