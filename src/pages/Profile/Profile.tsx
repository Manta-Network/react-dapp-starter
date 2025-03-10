// src/components/ResponsiveDemo.tsx
import { useEffect, useState } from 'react';

import { px2rem, DEVICE_BREAKPOINTS } from '@/lib/responsive';

const ResponsiveDemo = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get current device type based on screen width
  const getCurrentDevice = () => {
    if (screenWidth < DEVICE_BREAKPOINTS.TABLET) return 'MOBILE';
    if (screenWidth < DEVICE_BREAKPOINTS.DESKTOP) return 'TABLET';
    if (screenWidth <= DEVICE_BREAKPOINTS.LARGE_DESKTOP) return 'DESKTOP';
    return 'LARGE_DESKTOP';
  };

  // Dynamic grid columns based on screen width
  const getGridCols = () => {
    const device = getCurrentDevice();
    switch (device) {
      case 'MOBILE':
        return 1;
      case 'TABLET':
        return 2;
      case 'DESKTOP':
        return 3;
      case 'LARGE_DESKTOP':
        return 4;
      default:
        return 3;
    }
  };

  const cardContainerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${getGridCols()}, 1fr)`,
    gap: px2rem(16),
    padding: px2rem(16),
  };

  const cardStyle = {
    backgroundColor: '#fff',
    borderRadius: px2rem(8),
    padding: px2rem(16),
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  };

  const deviceInfo = {
    fontSize: px2rem(14),
    padding: px2rem(12),
    backgroundColor: '#f0f0f0',
    borderRadius: px2rem(4),
    marginBottom: px2rem(16),
    textAlign: 'center' as const,
  };

  const headerStyle = {
    fontSize: getCurrentDevice() === 'MOBILE' ? px2rem(20) : px2rem(24),
    marginBottom: px2rem(16),
    textAlign: 'center' as const,
  };

  return (
    <div style={{ backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <h1 style={headerStyle}>Responsive Layout Demo</h1>

      <div style={deviceInfo}>
        <p>Current Screen Width: {screenWidth}px</p>
        <p>Current Device Type: {getCurrentDevice()}</p>
      </div>

      <div style={cardContainerStyle}>
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div key={item} style={cardStyle}>
            <h3
              style={{
                fontSize: px2rem(18),
                marginBottom: px2rem(8),
                color: '#333',
              }}
            >
              Content Card {item}
            </h3>
            <p
              style={{
                fontSize: px2rem(14),
                lineHeight: '1.5',
                color: '#666',
              }}
            >
              This is a sample card demonstrating responsive layout behavior.
              The size and arrangement of cards will adjust automatically based
              on screen width.
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          position: 'fixed',
          bottom: px2rem(20),
          right: px2rem(20),
          padding: px2rem(12),
          backgroundColor: '#333',
          color: '#fff',
          borderRadius: px2rem(4),
          fontSize: px2rem(14),
        }}
      >
        {`Breakpoints: ${Object.entries(DEVICE_BREAKPOINTS)
          .map(([key, value]) => `${key}: ${value}px`)
          .join(' | ')}`}
      </div>
    </div>
  );
};

export default ResponsiveDemo;
