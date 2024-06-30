/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, Form } from "antd";
import { toast } from "sonner";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import MForm from "../../component/form/MForm";
import MInput from "../../component/form/MInput";
import { useAddBlogMutation } from "../../redux/features/blog/blogApi";
import 'react-quill/dist/quill.snow.css';
import {  useState } from "react";
import ReactQuill from "react-quill";
import { toolbarOptions } from "../../utils/toolbarOptions";



type Inputs = {
  title: string;
  description: string;
};

const AddBlog = () => {
const [content, setContent] = useState('');
  const [addBlog, { isSuccess, isError }] = useAddBlogMutation();
  const navigate = useNavigate();
 
 const module = {
    toolbar: toolbarOptions
  }

  const handleChange = (value: any) => {
    setContent(value);
  };

  const onSubmit: SubmitHandler<Inputs> = async (data: FieldValues) => {
    const toastId = toast.loading("Adding..");
    console.log(data, content);

    const newBlog = {title: data.title, description: content}
    await addBlog(newBlog).unwrap();
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
    <p>Blog Added Successfully</p>;
  }

  return (
    <>
      <div>
        <Card
          title="ADD NEW BLOG"
          style={{
            maxWidth: "1200px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <MForm onSubmit={onSubmit}>
            <MInput type="text" name="title" label="BLOG TITLE" />
            
            <ReactQuill modules={module} theme="snow"
              value={content} onChange={handleChange} style={{ height: '300px', marginBottom: '40px' }}/>
            
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%" }}
              >
                ADD BLOG
              </Button>
            </Form.Item>
          </MForm>
        </Card>
      </div>
    </>
  );
};
export default AddBlog;
