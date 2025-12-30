import { DashboardNav } from "@/components/dashboard/dashboard-nav";
import { UploadResumeForm } from "@/components/forms/upload-resume-form";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black">
      <DashboardNav />
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white font-heading mb-2">My Resumes</h1>
          <p className="text-zinc-400">Manage your digital resumes or create a new one</p>
        </div>
        
        <UploadResumeForm />
      </div>
    </main>
  );
}
