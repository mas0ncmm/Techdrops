import { useState } from "react";

const FREE_SHIPPING_UK = 50;
const FREE_SHIPPING_US = 60;

const products = [
  {
    id: 1,
    name: "UV Mite Destroyer Pro",
    tagline: "Kill 99.9% of dust mites while you sleep",
    price: 79.99,
    oldPrice: 129.99,
    badge: "BEST SELLER",
    badgeColor: "#00f0ff",
    description: "Deep UV sterilisation with powerful suction removes mites, bacteria and allergens from your mattress. Cordless & rechargeable.",
    features: ["UV-C Sterilisation", "Cordless Design", "HEPA Filter", "2500Pa Suction"],
    color: "#00f0ff",
    bg: "linear-gradient(135deg, #0a1628 0%, #0d2040 100%)",
  },
  {
    id: 2,
    name: "SpinScrub 360",
    tagline: "Clean every corner without the effort",
    price: 39.99,
    oldPrice: 64.99,
    badge: "TOP RATED",
    badgeColor: "#a855f7",
    description: "9 interchangeable brush heads, adjustable handle, and powerful rotation for bathroom tiles, grout, and kitchen surfaces.",
    features: ["9 Brush Heads", "Adjustable Handle", "USB Rechargeable", "Waterproof"],
    color: "#a855f7",
    bg: "linear-gradient(135deg, #150a28 0%, #1e0d40 100%)",
  },
  {
    id: 3,
    name: "ChopPro Mini",
    tagline: "Prep meals in seconds, not minutes",
    price: 24.99,
    oldPrice: 39.99,
    badge: "VIRAL",
    badgeColor: "#f97316",
    description: "Pull-cord manual chopper dices onions, garlic, herbs and veg in seconds. No batteries, no mess, no effort.",
    features: ["Pull-Cord Action", "BPA Free", "Easy Clean", "Multi-Size"],
    color: "#f97316",
    bg: "linear-gradient(135deg, #1a0f05 0%, #2a1a08 100%)",
  },
  {
    id: 4,
    name: "SneakerShield Bag",
    tagline: "Machine wash your trainers without damage",
    price: 14.99,
    oldPrice: 24.99,
    badge: "5000+ SOLD",
    badgeColor: "#22c55e",
    description: "Padded mesh laundry bag protects your trainers in the washing machine. Works with any shoe size.",
    features: ["Padded Protection", "Mesh Ventilation", "Universal Fit", "Durable Zip"],
    color: "#22c55e",
    bg: "linear-gradient(135deg, #051a0a 0%, #082a10 100%)",
  },
  {
    id: 5,
    name: "LintZap Elite",
    tagline: "Restore any fabric to brand new",
    price: 29.99,
    oldPrice: 49.99,
    badge: "NEW IN",
    badgeColor: "#f43f5e",
    description: "Digital display fabric shaver removes lint, bobbles and fluff from clothes, sofas and blankets. USB rechargeable.",
    features: ["Digital Display", "USB Rechargeable", "5 Speed Settings", "Large Blade"],
    color: "#f43f5e",
    bg: "linear-gradient(135deg, #1a0508 0%, #2a080e 100%)",
  },
];

// SVG Icons — no emojis
const IconCart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/>
  </svg>
);
const IconX = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);
const IconPlus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconMinus = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);
const IconShield = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);
const IconTruck = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
  </svg>
);
const IconStar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="#00f0ff" stroke="#00f0ff" strokeWidth="1">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
);
const IconCheck = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const IconRefresh = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/>
  </svg>
);
const IconLock = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
);

// Shipping progress bar component
const ShippingProgress = ({ total, currency }) => {
  const threshold = currency === "GBP" ? FREE_SHIPPING_UK : FREE_SHIPPING_US;
  const symbol = currency === "GBP" ? "£" : "$";
  const remaining = Math.max(0, threshold - total);
  const pct = Math.min(100, (total / threshold) * 100);
  const unlocked = total >= threshold;

  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: "8px"
      }}>
        <span style={{ fontSize: "12px", fontWeight: "600", color: unlocked ? "#22c55e" : "rgba(255,255,255,0.5)" }}>
          {unlocked ? "Free shipping unlocked" : `${symbol}${remaining.toFixed(2)} away from free shipping`}
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "4px", color: unlocked ? "#22c55e" : "rgba(255,255,255,0.3)" }}>
          <IconTruck />
          <span style={{ fontSize: "11px", fontWeight: "700" }}>{symbol}{threshold}</span>
        </div>
      </div>

      {/* Track */}
      <div style={{
        height: "6px", borderRadius: "99px",
        background: "rgba(255,255,255,0.06)",
        overflow: "hidden", position: "relative"
      }}>
        <div style={{
          height: "100%", borderRadius: "99px",
          width: `${pct}%`,
          background: unlocked
            ? "linear-gradient(90deg, #22c55e, #16a34a)"
            : "linear-gradient(90deg, #00f0ff, #a855f7)",
          transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
          boxShadow: unlocked ? "0 0 8px rgba(34,197,94,0.5)" : "0 0 8px rgba(0,240,255,0.4)"
        }} />
      </div>

      {/* Region toggle */}
      <div style={{ display: "flex", gap: "6px", marginTop: "10px" }}>
        {["GBP", "USD"].map(c => (
          <button key={c} onClick={() => {}} style={{
            background: currency === c ? "rgba(0,240,255,0.12)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${currency === c ? "rgba(0,240,255,0.3)" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "6px", padding: "3px 10px",
            fontSize: "10px", fontWeight: "700",
            color: currency === c ? "#00f0ff" : "rgba(255,255,255,0.3)",
            cursor: "pointer"
          }}>{c === "GBP" ? "UK · £50" : "US · $60"}</button>
        ))}
      </div>
    </div>
  );
};

// Cart drawer
const CartDrawer = ({ cart, open, onClose, onUpdateQty, onRemove, currency, setCurrency }) => {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const symbol = currency === "GBP" ? "£" : "$";
  const threshold = currency === "GBP" ? FREE_SHIPPING_UK : FREE_SHIPPING_US;
  const freeShipping = total >= threshold;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div onClick={onClose} style={{
          position: "fixed", inset: 0, zIndex: 300,
          background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)"
        }} />
      )}

      {/* Drawer */}
      <div style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 400,
        width: "min(420px, 100vw)",
        background: "#0a0f1e",
        borderLeft: "1px solid rgba(255,255,255,0.07)",
        transform: open ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
        display: "flex", flexDirection: "column",
        boxShadow: "-20px 0 60px rgba(0,0,0,0.5)"
      }}>

        {/* Header */}
        <div style={{
          padding: "20px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ color: "#fff", fontWeight: "800", fontSize: "17px", letterSpacing: "-0.3px" }}>Your Cart</span>
            {cart.length > 0 && (
              <span style={{
                background: "linear-gradient(135deg, #00f0ff, #a855f7)",
                borderRadius: "99px", padding: "2px 8px",
                fontSize: "11px", fontWeight: "800", color: "#000"
              }}>{cart.reduce((s, i) => s + i.qty, 0)}</span>
            )}
          </div>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px", padding: "7px", cursor: "pointer",
            color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center"
          }}><IconX /></button>
        </div>

        {/* Progress bar */}
        <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <ShippingProgress total={total} currency={currency} />
          {/* Currency switcher for progress */}
          <div style={{ display: "flex", gap: "6px" }}>
            {["GBP", "USD"].map(c => (
              <button key={c} onClick={() => setCurrency(c)} style={{
                background: currency === c ? "rgba(0,240,255,0.12)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${currency === c ? "rgba(0,240,255,0.3)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "6px", padding: "3px 10px",
                fontSize: "10px", fontWeight: "700",
                color: currency === c ? "#00f0ff" : "rgba(255,255,255,0.3)",
                cursor: "pointer"
              }}>{c === "GBP" ? "UK · £50" : "US · $60"}</button>
            ))}
          </div>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "8px 0" }}>
          {cart.length === 0 ? (
            <div style={{
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              height: "200px", gap: "12px"
            }}>
              <div style={{ color: "rgba(255,255,255,0.1)", transform: "scale(2)" }}><IconCart /></div>
              <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "14px", fontWeight: "500" }}>Your cart is empty</p>
            </div>
          ) : cart.map(item => (
            <div key={item.id} style={{
              display: "flex", gap: "14px", padding: "16px 24px",
              borderBottom: "1px solid rgba(255,255,255,0.04)"
            }}>
              {/* Product colour block */}
              <div style={{
                width: "56px", height: "56px", flexShrink: 0,
                borderRadius: "12px", background: item.bg,
                border: `1px solid ${item.color}20`
              }} />

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ color: "#fff", fontWeight: "700", fontSize: "14px", letterSpacing: "-0.2px" }}>{item.name}</span>
                  <button onClick={() => onRemove(item.id)} style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "rgba(255,255,255,0.2)", padding: "0", flexShrink: 0,
                    display: "flex", alignItems: "center"
                  }}><IconX /></button>
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "8px" }}>
                  {/* Qty controls */}
                  <div style={{
                    display: "flex", alignItems: "center", gap: "0",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px", overflow: "hidden"
                  }}>
                    <button onClick={() => onUpdateQty(item.id, item.qty - 1)} style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "rgba(255,255,255,0.5)", padding: "7px 10px",
                      display: "flex", alignItems: "center"
                    }}><IconMinus /></button>
                    <span style={{ color: "#fff", fontWeight: "700", fontSize: "13px", padding: "0 10px", minWidth: "28px", textAlign: "center" }}>{item.qty}</span>
                    <button onClick={() => onUpdateQty(item.id, item.qty + 1)} style={{
                      background: "none", border: "none", cursor: "pointer",
                      color: "rgba(255,255,255,0.5)", padding: "7px 10px",
                      display: "flex", alignItems: "center"
                    }}><IconPlus /></button>
                  </div>

                  <span style={{ color: "#fff", fontWeight: "800", fontSize: "15px" }}>
                    {symbol}{(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div style={{
            padding: "20px 24px",
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}>
            {/* Subtotal */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>Subtotal</span>
              <span style={{ color: "#fff", fontWeight: "700", fontSize: "15px" }}>{symbol}{total.toFixed(2)}</span>
            </div>

            {/* Shipping line */}
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px" }}>Shipping</span>
              <span style={{
                fontSize: "13px", fontWeight: "700",
                color: freeShipping ? "#22c55e" : "rgba(255,255,255,0.4)"
              }}>{freeShipping ? "FREE" : "Calculated at checkout"}</span>
            </div>

            {/* Checkout button */}
            <button onClick={() => window.location.href = "https://techdrops.myshopify.com"} style={{
              width: "100%",
              background: "linear-gradient(135deg, #00f0ff, #a855f7)",
              border: "none", borderRadius: "12px", padding: "16px",
              fontSize: "15px", fontWeight: "800", color: "#000",
              cursor: "pointer", letterSpacing: "-0.3px",
              marginBottom: "12px"
            }}>Checkout — {symbol}{total.toFixed(2)}</button>

            {/* Trust row */}
            <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
              {[
                [<IconLock />, "Secure"],
                [<IconRefresh />, "30-Day Returns"],
                [<IconShield />, "Buyer Protection"],
              ].map(([icon, label]) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <span style={{ color: "rgba(255,255,255,0.2)" }}>{icon}</span>
                  <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", fontWeight: "500" }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

// TD Logo SVG — recreated from uploaded brand mark
const TDLogo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="tGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e0e8ff"/>
        <stop offset="100%" stopColor="#9ab0d0"/>
      </linearGradient>
      <linearGradient id="dGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00c6ff"/>
        <stop offset="60%" stopColor="#7b5cf0"/>
        <stop offset="100%" stopColor="#a855f7"/>
      </linearGradient>
      <linearGradient id="boltGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#00f0ff"/>
        <stop offset="100%" stopColor="#6ee7f7"/>
      </linearGradient>
    </defs>
    {/* T letter */}
    <rect x="8" y="10" width="42" height="8" rx="2" fill="url(#tGrad)"/>
    <rect x="24" y="10" width="10" height="52" rx="2" fill="url(#tGrad)"/>
    {/* D letter */}
    <path d="M48 10 h10 a28 28 0 0 1 0 56 h-10 z" fill="url(#dGrad)" opacity="0.95"/>
    <path d="M53 20 h5 a18 18 0 0 1 0 36 h-5 z" fill="#050812"/>
    {/* Lightning bolt overlay */}
    <polygon points="52,22 44,48 50,48 46,78 60,45 53,45" fill="url(#boltGrad)" opacity="0.95"/>
  </svg>
);

// Navbar
const NavBar = ({ cartCount, onCartOpen }) => (
  <nav style={{
    position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
    background: "rgba(5,8,18,0.88)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    padding: "0 24px", height: "60px",
    display: "flex", alignItems: "center", justifyContent: "space-between"
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <TDLogo size={38} />
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: "800", fontSize: "17px", letterSpacing: "-0.5px" }}>
          <span style={{ color: "#fff" }}>Tech</span><span style={{ background: "linear-gradient(90deg,#00c6ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Drops</span>
        </div>
        <div style={{ fontSize: "9px", letterSpacing: "2px", color: "rgba(255,255,255,0.3)", fontWeight: "600", marginTop: "1px" }}>SMART TECH. BETTER LIFE.</div>
      </div>
    </div>

    <div style={{ display: "flex", gap: "24px" }}>
      {["Products", "About", "FAQ"].map(item => (
        <span key={item} style={{
          color: "rgba(255,255,255,0.45)", fontSize: "13px",
          cursor: "pointer", fontWeight: "500"
        }}>{item}</span>
      ))}
    </div>

    <button onClick={onCartOpen} style={{
      position: "relative", background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "10px", padding: "9px 12px",
      cursor: "pointer", color: "#fff",
      display: "flex", alignItems: "center", gap: "8px"
    }}>
      <IconCart />
      <span style={{ fontSize: "13px", fontWeight: "600" }}>Cart</span>
      {cartCount > 0 && (
        <span style={{
          position: "absolute", top: "-6px", right: "-6px",
          background: "linear-gradient(135deg, #00f0ff, #a855f7)",
          borderRadius: "99px", minWidth: "18px", height: "18px",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "10px", fontWeight: "800", color: "#000", padding: "0 4px"
        }}>{cartCount}</span>
      )}
    </button>
  </nav>
);

const Hero = () => (
  <div style={{
    minHeight: "100vh",
    background: "radial-gradient(ellipse at 50% 0%, rgba(0,240,255,0.07) 0%, #050812 60%)",
    display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center",
    textAlign: "center", padding: "100px 24px 60px",
    position: "relative", overflow: "hidden"
  }}>
    <div style={{
      position: "absolute", inset: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
      backgroundSize: "40px 40px", pointerEvents: "none"
    }} />
    <div style={{
      position: "absolute", top: "20%", left: "15%", width: "350px", height: "350px",
      background: "radial-gradient(circle, rgba(0,240,255,0.05), transparent 70%)", pointerEvents: "none"
    }} />
    <div style={{
      position: "absolute", top: "25%", right: "15%", width: "350px", height: "350px",
      background: "radial-gradient(circle, rgba(168,85,247,0.05), transparent 70%)", pointerEvents: "none"
    }} />

    <div style={{
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: "rgba(0,240,255,0.07)", border: "1px solid rgba(0,240,255,0.18)",
      borderRadius: "20px", padding: "6px 16px", marginBottom: "28px"
    }}>
      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#00f0ff" }} />
      <span style={{ color: "#00f0ff", fontSize: "11px", fontWeight: "700", letterSpacing: "1px" }}>NEW DROPS EVERY WEEK</span>
    </div>

    <h1 style={{
      fontSize: "clamp(40px, 8vw, 78px)", fontWeight: "900", color: "#fff",
      lineHeight: "1.0", letterSpacing: "-2px", marginBottom: "20px", maxWidth: "800px"
    }}>
      Home Gadgets That<br />
      <span style={{ background: "linear-gradient(135deg, #00f0ff, #a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
        Actually Work.
      </span>
    </h1>

    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "17px", maxWidth: "460px", lineHeight: "1.6", marginBottom: "40px" }}>
      Viral products. Real results. Delivered to your door in days.
    </p>

    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
      <div onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })} style={{
        background: "linear-gradient(135deg, #00f0ff, #a855f7)",
        borderRadius: "12px", padding: "14px 32px",
        fontSize: "15px", fontWeight: "800", color: "#000", cursor: "pointer"
      }}>Shop All Products</div>
    </div>

    <div style={{ display: "flex", gap: "48px", marginTop: "64px", flexWrap: "wrap", justifyContent: "center" }}>
      {[["10K+", "Happy Customers"], ["4.8", "Average Rating"], ["2-5", "Day Delivery"], ["Free", "UK & US Shipping"]].map(([val, label]) => (
        <div key={label} style={{ textAlign: "center" }}>
          <div style={{ color: "#00f0ff", fontWeight: "800", fontSize: "22px" }}>{val}</div>
          <div style={{ color: "rgba(255,255,255,0.25)", fontSize: "12px", marginTop: "3px" }}>{label}</div>
        </div>
      ))}
    </div>
  </div>
);

const ProductCard = ({ product, onAddToCart }) => {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.035)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? product.color + "35" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "20px", padding: "28px",
        transition: "all 0.25s ease",
        transform: hovered ? "translateY(-4px)" : "none",
        boxShadow: hovered ? `0 24px 60px ${product.color}12` : "none",
        position: "relative", overflow: "hidden", cursor: "default"
      }}>

      <div style={{
        position: "absolute", top: "16px", right: "16px",
        background: product.badgeColor + "15",
        border: `1px solid ${product.badgeColor}35`,
        borderRadius: "7px", padding: "4px 10px",
        fontSize: "10px", fontWeight: "800", color: product.badgeColor, letterSpacing: "0.5px"
      }}>{product.badge}</div>

      {/* Visual block */}
      <div style={{
        width: "72px", height: "72px", borderRadius: "16px",
        background: product.bg,
        border: `1px solid ${product.color}18`,
        marginBottom: "20px",
        position: "relative", overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", bottom: "-8px", right: "-8px",
          width: "40px", height: "40px", borderRadius: "50%",
          background: product.color + "20"
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "28px", height: "3px", borderRadius: "2px",
          background: product.color + "60"
        }} />
      </div>

      <h3 style={{ color: "#fff", fontWeight: "800", fontSize: "17px", letterSpacing: "-0.4px", marginBottom: "5px" }}>{product.name}</h3>
      <p style={{ color: product.color, fontSize: "12px", fontWeight: "600", marginBottom: "12px" }}>{product.tagline}</p>
      <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "13px", lineHeight: "1.65", marginBottom: "20px" }}>{product.description}</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
        {product.features.map(f => (
          <span key={f} style={{
            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
            borderRadius: "6px", padding: "4px 10px",
            fontSize: "11px", color: "rgba(255,255,255,0.45)", fontWeight: "500"
          }}>{f}</span>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <span style={{ color: "#fff", fontWeight: "800", fontSize: "22px" }}>£{product.price.toFixed(2)}</span>
          <span style={{ color: "rgba(255,255,255,0.22)", fontSize: "13px", textDecoration: "line-through", marginLeft: "8px" }}>£{product.oldPrice.toFixed(2)}</span>
        </div>
        <button onClick={handleAdd} style={{
          background: added ? "#22c55e" : (hovered ? product.color : "rgba(255,255,255,0.06)"),
          color: added ? "#fff" : (hovered ? "#000" : "rgba(255,255,255,0.5)"),
          border: "none", borderRadius: "10px", padding: "10px 18px",
          fontSize: "13px", fontWeight: "700", cursor: "pointer",
          transition: "all 0.25s ease", display: "flex", alignItems: "center", gap: "6px"
        }}>
          {added ? <><IconCheck /> Added</> : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

const TrustBar = () => (
  <div style={{
    background: "rgba(255,255,255,0.015)",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    padding: "18px 24px",
    display: "flex", justifyContent: "center",
    gap: "clamp(20px, 4vw, 56px)", flexWrap: "wrap"
  }}>
    {[
      [<IconTruck />, "Free UK & US Shipping"],
      [<IconStar />, "2-5 Day Delivery"],
      [<IconRefresh />, "30 Day Returns"],
      [<IconLock />, "Secure Checkout"],
      [<IconShield />, "Buyer Protection"],
    ].map(([icon, text]) => (
      <div key={text} style={{ display: "flex", alignItems: "center", gap: "7px" }}>
        <span style={{ color: "rgba(255,255,255,0.2)" }}>{icon}</span>
        <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", fontWeight: "500" }}>{text}</span>
      </div>
    ))}
  </div>
);

const Footer = () => (
  <footer style={{
    background: "#030608",
    borderTop: "1px solid rgba(255,255,255,0.05)",
    padding: "40px 24px", textAlign: "center"
  }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "16px" }}>
      <TDLogo size={32} />
      <div style={{ lineHeight: 1 }}>
        <div style={{ fontWeight: "800", fontSize: "15px", letterSpacing: "-0.5px" }}>
          <span style={{ color: "#fff" }}>Tech</span><span style={{ background: "linear-gradient(90deg,#00c6ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Drops</span>
        </div>
        <div style={{ fontSize: "8px", letterSpacing: "2px", color: "rgba(255,255,255,0.25)", fontWeight: "600", marginTop: "2px" }}>SMART TECH. BETTER LIFE.</div>
      </div>
    </div>
    <p style={{ color: "rgba(255,255,255,0.18)", fontSize: "12px" }}>© 2026 TechDrops.co.uk · All rights reserved</p>
    <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "16px" }}>
      {["Privacy", "Terms", "Contact", "FAQ"].map(item => (
        <span key={item} style={{ color: "rgba(255,255,255,0.18)", fontSize: "12px", cursor: "pointer" }}>{item}</span>
      ))}
    </div>
  </footer>
);

export default function TechDrops() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [currency, setCurrency] = useState("GBP");

  const addToCart = (product) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setCartOpen(true);
  };

  const updateQty = (id, qty) => {
    if (qty < 1) return removeItem(id);
    setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
  };

  const removeItem = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#050812", minHeight: "100vh", color: "#fff"
    }}>
      <NavBar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />
      <Hero />
      <TrustBar />

      {/* Products */}
      <div id="products" style={{ maxWidth: "1200px", margin: "0 auto", padding: "80px 24px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(168,85,247,0.07)", border: "1px solid rgba(168,85,247,0.18)",
            borderRadius: "20px", padding: "6px 16px", marginBottom: "20px"
          }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a855f7" }} />
            <span style={{ color: "#a855f7", fontSize: "11px", fontWeight: "700", letterSpacing: "1px" }}>THIS WEEK'S DROPS</span>
          </div>
          <h2 style={{
            color: "#fff", fontWeight: "900", fontSize: "clamp(28px, 5vw, 44px)",
            letterSpacing: "-1px", marginBottom: "12px"
          }}>Products People Can't Stop Buying</h2>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "15px" }}>
            Handpicked gadgets that actually deliver on their promise.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
          {products.map(p => <ProductCard key={p.id} product={p} onAddToCart={addToCart} />)}
        </div>
      </div>

      {/* Social proof */}
      <div style={{
        background: "linear-gradient(135deg, rgba(0,240,255,0.04), rgba(168,85,247,0.04))",
        border: "1px solid rgba(255,255,255,0.05)",
        margin: "0 24px 80px", borderRadius: "20px",
        padding: "48px 24px", textAlign: "center"
      }}>
        <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "2px", marginBottom: "16px", fontWeight: "700" }}>AS SEEN ON</p>
        <div style={{ display: "flex", gap: "40px", justifyContent: "center", flexWrap: "wrap" }}>
          {["TikTok", "Instagram", "YouTube", "Meta"].map(platform => (
            <span key={platform} style={{ color: "rgba(255,255,255,0.2)", fontWeight: "800", fontSize: "18px", letterSpacing: "-0.5px" }}>{platform}</span>
          ))}
        </div>
      </div>

      <Footer />

      <CartDrawer
        cart={cart}
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        onUpdateQty={updateQty}
        onRemove={removeItem}
        currency={currency}
        setCurrency={setCurrency}
      />
    </div>
  );
}
