export function getStatus(value: number) {
  if (value > 10) {
    return {
      color: "#79cf6e",
      class: "active",
    };
  } else if (value < 10 && value > 1) {
    return {
      color: "#eeb64d",
      class: "LowStock",
    };
  } else {
    return {
      color: "#ec6363",
      class: "offStock",
    };
  }
}
