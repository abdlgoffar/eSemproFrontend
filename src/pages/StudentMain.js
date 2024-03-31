import { Box, Stack } from "@mui/material";
import Sidebar from "../components/Sidebar";


import {
  Avatar,
  ListItemAvatar,
  Typography,
} from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";
import { Item } from "../utils/styled";
import Feed from "../components/Feed";
import Navigation from "../components/Navigation";

import { studentNavigationConstant, studentSidebarConstant } from "../utils/constants";

const Content = () => {
  return (
    <Box>
      <Stack marginBottom={1} spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems={"center"}>
        <Item elevation={0} sx={{ width: "5%" }}>
          <ListItemAvatar>
            <Avatar variant="rounded" sx={{ padding: "15px" }}>
              <ArticleIcon fontSize="large" />
            </Avatar>
          </ListItemAvatar>
        </Item>
        <Item elevation={0} sx={{ width: "80%" }}>
          <Typography
            variant="body1"
            fontSize={"1.1rem"}
            marginX={2}
            paddingX={3}
          >
            Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi
          </Typography>
        </Item>
        <Item sx={{ minWidth: "100%" }}>
          <Avatar
            sx={{
              bgcolor: "#00b0ff",
              width: "100%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
            }}
            variant="rounded"
          >
            Revision
          </Avatar>
        </Item>
      </Stack>

      <Stack marginBottom={1} spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems={"center"}>
        <Item elevation={0} sx={{ width: "5%" }}>
          <ListItemAvatar>
            <Avatar variant="rounded" sx={{ padding: "15px" }}>
              <ArticleIcon fontSize="large" />
            </Avatar>
          </ListItemAvatar>
        </Item>
        <Item elevation={0} sx={{ width: "80%" }}>
          <Typography
            variant="body1"
            fontSize={"1.1rem"}
            marginX={2}
            paddingX={3}
          >
            Pengaruh Financial Knowledge dan Internal Locus Of Control
            terhadap Personal Financial Management Behaviour Pelaku Umkm
            Kota Bukittinggi
          </Typography>
        </Item>
        <Item sx={{ minWidth: "100%" }}>
          <Avatar
            sx={{
              bgcolor: "#64dd17",
              width: "100%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
            }}
            variant="rounded"
          >
            Accepted
          </Avatar>
        </Item>
      </Stack>

      <Stack marginBottom={1} spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap" alignItems={"center"}>
        <Item elevation={0} sx={{ width: "5%" }}>
          <ListItemAvatar>
            <Avatar variant="rounded" sx={{ padding: "15px" }}>
              <ArticleIcon fontSize="large" />
            </Avatar>
          </ListItemAvatar>
        </Item>
        <Item elevation={0} sx={{ width: "80%" }}>
          <Typography
            variant="body1"
            fontSize={"1.1rem"}
            marginX={2}
            paddingX={3}
          >
            Konstruksi Sosial tentang Ibu Rumah Tangga dalam Masyarakat Indonesia
          </Typography>
        </Item>
        <Item sx={{ minWidth: "100%" }}>
          <Avatar
            sx={{
              bgcolor: "#ff1744",
              width: "100%",
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
            }}
            variant="rounded"
          >
            Rejected
          </Avatar>
        </Item>
      </Stack>
    </Box>


  );
};

const StudentMain = () => {
  return (
    <Box>
      <Navigation data={studentNavigationConstant()} />
      <Stack direction="row" justifyContent="space-between">
        <Sidebar data={studentSidebarConstant()} />
        <Feed>
          <Content />
        </Feed>
      </Stack>
    </Box>
  );
};

export default StudentMain;
