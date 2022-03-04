const useDebounce = (func: (e: any) => void, milliseconds: number) => {
  const time = milliseconds || 400;
  let timer: NodeJS.Timeout;

  return (event: any) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(func, time, event);
  };
};

export default useDebounce;
