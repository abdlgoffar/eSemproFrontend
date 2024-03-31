import { Box, FormHelperText, Input, List, ListItem, ListItemText, MenuItem, Select, Stack, Typography } from "@mui/material";
import { studentNavigationConstant, studentSidebarConstant } from "../utils/constants";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import Feed from "../components/Feed";
import { Item, StyledItemBtnUpload, StyledBtnFile, StyledForm } from "../utils/styled";

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
import axios from "axios";

const Content = () => {

  const [supervisors, setSupervisors] = useState([]);
  const [proposalSupervisors, setProposalSupervisors] = useState([]);
  const [title, setTitle] = useState("");
  const [semester, setSemester] = useState("");
  const [date, setDate] = useState("");
  const [pdf, setPdf] = useState();

  useEffect(() => {

    axios.get("http://127.0.0.1:8000/api/supervisors/get", {
      headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localStorage.getItem("Authentication-token")}` }
    })
      .then((response) => {
        setSupervisors(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        if (error.response) {
          //server responded but there error in request
          console.log(error.response);
        } else if (error.request) {
          //network or server error
        } else {
          console.log(error);
        }
      })

  }, []);

  const createProposalSubmition = (event) => {
    event.preventDefault();

    const formPdf = new FormData();
    formPdf.append("proposal_doc", pdf);

    const proposalData = {
      "title": title,
      "upload_date": date,
      "semester": semester
    }

    //add proposal data 
    axios.post("http://127.0.0.1:8000/api/proposals/create", proposalData, { headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localStorage.getItem("Authentication-token")}` } })
      .then((response) => {
        //update student data to have proposal data
        axios.patch(`http://127.0.0.1:8000/api/students/update/1/invitations/0/head-study-programs/0/proposals/${response.data.data.id}`, {}, { headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localStorage.getItem("Authentication-token")}` } })
          .then((response) => {
            //add data student supervisors
            axios.post(`http://127.0.0.1:8000/api/students/supervisors`, { "supervisors": proposalSupervisors }, { headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${localStorage.getItem("Authentication-token")}` } })
              .then((response) => {
                console.log("successfully");
              })
              .catch((error) => {
                if (error.response) {
                  //server responded but there error in request
                  console.log(error.response);
                } else if (error.request) {
                  //network or server error
                } else {
                  console.log(error);
                }
              });
          })
          .catch((error) => {
            if (error.response) {
              //server responded but there error in request
              console.log(error.response);
            } else if (error.request) {
              //network or server error
            } else {
              console.log(error);
            }
          });
      })
      .catch((error) => {
        if (error.response) {
          //server responded but there error in request
          console.log(error.response);
        } else if (error.request) {
          //network or server error
        } else {
          console.log(error);
        }
      });
  }


  return (
    <Box>
      <Stack direction={"row"}>
        <List>
          <ListItem>
            <ListItemText primary={"Informasi Upload Proposal Mahasiswa:"} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={"1. Dokumen yang sudah diupload tidak bisa diupdate atau diubah"} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={"2. Dokumen yang diupload harus dalam format .pdf atau .docx"} />
          </ListItem>
          <ListItem>
            <ListItemText secondary={"3. Size maximal dokumen 2MB"} />
          </ListItem>
        </List>
      </Stack>
      <StyledForm onSubmit={createProposalSubmition}>

        <Input value={title} onChange={e => setTitle(e.target.value)} aria-describedby="title-helper-text" sx={{ minWidth: "100%" }} />
        <FormHelperText id="title-helper-text" sx={{ marginBottom: 3 }}>Please type your research title</FormHelperText>

        <Stack direction={"row"} marginTop={5} alignItems={"normal"} justifyContent={"start"}>
          <Item sx={{ marginRight: 2 }}>
            <Input value={date} onChange={e => setDate(e.target.value)} aria-describedby="date-helper-text" sx={{ minWidth: "100%" }} type={"date"} />
          </Item>
          <Item >
            <Input value={semester} onChange={e => setSemester(e.target.value)} aria-describedby="semester-helper-text" sx={{ minWidth: "100%" }} />
            <FormHelperText id="semester-helper-text" sx={{ marginBottom: 3 }}>Please type your semester now</FormHelperText>
          </Item>
        </Stack>

        <Typography marginTop={3} variant="body2">Pembimbing 1</Typography>
        <Select
          defaultValue={""}
          onChange={e => proposalSupervisors.push(e.target.value)}
          sx={{ minWidth: "100%", height: "30px" }}
        >
          {
            supervisors.map((v, i) => (
              <MenuItem key={i} value={v.id}>{v.name}</MenuItem>
            ))
          }
        </Select>

        <Typography marginTop={3} variant="body2">Pembimbing 2</Typography>
        <Select
          defaultValue={""}
          onChange={e => proposalSupervisors.push(e.target.value)}
          sx={{ minWidth: "100%", height: "30px" }}
        >
          {
            supervisors.map((v, i) => (
              <MenuItem key={i} value={v.id}>{v.name}</MenuItem>
            ))
          }
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
              <StyledBtnFile onChange={(e) => setPdf(e.target.files[0])} name="proposal_doc" type="file" />
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
              UPLOAD PROPOSAL
              <StyledBtnFile type="submit" />
            </Button>
          </StyledItemBtnUpload>
        </Stack>
      </StyledForm>
    </Box >
  )
}





const StudentUploadDoc = () => {
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

export default StudentUploadDoc;
