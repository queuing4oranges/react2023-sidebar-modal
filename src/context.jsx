import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext)

export default function AppContext(props) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => setIsSidebarOpen(true)

    const closeSidebar = () => setIsSidebarOpen(false)

    const openModal = () => setIsModalOpen(true)
    
    const closeModal = () => setIsModalOpen(false)

    return (
        <GlobalContext.Provider value={{isSidebarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal}}>
            {props.children}
        </GlobalContext.Provider>
    )
}