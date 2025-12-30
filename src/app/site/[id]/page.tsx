import { notFound } from "next/navigation";
import db from "@/lib/db";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Globe, Mail, MapPin, Share2 } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  };
}

// Ensure params are correctly awaited in Next.js 15+ if needed, but for 14/15 standard:
// Next.js 15 might require awaiting params. Let's assume standard behavior or await it if strict.
// For safety in latest Next.js versions, we treat params as a promise if necessary or standard object.
// We will use standard access for now.

async function getSite(id: string) {
  const site = await db.site.findUnique({
    where: { id },
    include: { user: true },
  });
  if (!site) return null;
  return site;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const site = await getSite(params.id);
  if (!site) return { title: "Resume Not Found" };
  
  const content = site.content as any;
  const name = content.personalInfo?.name || "Digital Resume";
  
  return {
    title: \`\${name} - Professional Portfolio\`,
    description: content.personalInfo?.summary || "Professional Digital Resume",
  };
}

export default async function SitePage({ params }: PageProps) {
  const site = await getSite(params.id);

  if (!site) {
    notFound();
  }

  const content = site.content as any;
  const { personalInfo, workExperience, education, skills } = content;

  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 pb-16 pt-24 sm:pb-24">
         <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
                <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-100 dark:bg-blue-500/10 dark:text-blue-400">
                    Open to Work
                </Badge>
                <h1 className="font-heading text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
                    {personalInfo?.name || "Your Name"}
                </h1>
                <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                    {personalInfo?.headline || "Senior Software Engineer"}
                </p>
                
                <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-zinc-600 dark:text-zinc-400">
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {personalInfo?.location || "Remote"}
                    </div>
                     <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        {personalInfo?.email || "email@example.com"}
                    </div>
                    {/* Placeholder for real website link if we had it */}
                     <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        {site.domain}.digresumepro.com
                    </div>
                </div>

                <div className="mt-10 flex justify-center gap-4">
                     <Button className="rounded-full bg-zinc-900 px-8 text-white hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                        Contact Me
                     </Button>
                     <Button variant="outline" className="rounded-full border-zinc-200 dark:border-zinc-800">
                        <Share2 className="mr-2 h-4 w-4" />
                        Share Profile
                     </Button>
                </div>
            </div>
         </div>
         {/* Background decoration */}
         <div className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl opacity-30 dark:opacity-20" aria-hidden="true">
            <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
         </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
         {/* Summary */}
         <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold font-heading text-zinc-900 dark:text-white">About</h2>
            <div className="prose prose-zinc dark:prose-invert max-w-none text-zinc-600 dark:text-zinc-400">
                <p>{personalInfo?.summary || "No summary provided."}</p>
            </div>
         </div>

         {/* Work Experience */}
         <div className="mb-16">
            <h2 className="mb-8 text-2xl font-bold font-heading text-zinc-900 dark:text-white">Experience</h2>
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 space-y-12">
                {workExperience?.map((role: any, index: number) => (
                    <div key={index} className="relative pl-8">
                        <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-white bg-blue-500 ring-4 ring-white dark:border-zinc-900 dark:bg-blue-500 dark:ring-zinc-950" />
                        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">{role.position}</h3>
                         <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-zinc-500 dark:text-zinc-400 mb-4">
                            <span className="font-medium text-zinc-900 dark:text-zinc-300">{role.company}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{role.startDate} - {role.endDate}</span>
                        </div>
                        <p className="text-zinc-600 dark:text-zinc-400 whitespace-pre-line">{role.description}</p>
                    </div>
                ))}
            </div>
         </div>

         {/* Education */}
         <div className="grid md:grid-cols-2 gap-12">
            <div>
                 <h2 className="mb-6 text-2xl font-bold font-heading text-zinc-900 dark:text-white">Education</h2>
                 <div className="space-y-6">
                    {education?.map((edu: any, index: number) => (
                        <div key={index} className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/50">
                            <h3 className="font-bold text-zinc-900 dark:text-white">{edu.institution}</h3>
                            <p className="text-blue-600 dark:text-blue-400">{edu.degree}</p>
                            <p className="text-sm text-zinc-500">{edu.date}</p>
                        </div>
                    ))}
                 </div>
            </div>

            {/* Skills */}
             <div>
                 <h2 className="mb-6 text-2xl font-bold font-heading text-zinc-900 dark:text-white">Skills</h2>
                 <div className="flex flex-wrap gap-2">
                    {skills?.map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary" className="rounded-md px-3 py-1 text-sm">
                            {skill}
                        </Badge>
                    ))}
                 </div>
            </div>
         </div>
      </div>
    </main>
  );
}
