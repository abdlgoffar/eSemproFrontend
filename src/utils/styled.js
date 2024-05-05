import { Avatar, Box, FormControl, Paper, styled, Toolbar } from "@mui/material";


// GENERAL STYLED
export const StyledBtnFile = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
}));

export const ItemButtonNav = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
}));


export const ItemNav = styled(Paper)(({ theme }) => ({
  textAlign: "center",
}));


export const ItemChild = styled("div")(({ theme }) => ({
  textAlign: "start",
}));

export const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export const StyledTableSkin = styled("div")(({ theme }) => ({

  [theme.breakpoints.down("sm")]: {
    maxWidth: "345px",
    overflow: "scroll",
    display: "flex",
    background: "rgb(207,216,220)"
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
    overflow: "scroll",
    display: "flex",
    justifyContent: "center",
    height: "230px"
  }
}));

export const StyledNotificationSkin = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    minWidth: "75%"
  },

  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    minWidth: "65%"
  },

  [theme.breakpoints.up("lg")]: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    minWidth: "85%"
  }
}));


export const StyledSkinProposalDetail = styled("div")(({ theme }) => ({


  [theme.breakpoints.down("md")]: {

  },

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "start",
    flexDirection: "column",
    width: "100%",
    boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
  },

  [theme.breakpoints.up("lg")]: {
    display: "flex",
    justifyContent: "start",
    flexDirection: "row",
    width: "100%",
    boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
  }
}))

export const StyledSkinChildRightProposalDetail = styled("div")(({ theme }) => ({
  display: "flex",
}))


export const StyledSkinChildLeftProposalDetail = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {

  },

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    width: "100%",
  },

  [theme.breakpoints.up("lg")]: {
    display: "flex",
    width: "50%",
  }
}))

export const StyledSkinSignatureBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
  },

  [theme.breakpoints.up("lg")]: {
    display: "flex",
    alignItems: "end",
    flexDirection: "row",
    boxSizing: "border-box",
    height: "100px"
  }
}))

export const StyledSkinSignatureImg = styled("div")(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "120px",
  },

  [theme.breakpoints.up("lg")]: {
    width: "50%",
    height: "100%"
  }
}))

export const StyledSkinSignatureButton = styled("div")(({ theme }) => ({

}))

export const StyledSkinProfileText = styled("div")(({ theme }) => ({
  padding: 5,
  boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
}))


// NAVIGATION COMPONENT STYLED
export const StyledToolbar = styled(Toolbar)(({ theme }) => ({

  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },

  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column"
  },

  [theme.breakpoints.up("lg")]: {
    justifyContent: "space-between",
  }

}));

// SIDEBAR COMPONENT STYLED
export const StyledSidebar = styled(Box)(({ theme }) => ({

  [theme.breakpoints.down("md")]: {
    display: "none"
  },

  [theme.breakpoints.down("sm")]: {
    display: "none"
  },

  [theme.breakpoints.up("lg")]: {
    justifyContent: "flex-start"
  }

}));

// STUDENT
export const StyledBtnProposalStatus = styled(Avatar)(({ theme }) => ({

  [theme.breakpoints.down("sm")]: {
    display: "none"
  },

}));



export const StyledItemBtnUpload = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    minWidth: "75%"
  },

  [theme.breakpoints.down("sm")]: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    minWidth: "65%"
  },

  [theme.breakpoints.up("lg")]: {
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    minWidth: "85%"
  }
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({

  [theme.breakpoints.down("md")]: {
    minWidth: "90%"
  },

  [theme.breakpoints.down("sm")]: {
    minWidth: "100%"
  },

  [theme.breakpoints.up("lg")]: {
    minWidth: "100%"
  }
}));

export const StyledForm = styled("form")(({ theme }) => ({


}));


export const StyledSkin = styled("div")(({ theme }) => ({
  display: "flex",
  width: "100%",
  padding: "0.5%",
  boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
}))


// HEAD STUDY PROGRAM 


// ACADEMIC ADMINISTRATION

export const StyledSkinUserManagerList = styled("div")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
}))

export const StyledTabsSkin = styled("div")(({ theme }) => ({

  [theme.breakpoints.down("sm")]: {
    maxWidth: "345px",
    display: "flex",
    background: "rgb(207,216,220)"
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
    display: "flex",
    justifyContent: "start",
    alignItems: "center"
  }
}));

export const StyledSkinListProposalInvite = styled("div")(({ theme }) => ({

  [theme.breakpoints.down("sm")]: {
    maxWidth: "345px",
    overflow: "scroll",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "start",
    background: "#fafafa",
    height: "230px",
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: "100%",
    overflow: "scroll",
    display: "flex",
    flexDirection: 'column',
    justifyContent: "start",
    background: "#fafafa",
    height: "230px",
    padding: "2% 3%",
  }
}));

export const StyledProposalInviteSelect = styled("div")(({ theme }) => ({

  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },

  [theme.breakpoints.up("lg")]: {
    width: "30%"
  }
}));

export const StyledItemProposalInvite = styled("div")(({ theme }) => ({
  marginTop: 5,
  padding: 5,
  display: "flex",
  justifyContent: "space-between",
  boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px"
}));

export const StyledItemProposalInviteLabel = styled("label")(({ theme }) => ({
  display: "flex",
  alignItems: "center"
}));

export const StyledItemProposalInviteInput = styled("input")(({ theme }) => ({
  height: "100%"
}));