import RightBg_login from "@/app/components/auth/rbg_Login/page";
import Login_Registration from "@/app/components/auth/login/page";
export const auth = () => {
  return (
    <div className="items-center justify-center w-full h-[100vh] flex flex-col font-system ">
      <div className="flex flex-row items-center justify-center w-full h-full ">
        <Login_Registration />

        <RightBg_login />
      </div>
    </div>
  );
};

export default auth;
