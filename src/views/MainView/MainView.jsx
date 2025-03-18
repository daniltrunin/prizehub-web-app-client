import Header from "@/components/common/Header/Header";
import Sidebar from "@/components/common/Sidebar/Sidebar";
import Channels from "@/components/common/Channels/Channels";

function Main() {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      <Sidebar />
      <div style={{ maxWidth: "100%", width: "100%" }}>
        <Header />
        <Channels />
      </div>
    </div>
  );
}

export default Main;
