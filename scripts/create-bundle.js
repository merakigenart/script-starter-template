const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream(__dirname + '/../project.zip');

const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
    const size = (archive.pointer() / 1024).toFixed(2) + ' kb';

    console.log(`created project.zip for submission (${size}).`);
});

archive.on('warning', function(err) {
  if (err.code === 'ENOENT') {
    // log warning
  } else {
    throw err;
  }
});

archive.on('error', function(err) {
    throw err;
});

archive.pipe(output);

archive.file(__dirname + '/../src/Script.js', { name: 'Script.js' });
archive.file(__dirname + '/../src/ScriptTraits.js', { name: 'ScriptTraits.js' });

//archive.directory(__dirname + '/../src/', 'src');

archive.finalize();
