import bcrypt from "bcryptjs";

export const createCrypt = async (password: string) => {
  const salt = await bcrypt.genSalt(8);

  return await bcrypt.hash(password, salt);
};

export const validatePasswordCrypt = async (
  password: string,
  passwordHash: string
) => {
  return await bcrypt.compare(password, passwordHash);
};
