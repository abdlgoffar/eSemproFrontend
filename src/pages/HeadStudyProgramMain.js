import { Box, Stack } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { headStudyProgramNavigationConstant, headStudyProgramSidebarConstant } from "../utils/constants";
import ProposalNotification from "../components/ProposalNotification";

const Content = () => {
    return (
        <Box>
            <ProposalNotification />
        </Box>
    )
};


const HeadStudyProgramMain = () => {
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
    );
};

export default HeadStudyProgramMain;