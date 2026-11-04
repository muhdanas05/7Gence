interface EyebrowProps {
    children: React.ReactNode;
}

const Eyebrow = ({ children }: EyebrowProps) => (
    <span
        className="inline-flex rounded-full border border-white/10 px-4 py-[7px] text-[11px] font-semibold uppercase text-[#8A8F98]"
        style={{ fontFamily: "var(--font-manrope)", letterSpacing: "0.18em" }}
    >
        {children}
    </span>
);

export default Eyebrow;
