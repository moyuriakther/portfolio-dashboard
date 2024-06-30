import { Button } from "antd";
import { useNavigate } from "react-router-dom";


export default function AllProject() {
    const navigate = useNavigate();
    const handleAdd = () =>{
        navigate("/add-project")
    }
  return (
    <>
    <h1>Projects</h1>
    <Button onClick={handleAdd}>Add Project</Button>
    </>
  )
}
