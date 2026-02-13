import { Link } from "wouter";
import { Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white py-16 md:py-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-green-600/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex items-center gap-2 mb-6 bg-white rounded-lg p-3 w-fit shadow-lg"
            >
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663256672386/xMegmORGETDJlabL.png" alt="ChainSync" className="h-12 w-auto" />
            </motion.div>
            <p className="text-gray-300 leading-relaxed">
              Environmental emergency response in under 90 seconds.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">Product</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/how-it-works">
                  <a className="hover:text-white transition-all hover:translate-x-1 inline-block duration-300">How It Works</a>
                </Link>
              </li>
              <li>
                <Link href="/technology">
                  <a className="hover:text-white transition-all hover:translate-x-1 inline-block duration-300">Technology</a>
                </Link>
              </li>
              <li>
                <Link href="/roadmaps">
                  <a className="hover:text-white transition-all hover:translate-x-1 inline-block duration-300">Roadmaps</a>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-200">Solutions</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/use-cases">
                  <a className="hover:text-white transition-all hover:translate-x-1 inline-block duration-300">Use Cases</a>
                </Link>
              </li>
              <li>
                <Link href="/insights">
                  <a className="hover:text-white transition-all hover:translate-x-1 inline-block duration-300">Insights</a>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-6 text-lg bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-200">Company</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <Link href="/contact">
                  <a className="hover:text-white transition-all hover:translate-x-1 inline-block duration-300">Contact</a>
                </Link>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-white transition-all hover:translate-x-1 inline-block duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700/50 pt-10 flex flex-col md:flex-row items-center justify-between"
        >
          <p className="text-gray-400 mb-6 md:mb-0">
            © 2024 ChainSync. All rights reserved. Early Access Program.
          </p>
          <div className="flex gap-6">
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ duration: 0.2 }}
              href="https://linkedin.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, y: -2 }}
              transition={{ duration: 0.2 }}
              href="mailto:contact@chainsync.com"
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
