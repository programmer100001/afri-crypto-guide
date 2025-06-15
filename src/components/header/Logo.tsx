
export const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center transition-transform duration-200 hover:scale-110">
        <span className="text-white font-bold text-sm">₿</span>
      </div>
      <a href="/" className="text-xl font-bold text-white hover:text-orange-400 transition-all duration-200 hover:scale-105">
        CryptoKenya
      </a>
    </div>
  );
};
