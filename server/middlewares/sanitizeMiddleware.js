import expressValidator from "express-validator";

const sanitizePostData = (req, res, next) => {
  if (req.method === "POST") {
    for (let key in req.body) {
      if (typeof req.body[key] === "string") {
        // Simple manual sanitization for demo purposes
        req.body[key] = req.body[key].replace(/<[^>]*>?/gm, "").trim();
      }
    }
  }
  next();
};
export { sanitizePostData };
