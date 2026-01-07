import "../index.css";

export default function Button({bgColor, textColor, text, disable, eventHandler}: {bgColor: string, textColor: string, text: string, disable: boolean, eventHandler: () => void}) {
    return <div id="button"
    onClick={() => {
        if(!disable) {
            eventHandler();
        }
    }}
    className={` bg-[${bgColor}] text-[${textColor}] inline-block px-4 py-3 rounded-lg cursor-pointer h-auto w-[300px] md:[400px] lg:w-[450px] text-center ${disable ? "cursor-not-allowed opacity-50" : ""}  `}>
        {text}
    </div>
}