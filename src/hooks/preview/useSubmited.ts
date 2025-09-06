import { useState } from 'react';

export function useSubmited() {
  const [submited, setSubmited] = useState<Record<string, unknown>>({});

  return {
    submited,
    setSubmited,
  };
};
