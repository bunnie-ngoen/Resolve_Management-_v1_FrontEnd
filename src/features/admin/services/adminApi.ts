export interface User {
  id: number;
  name: string;
}

export interface Settings {
  theme?: string;
  [key: string]: any;
}

// Fake API
export const fetchUsers = async (): Promise<User[]> => {
  return [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
  ];
};

export const updateSettings = async (settings: Settings): Promise<{ success: boolean; data: Settings }> => {
  return { success: true, data: settings };
};
