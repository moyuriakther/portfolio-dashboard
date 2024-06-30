import { Button, Card, Form } from "antd";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAddProjectMutation } from "../../redux/features/project/projectApi";
import MForm from "../../component/form/MForm";
import MInput from "../../component/form/MInput";


type Inputs = {
  title: string;
  image: string;
  Description: string;
  Github: string;
  live: string;
  Technologies: string;
};

const AddProject = () => {
  const [addProject, { isSuccess, isError }] = useAddProjectMutation();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {
    const toastId = toast.loading("Adding..");

    console.log(data);


    await addProject(data).unwrap();
    toast.loading("Project Added Successfully", {
      id: toastId,
      duration: 2000,
    });
    navigate("/projects");
  };
  if (isError) {
    toast.error("Cant submit empty form");
  }
  if (isSuccess) {
    <p>Bike Added Successfully</p>;
  }

  return (
    <>
      <div>
        <Card
          title="ADD NEW PROJECT"
          style={{
            maxWidth: "1200px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MForm onSubmit={onSubmit}>
            <MInput type="text" name="title" label="TITLE" />
            <MInput type="text" name="image" label="IMAGE" />
            <MInput type="text" name="Description" label="DESCRIPTION" />
            <MInput type="text" name="Github" label="GITHUB" />
            <MInput type="text" name="live" label="LIVE LINK" />
            <MInput type="text" name="Technologies" label="TECHNOLOGIES" />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                ADD PROJECT
              </Button>
            </Form.Item>
          </MForm>
        </Card>
      </div>
    </>
  );
};
export default AddProject;
