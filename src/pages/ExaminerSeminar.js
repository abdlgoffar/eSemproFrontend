




import { examinerNavigationConstant, examinerSidebarConstant } from "../utils/constants";
import { Box, Button, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Item, ItemChild, StyledSkin } from "../utils/styled";
import InvitedIcon from '@mui/icons-material/ContactMail';
import axios from "axios";
import { useEffect, useState } from "react";


const Content = () => {

    const [invitations, setInvitations] = useState([])
    const [examiner, setExaminer] = useState()

    useEffect(() => {
        const getExaminerInvitations = async () => {
            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get("http://127.0.0.1:8000/api/examiners/invitations/current", {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                console.log(response.data);
                setExaminer(response.data.name);
                setInvitations(response.data.invitations);
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                } else if (error.request) {
                    console.log("The request was made but no response was received");
                } else {
                    console.log('Error', error.message);
                }
            }
        };

        getExaminerInvitations();
    }, []);

    return (
        <Box>
            <Typography marginBottom={2}>Daftar Seminar Dosen Penguji:</Typography>
            {
                invitations.map((v, i) => (
                    <StyledSkin key={i}>
                        <Stack direction={"row"} alignItems={"normal"} justifyContent={"start"}>
                            <Item sx={{ marginRight: 2 }} elevation={0}>
                                <InvitedIcon sx={{ fontSize: "6rem" }} />
                            </Item>
                            <Item sx={{ textAlign: "start" }} elevation={0}>
                                <Typography variant="subtitle1" fontSize={"2rem"}>Undangan Seminar</Typography>
                                <Typography variant="h6" fontSize={"0.9rem"}>Kepada: {examiner}</Typography>
                                <Stack direction={"row"} alignItems={"normal"} justifyContent={"space-between"}>
                                    <ItemChild sx={{ textAlign: "start" }} elevation={0}>
                                        <Typography variant="subtitle1" fontSize={"0.6rem"}>Tanggal pelaksanaan: {v.implementation_date}</Typography>
                                        <Typography variant="subtitle1" fontSize={"0.6rem"}>Jam: {v.implementation_hours}-selesai</Typography>
                                        <Typography variant="subtitle1" fontSize={"0.6rem"}>Kelas: B.2.1</Typography>
                                    </ItemChild>
                                    <ItemChild sx={{ display: "flex", alignItems: "center" }}>
                                        <Button variant="outlined">PRESENSI</Button>
                                    </ItemChild>
                                </Stack>
                            </Item>
                        </Stack>
                    </StyledSkin>
                ))
            }

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