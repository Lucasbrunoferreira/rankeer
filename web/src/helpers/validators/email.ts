export const validateEmail = (email: string) => {
  const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return re.test(String(email).toLowerCase());
}
