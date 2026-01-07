
export default function Mnemonic({id, mnemonic}: {id: number, mnemonic: string}) {
    return <div className="bg-[#191919] text-white border-[0.5px] border-gray-600 px-3 py-2">
        <span>{id}.</span>
        <p>{mnemonic}</p>
    </div>
}