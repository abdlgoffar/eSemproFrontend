import { Box, Button, FormHelperText, Input, MenuItem, Select, Stack, Typography } from "@mui/material";
import { academicAdministrationNavigationConstant, academicAdministrationSidebarConstant } from "../utils/constants";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Item, StyledBtnFile, StyledForm, StyledItemProposalInvite, StyledItemProposalInviteInput, StyledItemProposalInviteLabel, StyledProposalInviteSelect, StyledSkinListProposalInvite } from "../utils/styled";

import ArticleIcon from '@mui/icons-material/Article';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
const Content = () => {
    return (
        <Box>
            <StyledForm>
                <Typography variant="caption">Attachment: </Typography>
                <Input sx={{ minWidth: "100%" }} />

                <Typography variant="caption">Matter: </Typography>
                <Input sx={{ minWidth: "100%" }} />

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
                    <StyledItemProposalInvite>
                        <StyledItemProposalInviteLabel htmlFor="html"><ArticleIcon sx={{ marginRight: 1 }} />HTML</StyledItemProposalInviteLabel>
                        <StyledItemProposalInviteInput type="checkbox" id="html" value="HTML" />
                    </StyledItemProposalInvite>

                    <StyledItemProposalInvite>
                        <StyledItemProposalInviteLabel htmlFor="php"><ArticleIcon sx={{ marginRight: 1 }} />PHP</StyledItemProposalInviteLabel>
                        <StyledItemProposalInviteInput type="checkbox" id="php" value="php" />
                    </StyledItemProposalInvite>

                    <StyledItemProposalInvite>
                        <StyledItemProposalInviteLabel htmlFor="java"><ArticleIcon sx={{ marginRight: 1 }} />JAVA</StyledItemProposalInviteLabel>
                        <StyledItemProposalInviteInput type="checkbox" id="java" value="java" />
                    </StyledItemProposalInvite>
                    <StyledItemProposalInvite>
                        <StyledItemProposalInviteLabel htmlFor="DART"><ArticleIcon sx={{ marginRight: 1 }} />DART</StyledItemProposalInviteLabel>
                        <StyledItemProposalInviteInput type="checkbox" id="DART" value="DART" />
                    </StyledItemProposalInvite>

                    <StyledItemProposalInvite>
                        <StyledItemProposalInviteLabel htmlFor="JAVASCRIPT"><ArticleIcon sx={{ marginRight: 1 }} />JAVASCRIPT</StyledItemProposalInviteLabel>
                        <StyledItemProposalInviteInput type="checkbox" id="JAVASCRIPT" value="JAVASCRIPT" />
                    </StyledItemProposalInvite>

                    <StyledItemProposalInvite>
                        <StyledItemProposalInviteLabel htmlFor="PYTHON"><ArticleIcon sx={{ marginRight: 1 }} />PYTHON</StyledItemProposalInviteLabel>
                        <StyledItemProposalInviteInput type="checkbox" id="PYTHON" value="PYTHON" />
                    </StyledItemProposalInvite>
                </StyledSkinListProposalInvite>
                <Typography variant="body2" marginTop={2}>Koordinator</Typography>
                <Select
                    sx={{ minWidth: "100%", height: "30px" }}
                >
                    <MenuItem>Sistem Informasi S1</MenuItem>
                    <MenuItem>Sistem informasi D3</MenuItem>
                    <MenuItem>Desain Komunikasi Visual</MenuItem>
                    <MenuItem>Teknik Informatika</MenuItem>
                </Select>
                <Stack direction={"row"} marginTop={2} alignItems={"center"} justifyContent={"start"}>
                    <Item sx={{ marginRight: 1, maxHeight: "50px" }}>
                        <Input aria-describedby="date-helper-text" sx={{ minWidth: "100%", maxHeight: "50px" }} type={"date"} />
                        <FormHelperText id="date-helper-text" sx={{ marginBottom: 5 }}>date</FormHelperText>
                    </Item>
                    <Item sx={{ marginRight: 1, maxHeight: "50px" }}>
                        <Input aria-describedby="date-helper-text" sx={{ minWidth: "100%", maxHeight: "50px" }} type={"time"} />
                        <FormHelperText id="date-helper-text" sx={{ marginBottom: 5 }}>hour</FormHelperText>
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
                        <StyledBtnFile type="file" />
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