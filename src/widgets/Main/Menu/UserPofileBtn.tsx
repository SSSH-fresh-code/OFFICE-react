export default function UserProfileBtn() {
  return (
    <button
      className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 "
      type="button"
      id="radix-:rn:"
      aria-haspopup="menu"
      aria-expanded="false"
      data-state="closed"
    >
      <img
        src="/src/assets/profile.png"
        width="32"
        height="32"
        className="rounded-full"
        alt="Avatar"
        style={{ aspectRatio: "32 / 32", objectFit: "cover" }}
      />
    </button>
  )
}