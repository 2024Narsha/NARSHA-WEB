import { Container } from "@mui/material";
import TopBar from "../../components/TopBar";
import Box from "./style"

const VolunterWrite = () => {
  return (
    <Box>
        <Box height="40px">
          <TopBar title="봉사활동 글쓰기"></TopBar>
        </Box>
        <Box>
          <input type="text" id="title" placeholder="봉사명을 입력해 주세요" />
        </Box>
    </Box>
  );
}

export default VolunterWrite;