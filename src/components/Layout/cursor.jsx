 const CustomCursor = () => (
    <div
      className={`fixed w-8 h-8 pointer-events-none z-50 transition-all duration-300 ${
        isHovering ? 'scale-150 bg-blue-600 mix-blend-difference' : 'scale-100 bg-gradient-to-r from-blue-500 to-green-500'
      } rounded-full opacity-70`}
      style={{
        left: cursorPosition.x - 16,
        top: cursorPosition.y - 16,
      }}
    />
  );