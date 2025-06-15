import React from 'react';

interface AppBarDetailProps {
  title?: string;
  onBack?: () => void;
}

const AppBarDetail: React.FC<AppBarDetailProps> = ({ title = 'Appbar', onBack }) => {
  const handleBack = () => {
    if (onBack) {
      onBack();
    }
  };

  return (
    <div className="flex items-center mb-6">
      <button
        aria-label="Back"
        onClick={handleBack}
        className="text-[#2E4B6E] text-xl mr-4"
      >
        <i className="fas fa-chevron-left" />
      </button>
      <h1 className="text-center flex-grow font-semibold text-[#2E2E2E] text-lg">
        {title}
      </h1>
      <div className="w-8" /> {/* Spacer biar teks tetap di tengah */}
    </div>
  );
};

export default AppBarDetail;
