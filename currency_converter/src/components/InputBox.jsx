import React from "react";

function InputBox({
    label,
    amount = 0, // Ensure a default value
    onAmountChange, // Fixed the casing to match the parent prop
    onCurrencyChange, // Fixed the casing to match the parent prop
    currencyOptions = [], // Ensure a default value
    selectCurrency = "usd",
    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            {/* Input for Amount */}
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className=" text-black/40 outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} // Fixed casing
                />
            </div>

            {/* Dropdown for Currency Selection */}
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="text-black/40 rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} // Fixed casing
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
