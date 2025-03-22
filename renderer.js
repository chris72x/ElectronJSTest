const fs = require('fs');
const path = require('path');
const os = require('os');

document.addEventListener('DOMContentLoaded', () => {
  const showFilesButton = document.getElementById('showFiles');
  const fileListElement = document.getElementById('fileList');

  showFilesButton.addEventListener('click', () => {
    // Clear previous file list
    fileListElement.innerHTML = '';
    
    // Get desktop path based on user's OS
    const desktopPath = path.join(os.homedir(), 'Desktop');
    
    try {
      // Read files from desktop directory
      const files = fs.readdirSync(desktopPath);
      
      if (files.length === 0) {
        fileListElement.innerHTML = '<p>No files found on Desktop</p>';
        return;
      }
      
      // Create list of files
      const fileListHTML = document.createElement('ul');
      
      files.forEach(file => {
        const filePath = path.join(desktopPath, file);
        const stats = fs.statSync(filePath);
        const isDirectory = stats.isDirectory();
        
        const listItem = document.createElement('li');
        listItem.textContent = `${file} ${isDirectory ? '(Directory)' : '(File)'}`;  
        fileListHTML.appendChild(listItem);
      });
      
      fileListElement.appendChild(fileListHTML);
    } catch (error) {
      fileListElement.innerHTML = `<p>Error: ${error.message}</p>`;
    }
  });
});