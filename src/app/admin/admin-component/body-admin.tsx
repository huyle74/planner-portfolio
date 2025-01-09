import { useEffect, useState } from "react";
import { Box, Grid2 } from "@mui/material";

import PortTag from "./port-tag";
import { mysqlData } from "@/app/ultility/fetchData";
import ModalDelete from "./modal-delete";
import { deletePort } from "@/app/ultility/fetchData";

type ChildProps = {};

const BodyAdmin: React.FC<ChildProps> = () => {
  const [data, setData] = useState<any[]>([]),
    [modal, setModal] = useState<boolean>(false),
    [idPort, setIdPort] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await mysqlData();
      return setData(res);
    };
    if (data.length === 0) {
      fetchData();
    }
  }, []);

  const handleDelete = (id: number) => {
    deletePort(id);
    setModal(false);
    setData((prevData) => prevData.filter((dt) => dt.id !== id));
  };

  const handleOpenModal = (id: number) => {
    setModal(true);
    setIdPort(id);
  };

  const handleCancel = () => {
    setModal(false);
  };

  return (
    <Box
      sx={{
        m: "auto",
        position: "relative",
        height: "100%",
      }}
    >
      <Grid2 container spacing={2} sx={{ width: "90%", m: "auto" }}>
        {data.map((dt, index) => {
          return (
            <Grid2 size={{ md: 2, xs: 6 }} key={index + dt.id}>
              <PortTag
                image={dt.uploadFile}
                title={dt.title}
                id={dt.id}
                openModal={() => handleOpenModal(dt.id)}
              />
            </Grid2>
          );
        })}
      </Grid2>
      {modal ? (
        <ModalDelete
          cancel={handleCancel}
          confirm={() => {
            handleDelete(idPort);
          }}
        />
      ) : (
        ""
      )}
    </Box>
  );
};

export default BodyAdmin;
