export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-base-100 animate-fade-in">
      <div className="flex flex-col items-center">
        {/* DaisyUI spinner */}
        <span className="loading loading-spinner loading-lg"></span>

        <p className="mt-4 text-lg font-semibold text-gray-600">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}