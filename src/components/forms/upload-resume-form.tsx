"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  file: z.any().optional(), // We handle file manually for now
});

export function UploadResumeForm() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    // Validate file type
    const validTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
        toast.error("Invalid file type. Please upload a PDF or DOCX.");
        return;
    }
    setSelectedFile(file);
    toast.success("File selected: " + file.name);
  };

  const onSubmit = async () => {
    if (!selectedFile) {
        toast.error("Please select a file first");
        return;
    }

    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      // TODO: Implement API Endpoint in next step
      // const response = await fetch("/api/generate/resume", {
      //   method: "POST",
      //   body: formData,
      // });
      
      // Simulation for UI testing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // if (!response.ok) throw new Error("Failed to upload");
      
      toast.success("Resume processed successfully!");
      router.refresh(); 
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-white">Upload your Resume</CardTitle>
        <CardDescription className="text-zinc-400">
          Upload your existing PDF or DOCX resume to get started.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className={`relative flex flex-col items-center justify-center w-full h-64 mt-4 border-2 border-dashed rounded-lg transition-colors ${
            dragActive
              ? "border-blue-500 bg-blue-500/10"
              : "border-zinc-700 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-600"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleChange}
            accept=".pdf,.docx"
            disabled={isUploading}
          />
          
          <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            {selectedFile ? (
                <>
                <FileText className="w-12 h-12 mb-4 text-blue-500" />
                <p className="mb-2 text-sm text-zinc-200 font-semibold">{selectedFile.name}</p>
                <p className="text-xs text-zinc-400">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                </>
            ) : (
                <>
                <Upload className="w-12 h-12 mb-4 text-zinc-400" />
                <p className="mb-2 text-sm text-zinc-400">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-zinc-500">PDF or DOCX (MAX. 5MB)</p>
                </>
            )}
          </div>
        </div>

        <Button 
            onClick={onSubmit} 
            disabled={!selectedFile || isUploading}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-500 text-white"
        >
            {isUploading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                </>
            ) : (
                "Generate Website"
            )}
        </Button>
      </CardContent>
    </Card>
  );
}
