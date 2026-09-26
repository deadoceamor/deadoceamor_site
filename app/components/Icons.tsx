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

// 6. WhatsApp Icon (Sleek minimalist official vector)
export function IconWhatsApp({ size = 20, color = "currentColor", ...props }: IconProps) {
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
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
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

// 23. App Logos (Minimalist SVG representations)
export function IconIfood({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#ea1d2c" />
      <path
        d="M8.5 13.5c1.5 2 5.5 2 7 0"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="9.5" r="1.2" fill="#ffffff" />
      <circle cx="15" cy="9.5" r="1.2" fill="#ffffff" />
    </svg>
  );
}

export function Icon99Food({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#ff5900" />
      <text
        x="12"
        y="15.5"
        fill="#ffffff"
        fontSize="10"
        fontWeight="800"
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        99
      </text>
    </svg>
  );
}

export function IconKeeta({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#f59e0b" />
      <path
        d="M13 6l-5 7h5l-2 5 7-8h-5l2-4z"
        fill="#ffffff"
      />
    </svg>
  );
}
