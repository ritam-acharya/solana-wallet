import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import { LuBlocks } from "react-icons/lu";
import Button from "../../components/Button";


export default function Page1Onboarding({setCreateNewWallet, setCurrentTab, setImportWallet}: {setCreateNewWallet: React.Dispatch<React.SetStateAction<boolean>>, setImportWallet: React.Dispatch<React.SetStateAction<boolean>> , setCurrentTab: React.Dispatch<React.SetStateAction<number>>}) {

    const [agree, setAgree] = useState(false);

    function createNewWallet() {
        setCurrentTab(2);
        setCreateNewWallet(true);
    }

    function importWallet() {
        setCurrentTab(2);
        setImportWallet(true);
    }

        return <div className=" w-auto h-full ">
            <div className="h-full w-auto flex flex-col items-center py-4 md:py-8 lg:py-16 px-4 ">
                <div className=" flex items-center justify-center py-6">
                    <div className="h-auto w-auto items-center justify-center bg-[#202127] px-5 py-5 rounded-full inline-block ">
                        <LuBlocks className="text-4xl "/>
                    </div>
                </div>
                <h2 id="button" className="text-center px-3 text-xl md:text-2xl lg:text-3xl ">Welcome to Crypto Wallet</h2>
                <p className="text-center px-3 py-2 text-[#8E96A5] text-[16px] md:text-lg lg:text-xl ">You'll use this wallet to send and receive crypto </p>
            
                {/** part 2 */}
                <div className="self-end mt-auto flex flex-col items-center h-auto w-full gap-4 cursor-pointer ">
                    <div 
                    onClick={() => setAgree(prev => !prev)}
                    className="w-full h-auto flex items-center justify-center gap-2 text-[16px] md:text-lg">
                        {
                            agree ?
                            <MdCheckBox 
                            className="text-lg cursor-pointer  text-blue-400" />
                            :
                            <MdCheckBoxOutlineBlank 
                            className="text-lg cursor-pointer" />
                        }
                        <div>I agree to the <span className="text-blue-400 cursor-pointer text-[16px] md:text-lg">Terms of Service.</span></div>
                    </div>
                    <Button bgColor="#AB9FF2" textColor="#000" text="create a new wallet" disable={!agree} eventHandler={createNewWallet} />
                    <Button bgColor="#202127" textColor="white" text="I already have a wallet" disable={!agree} eventHandler={importWallet} />   
                </div>
            </div>
        </div>
}