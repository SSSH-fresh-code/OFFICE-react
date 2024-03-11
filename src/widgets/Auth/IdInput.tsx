interface IdInputProps {
  id: string,
  setId: (id: string) => void;
}

export default function IdInput({ id, setId }: IdInputProps) {
  return <div className="space-y-2">
    <label
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      htmlFor="id"
    >
      아이디
    </label>
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      id="id"
      value={id}
      onChange={(e) => setId(e.target.value)}
      placeholder="ID"
      required />
  </div>;
}
