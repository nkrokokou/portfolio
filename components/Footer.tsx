export function Footer() {
    return (
        <footer className="relative py-16 text-center text-sm text-muted-foreground border-t border-border/40 flex flex-col items-center justify-center gap-6 overflow-hidden bg-black/10">
            {/* Moving shooting stars */}
            <div className="absolute top-10 right-1/3 w-[2px] h-[40px] bg-gradient-to-b from-white to-transparent opacity-0 animate-shooting-star-custom" style={{ animationDelay: "4s" }} />
            <div className="absolute top-24 left-1/4 w-[2px] h-[30px] bg-gradient-to-b from-white to-transparent opacity-0 animate-shooting-star-custom" style={{ animationDelay: "9s" }} />

            <div className="max-w-3xl mx-auto flex flex-col items-center gap-6 z-10">
                {/* Giant animated gradient branding */}
                <h2 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-[linear-gradient(90deg,var(--blue-500)_0%,var(--purple-500)_50%,var(--blue-500)_100%)] bg-[length:200%_auto] animate-shimmer select-none tracking-tighter opacity-15 mb-2 uppercase">
                    Space Informatik
                </h2>

                <div className="flex flex-col gap-1 text-xs md:text-sm tracking-wide">
                    <p className="font-extrabold text-foreground">SPACE INFORMATIQUE NKRO</p>
                    <p className="font-semibold text-muted-foreground/80">ENTREPRISE INDIVIDUELLE</p>
                    <p className="font-mono text-muted-foreground/60 text-[10px] md:text-xs">RCCM: TG-LFW-01-2024-A10-00944 | NIF: 1001929228</p>
                    <p className="text-muted-foreground/60 text-[10px] md:text-xs">Siège Social: AGOE - NYIVE, Rue CEDEAO, PRES DE L'ECHANGEUR</p>
                </div>
                
                <p className="text-[11px] text-muted-foreground/40 mt-4">© {new Date().getFullYear()} Space Informatik. Tous droits réservés.</p>
            </div>
        </footer>
    );
}
