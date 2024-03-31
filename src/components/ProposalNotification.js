import { Box, Stack, Typography } from "@mui/material"
import { Item, StyledNotificationSkin } from "../utils/styled"


import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const ProposalNotification = () => {
    return (
        <Box>
            <Typography marginBottom={2}>Pemberitahuan</Typography>
            <StyledNotificationSkin>
                <Stack direction={"row"} alignItems={"center"} justifyContent={"start"}>
                    <Item sx={{ display: "flex", marginRight: 1, alignItems: "center" }}>
                        <NotificationsActiveIcon color="white" />
                    </Item>
                    <Item elevation={0}>
                        <Typography>Proposal Mahasiswa</Typography>
                    </Item>
                </Stack>
            </StyledNotificationSkin>
        </Box>
    )


}

export default ProposalNotification;