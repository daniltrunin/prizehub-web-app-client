import Header from "@/components/common/Header/Header";
import Sidebar from "@/components/common/Sidebar/Sidebar";

function Main() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <Header />
    </div>
  );
}

export default Main;
