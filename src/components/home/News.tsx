'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { useMessages } from '@/lib/i18n/useMessages';

export interface NewsItem {
    date: string;
    content: string;
}

interface NewsProps {
    items: NewsItem[];
    title?: string;
}

export default function News({ items, title }: NewsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.news;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
        >
            <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>
            <ul className="space-y-3">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-500">
                        <span aria-hidden="true" className="mt-0.5 text-accent">•</span>
                        <span className="font-semibold text-primary whitespace-nowrap">{item.date}</span>
                        <ReactMarkdown
                            components={{
                                p: ({ children }) => <span>{children}</span>,
                                strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                            }}
                        >
                            {item.content}
                        </ReactMarkdown>
                    </li>
                ))}
            </ul>
        </motion.section>
    );
}
