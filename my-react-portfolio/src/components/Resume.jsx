import React from 'react';

function Resume() {
  const embedUrl = "https://docs.google.com/document/d/1pk5GUJmqyRitinKBke-rEbcHq3hLR47S5-Y5jf6x9Hw/edit";
  const downloadUrl = "https://docs.google.com/document/d/1pk5GUJmqyRitinKBke-rEbcHq3hLR47S5-Y5jf6x9Hw/edit";

  return (
    <div className="resume-container">
      <h2 className="text-center my-4">My Resume</h2>
      <iframe src={embedUrl} width="100%" height="600px" frameborder="0"></iframe>
      <div className="text-center mt-4">
        <a href={downloadUrl} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;