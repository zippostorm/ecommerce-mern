import React, { useRef } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { FileIcon, UploadCloudIcon, XIcon } from "lucide-react";
import { Button } from "../ui/button";

const ProductImageUpload = ({
  imageFile,
  setImageFile,
  isEditMode,
  cloudinaryImage,
  isCustomStyling = false,
}) => {
  const inputRef = useRef(null);

  const handleImageFileChange = (event) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) setImageFile(selectedFile);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className={`w-full mt-4 ${isCustomStyling ? "" : "max-w-md mx-auto"}`}>
      <Label className="text-lg font-semibold mb-2 block">
        {isEditMode ? "" : "Product Image"}
      </Label>
      {isEditMode ? (
        <img
          src={cloudinaryImage}
          alt={cloudinaryImage}
          className="w-full h-[400px] object-cover rounded-t-lg"
        />
      ) : (
        <div
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          className={`${
            isEditMode ? "opacity-30" : ""
          } border-2 border-dashed rounded-lg p-4`}
        >
          <Input
            id="image-upload"
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={handleImageFileChange}
            disabled={isEditMode}
          />
          {!imageFile ? (
            <Label
              htmlFor="image-upload"
              className={`${
                isEditMode ? "cursor-not-allowed" : ""
              } flex flex-col items-center justify-center h-32 cursor-pointer`}
            >
              <UploadCloudIcon className="w-10 h-10 text-muted-foreground mb-2" />
              <span>Drag & drop or click to upload image</span>
            </Label>
          ) : (
            <div className="flex flex-col">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FileIcon className="w-8 h-8 text-primary mr-2" />
                </div>
                <p className="text-sm font-medium">{imageFile.name}</p>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-foreground"
                  onClick={handleRemoveImage}
                >
                  <XIcon className="w-4 h-4" />
                  <span className="sr-only">Remove File</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductImageUpload;
