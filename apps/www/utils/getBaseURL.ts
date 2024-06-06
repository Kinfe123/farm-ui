export const getBaseURL = () => {
  const vercelEnv = process.env.NEXT_PUBLIC_VERCEL_ENV;
  const production = process.env.NEXT_PUBLIC_VERCEL_URL;
  const preview = process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL;

  if (vercelEnv === "production") {
    return `https://${production}`;
  } else if (vercelEnv === "preview") {
    return `https://${preview}`;
  } else {
    return "http://localhost:3000";
  }
};
