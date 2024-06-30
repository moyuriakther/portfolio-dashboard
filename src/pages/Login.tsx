import { Form, Button, Card } from "antd";
import {  useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { verifyToken } from "../utils/verifyToken";
import { TUser, userLoggedIn } from "../redux/features/auth/authSlice";
import MForm from "../component/form/MForm";
import MInput from "../component/form/MInput";



type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [login, { isSuccess }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const defaultValues = {
    email: "admin@gmail.com",
    password: "admin111",
  };

  const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");
    try {
      const result = await login(data).unwrap();
      const token = result?.data?.accessToken;
      const user = verifyToken(token) as TUser;
      dispatch(userLoggedIn({ user, token }));
      toast.loading("Logged in", { id: toastId, duration: 2000 });
      navigate(`/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };
  if (isSuccess) {
    <p>Logged in successfully</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        title="Login"
        style={{ width: 300, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
      >
        <MForm onSubmit={onSubmit} defaultValues={defaultValues}>
          <MInput type="email" name="email" label="EMAIL" />

          <MInput type="password" name="password" label="PASSWORD" />
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Log in
            </Button>
          </Form.Item>
        </MForm>
      </Card>
    </div>
  );
};

export default Login;
