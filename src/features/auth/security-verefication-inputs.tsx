import {useState, useRef, useEffect} from 'react';

export function SecurityVereficationInputs() {
    const [code, setCode] = useState(['', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (value.length > 1) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);
        if (value && index < 3) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !code[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 4);
        const newCode = [...code];

        for (let i = 0; i < pastedData.length; i++) {
            if (i < 4) {
                newCode[i] = pastedData[i];
            }
        }

        setCode(newCode);

        const lastFilledIndex = Math.min(pastedData.length - 1, 3);
        if (lastFilledIndex < 3) {
            inputRefs.current[lastFilledIndex + 1]?.focus();
        } else {
            inputRefs.current[3]?.focus();
        }
    };

    return (
        <div className="flex flex-col gap-5">


            <div className="flex gap-3 justify-center">
                {code.map((digit, index) => (
                    <input
                        key={index}
                        ref={(el) => (inputRefs.current[index] = el)}
                        type="text"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        onPaste={handlePaste}
                        className="w-[71px] h-[96px] text-center text-[24px] font-bold border-[1px] border-[#d0dcff]  p-[15px] bg-transparent text-white outline-0 ring-0 rounded-lg transition-all duration-200"
                        placeholder=""
                    />
                ))}
            </div>

        </div>
    );
}