import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  accentColor?: string;
}

// 1. Chef Hat Icon (Directly reflecting the logo's toque)
export function IconChefHat({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 13.8a4.5 4.5 0 0 1-1.8-6.2 4.4 4.4 0 0 1 4.3-1.8 5 5 0 0 1 7 0 4.4 4.4 0 0 1 4.3 1.8 4.5 4.5 0 0 1-1.8 6.2" />
      <path d="M6 17h12v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3z" />
      <line x1="6" y1="14" x2="18" y2="14" />
      <line x1="10" y1="17" x2="10" y2="21" />
      <line x1="14" y1="17" x2="14" y2="21" />
    </svg>
  );
}

// 2. Whisk / Fouet Icon (Reflecting the whisk in the logo)
export function IconWhisk({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2c3.5 0 6 3.5 6 7.5 0 3-1.5 5.5-4 7l-.5 4.5a1.5 1.5 0 0 1-3 0L10 16.5c-2.5-1.5-4-4-4-7C6 5.5 8.5 2 12 2z" />
      <path d="M12 2v14.5" />
      <path d="M9.5 4.5c1.5 2.5 1.5 7 0 9.5" />
      <path d="M14.5 4.5c-1.5 2.5-1.5 7 0 9.5" />
    </svg>
  );
}

// 3. Heart Icon (Reflecting the logo's floating red hearts)
export function IconHeart({ size = 20, color = "var(--brand-red, #e31c2d)", fill = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 1 1 7.5-6.566 5 5 0 1 1 7.5 6.566z" />
    </svg>
  );
}

// 4. Cake Slice Icon (Artesanal & Molhadinho)
export function IconCake({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="3 17 21 17 19 8 5 11 3 17" />
      <path d="M3 17v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4" />
      <path d="M4 14c2.5 1 5-1 7.5 0s5-1 7.5 0" />
      <circle cx="12" cy="4" r="2" fill="var(--brand-red, #e31c2d)" stroke="none" />
      <path d="M12 6v2" />
    </svg>
  );
}

// 5. Birthday Party Cake Icon (Bolos de Festa & Aniversário)
export function IconPartyCake({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 16h16a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" />
      <path d="M6 10h12a1 1 0 0 1 1 1v5H5v-5a1 1 0 0 1 1-1z" />
      <line x1="12" y1="7" x2="12" y2="10" />
      <circle cx="12" cy="4.5" r="1.5" fill="var(--brand-red, #e31c2d)" stroke="none" />
      <line x1="8" y1="8" x2="8" y2="10" />
      <circle cx="8" cy="5.5" r="1.2" fill="var(--brand-red, #e31c2d)" stroke="none" />
      <line x1="16" y1="8" x2="16" y2="10" />
      <circle cx="16" cy="5.5" r="1.2" fill="var(--brand-red, #e31c2d)" stroke="none" />
    </svg>
  );
}

// 6. WhatsApp Icon (Official Vector)
export function IconWhatsApp({ size = 20, color = "currentColor", fill, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill || color}
      role="img"
      aria-label="WhatsApp"
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

// 6b. Instagram Icon (Official Vector)
export function IconInstagram({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Instagram"
      {...props}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

// 7. Chocolate / Cacao Icon
export function IconChocolate({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <line x1="4" y1="9" x2="20" y2="9" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  );
}

// 8. Scale / Balance Icon (Equilíbrio & Zero Enjoativo)
export function IconScale({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="3" y1="7" x2="21" y2="7" />
      <path d="M5 7l-2 7a3 3 0 0 0 6 0L7 7" />
      <path d="M19 7l-2 7a3 3 0 0 0 6 0L21 7" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
}

// 9. Delivery Scooter / Moto Icon (Transporte Seguro)
export function IconScooter({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M6 18h7l2-5h-4" />
      <path d="M15 13l2-6h3" />
      <path d="M5 11h3a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

// 10. Coffee Cup Icon (Caseirinhos para Café)
export function IconCoffee({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="2" x2="6" y2="5" />
      <line x1="10" y1="2" x2="10" y2="5" />
      <line x1="14" y1="2" x2="14" y2="5" />
    </svg>
  );
}

// 11. Dessert / Parfait Glass Icon (Sobremesas Geladas)
export function IconDessert({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 8a8 8 0 0 0 16 0H4z" />
      <line x1="12" y1="16" x2="12" y2="21" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <circle cx="12" cy="5" r="2" fill="var(--brand-red, #e31c2d)" stroke="none" />
    </svg>
  );
}

// 12. Flame / Trending Icon (Mais Pedidos)
export function IconFlame({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

// 13. Building / Corporate Icon (Corporativo & B2B)
export function IconBuilding({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="9" y1="6" x2="9.01" y2="6" strokeWidth="2.5" />
      <line x1="15" y1="6" x2="15.01" y2="6" strokeWidth="2.5" />
      <line x1="9" y1="10" x2="9.01" y2="10" strokeWidth="2.5" />
      <line x1="15" y1="10" x2="15.01" y2="10" strokeWidth="2.5" />
      <line x1="9" y1="14" x2="9.01" y2="14" strokeWidth="2.5" />
      <line x1="15" y1="14" x2="15.01" y2="14" strokeWidth="2.5" />
      <path d="M10 22v-4h4v4" />
    </svg>
  );
}

// 14. Star Icon (Reviews & Ratings)
export function IconStar({ size = 16, color = "#f59e0b", fill = "#f59e0b", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// 15. Calendar Icon (Agendamento & Antecedência)
export function IconCalendar({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <circle cx="12" cy="15" r="1.5" fill="var(--brand-red, #e31c2d)" stroke="none" />
    </svg>
  );
}

// 16. Pin / Location Icon (Vila Carmosina & Itaquera)
export function IconPin({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

// 17. Clock / Time Icon (Horários de atendimento)
export function IconClock({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

// 18. User / Family Icon (Diego e família)
export function IconUser({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

// 19. Sparkles / Quality Icon
export function IconSparkles({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l2.5 5.5L20 10l-5.5 2.5L12 18l-2.5-5.5L4 10l5.5-2.5L12 2z" />
      <circle cx="19" cy="5" r="1" fill="var(--brand-red, #e31c2d)" stroke="none" />
      <circle cx="5" cy="19" r="1" fill="var(--brand-red, #e31c2d)" stroke="none" />
    </svg>
  );
}

// 20. Users / Guests Icon (Calculadora de Festa)
export function IconUsers({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

// 21. Alert / Notice Icon (Antecedência)
export function IconNotice({ size = 18, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2.5" />
    </svg>
  );
}

// 22. Cloche / Order Icon
export function IconCloche({ size = 20, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M4 18h16" />
      <path d="M4 18a8 8 0 0 1 16 0" />
      <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </svg>
  );
}

// 23. Official iFood Logo SVG
export function IconIfood({ size = 20, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-label="iFood"
      {...props}
    >
      <rect width="24" height="24" rx="5.5" fill="#EA1D2C" />
      <g transform="translate(3, 3.5) scale(0.75)">
        <path
          d="M8.428 1.67c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006c4.244 0 7.184-3.854 7.184-6.998 0-2.29-2.175-3.293-4.244-3.293zm11.328 0c-4.65 0-7.184 4.149-7.184 6.998 0 2.294 2.2 3.299 4.25 3.299l-.006-.006C21.061 11.96 24 8.107 24 4.963c0-2.29-2.18-3.293-4.244-3.293zM14.172 14.52l2.435 1.834c-2.17 2.07-6.124 3.525-9.353 3.17A8.913 8.913 0 01.23 14.541H0a9.598 9.598 0 008.828 7.758c3.814.24 7.323-.905 9.947-3.13l-.004.007 1.08 2.988 1.555-7.623-7.234-.02Z"
          fill="#FFFFFF"
        />
      </g>
    </svg>
  );
}

// 24. Official 99 / 99Food Logo SVG (Wikimedia Commons / 99 Brand)
export function Icon99Food({ size = 20, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 500 500"
      role="img"
      aria-label="99Food"
      {...props}
    >
      <path
        d="M0 111.11c0-61.365 49.746-111.11 111.11-111.11h277.78c61.364 0 111.11 49.746 111.11 111.11v277.78c0 61.364-49.746 111.11-111.11 111.11h-277.78c-61.365 0-111.11-49.746-111.11-111.11z"
        fill="#FFD000"
      />
      <path
        d="M336.5 131.94c-26.428 0-49.864 13.069-64.467 33.217-9.3301 12.868-15.036 28.624-15.63 45.716l-0.0746 2.953c0 38.867 26.527 71.387 62.089 79.765l-44.431 69.233c-1.4402 2.2464 0.13947 5.2286 2.7661 5.2286h54.571c1.3301 0 2.5738-0.68593 3.3035-1.8223l68.789-107.2c8.4043-12.943 13.256-28.505 13.256-45.202v-2.953c-0.66985-17.137-6.4084-32.932-15.779-45.819-14.608-20.091-38.007-33.114-64.392-33.114zm0 49.034c16.179 0 29.299 13.38 29.325 29.9 2e-3 5.2954-1.3217 10.221-3.6399 14.508l-2.2382 3.4857c-5.3517 7.283-13.846 12.018-23.447 12.018-16.199 0-29.33-13.41-29.33-29.956 0.0311-16.572 13.148-29.956 29.33-29.956zm-173-49.033c26.385 0 49.787 13.021 64.397 33.113 9.3706 12.887 15.105 28.685 15.772 45.821v2.9502c0 16.698-4.8488 32.26-13.252 45.202l-68.789 107.2c-0.7299 1.1364-1.9703 1.8206-3.3014 1.8206h-54.573c-2.6275 0-4.2038-2.9785-2.7641-5.2249l44.428-69.234c-35.563-8.378-62.086-40.9-62.086-79.767l0.07392-2.9502c0.59235-17.092 6.301-32.852 15.629-45.72 14.605-20.149 38.038-33.214 64.467-33.214zm-2.4e-4 108.94c9.6014 0 18.098-4.733 23.448-12.016l2.238-3.4878c2.3175-4.2868 3.6431-9.2098 3.6409-14.505-0.028-16.519-13.146-29.903-29.327-29.903-16.181 0-29.298 13.383-29.329 29.955 0 16.545 13.131 29.956 29.329 29.956z"
        fill="#212121"
      />
    </svg>
  );
}

// 25. Official KeeTa Logo SVG (Meituan / KeeTa Global Brand)
export function IconKeeta({ size = 20, ...props }: React.SVGProps<SVGSVGElement> & { size?: number | string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 320 320"
      role="img"
      aria-label="KeeTa"
      {...props}
    >
      <rect width="320" height="320" rx="64" fill="#FBE505" />
      <path
        d="M 16 194 L 16 303 L 303 303 L 303 194 L 290 206 L 270 220 L 241 235 L 206 246 L 165 251 L 138 250 L 118 247 L 83 237 L 49 220 L 29 206 Z"
        fill="#27B992"
      />
      <path
        d="M 168 198 L 171 210 L 178 207 L 178 205 L 174 197 Z M 201 184 L 199 183 L 194 183 L 182 191 L 182 193 L 187 203 L 196 197 L 201 192 L 202 190 Z M 166 118 L 159 121 L 154 127 L 151 136 L 151 169 L 154 176 L 159 181 L 165 184 L 173 185 L 178 184 L 184 181 L 189 176 L 192 170 L 185 166 L 182 167 L 178 172 L 174 174 L 169 174 L 166 173 L 162 169 L 162 165 L 167 161 L 181 153 L 187 147 L 190 140 L 190 132 L 187 126 L 182 121 L 174 118 Z M 173 129 L 179 134 L 180 137 L 179 140 L 174 145 L 163 152 L 162 137 L 163 134 L 168 129 Z M 119 118 L 114 120 L 108 126 L 105 133 L 104 138 L 104 168 L 106 174 L 112 181 L 118 184 L 127 185 L 137 181 L 143 175 L 144 169 L 138 166 L 136 166 L 131 172 L 127 174 L 122 174 L 116 170 L 115 165 L 133 154 L 139 149 L 143 141 L 143 131 L 141 127 L 135 121 L 127 118 Z M 127 129 L 131 132 L 133 136 L 132 140 L 126 146 L 115 151 L 115 138 L 117 133 L 121 129 Z M 250 117 L 241 120 L 235 126 L 233 131 L 233 134 L 240 136 L 244 136 L 247 130 L 251 128 L 255 128 L 260 132 L 261 138 L 257 141 L 249 143 L 240 148 L 235 153 L 232 159 L 231 166 L 232 172 L 237 180 L 244 184 L 253 185 L 261 183 L 266 180 L 269 177 L 272 171 L 272 132 L 269 126 L 264 121 L 258 118 Z M 259 151 L 261 153 L 261 166 L 259 170 L 256 173 L 249 173 L 247 172 L 243 168 L 242 165 L 243 161 L 245 158 L 249 155 Z M 205 99 L 204 118 L 194 118 L 194 128 L 203 128 L 205 130 L 205 167 L 206 172 L 209 178 L 212 181 L 218 184 L 225 185 L 224 173 L 220 172 L 216 166 L 217 128 L 226 128 L 226 118 L 216 117 L 216 99 Z M 54 98 L 54 185 L 65 185 L 65 161 L 70 157 L 73 158 L 75 165 L 86 184 L 99 197 L 110 204 L 121 209 L 137 213 L 158 213 L 159 212 L 162 212 L 159 200 L 139 201 L 124 197 L 108 188 L 98 179 L 89 167 L 86 161 L 82 147 L 92 136 L 102 118 L 88 118 L 85 125 L 80 132 L 65 144 L 65 98 Z"
        fill="#000000"
        fillRule="evenodd"
      />
    </svg>
  );
}

// 26. Menu Hamburger Icon
export function IconMenu({ size = 24, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Abrir menu"
      {...props}
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

// 27. Close / X Icon
export function IconClose({ size = 24, color = "currentColor", ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Fechar menu"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

