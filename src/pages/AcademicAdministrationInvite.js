import { Box, Button, FormHelperText, Input, MenuItem, Select, Stack, Typography } from "@mui/material";
import { academicAdministrationNavigationConstant, academicAdministrationSidebarConstant } from "../utils/constants";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Item, StyledBtnFile, StyledForm, StyledItemProposalInvite, StyledItemProposalInviteInput, StyledItemProposalInviteLabel, StyledProposalInviteSelect, StyledSkinListProposalInvite } from "../utils/styled";

import ArticleIcon from '@mui/icons-material/Article';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { useEffect, useState } from "react";
import PortraitIcon from '@mui/icons-material/Portrait';
import axios from "axios";
const Content = () => {

    const [selectedItems, setSelectedItems] = useState([]);
    const [number, setNumber] = useState("");
    const [date, setDate] = useState("");
    const [hour, setHour] = useState("");
    const [pdf, setPdf] = useState(null);
    const [coordinatorId, setCoordinatorId] = useState();
    const [coordinators, setCoordinators] = useState([]);
    const [students, setStudents] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;

        if (checked) {
            //add array if checkbox checked
            setSelectedItems([...selectedItems, value]);
        } else {
            //delete array checkbox data if not checked
            setSelectedItems(selectedItems.filter(item => item !== value));
        }
    };

    const invitationSubmition = (event) => {
        event.preventDefault();

        console.log(selectedItems);
        const formPdf = new FormData();
        formPdf.append("invitation_doc", pdf);

        const invitationData = {

        }
        async function createInvitation() {
        }
    }

    useEffect(() => {
        const getStudentHaveExaminer = async () => {
            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get("http://127.0.0.1:8000/api/students/examiners/all", {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setStudents(response.data);
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

        getStudentHaveExaminer();
    }, []);


    useEffect(() => {
        const fetchCoordinators = async () => {
            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get("http://127.0.0.1:8000/api/coordinators/get", {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setCoordinators(response.data.data);
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

        fetchCoordinators();
    }, []); // Dependency array remains empty to mimic componentDidMount
    return (
        <Box>
            <StyledForm onSubmit={invitationSubmition}>
                <Typography variant="caption">Number: </Typography>
                <Input sx={{ minWidth: "100%" }} onChange={e => setNumber(e.target.value)} />
                <StyledSkinListProposalInvite sx={{ marginTop: 3 }}>
                    <StyledProposalInviteSelect>
                        <Typography variant="body2">Prodi</Typography>
                        <Select
                            sx={{ minWidth: "100%", height: "30px" }}
                        >
                            <MenuItem>Sistem Informasi S1</MenuItem>
                            <MenuItem>Sistem informasi D3</MenuItem>
                            <MenuItem>Desain Komunikasi Visual</MenuItem>
                            <MenuItem>Teknik Informatika</MenuItem>
                        </Select>
                    </StyledProposalInviteSelect>
                    {
                        students.map((v, i) => (
                            <StyledItemProposalInvite key={i}>
                                <StyledItemProposalInviteLabel htmlFor={`${v.id}`}><PortraitIcon sx={{ marginRight: 1 }} />{v.name}</StyledItemProposalInviteLabel>
                                <StyledItemProposalInviteInput type="checkbox" id={`${v.id}`} value={`${v.id}`} checked={selectedItems.includes(`${v.id}`)} onChange={handleChange} />
                            </StyledItemProposalInvite>
                        ))
                    }

                </StyledSkinListProposalInvite>
                <Typography marginTop={1} variant="body2">Coordinator</Typography>
                <Select
                    defaultValue={""}
                    onChange={e => setCoordinatorId(e.target.value)}
                    sx={{ minWidth: "100%", height: "30px" }}
                >
                    {
                        coordinators.map((v, i) => (
                            <MenuItem key={i} value={v.id}>{v.name}</MenuItem>
                        ))
                    }
                </Select>
                <Stack direction={"row"} marginTop={2} alignItems={"center"} justifyContent={"start"}>
                    <Item sx={{ marginRight: 1, maxHeight: "50px" }}>
                        <Input aria-describedby="date-helper-text" sx={{ minWidth: "100%", maxHeight: "50px" }} type={"date"} onChange={e => setDate(e.target.value)} />
                        <FormHelperText id="date-helper-text" sx={{ marginBottom: 5 }}>date</FormHelperText>
                    </Item>
                    <Item sx={{ marginRight: 1, maxHeight: "50px" }}>
                        <Input aria-describedby="hour-helper-text" sx={{ minWidth: "100%", maxHeight: "50px" }} type={"time"} onChange={e => setHour(e.target.value)} />
                        <FormHelperText id="hour-helper-text" sx={{ marginBottom: 5 }}>hour</FormHelperText>
                    </Item>
                    <Button
                        sx={{ maxHeight: "50px" }}
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<PictureAsPdfIcon />}
                    >
                        PDF
                        <StyledBtnFile onChange={(e) => setPdf(e.target.files[0])} name="invitation_doc" type="file" />
                    </Button>
                </Stack>
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    sx={{ minWidth: "100%", marginTop: 1 }}
                >
                    INVITE
                    <StyledBtnFile type="submit" />
                </Button>
            </StyledForm>
        </Box>
    )
};



const AcademicAdministrationInvite = () => {
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
    )
};

export default AcademicAdministrationInvite;