import React from 'react';
import { useForm } from 'react-hook-form';
import { TextField, MenuItem, Button, IconButton, Box, InputLabel, Select, FormControl } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const WritePage = () => {
  const { register, handleSubmit } = useForm();
  const [selectedDate, setSelectedDate] = useState("2024-10-12");

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: 20 }}>
      <header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#1976d2', padding: 10, color: 'white' }}>
        <IconButton style={{ color: 'white' }}>
          <ArrowBackIcon />
        </IconButton>
        <h2 style={{ marginLeft: 10 }}>글쓰기</h2>
      </header>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: 20, marginTop: 20 }}>
        {/* 제목 입력 */}
        <TextField
          {...register('title')}
          label="제목"
          placeholder="제목을 입력해 주세요"
          variant="outlined"
          fullWidth
        />

        {/* 교내 or 교외 선택 */}
        <FormControl fullWidth>
          <InputLabel id="label-location">교내 or 교외</InputLabel>
          <Select
            labelId="label-location"
            {...register('location')}
            defaultValue="교내"
          >
            <MenuItem value="교내">교내</MenuItem>
            <MenuItem value="교외">교외</MenuItem>
          </Select>
        </FormControl>

        {/* 신청 마감일 */}
        <Box display="flex" alignItems="center">
          <TextField
            {...register('deadline')}
            type="date"
            defaultValue={selectedDate}
            fullWidth
          />
          <IconButton>
            <CalendarTodayIcon />
          </IconButton>
        </Box>

        {/* 본문 입력 */}
        <TextField
          {...register('content')}
          label="본문"
          placeholder="대회 내용을 입력해 주세요"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />

        {/* 첨부파일 */}
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Button
            variant="outlined"
            startIcon={<AttachFileIcon />}
            component="label"
          >
            첨부파일
            <input
              type="file"
              hidden
              {...register('file')}
            />
          </Button>
        </Box>

        {/* 게시 버튼 */}
        <Button type="submit" variant="contained" color="primary" fullWidth>
          게시
        </Button>
      </form>

      {/* 하단 네비게이션 바 */}
      <footer style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20, borderTop: '1px solid #ccc', paddingTop: 10 }}>
        <IconButton><img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="Home" /></IconButton>
        <IconButton><img src="https://img.icons8.com/ios-filled/50/000000/book.png" alt="Book" /></IconButton>
        <IconButton><img src="https://img.icons8.com/ios-filled/50/000000/graduation-cap.png" alt="Cap" /></IconButton>
        <IconButton><img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="User" /></IconButton>
      </footer>
    </div>
  );
};

export default WritePage;
