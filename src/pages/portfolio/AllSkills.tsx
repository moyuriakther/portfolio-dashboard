/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Form } from "antd";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MForm from "../../component/form/MForm";
import MInput from "../../component/form/MInput";
import { useAddSkillMutation } from "../../redux/features/skill/skillApi";
import MSelect from "../../component/form/MSelect";
import { Level } from "../../types";



type Inputs = {
  skill: string;
  level: string;
};

const AddSkill = () => {
  const navigate = useNavigate();
  const [addSkill, {isError, isSuccess}] = useAddSkillMutation()

  const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {
    const toastId = toast.loading("Adding..");
    await addSkill(data).unwrap();
    toast.loading("Blog Added Successfully", {
      id: toastId,
      duration: 2000,
    });
    navigate("/blogs");
  };
  if (isError) {
    toast.error("Cant submit empty form");
  }
  if (isSuccess) {
    <p>Skill Added Successfully</p>;
  }

  return (
    <>
      <div>
        <Card
          title="ADD NEW SKILL"
          style={{
            maxWidth: "1200px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MForm onSubmit={onSubmit}>
            <MInput type="text" name="skill" label="SKILL" />
            <MSelect
              items={Level}
              name="level"
              label="Expertise Level"
            
            />
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                ADD SKILL
              </Button>
            </Form.Item>
          </MForm>
        </Card>
      </div>
    </>
  );
};
export default AddSkill;
