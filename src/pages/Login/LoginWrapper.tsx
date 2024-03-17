import pageStore from "../../data/store/auth.store";
import Login from "../../widgets/Auth/Login";

export default function LoginWrapper() {
  const store = pageStore();
  return (<div className="grid grid-cols-12 h-screen w-screen overflow-hidden">
    <div
      className="h-full col-span-8 hidden md:block  bg-cover bg-no-repeat bg-center"
      onClick={() => {
        store.setToken("a", "r");
      }}
      style={{
        backgroundImage: 'url("/src/assets/loginBg.webp")'
      }}
    />
    <div className="h-full col-span-12 md:col-span-4 bg-gray-50 md:bg-none">
      <Login />
    </div>
  </div>)
}