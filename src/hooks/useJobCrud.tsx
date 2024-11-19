import { createContext, useContext, useState, ReactNode } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

interface Job {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

interface JobContextType {
  postJob: (job: Job) => Promise<void>;
  loading: boolean;
  error: string | null;
}

export const JobContext = createContext<JobContextType | null>(null);

interface JobProviderProps {
  children: ReactNode;
}

export function JobProvider({ children }: JobProviderProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postJob = async (job: Job) => {
    setLoading(true);
    setError(null);

    try {
      await addDoc(collection(db, "jobs"), {
        ...job,
        postedAt: serverTimestamp(),
      });
      setLoading(false);
    } catch (err) {
      setError("Failed to post the job. Please try again.");
      setLoading(false);
    }
  };

  return (
    <JobContext.Provider value={{ postJob, loading, error }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJob() {
  const context = useContext(JobContext);
  if (context === null) {
    throw new Error("useJob must be used within a JobProvider");
  }
  return context;
}
