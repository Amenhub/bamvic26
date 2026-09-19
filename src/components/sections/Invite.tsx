export default function Invite() {
  return (
    <section className="bg-[#F0F0DE] text-brown py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center flex flex-col gap-6 md:gap-8">
        {/* Quote */}
        <h2 className="font-serif italic text-3xl md:text-5xl leading-tight text-brown">
          &ldquo;I have found the one whom my soul loves.&rdquo;
        </h2>

        {/* Small divider */}
        <div className="w-16 h-px bg-orange mx-auto" />

        {/* Body */}
        <p className="text-base md:text-lg leading-relaxed text-brown/80 font-sans">
          To our dear family and closest friends: After years of &ldquo;when&rsquo;s
          the wedding?&rdquo; and &ldquo;what are y&rsquo;all waiting on?&rdquo; We
          are thrilled to finally say: <span className="text-orange font-semibold">THE TIME HAS COME!</span>{" "}
          We can&rsquo;t imagine saying &ldquo;I do&rdquo; without YOU there to
          witness it. We&rsquo;ve waited for this moment, and now we&rsquo;re
          ready to celebrate!
        </p>

        {/* Sign-off */}
        <p className="text-xs uppercase tracking-[0.4em] text-brown/60 mt-4">
          With Love
        </p>

        <h3 className="font-serif text-2xl md:text-3xl text-brown">
          Ayobami &amp; Israel
        </h3>
      </div>
    </section>
  );
}