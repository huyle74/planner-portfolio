import { Box, Button, styled } from "@mui/material";
import { adminPage_current } from "@/app/ultility/style-component";

type ChildProps = {
  port: boolean;
  create: boolean;
};

const StyledButton = styled(Button)({
  color: "white",
  borderColor: "white",
  "&:hover": {
    backgroundColor: "gray",
    borderColor: "gray",
    boxShadow: "none",
  },
});

const HeaderAdmin: React.FC<ChildProps> = ({ port, create }) => {
  return (
    <Box sx={{ backgroundColor: "black", p: 2, display: "flex" }}>
      <a href="/">
        <img
          src="https://cryptologos.cc/logos/catcoin-token-cats-logo.png?v=035"
          alt="logo"
          style={{
            objectFit: "cover",
            width: "50px",
            height: "50px",
            marginRight: "10px",
          }}
          className="cat-logo"
        />
      </a>

      <StyledButton
        href="/admin"
        variant="outlined"
        className="header-admin-button"
        sx={{ ...(port ? adminPage_current : "") }}
      >
        ALL PORTFOLIOS
      </StyledButton>
      <StyledButton
        href="/admin/create-portfolio"
        variant="outlined"
        className="header-admin-button"
        sx={{ ...(create ? adminPage_current : {}) }}
      >
        CREATE NEW
      </StyledButton>
    </Box>
  );
};

export default HeaderAdmin;
