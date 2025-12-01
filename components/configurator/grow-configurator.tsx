"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CultivationMethod, ExperienceLevel } from "@/lib/types";

const spaceSizes = ["60x60", "80x80", "100x100", "120x120"];
const methods: CultivationMethod[] = ["terre", "coco", "hydro", "aero"];
const levels: ExperienceLevel[] = ["debutant", "confirme", "expert"];

const methodLabels = {
  terre: "Terre",
  coco: "Coco",
  hydro: "Hydro",
  aero: "Aéro",
};

const levelLabels = {
  debutant: "Débutant",
  confirme: "Confirmé",
  expert: "Expert",
};

interface ConfigItem {
  name: string;
  price: number;
  required: boolean;
  selected: boolean;
}

export function GrowConfigurator() {
  const [spaceSize, setSpaceSize] = React.useState("80x80");
  const [method, setMethod] = React.useState<CultivationMethod>("hydro");
  const [budget, setBudget] = React.useState(450);
  const [level, setLevel] = React.useState<ExperienceLevel>("confirme");

  const [configuration, setConfiguration] = React.useState<ConfigItem[]>([
    { name: "Tente Dark Room 80x80", price: 89.0, required: true, selected: true },
    { name: "BignicLED X100", price: 159.0, required: true, selected: true },
    { name: "Kit Hydro NFT Basic", price: 129.0, required: true, selected: true },
    { name: "Extracteur TT 100mm", price: 45.0, required: true, selected: true },
    { name: "Pack Nutriments APTUS", price: 65.0, required: false, selected: false },
  ]);

  const totalPrice = configuration
    .filter((item) => item.selected)
    .reduce((sum, item) => sum + item.price, 0);

  const toggleItem = (index: number) => {
    if (configuration[index].required) return;
    setConfiguration((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">CONFIGURATEUR DE CULTURE</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Configuration Options */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Space Size */}
          <div>
            <label className="block text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase mb-2">
              ESPACE
            </label>
            <div className="space-y-1">
              {spaceSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSpaceSize(size)}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm font-mono border transition-colors",
                    spaceSize === size
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                      : "border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--background-elevated)]"
                  )}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Method */}
          <div>
            <label className="block text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase mb-2">
              MÉTHODE
            </label>
            <div className="space-y-1">
              {methods.map((m) => (
                <button
                  key={m}
                  onClick={() => setMethod(m)}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm font-mono border transition-colors flex items-center gap-2",
                    method === m
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                      : "border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--background-elevated)]"
                  )}
                >
                  <span className={cn("w-3 h-3 rounded-full border-2", method === m ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]" : "border-[var(--border-default)]")} />
                  {methodLabels[m]}
                </button>
              ))}
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase mb-2">
              BUDGET
            </label>
            <div className="p-3 border border-[var(--border-default)]">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => setBudget(Math.max(100, budget - 50))}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                >
                  ◀
                </button>
                <span className="font-mono text-sm font-bold text-[var(--text-primary)]">
                  {budget}€
                </span>
                <button
                  onClick={() => setBudget(budget + 50)}
                  className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)]"
                >
                  ▶
                </button>
              </div>
              <input
                type="range"
                min="100"
                max="2000"
                step="50"
                value={budget}
                onChange={(e) => setBudget(parseInt(e.target.value))}
                className="w-full h-1 bg-[var(--background-elevated)] appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:bg-[var(--accent-primary)] [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>
          </div>

          {/* Level */}
          <div>
            <label className="block text-xs font-mono font-semibold text-[var(--text-secondary)] uppercase mb-2">
              NIVEAU
            </label>
            <div className="space-y-1">
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={cn(
                    "w-full px-3 py-2 text-left text-sm font-mono border transition-colors flex items-center gap-2",
                    level === l
                      ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                      : "border-[var(--border-default)] text-[var(--text-secondary)] hover:bg-[var(--background-elevated)]"
                  )}
                >
                  <span className={cn("w-3 h-3 rounded-full border-2", level === l ? "border-[var(--accent-primary)] bg-[var(--accent-primary)]" : "border-[var(--border-default)]")} />
                  {levelLabels[l]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-[var(--border-default)]" />

        {/* Configuration Results */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-mono font-semibold text-[var(--text-primary)] uppercase">
              CONFIGURATION RECOMMANDÉE
            </h3>
            <span className="text-lg font-mono font-bold text-[var(--accent-primary)]">
              TOTAL: {formatPrice(totalPrice)}
            </span>
          </div>

          <div className="space-y-2">
            {configuration.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 border border-[var(--border-default)] hover:bg-[var(--background-elevated)] transition-colors"
              >
                <input
                  type="checkbox"
                  checked={item.selected}
                  onChange={() => toggleItem(index)}
                  disabled={item.required}
                  className="w-4 h-4 accent-[var(--accent-primary)]"
                />
                <div className="flex-1 flex items-center justify-between">
                  <span className={cn("text-sm font-mono", item.selected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]")}>
                    {item.name}
                  </span>
                  <span className="text-sm font-mono font-bold text-[var(--text-primary)]">
                    {formatPrice(item.price)}
                  </span>
                </div>
                <Button variant="outline" size="sm">
                  {item.required ? "Modifier" : "+ Ajouter"}
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-default)]">
          <Button variant="outline" className="flex-1">
            VOIR DÉTAILS COMPLETS
          </Button>
          <Button className="flex-1">AJOUTER TOUT AU PANIER</Button>
        </div>
      </CardContent>
    </Card>
  );
}
