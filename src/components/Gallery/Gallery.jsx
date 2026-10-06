import { useEffect, useRef, useState } from "react";
import galleryImages from "../../data/galleryImages";
import "./Gallery.scss";

const INITIAL_VISIBLE_IMAGES = 10;

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    const closeButtonRef = useRef(null);
    const lastFocusedElement = useRef(null);
    const galleryRef = useRef(null);
    const lightboxRef = useRef(null);

    const visibleImages = showAll
        ? galleryImages
        : galleryImages.slice(0, INITIAL_VISIBLE_IMAGES);


    const openLightbox = (index) => {
        lastFocusedElement.current = document.activeElement;
        setActiveIndex(index);
    };

    const closeLightbox = () => {
        setActiveIndex(null);

        setTimeout(() => {
            lastFocusedElement.current?.focus();
        }, 0);
    };

    const showPrevious = () => {
        setActiveIndex((current) =>
            current === 0
                ? galleryImages.length - 1
                : current - 1
        );
    };

    const showNext = () => {
        setActiveIndex((current) =>
            current === galleryImages.length - 1
                ? 0
                : current + 1
        );
    };


    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) {
            closeLightbox();
        }
    };


    const toggleGallery = () => {
        if (showAll) {
            setShowAll(false);

            // Retour au début de la galerie
            setTimeout(() => {
                galleryRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 0);

            return;
        }

        setShowAll(true);
    };

    useEffect(() => {
        if (activeIndex === null) return;

        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeLightbox();
                return;
            }

            if (event.key === "ArrowLeft") {
                showPrevious();
                return;
            }

            if (event.key === "ArrowRight") {
                showNext();
                return;
            }

            if (event.key === "Tab") {
                const focusableElements =
                    lightboxRef.current?.querySelectorAll(
                        'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    );

                if (!focusableElements?.length) return;

                const firstElement = focusableElements[0];
                const lastElement =
                    focusableElements[focusableElements.length - 1];

                // Shift + Tab sur le premier élément
                if (
                    event.shiftKey &&
                    document.activeElement === firstElement
                ) {
                    event.preventDefault();
                    lastElement.focus();
                }

                // Tab sur le dernier élément
                if (
                    !event.shiftKey &&
                    document.activeElement === lastElement
                ) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.classList.add("lightbox-open");

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.classList.remove("lightbox-open");
        };
    }, [activeIndex]);

    return (
        <section
            ref={galleryRef}
            className="gallery"
            id="realisations"
            aria-labelledby="gallery-title"
        >
            <div className="gallery__container">

                <h2 id="gallery-title">
                    Mes réalisations
                </h2>

                {/* GALERIE */}
                <div className="gallery__grid"  id="gallery-list">
                    {visibleImages.map((image, index) => (
                        <button
                            className={`
                                gallery__item
                                gallery__item--${image.format}
                            `}
                            type="button"
                            key={image.src}
                            onClick={() => openLightbox(index)}
                            aria-label={`Agrandir : ${image.alt}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                decoding="async"
                                width="700"
                                height={
                                    image.format === "vertical"
                                        ? "1050"
                                        : "700"
                                }
                            />

                            <span
                                className="gallery__overlay"
                                aria-hidden="true"
                            >
                                <span className="gallery__zoom">
                                    +
                                </span>
                            </span>
                        </button>
                    ))}
                </div>

                <button
                    className="gallery__more"
                    type="button"
                    onClick={toggleGallery}
                    aria-expanded={showAll}
                    aria-controls="gallery-list"
                >
                    <span>
                        {showAll
                            ? "Afficher moins"
                            : "Afficher plus"}
                    </span>
                </button>
            </div>

            {activeIndex !== null && (
                <div
                        ref={lightboxRef}
                        className="lightbox"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Galerie des réalisations"
                        onClick={handleBackdropClick}
                >
                    <button
                        ref={closeButtonRef}
                        className="lightbox__close"
                        type="button"
                        onClick={closeLightbox}
                        aria-label="Fermer la galerie"
                    >
                        ×
                    </button>

                    <button
                        className="
                            lightbox__navigation
                            lightbox__navigation--previous
                        "
                        type="button"
                        onClick={showPrevious}
                        aria-label="Image précédente"
                    >
                        ‹
                    </button>

                    <div className="lightbox__content">
                        <img
                            src={galleryImages[activeIndex].src}
                            alt={galleryImages[activeIndex].alt}
                            width="700"
                            height={
                                galleryImages[activeIndex].format ===
                                "vertical"
                                    ? "1050"
                                    : "700"
                            }
                        />

                        <p
                            className="lightbox__counter"
                            aria-live="polite"
                        >
                            {activeIndex + 1} / {galleryImages.length}
                        </p>
                    </div>

                    <button
                        className="
                            lightbox__navigation
                            lightbox__navigation--next
                        "
                        type="button"
                        onClick={showNext}
                        aria-label="Image suivante"
                    >
                        ›
                    </button>
                </div>
            )}
        </section>
    );
};

export default Gallery;