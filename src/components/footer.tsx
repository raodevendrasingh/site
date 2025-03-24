import { Copyright } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="flex items-center gap-1 border-t text-muted-foreground w-full py-5 mt-5">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs w-full">
                <span className="flex items-center space-x-2">
                    <Copyright size={12} />
                    <p className="">
                        {new Date().getFullYear()} Devendra Singh Rao
                    </p>
                </span>
                <span className="flex items-center">UTC +5:30</span>
            </div>
        </footer>
    );
};
