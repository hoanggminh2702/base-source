export const removeAccents = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
};

export const removeSpace = (str: string) => {
  return str.replace(/\s/g, "");
};

export const genKeyFollowName = (name: string) => {
  return removeSpace(removeAccents(name));
};
