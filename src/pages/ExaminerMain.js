

import { examinerNavigationConstant, examinerSidebarConstant } from "../utils/constants";
import ProposalNotification from "../components/ProposalNotification";
import { Box, Stack } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";


const Content = () => {
    return (
        <Box>
            <ProposalNotification />
        </Box>
    )
};


const ExaminerMain = () => {
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

export default ExaminerMain;