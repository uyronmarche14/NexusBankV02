import RightBg_login from "@/app/components/auth/rbg_Login/page";
export const auth = () => {
  return (
    <div className="items-center justify-center w-full h-[100vh] flex flex-col font-system ">
      <div>
        <div className="flex flex-row items-center justify-center h-full ">
          <RightBg_login />
          <RightBg_login />
        </div>
      </div>
    </div>
  );
};

export default auth;
