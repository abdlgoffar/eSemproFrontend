



import { coordinatorNavigationConstant, coordinatorSidebarConstant } from "../utils/constants";
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


const CoordinatorMain = () => {
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

export default CoordinatorMain;