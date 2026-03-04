import React from "react";
import {AbsoluteFill} from "remotion";

const Icon = ({
  type,
  color = "#6B7280",
  size = 20,
}: {
  type:
    | "spark"
    | "paperclip"
    | "mic"
    | "arrowUp"
    | "tag"
    | "wrench";
  color?: string;
  size?: number;
}) => {
  const common: React.CSSProperties = {
    width: size,
    height: size,
    display: "inline-block",
  };

  if (type === "paperclip") {
    return (
      <svg viewBox="0 0 24 24" style={common} fill="none">
        <path
          d="M8.5 12.5l6.9-6.9a3.2 3.2 0 114.5 4.5l-8.2 8.2a5 5 0 11-7.1-7.1l8-8"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "mic") {
    return (
      <svg viewBox="0 0 24 24" style={common} fill="none">
        <path
          d="M12 14.8a3.2 3.2 0 003.2-3.2V7.2A3.2 3.2 0 0012 4a3.2 3.2 0 00-3.2 3.2v4.4A3.2 3.2 0 0012 14.8z"
          stroke={color}
          strokeWidth="1.8"
        />
        <path
          d="M6.8 11.4a5.2 5.2 0 0010.4 0"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 16.6v3"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "arrowUp") {
    return (
      <svg viewBox="0 0 24 24" style={common} fill="none">
        <path
          d="M12 19V6"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M6.5 11.3L12 5.8l5.5 5.5"
          stroke={color}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (type === "tag") {
    return (
      <svg viewBox="0 0 24 24" style={common} fill="none">
        <path
          d="M6.2 7.3c0-1.2 1-2.2 2.2-2.2h9.4c1.2 0 2.2 1 2.2 2.2v10.2c0 1.2-1 2.2-2.2 2.2H8.4c-1.2 0-2.2-1-2.2-2.2V7.3z"
          stroke={color}
          strokeWidth="1.9"
          strokeLinejoin="round"
        />
        <path
          d="M8.7 9h7"
          stroke={color}
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M8.7 12h5.8"
          stroke={color}
          strokeWidth="1.9"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (type === "wrench") {
    return (
      <svg viewBox="0 0 24 24" style={common} fill="none">
        <path
          d="M14.7 6.2a4.6 4.6 0 00-5.5 5.5L4.8 16a1.6 1.6 0 002.3 2.3l4.3-4.3a4.6 4.6 0 005.5-5.5l-2.4 2.4-2.3-2.3 2.5-2.4z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  // spark (for build apps icon-ish)
  return (
    <svg viewBox="0 0 24 24" style={common} fill="none">
      <path
        d="M12 2l1.2 4.5L18 8l-4.8 1.5L12 14l-1.2-4.5L6 8l4.8-1.5L12 2z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 13.2l.7 2.6 2.8.9-2.8.9-.7 2.6-.7-2.6-2.8-.9 2.8-.9.7-2.6z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const Chip = ({
  label,
  icon,
  iconColor,
}: {
  label: string;
  icon: "tag" | "wrench";
  iconColor: string;
}) => {
  return (
    <div
      style={{
        height: 46,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 999,
        backgroundColor: "#FFFFFF",
        display: "flex",
        alignItems: "center",
        gap: 10,
        boxShadow: "0 1px 0 rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 6,
          backgroundColor: iconColor === "#22C55E" ? "rgba(34,197,94,0.14)" : "rgba(59,130,246,0.14)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Icon type={icon} color={iconColor} size={16} />
      </div>
      <div
        style={{
          fontSize: 22,
          color: "#111827",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
          fontWeight: 500,
          letterSpacing: -0.2,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </div>
    </div>
  );
};

const InputCard = () => {
  return (
    <div
      style={{
        width: 1220,
        height: 190,
        borderRadius: 22,
        backgroundColor: "#FFFFFF",
        border: "1px solid rgba(17,24,39,0.12)",
        boxShadow:
          "0 10px 14px rgba(17,24,39,0.08), 0 2px 0 rgba(17,24,39,0.04)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 28,
          top: 24,
          fontSize: 26,
          color: "#6B7280",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
          fontWeight: 500,
          letterSpacing: -0.2,
        }}
      >
        Build an agent or perform a task
      </div>

      <div
        style={{
          position: "absolute",
          left: 28,
          bottom: 26,
          height: 52,
          paddingLeft: 18,
          paddingRight: 18,
          borderRadius: 999,
          border: "1px solid rgba(17,24,39,0.10)",
          backgroundColor: "#FFFFFF",
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Icon type="spark" color="#6B7280" size={20} />
        <div
          style={{
            fontSize: 22,
            color: "#111827",
            fontFamily:
              "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
            fontWeight: 600,
            letterSpacing: -0.2,
          }}
        >
          Build apps
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          right: 118,
          bottom: 40,
          display: "flex",
          alignItems: "center",
          gap: 22,
        }}
      >
        <Icon type="paperclip" color="#6B7280" size={22} />
        <Icon type="mic" color="#6B7280" size={22} />
      </div>

      <div
        style={{
          position: "absolute",
          right: 28,
          bottom: 28,
          width: 60,
          height: 60,
          borderRadius: 999,
          backgroundColor: "#9DB5FF",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.35)",
        }}
      >
        <Icon type="arrowUp" color="#FFFFFF" size={28} />
      </div>
    </div>
  );
};

export const HelpPromptScreen: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "radial-gradient(1200px 700px at 80% 15%, rgba(255,232,160,0.85) 0%, rgba(255,232,160,0.35) 45%, rgba(255,232,160,0.08) 70%, rgba(255,232,160,0) 100%), radial-gradient(1200px 700px at 10% 15%, rgba(255,214,190,0.85) 0%, rgba(255,214,190,0.35) 45%, rgba(255,214,190,0.08) 70%, rgba(255,214,190,0) 100%), linear-gradient(180deg, #FFF5E8 0%, #FFF7EC 35%, #FFF7EC 100%)",
        fontFamily:
          "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 170,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#111827",
            letterSpacing: -1.2,
            marginBottom: 26,
          }}
        >
          ЛВлфлвлЭ
        </div>

        <InputCard />

        <div style={{height: 34}} />

        <div
          style={{
            width: 1220,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "nowrap",
            }}
          >
            <Chip label="Personal website" icon="tag" iconColor="#22C55E" />
            <Chip
              label="Customer support email"
              icon="wrench"
              iconColor="#3B82F6"
            />
            <Chip
              label="Outbound sales calls"
              icon="wrench"
              iconColor="#3B82F6"
            />
            <Chip label="Lead gen" icon="tag" iconColor="#22C55E" />
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "nowrap",
              paddingLeft: 40,
            }}
          >
            <Chip
              label="Meeting recorder"
              icon="wrench"
              iconColor="#3B82F6"
            />
            <Chip
              label="LinkedIn outreach"
              icon="tag"
              iconColor="#22C55E"
            />
            <Chip
              label="Support chatbot"
              icon="wrench"
              iconColor="#3B82F6"
            />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};