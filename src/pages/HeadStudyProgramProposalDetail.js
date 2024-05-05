import { Avatar, Alert, Box, Button, ButtonGroup, IconButton, MenuItem, Select, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import { headStudyProgramNavigationConstant, headStudyProgramSidebarConstant } from "../utils/constants";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { StyledBtnFile, StyledForm, StyledSkinChildLeftProposalDetail, StyledSkinChildRightProposalDetail, StyledSkinProfileText, StyledSkinProposalDetail, StyledSkinSignatureBox, StyledSkinSignatureButton, StyledSkinSignatureImg } from "../utils/styled";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ReactSignatureCanvas from "react-signature-canvas";
import { useEffect, useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CheckIcon from '@mui/icons-material/Check';


import signatureBackground from "../assets/signature-background.png";
import { useParams } from "react-router-dom";
import axios from "axios";

const Content = () => {

    const [sign, setSign] = useState(null);
    const [urlSignImage, setUrlSignImage] = useState();
    const [signOk, setSignOk] = useState(false);
    const { id } = useParams();
    const [studentsExaminers] = useState([]);
    const [seminarRooms, setSeminarRooms] = useState([]);
    const [seminarRoom, setSeminarRoom] = useState(null);
    const [examiners, setExaminers] = useState([]);
    const [student, setStudent] = useState("");
    const [errors, setErrors] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);
    const [proposal, setProposal] = useState("")

    function clearSign() {
        sign.clear();
        setSignOk(false);
    }

    function generateSign() {
        setUrlSignImage(sign.getTrimmedCanvas().toDataURL("image/png"));
        setSignOk(true);
    }

    useEffect(() => {
        if (errors === true) {
            setTimeout(() => {
                setErrors(false);
            }, 10000);
        }
    }, [errors]);


    useEffect(() => {
        const getExaminers = async () => {
            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get("http://127.0.0.1:8000/api/examiners/get", {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setExaminers(response.data.data);
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

        getExaminers();
    }, []);

    useEffect(() => {
        const getSeminarRooms = async () => {
            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get("http://127.0.0.1:8000/api/seminar-rooms/get", {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setSeminarRooms(response.data.data);
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

        getSeminarRooms();
    }, []);


    useEffect(() => {
        const getStudentById = async () => {

            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get(`http://127.0.0.1:8000/api/students/${id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setStudent(response.data.data);
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

        getStudentById();
    }, [id]);




    useEffect(() => {
        let getStudentsProposals = async () => {
            if (!student || !student.id) {
                console.log('No student or student ID available for fetching proposals');
                return;
            }
            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get(`http://127.0.0.1:8000/api/students/proposals/${student.id}`, {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setProposal(response.data)
            } catch (error) {
                if (error.response) {
                    console.log(error.response.data);
                } else if (error.request) {
                    console.log("The request was made but no response was received");
                } else {
                    console.log('Error', error.message);
                }
            }
        }
        getStudentsProposals()
    }, [student])


    const handleDownloadPdf = async () => {
        try {
            const authToken = localStorage.getItem("Authentication-token");
            const response = await axios.get(`http://127.0.0.1:8000/api/proposals-pdf/${proposal.id}`, {
                responseType: 'blob',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                }
            });


            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `${proposal.title}`);
            document.body.appendChild(link);
            link.click();

            // clear URL
            link.parentNode.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Ada masalah saat mengunduh file: ', error);
        }
    }

    const validateProposalByHeadStudyProgramSubmititon = (event) => {
        event.preventDefault();



        const requestBodyCreateExaminers = {
            "examiners": studentsExaminers
        }
        async function validateProposalByHeadStudyProgram(requestBodyCreateExaminers) {

            let studentsExaminersCreated = false;

            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();

            const authToken = localStorage.getItem("Authentication-token");
            const headers = {
                "Content-Type": "application/json",
                'Authorization': `Bearer ${authToken}`
            };

            const options = { headers, cancelToken: source.token };

            try {
                //create student examiners
                await axios.post(`http://127.0.0.1:8000/api/students/examiners/${student.id}`, requestBodyCreateExaminers, options);
                studentsExaminersCreated = true;

                if (seminarRoom !== null && !sign.isEmpty() && signOk === true) {
                    await axios.patch(`http://127.0.0.1:8000/api/students/update/${student.id}/invitations/0/head-study-programs/0/proposals/0/seminar-rooms/${seminarRoom}`, {}, options);
                } else {
                    throw new Error("Seminar room Or Signature is required");
                }
            } catch (error) {
                if (error.response) {
                    setErrors(true);
                    setErrorMessages(error.response.data.errors.messages);

                    //Rolback request
                    if (studentsExaminersCreated) {
                        try {
                            await axios.delete(`http://127.0.0.1:8000/api/students/examiners/${student.id}`, options);
                        } catch (undoError) {
                            console.error("Failed to roll back proposal creation.", undoError);
                        }
                    }
                } else if (error.request) {
                    console.log("The request was made but no response was received");
                } else if (axios.isCancel(error)) {
                    console.log('Request canceled:', error.message);
                } else {
                    console.log('Error', error.message);
                }
                if (error.message === "Seminar room Or Signature is required") {
                    if (studentsExaminersCreated) {
                        //Rolback request
                        try {
                            await axios.delete(`http://127.0.0.1:8000/api/students/examiners/${student.id}`, options);
                        } catch (undoError) {
                            console.error("Failed to roll back proposal creation.", undoError);
                        }
                    }
                    setErrors(true);
                    setErrorMessages([error.message]);
                }
                //cancel request
                source.cancel('Operation canceled due to an error.');

            }
        }
        validateProposalByHeadStudyProgram(requestBodyCreateExaminers);
    }


    return (
        <>
            {errors === true &&
                <Alert icon={<CheckIcon fontSize="inherit" />} severity="error" sx={{ justifyContent: "center", alignItems: "center", position: "sticky", top: 0, left: 0, right: 0, zIndex: 100 }}>
                    {errorMessages.map((v, i) => (
                        <Typography variant="body1" key={i}>{v}</Typography>
                    ))}
                </Alert>
            }
            <StyledSkinProposalDetail sx={{ padding: 1 }}>
                <StyledSkinChildLeftProposalDetail sx={{ justifyContent: "center", display: "flex" }}>
                    <Stack flexDirection={"column"} justifyContent={"normal"}>

                        <Avatar variant="square" alt="Remy Sharp"
                            src="https://images.unsplash.com/photo-1545696968-1a5245650b36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D"
                            sx={{
                                margin: "5px  auto",
                                width: 168,
                                height: 168,
                                borderRadius: "2px"
                            }}>

                        </Avatar>

                        <StyledSkinProfileText>
                            <Typography sx={{ fontSize: "0.7rem" }}>Name: {student.name}</Typography>
                            <Typography sx={{ fontSize: "0.7rem" }}>Nrp: {student.nrp}</Typography>
                            <Typography sx={{ fontSize: "0.7rem" }}>Phone: {student.phone}</Typography>
                        </StyledSkinProfileText>
                    </Stack>
                </StyledSkinChildLeftProposalDetail>
                <StyledSkinChildRightProposalDetail sx={{ padding: 1 }}>
                    <StyledForm onSubmit={validateProposalByHeadStudyProgramSubmititon}>
                        <Stack flexDirection={"column"} justifyContent={"normal"}>
                            <Typography>{proposal.title}</Typography>
                            <Button startIcon={<FileCopyIcon />} onClick={handleDownloadPdf}>
                                download proposal file
                            </Button>

                            <Typography marginTop={1} variant="body2">Penguji 1</Typography>
                            <Select
                                defaultValue={""}
                                onChange={e => studentsExaminers.push(e.target.value)}
                                sx={{ minWidth: "100%", height: "30px" }}
                            >
                                {
                                    examiners.map((v, i) => (
                                        <MenuItem key={i} value={v.id}>{v.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            <Typography marginTop={1} variant="body2">Penguji 2</Typography>
                            <Select
                                defaultValue={""}
                                onChange={e => studentsExaminers.push(e.target.value)}
                                sx={{ minWidth: "100%", height: "30px" }}
                            >
                                {
                                    examiners.map((v, i) => (
                                        <MenuItem key={i} value={v.id}>{v.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            <Typography marginTop={1} variant="body2">Penguji 3</Typography>
                            <Select
                                defaultValue={""}
                                onChange={e => studentsExaminers.push(e.target.value)}
                                sx={{ minWidth: "100%", height: "30px" }}
                            >
                                {
                                    examiners.map((v, i) => (
                                        <MenuItem key={i} value={v.id}>{v.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            <Typography marginTop={1} variant="body2">Kelas Ujian</Typography>
                            <Select
                                defaultValue={""}
                                onChange={e => setSeminarRoom(e.target.value)}
                                sx={{ minWidth: "100%", height: "30px" }}
                            >
                                {
                                    seminarRooms.map((v, i) => (
                                        <MenuItem key={i} value={v.id}>{v.name}</MenuItem>
                                    ))
                                }
                            </Select>
                            <StyledSkinSignatureBox sx={{ marginTop: 1 }}>
                                <ReactSignatureCanvas ref={event => setSign(event)} penColor={"black"} backgroundColor="rgba(0,0,0,0.1)" canvasProps={{ width: 300, height: 100, className: "sigCanvas" }} />
                                <StyledSkinSignatureImg>
                                    <img alt="" style={{ backgroundImage: `url(${signatureBackground})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} src={urlSignImage} width={"100%"} height={"100%"} />
                                </StyledSkinSignatureImg>
                            </StyledSkinSignatureBox>
                            <StyledSkinSignatureButton>
                                <ButtonGroup
                                    orientation="horizontal"
                                >
                                    <IconButton size="small" onClick={clearSign}>
                                        <DeleteForeverIcon fontSize="inherit" />
                                    </IconButton>
                                    <IconButton size="small" onClick={generateSign}>
                                        <BookmarkAddedIcon fontSize="inherit" />
                                    </IconButton>

                                </ButtonGroup>
                            </StyledSkinSignatureButton>
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
                        </Stack>
                    </StyledForm>
                </StyledSkinChildRightProposalDetail>
            </StyledSkinProposalDetail >
        </>

    )
}


const HeadStudyProgramProposalDetail = () => {
    return (
        <Box>
            <Navigation data={headStudyProgramNavigationConstant()} />
            <Stack direction="row" justifyContent="space-between">
                <Sidebar data={headStudyProgramSidebarConstant()} />
                <Feed>
                    <Content />
                </Feed>
            </Stack>
        </Box>
    )
};

export default HeadStudyProgramProposalDetail;