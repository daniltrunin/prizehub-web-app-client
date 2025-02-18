import SidebarButtons from "../SidebarButton/SidebarButtons";
import Logo from "../Logo/Logo";

function Sidebar() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        height: "100vh",
      }}
    >
      <div style={{ marginBottom: "75px" }}>
        <Logo mb="20px" />
      </div>
      <SidebarButtons />
    </div>
  );
}

export default Sidebar;
