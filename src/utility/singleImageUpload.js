export const uploadToCloudinary = async (file) => {
  try {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "first_time_using");
    data.append("cloud_name", "dffw2zrr5");
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dffw2zrr5/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    if (!response.ok) {
      throw new Error("Failed to upload image");
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
