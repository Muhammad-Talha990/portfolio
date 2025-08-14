// A small script to delete the Next.js cache
const fs = require('fs');
const path = require('path');
const rimraf = require('rimraf');

// Paths to clean
const paths = [
  './.next/cache'
];

paths.forEach(p => {
  const fullPath = path.join(__dirname, p);
  
  if (fs.existsSync(fullPath)) {
    console.log(`Removing ${fullPath}`);
    rimraf.sync(fullPath);
  } else {
    console.log(`Path ${fullPath} does not exist, skipping`);
  }
});

console.log('Cache cleaned successfully!');
