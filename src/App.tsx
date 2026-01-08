import PropertyDetail from './components/PropertyDetail';
import { mockProperty } from './data/mockProperty';

function App() {
  const handleClose = () => {
    console.log('Property detail closed');
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <PropertyDetail
        property={mockProperty}
        isRental={false}
        onClose={handleClose}
      />
    </div>
  );
}

export default App;
