import './style.css'

// CheckAlert 컴포넌트의 props 타입 정의
interface CheckAlertProps {
  onCancel: () => void;  // 취소 버튼 클릭 핸들러
  onConfirm: () => void; // 확인 버튼 클릭 핸들러
}

const CheckAlert = ({ onCancel, onConfirm }: CheckAlertProps) => {
  return (
    <div className='alert-container'>
      <div className='alert-box'>
        <div className='alert-info'>
          <h1>해당 대회의 상태를 변경 하시겠습니까?</h1>
          <p>참가한 대회는 내 정보에서 조회할 수 있습니다</p>
        </div>
        <div className='check-buttons'>
          {/* 취소 버튼 */}
          <button id='cancel' onClick={onCancel}>취소</button>
          {/* 확인 버튼 */}
          <button id='confirm' onClick={onConfirm}>확인</button>
        </div>
      </div>
    </div>
  )
}

export default CheckAlert