export function Footer() {
    return (
        <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/40 flex flex-col items-center justify-center gap-4">
            <div className="flex flex-col gap-1">
                <p className="font-semibold">SPACE INFORMATIQUE NKRO</p>
                <p>ENTREPRISE INDIVIDUELLE</p>
                <p>RCCM: TG-LFW-01-2024-A10-00944 | NIF: 1001929228</p>
                <p>Siège Social: AGOE - NYIVE, Rue CEDEAO, PRES DE L'ECHANGEUR</p>
            </div>
            <p>© {new Date().getFullYear()} Space Informatik. Tous droits réservés.</p>
        </footer>
    );
}
