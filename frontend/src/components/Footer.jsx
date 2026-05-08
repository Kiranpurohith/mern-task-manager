const Footer = () => {
  return (
    <div className="flex justify-center content-center gap-4 flex-wrap p-2 text-sm">
      <h1>Made with ❤ by Kiran |</h1>

      <a
        href="https://github.com/Kiranpurohith"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        GitHub |
      </a>

      <a
        href="https://www.linkedin.com/in/kiran-purohith-62184536b"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        LinkedIn |
      </a>

      <h1>
        Note: This is a personal project built using the MERN stack for
        learning and demo purposes.
      </h1>
    </div>
  );
};

export default Footer;