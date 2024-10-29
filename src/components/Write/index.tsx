import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextField, MenuItem, Button, IconButton, Box, InputLabel, Select, FormControl } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

// Form data types
interface FormData {
  title: string;
  location: '교내' | '교외';
  deadline: string;
  content: string;
  file: FileList; // FileList를 사용하여 파일 업로드 필드를 처리
}

const WritePage = () => {

  return (
    <div >
  <header>
    <button>
      <img src="path/to/arrow-back-icon.svg" alt="Back" />
    </button>
    <h2>글쓰기</h2>
  </header>

  <form>
    <label>제목</label>
    <input
      type="text"
      placeholder="제목을 입력해 주세요"
      
    />
    
    <label>교내 or 교외</label>
    <select>
        
        <option value="교내">교내</option>
        <option value="교외">교외</option>
      </select>


    <div>
        <label>신청마감일</label>
      <input type="date" value="2024-10-12"/>
    </div>


    <textarea
      placeholder="대회 내용을 입력해 주세요"
      rows={4}
    
    >
    </textarea>


    <div>
      <button type="button">
        첨부파일
      </button>
      <input type="file" hidden />
    </div>


    <button type="submit">
      게시
    </button>
  </form>
</div>

  );
};

export default WritePage;
