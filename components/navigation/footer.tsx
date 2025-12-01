import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border-default)] bg-[var(--background-surface)]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--accent-primary)] flex items-center justify-center">
                <span className="text-[var(--background-primary)] font-mono font-bold text-sm">
                  LV
                </span>
              </div>
              <span className="font-mono font-bold text-[var(--text-primary)]">
                L'OR VERT
              </span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              Matériel de culture professionnel pour cultivateurs exigeants.
            </p>
            <div className="flex items-center gap-2 text-xs text-[var(--text-muted)] font-mono">
              <span className="led-indicator led-available"></span>
              <span>Service client actif</span>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="font-mono font-bold text-sm text-[var(--text-primary)] uppercase mb-4">
              BOUTIQUE
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Éclairage LED", href: "/boutique/eclairage" },
                { label: "Systèmes Hydro", href: "/boutique/systemes" },
                { label: "Nutrition", href: "/boutique/nutrition" },
                { label: "Climat", href: "/boutique/climat" },
                { label: "Tout le catalogue", href: "/boutique" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-mono font-bold text-sm text-[var(--text-primary)] uppercase mb-4">
              RESSOURCES
            </h3>
            <ul className="space-y-2">
              {[
                { label: "Le Labo", href: "/labo" },
                { label: "Configurateur", href: "/configurateur" },
                { label: "Guides techniques", href: "/labo/guides" },
                { label: "FAQ", href: "/faq" },
                { label: "Support", href: "/support" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-mono font-bold text-sm text-[var(--text-primary)] uppercase mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <div className="text-xs text-[var(--text-muted)] font-mono mb-1">
                  EMAIL
                </div>
                <a
                  href="mailto:contact@lorvert.fr"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono"
                >
                  contact@lorvert.fr
                </a>
              </li>
              <li>
                <div className="text-xs text-[var(--text-muted)] font-mono mb-1">
                  TÉLÉPHONE
                </div>
                <a
                  href="tel:+33123456789"
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors font-mono"
                >
                  01 23 45 67 89
                </a>
              </li>
              <li>
                <div className="text-xs text-[var(--text-muted)] font-mono mb-1">
                  HORAIRES
                </div>
                <div className="text-sm text-[var(--text-secondary)] font-mono">
                  Lun-Ven: 9h-18h
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-default)] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[var(--text-muted)] font-mono">
            © 2025 L'Or Vert. Tous droits réservés.
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "Mentions légales", href: "/mentions-legales" },
              { label: "CGV", href: "/cgv" },
              { label: "Confidentialité", href: "/confidentialite" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-[var(--text-muted)] hover:text-[var(--accent-primary)] transition-colors font-mono"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
