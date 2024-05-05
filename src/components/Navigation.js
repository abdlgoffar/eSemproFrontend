import { AppBar, Avatar, Link, Stack, Typography } from "@mui/material";

import MainIcon from "@mui/icons-material/Widgets";
import UploadIcon from "@mui/icons-material/DriveFolderUpload";
import RevisionIcon from "@mui/icons-material/AutoStories";
import SeminarIcon from "@mui/icons-material/CalendarMonth";
import UserIcon from "@mui/icons-material/SupervisedUserCircle";
import ProposalIcon from "@mui/icons-material/Drafts";
import InviteIcon from "@mui/icons-material/Send";
import { ItemButtonNav, ItemNav, StyledToolbar } from "../utils/styled";

const NavigationLogOut = () => {
  return (
    <Stack direction="column" spacing={2} >
      <ItemNav elevation={0} sx={{ bgcolor: "#b3e5fc", cursor: "pointer" }}>
        <Typography variant="subtitle2" fontSize={"0.6rem"}>| Log out |</Typography>
      </ItemNav>
    </Stack>
  )
}

const NavigationLink = ({ data }) => {
  return (
    <Stack direction={"row"} spacing={3}>
      {data.map((value, index) => (
        <ItemButtonNav key={index} elevation={0} sx={{ bgcolor: "#b3e5fc" }}>
          <Link href={value.link}>
            {(value.icon === "Main" && (
              <MainIcon sx={{ color: "#1760A5" }} fontSize="1.5rem" />
            )) ||
              (value.icon === "Upload" && (
                <UploadIcon sx={{ color: "#1760A5" }} fontSize="1.5rem" />
              )) ||
              (value.icon === "Revision" && (
                <RevisionIcon sx={{ color: "#1760A5" }} fontSize="1.5rem" />
              )) ||
              (value.icon === "Seminar" && (
                <SeminarIcon sx={{ color: "#1760A5" }} fontSize="1.5rem" />
              )) ||
              (value.icon === "Invite" && (
                <InviteIcon sx={{ color: "#1760A5" }} fontSize="1.5rem" />
              )) ||
              (value.icon === "User" && (
                <UserIcon sx={{ color: "#1760A5" }} fontSize="1.5rem" />
              )) ||
              (value.icon === "Proposal" && (
                <ProposalIcon sx={{ color: "#1760A5" }} fontSize="1.5rem" />
              ))}
            <Typography variant="body2" marginTop={-1} fontSize={"0.6rem"}>
              {value.name}
            </Typography>
          </Link>
        </ItemButtonNav>
      ))}
    </Stack>
  );
};

const NavigationProfil = () => {
  return (
    <Stack direction="column" spacing={1} alignItems={"center"}>
      <ItemNav elevation={0} sx={{ bgcolor: "#b3e5fc" }}>
        <Avatar
          sx={{
            width: 37,
            height: 37,
            boxShadow: "rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px"
          }}
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1615109398623-88346a601842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        />
      </ItemNav>
      <ItemNav elevation={0} sx={{ marginTop: -1, bgcolor: "#b3e5fc" }}>
        <Typography variant="subtitle2" fontSize={"0.6rem"}>Adnan Zulkarnain.Skom</Typography>
      </ItemNav>
    </Stack>
  )
}


// RENDER
const Navigation = ({ data }) => {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        padding: "1px 0 1px 0",
        bgcolor: "#b3e5fc"
      }}
    >
      <StyledToolbar>
        <NavigationProfil />
        <NavigationLink data={data} />
        <NavigationLogOut />
      </StyledToolbar>
    </AppBar >
  );
};

export default Navigation;
