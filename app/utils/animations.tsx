"use client";

import { motion } from "framer-motion";

// Animation variants for text elements
export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.6 },
};

export const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export const slideInRight = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

// Stagger container for cards
export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Card animation variants
export const cardAnimation = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

// Button animation variants
export const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" },
};

export const buttonTap = {
  scale: 0.95,
  transition: { duration: 0.1 },
};

// Scroll-triggered animation hook
export const useScrollAnimation = () => {
  return {
    initial: "initial",
    whileInView: "animate",
    viewport: { once: true, margin: "-100px" },
  };
};

// Reusable animated components
export const AnimatedHeading = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.h2
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.h2>
  );
};

export const AnimatedParagraph = ({
  children,
  className = "",
  delay = 0.2,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.p>
  );
};

export const AnimatedButton = ({
  children,
  className = "",
  onClick,
  type = "button",
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  [key: string]: any;
}) => {
  return (
    <motion.button
      type={type}
      className={className}
      whileHover={buttonHover}
      whileTap={buttonTap}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export const AnimatedLink = ({
  children,
  className = "",
  href,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  href: string;
  [key: string]: any;
}) => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const Link = require("next/link").default;
  return (
    <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-block">
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    </motion.div>
  );
};

export const AnimatedCard = ({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => {
  return (
    <motion.article
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {children}
    </motion.article>
  );
};

