'use client';

import { useMemo, useState, useEffect } from "react";

const objectTypes = [
  { label: "Мостовые сооружения", factor: 1.6 },
  { label: "Гражданское строительство", factor: 5 },
  { label: "Дорожное полотно", factor: 3 },
  { label: "Капремонт", factor: 2 },
];

const workTypes = [
  { label: "Инженерные изыскания", factor: 1.6 },
  { label: "Разработка проектной документации", factor: 10 },
  { label: "Анализ проектных решений", factor: 4 },
];

const BASE_PRICE = 2000;

export default function CostCalculator() {
  const [area, setArea] = useState(3000);
  const [objectType, setObjectType] = useState(objectTypes[1].label);
  const [workType, setWorkType] = useState(workTypes[1].label);

  const rawResult = useMemo(() => {
    const objectFactor =
      objectTypes.find((t) => t.label === objectType)?.factor ?? 1;

    const workFactor =
      workTypes.find((t) => t.label === workType)?.factor ?? 1;

    let cost =
      area *
      BASE_PRICE *
      objectFactor *
      workFactor;

    cost = cost / 1_000_000;

    // ограничение диапазона
    return Math.min(Math.max(cost, 10), 300);
  }, [area, objectType, workType]);

  // 💥 АНИМАЦИЯ ЧИСЛА (делает изменение заметным)
  const [displayValue, setDisplayValue] = useState(rawResult);

  useEffect(() => {
    let start = displayValue;
    let end = rawResult;
    let frame: number;

    const animate = () => {
      start += (end - start) * 0.12;
      setDisplayValue(start);

      if (Math.abs(end - start) > 0.01) {
        frame = requestAnimationFrame(animate);
      }
    };

    animate();

    return () => cancelAnimationFrame(frame);
  }, [rawResult]);

  return (
    <section className="w-full flex justify-center py-24 px-6 bg-gray-100">
      <div className="w-full max-w-[900px] bg-white p-10 rounded-2xl shadow-lg flex flex-col gap-10">

        <h2 className="text-3xl font-bold text-blue-700">
          Калькулятор стоимости работ
        </h2>

        {/* ПЛОЩАДЬ */}
        <div className="flex flex-col gap-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>Площадь</span>
            <span className="font-bold text-blue-600">
              {area.toLocaleString()} м²
            </span>
          </div>

          <input
            type="range"
            min={500}
            max={10000}
            step={100}
            value={area}
            onChange={(e) => setArea(Number(e.target.value))}
            className="w-full accent-blue-600"
          />
        </div>

        {/* ОБЪЕКТ */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Тип объекта</h3>
          <div className="grid grid-cols-2 gap-3">
            {objectTypes.map((t) => (
              <button
                key={t.label}
                onClick={() => setObjectType(t.label)}
                className={`p-3 border rounded-lg transition duration-200 ${
                  objectType === t.label
                    ? "bg-blue-600 text-white scale-[1.02]"
                    : "hover:bg-gray-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* РАБОТЫ */}
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold">Тип работ</h3>
          <div className="grid grid-cols-1 gap-3">
            {workTypes.map((t) => (
              <button
                key={t.label}
                onClick={() => setWorkType(t.label)}
                className={`p-3 border rounded-lg transition duration-200 ${
                  workType === t.label
                    ? "bg-blue-600 text-white scale-[1.02]"
                    : "hover:bg-gray-100"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* РЕЗУЛЬТАТ */}
        <div className="mt-4 p-6 bg-blue-50 rounded-xl flex flex-col gap-2 transition-all duration-300">
          <span className="text-gray-600 text-sm">
            Примерная стоимость
          </span>

          <span className="text-4xl font-bold text-blue-700 transition-all">
            {displayValue.toFixed(1)} млн ₽
          </span>
        </div>

      </div>
    </section>
  );
}