export const timeSince = (date: number): string => {
  const seconds = Math.floor((Date.now() - date) / 1000);

  if (seconds / 31536000 > 1) {
    return `${Math.floor(seconds / 31536000)} year${
      Math.floor(seconds / 31536000) === 1 ? '' : 's'
    }`;
  }
  if (seconds / 2592000 > 1) {
    return `${Math.floor(seconds / 2592000)} month${
      Math.floor(seconds / 2592000) === 1 ? '' : 's'
    }`;
  }
  if (seconds / 86400 > 1) {
    return `${Math.floor(seconds / 86400)} day${
      Math.floor(seconds / 86400) === 1 ? '' : 's'
    }`;
  }
  if (seconds / 3600 > 1) {
    return `${Math.floor(seconds / 3600)} hour${
      Math.floor(seconds / 3600) === 1 ? '' : 's'
    }`;
  }
  if (seconds / 60 > 1) {
    return `${Math.floor(seconds / 60)} minutes`;
  }
  return `${seconds} seconds`;
};
