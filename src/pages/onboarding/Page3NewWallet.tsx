import { useState } from "react";
import Button from "../../components/Button";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

export default function Page3NewWalletOnboarding() {
    const [disable, setDisable] = useState(true);

    function saveMnemonics() {

    }

    return <div className=" w-auto h-full ">
        <div className="h-full w-auto flex flex-col items-center py-4 md:py-8 lg:py-16 px-4 ">
            <div className="h-auto w-full flex flex-col items-center justify-center gap-1">
                <h2 id="button" className="text-center px-3 text-xl md:text-2xl lg:text-3xl ">Create a password</h2>
                <p className="text-center px-3 py-2 text-white text-[16px] md:text-lg lg:text-xl ">You will use this to unlock your wallet</p>
            </div>
            <div className="h-auto w-full self-end mt-auto ">
                <div 
                onClick={() => setDisable(prev => !prev)}
                className="w-full h-auto flex items-center justify-center gap-3 text-[16px] my-3 md:text-lg">
                    {
                        !disable ?
                        <MdCheckBox 
                        className="text-lg cursor-pointer  text-blue-400" />
                        :
                            <MdCheckBoxOutlineBlank 
                        className="text-lg cursor-pointer" />
                    }
                    <div>I saved my Recovery Phrase </div>
                </div>
                <Button text="Continue" bgColor="#AB9FF2" textColor="#000" disable={disable} eventHandler={saveMnemonics}  />
            </div>
        </div>
    </div>
}