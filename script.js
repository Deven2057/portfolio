
function downloadResume() {
  // Replace 'path/to/your/resume.pdf' with the actual path to your resume file
  var resumeUrl ='devenCV.docx.pdf';

  var link = document.createElement('a');
  link.href = resumeUrl;
  link.download = 'deven-resume.pdf'; // You can set the desired file name
  document.body.appendChild(link);
