import cx from "classnames";
import { Outlet } from "react-router-dom";

import { Navbar } from "@/components/Navbar";

function DashboardLayout() {
  return (
    <div className={cx("flex flex-col h-[100vh] bg-bg")}>
      <div className="top flex-grow-0">
        <Navbar />
      </div>
      <div className="content flex-grow-1 h-full overflow-y-auto">
        <div className="bound max-w-[928px] w-[calc(100%-48px)] mx-auto pb-20 lg:pb-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export { DashboardLayout };