import type { ReactNode } from 'react';
import { Swiper, type SwiperProps } from 'swiper/react';
import 'swiper/swiper-bundle.css';

interface SliderProps {
    settings: SwiperProps;
    children: ReactNode;
}

export default function Slider({ settings, children }: SliderProps) {
    return <Swiper {...settings}>
        {children}
    </Swiper>;
}