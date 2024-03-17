interface PwInputProps {
  pw: string,
  setPw: (id: string) => void;
  loginEvent: () => void;
}

export function PwInput({ pw, setPw, loginEvent }: PwInputProps) {
  return <div className="space-y-2">
    <div className="flex items-center">
      <label
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        htmlFor="password"
      >
        비밀번호
      </label>
      <a className="ml-auto inline-block text-sm underline" href="#">
        비밀번호 찾기
      </a>
    </div>
    <input
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      id="password"
      value={pw}
      onChange={(e) => { setPw(e.target.value) }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          (e.target as HTMLInputElement).blur();
          loginEvent();
        }
      }}
      required
      placeholder="Password"
      type="password" />
  </div>;
}
