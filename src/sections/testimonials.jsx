import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';

import testimonialsData from '@/data/testimonials.json';

function Testimonials() {
  const [emablaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      startIndex: 1,
    },
    [
      Autoplay({
        delay: 5_000,
        playOnInit: true,
        stopOnInteraction: false,
      }),
    ]
  );
  const [currentNode, setCurrentNode] = useState(null);
  const isTablet = useMediaQuery('(min-width: 640px)');

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentNode(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section className="testimonials">
      <h2>What they&apos;ve said</h2>
      <div className="embla" ref={emablaRef}>
        <div className="embla__container">
          {testimonialsData.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="avatar">
                <img src={item.avatar} alt={item.author} />
              </div>
              <div className="text-container">
                <h3>{item.author}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!isTablet && (
        <div className="carousel__bullets">
          {testimonialsData.map((_, index) => (
            <button
              key={index}
              className={`carousel__bullet ${index === currentNode ? 'is-active' : ''}`}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
            />
          ))}
        </div>
      )}
      <a href="#" className="button button--primary">
        Get Started
      </a>
    </section>
  );
}

export default Testimonials;
