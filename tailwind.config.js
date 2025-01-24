module.exports = {
  theme: {
    extend: {
      animation: {
        "bounce-in": "bounceIn 1s ease-out",
        "spin-slow": "spin 3s linear infinite",
      },
      keyframes: {
        bounceIn: {
          "0%": { opacity: 0, transform: "scale(0.9)" },
          "50%": { opacity: 0.5, transform: "scale(1.05)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
};
