

import { examinerNavigationConstant, examinerSidebarConstant } from "../utils/constants";

import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { StyledBtnFile, StyledSkinChildLeftProposalDetail, StyledSkinChildRightProposalDetail, StyledSkinProfileText, StyledSkinProposalDetail } from "../utils/styled";

import FileCopyIcon from '@mui/icons-material/FileCopy';


const Content = () => {
    return (
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
                        <Typography sx={{ fontSize: "0.7rem" }}>Name: Muhammad ali mabrur</Typography>
                        <Typography sx={{ fontSize: "0.7rem" }}>Nrp: 211221006</Typography>
                        <Typography sx={{ fontSize: "0.7rem" }}>Phone: 072131776127</Typography>
                        <Typography sx={{ fontSize: "0.7rem" }}>Prodi: Manajemen Informatika</Typography>
                    </StyledSkinProfileText>
                </Stack>
            </StyledSkinChildLeftProposalDetail>
            <StyledSkinChildRightProposalDetail sx={{ padding: 1 }}>
                <Stack flexDirection={"column"} justifyContent={"normal"}>
                    <Typography>Pengaruh Financial Knowledge dan Internal Locus Of Control terhadap Personal Financial Management Behaviour Pelaku Umkm Kota Bukittinggi</Typography>
                    <Button startIcon={<FileCopyIcon />}>
                        download
                    </Button>
                    <Typography sx={{ display: "block" }} variant="caption">Saran penguji:</Typography>
                    <textarea rows={6} />
                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                        <Button
                            variant="contained"
                            sx={{ width: "49%", marginTop: 1, background: "#00b0ff" }}
                        >
                            REVISI
                            <StyledBtnFile type="submit" />
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ width: "49%", marginTop: 1, background: "#64dd17" }}
                        >
                            ACCEPT
                            <StyledBtnFile type="submit" />
                        </Button>
                    </Stack>
                </Stack>
            </StyledSkinChildRightProposalDetail>
        </StyledSkinProposalDetail >
    )
};


const ExaminerProposalDetail = () => {
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

export default ExaminerProposalDetail;