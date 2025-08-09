import { Outlet } from "react-router-dom";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <img 
        className="inset-0 w-full absolute top-0 z-[2] pointer-events-none select-none" 
        src="/img/light.png" 
        alt="light" 
      />
      <Outlet />
    </div>
  );
}