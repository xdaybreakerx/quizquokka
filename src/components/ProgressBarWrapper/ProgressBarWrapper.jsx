import { Progress } from "@/components/ui/progress";

export function ProgressBarWrapper({ loading, progress, children }) {
  return (
    <div>
      {loading ? (
        <div className="w-full flex flex-col items-center">
          <Progress value={progress} className="w-[60%]" />
          <p className="mt-2">Loading...</p>
        </div>
      ) : (
        children
      )}
    </div>
  );
}
