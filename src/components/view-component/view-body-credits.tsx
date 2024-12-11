import {
  Box,
  TableBody,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  Table,
} from "@mui/material";

type People = {
  name: string;
  role: string;
  company: string;
};

type ChildProps = {
  data: People[];
};

const ViewCredits: React.FC<ChildProps> = ({ data }) => {
  const styleTableHead = {
    fontSize: "1.2rem",
  };

  const styleTbRows={
    '&:nth-of-type(odd)': {
        backgroundColor: '#eaeaea',
      },
  }

  return (
    <Box>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>PEOPLE</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...styleTableHead }}>Name</TableCell>
              <TableCell sx={{ ...styleTableHead }}>Company</TableCell>
              <TableCell sx={{ ...styleTableHead }}>Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((dt, index) => {
              return (
                <TableRow key={index} sx={{...styleTbRows}}>
                  <TableCell>
                    {dt.name}
                  </TableCell>
                  <TableCell>{dt.company}</TableCell>
                  <TableCell>{dt.role}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ViewCredits;
