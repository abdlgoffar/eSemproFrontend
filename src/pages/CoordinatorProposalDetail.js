



import { coordinatorNavigationConstant, coordinatorSidebarConstant } from "../utils/constants";



import { Avatar, Box, Button, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { StyledBtnFile, StyledSkinChildLeftProposalDetail, StyledSkinChildRightProposalDetail, StyledSkinProfileText, StyledSkinProposalDetail } from "../utils/styled";

import FileCopyIcon from '@mui/icons-material/FileCopy';
import GroupIcon from '@mui/icons-material/Group';

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
                    <Typography sx={{ display: "block" }} variant="caption">Saran koordinator:</Typography>
                    <textarea rows={6} />

                    <Stack flexDirection={"row"} justifyContent={"space-between"}>
                        <Button
                            variant="contained"
                            sx={{ width: "33%", marginTop: 1, background: "#00b0ff" }}
                        >
                            REVISI
                            <StyledBtnFile type="submit" />
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ width: "33%", marginTop: 1, background: "#64dd17" }}
                        >
                            ACCEPT
                            <StyledBtnFile type="submit" />
                        </Button>

                        <Button
                            variant="contained"
                            sx={{ width: "33%", marginTop: 1, background: "#ff1744" }}
                        >
                            REJECT
                            <StyledBtnFile type="submit" />
                        </Button>
                    </Stack>
                    <Typography variant="caption" sx={{ display: "flex", alignItems: "center" }} marginTop={1}>-<GroupIcon />-</Typography>
                    <List>
                        <ListItem>
                            <ListItemText primary={"Saran penguji Anita.Skom"} />
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary={"Penulisan pada bab 2 masih banyak kesalahan"} />
                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <ListItemText primary={"Saran penguji Sugeng widodo.Skom"} />
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary={"Penulisan pada bab 4 masih banyak kesalahan dan metode penelitian kurang jelas"} />
                        </ListItem>
                    </List>
                </Stack>
            </StyledSkinChildRightProposalDetail>
        </StyledSkinProposalDetail >
    )
};



const CoordinatorProposalDetail = () => {
    return (
        <Box>
            <Navigation data={coordinatorNavigationConstant()} />
            <Stack direction="row" justifyContent="space-between">
                <Sidebar data={coordinatorSidebarConstant()} />
                <Feed>
                    <Content />
                </Feed>
            </Stack>
        </Box>
    );
};

export default CoordinatorProposalDetail;