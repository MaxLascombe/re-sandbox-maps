import React, { useState } from 'react';
import { Bookmark, BookmarkCheck } from 'lucide-react';

interface BookmarkButtonProps {
  propertyId: string;
  propertyType: 'rental' | 'sale';
}

const BookmarkButton: React.FC<BookmarkButtonProps> = ({ propertyId, propertyType }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleClick = () => {
    setIsBookmarked(!isBookmarked);
    console.log(`${isBookmarked ? 'Removed' : 'Added'} bookmark for ${propertyType} property: ${propertyId}`);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      {isBookmarked ? (
        <BookmarkCheck className="h-5 w-5 text-yellow-400" />
      ) : (
        <Bookmark className="h-5 w-5 text-white" />
      )}
    </button>
  );
};

export default BookmarkButton;
