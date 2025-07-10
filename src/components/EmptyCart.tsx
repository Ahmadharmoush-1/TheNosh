export const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <div className="mb-6">
        <div className="animate-bounce inline-block text-6xl mb-4">
          🍔
        </div>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-2">
        Your stomach is empty too 😋
      </h3>
      <p className="text-muted-foreground text-lg mb-4">
        Let's fix that with some delicious foodd!
      </p>
      <div className="flex justify-center space-x-2 text-3xl animate-pulse">
        <span>🍕</span>
        <span>🍟</span>
        <span>🥤</span>
      </div>
    </div>
  );
};
