export const Footer = () => {
    const links = [
        { name: "twitter", url: "https://x.com/tminusdev" },
        {
            name: "linkedin",
            url: "https://www.linkedin.com/in/raodevendrasingh",
        },
        { name: "github", url: "https://github.com/raodevendrasingh" },
    ];

    return (
        <footer className="mt-auto pt-12 pb-4 text-center">
            <div className="flex justify-center space-x-4 tracking-tight">
                {links.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary/60 hover:text-primary transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </footer>
    );
};
