// Stub for react-router-dom - provides a mock useNavigate
export const useNavigate = () => {
  return (path: string) => {
    console.log('Navigate to:', path);
  };
};
