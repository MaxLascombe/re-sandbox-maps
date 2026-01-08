// Mock neighborhood data for sandbox
interface NeighborhoodInfo {
  description: string;
  pros: string[];
  cons: string[];
}

const neighborhoodData: Record<string, NeighborhoodInfo> = {
  'sutton place': {
    description:
      'Sutton Place is an upscale residential enclave on the East Side of Manhattan, known for its quiet tree-lined streets, stunning East River views, and elegant pre-war and post-war buildings. The neighborhood offers a refined atmosphere with easy access to Midtown.',
    pros: [
      'Peaceful, residential atmosphere with beautiful river views',
      'Close proximity to Midtown offices and transportation',
      'Excellent pre-war architecture and doorman buildings',
    ],
    cons: [
      'Limited nightlife and dining options compared to other Manhattan neighborhoods',
    ],
  },
  default: {
    description:
      'A vibrant New York City neighborhood with excellent transit access and diverse dining and entertainment options.',
    pros: [
      'Great public transportation access',
      'Diverse dining and shopping options',
    ],
    cons: ['Can be noisy during peak hours'],
  },
};

export const getNeighborhoodInfo = (neighborhood?: string): NeighborhoodInfo | null => {
  if (!neighborhood) return null;
  const key = neighborhood.toLowerCase();
  return neighborhoodData[key] || neighborhoodData.default;
};

export const capitalizeNeighborhood = (text: string): string => {
  return text
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};
