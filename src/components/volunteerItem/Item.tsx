import React from 'react';
import './style.css';

interface VolunteerItemProps {
  posterUrl?: string; 
  title: string;
  previewContent: string;
}

const VolunteerItem: React.FC<VolunteerItemProps> = ({ posterUrl, title, previewContent }) => {
  return (
    <div className="volunteer-item-container">
      <div className="poster-container">
        {posterUrl ? (
          <img src={posterUrl} alt="포스터" className="poster-image" />
        ) : (
          <div className="default-poster"></div>
        )}
      </div>

      <div className="content-container">
        <h3 className="title">{title}</h3>
        <p className="preview-content">{previewContent}</p>
      </div>
    </div>
  );
};

export default VolunteerItem;
