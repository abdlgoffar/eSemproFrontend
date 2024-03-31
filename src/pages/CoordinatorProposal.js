




import { coordinatorNavigationConstant, coordinatorSidebarConstant } from "../utils/constants";
import { Box, IconButton, Stack } from "@mui/material";
import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import { StyledTableSkin } from "../utils/styled";

function createData(no, name, nrp, title) {
    return { no, name, nrp, title };
}

const rows = [
    createData(1, "Abd. goffar", "211221006", "Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi"),
    createData(2, "Abd. goffar", "211221006", "Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi"),
    createData(3, "Abd. goffar", "211221006", "Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi"),
    createData(4, "Abd. goffar", "211221006", "Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi"),
    createData(5, "Abd. goffar", "211221006", "Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi"),
    createData(6, "Abd. goffar", "211221006", "Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi"),
    createData(7, "Abd. goffar", "211221006", "Faktor-Faktor yang Mempengaruhi Keputusan Mahasiswa dalam Memilih Jurusan di Perguruan Tinggi"),
];

const Content = () => {
    return (
        <StyledTableSkin sx={{ margin: "auto" }}>
            <TableContainer component={"div"}>
                <Table aria-label="simple table">
                    <TableHead sx={{ backgroundColor: "#cfd8dc" }}>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Nrp</TableCell>
                            <TableCell align="center">Title</TableCell>
                            <TableCell align="center">Setting</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody sx={{ backgroundColor: "#eceff1" }}>
                        {rows.map((row) => (
                            <TableRow
                                key={row.no}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell sx={{ fontSize: "0.8rem" }} component="th" scope="row">
                                    {row.no}
                                </TableCell>
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">{row.name}</TableCell>
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">{row.nrp}</TableCell>
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">{row.title}</TableCell>
                                <TableCell sx={{ fontSize: "0.8rem" }} align="left">
                                    <IconButton aria-label="delete" size="small">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </StyledTableSkin>

    );
}


const CoordinatorProposal = () => {
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

export default CoordinatorProposal;