import React from "react";
import { useState } from "react";

import { Box, Button, ButtonGroup, Grid2 } from "@mui/material";
import PeopleForm from "./people-form";

const BodyCreateAdmin = () => {
  const [index, setIndex] = useState<number>(0),
    [addForm, setAddForm] = useState<React.ReactNode[]>([
      <PeopleForm index={index} />,
    ]);

  const handleAddPeopleForm = () => {
    setIndex((prev) => (prev = prev + 1));
    setAddForm((prev) => [...prev, <PeopleForm index={index + 1} />]);
  };

  const handleDeletePeopleForm = () => {
    if (addForm.length === 1) return;
    setAddForm(addForm.slice(0, -1));
  };

  return (
    <Box
      sx={{
        m: "auto",
        height: "100%",
        pt: 3,
        pb: 4,
      }}
    >
      <form
        action="https://portfolio-be-257238999717.us-central1.run.app/create-portfolio"
        method="post"
        className="form-create-admin"
        encType="multipart/form-data"
      >
        <fieldset style={{ padding: "50px" }} className="form-fieldset-admin">
          <legend
            style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 800 }}
          >
            CREATE NEW PORTFOLIO
          </legend>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" />

          <label htmlFor="background">Background</label>
          <textarea name="background" rows={5} required />

          <label htmlFor="execution">Execution</label>
          <textarea name="execution" rows={5} required />

          <label htmlFor="creative">Creative Idea</label>
          <textarea name="creative" rows={5} required />

          <label htmlFor="strategy">Strategy</label>
          <textarea name="strategy" rows={5} required />

          <fieldset
            className="people-form"
            style={{
              marginTop: "35px",
              marginBottom: "20px",
              border: "gray 1px solid",
              padding: "20px",
              paddingTop: "0",
              position: "relative",
            }}
          >
            <legend style={{ fontSize: "1.2rem" }}> People </legend>
            <ButtonGroup
              sx={{
                position: "absolute",
                border: "1px black solid",
                top: "0%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Button
                sx={{
                  color: "black",
                  fontSize: "0.7rem",
                  backgroundColor: "white",
                }}
                variant="contained"
                onClick={handleAddPeopleForm}
              >
                + Add more
              </Button>
              <Button
                variant="contained"
                sx={{
                  color: "black",
                  fontSize: "0.7rem",
                  backgroundColor: "white",
                  borderLeft: "1px black solid",
                }}
                onClick={handleDeletePeopleForm}
              >
                - Delete
              </Button>
            </ButtonGroup>
            <Box>
              <Grid2 container spacing={2}>
                {addForm.map((form, index) => {
                  return (
                    <Grid2 size={6} key={index}>
                      {form}
                    </Grid2>
                  );
                })}
              </Grid2>
            </Box>
          </fieldset>

          <label htmlFor="uploadFile">Upload Image</label>
          <input type="file" name="file" id="upload-file-button" />

          <input type="submit" value="submit" id="submit-button" />
        </fieldset>
      </form>
    </Box>
  );
};

export default BodyCreateAdmin;
