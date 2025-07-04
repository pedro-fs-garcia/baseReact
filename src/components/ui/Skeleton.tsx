import { motion } from 'framer-motion';

interface SkeletonProps {
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  className?: string;
}

export default function Skeleton({
  variant = 'text',
  width,
  height,
  className = ''
}: SkeletonProps) {
  const getVariantClasses = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'rectangular':
        return 'rounded-md';
      case 'text':
      default:
        return 'rounded';
    }
  };

  const getDefaultDimensions = () => {
    switch (variant) {
      case 'circular':
        return { width: '40px', height: '40px' };
      case 'rectangular':
        return { width: '100%', height: '200px' };
      case 'text':
      default:
        return { width: '100%', height: '1em' };
    }
  };

  const defaultDims = getDefaultDimensions();
  const finalWidth = width || defaultDims.width;
  const finalHeight = height || defaultDims.height;

  return (
    <motion.div
      className={`
        bg-background-200 ${getVariantClasses()} ${className}
      `}
      style={{
        width: typeof finalWidth === 'number' ? `${finalWidth}px` : finalWidth,
        height: typeof finalHeight === 'number' ? `${finalHeight}px` : finalHeight
      }}
      animate={{
        background: [
          'var(--color-background-200)',
          'var(--color-background-300)',
          'var(--color-background-200)'
        ]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
    />
  );
} 