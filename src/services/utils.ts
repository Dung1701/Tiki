import * as bcrypt from 'bcrypt';

// Function to hash a password
export const hashPassword = async (password: string): Promise<string> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Function to compare a plaintext password with a hashed password
export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
  try {
    // Use bcrypt.compare to compare plaintextPassword with hashedPassword
    const result = await bcrypt.compare(password, hashedPassword);
    console.log('ytrytuytuiytgyuj ', result);
    return result;
  } catch (error) {
    // Handle error, e.g., log it or throw a custom error
    console.error('Error comparing passwords:', error);
    return false;
  }
};
