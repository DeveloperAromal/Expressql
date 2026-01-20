export const formatteAPI = (
  status_code: number,
  message: string,
  data?: unknown,
) => {
  return {
    status_code,
    data,
    message,
  };
};
