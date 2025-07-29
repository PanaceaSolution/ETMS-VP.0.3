const sanitizeValue = (value) => {
  if (typeof value === "string") {
    return value.replace(/<[^>]*>?/gm, "").trim();
  } else if (typeof value === "object" && value !== null) {
    for (let key in value) {
      value[key] = sanitizeValue(value[key]);
    }
  }
  return value;
};

const sanitizePostData = (req, res, next) => {
  if (["POST", "PUT", "PATCH"].includes(req.method)) {
    req.body = sanitizeValue(req.body);
  }
  next();
};

export { sanitizePostData };
