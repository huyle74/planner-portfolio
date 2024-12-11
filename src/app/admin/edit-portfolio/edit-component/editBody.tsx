import React from "react";
import { Box } from "@mui/material";

import { updatePort } from "@/app/ultility/fetchData";

type Portfolio = {
  id: number;
  title: string;
  background: string;
  creative: string;
  execution: string;
  strategy: string;
};

type ChildProps = {
  data: Portfolio;
  slug: string;
};

const BodyEditAdmin: React.FC<ChildProps> = ({ data, slug }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    return await updatePort(slug, formData);
  };

  return (
    <Box
      sx={{
        m: "auto",
        width: "100%",
        height: "100%",
        pt: 3,
        pb: 4,
      }}
    >
      <form className="form-create-admin" method="POST" onSubmit={handleSubmit}>
        <fieldset style={{ padding: "50px" }} className="form-fieldset-admin">
          <legend
            style={{ textAlign: "center", fontSize: "1.5rem", fontWeight: 800 }}
          >
            EDIT PORTFOLIO
          </legend>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" defaultValue={data.title} />

          <label htmlFor="background">Background</label>
          <textarea
            name="background"
            rows={5}
            required
            wrap="hard"
            defaultValue={data.background}
          />

          <label htmlFor="execution">Execution</label>
          <textarea
            name="execution"
            rows={5}
            required
            defaultValue={data.execution}
          />

          <label htmlFor="creative">Creative Idea</label>
          <textarea
            name="creative"
            rows={5}
            required
            defaultValue={data.creative}
          />

          <label htmlFor="strategy">Strategy</label>
          <textarea
            name="strategy"
            rows={5}
            required
            defaultValue={data.strategy}
          />

          {/* <label htmlFor="file">Upload Image</label>
          <input type="file" name="file" id="upload-file-button" /> */}

          <input type="submit" value="Update" id="submit-button" />
        </fieldset>
      </form>
    </Box>
  );
};

export default BodyEditAdmin;
