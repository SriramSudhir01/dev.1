"use client";

interface AdContainerProps {
  className?: string;
  slot: string;
  format?: 'auto' | 'horizontal' | 'vertical' | 'rectangle';
  responsive?: boolean;
}

export default function AdContainer({ 
  className = '', 
  slot, 
  format = 'auto',
  responsive = true 
}: AdContainerProps) {
  const getAdStyle = () => {
    switch (format) {
      case 'horizontal':
        return { minHeight: '90px', width: '728px' };
      case 'vertical':
        return { minHeight: '600px', width: '160px' };
      case 'rectangle':
        return { minHeight: '250px', width: '300px' };
      default:
        return { minHeight: '100px', width: '100%' };
    }
  };

  return (
    <div className={`ad-container ${className}`} style={getAdStyle()}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive={responsive}
      />
    </div>
  );
}