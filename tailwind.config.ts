import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          "10": "#F5F9FE",
          "50": "#EBF3FC",
          "100": "#E6F0FD",
          "200": "#B3D1FA",
          "300": "#80B2F7",
          "400": "#4D93F4",
          "500": "#0069E4",
          "600": "#0054B7",
          "700": "#003F8A",
          "800": "#002A5C",
          "900": "#00152F",
          DEFAULT: "#0069E4",
        },
        black: {
          "50": "#FAFAFA",
          "100": "#F5F5F5",
          "200": "#E5E5E5",
          "300": "#D4D4D4",
          "400": "#A3A3A3",
          "500": "#737373",
          "600": "#525252",
          "700": "#404040",
          "800": "#262626",
          "900": "#171717",
          DEFAULT: "#171717",
        },
        littera: {
          "10": "#FBFCFB",
          "50": "#F2F7F4",
          "100": "#E5EFE9",
          "200": "#CBDFD3",
          "300": "#A7C7B3",
          "400": "#83AF93",
          "500": "#5F9773",
          "600": "#2C6A46",
          "700": "#235538",
          "800": "#1A402A",
          "900": "#112A1C",
          DEFAULT: "#2C6A46",
        },
        ebira: {
          "10": "#F9FDFF",
          "50": "#F2FAFD",
          "100": "#E5F5FC",
          "200": "#CCE9F7",
          "300": "#99D7F0",
          "400": "#66C4E8",
          "500": "#34AADC",
          "600": "#2289B1",
          "700": "#196A8A",
          "800": "#114B62",
          "900": "#0B303E",
          DEFAULT: "#34AADC",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        "display-xs": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "display-sm": [
          "30px",
          {
            lineHeight: "38px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "display-md": [
          "36px",
          {
            lineHeight: "44px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "display-lg": [
          "48px",
          {
            lineHeight: "60px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "display-xl": [
          "60px",
          {
            lineHeight: "72px",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        "heading-xs": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        "heading-sm": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: "600",
          },
        ],
        "heading-md": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "heading-lg": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "heading-xl": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        "body-xs": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "body-sm": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "body-xl": [
          "20px",
          {
            lineHeight: "30px",
            letterSpacing: "0em",
            fontWeight: "400",
          },
        ],
        "label-xs": [
          "11px",
          {
            lineHeight: "16px",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        "label-sm": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0.02em",
            fontWeight: "500",
          },
        ],
        "label-md": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "500",
          },
        ],
        "label-lg": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.01em",
            fontWeight: "500",
          },
        ],
        "label-xl": [
          "18px",
          {
            lineHeight: "28px",
            letterSpacing: "0em",
            fontWeight: "500",
          },
        ],
        "caption-xs": [
          "10px",
          {
            lineHeight: "14px",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        "caption-sm": [
          "11px",
          {
            lineHeight: "16px",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        "caption-md": [
          "12px",
          {
            lineHeight: "18px",
            letterSpacing: "0.02em",
            fontWeight: "400",
          },
        ],
        "caption-lg": [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
        "caption-xl": [
          "16px",
          {
            lineHeight: "24px",
            letterSpacing: "0.01em",
            fontWeight: "400",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
