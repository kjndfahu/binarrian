'use client';

import { useEffect, useRef } from 'react';

export default function WalletChart() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Данные для чарта
        const data = [
            { value: 45, color: '#F7931A' },
            { value: 30, color: '#627EEA' },
            { value: 25, color: '#26A17B' }
        ];
        const total = data.reduce((sum, item) => sum + item.value, 0);

        // Рисуем чарт
        let startAngle = 0;
        data.forEach(item => {
            const sliceAngle = (item.value / total) * 2 * Math.PI;
            ctx.beginPath();
            ctx.moveTo(81.5, 81.5); // Центр канваса
            ctx.arc(81.5, 81.5, 40, startAngle, startAngle + sliceAngle);
            ctx.fillStyle = item.color;
            ctx.fill();
            startAngle += sliceAngle;
        });

        // Рисуем внутренний бордер
        ctx.beginPath();
        ctx.arc(81.5, 81.5, 30, 0, 2 * Math.PI);
        ctx.strokeStyle = '#800080'; // Фиолетовый бордер
        ctx.lineWidth = 2;
        ctx.stroke();

        // Добавляем текст
        ctx.fillStyle = '#FFFFFF'; // Белый текст
        ctx.font = '20px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('2.31% ↑', 81.5, 81.5); // Центр текста
    }, []);

    return (
        <canvas
            ref={canvasRef}
            width={163}
            height={163}
            style={{ border: '2px solid #800080' }} // Внешний фиолетовый бордер
        />
    );
}