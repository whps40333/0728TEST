import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    // 在這裡處理登出的邏輯，例如清除用戶驗證，將用戶導向登入頁面等
    // 這裡只是一個示例，你需要根據你的實際情況來處理
    alert("登出成功！");
  };

  return <button onClick={handleLogout}>登出</button>;
};

export default LogoutButton;
