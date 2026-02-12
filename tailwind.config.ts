import type { Config } from "tailwindcss";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'move-up': {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			shimmer: {
  				from: {
  					backgroundPosition: '0 0'
  				},
  				to: {
  					backgroundPosition: '-200% 0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'move-up': 'move-up 3s ease-in-out infinite',
  			shimmer: 'shimmer 2s linear infinite'
  		},
  		backgroundSize: {
  			'200%': '200% 200%',
  			'300%': '300% 300%'
  		},
  		backgroundPosition: {
  			right: 'right',
  			left: 'left',
  			center: 'center'
  		}
  	}
  },
  plugins: [tailwindcssAnimate, addAceternityPlugins],
};
export default config satisfies Config;

// This plugin enables the use of arbitrary color values in background-gradient and similar Aceternity components
type ThemeMap = Record<string, string>;
type ThemeGetter = (path: string) => ThemeMap;
type MatchUtilities = (
  utilities: Record<string, (value: string) => Record<string, string>>,
  options: { values: ThemeMap; type?: "color" },
) => void;

function addAceternityPlugins({
  matchUtilities,
  theme,
}: {
  matchUtilities: MatchUtilities;
  theme: ThemeGetter;
}) {
  matchUtilities(
    {
      "bg-grid": (value: string) => ({
        backgroundImage: `url("${value}")`,
      }),
    },
    {
      values: theme("spacing"),
    }
  );

  matchUtilities(
    {
      "bg-dot": (value: string) => ({
        backgroundImage: `url("${value}")`,
      }),
    },
    {
      values: theme("spacing"),
    }
  );

  matchUtilities(
    {
      "bg-gradient": (value: string) => ({
        backgroundImage: `url("${value}")`,
      }),
    },
    {
      values: theme("spacing"),
    }
  );

  matchUtilities(
    {
      "bg-size": (value: string) => ({
        backgroundSize: value,
      }),
    },
    {
      values: theme("backgroundSize"),
    }
  );

  matchUtilities(
    {
      "bg-position": (value: string) => ({
        backgroundPosition: value,
      }),
    },
    {
      values: theme("backgroundPosition"),
    }
  );

  matchUtilities(
    {
      "bg-clip": (value: string) => ({
        WebkitBackgroundClip: value,
        backgroundClip: value,
      }),
    },
    {
      values: theme("backgroundClip"),
    }
  );

  matchUtilities(
    {
      "bg-origin": (value: string) => ({
        backgroundOrigin: value,
      }),
    },
    {
      values: theme("backgroundOrigin"),
    }
  );
  
  matchUtilities(
    {
      "text-shadow": (value: string) => ({
        textShadow: value,
      }),
    },
    {
      values: theme("textShadow"),
    }
  );

  matchUtilities(
    {
      "bg-opacity": (value: string) => ({
        opacity: value,
      }),
    },
    {
      values: theme("opacity"),
    }
  );

  matchUtilities(
    {
      "bg-blend": (value: string) => ({
        backgroundBlendMode: value,
      }),
    },
    {
      values: theme("backgroundBlendMode"),
    }
  );

  matchUtilities(
    {
      "bg-mask": (value: string) => ({
        WebkitMaskImage: value,
        maskImage: value,
      }),
    },
    {
      values: theme("backgroundMaskImage"),
    }
  );
  
  // This line is the key for background gradient utilities (e.g., bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0)
  matchUtilities(
    {
      "bg-gradient-color-stop": (value: string) => ({
        "--tw-gradient-from": value,
        "--tw-gradient-via": value,
        "--tw-gradient-to": value,
      }),
    },
    {
      values: flattenColorPalette(theme("colors")),
      type: "color",
    }
  );
}

// NOTE: We rely on the UXEngineer agent to also write the 'cn.ts' utility file.

