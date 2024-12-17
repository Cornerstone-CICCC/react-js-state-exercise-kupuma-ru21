import { useState } from "react";

export function LottoNumbers() {
  const [lottoNumbers, setLottoNumbers] = useState<number[]>([]);
  const generateSevenRandomNumbersBetweenOneAndFifty = () => {
    const numbers = Array.from(
      { length: 7 },
      () => Math.floor(Math.random() * 50) + 1
    );
    setLottoNumbers(numbers);
  };
  return (
    <>
      <button
        onClick={generateSevenRandomNumbersBetweenOneAndFifty}
        type="button"
      >
        Generate Lotto Numbers
      </button>
      <ul>
        {lottoNumbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </>
  );
}
