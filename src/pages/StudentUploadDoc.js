import { Box, FormHelperText, Input, List, ListItem, ListItemText, MenuItem, Select, Stack, Typography, Alert } from "@mui/material";
import { studentNavigationConstant, studentSidebarConstant } from "../utils/constants";
import Sidebar from "../components/Sidebar";
import Navigation from "../components/Navigation";
import Feed from "../components/Feed";
import { Item, StyledItemBtnUpload, StyledBtnFile, StyledForm } from "../utils/styled";

import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useEffect, useState } from "react";
import axios from "axios";
import CheckIcon from '@mui/icons-material/Check';
const Content = () => {

  const [supervisors, setSupervisors] = useState([]);
  const [studentsSupervisors] = useState([]);
  const [title, setTitle] = useState("");
  const [semester, setSemester] = useState("");
  const [date, setDate] = useState("");
  const [pdf, setPdf] = useState("");


  const [errors, setErrors] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);



  useEffect(() => {
    if (errors === true) {
      setTimeout(() => {
        setErrors(false);
      }, 10000);
    }
  }, [errors]);

  useEffect(() => {
    const getSupervisors = async () => {
      try {
        const authToken = localStorage.getItem("Authentication-token");
        const response = await axios.get("http://127.0.0.1:8000/api/supervisors/get", {
          headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${authToken}`
          }
        });
        setSupervisors(response.data.data);
      } catch (error) {
        if (error.response) {
          console.log(error.response.data);
        } else if (error.request) {
          console.log("The request was made but no response was received");
        } else {
          console.log('Error', error.message);
        }
      }
    };

    getSupervisors();
  }, []);

  const uploadProposalSubmition = (event) => {
    event.preventDefault();

    const formPdf = new FormData();
    formPdf.append("proposal_doc", pdf);


    const requestBodyCreateProposalData = {
      "title": title,
      "upload_date": date,
      "semester": semester
    }

    const requestBodyCreateSupervisors = {
      "supervisors": studentsSupervisors
    }

    async function uploadProposal(requestBodyCreateProposalData, requestBodyCreateSupervisors) {

      let proposalId;
      let proposalCreated = false;
      let postProposalPdfFileCreated = false;
      let proposalPdfFileId;

      // Membuat CancelToken melalui factory
      const CancelToken = axios.CancelToken;
      const source = CancelToken.source();

      const authToken = localStorage.getItem("Authentication-token");
      const headers = {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${authToken}`
      };
      // Menambahkan cancelToken ke setiap request
      const options = { headers, cancelToken: source.token };

      try {
        //get student 
        const getStudentCurrent = await axios.get(`http://127.0.0.1:8000/api/students/current`, options);

        // Create a proposal
        const postProposalResponse = await axios.post("http://127.0.0.1:8000/api/proposals/create", requestBodyCreateProposalData, options);
        proposalCreated = true;
        proposalId = postProposalResponse.data.data.id;

        // Add data proposal pdf file 
        const postProposalPdfFileResponse = await axios.post(`http://127.0.0.1:8000/api/proposals-pdf/upload/propsals/${proposalId}`, formPdf, {
          headers: { "Content-Type": "multipart/form-data", 'Authorization': `Bearer ${localStorage.getItem("Authentication-token")}` }
        });
        postProposalPdfFileCreated = true;
        proposalPdfFileId = postProposalPdfFileResponse.data.data.id;

        // Add data for student supervisors
        await axios.post(`http://127.0.0.1:8000/api/students/supervisors`, requestBodyCreateSupervisors, options);

        // Update student data to include proposal data
        await axios.patch(`http://127.0.0.1:8000/api/students/update/${getStudentCurrent.data.data.id}/invitations/0/head-study-programs/0/proposals/${proposalId}/seminar-rooms/0`, {}, options);

      } catch (error) {

        if (error.response) {
          setErrors(true);
          setErrorMessages(error.response.data.errors.messages);

          //Rolback request
          if (proposalCreated) {
            try {
              await axios.delete(`http://127.0.0.1:8000/api/proposals/delete/${proposalId}`, options);
            } catch (undoError) {
              console.error("Failed to roll back proposal creation.", undoError);
            }
          }
          if (postProposalPdfFileCreated) {
            try {
              await axios.delete(`http://127.0.0.1:8000/api/proposals-pdf/delete/${proposalPdfFileId}`, options);
            } catch (undoError) {
              console.error("Failed to roll back proposal creation.", undoError);
            }
          }

        } else if (error.request) {
          console.log("The request was made but no response was received");
        } else if (axios.isCancel(error)) {
          console.log('Request canceled:', error.message);
        } else {
          console.log('Error', error.message);
        }
        source.cancel('Operation canceled due to an error.');
      }
    }
    uploadProposal(requestBodyCreateProposalData, requestBodyCreateSupervisors);

  }
  return (
    <>
      {errors === true &&
        <Alert icon={<CheckIcon fontSize="inherit" />} severity="error" sx={{ justifyContent: "center", alignItems: "center", position: "sticky", top: 0, left: 0, right: 0, zIndex: 100 }}>
          {errorMessages.map((v, i) => (
            <Typography variant="body1" key={i}>{v}</Typography>
          ))}
        </Alert>
      }
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
        <StyledForm onSubmit={uploadProposalSubmition}>
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
            onChange={e => studentsSupervisors.push(e.target.value)}
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
            onChange={e => studentsSupervisors.push(e.target.value)}
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
    </>

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
