import { Box, Stack } from "@mui/material";
import ProposalNotification from "../components/ProposalNotification";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { academicAdministrationNavigationConstant, academicAdministrationSidebarConstant } from "../utils/constants";

const Content = () => {
    return (
        <Box>
            <ProposalNotification />
        </Box>
    )
};


const AcademicAdministrationMain = () => {
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

export default AcademicAdministrationMain;