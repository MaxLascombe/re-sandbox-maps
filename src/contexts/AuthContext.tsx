// Stub AuthContext for sandbox - provides mock user data
export const useAuth = () => {
  return {
    user: {
      id: 'mock-user-123',
      email: 'demo@example.com',
    },
    userProfile: {
      subscription_plan: 'free',
    },
  };
};
