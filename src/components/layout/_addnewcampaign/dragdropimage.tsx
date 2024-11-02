"use client";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAppDispatch } from "@/hooks/hook";
import { useToast } from "@/hooks/use-toast";
import { setImageUrl, setStoryUrl } from "@/store/state/ipfs";
import axios from "axios";
import React, { ChangeEvent, useState } from "react";

const Dragdropimage = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [file, setfile] = useState<File | null>(null);
  const [Story, setStory] = useState<string>("");
  const { toast } = useToast();
  const dispatch = useAppDispatch();
  const [Loading, setLoading] = useState<boolean>(false);

  const handleStoryChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setStory(e.target.value);
  };

  const handleFilechnage = async (files: FileList) => {
    const selectedFile = files[0];
    if (selectedFile) {
      setfile(selectedFile);
    }
  };

  const UploadToPinata = async () => {
    if (!file) {
      toast({
        variant: "destructive",
        title: "Please select a file first",
        className: "bg-red-500 uppercase",
      });
    }
    setLoading(true);
    const ImageformData = new FormData();
    const formDataText = new FormData();

    const textBlob = new Blob([Story], { type: "text/plain" });
    formDataText.append("file", textBlob, "story.txt");
    ImageformData.append("file", file!);

    try {
      const Imageresponse = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        ImageformData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
          },
        }
      );

      const StoryResponse = await axios.post(
        "https://api.pinata.cloud/pinning/pinFileToIPFS",
        formDataText,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_KEY,
          },
        }
      );

      if (Imageresponse.data) {
        dispatch(
          setImageUrl(
            `https://gateway.pinata.cloud/ipfs/${Imageresponse.data?.IpfsHash}`
          )
        );

        setfile(null);
      }
      if (StoryResponse.data) {
        dispatch(
          setStoryUrl(
            `https://gateway.pinata.cloud/ipfs/${StoryResponse.data?.IpfsHash}`
          )
        );
        setStory("");
      }

      setLoading(false);
      toast({
        variant: "destructive",
        title: "Upload successful",
        className: "bg-green-500 uppercase",
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      toast({
        variant: "destructive",
        title: "Upload failed",
        className: "bg-red-500 uppercase",
      });
    }
  };

  const handledragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    handleFilechnage(e.dataTransfer.files);
  };

  return (
    <div className="space-y-5">
      <div
        onDragOver={handledragOver}
        onDrop={handleDrop}
        onDragLeave={handleDragLeave}
        style={{
          border: "2px dashed",
          borderRadius: "5px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: isDragging ? "#f0f0f0" : "#fff",
          transition: "background-color 0.3s ease",
        }}
        className="uppercase min-h-20 flex-center border-blue-700"
      >
        {file ? <h5>{file.name}</h5> : <p>Drag and drop an image here</p>}
      </div>
      {/* Campaign Story Textarea */}
      <div className="flex w-full flex-col gap-1">
        <Label className="font-medium text-base">Campaign Story</Label>
        <Textarea
          rows={4}
          value={Story}
          placeholder="Tell your campaign story..."
          className="w-full"
          onChange={handleStoryChange}
        />
      </div>

      <Button
        type="button"
        onClick={UploadToPinata}
        className="text-secondary w-full uppercase bg-primary px-10 py-3 hover:bg-primary"
      >
        {Loading ? "Uploading......" : " Upload Image to ipfs"}
      </Button>
    </div>
  );
};

export default Dragdropimage;
