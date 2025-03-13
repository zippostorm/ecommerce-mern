import ProductImageUpload from "@/components/admin/image-upload";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { addFeatureImage, getFeatureImages } from "@/store/common";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboard = () => {
  const [imageFile, setImageFile] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);

  const { featureImageList } = useSelector((state) => state.commonFeature);

  const dispatch = useDispatch();

  const { toast } = useToast();

  const onSubmit = async (event) => {
    event.preventDefault();
    setImageLoading(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/admin/products/upload-image`,
      data
    );
    if (response?.data.success) {
      dispatch(addFeatureImage(response.data.result.url)).then((data) => {
        if (data?.payload?.success) {
          dispatch(getFeatureImages());
          toast({
            title: "Image uploaded successfully",
          });
          setImageFile(null);
          setImageLoading(false);
        } else {
          toast({
            title: "Image upload failed",
            variant: "destructive",
          });
          setImageFile(null);
          setImageLoading(false);
        }
      });
    } else {
      toast({
        title: "Image upload failed",
        variant: "destructive",
      });
      setImageFile(null);
      setImageLoading(false);
    }
  };

  useEffect(() => {
    dispatch(getFeatureImages());
  }, [dispatch]);

  return (
    <div className="w-full flex flex-col">
      <ProductImageUpload
        imageFile={imageFile}
        setImageFile={setImageFile}
        // isEditMode={currentEditedId !== null}
        isCustomStyling={true}
      />
      {imageLoading ? (
        <Button disabled className="mt-5">
          Upload Image
        </Button>
      ) : (
        <Button onClick={onSubmit} className="mt-5">
          Upload Image
        </Button>
      )}
      <div className="flex flex-col gap-4 mt-5">
        {featureImageList && featureImageList.length > 0
          ? featureImageList.map((featureImageItem) => (
              <div className="relative">
                <img
                  src={featureImageItem?.image}
                  className="w-full h-[400px] object-cover rounded-t-lg"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default AdminDashboard;
