import React from "react";
import Button from "@mui/material/Button";

export const ButtonNavBar = (props) => {
  const name = props.name;
  const NewBackground = props.NewBackground;
  const myHrf = props.myHrf;

  return (
    <>
      {NewBackground && [
        <Button
          href={myHrf}
          variant="contained"
          key={name}
          sx={{
            width: 271,
            height: 55,
            background: "#3A7D83",
            fontWeight: 1000,
            fontSize: 15,
            "&:hover": {
              bgcolor: "rgba(91, 165, 169, 0.9)",
              color: "#FFFFFF",
            },
          }}
        >
          {name}
        </Button>,
      ]}
      {!NewBackground && [
        <Button
          href={myHrf}
          variant="contained"
          key={name}
          sx={{
            width: 271,
            height: 55,
            background: "#D6E6FE",
            color: "#526A97",
            fontWeight: 1000,
            fontSize: 15,
            "&:hover": {
              bgcolor: "rgba(91, 165, 169, 0.9)",
              color: "#FFFFFF",
            },
          }}
        >
          {name}
        </Button>,
      ]}
    </>
  );
};
