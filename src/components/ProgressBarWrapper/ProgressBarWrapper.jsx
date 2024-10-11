import { Progress } from "@/components/ui/progress";


/**
 * A wrapper component that conditionally renders either a progress bar with loading text or the children components based on the loading prop value.
 * @author Xander
 *
 * @export
 * @param {{ loading: any; progress: any; children: any; }} param0 An object containing the parameters for the ProgressBarWrapper function
 * @param {*} param0.loading A boolean indicating if the component is in a loading state
 * @param {*} param0.progress A number representing the progress of the loading state
 * @param {*} param0.children The children components to render within the ProgressBarWrapper
 * @returns {*} A wrapper component that displays a progress bar while loading, and renders children when not loading.
 */
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
