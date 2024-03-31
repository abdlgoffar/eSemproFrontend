import { Box, FormHelperText, Input, List, ListItem, ListItemText, MenuItem, Select, Stack, Typography } from "@mui/material";
import Navigation from "../components/Navigation";

import { studentNavigationConstant, studentSidebarConstant } from "../utils/constants";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import { Item, StyledItemBtnUpload, StyledBtnFile, StyledForm } from "../utils/styled";

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const Content = () => {

  return (
    <Box>
      <Stack direction={"row"}>
        <List>
          <ListItem>
            <ListItemText primary={"Informasi Upload Revisi Proposal Mahasiswa:"} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={"1. Mahasiswa diwajibkan merevisi proposal dan meminta persetujuan hasil revisi kepada dosen pembimbing dan penguji"} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={"2. Pada bagian kanan atas Cover dokumen proposal diberikan keterangan revisi "} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={"3. Dokumen yang diupload harus dalam format .pdf atau .docx"} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={"4. Size maximal dokumen 2MB"} />
          </ListItem>
        </List>
      </Stack>
      <StyledForm >

        <Input aria-describedby="title-helper-text" sx={{ minWidth: "100%" }} />
        <FormHelperText id="title-helper-text" sx={{ marginBottom: 3 }}>Please type your research title</FormHelperText>

        <Stack direction={"row"} marginTop={5} alignItems={"normal"} justifyContent={"start"}>
          <Item sx={{ marginRight: 2 }}>
            <Input aria-describedby="date-helper-text" sx={{ minWidth: "100%" }} type={"date"} />
            <FormHelperText id="date-helper-text" sx={{ marginBottom: 5 }}>date upload</FormHelperText>
          </Item>
        </Stack>


        <Typography marginTop={3} variant="body2">Pembimbing 1</Typography>
        <Select
          sx={{ minWidth: "100%", height: "30px" }}
        >
          <MenuItem><Typography variant="caption">2021</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2022</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2023</Typography></MenuItem>
        </Select>

        <Typography marginTop={3} variant="body2">Pembimbing 2</Typography>
        <Select
          sx={{ minWidth: "100%", height: "30px" }}
        >
          <MenuItem><Typography variant="caption">2021</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2022</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2023</Typography></MenuItem>
        </Select>

        <Typography marginTop={3} variant="body2">Penguji 1</Typography>
        <Select
          sx={{ minWidth: "100%", height: "30px" }}
        >
          <MenuItem><Typography variant="caption">2021</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2022</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2023</Typography></MenuItem>
        </Select>

        <Typography marginTop={3} variant="body2">Penguji 2</Typography>
        <Select
          sx={{ minWidth: "100%", height: "30px" }}
        >
          <MenuItem><Typography variant="caption">2021</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2022</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2023</Typography></MenuItem>
        </Select>
        <Typography marginTop={3} variant="body2">Penguji 3</Typography>
        <Select
          sx={{ minWidth: "100%", height: "30px" }}
        >
          <MenuItem><Typography variant="caption">2021</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2022</Typography></MenuItem>
          <MenuItem><Typography variant="caption">2023</Typography></MenuItem>
        </Select>
        <Stack direction={"row"} marginTop={5} alignItems={"center"} justifyContent={"space-between"}>
          <Item>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              startIcon={<CloudUploadIcon />}
            >
              FILE
              <StyledBtnFile type="file" />
            </Button>
          </Item>
          <StyledItemBtnUpload>
            <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              sx={{ minWidth: "100%" }}
            >
              UPLOAD REVISI
              <StyledBtnFile type="submit" />
            </Button>
          </StyledItemBtnUpload>
        </Stack>
      </StyledForm>
    </Box >
  )
}

const StudentRevision = () => {
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
  )
};

export default StudentRevision;
