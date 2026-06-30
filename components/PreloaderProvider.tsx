'use client';

import { useEffect, useState } from 'react';
import Preloader from "@/components/Preloader";

export default function PreloaderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {

        const interval = setInterval(() => {

            setProgress(prev => {

                if (prev >= 100) {
                    clearInterval(interval);

                    setTimeout(() => {
                        setLoading(false);
                    }, 300);

                    return 100;
                }

                return prev + 2;
            });

        }, 25);

        return () => clearInterval(interval);

    }, []);

    if (!loading) return children;
  return (
    <>
        <Preloader progress={progress}/>
        {children}
    </>
  );
}