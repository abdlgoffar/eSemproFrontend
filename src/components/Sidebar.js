import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import MainIcon from "@mui/icons-material/Widgets";
import UploadIcon from "@mui/icons-material/DriveFolderUpload";
import RevisionIcon from "@mui/icons-material/AutoStories";
import SeminarIcon from "@mui/icons-material/CalendarMonth";
import UserIcon from "@mui/icons-material/SupervisedUserCircle";
import ProposalIcon from "@mui/icons-material/Drafts";
import InviteIcon from "@mui/icons-material/Send";
import { StyledSidebar } from "../utils/styled";

const Sidebar = ({ data }) => {
  return (
    <StyledSidebar
      flex={3}
      paddingTop={1}
      minHeight={"100vh"}
    >
      <Box position={"fixed"}>
        <List>
          {data.map((value, index) => (
            <ListItem key={index} disablePadding sx={{
              margin: 1,
              width: "90%"
            }}>
              <ListItemButton component="a" href={value.link}>
                <ListItemIcon>
                  {(value.icon === "Main" && (
                    <MainIcon sx={{ color: "#1760A5", fontSize: "1.3rem" }} />
                  )) ||
                    (value.icon === "Upload" && (
                      <UploadIcon sx={{ color: "#1760A5", fontSize: "1.3rem" }} />
                    )) ||
                    (value.icon === "Revision" && (
                      <RevisionIcon
                        sx={{ color: "#1760A5", fontSize: "1.3rem" }}
                      />
                    )) ||
                    (value.icon === "Seminar" && (
                      <SeminarIcon sx={{ color: "#1760A5", fontSize: "1.3rem" }} />
                    )) ||
                    (value.icon === "Invite" && (
                      <InviteIcon sx={{ color: "#1760A5", fontSize: "1.3rem" }} />
                    )) ||
                    (value.icon === "User" && (
                      <UserIcon sx={{ color: "#1760A5", fontSize: "1.3rem" }} />
                    )) ||
                    (value.icon === "Proposal" && (
                      <ProposalIcon

                        sx={{ color: "#1760A5", fontSize: "1.3rem" }}
                      />
                    ))}
                </ListItemIcon>
                <Typography style={{ fontSize: "0.7rem" }}>{value.name}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledSidebar >
  );
};

export default Sidebar;
