import { Box } from "@mui/material";

const Feed = (props) => {
  return (
    <Box flex={9} padding={2}>
      {props.children}
    </Box>
  );
};

export default Feed;
