import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

function UploadPhotos() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageUpload = async () => {
    try {
      const formData = new FormData();
      formData.append("files", selectedImage);

      const response = await axios.post(
        "http://localhost:1337/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the response, such as saving the image URL in your component's state or performing any other actions.
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box>
      <Box>
        <Box>
          <Typography>Add Profile Photo</Typography>
        </Box>
        <Box>
          <Image
            src="/assets/me.jpg"
            alt="add profile Photo"
            width={300}
            height={300}
          />
        </Box>
        <input
          type="file"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />

        <Box sx={{ display: "flex" }}>
          <Button variant="outlined" onClick={handleImageUpload}>
            add
          </Button>
          <Button variant="outlined">edit</Button>
          <Button variant="outlined">remove</Button>
        </Box>
      </Box>
    </Box>
  );
}

export default UploadPhotos;
