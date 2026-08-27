
import { UserProfileMockData } from "../features/dashboard/data/user-profile-mock-data";
import Sidebar from "../shared/components/sidebar/sidebar";
import TopNav from "../shared/components/topnav";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Right Side */}
      <div className="ml-16 flex min-w-0 flex-1 flex-col overflow-hidden md:ml-60">
        <TopNav user_data={UserProfileMockData} hasUnreadNotification={true}/>
        {/* Only this area scrolls */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
