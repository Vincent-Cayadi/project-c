import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from 'react';
import { useMoralisFile } from 'react-moralis';
import { useMoralis } from 'react-moralis';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';


const Upload = () => {
  const { Moralis } = useMoralis();
  
  const fileInput = (e) => setFileTarget(e.target.files[0]);
  
  const [fileTarget, setFileTarget] = useState("");
  
  // const { saveFile } = useMoralisFile();
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const fileName = data.get('fileName');
  //   console.log({
  //     "fileName": fileName
  //   });
    
  //   saveFile(fileName, fileTarget, {
  //     type: "text/plain", onSuccess: (result) => console.log(result), 
  //     onError: (error) => console.log(error)
  //   });
    
  // };

  
  
  const handleSubmit = async event => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log("event target: ", event.currentTarget);
    const data = new FormData(event.currentTarget);
    const fileName = data.get('fileName');
    console.log({
      "fileName": fileName
    });
    
    const file = fileInput.files[0];
    const uploadFile = new Moralis.File(fileName, file);
    await uploadFile.saveIPFS();
  }
  
  return (
    <>
      <Navbar />
      <body className="container">
        <div>Hello</div>
        <div>Wassa</div>
        <div>cock kim balls</div>
        <input type="file" onChange={fileInput} />
        <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="fileName"
              label="File Name"
              name="fileName"
              autoFocus
            />
        </Box>
        <form>
        <input type="submit" onClick={handleSubmit} />
        </form>
        
      </body>
    </>
  );
}
export default Upload;

