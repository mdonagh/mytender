const mergeExisting = (_existing, incoming) => {
  return incoming;
};

export const nearbyShiftsCacheStrategy = {
  keyArgs: false,
  merge: mergeExisting,
  read(existing) {
    return existing;
  },
};
