import { useState } from "react";
import Page1Onboarding from "./onboarding/Page1";
import Page2NewWalletOnboarding from "./onboarding/Page2NewWallet";
import Page2importWalletOnboarding from "./onboarding/Page2ImportWallet";
import { FaArrowLeft } from "react-icons/fa";
import Page3NewWalletOnboarding from "./onboarding/Page3NewWallet";

export default function Onboarding() {
    const [currentTab, setCurrentTab] = useState(1);
    const [createNewWallet, setCreateNewWallet] = useState(false);
    const [importWallet, setImportWallet] = useState(false);
    

    return <div className="w-full h-[100vh] overflow-hidden flex flex-col items-center  justify-center py-10 px-4 md:px-6 lg:px-10  ">
        <div className="relative flex items-center justify-center gap-3 mt-6 mb-2 h-auto w-[320px] md:w-[420px] lg:w-[490px] py-2 px-2 ">
            {
                currentTab === 2 &&
                <div 
                onClick={() => setCurrentTab(prev => prev-1)}
                className="absolute left-4 top-1 text-[16px] md:text-lg cursor-pointer"><FaArrowLeft /></div>
            }
            <div className={`w-3 h-3 bg-[#969FAF] rounded-full ${currentTab === 1 ? "bg-[#4C94FF] " : currentTab > 1 ? "bg-[#223F6E]" : "" } `}></div>
            <div className={`w-3 h-3 bg-[#969FAF] rounded-full ${currentTab === 2 ? "bg-[#4C94FF] " : currentTab > 2 ? "bg-[#223F6E]" : "" } `}></div>
            <div className={`w-3 h-3 bg-[#969FAF] rounded-full ${currentTab === 3 ? "bg-[#4C94FF] " : currentTab > 3 ? "bg-[#223F6E]" : "" } `}></div>
            <div className={`w-3 h-3 bg-[#969FAF] rounded-full ${currentTab === 4 ? "bg-[#4C94FF] " : currentTab > 4 ? "bg-[#223F6E]" : "" } `}></div>
            <div className={`w-3 h-3 bg-[#969FAF] rounded-full ${currentTab === 5 ? "bg-[#4C94FF] " : currentTab > 5 ? "bg-[#223F6E]" : "" } `}></div>
        </div>
        <div className="w-[320px] md:w-[420px] lg:w-[490px] py-2 px-2 h-full">
            {
                currentTab === 1 ?
                <Page1Onboarding setCurrentTab={setCurrentTab} setCreateNewWallet={setCreateNewWallet} setImportWallet={setImportWallet}  />
                :
                currentTab === 2 && createNewWallet ?
                <Page2NewWalletOnboarding setCurrentTab={setCurrentTab} />
                :
                currentTab === 2 && importWallet ?
                <Page2importWalletOnboarding setCurrentTab={setCurrentTab} />
                :
                currentTab === 3 && createNewWallet &&
                <Page3NewWalletOnboarding />
            }
        </div>
    </div>
}