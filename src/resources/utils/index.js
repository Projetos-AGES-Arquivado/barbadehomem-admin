import IMask from 'imask';

export const phoneParser = v => {
  if (v === undefined) return;

  const masked = IMask.createMask({
    mask: '(00) 00000-0000',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return maskedValue;
};

export const formatValue = v => {
  if (v === undefined) return;

  const masked = IMask.createMask({
    mask: '00.00',
    lazy: true,
  });

  const maskedValue = masked.resolve(v);

  return Number(maskedValue);
};
