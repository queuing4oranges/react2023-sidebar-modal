import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
// import { useGlobalContext } from "./context";

const App = () => {
  // const { isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal } = useGlobalContext()


  return (
    <div className="app-container">
      <Home />
      <Sidebar />
      <Modal />
    </div>
  )
};
export default App;
