const Footer = () => {
    return (
        <footer className="border-t border-[#202020] mt-20 py-10 flex flex-col lg:flex-row justify-between items-center gap-5">
            <p className="text-sm text-center">© {new Date().getFullYear()} CodeOVIK. All rights reserved.</p>
        </footer>
    );
};

export default Footer;