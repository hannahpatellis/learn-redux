export const increment = () => {
  return {
    type: 'INCREMENT'
  }
};

export const incrementBy5 = num => {
  return {
    type: 'INCREMENTBY5',
    payload: num
  }
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  }
};