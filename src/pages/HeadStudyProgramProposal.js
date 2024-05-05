import { Box, Button, Stack, Typography } from "@mui/material";
import { headStudyProgramNavigationConstant, headStudyProgramSidebarConstant } from "../utils/constants";
import Navigation from "../components/Navigation";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StyledTableSkin } from "../utils/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';

const Content = () => {

    const [headStudyProgram, setHeadStudyProgram] = useState(null);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const getHeadStudyProgram = async () => {
            try {
                const authToken = localStorage.getItem("Authentication-token");
                const response = await axios.get("http://127.0.0.1:8000/api/users/headStudyPrograms", {
                    headers: {
                        "Content-Type": "application/json",
                        'Authorization': `Bearer ${authToken}`
                    }
                });
                setHeadStudyProgram(response.data);
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
        getHeadStudyProgram();
    }, []);

    useEffect(() => {
        if (headStudyProgram) {
            const getStudentByHeadStudyProgram = async () => {
                try {
                    const authToken = localStorage.getItem("Authentication-token");
                    const response = await axios.get(`http://127.0.0.1:8000/api/head-study-programs/${headStudyProgram.id}/students`, {
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
            getStudentByHeadStudyProgram();
        }
    }, [headStudyProgram]);

    const navigate = useNavigate();
    function navigateToHeadStudyProgramProposalDetailPage(proposalId) {
        navigate(`/head-study-programs/proposal/${proposalId}`);
    }

    return (
        <StyledTableSkin sx={{ margin: "auto" }}>
            <TableContainer component={"div"}>
                <Table aria-label="simple table" size="small" >
                    <TableHead sx={{ backgroundColor: "#cfd8dc" }}>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Nrp</TableCell>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Proposal Document</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ backgroundColor: "#eceff1" }}>
                        {students.map((v, i) => (
                            <TableRow
                                key={i}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">{v.name}</TableCell>
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">{v.nrp}</TableCell>
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">{v.address}</TableCell>
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">
                                    <Button size="small" onClick={() => navigateToHeadStudyProgramProposalDetailPage(v.id)} variant="outlined" startIcon={<VisibilityIcon />}>
                                        See
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledTableSkin>

    );
}



const HeadStudyProgramProposal = () => {
    return (
        <Box>
            <Navigation data={headStudyProgramNavigationConstant()} />
            <Stack
                direction="row" justifyContent="space-between">
                <Sidebar data={headStudyProgramSidebarConstant()} />
                <Feed>
                    <Typography>Daftar Mahasiswa Yg mengajukan mengupload proposal</Typography>
                    <Content />
                </Feed>
            </Stack>
        </Box>
    )
};

export default HeadStudyProgramProposal;