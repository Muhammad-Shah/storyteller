const nextConfig = {
    rewrites: async () => {
      return [
        {
          source: "/api/:path*",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/api/:path*"  // Local development API endpoint
              : "https://storyteller-coral.vercel.app/api/:path*",  // Production API endpoint on Vercel
        },
        {
          source: "/docs",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/docs"  // Local development API docs endpoint
              : "https://storyteller-coral.vercel.app/api/docs",  // Production API docs endpoint on Vercel
        },
        {
          source: "/openapi.json",
          destination:
            process.env.NODE_ENV === "development"
              ? "http://127.0.0.1:8000/openapi.json"  // Local development OpenAPI endpoint
              : "https://storyteller-coral.vercel.app/api/openapi.json",  // Production OpenAPI endpoint on Vercel
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  
  