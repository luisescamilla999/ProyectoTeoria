import React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export const TextFile = (props) => {
  const name = props.name;

  return (
    <>
      <Box
        sx={{
          width: 265,
          marginTop: 2,
        }}
      >
        <TextField fullWidth label={name} id={name} />
      </Box>
    </>
  );
};
