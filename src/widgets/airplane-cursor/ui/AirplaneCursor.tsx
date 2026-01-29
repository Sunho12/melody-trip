'use client';

import { useEffect, useRef, useState } from 'react';

export function AirplaneCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const lastPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleClick = (e: MouseEvent) => {
      // 클릭 효과 생성
      const effect = document.createElement('div');
      effect.className = 'airplane-click-effect';
      effect.innerHTML = '💥';
      effect.style.left = e.clientX + 'px';
      effect.style.top = e.clientY + 'px';
      document.body.appendChild(effect);

      setTimeout(() => effect.remove(), 600);

      // 비행기 확대 애니메이션
      if (cursorRef.current) {
        const airplane = cursorRef.current.querySelector('.airplane-emoji');
        if (airplane) {
          (airplane as HTMLElement).style.transform = 'scale(1.5)';
          setTimeout(() => {
            (airplane as HTMLElement).style.transform = 'scale(1)';
          }, 200);
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    let animationFrameId: number;

    const updateCursor = () => {
      setCursorPos((prev) => {
        const newX = prev.x + (mousePos.x - prev.x) * 0.15;
        const newY = prev.y + (mousePos.y - prev.y) * 0.15;

        // 이동 방향 계산 및 회전 각도 설정
        const deltaX = newX - lastPos.current.x;
        const deltaY = newY - lastPos.current.y;
        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

        if (Math.abs(deltaX) > 0.5 || Math.abs(deltaY) > 0.5) {
          setRotation(angle);

          // 반짝이 트레일 생성
          if (Math.random() > 0.3) {
            const sparkles = ['✨', '💫', '⭐', '🌟'];
            const sparkle = document.createElement('div');
            sparkle.className = 'airplane-sparkle';
            sparkle.innerHTML = sparkles[Math.floor(Math.random() * sparkles.length)];
            sparkle.style.left = newX + 16 + (Math.random() - 0.5) * 20 + 'px';
            sparkle.style.top = newY + 16 + (Math.random() - 0.5) * 20 + 'px';
            sparkle.style.fontSize = (12 + Math.random() * 8) + 'px';
            document.body.appendChild(sparkle);

            setTimeout(() => sparkle.remove(), 1000);
          }

          // 부드러운 비행운 (덜 자주)
          if (Math.random() > 0.7) {
            const trail = document.createElement('div');
            trail.className = 'airplane-trail';
            trail.style.left = newX + 16 + 'px';
            trail.style.top = newY + 16 + 'px';
            document.body.appendChild(trail);

            setTimeout(() => trail.remove(), 800);
          }
        }

        lastPos.current = { x: newX, y: newY };
        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePos]);

  return (
    <div
      ref={cursorRef}
      className="airplane-cursor"
      style={{
        left: `${cursorPos.x}px`,
        top: `${cursorPos.y}px`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div className="airplane-emoji">✈️</div>
    </div>
  );
}
