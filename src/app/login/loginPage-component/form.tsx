import { Box } from "@mui/material";
import { flexBox_Config } from "@/app/ultility/style-component";

type ChildProps = {
  username: string;
  password: string;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePass: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const LoginForm: React.FC<ChildProps> = ({
  username,
  password,
  onChangeName,
  onChangePass,
  onSubmit,
}) => {
  return (
    <Box
      sx={{
        ...flexBox_Config,
        height: "100vh",
        background:
          "linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        width: "100vw",
      }}
    >
      <Box sx={{ fontSize: "2rem", fontWeight: 1000, mb: 4, color: "white" }}>
        LOGIN
      </Box>
      <form
        onSubmit={onSubmit}
        style={{ display: "flex", flexDirection: "column" }}
        className="login-admin-form"
      >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={onChangeName}
          value={username}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={onChangePass}
          value={password}
          required
        />

        <input type="submit" value="Login" id="submit-login-admin" />
      </form>
    </Box>
  );
};

export default LoginForm;
