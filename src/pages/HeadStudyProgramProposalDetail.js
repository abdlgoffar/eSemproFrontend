import { Avatar, Box, Button, ButtonGroup, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import { headStudyProgramNavigationConstant, headStudyProgramSidebarConstant } from "../utils/constants";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { StyledBtnFile, StyledSkinChildLeftProposalDetail, StyledSkinChildRightProposalDetail, StyledSkinProfileText, StyledSkinProposalDetail, StyledSkinSignatureBox, StyledSkinSignatureButton, StyledSkinSignatureImg } from "../utils/styled";
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ReactSignatureCanvas from "react-signature-canvas";
import { useState } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import signatureBackground from "../assets/signature-background.png";

const Content = () => {

    const [sign, setSign] = useState(null);
    const [urlSignImage, setUrlSignImage] = useState();


    function clearSign() {
        sign.clear();
    }

    function generateSign() {
        setUrlSignImage(sign.getTrimmedCanvas().toDataURL("image/png"));
    }
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
                    <FormControl fullWidth sx={{ margin: "5px 0 5px 0" }}>
                        <InputLabel id="demo-simple-select-label" sx={{ fontSize: "0.7rem" }}>Penguji 1</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            sx={{ height: "45px" }}
                        >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px 0 5px 0" }}>
                        <InputLabel id="demo-simple-select-label" sx={{ fontSize: "0.7rem" }}>Penguji 2</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            sx={{ height: "45px" }}
                        >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px 0 5px 0" }}>
                        <InputLabel id="demo-simple-select-label" sx={{ fontSize: "0.7rem" }}>Penguji 3</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            sx={{ height: "45px" }}
                        >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                        </Select>
                    </FormControl>
                    <FormControl fullWidth sx={{ margin: "5px 0 5px 0" }}>
                        <InputLabel id="demo-simple-select-label" sx={{ fontSize: "0.7rem" }}>Kelas Ujian</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Age"
                            sx={{ height: "45px" }}
                        >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                            <MenuItem sx={{ fontSize: "0.7rem" }}>username</MenuItem >
                        </Select>
                    </FormControl>
                    <StyledSkinSignatureBox sx={{ marginTop: 1 }}>
                        <ReactSignatureCanvas ref={event => setSign(event)} penColor={"black"} backgroundColor="rgba(0,0,0,0.1)" canvasProps={{ width: 300, height: 100, className: "sigCanvas" }} />
                        <StyledSkinSignatureImg>
                            <img alt="" style={{ backgroundImage: `url(${signatureBackground})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }} width={"100%"} height={"100%"} src={urlSignImage} />
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
            </StyledSkinChildRightProposalDetail>
        </StyledSkinProposalDetail >
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