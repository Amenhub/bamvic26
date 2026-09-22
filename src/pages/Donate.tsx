import { motion, AnimatePresence } from "framer-motion";
import PageHero from "../components/sections/PageHero";
import { useCopyToClipboard } from "../hooks/useCopyToClipboard";
import { bankAccounts, type BankAccount } from "../data/donation";

function BankCard({ account }: { account: BankAccount }) {
  const { copy, copiedValue } = useCopyToClipboard();
  const isCopied = copiedValue === account.accountNumber;

  return (
    <div className="rounded-3xl border border-brown/10 bg-white p-6 md:p-8 flex flex-col gap-5 hover:shadow-[0_15px_40px_-15px_rgba(59,35,20,0.2)] transition-shadow duration-300">
      {/* Bank name */}
      <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-orange">
        {account.bank}
      </p>

      {/* Account name */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brown/50 mb-1">
          Account Name
        </p>
        <p className="font-serif text-xl md:text-2xl text-brown">
          {account.accountName}
        </p>
      </div>

      {/* Account number + copy button */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brown/50 mb-1">
          Account Number
        </p>
        <div className="flex items-center gap-3">
          <p className="font-mono text-2xl md:text-3xl tracking-wider text-brown">
            {account.accountNumber}
          </p>

          <button
            onClick={() => copy(account.accountNumber)}
            aria-label={`Copy ${account.bank} account number`}
            className="relative ml-auto w-10 h-10 rounded-full border border-brown/15 hover:border-orange hover:bg-orange/5 flex items-center justify-center transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isCopied ? (
                <motion.svg
                  key="check"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D9720C"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </motion.svg>
              ) : (
                <motion.svg
                  key="copy"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#3B2314"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* "Copied!" flash */}
        <div className="h-5 mt-1">
          <AnimatePresence>
            {isCopied && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-[10px] uppercase tracking-[0.3em] text-orange"
              >
                Copied to clipboard
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default function Donate() {
  return (
    <>
      <PageHero
        eyebrow="With Gratitude"
        title="Send a Gift"
        subtitle="Ayobami & Israel"
        image="/images/donate-hero.jpg"
      />

      <section className="bg-white py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center gap-8 md:gap-12">
          {/* Intro */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <p className="text-orange text-xs font-bold uppercase tracking-[0.5em]">
              A Love Gift
            </p>
            <h2 className="font-serif text-3xl md:text-5xl text-brown leading-tight">
              Thank you for blessing us
            </h2>
            <p className="text-base md:text-lg text-brown/70 leading-relaxed">
              Your presence at our wedding is the greatest gift we could ask
              for. If you would also like to bless us with a love gift, you can
              send it to either of the accounts below. We are deeply grateful
              for your kindness.
            </p>
          </div>

          {/* Account cards */}
          <div className="grid md:grid-cols-2 gap-6 w-full">
            {bankAccounts.map((account) => (
              <BankCard key={account.accountNumber} account={account} />
            ))}
          </div>

          {/* Closing note */}
          <div className="flex flex-col gap-3 mt-4">
            <p className="text-xs uppercase tracking-[0.3em] text-brown/40">
              Bank Transfer &middot; Naira &middot; Thank You
            </p>
            <p className="font-script text-3xl md:text-4xl text-orange mt-2">
              We love you
            </p>
          </div>
        </div>
      </section>
    </>
  );
}