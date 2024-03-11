import usePopSotre from "./data/store/popup.store";

export function Pop() {
  const { message, disappear } = usePopSotre();
  return <div className={`absolute top-0 left-0 z-30 bg-transparent w-screen h-screen flex justify-center items-center`}>
    <div className="w-[400px] rounded-lg border bg-card text-card-foreground shadow-sm bg-white" data-v0-t="card">
      <div className="flex  space-y-1.5 p-6 flex-col items-center">
        <h3 className="font-semibold whitespace-nowrap tracking-tight text-2xl">Info</h3>
      </div>
      <div className="text-center">{message}</div>
      <div className="flex justify-center items-center p-6 pt-12">
        <button onClick={() => disappear()} className="bg-black text-white flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
          확인
        </button>
      </div>
    </div>
  </div>;
}
