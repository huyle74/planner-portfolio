import { Box } from "@mui/material";

type ChildProps = {
  index: number;
};

const PeopleForm: React.FC<ChildProps> = ({ index }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        mt: 2,
      }}
    >
      <label htmlFor={`name-${index}`}>Name</label>
      <input type="text" name={`people[${index}][name]`} required />
      <label htmlFor={`company-${index}`}>Company</label>
      <input type="text" name={`people[${index}][company]`} required />
      <label htmlFor={`role-${index}`}>Role</label>
      <input type="text" name={`people[${index}][role]`} required />
    </Box>
  );
};

export default PeopleForm;
