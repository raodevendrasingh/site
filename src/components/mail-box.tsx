"use client";

import { Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

type CopyBoxProps = {
	text: string;
};

export const MailBox: React.FC<CopyBoxProps> = ({ text }) => {
	const [copied, setCopied] = useState(false);

	const handler = () => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
		window.open(`mailto:${text}`, "_blank");
	};

	return (
		<motion.div
			className="flex items-center gap-2 hover:text-primary/85 bg-muted px-4 py-2 rounded-full cursor-pointer hover:bg-muted/80 transition-colors duration-200 relative"
			onClick={handler}
			whileTap={{ scale: 0.95 }}
			animate={copied ? { scale: [1, 1.05, 1] } : {}}
			transition={{ duration: 0.2 }}
		>
			<Send size={20} />
			<span className="font-medium text-sm">{text}</span>
			{copied && (
				<motion.span
					className="absolute top-1.5 left-72 translate-x-1/2 bg-accent/10 text-primary px-2 py-1 rounded-full text-sm"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0 }}
				>
					Copied!
				</motion.span>
			)}
		</motion.div>
	);
};
