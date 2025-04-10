import React from 'react';

const ButtonLoadMore = ({ onClick, isLoading, className }) => {
    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center justify-center gap-2 py-[16px] px-[24px] ${className}`}
            style={{
                display: 'inline-flex',
                padding: 'var(--Spacing-Padding-L, 16px)',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'var(--Spacing-Gap-XS, 8px)',
                borderRadius: 'var(--Radius-XL, 12px)',
                border: 'var(--Stroke-S, 1px) solid var(--primary-unpas, #FEF251)',
                background: 'var(--primary-unpas, #FEF251)',
                boxShadow: '0px 20px 40px 0px rgba(0, 0, 0, 0.05)',
            }}
        >
            {isLoading ? (
                <svg
                    className="animate-spin h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    <circle cx="12" cy="12" r="10" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ) : (
                <span className="text-black">Load More</span>
            )}
        </button>
    );
};

export default ButtonLoadMore;
