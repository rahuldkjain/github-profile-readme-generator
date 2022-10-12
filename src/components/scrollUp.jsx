import React from 'react';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = React.useState(false);

  React.useEffect(() => {
    const toggleHiddeButton = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', toggleHiddeButton);

    return () => {
      window.removeEventListener('scroll', toggleHiddeButton);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!showTopBtn) return null;

  return (
    <div className="relative">
      <button
        onClick={goToTop}
        type="button"
        className="fixed cursor-pointer focus:outline-none h-10 w-10 bg-blue-500 text-white text-xs rounded-full flex justify-center items-center"
        style={{
          bottom: 25,
          right: 100,
        }}
      >
        <svg style={{ width: '24px', height: '24px' }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M7,15L12,10L17,15H7Z" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollToTop;
